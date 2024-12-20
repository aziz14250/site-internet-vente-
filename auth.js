document.querySelectorAll('.image-slider').forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const images = track.querySelectorAll('img');
    let currentIndex = 0;

    function moveSlider() {
        currentIndex = (currentIndex + 1) % images.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    setInterval(moveSlider, 3000);
});

const authModal = document.getElementById('auth-modal');
const registerModal = document.getElementById('register-modal');
const closeButtons = document.querySelectorAll('.close-btn');
const authBtn = document.getElementById('auth-btn');
const registerLink = document.getElementById('register-link');

authBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    registerModal.style.display = 'none';
});

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        authModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});
