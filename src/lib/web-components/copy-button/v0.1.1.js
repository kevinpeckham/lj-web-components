// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Copy Button" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Copy Button Web Component
 * @name CopyButton
 * @class
 * @unpublished
 * @requires ComponentUtils
 * @extends HTMLElement
 * @classdesc Defines web component that renders a button that copies text to the user's clipboard. The text to be copied is specified by the data-target-selector attribute.  All of the text content of the target element will be copied to the clipboard.
 * @attribute color-accent | blue | lightblue| color of the hover state of button
 * @attribute color-background | transparent | rgb(255 255 255 / .05) | background color of the button
 * @attribute color-primary | currentColor | -- | color of the button
 * @attribute message-textContent |  copied! | -- | success message
 * @attribute title-textContent |  copy | -- | text appears on hover
 * @attribute target-selector | -- | p | selector for the target element
 * @attribute size-width | 28px | 28px | button outer size
 * @attribute size-height | 28px | 28px | button outer size
 * @attribute stylesheet-textContent | -- | -- | injects css into custom stylesheet

 */
class CopyButton extends HTMLElement {
	// reference to class itself
	get c() { return CopyButton };


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"color-accent": "lightblue",
			"color-background": "transparent",
			"color-primary": "currentColor",
			"message-textContent": "copied!",
			"title-textContent": "copied!",
			"target-selector": "",
			"button-title": "copy to clipboard",
			"size-width": "28px",
			"size-height": "28px",
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
	<div id="message">copied!</div>
	<div id="title">copy to clipboard</div>
	<svg id="icon" xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24'>
		<path id="initial" d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2'/>
		<path id="success" d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4'/>
	</svg>
</div>`.trim();
}

	// STYLES
	static get styles() {
		return `
		<style>
		:host, * { box-sizing:border-box;margin:0; }
		#container{
			background-color: var(--color-background, transparent);
			border:solid .1em color-mix(in srgb,currentColor 50%,transparent);
			color:var(--color-primary, currentColor);
			cursor:pointer;
			font-size:calc(var(--size-width, 1.5em) * .45);
			height:2.22em;
			opacity:.6;
			padding:.3em;
			position:relative;
			width:2.22em;
		}
		#container:hover {
			opacity:1;
			color: var(--color-accent, currentColor)
		}
		#container, div {
			align-items:center;
			border-radius:.25em;
			display:flex;
			justify-content:center;
		}
		#container div {
			background-color:color-mix(in srgb,var(--color-accent) 12%,black);
			color: currentColor;
			font-size:.8em;
			letter-spacing:.05em;
			opacity:0;
			padding:.15em .35em;
			position:absolute;
			top:120%;
			transition:opacity .15s;
			white-space:nowrap;
		}
		#container #title {
			transition: opacity .15s 1.5s;
		}
		svg {
			fill:none;
			height:auto;
			pointer-events:none;
			stroke:currentColor;
			stroke-width:1;
			width:100%;
		}
		path {
			stroke-linecap:round;
			stroke-linejoin:round;
			transition:opacity .15s;
		}
		#container:hover #title { opacity:1 }
		#success { opacity:0}
		#container.success {opacity:1; color:var(--color-accent)}
		#container.success #success { opacity:1 }
		#container.success #message { opacity:1 }
		#container.success #initial { opacity:0 }
		#container.success #title { opacity:0; transition:opacity 0s 0s; }


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

		// get selector
		// @ts-expect-error - yes, it's really there
		const selector = /** @type {string} */ this?.targetSelector ?? "";

		// container
		const container = /** @type {HTMLButtonElement} */ this.refs.container;

		// // get message element
		const message = /** @type {HTMLDivElement} */ this.refs.message;

		// get svg paths
		const initial = /** @type {SVGPathElement} */ this.refs.initial;
		const success = /** @type {SVGPathElement} */ this.refs.success;

		// get target element
		const target = /** @type {HTMLElement | null | undefined} */ (
			selector ? document.querySelector(selector) : null
		);

		const targetContent = /** @type {string} */ (
			// @ts-expect-error - target might be an input or a textarea
			target?.value ?? target?.textContent ?? ""
		);

		// helper function to reveal / hide the copied icon
		const showCopied = () => {

			// reveal copied icon
			if (initial && success && message) {
				container.classList.add("success");
				// container.style.opacity = "1";
				// container.style.color = "var(--accent-color)";
				// initial.style.opacity = "0";
				// success.style.opacity = "1";
				// message.style.opacity = "1";
			}
		};
		function hideCopied() {
			// reveal copied icon
			if (initial && success && message) {
				container.classList.remove("success");
				// container.style.removeProperty("opacity");
				// container.style.removeProperty("color");
				// initial.style.opacity = "1";
				// success.style.opacity = "0";
				// message.style.opacity = "0";
			}
		}
		/**
		 * @type {string | number | NodeJS.Timeout | undefined}
		 */
		let timeout;
		container?.addEventListener("click", () => {
			// copy text to clipboard
			if (target && targetContent) {
				// clear timeout if it exists
				if (timeout) clearTimeout(timeout);
				navigator.clipboard
					.writeText(targetContent)
					.then(() => {
						// show copied icon
						showCopied();

						// hide copied icon after 2 seconds
						timeout = setTimeout(() => {
							hideCopied();
							clearTimeout(timeout);
						}, 1500);
					})
					.catch((err) => console.error("failed to copy text: ", err));
			} else {
				console.error("copy failed");
			}
		});
	}

	// ATTRIBUTE CHANGED CALLBACK
	attributeChangedCallback() {
		this.updateAttributes();
	}

	// METHODS
	updateAttributes() {
		ComponentUtils.updateManyElAttributes(this.c, this, this.c.ids);
		ComponentUtils.updateColorAttributes(this.c, this);
		ComponentUtils.updateSizeAttributes(this.c, this);
	}


}


customElements.define("copy-button", CopyButton);
export default CopyButton;
