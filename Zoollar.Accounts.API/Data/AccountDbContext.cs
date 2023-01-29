using Microsoft.EntityFrameworkCore;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public class AccountDbContext : DbContext
    {
        public AccountDbContext(DbContextOptions options):base(options) 
        {
            
        }

        public DbSet<EstateAgent> EstateAgents { get; set; }

        public DbSet<Landlord> Landlords { get; set; }
        
        public DbSet<Lender> Lenders { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<EstateAgent>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<Landlord>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<Lender>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<User>()
                .HasKey(p => p.Id);
        }
    }
}
