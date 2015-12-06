// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require turbolinks
//= require bootstrap
//= require_tree .

// function anotherSong() {
//   $.ajax({
//     //url: '/',
//     success: function(data) {
//       $('h2').load('/ h2')
//     }
//   });
//   setInterval(anotherSong, 3000);
// }

//
$(document).ready(function(){
//
  var updateSong = function(){
    $.ajax({
      type : 'GET',
      url : '/',
      dataType : 'html',
      success : function(data){
        html = $('h2').html();
        $('h2').html(html);
      }
    });

  }

  // setInterval(anotherSong, 3000);
  // setInterval(updateSong, 5000);

});
