using Zoollar.Accounts.API.Models;

namespace Zoollar.Accounts.API.Dtos
{
    public class GetUserAccountDto : AccountInfoDto
    {
        public Guid Id { get; set; }

        public AddressDto Address { get; set; }

        public ICollection<AlertAndSearchesDto> AlertAndSearches { get; set; }

        public string AccountType { get; set; }
    }
}
