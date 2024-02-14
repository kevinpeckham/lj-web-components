// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";
// @ts-expect-error yep got it
import LogoTile from "/e/wc/logo-tile.min.js";



	/**
	 * @typedef TileDatum
	 * @type {Object}
	 * @property {string} name
	 * @property {string} image-src
	 * @property {string} link-href
	 * */

	/**
	 * @typedef BreakpointSize
	 * @type {"2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs"}
	 * */

	/**
	 * @typedef Breakpoint
	 * @type {{[key: string]: string; min: string; max: string}}
	 */


/** @copyright 2024 Lightning Jar - "Logo Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/logo-grid} */

/**
 * Logo Block Web Component
 * @name LogoGrid
 * @class
 * @classdesc A web component for displaying a grid of linked tiles with logos. At present this uses media queries and not container queries. So breakpoints are screen width based.
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @attribute grid-columns-2xl | 7 | -- | # of columns @ 2xl (>= 1536px)
 * @attribute grid-columns-xl | 6 | -- | # of columns @ xl (>= 1280px)
 * @attribute grid-columns-lg | 5 | -- | # of columns @ lg (>= 1024px)
 * @attribute grid-columns-md | 4 | -- | # of columns @ md (>= 768px)
 * @attribute grid-columns-sm | 3 | -- | # of columns @ sm (>= 640px)
 * @attribute grid-columns-xs | 2 | -- | # of columns @ xs (>= 420px)
 * @attribute grid-columns-xxs | 1 | -- | # of columns @ xxs (< 420px)
 * @attribute grid-column-gap-2xl | 2rem | -- | gap between columns @ 2xl (>= 1536px)
 * @attribute grid-column-gap-xl | 1.75rem | -- | gap between columns @ xl (>= 1280px)
 * @attribute grid-column-gap-lg | 1.5rem | -- | gap between columns @ lg (>= 1024px)
 * @attribute grid-column-gap-md | 1.5rem | -- | gap between columns @ md (>= 768px)
 * @attribute grid-column-gap-sm | 1.25rem | -- | gap between columns @ sm (>= 640px)
 * @attribute grid-column-gap-xs | 1rem | -- | gap between columns @ xs (>= 420px)
 * @attribute grid-column-gap-xxs | 0.5rem | -- | gap between columns @ xxs (< 420px)
 * @attribute grid-row-gap-2xl | 1.5rem | -- | gap between rows @ 2xl (>= 1536px)
 * @attribute grid-row-gap-xl | 1.5rem | -- | gap between rows @ xl (>= 1280px)
 * @attribute grid-row-gap-lg | 1.5rem | -- | gap between rows @ lg (>= 1024px)
 * @attribute grid-row-gap-md | 1.5rem | -- | gap between rows @ md (>= 768px)
 * @attribute grid-row-gap-sm | 1.5rem | -- | gap between rows @ sm (>= 640px)
 * @attribute grid-row-gap-xs | 1.5rem | -- | gap between rows @ xs (>= 420px)
 * @attribute grid-row-gap-xxs | 1.5rem | -- | gap between rows  @ xxs (< 420px)
 * @attribute grid-stagger | off | on | stagger the tiles - "off" or "on" @ 2xl (>= 1536px)
 * @attribute grid-stagger-2xl | 3.5rem | -- | distance to stagger tiles @ 2xl breakpoint
 * @attribute grid-stagger-xl | 3rem | -- | distance to stagger tiles @ xl (>= 1280px)
 * @attribute grid-stagger-lg | 2rem | -- | distance to stagger tiles @ lg (>= 1024px)
 * @attribute grid-stagger-md | 2rem | -- | distance to stagger tiles @ md (>= 768px)
 * @attribute grid-stagger-sm | 2rem | -- | distance to stagger tiles @ sm (>= 640px)
 * @attribute grid-stagger-xs | 1.5rem | -- | distance to stagger tiles @ xs (>= 420px)
 * @attribute grid-stagger-xxs | 0 | -- | distance to stagger tiles @ xxs (< 420px)
 * @attribute tile-border-radius | 2.5% | 1em | border radius (rounded edges) of the tile
 * @attribute tile-color-background | transparent | white | background color of the tile
 * @attribute tile-aspect-ratio | -- | 290 / 128 | the aspect ratio of the tile
 * @attribute tile-opacity | 100% | 85% | default opacity of tile
 * @attribute tile-opacity-hover | 100% | 100% | opacity of tile on hover
 * @attribute tile-padding | -- | 10px | duration of the transition effect
 * @attribute tile-transition-duration | 0.3s | -- | duration of the transition effect
 * @attribute tile-transition-property | opacity | -- | transition property to animate
 * @attribute tile-stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute stylesheet | -- | -- | inject css into the grid inner stylesheet
 * @attribute data-json | -- | [{"name":"Apple","image-src":"/images/logos/apple.svg","link-href":"https://apple.com"},{"name":"Svelte","image-src":"/images/logos/svelte.svg","link-href":"https://svelte.dev"},{"name":"Node","image-src":"/images/logos/nodejs.svg","link-href":"https://nodejs.org"},{"name":"Typescript","image-src":"/images/logos/typescript.svg","link-href":"https://www.typescriptlang.org"},{"name":"Tailwind","image-src":"/images/logos/tailwind.svg","link-href":"https://tailwindcss.com"},{"name":"Vercel","image-src":"/images/logos/vercel.svg","link-href":"https://vercel.com"},{"name":"Github","image-src":"/images/logos/github.svg","link-href":"https://github.com"},{"name":"Vite","image-src":"/images/logos/vite.svg","link-href":"https://vite.com"},{"name":"PNPM","image-src":"/images/logos/pnpm.svg","link-href":"https://pnpm.io"}] | JSON data for the tiles
 * @note Data for the tiles is passed in as a JSON string. The tiles are built from the JSON data.
 * @property {string} data-json - JSON data for the tiles
 */
