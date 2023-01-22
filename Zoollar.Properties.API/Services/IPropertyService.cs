using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Services
{
    public interface IPropertyService
    {
        Task<PagedResponse<PropertyDto>> GetAllProperties(PaginationFilter filter);
        Task<PropertyDto> CreateProperty(CreatePropertyDto createPropertyDto);
        Task<PropertyDto> GetPropertyById(Guid Id);
        Task<PropertyDto> UpdateProperty(Guid id, CreatePropertyDto property);
        Task<PagedResponse<PropertyDto>> FilterPropertiesByCity(PaginationFilter filter, string city);
        Task<PagedResponse<PropertyDto>> FilterPropertiesByListingType(PaginationFilter filter, PropertyListingType propertyListingType);
        Task<PagedResponse<PropertyDto>> FilterPropertiesByPropertyType(PaginationFilter filter, PropertyType propertyListingType);
        Task<PagedResponse<PropertyDto>> FilterPropertiesByState(PaginationFilter filter, States city);
        Task<PagedResponse<PropertyDto>> FilterPropertiesByAgentId(PaginationFilter filter, Guid agentId);
    }
}
