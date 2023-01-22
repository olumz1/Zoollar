using Newtonsoft.Json.Linq;
using Zoollar.Properties.API.Helpers;

namespace Zoollar.Properties.API.Models
{
    public enum PropertyType
    {
        [EnumMemberDetails(Value = "Mansion", IconPath = "")]
        Mansion,

        [EnumMemberDetails(Value = "Flats", IconPath = "")]
        Flats,

        [EnumMemberDetails(Value = "Detached", IconPath = "")]
        Detached,

        [EnumMemberDetails(Value = "Semi Detached", IconPath = "")]
        SemiDetached,

        [EnumMemberDetails(Value = "Bungalow", IconPath = "")]
        Bungalow,

        [EnumMemberDetails(Value = "Terraced", IconPath = "")]
        Terraced,

        [EnumMemberDetails(Value = "Penthouse", IconPath = "")]
        Penthouse,

        [EnumMemberDetails(Value = "Duplex", IconPath = "")]
        Duplex,

        [EnumMemberDetails(Value = "Twin Duplex", IconPath = "")]
        TwinDuplex,

        [EnumMemberDetails(Value = "Traditional", IconPath = "")]
        Traditional,

        [EnumMemberDetails(Value = "Land", IconPath = "")]
        Land,

        [EnumMemberDetails(Value = "FarmLand", IconPath = "")]
        FarmLand,

        [EnumMemberDetails(Value = "Warehouse", IconPath = "")]
        Warehouse,

        [EnumMemberDetails(Value = "Complex", IconPath = "")]
        Complex
    }
}