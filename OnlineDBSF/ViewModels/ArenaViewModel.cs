using OnlineDBSF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineDBSF.ViewModels
{
    public class ArenaViewModel
    {
        public List<Character> P1 { get; set; }
        public List<Character> P2 { get; set; }
        public string MyUser { get; set; }
        public GameSession MySession { get; set; }
    }
}