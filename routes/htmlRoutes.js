var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Animal.findAll({}).then(function(dbAnimals) {
      res.render("catalogue", {
        animals: dbAnimals
      });
    });
  });

  app.get("/catalogue/, function(req, res) {
    db.Example.findAll({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
