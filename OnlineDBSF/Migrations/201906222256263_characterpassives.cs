namespace OnlineDBSF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class characterpassives : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Characters", "PassiveDodge", c => c.Boolean(nullable: false));
            AddColumn("dbo.Characters", "PassiveDoubleDamage", c => c.Boolean(nullable: false));
            AddColumn("dbo.Characters", "PassiveHalfDamage", c => c.Boolean(nullable: false));
            AddColumn("dbo.Characters", "PassiveTriplePowerup", c => c.Boolean(nullable: false));
            AddColumn("dbo.Characters", "PassiveSteal", c => c.Boolean(nullable: false));
            AddColumn("dbo.Characters", "PassiveAbsorb", c => c.Boolean(nullable: false));
            AddColumn("dbo.Characters", "PassiveUnblockable", c => c.Boolean(nullable: false));
            AddColumn("dbo.Characters", "PassiveSkip", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Characters", "PassiveSkip");
            DropColumn("dbo.Characters", "PassiveUnblockable");
            DropColumn("dbo.Characters", "PassiveAbsorb");
            DropColumn("dbo.Characters", "PassiveSteal");
            DropColumn("dbo.Characters", "PassiveTriplePowerup");
            DropColumn("dbo.Characters", "PassiveHalfDamage");
            DropColumn("dbo.Characters", "PassiveDoubleDamage");
            DropColumn("dbo.Characters", "PassiveDodge");
        }
    }
}
