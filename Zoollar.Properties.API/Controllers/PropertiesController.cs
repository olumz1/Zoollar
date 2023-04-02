using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models;
using Zoollar.Properties.API.Models.Filter;
using Zoollar.Properties.API.Services;

namespace Zoollar.Properties.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertiesController : ControllerBase
    {
        private readonly IPropertyService _propertyService;

        private IConfiguration _configuration;

        public PropertiesController(IPropertyService propertyService, IConfiguration configuration)
        {
            _propertyService = propertyService;
            _configuration = configuration;
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

        [HttpGet("{id}", Name = "GetPropertyById")]
        public async Task<IActionResult> GetPropertyById(Guid id)
        {
            if (id == Guid.Empty) return BadRequest();

            var property = await _propertyService.GetPropertyById(id);

            if (property != null)
            {
                return Ok(property);
            }
            return NotFound();
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateProperties([FromBody] CreatePropertyDto createPropertyDto)
        {
            if (!ModelState.IsValid) { return BadRequest(nameof(CreateProperties)); }

            var user = User?.Identity?.Name;
            var userId = User?.Claims.FirstOrDefault(c => c.Type == _configuration["NameIdentifier"])?.Value;

            var response = await _propertyService.CreateProperty(createPropertyDto, userId);

            return CreatedAtRoute(nameof(GetPropertyById), new { response.Id}, response);
        }

        [HttpPut]
        [Authorize(Roles = "Agent, Builder")]
        public async Task<IActionResult> UpdateProperties(Guid id, [FromBody] CreatePropertyDto createPropertyDto)
        {
            if (!ModelState.IsValid) { return BadRequest(nameof(UpdateProperties)); }

            var user = User?.Identity?.Name;
            var updatedBy = User?.Claims.FirstOrDefault(c => c.Type == _configuration["NameIdentifier"])?.Value;

            var response = await _propertyService.UpdateProperty(id, createPropertyDto, updatedBy);

            return CreatedAtRoute(nameof(GetPropertyById), new { response.Id }, response);
        }

        //[HttpGet("{city}/FilterPropertiesByCity", Name = "FilterPropertiesByCity")]
        //public async Task<IActionResult> FilterPropertiesByCity([FromQuery] PaginationFilter filter, string city) 
        //{
        //    var response = await _propertyService.FilterPropertiesByCity(filter, city);

        //    var metadata = new
        //    {
        //        response.TotalRecords,
        //        response.PageSize,
        //        response.CurrentPage,
        //        response.HasNext,
        //        response.HasPrevious
        //    };
        //    Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));
        //    return Ok(response);
        //}

        //[HttpGet("{propertyListingType}/FilterPropertiesByListingType", Name = "FilterPropertiesByListingType")]
        //public async Task<IActionResult> FilterPropertiesByListingType([FromQuery] PaginationFilter filter, string propertyListingType) 
        //{
        //    PropertyListingType propertyListing = propertyListingType.ToEnum<PropertyListingType>();
        //    var response = await _propertyService.FilterPropertiesByListingType(filter, propertyListing);

        //    var metadata = new
        //    {
        //        response.TotalRecords,
        //        response.PageSize,
        //        response.CurrentPage,
        //        response.HasNext,
        //        response.HasPrevious
        //    };
        //    Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));
        //    return Ok(response);
        //}

        //[HttpGet("{propertyType}", Name = "FilterPropertiesByPropertyType")]
        //public async Task<IActionResult> FilterPropertiesByPropertyType([FromQuery] PaginationFilter filter, string propertyType) 
        //{
        //    PropertyType propertyTypeEnum = propertyType.ToEnum<PropertyType>();
        //    var response = await _propertyService.FilterPropertiesByPropertyType(filter, propertyTypeEnum);

        //    var metadata = new
        //    {
        //        response.TotalRecords,
        //        response.PageSize,
        //        response.CurrentPage,
        //        response.HasNext,
        //        response.HasPrevious
        //    };
        //    Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));
        //    return Ok(response);
        //}

        //[HttpGet("{state}", Name = "FilterPropertiesByState")]
        //public async Task<IActionResult> FilterPropertiesByState([FromQuery] PaginationFilter filter, string state) 
        //{
        //    States stateEnum = state.ToEnum<States>();
        //    var response = await _propertyService.FilterPropertiesByState(filter, stateEnum);

        //    var metadata = new
        //    {
        //        response.TotalRecords,
        //        response.PageSize,
        //        response.CurrentPage,
        //        response.HasNext,
        //        response.HasPrevious
        //    };
        //    Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));
        //    return Ok(response);
        //}

        //[HttpGet("{agentId}", Name = "FilterPropertiesByAgentId")]
        //public async Task<IActionResult> FilterPropertiesByAgentId([FromQuery] PaginationFilter filter, Guid agentId) 
        //{
        //    if (agentId == Guid.Empty) return BadRequest();
        //    var response = await _propertyService.FilterPropertiesByAgentId(filter, agentId);

        //    var metadata = new
        //    {
        //        response.TotalRecords,
        //        response.PageSize,
        //        response.CurrentPage,
        //        response.HasNext,
        //        response.HasPrevious
        //    };
        //    Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));
        //    return Ok(response);
        //}
    }
}
