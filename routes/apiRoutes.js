var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/animals", function(req, res) {
    db.Animals.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/animals", function(req, res) {
    db.Animals.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Delete an example by id
  app.put("/api/animals/:id", function(req, res) {
    db.Animals.update({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });
};
