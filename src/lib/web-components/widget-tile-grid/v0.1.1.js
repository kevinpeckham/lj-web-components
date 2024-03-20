// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Widget Tile Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-tile-grid} */

/**
 * Widget Card Grid Web Component
 * @name WidgetTileGrid
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of image tiles.
 *
 * WIDGET CONTAINER
 * @attribute color-accent | lightblue | rgb(0 184 156 / 100%) | color of the text
 * @attribute color-background | white | #0B2E7E | background color of the widget
 * @attribute color-primary | currentColor | white | color of the text

 *
 * WIDGET META
 * @attribute meta-font-size | .75rem | -- | font size of the meta text
 * @attribute meta-margin-bottom | 1.5rem | -- | margin bottom of the meta text
 * @attribute meta-text | -- | -- | meta text of the widget
 *
 * WIDGET HEADING
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | bold | -- | font weight of the heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-margin-top | 1.5rem | -- | margin top of the heading
 * @attribute heading-text | -- | Training | widget heading text
 *
 * WIDGET HEADING LINK
 * @attribute heading-link-url | -- | https://petroskills.com/training | url of the heading link
 * @attribute heading-link-label | -- | View All Courses | label of the heading link
 *
 * WIDGET BODY TEXT
 * @attribute body-text | -- | Browse our world-class training courses and modules by category. | text of the widget
 *
 * GRID
 * @attribute grid-columns | 1 | -- | number of columns in the grid < xs
 * @attribute grid-columns-xs | 2 | -- | number of columns in the grid at xs
 * @attribute grid-columns-sm | 2 | -- | number of columns in the grid at sm
 * @attribute grid-columns-md | 3 | 2 | number of columns in the grid at md
 * @attribute grid-columns-lg | 4 | 3 | number of columns in the grid at lg
 * @attribute grid-columns-xl | 5 | 4 | number of columns in the grid at xl
 * @attribute grid-columns-2xl | 6 | 4 | number of columns in the grid at xxl
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
 * @attribute card-background-color | white | -- | background color of the card
 * @attribute card-border-radius | .35rem | .5rem | border radius of the card
 * @attribute card-box-shadow | none | 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) | box shadow of the card
 * @attribute card-font-size | 100% | -- | font size of the card
 * @attribute card-font-weight | inherit | -- | font weight of the card
 * @attribute card-height | auto | -- | height of the card
 * @attribute card-hover-opacity | -- | -- | opacity of the card on hover
 * @attribute card-hover-background-color | -- | -- | background color of the card on hover
 * @attribute card-image-position | cover | -- | location of the card image
 * @attribute card-max-width | none | 24rem | max width of the card
 * @attribute card-min-height | auto | 20rem | min height of the card
 * @attribute card-opacity | 100% | -- | opacity of the card
 * @attribute card-transition-property | opacity | -- | transition property of the card
 * @attribute card-transition-duration | .3s | -- | transition duration of the card
 * @attribute card-width | 100% | -- | width of the card
 *
 * DATA
 * @attribute cards-data-json | [] | [{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-upstream.webp","cardLabelText":"Upstream", "cardLinkUrl": "https://petroskills.com/training/categories/upstream","cardLinkTitle":"explore Upstream training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-midstream.webp","cardLabelText":"Midstream","cardLinkUrl": "https://petroskills.com/training/categories/midstream","cardLinkTitle":"explore Midstream training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-downstream.webp","cardLabelText":"Downstream","cardLinkUrl": "https://petroskills.com/training/categories/downstream","cardLinkTitle":"explore Downstream training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-energy-transition.webp","cardLabelText":"Energy Transition","cardLinkUrl": "https://petroskills.com/training/categories/energy-transition","cardLinkTitle":"explore Energy Transition training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-business.webp","cardLabelText":"Business & Management","cardLinkUrl": "https://petroskills.com/training/categories/business-management","cardLinkTitle":"explore Business & Management training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-health.webp","cardLabelText":"Health, Safety, & Environment","cardLinkUrl": "https://petroskills.com/training/categories/health-safety","cardLinkTitle":"explore Health & Safety training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-operations.webp","cardLabelText":"Operations & Maintenance","cardLinkUrl": "https://petroskills.com/training/categories/operator-training","cardLinkTitle":"explore Operations & Maintenance training"}] | json data for the cards
 *
 * STYLESHEET
 * @attribute card-stylesheet | -- | #container { color:#042373; } | inject css into the inner stylesheet
 * @attribute style | -- | -- | regular inline style on the component

 */
