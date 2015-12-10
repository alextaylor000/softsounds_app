$(document).ready(function(){

  $(".favorite").on("click", function(){
    console.log("post");
  $.ajax({
    method: "POST",
    url: "/favorites",
    data: {
      track: $("#track-data").html(),
      artist: $("#artist-data").html()
    },
    success: function() {
      $(".favorite").addClass("favorited").removeClass("favorite");
    },
    error: function() {
      alert("try again!");
    }
  });
});

  $(".favorited").on("click", function(){
    console.log("delete");
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
      alert("try again!");
    }
  });
});

// $.ajax({
//   method: "GET",
//   url: "/favorites",
//   data: {
//     track_title: $("#song-data").html(),
//     artist_title: $("#artist-data").html()
//   },
//   success: function() {
//     $(".favorite").addClass("favourited");
//   },
//   error: function() {
//     alert("try again");
//   }
// });

});
