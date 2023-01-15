using AutoMapper;
using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Entities;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Services
{
    public class PropertyService : IPropertyService
    {
        private readonly IPropertyRepo _propertyRepo;
        private readonly IMapper _mapper;

        public PropertyService(IPropertyRepo propertyRepo, IMapper mapper)
        {
            _propertyRepo = propertyRepo;
            _mapper = mapper;
        }

        public async Task<GetPropertyDto> CreateProperty(CreatePropertyDto createPropertyDto)
        {
            try
            {
                var propertyData = _mapper.Map<PropertyData>(createPropertyDto);
                var property = new Property();
                property.PropertyData = propertyData;
                property.Id = Guid.NewGuid();
                property.PropertyData.Title = getPropertyTitle(
                    property.PropertyData.PropertyDetails.NoOfBeds,
                    property.PropertyData.PropertyType.ToString(),
                    property.PropertyData.PropertyListingType);

                //Use Api to get the Agent from the logged in account and update property agent details

                await _propertyRepo.CreateProperty(property);
                var getPropertyDto = _mapper.Map<GetPropertyDto>(property);

                return await Task.FromResult(getPropertyDto);

                string getPropertyTitle(int noOfBedrooms, string propertyType, PropertyListingType propertyListingType)
                {
                    string bed = noOfBedrooms == 1 ? $"{noOfBedrooms} bed" : $"{noOfBedrooms} beds";
                    return $"{bed} {propertyType} {getListingType(propertyListingType)}";
                };

                string getListingType(PropertyListingType propertyListingType)
                {
                    return propertyListingType switch
                    {
                        PropertyListingType.ForSale => "for sale",
                        PropertyListingType.ToLet => "to let",
                        PropertyListingType.ShortLet => "short let",
                        _ => string.Empty,
                    };
                }

            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<PagedResponse<GetPropertyDto>> FilterPropertiesByAgentId(PaginationFilter filter, Guid agentId)
        {
            var properties = await _propertyRepo.FilterPropertiesByAgentId(filter, agentId);
            var getPropertiesDto = _mapper.Map<PagedResponse<GetPropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<GetPropertyDto>> FilterPropertiesByCity(PaginationFilter filter, string city)
        {
            var properties = await _propertyRepo.FilterPropertiesByCity(filter, city);
            var getPropertiesDto = _mapper.Map<PagedResponse<GetPropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<GetPropertyDto>> FilterPropertiesByListingType(PaginationFilter filter, PropertyListingType propertyListingType)
        {
            var properties = await _propertyRepo.FilterPropertiesByListingType(filter, propertyListingType);
            var getPropertiesDto = _mapper.Map<PagedResponse<GetPropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<GetPropertyDto>> FilterPropertiesByPropertyType(PaginationFilter filter, PropertyType propertyType)
        {
            var properties = await _propertyRepo.FilterPropertiesByPropertyType(filter, propertyType);
            var getPropertiesDto = _mapper.Map<PagedResponse<GetPropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<GetPropertyDto>> FilterPropertiesByState(PaginationFilter filter, States state)
        {
            var properties = await _propertyRepo.FilterPropertiesByState(filter, state);
            var getPropertiesDto = _mapper.Map<PagedResponse<GetPropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<GetPropertyDto>> GetAllProperties(PaginationFilter filter)
        {
            var properties = await _propertyRepo.GetAllProperties(filter);
            var getPropertiesDto = _mapper.Map<PagedResponse<GetPropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<GetPropertyDto> GetPropertyById(Guid Id)
        {
            var property = await _propertyRepo.GetPropertyById(Id);
            var getPropertyDto = _mapper.Map<GetPropertyDto>(property);
            return getPropertyDto;
        }

        public async Task<GetPropertyDto> UpdateProperty(Guid id, CreatePropertyDto property)
        {
            var getPropertyToUpdate = await _propertyRepo.GetPropertyById(id);

            if (getPropertyToUpdate != null)
            {
                await _propertyRepo.UpdateProperty(getPropertyToUpdate);
                var getPropertyDto = _mapper.Map<GetPropertyDto>(getPropertyToUpdate);
                return await Task.FromResult(getPropertyDto);
            }
            else
            {
                //todo: implement logger to capture error logs
                throw new ArgumentNullException(nameof(UpdateProperty));
            }
        }
    }
}
