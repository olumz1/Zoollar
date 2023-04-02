using System.ComponentModel.DataAnnotations;
using Zoollar.Properties.API.Models;

namespace Zoollar.Properties.API.Dtos
{
    public class CreatePropertyDto
    {
        [Required]
        public string Description { get; set; }

        [Required]
        public string PropertyType { get; set; }

        public PropertyPriceDto PropertyPrice { get; set; }

        [Required]
        public PropertyListingType PropertyListingType { get; set; }

        public PropertyDetailsDto PropertyDetails { get; set; }

        public PropertyImageDto[] PropertyImage { get; set; }

        public PropertyFeatures[] PropertyFeatures { get; set; }

    }
}
