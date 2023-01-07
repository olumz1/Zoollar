using Microsoft.Identity.Client;
using Zoollar.Blogs.API.Models.Entities;

namespace Zoollar.Blogs.API.Data
{
    public class BlogRepo : IBlogRepo
    {
        private readonly BlogsDbContext _dbContext;
        public BlogRepo(BlogsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task ArchiveBlog(ArchivedBlog archivedBlog)
        {
            if (archivedBlog == null)
            {
                throw new ArgumentNullException(nameof(archivedBlog));
            }

            _dbContext.ArchivedBlogs.Add(archivedBlog);
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

        public Task CreateBlog(Blog blog)
        {
            if (blog == null) 
            {
                throw new ArgumentNullException(nameof(blog));
            }

            _dbContext.Blogs.Add(blog);
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

        public Task DeleteBlog(Guid id)
        {
            var blogToDelete = GetBlogById(id);
            if (blogToDelete != null)
            {
                _dbContext.Remove(blogToDelete);
            }
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

        public async Task<IEnumerable<Blog>> GetAllBlogs()
        {
            return await Task.FromResult(_dbContext.Blogs.ToList());
        }

        public async Task<Blog?> GetBlogById(Guid id)
        {
            var blog = await Task.FromResult(_dbContext.Blogs.FirstOrDefault(blog => blog.Id == id));
            return blog != null ? blog : null;
        }

        public bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0); 
        }

        public Task UpdateBlog(Blog blog)
        {
            if (blog == null)
            {
                throw new ArgumentNullException(nameof(blog));
            }
            _dbContext.Update(blog);
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

    }
}
