// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// type definitions
/** @typedef {{ label: string; url: string; title?: string; rel?: string; target?: string }} Link */
/** @typedef {{heading?: string | Link; links: Link[]}} LinkList */

/** @copyright Lightning Jar 2024 - "Site Footer" web component */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.2 */
/** {@link https://cdn.lj.dev/web-components/slx-site-footer} */

/**
 * Copyright Statement Web Component
 * @name SLXSiteFooter
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that renders a simple responsive site footer with logo, links and copyright statement.
 * @attribute attribution-data | {} | {"label":"website by ⚡️ Lightning Jar","url":"https://www.lightningjar.com","title":"visit Lightning Jar website"} | json data for the attribution link
 * @attribute color-accent | lightblue | #ea0026| color of the accent
 * @attribute color-background | #050028  | #1E293B | color of the site header background
 * @attribute color-primary | white | #D8F9FF | color of the primary text
 * @attribute color-secondary | -- | rgb(15 23 42) | color of the secondary text
 * @attribute color-shadow | rgb(0 0 0 / 0.1) | -- | color of the shadow
 * @attribute container-height | 70px | 100px | text content of the copy button
 * @attribute copyright-text | -- | © 2020 SecureLogix. All Rights Reserved. | copyright statement
 * @attribute font-family | inherit | ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" | font family
 * @attribute buttons-data | [] | [{"label":"Contact","title":"get in touch","url":"/contact"},{"label":"Support","rel":"external","title":"go to SecureLogix Customer Support Center","url":"https://support.securelogix.com"},{"label":"Partners","title":"go to SecureLogix Partners website","rel":"external","url":"https://partners.securelogix.com"}] | json data for the button links
 * @attribute legal-links-data | [] | [{"label":"Trademark & Patents","url":"/trademarks"},{"label":"Open Source", "url":"/open-source-software"}] | json data for legal links
 * @attribute link-lists-col-1-data | [] | [{"heading":{"label":"About Us","url":"/about"},"links":[{"label":"Our Company","url":"/about"},{"label":"Careers","url":"/careers"},{"label":"Partners","url":"https://partners.securelogix.com"},{"label":"Press","url":"/brand-assets"},{"label":"Research","url":"/research"}]},{"heading":"Research & Technology","links":[{"label":"Vox Research Lab","url":"/research"},{"label":"ETM System","url":"/technologies/etm-system"},{"label":"Red List","url":"/technologies/red-list"},{"label":"PolicyGuru","url":"/technologies/policyguru"}]},{"heading":"Resources","links":[{"label":"Blog","url":"/blogs"},{"label":"Brochures","url":"/brochures"},{"label":"Customer Stories","url":"/customer-stories"},{"label":"Customer Support","url":"https://support.securelogix.com"},{"label":"Data Sheets","url":"/resources_category/data-sheets"},{"label":"Events","url":"/events"},{"label":"News","url":"/in-the-news"},{"label":"Partners","url":"https://partners.securelogix.com"},{"label":"Podcasts","url":"/podcasts"},{"label":"State of Security Report","url":"/state-of-security"},{"label":"Video & Webinars","url":"/resources_category/video"}]}] | json data for the menus in col 1
 * @attribute link-lists-col-2-data | [] | [{"heading":{"label":"Outbound Solutions","title":"explore Outbound Call Trust Solutions","url":"/outbound-call-trust"},"links":[{"label":"Call Branding","url":"/outbound-call-trust"},{"label":"Spoofing Protection","url":"/outbound-call-trust"},{"label":"Call Number Management","url":"/outbound-call-trust"}]},{"heading":"Inbound Solutions","links":[{"label":"Call Security","url":"/voice-network-security"},{"label":"Call Authentication","url":"/call-authentication"}]},{"heading":{"label":"Threats","url":"/threats"},"links":[{"label":"Caller ID Spoofing","url":"/threats/spoofing"},{"label":"Robocalls","url":"/threats/robocalls"},{"label":"TDoS Attacks","url":"/threats/tdos"},{"label":"Toll Fraud","url":"/threats/toll-fraud"}]},{"heading":{"label":"Industries","url":"/industries"},"links":[{"label":"Banking & Financial","url":"/industries/banking-financial"},{"label":"Emergency Services","url":"/industries/emergency-9-1-1"},{"label":"Energy & Utilities","url":"/industries/energy-utilities"},{"label":"Military & Government","url":"/industries/military-gov"},{"label":"Healthcare","url":"/industries/healthcare"}]}] | json data for the menus in col 2
 * @attribute news-stories-data | [] | [{"label":"If you hear this 4-Word Phrase When You Pick up the Phone, Hang up Immediately","url":"/news/hang-up-if-you-hear-this-four-word-phrase/"},{"label":"Hospital IT help desks targeted by sophisticated social engineering schemes","url":"/news/hospital-help-desks-targeted-sophisticated-social-engineering/"},{"label":"The Complete Guide To Smishing (SMS Phishing)","url":"/news/the-complete-guide-to-smishing-sms-phishing/"}, {"label":"FTC Reaches Settlement With XCast Labs Over Illegal Robocalls","url":"/news/ftc-xcast-settlement-robocalls/"},{"label":"Vishing Attacks Crest $1B: How MSSPs Can Help","url":"/news/vishing-attacks-crest-1b/"},{"label":"That Call Center Tech Scammer Could Be A Human Trafficking Victim","url":"/news/that-scammer-could-be-a-human-trafficking-victim/"}] | json data for the news links
 * @attribute news-heading-data | {"label":"In the News","url":"/news","title":"browse all news"} | -- | heading for the news section
 * @attribute stylesheet | -- | -- | custom stylesheet content
 */
class SLXSiteFooter extends HTMLElement {

// reference to class itself
get c() { return SLXSiteFooter };

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
	return `<div id="buttons">${buttons}</div>`;
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
	const Col3 = `${this.buildLinkButtons()}<hr />${this.buildNews()}`

	// values
	const stylesheet = this.attValue('stylesheet');

	return `
${v(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<footer id="container">
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
<link href="/e/wc/preflight.min.css" rel="stylesheet">
<link href="/e/wc/slx-site-footer@0.1.2.min.css" rel="stylesheet">
`;
}

// TEMPLATE GETTER
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.styles}${this.els}`.trim();
	const container = template.content.getElementById('container');
	if (container) {
		container.style.setProperty('--color-accent', this.attValue('color-accent'));
		container.style.setProperty('--color-background', this.attValue('color-background'));
		container.style.setProperty('--color-primary', this.attValue('color-primary'));
		container.style.setProperty('--color-secondary', this.attValue('color-secondary'));
		container.style.setProperty('--color-shadow', this.attValue('color-shadow'));
		container.style.setProperty('--font-family', this.attValue('font-family'));
	 }
	return template;
}

constructor() { super(); this.attachShadow({ mode: "open" }); }
connectedCallback() {
	// add template to shadowRoot
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
}

}
customElements.define("slx-site-footer", SLXSiteFooter);
export default SLXSiteFooter;
