using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineDBSF.Models
{
    public class User
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public int Wins { get; set; }
        public int Loses { get; set; }
        public int WinPercentage { get; set; }
        public Settings settings { get; set; }
    }
}