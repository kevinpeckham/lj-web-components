// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";


/** @copyright 2024 Lightning Jar - "Quick Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/quick-grid} */

/**
 * Widget Card Grid Web Component
 * @name QuickGrid
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for quickly creating a grid of items. The grid is responsive and can be configured to display a variety of content types.
 * @attribute align-content | start | -- | how rows are positioned in the container
 * @attribute align-items | center | -- | how items are positioned in the container
 * @attribute justify-content | center | -- | how items are positioned along a container's main axis
 * @attribute justify-items | legacy | -- | how grid items are positioned along their inline axis
 * @attribute gap-x-xs | 1rem | -- | gap between grid items @ screen width < 640px
 * @attribute gap-x-sm | 1rem | -- | gap between grid items @ screen width >= 640px
 * @attribute gap-x-md | 1rem | -- | gap between grid items @ screen width >= 768px
 * @attribute gap-x-lg | 1rem | -- | gap between grid items @ screen width >= 1024px
 * @attribute gap-x-xl |1rem | -- | gap between grid items @ screen width >= 1280px
 * @attribute gap-x-2xl | 1rem | -- | gap between grid items @ screen width >= 1536px
 * @attribute gap-y-xs | 1rem | -- | gap between grid items @ screen width < 640px
 * @attribute gap-y-sm | 1rem | -- | gap between grid items @ screen width >= 640px
 * @attribute gap-y-md | 1rem | -- | gap between grid items @ screen width >= 768px
 * @attribute gap-y-lg | 1rem | -- | gap between grid items @ screen width >= 1024px
 * @attribute grid-columns-xs | 1 | -- | # columns @ screen width < 640px
 * @attribute grid-columns-sm | 2 | -- | # columns @ screen width >= 640px
 * @attribute grid-columns-md | 3 | -- | # columns @ screen width >= 768px
 * @attribute grid-columns-lg | 4 | -- | # columns @ screen width >= 1024px
 * @attribute grid-columns-xl | 4 | -- | # columns @ screen width >= 1280px
 * @attribute grid-columns-2xl | 5 | -- | # columns @ screen width >= 1536px
 * @attribute grid-rows-xs | none | -- | # rows @ screen width < 640px
 * @attribute grid-rows-sm | none | -- | # rows @ screen width >= 640px
 * @attribute grid-rows-md | none | -- | # rows @ screen width >= 768px
 * @attribute grid-rows-lg | none | -- | # rows @ screen width >= 1024px
 * @attribute grid-rows-xl | none | -- | # rows @ screen width >= 1280px
 * @attribute grid-rows-2xl | none | -- | # rows @ screen width >= 1536px
 * @attribute padding-x | 0 | -- | padding on the left and right of the widget
 * @attribute padding-top | 1rem | -- | padding on the top of the widget
 * @attribute padding-bottom | 0 | -- | padding on the bottom of the widget
 * @attribute stylesheet | -- | -- | inject custom styles into the widget
 * @slot | -- | <i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i> | inject content into the widget

 */
