namespace WebApplication6.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class hilangintestfield : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SalesOrders",
                c => new
                    {
                        SalesOrderId = c.Guid(nullable: false),
                        NoBukti = c.String(),
                        TglFaktur = c.DateTime(nullable: false),
                        TglJthTempo = c.DateTime(nullable: false),
                        SyaratBayar = c.String(),
                        Disc = c.Decimal(nullable: false, precision: 18, scale: 2),
                        GrandTotal = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.SalesOrderId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.SalesOrders");
        }
    }
}
