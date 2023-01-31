namespace Zoollar.Accounts.API.Models.Entities
{
    public class Landlord : AccountInfo
    {
        public List<Address> Address { get; set; }

        public string AccountType => AccountTypes.Landlord;
    }
}
