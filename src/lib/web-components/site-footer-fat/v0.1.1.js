// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// type definitions
/** @typedef {{ label: string; url: string; title?: string; rel?: string; target?: string }} Link */
/** @typedef {{heading?: string | Link; links: Link[]}} LinkList */

/** @copyright Lightning Jar 2024 - "Site Footer" web component */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** @published 20240417 */
/** {@link https://cdn.lj.dev/web-components/site-footer-fat} */

/**
 * Copyright Statement Web Component
 * @name SiteFooterFat
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that renders a simple responsive site footer with logo, links and copyright statement.
 * @attribute attribution-data | {} | {"label":"website by ⚡️ Lightning Jar","url":"https://www.lightningjar.com","title":"visit Lightning Jar website"} | json data for the attribution link
 * @attribute color-accent | lightblue | hsla(130, 90%, 34%, 1.0) | color of the accent
 * @attribute color-background | #050028  | hsla(246, 100%, 5%, 1.0) | color of the site header background
 * @attribute color-primary | white | #FFF | color of the primary text
 * @attribute color-secondary | -- | rgb(15 23 42) | color of the secondary text
 * @attribute color-shadow | rgb(0 0 0 / 0.1) | -- | color of the shadow
 * @attribute copyright-text | -- | © 2024 Verde Climate Solutions LLC. All Rights Reserved.
 * @attribute font-family | inherit | ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" | font family
 * @attribute buttons-data | [] | -- | json data for the button links
 * @attribute legal-links-data | [] | [{ "label": "Privacy", "url": "/legal/privacy" }] | json data for legal links
 * @attribute link-lists-col-1-data | [] | [{"heading":"Solutions","links":[{"label":"Marketing Carbon Credits","url":"/#marketing-carbon-credits"},{"label":"Purchasing Carbon Credits","url":"/#purchasing-carbon-credits"}]}] | json data for the menus in col 1
 * @attribute link-lists-col-2-data | [] | [{"heading":"Resources","links":[{"label":"Blog","url":"/blog"},{"label":"Contact Us","url":"/contact"},{"label":"Glossary","url":"/glossary"},{"label":"News","url":"/news"}]}] | json data for the menus in col 2
 * @attribute news-stories-data | [] | [{"label":"US DOE Reveals 1st Winners of $2.25B Carbon Storage Program","url":"us-doe-reveals-winners-of-carbon-storage-program\""},{"label":"Alaska House follows Senate in passing bill authorizing sale of carbon credits from state land","url":"alaska-authorizes-sale-of-carbon-credits-from-state-land\""},{"label":"Key Insights from World Bank’s 2023 Carbon Pricing Report","url":"key-insights-from-world-banks-2023-carbon-pricing-report"}] | json data for the news links
 * @attribute news-heading-data | {"label":"In the News","url":"/news","title":"browse all news"} | -- | heading for the news section
 * @attribute stylesheet | -- | -- | custom stylesheet content
 */