class LogoGrid extends HTMLElement {

// reference to class itself
get c() { return LogoGrid };

// types
dataJson = "";
gridColumnGap2xl = "1.5rem";
gridColumnGapXl = "1.5rem";
gridColumnGapLg = "1.5rem";
gridColumnGapMd = "1.5rem";
gridColumnGapSm = "1.25rem";
gridColumnGapXs = "1rem";
gridColumnGapXxs = "0.5rem";
gridRowGap2xl = "1.5rem";
gridRowGapXl = "1.5rem";
gridRowGapLg = "1.5rem";
gridRowGapMd = "1.5rem";
gridRowGapSm = "1.5rem";
gridRowGapXs = "1.5rem";
gridRowGapXxs = "1.5rem";
gridStagger = "off";
gridStagger2xl = "3.5rem";
gridStaggerXl = "3rem";
gridStaggerLg = "2rem";
gridStaggerMd = "2rem";
gridStaggerSm = "2rem";
gridStaggerXs = "1.5rem";
gridStaggerXxs = "0";
gridColumns2xl = "7";
gridColumnsXl = "6";
gridColumnsLg = "5";
gridColumnsMd = "4";
gridColumnsSm = "3";
gridColumnsXs = "2";
gridColumnsXxs = "1";
tileAspectRatio = "";
tileBorderRadius = "2.5%";
tileColorBackground = "";
tileOpacity = "";
tileOpacityHover = "";
tilePadding = "";
tileTransitionDuration = "";
tileTransitionProperty = "";
tileStylesheet = "";
stylesheet = "";



// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string } }
 */
static get attributes() {
const values = {
	"grid-stagger": "off",
	"grid-stagger-2xl": "3.5rem",
	"grid-stagger-xl": "3rem",
	"grid-stagger-lg": "2rem",
	"grid-stagger-md": "2rem",
	"grid-stagger-sm": "2rem",
	"grid-stagger-xs": "1.5rem",
	"grid-stagger-xxs": "0",
	"grid-column-gap-2xl": "2rem",
	"grid-column-gap-xl": "1.75rem",
	"grid-column-gap-lg": "1.5rem",
	"grid-column-gap-md": "1.5rem",
	"grid-column-gap-sm": "1.25rem",
	"grid-column-gap-xs": "1rem",
	"grid-column-gap-xxs": "0.5rem",
	"grid-columns-2xl": "8",
	"grid-columns-xl": "7",
	"grid-columns-lg": "6",
	"grid-columns-md": "4",
	"grid-columns-sm": "3",
	"grid-columns-xs": "2",
	"grid-columns-xxs": "1",
	"grid-row-gap-2xl": "1.5rem",
	"grid-row-gap-xl": "1.5rem",
	"grid-row-gap-lg": "1.5rem",
	"grid-row-gap-md": "1.5rem",
	"grid-row-gap-sm": "1.5rem",
	"grid-row-gap-xs": "1.5rem",
	"grid-row-gap-xxs": "1.5rem",
	"data-json": "",
	"tile-aspect-ratio": "",
	"tile-border-radius": "2.5%",
	"tile-color-background": "transparent",
	"tile-opacity": "100%",
	"tile-opacity-hover": "100%",
	"tile-padding": "",
	"tile-transition-duration": "0.3s",
	"tile-transition-property": "opacity",
	"tile-stylesheet": "",
	"stylesheet": ""
};
return values;
}
static get observedAttributes() { return Object.keys(this.attributes) }

/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

// ELEMENTS
static get els() {
  return `
<style id="stylesheet"></style>
<div id="container">
</div>`.trim();
}
// STYLES

static get styles() {


	/** @param {BreakpointSize} bp */
	const breakPointStyle = (bp) => {

		const lc = bp.toLowerCase();
		/** @type {Breakpoint} map */
		const breakpoint = ComponentUtils.breakpointMap[bp];

		const min = breakpoint.min;
		const max = breakpoint.max;
		return `
		@media (min-width: ${min}) and (max-width: ${max}) {
			#container {
				column-gap: var(--grid-column-gap-${bp});
				grid-template-columns: repeat(var(--grid-columns-${bp}), minmax(0,1fr));
				row-gap: var(--grid-row-gap-${bp});
			}
			#container:has(.stagger-${bp}) {
				transform:translateX(calc(-.5 * var(--grid-stagger-${bp})));
				padding: 0em calc(0.5 * var(--grid-stagger-${bp}));
			}
			.stagger-${bp} {
				transform:translateX(var(--grid-stagger-${bp}));
			}
		}
			`};

  return `
  <style #base>
  :host, *:not(style) { display:block;box-sizing:border-box; margin:0; }
	:host { position:relative;}
	#container {
		background-color:var(--color-background, transparent);
		display:grid;
		grid-template-columns: repeat(var(--grid-columns-xxs, 1),minmax(0,1fr));
		height:auto;
		row-gap:1rem;
		transform-origin:top center;
		width:100%;
	}
  #container logo-tile {
		height:auto;
		width:100%;
  }
	${breakPointStyle("xxs")}
	${breakPointStyle("xs")}
	${breakPointStyle("sm")}
	${breakPointStyle("md")}
	${breakPointStyle("lg")}
	${breakPointStyle("xl")}
	${breakPointStyle("2xl")}
</style>`
}
// TEMPLATE
static get template() {
  const template = document.createElement("template");
  template.innerHTML = `${this.styles}${this.els}`.trim();
  return template;
}
// IDS
static get ids() {
  return [...`${this.els + this.styles}`.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
}

// CONSTRUCTOR
constructor() {
	super();

	// programattically create getters and setters for each observed attribute
	ComponentUtils.createOAGS(this.c, this);

	// create a shadow root
	this.attachShadow({ mode: "open" });

	//const template = this.c.template.content.cloneNode(true);

	// build tiles
	const template = this.buildTemplate();

	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(template.content.cloneNode(true))

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);

	// update attributes
	this.updateAttributes();
}

// LIFECYCLE CALLBACKS
connectedCallback() {
	this.updateAttributes();
}
attributeChangedCallback() {
	this.updateAttributes();
}

// METHODS
updateAttributes() {
	// update stylesheet
	this.refs.stylesheet.textContent = this.stylesheet;

	// update grid size, column gap, row gap, and stagger
	ComponentUtils.breakpoints.forEach((/** @type {BreakpointSize} bp  */  bp) => {
		const tc = ComponentUtils.titleCase(bp);
		this.refs.container.style.setProperty(`--grid-columns-${bp}`, this[`gridColumns${tc}`]);
		this.refs.container.style.setProperty(`--grid-column-gap-${bp}`, this[`gridColumnGap${tc}`]);
		this.refs.container.style.setProperty(`--grid-row-gap-${bp}`, this[`gridRowGap${tc}`]);
		this.refs.container.style.setProperty(`--grid-stagger-${bp}`, this[`gridStagger${tc}`]);
	});
}

// getter and setter for parsed data
/** @returns {TileDatum[]} dataJsonParsed */
get dataJsonParsed() {
	const raw = this.dataJson ?? ""
	const scrubbed = String.raw`${raw.replace(/\s/g, "")}`;
	return JSON.parse(scrubbed);
}

/**
 * Get the number of columns for a given breakpoint
 * @param {BreakpointSize} bp
 * @returns {number}
 */
getcolsNum(bp) {
	/** @type {"2xl" | "Xl" | "Lg" | "Md" | "Sm" | "Xs" | "Xxs"} tc */
	const tc = ComponentUtils.titleCase(bp);
	/** @type { "gridColumns2xl" | "gridColumnsXl" | "gridColumnsLg" | "gridColumnsMd" | "gridColumnsSm" | "gridColumnsXs" | "gridColumnsXxs" } prop */
	const prop = `gridColumns${tc}`;
	return Number(this?.[prop] ?? "0") ?? 0;
}

/**
 * Get the number of columns for a given breakpoint
 * @param {number} tileIndex
 * @param {BreakpointSize} breakpoint
 * @returns {number}
 */
getTileColumn(tileIndex, breakpoint) {
	const colsNum = this.getcolsNum(breakpoint);
	return (tileIndex % colsNum) + 1;
}
/**
 * Get the number of columns for a given breakpoint
 * @param {number} tileIndex
 * @param {BreakpointSize} breakpoint
 * @returns {number}
 */
getTileRow(tileIndex, breakpoint) {
	const colsNum = this.getcolsNum(breakpoint);
	return Math.floor(tileIndex / colsNum) + 1;
}
/**
 * Get the number of columns for a given breakpoint
 * @param {number} tileIndex
 * @param {BreakpointSize} breakpoint
 * @returns {boolean}
 */
isTileInEvenRow(tileIndex, breakpoint) {
	// const colsNum = this.getcolsNum(breakpoint);
  const row = this.getTileRow(tileIndex, breakpoint);
  return (row % 2) === 0;
}

buildTemplate() {

	const template = document.createElement("template");

	const container = document.createElement("div");
	container.id = "container";

	// is stagger on?
	const stagger = (this.gridStagger === "on") ? true : false;

	let index = 0;
	this.dataJsonParsed.forEach((d) => {
		const tile = document.createElement("logo-tile");
		tile.setAttribute("color-background", this?.tileColorBackground);
		tile.setAttribute("image-alt", `${d["name"]} logo`);
		tile.setAttribute("image-src", d["image-src"]);
		tile.setAttribute("link-href", d["link-href"] ?? '');
		tile.setAttribute("link-title", "go to " + d["name"].replace(/_/g, " ") + " website");
		tile.setAttribute("image-aspect-ratio", this.tileAspectRatio);
		tile.setAttribute("image-padding", this.tilePadding);
		tile.setAttribute("tile-border-radius", this.tileBorderRadius);
		tile.setAttribute("tile-opacity", this?.tileOpacity ?? "1");
		tile.setAttribute("tile-opacity-hover", this?.tileOpacityHover);
		tile.setAttribute("transition-duration", this?.tileTransitionDuration);
		tile.setAttribute("stylesheet-textContent", this?.tileStylesheet ?? "");

		// iterate through breakpoints, add stagger classes as appropriate
		ComponentUtils.breakpoints.forEach((/** @type {BreakpointSize} bp  */  bp) => {
			if (stagger && this.isTileInEvenRow(index, bp)) tile.classList.add(`stagger-${bp}`)
		});

		container?.appendChild(tile);
	 	index++;
	 });

	 template.innerHTML = `${this.c.styles}`.trim();
	 const stylesheet = document.createElement("style");
	 stylesheet.id = "stylesheet";
	 stylesheet.textContent = this.stylesheet;
	 template.content.appendChild(stylesheet);
	 template.content.appendChild(container);
	 return template;
}

}

customElements.define("logo-grid", LogoGrid);
export default LogoGrid;


