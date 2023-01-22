using AutoMapper;
using FluentAssertions;
using Moq;
using NUnit.Framework;
using Test.Helpers;
using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Entities;
using Zoollar.Properties.API.Models.Filter;
using Zoollar.Properties.API.Profiles;
using Zoollar.Properties.API.Services;

namespace Zoollar.Properties.API.Tests
{
    [TestFixture]
    public class PropertyServiceTests
    {
        private Mock<IDateTimeProvider> _dateTimeProvider;
        private IMapper _mapper;
        private IPropertyRepo fakePropertyRepository;
        private IPropertyService sut;

        [OneTimeSetUp]
        public void SetUp() 
        {
            this._dateTimeProvider = new Mock<IDateTimeProvider>();
            var config = new MapperConfiguration(cfg => {
                cfg.CreateMap<PropertyPriceDto, PropertyPrice>();
                cfg.CreateMap<PropertyImageDto, PropertyImage>();
                cfg.CreateMap<PropertyAgentDto, PropertyAgent>();
                cfg.CreateMap<AddressDto, Address>();
                cfg.CreateMap<PropertyDetailsDto, PropertyDetails>();
                cfg.CreateMap<CreatePropertyDto, PropertyData>()
                    .ForMember(pt => pt.Title, opt => opt.Ignore());
                
                cfg.CreateMap<PropertyPrice, PropertyPriceDto>();
                cfg.CreateMap<PropertyImage, PropertyImageDto>();
                cfg.CreateMap<PropertyAgent, PropertyAgentDto>();
                cfg.CreateMap<Address, AddressDto>();
                cfg.CreateMap<PropertyDetails, PropertyDetailsDto>();
                cfg.CreateMap<PropertyData, GetPropertyDto>();
                
                cfg.CreateMap<Property, PropertyDto>()
                    .ForMember(pt => pt.Id, opt => opt.MapFrom(pt => pt.Id))
                    .ForMember(pt => pt.PropertyData, opt => opt.MapFrom(cs => cs.PropertyData));

                cfg.CreateMap(typeof(PagedResponse<Property>), typeof(PagedResponse<PropertyDto>))
                    .ConvertUsing(typeof(PagedListConverter<Property, PropertyDto>));
            });
            this._mapper = config.CreateMapper();

            this._dateTimeProvider.Setup(x => x.GetDateTimeNow()).Returns(new DateTime(2022, 10, 5));
        }

        [Test]
        public async Task When_CreateProperty_IsCalled_NewProperty_Should_BeCreated()
        {
            var options = this
            .CreatePostgreSqlUniqueClassOptions<TestDbContext>();
            using var context = new TestDbContext(options);

            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            SeedData(context);

            this.fakePropertyRepository = new FakePropertyRepo(context);

            this.sut = new PropertyService(this.fakePropertyRepository, _mapper, this._dateTimeProvider.Object);

            var createDto = new CreatePropertyDto
            {
                Description = "The new property description",
                PropertyDetails =
                new PropertyDetailsDto
                {
                    Address = new AddressDto {
                        AddressLine = "Address Line 1",
                        HouseNo = 12,
                        State = States.Lagos,
                        City = "Ikorodu",
                        Country = "Nigeria"
                    },
                    NoOfBathrooms = 4,
                    NoOfBeds = 5,
                    NoOfReceptions = 2
                },
                PropertyFeatures = new PropertyFeatures [] { PropertyFeatures.Gym, PropertyFeatures.WaterHeater, PropertyFeatures.GatedEstate },
                PropertyImage = new PropertyImageDto[] { new PropertyImageDto { ImageUrl = "Image1", IsMainImage = true} },
                PropertyListingType = PropertyListingType.ForSale,
                PropertyPrice = new PropertyPriceDto { Currency = Currency.NAIRA, OffersInRange = true, Price = 200000000},
                PropertyType = PropertyType.Flats
            };

            var property = this.sut.CreateProperty(createDto);

            property.Should().NotBeNull();
            context.Properties.Count().Should().Be(4);
        }

