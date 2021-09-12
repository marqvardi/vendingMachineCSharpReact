
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VendingCSharpReact.data
{
    public class Product
    {
        public int Id { get; set; }
        public double Price { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Image { get; set; }
    }
}
