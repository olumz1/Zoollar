using Microsoft.EntityFrameworkCore;
using Zoollar.Blogs.API.Common;
using Zoollar.Blogs.API.Data;
using Zoollar.Blogs.API.Models.Entities;

namespace Zoollar.Blogs.API.Tests.Blogs
{
    public class BlogsFakeDbContext : IDisposable
    {
        public BlogsDbContext BlogsContext { get; private set; }

        public IDateTimeProvider DateTimeProvider { get; private set; }

        public BlogsFakeDbContext()
        {
               var options = new DbContextOptionsBuilder<BlogsDbContext>()
                .UseInMemoryDatabase("BlogsDatabase")
                .Options;

            BlogsContext = new BlogsDbContext(options);

            BlogsContext.Blogs.Add(new Blog
            {
                Id = new Guid("{17C73ADB-D5B6-46BD-9EAF-6D54FB14E13F}"),
                Header = "This is the first header",
                Author = "TestUser",
                Description = "This is the blog description",
                Image = "image.jpg",
                IsVisible = true,
                Profession = "Blog Profession",
             });

            BlogsContext.Blogs.Add(new Blog
            {
                Id = new Guid("{DB66DEA2-22C0-4415-940E-22F65033145F}"),
                Header = "This is the first header",
                Author = "TestUser",
                Description = "This is the blog description",
                Image = "image.jpg",
                IsVisible = true,
                Profession = "Blog Profession",
            });

            BlogsContext.Blogs.Add(new Blog
            {
                Id = new Guid("{9F113F49-BB21-4934-9090-75D3875D026B}"),
                Header = "This is the first header",
                Author = "TestUser",
                Description = "This is the blog description",
                Image = "image.jpg",
                IsVisible = true,
                Profession = "Blog Profession",
            });

            BlogsContext.SaveChanges();
            
        }

        public void Dispose()
        {
            BlogsContext.Dispose();
        }
        
    }
}
