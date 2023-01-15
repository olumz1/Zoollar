using AutoMapper;
using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Entities;

namespace Zoollar.Properties.API.Profiles
{
    public class PropertiesProfile : Profile
    {
        public PropertiesProfile()
        {
            //Source -> Target
            CreateMap<PropertyPriceDto, PropertyPrice>();
            CreateMap<PropertyImageDto, PropertyImage>();
            CreateMap<PropertyAgentDto, PropertyAgent>();
            CreateMap<AddressDto, Address>();
            CreateMap<PropertyDetailsDto, PropertyDetails>();
            CreateMap<CreatePropertyDto, PropertyData>()
            .ForMember(pt => pt.Title, opt => opt.Ignore());

            CreateMap<PropertyPrice, PropertyPriceDto>();
            CreateMap<PropertyImage, PropertyImageDto>();
            CreateMap<PropertyAgent, PropertyAgentDto>();
            CreateMap<Address, AddressDto>();
            CreateMap<PropertyDetails, PropertyDetailsDto>();
            CreateMap<Property, GetPropertyDto>();
        } 
    }
}
