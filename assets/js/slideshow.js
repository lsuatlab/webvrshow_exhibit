$(document).ready(function() {
  $('#imageGallery').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      enableDrag:false,
      keyPress: true,
      slideMargin:0, 
      onBeforeSlide: function (el) {
        console.log('onBeforeSlide');
        pauseAll();
    }
  });
});

var htmlPlayer = document.getElementsByTagName('video');

function pauseAll() {
  for(var i = 0; i < htmlPlayer.length; i++){
    htmlPlayer[i].pause();
  }
}