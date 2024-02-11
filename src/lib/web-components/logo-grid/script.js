// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";
// @ts-expect-error yep got it
import LogoTile from "/e/wc/logo-tile.min.js";


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
 * @attribute grid-row-gap-2xl | 1.5rem | -- | gap between columns @ 2xl (>= 1536px)
 * @attribute grid-row-gap-xl | 1.5rem | -- | gap between columns @ xl (>= 1280px)
 * @attribute grid-row-gap-lg | 1.5rem | -- | gap between columns @ lg (>= 1024px)
 * @attribute grid-row-gap-md | 1.5rem | -- | gap between columns @ md (>= 768px)
 * @attribute grid-row-gap-sm | 1.5rem | -- | gap between columns @ sm (>= 640px)
 * @attribute grid-row-gap-xs | 1.5rem | -- | gap between columns @ xs (>= 420px)
 * @attribute grid-row-gap-xxs | 1.5rem | -- | gap between columns  @ xxs (< 420px)
 * @attribute grid-stagger | off | on | stagger the tiles - "off" or "on"ß
 * @attribute grid-stagger-2xl | 3.5rem | -- | stagger the tiles @ xl breakpoint
 * @attribute grid-stagger-xl | 3rem | -- | stagger the tiles @ xl
 * @attribute grid-stagger-lg | 2rem | -- | stagger the tiles @ lg
 * @attribute grid-stagger-md | 2rem | -- | stagger the tiles @ md
 * @attribute grid-stagger-sm | 2rem | -- | stagger the tiles @ lg breakpoint
 * @attribute grid-stagger-xs | 1.5rem | -- | stagger the tiles @ lg breakpoint
 * @attribute grid-stagger-xxs | 0 | -- | stagger the tiles @ xs breakpoint
 * @attribute tile-border-radius | 2.5% | 1em | border radius (rounded edges) of the tile
 * @attribute tile-color-background | transparent | white | background color of the tile
 * @attribute tile-aspect-ratio | -- | 290 / 128 | the aspect ratio of the tile
 * @attribute tile-opacity | 100% | 85% | default opacity of tile
 * @attribute tile-opacity-hover | 100% | 100% | opacity of tile on hover
 * @attribute tile-padding | -- | 10px | duration of the transition effect
 * @attribute tile-transition-duration | 0.3s | -- | duration of the transition effect
 * @attribute tile-transition-property | opacity | -- | transition property to animate
 * @attribute tile-stylesheet-textContent | -- | -- | inject css into the inner stylesheet
 * @attribute stylesheet-textContent | -- | -- | inject css into the grid inner stylesheet
 * @attribute data-tiles | -- | {[{"name":"Apple","image-src":"/images/logos/apple.svg","link-href":"https://apple.com"},{"name":"Svelte","image-src":"/images/logos/svelte.svg","link-href":"https://svelte.dev"},{"name":"Node","image-src":"/images/logos/nodejs.svg","link-href":"https://nodejs.org"},{"name":"Typescript","image-src":"/images/logos/typescript.svg","link-href":"https://www.typescriptlang.org"},{"name":"Tailwind","image-src":"/images/logos/tailwind.svg","link-href":"https://tailwindcss.com"},{"name":"Vercel","image-src":"/images/logos/vercel.svg","link-href":"https://vercel.com"},{"name":"Github","image-src":"/images/logos/github.svg","link-href":"https://github.com"},{"name":"Vite","image-src":"/images/logos/vite.svg","link-href":"https://vite.com"},{"name":"PNPM","image-src":"/images/logos/pnpm.svg","link-href":"https://pnpm.io"}]} | JSON data for the tiles
 * @note Data for the tiles is passed in as a JSON string. The tiles are built from the JSON data.
 * @note The JSON data must be wrapped in an extra pair of curly braces. See example above.
 * @note The JSON data must not contain any line breaks or spaces.
 * @note You may use underscores in place of spaces in the tile names.
 * @property {string} data-tiles - JSON data for the tiles
 */
