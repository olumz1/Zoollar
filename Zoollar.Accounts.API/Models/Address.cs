﻿using Zoollar.Accounts.API.Models.Enum;

namespace Zoollar.Accounts.API.Models
{
    public class Address
    {
        public int HouseNo { get; set; }

        public string HouseName { get; set; }

        public string AddressLine { get; set; }

        public string Town { get; set; }

        public string City { get; set; }

        public States State { get; set; }

        public string Region { get; set; }

        public string ZipCode { get; set; }

        public string Country { get; set; }
    }
}