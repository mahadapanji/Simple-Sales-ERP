using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using WebApplication6.Models;

namespace WebApplication6.Controllers
{
    public class SalesOrderController : ApiController
    {

        private Context db;
        public SalesOrderController()
        {
            db = new Context();
        }

        [HttpGet]
        [Route("api/SalesOrder/simple")]
        public IHttpActionResult Index()
        {
            //var salesOrder = new SalesOrder();
            //salesOrder.SalesOrderId = Guid.NewGuid();
            //salesOrder.NoBukti = "001";
            //salesOrder.TglFaktur = DateTime.Now;
            //salesOrder.TglJthTempo = DateTime.Now.AddDays(10);
            //salesOrder.SyaratBayar = "D0";
            //salesOrder.Disc = 13;
            //salesOrder.GrandTotal = 30000;

            //db.salesOrders.Add(salesOrder);
            //db.SaveChanges();
            var aaa = db.salesOrders.ToList();


            return Ok(db.salesOrders.ToList());
        }

        [HttpPost]
        [Route("api/SalesOrder/post")]
        public IHttpActionResult Post(SalesOrder salesOrder)
        {
            //var salesOrder = new SalesOrder();
            salesOrder.SalesOrderId = Guid.NewGuid();
            //salesOrder.NoBukti = "001";
            //salesOrder.TglFaktur = DateTime.Now;
            //salesOrder.TglJthTempo = DateTime.Now.AddDays(10);
            //salesOrder.SyaratBayar = "D0";
            //salesOrder.Disc = 13;
            //salesOrder.GrandTotal = 30000;

            db.salesOrders.Add(salesOrder);
            db.SaveChanges();

            return Ok();
        }

    }
}