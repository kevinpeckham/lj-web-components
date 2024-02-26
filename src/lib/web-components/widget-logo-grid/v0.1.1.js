// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";
// @ts-expect-error yep got it
import SubWidgetContainer from "/e/wc/sub-widget-container@0.1.1.min.js";
// @ts-expect-error yep got it
import SubWidgetText from "/e/wc/sub-widget-text@0.1.1.min.js";
// @ts-expect-error yep got it
import LogoGrid from "/e/wc/logo-grid@0.1.1.min.js";



/** @copyright 2024 Lightning Jar - "WidgetLogoGrid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-logo-grid} */

/**
 * Widget Heading Web Component
 * @name WidgetLogoGrid
 * @classduration of the transition effect
 * @published 2024-02-14
 * @requires ComponentUtils
 * @requires SubWidgetContainer
 * @requires SubWidgetText
 * @requires LogoGrid
 * @classdesc Defines web component that represents a logo grid widget.
 * @attribute button-href | -- | -- | url for the button
 * @attribute button-text | -- | -- | text for the button
 * @attribute button-title | -- | -- | title for the button
 * @attribute color-accent | lightblue | -- | color of the text
 * @attribute color-background | -- | -- | color of the widget background
 * @attribute color-primary | currentColor | -- | color of the text
 * @attribute color-secondary | currentColor | -- | color of...
 * @attribute container-padding | 4rem | -- | padding for the container
 * @attribute heading-text | -- | -- | text for the heading
 * @attribute meta-text | -- | -- | text for the meta category
 * @attribute grid-columns-2xl | 7 | -- | # of columns @ 2xl (>= 1536px)
 * @attribute grid-columns-xl | 6 | -- | # of columns @ xl (>= 1280px)
 * @attribute grid-columns-lg | 5 | -- | # of columns @ lg (>= 1024px)
 * @attribute grid-columns-md | 4 | -- | # of columns @ md (>= 768px)
 * @attribute grid-columns-sm | 3 | -- | # of columns @ sm (>= 640px)
 * @attribute grid-columns-xs | 2 | -- | # of columns @ xs (>= 420px)
 * @attribute grid-columns-xxs | 1 | -- | # of columns @ xxs (< 420px)
 * @attribute grid-column-gap-2xl | 2rem | -- | gap between columns @ 2xl (>= 1536px)
 * @attribute grid-column-gap-xl | 1.75rem | -- | gap between columns @ xl (>= 1280px)
 * @attribute grid-column-gap-lg | 1.5rem | -- | gap between columns @ lg (>= 1024px)
 * @attribute grid-column-gap-md | 1.5rem | -- | gap between columns @ md (>= 768px)
 * @attribute grid-column-gap-sm | 1.25rem | -- | gap between columns @ sm (>= 640px)
 * @attribute grid-column-gap-xs | 1rem | -- | gap between columns @ xs (>= 420px)
 * @attribute grid-column-gap-xxs | 0.5rem | -- | gap between columns @ xxs (< 420px)
 * @attribute grid-row-gap-2xl | 1.5rem | -- | gap between rows @ 2xl (>= 1536px)
 * @attribute grid-row-gap-xl | 1.5rem | -- | gap between rows @ xl (>= 1280px)
 * @attribute grid-row-gap-lg | 1.5rem | -- | gap between rows @ lg (>= 1024px)
 * @attribute grid-row-gap-md | 1.5rem | -- | gap between rows @ md (>= 768px)
 * @attribute grid-row-gap-sm | 1.5rem | -- | gap between rows @ sm (>= 640px)
 * @attribute grid-row-gap-xs | 1.5rem | -- | gap between rows @ xs (>= 420px)
 * @attribute grid-row-gap-xxs | 1.5rem | -- | gap between rows  @ xxs (< 420px)
 * @attribute grid-stagger | off | -- | stagger the tiles - "off" or "on" @ 2xl (>= 1536px)
 * @attribute grid-stagger-2xl | 3.5rem | -- | distance to stagger tiles @ 2xl breakpoint
 * @attribute grid-stagger-xl | 3rem | -- | distance to stagger tiles @ xl (>= 1280px)
 * @attribute grid-stagger-lg | 2rem | -- | distance to stagger tiles @ lg (>= 1024px)
 * @attribute grid-stagger-md | 2rem | -- | distance to stagger tiles @ md (>= 768px)
 * @attribute grid-stagger-sm | 2rem | -- | distance to stagger tiles @ sm (>= 640px)
 * @attribute grid-stagger-xs | 1.5rem | -- | distance to stagger tiles @ xs (>= 420px)
 * @attribute grid-stagger-xxs | 0 | -- | distance to stagger tiles @ xxs (< 420px)
 * @attribute grid-stylesheet | -- | -- | inject css into the grid inner stylesheet
 * @attribute tile-border-radius | 2.5% | -- | border radius (rounded edges) of the tile
 * @attribute tile-color-background | transparent | -- | background color of the tile
 * @attribute tile-aspect-ratio | -- | -- | the aspect ratio of the tile
 * @attribute tile-opacity | 100% | -- | default opacity of tile
 * @attribute tile-opacity-hover | 100% | -- | opacity of tile on hover
 * @attribute tile-padding | -- | -- | padding around tile
 * @attribute tile-transition-duration | 0.3s | -- | duration of the transition effect
 * @attribute tile-transition-property | opacity | -- | transition property to animate
 * @attribute tile-stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute tiles-data | [] | -- | json data for the logo grid
 * @attribute widget-text | -- | -- | text for the widget
 * @attribute stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute data-json-url | -- | /e/wc/widget-logo-grid.json | url of remote json data
 * @note
 */
