using System.Net.Cache;

namespace Zoollar.Properties.API.Models
{
    public class PropertyData
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public PropertyPrice PropertyPrice { get; set; }

        public PropertyType PropertyType { get; set; }

        public PropertyListingType PropertyListingType { get; set; }

        public PropertyImage PropertyImage { get; set; }

        public PropertyDetails PropertyDetails { get; set; }

        public PropertyAgent PropertyAgent { get; set; }

    }
}
