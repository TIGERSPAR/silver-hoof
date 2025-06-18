// scripts/menu.js

const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

  // Lightbox logic
  const thumbs = document.querySelectorAll('.video-thumb');
  const lightbox = document.getElementById('video-lightbox');
  const lightboxVideo = document.getElementById('lightbox-video');
  const closeBtn = document.querySelector('.lightbox-close');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const videoSrc = thumb.getAttribute('data-video');
      lightboxVideo.src = videoSrc;
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = "";
  });

  window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxVideo.pause();
      lightboxVideo.src = "";
    }
  });

