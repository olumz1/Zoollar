namespace Zoollar.Properties.API.Models.Entities
{
    public class UserSavedProperty
    {
        public int Id { get; set; }

        public Guid UserId { get; set; }

        public IEnumerable<PropertyData> SavedProperties { get; set; }

        public Guid[] OwnedProperty { get; set; }
    }
}
