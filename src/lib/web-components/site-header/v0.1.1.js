// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// type definitions
/** @typedef {{ alt?: string; url?: string; width?:string; height?: string; }} Image */
/** @typedef {{ label: string; url: string; title?: string; rel?: string }} Link */
/** @typedef {{ heading?: string; text?: string; button?: Link; links?: Link[] }} NavMenuFlyout */
/** @typedef {{ label?: string; flyout?: NavMenuFlyout; link?: Link }} NavMenuItem */
/** @typedef {{ heading?: string; items: NavMenuItem[]; }} NavMenuSection */
/** @typedef {{ label?: string; sections?: NavMenuSection[]; link?: Link; }} NavMenu */
/** @typedef {{ button?: Link; brand?: { link: Link; logo: Image; }; menus?: NavMenu[]; }} NavData */


/** @copyright Lightning Jar 2024 - "Site Header" web component */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/site-header} */

/**
 * Copyright Statement Web Component
 * @name SiteHeader
 * @class
 * @published 2024-24-09
 * @extends HTMLElement
 * @classdesc Defines web component that renders a simple responsive site header with logo, nav and button. Does not yet support drop-down menus only simple links.
 * @attribute brand-image-alt | logo | The Competency Alliance logo | alt text of the brand image
 * @attribute brand-image-url | -- | https://res.cloudinary.com/dn0pqjjbq/image/upload/v1708788768/petro/tca-logo-light_asvseu.svg | url of the brand image
 * @attribute brand-link-url | / | -- | url of the brand link
 * @attribute brand-link-title | website home | -- | title of the brand link
 * @attribute button-link-label | Contact | Contact | text content of the copy button
 * @attribute button-link-url | -- | /contact | url of the copy button
 * @attribute button-link-title | -- | get in touch | title of the copy button
 * @attribute color-accent | lightblue | #02C6C7 | color of the accent
 * @attribute color-background | white | #f8fafc | color of the site header background
 * @attribute color-primary | darkblue | #0A2F7E | color of the primary text
 * @attribute container-height | 70px | 100px | text content of the copy button
 * @attribute font-family | inherit | -- | font family
 * @attribute menus-data | [] | [{"link":{"label":"About","url":"/about"}},{"link":{"label":"Solutions","url":"/solutions"}},{"link":{ "label":"Training","url":"/training"}}] | json data for the menus
 * @attribute stylesheet | -- | -- | custom stylesheet content
 */
