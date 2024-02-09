// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";

/** @copyright 2024 Lightning Jar - "Copy Button" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Link Button Web Component
 * @name LinkButton
 * @class
 * @published 2024-02-09
 * @requires ComponentUtils
 * @extends HTMLElement
 * @classdesc Defines web component that renders a button that copies text to the user's clipboard. The text to be copied is specified by the data-target-selector attribute.  All of the text content of the target element will be copied to the clipboard.
 * @attribute color-accent | blue | lightblue| color of the hover state of button
 * @attribute color-background | transparent | rgb(255 255 255 / .05) | background color of the button
 * @attribute color-backgroundHover | transparent | red | background color of the button on hover
 * @attribute color-border | currentColor | currentColor | color of the border
 * @attribute color-borderHover | currentColor | red | color of the border on hover
 * @attribute color-text | currentColor | | color of the text
 * @attribute color-textHover | currentColor | | color of the text on hover
 * @attribute link-textContent | -- | Get Started | success message
 * @attribute link-href | / | https://cdn.lj.dev/web-components | text appears on hover
 * @attribute link-title | -- | learn more | selector for the target element
 * @attribute link-rel | -- | external | selector for the target element
 * @attribute transition-duration | .3s| .4s | selector for the target element
 * @attribute stylesheet-textContent | -- | -- | injects css into custom stylesheet

 */
class LinkButton extends HTMLElement {
	// reference to class itself
	get c() { return LinkButton };


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"color-accent": "lightblue",
			"color-background": "transparent",
			"color-backgroundHover": "lightblue",
			"color-border": "currentColor",
			"color-borderHover": "lightblue",
			"color-primary": "currentColor",
			"color-secondary": "currentColor",
			"color-text": "currentColor",
			"color-textHover": "currentColor",
			"link-textContent": "",
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

// ELEMENTS
static get els() {
	return `
<div id="container">
	<a id="link"></a>
</div>`.trim();
}

// STYLES
static get styles() {
	return `
	<style>
	:host, * { box-sizing:border-box;margin:0; }
	#container {
		color: var(--color-primary, currentColor);
	}
	#link {
		align-items:center;
		border-color: var(--color-border, currentColor);
		border-radius:.35em;
		border-style:solid;
		border-size:.1em;
		color: var(--color-primary, currentColor);
		display:inline-flex;
		font-size:.9em;
		justify-content:center;
		padding:.5em 1em;
		text-decoration:none;
		transition-property: all;
		transition-duration: var(--transition-duration, .3s);
	}
	#link:hover {
		border-color: var(--color-backgroundHover, lightblue);
		background-color: var(--color-backgroundHover, lightblue);
	}

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
		ComponentUtils.updateManyElAttributes(this.c, this, this.c.ids);
		ComponentUtils.updateColorAttributes(this.c, this);
		this.refs.container.style.setProperty("--transition-duration", this?.transitionDuration ?? "0.3s");
	}
}

customElements.define("link-button", LinkButton);
export default LinkButton;
