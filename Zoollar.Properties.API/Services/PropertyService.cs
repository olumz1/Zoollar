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
        private readonly IDateTimeProvider _dateTimeProvider;

        public PropertyService(IPropertyRepo propertyRepo, IMapper mapper, IDateTimeProvider dateTimeProvider)
        {
            _propertyRepo = propertyRepo;
            _mapper = mapper;
            _dateTimeProvider = dateTimeProvider;
        }

        public async Task<PropertyDto> CreateProperty(CreatePropertyDto createPropertyDto)
        {
            try
            {
                var property = UpdateAndCreatePropertyMapper(createPropertyDto, null);

                await _propertyRepo.CreateProperty(property);
                var getPropertyDto = _mapper.Map<PropertyDto>(property);

                return await Task.FromResult(getPropertyDto);
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<PagedResponse<PropertyDto>> FilterPropertiesByAgentId(PaginationFilter filter, Guid agentId)
        {
            var properties = await _propertyRepo.FilterPropertiesByAgentId(filter, agentId);
            var getPropertiesDto = _mapper.Map<PagedResponse<PropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<PropertyDto>> FilterPropertiesByCity(PaginationFilter filter, string city)
        {
            var properties = await _propertyRepo.FilterPropertiesByCity(filter, city);
            var getPropertiesDto = _mapper.Map<PagedResponse<PropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<PropertyDto>> FilterPropertiesByListingType(PaginationFilter filter, PropertyListingType propertyListingType)
        {
            var properties = await _propertyRepo.FilterPropertiesByListingType(filter, propertyListingType);
            var getPropertiesDto = _mapper.Map<PagedResponse<PropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<PropertyDto>> FilterPropertiesByPropertyType(PaginationFilter filter, PropertyType propertyType)
        {
            var properties = await _propertyRepo.FilterPropertiesByPropertyType(filter, propertyType);
            var getPropertiesDto = _mapper.Map<PagedResponse<PropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<PropertyDto>> FilterPropertiesByState(PaginationFilter filter, States state)
        {
            var properties = await _propertyRepo.FilterPropertiesByState(filter, state);
            var getPropertiesDto = _mapper.Map<PagedResponse<PropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PagedResponse<PropertyDto>> GetAllProperties(PaginationFilter filter)
        {
            var properties = await _propertyRepo.GetAllProperties(filter);
            var getPropertiesDto = _mapper.Map<PagedResponse<Property>,PagedResponse<PropertyDto>>(properties);
            return getPropertiesDto;
        }

        public async Task<PropertyDto> GetPropertyById(Guid Id)
        {
            var property = await _propertyRepo.GetPropertyById(Id);
            var getPropertyDto = _mapper.Map<PropertyDto>(property);
            return getPropertyDto;
        }

        public async Task<PropertyDto> UpdateProperty(Guid id, CreatePropertyDto property)
        {
            var getPropertyToUpdate = await _propertyRepo.GetPropertyById(id);

            if (getPropertyToUpdate != null)
            {
                UpdateAndCreatePropertyMapper(property, getPropertyToUpdate);
                await _propertyRepo.UpdateProperty(getPropertyToUpdate);
                var getPropertyDto = _mapper.Map<PropertyDto>(getPropertyToUpdate);
                return await Task.FromResult(getPropertyDto);
            }
            else
            {
                //todo: implement logger to capture error logs
                throw new ArgumentNullException(nameof(UpdateProperty));
            }
        }

        private Property UpdateAndCreatePropertyMapper(CreatePropertyDto createPropertyDto, Property? getPropertyToUpdate = null)
        {
            var propertyData = _mapper.Map<PropertyData>(createPropertyDto);
            if (getPropertyToUpdate == null)
            {
                var property = new Property();
                property.PropertyData = propertyData;
                property.Id = Guid.NewGuid();
                property.PropertyData.Title = getPropertyTitle(
                    property.PropertyData.PropertyDetails.NoOfBeds,
                    property.PropertyData.PropertyType.ToString(),
                    property.PropertyData.PropertyListingType);
                property.PropertyData.CreatedTime = _dateTimeProvider.GetDateTimeNow();

                //Use Api to get the Agent from the logged in account and update property agent details
                return property;
            }
            else 
            {
                getPropertyToUpdate.PropertyData = propertyData;
                getPropertyToUpdate.PropertyData.Title = getPropertyTitle(
                createPropertyDto.PropertyDetails.NoOfBeds,
                createPropertyDto.PropertyType.ToString(),
                createPropertyDto.PropertyListingType);
                getPropertyToUpdate.PropertyData.LastUpdatedTime = _dateTimeProvider.GetDateTimeNow();

                return getPropertyToUpdate;
            }

            string getPropertyTitle(long noOfBedrooms, string propertyType, PropertyListingType propertyListingType)
            {
                string bed = noOfBedrooms == 1 ? $"{noOfBedrooms} bed" : $"{noOfBedrooms} beds";
                return $"{bed} {propertyType} {getListingType(propertyListingType)}".ToLowerInvariant();
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
    }
}