class SiteHeader extends HTMLElement {

// reference to class itself
get c() { return SiteHeader };

// ATTRIBUTES
/** @returns { { [key:string]: string } } */
static get attributes() {
	return {
		"brand-image-alt": "logo",
		"brand-image-url": "",
		"brand-link-title": "website home",
		"brand-link-url": "/",
		"button-link-label": "Contact",
		"button-link-title": "get in touch",
		"button-link-url": "",
		"color-accent": "lightblue",
		"color-background": "#f8fafc",
		"color-primary": "darkblue",
		"container-height": "70px",
		"container-border-bottom": "1px solid #273B4B",
		"font-family": "inherit",
		"menus-data": "[]",
		"stylesheet": ""
	}
}

// VALUE METHOD
attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// HTML BUILDERS
buildBrandHTML() {
	return `
	<a
		id="brand-link"
		href="${this.attValue('brand-link-url')}"
		title="${this.attValue('brand-link-title')}">
		<img
			alt="${this.attValue('brand-image-alt')}"
			id="brand-image"
			loading="lazy"
			src="${this.attValue('brand-image-url')}" />
	</a>`;
}
static buildHamburgerHTML() {
	return `
	<!-- hamburger -->
	<input
		style="opacity:0;"
		type="checkbox"
		id="hamburger-toggle" />
	<label
		id="hamburger-icon"
		for="hamburger-toggle"
		class="rounded-md">
		<span
			id="hamburger-sr-label"
			class="sr-only">Toggle menu</span>
	</label>`
}
static buildMainNavLink( /** @type {Link} link */ link) {
	return link.url && link.label ? `
	<div class="menu"><a class="menu-heading-link" href="${link.url}">${link.label}</a></div>` : "";
}
buildNavHTML(/** @type {NavMenu[]} [menusData] */ menusData) {
	let navContents = '';

	const /** @type {NavMenu[]} data */ data  = JSON.parse(this.attValue('menus-data')) ?? [];
	data.forEach((menu) => {
		// if menu is just a link and has no sections
		if (menu.link) {
			navContents += this.c.buildMainNavLink(menu.link);
		}
	});
	return `
	<nav id="main-nav">
		${navContents}
		<a
			id="button-link"
			href="${this.attValue('button-link-url')}"
			title="${this.attValue('button-link-title')}">
			${this.attValue('button-link-label')}</a>
	</nav>`
}

// ELEMENTS
get els() {
	return `
<style id="stylesheet">${this.attValue('stylesheet')}}</style>
<header
	id="container"
	style="
		--color-accent: ${this.attValue('color-accent')};
		--color-background: ${this.attValue('color-background')};
		--color-primary: ${this.attValue('color-primary')};
		--container-height: ${this.attValue('container-height')};
		--font-family: ${this.attValue('font-family')};">
		<div id="container-inner">
			${this.c.buildHamburgerHTML()}
			${this.buildNavHTML()}
			${this.buildBrandHTML()}
		</div>
</header>`.trim();
}

// STYLES
static get styles() {
	return `
${ComponentUtils.preflight}
<style>
#container {
	background-color: var(--color-background, #fff);
	border-bottom: var(--container-border-bottom, 1px solid #273B4B);
	color: var(--color-primary, #000);
	font-family: var(--font-family, inherit);
	height: var(--container-height, 70px);
	width: 100%;
	z-index:999;
}
@media (max-width: 1023px) {
	#container:has(input#hamburger-toggle:checked) {
		min-height: 100vh;
		overflow-y: hidden;
	}
}
@media (min-width: 1024px) {
	#container {
		overflow: visible;
	}
}
#container-inner {
	align-items: center;
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	height: 100%;
	padding: 0;
	position: relative;
	width: 100%;
}
@media (min-width: 1024px) {
	#container-inner {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		overflow-y: visible;
		padding: 0 32px;
	}
}
@media (min-width: 1280px) {
	#container-inner {
		padding: 0 48px;
	}
}
@media (min-width: 1536px) {
	#container-inner {
		padding: 0 64px;
	}
}
#hamburger-toggle {
	opacity: 0;
}
@media (min-width: 1024px) {
	#hamburger-toggle {
		display: none;
	}
}
#hamburger-toggle + label {
	display: flex;
	padding: 0.5em;
	position: absolute;
	right: 1.25em;
	top: calc(var(--container-height) / 2 - 0.75em);
	height: 1.875em;
	width: 3em;
}
#hamburger-toggle:focus-visible + label {
	outline: 0.125em solid #fff;
	background-color: color-mix(in srgb, var(--color-accent) 15%, transparent);
}
@supports not (background: color-mix(in srgb, #fff 5%, transparent)) {
	#hamburger-toggle:focus-visible + label {
		background-color: rgba(255, 255, 255, 15%);
	}
}
#hamburger-toggle + label:hover {
	background: color-mix(in srgb, var(--color-secondary, #fff) 5%, transparent);
}
@supports not (background: color-mix(in srgb, #fff 5%, transparent)) {
	#hamburger-toggle + label:hover {
		background-color: rgba(255, 255, 255, 0.05);
	}
}
@media (min-width: 768px) {
	#hamburger-toggle + label {
		right: 24px;
	}
}
@media (min-width: 1024px) {
	#hamburger-toggle + label {
		display: none;
	}
}
#hamburger-toggle + label:before,
#hamburger-toggle + label:after {
	content: "";
	position: absolute;
	border-color: currentColor;
	border-bottom: solid 0.1em;
	height: 0;
	pointer-events: none;
	transform: translateY(0.1em);
	transform-origin: center;
	transition: rotate 0.15s;
	width: 2em;
}
#hamburger-toggle + label:after {
	transform: translateY(0.6em);
}
#hamburger-toggle:checked + label:before {
	rotate: 45deg;
	transform: translate(4px, 4px);
}
#hamburger-toggle:checked + label:after {
	rotate: -45deg;
	transform: translate(-4px, 4px);
}
#main-nav {
	align-items: start;
	border-top: 1px solid color-mix(in srgb, currentColor 20%, transparent);
	display: none;
	font-size: 16px;
	gap: 1.5em;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	margin-top: var(--container-height);
	padding: 1.75em 1em 8em;
	place-content: start;
	white-space: nowrap;
	width: 100%;
}
@supports not (
	border-top: 1px solid color-mix(in srgb, currentColor 20%, transparent)
) {
	#hamburger-toggle + label:hover {
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}
}
@media (min-width: 420px) {
	#main-nav {
		padding: 1.75em 1.25em 8em;
	}
}
@media (min-width: 640px) {
	#main-nav {
		padding: 1.75em 1.75em 8em;
	}
}
@media (min-width: 768px) {
	#main-nav {
		padding: 1.75em 2em 8em;
	}
}
@media (min-width: 1024px) {
	#main-nav {
		align-items: center;
		border-top: none;
		column-gap: 2.5em;
		display: flex;
		justify-content: flex-end;
		margin-top: 0;
		min-height: 3.75em;
		overflow-y: visible;
		padding: 0.35em 0 0;
		row-gap: 0;
	}
	#main-nav:after {
		display: none;
	}
}
@media (min-width: 1280px) {
	#main-nav {
		font-size: 17px;
		min-height: 3.5em;
	}
}
@media (min-width: 1536px) {
	#main-nav {
		font-size: 18px;
	}
}
@media (max-width: 1023px) {
	#main-nav:after {
		background-color: var(--color-background, #ea0026);
		content: "";
		position: fixed;
		top: 0;
		right: 0;
		width: 10px;
		height: 100%;
		z-index: 100;
	}
}
#main-nav .menu {
	overflow: visible;
	position: relative;
}
#main-nav .menu .menu-heading-button {
	display: none;
}
#main-nav .menu .menu-heading-link {
	font-size: 18px;
}
@media (min-width: 1024px) {
	#main-nav .menu .menu-heading-button,
	#main-nav .menu .menu-heading-link {
		align-items: center;
		border-radius: 0.375em;
		display: inline-flex;
		font-size: 1rem;
		opacity: 0.9;
		outline: none;
		transition: opacity 0.15s;
		text-underline-offset: 0.25em;
	}
	#main-nav .menu .menu-heading-button:focus-within,
	#main-nav .menu .menu-heading-link:focus {
		opacity: 1;
		outline-width: 0.1em;
		text-decoration: underline;
		text-decoration-color: color-mix(in srgb, currentColor 60%, transparent);
		text-underline-offset: 0.25em;
	}
	@supports not (
		border-top: 1px solid color-mix(in srgb, currentColor 80%, transparent)
	) {
		#main-nav .menu .menu-heading-button:focus-within {
			text-decoration-color: 1px solid rgba(255, 255, 255, 0.2);
		}
	}
	#main-nav .menu .menu-heading-button:hover,
	#main-nav .menu .menu-heading-link:hover {
		opacity: 1;
	}
	#main-nav .menu .menu-heading-link:hover {
		text-decoration: underline;
		text-decoration-color: color-mix(in srgb, currentColor 80%, transparent);
	}
	@supports not (
		text-decoration-color: color-mix(in srgb, currentColor 80%, transparent)
	) {
		#main-nav .menu .menu-heading-link:hover {
			text-decoration-color: currentColor;
		}
	}
}
#main-nav .menu .menu-heading {
	text-align: center;
	font-size: 18px;
	margin-bottom: 0.5em;
	opacity: 0.9;
	width: 100%;
}
@media (min-width: 640px) {
	#main-nav .menu .menu-heading {
		font-size: 17px;
		text-align: left;
	}
}
@media (min-width: 1024px) {
	#main-nav .menu .menu-heading {
		display: none;
	}
}
#button-link {
	border-radius: 0.5em;
	border: solid 0.1em var(--color-primary, #fff);
	color: currentColor;
	display: block;
	font-size: 0.9em;
	max-width: fit-content;
	padding: 0.265em 1em;
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
		right: unset;
		top: unset;
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
#brand-link {
	display: block;
	height: auto;
	justify-self: flex-start;
	left: 1em;
	padding: 0.85em 0;
	position: absolute;
	top: 0.15em;
	width: auto;
}
#brand-image {
	display: block;
	height: calc(var(--container-height) - 1.7em);
	object-fit: contain;
}
@media (min-width: 420px) {
	#brand-link {
		left: 1.25em;
	}
}
@media (min-width: 640px) {
	#brand-link {
		left: 1.75em;
	}
}
@media (min-width: 768px) {
	#brand-link {
		left: 2em;
	}
}
@media (min-width: 1024px) {
	#brand-link {
		left: unset;
		position: relative;
		top: unset;
	}
}
.rounded-md {
	border-radius: 0.375em /* 6px */;
}
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
}
@media (max-width: 1023px) {
	:global(html:has(#hamburger-toggle:checked)) {
		overflow-y: hidden;
	}
	#container:has(#hamburger-toggle:checked) {
		height: 100vh;
		overflow-y: hidden;
	}
	#container #hamburger-toggle:checked ~ #main-nav {
		height: calc(100vh - 16px);
		display: grid;
		overflow-y: scroll;
	}
}
.fill-primary {
	fill: var(--color-primary, #000);
}
</style>`.trim();
}
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.c.styles}${this.els}`.trim();
	return template;
}
constructor() {
	super();
	this.attachShadow({ mode: "open" });
}
connectedCallback() {
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
}
}
customElements.define("site-header", SiteHeader);
export default SiteHeader;
