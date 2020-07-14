// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var newBurger = {
    burger_name: $("#ca").val(),
    devoured: 0,
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(function () {
    console.log("created new burger");
    // Reload the page to get the updated list
    location.reload();
  });
});