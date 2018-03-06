// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var eat = $(this).data("eat");

    var newEat = {
      devoured: eat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEat
    }).then(function(data) {
        console.log("changed to ", data);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    //preventDefault on a submit event.
    console.log("click")
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      // devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(data) {
        console.log("created new burger", data);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