class QuickGrid extends HTMLElement {

// reference to class itself
get c() { return QuickGrid };

// PROPERTIES
alignContent = "start";
alignItems = "center";
justifyContent = "start";
justifyItems = "center";
gapXXs = "1rem";
gapXSm = "1rem";
gapXMd = "1rem";
gapXLg = "1rem";
gapXXl = "1rem";
gapX2xl = "1rem";
gapYXs = "1rem";
gapYSm = "1rem";
gapYMd = "1rem";
gapYLg = "1rem";
gapYXl = "1rem";
gapY2xl = "1rem";
gridColumnsXs = "";
gridColumnsSm = "";
gridColumnsMd = "";
gridColumnsLg = "";
gridColumnsXl = "";
gridColumns2xl = "";
gridRowsXs = "";
gridRowsSm = "";
gridRowsMd = "";
gridRowsLg = "";
gridRowsXl = "";
gridRows2xl = "";
paddingX = "0";
paddingTop = "1rem";
paddingBottom = "0";
stylesheet = "";






// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string | null } }
 */
static get attributes() {
const values = {

	"align-content": "start",
	"align-items": "center",
	"justify-content": "start",
	"justify-items": "legacy",
	"gap-x-xs": "1rem",
	"gap-x-sm": "1rem",
	"gap-x-md": "1rem",
	"gap-x-lg": "1rem",
	"gap-x-xl": "1rem",
	"gap-x-2xl": "1rem",
	"gap-y-xs": "1rem",
	"gap-y-sm": "1rem",
	"gap-y-md": "1rem",
	"gap-y-lg": "1rem",
	"gap-y-xl": "1rem",
	"gap-y-2xl": "1rem",
	"grid-columns-xs": "1",
	"grid-columns-sm": "2",
	"grid-columns-md": "3",
	"grid-columns-lg": "4",
	"grid-columns-xl": "4",
	"grid-columns-2xl": "5",
	"grid-rows-xs": "none",
	"grid-rows-sm": "none",
	"grid-rows-md": "none",
	"grid-rows-lg": "none",
	"grid-rows-xl": "none",
	"grid-rows-2xl": "none",
	"padding-x": "0",
	"padding-top": "1rem",
	"padding-bottom": "0",
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





// ELEMENTS
get els() {
  return `
<style id="stylesheet">${this.stylesheet}</style>
<slot
	id="container"
	style="
	--align-content:${this.alignContent};
	--align-items:${this.alignItems};
	--justify-content:${this.justifyContent};
	--justify-items:${this.justifyItems};
	--gap-x-xs:${this.gapXXs};
	--gap-x-sm:${this.gapXSm};
	--gap-x-md:${this.gapXMd};
	--gap-x-lg:${this.gapXLg};
	--gap-x-xl:${this.gapXXl};
	--gap-x-2xl:${this.gapX2xl};
	--gap-y-xs:${this.gapYXs};
	--gap-y-sm:${this.gapYSm};
	--gap-y-md:${this.gapYMd};
	--gap-y-lg:${this.gapYLg};
	--gap-y-xl:${this.gapYXl};
	--gap-y-2xl:${this.gapY2xl};
	--grid-columns-xs:${this.gridColumnsXs};
	--grid-columns-sm:${this.gridColumnsSm};
	--grid-columns-md:${this.gridColumnsMd};
	--grid-columns-lg:${this.gridColumnsLg};
	--grid-columns-xl:${this.gridColumnsXl};
	--grid-columns-2xl:${this.gridColumns2xl};
	--grid-rows-xs:${this.gridRowsXs};
	--grid-rows-sm:${this.gridRowsSm};
	--grid-rows-md:${this.gridRowsMd};
	--grid-rows-lg:${this.gridRowsLg};
	--grid-rows-xl:${this.gridRowsXl};
	--grid-rows-2xl:${this.gridRows2xl};
	--padding-x:${this.paddingX};
	--padding-top:${this.paddingTop};
	--padding-bottom:${this.paddingBottom};
	"
>

</slot>`.trim();
}

get preflight() {
	return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}::before,html,:host {line-height:1.5;} body {margin:0;line-height:inherit} [hidden] {display:none}`
}

// STYLES
get styles() {
  return `
	<style id="preflight">${this.preflight}</style>
  <style id="base">
  :host, *:not(style) {
		display:block;
		box-sizing:border-box;
		margin:0; }
	#container {
		align-content:var(--align-content);
		align-items:var(--align-items);
		display:grid;
		gap:var(--gap-y-xs) var(--gap-x-xs);
		grid-template-columns:repeat(var(--grid-columns-xs, 1), minmax(0, 1fr));
		grid-template-rows:${this.gridRowsXs === "none" ? 'none' : 'repeat(var(--grid-rows-xs, none), minmax(0, 1fr))'};
		justify-content:var(--justify-content);
		justify-items:var(--justify-items);
		padding:var(--padding-top) var(--padding-x) var(--padding-bottom);
		width:100%;
	}
	@media (min-width: 640px) {
		#container {
			gap:var(--gap-y-sm) var(--gap-x-sm);
			grid-template-columns:repeat(var(--grid-columns-sm, 2), minmax(0, 1fr));
			grid-template-rows:${this.gridRowsSm === "none" ? 'none' : 'repeat(var(--grid-rows-sm, none), minmax(0, 1fr))'};
		}
	}
	@media (min-width: 768px) {
		#container {
			gap:var(--gap-y-md) var(--gap-x-md);
			grid-template-columns:repeat(var(--grid-columns-md, 3), minmax(0, 1fr));
			grid-template-rows:${this.gridRowsMd === "none" ? 'none' : 'repeat(var(--grid-rows-md, none), minmax(0, 1fr))'};
		}
	}
	@media (min-width: 1024px) {
		#container {
			gap:var(--gap-y-lg) var(--gap-x-lg);
			grid-template-columns:repeat(var(--grid-columns-lg, 4), minmax(0, 1fr));
			grid-template-rows:${this.gridRowsLg === "none" ? 'none' : 'repeat(var(--grid-rows-lg, none), minmax(0, 1fr))'};

		}
	}
	@media (min-width: 1280px) {
		#container {
			gap:var(--gap-y-xl) var(--gap-x-xl);
			grid-template-columns:repeat(var(--grid-columns-xl, 4), minmax(0, 1fr));
			grid-template-rows:${this.gridRowsXl === "none" ? 'none' : 'repeat(var(--grid-rows-xl, none), minmax(0, 1fr))'};
		}
	}
	@media (min-width: 1536px) {
		#container {
			gap:var(--gap-y-2xl) var(--gap-x-2xl);
			grid-template-columns:repeat(var(--grid-columns-2xl, 5), minmax(0, 1fr));
			grid-template-rows:${this.gridRows2xl === "none" ? 'none' : 'repeat(var(--grid-rows-2xl, none), minmax(0, 1fr))'};
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

customElements.define("quick-grid", QuickGrid);
export default QuickGrid;


