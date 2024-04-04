// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// TYPES
/** @typedef {string | undefined } Su */
/** @typedef {{[key:string]: Su; cardImageUrl: Su; cardLabelText: Su; cardLinkTitle: Su; }} Tile */

/** @copyright 2024 Lightning Jar - "Widget Tile Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/widget-tile-grid} */

/**
 * Widget Tile Grid Web Component
 * @name WidgetTileGrid
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of image tiles.
 * @attribute body-text | -- | Browse our world-class training courses and modules by category. | text of the widget
 * @attribute card-aspect-ratio | 1/1 | -- | aspect ratio of the card
 * @attribute card-background-color | white | #EAF1F7 | background color of the card
 * @attribute card-border-radius | .35rem | .5rem | border radius of the card
 * @attribute card-box-shadow | none | 0 0 1px 0 rgba(0,0,0,.4) | box shadow of the card
 * @attribute card-font-size | 100% | -- | font size of the card
 * @attribute card-font-weight | inherit | -- | font weight of the card
 * @attribute card-height | auto | -- | height of the card
 * @attribute card-hover-opacity | -- | -- | opacity of the card on hover
 * @attribute card-hover-background-color | -- | -- | background color of the card on hover
 * @attribute card-image-position | cover | -- | location of the card image
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
 * @attribute cards-data-json | [] | [{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-upstream.webp","cardLabelText":"Upstream", "cardLinkUrl": "https://petroskills.com/training/categories/upstream","cardLinkTitle":"explore Upstream training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-midstream.webp","cardLabelText":"Midstream","cardLinkUrl": "https://petroskills.com/training/categories/midstream","cardLinkTitle":"explore Midstream training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-downstream.webp","cardLabelText":"Downstream","cardLinkUrl": "https://petroskills.com/training/categories/downstream","cardLinkTitle":"explore Downstream training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-energy-transition.webp","cardLabelText":"Energy Transition","cardLinkUrl": "https://petroskills.com/training/categories/energy-transition","cardLinkTitle":"explore Energy Transition training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-business.webp","cardLabelText":"Business & Management","cardLinkUrl": "https://petroskills.com/training/categories/business-management","cardLinkTitle":"explore Business & Management training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-health.webp","cardLabelText":"Health, Safety, & Environment","cardLinkUrl": "https://petroskills.com/training/categories/health-safety","cardLinkTitle":"explore Health & Safety training"},{"cardImageUrl":"https://cdn.lj.dev/images/custom/petro/category-thumb-operations.webp","cardLabelText":"Operations & Maintenance","cardLinkUrl": "https://petroskills.com/training/categories/operator-training","cardLinkTitle":"explore Operations & Maintenance training"}] | json data for the cards
 * @attribute color-accent | lightblue | rgb(0 184 156 / 100%) | color of the text
 * @attribute color-background | white | #0B2E7E | background color of the widget
 * @attribute color-primary | currentColor | white | color of the text
 * @attribute grid-columns | 1 | -- | number of columns in the grid < xs
 * @attribute grid-columns-xs | 2 | -- | number of columns in the grid at xs
 * @attribute grid-columns-sm | 2 | -- | number of columns in the grid at sm
 * @attribute grid-columns-md | 3 | -- | number of columns in the grid at md
 * @attribute grid-columns-lg | 4 | -- | number of columns in the grid at lg
 * @attribute grid-columns-xl | 5 | -- | number of columns in the grid at xl
 * @attribute grid-columns-2xl | 6 | -- | number of columns in the grid at xxl
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | bold | -- | font weight of the heading
 * @attribute heading-link-url | -- | https://petroskills.com/training | url of the heading link
 * @attribute heading-link-label | -- | View All Courses | label of the heading link
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-margin-top | 1.5rem | -- | margin top of the heading
 * @attribute heading-text | -- | Training | widget heading text
 * @attribute meta-font-size | .75rem | -- | font size of the meta text
 * @attribute meta-margin-bottom | 1.5rem | -- | margin bottom of the meta text
 * @attribute meta-text | -- | -- | meta text of the widget
 * @attribute stylesheet | -- | #container { color:#042373; } | inject css into the inner stylesheet
 */
