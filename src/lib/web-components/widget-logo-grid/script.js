// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";
// @ts-expect-error yep got it
import SubWidgetContainer from "/e/wc/sub-widget-container.min.js";;
// @ts-expect-error yep got it
import SubWidgetText from "/e/wc/sub-widget-text.min.js";
// @ts-expect-error yep got it
import LogoGrid from "/e/wc/logo-grid.min.js";



/** @copyright 2024 Lightning Jar - "WidgetLogoGrid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
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
 * @attribute button-href | -- | # | href for the button
 * @attribute button-text | -- | Become a Member | text for the button
 * @attribute button-title | -- | learn more | title for the button
  @attribute container-padding | 4rem | 4rem 4rem 6rem 4rem | padding for the container
 * @attribute color-accent | lightblue | #00dcbb | color of the text
 * @attribute color-background | -- | #0A2F7E | color of the widget background
 * @attribute color-primary | currentColor | white | color of the text
 * @attribute color-secondary | currentColor | #00bc9c | color of...
 * @attribute heading-text | -- | You don't have to face these obstacles alone. | text for the heading
 * @attribute meta-text | -- | Alliance Membership
 * @attribute widget-text | -- | Our diverse group of industry leaders collaborates to establish the oil &amp; gas industry benchmarks for competency development and similar standards for the NetZero and Renewables sectors. | text for the widget
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
 * @attribute grid-stagger | off | on | stagger the tiles - "off" or "on" @ 2xl (>= 1536px)
 * @attribute grid-stagger-2xl | 3.5rem | -- | distance to stagger tiles @ 2xl breakpoint
 * @attribute grid-stagger-xl | 3rem | -- | distance to stagger tiles @ xl (>= 1280px)
 * @attribute grid-stagger-lg | 2rem | -- | distance to stagger tiles @ lg (>= 1024px)
 * @attribute grid-stagger-md | 2rem | -- | distance to stagger tiles @ md (>= 768px)
 * @attribute grid-stagger-sm | 2rem | -- | distance to stagger tiles @ sm (>= 640px)
 * @attribute grid-stagger-xs | 1.5rem | -- | distance to stagger tiles @ xs (>= 420px)
 * @attribute grid-stagger-xxs | 0 | -- | distance to stagger tiles @ xxs (< 420px)
 * @attribute grid-stylesheet | -- | #container { margin-bottom:2rem } | inject css into the grid inner stylesheet
 * @attribute tile-border-radius | 2.5% | 1em | border radius (rounded edges) of the tile
 * @attribute tile-color-background | transparent | white | background color of the tile
 * @attribute tile-aspect-ratio | -- | 290 / 128 | the aspect ratio of the tile
 * @attribute tile-opacity | 100% | 85% | default opacity of tile
 * @attribute tile-opacity-hover | 100% | 100% | opacity of tile on hover
 * @attribute tile-padding | -- | 10px | padding around tile
 * @attribute tile-transition-duration | 0.3s | -- | duration of the transition effect
 * @attribute tile-transition-property | opacity | -- | transition property to animate
 * @attribute tile-stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute data-json | -- | [{"name":"BP","image-src":"https://competencyalliance.dev/images/logos/bp.webp","link-href":"https://bp.com"},{"name":"Shell","image-src":"https://competencyalliance.dev/images/logos/shell.webp","link-href":"https://shell.com"},{"name":"Halliburton","image-src":"https://competencyalliance.dev/images/logos/halliburton.webp","link-href":"https://halliburton.com"},{"name":"Aramco","image-src":"https://competencyalliance.dev/images/logos/saudi-aramco.webp","link-href":"https://aramco.com"},{"name":"Oxy","image-src":"https://competencyalliance.dev/images/logos/oxy.webp","link-href":"https://www.oxy.com/"},{"name":"Chevron","image-src":"https://competencyalliance.dev/images/logos/chevron.webp","link-href":"https://chevron.com/"},{"name":"MOL_Group","image-src":"https://competencyalliance.dev/images/logos/molgroup.webp","link-href":"https://molgroup.info/en"},{"name":"SABIC","image-src":"https://competencyalliance.dev/images/logos/sabic.webp","link-href":"https://www.sabic.com/en"},{"name":"Woodside_Energy","image-src":"https://competencyalliance.dev/images/logos/woodside.webp","link-href":"https://www.woodside.com"},{"name":"Eco_Petrol","image-src":"https://competencyalliance.dev/images/logos/ecopetrol.webp","link-href":"https://www.ecopetrol-usa.com/"},{"name":"OMV","image-src":"https://competencyalliance.dev/images/logos/omv.webp","link-href":"https://www.omv.com/en"},{"name":"Plains","image-src":"https://competencyalliance.dev/images/logos/plains.webp","link-href":"https://www.plains.com/"},{"name":"Cheniere","image-src":"https://competencyalliance.dev/images/logos/cheniere.webp","link-href":"https://www.cheniere.com/"},{"name":"ONEOK","image-src":"https://competencyalliance.dev/images/logos/oneok.webp","link-href":"https://www.oneok.com/"},{"name":"Conoco_Phillips","image-src":"https://competencyalliance.dev/images/logos/conoco-phillips.webp","link-href":"https://www.conocophillips.com/"},{"name":"Methanex","image-src":"https://competencyalliance.dev/images/logos/methanex.webp","link-href":"https://www.methanex.com/"},{"name":"Santos","image-src":"https://competencyalliance.dev/images/logos/santos.webp","link-href":"https://www.santos.com/"},{"name":"Repsol","image-src":"https://competencyalliance.dev/images/logos/repsol.webp","link-href":"https://www.repsol.com/en/index.cshtml"},{"name":"OGCI","image-src":"https://competencyalliance.dev/images/logos/ogci.webp","link-href":"https://www.ogci.com/"},{"name":"TTG","image-src":"https://competencyalliance.dev/images/logos/ttg.webp","link-href":"/"},{"name":"John_M_Campbell","image-src":"https://competencyalliance.dev/images/logos/john-m-campbell.webp","link-href":"https://www.jmcampbell.com/"},{"name":"UTT","image-src":"https://competencyalliance.dev/images/logos/utt.webp","link-href":"https://utt.edu.tt/"},{"name":"RDC","image-src":"https://competencyalliance.dev/images/logos/rdc.webp","link-href":"https://petroskills.com"},{"name":"Simulation_Solutions","image-src":"https://competencyalliance.dev/images/logos/simulation-solutions.webp","link-href":"https://www.simulationsolutions.com/"}] | json data for the logo grid

 * @note
 */
