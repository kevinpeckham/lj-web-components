// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// type definitions
/** @typedef {{ label: string; url: string; title?: string; rel?: string }} Link */

/** @copyright Lightning Jar 2024 - "Site Footer" web component */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/site-footer} */

/**
 * Copyright Statement Web Component
 * @name SiteFooter
 * @class
 * @published 2024-03-31
 * @extends HTMLElement
 * @classdesc Defines web component that renders a simple responsive site footer with logo, links and copyright statement.
 * @attribute brand-image-alt | logo | The Competency Alliance logo | alt text of the brand image
 * @attribute brand-image-url | -- | /images/custom/petro/tca-logo-dark.svg | url of the brand image
 * @attribute brand-link-url | / | -- | url of the brand link
 * @attribute brand-link-title | website home | -- | title of the brand link
 * @attribute brand-width | 100px | 100px | width of the brand image
 * @attribute button-link-label | Contact | Contact Us | text content of the copy button
 * @attribute button-link-url | -- | /contact | url of the copy button
 * @attribute button-link-title | -- | get in touch | title of the copy button
 * @attribute color-accent | lightblue | #02C6C7 | color of the accent
 * @attribute color-background | #050028  | #050028 | color of the site header background
 * @attribute color-primary | white | #D8F9FF | color of the primary text
 * @attribute color-shadow | rgb(0 0 0 / 0.1) | -- | color of the shadow
 * @attribute container-height | 70px | 100px | text content of the copy button
 * @attribute copyright-text | -- | © 2024 The Competency Alliance. All Rights Reserved. | copyright statement
 * @attribute font-family | inherit | -- | font family
 * @attribute nav-links-data | [] | [{"label":"About","url":"/about"},{"label":"Solutions","url":"/solutions"},{ "label":"Training","url":"/training"}] | json data for the menus
 * @attribute legal-links-data | [] | [{"label":"Privacy","url":"https://www.petroskills.com/privacy"},{"label":"Terms","url":"https://www.petroskills.com/privacy"}] | json data for the menus
 * @attribute stylesheet | -- | -- | custom stylesheet content
 */
