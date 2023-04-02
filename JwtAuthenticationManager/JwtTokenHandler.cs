using JwtAuthenticationManager.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JwtAuthenticationManager
{
    public class JwtTokenHandler
    {
        public const string JWT_SECURITY_KEY = "eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3NTg2Njk0MywiaWF0IjoxNjc1ODY2OTQzfQ";
        private const int JWT_TOKEN_VALIDITY_MINS = 20;
        private const int JWT_TOKEN_VALIDITY_MAXS = 20;
        private readonly List<UserAccount> _userAccountList;

        public JwtTokenHandler() 
        {
            _userAccountList = new List<UserAccount>
            {
                new UserAccount{ UserName = "admin", Password = "admin123", Role = "Administartor", UserId = Guid.Parse("{45EE4595-F57F-4296-BC6D-656F91E1DD4E}") },
                new UserAccount{ UserName = "user01", Password = "user01", Role = "User", UserId = Guid.Parse("{2BB75AEA-6D93-44D8-AF21-2043243F0E1F}") }
            };
        }

        public AuthenticationResponse? GenerateJwtToken(AuthenticationRequest authenticationRequest) 
        {
            if (string.IsNullOrWhiteSpace(authenticationRequest.UserName) || string.IsNullOrWhiteSpace(authenticationRequest.Password)) return null;

            //todo: make a call to the Account API to validate User

            var userAccount = _userAccountList.Where(x => x.UserName == authenticationRequest.UserName && x.Password == authenticationRequest.Password).FirstOrDefault();
            if (userAccount == null) return null;

            var tokenExpiryTimeStamp = DateTime.Now.AddMinutes(JWT_TOKEN_VALIDITY_MINS);
            var tokenKey = Encoding.ASCII.GetBytes(JWT_SECURITY_KEY);
            var claimsIdentity = new ClaimsIdentity(new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Name, authenticationRequest.UserName),
                new Claim(JwtRegisteredClaimNames.NameId, userAccount.UserId.ToString()),
                new Claim(ClaimTypes.Role, userAccount.Role),
                new Claim(ClaimTypes.Name, userAccount.UserName),
            });

            var signingCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey),
                SecurityAlgorithms.HmacSha256Signature);

            var securityTokenDescriptor = new SecurityTokenDescriptor 
            {
                Subject = claimsIdentity,
                Expires = tokenExpiryTimeStamp,
                SigningCredentials = signingCredentials
            };

            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var securityToken = jwtSecurityTokenHandler.CreateToken(securityTokenDescriptor);

            var token = jwtSecurityTokenHandler.WriteToken(securityToken);

            return new AuthenticationResponse 
            { 
                UserName = userAccount.UserName, 
                ExpiresIn = (int)tokenExpiryTimeStamp.Subtract(DateTime.Now).TotalSeconds,
                JwtToken = token,
                UserId = userAccount.UserId.ToString()
            };
        }
    }
}
