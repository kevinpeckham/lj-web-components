// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/**
 * @typedef BreakpointSize
 * @type {"2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs"}
 * */

	/**
 * @typedef Breakpoint
 * @type {{[key: string]: string; min: string; max: string}}
 */

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
 * @attribute body-text | -- | -- | text for the widget ! replaces widget-text
 * @attribute color-accent | lightblue | #00dcbb | color of the text
 * @attribute color-background | -- | #0A2F7E | color of the widget background
 * @attribute color-primary | currentColor | white | color of the text
 * @attribute color-secondary | currentColor | #00bc9c | color of...
 * @attribute container-padding | 4rem | 4rem 4rem 6rem 4rem | padding for the container
 * @attribute grid-columns-xxs | 1 | -- | # of columns @ xxs (< 420px)
 * @attribute grid-columns-xs | 2 | -- | # of columns @ xs (>= 420px)
 * @attribute grid-columns-sm | 3 | -- | # of columns @ sm (>= 640px)
 * @attribute grid-columns-md | 4 | -- | # of columns @ md (>= 768px)
 * @attribute grid-columns-lg | 5 | -- | # of columns @ lg (>= 1024px)
 * @attribute grid-columns-xl | 6 | -- | # of columns @ xl (>= 1280px)
 * @attribute grid-columns-2xl | 7 | -- | # of columns @ 2xl (>= 1536px)
 * @attribute grid-column-gap-xxs | 0.5rem | -- | gap between columns @ xxs (< 420px)
 * @attribute grid-column-gap-xs | 1rem | -- | gap between columns @ xs (>= 420px)
 * @attribute grid-column-gap-sm | 1.25rem | -- | gap between columns @ sm (>= 640px)
 * @attribute grid-column-gap-md | 1.5rem | -- | gap between columns @ md (>= 768px)
 * @attribute grid-column-gap-lg | 1.5rem | -- | gap between columns @ lg (>= 1024px)
 * @attribute grid-column-gap-xl | 1.75rem | -- | gap between columns @ xl (>= 1280px)
 * @attribute grid-column-gap-2xl | 2rem | -- | gap between columns @ 2xl (>= 1536px)
 * @attribute grid-row-gap-xxs | 1.5rem | -- | gap between rows  @ xxs (< 420px)
 * @attribute grid-row-gap-xs | 1.5rem | -- | gap between rows @ xs (>= 420px)
 * @attribute grid-row-gap-sm | 1.5rem | -- | gap between rows @ sm (>= 640px)
 * @attribute grid-row-gap-md | 1.5rem | -- | gap between rows @ md (>= 768px)
 * @attribute grid-row-gap-lg | 1.5rem | -- | gap between rows @ lg (>= 1024px)
 * @attribute grid-row-gap-xl | 1.5rem | -- | gap between rows @ xl (>= 1280px)
 * @attribute grid-row-gap-2xl | 1.5rem | -- | gap between rows @ 2xl (>= 1536px)
 * @attribute grid-stagger | off | on | stagger the tiles - "off" or "on" @ 2xl (>= 1536px)
 * @attribute grid-stagger-xxs | 0 | -- | distance to stagger tiles @ xxs (< 420px)
 * @attribute grid-stagger-xs | 1.5rem | 0 | distance to stagger tiles @ xs (>= 420px)
 * @attribute grid-stagger-sm | 2rem | -- | distance to stagger tiles @ sm (>= 640px)
 * @attribute grid-stagger-md | 2rem | -- | distance to stagger tiles @ md (>= 768px)
 * @attribute grid-stagger-lg | 2rem | -- | distance to stagger tiles @ lg (>= 1024px)
 * @attribute grid-stagger-xl | 3rem | -- | distance to stagger tiles @ xl (>= 1280px)
 * @attribute grid-stagger-2xl | 3.5rem | -- | distance to stagger tiles @ 2xl breakpoint
 * @attribute grid-stylesheet | -- | #container {margin-bottom:3rem} | inject css into the grid inner stylesheet
 * @attribute heading-font-weight | bold | -- | font weight of the heading
 * @attribute heading-margin-top | 0 | -- | margin top of the heading
 * @attribute heading-text | -- | You don't have to face these obstacles alone. | text for the heading
 * @attribute link-text | -- | -- | text for the button ! replaces button-text
 * @attribute link-title | -- | -- | title for the button
 * @attribute link-url | -- | -- | url for the button
 * @attribute button-text | -- | Contact Us | text for the button
 * @attribute button-href | -- | https://petroskills.com/about/the-alliance | href for the button
 * @attribute meta-margin-bottom | 1rem | -- | margin bottom of the meta text
 * @attribute meta-font-size | .75rem | -- | font size of the meta text
 * @attribute meta-font-weight | -- | -- | font weight of the meta text
 * @attribute meta-text | -- | Alliance Membership | text for the meta category
 * @attribute tile-aspect-ratio | -- | 290 / 128 | the aspect ratio of the tile
 * @attribute tile-border-radius | 2.5% | .5em | border radius (rounded edges) of the tile
 * @attribute tile-box-shadow | -- | -- | box shadow of the tile
 * @attribute tile-box-shadow-hover | -- | -- | box shadow of the tile on hover
 * @attribute tile-color-background | transparent | white | background color of the tile
 * @attribute tile-opacity | 100% | -- | default opacity of tile
 * @attribute tile-opacity-hover | 100% | -- | opacity of tile on hover
 * @attribute tile-padding | -- | 10px | padding around tile
 * @attribute tile-transition-duration | 0.3s | -- | duration of the transition effect
 * @attribute tile-transition-property | opacity | -- | transition property to animate
 * @attribute tile-stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute tiles-data | [] | [{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/01-bp.jpg","link-href":"https://bp.com"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/02-shell.jpg","link-href":"https://shell.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/03-halliburton.svg","link-href":"https://www.halliburton.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/04-saudi-aramco.jpg","link-href":"https://www.aramco.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/05-oxy.jpg","link-href":"https://oxy.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/06-chevron.jpg","link-href":"https://www.chevron.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/07-molgroup.jpg","link-href":"https://molgroup.info/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/08-sabic.jpg","link-href":"https://sabic.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/09-woodside-energy.webp","link-href":"https://www.woodside.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/10-ecopetrol.jpg","link-href":"https://www.ecopetrol-usa.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/11-omv.jpg","link-href":"https://www.omv.com/en"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/12-plains.jpg","link-href":"https://www.plainsallamerican.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/13-cheniere.jpg","link-href":"https://www.cheniere.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/14-oneok.jpg","link-href":"https://www.oneok.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/15-conoco-phillips.jpg","link-href":"https://www.conocophillips.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/16-methanex.jpg","link-href":"https://www.methanex.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/17-santos.svg","link-href":"https://www.santos.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/18-repsol.jpg","link-href":"https://www.repsol.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/19-heritage.jpg","link-href":"https://heritage.co.tt/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/20-ogci.jpg","link-href":"https://www.petroskills.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/21-ttg.svg","link-href":"https://www.petroskills.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/22-john-m-campbell.svg","link-href":"https://www.jmcampbell.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/23-utt.svg","link-href":"https://utt.edu.tt/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/24-rdc.jpg","link-href":"https://www.petroskills.com/"},{"name":"title","image-src":"https://thecompetencyalliance.com/microsite/TCA/alliance-logos/25-simulation-solutions.jpg","link-href":"https://simulation-solutions.com/"}] | json data for the logo grid
 * @attribute widget-text | -- | -- | text for the widget
 * @attribute stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute data-json-url | -- | -- | url of remote json data
 * @note
 */
class WidgetLogoGrid extends HTMLElement {

	// reference to class itself
	get c() { return WidgetLogoGrid };

	// PROPERTIES
	bodyText = "";
	buttonHref = "";
	buttonText = "";
	buttonTitle = "";
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";
	colorSecondary = "";
	containerPadding = "";
	gridColumnGapXxs = "";
	gridColumnGapXs = "";
	gridColumnGapSm = "";
	gridColumnGapMd = "";
	gridColumnGapLg = "";
	gridColumnGapXl = "";
	gridColumnGap2xl = "";
	gridColumnsXxs = "";
	gridColumnsXs = "";
	gridColumnsSm = "";
	gridColumnsMd = "";
	gridColumnsLg = "";
	gridColumnsXl = "";
	gridColumns2xl = "";
	gridRowGapXxs = "";
	gridRowGapXs = "";
	gridRowGapSm = "";
	gridRowGapMd = "";
	gridRowGapLg = "";
	gridRowGapXl = "";
	gridRowGap2xl = "";
	gridStagger = "";
	gridStaggerXxs = "";
	gridStaggerXs = "";
	gridStaggerSm = "";
	gridStaggerMd = "";
	gridStaggerLg = "";
	gridStaggerXl = "";
	gridStagger2xl = "";
	gridStylesheet = "";
	headingFontWeight = "";
	headingMarginTop = "";
	headingText = "";
	linkText = "";
	linkTitle = "";
	linkUrl = "";
	metaMarginBottom = "";
	metaFontSize = "";
	metaFontWeight = "";
	metaText = "";
	tileAspectRatio = "";
	tileBorderRadius = "";
	tileBoxShadow = "";
	tileBoxShadowHover = "";
	tileColorBackground = "";
	tileOpacity = "";
	tileOpacityHover = "";
	tilePadding = "";
	tileTransitionDuration = "";
	tileTransitionProperty = "";
	tileStylesheet = "";
	tilesData = "";
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
		"body-text": "",
		"button-href": "", // !! deprecated
		"button-text": "", // !! deprecated
		"button-title": "", // !! deprecated
		"color-accent": "lightblue",
		"color-background": "transparent",
		"color-primary": "currentColor",
		"color-secondary": "currentColor",
		"container-padding": "4rem",
		"grid-column-gap-xxs": "0.5rem",
		"grid-column-gap-xs": "1rem",
		"grid-column-gap-sm": "1.25rem",
		"grid-column-gap-md": "1.5rem",
		"grid-column-gap-lg": "1.5rem",
		"grid-column-gap-xl": "1.75rem",
		"grid-column-gap-2xl": "2rem",
		"grid-columns-xxs": "1",
		"grid-columns-xs": "2",
		"grid-columns-sm": "3",
		"grid-columns-md": "4",
		"grid-columns-lg": "6",
		"grid-columns-xl": "7",
		"grid-columns-2xl": "8",
		"grid-row-gap-xxs": "1.5rem",
		"grid-row-gap-xs": "1.5rem",
		"grid-row-gap-sm": "1.5rem",
		"grid-row-gap-md": "1.5rem",
		"grid-row-gap-lg": "1.5rem",
		"grid-row-gap-xl": "1.5rem",
		"grid-row-gap-2xl": "1.5rem",
		"grid-stagger": "off",
		"grid-stagger-xxs": "0",
		"grid-stagger-xs": "1.5rem",
		"grid-stagger-sm": "2rem",
		"grid-stagger-md": "2rem",
		"grid-stagger-lg": "2rem",
		"grid-stagger-xl": "3rem",
		"grid-stagger-2xl": "3.5rem",
		"grid-stylesheet": "",
		"heading-font-weight": "bold",
		"heading-margin-top": "0",
		"heading-text": "",
		"link-text": "",
		"link-title": "",
		"link-url": "",
		"meta-font-size": ".75rem",
		"meta-margin-bottom": "1rem",
		"meta-text": "",
		"tile-aspect-ratio": "",
		"tile-border-radius": "2.5%",
		"tile-box-shadow": "",
		"tile-box-shadow-hover": "",
		"tile-color-background": "transparent",
		"tile-opacity": "100%",
		"tile-opacity-hover": "100%",
		"tile-padding": "",
		"tile-transition-duration": "0.2s",
		"tile-transition-property": "opacity",
		"tile-stylesheet": "",
		"tiles-data": "[]",
		"widget-text": "", // !! deprecated
		"stylesheet": "",
	};
return values;
}

// get observed attributes
static get observedAttributes() { return Object.keys(this.attributes) }

// get default value for an attribute
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

// HTML BUILDERS
buildGridHTML() {

	/** @typedef {{[key:string]: unknown; name: string | undefined; "link-href": string | undefined; "link-title": string | undefined; "image-src": string | unknown;  }} Tile */

	/** @param {Tile} tile, @param {number} index */
	const buildTileHTML = (tile, index) => {
		let staggerClasses = "";
		ComponentUtils.breakpoints.forEach((/** @type {BreakpointSize} bp  */  bp) => {
			if (this.gridStagger && this.isTileInEvenRow(index, bp)) {  staggerClasses += `stagger-${bp} ` }
		});
		return `
			<a
				class="tile ${staggerClasses}"
				href="${tile['link-href']}"
				${tile['link-title'] ? `title="${tile['link-title']}"` : ''}
				>
				<img class="tile-image" src="${tile['image-src']}" ${ tile.name ? `alt="${tile.name}"` : ''} loading="lazy"/>
			</a>`
	}

	const buildTilesHTML = () => {
		let index = -1;
		return this.data.map((
			/** @type {Tile} tile */
			tile) => {
				index++;
				return buildTileHTML(tile, index)
			}).join("");
	}


	return buildTilesHTML() ;
}

// DATA
get data() {
	const result = JSON.parse(this.tilesData) ?? "[]";
	return result;
}

// ELEMENTS
// in this case just for documentation - not used in the code
get els() {
	return `
<style id="stylesheet"></style>
<div
	id="container"
	style="
	--color-accent:${this.colorAccent};
	--color-background:${this.colorBackground};
	--color-primary:${this.colorPrimary};
	--color-secondary:${this.colorSecondary};
	--container-padding:${this.containerPadding};
	--grid-column-gap-xxs:${this.gridColumnGapXxs};
	--grid-column-gap-xs:${this.gridColumnGapXs};
	--grid-column-gap-sm:${this.gridColumnGapSm};
	--grid-column-gap-md:${this.gridColumnGapMd};
	--grid-column-gap-lg:${this.gridColumnGapLg};
	--grid-column-gap-xl:${this.gridColumnGapXl};
  --grid-column-gap-2xl:${this.gridColumnGap2xl};
	--grid-columns-xxs:${this.gridColumnsXxs};
	--grid-columns-xs:${this.gridColumnsXs};
	--grid-columns-sm:${this.gridColumnsSm};
	--grid-columns-md:${this.gridColumnsMd};
	--grid-columns-lg:${this.gridColumnsLg};
	--grid-columns-xl:${this.gridColumnsXl};
	--grid-columns-2xl:${this.gridColumns2xl};
	--grid-row-gap-xxs:${this.gridRowGapXxs};
	--grid-row-gap-xs:${this.gridRowGapXs};
	--grid-row-gap-sm:${this.gridRowGapSm};
	--grid-row-gap-md:${this.gridRowGapMd};
	--grid-row-gap-lg:${this.gridRowGapLg};
	--grid-row-gap-xl:${this.gridRowGapXl};
	--grid-row-gap-2xl:${this.gridRowGap2xl};
	--grid-stagger:${this.gridStagger};
	--grid-stagger-xxs:${this.gridStaggerXxs};
	--grid-stagger-xs:${this.gridStaggerXs};
	--grid-stagger-sm:${this.gridStaggerSm};
	--grid-stagger-md:${this.gridStaggerMd};
	--grid-stagger-lg:${this.gridStaggerLg};
	--grid-stagger-xl:${this.gridStaggerXl};
	--grid-stagger-2xl:${this.gridStagger2xl};
	--grid-stylesheet:${this.gridStylesheet};
	--heading-font-weight:${this.headingFontWeight};
	--heading-margin-top:${this.headingMarginTop};
	--meta-font-size:${this.metaFontSize};
	--meta-margin-bottom:${this.metaMarginBottom};
	--meta-text:${this.metaText};
	--tile-aspect-ratio:${this.tileAspectRatio};
	--tile-border-radius:${this.tileBorderRadius};
	--tile-box-shadow:${this.tileBoxShadow};
	--tile-box-shadow-hover:${this.tileBoxShadowHover};
	--tile-color-background:${this.tileColorBackground};
	--tile-opacity:${this.tileOpacity};
	--tile-opacity-hover:${this.tileOpacityHover};
	--tile-padding:${this.tilePadding};
	--tile-transition-duration:${this.tileTransitionDuration};
	--tile-transition-property:${this.tileTransitionProperty};
	>
	<div id="container-inner">


	<!-- meta -->
	${this.metaText ? `<div id="meta" style="">${this.metaText}</div>` : ''}

	<!-- heading row -->
	${this.headingText || this.linkText || this.buttonText ? `<div id="heading-row">
		${ this.headingText ? `<h2 id="heading">${this.headingText}</h2>` : '' }
		${ (this.linkText || this.buttonText) && (this.linkUrl || this.buttonHref) ? `<a
			id="heading-link"
			title="${this.linkTitle ?? this.buttonTitle}"
			href="${this.linkUrl ?? this.buttonHref}">${this.linkText ? this.linkText : this.buttonText ?? ''}</a>` : '' }
	</div>` : ''}

	<!-- text -->
	${this.bodyText || this.widgetText ? `<p id="text">${this.bodyText ? this.bodyText : this.widgetText ?? ""}</p>` : ''}

	<!-- tile grid -->
	<div id="grid">${this.buildGridHTML()}</div>

	</div>
</div>`.trim();
}

get styles() {
	return `
	<style id="preflight">${ComponentUtils.preflight}</style>
  <style id="base">
	/* CONTAINER */
	#container {
		background-color: var(--color-background, transparent);
		color: var(--color-primary, currentColor);
		display:grid;
		align-items:start;
		padding:64px 16px 96px;
		max-width:100%;
	}
	@media (min-width: 640px) {
		#container {
			padding:64px 24px 96px;
		}
	}
	@media (min-width: 1024px) {
		#container {
			padding:48px 32px 76px;
		}
	}
	@media (min-width: 1280px) {
		#container {
			padding:64px 80px 96px;
		}
	}
	/* Meta */
	#meta {
		color: var(--color-accent, currentColor);
		font-size: 1rem;
		margin-bottom: var(--margin-bottom, 1.5rem);
		opacity:1;
		text-transform:uppercase;
	}
	@media (min-width: 640px) {
		#meta {
			font-size: var(--font-size, .85rem);
		}
	}
	/* Heading */
	#heading-row {
		align-items:center;
		display:block;
		margin-bottom:var(--heading-margin-bottom, 2rem);
		width:100%;
	}
	@media (min-width: 640px) {
		#heading-row {
			display:flex;
			justify-content:space-between;
		}
	}
	#heading {
		color: var(--color-primary, currentColor);
		font-weight: var(--heading-font-weight, 600);
		font-size: 1.5rem;
	}
	#heading-link {
		color: var(--color-accent, currentColor);
		display:block;
		font-size: .8rem;
		border: solid 1px var(--color-accent, currentColor);
		border-radius:.25rem;
		margin-bottom:.5rem;
		margin-top:2rem;
		max-width:fit-content;
		padding:.35rem .85rem;
		transition:background-color .15s ease;
		white-space:nowrap;
	}
	@media (min-width: 640px) {
		#heading {
			font-size: 1.5rem;
			margin-bottom: 0;
			margin-top:0;
		}
		#heading-link {
			margin-bottom:0;
			margin-top:0;
		}
	}
	@media (min-width: 768px) {
		#heading {
			font-size: 1.5rem;
		}
	}
	@media (min-width: 1024px) {
		#heading {
			font-size: 1.75rem;
		}
		#heading-link:hover {
			background-color:var(--color-accent, currentColor);
			color:var(--color-background, currentColor);
		}
	}
	#text {
		color: var(--color-primary, currentColor);
		display:block;
		max-width:none;
		margin-bottom:2rem;
		opacity:.9;
	}
	@media (min-width: 640px) {
		#text {
			padding:0;
			margin-bottom:48px;
			}
		}
	@media (min-width: 768px) {
		#text {
			max-width:576px;
			padding:0;
			margin-bottom:48px;
			}
		}
	@media (min-width: 1024px) {
	#text {
		max-width:576px;
		margin-bottom:56px;
		}
	}
	@media (min-width: 1280px) {
		#text {
			max-width:576px;
			margin-bottom:64px;
			}
		}
	#grid {
			display:grid;
			grid-template-columns: repeat(var(--grid-columns-xxs), minmax(0, 1fr));
			column-gap:var(--grid-column-gap-xxs, 0.5rem);
			row-gap:var(--grid-row-gap-xxs, 1.5rem);
			max-width:100%;
	}
	${this.allBreakPointsStyles()}



	@media (min-width: 1024px) {
		#grid {
			place-content:center;
		}
	}

	#grid .tile {
		aspect-ratio:var(--tile-aspect-ratio, 290 / 128);
		background-color:var(--tile-color-background, transparent);
		border-radius:var(--tile-border-radius, .35rem);
		box-shadow:var(--tile-box-shadow, none);
		display:flex;
		overflow:hidden;
		padding:var(--tile-padding, 10px);
		position:relative;
		max-width:100%;
	}
	#grid .tile .tile-image {
		min-width:100%;
		min-height:100%;
		object-fit:cover;
		object-position:center;
		overflow:hidden;
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

// CONNECTED CALLBACK
connectedCallback() {

// append template to shadow root
this.shadowRoot?.appendChild(this.template.content.cloneNode(true));

// define refs elements
this.refs = ComponentUtils.getRefs(this.c, this);

}

// ATTRIBUTE CHANGED CALLBACK
attributeChangedCallback() {}


	/**
 * Get the number of columns for a given breakpoint
 * @param {BreakpointSize} bp
 * @returns {number}
 */
getcolsNum(bp) {
	/** @type {"2xl" |  "Xl" | "Lg" | "Md" | "Sm" | "Xs" | "Xxs"} tc */
	const tc = ComponentUtils.titleCase(bp);
	/** @type { "gridColumns2xl" | "gridColumnsXl" | "gridColumnsLg" | "gridColumnsMd" | "gridColumnsSm" | "gridColumnsXs" | "gridColumnsXxs" } prop */
	const prop = `gridColumns${tc}`;
	return Number(this?.[prop] ?? "0") ?? 0;
}

/**
 * Get the number of columns for a given breakpoint
 * @param {number} tileIndex
 * @param {BreakpointSize} breakpoint
 * @returns {number}
 */
getTileColumn(tileIndex, breakpoint) {
	const colsNum = this.getcolsNum(breakpoint);
	return (tileIndex % colsNum) + 1;
}
/**
 * Get the number of columns for a given breakpoint
 * @param {number} tileIndex
 * @param {BreakpointSize} breakpoint
 * @returns {number}
 */
getTileRow(tileIndex, breakpoint) {
	const colsNum = this.getcolsNum(breakpoint);
	return Math.floor(tileIndex / colsNum) + 1;
}
/**
 * Get the number of columns for a given breakpoint
 * @param {number} tileIndex
 * @param {BreakpointSize} breakpoint
 * @returns {boolean}
 */
isTileInEvenRow(tileIndex, breakpoint) {
	// const colsNum = this.getcolsNum(breakpoint);
  const row = this.getTileRow(tileIndex, breakpoint);
  return (row % 2) === 0;
}
/** @param {BreakpointSize} bp */
breakPointStyle(bp) {

	const lc = bp.toLowerCase();
	/** @type {Breakpoint} map */
	const breakpoint = ComponentUtils.breakpointMap[bp];

	const min = breakpoint.min;
	const max = breakpoint.max;
	return `
	@media (min-width: ${min}) and (max-width: ${max}) {
		#grid {
			column-gap: var(--grid-column-gap-${bp});
			grid-template-columns: repeat(var(--grid-columns-${bp}), minmax(0,1fr));
			row-gap: var(--grid-row-gap-${bp});
		}
		#grid:has(.stagger-${bp}) {
			transform:translateX(calc(-.5 * var(--grid-stagger-${bp})));
			padding: 0em calc(0.5 * var(--grid-stagger-${bp}));
		}
		.stagger-${bp} {
			transform:translateX(var(--grid-stagger-${bp}));
		}
	}
`};

allBreakPointsStyles() {
	let str = '';
	ComponentUtils.breakpoints.forEach(( /** @type {BreakpointSize} bp */ bp) => str += this.breakPointStyle(bp))
	return str;

}

}

customElements.define("widget-logo-grid", WidgetLogoGrid);
export default WidgetLogoGrid;
