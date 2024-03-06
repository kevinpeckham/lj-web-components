// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";
// @ts-expect-error - type defs not available
import ContentCard from "/e/wc/content-card.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Widget Accordions" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-accordions} */

/**
 * Widget Card Grid Web Component
 * @name WidgetAccordions
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of image tiles.
 *
 * WIDGET CONTAINER
 * @attribute color-accent | lightblue | rgb(0 184 156 / 100%) | color of the text
 * @attribute color-background | white | #F8FAFC | background color of the widget
 * @attribute color-primary | currentColor | #24418A | color of the text

 *
 * WIDGET META
 * @attribute meta-font-size | .75rem | -- | font size of the meta text
 * @attribute meta-margin-bottom | 1.5rem | -- | margin bottom of the meta text
 * @attribute meta-text | -- | Our Approach | meta text of the widget
 *
 * WIDGET HEADING
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | 600 | -- | font weight of the heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-margin-top | 1.5rem | -- | margin top of the heading
 * @attribute heading-text | -- | How Do We Solve These Issues? | widget heading text
 *
 * WIDGET HEADING LINK
 * @attribute heading-link-url | -- | -- | url of the heading link
 * @attribute heading-link-label | -- | -- | label of the heading link
 *
 * WIDGET BODY TEXT
 * @attribute body-text | -- | We provide technology-driven, expert-authored training content in various formats to help companies overcome competency challenges. | text of the widget
 *
 * CARD HEADING
 * @attribute card-label-color | inherit | -- | color of the outside heading
 * @attribute card-label-font-size | inherit | -- | font size of the outside heading
 * @attribute card-label-font-weight | inherit | -- | font weight of the outside
 * @attribute card-label-margin-bottom | .5rem | -- | margin of the outside heading
 * @attribute card-label-margin-top | .5rem | -- | margin of the outside heading
 * @attribute card-label-position | below | -- | position of the outside heading

* CARD
 * @attribute card-aspect-ratio | 1/1 | -- | aspect ratio of the card
 * @attribute card-background-color | white | "#EAF1F7" | background color of the card
 * @attribute card-border-radius | .35rem | .5rem | border radius of the card
 * @attribute card-box-shadow | none | 0 0 1px 0 rgba(0,0,0,.4); | box shadow of the card
 * @attribute card-font-size | 100% | -- | font size of the card
 * @attribute card-font-weight | inherit | -- | font weight of the card
 * @attribute card-height | auto | -- | height of the card
 * @attribute card-hover-opacity | -- | -- | opacity of the card on hover
 * @attribute card-hover-background-color | -- | -- | background color of the card on hover
 * @attribute card-max-width | none | 24rem | max width of the card
 * @attribute card-min-height | auto | 20rem | min height of the card
 * @attribute card-opacity | 100% | -- | opacity of the card
 * @attribute card-transition-property | opacity | -- | transition property of the card
 * @attribute card-transition-duration | .3s | -- | transition duration of the card
 * @attribute card-width | 100% | -- | width of the card
 *
 * DATA
 * @attribute cards-data-json | [] | [{"name":"High-quality Content","type":"boxes","contents":[{"heading":"Benchmarks", "text":"Industry benchmarks for technical courses"},{"heading":"Programs","text":"Pre-packaged learning programs"},{"heading":"Levels","text":"Content for all skill levels, from awareness to expert"},{"heading":"Assessment","text":"Competency maps and other tools to assess skills and gaps"}]},{"name": "Powered by Technology", "type":"circles","contents":[{"heading":"eLearning Libraries", "text":""},{"heading":"Training Simulators","text":""},{"heading":"Learning Management (LMS)","text":""},{"heading":"Skill Tracking Software","text":""}]},{"name": "Authored by Industry Experts", "type":"stats","contents":[{"heading":"150+", "text":"instructors, recognized experts in their fields"},{"heading":"31+","text":"average years of experience"},{"heading":"99%","text":"would recommend course to a colleague"}]},{"name":"Available in Multiple Formats","type":"boxes","contents":[{"heading":"In-classroom", "text":"public instructor-led training at locations all over the globe"},{"heading":"In-house","text":"private in-classroom or virtual training anywhere in the world"},{"heading":"Remote","text":"virtual, instructor-led sessions, with or without eLearning components"},{"heading":"On-Demand","text":"a diverse catalog of self-guided eLearning courses and libraries"}]}] | json data for the cards
 *
 * STYLESHEET
 * @attribute card-stylesheet | -- | #container { color:#042373; } | inject css into the inner stylesheet
 * @attribute style | -- | -- | regular inline style on the component

 */
