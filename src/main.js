import { mount, showError } from "./utils/dom.js";
import { fetchJson } from "./utils/fetch.js";
import { URLs } from "./constants/urls.js";
import { observeReveals } from "./animations/scrollReveal.js";
import { initInteractions } from "./animations/interactions.js";

import { mountNav } from "./components/nav.js";
import { mountHero } from "./components/hero.js";
import { mountAbout } from "./components/about.js";
import { mountExperience } from "./components/experience.js";
import { mountSkills } from "./components/skills.js";
import { mountGithub } from "./components/github.js";
import { mountAdventures } from "./components/adventures.js";
import { mountContact, initContactForm } from "./components/contact.js";
import { mountFooter } from "./components/footer.js";

import { initNavScroll } from "./services/nav-scroll.js";
import { initTheme } from "./services/theme.js";
import { initCommandPalette } from "./services/commandPalette.js";
import { initEasterEggs } from "./services/easterEgg.js";
import { initProfileCards } from "./services/profileCard.js";
import { initVisitorCounter } from "./services/visitorCounter.js";

async function loadPageTitle() {
  try {
    const { basics } = await fetchJson(URLs.gitConnected, "gitconnected");
    if (basics?.name) document.title = `${basics.name} — Software Engineer`;
  } catch {
    // non-critical — silent fail, default <title> already set
  }
}

function mountStaticSections() {
  mountNav();
  mountHero();
  mountAbout();
  mountExperience();
  mountSkills();
  mountGithub();
  mountAdventures();
  mountContact();
  mountFooter();
}

function initServices() {
  initTheme();
  initNavScroll();
  initCommandPalette();
  initEasterEggs();
  initInteractions();
  initContactForm();
  initProfileCards();
  initVisitorCounter();
}

mountStaticSections();
initServices();
observeReveals();

Promise.allSettled([loadPageTitle()]);

