using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public class EstateAgentRepo : IAccountRepo<EstateAgent>
    {
        private readonly AccountDbContext _dbContext;

        public EstateAgentRepo(AccountDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task CreateAccount(EstateAgent agent)
        {
            if (agent == null)
            {
                throw new ArgumentNullException(nameof(EstateAgent));
            }

            _dbContext.EstateAgents.Add(agent);
            SaveChanges();
            return Task.CompletedTask;
        }

        public Task DeleteAccount(Guid agentId)
        {
            var estateAgentToDelete = GetAccountById(agentId);
            if (estateAgentToDelete != null)
            {
                _dbContext.Remove(estateAgentToDelete);
            }
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

        public async Task<EstateAgent?> GetAccountById(Guid id)
        {
            var agent = await Task.FromResult(_dbContext.EstateAgents.FirstOrDefault(agent => agent.Id == id));
            return agent ?? null;
        }

        public async Task<IEnumerable<EstateAgent>> GetAllAccounts()
        {
            return await Task.FromResult(_dbContext.EstateAgents.ToList());
        }

        public bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }

        public Task UpdateAccount(EstateAgent agent)
        {
            if (agent == null)
            {
                throw new ArgumentNullException(nameof(EstateAgent));
            }
            _dbContext.Update(agent);
            SaveChanges();
            return Task.CompletedTask;
        }
    }
}