class WidgetTileGrid extends HTMLElement {
	bodyText = "";
	cardAspectRatio = "";
	cardBackgroundColor = "";
	cardBorderRadius = "";
	cardBoxShadow = "";
	cardFontSize = "";
	cardFontWeight = "";
	cardHeadingColor = "";
	cardHeadingFontSize = "";
	cardHeadingFontWeight = "";
	cardHeadingMarginBottom = "";
	cardHeight = "";
	cardHoverOpacity = "";
	cardHoverBackgroundColor = "";
	cardImagePosition = "";
	cardLabelColor = "";
	cardLabelFontSize = "";
	cardLabelFontWeight = "";
	cardLabelMarginBottom = "";
	cardLabelMarginTop = "";
	cardLabelPosition = "";
	cardMaxWidth = "";
	cardMinHeight = "";
	cardOpacity = "";
	cardTransitionProperty = "";
	cardTransitionDuration = "";
	cardWidth = "";
	cardsDataJson = "[]";
	colorAccent = "";
	colorPrimary = "";
	colorBackground = "";
	gridColumns = "";
	gridColumnsXs = "";
	gridColumnsSm = "";
	gridColumnsMd = "";
	gridColumnsLg = "";
	gridColumnsXl = "";
	gridColumns2xl = "";
	headingFontSize = "";
	headingFontWeight = "";
	headingLinkUrl = "";
	headingLinkLabel = "";
	headingMarginBottom = "";
	headingMarginTop = "";
	headingText = "";
	metaFontSize = "";
	metaMarginBottom = "";
	metaText = "";
	stylesheet = "";

// reference to class itself
get c() { return WidgetTileGrid };



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
	"color-secondary": "currentColor",

	/* widget meta */
	"meta-font-size": ".75rem",
	"meta-margin-bottom": ".5rem",
	"meta-text": "",

	/* widget heading */
	"heading-font-size": "1.25rem",
	"heading-font-weight": "bold",
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

	/* inside */
	"card-heading-color": "inherit",
	"card-heading-font-size": "1.125rem",
	"card-heading-font-weight": "500",
	"card-heading-margin-bottom": ".5rem",

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
	"card-image-position": "cover",
	"card-max-width": "none",
	"card-min-height": "auto",
	"card-opacity": "100%",
	"card-transition-property": "opacity",
	"card-transition-duration": "0.3s",
	"card-width": "100%",

	/* data */
	"cards-data-json": "[]",

	/* grid */
	"grid-columns": "1",
	"grid-columns-sm": "2",
	"grid-columns-xs": "2",
	"grid-columns-md": "3",
	"grid-columns-lg": "4",
	"grid-columns-xl": "5",
	"grid-columns-2xl": "6",

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
			<a
				class="tile"
				href="${item.cardLinkUrl}"
				${item.cardLinkTitle ? `title="${item.cardLinkTitle}"` : ''}
				>
				<div class="tile-inner">
						<!-- heading -->
						${item.cardHeading ? `<h3 class="card-heading">${item.cardHeading}</h3>` : ''}
						<!-- body -->
						${item.cardBody ? `<p class="card-body">${item.cardBody}</p>` : ''}
						<img data-image-position="${this.cardImagePosition}" class="tile-image" src="${item.cardImageUrl}" alt="${item.cardLabelText}" loading="lazy"/>

				</div>
				${item.cardLabelText ? `<div class="card-label">${item.cardLabelText}</div>` : ''}
			</a>`
	}

	const buildTilesHTML = () => {
		return this.data.map((
			/** @type {card} item */
			item) => buildTileHTML(item)).join("");
	}


	return buildTilesHTML() ;
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
		--card-heading-color:${this.cardHeadingColor};
		--card-heading-font-size:${this.cardHeadingFontSize};
		--card-heading-font-weight:${this.cardHeadingFontWeight};
		--card-heading-margin-bottom:${this.cardHeadingMarginBottom};
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
		--card-width:${this.cardWidth};
		--grid-columns:${this.gridColumns};
		--grid-columns-xs:${this.gridColumnsXs};
		--grid-columns-sm:${this.gridColumnsSm};
		--grid-columns-md:${this.gridColumnsMd};
		--grid-columns-lg:${this.gridColumnsLg};
		--grid-columns-xl:${this.gridColumnsXl};
		--grid-columns-2xl:${this.gridColumns2xl};
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

			<!-- tile grid -->
			<div id="grid">${this.buildGridHTML()}</div>

		</div>


</div>`.trim();
}

