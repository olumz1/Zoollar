using System.ComponentModel.DataAnnotations;
using Zoollar.Properties.API.Models;

namespace Zoollar.Properties.API.Dtos
{
    public class CreatePropertyDto
    {
        [Required]
        public string Description { get; set; }

        [Required]
        public PropertyType PropertyType { get; set; }

        [Required]
        public PropertyListingType PropertyListingType { get; set; }

        public PropertyDetailsDto PropertyDetailsDto { get; set; }

        public PropertyImageDto PropertyImage { get; set; }

        public PropertyAgentDto PropertyAgent { get; set; }
    }
}
