$(document).ready(function(){

  var audio = $('#music')[0];
  $('.clef').on('click', function(){
    console.log(audio.currentTime);
    if ( audio.currentTime > 0) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }

  });


});
