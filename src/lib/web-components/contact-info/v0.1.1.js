// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";


/** @copyright 2024 Lightning Jar - "Contact Info" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://lj-cdn.dev/web-components/contact-info} */

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
 * @attribute stylesheet-text        | --           | --                | inject css into stylesheet
 */
class ContactInfo extends HTMLElement {
// reference to class itself
get c() { return ContactInfo };

// initialize variables
colorBackground = "";
colorBorder = "";
colorPrimary = "";
colorSecondary = "";
containerBorderWidth = "";
containerHeight = "";
containerWidth = "";
containerMaxWidth = "";
containerPadding = "";
contactsDataJson = "";
fontFamily = "";
headingText = "";
bodyText = "";
stylesheetText = "";

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
		"stylesheet-text": "",
	};
	return values;
}

// OBSERVED ATTRIBUTES
static get observedAttributes() { return Object.keys(this.attributes) }

// GET DEFAULT VALUE FOR AN ATTRIBUTE
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

/** @typedef {{[key:string]: unknown; "heading": [string]; "subheading": [string];"phone":string | undefined; "email":[string]; "address": string[] | undefined; "link-url": [string];}} Contact */

buildContactsHTML() {
	/** @param {Contact} contact */
	const buildContact = (contact) => {
		const phone = contact?.phone ?? '';
		const tel = phone ? phone.replace(/[+ -]/ig,'') : '' ;
		return `
				<!-- section icon list -->
				<div class="contact">

					<!-- Heading & Phone# row -->
					<div class="contact-heading-row">
						<div>${contact?.heading ?? ''}</div>
						${phone ? `<a href="tel:${tel}" title="call ${phone}">${phone}</a>` : ''}
						${!contact?.phone && contact?.email ? `<div>${contact?.email ?? ''}</div>` : ''}
					</div>

					<!-- subheading -->
					<div class="contact-subheading">${contact?.subheading ?? ''}</div>

					<!-- address -->
					<div class="contact-address">
						${contact?.address?.[0] ? `<div class="address-line">${contact?.address?.[0] ?? ''}</div>` : ''}
						${contact?.address?.[1] ? `<div class="address-line">${contact?.address?.[1] ?? ''}</div>` : ''}
						${contact?.address?.[2] ? `<div class="address-line">${contact?.address?.[2] ?? ''}</div>` : ''}
					</div>
				</div>`
	}

	const buildContacts = () => {
		return this.contactsData.map((
			/** @type {Contact} contact */
			contact) => buildContact(contact)).join("");
	}


	return buildContacts() ;
}

// DATA
get contactsData() {
	const result = JSON.parse(this.contactsDataJson) ?? "[]";
	return result;
}

// ELEMENTS
get els() {
return `
<div
	id="container"
	style="
		--color-background: ${this.colorBackground};
		--color-border: ${this.colorBorder};
		--color-primary: ${this.colorPrimary};
		--color-secondary: ${this.colorSecondary};
		--font-family: ${this.fontFamily};
		--container-height: ${this.containerHeight};
		--container-border-width: ${this.containerBorderWidth};
		--container-width: ${this.containerWidth};
		--container-max-width: ${this.containerMaxWidth};
		--container-padding: ${this.containerPadding};"
	>
	<div id="heading">${this.headingText}</div>
	<div id="info-grid">${this.buildContactsHTML()}</div>
	<div id="body">${this.bodyText}</div>
</div>
`.trim();
}

// PREFLIGHT
get preflight() {
	return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor} html,:host {line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body {margin:0;line-height:inherit}hr {height:0;color:inherit;border-top-width:1px}abbr:where([title]) {text-decoration:underline dotted}h1,h2,h3,h4,h5,h6 {font-size:inherit;font-weight:inherit}a {color:inherit;text-decoration:inherit}b,strong {font-weight:bolder} button,select {text-transform:none}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring {outline:auto}:-moz-ui-invalid {box-shadow:none}progress {vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button {height:auto}[type="search"] {-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration {-webkit-appearance:none}::-webkit-file-upload-button {-webkit-appearance:button;font:inherit}summary {display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin:0}fieldset {margin:0;padding:0}legend {padding:0}ol,ul,menu {list-style:none;margin:0;padding:0}dialog {padding:0}textarea {resize:vertical}input::placeholder,textarea::placeholder {opacity:1;color:theme("colors.gray.400", #9ca3af)}button,[role="button"] {cursor:pointer}:disabled {cursor:default}img,svg,video,canvas,audio,iframe,embed,object {display:block;vertical-align:middle}img,video {max-width:100%;height:auto}[hidden] {display:none}`
}

// STYLES
get styles() {
return `
<style id="preflight">${this.preflight}</style>
<style id="base">
host:, * { margin:0; box-sizing:border-box ; }
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
	width:100%;
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
.contact-heading-row {
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
</style><style id="stylesheet"></style>`
};

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

// CONSTRUCTOR
constructor() {
	super();

	// programattically create getters and setters for each observed attribute
	ComponentUtils.createOAGS(this.c, this);

	// create a shadow root
	this.attachShadow({ mode: "open" });

}

// LIFECYCLE CALLBACKS
connectedCallback() {
	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);
}}

customElements.define("contact-info", ContactInfo);
export default ContactInfo;
