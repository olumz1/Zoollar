namespace Zoollar.Properties.API.Models.Entities
{
    public class Agent
    {
        public int Id { get; set; }

        public IEnumerable<PropertySettings> Properties{get; set;}
    }
}
