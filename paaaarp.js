(function(){


  function isPlaying(audelem) {
    console.log(audelem);
    return !audelem.paused;
  }

  var background = chrome.extension.getURL("inception.mp3");
  var audio = new Audio(background);

    audio.play();
    return audio;

})();