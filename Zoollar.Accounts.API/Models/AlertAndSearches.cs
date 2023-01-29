namespace Zoollar.Accounts.API.Models
{
    public class AlertAndSearches
    {
        public string LocationMapImage { get; set; }

        public string State { get; set; }

        public string City { get; set; }

        public string locationTitle => $"{State}, {City}";
    }
}