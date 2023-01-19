using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;
using Zoollar.Blogs.API.Data;
using Zoollar.Blogs.API.Models.Entities;

namespace Zoollar.Blogs.API.Tests.Blogs
{
    public class FakeBlogRepository : IBlogRepo
    {
        private BlogsDbContext blogsFakeDbContext;

        public FakeBlogRepository(BlogsDbContext dbContext)
        {
            this.blogsFakeDbContext = dbContext;
        }

        public BlogsDbContext DbContext { get; }

        public async Task ArchiveBlog(ArchivedBlog blog)
        {
           await Task.FromResult(this.blogsFakeDbContext.Add(blog));
        }

        public async Task CreateBlog(Blog blog)
        {
            await Task.FromResult(this.blogsFakeDbContext.Add(blog));
            SaveChanges();
        }

        public async Task DeleteBlog(Guid id)
        {
            var blogToDelete = await GetBlogById(id);
            await Task.FromResult(this.blogsFakeDbContext.Remove(blogToDelete));
            SaveChanges();
        }

        public async Task<IEnumerable<Blog>> GetAllBlogs()
        {
            return await Task.FromResult(this.blogsFakeDbContext.Blogs.ToList());
        }

        public async Task<Blog?> GetBlogById(Guid id)
        {
            return await Task.FromResult(this.blogsFakeDbContext.Blogs.FirstOrDefault(x=>x.Id == id));
        }

        public bool SaveChanges()
        {
            return (this.blogsFakeDbContext.SaveChanges() >= 0);
        }

        public async Task UpdateBlog(Blog blog)
        {
            await Task.FromResult(this.blogsFakeDbContext.Blogs.Update(blog));
            SaveChanges();
        }
    }
}