using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Models
{
    public class AlertAndSearches
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string LocationMapImage { get; set; }

        public string State { get; set; }

        public string City { get; set; }

        public string locationTitle { get; set; }
    }
}