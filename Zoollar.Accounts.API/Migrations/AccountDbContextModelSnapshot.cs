﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Zoollar.Accounts.API.Data;

#nullable disable

namespace Zoollar.Accounts.API.Migrations
{
    [DbContext(typeof(AccountDbContext))]
    partial class AccountDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Zoollar.Accounts.API.Models.Address", b =>
                {
                    b.Property<Guid>("AddressId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("AddressLine")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("CompanyDetailsId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HouseName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("HouseNo")
                        .HasColumnType("int");

                    b.Property<Guid>("LandlordId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("LenderId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Region")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("State")
                        .HasColumnType("int");

                    b.Property<string>("Town")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AddressId");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.AlertAndSearches", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("AccountId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LocationMapImage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("locationTitle")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.ToTable("AlertAndSearches");
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.CompanyDetails", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CompanyDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("EstateAgentId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Icon")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RegistrationNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("CompanyDetails", (string)null);
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.Entities.AccountInfo", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<string>("EmailAdress")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EmailPreferences")
                        .HasColumnType("int");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MyStatus")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("TelephoneNumber")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.ToTable("AccountInfo", (string)null);

                    b.UseTpcMappingStrategy();
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.Entities.Account", b =>
                {
                    b.HasBaseType("Zoollar.Accounts.API.Models.Entities.AccountInfo");

                    b.Property<string>("AccountType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("RegistrationComplete")
                        .HasColumnType("bit");

                    b.ToTable("Accounts", (string)null);
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.Entities.EstateAgent", b =>
                {
                    b.HasBaseType("Zoollar.Accounts.API.Models.Entities.AccountInfo");

                    b.Property<string>("Icon")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("EstateAgents", (string)null);
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.Entities.Landlord", b =>
                {
                    b.HasBaseType("Zoollar.Accounts.API.Models.Entities.AccountInfo");

                    b.ToTable("Landlords", (string)null);
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.Entities.Lender", b =>
                {
                    b.HasBaseType("Zoollar.Accounts.API.Models.Entities.AccountInfo");

                    b.ToTable("Lenders", (string)null);
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.Address", b =>
                {
                    b.HasOne("Zoollar.Accounts.API.Models.Entities.Account", null)
                        .WithOne("Address")
                        .HasForeignKey("Zoollar.Accounts.API.Models.Address", "AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.AlertAndSearches", b =>
                {
                    b.HasOne("Zoollar.Accounts.API.Models.Entities.Account", null)
                        .WithMany("AlertAndSearches")
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.CompanyDetails", b =>
                {
                    b.HasOne("Zoollar.Accounts.API.Models.Entities.EstateAgent", null)
                        .WithOne("CompanyDetails")
                        .HasForeignKey("Zoollar.Accounts.API.Models.CompanyDetails", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.Entities.Account", b =>
                {
                    b.Navigation("Address")
                        .IsRequired();

                    b.Navigation("AlertAndSearches");
                });

            modelBuilder.Entity("Zoollar.Accounts.API.Models.Entities.EstateAgent", b =>
                {
                    b.Navigation("CompanyDetails")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
