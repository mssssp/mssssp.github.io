document.addEventListener("DOMContentLoaded", function () {
  // Configure slide duration (in milliseconds)
  var slideDuration = 3000;

  // Get the slider elements
  var slider = document.querySelector(".home-slider");
  var slides = slider.querySelectorAll(".single-slider");
  var currentSlide = 0;
  var slideInterval;

  // Function to show the next slide
  function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].classList.remove("active");

    // Update the current slide index
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the next slide
    slides[currentSlide].classList.add("active");
  }

  // Start the automatic slide change
  function startSlideInterval() {
    slideInterval = setInterval(showNextSlide, slideDuration);
  }

  // Stop the automatic slide change
  function stopSlideInterval() {
    clearInterval(slideInterval);
  }

  // Initialize the slider
  function initSlider() {
    slides[currentSlide].classList.add("active");
    startSlideInterval();
  }

  // Initialize the slider on page load
  initSlider();
});
