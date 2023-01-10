using AutoMapper;
using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Dtos;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Models.Filter;

namespace Zoollar.Properties.API.Services
{
    public class PropertyService : IPropertyService
    {
        private readonly IPropertyRepo _propertyRepo;
        private readonly IMapper _mapper;

        public PropertyService(IPropertyRepo propertyRepo, IMapper mapper)
        {
            _propertyRepo = propertyRepo;
            _mapper = mapper;
        }

        public async Task<PagedResponse<GetPropertyDto>> GetAllProperties(PaginationFilter filter)
        {
            var properties = await _propertyRepo.GetAllProperties(filter);
            var getPropertiesDto = _mapper.Map<PagedResponse<GetPropertyDto>>(properties);
            return getPropertiesDto;
        }
    }
}
