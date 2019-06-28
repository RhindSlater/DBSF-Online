using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using OnlineDBSF.Models;

namespace OnlineDBSF.ViewModels
{
    public class CharacterSelectViewModel
    {
        public GameSession MySession { get; set; }
        public List<Character> Characters { get; set; }
    }
}