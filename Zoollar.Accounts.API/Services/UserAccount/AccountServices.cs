using AutoMapper;
using System.Runtime.CompilerServices;
using Zoollar.Accounts.API.Common;
using Zoollar.Accounts.API.Data;
using Zoollar.Accounts.API.Dtos;
using Zoollar.Accounts.API.Models;
using Zoollar.Accounts.API.Models.Entities;

namespace Zoollar.Accounts.API.Services.UserAccount
{
    public class AccountServices : IAccountServices
    {
        private readonly UserRepo _userRepo;
        private readonly IMapper _mapper;
        private readonly IDateTimeProvider _dateTimeProvider;

        public AccountServices(IMapper mapper, IDateTimeProvider dateTimeProvider, UserRepo userRepo)
        {
            _userRepo = userRepo;
            _mapper = mapper;
            _dateTimeProvider = dateTimeProvider;
            _userRepo = userRepo;
        }

        public async Task<GetUserAccountDto> CreateUserAccount(CreateUserAccountDto createUserDto)
        {
            var account = _mapper.Map<Account>(createUserDto);
            account.Id = Guid.NewGuid();
            account.DateCreated = _dateTimeProvider.GetDateTimeNow();
            await _userRepo.CreateAccount(account);

            var getUserDto = _mapper.Map<GetUserAccountDto>(account);
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

        public async Task<GetUserAccountDto> UpdateUserAccount(Guid id, CreateUserAccountDto user)
        {
            var getUserAccountById = await _userRepo.GetAccountById(id);

            if (getUserAccountById != null)
            {
                //getUserAccountById.Address = user.Address;
                getUserAccountById.EmailAdress = user.EmailAdress;
                getUserAccountById.FirstName = user.FirstName;
                getUserAccountById.LastName = user.LastName;
                getUserAccountById.TelephoneNumber = user.TelephoneNumber;
                getUserAccountById.AlertAndSearches = (ICollection<AlertAndSearches>)user.AlertAndSearches.ToList();
                getUserAccountById.EmailPreferences = user.EmailPreferences;
                getUserAccountById.DateUpdated = this._dateTimeProvider.GetDateTimeNow();

                await _userRepo.UpdateAccount(getUserAccountById);

                var getBlogDto = _mapper.Map<GetUserAccountDto>(getUserAccountById);
                return await Task.FromResult(getBlogDto);
            }
            else
            {
                //todo: implement logger to capture error logs
                throw new ArgumentNullException(nameof(UpdateUserAccount));
            }
        }
    }
}
