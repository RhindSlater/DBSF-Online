using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineDBSF.Models
{
    public class GameSession
    {
        public int ID { get; set; }
        public User user1 { get; set; }
        public User user2 { get; set; }
        public Character P1 { get; set; }
        public Character P2 { get; set; }
    }
}