class WidgetLogoGrid extends HTMLElement {

	// reference to class itself
	get c() { return WidgetLogoGrid };

	// PROPERTIES
	buttonHref = "";
	buttonText = "";
	buttonTitle = "";
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";
	colorSecondary = "";
	containerPadding = "";
	headingText = "";
	metaText = "";
	gridColumnGap2xl = "";
	gridColumnGapXl = "";
	gridColumnGapLg = "";
	gridColumnGapMd = "";
	gridColumnGapSm = "";
	gridColumnGapXs = "";
	gridColumnGapXxs = "";
	gridColumns2xl = "";
	gridColumnsXl = "";
	gridColumnsLg = "";
	gridColumnsMd = "";
	gridColumnsSm = "";
	gridColumnsXs = "";
	gridColumnsXxs = "";
	gridRowGap2xl = "";
	gridRowGapXl = "";
	gridRowGapLg = "";
	gridRowGapMd = "";
	gridRowGapSm = "";
	gridRowGapXs = "";
	gridRowGapXxs = "";
	gridStagger = "";
	gridStagger2xl = "";
	gridStaggerXl = "";
	gridStaggerLg = "";
	gridStaggerMd = "";
	gridStaggerSm = "";
	gridStaggerXs = "";
	gridStaggerXxs = "";
	gridStylesheet = "";
	tileAspectRatio = "";
	tileBorderRadius = "";
	tileColorBackground = "";
	tileOpacity = "";
	tileOpacityHover = "";
	tilePadding = "";
	tileTransitionDuration = "";
	tileTransitionProperty = "";
	tilesData = "";
	tileStylesheet = "";
	widgetText = "";
	stylesheet = "";
	dataJsonUrl = "";

// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string } }
 */
static get attributes() {
	const values = {
		// sub-widget-container attributes
		"button-href": "",
		"button-text": "",
		"button-title": "",
		"color-accent": "lightblue",
		"color-background": "transparent",
		"color-primary": "currentColor",
		"color-secondary": "currentColor",
		"container-padding": "4rem",
		"heading-text": "",
		"meta-text": "",
		// grid attributes
		"grid-column-gap-2xl": "2rem",
		"grid-column-gap-xl": "1.75rem",
		"grid-column-gap-lg": "1.5rem",
		"grid-column-gap-md": "1.5rem",
		"grid-column-gap-sm": "1.25rem",
		"grid-column-gap-xs": "1rem",
		"grid-column-gap-xxs": "0.5rem",
		"grid-columns-2xl": "8",
		"grid-columns-xl": "7",
		"grid-columns-lg": "6",
		"grid-columns-md": "4",
		"grid-columns-sm": "3",
		"grid-columns-xs": "2",
		"grid-columns-xxs": "1",
		"grid-row-gap-2xl": "1.5rem",
		"grid-row-gap-xl": "1.5rem",
		"grid-row-gap-lg": "1.5rem",
		"grid-row-gap-md": "1.5rem",
		"grid-row-gap-sm": "1.5rem",
		"grid-row-gap-xs": "1.5rem",
		"grid-row-gap-xxs": "1.5rem",
		"grid-stagger": "off",
		"grid-stagger-2xl": "3.5rem",
		"grid-stagger-xl": "3rem",
		"grid-stagger-lg": "2rem",
		"grid-stagger-md": "2rem",
		"grid-stagger-sm": "2rem",
		"grid-stagger-xs": "1.5rem",
		"grid-stagger-xxs": "0",
		"grid-stylesheet": "",
		"tile-aspect-ratio": "",
		"tile-border-radius": "2.5%",
		"tile-color-background": "transparent",
		"tile-opacity": "100%",
		"tile-opacity-hover": "100%",
		"tile-padding": "",
		"tile-transition-duration": "0.3s",
		"tile-transition-property": "opacity",
		"tile-stylesheet": "",
		"tiles-data": "[]",
		// widget text attributes
		"widget-text": "",
		// inner stylesheet
		"stylesheet": "",
		// data url
		"data-json-url": "",

	};
return values;
}

// get observed attributes
static get observedAttributes() { return Object.keys(this.attributes) }

// get default value for an attribute
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }



