// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";


/** @copyright 2024 Lightning Jar - "Quote Tout" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://lj-cdn.dev/web-components/cta-tout} */

/**
 * Quote Tout Web Component
 * @class
 * @extends HTMLElement
 * @published 2024-02-09
 * @classdesc Web component that displays a quote tout.
 * @attribute color-background       | transparent  | #E2F4F2 | background color
 * @attribute color-border           | currentColor | --     						| border color
 * @attribute color-primary          | currentColor | #0A2E7E           | primary text color
 * @attribute container-border-width | 1px          | --                | border width of the container
 * @attribute container-height       | auto         | --                | height of the container
 * @attribute container-width        | 100%         | --                | width of the container
 * @attribute container-max-width    | none         | 24rem                | max width of the container
 * @attribute container-padding      | 1.5em        | --                | padding of the container
 * @attribute font-family            | inherit      | --                | font family
 * @attribute heading-text           | --           | Competency Solutions | heading text
 * @attribute heading-font-size      | 1.15rem         | --                | font size of the heading
 * @attribute heading-font-weight    | 700          | --                | font weight of the heading
 * @attribute headingLineHeight      | 1.3          | --                | line height of the heading
 * @attribute subheading-text        | --           | Improve Individual & Organizational Capabilities | subheading text
 * @attribute subheading-font-size   | 1rem         | .9rem                | font size of the subheading
 * @attribute subheading-font-weight | 600          | --                | font weight of the subheading
 * @attribute subheading-line-height | 1.3          | --                | line height of the subheading
 * @attribute body-text              | --           | A variety of solutions to help companies improve individual and organizational capabilities through the development and assurance of individual and organizational competence. | text of the body
 * @attribute body-font-size         | 1rem         | .85rem                | font size of the body
 * @attribute body-line-height       | 1.3          | --                | line height of the body
 * @attribute link-font-size         | .8rem      | -- | font-size of the link
 * @attribute link-text							| --           | Learn More | text of the link
 * @attribute link-url							| --           | / | href of the link
 * @attribute attribution-text       | --           | -- | caption displayed after number
 * @attribute stylesheet-text        | --           | --                | inject css into stylesheet
 */
class CtaTout extends HTMLElement {
// reference to class itself
get c() { return CtaTout };

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
fontFamily = "";
headingText = "";
headingFontSize = "";
headingFontWeight = "";
headingLineHeight = "";
subheadingText = "";
subheadingFontSize = "";
subheadingFontWeight = "";
subheadingLineHeight = "";
bodyText = "";
bodyFontSize = "";
bodyLineHeight = "";
linkFontSize = "";
linkText = "";
linkUrl = "";
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
		"container-border-width": "1px",
		"container-height": "auto",
		"container-width": "100%",
		"container-max-width": "none",
		"container-padding": "1.5em",
		"font-family": "inherit",
    "heading-text": "",
		"heading-font-size": "1.15rem",
		"heading-font-weight": "700",
		"headingLineHeight": "1.3",
    "subheading-text": "",
		"subheading-font-size": ".9rem",
		"subheading-font-weight": "600",
		"subheading-line-height": "1.2",
		"body-text": "",
		"body-font-size": ".9rem",
		"body-line-height": "1.3",
		"link-font-size": ".8rem",
		"link-text": "",
		"link-url": "/",
    "stylesheet-text": "",
	};
  return values;
}

// OBSERVED ATTRIBUTES
static get observedAttributes() { return Object.keys(this.attributes) }

// GET DEFAULT VALUE FOR AN ATTRIBUTE
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }


// ELEMENTS
get els() {
return `
<div
	id="container"
	style="
		--color-background: ${this.colorBackground};
		--color-border: ${this.colorBorder};
		--color-primary: ${this.colorPrimary};
		--font-family: ${this.fontFamily};
		--container-border-width: ${this.containerBorderWidth};
		--container-height: ${this.containerHeight};
		--container-width: ${this.containerWidth};
		--container-max-width: ${this.containerMaxWidth};
		--container-padding: ${this.containerPadding};
		--heading-font-size: ${this.headingFontSize};
		--heading-font-weight: 700;
		--headingLineHeight: ${this.headingLineHeight};
		--subheading-font-size: ${this.subheadingFontSize};
		--subheading-font-weight: 500;
		--subheading-line-height: ${this.subheadingLineHeight};
		--body-font-size: ${this.bodyFontSize};
		--body-line-height: ${this.bodyLineHeight};
		--link-font-size: ${this.linkFontSize};
		"
	>
	<div id="heading">${this.headingText}</div>
  <div id="subheading">${this.subheadingText}</div>
	<div id="body">${this.bodyText}</div>
	<a id="link" href="${this.linkUrl}">${this.linkText}</a>
</div>
`.trim();
}

// PREFLIGHT
get preflight() {
	return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor} html,:host {line-height:1.2;} a {color:inherit;text-decoration:inherit}`
}

// STYLES
get styles() {
return `
<style id="preflight">${this.preflight}</style>
<style id="base">
host:, * { margin:0; box-sizing:border-box ; }
#container {
  background: var(--color-background, transparent);
	border: 1px solid var(--color-border, transparent);
  border-radius: .3em;
	border-width: var(--container-border-width, 1px);
  color: var(--color-primary, currentColor);
	font-family:var(--font-family, inherit);
  line-height: 1.2;
	outline: 1px solid var(--color-border, transparent);
	max-width: var(--container-max-width, none);
  padding: var(--container-padding, 1.5em);
	width: var(--container-width, 100%);
}
#mark-container {
	aspect-ratio: 1 / 1;
	align-items: center;
	background-color:transparent;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	margin-bottom:.5rem;
	position:relative;
	width:3rem;
}
#heading {
	display:block;
	font-size:var(--heading-font-size, 1rem);
	font-weight:700;
	line-height:var(--headingLineHeight, 1.3);
	margin-bottom:.5rem;
}
#subheading {
  color: var(--color-secondary, currentColor);
  font-size:var(--subheading-font-size, .9rem);
  font-style:italic;
  font-weight:var(--subheading-font-weight, 500);
  line-height:1.3;
	margin-bottom:1rem;
  opacity:1;
}
#body {
	font-size:var(--body-font-size, .85rem);
	line-height:var(--body-line-height, 1.3);
	margin-bottom:1.35rem;
	opacity:.9;
}
#link {
	background-color:var(--color-primary, currentColor);
	border-radius:.35em;
	border:1px solid var(--color-border, transparent);
	color:var(--color-background, transparent);
	font-size:var(--link-font-size, .8rem);
	padding:.5em 1em;
	transition:background-color .15s, color .15s;
	width:fit-content;
}
#link:hover {
	background-color:var(--color-background, transparent);
	color:var(--color-primary, currentColor);
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

	// binding the parent context to the methods
	this.connectedCallback = this.connectedCallback.bind(this);
}

// CONNECTED CALLBACK
connectedCallback() {
	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);
}

}
customElements.define("cta-tout", CtaTout);
export default CtaTout;
