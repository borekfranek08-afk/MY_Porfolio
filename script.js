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