using Zoollar.Accounts.API.Models;

namespace Zoollar.Accounts.API.Dtos
{
    public class CreateUserAccountDto : AccountDto
    {
        public AddressDto Address { get; set; }

        public AlertAndSearches[] AlertAndSearches { get; set; }

        public string AccountType { get; set; }
    }
}