// ELEMENTS
// in this case just for documentation - not used in the code
/** @param {{[key:string]: string}} content */
static els(content) {
	return `
<style id="stylesheet">
<div id="container">
	<div id="container-inner">
		<sub-widget-container>
			<logo-grid></logo-grid>
			<sub-widget-text></sub-widget-text>
		</sub-widget-container>
	</div>
</div>`.trim();
}

// IDS
static get ids() {
	return [...`${this.els}`.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
}

// constructor
constructor() {
	super();

	// programattically create getters and setters for each observed attribute
	ComponentUtils.createOAGS(this.c, this);

	// create a shadow root
	this.attachShadow({ mode: "open" });

	// build template
	const template = this.buildTemplate();

	// append template to shadow root
	this.shadowRoot?.appendChild(template.content.cloneNode(true));

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);

	// update attributes
	this.updateAttributes();

	// fetch data
	// this.fetchData();
}

	// CONNECTED CALLBACK
	connectedCallback() { this.fetchData(); }

	// ATTRIBUTE CHANGED CALLBACK
	attributeChangedCallback() {}

	// METHODS
	updateAttributes() {
		// update css custom color properties
		// this.refs.container.style.setProperty("--color-accent", this.colorAccent);
		// this.refs.container.style.setProperty("--color-background", this.colorBackground);
		// this.refs.container.style.setProperty("--color-primary", this.colorPrimary);
		// this.refs.container.style.setProperty("--color-secondary", this.colorSecondary);

		// update the inner stylesheet
		this.refs.stylesheet.textContent = this.getAttribute("stylesheet");
	}

