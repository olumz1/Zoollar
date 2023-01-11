using System.ComponentModel.DataAnnotations;

namespace Zoollar.Properties.API.Dtos
{
    public class PropertyImageDto
    {
        [Required]
        public string ImageUrl { get; set; }

        public bool IsMainImage { get; set; }
    }
}