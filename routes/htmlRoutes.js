var db = require("../models");

module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/lostFound/", function(req, res) {
    db.Animal.findAll({}).then(function(dbAnimals) {
      res.render("lostfound", {
        animals: dbAnimals
      });
    });
  });

  app.get("/catalog/", function(req, res) {
    db.Animal.findAll({}).then(function(dbAnimals) {
      res.render("catalog", {
        animals: dbAnimals
      });
    });
  });
};
