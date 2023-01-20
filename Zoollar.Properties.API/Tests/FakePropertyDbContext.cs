using Microsoft.EntityFrameworkCore;
using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Entities;

namespace Zoollar.Properties.API.Tests
{
    public class FakePropertyDbContext
    {
        private static DbContextOptionsBuilder<PropertiesDbContext> optionsBuider = new DbContextOptionsBuilder<PropertiesDbContext>()
        .UseInMemoryDatabase(Guid.NewGuid().ToString());

        PropertiesDbContext propertyContext = new PropertiesDbContext(optionsBuider.Options);

        public PropertiesDbContext PropertiesDbContext()
        {
            propertyContext.Database.EnsureCreated();
            SeedData(propertyContext);

            return new PropertiesDbContext(optionsBuider.Options);
        }

        private void SeedData(PropertiesDbContext propertyContext)
        {
            if (!propertyContext.Properties.Any()) 
            {
                propertyContext.Properties.AddRange(
                new Property 
                {
                    Id = new Guid("4FC1CC3D-A024-4038-ABA9-526DC2CB4173"),
                    PropertyData = new PropertyData 
                    {
                        CreatedTime= new DateTime(2022, 01, 01),
                        Description = "This is property 1",
                        PropertyAgent = new PropertyAgent 
                        { 
                            AgentId = new Guid("1D53EAB3-EC81-4F71-A605-9B7B1C5D6B66"),
                            ImageUrl = new Uri("image.jpg"),
                            Name = "Agent 1"
                        },
                        PropertyDetails = new PropertyDetails 
                        {
                            Address = {
                            AddressLine ="Address Line 1",
                            HouseNo = 12,
                            State = States.Lagos,
                            City = "Ikorodu",
                            Country = "Nigeria"
                            },
                            DateSold = new DateTime(2022, 10, 10),
                            IsSold = true,
                            NoOfBathrooms = 4,
                            NoOfBeds = 5,
                            NoOfReceptions = 2
                        },
                        PropertyImage = new PropertyImage[]
                        {
                            new PropertyImage{ApprovedImage = true, ImageUrl = "firstImage.jpg", IsMainImage = true },
                            new PropertyImage{ApprovedImage = true, ImageUrl = "secondImage.jpg", IsMainImage = false }
                        },
                        PropertyListingType = PropertyListingType.ForSale,
                        PropertyPrice = new PropertyPrice {Currency = Currency.NAIRA, OffersInRange = true, Price = 250000000 },
                        PropertyType = PropertyType.Duplex,
                        Title = "5 beds duplex for sale"                     
                    }
                },
                new Property 
                {
                    Id = new Guid("10EA4BB0-3A06-4374-A8A4-E9AA32D42ED9"),
                    PropertyData = new PropertyData
                    {
                        CreatedTime = new DateTime(2023, 01, 01),
                        Description = "This is property 2",
                        PropertyAgent = new PropertyAgent
                        {
                            AgentId = new Guid("1D53EAB3-EC81-4F71-A605-9B7B1C5D6B66"),
                            ImageUrl = new Uri("image.jpg"),
                            Name = "Agent 1"
                        },
                        PropertyDetails = new PropertyDetails
                        {
                            Address = {
                            AddressLine ="Address Line 1",
                            HouseNo = 12,
                            State = States.Oyo,
                            City = "Ibadan",
                            Country = "Nigeria"
                            },
                            DateSold = new DateTime(2022, 10, 10),
                            IsSold = false,
                            NoOfBathrooms = 3,
                            NoOfBeds = 2,
                            NoOfReceptions = 1
                        },
                        PropertyImage = new PropertyImage[]
                        {
                            new PropertyImage{ApprovedImage = true, ImageUrl = "firstImage.jpg", IsMainImage = true },
                            new PropertyImage{ApprovedImage = true, ImageUrl = "secondImage.jpg", IsMainImage = false }
                        },
                        PropertyListingType = PropertyListingType.ForSale,
                        PropertyPrice = new PropertyPrice { Currency = Currency.NAIRA, OffersInRange = true, Price = 50000000 },
                        PropertyType = PropertyType.Bungalow,
                        Title = "3 beds bungalow for sale"
                    }

                },
                new Property
                {
                    Id = new Guid("33E212CA-51D4-4697-A385-7A6EAAFBF2AC"),
                    PropertyData = new PropertyData
                    {
                        CreatedTime = new DateTime(2023, 01, 01),
                        Description = "This is property 1 to let",
                        PropertyAgent = new PropertyAgent
                        {
                            AgentId = new Guid("A202E636-4A9F-474C-8971-58AB6E5F42FC"),
                            ImageUrl = new Uri("image.jpg"),
                            Name = "Agent 2"
                        },
                        PropertyDetails = new PropertyDetails
                        {
                            Address = {
                            AddressLine ="Address Line 1",
                            HouseNo = 11,
                            State = States.Oyo,
                            City = "Ibadan",
                            Country = "Nigeria"
                            },
                            DateSold = new DateTime(2022, 10, 10),
                            IsSold = false,
                            NoOfBathrooms = 3,
                            NoOfBeds = 2,
                            NoOfReceptions = 1
                        },
                        PropertyImage = new PropertyImage[]
                        {
                            new PropertyImage{ApprovedImage = true, ImageUrl = "firstImage.jpg", IsMainImage = true },
                            new PropertyImage{ApprovedImage = true, ImageUrl = "secondImage.jpg", IsMainImage = false }
                        },
                        PropertyListingType = PropertyListingType.ToLet,
                        PropertyPrice = new PropertyPrice { Currency = Currency.NAIRA, OffersInRange = true, Price = 2000000 },
                        PropertyType = PropertyType.Bungalow,
                        Title = "3 beds bungalow to let"
                    }

                });
            }
            propertyContext.SaveChanges();
        }
    }
}
