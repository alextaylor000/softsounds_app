$(document).ready(function(){


     $("#jplayer").jPlayer({
       ready: function () {
         $(this).jPlayer("setMedia", {
           mp3: "http://rosetta.shoutca.st:9233/stream"
         });
       },
       swfPath: "http://www.dewtone.com/player",
       solution: 'html, flash',
       supplied: "mp3",
       preload: 'none',
       volume: 0.9,
       muted: false,
       cssSelectorAncestor: "",
       cssSelector: {
         title: "#title",
         play: "#play",
         pause: "#pause",
         stop: "#stop",
         mute: "#speaker",
         unmute: "#speaker-off",
         currentTime: "#currentTime",
         duration: "#duration"
       },
       size: {
         width: "320px",
         height: "180px"
       }
     });
   });

  //   cssSelector: {
  //    play: '.jp-play',
  //    pause: '.jp-pause',
  //    stop: '.jp-stop',
  //    seekBar: '.jp-seek-bar',
  //    playBar: '.jp-play-bar',
  //    mute: '.jp-mute',
  //    unmute: '.jp-unmute',
  //    volumeBar: '.jp-volume-bar',
  //    volumeBarValue: '.jp-volume-bar-value',
  //    volumeMax: '.jp-volume-max',
  //    playbackRateBar: '.jp-playback-rate-bar',
  //    playbackRateBarValue: '.jp-playback-rate-bar-value',
  //    currentTime: '.jp-current-time',
  //    duration: '.jp-duration',
  //    title: '.jp-title',
  //    fullScreen: '.jp-full-screen',
  //    restoreScreen: '.jp-restore-screen',
  //    repeat: '.jp-repeat',
  //    repeatOff: '.jp-repeat-off',
  //    gui: '.jp-gui',
  //    noSolution: '.jp-no-solution'
  //   },
  //   errorAlerts: false,
  //   warningAlerts: false
  //  });
