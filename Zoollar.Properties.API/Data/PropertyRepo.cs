using Zoollar.Properties.API.Models.Entities;

namespace Zoollar.Properties.API.Data
{
    public class PropertyRepo : IPropertyRepo
    {
        public Task CreateProperty(Property property)
        {
            throw new NotImplementedException();
        }

        public Task DeleteProperty(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> GetAllProperties()
        {
            throw new NotImplementedException();
        }

        public Task<Property> GetPropertyById(Guid id)
        {
            throw new NotImplementedException();
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public Task UpdateProperty(Property property)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> FilterPropertiesByLocation(string location) 
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> FilterPropertiesByCity(string city)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> FilterPropertiesByAgentId(Guid AgentId)
        {
            throw new NotImplementedException();
        }
    }
} 
