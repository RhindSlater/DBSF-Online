using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using OnlineDBSF.Models;

namespace OnlineDBSF.Controllers
{
    public class lobbyController : Controller
    {
        Context db = new Context();
        [HttpPost]
        public ActionResult Search()
        {
            return View();
        }

        public ActionResult host()
        {
            if (Session["UserID"] == null)
            {
                return RedirectToAction("index", "home");
            }
            string username = Session["UserID"].ToString();
            User user = db.Users.Where(x => x.Username == username).FirstOrDefault();
            if (user != null)
            {
                if (db.GameSessions.Include("user1").Include("user2").Where(x => x.user1.ID == user.ID && x.user2 == null).FirstOrDefault() == null)
                {
                    GameSession session = new GameSession()
                    {
                        user1 = user,
                        user2 = null,
                    };
                    db.GameSessions.Add(session);
                    db.SaveChanges();
                }
            }
            return View(db.GameSessions.Include("user1").Where(x => x.user2 == null).ToList());
        }

        public ActionResult search()
        {
            if (Session["UserID"] == null)
            {
                return RedirectToAction("index", "home");
            }
            return View(db.GameSessions.Include("user1").Where(x => x.user2 == null).ToList());
        }

        public ActionResult join(int id)
        {
            if (Session["UserID"] == null)
            {
                return RedirectToAction("index", "home");
            }
            GameSession session = db.GameSessions.Include("user1").Where(x => x.ID == id).FirstOrDefault();
            if(session != null)
            {
                string username = Session["UserID"].ToString();
                User user = db.Users.Where(x => x.Username == username).FirstOrDefault();
                session.user2 = user;
                db.SaveChanges();
                return RedirectToAction("index", "characterselect", new { id = session.ID });
            }
            else
            {
                return RedirectToAction("search");
            }
        }

        public ActionResult checkopponent(string username)
        {
            if(username == null)
            {
                return Json(null, JsonRequestBehavior.AllowGet);
            }
            GameSession session = db.GameSessions.Include("user1").Include("user2").Where(x => x.user1.Username == username & x.user2 != null).FirstOrDefault();

            if (session != null)
            {
                return Json(Url.Action("index", "characterselect", new { id = session.ID, userID = session.user1.ID } ), JsonRequestBehavior.AllowGet);
            }
            return Json(null, JsonRequestBehavior.AllowGet);
        }

        public ActionResult displaycharacter(int id)
        {
            Character character = db.Characters.Where(x => x.ID == id).FirstOrDefault();
            return Json(character.Name,JsonRequestBehavior.AllowGet);
        }
    }
}