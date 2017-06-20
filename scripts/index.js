document.addEventListener('DOMContentLoaded', function () {
  var popup = document.querySelector('.about_popup'),
      video = document.querySelector('.video'),
      about = document.querySelector('#about_button'),
      close = document.querySelector('.close_btn');

  close.addEventListener('click', function () {
    popup.style.display = 'none';
    video.style.display = 'block';
  })

  about.addEventListener('click', function () {
    popup.style.display = 'block';
    video.style.display = 'none';
  });
});
