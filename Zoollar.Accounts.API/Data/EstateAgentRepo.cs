using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public class EstateAgentRepo : AccountRepo<EstateAgent>
    {
        private readonly AccountDbContext _dbContext;

        public EstateAgentRepo(AccountDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public override Task CreateAccount(EstateAgent agent)
        {
            if (agent == null)
            {
                throw new ArgumentNullException(nameof(EstateAgent));
            }

            _dbContext.EstateAgents.Add(agent);
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

        public override async Task<EstateAgent?> GetAccountById(Guid id)
        {
            var agent = await Task.FromResult(_dbContext.EstateAgents.FirstOrDefault(agent => agent.Id == id));
            return agent ?? null;
        }

        public override async Task<IEnumerable<EstateAgent>> GetAllAccounts()
        {
            return await Task.FromResult(_dbContext.EstateAgents.ToList());
        }

        public override bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }

        public override Task UpdateAccount(EstateAgent agent)
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
