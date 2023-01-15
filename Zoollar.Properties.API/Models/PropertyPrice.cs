namespace Zoollar.Properties.API.Models
{
    public class PropertyPrice
    {
        public long Price { get; set;}

        public bool OffersOver { get; set; }

        public bool OffersInRange { get; set; }

        public Currency Currency { get; set; }
    }
}