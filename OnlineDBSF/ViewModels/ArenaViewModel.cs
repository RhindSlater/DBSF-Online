using OnlineDBSF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineDBSF.ViewModels
{
    public class ArenaViewModel
    {
        public Character P1 { get; set; }
        public Character P2 { get; set; }
        public User User1 { get; set; }
        public User User2 { get; set; }
    }
}