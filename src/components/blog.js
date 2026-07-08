import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";

const blogTemplate = () => html``;

export function mountBlog() {
  return mount("blog", blogTemplate());
}

export function blogListTemplate(items) {
  return html``;
}
