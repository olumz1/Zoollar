using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Models
{
    public class AlertAndSearches
    {
        public Guid Id { get; set; }
        public string LocationMapImage { get; set; }

        public string State { get; set; }

        public string City { get; set; }

        public string locationTitle { get; set; }
    }
}