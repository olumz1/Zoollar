using Zoollar.Accounts.API.Dtos;
using Zoollar.Accounts.API.Models;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Services.UserAccount
{
    public interface IAccountServices
    {
        Task<GetUserAccountDto> CreateUserAccount(CreateUserAccountDto user);
        Task<GetUserAccountDto> GetUserAccountById(Guid id);
        Task<GetUserAccountDto> UpdateUserAccount(Guid id, CreateUserAccountDto user);
        Task DeleteAccountById(Guid id);
    }
}
