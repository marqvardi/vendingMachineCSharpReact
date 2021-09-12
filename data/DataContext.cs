using Microsoft.EntityFrameworkCore;

namespace VendingCSharpReact.data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base (options)
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}