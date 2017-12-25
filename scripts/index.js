document.addEventListener('DOMContentLoaded', function () {
  var popup = document.querySelector('.about_popup'),
      video = document.querySelector('.video'),
      videoEl = video.children[0],
      about = document.querySelector('#about_button'),
      close = document.querySelector('.close_btn'),
       logo = document.querySelector('.logo');

  window.isTouch = false;

  close.addEventListener('click', function () {
    popup.style.display = 'none';
    video.style.display = 'block';
    if (!window.isTouch) {
      videoEl.play();
    }
  });

  about.addEventListener('click', function () {
    popup.style.display = 'block';
    video.style.display = 'none';
    videoEl.pause();
  });

  window.addEventListener("orientationchange", function() {
    logo.style.top = (window.innerHeight / 2) - (logo.clientHeight / 6) + 'px';
  });

  window.addEventListener('touchstart', function onFirstTouch() {
    window.isTouch = true;
    logo.style.top = (window.innerHeight / 2) - (logo.clientHeight / 6) + 'px';
    videoEl.setAttribute('controls', '');
    videoEl.setAttribute('playsinline', '');
    window.removeEventListener('touchstart', onFirstTouch, false);
  }, false);

  setTimeout(function() {
    if (!window.isTouch) {
      videoEl.setAttribute('autoplay', '');
      videoEl.setAttribute('loop', '');
    }
  }, 10);
});
