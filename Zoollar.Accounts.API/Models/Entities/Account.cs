using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Security.Principal;
using System.Xml.Linq;
using Zoollar.Accounts.API.Models.Enum;

namespace Zoollar.Accounts.API.Models.Entities
{
    public class Account
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public AccontType AccountType { get; set; }

        public string UserName { get; set; }

        [Category("Security")]
        [Description("Demonstrates PasswordPropertyTextAttribute.")]
        [PasswordPropertyText(true)]
        public string Password { get; set; }

        [Display(Name = "Email address")]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string EmailAdress { get; set; }

        public Address Address { get; set; }

        public Status MyStatus { get; set; }


    }
}
