// script.js

// Grab nav and toggle elements
const nav = document.getElementById('navbar');
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Change nav style on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Toggle menu on small screens
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
