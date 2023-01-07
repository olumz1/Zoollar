namespace Zoollar.Properties.API.Models.Entities
{
    public class Agent
    {
        public int Id { get; set; }

        public IEnumerable<Property> Properties{get; set;}
    }
}
