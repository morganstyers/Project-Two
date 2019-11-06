$(function() {
  $("#lostAnimal").on("click", function(event) {
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
      zipcode: $("#zipcode").val(),
      img: $("#petImage").val(),
      description: $("#desc")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/animals/", {
      type: "POST",
      data: newAnimal
    }).then(function() {
      console.log("created new lost animal");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
