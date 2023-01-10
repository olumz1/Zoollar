using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Services
{
    public interface IPropertyService
    {
        Task<PagedResponse<GetPropertyDto>> GetAllProperties(PaginationFilter filter);
        Task<GetPropertyDto> CreateProperty(CreatePropertyDto createPropertyDto);
        Task<GetPropertyDto> GetPropertyById(Guid Id);
        Task<GetPropertyDto> UpdateProperty(Guid id, CreatePropertyDto property);
        Task<PagedResponse<GetPropertyDto>> FilterPropertiesByCity(PaginationFilter filter, string city);
        Task<PagedResponse<GetPropertyDto>> FilterPropertiesByListingType(PaginationFilter filter, PropertyListingType propertyListingType);
        Task<PagedResponse<GetPropertyDto>> FilterPropertiesByPropertyType(PaginationFilter filter, PropertyType propertyListingType);
        Task<PagedResponse<GetPropertyDto>> FilterPropertiesByState(PaginationFilter filter, string city);
        Task<PagedResponse<GetPropertyDto>> FilterPropertiesByAgentId(PaginationFilter filter, Guid agentId);
    }
}
