using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Entities;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Data
{
    public interface IPropertyRepo
    {
        bool SaveChanges();

        Task<PagedResponse<Property>> GetAllProperties(PaginationFilter filter);

        Task<Property?> GetPropertyById(Guid id);

        Task CreateProperty(Property property);

        Task DeleteProperty(Guid id);

        Task UpdateProperty(Property property);

        Task<IEnumerable<Property>> FilterPropertiesByLocation(PaginationFilter filter, string location);

        Task<IEnumerable<Property>> FilterPropertiesByCity (PaginationFilter filter, string city);

        Task<IEnumerable<Property>> FilterPropertiesByAgentId(PaginationFilter filter, Guid agentId);

        Task<IEnumerable<Property>> FilterPropertiesByState(PaginationFilter filter, string state);
        Task<IEnumerable<Property>> FilterPropertiesByListingType(PaginationFilter filter, PropertyListingType propertyListingType);
        Task<IEnumerable<Property>> FilterPropertiesByPropertyType(PaginationFilter filter, string propertyType);
    }
}
