// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// TYPES
/** @typedef {string | undefined } Su */
/** @typedef {"2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs"} BreakpointSize */
/** @typedef {{[key: string]: string; min: string; max: string}} Breakpoint */
/** @typedef {{[key:string]: unknown; name: Su; "image-src": Su; "link-href": Su; "link-title": Su; }} Tile */


/** @copyright 2024 Lightning Jar - "WidgetLogoGrid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/widget-logo-grid} */

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
 * @attribute tiles-data | [] | [{"name":"BP","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/01-bp.jpg","link-href":"https://bp.com"},{"name":"Shell","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/02-shell.jpg","link-href":"https://shell.com/"},{"name":"Halliburton","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/03-halliburton.svg","link-href":"https://www.halliburton.com/"},{"name":"Aramco","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/04-saudi-aramco.jpg","link-href":"https://www.aramco.com/"},{"name":"Oxy","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/05-oxy.jpg","link-href":"https://oxy.com/"},{"name":"Chevron","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/06-chevron.jpg","link-href":"https://www.chevron.com/"},{"name":"MOL Group","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/07-molgroup.jpg","link-href":"https://molgroup.info/"},{"name":"Sabic","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/08-sabic.jpg","link-href":"https://sabic.com/"},{"name":"Woodside_Energy","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/09-woodside-energy.webp","link-href":"https://www.woodside.com/"},{"name":"Eco_Petrol","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/10-ecopetrol.jpg","link-href":"https://www.ecopetrol-usa.com/"},{"name":"OMV","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/11-omv.jpg","link-href":"https://www.omv.com/en"},{"name":"Plains","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/12-plains.jpg","link-href":"https://www.plainsallamerican.com/"},{"name":"Cheniere","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/13-cheniere.jpg","link-href":"https://www.cheniere.com/"},{"name":"ONEOK","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/14-oneok.jpg","link-href":"https://www.oneok.com/"},{"name":"Conoco_Phillips","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/15-conoco-phillips.jpg","link-href":"https://www.conocophillips.com/"},{"name":"Methanex","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/16-methanex.jpg","link-href":"https://www.methanex.com/"},{"name":"Santos","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/17-santos.svg","link-href":"https://www.santos.com/"},{"name":"title","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/18-repsol.jpg","link-href":"https://www.repsol.com/"},{"name":"Heritage_Petroleum","image-src":"https://petroskills.com/microsite/TCA/alliance-logos/19-heritage.jpg","link-href":"https://heritage.co.tt/"}] | json data for the logo grid
 * @attribute widget-text | -- | -- | text for the widget
 * @attribute stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute data-json-url | -- | -- | url of remote json data
 * @note
 */
