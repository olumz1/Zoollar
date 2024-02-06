using Zoollar.Accounts.API.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Zoollar.Accounts.API.Models;

namespace Zoollar.Accounts.API.Data
{
    public class UserRepo
    {
        private readonly AccountDbContext _dbContext;

        public UserRepo(AccountDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CreateAccount(Account account)
        {
            if (account == null)
            {
                throw new ArgumentNullException(nameof(Account));
            }

            await _dbContext.AddAsync(account);
            await SaveChanges();
        }


        public async Task DeleteAccount(Guid id)
        {
            var accountToDelete = await GetAccountById(id);
            if (accountToDelete != null)
            {
                _dbContext.Remove(accountToDelete);
            }
            await SaveChanges();
        }

        public async Task<Account?> GetAccountById(Guid id)
        {
            var account = await _dbContext.Accounts.Include(ad => ad.Address).FirstOrDefaultAsync(x => x.Id == id);
            return account ?? null;
        }

        public async Task<IEnumerable<Account>> GetAllAccounts()
        {
            return await _dbContext.Accounts.Include(ad => ad.Address).ToListAsync();
        }

        public async Task SaveChanges()
        {
           await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateAccount(Account updateAccount)
        {
            if (updateAccount == null)
            {
                throw new ArgumentNullException(nameof(Account));
            }
            _dbContext.Accounts.Update(updateAccount);
            await SaveChanges();
        }
    }
}
