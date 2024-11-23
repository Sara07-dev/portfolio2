// Typing animation effect for the text in the home section
document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.querySelector('.typing-text span');
    const words = ['Software Developer', 'Web Designer', 'Freelancer', 'Creative Thinker'];
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 200); // Speed of typing
        } else {
            setTimeout(deleteText, 2000); // Pause before deleting the text
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            typingText.textContent = typingText.textContent.slice(0, -1);
            charIndex--;
            setTimeout(deleteText, 100); // Speed of deleting
        } else {
            wordIndex = (wordIndex + 1) % words.length; // Cycle through words
            setTimeout(type, 500); // Pause before typing the next word
        }
    }
// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in-text');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

fadeElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});
    // Start typing animation
    type();

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Scroll with a little offset
                behavior: 'smooth'
            });
        });
    });
});