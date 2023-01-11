using System.ComponentModel.DataAnnotations;
using Zoollar.Properties.API.Models;

namespace Zoollar.Properties.API.Dtos
{
    public class GetPropertyDto
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string PropertyType { get; set; }

        public string PropertyListingType { get; set; }

        public PropertyDetailsDto PropertyDetailsDto { get; set; }

        public PropertyImageDto PropertyImage { get; set; }

        public PropertyAgentDto PropertyAgent { get; set; }
    }
}
