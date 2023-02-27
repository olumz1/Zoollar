using Zoollar.Accounts.API.Models;

namespace Zoollar.Accounts.API.Dtos
{
    public class CreateUserAccountDto : AccountInfoDto
    {
        public AddressDto Address { get; set; }

        public AlertAndSearchesDto[] AlertAndSearches { get; set; }

        public string AccountType { get; set; }
    }
}
