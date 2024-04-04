// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// TYPE DEFS
/** @typedef {{[key:string]: unknown; "heading": string | undefined; "subheading": string | undefined;"phone":string | undefined; "email": string | undefined; "address": string[] | undefined; "link-url": string | undefined;}} Contact */

/** @copyright 2024 Lightning Jar - "Contact Info" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/contact-info} */

/**
 * Contact Info Web Component
 * @class
 * @extends HTMLElement
 * @published 2024-03-11
 * @classdesc Web component that displays sidebar widget with contact information.
 * @attribute color-background       | transparent  | rgb(255 255 255 / 2.5%) | background color
 * @attribute color-border           | currentColor | --     						| border color
 * @attribute color-primary          | currentColor | --               | primary text color
 * @attribute color-secondary        | currentColor | --                | secondary text color
 * @attribute container-border-width | 1px          | --                | border width of the container
 * @attribute container-height       | auto         | --                | height of the container
 * @attribute container-width        | 100%         | --                | width of the container
 * @attribute container-max-width    | none         | 14rem                | max width of the container
 * @attribute container-padding      | 1.5em        | --                | padding of the container
 * @attribute font-family            | inherit      | --                | font family
 * @attribute heading-text           | --           | Customer Service                | characters displayed after number
 * @attribute body-text              | --           | General customer service is available from 8:00 a.m. - 4:30 p.m., Monday through Friday CST (-6:00 GMT). Emergency assistance is available 24 hours a day.
 * @attribute contacts-data-json      | --           | [{"heading":"General","subheading":"Registration & Support","phone":"+1 918-828-2504"},{"heading":"Toll Free","subheading":"North America","phone":"+1 800-821-5933"},{"heading":"24 Hour","subheading":"Emergency Only","phone":"+1 918-221-8049"}]                | json data for contact info
 * @attribute stylesheet        | --           | --                | inject css into stylesheet
 */
class ContactInfo extends HTMLElement {
// reference to class itself
get c() { return ContactInfo };

// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
static get attributes() {
	// attribute, default
	const values = {
		"color-background": "transparent",
		"color-border": "currentColor",
		"color-primary": "currentColor",
		"color-secondary": "currentColor",
		"container-border-width": "1px",
		"container-height": "auto",
		"container-width": "100%",
		"container-max-width": "none",
		"contacts-data-json": "[]",
		"container-padding": "1.5em",
		"font-family": "inherit",
		"heading-text": "",
		"body-text": "",
		"stylesheet": "",
	};
	return values;
}

// HELPER METHODS
attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

static buildContact(/** @type {Contact} contact */ contact) {
	const html = ComponentUtils.stringIfValue;
	const {address, email, heading, phone, subheading} = contact;
	const tel = phone ? phone.replace(/[+ -]/ig,'') : '' ;
	return `
			<div class="contact">
				<div class="contact-heading">
					${html(heading,`<div>${heading}</div>`)}
					${html(phone,`<a href="tel:${tel}" title="call ${phone}">${phone}</a>`)}
					${html(email,`<div>${contact?.email ?? ''}</div>`)}
				</div>
				${subheading ? `<div class="contact-subheading">${subheading}</div>` : ''}
				<div class="contact-address">
					${html(address?.[0],`<div class="address-line">${address?.[0]}</div>`)}
					${html(address?.[1], `<div class="address-line">${address?.[1]}</div>`)}
					${html(address?.[2],`<div class="address-line">${address?.[2]}</div>`)}
				</div>
			</div>`
}

// ELEMENTS
get els() {

// helper function shortcut
const html = ComponentUtils.stringIfValue;

// generate css vars
const atts = Object.keys(this.c.attributes).filter((att) => !att.includes('stylesheet') && !att.includes('text') && !att.includes('data') && !att.includes('link'));
const cssVars = atts.map(att => `--${att}: ${this.attValue(att)};`).join('\n');

// build contacts html
/** @type {Contact[]} data  */
const data = JSON.parse(this.attValue('contacts-data-json')) ?? "[]";
const contacts = data.map((contact) => this.c.buildContact(contact)).join("");

// values
const body = this.attValue('body-text');
const heading = this.attValue('heading-text');
const stylesheet = this.attValue('stylesheet');

return `
${html(stylesheet, `<style id="stylesheet">${this.attValue(stylesheet)}</style>`)}
<div id="container style="${cssVars}>
	${html(heading, `<div id="heading">${heading}</div>`)}
	<div id="info-grid">${contacts}</div>
	${html(body, `<div id="body">${body}</div>`)}
</div>
`.trim();
}

// STYLES
static get styles() {
return `
${ComponentUtils.preflight}
<style id="base">
host:, * { margin:0; box-sizing:border-box ; }
*:empty { display: none; }
#container {
	background: var(--color-background, transparent);
	border-radius: .3em;
	color: var(--color-primary, currentColor);
	font-family: var(--font-family, inherit);
	font-weight: 400;
	height: var(--container-height, auto);
	line-height: 1;
	padding: var(--container-padding, 1.5em);
	min-width: 300px;
	width: var(--container-width, 100%);
}
#heading{
	font-size:1.125em;
	font-weight: 500;
	margin-bottom: .75em;
	-webkit-font-smoothing: auto;
	-moz-osx-font-smoothing: auto;
	width:100%;
}
#info-grid {
	margin-bottom: .75em;
}
.contact {
	border-bottom: 1px solid var(--color-border, currentColor);
	border-left: 1px solid var(--color-border, currentColor);
	border-right: 1px solid var(--color-border, currentColor);
	padding: .75rem 1rem;
	max-width:100%;
}
.contact:first-child {
	border-top: 1px solid var(--color-border, currentColor);
	border-top-left-radius: .325em;
	border-top-right-radius: .325em;
	padding-top: 1rem;
}
.contact:last-child {
	border-bottom-left-radius: .325em;
	border-bottom-right-radius: .325em;
	padding-bottom: 1rem;
}
.contact-heading {
	display: flex;
	justify-content: space-between;
	margin-bottom: .5em;
	width:100%;
}
.contact-subheading {
	font-size: .85em;
	font-weight: 400;
	margin-bottom: .5em;
	opacity: .85;
}
.address-line {
	margin-bottom: .5em;
}
.address-line:last-child {
	margin-bottom: 0;
}
#body {
	color: var(--color-secondary, currentColor);
	font-size:.85em;
	font-weight:400;
	grid-column:1/span 2;
	line-height:1.3;
	opacity:.85;
}
</style>`
};

// TEMPLATE
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.c.styles}${this.els}`.trim();
	return template;
}

// CONSTRUCTOR
constructor() {
	super();
	this.attachShadow({ mode: "open" });
}

// CONNECTED CALLBACK
connectedCallback() {
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))
}}

customElements.define("contact-info", ContactInfo);
export default ContactInfo;
