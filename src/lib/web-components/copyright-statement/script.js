/** @copyright Lightning Jar 2024 - "Copyright Statement" web component */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/copyright-statment} */

/**
 * Copy Button Web Component
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that renders a button that copies text to the clipboard.

 *
 */
class CopyrightStatement extends HTMLElement {
	/**
	 * Attributes to observe for adding, removing, or changing.
	 * @static
	 * @returns {string[]} An array of attribute names to observe.
	 */
	static get observedAttributes() {
		return ["legal-name"];
	}

	// constructor
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		// create a template for the button
		const template = document.createElement("template");
		template.innerHTML = `
				<style>
					:host, * { box-sizing:border-box; margin:0; padding:0; }
					span { font-size:.8em; opacity:.6; white-space:pre; }
				</style>
		`;

		// append the template content to the shadow DOM
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}
	/**
	 * Method invoked when the custom element is first connected to the document's DOM. Defines DOM elements, adds css styling, and starts the observer.
	 * @method
	 * @returns {void}
	 * @summary Creates the shadow DOM, add styles, and starts the observer.
	 */
	connectedCallback() {
		// get full year
		const year = `${new Date().getFullYear()}`;

		// get legal name
		const legalName = this.getAttribute("legal-name") ?? "";
		const legalNameFormatted = legalName ? ` ${legalName}` : "";

		// add div to shadow root
		const span = document.createElement("span");
		span.textContent = `Copyright © ${year}${legalNameFormatted}. All Rights Reserved.`;
		this.shadowRoot?.appendChild(span);
	}
}
customElements.define("copyright-statement", CopyrightStatement);
export default CopyrightStatement;
