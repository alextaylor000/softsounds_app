$(document).ready(function() {

  $(".favorite-button-1").on("click", function(){
    // console.log("favorite button clicked");
    var classes = $(this).attr("class").split(" ");
    // console.log(classes);

  //debugger;
    if (classes.indexOf("favorite") >= 0) {
      // console.log('favoriting');
      favorite1();
    } else if (classes.indexOf("favorited") >=0) {
      // console.log('unfavoriting');
      unfavorite1();
    }
  });

  var favorite1 = function() {
    $.ajax({
      method: "POST",
      url: "/favorites",
      data: {
        track: $("#track-data-1").html(),
        artist: $("#artist-data-1").html()
      },
      success: function() {
        $(".favorite").delay(800).addClass("favorited").removeClass("favorite");
      },
      error: function() {
        alert("Please sign in!");
      }
    });
  }

  var unfavorite1 = function() {
    $.ajax({
      method: "DELETE",
      url: "/favorites",
      data: {
        track: $("#track-data-1").html()
        },
      success: function() {
        $(".favorited").addClass("favorite").removeClass("favorited");
      },
      error: function() {
        alert("Please sign in!");
      }
    });
  }

// $.ajax({
//   method: "GET",
//   url: "/favorites",
//   data: {
//     track_title: $("#song-data-1").html(),
//     artist_title: $("#artist-data-1").html()
//   },
//   success: function() {
//     $(".favorite").addClass("favorited");
//   },
//   error: function() {
//     alert("try again");
//   }
// });

});
