// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Widget Topics Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-topics-grid} */

/**
 * Widget Card Grid Web Component
 * @name WidgetTopicsGrid
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of image tiles.
 *
 * @attribute color-background | white | #F8FAFC | background color of the widget
 * @attribute color-primary | currentColor | #0A2E7E | color of the text
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | 600 | -- | font weight of the heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-margin-top | 1.5rem | -- | margin top of the heading
 * @attribute heading-text | -- | Training Solutions
 * @attribute link-url | -- | https://petroskills.com/training | url of the heading link
 * @attribute link-label | -- | Browse Training | label of the heading link
 * @attribute body-text | -- | The world's largest offering of competency-based classroom training open to the public, or on an in-house basis; as well as comprehensive e-learning offerings for operators.  | text of the widget
 *
 * DATA
 * @attribute topics-data-json | [] | [{"heading":"Instructor-led Courses","text":"Hundreds of sessions delivered each year to public and in-house audiences. Directed and quality-assured by the Alliance, these courses deliver the knowledge and competencies that enable participants to add immediate value back on the job.","icon-url":"https://www.thecompetencyalliance.com/thecompetencyalliance/competency-consulting/managing.svg", "link-url":"https://petroskills.com/training","link-label":"Learn more"},{"heading":"Online Learning","text":"Blended Learning offerings combine self-paced online training with virtual instructor-led sessions. Individual eLearning modules and libraries deliver specific technical content available on demand at point of need.","icon-url":"https://www.thecompetencyalliance.com/thecompetencyalliance/competency-consulting/e-learning.png", "link-url":"https://www.petroskills.com/blended","link-label":"Learn more"}] | json data for the body content sections
 *
 * STYLESHEET
 * @attribute stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute style | -- | -- | regular inline style on the component

 */
class WidgetTopicsGrid extends HTMLElement {

  bodyText = "";
  colorPrimary = "";
  colorBackground = "";
  headingFontSize = "";
  headingFontWeight = "";
  headingMarginBottom = "";
  headingMarginTop = "";
  headingText = "";
  linkUrl = "";
  linkLabel = "";
  topicsDataJson = "[]";

