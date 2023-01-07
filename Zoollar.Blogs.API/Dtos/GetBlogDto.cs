using System.ComponentModel.DataAnnotations;

namespace Zoollar.Blogs.API.Dtos
{
    public class GetBlogDto
    {
        public Guid Id { get; set; }

        public string Header { get; set; }

        public DateTime PublishedDate { get; set; }
  
        public string Image { get; set; }

        public string Description { get; set; }

        public string Author { get; set; }

        public string Profession { get; set; }

        public bool IsVisible { get; set; }
    }
}
