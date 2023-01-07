using System.ComponentModel.DataAnnotations;

namespace Zoollar.Blogs.API.Models.Entities
{
    public class ArchivedBlog
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public Guid BlogId { get; set; }

        public Blog Blog { get; set; }
    }
}
