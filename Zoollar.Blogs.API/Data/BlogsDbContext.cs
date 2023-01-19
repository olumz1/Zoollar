using Microsoft.EntityFrameworkCore;
using Zoollar.Blogs.API.Models.Entities;


namespace Zoollar.Blogs.API.Data
{
    public class BlogsDbContext : DbContext
    {
        public BlogsDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Blog> Blogs { get; set; }

        public DbSet<ArchivedBlog> ArchivedBlogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<ArchivedBlog>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<Blog>()
                .HasKey(p=>p.Id);
        }
    }
}
