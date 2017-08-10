document.addEventListener('DOMContentLoaded', function () {
  var popup = document.querySelector('.about_popup'),
      video = document.querySelector('.video'),
      about = document.querySelector('#about_button'),
      close = document.querySelector('.close_btn'),
       logo = document.querySelector('.logo');

  close.addEventListener('click', function () {
    popup.style.display = 'none';
    video.style.display = 'block';
    video.children[0].play();
  })

  about.addEventListener('click', function () {
    popup.style.display = 'block';
    video.style.display = 'none';
    video.children[0].pause();
  });

  window.addEventListener("orientationchange", function() {
    logo.style.top = (window.innerHeight / 2) - (logo.clientHeight / 6) + 'px';
  });

  video.children[0].addEventListener('click', function(e) {
    if (e.target.paused) {
      e.target.play();
    } else {
      e.target.pause();
    }
  })

  if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Linux armv6l') {
    logo.style.top = (window.innerHeight / 2) - (logo.clientHeight / 6) + 'px';
    video.children[0].src = './media/video/nob_min.mp4';
  }
});
