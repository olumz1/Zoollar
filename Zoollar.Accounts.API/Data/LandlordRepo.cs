using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Data
{
    public class LandlordRepo : AccountRepo<Landlord>
    {
        private readonly AccountDbContext _dbContext;

        public LandlordRepo(AccountDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public override Task CreateAccount(Landlord landlord)
        {
            if (landlord == null)
            {
                throw new ArgumentNullException(nameof(Lender));
            }

            _dbContext.Landlords.Add(landlord);
            SaveChanges();
            return Task.CompletedTask;
        }


        public override Task DeleteAccount(Guid agentId)
        {
            var landlordToDelete = GetAccountById(agentId);
            if (landlordToDelete != null)
            {
                _dbContext.Remove(landlordToDelete);
            }
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

        public override async Task<Landlord?> GetAccountById(Guid id)
        {
            var landlord = await Task.FromResult(_dbContext.Landlords.FirstOrDefault(landlord => landlord.Id == id));
            return landlord ?? null;
        }

        public override async Task<IEnumerable<Landlord>> GetAllAccounts()
        {
            return await Task.FromResult(_dbContext.Landlords.ToList());
        }

        public override bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }

        public override Task UpdateAccount(Landlord landlord)
        {
            if (landlord == null)
            {
                throw new ArgumentNullException(nameof(Landlord));
            }
            _dbContext.Update(landlord);
            SaveChanges();
            return Task.CompletedTask;
        }
    }
}
