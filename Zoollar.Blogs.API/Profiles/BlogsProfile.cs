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
            CreateMap<Blog, ArchivedBlog>()
                .ForMember(pt => pt.BlogId, act => act.MapFrom(bl => bl.Id))
                .ForMember(pt => pt.Id, act => act.Ignore())
                .ForMember(pt => pt.DeletedDate, act => act.Ignore());
        }
    }
}
