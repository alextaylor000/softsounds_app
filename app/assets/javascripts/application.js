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
//= require bootstrap
//= require particles
//= require_tree .


   particlesJS.load('particles-js', 'assets/particle.json', function() {
      console.log('callback - particles.js config loaded');
   });


$(document).ready(function(){

// function updateStream1() {
//   $.ajax({
//     type : 'GET',
//     url: '/refresh_stream1'
//   });
// };
//
// function updateStream2() {
//   $.ajax({
//     type : 'GET',
//     url: '/refresh_stream2'
//   });
// };
//
// setInterval(updateStream1, 7000);
// setInterval(updateStream2, 7000);


});
