using AutoMapper;
using Zoollar.Accounts.API.Dtos;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Profiles
{
    public class AccountsProfile : Profile
    {
        public AccountsProfile()
        {
            CreateMap<CreateUserAccountDto, User>();
        }
    }
}
