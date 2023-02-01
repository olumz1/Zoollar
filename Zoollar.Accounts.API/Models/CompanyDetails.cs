using System.ComponentModel.DataAnnotations;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Models
{
    public class CompanyDetails
    {
        public CompanyDetails() { }

        [Key]
        public Guid Id { get; set; }

        public string CompanyName { get; set; }

        public string CompanyDescription { get; set;}

        public string Icon { get; set;}

        public string RegistrationNumber { get; set;}

        public Address RegisteredOffice { get; set; }
    }
}