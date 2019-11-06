$(function() {
  $("#lostAnimal").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newAnimal = {
      name: $("#lostName")
        .val()
        .trim(),
      type: $("#at")
        .val()
        .trim(),
      color: $("#ac")
        .val()
        .trim(),
      size: $("#as")
        .val()
        .trim(),
      zipcode: $("#zipcode")
        .val()
        .trim(),
      img: $("#petImage")
        .val()
        .trim(),
      description: $("#desc")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/animals", {
      type: "POST",
      data: newAnimal
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
