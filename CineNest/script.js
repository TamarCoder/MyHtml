const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');


let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  if (currentSlide < 1) { 
    currentSlide++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

function updateSlider() {
  const slideWidth = 300 * 4; 
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}