document.addEventListener('DOMContentLoaded', function () {
  var popup = document.querySelector('.about_popup'),
      video = document.querySelector('.video'),
      about = document.querySelector('#about_button'),
      close = document.querySelector('.close_btn'),
       logo = document.querySelector('.logo');

  videoEl = document.createElement('video');
  videoEl.autoplay = true;
  videoEl.preload = 'auto';
  videoEl.loop = true;
  videoEl.poster = './media/poster.png';
  videoEl.src = './media/video/nob_min.mp4';
  videoEl.volume = 0.75;
  video.appendChild(videoEl);

  close.addEventListener('click', function () {
    popup.style.display = 'none';
    video.style.display = 'block';
    videoEl = document.createElement('video');
    videoEl.autoplay = true;
    videoEl.preload = 'auto';
    videoEl.loop = true;
    videoEl.poster = './media/poster.png';
    videoEl.src = './media/video/nob_min.mp4';
    videoEl.volume = 0.75;
    video.appendChild(videoEl);
  });

  about.addEventListener('click', function () {
    popup.style.display = 'block';
    video.innerHTML = '';
  });

  window.addEventListener("orientationchange", function() {
    logo.style.top = (window.innerHeight / 2) - (logo.clientHeight / 6) + 'px';
  });

  if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Linux armv6l') {
    logo.style.top = (window.innerHeight / 2) - (logo.clientHeight / 6) + 'px';
    video.children[0].src = './media/video/nob_min.mp4';
  }
});
