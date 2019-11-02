var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Animal.findAll({}).then(function(results) {
      res.render("index", {
        Animals: results
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/animals/:id", function(req, res) {
    db.Animal.findAll({ where: { lostFound: req.params.lostFound } }).then(
      function(results) {
        res.render("lostfound", {
          lostFound: results
        });
      }
    );
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
