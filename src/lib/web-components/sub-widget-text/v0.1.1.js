// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "SubWidgetText" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/sub-widget-text} */

/**
 * Widget text Web Component
 * @name SubWidgetText
 * @class
 * @published 2024-02-09
 * @requires ComponentUtils
 * @extends HTMLParagraphElement | p
 * @classdesc Defines web component that renders a text. Meant to be used inside widget components.
 * @attribute color-primary | currentColor | -- | color of the text
 * @attribute font-size | 1rem | -- | base font size, sets a default across breakpoints
 * @attribute font-size-xxs | -- | -- | font size @ xxs
 * @attribute font-size-xs | -- | -- | font size @ xs
 * @attribute font-size-sm | -- | -- | font size @ sm
 * @attribute font-size-md | -- | -- | font size @ md
 * @attribute font-size-lg | -- | -- | font size @ lg
 * @attribute font-size-xl | -- | -- | font size @ xl
 * @attribute font-size-2xl | -- | -- | font size @ 2xl
 * @attribute font-weight | 400 | -- | default font weight
 * @attribute text-textContent | -- | -- | text content
 * @attribute line-height | 1.5 | -- | text line height
 * @attribute max-width | 100% | 32rem | border size of the button
 * @attribute opacity | .9 | -- | opacity of the text
 * @attribute stylesheet-textContent | -- | -- | injects css into
 * @slot | -- | Our diverse group of industry leaders collaborates to establish the oil & gas industry benchmarks for competency development and similar standards for the NetZero and Renewables sectors. | slot for the text content
 * @note this is a customization of the h2 element
 * @note it must be implemented as an extension of the h2 element (see example)

 */
class SubWidgetText extends HTMLParagraphElement {
	// reference to class itself
	get c() { return SubWidgetText };


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"color-primary": "currentColor",
			"font-size": "1rem",
			"font-size-xxs": "",
			"font-size-xs": "",
			"font-size-sm": "",
			"font-size-md": "",
			"font-size-lg": "",
			"font-size-xl": "",
			"font-size-2xl": "",
			"font-weight": "400",
			"text-textContent": "",
			"line-height": "1.5",
			"max-width": "100%",
			"opacity": ".9",
			"padding": "0",
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
	return `
<div id="container">
	<div id="text"></div>
</div>`.trim();
}

// STYLES
static get styles() {
	return `
	<style>
	:host, * { box-sizing:border-box;margin:0; }
	#container {

	}
	#text {
		color: var(--color-primary, currentColor);
		font-size: var(--font-size, 1.5rem);
		font-weight: var(--font-weight, 500);
		line-height: var(--line-height, 1.2);
		max-width: var(--max-width, 100%);
		opacity: var(--opacity, .9);
		padding: var(--padding, 0);
	}
	@media (max-width: 419.9px) { #text {font-size: var(--font-size-xxs, var(--font-size, 1.5em)); }}
	@media (min-width: 420px) { #text {font-size: var(--font-size-xs, var(--font-size, 1.5em)); }}
	@media (min-width: 640px) { #text {font-size: var(--font-size-sm, var(--font-size, 1.5em)); }}
	@media (min-width: 768px) { #text {font-size: var(--font-size-md, var(--font-size, 1.5em)); }}
	@media (min-width: 1024px) { #text {font-size: var(--font-size-lg, var(--font-size, 1.5em)); }}
	@media (min-width: 1280px) { #text {font-size: var(--font-size-xl, var(--font-size, 1.5em)); }}
	@media (min-width: 1536px) { #text {font-size: var(--font-size-2xl, var(--font-size, 1.5em)); }}
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
		// @ts-expect-error - yes it is
		this.refs.text.textContent = this?.textTextContent ? this?.textTextContent : this.textContent;

		// update max width
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--max-width", this?.maxWidth ?? "100%");

		// opacity
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--opacity", this?.opacity ?? ".9");



		ComponentUtils.updateFontAttributes(this.c, this);
		ComponentUtils.updateColorAttributes(this.c, this);

	}
}

customElements.define("sub-widget-text", SubWidgetText, {extends: "p"});
export default SubWidgetText;
