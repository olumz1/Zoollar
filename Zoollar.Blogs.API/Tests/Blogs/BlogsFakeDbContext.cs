using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using NUnit.Framework;
using Zoollar.Blogs.API.Common;
using Zoollar.Blogs.API.Data;
using Zoollar.Blogs.API.Models.Entities;

namespace Zoollar.Blogs.API.Tests.Blogs
{
    public class BlogsFakeDbContext
    {
        private static DbContextOptionsBuilder<BlogsDbContext> optionsBuider = new DbContextOptionsBuilder<BlogsDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString());

        BlogsDbContext blogContext = new BlogsDbContext(optionsBuider.Options);

        public BlogsDbContext BlogsDbContext()
        {
            blogContext.Database.EnsureCreated();
            SeedData(blogContext);

            return new BlogsDbContext(optionsBuider.Options);
        }

        private static void SeedData(BlogsDbContext blogContext)
        {
            if (!blogContext.Blogs.Any())
            {
                blogContext.Blogs.AddRange(new Blog
                {
                    Id = new Guid("{17C73ADB-D5B6-46BD-9EAF-6D54FB14E13F}"),
                    Header = "This is the first header 1",
                    Author = "TestUser1",
                    Description = "This is the blog description 1",
                    Image = "image.jpg",
                    IsVisible = true,
                    Profession = "Blog Profession1",
                    PublishedDate = new DateTime(2023, 10, 3)
                },
                new Blog
                {
                    Id = new Guid("{DB66DEA2-22C0-4415-940E-22F65033145F}"),
                    Header = "This is the first header",
                    Author = "TestUser",
                    Description = "This is the blog description",
                    Image = "image.jpg",
                    IsVisible = true,
                    Profession = "Blog Profession",
                    PublishedDate = new DateTime(2023, 8, 13)
                },
                new Blog
                {
                    Id = new Guid("{9F113F49-BB21-4934-9090-75D3875D026B}"),
                    Header = "This is the first header",
                    Author = "TestUser",
                    Description = "This is the blog description",
                    Image = "image.jpg",
                    IsVisible = true,
                    Profession = "Blog Profession",
                    PublishedDate = new DateTime(2022, 10, 11)
                });

                blogContext.SaveChanges();
            }
        }
    }
}
