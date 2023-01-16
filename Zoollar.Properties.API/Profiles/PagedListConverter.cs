using AutoMapper;
using AutoMapper.Internal;
using AutoMapper.Internal.Mappers;
using System.Collections.Generic;
using System.Linq.Expressions;
using Zoollar.Properties.API.Helpers;

namespace Zoollar.Properties.API.Profiles
{
    public class PagedListConverter<TSource, TDestination> : ITypeConverter<PagedResponse<TSource>, PagedResponse<TDestination>> where TSource : class where TDestination : class
    {
        public PagedResponse<TDestination> Convert(PagedResponse<TSource> source, PagedResponse<TDestination> destination, ResolutionContext context)
        {
            var collection = context.Mapper.Map<IEnumerable<TSource>, IEnumerable<TDestination>>(source);

            return new PagedResponse<TDestination>((List<TDestination>)collection, source.Count, source.PageNumber, source.PageSize);
        }
    }

}
