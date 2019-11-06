$(function() {
<<<<<<< HEAD
  $("#foundAnimal").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

=======
  $("#foundAnimal").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
>>>>>>> 69802a858930a9e92964f0a8665b4a39a37f0821
    var newAnimal = {
      name: $("#foundName")
        .val()
        .trim(),
<<<<<<< HEAD
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
    console.log(newAnimal);

    // Send the POST request.
    $.ajax("/api/animals", {
      type: "POST",
      data: newAnimal
    }).then(function() {
      console.log("created new found animal");
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
=======
      type: $("#fat")
        .val()
        .trim(),
      color: $("#fac")
        .val()
        .trim(),
      size: $("#fas")
        .val()
        .trim(),
      zipcode: $("#ls").val(),
      img: $("#img").val(),
      description: $("#fdesc")
        .val()
        .trim()
    };
    // Send the POST request.
    $.ajax("/api/animals/", {
      type: "POST",
      data: newAnimal
    }).then(function() {
      console.log("created new lost animal");
>>>>>>> 69802a858930a9e92964f0a8665b4a39a37f0821
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
<<<<<<< HEAD
=======
  
>>>>>>> 69802a858930a9e92964f0a8665b4a39a37f0821
