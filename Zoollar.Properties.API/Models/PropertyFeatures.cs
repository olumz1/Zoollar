using System.Runtime.Serialization;
using Zoollar.Properties.API.Helpers;

namespace Zoollar.Properties.API.Models
{
    public enum PropertyFeatures
    {
        [EnumMemberDetails(Value = "BulletProof Doors", IconPath = "")]
        BulletProofDoors,

        [EnumMemberDetails(Value = "Garden", IconPath = "")]
        Garden,

        [EnumMemberDetails(Value = "Strong Internet Coverage", IconPath = "")]
        StrongInternetCoverage,

        [EnumMemberDetails(Value = "Strong Mobile Phone Signal", IconPath = "")]
        StrongMobilePhoneSignal,

        [EnumMemberDetails(Value = "Close To Shop And Amenities", IconPath = "")]
        CloseToShopAndAmenities,

        [EnumMemberDetails(Value = "Spaceous Compound", IconPath = "")]
        SpaceousCompound,

        [EnumMemberDetails(Value = "Friendly Neighbours", IconPath = "")]
        FriendlyNeighbours,

        [EnumMemberDetails(Value = "Ample Parking Space", IconPath = "")]
        AmpleParkingSpace,

        [EnumMemberDetails(Value = "Swimming Pool", IconPath = "")]
        SwimmingPool,

        [EnumMemberDetails(Value = "Gate House", IconPath = "")]
        GateHouse,

        [EnumMemberDetails(Value = "Water Heater",  IconPath = "")]
        WaterHeater,

        [EnumMemberDetails(Value = "Gated Estate", IconPath = "")]
        GatedEstate,

        [EnumMemberDetails(Value = "CCTV Monitored", IconPath = "")]
        CctvMonitored,

        [EnumMemberDetails(Value = "Smart Home", IconPath = "")]
        SmartHome,

        [EnumMemberDetails(Value = "Borehole Water Supply", IconPath = "")]
        BoreholeWaterSupply,

        [EnumMemberDetails(Value = "Well Water Supply", IconPath = "")]
        WellWaterSupply,

        [EnumMemberDetails(Value = "Tarred Road", IconPath = "")]
        TarredRoad,

        [EnumMemberDetails(Value = "Fully Furnished", IconPath = "")]
        FullyFurnished,

        [EnumMemberDetails(Value = "UnFurnished", IconPath = "")]
        UnFurnished,

        [EnumMemberDetails(Value = "Partly Furnished", IconPath = "")]
        PartlyFurnished,

        [EnumMemberDetails(Value = "Fire Alarm System", IconPath = "")]
        FireAlarmSystem,

        [EnumMemberDetails(Value = "Cinema", IconPath = "")]
        Cinema,

        [EnumMemberDetails(Value = "Gym", IconPath = "")]
        Gym,

        [EnumMemberDetails(Value = "Estate Security", IconPath = "")]
        EstateSecuriy,

        [EnumMemberDetails(Value = "Boys Quarters", IconPath = "")]
        BoysQuarters,

        [EnumMemberDetails(Value = "Fully AirConditioned", IconPath = "")]
        FullyAirConditioned,

        [EnumMemberDetails(Value = "Partly AirConditioned", IconPath = "")]
        PartlyAirConditioned,

        [EnumMemberDetails(Value = "Round The Clock Security", IconPath = "")]
        RoundTheClockSecurity

    }
}