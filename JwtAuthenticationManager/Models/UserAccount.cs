﻿namespace JwtAuthenticationManager.Models
{
    public class UserAccount
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public Guid UserId { get; set; }
    }
}
