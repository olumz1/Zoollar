using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public abstract class AccountRepo<T> where T : AccountInfo
    {
        public abstract bool SaveChanges();

        public abstract Task<T?> GetAccountById(Guid id);

        public abstract Task CreateAccount(T Account);

        public abstract Task UpdateAccount(T user);

        public abstract Task<IEnumerable<T>> GetAllAccounts();

        public abstract Task DeleteAccount(Guid agentId);
    }
}