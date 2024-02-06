//using JwtAuthenticationManager;
//using JwtAuthenticationManager.Models;
//using Microsoft.AspNetCore.Mvc;
//using Zoollar.Accounts.API.Services.UserAccount;

//namespace Zoollar.Accounts.API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class AuthenticateController : ControllerBase
//    {
//        private readonly JwtTokenHandler _jwtTokenHandler;

//        public AuthenticateController(JwtTokenHandler jwtTokenHandler)
//        {
//            _jwtTokenHandler = jwtTokenHandler;
//        }


//        [HttpPost]
//        public ActionResult<AuthenticationResponse?> Login([FromBody] AuthenticationRequest authenticationRequest)
//        {
//            var authenticationResponse = _jwtTokenHandler.GenerateJwtToken(authenticationRequest);
//            if (authenticationResponse == null) return Unauthorized();
//            return Ok(authenticationResponse);
//        }
//    }
//}