        [Test]
        public async Task When_GetAllProperty_IsCalled_ReturnAllProperties() 
        {
            var options = this
            .CreatePostgreSqlUniqueClassOptions<TestDbContext>();
            using var context = new TestDbContext(options);

            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            SeedData(context);

            this.fakePropertyRepository = new FakePropertyRepo(context);

            this.sut = new PropertyService(this.fakePropertyRepository, _mapper, this._dateTimeProvider.Object);

            var pagination = new PaginationFilter() {PageNumber = 1, PageSize = 10 };

            var properties = this.sut.GetAllProperties(pagination).Result.ToList();

            properties.Count().Should().Be(3);
            properties[0].Id.Should().Be(new Guid("10EA4BB0-3A06-4374-A8A4-E9AA32D42ED9"));
            properties[1].Id.Should().Be(new Guid("33E212CA-51D4-4697-A385-7A6EAAFBF2AC"));
            properties[2].Id.Should().Be(new Guid("4FC1CC3D-A024-4038-ABA9-526DC2CB4173"));

        }

        [Test]
        public async Task When_UpdateProperty_IsCalled_PropertyShould_BeUpdated()
        {
            var options = this
            .CreatePostgreSqlUniqueClassOptions<TestDbContext>();
            using var context = new TestDbContext(options);

            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            SeedData(context);

            this.fakePropertyRepository = new FakePropertyRepo(context);

            this.sut = new PropertyService(this.fakePropertyRepository, _mapper, this._dateTimeProvider.Object);

            var createDto = new CreatePropertyDto
            {
                Description = "The new property description",
                PropertyDetails =
                new PropertyDetailsDto
                {
                    Address = new AddressDto
                    {
                        AddressLine = "Address Line 1",
                        HouseNo = 12,
                        State = States.Lagos,
                        City = "Ikorodu",
                        Country = "Nigeria"
                    },
                    NoOfBathrooms = 4,
                    NoOfBeds = 5,
                    NoOfReceptions = 2
                },
                PropertyFeatures = new PropertyFeatures[] { PropertyFeatures.Gym, PropertyFeatures.WaterHeater, PropertyFeatures.GatedEstate },
                PropertyImage = new PropertyImageDto[] { new PropertyImageDto { ImageUrl = "Image1", IsMainImage = true } },
                PropertyListingType = PropertyListingType.ForSale,
                PropertyPrice = new PropertyPriceDto { Currency = Currency.NAIRA, OffersInRange = true, Price = 200000000 },
                PropertyType = PropertyType.Flats
            };

           var property = this.sut.UpdateProperty(new Guid("10EA4BB0-3A06-4374-A8A4-E9AA32D42ED9"), createDto);

            property.Result.Id.Should().Be(new Guid("10EA4BB0-3A06-4374-A8A4-E9AA32D42ED9"));
            property.Result.PropertyData.Title.Should().Be("5 beds flats for sale");
        }

        [Test]
        public async Task When_GetPropertyById_IsCalled_TheProperty_Should_BeReturned()
        {
            var options = this
            .CreatePostgreSqlUniqueClassOptions<TestDbContext>();
            using var context = new TestDbContext(options);

            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            SeedData(context);

            this.fakePropertyRepository = new FakePropertyRepo(context);

            this.sut = new PropertyService(this.fakePropertyRepository, _mapper, this._dateTimeProvider.Object);

            var result = this.sut.GetPropertyById(new Guid("4FC1CC3D-A024-4038-ABA9-526DC2CB4173")).Result;

            result.PropertyData.Title.Should().Be("5 beds duplex for sale");
            result.PropertyData.PropertyType.Should().Be(PropertyType.Duplex);
                
        }

        [Test]
        public async Task When_FilterPropertiesByListintType_IsCalled_PropertiesWithThisType_Should_BeReturned() 
        {
            var options = this
            .CreatePostgreSqlUniqueClassOptions<TestDbContext>();
            using var context = new TestDbContext(options);

            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            SeedData(context);

            this.fakePropertyRepository = new FakePropertyRepo(context);

            this.sut = new PropertyService(this.fakePropertyRepository, _mapper, this._dateTimeProvider.Object);
            var pagination = new PaginationFilter() { PageNumber = 1, PageSize = 10 };
            var result = await this.sut.FilterPropertiesByListingType(pagination, PropertyListingType.ForSale);

            result.Should().NotBeNull();
            result.Count().Should().Be(2);
            result[0].Id.Should().Be(new Guid("10EA4BB0-3A06-4374-A8A4-E9AA32D42ED9"));
            result[0].PropertyData.Title.Should().Be("3 beds bungalow for sale");
        }