class SiteFooterFat extends HTMLElement {

// reference to class itself
get c() { return SiteFooterFat };

// ATTRIBUTES
/** @returns { { [key:string]: string } } */
static get attributes() {
	const values = {
		"attribution-data": '{}',
		"buttons-data": "[]",
		"color-accent": "lightblue",
		"color-background": "#f8fafc",
		"color-primary": "darkblue",
		"color-secondary": "var(--color-background)",
		"color-shadow": "rgb(0 0 0 / 0.1)",
		"copyright-text": "",
		"container-height": "70px",
		"font-family": "inherit",
		"legal-links-data": "[]",
		"link-lists-col-1-data": "[]",
		"link-lists-col-2-data": "[]",
		"nav-links-data": "[]",
		"news-stories-data": "[]",
		"news-heading-data": '{"label":"In the News","url":"/news","title":"browse all news"}',
		"stylesheet": ""
	};
return values;
}


// BUILDERS
buildAttribution() {
	const /** @type {Link} */ data = JSON.parse(this.attValue('attribution-data'));
	return `<a id="attribution" href="${data.url}" title="${data.title}">${data.label}</a>`;
}

buildCopyright() {
	return `<div id="copyright">${this.attValue('copyright-text').replace(/\d{4}/g, `${new Date().getFullYear()}`)}</div>` ?? '';
}

buildLinkLists(/** @type {LinkList[]} */ lists) {
	const html = ComponentUtils.stringIfValue;
	const title = (/** @type {Link} */ link) => `title="` + link.title ? `${link.title}` : `go to ${link.label}` + `"`;

	return lists.map((list) => {
		//- if heading is an object, create an anchor element, else create a div
		const heading = list.heading;
		const headingLink = (/** @type {Link} */ heading) => `<a class="heading" href="${heading.url}">${heading.label}</a>`
		const headingString = (/** @type {string} */ heading) => `<div class="heading">${heading}</div>`
		const headingElement = typeof heading === "object" ? headingLink(heading) : heading && typeof heading === "string" ? headingString(heading) : '';

		// create a list of links
		const links = list.links.map((link) => `<a href="${link.url}" ${html(link.rel, `rel="${link.rel}"`)} ${html(link.target, `target="${link.target}"`)}>${link.label}</a>`).join("");
		return `<div class="link-list link-list-${lists.indexOf(list)}">${headingElement}<div class="list">${links}</div></div>`;
	}).join("");
}

buildLinkButtons() {
	const /** @type {Link[]} */ data = JSON.parse(this.attValue('buttons-data'));
	const v = ComponentUtils.stringIfValue;
	const buttons = data.map((link) => {
		return `<a class="link-button" href="${link.url}"${v(link.rel, ` rel="${link.rel}"`)}${v(link.target, ` target="${link.target}"`)}${v(link.title, ` title="${link.title}"`)}>${link.label}</a>`;
	}).join("")
	return v(buttons,`<div id="buttons">${buttons}</div>`);
}

buildNews() {
	// utility
	const v = ComponentUtils.stringIfValue;

	// heading
	const /** @type {Link | string | undefined } */ heading = JSON.parse(this.attValue('news-heading-data')) ?? "";
	const headingLink = (/** @type {Link} */ heading) => `<a class="heading" href="${heading.url}">${heading.label}</a>`
	const headingString = (/** @type {string} */ heading) => `<div class="heading">${heading}</div>`
	const headingElement = typeof heading === "object" ? headingLink(heading) : heading && typeof heading === "string" ? headingString(heading) : '';

	// stories
	const /** @type {Link[]} */ newsData = JSON.parse(this.attValue('news-stories-data')) ?? [];
	const stories = newsData.map((link) => {
		const label = link.label ?? '';
		const rel = v(link.rel, ` rel="${link.rel}"`);
		const target = v(link.target, ` target="${link.target}"`);
		const title = ` title='read article: "${link.title ? v(link.title, link.title) : label}"'`;
		return v(label, `<div class="news-link"><a href="${link.url}"${rel}${target}${title}>${label}</a></div>`);
	}).join("")

	// return markup
	return `<div id="news">${headingElement}<div class="news-links">${stories}</div></div>`;
}

buildLegalLinks() {
	const /** @type {Link[]} */ data = JSON.parse(this.attValue('legal-links-data'));
	const links = data.map((link) => `<a href="${link.url}">${link.label}</a>`).join("");
	return `<div id="legal-links">${links}</div>`;
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {

	const v = ComponentUtils.stringIfValue;

	// create a list of css variables
	const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
	//window.console.log(cssVars)

	// links data
	const /** @type {LinkList[]} */ linkListsCol1Data = JSON.parse(this.attValue('link-lists-col-1-data'));
	const /** @type {LinkList[]} */ linkListsCol2Data = JSON.parse(this.attValue('link-lists-col-2-data'));

	// columns
	const Col1 = this.buildLinkLists(linkListsCol1Data);
	const Col2 = this.buildLinkLists(linkListsCol2Data);
	const buttons = this.buildLinkButtons();
	const news = this.buildNews();
	const Col3 = `${buttons}${news && buttons ? `<hr />` : ''}${news}`

	// values
	const stylesheet = this.attValue('stylesheet');

	return `
${v(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<footer id="container" style="${cssVars}">
	<div id="top-section">${[Col1,Col2,Col3].map((html) => html ? `<div class="column">${v(html, html)}</div>` : '').join("")}</div>
	<hr>
	<div id="bottom-section">
		${v(this.buildCopyright(), this.buildCopyright())}
		${v(this.buildLegalLinks(), this.buildLegalLinks())}
		${v(this.buildAttribution(), this.buildAttribution())}
	</div>
</footer>`.trim();
}

get styles() {
	return `
${ComponentUtils.preflight}
<style id="base">
	*:empty {
		display: none;
	}
	#container {
		align-self: flex-end;
		background-color: var(--color-background);
		color: var(--color-primary);
		font-family: var(--font-family, inherit);
		font-size: 1rem;
		line-height: 1.5;
		overflow:hidden;
		padding: 40px 1em 100px;
		width: 100%;
	}
	@media (min-width: 640px) {
		#container {
			padding: 40px 1rem;
		}
	}
	@media (min-width: 768px) {
		#container {
			font-size: .95rem;
			padding: 48px 24px;
		}
	}
	@media (min-width: 1024px) {
		#container {
			font-size: .9rem;
			padding: 64px 32px;
		}
	}
	@media (min-width: 1280px) {
		#container {
			font-size: 1rem;
			padding: 64px 48px;
		}
	}
	@media (min-width: 1536px) {
		#container {
			font-size: 1.05rem;
			padding: 64px 4rem;
		}
	}
	#top-section {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		margin-bottom: 48px;
	}
	@media (min-width: 640px) {
		#top-section {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 768px) {
		#top-section {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			column-gap:1rem;
		}
	}
	.column {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		margin-bottom: 32px;
		place-content: start;
		place-items: start;
	}
	.column:last-child {
		margin-bottom: 0;
		row-gap: 32px;
		width: 100%;
	}
	@media (min-width: 640px) {
		.column:last-child {
			grid-column: span 2 / span 2;
		}
	}
	@media (min-width: 768px) {
		.column:last-child {
			grid-column: span 1 / span 1;
		}
	}
	.link-list {
		margin-bottom: 12px;
		padding-bottom: 8px;
	}
	.link-list .heading {
		background-color: rgb(15 23 42);
		border-radius: 0.125rem;
		display: inline-block;
		font-style: italic;
		font-size: 0.95em;
		letter-spacing: 0.025em;
		margin-bottom: 8px;
		padding: 0 8px;
		transition: outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.link-list a.heading:hover {
		text-decoration: none;
		outline: solid 0.1em white;
		opacity:1;
	}
	.link-list .list {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		row-gap: 8px;
	}
	.link-list .list a {
		border-radius: 0.25rem;
		color: white;
		display: inline-block;
		font-size: 0.95em;
		letter-spacing: 0.025em;
		max-width: -moz-fit-content;
		max-width: fit-content;
		opacity: 0.8;
		outline-offset: 4px;
		padding: 0 8px;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
		text-underline-offset: 4px;
		text-decoration-color: currentColor;
	}
	.link-list a:hover {
		opacity: 1;
		text-decoration: underline;
	}
	#buttons {
		display: flex;
		flex-wrap: wrap;
		font-size: 0.85em;
		gap: 1rem;
		width: 100%;
	}
	@media (min-width: 768px) {
		#buttons {
			column-gap:0rem;
			justify-content: space-between;
		}
	}
	@media (min-width: 1024px) {
		#buttons {
			gap:1rem;
		}
	}
	@media (min-width: 1280px) {
		#buttons {
			gap: 1.5rem;
		}
	}
	#buttons a {
		background-color: rgb(255 255 255 / 5%);
		border-radius: 0.5rem;
		border: solid 1px white;
		display: block;
		opacity: 0.8;
		padding: 8px 16px;
		text-align: center;
		transition-property: opacity, background-color, border-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
		white-space: nowrap;
	}
	#buttons a:first-child {
		background-color: var(--color-accent);
		border: solid 1px transparent;
		color: white;
		opacity: 0.9;
	}
	#buttons a:first-child:hover {
		border-color: white;
	}
	#buttons a:not(:first-child):hover {
		background-color: var(--color-secondary);
	}
	#buttons a:focus {
		border-color: transparent;
		outline-offset: 0px;
		outline: solid 0.1em white;
		opacity: 1;
	}
	@media (min-width: 768px) {
		#buttons a {
			max-width: calc(50% - 0.5rem);
			width:100%;
		}
		#buttons a:first-child {
			max-width:none;
		}
	}
	@media (min-width: 1024px) {
		#buttons a, #buttons a:first-child {
			max-width: calc(33% - 0.5rem - 2px);
			padding: 8px 0px;
		}
		#buttons a:hover {
			outline: solid 0.1em white;
			opacity: 1;
		}
	}
	@media (min-width: 1280px) {
		#buttons a, #buttons a:first-child {
			max-width: none;
			width: calc(32% - .75rem);
		}
	}
	#container hr {display:block }
	#top-section hr { display:none }
	#container hr {
		background-color:transparent;
		border-top-width: 1px;
		color: var(--color-primary);
		height: 0;
		opacity: 0.2;
		padding: 8px 0;
		width: 100%;
	}
	#news {
		display: none;
	}
	@media (min-width: 768px) {
		#news, #top-section hr {
			display: block;
		}
	}
	#news a.heading {
		border-radius: 4px;
		display: inline-block;
		font-style: italic;
		letter-spacing: 0.025em;
		margin-bottom: 16px;
		opacity: 0.9;
		outline-offset: 4px;
		text-transform: uppercase;
	}
	@media (min-width: 1024px) {
		#news a.heading:hover {
			opacity: 1;
			text-decoration: underline;
			text-underline-offset: 4px;
		}
	}
	#news a:focus {
		outline-color: white;
	}
	#news .news-links {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		row-gap: 16px;
	}
	#news .news-link {
		background-color: var(--color-secondary);
		border-radius: 0.25rem;
		font-size: 0.95em;
		outline: solid 0.1em transparent;
		padding: 8px 16px;
		transition-property: outline-color;
	}
	#news .news-link, #news .news-link a {
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	#news .news-link a {
		display: block;
		opacity: 0.9;
		transition-property: opacity;
		width: 100%;
		overflow:hidden;
		outline:none!important;
		display:-webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-transform: capitalize;
	}
	@media (min-width: 1024px) {
		#news .news-link:hover {
			outline-color: white;
		}
		#news .news-link:hover a {
			opacity: 1;
		}
	}
	#bottom-section {
		display:grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		font-size: 0.8em;
		row-gap: 1rem;
	}
	@media (min-width: 1024px) {
		#bottom-section {
			display:flex;
			flex-wrap:wrap;
			column-gap: 2rem;
		}
	}
	#copyright { flex:none; }
	#bottom-section a, #copyright {
		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
		opacity: 0.7;
		white-space: nowrap;
		text-underline-offset: 4px;
	}
	#bottom-section a:hover, #bottom-section a:focus {
		border-radius: 0.125rem;
		opacity: 1;
	}
	#legal-links {
		column-gap: 1rem;
		display: flex;
		flex-wrap: wrap;
		margin-bottom:2rem;
		-moz-column-gap: 1rem;
	}
	#legal-links a {
		text-decoration: solid underline color-mix(in srgb,currentColor 50%,transparent);
	}
	#attribution {
		display:flex;
		width:100%;
	}
	#attribution:hover {
		text-decoration: underline;
		color: #ebf92f;
	}
	a {
		transition: opacity .15s ease-in-out;
	}
	a:focus, .list-links a:focus, #news a:focus, #bottom-section a:focus {
		outline: solid .15em white;
		outline-offset: 2px;
		opacity:1;
		text-decoration: none!important;
	}
</style>`;
}

// TEMPLATE GETTER
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.styles}${this.els}`.trim();
	return template;
}

constructor() { super(); this.attachShadow({ mode: "open" }); }
connectedCallback() {this.shadowRoot?.appendChild(this.template.content.cloneNode(true))}

}
customElements.define("site-footer-fat", SiteFooterFat);
export default SiteFooterFat;
