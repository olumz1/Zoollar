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

        public Task<PagedResponse<GetPropertyDto>> FilterPropertiesByAgentId(PaginationFilter filter, Guid agentId)
        {
            var properties = await _propertyRepo.FilterPropertiesByAgentId(filter, agentId);
            var getPropertiesDto = _mapper.Map<PagedResponse<GetPropertyDto>>(properties);
            return getPropertiesDto;
        }

        public Task<PagedResponse<GetPropertyDto>> FilterPropertiesByCity(PaginationFilter filter, string city)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResponse<GetPropertyDto>> FilterPropertiesByListingType(PaginationFilter filter, PropertyListingType propertyListingType)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResponse<GetPropertyDto>> FilterPropertiesByPropertyType(PaginationFilter filter, PropertyType propertyListingType)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResponse<GetPropertyDto>> FilterPropertiesByState(PaginationFilter filter, string city)
        {
            throw new NotImplementedException();
        }

        public async Task<PagedResponse<GetPropertyDto>> GetAllProperties(PaginationFilter filter)
        {
            var properties = await _propertyRepo.GetAllProperties(filter);
            var getPropertiesDto = _mapper.Map<PagedResponse<GetPropertyDto>>(properties);
            return getPropertiesDto;
        }

        public Task<GetPropertyDto> GetPropertyById(Guid Id)
        {
            throw new NotImplementedException();
        }

        public Task<GetPropertyDto> UpdateProperty(Guid id, CreatePropertyDto property)
        {
            throw new NotImplementedException();
        }
    }
}
