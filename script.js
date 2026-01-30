document.addEventListener('DOMContentLoaded', function() {
  // Nav buttons
  document.getElementById('about-btn').addEventListener('click', function() {
    scrollToSection('about');
  });
  document.getElementById('gallery-btn').addEventListener('click', function() {
    scrollToSection('gallery');
  });
  document.getElementById('contact-btn').addEventListener('click', function() {
    scrollToSection('contact');
  });

  // Gallery tabs
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      showCategory(category);
    });
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function showCategory(category) {
  // Hide all categories
  const categories = document.querySelectorAll('.gallery-category');
  categories.forEach(cat => cat.classList.remove('active'));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Show selected category
  document.getElementById(category).classList.add('active');

  // Add active class to clicked button
  event.target.classList.add('active');
}