document.addEventListener('DOMContentLoaded', function () {
  var popup = document.querySelector('.about_popup'),
      video = document.querySelector('.video'),
      about = document.querySelector('#about_button'),
      close = document.querySelector('.close_btn');

  close.addEventListener('click', function () {
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    video.style.display = video.style.display === 'none' ? '' : 'none';
  })

  about.addEventListener('click', function () {
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    video.style.display = video.style.display === 'none' ? '' : 'none';
  });
});
