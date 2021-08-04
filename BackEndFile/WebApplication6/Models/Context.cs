using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace WebApplication6.Models
{
    public class Context : DbContext
    {
        public Context() : base("Context")
        {
        }

        public DbSet<SalesOrder> salesOrders { get; set; }

    }
}