        [Test]
        public async Task When_FilterPropertiesByCity_IsCalled_PropertiesWithinTheCity_Should_BeReturned() 
        {
            var options = this
            .CreatePostgreSqlUniqueClassOptions<TestDbContext>();
            using var context = new TestDbContext(options);

            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            SeedData(context);

            this.fakePropertyRepository = new FakePropertyRepo(context);

            this.sut = new PropertyService(this.fakePropertyRepository, _mapper, this._dateTimeProvider.Object);
            var pagination = new PaginationFilter() { PageNumber = 1, PageSize = 10 };
            var result = await this.sut.FilterPropertiesByCity(pagination, "Ibadan");

            result.Should().NotBeNull();
            result.Count().Should().Be(2);
            result[0].Id.Should().Be(new Guid("10EA4BB0-3A06-4374-A8A4-E9AA32D42ED9"));
            result[0].PropertyData.Title.Should().Be("3 beds bungalow for sale");
        }

        public void SeedData(TestDbContext propertyContext)
        {
            if (!propertyContext.Properties.Any())
            {
                propertyContext.Properties.AddRange(
                new Property
                {
                    Id = new Guid("4FC1CC3D-A024-4038-ABA9-526DC2CB4173"),
                    PropertyData = new PropertyData
                    {
                        CreatedTime = new DateTime(2022, 01, 01),
                        Description = "This is property 1",
                        PropertyAgent = new PropertyAgent
                        {
                            AgentId = new Guid("1D53EAB3-EC81-4F71-A605-9B7B1C5D6B66"),
                            ImageUrl = "image.jpg",
                            Name = "Agent 1"
                        },
                        PropertyDetails = new PropertyDetails
                        {
                            Address = new Address{
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
                        PropertyPrice = new PropertyPrice { Currency = Currency.NAIRA, OffersInRange = true, Price = 250000000 },
                        PropertyType = PropertyType.Duplex,
                        Title = "5 beds duplex for sale",
                        PropertyFeatures = new PropertyFeatures[] { PropertyFeatures.AmpleParkingSpace, PropertyFeatures.WellWaterSupply, PropertyFeatures.Gym },
                        LoanCompanies = new Guid[]
                        {
                            new Guid("EBD79195-CE56-422B-AEEF-1B793953AEB5"),
                            new Guid("EFB94A27-96B6-4D20-BC23-5DECDCCCDAD9"),
                            new Guid("7E7ABF34-9E62-473A-A6C9-CCFEE5773718")
                        }
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
                            ImageUrl = "image.jpg",
                            Name = "Agent 1"
                        },
                        PropertyDetails = new PropertyDetails
                        {
                            Address = new Address{
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
                        Title = "3 beds bungalow for sale",
                        PropertyFeatures = new PropertyFeatures[] { PropertyFeatures.AmpleParkingSpace, PropertyFeatures.WellWaterSupply, PropertyFeatures.Gym },
                        LoanCompanies = new Guid[]
                        {
                            new Guid("EBD79195-CE56-422B-AEEF-1B793953AEB5"),
                            new Guid("EFB94A27-96B6-4D20-BC23-5DECDCCCDAD9"),
                            new Guid("7E7ABF34-9E62-473A-A6C9-CCFEE5773718")
                        }
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
                            ImageUrl = "image.jpg",
                            Name = "Agent 2"
                        },
                        PropertyDetails = new PropertyDetails
                        {
                            Address = new Address{
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
                        Title = "3 beds bungalow to let",
                        PropertyFeatures = new PropertyFeatures[] { PropertyFeatures.AmpleParkingSpace, PropertyFeatures.WellWaterSupply, PropertyFeatures.Gym },
                        LoanCompanies = new Guid[]
                        {
                            new Guid("EBD79195-CE56-422B-AEEF-1B793953AEB5"),
                            new Guid("EFB94A27-96B6-4D20-BC23-5DECDCCCDAD9"),
                            new Guid("7E7ABF34-9E62-473A-A6C9-CCFEE5773718")
                        }
                    }
                });
            }
            propertyContext.SaveChanges();
        }
    }
}
