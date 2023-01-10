using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Zoollar.Properties.API.Models.Filter;
using Zoollar.Properties.API.Services;

namespace Zoollar.Properties.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertiesController : ControllerBase
    {
        private readonly IPropertyService _propertyService;

        public PropertiesController(IPropertyService propertyService)
        {
            _propertyService = propertyService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProperties([FromQuery] PaginationFilter filter)
        {
            var response = await _propertyService.GetAllProperties(filter);

            var metadata = new 
            {
                response.TotalRecords,
                response.PageSize,
                response.CurrentPage,
                response.HasNext,
                response.HasPrevious
            };
            Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));
            return Ok(response);
        }
    }
}
