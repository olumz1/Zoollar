using Microsoft.EntityFrameworkCore;
using Zoollar.Accounts.API.Models;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public class AccountDbContext : DbContext
    {
        public AccountDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AccountInfo> Accounts { get; set; }

        public DbSet<EstateAgent> EstateAgents { get; set; }

        public DbSet<Landlord> Landlords { get; set; }
        
        public DbSet<Lender> Lenders { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<AccountInfo>()
                .UseTpcMappingStrategy()
                .ToTable(nameof(AccountInfo));

            modelBuilder.Entity<EstateAgent>()
                .ToTable("EstateAgents")
                .HasOne(c => c.CompanyDetails)
                .WithOne(e => e.EstateAgent)
                .HasForeignKey<CompanyDetails>(c => c.Id);

            modelBuilder.Entity<CompanyDetails>()
                .ToTable("CompanyDetails").HasOne(a => a.RegisteredOffice).WithOne().HasForeignKey<Address>(c =>c.CompanyDetailsId);
            modelBuilder.Entity<Landlord>().ToTable("Landlords").HasOne(a => a.Address).WithOne().HasForeignKey<Address>(c => c.LandlordId);

            modelBuilder.Entity<Lender>().ToTable("Lenders").HasOne(a=>a.Address).WithOne().HasForeignKey<Address>(c => c.LenderId);

            modelBuilder.Entity<User>().ToTable("Users").HasOne(a=>a.Address).WithOne();
            modelBuilder.Entity<User>().ToTable("Users").HasMany(a => a.AlertAndSearches).WithOne();
        }
    }
}
