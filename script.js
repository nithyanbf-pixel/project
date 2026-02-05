let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const progress = document.getElementById("progress-indicator");

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    slides[currentSlide].classList.remove("active");
    currentSlide++;
    slides[currentSlide].classList.add("active");
  }
}

function checkAnswer(button, isCorrect) {
  const options = button.parentElement.querySelectorAll(".option");
  const emoji = button.parentElement.querySelector(".emoji");

  options.forEach(opt => opt.disabled = true);

  if (isCorrect) {
    button.classList.add("correct");
    emoji.style.display = "block";
  } else {
    button.classList.add("wrong");
    options.forEach(opt => {
      if (opt.onclick.toString().includes("true")) {
        opt.classList.add("correct");
      }
    });
  }

  setTimeout(nextSlide, 1300);
}
function animateJourney() {
  const journeyItems = document.querySelectorAll(".journey > *");
  journeyItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 500);
  });
}

/* Detect slide change */
function nextSlide() {
  if (currentSlide < slides.length - 1) {
    slides[currentSlide].classList.remove("active");
    currentSlide++;
    slides[currentSlide].classList.add("active");

    // Update progress
    progress.textContent = `${currentSlide + 1} / ${slides.length}`;

    // Journey animations (already present in your code)
    if (slides[currentSlide].querySelector(".journey")) {
      animateJourney();
      addJourneyHearts();
    }
  }
}

progress.textContent = `1 / ${slides.length}`;
