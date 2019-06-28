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

        public ActionResult battle(int id)
        {
            GameSession session = db.GameSessions.Include("user1").Include("user2").Include("P1").Include("P2").Where(x => x.ID == id).FirstOrDefault();
            ArenaViewModel vm = new ArenaViewModel()
            {
                P1 = session.P1,
                P2 = session.P2,
            };
            return View(vm);
        }
    }
}