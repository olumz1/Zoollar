using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public interface IAccountRepo<T> where T : AccountInfo
    {
        bool SaveChanges();

        Task<T?> GetAccountById(Guid id);

        Task CreateAccount(T Account);

        Task UpdateAccount(T user);

        Task<IEnumerable<T>> GetAllAccounts();

        Task DeleteAccount(Guid agentId);
    }
}