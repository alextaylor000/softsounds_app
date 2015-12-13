$(document).ready(function() {

  $(".favorite-button").on("click", function(){
    // console.log("favorite button clicked");
    var classes = $(this).attr("class").split(" ");
    // console.log(classes);

  //debugger;
    if (classes.indexOf("favorite") >= 0) {
      // console.log('favoriting');
      favorite();
    } else if (classes.indexOf("favorited") >=0) {
      // console.log('unfavoriting');
      unfavorite();
    }
  });

  var favorite = function() {
    $.ajax({
      method: "POST",
      url: "/favorites",
      data: {
        track: $("#track-data").html(),
        artist: $("#artist-data").html()
      },
      success: function() {
        $(".favorite").delay(800).addClass("favorited").removeClass("favorite");
      },
      error: function() {
        alert("Please sign in!");
      }
    });
  }

  var unfavorite = function() {
    $.ajax({
      method: "DELETE",
      url: "/favorites",
      data: {
        track: $("#track-data").html()
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
//     track_title: $("#song-data").html(),
//     artist_title: $("#artist-data").html()
//   },
//   success: function() {
//     $(".favorite").addClass("favorited");
//   },
//   error: function() {
//     alert("try again");
//   }
// });

});
