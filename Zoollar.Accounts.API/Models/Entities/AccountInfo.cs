using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Zoollar.Accounts.API.Models.Enum;

namespace Zoollar.Accounts.API.Models.Entities
{
    public class AccountInfo
    {
        [Key]
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Category("Security")]
        [Description("Demonstrates PasswordPropertyTextAttribute.")]
        [PasswordPropertyText(true)]
        public string Password { get; set; }

        [Display(Name = "Email address")]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string EmailAdress { get; set; }

        public long TelephoneNumber { get; set; }

        public Status MyStatus { get; set; }

        public EmailPreference EmailPreferences { get; set; }

        public DateTime DateCreated { get; set; }

    }
}
