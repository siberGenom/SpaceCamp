var playButton = document.querySelector('[class="playbutton"]');
document.body.onkeydown = function(e){
  if(e.keyCode == 32){
    e.preventDefault();
    playButton.click();
  }
}