class WidgetLogoGrid extends HTMLElement {

get c() { return WidgetLogoGrid };

// ATTRIBUTES
/** @returns {{ [key:string]: string }} */
static get attributes() {
	return {
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
	}}


// HTML BUILDERS
/** @param {Tile} tile, @param {number} index */
buildTileHTML(tile, index) {
	const /** @type {BreakpointSize[]} */ bps = ComponentUtils.breakpoints;
	const staggerClasses = bps.map((bp) => this.attValue('grid-stagger') && this.isTileInEvenRow(index, bp) ? `stagger-${bp} ` : '' ).join("");
	const html = this.c.html;

	// values
	const name = tile.name ?? '';
	const imageSrc = tile['image-src'] ?? '';
	const linkHref = tile['link-href'] ?? '';
	const linkTitle = tile['link-title'] ?? '';
	const tag = linkHref ? 'a' : 'div';

	// return
	return !imageSrc ? '' : `
		<${tag} class="tile${html(staggerClasses, ` ${staggerClasses}`)}"
			${html(linkHref, `href="${linkHref}"`)}
			${html(linkTitle, `title="${linkTitle}"`)}>
			<img class="tile-image"
				${html(name, `alt="${name} logo"`) }
				${html(imageSrc, `src="${imageSrc}"`)}
				loading="lazy" />
		</${tag}>`
}
buildGridHTML() {
	// data
	const /** @type {Tile[]} */ data = JSON.parse(this.attValue('tiles-data')) ?? "[]";
	let index = -1;
	return data.map((tile) => {
		index++;
		return this.buildTileHTML(tile, index)
		}).join("");
}


static html = ComponentUtils.stringIfValue;

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
// in this case just for documentation - not used in the code
get els() {
	const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
	const html = this.c.html;
	const stylesheet = this.attValue('stylesheet');

	// values
	const meta = this.attValue('meta-text');
	const heading = this.attValue('heading-text');
	const buttonTitle = this.attValue('button-title');
	const linkTitle = buttonTitle ? buttonTitle : this.attValue('link-title') ?? '';
	const buttonHref = this.attValue('button-href');
	const linkUrl = buttonHref ? buttonHref : this.attValue('link-url') ?? '';
	const buttonText = this.attValue('button-text');
	const linkText = buttonText ? buttonText : this.attValue('link-text') ?? '';
	const widgetText = this.attValue('widget-text');
	const body = widgetText ? widgetText : this.attValue('body-text') ?? '';

	const grid = this.buildGridHTML();
	return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div id="container" style="${cssVars}">
	<div id="container-inner">
		${html(meta, `<div id="meta" style="">${meta}</div>`)}
		${html(heading, `<div id="heading-row">
			${html(heading, `<h2 id="heading">${heading}</h2>`)}
			${html(linkUrl, `<a id="heading-link" ${html( `title="${linkTitle}" `)} ${html( `href="${linkUrl}"`)}>${linkText}</a>`, buttonText)}
		</div>`)}
		${html(body, `<p id="text">${body}</p>`)}
		${html(grid, `<div id="grid">${grid}</div>`)}
	</div>
</div>`.trim();
}

get styles() {
	const pageXPadding = ComponentUtils.pageXPadding;
	return `
	${ComponentUtils.preflight}
  <style id="base">
	*:empty:not(img) {display:none}
	#container {
		background-color: var(--color-background, transparent);
		color: var(--color-primary, currentColor);
		display:grid;
		align-items:start;
		padding:64px ${pageXPadding.xxs} 96px;
		max-width:100%;
	}
	@media (min-width: 420px) {
		#container {
			padding:64px ${pageXPadding.xs} 96px;
		}
	}
	@media (min-width: 640px) {
		#container {
			padding:64px ${pageXPadding.sm} 96px;
		}
	}
	@media (min-width: 760px) {
		#container {
			padding:64px ${pageXPadding.md} 96px;
		}
	}
	@media (min-width: 1024px) {
		#container {
			padding:48px ${pageXPadding.lg} 76px;
		}
	}
	@media (min-width: 1280px) {
		#container {
			padding:64px ${pageXPadding.xl} 96px;
		}
	}
	@media (min-width: 1536px) {
		#container {
			padding:64px ${pageXPadding['2xl']} 96px;
		}
	}
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

constructor() { super(); this.attachShadow({ mode: "open" }) }
connectedCallback() { this.shadowRoot?.appendChild(this.template.content.cloneNode(true)) }


// Get the number of columns for a given breakpoint
getcolsNum(/** @type {BreakpointSize} */ bp) { return Number(this.attValue(`grid-columns-${bp}`) ?? "0") ?? 0; }

// Get the column for a given tile index at a given breakpoint
getTileColumn(/** @type {number} */ tileIndex, /** @type {BreakpointSize} */ bp) { return (tileIndex % this.getcolsNum(bp)) + 1 }

// Get the number of columns for a given breakpoint
getTileRow(/** @type {number} */ tileIndex, /** @type {BreakpointSize} */ bp) { return Math.floor(tileIndex / this.getcolsNum(bp)) + 1 }

//Get the number of columns for a given breakpoint
isTileInEvenRow(/** @type {number} */ tileIndex, /** @type {BreakpointSize} */ bp) { return (this.getTileRow(tileIndex, bp) % 2) === 0 }
/** @param {BreakpointSize} bp */

breakPointStyle(bp) {
	const /** @type {Breakpoint} */ bkp = ComponentUtils.breakpointMap[bp];
	return `
	@media (min-width: ${bkp.min}) and (max-width: ${bkp.max}) {
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
	const /** @type {BreakpointSize[]} */ bps = ComponentUtils.breakpoints;
	return bps.map((bp) => this.breakPointStyle(bp)).join("");
}
}

customElements.define("widget-logo-grid", WidgetLogoGrid);
export default WidgetLogoGrid;
