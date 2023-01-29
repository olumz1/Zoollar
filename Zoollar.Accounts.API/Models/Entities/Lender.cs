namespace Zoollar.Accounts.API.Models.Entities
{
    public class Lender : Account
    {
        public Address Address { get; set; }

        public string AccountType  => AccountTypes.Lender;
    }
}
