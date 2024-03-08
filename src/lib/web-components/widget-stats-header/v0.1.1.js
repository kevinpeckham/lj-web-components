// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";
// @ts-expect-error - type defs not available
import ScrollingStat  from "/e/wc/scrolling-stat.0.1.1.min.js";
// @ts-expect-error - type defs not available
import QuickGrid from "/e/wc/quick-grid.0.1.1.min.js";
// @ts-expect-error - type defs not available
import PageHeader from "/e/wc/page-header.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Widget Stats Header" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-stats-header} */

/**
 * Widget Card Grid Web Component
 * @name WidgetStatsHeader
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of image tiles.
 *
 * PAGE HEADER
 * @attribute align-content | start | -- | how grid rows are positioned in the container
 * @attribute align-items | center | -- | how grid items are positioned in the container
 * @attribute color-accent | -- | -- | color of the text
 * @attribute color-background | transparent | #0B2E7E | background color of the header
 * @attribute color-primary | currentColor | white | color of the primary text
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
 * @attribute justify-content | center | -- | how grid items are positioned along the container main axis
 * @attribute justify-items | legacy | -- | how grid items are positioned along their inline axis
 * @attribute subheading-font-size | 1rem  | -- | font size of the subheading
 * @attribute subheading-font-weight | 400 | -- | font weight of the subheading
 * @attribute subheading-line-height | 1.2 | -- | line height of the subheading
 * @attribute subheading-margin-bottom | 2rem | -- | margin bottom of the subheading
 * @attribute subheading-text | -- | -- | caption displayed after number
 * @attribute subheading-opacity | .9 | -- | opacity of the subheading
 * @attribute stat-animation-duration | 800 | -- | duration of the stat animation in milliseconds
 * @attribute stat-color-background | transparent | rgb(255 255 255 / 4%) | background color of the stat
 * @attribute stat-color-primary | currentColor | white | color of the stat
 * @attribute stat-color-border | transparent | -- | border color of the stat
 * @attribute stat-padding | -- | -- | padding around stat
 * @attribute stat-max-width | -- | -- | max width of the stat
 *
 * DATA
 * @attribute stats-data-json | [] | [{"value":"40","suffix":"k","caption":"satisfied customers"},{"value":"16","suffix":"k","caption":"courses completed"},{"value":"57","suffix":"+","caption":"years of experience"},{"value":"10","suffix":"","caption":"awards received"}] | json data for the stats
 *
 * STYLESHEET
 * @attribute header-stylesheet | -- | -- | inject css into the <page-header> component
 * @attribute grid-stylesheet | -- | -- | inject css into the <quick-grid> component
 * @attribute stat-stylesheet | -- | -- | inject css into the <scrolling-stat> component
 * @attribute style | -- | -- | regular inline style on the component

 */
class WidgetStatsHeader extends HTMLElement {

