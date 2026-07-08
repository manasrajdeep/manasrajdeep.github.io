import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { projects } from "../../user-data/data.js";
import { URLs } from "../constants/urls.js";

const projectCard = (item, index) => html`
  <div
    class="repo-card glass glass-interactive glow-card tilt"
    data-reveal
    style="--reveal-index: ${index}"
  >
    <div class="repo-card-head">
      <i class="fa-solid fa-${item.icon}" aria-hidden="true"></i>
      <h3>${item.title}</h3>
    </div>
    <p class="repo-description">${item.subtitle}</p>
    <ul class="project-details">
      ${item.details.map(detail => html`<li>${detail}</li>`)}
    </ul>
    <div class="repo-stats">
      ${item.tags.map(tag => html`<span class="repo-stat">${tag}</span>`)}
    </div>
  </div>
`;

const githubTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>My Work</p>
      <h2 class="section-title" id="github-title" data-reveal>
        Technical <span class="gradient-text">Projects</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        A collection of my best work, showcasing my skills in frontend and backend development.
      </p>
    </div>

    <div class="repo-grid" id="repos">
      ${projects.map((item, i) => projectCard(item, i))}
    </div>
  </div>
`;

export function mountGithub() {
  return mount("github", githubTemplate());
}
