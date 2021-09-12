using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VendingCSharpReact.data
{
    public class Seed
    {
        public static void SeedProducts(DataContext context)
        {
            if(!context.Products.Any())
            {            
                var products = new List<Product>
                {
                  new Product
                  {
                    
                      Name = "Cola",
                      Price = 1,
                      Quantity = 5,
                      Image = "cola.jpg"
                  },
                    new Product
                  {
                    
                      Name = "Crisps",
                      Price = 0.5,
                      Quantity = 5,
                      Image = "crisps.jpg"

                  },
                      new Product
                  {
                     
                      Name = "Chocolate",
                      Price = 0.65,
                      Quantity = 5,
                      Image = "chocolate.jpg"

                  },
                };

                foreach (var product in products)
                {
                    context.Add(product);
                }
                context.SaveChanges();
            }
        }
    }
}
