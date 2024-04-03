// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Quote Tout" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/cta-tout} */

/**
 * Quote Tout Web Component
 * @class
 * @extends HTMLElement
 * @published 2024-02-09
 * @classdesc Web component that displays a quote tout.
 * @attribute color-background       | transparent  | #E2F4F2 | background color
 * @attribute color-border           | transparent | --     						| border color
 * @attribute color-primary          | currentColor | #0A2E7E           | primary text color
 * @attribute container-border-width | 0          | --                | border width of the container
 * @attribute container-height       | auto         | --                | height of the container
 * @attribute container-width        | 100%         | --                | width of the container
 * @attribute container-max-width    | none         | --               | max width of the container
 * @attribute container-padding      | 1.5em        | --                | padding of the container
 * @attribute font-family            | inherit      | --                | font family
 * @attribute heading-text           | --           | Competency Solutions | heading text
 * @attribute heading-font-size      | 1.15rem         | --                | font size of the heading
 * @attribute heading-font-weight    | 700          | --                | font weight of the heading
 * @attribute heading-line-height      | 1.3          | --                | line height of the heading
 * @attribute heading-margin-bottom  | .35rem       | --                | margin bottom of the heading
 * @attribute subheading-text        | --           | Improve Individual & Organizational Capabilities | subheading text
 * @attribute subheading-font-size   | .95rem         | --                | font size of the subheading
 * @attribute subheading-font-weight | 600          | --                | font weight of the subheading
 * @attribute subheading-line-height | 1.3          | --                | line height of the subheading
 * @attribute subheading-margin-bottom | .8rem       | --                | margin bottom of the subheading
 * @attribute body-text              | --           | A variety of solutions to help companies improve individual and organizational capabilities through the development and assurance of individual and organizational competence. | text of the body
 * @attribute body-font-size         | 1rem         | --                | font size of the body
 * @attribute body-line-height       | 1.3          | --                | line height of the body
 * @attribute body-margin-bottom     | 1.35rem      | --                | margin bottom of the body
 * @attribute link-text							| --           | Learn More | text of the link
 * @attribute link-url							| --           | / | href of the link
 * @attribute attribution-text       | --           | -- | caption displayed after number
 * @attribute stylesheet        | --           | --                | inject css into stylesheet
 */
class CtaTout extends HTMLElement {

get c() { return CtaTout };

// ATTRIBUTES
	/** @returns { { [key:string]: string } } */
static get attributes() {
  return {
    "color-background": "transparent",
    "color-border": "transparent",
    "color-primary": "currentColor",
		"container-border-width": "0",
		"container-height": "auto",
		"container-width": "100%",
		"container-max-width": "none",
		"container-padding": "1.5em",
		"font-family": "inherit",
    "heading-text": "",
		"heading-font-size": "1.15rem",
		"heading-font-weight": "700",
		"heading-line-height": "1.3",
		"heading-margin-bottom": ".35rem",
    "subheading-text": "",
		"subheading-font-size": "1rem",
		"subheading-font-weight": "500",
		"subheading-line-height": "1.2",
		"subheading-margin-bottom": ".8rem",
		"body-text": "",
		"body-font-size": "1rem",
		"body-line-height": "1.3",
		"body-margin-bottom": "1.35rem",
		"link-text": "",
		"link-url": "/",
    "stylesheet": "",
	};
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {
const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
const html = ComponentUtils.stringIfValue;
const stylesheet = this.attValue('stylesheet');
const heading = this.attValue('heading-text');
const subheading = this.attValue('subheading-text');
const body = this.attValue('body-text');
const link = this.attValue('link-text');
const linkUrl = this.attValue('link-url');
return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div id="container" style="${cssVars}">
	${html(heading, `<div id="heading">${heading}</div>`)}
	${html(subheading, `<div id="subheading">${subheading}</div>`)}
	${html(body, `<div id="body">${body}</div>`)}
	${html(link, `<a id="link" href="${linkUrl}">${link}</a>`, linkUrl)}
</div>
`.trim();
}

// STYLES
get styles() {
return `
${ComponentUtils.preflight}
<style id="base">
*:empty {display:none;}
#container {
  background: var(--color-background, transparent);
	border: var(--container-border-width, 0) solid var(--color-border, transparent);
  border-radius: .3em;
  color: var(--color-primary, currentColor);
	font-size: var(--body-font-size, 1rem);
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
	margin-bottom:var(--heading-margin-bottom, .35rem);
}
#subheading {
  color: var(--color-secondary, currentColor);
  font-size:var(--subheading-font-size, 1rem);
  font-style:italic;
  font-weight:var(--subheading-font-weight, 500);
  line-height:1.3;
	margin-bottom:var(--subheading-margin-bottom, .8rem);
  opacity:1;
}
#body {
	font-size:var(--body-font-size, .85rem);
	line-height:var(--body-line-height, 1.3);
	margin-bottom:var(--body-margin-bottom, 1.35rem);
	opacity:.9;
}
#link {
	background-color:var(--color-primary, currentColor);
	border-radius:.35em;
	border:1px solid var(--color-border, transparent);
	color:var(--color-background, transparent);
	font-size:.8em;
	padding:.5em 1em;
	transition:background-color .15s, color .15s;
	width:fit-content;
}
#link:hover {
	background-color:var(--color-background, transparent);
	color:var(--color-primary, currentColor);
}</style>`
};

// TEMPLATE
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.styles}${this.els}`.trim();
	return template;
}

// CONSTRUCTOR
constructor() { super(); this.attachShadow({ mode: "open" }); }

// CONNECTED CALLBACK
connectedCallback() { this.shadowRoot?.appendChild(this.template.content.cloneNode(true)) }
}
customElements.define("cta-tout", CtaTout);
export default CtaTout;
