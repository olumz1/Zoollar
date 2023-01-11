using AutoMapper;
using Zoollar.Blogs.API.Common;
using Zoollar.Blogs.API.Data;
using Zoollar.Blogs.API.Dtos;
using Zoollar.Blogs.API.Models.Entities;

namespace Zoollar.Blogs.API.Services
{
    public class BlogService : IBlogService
    {
        private readonly IBlogRepo _blogRepo;
        private readonly IMapper _mapper;
        private readonly IDateTimeProvider _dateTimeProvider;
        public BlogService(IBlogRepo blogRepo, IMapper mapper, IDateTimeProvider dateTimeProvider)
        {
            _blogRepo = blogRepo;
            _mapper = mapper;
            _dateTimeProvider = dateTimeProvider;
        }

        public async Task<GetBlogDto> CreateBlog(CreateBlogDto creatBlogDto)
        {
            var blog = _mapper.Map<Blog>(creatBlogDto);
            //todo: Get the user details from authentication and update Author & Profession
            blog.Id = Guid.NewGuid();
            blog.PublishedDate = _dateTimeProvider.GetDateTimeNow();
            blog.Author = "TestUser";
            blog.Profession = "Estate Agent";
            blog.IsVisible = true;
            await _blogRepo.CreateBlog(blog);

            var getBlogDto = _mapper.Map<GetBlogDto>(blog);
            return await Task.FromResult(getBlogDto);
        }

        public async Task DeleteBlog(Guid id)
        {
            var blog = await _blogRepo.GetBlogById(id) ?? null;
            if (blog != null)
            {
                var archivedBlog = _mapper.Map<ArchivedBlog>(blog);
                archivedBlog.BlogId = blog.Id;
                await _blogRepo.ArchiveBlog(archivedBlog);
                await _blogRepo.DeleteBlog(id);
            }
            else 
            {
                //todo: implement logger to capture error logs
                throw new ArgumentNullException(nameof(DeleteBlog));
            }
        }

        public async Task<GetBlogDto> GetBlogById(Guid id)
        {
            var blog = await _blogRepo.GetBlogById(id);

            return _mapper.Map<GetBlogDto>(blog);
        }

        public async Task<IEnumerable<GetBlogDto>> GetBlogs()
        {
            var blogs = await _blogRepo.GetAllBlogs();
            return _mapper.Map<IEnumerable<GetBlogDto>>(blogs);
        }

        public async Task<GetBlogDto> UpdateBlog(Guid id, CreateBlogDto blog)
        {
            var getBlogToUpdate = await _blogRepo.GetBlogById(id);

            if (getBlogToUpdate != null)
            {
                await _blogRepo.UpdateBlog(getBlogToUpdate);
                var getBlogDto = _mapper.Map<GetBlogDto>(getBlogToUpdate);
                return await Task.FromResult(getBlogDto);
            }
            else 
            {
                //todo: implement logger to capture error logs
                throw new ArgumentNullException(nameof(UpdateBlog));
            }
        }

    }
}
