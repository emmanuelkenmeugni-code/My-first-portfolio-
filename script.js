document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Greeting based on time of day
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greetingText = "Bienvenue sur mon Portfolio";

    if (hour < 12) {
        greetingText = "Bonjour ! Bienvenue sur mon Portfolio";
    } else if (hour < 18) {
        greetingText = "Bon après-midi ! Bienvenue sur mon Portfolio";
    } else {
        greetingText = "Bonsoir ! Bienvenue sur mon Portfolio";
    }
    
    greetingElement.textContent = greetingText;

    // 2. Simple Form Validation & Submission Simulation
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formStatus.style.color = "#059669"; // Green
            formStatus.textContent = "Merci " + name + ", votre message a été simulé avec succès !";
            contactForm.reset();
        } else {
            formStatus.style.color = "#dc2626"; // Red
            formStatus.textContent = "Veuillez remplir tous les champs.";
        }
    });

    // 3. Smooth reveal animation on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.6s ease-out";
        observer.observe(section);
    });
});
