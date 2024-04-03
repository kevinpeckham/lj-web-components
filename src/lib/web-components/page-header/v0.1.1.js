// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Page Header" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/page-header} */

/**
 * Page Header Web Component
 * @class
 * @extends HTMLElement
 * @published 2024-03-07
 * @classdesc Web component that displays a simple page header with a title and subtitle, and a slot for additional content.
 * @attribute color-accent           | currentColor | --                | accent color
 * @attribute color-background       | transparent  | #0A2E7E | background color
 * @attribute color-border           | currentColor | --     						| border color
 * @attribute color-primary          | currentColor | #fff               | primary text color
 * @attribute container-border-width  | 1px  | --                | border width of the container
 * @attribute container-padding-x-xs  | 16px | -- | min height @ screen width < 640 px
 * @attribute container-padding-x-sm  | 24px | -- | min height @ screen width > 640 px
 * @attribute container-padding-x-md  | 32px | -- | min height @ screen width > 768 px
 * @attribute container-padding-x-lg  | 32px | -- | min height @ screen width > 1024 px
 * @attribute container-padding-x-xl  | 80px | -- | min height @ screen width > 1280 px
 * @attribute container-padding-x-2xl | 80px | -- | min height @ screen width > 1536 px
 * @attribute container-padding-y-xs  | 48px | -- | min height @ screen width < 640 px
 * @attribute container-padding-y-sm  | 64px | -- | min height @ screen width > 640 px
 * @attribute container-padding-y-md  | 72px | -- | min height @ screen width > 768 px
 * @attribute container-padding-y-lg  | 80px | -- | min height @ screen width > 1024 px
 * @attribute container-padding-y-xl  | 96px | -- | min height @ screen width > 1280 px
 * @attribute container-padding-y-2xl | 96px | -- | min height @ screen width > 1536 px
 * @attribute font-family | inherit | -- | font family
 * @attribute heading-text | -- | About Us | page title
 * @attribute heading-font-size-xs  | 2.25rem | -- | size of heading @ screen width < 640 px
 * @attribute heading-font-size-sm  | 2.25rem | -- | size of heading @ screen width > 640 px
 * @attribute heading-font-size-md  | 2.5rem | -- | size of heading @ screen width > 768 px
 * @attribute heading-font-size-lg  | 2.65rem | -- | size of heading @ screen width > 1024 px
 * @attribute heading-font-size-xl  | 3.5rem | -- | size of heading @ screen width > 1280 px
 * @attribute heading-font-size-2xl | 3.75rem | -- | size of heading @ screen width > 1536 px
 * @attribute heading-font-weight | 800 | -- | font weight of the heading
 * @attribute heading-margin-bottom | 1rem | -- | margin bottom of the heading
 * @attribute subheading-font-size | 1rem  | -- | font size of the subheading
 * @attribute subheading-font-weight | 400 | -- | font weight of the subheading
 * @attribute subheading-line-height | 1.2 | -- | line height of the subheading
 * @attribute subheading-margin-bottom | 1rem | -- | margin bottom of the subheading
 * @attribute subheading-text | -- | widgets per lorem | caption displayed after number
 * @attribute subheading-opacity | .9 | -- | opacity of the subheading
 * @attribute stylesheet-text | -- | -- | inject css into stylesheet
 */