class LogoGrid extends HTMLElement {

// reference to class itself
get c() { return LogoGrid };

// types
dataTiles = "";
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
tileStylesheetTextContent = "";



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
	"data-tiles": "",
	"tile-aspect-ratio": "",
	"tile-border-radius": "2.5%",
	"tile-color-background": "transparent",
	"tile-opacity": "100%",
	"tile-opacity-hover": "100%",
	"tile-padding": "",
	"tile-transition-duration": "0.3s",
	"tile-transition-property": "opacity",
	"tile-stylesheet-textContent": "",
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
// !! refactor css to be dynamically generated (smaller)
static get styles() {
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

	/* xxs break point */
	@media (max-width: 419.99px) {
		#container {
			column-gap: var(--grid-column-gap-xxs, 0.5rem);
			grid-template-columns: repeat(var(--grid-columns-xxs, 1), minmax(0,1fr));
			row-gap: var(--grid-row-gap-xxs, 1rem);
		}
		#container:has(.stagger-xxs) {
			transform:translateX(calc(-.5 * var(--grid-stagger-xxs)));
			scale:.95;
		}
		.stagger-xxs {
			transform:translateX(var(--grid-stagger-xxs));
		}
	}
	/* xs break point */
	@media (min-width: 420px) and (max-width: 639.9px) {
		#container {
			column-gap: var(--grid-column-gap-xs, 1rem);
			grid-template-columns: repeat(var(--grid-columns-xs, 1), minmax(0,1fr));
			row-gap: var(--grid-row-gap-xs, 1rem);
		}
		#container:has(.stagger-xs) {
			transform:translateX(calc(-.5 * var(--grid-stagger-xs)));
			scale:.9;

		}
		.stagger-xs {
			transform:translateX(var(--grid-stagger-xs));
		}
	}
	/* sm break point */
	@media (min-width: 640px) and (max-width: 767.9px){
		#container {
			column-gap: var(--grid-column-gap-sm, 1.25rem);
			grid-template-columns: repeat(var(--grid-columns-sm, 3),minmax(0,1fr));
			row-gap: var(--grid-row-gap-sm, 1.25rem);
		}
		#container:has(.stagger-sm) {
			transform:translateX(calc(-.5 * var(--grid-stagger-sm)));
			scale:.95;
		}
		.stagger-sm {
			transform:translateX(var(--grid-stagger-sm));
		}
	}

	/* md break point */
	@media (min-width: 768px) and (max-width: 1023.9px) {
		#container {
			column-gap: var(--grid-column-gap-md, 1.5rem);
			grid-template-columns: repeat(var(--grid-columns-md, 5),minmax(0,1fr));
			row-gap: var(--grid-row-gap-md, 1.5rem);
		}
		#container:has(.stagger-md) {
			transform:translateX(calc(-.5 * var(--grid-stagger-md)));
			scale:.95;
		}
		.stagger-md {
			transform:translateX(var(--grid-stagger-md));
		}
	}

	/* lg break point */
	@media (min-width: 1024px) and (max-width: 1279.9px) {
		#container {
			column-gap: var(--grid-column-gap-lg, 1.5rem);
			grid-template-columns: repeat(var(--grid-columns-lg, 6), minmax(0,1fr));
			row-gap: var(--grid-row-gap-lg, 1.5rem);
		}
		#container:has(.stagger-lg) {
			transform:translateX(calc(-.5 * var(--grid-stagger-lg)));
			scale:.95;
		}
		.stagger-lg { transform:translateX(var(--grid-stagger-lg)) }
	}

	/* xl break point */
	@media (min-width: 1280px) and (max-width: 1535.9px){
		#container {
			column-gap: var(--grid-column-gap-xl, 1.75rem);
			grid-template-columns: repeat(var(--grid-columns-xl, 7), minmax(0,1fr));
			row-gap: var(--grid-row-gap-xl, 1.5rem);
		}
		#container:has(.stagger-xl) {
			transform:translateX(calc(-.5 * var(--grid-stagger-xl)));
			scale:.935;
		}
		.stagger-xl { transform:translateX(var(--grid-stagger-xl)) }
	}


	@media (min-width: 1536px) {
		#container {
			column-gap: var(--grid-column-gap-2xl, 2rem);
			grid-template-columns: repeat(var(--grid-columns-2xl, 8),minmax(0,1fr));
			row-gap: var(--grid-row-gap-2xl, 1.5rem);
		}
		#container:has(.stagger-2xl) {
			transform:translateX(calc(-.5 * var(--grid-stagger-2xl)));
			scale:.935;
		}
		.stagger-2xl { transform:translateX(var(--grid-stagger-2xl)) }
	}

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

	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.c.template.content.cloneNode(true))

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);

	// update attributes
	this.updateAttributes();

	// build tiles
	this.buildTiles();
}

// LIFECYCLE CALLBACKS
connectedCallback() {
	this.updateAttributes();
	this.buildTiles();
}
attributeChangedCallback() {
	this.updateAttributes();
	this.buildTiles();
}

