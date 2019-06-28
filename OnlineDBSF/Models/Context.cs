using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OnlineDBSF.Models
{
    public class Context : DbContext
    {
        public DbSet<Character> Characters { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Win> Wins { get; set; }
        public DbSet<GameSession> GameSessions { get; set; }
    }
}