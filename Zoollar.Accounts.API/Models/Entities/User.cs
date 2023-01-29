using Zoollar.Accounts.API.Models.Enum;

namespace Zoollar.Accounts.API.Models.Entities
{
    public class User : Account
    {
        public Address Address { get; set; }

        public AlertAndSearches[] AlertAndSearches { get; set; }

        public string AccountType { get; set; }

    }
}