class WidgetLogoGrid extends HTMLElement {
	// reference to class itself
	get c() { return WidgetLogoGrid };

	// PROPERTIES
	buttonText = "";
	buttonTitle = "";
	buttonHref = "";
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";
	colorSecondary = "";
	headingText = "";
	containerPadding = "";
	metaText = "";
	stylesheet = "";
	widgetText = "";
	dataJson = "";
	gridColumnGap2xl = "1.5rem";
gridColumnGapXl = "1.5rem";
gridColumnGapLg = "1.5rem";
gridColumnGapMd = "1.5rem";
gridColumnGapSm = "1.25rem";
gridColumnGapXs = "1rem";
gridColumnGapXxs = "0.5rem";
gridRowGap2xl = "1.5rem";
gridRowGapXl = "1.5rem";
gridRowGapLg = "1.5rem";
gridRowGapMd = "1.5rem";
gridRowGapSm = "1.5rem";
gridRowGapXs = "1.5rem";
gridRowGapXxs = "1.5rem";
gridStagger = "off";
gridStagger2xl = "3.5rem";
gridStaggerXl = "3rem";
gridStaggerLg = "2rem";
gridStaggerMd = "2rem";
gridStaggerSm = "2rem";
gridStaggerXs = "1.5rem";
gridStaggerXxs = "0";
gridColumns2xl = "7";
gridColumnsXl = "6";
gridColumnsLg = "5";
gridColumnsMd = "4";
gridColumnsSm = "3";
gridColumnsXs = "2";
gridColumnsXxs = "1";
tileAspectRatio = "";
tileBorderRadius = "2.5%";
tileColorBackground = "";
tileOpacity = "";
tileOpacityHover = "";
tilePadding = "";
tileTransitionDuration = "";
tileTransitionProperty = "";
tileStylesheet = "";
gridStylesheet = "";

	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"button-href": "",
			"button-text": "",
			"button-title": "",
			"color-accent": "lightblue",
			"color-background": "transparent",
			"color-primary": "currentColor",
			"color-secondary": "currentColor",
			"heading-text": "",
			"meta-text": "",
			"container-padding": "4rem",
			"stylesheet": "",
			"widget-text": "",
			"data-json": "",
			"grid-stagger": "off",
			"grid-stagger-2xl": "3.5rem",
			"grid-stagger-xl": "3rem",
			"grid-stagger-lg": "2rem",
			"grid-stagger-md": "2rem",
			"grid-stagger-sm": "2rem",
			"grid-stagger-xs": "1.5rem",
			"grid-stagger-xxs": "0",
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
		};
	return values;
	}

	// get observed attributes
	static get observedAttributes() { return Object.keys(this.attributes) }

	// get default value for an attribute
	/** @param {string} attr */
	static getDefault(attr) { return this.attributes[attr] ?? "" }

