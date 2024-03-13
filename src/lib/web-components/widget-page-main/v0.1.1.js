// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";
// @ts-expect-error - type defs not available
import QuoteTout from "/e/wc/quote-tout.0.1.1.min.js";
// @ts-expect-error - type defs not available
import CtaTout from "/e/wc/cta-tout.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Widget Page Main" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-page-main} */

/**
 * Widget Card Grid Web Component
 * @name WidgetPageMain
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of image tiles.
 *
 * @attribute color-accent | lightblue | rgb(0 184 156 / 100%) | color of the text
 * @attribute color-background | white | #F8FAFC | background color of the widget
 * @attribute color-primary | currentColor | #0A2E7E | color of the text
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | 600 | -- | font weight of the heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-margin-top | 1.5rem | -- | margin top of the heading
 * @attribute heading-text | -- | Send Us a Message | widget heading text
 * @attribute body-text | -- | Browse our world-class training courses and modules by category. | text of the widget
 * @attribute quote-text | -- | -- | text of the quote
 * @attribute quote-attribution | -- | -- | attribution for quote
 * @slot | -- | <div slot="main"><iframe src="https://go.marketing.petroskills.com/l/934903/2021-09-24/4p8q" width="100%" height="800px" type="text/html" frameborder="0" allowtransparency="true" style="border: 0px;"></iframe></div> | slot for the main content
 * @slot | -- | <div slot="sidebar">Hello World</div> | slot for the sidebar content
 * SIDEBAR
 * @attribute include-sidebar | true | false | include the sidebar
 *
 * DATA
 * @attribute touts-data-json | [] | [] | json data for the cta touts
 * @attribute sections-data-json | [] | [] | json data for the body content sections
 *
 * STYLESHEET
 * @attribute card-stylesheet | -- | #container { color:#042373; } | inject css into the inner stylesheet
 * @attribute style | -- | -- | regular inline style on the component

 */
class WidgetPageMain extends HTMLElement {


  bodyText = "";
  colorAccent = "";
  colorPrimary = "";
  colorBackground = "";
  headingFontSize = "";
  headingFontWeight = "";
  headingMarginBottom = "";
  headingMarginTop = "";
  headingText = "";
  linkUrl = "";
  linkLabel = "";
  quoteText = "";
  quoteAttribution = "";
  sectionsDataJson = "[]";
  toutsDataJson = "[]";