class PageHeader extends HTMLElement {
// reference to class itself
get c() { return PageHeader };

// ATTRIBUTES
/** @returns { { [key:string]: string } } */
static get attributes() {
  return {
		"color-accent": "currentColor",
    "color-background": "transparent",
    "color-border": "currentColor",
    "color-primary": "currentColor",
		"container-border-width": "1px",
		"container-padding-x-xs": "16px",
		"container-padding-x-sm": "24px",
		"container-padding-x-md": "32px",
		"container-padding-x-lg": "32px",
		"container-padding-x-xl": "80px",
		"container-padding-x-2xl": "80px",
		"container-padding-y-xs": "48px",
		"container-padding-y-sm": "64px",
		"container-padding-y-md": "72px",
		"container-padding-y-lg": "80px",
		"container-padding-y-xl": "96px",
		"container-padding-y-2xl": "96px",
		"font-family": "inherit",
		"heading-font-size-xs": "2.25rem",
		"heading-font-size-sm": "2.25rem",
		"heading-font-size-md": "2.5rem",
		"heading-font-size-lg": "2.65rem",
		"heading-font-size-xl": "3.5rem",
		"heading-font-size-2xl": "3.75rem",
		"heading-font-weight": "800",
		"heading-margin-bottom": "1rem",
		"heading-text": "",
		"subheading-font-size": "1rem",
		"subheading-font-weight": "400",
		"subheading-margin-bottom": "1rem",
		"subheading-opacity": ".9",
		"subheading-line-height": "1.2",
    "subheading-text": "",
    "stylesheet-text": "",
	};
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {

// helper function to create a single css variable
const cssVar = (/** @type {string} att */ att) => `--${att}: ${this.attValue(att)};`;
// helper function to create a list of css variables from which to generate css variables
const atts = Object.keys(this.c.attributes).filter((att) => !att.includes('stylesheet') && !att.includes('text'));
// create a list of css variables
const cssVars = atts.map(cssVar).join('\n');

return `
<style id="stylesheet">${this.attValue('stylesheet')}}</style>
<div
	id="container"
	style="${cssVars}"
	>
	<div id="inner">
  	<h1 id="heading">${this.attValue('heading-text')}</h1>
  	<div id="subheading">${this.attValue('subheading-text')}</div>
 	 <slot>${this.innerHTML}</slot>
	</div>
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
	align-items: center;
  background: var(--color-background, transparent);
	border-bottom-color: color-mix(in srgb, var(--color-border, currentColor) 20%, transparent);
	border-bottom-style: solid;
	border-bottom-width: var(--container-border-width, 1px);
  color: var(--color-primary, currentColor);
	display:grid;
	font-family: var(--font-family, inherit);
	grid-template-columns: repeat(1, minmax(0, 1fr));
	height: auto;
	line-height: 1.2;
	min-height:100px;
  padding: var(--container-padding-y-xs) var(--container-padding-x-xs, 16px);
	width:100%;
}
@supports not (color-mix(in srgb, var(--color-border, currentColor) 20%, transparent)) {
border-bottom-color: var(--color-border, currentColor);
}
@media (min-width: 640px) {
	#container {
		padding:var(--container-padding-y-sm) var(--container-padding-x-sm, 24px);
	}
}
@media (min-width: 768px) {
	#container {
		padding:72px var(--container-padding-x-md, 32px) 72px;
	}
}
@media (min-width: 1024px) {
	#container {
		padding:80px var(--container-padding-x-lg, 32px) 80px;
	}
}
@media (min-width: 1280px) {
	#container {
		padding:96px var(--container-padding-x-xl, 80px) 96px;
	}
}
@media (min-width: 1536px) {
	#container {
		padding:96px var(--container-padding-x-2xl, 80px) 96px;
	}
}
#heading{
  font-size: var(--heading-font-size-xs, 2.25rem);
	font-weight: var(--heading-font-weight, 800);
	margin-bottom: var(--heading-margin-bottom, 1rem);
	max-height:fit-content;
	-webkit-font-smoothing: auto;
	-moz-osx-font-smoothing: auto;
}
@media (min-width: 640px) {
	#heading { var(--heading-font-size-sm, 2.25rem);}
}
@media (min-width: 768px) {
	#heading { font-size: var(--heading-font-size-md, 2.5rem); }
}
@media (min-width: 1024px) {
	#heading { font-size: var(--heading-font-size-lg, 2.65rem); }
}
@media (min-width: 1280px) {
	#heading { font-size: var(--heading-font-size-xl, 3.5rem); }
}
@media (min-width: 1536px) {
	#heading { font-size: var(--heading-font-size-2xl, 3.75rem); }
}
#subheading {
  color: var(--color-secondary, currentColor);
  font-size: var(--subheading-font-size, 1rem);
  font-weight: var(--subheading-font-weight, 400);
  line-height: var(--subheading-line-height, 1.2);
	margin-bottom: var(--subheading-margin-bottom, 1rem);
  opacity:var(--subheading-opacity, .9);
}
</style>`.trim()
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
	// create a shadow root
	this.attachShadow({ mode: "open" });
;
}
// CONNECTED CALLBACK
connectedCallback() {
	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))
}

}
customElements.define("page-header", PageHeader);
export default PageHeader;
