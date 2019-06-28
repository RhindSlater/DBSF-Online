namespace OnlineDBSF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateGameSession : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.GameSessions", "P1_ID", c => c.Int());
            AddColumn("dbo.GameSessions", "P2_ID", c => c.Int());
            CreateIndex("dbo.GameSessions", "P1_ID");
            CreateIndex("dbo.GameSessions", "P2_ID");
            AddForeignKey("dbo.GameSessions", "P1_ID", "dbo.Characters", "ID");
            AddForeignKey("dbo.GameSessions", "P2_ID", "dbo.Characters", "ID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.GameSessions", "P2_ID", "dbo.Characters");
            DropForeignKey("dbo.GameSessions", "P1_ID", "dbo.Characters");
            DropIndex("dbo.GameSessions", new[] { "P2_ID" });
            DropIndex("dbo.GameSessions", new[] { "P1_ID" });
            DropColumn("dbo.GameSessions", "P2_ID");
            DropColumn("dbo.GameSessions", "P1_ID");
        }
    }
}