// ELEMENTS
/** @param {{[key:string]: string}} content */
static els(content) {
	const {
		buttonHref,
		buttonText,
		buttonTitle,
		headingText,
		colorBackground,
		colorAccent,
		colorPrimary,
		colorSecondary,
		metaText,
		widgetText,
		dataJson,
		gridStagger,
		gridStagger2xl,
		gridStaggerXl,
		gridStaggerLg,
		gridStaggerMd,
		gridStaggerSm,
		gridStaggerXs,
		gridStaggerXxs,
		gridColumnGap2xl,
		gridColumnGapXl,
		gridColumnGapLg,
		gridColumnGapMd,
		gridColumnGapSm,
		gridColumnGapXs,
		gridColumnGapXxs,
		gridColumns2xl,
		gridColumnsXl,
		gridColumnsLg,
		gridColumnsMd,
		gridColumnsSm,
		gridColumnsXs,
		gridColumnsXxs,
		gridRowGap2xl,
		gridRowGapXl,
		gridRowGapLg,
		gridRowGapMd,
		gridRowGapSm,
		gridRowGapXs,
		gridRowGapXxs,
		gridStylesheet,
		tileAspectRatio,
		tileBorderRadius,
		tileColorBackground,
		tileOpacity,
		tileOpacityHover,
		tilePadding,
		tileTransitionDuration,
		tileTransitionProperty,
		tileStylesheet
	} = content
	return `
<div id="container">
	<sub-widget-container
		button-href="${buttonHref}"
		button-text="${buttonText}"
		button-title="${buttonTitle}"
		color-accent="${colorAccent}"
		color-background="${colorBackground}"
		color-primary="${colorPrimary}"
		color-secondary="${colorSecondary}"
		heading-text="${headingText}"
		meta-text="${metaText}">
		<logo-grid
			data-json='${dataJson}'
			${(gridStagger) ? 'grid-stagger="' + gridStagger + '"' : ''},
			${(gridStagger2xl) ? 'grid-stagger-2xl="' + gridStagger2xl + '"' : ''},
			${(gridStaggerXl) ? 'grid-stagger-xl="' + gridStaggerXl + '"' : ''},
			${(gridStaggerLg) ? 'grid-stagger-lg="' + gridStaggerLg + '"' : ''},
			${(gridStaggerMd) ? 'grid-stagger-md="' + gridStaggerMd + '"' : ''},
			${(gridStaggerSm) ? 'grid-stagger-sm="' + gridStaggerSm + '"' : ''},
			${(gridStaggerXs) ? 'grid-stagger-xs="' + gridStaggerXs + '"' : ''},
			${(gridStaggerXxs) ? 'grid-stagger-xxs="' + gridStaggerXxs + '"' : ''},
			${(gridColumnGap2xl) ? 'grid-column-gap-2xl="' + gridColumnGap2xl + '"' : ''},
			${(gridColumnGapXl) ? 'grid-column-gap-xl="' + gridColumnGapXl + '"' : ''},
			${(gridColumnGapLg) ? 'grid-column-gap-lg="' + gridColumnGapLg + '"' : ''},
			${(gridColumnGapMd) ? 'grid-column-gap-md="' + gridColumnGapMd + '"' : ''},
			${(gridColumnGapSm) ? 'grid-column-gap-sm="' + gridColumnGapSm + '"' : ''},
			${(gridColumnGapXs) ? 'grid-column-gap-xs="' + gridColumnGapXs + '"' : ''},
			${(gridColumnGapXxs) ? 'grid-column-gap-xxs="' + gridColumnGapXxs + '"' : ''},
			${(gridColumns2xl) ? 'grid-columns-2xl="' + gridColumns2xl + '"' : ''},
			${(gridColumnsXl) ? 'grid-columns-xl="' + gridColumnsXl + '"' : ''},
			${(gridColumnsLg) ? 'grid-columns-lg="' + gridColumnsLg + '"' : ''},
			${(gridColumnsMd) ? 'grid-columns-md="' + gridColumnsMd + '"' : ''},
			${(gridColumnsSm) ? 'grid-columns-sm="' + gridColumnsSm + '"' : ''},
			${(gridColumnsXs) ? 'grid-columns-xs="' + gridColumnsXs + '"' : ''},
			${(gridColumnsXxs) ? 'grid-columns-xxs="' + gridColumnsXxs + '"' : ''},
			${(gridRowGap2xl) ? 'grid-row-gap-2xl="' + gridRowGap2xl + '"' : ''},
			${(gridRowGapXl) ? 'grid-row-gap-xl="' + gridRowGapXl + '"' : ''},
			${(gridRowGapLg) ? 'grid-row-gap-lg="' + gridRowGapLg + '"' : ''},
			${(gridRowGapMd) ? 'grid-row-gap-md="' + gridRowGapMd + '"' : ''},
			${(gridRowGapSm) ? 'grid-row-gap-sm="' + gridRowGapSm + '"' : ''},
			${(gridRowGapXs) ? 'grid-row-gap-xs="' + gridRowGapXs + '"' : ''},
			${(gridRowGapXxs) ? 'grid-row-gap-xxs="' + gridRowGapXxs + '"' : ''},
			${(gridStylesheet) ? 'stylesheet="' + gridStylesheet + '"' : ''},
			${(tileAspectRatio) ? 'tile-aspect-ratio="' + tileAspectRatio + '"' : ''},
			${(tileBorderRadius) ? 'tile-border-radius="' + tileBorderRadius + '"' : ''},
			${(tileColorBackground) ? 'tile-color-background="' + tileColorBackground + '"' : ''},
			${(tileOpacity) ? 'tile-opacity="' + tileOpacity + '"' : ''},
			${(tileOpacityHover) ? 'tile-opacity-hover="' + tileOpacityHover + '"' : ''},
			${(tilePadding) ? 'tile-padding="' + tilePadding + '"' : ''},
			${(tileTransitionDuration) ? 'tile-transition-duration="' + tileTransitionDuration + '"' : ''},
			${(tileTransitionProperty) ? 'tile-transition-property="' + tileTransitionProperty + '"' : ''},
			${(tileStylesheet) ? 'tile-stylesheet="' + tileStylesheet + '"' : ''}>
			>
		</logo-grid>
		<p is="sub-widget-text" max-width="40rem">${widgetText}</p>
	</sub-widget-container>
</div>
</div>`.trim();
}

