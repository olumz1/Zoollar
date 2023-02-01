using Zoollar.Accounts.API.Dtos;
using Zoollar.Accounts.API.Models;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Services
{
    public interface IAccountServices
    {
        Task<GetUserAccountDto> CreateUserAccount(CreateUserAccountDto user);
        Task<GetUserAccountDto> GetUserAccountById(Guid id);
        Task DeleteAccountById(Guid id);
    }
}
