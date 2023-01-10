using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models.Entities;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Data
{
    public interface IPropertyRepo
    {
        bool SaveChanges();

        Task<PagedResponse<Property>> GetAllProperties(PaginationFilter filter);

        Task<Property> GetPropertyById(Guid id);

        Task CreateProperty(Property property);

        Task DeleteProperty(Guid id);

        Task UpdateProperty(Property property);

        Task<IEnumerable<Property>> FilterPropertiesByLocation(string location);

        Task<IEnumerable<Property>> FilterPropertiesByCity (string city);

        Task<IEnumerable<Property>> FilterPropertiesByAgentId(Guid AgentId);
    }
}
