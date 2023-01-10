using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Services
{
    public interface IPropertyService
    {
        Task<PagedResponse<GetPropertyDto>> GetAllProperties(PaginationFilter filter);
    }
}
