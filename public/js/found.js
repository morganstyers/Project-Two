$(function() {
  $("#foundAnimal").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newAnimal = {
      name: $("#foundName")
        .val()
        .trim(),
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
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
  
