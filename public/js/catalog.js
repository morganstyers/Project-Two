// Make sure we wait to attach our handlers until the DOM is fully loaded. //CHANGE STATE FROM LOST TO FOUND
$(function() {
  $("#found").on("click", function(event) {
    var id = $(this).data("id");
    var found = $(this).data("found");

    var lostFound = {
      found: found
    };

    // Send the PUT request.
    $.ajax("/api/animals/" + id, {
      type: "PUT",
      data: lostFound
    }).then(function() {
      console.log("changed animal to", lostFound);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#lostAnimal").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newAnimal = {
      name: $("#ca")
        .val()
        .trim(),
      sleepy: $("[name=sleepy]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/catalog", {
      type: "POST",
      data: newCat
    }).then(function() {
      console.log("created new lost animal");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#foundAnimal").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/catalog/" + id, {
      type: "POST"
    }).then(function() {
      console.log("created new found animal", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
