using Zoollar.Properties.API.Dtos;

namespace Zoollar.Properties.API.Http
{
    public interface IAccountDataClient
    {
        Task<AgentDetails?> GetPropertyAgentDetails(string userId);
    }
}
