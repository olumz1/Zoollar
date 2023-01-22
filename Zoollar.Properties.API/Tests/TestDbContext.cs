using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Entities;

namespace Zoollar.Properties.API.Tests
{
    public class TestDbContext : DbContext
    {
        public TestDbContext(DbContextOptions<TestDbContext> options)
        : base(options) 
        {

        }

        public DbSet<Property> Properties { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Property>().Property(d => d.PropertyData).HasColumnType("json");
        }
    }
}
