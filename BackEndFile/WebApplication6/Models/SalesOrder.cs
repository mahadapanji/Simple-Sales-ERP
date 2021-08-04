using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication6.Models
{
    public class SalesOrder
    {
        public Guid SalesOrderId { get; set; }
        public string NoBukti { get; set; }
        public DateTime TglFaktur { get; set; }
        public DateTime TglJthTempo { get; set; }
        public string SyaratBayar { get; set; }
        public decimal Disc { get; set; }
        public decimal GrandTotal { get; set; }
    }
}