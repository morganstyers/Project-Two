// Root get route.
app.get("/catalog/", function(req, res) {
  connection.query("SELECT * FROM Animals;", function(err, data) {
    if (err) {
      throw err;
    }

    // Test it.
    console.log('The solution is: ', data);

    // Test it.
    res.send(data);

    res.render("catalog", { Animals: data });
  });
});
