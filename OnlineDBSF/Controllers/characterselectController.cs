using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OnlineDBSF.Models;
using OnlineDBSF.ViewModels;

namespace OnlineDBSF.Controllers
{
    public class characterselectController : Controller
    {
        Context db = new Context();

        public ActionResult Index(int id)
        {
            GameSession session = db.GameSessions.Include("P1").Include("P2").Include("user1").Include("user2").Where(x => x.ID == id).FirstOrDefault();
            List<Character> li = db.Characters.ToList();

            CharacterSelectViewModel vm = new CharacterSelectViewModel()
            {
                Characters = new List<Character>(),
                MySession = session,
            };
            foreach (var i in li)
            {
                if (vm.Characters.Where(x => x.Name == i.Name).FirstOrDefault() == null)
                {
                    vm.Characters.Add(i);
                }
            }
            return View(vm);
        }

        [HttpPost]
        public ActionResult LockIn(int characterid, int sessionid, string id)
        {
            int userid = 0;
            GameSession session = db.GameSessions.Include("P1").Include("P2").Include("user1").Include("user2").Where(x => x.ID == sessionid).FirstOrDefault();
            Character character = db.Characters.Where(x => x.ID == characterid).FirstOrDefault();
            if (session.user1.Username == id)
            {
                if (session.P1 == null)
                {
                    session.P1 = character;
                    userid = session.user1.ID;
                }
            }
            if (session.user2.Username == id)
            {
                if (session.P2 == null)
                {
                    session.P2 = character;
                    userid = session.user2.ID;
                }
            }
            db.SaveChanges();
            if (session.P1 != null & session.P2 != null)
            {
                return Json(Url.Action("battle", "arena", new { id = session.ID, userID = userid}));
            }
            return Json(null);
        }

        [HttpPost]
        public ActionResult CheckOp(int id, int userID)
        {
            User user = db.Users.Find(userID);
            GameSession session = db.GameSessions.Include("P1").Include("P2").Include("user1").Include("user2").Where(x => x.ID == id).FirstOrDefault();
            if (session.P1 != null & session.P2 != null)
            {
                return Json(Url.Action("battle", "arena", new { id = session.ID, userID = userID }));
            }
            else
            {
                return Json(null);
            }
        }

        public ActionResult displaycharacterLeft(int id)
        {
            GameSession session = db.GameSessions.Include("P1").Where(x => x.ID == id).FirstOrDefault();
            if(session != null)
            {
                if(session.P1 != null)
                {
                    return Json(session.P1.PortraitLeft, JsonRequestBehavior.AllowGet);
                }
            }
            return Json(null, JsonRequestBehavior.AllowGet);
        }

        public ActionResult displaycharacterRight(int id)
        {
            GameSession session = db.GameSessions.Include("P2").Where(x => x.ID == id).FirstOrDefault();
            if (session != null)
            {
                if (session.P2 != null)
                {
                    return Json(session.P2.PortraitRight, JsonRequestBehavior.AllowGet);
                }
            }
            return Json(null, JsonRequestBehavior.AllowGet);
        }
    }
}