// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";
// @ts-expect-error - type defs not available
import ScrollingStat  from "/e/wc/scrolling-stat@0.1.1.min.js";
// @ts-expect-error - type defs not available
import QuickGrid from "/e/wc/quick-grid@0.1.1.min.js";
// @ts-expect-error - type defs not available
import PageHeader from "/e/wc/page-header@0.1.1.min.js";

// TYPES
/** @typedef {{[key:string]: string | undefined; "value": string; "suffix": string | undefined; "caption": string | undefined; }} Stat */

/** @copyright 2024 Lightning Jar - "Widget Stats Header" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/widget-stats-header} */

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
	"grid-stylesheet": "",
	"header-stylesheet": "",
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
	"stat-stylesheet": "",
	"stylesheet": "",
};
return values;
}

buildStatHTML(/** @type {Stat} item */ stat) {
	const colorBackground = this.attValue("stat-color-background");
	const colorBorder = this.attValue("stat-color-border");
	const statMaxWidth = this.attValue("stat-max-width");
	const statPadding = this.attValue("stat-padding");
	const html = ComponentUtils.stringIfValue;
	return `
		<scrolling-stat animation-duration="600" animation-value-end="${stat.value}" ${html(colorBackground, `color-background="${colorBackground}" `)}${html(colorBorder, `color-border="${colorBorder}" `)}${html(statMaxWidth, `container-max-width="${statMaxWidth}" `)}${html(statPadding, `container-padding="${statPadding}" `)}${html(stat.caption, `caption-text="${stat.caption}" `)}${html(stat.suffix, `suffix-text="${stat.suffix}" `)}
		></scrolling-stat>`;
}

// HTML BUILDERS
buildGridHTML() {
	const /** @type {Stat[]} */ data = JSON.parse(this.attValue("stats-data-json")) ?? [];
	const grid = data.map((stat) => this.buildStatHTML(stat)).join("");
	return grid;
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}


// ELEMENTS
get els() {
	const html = ComponentUtils.stringIfValue;
	const stylesheet = this.attValue('stylesheet');
	const colorBackground = this.attValue('color-background');
	const colorBorder = this.attValue('color-border');
	const colorPrimary = this.attValue('color-primary');
	const fontFamily = this.attValue('font-family');
	const headingFontSizeXS = this.attValue('heading-font-size-xs');
	const headingFontSizeSm = this.attValue('heading-font-size-sm');
	const headingFontSizeMd = this.attValue('heading-font-size-md');
	const headingFontSizeLg = this.attValue('heading-font-size-lg');
	const headingFontSizeXl = this.attValue('heading-font-size-xl');
	const headingFontSize2xl = this.attValue('heading-font-size-2xl');
	const headingFontWeight = this.attValue('heading-font-weight');
	const headingMarginBottom = this.attValue('heading-margin-bottom');
	const headingText = this.attValue('heading-text');
	const subheadingFontSize = this.attValue('subheading-font-size');
	const subheadingFontWeight = this.attValue('subheading-font-weight');
	const subheadingMarginBottom = this.attValue('subheading-margin-bottom');
	const subheadingOpacity = this.attValue('subheading-opacity');
	const subheadingText = this.attValue('subheading-text');
	const headerStylesheet = this.attValue('header-stylesheet');

  return `
	${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div
	id="container"
	style="
		${html(colorPrimary, `--color-primary: ${colorPrimary}`)};
		${html(fontFamily, `--font-family: ${fontFamily}`)};
		">
	<page-header
		${html(colorBackground, `color-background="${colorBackground}"`)}
		${html(colorBorder, `color-border="${colorBorder}"`)}
		${html(colorPrimary, `color-primary="${colorPrimary}"`)}
		${html(headingFontSizeXS, `heading-font-size-xs="${headingFontSizeXS}"`)}
		${html(headingFontSizeSm, `heading-font-size-sm="${headingFontSizeSm}"`)}
		${html(headingFontSizeMd, `heading-font-size-md="${headingFontSizeMd}"`)}
		${html(headingFontSizeLg, `heading-font-size-lg="${headingFontSizeLg}"`)}
		${html(headingFontSizeXl, `heading-font-size-xl="${headingFontSizeXl}"`)}
		${html(headingFontSize2xl, `heading-font-size-2xl="${headingFontSize2xl}"`)}
		${html(headingFontWeight, `heading-font-weight="${headingFontWeight}"`)}
		${html(headingMarginBottom, `heading-margin-bottom="${headingMarginBottom}"`)}
		${html(headingText, `heading-text="${headingText}"`)}
		${html(subheadingFontSize, `subheading-font-size="${subheadingFontSize}"`)}
		${html(subheadingFontWeight, `subheading-font-weight="${subheadingFontWeight}"`)}
		${html(subheadingMarginBottom, `subheading-margin-bottom="${subheadingMarginBottom}"`)}
		${html(subheadingOpacity, `subheading-opacity="${subheadingOpacity}"`)}
		${html(subheadingText, `subheading-text="${subheadingText}"`)}
		${html(headerStylesheet, `stylesheet-text="${headerStylesheet}"`)}>
		<quick-grid>${this.buildGridHTML()}</quick-grid>
	</page-header>
</div>`.trim();
}

// STYLES
static get styles() {
return `
${ComponentUtils.preflight}
<style id="base">
	#container {
		color: var(--color-primary, currentColor);
		font-family: var(--font-family, inherit);
	}</style>`
}
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

// LIFECYCLE CALLBACKS
connectedCallback() {
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))
}
}

customElements.define("widget-stats-header", WidgetStatsHeader);
export default WidgetStatsHeader;