class WidgetAccordions extends HTMLElement {

	// container
	colorAccent = "";
	colorPrimary = "";
	colorBackground = "";

	// Meta
	metaFontSize = "";
	metaMarginBottom = "";
	metaText = "";

	// Widget heading
	headingFontSize = "";
	headingFontWeight = "";
	headingMarginBottom = "";
	headingMarginTop = "";
	headingText = "";

	// Widget heading link
	headingLinkUrl = "";
	headingLinkLabel = "";


	// Body
	bodyText = "";

	// Outside Heading
	cardLabelColor = "";
	cardLabelFontSize = "";
	cardLabelFontWeight = "";
	cardLabelMarginBottom = "";
	cardLabelMarginTop = "";
	cardLabelPosition = "";

	// Card
	cardAspectRatio = "";
	cardBackgroundColor = "";
	cardBorderRadius = "";
	cardBoxShadow = "";
	cardFontSize = "";
	cardFontWeight = "";
	cardHeight = "";
	cardHoverOpacity = "";
	cardHoverBackgroundColor = "";
	cardMaxWidth = "";
	cardMinHeight = "";
	cardOpacity = "";
	cardTransitionProperty = "";
	cardTransitionDuration = "";
	cardWidth = "";

	// Data
	cardsDataJson = "[]";

