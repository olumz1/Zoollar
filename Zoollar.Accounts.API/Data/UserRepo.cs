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

        public async Task CreateAccount(User user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(User));
            }

            await _dbContext.AddAsync(user);
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

        public async Task<User?> GetAccountById(Guid id)
        {
            var account = await _dbContext.Users.Include(ad => ad.Address).FirstOrDefaultAsync(x => x.Id == id);
            return account ?? null;
        }

        public async Task<IEnumerable<User>> GetAllAccounts()
        {
            return await _dbContext.Users.Include(ad => ad.Address).ToListAsync();
        }

        public async Task SaveChanges()
        {
           await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateAccount(User updateAccount)
        {
            if (updateAccount == null)
            {
                throw new ArgumentNullException(nameof(User));
            }
            _dbContext.Users.Update(updateAccount);
            await SaveChanges();
        }
    }
}
