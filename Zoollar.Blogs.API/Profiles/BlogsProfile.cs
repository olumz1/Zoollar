using AutoMapper;
using Zoollar.Blogs.API.Dtos;
using Zoollar.Blogs.API.Models.Entities;

namespace Zoollar.Blogs.API.Profiles
{
    public class BlogsProfile : Profile
    {
        public BlogsProfile()
        {
            // Source -> Target
            CreateMap<Blog, GetBlogDto>();
            CreateMap<CreateBlogDto, Blog>();
            CreateMap<Blog, ArchivedBlog>();
        }
    }
}
