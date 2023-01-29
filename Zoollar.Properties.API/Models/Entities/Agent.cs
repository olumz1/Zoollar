namespace Zoollar.Properties.API.Models.Entities
{
    public class Agent
    {
        public int Id { get; set; }

        public Guid AgentId { get; set; }

        public IEnumerable<PropertyData> Properties{get; set;}
    }
}