	alignContent = "";
	alignItems = "";
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
	headingText = "";
	headingFontSizeXs = "";
	headingFontSizeSm = "";
	headingFontSizeMd = "";
	headingFontSizeLg = "";
	headingFontSizeXl = "";
	headingFontSize2xl = "";
	headingFontWeight = "";
	headingMarginBottom = "";
	justifyContent = "";
	justifyItems = "";
	subheadingFontSize = "";
	subheadingFontWeight = "";
	subheadingLineHeight = "";
	subheadingMarginBottom = "";
	subheadingText = "";
	subheadingOpacity = "";
	statAnimationDuration = "";
	statColorBackground = "";
	statColorPrimary = "";
	statColorBorder = "";
	statPadding = "";
	statMaxWidth = "";
	statsDataJson = "[]";
	headerStylesheet = "";
	gridStylesheet = "";
	statStylesheet = "";
	stylesheet = "";

// reference to class itself
get c() { return WidgetStatsHeader };



// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string | null } }
 */
static get attributes() {
const values = {
	"align-content": "start",
	"align-items": "center",
	"color-accent": "",
	"color-background": "transparent",
	"color-border": "transparent",
	"color-primary": "currentColor",
	"color-secondary": "currentColor",
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
	"heading-text": "",
	"heading-font-size-xs": "2.25rem",
	"heading-font-size-sm": "2.25rem",
	"heading-font-size-md": "2.5rem",
	"heading-font-size-lg": "2.65rem",
	"heading-font-size-xl": "3.5rem",
	"heading-font-size-2xl": "3.75rem",
	"heading-font-weight": "800",
	"heading-margin-bottom": "1rem",
	"justify-content": "center",
	"justify-items": "legacy",
	"subheading-font-size": "1rem",
	"subheading-font-weight": "400",
	"subheading-line-height": "1.2",
	"subheading-margin-bottom": "2rem",
	"subheading-text": "",
	"subheading-opacity": ".9",
	"stat-animation-duration": "800",
	"stat-color-background": "transparent",
	"stat-color-primary": "currentColor",
	"stat-color-border": "transparent",
	"stat-padding": "",
	"stat-max-width": "",
	"stats-data-json": "[]",

	/* stylesheet */
	"header-stylesheet": "",
	"grid-stylesheet": "",
	"stat-stylesheet": "",
	"stylesheet": "",

};
return values;
}

// OBSERVED ATTRIBUTES GETTER
static get observedAttributes() { return Object.keys(this.attributes) }

// ATTRIBUTE DEFAULT VALUE GETTER
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

/** @typedef {{[key:string]: string}} card */

// HTML BUILDERS
buildGridHTML() {

	/** @param {card} item */
	const buildStatHTML = (item) => {
		return `
			<scrolling-stat
				animation-duration="600",
				animation-value-end="${item.value}",
				${this.colorBackground ? `color-background="${this.statColorBackground}"` : ""},
				${this.colorBorder ? `color-border="${this.statColorBorder}"` : ""},
				${this.statMaxWidth ? `container-max-width="${this.statMaxWidth}"` : ""},
				${this.statPadding ? `container-padding="${this.statPadding}"` : ""},
				${item.caption ? `caption-text="${item.caption}"` : ""},
				${item.suffix ? `suffix-text="${item.suffix}"` : ""}
			>
			</scrolling-stat>`
	}

	const buildStatsHTML = () => {
		return this.data.map((
			/** @type {card} item */
			item) => buildStatHTML(item)).join("");
	}

	return buildStatsHTML() ;
}

// DATA
get data() {
	const result = JSON.parse(this.statsDataJson) ?? "[]";
	return result;
}


// ELEMENTS
get els() {
  return `
<style id="stylesheet">${this.stylesheet}</style>
<div
	id="container"
	style="
		--color-primary: ${this.colorPrimary};
		--font-family: ${this.fontFamily};
		">
	<!-- PageHeader -->
	<page-header
		color-background="${this.colorBackground}"
		color-border="${this.colorBorder}"
		${this.colorPrimary ? `color-primary="${this.colorPrimary}"` : ""}
		${this.headingFontSizeXs ? `heading-font-size-xs="${this.headingFontSizeXs}"` : ""}
		${this.headingFontSizeSm ? `heading-font-size-sm="${this.headingFontSizeSm}"` : ""}
		${this.headingFontSizeMd ? `heading-font-size-md="${this.headingFontSizeMd}"` : ""}
		${this.headingFontSizeLg ? `heading-font-size-lg="${this.headingFontSizeLg}"` : ""}
		${this.headingFontSizeXl ? `heading-font-size-xl="${this.headingFontSizeXl}"` : ""}
		${this.headingFontSize2xl ? `heading-font-size-2xl="${this.headingFontSize2xl}"` : ""}
		${this.headingFontWeight ? `heading-font-weight="${this.headingFontWeight}"` : ""}
		${this.headingMarginBottom ? `heading-margin-bottom="${this.headingMarginBottom}"` : ""}
		${this.headingText ? `heading-text="${this.headingText}"` : ""}
		${this.subheadingFontSize ? `subheading-font-size="${this.subheadingFontSize}"` : ""}
		${this.subheadingFontWeight ? `subheading-font-weight="${this.subheadingFontWeight}"` : ""}
		${this.subheadingMarginBottom ? `subheading-margin-bottom="${this.subheadingMarginBottom}"` : ""}
		${this.subheadingOpacity ? `subheading-opacity="${this.subheadingOpacity}"` : ""}
		${this.subheadingText ? `subheading-text="${this.subheadingText}"` : ""}
		${this.headerStylesheet ? `stylesheet-text="${this.headerStylesheet}"` : ""}
		>
		<quick-grid>${this.buildGridHTML()}</quick-grid>
		</page-header>
</div>`.trim();
}

get preflight() {
	return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}`
}

// STYLES
get styles() {
  return `
	<style id="preflight">${this.preflight}</style>
  <style id="base">
  :host, *:not(style) {
		display:block;
		box-sizing:border-box;
	}
	#container {
		color: var(--color-primary, currentColor);
		font-family: var(--font-family, inherit);
	}
</style>`
}
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
}
}

customElements.define("widget-stats-header", WidgetStatsHeader);
export default WidgetStatsHeader;


