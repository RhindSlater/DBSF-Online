namespace OnlineDBSF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class GameSession : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.GameSessions",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        user1_ID = c.Int(),
                        user2_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Users", t => t.user1_ID)
                .ForeignKey("dbo.Users", t => t.user2_ID)
                .Index(t => t.user1_ID)
                .Index(t => t.user2_ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.GameSessions", "user2_ID", "dbo.Users");
            DropForeignKey("dbo.GameSessions", "user1_ID", "dbo.Users");
            DropIndex("dbo.GameSessions", new[] { "user2_ID" });
            DropIndex("dbo.GameSessions", new[] { "user1_ID" });
            DropTable("dbo.GameSessions");
        }
    }
}
