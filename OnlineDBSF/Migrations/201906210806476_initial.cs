namespace OnlineDBSF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Characters",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Health = c.Int(nullable: false),
                        AttackDamage = c.Int(nullable: false),
                        PowerCost = c.Int(nullable: false),
                        UpgradeCost = c.Int(nullable: false),
                        Upgradable = c.Boolean(nullable: false),
                        Form = c.Int(nullable: false),
                        UltDamage = c.Int(nullable: false),
                        CanUlt = c.Boolean(nullable: false),
                        UltCost = c.Int(nullable: false),
                        PassiveChance = c.Int(nullable: false),
                        Portrait = c.String(),
                        PortraitLeft = c.String(),
                        PortraitRight = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Wins = c.Int(nullable: false),
                        Loses = c.Int(nullable: false),
                        WinPercentage = c.Int(nullable: false),
                        settings_Volume = c.Double(nullable: false),
                        settings_Attack = c.String(),
                        settings_Block = c.String(),
                        settings_PowerUp = c.String(),
                        settings_Transform = c.String(),
                        settings_Ultimate = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Wins",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Wins = c.Int(nullable: false),
                        Loses = c.Int(nullable: false),
                        WinPercentage = c.Double(nullable: false),
                        Character_ID = c.Int(),
                        user_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Characters", t => t.Character_ID)
                .ForeignKey("dbo.Users", t => t.user_ID)
                .Index(t => t.Character_ID)
                .Index(t => t.user_ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Wins", "user_ID", "dbo.Users");
            DropForeignKey("dbo.Wins", "Character_ID", "dbo.Characters");
            DropIndex("dbo.Wins", new[] { "user_ID" });
            DropIndex("dbo.Wins", new[] { "Character_ID" });
            DropTable("dbo.Wins");
            DropTable("dbo.Users");
            DropTable("dbo.Characters");
        }
    }
}