  // stylesheet
  stylesheet = "";

// reference to class itself
get c() { return WidgetPageMain };



// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string | null } }
 */
static get attributes() {
const values = {

  "body-text": "",
  "color-accent": "currentColor",
  "color-background": "#0B2E7E",
  "color-primary": "currentColor",
  "heading-font-size": "1.25rem",
  "heading-font-weight": "600",
  "heading-margin-bottom": "1.5rem",
  "heading-margin-top": "1.5rem",
  "heading-text": "",
  "link-url": "",
  "link-label": "",
  "quote-text": "",
  "quote-attribution": "",
  "sections-data-json": '[]',
  "touts-data-json": "[]",

  /* stylesheet */
  "stylesheet": "",

};
return values;
}

// OBSERVED ATTRIBUTES GETTER
static get observedAttributes() { return Object.keys(this.attributes) }

// ATTRIBUTE DEFAULT VALUE GETTER
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

/** @typedef {{[key:string]: unknown; sectionText: string[] | undefined }} sectionDatum */

// HTML BUILDERS
buildSectionsHTML() {
  /** @param {sectionDatum} item */
  const buildSection = (item) => {
    return `
      <section
        class="tile">

        <!-- section heading -->
        ${item?.['section-heading'] ? `<h3 class="section-heading">${item?.['section-heading'] ?? ""}</h3>` : ""}

        <!-- section text -->
        ${item?.['section-text']?.map((
          /** @type {string} item */
          item) => `<p class="section-text">${item}</p>`).join("")}

        <!-- section link -->
        ${item?.['link-label'] ? `<a class="section-link" href="${item?.['link-url'] ?? ''}">${item?.['link-label'] ?? ""}</a>` : ""}

      </section>`
  }

  const buildSections = () => {
    return this.sectionsData.map((
      /** @type {sectionDatum} item */
      item) => buildSection(item)).join("");
  }


  return buildSections() ;
}
buildToutsHTML() {
  window.console.log("toutsData", this.toutsData);

  /** @param {sectionDatum} item */
  const buildTout = (item) => {
    if (!item.body && !item.heading && !item.subheading) return "";
    return `
        <div class="tout-container">
          <cta-tout
            color-background="${item.backgroundColor ?? '#E2F4F2'}"
            color-border="rgb(10 46 126 / 5%)"
            color-primary="#0A2E7E"
            container-max-width="none"
            heading-text="${item.heading ?? ''}"
            subheading-text="${item.subheading ?? ''}"
            subheading-font-size=".9rem"
            body-text="${item.body}"
            body-font-size=".85rem"
            link-text="${item['link-label'] ?? ''}"
            link-url="${item['link-url'] ?? ''}">
          </cta-tout>
      </div>
     `
  }

  const buildTouts = () => {
    return this.toutsData.map((
      /** @type {sectionDatum} item */
      item) => buildTout(item)).join("");
  }


  return buildTouts() ;
}

// DATA
get sectionsData() {
  const result = JSON.parse(this.sectionsDataJson) ?? "[]";
  return result;
}
get toutsData() {
  const result = JSON.parse(this.toutsDataJson) ?? "[]";
  window.console.log("result", result);
  return result;
}


// ELEMENTS
get els() {
  return `
<style id="stylesheet">${this.stylesheet}</style>
<div
  id="container"
  style="
    --color-accent:${this.colorAccent};
    --color-background:${this.colorBackground};
    --color-primary:${this.colorPrimary};
    --heading-font-size:${this.headingFontSize};
    --heading-font-weight:${this.headingFontWeight};
    --heading-margin-bottom:${this.headingMarginBottom};
    --heading-margin-top:${this.headingMarginTop};"
  >


  <!-- main column -->
  <main id="main">

    <!-- main heading -->
    <h2 id="main-heading">${this.headingText}</h2>

    <!-- section -->
    ${this.buildSectionsHTML()}

	<slot name="main"></slot>
  </main>

  <!-- sidebar column -->
  <aside id="sidebar">

    <!-- quote tout(s) -->
    ${this?.quoteText ? `
      <div class="tout-container">
        <quote-tout
          color-background="#D8E0ED"
          color-border="rgb(10 46 126 / 5%)"
          color-primary="#0A2E7E"
          container-max-width="none"
          quote-text="${this?.quoteText ?? ''}"
          quote-font-size=".95rem">
        </quote-tout>
      </div>` : ""}

    <!-- cta touts -->
    ${this.buildToutsHTML()}

		<slot name="sidebar"></slot>

  </aside>




</div>`.trim();
}

get preflight() {
  return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}::before,::after {--tw-content:""}html,:host {line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:theme( "fontFamily.sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body {margin:0;line-height:inherit}hr {height:0;color:inherit;border-top-width:1px}abbr:where([title]) {text-decoration:underline dotted}h1,h2,h3,h4,h5,h6 {font-size:inherit;font-weight:inherit}a {color:inherit;text-decoration:inherit}b,strong {font-weight:bolder}code,kbd,samp,pre {font-family:theme( "fontFamily.mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small {font-size:80%}sub,sup {font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub {bottom:-0.25em}sup {top:-0.5em}table {text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea {font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select {text-transform:none}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring {outline:auto}:-moz-ui-invalid {box-shadow:none}progress {vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button {height:auto}[type="search"] {-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration {-webkit-appearance:none}::-webkit-file-upload-button {-webkit-appearance:button;font:inherit}summary {display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin:0}fieldset {margin:0;padding:0}legend {padding:0}ol,ul,menu {list-style:none;margin:0;padding:0}dialog {padding:0}textarea {resize:vertical}input::placeholder,textarea::placeholder {opacity:1;color:theme("colors.gray.400", #9ca3af)}button,[role="button"] {cursor:pointer}:disabled {cursor:default}img,svg,video,canvas,audio,iframe,embed,object {display:block;vertical-align:middle}img,video {max-width:100%;height:auto}[hidden] {display:none}`
}

// STYLES
get styles() {
  return `
  <style id="preflight">${this.preflight}</style>
  <style id="base">
  :host, *:not(style) {
    display:block;
    box-sizing:border-box;
    margin:0;	-
    webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; }

  /* container */
  #container {
    align-items:start;
    background-color: var(--color-background, transparent);
    color: var(--color-primary, currentColor);
    display:grid;
    grid-template-columns:	grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 4rem;
    padding:64px 16px 96px;
    width:100%;
  }
  @media (min-width: 640px) {
    #container {
      padding:64px 24px 96px;
    }
  }
  @media (min-width: 1024px) {
    #container {
      column-gap: 4rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding:48px 32px 76px;
    }
  }
  @media (min-width: 1280px) {
    #container {
      padding:64px 80px 96px;
    }
  }

  /* main */
  #main {

  }
  @media (min-width: 1024px) {
    #main {
      grid-column: span 2 / span 2;
    }
  }

  /* main heading */
  #main-heading {
    color: var(--color-primary, currentColor);
    font-size: 1.25rem;
    font-weight: var(--heading-font-weight, 600);
    margin-bottom: 2rem;
    max-width: 576px;
  }
  @media (min-width: 640px) {
    #main-heading {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 768px) {
    #heading {
      font-size: 1.5em;
      margin-bottom: .825rem;
    }
  }
  @media (min-width: 1024px) {
    #heading {
      font-size: 1.75em;
    }
    #heading-link:hover {
      background-color:var(--color-accent, currentColor);
      color:var(--color-primary, currentColor);
    }
  }

  /* section */
  #main section {
    margin-bottom: 2rem;
  }

  /* section heading */
  #main section .section-heading {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    max-width: 576px;
    opacity:.95;

  }

  /* section text */

  #main section .section-text {
    color: var(--color-primary, currentColor);
    display:block;
    line-height:1.6;
    max-width:none;
    margin-bottom:1rem;
    opacity:.9;
  }
  @media (min-width: 640px) {
    #main section .section-text {
      padding:0;
      }
    }
  @media (min-width: 768px) {
    #main section .section-text {
      max-width:576px;
      padding:0;
      }
    }
  @media (min-width: 1024px) {
    #main section .section-text {
    max-width:576px;
    }
  }
  @media (min-width: 1280px) {
    #main section .section-text {
      max-width:576px;
      }
    }

  /* section links */
  #main section .section-link {
    color: var(--color-primary, currentColor);
    display:inline-block;
    font-size: .8rem;
    border: solid 1px var(--color-primary, currentColor);
    border-radius:.25rem;
    margin-bottom:.5rem;
    padding:.35rem .85rem;
    transition:background-color .15s ease;
    }
  #main section .section-link:hover {
      background-color:var(--color-primary, currentColor);
      color:var(--color-background, currentColor);
  }

  /* sidebar */
  #sidebar {
  }

  /* tout container */
  #sidebar .tout-container {
    margin-bottom: 2rem;
  }


</style>`
}
// TEMPLATE
get template() {
  const template = document.createElement("template");
  template.innerHTML = `${this.styles}${this.els}`.trim();
  return template;
}
// IDS
get ids() {
  return [...`${this.els + this.styles}`.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
}

// CONSTRUCTOR
constructor() {
  super();

  // programattically create getters and setters for each observed attribute
  ComponentUtils.createOAGS(this.c, this);

  // create a shadow root
  this.attachShadow({ mode: "open" });

}

// LIFECYCLE CALLBACKS

connectedCallback() {
  // append the template content to the shadow DOM
  this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

  // define refs elements
  this.refs = ComponentUtils.getRefs(this.c, this);
}

// METHODS
}

customElements.define("widget-page-main", WidgetPageMain);
export default WidgetPageMain;


