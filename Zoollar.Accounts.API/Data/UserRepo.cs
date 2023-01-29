using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public class UserRepo : AccountRepo<User>
    {
        private readonly AccountDbContext _dbContext;

        public UserRepo(AccountDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public override Task CreateAccount(User user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(User));
            }

            _dbContext.Users.Add(user);
            SaveChanges();
            return Task.CompletedTask;
        }


        public override Task DeleteAccount(Guid agentId)
        {
            var estateAgentToDelete = GetAccountById(agentId);
            if (estateAgentToDelete != null)
            {
                _dbContext.Remove(estateAgentToDelete);
            }
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

        public override async Task<User?> GetAccountById(Guid id)
        {
            var user = await Task.FromResult(_dbContext.Users.FirstOrDefault(user => user.Id == id));
            return user ?? null;
        }

        public override async Task<IEnumerable<User>> GetAllAccounts()
        {
            return await Task.FromResult(_dbContext.Users.ToList());
        }

        public override bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }

        public override Task UpdateAccount(User user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(User));
            }
            _dbContext.Update(user);
            SaveChanges();
            return Task.CompletedTask;
        }
    }
}
