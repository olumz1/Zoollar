namespace Zoollar.Accounts.API.Models.Entities
{
    public class Lender : AccountInfo
    {
        public List<Address> Addresses { get; set; } = new List<Address>();

        public string AccountType  => AccountTypes.Lender;
    }
}
