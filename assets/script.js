// Minimal JS for interactivity: nav toggle, smooth scroll, filter projects
(() => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  menuToggle.addEventListener('click', () => {
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        window.scrollTo({top: target.offsetTop - 70, behavior: 'smooth'});
        // close mobile nav
        if(window.innerWidth <= 980) nav.style.display = 'none';
      }
    });
  });

  // Projects filter
  const pills = document.querySelectorAll('.pill');
  const cards = document.querySelectorAll('.project-card');
  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    const filter = p.dataset.filter;
    cards.forEach(card => {
      const tags = card.dataset.tags.split(' ');
      if(filter === 'all' || tags.includes(filter)) card.style.display = '';
      else card.style.display = 'none';
    });
  }));

  // Simple intersection observer for reveal animations (optional)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if(ent.isIntersecting) ent.target.classList.add('reveal');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.project-card, .timeline-item, .skill, .hero-photo').forEach(el => io.observe(el));

})();