class WidgetTileGrid extends HTMLElement {

get c() { return WidgetTileGrid };

// ATTRIBUTES
/** @returns { { [key:string]: string | null } } */
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
	"card-heading-color": "inherit",
	"card-heading-font-size": "1.125rem",
	"card-heading-font-weight": "500",
	"card-heading-margin-bottom": ".5rem",
	"card-hover-opacity": "1",
	"card-hover-background-color": "var(--card-background-color)",
	"card-image-position": "cover",
	"card-label-color": "var(--color-primary, currentColor)",
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
	"color-secondary": "currentColor",
	"grid-columns": "1",
	"grid-columns-sm": "2",
	"grid-columns-xs": "2",
	"grid-columns-md": "3",
	"grid-columns-lg": "4",
	"grid-columns-xl": "5",
	"grid-columns-2xl": "6",
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

// HTML BUILDERS
buildTileHTML(/** @type {Tile} */ tile) {
const html = this.c.html;

// values
const tileImagePosition = this.attValue('card-image-position');
const tileLinkUrl = tile.cardLinkUrl ?? "";
const tileLinkTitle = tile.cardLinkTitle ?? "";
const tileLabelText = tile.cardLabelText ?? "";
const tileImageUrl = tile.cardImageUrl ?? "";
const tileHeading = tile.cardHeading ?? "";
const tileBody = tile.cardBody ?? "";
const tag = tileLinkUrl ? "a" : "div";
return !tileImageUrl ? "" : `
<${tag}
	class="tile"
	${html(tileLinkUrl, `href="${tileLinkUrl}"`)}
	${html(tileLinkTitle, `title="${tileLinkTitle}"`)}>
	<div class="tile-inner">
		${html(tileHeading, `<h3 class="card-heading">${tileHeading}</h3>`)}
		${html(tileBody, `<p class="card-body">${tileBody}</p>`)}
		<img
			${html(tileLabelText, `alt="${tileLabelText}"`)}
			class="tile-image"
			${html(tileImagePosition, `data-image-position="${tileImagePosition}"`)}
			src="${tileImageUrl}"
			loading="lazy"/>
	</div>
	${html(tileLabelText, `<div class="card-label">${tileLabelText}</div>`)}
</${tag}>`
}
buildGridHTML() {
	const /** @type {Tile[]} */ data = JSON.parse(this.attValue('cards-data-json') ?? "[]");
	return data.map((card) => this.buildTileHTML(card)).join("");
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

static html = ComponentUtils.stringIfValue;

// ELEMENTS
get els() {
	const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
	const html = this.c.html;
	const stylesheet = this.attValue('stylesheet');

	// values
	const body = this.attValue('body-text');
	const grid = this.buildGridHTML() ?? ''
	const heading = this.attValue('heading-text');
	const headingLinkUrl = this.attValue('heading-link-url');
	const headingLinkLabel = this.attValue('heading-link-label');
	const meta = this.attValue('meta-text');
  return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div id="container" style="${cssVars}">
	<div id="container-inner">
		${html(meta, `<div id="meta" style="">${meta}</div>`)}
		${html(heading, `<div id="heading-row">
			<h2 id="heading">${heading}</h2>
			${html(headingLinkUrl, `<a id="heading-link" href="${headingLinkUrl}">${headingLinkLabel}</a>`, headingLinkLabel)}
		</div>`)}
		${html(body, `<p id="text">${body}</p>`)}
		${html(grid, `<div id="grid">${grid}</div>`)}
	</div>
</div>`.trim();
}

// STYLES
get styles() {

  return `
	${ComponentUtils.preflight}
  <style id="base">
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
	@media (min-width: 768px) {
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
		color: var(--card-label-color, var(--color-primary, currentColor));
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

constructor() { super(); this.attachShadow({ mode: "open" }) }
connectedCallback() { this.shadowRoot?.appendChild(this.template.content.cloneNode(true)) }
}

customElements.define("widget-tile-grid", WidgetTileGrid);
export default WidgetTileGrid;


