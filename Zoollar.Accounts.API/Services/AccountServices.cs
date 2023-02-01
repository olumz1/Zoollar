using AutoMapper;
using Zoollar.Accounts.API.Common;
using Zoollar.Accounts.API.Data;
using Zoollar.Accounts.API.Dtos;
using Zoollar.Accounts.API.Models;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Services
{
    public class AccountServices : IAccountServices
    {
        private readonly AccountRepo<User> _userRepo;
        private readonly IMapper _mapper;
        private readonly IDateTimeProvider _dateTimeProvider;

        public AccountServices(IMapper mapper, IDateTimeProvider dateTimeProvider, AccountRepo<User> userRepo)
        {
            _userRepo = userRepo;
            _mapper = mapper;
            _dateTimeProvider = dateTimeProvider;
            _userRepo = userRepo;
        }

        public async Task<GetUserAccountDto> CreateUserAccount(CreateUserAccountDto createUserDto)
        {
            var user = _mapper.Map<User>(createUserDto);
            user.Id = Guid.NewGuid();
            user.DateCreated = _dateTimeProvider.GetDateTimeNow();
            await _userRepo.CreateAccount(user);

            var getUserDto = _mapper.Map<GetUserAccountDto>(user);
            return await Task.FromResult(getUserDto);
        }

        public async Task<GetUserAccountDto> GetUserAccountById(Guid id)
        {
            var userAccount = await _userRepo.GetAccountById(id);

            return _mapper.Map<GetUserAccountDto>(userAccount);
        }

        public async Task DeleteAccountById(Guid id)
        {
            await _userRepo.DeleteAccount(id);

        }
    }
}
