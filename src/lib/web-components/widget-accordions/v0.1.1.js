// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// TYPES
/** @typedef {string | undefined } Su */
/** @typedef {{[key:string]: unknown; "heading": Su; "text": Su;}} CardContentDatum */
/** @typedef {{[key:string]: unknown; name: string; type: Su; contents: CardContentDatum[]; }} Card */

/** @copyright 2024 Lightning Jar - "Widget Accordions" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/widget-accordions} */

/**
 * Widget Card Grid Web Component
 * @name WidgetAccordions
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of image tiles.
 * @attribute body-text | -- | We provide technology-driven, expert-authored training content in various formats to help companies overcome competency challenges. | text of the widget
 * @attribute card-aspect-ratio | 1/1 | -- | aspect ratio of the card
 * @attribute card-background-color | white | "#EAF1F7" | background color of the card
 * @attribute card-border-radius | .35rem | .5rem | border radius of the card
 * @attribute card-box-shadow | none | 0 0 1px 0 rgba(0,0,0,.4); | box shadow of the card
 * @attribute card-font-size | 100% | -- | font size of the card
 * @attribute card-font-weight | inherit | -- | font weight of the card
 * @attribute card-height | auto | -- | height of the card
 * @attribute card-hover-opacity | -- | -- | opacity of the card on hover
 * @attribute card-hover-background-color | -- | -- | background color of the card on hover
 * @attribute card-label-color | inherit | -- | color of the outside heading
 * @attribute card-label-font-size | inherit | -- | font size of the outside heading
 * @attribute card-label-font-weight | inherit | -- | font weight of the outside
 * @attribute card-label-margin-bottom | .5rem | -- | margin of the outside heading
 * @attribute card-label-margin-top | .5rem | -- | margin of the outside heading
 * @attribute card-label-position | below | -- | position of the outside heading
 * @attribute card-max-width | none | 24rem | max width of the card
 * @attribute card-min-height | auto | 20rem | min height of the card
 * @attribute card-opacity | 100% | -- | opacity of the card
 * @attribute card-transition-property | opacity | -- | transition property of the card
 * @attribute card-transition-duration | .3s | -- | transition duration of the card
 * @attribute card-width | 100% | -- | width of the card
 * @attribute cards-data-json | [] | [{"name":"High-quality Content","type":"boxes","contents":[{"heading":"Benchmarks", "text":"Industry benchmarks for technical courses"},{"heading":"Programs","text":"Pre-packaged learning programs"},{"heading":"Levels","text":"Content for all skill levels, from awareness to expert"},{"heading":"Assessment","text":"Competency maps and other tools to assess skills and gaps"}]},{"name": "Powered by Technology", "type":"circles","contents":[{"heading":"eLearning Libraries", "text":""},{"heading":"Training Simulators","text":""},{"heading":"Learning Management (LMS)","text":""},{"heading":"Skill Tracking Software","text":""}]},{"name": "Authored by Industry Experts", "type":"stats","contents":[{"heading":"150+", "text":"instructors, recognized experts in their fields"},{"heading":"31+","text":"average years of experience"},{"heading":"99%","text":"would recommend course to a colleague"}]},{"name":"Available in Multiple Formats","type":"boxes","contents":[{"heading":"In-classroom", "text":"public instructor-led training at locations all over the globe"},{"heading":"In-house","text":"private in-classroom or virtual training anywhere in the world"},{"heading":"Remote","text":"virtual, instructor-led sessions, with or without eLearning components"},{"heading":"On-Demand","text":"a diverse catalog of self-guided eLearning courses and libraries"}]}] | json data for the cards
 * @attribute color-accent | lightblue | rgb(0 184 156 / 100%) | color of the text
 * @attribute color-background | white | #F8FAFC | background color of the widget
 * @attribute color-primary | currentColor | #24418A | color of the text
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | 600 | -- | font weight of the heading
 * @attribute heading-link-url | -- | -- | url of the heading link
 * @attribute heading-link-label | -- | -- | label of the heading link
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-margin-top | 1.5rem | -- | margin top of the heading
 * @attribute heading-text | -- | How Do We Solve These Issues? | widget heading text
 * @attribute meta-font-size | .75rem | -- | font size of the meta text
 * @attribute meta-margin-bottom | 1.5rem | -- | margin bottom of the meta text
 * @attribute meta-text | -- | Our Approach | meta text of the widget
 * @attribute stylesheet | -- | #container { color:#042373; } | inject css into the inner stylesheet
 */