// STYLES
get styles() {

  return `
	<style id="preflight">${ComponentUtils.preflight}</style>
  <style id="base">
  :host, *:not(style) {
		display:block;
		box-sizing:border-box;
		margin:0;	-
		webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale; }
	#container {
	}
	#container {
		background-color: var(--color-background, transparent);
		color: var(--color-primary, currentColor);
		display:grid;
		align-items:start;
		width:100%;
	}
	${ComponentUtils.widgetPaddingStyles()}
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
	#grid {
		display:grid;
		grid-template-columns:	grid-template-columns: repeat(1, minmax(0, 1fr));
		gap:1rem;
		width:100%;
	}
	@media (min-width: 420px) {
		#grid {
			grid-template-columns: repeat(var(--grid-columns-xs), minmax(0, 1fr));
		}
	}
	@media (min-width: 640px) {
		#grid {
			grid-template-columns: repeat(var(--grid-columns-sm), minmax(0, 1fr));
		}
	}
	@media (min-width: 720px) {
		#grid {
			gap:1.25rem;
			grid-template-columns: repeat(var(--grid-columns-md), minmax(0, 1fr))
		}
	}
	@media (min-width: 1024px) {
		#grid {
			column-gap:24px;
			grid-template-columns: repeat(var(--grid-columns-lg), minmax(0, 1fr));
			place-content:center;
		}
	}
	@media (min-width: 1280px) {
		#grid {
			column-gap:32px;
		  grid-template-columns: repeat(var(--grid-columns-xl), minmax(0, 1fr))
		}
	}
	@media (min-width: 1536px) {
		#grid {
			column-gap:48px;
			grid-template-columns: repeat(var(--grid-columns-2xl), minmax(0, 1fr))
		}
	}
	#grid .tile {
		position:relative;
		width:100%;

	}
	#grid .tile .tile-inner {
		aspect-ratio:1/1;
		background-color:var(--card-background-color, transparent);
		border-radius:var(--card-border-radius, .35rem);
		box-shadow:var(--card-box-shadow, none);
		overflow:hidden;
		padding:1rem;
		position:relative;
		width:100%;
	}
	#grid .tile .card-label {
		font-size: .9rem;
		margin: var(--card-label-margin-top, .5rem) 0 var(--card-label-margin-bottom, .5rem);
		opacity:.85;
		text-underline-offset:.25em;
		transition:opacity .3s;
	}
	#grid .tile .card-heading {
		color:var(--card-heading-color, inherit);
		font-size: var(--card-heading-font-size, 1rem);
		font-weight: var(--card-heading-font-weight, inherit);
		margin-bottom: var(--card-heading-margin-bottom, .5rem);
		opacity:.85;
	}
	#grid .tile .tile-image {
		aspect-ratio:1/1;
	}
	#grid .tile .tile-image[data-image-position="cover"] {
		height:100%;
		object-fit:cover;
		overflow:hidden;
		position:absolute;
		inset:0;
		transition:scale .3s ease;
		width:100%;
	}
	#grid .tile .tile-image[data-image-position="thumb"] {
		border-radius:.25rem;
		height:4rem;
		object-fit:cover;
		overflow:hidden;
		position:absolute;
		bottom:1rem;
		right:1rem;
		//margin:1rem;
		width:4rem;
	}
	@media (min-width: 1024px) {
		#grid .tile:hover .card-label {
			opacity:1;
			text-decoration:underline;
		}
		#grid .tile:hover .tile-image[data-image-position="cover"]  {
			scale:1.2;
		}
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

customElements.define("widget-tile-grid", WidgetTileGrid);
export default WidgetTileGrid;


