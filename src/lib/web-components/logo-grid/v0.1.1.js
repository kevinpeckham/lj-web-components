// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";
// @ts-expect-error type defs not available
import LogoTile from "/e/wc/logo-tile@0.1.1.min.js";


	/** @typedef {{"name": string; "image-src": string; "link-href": string;}} TileDatum */

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
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/logo-grid} */

/**
 * Logo Block Web Component
 * @name LogoGrid
 * @class
 * @classdesc A web component for displaying a grid of linked tiles with logos. At present this uses media queries and not container queries. So breakpoints are screen width based.
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @attribute data-json-url | -- | /e/wc/logo-grid.min.json | fetch data from a remote json file if preferred
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
 * @attribute tiles-data | [] | -- | [{ "name": "", "image-src": "", "link-href": ""}]
 * @note - Attributes can be fetched from an external json file using the data-json-url attribute.
 * @property {string} tiles-data - JSON data for the tiles
 */
class LogoGrid extends HTMLElement {

// reference to class itself
get c() { return LogoGrid };

// types
dataJsonUrl = "";
tilesData = "";
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
	"data-json-url": "",
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
	"tile-aspect-ratio": "",
	"tile-border-radius": "2.5%",
	"tile-color-background": "transparent",
	"tile-opacity": "100%",
	"tile-opacity-hover": "100%",
	"tile-padding": "",
	"tile-transition-duration": "0.3s",
	"tile-transition-property": "opacity",
	"tile-stylesheet": "",
	"tiles-data": "[]",
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
			#container-inner {
				column-gap: var(--grid-column-gap-${bp});
				grid-template-columns: repeat(var(--grid-columns-${bp}), minmax(0,1fr));
				row-gap: var(--grid-row-gap-${bp});
			}
			#container-inner:has(.stagger-${bp}) {
				transform:translateX(calc(-.5 * var(--grid-stagger-${bp})));
				padding: 0em calc(0.5 * var(--grid-stagger-${bp}));
			}
			.stagger-${bp} {
				transform:translateX(var(--grid-stagger-${bp}));
			}
		}
			`};

  return `
	<link rel="stylesheet" href="/e/wc/preflight.min.css">
  <style #base>
	#container {
		height:auto;
		width:100%;
	}
	#container-inner {
		background-color:var(--color-background, transparent);
		display:grid;
		grid-template-columns: repeat(var(--grid-columns-xxs, 1),minmax(0,1fr));
		height:auto;
		row-gap:1rem;
		transform-origin:top center;
		width:100%;
	}
	#container #container-inner .tile-container {
		aspect-ratio:var(--tile-aspect-ratio);
		background-color:var(--tile-color-background, transparent);
		border-radius:var(--tile-border-radius, 2.5%);
		height:auto;
		width:100%;
		transition:opacity 0.15s ease 5s;
		${breakPointStyle("xxs")}
		${breakPointStyle("xs")}
		${breakPointStyle("sm")}
		${breakPointStyle("md")}
		${breakPointStyle("lg")}
		${breakPointStyle("xl")}
		${breakPointStyle("2xl")}
	}

  #container logo-tile {
		aspect-ratio:var(--tile-aspect-ratio);
		height:auto;
		width:100%;
		transition:opacity 0.15s ease 5s;
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

	// build tiles
	const template = this.buildTemplate();

	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(template.content.cloneNode(true))

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);

	// update attributes
	this.updateAttributes();

	// fetch data
	// this.fetchData();
}

// LIFECYCLE CALLBACKS
connectedCallback() {
	this.fetchData();
}
attributeChangedCallback() {
}

// METHODS
updateAttributes() {
	// update stylesheet
	this.refs.stylesheet.textContent = this.stylesheet;

	// update css custom properties
	this.refs.container.style.setProperty("--tile-aspect-ratio", this.tileAspectRatio);
	this.refs.container.style.setProperty("--tile-border-radius", this.tileBorderRadius);
	this.refs.container.style.setProperty("--tile-color-background", this.tileColorBackground);

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
/** @returns {TileDatum[]} tilesDataParsed */
get tilesDataParsed() {
	const raw = this.tilesData ?? ""
	const scrubbed = String.raw`${raw.replace(/\s/g, "")}`;
	return JSON.parse(scrubbed);
}

/**
 * Get the number of columns for a given breakpoint
 * @param {BreakpointSize} bp
 * @returns {number}
 */
getcolsNum(bp) {
	/** @type {"2xl" |  "Xl" | "Lg" | "Md" | "Sm" | "Xs" | "Xxs"} tc */
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

	// create container
	const container = document.createElement("div");
	container.id = "container";

	// create inner container
	const containerInner = document.createElement("div");
	containerInner.id = "container-inner";


	// is stagger on?
	const stagger = (this.gridStagger === "on") ? true : false;

	let index = 0;
	this.tilesDataParsed.forEach((d) => {
		// tile container
		const tileContainer = document.createElement("div");
		tileContainer.className = "tile-container";

		// tile
		const tile = document.createElement("logo-tile");
		tile.className = "hide-before-load";
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
			if (stagger && this.isTileInEvenRow(index, bp)) tileContainer.classList.add(`stagger-${bp}`)
		});

		tileContainer.appendChild(tile);
		containerInner?.appendChild(tileContainer);
	 	index++;
	 });

	 template.innerHTML = `${this.c.styles}`.trim();
	 const stylesheet = document.createElement("style");
	 stylesheet.id = "stylesheet";
	 stylesheet.textContent = this.stylesheet;
	 template.content.appendChild(stylesheet);
	 container.appendChild(containerInner);
	 template.content.appendChild(container);
	 return template;
}

/** @param { TileDatum[] } data */
rebuildTilesWithNewData(data) {

	// if no data, return
	if (!data || !data[0]) return;

	const shadowRoot = this.shadowRoot;
	const container = shadowRoot?.getElementById("container");
	const containerInner = shadowRoot?.getElementById("container-inner");
	const newContainerInner = document.createElement("div");
	newContainerInner.id = "container-inner";

	// is stagger on?
	const stagger = (this.gridStagger === "on") ? true : false;

	let index = 0;


	data.forEach(
		/** @param {TileDatum} d */
		(d) => {

		// tile container
		const tileContainer = document.createElement("div");
		tileContainer.className = "tile-container";

		// tile
		const tile = document.createElement("logo-tile");
		tile.className = "hide-before-load";
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
			if (stagger && this.isTileInEvenRow(index, bp)) tileContainer.classList.add(`stagger-${bp}`)
		});
		tileContainer.appendChild(tile);
		newContainerInner?.appendChild(tileContainer);
	 	index++;
	 });


	 if (container && containerInner) {
		container?.replaceChild(newContainerInner, containerInner) };
}
fetchData() {
	// if no data url or it does not end in .json, return empty string
	if (!this.dataJsonUrl || !this.dataJsonUrl.includes('.json') ) return "";
	else {
  return /** @type {Promise<void>} */(new Promise((res, rej) => {
    fetch(`${this.dataJsonUrl}`)
      .then(data => data.json())
      .then((json) => {
				if (json['tiles-data']) {
        this.rebuildTilesWithNewData(json['tiles-data']);
			}
        res();
      })
      .catch((error) => rej(error));
  }))
	}
}

}

customElements.define("logo-grid", LogoGrid);
export default LogoGrid;


