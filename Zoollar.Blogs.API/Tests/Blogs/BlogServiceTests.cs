using AutoMapper;
using NUnit.Framework;
using Zoollar.Blogs.API.Common;
using Zoollar.Blogs.API.Services;

namespace Zoollar.Blogs.API.Tests.Blogs
{
    [TestFixture]
    public class BlogServiceTests
    {
        private FakeBlogRepository fakeBlogRepository;
        private IBlogService blogService;
        private readonly IMapper _mapper;
        private readonly IDateTimeProvider _dateTimeProvider;

        public BlogServiceTests(FakeBlogRepository fakeBlogRepository, IDateTimeProvider dateTimeProvider)
        {
            this.fakeBlogRepository = fakeBlogRepository;
            _dateTimeProvider = dateTimeProvider;

            _dateTimeProvider = dateTimeProvider;
        }

        [Test]
        public void TestToCreateNewBlog() 
        {
        }

        [Test]
        public void WhenABlogIdIsSentReturnTheBlog()
        {
        }
    }
}
