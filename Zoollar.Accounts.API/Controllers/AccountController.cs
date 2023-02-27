using JwtAuthenticationManager;
using JwtAuthenticationManager.Models;
using Microsoft.AspNetCore.Mvc;
using Zoollar.Accounts.API.Dtos;
using Zoollar.Accounts.API.Services.UserAccount;

namespace Zoollar.Accounts.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IUserServices _accountService;
        private readonly JwtTokenHandler _jwtTokenHandler;

        public AccountController(IUserServices accountService, JwtTokenHandler jwtTokenHandler)
        {
            _accountService = accountService;
            _jwtTokenHandler = jwtTokenHandler;
        }

        [Route("login"), HttpPost]
        public ActionResult<AuthenticationResponse?> Login([FromBody] AuthenticationRequest authenticationRequest) 
        {
            var authenticationResponse = _jwtTokenHandler.GenerateJwtToken(authenticationRequest);
            if (authenticationResponse == null) return Unauthorized();
            return Ok(authenticationResponse);
        }

        [HttpPost("CreateUserAccount")]
        public async Task<ActionResult<GetUserAccountDto>> CreateUserAccount([FromBody] CreateUserAccountDto createUserAccountDto)
        {
            if (!ModelState.IsValid) { return BadRequest(nameof(CreateUserAccount)); }
            var getUserDto = await _accountService.CreateUserAccount(createUserAccountDto);
            return CreatedAtRoute(nameof(GetUserAccountById), new { getUserDto.Id }, getUserDto);
        }

        [HttpGet("{id}", Name = "GetUserAccountById")]
        public async Task<ActionResult<GetUserAccountDto>> GetUserAccountById(Guid id)
        {
            if (id == Guid.Empty) return BadRequest();

            var userAccount = await _accountService.GetUserAccountById(id);
            if (userAccount != null) 
            {
                return Ok(userAccount);
            }
            return NotFound();
        }

        [HttpDelete]
        public ActionResult DeleteAccount(Guid id) 
        {
            if(id == Guid.Empty) return BadRequest();
            return Ok(_accountService.DeleteAccountById(id));
        }
    }
}
