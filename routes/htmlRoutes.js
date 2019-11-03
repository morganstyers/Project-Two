/* var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Animal.findAll({}).then(function(dbAnimals) {
      res.render("catalog", {
        animals: dbAnimals
      });
    });
  });

  app.get("/catalog/", function(req, res) {
    db.Animal.findAll({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("catalog", {
        animmals: dbAnimals
      });
    });
  });
 */

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
  app.get("/lostFound/", function(req, res) {
    db.Animal.findAll({ where: { lostFound: req.params.lostFound } }).then(
      function(dbAnimals) {
        res.render("lostfound", {
          animals: dbAnimals
        });
      }
    );
  });
};
