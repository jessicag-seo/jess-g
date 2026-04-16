/* ============================================================
   THE URBAN NEWTOWN — Shared JS
   Dropdown nav + Review carousel
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Dropdown nav (Around the Hotel) --- */
  document.querySelectorAll('.nav-dropdown > button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var parent = btn.parentElement;
      var isOpen = parent.classList.contains('open');
      // close all dropdowns first
      document.querySelectorAll('.nav-dropdown.open').forEach(function (d) { d.classList.remove('open'); });
      if (!isOpen) parent.classList.add('open');
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', function () {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (d) { d.classList.remove('open'); });
  });

  /* --- Review carousel --- */
  document.querySelectorAll('.review-carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.review-track');
    var slides = carousel.querySelectorAll('.review-slide');
    var dots = carousel.querySelectorAll('.carousel-dot');
    var prevBtn = carousel.querySelector('.carousel-prev');
    var nextBtn = carousel.querySelector('.carousel-next');
    var current = 0;
    var total = slides.length;
    var autoplayTimer;

    function goTo(i) {
      current = ((i % total) + total) % total; // wrap
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (dot, idx) {
        dot.classList.toggle('active', idx === current);
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); resetAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); resetAutoplay(); });
    dots.forEach(function (dot, idx) {
      dot.addEventListener('click', function () { goTo(idx); resetAutoplay(); });
    });

    // Autoplay every 6s
    function startAutoplay() {
      autoplayTimer = setInterval(function () { goTo(current + 1); }, 6000);
    }
    function resetAutoplay() {
      clearInterval(autoplayTimer);
      startAutoplay();
    }

    // Touch/swipe support
    var startX = 0;
    var deltaX = 0;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchmove', function (e) { deltaX = e.touches[0].clientX - startX; }, { passive: true });
    track.addEventListener('touchend', function () {
      if (Math.abs(deltaX) > 50) {
        goTo(deltaX < 0 ? current + 1 : current - 1);
        resetAutoplay();
      }
      deltaX = 0;
    });

    goTo(0);
    startAutoplay();
  });

});
