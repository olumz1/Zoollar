using Zoollar.Accounts.API.Models.Enum;

namespace Zoollar.Accounts.API.Models.Entities
{
    public class User : AccountInfo
    {
        public Address Address { get; set; }

        public ICollection<AlertAndSearches> AlertAndSearches { get; set; }

        public string AccountType { get; set; }

    }
}
