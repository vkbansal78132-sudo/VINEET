// Hero section button alert
document.querySelector('.btn').addEventListener('click', function() {
    if (this.textContent === 'Contact Me') {
        alert('Email: vkbansal78132@gmail.com');
    }
});

// Smooth scroll for nav links
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 40,
                behavior: 'smooth'
            });
        }
    });
});

// Guess the Number Game
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const message = document.getElementById("game-message");
const input = document.getElementById("guess-input");
const resetBtn = document.getElementById("reset-btn");

window.checkGuess = function() {
    const guess = Number(input.value);
    attempts++;
    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        message.style.color = "#a21caf";
        return;
    }
    if (guess === secretNumber) {
        message.textContent = `🎉 Correct! You guessed the number in ${attempts} tries!`;
        message.style.color = "#15803d";
        resetBtn.style.display = "inline-block";
        input.disabled = true;
    } else if (guess < secretNumber) {
        message.textContent = "Too low! Try a higher number.";
        message.style.color = "#4f46e5";
    } else {
        message.textContent = "Too high! Try a lower number.";
        message.style.color = "#a21caf";
    }
    input.value = '';
};
window.resetGame = function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    input.value = '';
    input.disabled = false;
    resetBtn.style.display = "none";
};