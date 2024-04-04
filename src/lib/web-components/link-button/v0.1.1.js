// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "LinkButton" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/link-button} */

/**
 * Link Button Web Component
 * @name LinkButton
 * @class
 * @unpublished
 * @requires ComponentUtils
 * @extends HTMLElement
 * @classdesc Defines web component that renders a button that copies text to the user's clipboard. The text to be copied is specified by the data-target-selector attribute.  All of the text content of the target element will be copied to the clipboard.
 * @attribute border-radius | .35rem | -- | border radius of the button
 * @attribute border-width | .12rem | -- | border size of the button
 * @attribute color-background | transparent | rgb(255 255 255 / .05) | background color of the button
 * @attribute color-backgroundHover | transparent | red | background color of the button on hover
 * @attribute color-border | currentColor | currentColor | color of the border
 * @attribute color-borderHover | currentColor | red | color of the border on hover
 * @attribute color-primary | currentColor | -- | color of the text
 * @attribute color-primaryHover | currentColor | white | color of the text on hover
 * @attribute link-text | -- | Get Started | button text
 * @attribute link-href | / | https://cdn.lj.dev/web-components | text appears on hover
 * @attribute link-title | -- | learn more | selector for the target element
 * @attribute link-rel | -- | external | selector for the target element
 * @attribute line-height | 1 | -- | line height for button text
 * @attribute padding | .55rem 1.2rem | .75rem 1.33rem | padding around the text in the button button
 * @attribute transition-duration | .3s| .4s | selector for the target element
 * @attribute stylesheet-textContent | -- | -- | injects css into custom stylesheet

 */
class LinkButton extends HTMLElement {
	borderRadius = "";
	borderWidth = "";
	colorAccent = "";
	colorBackground = "";
	colorBackgroundHover = "";
	colorBorder = "";
	colorBorderHover = "";
	colorSecondary = "";
	colorPrimary = "";
	colorPrimaryHover = "";
	padding = "";
	lineHeight = "";
	linkText = "";
	linkHref = "";
	linkTitle = "";
	linkTarget = "";
	linkRel = "";
	transitionDuration = "";
	stylesheetTextContent = "";

	// reference to class itself
	get c() { return LinkButton };


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"border-radius": ".35em",
			"border-width": ".125em",
			"color-accent": "lightblue",
			"color-background": "transparent",
			"color-backgroundHover": "lightblue",
			"color-border": "currentColor",
			"color-borderHover": "lightblue",
			"color-secondary": "currentColor",
			"color-primary": "currentColor",
			"color-primaryHover": "currentColor",
			"padding": ".55rem 1.2rem",
			"line-height": "1",
			"link-text": "",
			"link-href": "/",
			"link-title": "",
			"link-target": "_self",
			"link-rel": "",
			"transition-duration": "0.3s",
			"stylesheet-textContent": ""
		};
	return values;
	}

	// get observed attributes
	static get observedAttributes() { return Object.keys(this.attributes) }

	// get default value for an attribute
	/** @param {string} attr */
	static getDefault(attr) { return this.attributes[attr] ?? "" }

// ELEMENTS MASTER LAYOUT GETTER
get els() {
	return `
<style id="stylesheet"></style>
<div
	id="container"
	style="
		--border-radius: ${this.borderRadius};
		--border-width: ${this.borderWidth};
		--color-accent: ${this.colorAccent};
		--color-background: ${this.colorBackground};
		--color-backgroundHover: ${this.colorBackgroundHover};
		--color-border: ${this.colorBorder};
		--color-borderHover: ${this.colorBorderHover};
		--color-secondary: ${this.colorSecondary};
		--color-primary: ${this.colorPrimary};
		--color-primaryHover: ${this.colorPrimaryHover};
		--line-height: ${this.lineHeight};
		--padding: ${this.padding};
		--transition-duration: ${this.transitionDuration};
	"
	>
	<a
		href="${this.linkHref}"
		${(this.linkRel) ? `rel="${this.linkRel}"` : ''}
		title="${this.linkTitle}"
		id="link">${this.linkText}</a>
</div>`.trim();
}

// STYLES
get styles() {
	return `
	<style>
	:host, * { box-sizing:border-box;margin:0; }
	#link {
		align-items:center;
		border-color: var(--color-border, currentColor);
		border-radius: var(--border-radius, .35rem);
		border-style:solid;
		border-width: var(--border-width, .125rem);
		color: var(--color-primary, currentColor);
		display:inline-flex;
		font-size:.9em;
		justify-content:center;
		line-height: var(--line-height, 1);
		padding: var(--padding, .5rem 1.33rem);
		text-decoration:none;
		transition-property: all;
		transition-duration: var(--transition-duration, .3s);
		white-space:nowrap;
	}
	#link:hover {
		border-color: var(--color-backgroundHover, lightblue);
		background-color: var(--color-backgroundHover, lightblue);
		color: var(--color-primaryHover, currentColor);
	}
</style>`.trim();
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

	// constructor
	constructor() {
		super();

		// programattically create getters and setters for each observed attribute
    ComponentUtils.createOAGS(this.c, this);

		// create a shadow root
		this.attachShadow({ mode: "open" });

	}

	 // CONNECTED CALLBACK
	connectedCallback() {
		// append the template content to the shadow DOM
		this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

		// define refs elements
		this.refs = ComponentUtils.getRefs(this.c, this);
		// this.updateAttributes();
	}

	// ATTRIBUTE CHANGED CALLBACK
	attributeChangedCallback() {
		// this.updateAttributes();
	}
}

customElements.define("link-button", LinkButton);
export default LinkButton;
