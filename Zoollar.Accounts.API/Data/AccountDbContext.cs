﻿using Microsoft.EntityFrameworkCore;
using Zoollar.Accounts.API.Models;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public class AccountDbContext : DbContext
    {
        public AccountDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }

        public DbSet<EstateAgent> EstateAgents { get; set; }

        public DbSet<Landlord> Landlords { get; set; }
        
        public DbSet<Lender> Lenders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<AccountInfo>()
                .UseTpcMappingStrategy()
                .ToTable(nameof(AccountInfo));

            modelBuilder.Entity<EstateAgent>()
                .ToTable("EstateAgents")
                .HasOne(c => c.CompanyDetails)
                .WithOne()
                .HasForeignKey<CompanyDetails>(c => c.Id)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CompanyDetails>()
                .ToTable("CompanyDetails");

            modelBuilder.Entity<Landlord>().ToTable("Landlords");

            modelBuilder.Entity<Lender>().ToTable("Lenders");

            modelBuilder.Entity<Account>().ToTable("Accounts").HasOne(a=>a.Address).WithOne()
                .HasPrincipalKey<Account>(x=>x.Id)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Account>().ToTable("Accounts")
                .HasMany(a => a.AlertAndSearches).WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
