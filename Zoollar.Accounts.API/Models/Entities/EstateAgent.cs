namespace Zoollar.Accounts.API.Models.Entities
{
    public class EstateAgent : Account
    {
        public CompanyDetails CompanyDetails { get; set; }

        public string Icon { get; set; }

        public string AccountType => AccountTypes.Agent;

    }
}
