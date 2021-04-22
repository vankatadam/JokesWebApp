using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JokesWebApp.Controllers
{
    public class ClientsideController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
