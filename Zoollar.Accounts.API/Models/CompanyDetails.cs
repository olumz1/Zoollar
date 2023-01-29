namespace Zoollar.Accounts.API.Models
{
    public class CompanyDetails
    {
        public string CompanyName { get; set; }

        public string CompanyDescription { get; set;}

        public string Icon { get; set;}

        public Address RegisteredOffice { get; set;}

        public string RegistrationNumber { get; set;}
    }
}