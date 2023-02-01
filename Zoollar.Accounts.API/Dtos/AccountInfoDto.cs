using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Zoollar.Accounts.API.Models.Enum;
using Zoollar.Accounts.API.Models;

namespace Zoollar.Accounts.API.Dtos
{
    public class AccountInfoDto
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Password { get; set; }

        public string EmailAdress { get; set; }

        public long TelephoneNumber { get; set; }

        public Status MyStatus { get; set; }

        public EmailPreference EmailPreferences { get; set; }
    }
}