class WidgetAccordions extends HTMLElement {

get c() { return WidgetAccordions };

// ATTRIBUTES
/** @returns {{ [key:string]: string | null }} */
static get attributes() {
return {
	"body-text": "",
	"card-aspect-ratio": "1/1",
	"card-background-color": "white",
	"card-border-radius": ".35rem",
	"card-box-shadow": "none",
	"card-font-size": "100%",
	"card-font-weight": "inherit",
	"card-height": "auto",
	"card-hover-opacity": "",
	"card-hover-background-color": "",
	"card-label-color": "inherit",
	"card-label-font-size": "1rem",
	"card-label-font-weight": "inherit",
	"card-label-margin-bottom": ".5rem",
	"card-label-margin-top": ".5rem",
	"card-label-position": "below",
	"card-max-width": "none",
	"card-min-height": "auto",
	"card-opacity": "100%",
	"card-transition-property": "opacity",
	"card-transition-duration": "0.3s",
	"card-width": "100%",
	"cards-data-json": "[]",
	"color-accent": "currentColor",
	"color-background": "#0B2E7E",
	"color-primary": "currentColor",
	"heading-font-size": "1.25rem",
	"heading-font-weight": "bold",
	"heading-link-url": "",
	"heading-link-label": "",
	"heading-margin-bottom": "1.5rem",
	"heading-margin-top": "1.5rem",
	"heading-text": "",
	"meta-font-size": ".75rem",
	"meta-margin-bottom": ".5rem",
	"meta-text": "",
	"stylesheet": "",
}}

static html = ComponentUtils.stringIfValue;

// HTML BUILDERS
static buildTileHTML(/** @type {CardContentDatum} */ content) {
const heading = content.heading ?? "";
const text = content.text ?? "";
return `
	<div class="tile">
		${this.html(heading, `<div class="card-heading">${heading}</div>`)}
		${this.html(text, `<div class="card-text">${text}</div>`)}
	</div>`
}

static buildTilesHTML(/** @type {CardContentDatum[]} */ contents) {
	return contents.map((content) => this.buildTileHTML(content)).join("");
}

buildGridHTML() {
/** @type {Card[]} data */
const data = JSON.parse(this.attValue('cards-data-json')) ?? "[]";
const grid = data.map((card) => {
	const accordion = this.c.buildTilesHTML(card.contents ?? [])
	const name = card.name ?? "";
	const type = card.type ?? "";
	return accordion === "" ? "" : `
	<div class="accordion ${type}">
		<div class="accordion-header">
			${this.c.html(name, `<span>${name}</span>`)}
			<label>
				<div class="sr-only">close accordion drawer</div>
				<input type="checkbox" />
				<div class="icon-chevron">
				</div>
			</label>
		</div>
		${this.c.html(accordion, `<div class="accordion-drawer">${accordion}</div>`)}
	</div>`
}).join("") ;
return grid;
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {
	const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
	const html = this.c.html;
	const stylesheet = this.attValue('stylesheet');

	// values
	const bodyText = this.attValue('body-text');
	const grid = this.buildGridHTML();
	const headingText = this.attValue('heading-text')[0] + this.attValue('heading-text').substring(1).toLowerCase();
	const headingLinkUrl = this.attValue('heading-link-url');
	const headingLinkLabel = this.attValue('heading-link-label');
	const metaText = this.attValue('meta-text');
  return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div id="container" style="${cssVars}"><div id="container-inner">
	${html(metaText,`<div id="meta" style="">${metaText}</div>`)}
	<div id="heading-row">
		${html(headingText, `<h2 id="heading">${headingText}</h2>`)}
		${html(headingLinkLabel, `<a id="heading-link" href="${headingLinkUrl}">${headingLinkLabel}</a>`, headingLinkUrl)}
	</div>
	${html(bodyText, `<p id="text">${bodyText}</p>`)}
	${html(grid, `<div id="accordions">${grid}</div>`)}
</div></div>`.trim();
}

// STYLES
static get styles() {
  return `
	${ComponentUtils.preflight}
  <style id="base">
	*:empty { display:none; }
	#container {
		background-color: var(--color-background, transparent);
		color: var(--color-primary, currentColor);
		display:grid;
		align-items:start;
		width:100%;
	}
	${ComponentUtils.widgetPaddingStyles()}
	#meta {
		color: var(--color-accent, currentColor);
		font-size: var(--font-size, .85rem);
		margin-bottom: var(--margin-bottom, 1.5rem);
		opacity:1;
		text-transform:uppercase;
	}
	#heading-row {
		align-items:center;
		display:flex;
		justify-content:space-between;
		margin-bottom:0;
		width:100%;
	}
	#heading {
		color: var(--color-primary, currentColor);
		filer:drop-shadow(0 1px 1px rgba(0, 0, 0, .05));
		font-size: 1.25rem;
		font-weight: var(--heading-font-weight, 600);
		margin-bottom: .5rem;
		max-width:576px;
	}
	#heading-link {
		color: var(--color-accent, currentColor);
		display:inline-block;
		font-size: .8rem;
		border: solid 1px var(--color-accent, currentColor);
		border-radius:.25rem;
		display:"inline-block";
		margin-bottom:.5rem;
		padding:.35rem .85rem;
		transition:background-color .15s ease;
	}
	@media (min-width: 640px) {
		#heading {
			font-size: 1.5rem;
			margin-bottom: .75rem;
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
	#text {
		color: var(--color-primary, currentColor);
		display:block;
		max-width:none;
		margin-bottom:2rem;
		opacity:.9;
	}
	@media (min-width: 640px) {
		#text {
			padding:0;
			margin-bottom:48px;
			}
		}
	@media (min-width: 768px) {
		#text {
			max-width:576px;
			padding:0;
			margin-bottom:48px;
			}
		}
	@media (min-width: 1024px) {
	#text {
		max-width:576px;
		margin-bottom:56px;
		}
	}
	@media (min-width: 1280px) {
		#text {
			max-width:576px;
			margin-bottom:64px;
			}
		}
	#accordions {
		background:#CBD5E1;
		border-radius:.35rem;
		overflow-hidden;
	}
	#accordions .accordion {
		border-radius:.35rem;
		overflow:hidden;
	}
	#accordions .accordion-header {
		align-items:center;
		background: var(--color-primary, transparent);
		color: var(--color-background, currentColor);
		display:flex;
		justify-content:space-between;
		font-size: 1rem;
		font-weight: 500;
		padding:.5rem 1rem;
		width:100%;
	}
	#accordions .accordion .accordion-header label {
		align-items:center;
		aspect-ratio:1/1;
		border-radius:.25rem;
		display:flex;
		height:50px;
		justify-content:center;
		position:relative;
		pointer-events:auto;
		transition: background-color .15s;
		transform:translateX(-0%);
		width:50px;
	}
	#accordions .accordion .accordion-header label:hover {
		background-color:rgb(255 255 255 / 10%);
	}
	#accordions .accordion .accordion-header label input {
		display:none;
	}
	#accordions .accordion .accordion-header label .icon-chevron {
		align-items:center;
		color: var(--color-background, currentColor);
		display:flex;
		height:100%;
		width:100%;
		top:5px;
		justify-content:center;
		position:absolute;
		transition:transform .153s, top .153s, opacity .153s;
		transform-origin:50%;
		transform:rotate(-45deg);
	}
	#accordions .accordion .accordion-header label input:checked ~ .icon-chevron {
		transform:rotate(135deg);
		top:-5px;
	}
	#accordions .accordion .accordion-header label .icon-chevron:before {
		content:"";
		cursor:pointer;
		border-color:currentColor;
		border-style:solid;
		border-width: 1px 1px 0 0;
		display:block;
		height:30px;
		position:absolute;
		inset-0;
		width:30px;
	}
	#accordions .accordion-drawer {
		background:#CBD5E1;
		border-radius:.35rem;
		border-bottom:1px solid #CBD5E1;
		display:grid;
		height:0;
		grid-template-columns:repeat(1,minmax(0,1fr));
		padding:0 0 1px;
		row-gap:1rem;
	}
	#accordions .accordion:has(input:checked) .accordion-drawer {
		height:auto;
		padding:1.5rem 1rem 2rem;
	}
	#accordions .accordion.circles .accordion-drawer {
		column-gap:3rem;
	}
	@media (min-width: 640px) {
		#accordions .accordion-drawer {
			grid-template-columns:repeat(2,minmax(0,1fr));
			column-gap:1rem;
		}
	}
	@media (min-width: 768px) {
		#accordions .accordion-drawer {
			grid-template-columns:repeat(3,minmax(0,1fr));
		}
	}
	@media (min-width: 1024px) {
		#accordions .accordion-drawer {
			grid-template-columns:repeat(4,minmax(0,1fr));
			column-gap:1.5rem;
		}
	}
	#accordions .accordion .tile {
		background-color: var(--color-background, transparent);
		overflow:hidden;
		padding:1rem;
	}
	#accordions .accordion.boxes .tile, #accordions .accordion.stats .tile {
		border-radius:.35rem;
		overflow:hidden;
		width:100%;
	}
	#accordions .accordion.circles .tile {
		align-items:center;
		aspect-ratio:1/1;
		border-radius:99999px;
		display:flex;
		justify-content:center;
		text-align:center;
		width:100%;
	}
	#accordions .accordion .card-heading {
		color: var(--color-primary, currentColor);
		font-size: .9rem;
		font-weight: var(--heading-font-weight, 600);
		margin-bottom: .5rem;
	}
	#accordions .accordion.stats .card-heading {
		font-size:2rem;
	}
	#accordions .accordion .card-text {
		color: var(--color-primary, currentColor);
		font-size: .9rem;
		margin-bottom: .5rem;
		opacity:.9;
	}
	#grid {
		display:grid;
		grid-template-columns:	grid-template-columns: repeat(1, minmax(0, 1fr));
		gap:1rem;
		width:100%;
	}
	@media (min-width: 640px) {
		#grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 720px) {
		#grid {
			gap:1.25rem;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		#grid {
			column-gap:24px;
			grid-template-columns: repeat(4,minmax(0,1fr));
			place-content:center;
		}
	}
	@media (min-width: 1280px) {
		#grid {
			column-gap:32px;
		  grid-template-columns: repeat(5,minmax(0,1fr));
		}
	}
	@media (min-width: 1536px) {
		#grid {
			column-gap:48px;
			grid-template-columns: repeat(6,minmax(0,1fr));
		}
	}
	#grid .tile {
		width:100%;
	}
	#grid .tile .tile-inner {
		aspect-ratio:1/1;
		background-color:var(--card-background-color, transparent);
		border-radius:var(--card-border-radius, .35rem);
		overflow:hidden;
		width:100%;
	}
	#grid .tile .card-label {
		font-size: .9rem;
		margin: var(--card-label-margin-top, .5rem) 0 var(--card-label-margin-bottom, .5rem);
		opacity:.85;
		text-underline-offset:.25em;
		transition:opacity .3s;
	}
	#grid .tile .tile-image {
		aspect-ratio:1/1;
		transition:scale .3s ease;
	}
	@media (min-width: 1024px) {
		#grid .tile:hover .card-label {
			opacity:1;
			text-decoration:underline;
		}
		#grid .tile:hover .tile-image {
			scale:1.2;
		}
	}
	.sr-only {
		border:0;
		clip:rect(0 0 0 0);
		height:1px;
		margin:-1px;
		overflow:hidden;
		padding:0;
		position:absolute;
		width:1px;
	}
</style>`
}
// TEMPLATE
get template() {
  const template = document.createElement("template");
  template.innerHTML = `${this.c.styles}${this.els}`.trim();
  return template;
}

constructor() { super(); this.attachShadow({ mode: "open" }) }
connectedCallback() { this.shadowRoot?.appendChild(this.template.content.cloneNode(true)) }
}

customElements.define("widget-accordions", WidgetAccordions);
export default WidgetAccordions;


