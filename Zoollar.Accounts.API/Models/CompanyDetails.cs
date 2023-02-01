using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Models
{
    public class CompanyDetails
    {
        public CompanyDetails() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string CompanyName { get; set; }

        public string CompanyDescription { get; set;}

        public string Icon { get; set;}

        public string RegistrationNumber { get; set;}

        public Guid EstateAgentId { get; set; }
    }
}