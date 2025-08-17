// Initialize AOS (scroll animations)
AOS.init({
  duration: 800,
  once: true
});

// Navigation handling
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        
        // Update active state
        document.querySelectorAll('.nav-menu a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Smooth scroll to section
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing effect in hero section
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Designer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Swiper for Tools Section
var swiper = new Swiper(".toolsSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    }
  }
});
// Dark mode toggle 
document.querySelector(".dark-mode-toggle")?.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.classList.toggle("active");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});
// Button ripple effect
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function (e) {
    let circle = document.createElement("span");
    circle.classList.add("ripple");
    circle.style.left = e.clientX - this.offsetLeft + "px";
    circle.style.top = e.clientY - this.offsetTop + "px";
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// Contact form (static demo)
document.querySelector(".contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been recorded (demo only).");
});
