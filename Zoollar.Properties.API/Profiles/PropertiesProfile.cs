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
            CreateMap<CreatePropertyDto, Property>();

            CreateMap<Property, GetPropertyDto>();
        } 
    }
}
