// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";

/** @copyright Lightning Jar 2024 - "Copyright Statement" web component */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/copyright-statment} */

/**
 * Copyright Statement Web Component
 * @name CopyrightStatement
 * @class
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc Defines web component that renders a button that copies text to the clipboard.
	* @attribute copyright-textContent | Copyright © | -- | text content of the copyright
 * @attribute name-textContent | -- | Lightning Jar. | legal name of copyright entity
 * @attribute statement-textContent | All rights reserved. | -- | text content of the statement
 * @attribute stylesheet-textContent | -- | -- | injects css into custom stylesheet
 * @attribute year-textContent | [currentYear] | -- | year of the copyright
 *
 */
class CopyrightStatement extends HTMLElement {

// reference to class itself
get c() { return CopyrightStatement };


// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string } }
 */
static get attributes() {
	const values = {
		"copyright-textContent": "Copyright ©",
		"name-textContent": "",
		"statement-textContent": "All rights reserved.",
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
<span id="container">
	<span id="copyright">Copyright ©</span>
	<span id="year"></span>
	<span id="name"></span>
	<span id="statement"> All Rights Reserved.</span>
</span>`.trim();
}

// STYLES
static get styles() {
	return `
<style>
	:host, * { box-sizing:border-box; margin:0; padding:0; }
	#container { font-size:.8em; opacity:.6; white-space:normal; }
</style>
`
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

// CONSTRUCTOR
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
	this.refs.year.textContent = `${new Date().getFullYear()}`;
}

}
customElements.define("copyright-statement", CopyrightStatement);
export default CopyrightStatement;
