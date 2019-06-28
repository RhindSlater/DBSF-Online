using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OnlineDBSF.Models;

namespace OnlineDBSF.Controllers
{
    public class uController : Controller
    {
        Context db = new Context();

        [HttpPost]
        public ActionResult login(string username)
        {
            User user = db.Users.Where(x => x.Username == username).FirstOrDefault();

            if (user != null)
            {
                Session["UserID"] = user.Username;
            }
            return RedirectToAction("index","home"); 
        }

        [HttpPost]
        public ActionResult register(string username)
        { //Creates a new user
            User user = new User()
            {
                Username = username,
                Wins = 0,
                Loses = 0,
                WinPercentage = 0,
                //default settings. can be changed in the settings menu
                settings = new Settings()
                {
                    Attack = "q",
                    Block = "w",
                    PowerUp = "e",
                    Transform = "r",
                    Ultimate = "t",
                    Volume = 50,
                }
            };
            db.Users.Add(user);
            db.SaveChanges();
            Session["UserID"] = user.Username;
            return RedirectToAction("index", "home");
        }
    }
}