/** @param {*} [data] */
buildLogoGridAttributes(data) {

	const d = data ?? this;

	// 1a. Iterated Grid attributes
	// string to hold the attribute string
	let attributes = {}
	let attributesString = "";
	const gridAttrPrefixes = "grid-stagger grid-column-gap grid-row-gap grid-columns".split(" ");
	// iterate through attribute prefixes -- e.g. grid-stagger...
	for (const prefix of gridAttrPrefixes) {
		//iterate through bs and add atts to string  -- e.g. grid-stagger-2xl, grid-stagger-xl... etc.
		for (const bp of ComponentUtils.breakpoints) {
			const attr = `${prefix}-${bp}`;
			const camel = ComponentUtils.kebabToCamel(attr);
			// @ts-expect-error - fix later
			const value = data?.[attr] ?? this?.[camel] ?? "";
			if (value && value!=this.c.getDefault(attr)) attributesString += `${attr}="${value}" \n`;
		}
	}
	// 1b. More Grid attributes
	attributesString += `grid-stagger="${data?.['grid-stagger'] ?? this.gridStagger}" \n`;
	attributesString += `stylesheet="${data?.['grid-stylesheet'] ?? this.gridStylesheet}" \n`;

	// 2. Tile
	const tileAttrSuffixes = "aspect-ratio border-radius color-background opacity opacity-hover padding transition-duration transition-property stylesheet".split(" ");
	// iterate through attribute suffixes -- e.g. tile-aspect-ratio...
	for (const suffix of tileAttrSuffixes) {
		const attr = `tile-${suffix}`;
		const camel = ComponentUtils.kebabToCamel(attr);
		// @ts-expect-error - fix later
		const value = data?.[attr] ?? this?.[camel] ?? "";
		if (value && value!=this.c.getDefault(attr)) attributesString += `${attr}="${value}" \n`;
	}

	return attributesString;
}
/** @param {*} [data] */
buildLogoGridHTML(data) {
	const tilesDataString = data && data['tiles-data'] ? JSON.stringify(data['tiles-data']) : this.tilesData;
	return `
	<logo-grid
		${this.buildLogoGridAttributes(data)}
		tiles-data='${tilesDataString}'
	></logo-grid>
`}
/** @param { string } [slot] */
/** @param {*} [data] */
buildSubWidgetContainerHTML(slot, data) {
	return `
	<sub-widget-container
		${ data?.['button-href'] || this.buttonHref ? `button-href="${data?.['button-href'] ?? this.buttonHref}"` : "" }
		${ data?.['button-text'] || this.buttonText ? `button-text="${data?.['button-text'] ?? this.buttonText}"` : "" }
		${ data?.['button-title'] || this.buttonTitle ? `button-title="${data?.['button-title'] ?? this.buttonTitle}"` : "" }
		${ data?.['color-accent'] || this.colorAccent ? `color-accent="${data?.['color-accent'] ?? this.colorAccent}"` : "" }
		${ data?.['color-background'] || this.colorBackground ? `color-background="${data?.['color-background'] ?? this.colorBackground}"` : "" }
		${ data?.['color-primary'] || this.colorPrimary ? `color-primary="${data?.['color-primary'] ?? this.colorPrimary}"` : "" }
		${ data?.['color-secondary'] || this.colorSecondary ? `color-secondary="${data?.['color-secondary'] ?? this.colorSecondary}"` : "" }
		${ data?.['heading-text'] || this.headingText ? `heading-text="${data?.['heading-text'] ?? this.headingText}"` : "" }
		${ data?.['meta-text'] || this.metaText ? `meta-text="${data?.['meta-text'] ?? this.metaText}"` : "" }
		>${slot}
	</sub-widget-container>`
}
/** @param {*} [data] */
buildSubWidgetTextHTML(data) {
	return `
	<sub-widget-text
		${ this.colorPrimary ? `color-primary="${this.colorPrimary}"` : "" }
	>${ data?.['widget-text'] ?? this.widgetText ?? "" }</sub-widget-text>`
}

buildTemplate() {
	const template = document.createElement("template");

	// container
	const container = document.createElement("div");
	container.id = "container";

	// inner container
	const containerInner = document.createElement("div");
	containerInner.id = "container-inner";

	// sub-widget-container
	containerInner.innerHTML = this.buildSubWidgetContainerHTML(`
		${this.buildLogoGridHTML()}
		${this.buildSubWidgetTextHTML()}
	`);

	// preflight
	const preflight = document.createElement("link");
	preflight.rel = "stylesheet";
	preflight.href = "/e/wc/preflight.min.css";

	// user-editable stylesheet
	const userStylesheet = document.createElement("style");
	userStylesheet.id = "stylesheet";
	userStylesheet.textContent = this.stylesheet;

	// append elements
	container.appendChild(containerInner);
	template.content.appendChild(preflight);
	template.content.appendChild(userStylesheet);
	template.content.appendChild(container);

	return template;
}

/** @param {*} data */
rebuildWithNewData(data) {
	const shadowRoot = this.shadowRoot;
	const container = shadowRoot?.getElementById("container");
	const containerInner = shadowRoot?.getElementById("container-inner");
	const newContainerInner = document.createElement("div");
	newContainerInner.id = "container-inner";
	newContainerInner.innerHTML = this.buildSubWidgetContainerHTML(`
		${this.buildLogoGridHTML(data)
		}${this.buildSubWidgetTextHTML(data)}
	`, data);
	if (container && containerInner) {
		container?.replaceChild(newContainerInner, containerInner) };
}
fetchData() {
	// if no data url or it does not end in .json, return empty string
	if (!this.dataJsonUrl || !this.dataJsonUrl.includes('.json') ) return "";
	else {
  return /** @type {Promise<void>} */(new Promise((res, rej) => {
    fetch(`${this.dataJsonUrl}`)
      .then(data => data.json())
      .then((json) => {
				if (json) {
        this.rebuildWithNewData(json);
			}
        res();
      })
      .catch((error) => rej(error));
  }))
	}
}


}

customElements.define("widget-logo-grid", WidgetLogoGrid);
export default WidgetLogoGrid;
