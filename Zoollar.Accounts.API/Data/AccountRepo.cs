using Zoollar.Accounts.API.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Zoollar.Accounts.API.Data
{
    public class AccountRepo<Entity> where Entity : AccountInfo
    {
        private readonly AccountDbContext _dbContext;
        private Microsoft.EntityFrameworkCore.DbSet<Entity> _dbSet;

        public AccountRepo(AccountDbContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = _dbContext.Set<Entity>();
        }

        public async Task CreateAccount(Entity account)
        {
            if (account == null)
            {
                throw new ArgumentNullException(nameof(Entity));
            }

            await _dbSet.AddAsync(account);
            await SaveChanges();
        }


        public async Task DeleteAccount(Guid id)
        {
            var accountToDelete = await GetAccountById(id);
            if (accountToDelete != null)
            {
                _dbSet.Remove(accountToDelete);
            }
            await SaveChanges();
        }

        public async Task<Entity?> GetAccountById(Guid id)
        {
            var account =  await _dbSet.FirstOrDefaultAsync(e => e.Id == id);
            return account ?? null;
        }

        public async Task<IEnumerable<Entity>> GetAllAccounts()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task SaveChanges()
        {
           await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateAccount(Entity updateAccount)
        {
            if (updateAccount == null)
            {
                throw new ArgumentNullException(nameof(Entity));
            }
            _dbSet.Update(updateAccount);
            await SaveChanges();
        }
    }
}
