document.addEventListener("DOMContentLoaded", () => {
  // AOS for smooth scroll fades
  AOS.init({ duration: 700, easing: "ease-out", once: true, offset: 20 });

  // Tabs (single active section at a time)
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return;

      tabs.forEach(t => t.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.tab);
      target.classList.add("active");

      // re-trigger AOS in the newly displayed section
      setTimeout(() => AOS.refresh(), 50);
    });
  });

  // Contact form via EmailJS
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "Sending...";
      const formData = new FormData(form);

      // Prepare EmailJS params
      const params = {
        from_name: formData.get("name"),
        reply_to: formData.get("email"),
        message: formData.get("message"),
      };

      try {
        // Replace with your EmailJS IDs
        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
        status.textContent = "Thanks! Your message has been sent.";
        status.style.color = "#8be28b";
        form.reset();
      } catch (err) {
        status.textContent = "Could not send. Please try again later.";
        status.style.color = "#ff8484";
        // console.error(err);
      }
    });
  }
});
