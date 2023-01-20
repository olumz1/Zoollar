using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Entities;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Tests
{
    public class FakePropertyRepo : IPropertyRepo
    {
        private PropertiesDbContext fakePropertyDbContext;

        public FakePropertyRepo(PropertiesDbContext fakePropertyDbContext)
        {
            this.fakePropertyDbContext = fakePropertyDbContext;
        }

        public async Task CreateProperty(Property property)
        {
            await Task.FromResult(this.fakePropertyDbContext.Add(property));
            SaveChanges();
        }

        public Task DeleteProperty(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> FilterPropertiesByAgentId(PaginationFilter filter, Guid agentId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> FilterPropertiesByCity(PaginationFilter filter, string city)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> FilterPropertiesByListingType(PaginationFilter filter, PropertyListingType propertyListingType)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> FilterPropertiesByLocation(PaginationFilter filter, string location)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> FilterPropertiesByPropertyType(PaginationFilter filter, PropertyType propertyType)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Property>> FilterPropertiesByState(PaginationFilter filter, States state)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResponse<Property>> GetAllProperties(PaginationFilter filter)
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
    }
}
