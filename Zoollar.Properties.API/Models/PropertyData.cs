using System.Net.Cache;

namespace Zoollar.Properties.API.Models
{
    public class PropertyData
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public PropertyPrice PropertyPrice { get; set; }

        public PropertyType PropertyType { get; set; }

        public PropertyListingType PropertyListingType { get; set; }

        public PropertyImage[] PropertyImage { get; set; }

        public PropertyDetails PropertyDetails { get; set; }

        public PropertyAgent PropertyAgent { get; set; }

        public DateTime CreatedTime { get; set; }

        public PropertyFeatures[] PropertyFeatures { get; set; }

        public Guid[] LoanCompanies { get; set; }

        public DateTime? LastUpdatedTime { get; set;}
    }
}
