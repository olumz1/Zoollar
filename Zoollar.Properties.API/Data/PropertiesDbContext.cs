using Microsoft.EntityFrameworkCore;
using Zoollar.Properties.API.Models.Entities;

namespace Zoollar.Properties.API.Data
{
    public class PropertiesDbContext : DbContext
    {
        public PropertiesDbContext(DbContextOptions<PropertiesDbContext> options) : base(options)
        {
        }

        public DbSet<Property> Properties { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) 
        {
            builder.Entity<Property>().Property(d => d.PropertyData).HasColumnType("json");
        }
    }
}
