using System.ComponentModel.DataAnnotations;
using Zoollar.Properties.API.Models;

namespace Zoollar.Properties.API.Dtos
{
    public class GetPropertyDto
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public PropertyType PropertyType { get; set; }

        public PropertyListingType PropertyListingType { get; set; }

        public PropertyPriceDto PropertyPrice { get; set; }

        public PropertyDetailsDto PropertyDetails { get; set; }

        public PropertyImageDto[] PropertyImage { get; set; }

        public PropertyAgentDto PropertyAgent { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
