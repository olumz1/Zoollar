namespace Zoollar.Accounts.API.Models.Entities
{
    public class Landlord : AccountInfo
    {
        public Address Address { get; set; }

        public string AccountType => AccountTypes.Landlord;
    }
}
