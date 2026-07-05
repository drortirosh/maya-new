// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Close menu after clicking a link (mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Build dynamic email subject from name + phone before submitting
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", () => {
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    form.elements.subject.value = `משתמש חדש: ${name} ${phone}`.trim();
  });
}

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
