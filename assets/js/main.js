import "../scss/style.scss";

import "@fortawesome/fontawesome-free/js/all.js";

import { injectSvgs } from "./functions";
import "./header";

document.addEventListener("DOMContentLoaded", () => {
  injectSvgs();
});
