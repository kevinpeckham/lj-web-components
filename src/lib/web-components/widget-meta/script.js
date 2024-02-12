// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";

/** @copyright 2024 Lightning Jar - "WidgetMeta" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-meta} */

/**
 * Widget Heading Web Component
 * @name WidgetMeta
 * @class
 * @published 2024-02-09
 * @requires ComponentUtils
 * @extends HTMLDivElement | div
 * @classdesc Defines web component that renders a smaller text heading. For typical use in a widget above the heading.
 * @attribute color-primary | currentColor | -- | color of the text
 * @attribute font-size | .85em | -- | base font size, sets a default across breakpoints
 * @attribute font-size-xxs | -- | -- | font size @ xxs
 * @attribute font-size-xs | -- | -- | font size @ xs
 * @attribute font-size-sm | -- | -- | font size @ sm
 * @attribute font-size-md | -- | -- | font size @ md
 * @attribute font-size-lg | -- | -- | font size @ lg
 * @attribute font-size-xl | -- | -- | font size @ xl
 * @attribute font-size-2xl | -- | -- | font size @ 2xl
 * @attribute font-weight | 400 | -- | default font weight
 * @attribute letter-spacing | .05em | -- | text letter spacing
 * @attribute line-height | 1 | -- | text line height
 * @attribute max-width | 100% | -- | border size of the button
 * @attribute stylesheet-textContent | -- | -- | injects css into
 * @attribute text-transform | uppercase | -- | injects css into
 * @slot | -- | Membership | slot for the text content
 * @note this is a customization of the div element
 * @note it must be implemented as an extension of the h2 element (see example)

 */
class WidgetMeta extends HTMLDivElement {
	// reference to class itself
	get c() { return WidgetMeta };


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"color-primary": "currentColor",
			"font-size": ".85em",
			"font-size-xxs": "",
			"font-size-xs": "",
			"font-size-sm": "",
			"font-size-md": "",
			"font-size-lg": "",
			"font-size-xl": "",
			"font-size-2xl": "",
			"font-weight": "400",
			"letter-spacing": "0.05em",
			"line-height": "1",
			"padding": "0",
			"text-transform": "uppercase",
			"stylesheet-textContent": ""
		};
	return values;
	}

	// get observed attributes
	static get observedAttributes() { return Object.keys(this.attributes) }

	// get default value for an attribute
	/** @param {string} attr */
	static getDefault(attr) { return this.attributes[attr] ?? "" }

// ELEMENTS
static get els() {
	return `<div class="container" id="meta"></div>`.trim();
}

// STYLES
static get styles() {
	return `
	<style>
	:host, * { box-sizing:border-box;margin:0; }
	div {
		color: var(--color-primary, currentColor);
		font-size: var(--font-size, .85em);
		text-transform: var(--text-transform, uppercase);
		font-weight: var(--font-weight, 500);
		letter-spacing: var(--letter-spacing, 0.05em);
		line-height: var(--line-height, 1);
		padding: var(--padding, 0);
		text-align:center;
	}
	@media (max-width: 419.9px) { div { font-size: var(--font-size-xxs, var(--font-size, 1.5em)); }}
	@media (min-width: 420px) { div { font-size: var(--font-size-xs, var(--font-size, 1.5em)); }}
	@media (min-width: 640px) { div { text-align:start; font-size: var(--font-size-sm, var(--font-size, 1.5em)); }}
	@media (min-width: 768px) { div {font-size: var(--font-size-md, var(--font-size, 1.5em)); }}
	@media (min-width: 1024px) { div {font-size: var(--font-size-lg, var(--font-size, 1.5em)); }}
	@media (min-width: 1280px) { div {font-size: var(--font-size-xl, var(--font-size, 1.5em)); }}
	@media (min-width: 1536px) { div {font-size: var(--font-size-2xl, var(--font-size, 1.5em)); }}
</style><style id="stylesheet"></style>`.trim();
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

	// constructor
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
	}

	// CONNECTED CALLBACK
	connectedCallback() {
		this.updateAttributes();
	}

	// ATTRIBUTE CHANGED CALLBACK
	attributeChangedCallback() {
		this.updateAttributes();
	}

	// METHODS
	updateAttributes() {
		// update slot content
		this.refs.meta.textContent = this.textContent;

		// update font and color
		ComponentUtils.updateFontAttributes(this.c, this);
		ComponentUtils.updateColorAttributes(this.c, this);
	}
}

customElements.define("widget-meta", WidgetMeta, {extends: "div"});
export default WidgetMeta;
