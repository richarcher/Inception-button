var parp = function() {
  var background = chrome.extension.getURL("inception.mp3");
  var audio = new Audio(background);

  audio.play();
  return audio;
}

chrome.browserAction.onClicked.addListener(parp);