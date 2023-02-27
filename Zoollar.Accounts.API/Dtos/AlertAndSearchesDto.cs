namespace Zoollar.Accounts.API.Dtos
{
    public class AlertAndSearchesDto
    {
        public string LocationMapImage { get; set; }

        public string State { get; set; }

        public string City { get; set; }

        public string locationTitle => $"{State}, {City}";
    }
}