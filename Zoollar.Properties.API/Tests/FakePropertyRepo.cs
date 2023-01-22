using Microsoft.EntityFrameworkCore;
using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Entities;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Tests
{
    public class FakePropertyRepo : IPropertyRepo
    {
        private TestDbContext fakePropertyDbContext;

        public FakePropertyRepo(TestDbContext fakePropertyDbContext)
        {
            this.fakePropertyDbContext = fakePropertyDbContext;
        }

        public async Task CreateProperty(Property property)
        {
            await Task.FromResult(this.fakePropertyDbContext.Add(property));
            SaveChanges();
        }

        public async Task DeleteProperty(Guid id)
        {
            var propertyToDelete = GetPropertyById(id);
            if (propertyToDelete != null)
            {
                fakePropertyDbContext.Remove(propertyToDelete);
            }
            fakePropertyDbContext.SaveChanges();
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByAgentId(PaginationFilter filter, Guid agentId)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(fakePropertyDbContext.Properties
                .Where(x => x.PropertyData.PropertyAgent.AgentId == agentId),
                filter.PageNumber, filter.PageSize));
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByCity(PaginationFilter filter, string city)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(fakePropertyDbContext.Properties
                .Where(x => x.PropertyData.PropertyDetails.Address.City == city),
                filter.PageNumber, filter.PageSize));
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByListingType(PaginationFilter filter, PropertyListingType propertyListingType)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(fakePropertyDbContext.Properties
                .Where(x => x.PropertyData.PropertyListingType == propertyListingType),
                filter.PageNumber, filter.PageSize));
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByLocation(PaginationFilter filter, string location)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(fakePropertyDbContext.Properties
                .Where(x => x.PropertyData.PropertyDetails.Address.AddressLine.Contains(location)),
                filter.PageNumber, filter.PageSize));
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByPropertyType(PaginationFilter filter, PropertyType propertyType)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(fakePropertyDbContext.Properties
                .Where(x => x.PropertyData.PropertyType == propertyType),
                filter.PageNumber, filter.PageSize));
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByState(PaginationFilter filter, States state)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(fakePropertyDbContext.Properties
                .Where(x => x.PropertyData.PropertyDetails.Address.State == state),
                filter.PageNumber, filter.PageSize));
        }

        public async Task<PagedResponse<Property>> GetAllProperties(PaginationFilter filter)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(fakePropertyDbContext.Properties, filter.PageNumber, filter.PageSize));
        }

        public async Task<Property> GetPropertyById(Guid id)
        {
            var property = await Task.FromResult(fakePropertyDbContext.Properties.FirstOrDefault(property => property.Id == id));
            return property;
        }

        public bool SaveChanges()
        {
            return (fakePropertyDbContext.SaveChanges() >= 0);
        }

        public Task UpdateProperty(Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }
            fakePropertyDbContext.Update(property);
            SaveChanges();
            return Task.CompletedTask;
        }
    }
}
