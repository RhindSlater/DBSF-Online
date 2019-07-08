namespace OnlineDBSF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class power : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Characters", "Power", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Characters", "Power");
        }
    }
}
