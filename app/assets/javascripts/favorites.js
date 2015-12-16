$(document).ready(function() {

  $(".favorite-button-1").on("click", function(){
    // console.log("favorite button clicked");
    var classes = $(this).attr("class").split(" ");
    // console.log(classes);

  //debugger;
    if (classes.indexOf("favorite-1") >= 0) {
      // console.log('favoriting');
      favorite1();
    } else if (classes.indexOf("favorited-1") >=0) {
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
        $(".favorite-1").delay(800).addClass("favorited-1").removeClass("favorite-1");
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
        $(".favorited-1").addClass("favorite-1").removeClass("favorited-1");
      },
      error: function() {
        alert("Please sign in!");
      }
    });
  }


  $(".favorite-button-2").on("click", function(){
    var classes = $(this).attr("class").split(" ");

    if (classes.indexOf("favorite-2") >= 0) {
      favorite2();
    } else if (classes.indexOf("favorited-2") >=0) {
      unfavorite2();
    }
  });

  var favorite2 = function() {
    $.ajax({
      method: "POST",
      url: "/favorites",
      data: {
        track: $("#track-data-2").html(),
        artist: $("#artist-data-2").html()
      },
      success: function() {
        $(".favorite-2").delay(800).addClass("favorited-2").removeClass("favorite-2");
      },
      error: function() {
        alert("Please sign in!");
      }
    });
  }

  var unfavorite2 = function() {
    $.ajax({
      method: "DELETE",
      url: "/favorites",
      data: {
        track: $("#track-data-2").html()
        },
      success: function() {
        $(".favorited-2").addClass("favorite-2").removeClass("favorited-2");
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
