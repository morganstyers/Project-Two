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

/*   // Load example page and pass in an example by id
  app.get("/catalogue/, function(req, res) {
    db.Example.findAll({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
 */
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