// METHODS
updateAttributes() {
	ComponentUtils.updateManyElAttributes(this.c, this, this.c.ids);
	ComponentUtils.updateColorAttributes(this.c, this);


	// update grid size attributes
	// !! refactor this to use a loop
	this.refs.container.style.setProperty("--grid-columns-xxs", this.gridColumnsXxs);
	this.refs.container.style.setProperty("--grid-columns-xs", this.gridColumnsXs);
	this.refs.container.style.setProperty("--grid-columns-sm", this.gridColumnsSm);
	this.refs.container.style.setProperty("--grid-columns-md", this.gridColumnsMd);
	this.refs.container.style.setProperty("--grid-columns-lg", this.gridColumnsLg);
	this.refs.container.style.setProperty("--grid-columns-xl", this.gridColumnsXl);
  this.refs.container.style.setProperty("--grid-columns-2xl", this.gridColumns2xl);

	// update column gap attributes
	// !! refactor this to use a loop
	this.refs.container.style.setProperty("--grid-column-gap-xxs", this.gridColumnGapXxs);
	this.refs.container.style.setProperty("--grid-column-gap-xs", this.gridColumnGapXs);
	this.refs.container.style.setProperty("--grid-column-gap-sm", this.gridColumnGapSm);
	this.refs.container.style.setProperty("--grid-column-gap-md", this.gridColumnGapMd);
	this.refs.container.style.setProperty("--grid-column-gap-lg", this.gridColumnGapLg);
	this.refs.container.style.setProperty("--grid-column-gap-xl", this.gridColumnGapXl);
	this.refs.container.style.setProperty("--grid-column-gap-2xl", this.gridColumnGap2xl);

	// update row gap attributes
	// !! refactor this to use a loop
	this.refs.container.style.setProperty("--grid-row-gap-xxs", this.gridRowGapXxs);
	this.refs.container.style.setProperty("--grid-row-gap-xs", this.gridRowGapXs);
	this.refs.container.style.setProperty("--grid-row-gap-sm", this.gridRowGapSm);
	this.refs.container.style.setProperty("--grid-row-gap-md", this.gridRowGapMd);
	this.refs.container.style.setProperty("--grid-row-gap-lg", this.gridRowGapLg);
	this.refs.container.style.setProperty("--grid-row-gap-xl", this.gridRowGapXl);
	this.refs.container.style.setProperty("--grid-row-gap-2xl", this.gridRowGap2xl);

	// update grid stagger attribute
	// !! refactor this to use a loop
	this.refs.container.style.setProperty("--grid-stagger", this.gridStagger);
	if (this.gridStaggerXxs) this.refs.container.style.setProperty("--grid-stagger-xxs", this.gridStaggerXxs);
	if (this.gridStaggerXs) this.refs.container.style.setProperty("--grid-stagger-xs", this.gridStaggerXs);
	this.refs.container.style.setProperty("--grid-stagger-sm", this.gridStaggerSm);
	this.refs.container.style.setProperty("--grid-stagger-md", this.gridStaggerMd);
	this.refs.container.style.setProperty("--grid-stagger-lg", this.gridStaggerLg);
	this.refs.container.style.setProperty("--grid-stagger-xl", this.gridStaggerXl);
	this.refs.container.style.setProperty("--grid-stagger-2xl", this.gridStagger2xl);
}


buildTiles() {

	// delete existing tiles
	this.refs.container.innerHTML = "";
	// build new tiles


	/**
	 * @typedef TileDatum
	 * @type {Object}
	 * @property {string} name
	 * @property {string} image-src
	 * @property {string} link-href
	 *
	 * */


	/** @type { string } */
	const dataJSON = this.dataTiles ?? "";
	const dataLast = dataJSON.length - 1;
	const dataScrubbed =
		dataJSON[0] === "{" && dataJSON[dataLast] === "}"
			? dataJSON.substring(1, dataLast)
			: dataJSON;

	/** @type { TileDatum[] } */
	const dataParsed = JSON.parse(dataScrubbed);

	let index = 0;

	dataParsed.forEach((d) => {
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
		tile.setAttribute("stylesheet-textContent", this?.tileStylesheetTextContent ?? "");
		this.refs.container.appendChild(tile);

	// stagger the tiles
	const breakPoints = ["2xl", "Xl", "Lg", "Md", "Sm", "Xs", "Xxs"];
	breakPoints.forEach((key) => {
		const gridStagger = (this?.gridStagger === "on") ? true : false;
		const colsNum = Number(this?.[`gridColumns${key}`] ?? "0") ?? 0;
		window.console.log('colsNum', colsNum)

			// stagger the tiles at the large breakpoint
			let x = colsNum;

			while (x > 0 && colsNum > 1 && gridStagger) {
				if ( x - 1 === (index % (colsNum * 2))) { tile.classList.add(`stagger-${key.toLowerCase()}`) }
				x = x - 1;
			}
		});




		index++;
	});
}

}

customElements.define("logo-grid", LogoGrid);
export default LogoGrid;


