using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;
using Zoollar.Properties.API.Dtos;

namespace Zoollar.Properties.API.Http
{
    public class AccountDataClient : IAccountDataClient
    {
        private readonly HttpClient _httpClient;

        private IConfiguration _configuration;

        public AccountDataClient(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        public async Task<AgentDetails?> GetPropertyAgentDetails(string userId)
        {
            var test = _configuration["AccountService"];
            var response = await _httpClient.GetAsync($"{test}{userId}");

            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<AgentDetails>(result);
            }
            else 
            {
                throw new Exception("Agent account not found");
            }
                
        }
    }
}
