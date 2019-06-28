using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineDBSF.Models
{
    public class Win
    {
        public int ID { get; set; }
        public Character Character { get; set; }
        public User user { get; set; }
        public int Wins { get; set; }
        public int Loses { get; set; }
        public double WinPercentage { get; set; }
    }
}