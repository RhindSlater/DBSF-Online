using OnlineDBSF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OnlineDBSF.ViewModels;

namespace OnlineDBSF.Controllers
{
    public class arenaController : Controller
    {
        Context db = new Context();

        public ActionResult battle(int id, int userID)
        {
            string player;
            GameSession session = db.GameSessions.Include("user1").Include("user2").Include("P1.Passives").Include("P2.Passives").Where(x => x.ID == id).FirstOrDefault();
            User user = db.Users.Find(userID);
            List<Character> li1 = db.Characters.Include("Passives").Where(x => x.Name == session.P1.Name).ToList();
            List<Character> li2 = db.Characters.Include("Passives").Where(x => x.Name == session.P2.Name).ToList();
            if(user.ID == session.user1.ID)
            {
                player = "P1";
            }
            else
            {
                player = "P2";
            }

            ArenaViewModel vm = new ArenaViewModel()
            {
                P1 = li1,
                P2 = li2,
                MySession = session,
                MyUser = player,
            };
            return View(vm);
        }
    }
}