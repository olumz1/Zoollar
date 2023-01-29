namespace Zoollar.Accounts.API.Models.Entities
{
    public class Landlord : Account
    {
        public Address Address { get; set; }

        public string AccountType => AccountTypes.Landlord;
    }
}