  // stylesheet
  stylesheet = "";

// reference to class itself
get c() { return WidgetTopicsGrid };



// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string | null } }
 */
static get attributes() {
const values = {

  "body-text": "",
  "color-background": "#0B2E7E",
  "color-primary": "currentColor",
  "heading-font-size": "1.25rem",
  "heading-font-weight": "600",
  "heading-margin-bottom": "1.5rem",
  "heading-margin-top": "1.5rem",
  "heading-text": "",
  "link-url": "",
  "link-label": "",
  "topics-data-json": '[]',

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

/** @typedef {{[key:string]: unknown; "heading": string; "text": [string];"icon-url":[string]; "link-label": [string]; "link-url": string;  }} topicDatum */

// HTML BUILDERS
buildTopicsHTML() {
  /** @param {topicDatum} topic */
  const buildSection = (topic) => {
    return `
				<!-- section icon list -->
				<div class="topic">
					<img class="topic-icon" loading="lazy" src="${topic?.['icon-url'] ?? ''}" alt="${topic?.['heading'] ?? ''}">
					<h3 class="topic-heading">${topic?.heading ?? ''}</h3>
					<p class="topic-text">${topic?.text ?? ''}</p>
					<a class="topic-link" href="${topic?.['link-url'] ?? ''}" title="learn more about ${topic.heading}">${topic?.['link-label'] ?? ''}</a>
				</div>`
  }

  const buildSections = () => {
    return this.topicsData.map((
      /** @type {topicDatum} topic */
      topic) => buildSection(topic)).join("");
  }


  return buildSections() ;
}


// DATA
get topicsData() {
  const result = JSON.parse(this.topicsDataJson) ?? "[]";
  return result;
}



// ELEMENTS
get els() {
  return `
<style id="stylesheet">${this.stylesheet}</style>
<main
  id="container"
  style="
    --color-background:${this.colorBackground};
    --color-primary:${this.colorPrimary};
    --heading-font-size:${this.headingFontSize};
    --heading-font-weight:${this.headingFontWeight};
    --heading-margin-bottom:${this.headingMarginBottom};
    --heading-margin-top:${this.headingMarginTop};"
  >

    <!-- widget heading -->
    <h2 id="heading">${this.headingText}</h2>

		<!-- widget text -->
		<p id="text">${this.bodyText}</p>


    <!-- topics -->
    <div id="topics">${this.buildTopicsHTML()}</div>

</main>`.trim();
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
		border-bottom: solid 1px var(--color-primary, currentColor);
    color: var(--color-primary, currentColor);
    display:grid;
    grid-template-columns:	grid-template-columns: repeat(1, minmax(0, 1fr));
		padding:64px 16px 96px;
		place-items-start;
		place-content:start;
		position:relative;
    width:100%;
  }
  @media (min-width: 640px) {
    #container {
      padding:64px 24px 96px;
    }
  }
  @media (min-width: 1024px) {
    #container {
      padding:48px 32px 76px;
    }
  }
  @media (min-width: 1280px) {
    #container {
      padding:64px 80px 96px;
    }
  }


  /* heading */
  #heading {
    color: var(--color-primary, currentColor);
    font-size: 1.25rem;
    font-weight: var(--heading-font-weight, 600);
    margin-bottom: 1rem;
    max-width: 576px;
  }
  @media (min-width: 640px) {
    #heading {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 768px) {
    #heading {
      font-size: 1.5em;
      margin-bottom: 1rem;
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

	/* text */
	#text {
	 opacity:.9;
	 max-width:576px;
	}

  /* topics */
  #topics {
		display:grid;
		row-gap:4rem;
		padding-top:2rem;
		grid-template-columns: repeat(1, minmax(0, 1fr));
  }
	@media (min-width: 640px) {}
	@media (min-width: 768px) {
		#topics {
			column-gap:2rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			padding-top:3rem;

		}
	}
	@media (min-width: 1024px) {
		#topics {
			column-gap:3rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			padding-top:3rem;
		}
	}
	@media (min-width: 1280px) {
		#topics {
			column-gap:4rem;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			padding-top:3rem;
		}
	}
	/* topic icon */
	.topic-icon {
		background-color:var(--color-primary, darkblue);
		border-radius:50%;
		margin-bottom:1rem;
		padding:1rem;
		object-fit:contain;
		opacity:.9;
		overflow:visible;
		width:5rem;
	}
  /* topic heading */
 	.topic-heading {
    font-size: 1rem;
    font-weight: 700;
		line-height:snug;
    margin-bottom: .5rem;
    max-width: 576px;
    opacity:.95;
  }
  /* topic text */
 	.topic-text {
    color: var(--color-primary, currentColor);
    display:block;
		font-size:.95rem;
    line-height:1.6;
    max-width:none;
    margin-bottom:1rem;
    opacity:.9;
  }
  @media (min-width: 640px) {
    .topic-text {
      padding:0;
      }
    }
  @media (min-width: 768px) {
    .topic-text {
			font-size:.9rem;
      max-width:440px;
      padding:0;
      }
    }
	/* topic link */
	.topic-link {
		color:var(--color-primary, currentColor);
		display:inline-block;
		font-size:.85em;
		border: solid 1px var(--color-primary, currentColor);
		border-radius:.25rem;
		max-width:fit;
		opacity:.9;
		padding:.25rem .85rem;
		transition-property:background-color, color, opacity;
		transition-duration:.15s;
		transition-timing-function:ease;
	}
	.topic-link:hover {
		background-color:var(--color-primary, currentColor);
		color:var(--color-background, currentColor);
		opacity:1;
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

customElements.define("widget-topics-grid", WidgetTopicsGrid);
export default WidgetTopicsGrid;


