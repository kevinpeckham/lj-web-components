// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";


/** @copyright 2024 Lightning Jar - "Quote Tout" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://lj-cdn.dev/web-components/quote-tout} */

/**
 * Quote Tout Web Component
 * @class
 * @extends HTMLElement
 * @published 2024-02-09
 * @classdesc Web component that displays a quote tout.
 * @attribute color-background       | transparent  | #D8E0ED | background color
 * @attribute color-border           | transparent | --     						| border color
 * @attribute color-primary          | currentColor | #0A2E7E           | primary text color
 * @attribute container-border-width | 0          | --                | border width of the container
 * @attribute container-height       | auto         | --                | height of the container
 * @attribute container-width        | 100%         | --                | width of the container
 * @attribute container-max-width    | none         |                 | max width of the container
 * @attribute container-padding      | 1.5em        | --                | padding of the container
 * @attribute font-family            | inherit      | --                | font family
 * @attribute quote-text             | --           | The Alliance model has been very successful for over 20 years. We are now leveraging our proven capabilities and processes to develop and deliver high-quality competency management and training solutions to new energy sectors. | text of the quote
 * @attribute quote-font-size        | 1rem         | --                | font size of the quote
 * @attribute quote-line-height			| 1.3          | --                | line height of the quote
 * @attribute attribution-text       | --           | -- | attribution for the quote
 * @attribute stylesheet-text        | --           | --                | inject css into stylesheet
 */
class QuoteTout extends HTMLElement {
// reference to class itself
get c() { return QuoteTout };

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
quoteText = "";
quoteFontSize = "";
quoteLineHeight = "";
attributionText = "";
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
    "color-border": "transparent",
    "color-primary": "currentColor",
		"container-border-width": "0",
		"container-height": "auto",
		"container-width": "100%",
		"container-max-width": "none",
		"container-padding": "1.5em",
		"font-family": "inherit",
    "quote-text": "",
		"quote-font-size": "1rem",
		"quote-line-height": "1.3",
    "attribution-text": "",
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
		--quote-font-size: ${this.quoteFontSize};
		--quote-line-height: ${this.quoteLineHeight};"
	>
	<div id="mark-container">
		<div id="mark">“</div>
	</div>
  <i id="quote">${this.quoteText}</i>
  ${this.attributionText ? `<div id="attribution">${this.attributionText}</div>` : ""}
</div>
`.trim();
}

// PREFLIGHT
get preflight() {
	return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor} html,:host {line-height:1.2;}`
}

// STYLES
get styles() {
return `
<style id="preflight">${this.preflight}</style>
<style id="base">
host:, * { margin:0; box-sizing:border-box ; }
#container {
  background: var(--color-background, transparent);
	border: var(--container-border-width, 0) solid var(--color-border, transparent);
  border-radius: .3em;
	border-width: var(--container-border-width, 1px);
  color: var(--color-primary, currentColor);
	font-family: ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
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
	/*overflow:hidden;*/
	position:relative;
	width:3rem;
}
#mark {
	font-size:6em;
	color:var(--color-primary, currentColor);
	height:3rem;
	line-height:1;
	vertical-align: middle;
}
#quote {
	display:block;
	font-size:var(--quote-font-size, 1rem);
	line-height:var(--quote-line-height, 1.3);
	margin-bottom:1rem;
	text-style:italic;
}
#attribution {
  color: var(--color-secondary, currentColor);
  font-size:.85em;
  font-style:italic;
  font-weight:400;
  line-height:1.3;
	margin-bottom:1rem;
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
customElements.define("quote-tout", QuoteTout);
export default QuoteTout;
