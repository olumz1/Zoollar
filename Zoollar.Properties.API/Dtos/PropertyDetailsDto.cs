using Zoollar.Properties.API.Models;

namespace Zoollar.Properties.API.Dtos
{
    public class PropertyDetailsDto
    {
        public int NoOfBeds { get; set; }

        public int NoOfReceptions { get; set; }

        public int NoOfBathrooms { get; set; }

        public AddressDto Address { get; set; }
    }
}