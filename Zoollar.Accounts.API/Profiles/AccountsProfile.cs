using AutoMapper;
using Zoollar.Accounts.API.Dtos;
using Zoollar.Accounts.API.Models;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Profiles
{
    public class AccountsProfile : Profile
    {
        public AccountsProfile()
        {
            CreateMap<CreateUserAccountDto, Account>()
                .ForMember(pt => pt.Id, act => act.Ignore());
            CreateMap<AddressDto, Address>();
            CreateMap<AlertAndSearchesDto, AlertAndSearches>();
            CreateMap<AccountInfoDto, AccountInfo>()
                .ForMember(pt => pt.DateCreated, act => act.Ignore());
            CreateMap<Account, GetUserAccountDto>()
                .ForMember(pt => pt.Id, act => act.MapFrom(d => d.Id));
            CreateMap<GetUserAccountDto, Account>();
            CreateMap<AccountInfo, AccountInfoDto>();
            CreateMap<Address, AddressDto>();
            CreateMap<AlertAndSearches, AlertAndSearchesDto>();

        }
    }
}
