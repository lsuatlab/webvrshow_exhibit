$(document).ready(function() {
  $('#imageGallery').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      enableDrag:false,
      keyPress: true,
      // thumbItem:10,
      slideMargin:0, 
    onBeforeSlide: function (el) {
        console.log('onBeforeSlide');
        pauseAll();
    }
      // currentPagerPosition:'left',
  });
});

var htmlPlayer = document.getElementsByTagName('video');

function pauseAll() {
  for(var i = 0; i < htmlPlayer.length; i++){
    htmlPlayer[i].pause();
  }
}




// $('#myvideo').hover(function toggleControls() {
//     if (this.hasAttribute("controls")) {
//         this.removeAttribute("controls")
//     } else {
//         this.setAttribute("controls", "controls")
//     }
// })

// var video = document.getElementById('video');
// video.addEventListener('click',function(){
//     video.play();
// },false);




// $(document).ready(function() {
//   $('#imageGallery').lightSlider({
//       // gallery:true,
//       item:1,
//       // loop:true,
//       // thumbItem:10,
//       slideMargin:0,
//       // currentPagerPosition:'left',
//       onSliderLoad: function(el) {
//           el.lightGallery({
//               selector: '#imageGallery .lslide',
//               zoon: false
//                // videojs: true
//           });
//       }   
//   });



// });

// $('#imageGallery').lightGallery({
//     videojs: true
// }); 