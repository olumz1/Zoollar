namespace Zoollar.Properties.API.Models
{
    public class PropertyDetails
    {
        public int NoOfBeds { get; set; }

        public int NoOfReceptions { get; set; }

        public int NoOfbathrooms { get; set; }

        public Address Address { get; set; }

        public bool IsSold { get; set; }

        public DateTime? DateSold { get; set; }
    }
}