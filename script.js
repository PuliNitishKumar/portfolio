document.querySelectorAll('.video-link, .certificate-link').forEach(link => {
    link.addEventListener('click', (event) => {
        console.log('Link clicked:', event.target.href);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.top-nav-button');
    const circleButtons = document.querySelectorAll('.circle-button');
    const sections = document.querySelectorAll('.content-section');

    // Function to scroll to a section and highlight the button
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

            // Highlight the active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            circleButtons.forEach(btn => btn.classList.remove('active'));

            document.querySelector(`.top-nav-button[data-section="${sectionId}"]`)?.classList.add('active');
            document.querySelector(`.circle-button[data-section="${sectionId}"]`)?.classList.add('active');
        }
    }

    // Add event listeners for top navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section') || button.textContent.trim();
            scrollToSection(sectionId);
        });
    });

    // Add event listeners for sidebar buttons
    circleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });

    // Function to highlight buttons based on scroll position
    function highlightButtonOnScroll() {
        let currentSectionIndex = -1;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSectionIndex = index;
            }
        });

        navButtons.forEach(btn => btn.classList.remove('active'));
        circleButtons.forEach(btn => btn.classList.remove('active'));

        if (currentSectionIndex !== -1) {
            const currentSectionId = sections[currentSectionIndex].id;
            document.querySelector(`.top-nav-button[data-section="${currentSectionId}"]`)?.classList.add('active');
            document.querySelector(`.circle-button[data-section="${currentSectionId}"]`)?.classList.add('active');
        }
    }

    // Initial button highlight setup and scroll event listener
    highlightButtonOnScroll();
    window.addEventListener('scroll', highlightButtonOnScroll);
});

// script.js

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
