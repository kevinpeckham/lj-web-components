// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// TYPES
/** @typedef {{[key:string]: unknown; "heading": string; "text": [string];"icon-url":[string]; "link-label": [string]; "link-url": string;  }} topicDatum */

/** @copyright 2024 Lightning Jar - "Widget Topics Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/widget-topics-grid} */

/**
 * Widget Card Grid Web Component
 * @name WidgetTopicsGrid
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @updated 2024-04-01
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of image tiles.
 * @attribute color-background | white | #F8FAFC | background color of the widget
 * @attribute color-primary | currentColor | #0A2E7E | color of the text
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | 600 | -- | font weight of the heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-margin-top | 1.5rem | -- | margin top of the heading
 * @attribute heading-text | -- | Training Solutions
 * @attribute link-url | -- | https://petroskills.com/training | url of the heading link
 * @attribute link-label | -- | Browse Training | label of the heading link
 * @attribute body-text | -- | The world's largest offering of competency-based classroom training open to the public, or on an in-house basis; as well as comprehensive e-learning offerings for operators. | text of the widget
 *
 * DATA
 * @attribute topics-data-json | [] | [{"heading":"Instructor-led Courses","text":"Hundreds of sessions delivered each year to public and in-house audiences. Directed and quality-assured by the Alliance, these courses deliver the knowledge and competencies that enable participants to add immediate value back on the job.","icon-url":"https://www.thecompetencyalliance.com/thecompetencyalliance/competency-consulting/managing.svg", "link-url":"https://petroskills.com/training","link-label":"Learn more"},{"heading":"Online Learning","text":"Blended Learning offerings combine self-paced online training with virtual instructor-led sessions. Individual eLearning modules and libraries deliver specific technical content available on demand at point of need.","icon-url":"https://www.thecompetencyalliance.com/thecompetencyalliance/competency-consulting/e-learning.png", "link-url":"https://www.petroskills.com/blended","link-label":"Learn more"}] | json data for the body content sections
 *
 * STYLESHEET
 * @attribute stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute style | -- | -- | regular inline style on the component

 */
class WidgetTopicsGrid extends HTMLElement {

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
  "stylesheet": "",
};
return values;
}

// HTML BUILDERS
/** @param {topicDatum} topic */
static buildSection(topic) {
	return `
		<!-- section icon list -->
		<div class="topic">
			<img class="topic-icon" loading="lazy" src="${topic?.['icon-url'] ?? ''}" alt="${topic?.['heading'] ?? ''}">
			<h3 class="topic-heading">${topic?.heading ?? ''}</h3>
			<p class="topic-text">${topic?.text ?? ''}</p>
			<a class="topic-link" href="${topic?.['link-url'] ?? ''}" title="learn more about ${topic.heading}">${topic?.['link-label'] ?? ''}</a>
		</div>`
}

buildTopicsHTML() {
	const /** @type {topicDatum[]} data */ data = JSON.parse(this.attValue('topics-data-json')) ?? [];
  return data.map((topic) => this.c.buildSection(topic)).join("") ;
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {
	const html = ComponentUtils.stringIfValue;
	const bodyText = this.attValue('body-text');
	const headingText = this.attValue('heading-text');
	const topics = this.buildTopicsHTML();
  return `
<style id="stylesheet">${this.attValue('stylesheet')}</style>
<main id="container" style="${ComponentUtils.cssVars(this.c.attributes, this)}">
	${html(headingText, `<h2 id="heading">${headingText}</h2>`)}
	${html(bodyText, `<p id="text">${bodyText}</p>`)}
	${html(topics, `<div id="topics">${this.buildTopicsHTML()}</div>`)}
</main>`.trim();
}

// STYLES
get styles() {
  return `
  ${ComponentUtils.preflight}
  <style id="base">
  :host, *:not(style) {
    webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; }
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
	@media (min-width: 420px) { #container { padding-block:64px 96px; }}
	@media (min-width: 1024px) { #container { padding-block:48px 76px; }}
	@media (min-width: 1280px) { #container { padding-block:64px 96px; }}
	${ComponentUtils.paddingXStyles()}
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
	#text {
	 opacity:.9;
	 max-width:576px;
	}
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
 	.topic-heading {
    font-size: 1rem;
    font-weight: 700;
		line-height:snug;
    margin-bottom: .5rem;
    max-width: 576px;
    opacity:.95;
  }
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

// CONSTRUCTOR
constructor() {
  super();
  this.attachShadow({ mode: "open" });
}

// CONNECTED CALLBACK
connectedCallback() {
  this.shadowRoot?.appendChild(this.template.content.cloneNode(true))
}
}

customElements.define("widget-topics-grid", WidgetTopicsGrid);
export default WidgetTopicsGrid;


