const startBtn = document.getElementById('startBtn');
const welcomeScreen = document.getElementById('welcome-screen');
const presentation = document.getElementById('presentation');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

startBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('up');
    presentation.classList.add('show');
    slides[currentSlide].classList.add('active');
});

nextBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');

    if (currentSlide === slides.length - 1) {
        nextBtn.innerText = "THIS SHI TUFF";
        
        
        launchFireworks();
    } else {
        nextBtn.innerText = "Devam Et";
    }
});

function launchFireworks() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10002 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}