/** @copyright 2024 Lightning Jar - "Copyright Statement" web component - License MIT */
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
		return ["data-company-name"];
	}

	// constructor
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		// Create a template for the button
		const template = document.createElement("template");
		template.innerHTML = `
				<style>
					:host, * { box-sizing:border-box;margin:0;padding:0;}
					div {font-size:.8em;opacity:.6;white-space:pre;}
				</style>
				<div>Copyright &copy; ${new Date().getFullYear().toString()} <span id="company"></span>. All Rights Reserved.</div>
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
		// get company name
		const companyName = this.getAttribute("data-company-name") ?? "";
		const companyNameElement = this.shadowRoot?.getElementById("company");
		if (companyNameElement) companyNameElement.textContent = companyName;
	}
}
customElements.define("copyright-statement", CopyrightStatement);
export default CopyrightStatement;
