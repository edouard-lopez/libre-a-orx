// Basic JavaScript functionality for the Libre à Orx website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add transition to header
    header.style.transition = 'transform 0.3s ease-in-out';
    
    console.log('Libre à Orx website loaded successfully!');
});

// Function to add content dynamically (for future use)
function addSection(title, content, targetId = 'main') {
    const target = document.getElementById(targetId);
    if (!target) return;
    
    const section = document.createElement('section');
    section.className = 'section';
    section.innerHTML = `
        <div class="container">
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
    `;
    
    target.appendChild(section);
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addSection };
}