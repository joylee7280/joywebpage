// Portfolio JavaScript
// Add smooth scrolling for navigation links
document.querySelectorAll('.site-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add scroll effect for header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  }
});