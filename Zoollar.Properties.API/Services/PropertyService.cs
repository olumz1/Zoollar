using AutoMapper;
using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
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

        public Task<GetPropertyDto> CreateProperty(CreatePropertyDto createPropertyDto)
        {
            throw new NotImplementedException();
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

        public async Task<PagedResponse<GetPropertyDto>> FilterPropertiesByState(PaginationFilter filter, string state)
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

        public Task<GetPropertyDto> UpdateProperty(Guid id, CreatePropertyDto property)
        {
            throw new NotImplementedException();
        }
    }
}
