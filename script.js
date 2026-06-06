const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const projects = document.querySelectorAll(".project");
const toggleAllButton = document.querySelector("[data-toggle-all]");
const revealElements = document.querySelectorAll(".reveal");

document.querySelectorAll(".hero .reveal").forEach((element) => element.classList.add("visible"));

if (window.location.hash) {
  document
    .querySelector(window.location.hash)
    ?.querySelectorAll(".reveal")
    .forEach((element) => element.classList.add("visible"));
}

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

projects.forEach((project) => {
  const button = project.querySelector(".project-summary");
  const content = project.querySelector(".project-content");
  const icon = project.querySelector(".project-toggle");

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    content.hidden = isOpen;
    icon.textContent = isOpen ? "+" : "−";
  });
});

function setAllProjects(open) {
  projects.forEach((project) => {
    const button = project.querySelector(".project-summary");
    const content = project.querySelector(".project-content");
    const icon = project.querySelector(".project-toggle");

    button.setAttribute("aria-expanded", String(open));
    content.hidden = !open;
    icon.textContent = open ? "−" : "+";
  });

  toggleAllButton.setAttribute("aria-expanded", String(open));
  toggleAllButton.textContent = open ? "Thu gọn tất cả" : "Mở tất cả";
}

toggleAllButton.addEventListener("click", () => {
  setAllProjects(toggleAllButton.getAttribute("aria-expanded") !== "true");
});

document.querySelector("[data-print]").addEventListener("click", () => window.print());
document.querySelector("[data-year]").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => {
  if (!element.classList.contains("visible")) observer.observe(element);
});

window.setTimeout(() => {
  revealElements.forEach((element) => element.classList.add("visible"));
}, 1200);

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => navObserver.observe(section));
