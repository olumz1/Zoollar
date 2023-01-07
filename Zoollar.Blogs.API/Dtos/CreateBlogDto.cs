using System.ComponentModel.DataAnnotations;

namespace Zoollar.Blogs.API.Dtos
{
    public class CreateBlogDto
    {

        [Required]
        public string Header { get; set; }

        [Required]
        public string Image { get; set; }

        [Required]
        public string Description { get; set; }

    }
}