// STYLES
static get styles() {
	return `
<style>
	:host, * { box-sizing:border-box;margin:0; }
	#container {}
</style><style id="stylesheet"></style>`.trim();
}

// TEMPLATE
/** @param {{[key:string]: string}} content */
static template(content) {
	const template = document.createElement("template");
	template.innerHTML = `${this.styles}${this.els(content)}`.trim();
	return template;
}

	// IDS
	static get ids() {
		return [...`${this.els + this.styles}`.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
	}

	// constructor
	constructor() {
		super();

		// programattically create getters and setters for each observed attribute
    ComponentUtils.createOAGS(this.c, this);

		// create a shadow root
		this.attachShadow({ mode: "open" });

		// append the template content to the shadow DOM
		const content = {
			colorAccent: this.colorAccent,
			colorBackground: this.colorBackground,
			colorPrimary: this.colorPrimary,
			colorSecondary: this.colorSecondary,
			headingText: this.headingText,
			metaText: this.metaText ?? "test",
			buttonText: this.buttonText ?? "",
			buttonTitle: this.buttonTitle,
			buttonHref: this.buttonHref,
			widgetText: this.widgetText,
			dataJson: this.dataJson,
			gridStagger: this.gridStagger,
			gridStagger2xl: this.gridStagger2xl,
			gridStaggerXl: this.gridStaggerXl,
			gridStaggerLg: this.gridStaggerLg,
			gridStaggerMd: this.gridStaggerMd,
			gridStaggerSm: this.gridStaggerSm,
			gridStaggerXs: this.gridStaggerXs,
			gridStaggerXxs: this.gridStaggerXxs,
			gridColumnGap2xl: this.gridColumnGap2xl,
			gridColumnGapXl: this.gridColumnGapXl,
			gridColumnGapLg: this.gridColumnGapLg,
			gridColumnGapMd: this.gridColumnGapMd,
			gridColumnGapSm: this.gridColumnGapSm,
			gridColumnGapXs: this.gridColumnGapXs,
			gridColumnGapXxs: this.gridColumnGapXxs,
			gridColumns2xl: this.gridColumns2xl,
			gridColumnsXl: this.gridColumnsXl,
			gridColumnsLg: this.gridColumnsLg,
			gridColumnsMd: this.gridColumnsMd,
			gridColumnsSm: this.gridColumnsSm,
			gridColumnsXs: this.gridColumnsXs,
			gridColumnsXxs: this.gridColumnsXxs,
			gridRowGap2xl: this.gridRowGap2xl,
			gridRowGapXl: this.gridRowGapXl,
			gridRowGapLg: this.gridRowGapLg,
			gridRowGapMd: this.gridRowGapMd,
			gridRowGapSm: this.gridRowGapSm,
			gridRowGapXs: this.gridRowGapXs,
			gridRowGapXxs: this.gridRowGapXxs,
			gridStylesheet: this.gridStylesheet,
			tileAspectRatio: this.tileAspectRatio,
			tileBorderRadius: this.tileBorderRadius,
			tileColorBackground: this.tileColorBackground,
			tileOpacity: this.tileOpacity,
			tileOpacityHover: this.tileOpacityHover,
			tilePadding: this.tilePadding,
			tileTransitionDuration: this.tileTransitionDuration,
			tileTransitionProperty: this.tileTransitionProperty,
			tileStylesheet: this.tileStylesheet,
		};
		const template = this.c.template(content);
		this.shadowRoot?.appendChild(template.content.cloneNode(true))

		// define refs elements
    this.refs = ComponentUtils.getRefs(this.c, this);

		// update attributes
    this.updateAttributes();
	}

	// CONNECTED CALLBACK
	connectedCallback() {
		this.updateAttributes();
	}
	// ATTRIBUTE CHANGED CALLBACK
	attributeChangedCallback() {
		this.updateAttributes();
	}

	// METHODS
	updateAttributes() {
		ComponentUtils.updateManyElAttributes(this.c, this, this.c.ids);
		ComponentUtils.updateFontAttributes(this.c, this);
		ComponentUtils.updateColorAttributes(this.c, this);

		this.refs.stylesheet.textContent = this.getAttribute("stylesheet");

	}
}

customElements.define("widget-logo-grid", WidgetLogoGrid);
export default WidgetLogoGrid;
