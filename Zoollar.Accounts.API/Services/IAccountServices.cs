using Zoollar.Accounts.API.Models;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Services
{
    public interface IAccountServices
    {
        Task<Account> CreateUserAccount(User user);
    }
}
