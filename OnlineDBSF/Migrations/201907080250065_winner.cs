namespace OnlineDBSF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class winner : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.GameSessions", "Winner_ID", c => c.Int());
            CreateIndex("dbo.GameSessions", "Winner_ID");
            AddForeignKey("dbo.GameSessions", "Winner_ID", "dbo.Users", "ID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.GameSessions", "Winner_ID", "dbo.Users");
            DropIndex("dbo.GameSessions", new[] { "Winner_ID" });
            DropColumn("dbo.GameSessions", "Winner_ID");
        }
    }
}
