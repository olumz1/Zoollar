using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Zoollar.Accounts.API.Models.Entities;
using Zoollar.Accounts.API.Models.Enum;

namespace Zoollar.Accounts.API.Models
{
    public class Address
    {
        public Address() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid AddressId { get; set; }

        public int HouseNo { get; set; }

        public string HouseName { get; set; }

        public string AddressLine { get; set; }

        public string Town { get; set; }

        public string City { get; set; }

        public States State { get; set; }

        public string Region { get; set; }

        public string ZipCode { get; set; }

        public string Country { get; set; }

        [ForeignKey("Landlords")]
        public Guid LandlordId { get; set; }

        [ForeignKey("Lenders")]
        public Guid LenderId { get; set; }

        [ForeignKey("Users")]
        public Guid UserId { get; set; }

        [ForeignKey("CompanyDetails")]
        public Guid CompanyDetailsId { get; set; }
    }
}