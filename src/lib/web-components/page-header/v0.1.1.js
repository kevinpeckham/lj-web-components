// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";


/** @copyright 2024 Lightning Jar - "Page Header" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://lj-cdn.dev/web-components/page-header} */

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

// initialize variables
colorAccent = "";
colorBackground = "";
colorBorder = "";
colorPrimary = "";
containerBorderWidth = "";
containerPaddingXXs = "";
containerPaddingXSm = "";
containerPaddingXMd = "";
containerPaddingXLg = "";
containerPaddingXXl = "";
containerPaddingX2xl = "";
containerPaddingYXs = "";
containerPaddingYSm = "";
containerPaddingYMd = "";
containerPaddingYLg = "";
containerPaddingYXl = "";
containerPaddingY2xl = "";
fontFamily = "";
headingFontSizeXs = "";
headingFontSizeSm = "";
headingFontSizeMd = "";
headingFontSizeLg = "";
headingFontSizeXl = "";
headingFontSize2xl = "";
headingFontWeight = "";
headingMarginBottom = "";
headingText = "";
subheadingFontSize = "";
subheadingFontWeight = "";
subheadingLineHeight = "";
subheadingMarginBottom = "";
subheadingOpacity = "";
subheadingText = "";
stylesheetText = "";

// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
static get attributes() {
  // attribute, default
  const values = {
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
		--color-accent: ${this.colorAccent};
		--color-background: ${this.colorBackground};
		--color-border: ${this.colorBorder};
		--color-primary: ${this.colorPrimary};
		--font-family: ${this.fontFamily};
		--container-border-width: ${this.containerBorderWidth};
		--container-padding-x-xs: ${this.containerPaddingXXs};
		--container-padding-x-sm: ${this.containerPaddingXSm};
		--container-padding-x-md: ${this.containerPaddingXMd};
		--container-padding-x-lg: ${this.containerPaddingXLg};
		--container-padding-x-xl: ${this.containerPaddingXXl};
		--container-padding-x-2xl: ${this.containerPaddingX2xl};
		--container-padding-y-xs: ${this.containerPaddingYXs};
		--container-padding-y-sm: ${this.containerPaddingYSm};
		--container-padding-y-md: ${this.containerPaddingYMd};
		--container-padding-y-lg: ${this.containerPaddingYLg};
		--container-padding-y-xl: ${this.containerPaddingYXl};
		--container-padding-y-2xl: ${this.containerPaddingY2xl};
		--heading-font-size-xs: ${this.headingFontSizeXs};
		--heading-font-size-sm: ${this.headingFontSizeSm};
		--heading-font-size-md: ${this.headingFontSizeMd};
		--heading-font-size-lg: ${this.headingFontSizeLg};
		--heading-font-size-xl: ${this.headingFontSizeXl};
		--heading-font-size-2xl: ${this.headingFontSize2xl};
		--heading-font-weight: ${this.headingFontWeight};
		--heading-margin-bottom: ${this.headingMarginBottom};
		--subheading-font-size: ${this.subheadingFontSize};
		--subheading-font-weight: ${this.subheadingFontWeight};
		--subheading-line-height: ${this.subheadingLineHeight};
		--subheading-margin-bottom: ${this.subheadingMarginBottom};
		--subheading-opacity: ${this.subheadingOpacity};"
	>
	<div id="inner">
  	<h1 id="heading">${this.headingText}</h1>
  	<div id="subheading">${this.subheadingText}</div>
 	 <slot></slot>
	</div>
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
customElements.define("page-header", PageHeader);
export default PageHeader;
