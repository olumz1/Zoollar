using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models.Entities;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Data
{
    public class PropertyRepo : IPropertyRepo
    {
        private readonly PropertiesDbContext _dbContext;
        public PropertyRepo(PropertiesDbContext propertiesDbContext)
        {
            _dbContext = propertiesDbContext;
        }

        public Task CreateProperty(Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }
            _dbContext.Properties.Add(property);
            SaveChanges();
            return Task.CompletedTask;
        }

        public Task DeleteProperty(Guid id)
        {
            var propertyToDelete = GetPropertyById(id);
            if (propertyToDelete != null)
            {
                _dbContext.Remove(propertyToDelete);
            }
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

        public async Task<PagedResponse<Property>> GetAllProperties(PaginationFilter filter)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(_dbContext.Properties, filter.PageNumber, filter.PageSize));
        }

        public async Task<Property> GetPropertyById(Guid id)
        {
            var property = await Task.FromResult(_dbContext.Properties.FirstOrDefault(property => property.Id == id));
            return property;
        }

        public bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }

        public Task UpdateProperty(Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }
            _dbContext.Update(property);
            SaveChanges();
            return Task.CompletedTask;
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByLocation(PaginationFilter filter, string location) 
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(_dbContext.Properties
                .Where(x=>x.PropertyData.PropertyDetails.Address.AddressLine.Contains(location)), 
                filter.PageNumber, filter.PageSize));
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByCity(PaginationFilter filter, string city)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(_dbContext.Properties
                .Where(x => x.PropertyData.PropertyDetails.Address.City == city),
                filter.PageNumber, filter.PageSize));
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByAgentId(PaginationFilter filter, Guid agentId)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(_dbContext.Properties
                .Where(x => x.PropertyData.PropertyAgent.AgentId == agentId),
                filter.PageNumber, filter.PageSize));
        }

        public async Task<IEnumerable<Property>> FilterPropertiesByState(PaginationFilter filter, string state)
        {
            return await Task.FromResult(PagedResponse<Property>
                .ToPagedResponse(_dbContext.Properties
                .Where(x => x.PropertyData.PropertyDetails.Address.State.ToString() == state),
                filter.PageNumber, filter.PageSize));
        }
    }
} 
