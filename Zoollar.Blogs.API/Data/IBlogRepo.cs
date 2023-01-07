using Zoollar.Blogs.API.Models.Entities;

namespace Zoollar.Blogs.API.Data
{
    public interface IBlogRepo
    {
        bool SaveChanges();

        Task<IEnumerable<Blog>> GetAllBlogs();

        Task<Blog?> GetBlogById (Guid id);

        Task CreateBlog(Blog blog);

        Task DeleteBlog(Guid id);
        Task UpdateBlog(Blog blog);

        Task ArchiveBlog(ArchivedBlog blog);

    }
}