	// stylesheet
	stylesheet = "";

// reference to class itself
get c() { return WidgetAccordions };



// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string | null } }
 */
static get attributes() {
const values = {

	/* container */
	"color-accent": "currentColor",
	"color-background": "#0B2E7E",
	"color-primary": "currentColor",

	/* widget meta */
	"meta-font-size": ".75rem",
	"meta-margin-bottom": ".5rem",
	"meta-text": "",

	/* widget heading */
	"heading-font-size": "1.25rem",
	"heading-font-weight": "600",
	"heading-margin-bottom": "1.5rem",
	"heading-margin-top": "1.5rem",
	"heading-text": "",

	/* widget heading link */
	"heading-link-url": "",
	"heading-link-label": "",

	/* widget body text */
	"body-text": "",

	/* outside */
	"card-label-color": "inherit",
	"card-label-font-size": "1rem",
	"card-label-font-weight": "inherit",
	"card-label-margin-bottom": ".5rem",
	"card-label-margin-top": ".5rem",
	"card-label-position": "below",

	/* card */
	"card-aspect-ratio": "1/1",
	"card-background-color": "white",
	"card-border-radius": ".35rem",
	"card-box-shadow": "none",
	"card-font-size": "100%",
	"card-font-weight": "inherit",
	"card-height": "auto",
	"card-hover-opacity": "",
	"card-hover-background-color": "",
	"card-max-width": "none",
	"card-min-height": "auto",
	"card-opacity": "100%",
	"card-transition-property": "opacity",
	"card-transition-duration": "0.3s",
	"card-width": "100%",

	/* data */
	"cards-data-json": "[]",

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

/** @typedef {{[key:string]: string}} card */

// HTML BUILDERS
buildGridHTML() {

	/** @param {card} item */
	const buildTileHTML = (item) => {
		return `
			<div
				class="tile">
				<div class="card-heading">${item?.heading ?? ""}</div>
				<div class="card-text">${item?.text ?? ''}</div>
			</div>`
	}

	const buildTilesHTML = (items) => {
		return items.map((
			/** @type {card} item */
			item) => buildTileHTML(item)).join("");
	}

	const buildAccordionsHTML = () => {
		return this.data.map((
			/** @type {*} item */
			items) => `
			<div class="accordion ${items.type ?? ''}">
				<div class="accordion-header">
					<span>${items.name}</span>
					<label>
						<div class="sr-only">close accordion drawer</div>
						<input type="checkbox" />
						<div class="icon-chevron">
						</div>
					</label>

				</div>
				<div class="accordion-drawer">${buildTilesHTML(items.contents)}</div>
			</div>`).join("") ;
	}


	return buildAccordionsHTML() ;
}

// DATA
get data() {
	const result = JSON.parse(this.cardsDataJson) ?? "[]";
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
		--meta-font-size:${this.metaFontSize};
		--meta-margin-bottom:${this.metaMarginBottom};
		--heading-font-size:${this.headingFontSize};
		--heading-font-weight:${this.headingFontWeight};
		--heading-margin-bottom:${this.headingMarginBottom};
		--heading-margin-top:${this.headingMarginTop};
		--card-label-color:${this.cardLabelColor};
		--card-label-font-size:${this.cardLabelFontSize};
		--card-label-font-weight:${this.cardLabelFontWeight};
		--card-label-margin-bottom:${this.cardLabelMarginBottom};
		--card-label-margin-top:${this.cardLabelMarginTop};
		--card-label-position:${this.cardLabelPosition};
		--card-aspect-ratio:${this.cardAspectRatio};
		--card-background-color:${this.cardBackgroundColor};
		--card-border-radius:${this.cardBorderRadius};
		--card-box-shadow:${this.cardBoxShadow};
		--card-font-size:${this.cardFontSize};
		--card-font-weight:${this.cardFontWeight};
		--card-height:${this.cardHeight};
		--card-hover-opacity:${this.cardHoverOpacity};
		--card-hover-background-color:${this.cardHoverBackgroundColor};
		--card-max-width:${this.cardMaxWidth};
		--card-min-height:${this.cardMinHeight};
		--card-opacity:${this.cardOpacity};
		--card-transition-property:${this.cardTransitionProperty};
		--card-transition-duration:${this.cardTransitionDuration};
		--card-width:${this.cardWidth};"
>
		<div
			id="container-inner"
			>

			<!-- meta -->
			${this.metaText ? `<div id="meta" style="">${this.metaText}</div>` : ''}

			<!-- heading row -->
			<div id="heading-row">
				<h2 id="heading">${this.headingText}</h2>
				<a
					id="heading-link"
					href="${this.headingLinkUrl}">${this.headingLinkLabel}</a>
			</div>

			<!-- text -->
			<p id="text">${this.bodyText ?? ""}</p>

			<!-- accordions -->
			<div id="accordions">${this.buildGridHTML()}</div>

		</div>


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
	#container {
		background-color: var(--color-background, transparent);
		color: var(--color-primary, currentColor);
		display:grid;
		align-items:start;
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
			padding:48px 32px 76px;
		}
	}
	@media (min-width: 1280px) {
		#container {
			padding:64px 80px 96px;
		}
	}
	/* Meta */
	#meta {
		color: var(--color-accent, currentColor);
		font-size: var(--font-size, .85rem);
		margin-bottom: var(--margin-bottom, 1.5rem);
		opacity:.9;
		text-transform:uppercase;
	}
	/* Heading */
	#heading-row {
		align-items:center;
		display:flex;
		justify-content:space-between;
		margin-bottom:0;
		width:100%;
	}
	#heading {
		color: var(--color-primary, currentColor);
		font-size: 1.25rem;
		font-weight: var(--heading-font-weight, 600);
		margin-bottom: .5rem;
	}
	#heading-link {
		color: var(--color-accent, currentColor);
		display:inline-block;
		font-size: .8rem;
		border: solid 1px var(--color-accent, currentColor);
		border-radius:.25rem;
		display:${this.headingLinkLabel? "inline-block" : "none"};
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

	/* Accordions */
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
	#accordions .accordion .accordion-header label input:checked ~ .icon-chevron:before {

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

	/* utilities */
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

customElements.define("widget-accordions", WidgetAccordions);
export default WidgetAccordions;


