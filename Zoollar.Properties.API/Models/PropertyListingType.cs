using Newtonsoft.Json.Linq;
using Zoollar.Properties.API.Helpers;

namespace Zoollar.Properties.API.Models
{
    public enum PropertyListingType
    {
        [EnumMemberDetails(Value = "For sale")]
        ForSale,

        [EnumMemberDetails(Value = "To let")]
        ToLet,

        [EnumMemberDetails(Value = "Short let")]
        ShortLet
    }
}