using AutoMapper;
using Moq;
using NUnit.Framework;
using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Entities;
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
        private PropertiesDbContext _dbContext;

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
        
        }
    }
}
