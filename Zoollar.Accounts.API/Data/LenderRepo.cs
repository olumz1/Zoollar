using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public class LenderRepo : AccountRepo<Lender>
    {
        private readonly AccountDbContext _dbContext;

        public LenderRepo(AccountDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public override Task CreateAccount(Lender lender)
        {
            if (lender == null)
            {
                throw new ArgumentNullException(nameof(Lender));
            }

            _dbContext.Lenders.Add(lender);
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

        public override async Task<Lender?> GetAccountById(Guid id)
        {
            var lender = await Task.FromResult(_dbContext.Lenders.FirstOrDefault(lender => lender.Id == id));
            return lender ?? null;
        }

        public override async Task<IEnumerable<Lender>> GetAllAccounts()
        {
            return await Task.FromResult(_dbContext.Lenders.ToList());
        }

        public override bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }

        public override Task UpdateAccount(Lender lender)
        {
            if (lender == null)
            {
                throw new ArgumentNullException(nameof(Lender));
            }
            _dbContext.Update(lender);
            SaveChanges();
            return Task.CompletedTask;
        }
    }
}
