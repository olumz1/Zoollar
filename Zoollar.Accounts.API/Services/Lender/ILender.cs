using Zoollar.Accounts.API.Dtos;

namespace Zoollar.Accounts.API.Services.Lender
{
    public interface ILender
    {
        Task<GetUserAccountDto> CreateUserAccount(CreateUserAccountDto user);
        Task<GetUserAccountDto> GetUserAccountById(Guid id);
        Task<GetUserAccountDto> UpdateUserAccount(Guid id, CreateUserAccountDto user);
        Task DeleteAccountById(Guid id);
    }
}
