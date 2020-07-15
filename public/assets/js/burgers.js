$(document).ready(function () {
  $(document).on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#ca").val(),
      devoured: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });

  $(".eat-button").on("click", function (event) {
    const id = this.dataset.id;
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(() => {
      location.reload();
    });
  });
});
