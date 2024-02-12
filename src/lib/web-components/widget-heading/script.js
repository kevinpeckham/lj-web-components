// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";

/** @copyright 2024 Lightning Jar - "WidgetHeading" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-heading} */

/**
 * Widget Heading Web Component
 * @name WidgetHeading
 * @class
 * @published 2024-02-09
 * @requires ComponentUtils
 * @extends HTMLHeadingElement | h2
 * @classdesc Defines web component that renders a text heading.
 * @attribute color-primary | currentColor | -- | color of the text
 * @attribute font-size | 1.75em | -- | base font size, sets a default across breakpoints
 * @attribute font-size-xxs | -- | -- | font size @ xxs
 * @attribute font-size-xs | -- | -- | font size @ xs
 * @attribute font-size-sm | -- | -- | font size @ sm
 * @attribute font-size-md | -- | -- | font size @ md
 * @attribute font-size-lg | -- | -- | font size @ lg
 * @attribute font-size-xl | -- | -- | font size @ xl
 * @attribute font-size-2xl | -- | -- | font size @ 2xl
 * @attribute font-weight | 600 | -- | default font weight
 * @attribute line-height | 1.2 | -- | text line height
 * @attribute max-width | 100% | 20em | border size of the button
 * @attribute stylesheet-textContent | -- | -- | injects css into
 * @slot | -- | You don't have to face these obstacles alone. | slot for the text content
 * @note this is a customization of the h2 element
 * @note it must be implemented as an extension of the h2 element (see example)

 */
class WidgetHeading extends HTMLHeadingElement {
	// reference to class itself
	get c() { return WidgetHeading };


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {

			"color-primary": "currentColor",
			"font-size": "1.75em",
			"font-size-xxs": "",
			"font-size-xs": "",
			"font-size-sm": "",
			"font-size-md": "",
			"font-size-lg": "",
			"font-size-xl": "",
			"font-size-2xl": "",
			"font-weight": "500",
			"line-height": "1.2",
			"max-width": "100%",
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
	<div id="heading"></div>
</div>`.trim();
}

// STYLES
static get styles() {
	return `
	<style>
	:host, * { box-sizing:border-box;margin:0; }
	#container {

	}
	#heading {

		color: var(--color-primary, currentColor);
		font-size: var(--font-size, 1.5em);
		font-weight: var(--font-weight, 500);
		line-height: var(--line-height, 1.2);
		max-width: var(--max-width, 100%);
		padding: var(--padding, 0);
	}
	/* xxs */
	@media (max-width: 419.9px) { #heading {font-size: var(--font-size-xxs, var(--font-size, 1.5em)); }}
	/* xs */
	@media (min-width: 420px) { #heading {font-size: var(--font-size-xs, var(--font-size, 1.5em)); }}
	/* sm */
	@media (min-width: 640px) { #heading {font-size: var(--font-size-sm, var(--font-size, 1.5em)); }}
	/* md */
	@media (min-width: 768px) { #heading {font-size: var(--font-size-md, var(--font-size, 1.5em)); }}
	/* lg */
	@media (min-width: 1024px) { #heading {font-size: var(--font-size-lg, var(--font-size, 1.5em)); }}
	/* xl */
	@media (min-width: 1280px) { #heading {font-size: var(--font-size-xl, var(--font-size, 1.5em)); }}
	/* 2xl */
	@media (min-width: 1536px) { #heading {font-size: var(--font-size-2xl, var(--font-size, 1.5em)); }}
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
		//this.updateAttributes();
	}

	// ATTRIBUTE CHANGED CALLBACK
	attributeChangedCallback() {
		//this.updateAttributes();
	}

	// METHODS
	updateAttributes() {
		// update slot content
		this.refs.heading.textContent = this.textContent;

		// update font weight
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--font-weight", this?.fontWeight ?? 500);

		// update line height
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--line-height", this?.lineHeight ?? 1.33);

		// update max width
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--max-width", this?.maxWidth ?? "100%");


		// update font size
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--font-size", this?.fontSize);
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--font-size-xxs", this?.fontSizeXxs ?? "1.5em");
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--font-size-xs", this?.fontSizeXs ?? "1.5em");
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--font-size-sm", this?.fontSizeSm ?? "1.5em");
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--font-size-md", this?.fontSizeMd ?? "1.5em");
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--font-size-lg", this?.fontSizeLg ?? "1.5em");
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--font-size-xl", this?.fontSizeXl ?? "1.5em");
		// @ts-expect-error - yes it is
		this.refs.container.style.setProperty("--font-size-2xl", this?.fontSize2xl ?? "1.5em");

		// update color attributes
		ComponentUtils.updateColorAttributes(this.c, this);


//ComponentUtils.updateManyElAttributes(this.c, this, this.c.ids);

	// 	// @ts-expect-error - yes it is
	// 	this.refs.container.style.setProperty("--max-width", this?.maxWidth);

	// 	// @ts-expect-error - yes it is
	// 	this.refs.container.style.setProperty("--padding", this?.padding);

	}
}

customElements.define("widget-heading", WidgetHeading, {extends: "h2"});
export default WidgetHeading;
