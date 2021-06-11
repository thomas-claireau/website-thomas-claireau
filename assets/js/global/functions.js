import SVGInjector from "svg-injector";

export function injectSvgs() {
  const svgs = document.querySelectorAll("img.js-inject-me");

  SVGInjector(svgs);
}
