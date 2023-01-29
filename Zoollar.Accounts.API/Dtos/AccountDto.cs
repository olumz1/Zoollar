using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Zoollar.Accounts.API.Models.Enum;
using Zoollar.Accounts.API.Models;

namespace Zoollar.Accounts.API.Dtos
{
    public class AccountDto
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string UserName { get; set; }

        public string EmailAdress { get; set; }

        public Status MyStatus { get; set; }

        public EmailPreference[] EmailPreferences { get; set; }
    }
}
