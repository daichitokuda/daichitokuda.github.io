"use strict";

document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});

const filterButtons = [...document.querySelectorAll("[data-year]")];
const publicationGroups = [...document.querySelectorAll("[data-publication-year]")];
const publicationCount = document.querySelector(".publication-count");

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    const year = button.dataset.year;
    let count = 0;

    for (const group of publicationGroups) {
      group.hidden = year !== "all" && group.dataset.publicationYear !== year;
      if (!group.hidden) count += group.querySelectorAll(".publication").length;
    }

    for (const filter of filterButtons) {
      filter.setAttribute("aria-pressed", String(filter === button));
    }

    publicationCount.textContent = `${count} publication${count === 1 ? "" : "s"}`;
  });
}

document.querySelector(".publication-toolbar").hidden = false;

// Keep navigation in sync with the section at the top of the viewport.
const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href")));
let scrollScheduled = false;

function updateNavigation() {
  const boundary = window.innerHeight * 0.3;
  let currentSection = sections[0];

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= boundary) currentSection = section;
  }

  for (const link of sectionLinks) {
    if (link.getAttribute("href") === `#${currentSection.id}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }

  scrollScheduled = false;
}

window.addEventListener("scroll", () => {
  if (!scrollScheduled) {
    window.requestAnimationFrame(updateNavigation);
    scrollScheduled = true;
  }
}, { passive: true });

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeMenu();
  updateNavigation();
});

updateNavigation();
document.querySelector("#copyright-year").textContent = String(new Date().getFullYear());
