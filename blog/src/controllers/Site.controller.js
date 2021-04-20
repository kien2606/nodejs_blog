const User = require('../models/users.model'); 
class SiteController {
  //[GET]
  index = (req, res) => {

    User.find({}, function (err, users) {
      if(err){
        res.status(400).json({error : "ERROR!!!"});
        return;
      }
      res.json(users);
    });

    // res.render("home");
  };

  //[POST]
  infor = (req, res) => {
    const { email, password } = req.body;
    res.redirect("/");
  };
}

module.exports = new SiteController();
