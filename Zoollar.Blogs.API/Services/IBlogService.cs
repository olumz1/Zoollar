using Zoollar.Blogs.API.Dtos;

namespace Zoollar.Blogs.API.Services
{
    public interface IBlogService
    {
        Task<GetBlogDto> CreateBlog(CreateBlogDto blog);
        Task DeleteBlog(Guid id);
        Task<GetBlogDto> GetBlogById(Guid id);
        Task<IEnumerable<GetBlogDto>> GetBlogs();
        Task<GetBlogDto> UpdateBlog(Guid id, CreateBlogDto blog);
    }
}
