using Microsoft.EntityFrameworkCore;

namespace ItemsApi.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public virtual DbSet<Item> Items { get; set; }

    }
}