class SiteFooter extends HTMLElement {

// reference to class itself
get c() { return SiteFooter };

// ATTRIBUTES
/** @returns { { [key:string]: string } } */
static get attributes() {
	const values = {
		"data-json": "",
		"data-json-url": "",
		"brand-image-alt": "logo",
		"brand-image-url": "",
		"brand-link-title": "website home",
		"brand-link-url": "/",
		"button-link-label": "Contact Us",
		"button-link-title": "get in touch",
		"button-link-url": "",
		"color-accent": "lightblue",
		"color-background": "#f8fafc",
		"color-primary": "darkblue",
		"color-shadow": "rgb(0 0 0 / 0.1)",
		"copyright-text": "",
		"container-height": "70px",
		"font-family": "inherit",
		"legal-links-data": "[]",
		"nav-links-data": "[]",
		"stylesheet": ""
	};
return values;
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}


// ELEMENTS
get els() {
	return `
	<style id="stylesheet">${this.attValue('stylesheet')}}</style>
<footer
	id="container"
	style="
		--color-accent: ${this.attValue('color-accent')};
		--color-background: ${this.attValue('color-background')};
		--color-primary: ${this.attValue('color-primary')};
		--color-shadow: ${this.attValue('color-shadow')};
		--container-height: ${this.attValue('container-height')};
		--font-family: ${this.attValue('font-family')};">
		<div id="top-section">
			<a
				id="brand-link"
				href="${this.attValue('brand-link-url')}"
				title="${this.attValue('brand-link-title')}">
				<img
					id="brand-image"
					alt="${this.attValue('brand-image-alt')}"
					src="${this.attValue('brand-image-url')}"
					loading="lazy" />
			</a>
			<div id="nav-links">
			${JSON.parse(this.attValue('nav-links-data')).map((
				/** @type {Link} link*/
				link) => `<a class="nav-link" href="${link.url}">${link.label}</a>`).join("")}
			</div>
			<a
				id="button-link"
				href="${this.attValue('button-link-url')}">${this.attValue('button-link-label')}
			</a>
		</div>

		<!-- bottom section: legal and attribution -->
		<div id="bottom-section">
			<div id="copyright-statement">${this.attValue('copyright-text')}</div>
			<div id="legal-links">
			${JSON.parse(this.attValue('legal-links-data')).map((
				/** @type {Link} link*/
				link) => `<a href="${link.url}" rel="noopener noreferrer">${link.label}</a>`).join("")}


			</div>
		</div>
</footer>`.trim();
}

get styles() {
	return `
<style id="preflight">${ComponentUtils.preflight}</style>
<style id="base">
	:host {
		box-sizing: border-box;
		border-width: 0;
		border-style: solid;
	}
	#container {
		align-items: start;
		color: var(--color-primary, #D8F9FF);
		display: block;
		background-color: var(--color-background, #fff);
		height:auto;
		padding: 32px 16px;
		position: relative;
		width: 100%;
		z-index:999;"
	}
	@media (min-width: 640px) {
		#container {
			padding:64px 24px;
		}
	}
	@media (min-width: 1024px) {
		#container {
			padding:48px 32px;
		}
	}
	@media (min-width: 1280px) {
		#container {
			padding:56px 80px;
		}
	}
#top-section {
	align-items: center;
	display: block;
	justify-content: start;
	margin-bottom:2rem;
	width: 100%;
}
@media (min-width: 1024px) {
	#top-section {
		display:flex;
	}
}
#brand-link {
	display: block;
	height: 100%;
	justify-self: flex-start;
	padding: 0.85em 0;
	width: fit-content;
}
#brand-image {
	display: flex;
	height: 4rem;
	width:auto;
	object-fit: contain;
}

#nav-links {
	display: flex;
	column-gap: 1rem;
	font-size: 0.9rem;
	margin-left: auto;
	padding-right: 4rem;
	margin-bottom:2rem;
}
#nav-links a {
	color: currentColor;
	text-decoration-color: rgba(255,255,255, .1);
	text-decoration:underline;
	text-underline-offset: 0.3em;
	text-decoration-thickness: 0.075em;
	opacity: 0.85;
	transition: opacity 0.15s, color .15s;
}
#nav-links a:hover {
	opacity: 1;
	text-decoration-color: currentColor;
}
@media (min-width: 1024px) {
	#nav-links {
		column-gap: 2rem;
		margin-bottom:0;
	}
}
#button-link {
	border-radius: 0.35em;
	border: solid 0.1em var(--color-primary, #fff);
	color: currentColor;
	display: block;
	font-size: 0.8rem;
	max-width: fit-content;
	padding: 0.45em 1em;
	position:absolute;
	top:3rem;
	right:1rem;
	white-space: nowrap;
	text-decoration: none;
}
@media (min-width: 1024px) {
	#button-link {
		border-color: color-mix(
			in srgb,
			var(--color-primary, darkblue) 60%,
			transparent
		);
		display: inline-block;
		opacity: 0.9;
		position: relative;
		right:0;
		top:0;
		transition-property: opacity, background-color, border-color;
		transition-duration: 0.15s;
	}
	#button-link:hover,
	#button-link:focus-visible {
		background-color: color-mix(
			in srgb,
			var(--color-accent, lightblue) 10%,
			transparent
		);
		border-color: var(--color-primary, #fff);
		opacity: 1;
		outline: var(--color-primary, #fff);
	}
	@supports not (
		background-color: color-mix(in srgb, #233343 10%, transparent)
	) {
		#button-link:hover {
			background-color: rgba(35, 51, 67, 0.1);
		}
	}
}
#bottom-section {
	align-items: center;
	column-gap: 1rem;
	display: flex;
	font-size:.7rem;
	justify-content: start;
	width: 100%;
}
#bottom-section #copyright-statement {
	opacity: 0.7;
}
#bottom-section #legal-links  {
	column-gap: 1rem;
	display: flex;
}
#bottom-section #legal-links a {
	color: currentColor;
	opacity: 0.7;
	text-decoration: none;
	text-decoration-color: rgb(255 255 255 / 0.4);
	text-decoration:underline;
	text-underline-offset: 0.3em;
	text-decoration-thickness: 0.075em;
	transition: opacity 0.15s, color .15s;
}
#bottom-section #legal-links a:hover {
	opacity: 1;
	text-decoration-color: currentColor;
}
</style>`.trim();
}

// TEMPLATE GETTER
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.styles}${this.els}`.trim();
	return template;
}

// CONSTRUCTOR
constructor() {
	super();
	this.attachShadow({ mode: "open" });
}

// CONNECTED CALLBACK
connectedCallback() {
		this.shadowRoot?.appendChild(this.template.content.cloneNode(true))
}


}
customElements.define("site-footer", SiteFooter);
export default SiteFooter;
