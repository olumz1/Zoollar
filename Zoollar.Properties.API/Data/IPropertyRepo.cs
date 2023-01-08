using Zoollar.Properties.API.Models.Entities;

namespace Zoollar.Properties.API.Data
{
    public interface IPropertyRepo
    {
        bool SaveChanges();

        Task<IEnumerable<Property>> GetAllProperties();

        Task<Property> GetPropertyById(Guid id);

        Task CreateProperty(Property property);

        Task DeleteProperty(Guid id);

        Task UpdateProperty(Property property);

        Task<IEnumerable<Property>> FilterPropertiesByLocation(string location);

        Task<IEnumerable<Property>> FilterPropertiesByCity (string city);

        Task<IEnumerable<Property>> GetPropertiesByAgentId(Guid AgentId);

    }
}
