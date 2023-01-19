using AutoMapper;
using FluentAssertions;
using Moq;
using NUnit.Framework;
using Zoollar.Blogs.API.Common;
using Zoollar.Blogs.API.Data;
using Zoollar.Blogs.API.Dtos;
using Zoollar.Blogs.API.Models.Entities;
using Zoollar.Blogs.API.Services;

namespace Zoollar.Blogs.API.Tests.Blogs
{
    [TestFixture]
    public class BlogServiceTests
    {
        private IBlogRepo fakeBlogRepository;
        private IBlogService sut;
        private IMapper _mapper;
        private Mock<IDateTimeProvider> _dateTimeProvider;
        private BlogsDbContext _dbContext;

        [OneTimeSetUp]
        public void SetUp()
        {
            this._dateTimeProvider = new Mock<IDateTimeProvider>();
            var config = new MapperConfiguration(cfg => {
                cfg.CreateMap<Blog, GetBlogDto>();
                cfg.CreateMap<CreateBlogDto, Blog>();
                cfg.CreateMap<Blog, ArchivedBlog>()
                .ForMember(pt => pt.BlogId, act => act.MapFrom(bl => bl.Id))
                .ForMember(pt => pt.Id, act => act.Ignore());
            });
            this._mapper = config.CreateMapper();

            this._dateTimeProvider.Setup(x => x.GetDateTimeNow()).Returns(new DateTime(2022, 10, 5));

        }

        [Test]
        public async Task When_CreateBlog_IsCalled_NewBlog_Should_BeCreated()
        {
            _dbContext = new BlogsFakeDbContext().BlogsDbContext();

            this.fakeBlogRepository = new FakeBlogRepository(_dbContext);

            this.sut = new BlogService(this.fakeBlogRepository, _mapper, this._dateTimeProvider.Object);

            var blog = new CreateBlogDto();

            blog.Header = "My new blog header";
            blog.Description = "This is a test blog description";
            blog.Image = "BlogImage.jpg";
            var blogCreated = await this.sut.CreateBlog(blog);

            blogCreated.PublishedDate.Should().Be(new DateTime(2022, 10, 5));
            blogCreated.Header.Should().Be("My new blog header");
            blogCreated.Description.Should().Be("This is a test blog description");
            blogCreated.PublishedDate = new DateTime(2022, 10, 5);

            _dbContext.Database.EnsureDeleted();

        }

        [Test]
        public async Task When_GetBlogById_IsCalled_WithABlogGuid_Return_Blog()
        {

            _dbContext = new BlogsFakeDbContext().BlogsDbContext();

            this.fakeBlogRepository = new FakeBlogRepository(_dbContext);

            this.sut = new BlogService(this.fakeBlogRepository, _mapper, this._dateTimeProvider.Object);

            var blog = await this.sut.GetBlogById(new Guid("17C73ADB-D5B6-46BD-9EAF-6D54FB14E13F"));

            blog.PublishedDate.Should().Be(new DateTime(2023, 10, 3));
            blog.Header.Should().Be("This is the first header 1");
            blog.Author.Should().Be("TestUser1");
            blog.Description.Should().Be("This is the blog description 1");
            blog.Image.Should().Be("image.jpg");
            blog.IsVisible.Should().BeTrue();
            blog.Profession.Should().Be("Blog Profession1");

            _dbContext.Database.EnsureDeleted();

        }

        [Test]
        public void When_GetAllBlog_IsCalled_ReturnAllBlogs()
        {

            _dbContext = new BlogsFakeDbContext().BlogsDbContext();

            this.fakeBlogRepository = new FakeBlogRepository(_dbContext);

            this.sut = new BlogService(this.fakeBlogRepository, _mapper, this._dateTimeProvider.Object);

            var blogs = this.sut.GetBlogs().Result.ToList();

            blogs.Count().Should().Be(3);
            blogs[0].Id.Should().Be(new Guid("17C73ADB-D5B6-46BD-9EAF-6D54FB14E13F"));
            blogs[1].Id.Should().Be(new Guid("DB66DEA2-22C0-4415-940E-22F65033145F"));
            blogs[2].Id.Should().Be(new Guid("9F113F49-BB21-4934-9090-75D3875D026B"));

            _dbContext.Database.EnsureDeleted();

        }

        [Test]
        public async Task When_UpdateBlog_IsCalled_BlogShouldBeUpdated()
        {

            _dbContext = new BlogsFakeDbContext().BlogsDbContext();
 
            this.fakeBlogRepository = new FakeBlogRepository(_dbContext);

            this.sut = new BlogService(this.fakeBlogRepository, _mapper, this._dateTimeProvider.Object);

            var blogToUpdate = new CreateBlogDto()
            {
                Header = "This is the first header UPDATED",
                Description = "This is the blog description UPDATED",
                Image = "updatedImage.jpg",
            };
            var blog = await this.sut.UpdateBlog(new Guid("17C73ADB-D5B6-46BD-9EAF-6D54FB14E13F"), blogToUpdate);

            blog.Id.Should().Be(new Guid("17C73ADB-D5B6-46BD-9EAF-6D54FB14E13F"));
            blog.Header.Should().Be("This is the first header UPDATED");
            blog.Image.Should().Be("updatedImage.jpg");

            _dbContext.Database.EnsureDeleted();

        }

        [Test]
        public async Task When_DeleteBlog_IsCalled_BlogShouldBeDeleted()
        {

            _dbContext = new BlogsFakeDbContext().BlogsDbContext();

            this.fakeBlogRepository = new FakeBlogRepository(_dbContext);

            this.sut = new BlogService(this.fakeBlogRepository, _mapper, this._dateTimeProvider.Object);

            await this.sut.DeleteBlog(new Guid("17C73ADB-D5B6-46BD-9EAF-6D54FB14E13F"));

            var blog = await this.sut.GetBlogById(new Guid("17C73ADB-D5B6-46BD-9EAF-6D54FB14E13F"));

            blog.Should().BeNull();

            _dbContext.Database.EnsureDeleted();
        }
    }
}
