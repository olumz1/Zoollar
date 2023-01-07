using System.ComponentModel.DataAnnotations;

namespace Zoollar.Blogs.API.Models.Entities
{
    public class Blog
    {
        public Guid Id { get; set; }

        [Required]
        public string Header { get; set; }

        [Required]
        public DateTime PublishedDate { get; set; }

        [Required]
        public string Image { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Author { get; set; }

        public string Profession { get; set; }

        public bool IsVisible { get; set; }
    }
}
