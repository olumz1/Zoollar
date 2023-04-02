using System.ComponentModel.DataAnnotations;
using Zoollar.Properties.API.Models;

namespace Zoollar.Properties.API.Dtos
{
    public class PropertyPriceDto
    {
        [Required]
        public long Price { get; set; }

        public bool OffersOver { get; set; }

        public bool OffersInRange { get; set; }

        public string Currency { get; set; }
    }
}