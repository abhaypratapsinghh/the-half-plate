/**
 * THE HALF PLATE - Main JavaScript
 * Production-ready JavaScript for interactions and functionality
 */

// ==========================================
// 1. SMOOTH SCROLLING FOR NAVIGATION
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ==========================================
// 2. MOBILE MENU TOGGLE (Future Enhancement)
// ==========================================
function initMobileMenu() {
  const navLinks = document.querySelector(".nav-links");
  const navContainer = document.querySelector(".nav-container");

  // Add mobile menu button if screen is small
  if (window.innerWidth <= 768) {
    // Mobile menu logic can be added here
  }
}

// ==========================================
// 3. SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".menu-category, .gallery-placeholder, .testimonial-module")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// ==========================================
// 4. HEADER SCROLL EFFECT
// ==========================================
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.boxShadow = "var(--shadow-dark)";
  } else {
    // Scrolling up
    header.style.boxShadow = "var(--shadow-medium)";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==========================================
// 5. FORM HANDLING (For future forms)
// ==========================================
function handleFormSubmit(event) {
  event.preventDefault();
  // Add form submission logic here
  console.log("Form submitted");
}

// ==========================================
// 6. UTILITY FUNCTIONS
// ==========================================

/**
 * Add active class to navigation links based on current section
 */
function updateActiveNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
}

/**
 * Format currency values
 */
function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/**
 * Debounce function for performance optimization
 */
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// ==========================================
// 7. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  updateActiveNav();

  // Log successful initialization
  console.log("THE HALF PLATE - JavaScript initialized");
});

// ==========================================
// 8. ERROR HANDLING
// ==========================================
window.addEventListener("error", function (event) {
  console.error("Global error:", event.error);
});

// ==========================================
// 9. PERFORMANCE MONITORING
// ==========================================
if (window.performance) {
  window.addEventListener("load", function () {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log("Page load time:", pageLoadTime + "ms");
  });
}

// Export utility functions for use in other modules
export { formatCurrency, debounce };
