// Function to load menu items
function loadMenu() {
    const menuContainer = document.getElementById('menuItems');
    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'col-md-4 mb-4';
        menuItem.innerHTML = `
            <div class="card h-100 menu-item">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text"><strong>${item.price}</strong></p>
                </div>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Smooth scroll function
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadMenu();
});

// Existing JavaScript remains the same

// Initialize review slider
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap carousel for reviews
    new bootstrap.Carousel(document.getElementById('reviewSlider'), {
        interval: 5000,
        touch: true
    });
});