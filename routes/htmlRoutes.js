var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Animal.findAll({}).then(function(dbAnimals) {
      res.render("catalog", {
        animals: dbAnimals
      });
    });
  });

  app.get("/lostfound/", function(req, res) {
    db.Animal.findAll({ where: { lostFound: req.params.lostFound } }).then(
      function(dbAnimals) {
        res.render("lostfound", {
          animals: dbAnimals
        });
      }
    );
  });
};
