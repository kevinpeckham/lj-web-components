// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Quick Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/quick-grid} */

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
 * @attribute grid-padding-top | 0 | -- | padding on the top of the widget
 * @attribute grid-padding-bottom | 0 | -- | padding on the bottom of the widget
 * @attribute stylesheet | -- | -- | inject custom styles into the widget
 * @slot | -- | <i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i> | inject content into the widget

 */
class QuickGrid extends HTMLElement {

// reference to class itself
get c() { return QuickGrid };

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
	"grid-padding-top": "1rem",
	"grid-padding-bottom": "0",
	"stylesheet": "",
};
return values;
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {
	const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
	const html = ComponentUtils.stringIfValue;
	const stylesheet = this.attValue('stylesheet');
  return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<slot id="container" style="${cssVars}">
</slot>`.trim();
}

// STYLES
get styles() {
  return `
	${ComponentUtils.preflight}
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
		grid-template-rows:${this.attValue('grid-rows-xs') === "none" ? 'none' : 'repeat(var(--grid-rows-xs, none), minmax(0, 1fr))'};
		justify-content:var(--justify-content);
		justify-items:var(--justify-items);
		padding:var(--grid-padding-top) var(--padding-x) var(--grid-padding-bottom);
		width:100%;
	}
	@media (min-width: 640px) {
		#container {
			gap:var(--gap-y-sm) var(--gap-x-sm);
			grid-template-columns:repeat(var(--grid-columns-sm, 2), minmax(0, 1fr));
			grid-template-rows:${this.attValue('grid-rows-sm') === "none" ? 'none' : 'repeat(var(--grid-rows-sm, none), minmax(0, 1fr))'};
		}
	}
	@media (min-width: 768px) {
		#container {
			gap:var(--gap-y-md) var(--gap-x-md);
			grid-template-columns:repeat(var(--grid-columns-md, 3), minmax(0, 1fr));
			grid-template-rows:${this.attValue('grid-rows-md') === "none" ? 'none' : 'repeat(var(--grid-rows-md, none), minmax(0, 1fr))'};
		}
	}
	@media (min-width: 1024px) {
		#container {
			gap:var(--gap-y-lg) var(--gap-x-lg);
			grid-template-columns:repeat(var(--grid-columns-lg, 4), minmax(0, 1fr));
			grid-template-rows:${this.attValue('grid-rows-lg') === "none" ? 'none' : 'repeat(var(--grid-rows-lg, none), minmax(0, 1fr))'};
		}
	}
	@media (min-width: 1280px) {
		#container {
			gap:var(--gap-y-xl) var(--gap-x-xl);
			grid-template-columns:repeat(var(--grid-columns-xl, 4), minmax(0, 1fr));
			grid-template-rows:${this.attValue('grid-rows-xl') === "none" ? 'none' : 'repeat(var(--grid-rows-xl, none), minmax(0, 1fr))'};
		}
	}
	@media (min-width: 1536px) {
		#container {
			gap:var(--gap-y-2xl) var(--gap-x-2xl);
			grid-template-columns:repeat(var(--grid-columns-2xl, 5), minmax(0, 1fr));
			grid-template-rows:${this.attValue('grid-rows-2xl') === "none" ? 'none' : 'repeat(var(--grid-rows-2xl, none), minmax(0, 1fr))'};
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
constructor() { super(); this.attachShadow({ mode: "open" }); }

// LIFECYCLE CALLBACKS
connectedCallback() {	this.shadowRoot?.appendChild(this.template.content.cloneNode(true)) }
}

customElements.define("quick-grid", QuickGrid);
export default QuickGrid;


