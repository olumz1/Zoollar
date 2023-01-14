using System.Reflection.Metadata;
using Zoollar.Blogs.API.Data;
using Zoollar.Blogs.API.Models.Entities;

namespace Zoollar.Blogs.API.Tests.Blogs
{
    public class FakeBlogRepository : IBlogRepo
    {
        private readonly BlogsFakeDbContext blogsFakeDbContext;

        public FakeBlogRepository(BlogsFakeDbContext blogsFakeDbContext)
        {
            this.blogsFakeDbContext = blogsFakeDbContext;
        }

        public async Task ArchiveBlog(ArchivedBlog blog)
        {
           await Task.FromResult(this.blogsFakeDbContext.BlogsContext.Remove(blog));
        }

        public async Task CreateBlog(Blog blog)
        {
            await Task.FromResult(this.blogsFakeDbContext.BlogsContext.Add(blog));
        }

        public async Task DeleteBlog(Guid id)
        {
            await Task.FromResult(this.blogsFakeDbContext.BlogsContext.Remove(id));
        }

        public async Task<IEnumerable<Blog>> GetAllBlogs()
        {
            return await Task.FromResult(this.blogsFakeDbContext.BlogsContext.Blogs.ToList());
        }

        public async Task<Blog?> GetBlogById(Guid id)
        {
            return await Task.FromResult(this.blogsFakeDbContext.BlogsContext.Blogs.FirstOrDefault(x=>x.Id == id));
        }

        public bool SaveChanges()
        {
            return SaveChanges();
        }

        public async Task UpdateBlog(Blog blog)
        {
            await Task.FromResult(this.blogsFakeDbContext.BlogsContext.Blogs.Update(blog));
        }
    }
}