using Microsoft.AspNetCore.Mvc;
using System.Net;
using Zoollar.Blogs.API.Dtos;
using Zoollar.Blogs.API.Services;

namespace Zoollar.Blogs.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogsController: ControllerBase
    {
        private readonly IBlogService _blogService;
        public BlogsController(IBlogService blogService)
        {
            _blogService = blogService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<GetBlogDto>> GetBlogs()
        {
            return Ok(_blogService.GetBlogs());
        }

        [HttpGet("{id}", Name = "GetBlogById")]
        public ActionResult<GetBlogDto> GetBlogById(Guid id)
        {
            if (id == Guid.Empty) return BadRequest();
            var blog = _blogService.GetBlogById(id);
            if (blog != null) 
            {
                return Ok(blog);
            }
            return NotFound();
        }

        [HttpPost]
        public ActionResult<GetBlogDto> CreateBlog([FromBody]CreateBlogDto blog) 
        {
            if (!ModelState.IsValid) { return BadRequest(nameof(CreateBlog)); }
            var getBlogDto = _blogService.CreateBlog(blog);
            return CreatedAtRoute(nameof(GetBlogById), new { getBlogDto.Id}, getBlogDto);
        }

        [HttpDelete]
        public ActionResult DeleteBlog(Guid id) 
        {
            if (id == Guid.Empty) return BadRequest();
            _blogService.DeleteBlog(id);
            return Ok();
        }

        [HttpPut]
        public ActionResult UpdateBlog(Guid id, [FromBody] CreateBlogDto blog)
        {
            if (id == Guid.Empty || blog == null) return BadRequest(nameof(UpdateBlog));
            var getBlogDto = _blogService.UpdateBlog(id, blog);
            return CreatedAtRoute(nameof(GetBlogById), new { getBlogDto.Id }, getBlogDto);
        }
    }
}
