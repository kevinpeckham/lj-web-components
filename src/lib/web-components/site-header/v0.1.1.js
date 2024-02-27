// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";

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
/** {@link https://www.lj-cdn.dev/web-components/site-header} */

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
 * @attribute color-shadow | rgb(0 0 0 / 0.1) | -- | color of the shadow
 * @attribute container-height | 70px | 100px | text content of the copy button
 * @attribute font-family | inherit | -- | font family
 * @attribute menus-data | [] | [{"link":{"label":"About","url":"/about"}},{"link":{"label":"Solutions","url":"/solutions"}},{"link":{ "label":"Training","url":"/training"}}] | json data for the menus
 * @attribute data-json-url | -- | -- | fetch data from a remote json file if preferred
 * @attribute stylesheet | -- | -- | custom stylesheet content
 * @note Data fetched via data-json-url prop will override attribute values
 */
class SiteHeader extends HTMLElement {
	brandImageAlt = "";
	brandImageUrl = "";
	brandLinkTitle = "";
	brandLinkUrl = "";
	buttonLinkUrl = "";
	buttonLinkLabel = "";
	buttonLinkTitle = "";
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";
	colorShadow = "";
	dataJson = "";
	dataJsonUrl = "";
	fontFamily = "";
	containerHeight = "";
	menusData = "";
	stylesheet= "";

// reference to class itself
get c() { return SiteHeader };


// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string } }
 */
static get attributes() {
	const values = {
		"data-json": "",
		"data-json-url": "",
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
		"color-shadow": "rgb(0 0 0 / 0.1)",
		"container-height": "70px",
		"font-family": "inherit",
		"menus-data": "[]",
		"stylesheet": ""
	};
return values;
}

// OBSERVED ATTRIBUTES GETTER
static get observedAttributes() { return Object.keys(this.attributes) }

// ATTRIBUTE DEFAULT VALUE GETTER
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

// PARSE DATA JSON - REMOTE DATA
/** @returns {NavData} */
get parsedData() {
return this.dataJson ? JSON.parse(this.dataJson) : {};
}

// PARSE DATA JSON - MENUS
get parsedMenusData() {
	return JSON.parse(this.menusData ?? "") ?? [];
}

// HTML BUILDERS

buildBrandHTML() {
	return `
	<a
		id="brand-link"
		href="${this.brandLinkUrl}"
		title="${this.brandLinkTitle}">
		<img
			id="brand-image"
			alt="${this.brandImageAlt}"
			src="${this.brandImageUrl}" />
	</a>`;
}
buildHamburgerHTML() {
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
	</label>
	`
}
/** @param {Link} link */
buildMainNavLink(link) {
	return link.url && link.label ? `
	<div class="menu">
		<a
			class="menu-heading-link"
			href="${link.url}">
			${link.label}
		</a>
	</div>` : "";
}
/** @param {NavMenu[]} [menusData] */
buildNavHTML(menusData) {
	let navContents = '';
	/** @type {NavMenu[]} data */
	const data = menusData ?? this.parsedMenusData ?? [];
	data.forEach((menu) => {
		// if menu is just a link and has no sections
		if (menu.link) {
			navContents += this.buildMainNavLink(menu.link);
		}
	});
	return `
	<nav id="main-nav">
		${navContents}
		<a
			id="button-link"
			href="${this.buttonLinkUrl}"
			title="${this.buttonLinkTitle}">${this.buttonLinkLabel}</a>
	</nav>
	`
}


// ELEMENTS MASTER LAYOUT GETTER
get els() {
	return `
<style id="stylesheet">${this.stylesheet}</style>
<header
	id="container"
	style="
		--color-accent: ${this.colorAccent};
		--color-background: ${this.colorBackground};
		--color-primary: ${this.colorPrimary};
		--color-shadow: ${this.colorShadow};
		--container-height: ${this.containerHeight};
		--font-family: ${this.fontFamily};
		background-color:var(--color-background);
		color:var(--color-primary);
		font-family:var(--font-family);
		height:var(--container-height, 70px);
		width:100%;
		z-index:999;">
		<div id="container-inner" class="hide-before-load" >
			${this.buildHamburgerHTML()}
			${this.buildNavHTML()}
			${this.buildBrandHTML()}
		</div>
</header>`.trim();
}

get preflight() {
	return `
	<style>*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:theme("borderColor.DEFAULT", currentColor)}::before,::after {--tw-content:""}html,:host {line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:theme( "fontFamily.sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body {margin:0;line-height:inherit}hr {height:0;color:inherit;border-top-width:1px}abbr:where([title]) {text-decoration:underline dotted}h1,h2,h3,h4,h5,h6 {font-size:inherit;font-weight:inherit}a {color:inherit;text-decoration:inherit}b,strong {font-weight:bolder}code,kbd,samp,pre {font-family:theme( "fontFamily.mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small {font-size:80%}sub,sup {font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub {bottom:-0.25em}sup {top:-0.5em}table {text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea {font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select {text-transform:none}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring {outline:auto}:-moz-ui-invalid {box-shadow:none}progress {vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button {height:auto}[type="search"] {-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration {-webkit-appearance:none}::-webkit-file-upload-button {-webkit-appearance:button;font:inherit}summary {display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin:0}fieldset {margin:0;padding:0}legend {padding:0}ol,ul,menu {list-style:none;margin:0;padding:0}dialog {padding:0}textarea {resize:vertical}input::placeholder,textarea::placeholder {opacity:1;color:theme("colors.gray.400", #9ca3af)}button,[role="button"] {cursor:pointer}:disabled {cursor:default}img,svg,video,canvas,audio,iframe,embed,object {display:block;vertical-align:middle}img,video {max-width:100%;height:auto}[hidden] {display:none}</style>
	`
}

get styles() {
	return `
${this.preflight}
<style>
	/* stylesheet for site header web component */
:host {
	box-sizing: border-box; /* 1 */
	border-width: 0; /* 2 */
	border-style: solid; /* 2 */
}

/* -- 1.0 GLOBAL NAV  -- */
/* global nav - default */
#container {
	display: block;
	background-color: var(--color-background, #fff);
	color: var(--color-primary, #000);
	height: var(--container-height, 70px);
	width: 100%;
}
/* global nav - mobile nav open state */
@media (max-width: 1023px) {
	#container:has(input#hamburger-toggle:checked) {
		min-height: 100vh;
		overflow-y: hidden;
	}
}
/* global nav - lg */
@media (min-width: 1024px) {
	#container {
		overflow: visible;
	}
}

/* -- 2.0 INNER CONTAINER  -- */
/* inner - default */
#container-inner {
	align-items: center;
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	height: 100%;
	transition: opacity 0.15s ease 0.15s;
	opacity: 1 !important;
	padding: 0;
	position: relative;
	width: 100%;
}
/* inner - lg */
@media (min-width: 1024px) {
	#container-inner {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		overflow-y: visible;
		padding: 0 32px;
	}
}
/* inner - xl */
@media (min-width: 1280px) {
	#container-inner {
		padding: 0 48px;
	}
}
/* inner - 2xl */
@media (min-width: 1536px) {
	#container-inner {
		padding: 0 64px;
	}
}

/* -- 3.0 HAMBURGER  -- */
/* hamburger - default */
#hamburger-toggle {
	opacity: 0;
}
/* hamburger - lg */
@media (min-width: 1024px) {
	#hamburger-toggle {
		display: none;
	}
}
/* hamburger label - default */
#hamburger-toggle + label {
	display: flex;
	padding: 0.5em;
	position: absolute;
	right: 1.25em;
	top: calc(var(--container-height) / 2 - 0.75em);
	height: 1.875em;
	width: 3em;
}
/* hamburger label -- hamburger focused */
#hamburger-toggle:focus-visible + label {
	outline: 0.125em solid #fff;
	background-color: color-mix(in srgb, var(--color-accent) 15%, transparent);
}
@supports not (background: color-mix(in srgb, #fff 5%, transparent)) {
	#hamburger-toggle:focus-visible + label {
		background-color: rgba(255, 255, 255, 15%);
	}
}
/* hamburger label -- hamburger hover */
#hamburger-toggle + label:hover {
	background: color-mix(in srgb, var(--color-secondary, #fff) 5%, transparent);
}
@supports not (background: color-mix(in srgb, #fff 5%, transparent)) {
	#hamburger-toggle + label:hover {
		background-color: rgba(255, 255, 255, 0.05);
	}
}
/* hamburger label - md */
@media (min-width: 768px) {
	#hamburger-toggle + label {
		right: 24px;
	}
}
/* hamburger label - lg */
@media (min-width: 1024px) {
	#hamburger-toggle + label {
		display: none;
	}
}
/* hamburger icon bars */
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

/* -- MAIN NAV-- */
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

/* main nav - xs */
@media (min-width: 420px) {
	#main-nav {
		padding: 1.75em 1.25em 8em;
	}
}
/* main nav - sm */
@media (min-width: 640px) {
	#main-nav {
		padding: 1.75em 1.75em 8em;
	}
}
/* main nav - md */
@media (min-width: 768px) {
	#main-nav {
		padding: 1.75em 2em 8em;
	}
}

/* main nav - lg */
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
/* main nav - xl */
@media (min-width: 1280px) {
	#main-nav {
		font-size: 17px;
		min-height: 3.5em;
	}
}
/* main nav - xl */
@media (min-width: 1536px) {
	#main-nav {
		font-size: 18px;
	}
}

/* main nav - after -- scroll mask */
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

/* -- MENU -- */
#main-nav .menu {
	overflow: visible;
	position: relative;
	opacity: 1;
}
/* menu heading button */
#main-nav .menu .menu-heading-button {
	display: none;
}
/* menu heading link */
#main-nav .menu .menu-heading-link {
	font-size: 18px;
}
/* menu heading button - lg */
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

/* menu heading */
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

/* -- BUTTON -- */

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
/* button - lg */
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

/* -- BRAND -- */
#brand-link {
	display: block;
	height: 100%;
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

/* -- XX UTILITIES  -- */

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

// TEMPLATE GETTER
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.styles}${this.els}`.trim();
	return template;
}

// IDS
get ids() {
 const ids = [...`${this.styles}${this.els}`.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
 return ids;
}

// CONSTRUCTOR
constructor() {
	super();
	// programattically create getters and setters for each observed attribute
	ComponentUtils.createOAGS(this.c, this);

	// create a shadow root
	this.attachShadow({ mode: "open" });

	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);

}

// CONNECTED CALLBACK
connectedCallback() {
	// fetch data from a remote json file if preferred
	this.fetchData();
	//this.updateAttributes();
}

// ATTRIBUTE CHANGED CALLBACK
attributeChangedCallback() {

}

// METHODS
fetchData() {
	// if no data url or it does not end in .json, return empty string
	if (!this.dataJsonUrl || !this.dataJsonUrl.includes('.json') ) return "";
	else {
  return /** @type {Promise<void>} */(new Promise((res, rej) => {
    fetch(`${this.dataJsonUrl}`)
      .then(data => data.json())
      .then((json) => {
        this.updateCSSVariables(json);
				this.updateTextContent(json);
				this.updateLinkButton(json);
				this.updateBrand(json);
        res();
      })
      .catch((error) => rej(error));
  }))
	}
}

/** @param {*} data */
updateCSSVariables(data) {
	const attributes = "color-accent color-background color-primary color-shadow font-family".split(" ");

	// iterate over the attributes, if the data has a value for the attribute, update the attribute
	attributes.forEach((attr) => {
		let value = data?.[attr] ?? this.getAttribute(attr);
		if (value) {
			if (this.refs.container.style.getPropertyValue(`--${attr}`) != value) this.refs.container.style.setProperty(`--${attr}`, value);
			if (this.getAttribute(attr) != value) this.setAttribute(attr, value);
		}
	});
}
/** @param {*} data */
updateTextContent(data) {
	// if data does not include 'stylesheet', return
	const stringifiedData = JSON.stringify(data);
	if (!stringifiedData.includes("stylesheet")) return;

	const attr = "stylesheet";
	let value = data?.[attr] ?? this.getAttribute(attr);
	if (value) {
		if (this.innerHTML != value) this.refs[`${attr.split('-')[0]}`].innerHTML = value;
		if (this.getAttribute(attr) != value) this.setAttribute(attr, value);
	}
}
/** @param {*} data */
updateLinkButton(data) {
	// if data does not include button-link, return
	const stringifiedData = JSON.stringify(data);
	if (!stringifiedData.includes("button-link")) return;

	// create array of attributes
	const id = "button-link";
	const attributes = "label url title rel".split(" ").map((attr) => `${id}-${attr}`);

	// get button ref
	const button = this.refs[id];

	//iterate over the attributes, if the data has a value for the attribute, update the attribute
	attributes.forEach((attr) => {
		// if attribute is "button-link-label", update the text content of the button
		if (attr === "button-link-label") {
			let value = data[attr] ?? this.getAttribute(attr);
			if (value) {
				if (button.textContent != value) button.textContent = value;
				if (this.getAttribute(attr) != value) this.setAttribute(attr, value);
			}
		}
		// else update the relevant attribute
		else {
			let value = data[attr] ?? this.getAttribute(attr);
			if (value) {
				const buttonAttr = attr.replace(`${id}-`, '') === "url" ? "href" : attr.replace(`${id}-`, '');
				if (button.getAttribute(buttonAttr) != value) button.setAttribute(buttonAttr, value);
				if (this.getAttribute(attr) != value) this.setAttribute(attr, value);
			}
		}
	});
}
/** @param {*} data */
updateBrand(data) {
	// if data does not include button-link, return
	const stringifiedData = JSON.stringify(data);
	if (!stringifiedData.includes("brand")) return;

	// create array of attributes
	const idRoot = "brand";
	const brandLinkAttributes = "title url".split(" ").map((attr) => `brand-link-${attr}`);
	const brandImageAttributes = "alt url".split(" ").map((attr) => `brand-image-${attr}`);

	// get refs
	const brandLink = this.refs['brand-link'];
	const brandImage = this.refs['brand-image'];


	//iterate over the attributes, if the data has a value for the attribute, update the attribute
	brandLinkAttributes.forEach((attr) => {
			let value = data[attr] ?? this.getAttribute(attr);
			if (value) {
				const id = 'brand-link'
				const _attr = attr.replace(`${id}-`, '') === "url" ? "href" : attr.replace(`${id}-`, '');
				if (brandLink.getAttribute(_attr) != value) brandLink.setAttribute(_attr, value);
				if (this.getAttribute(attr) != value) this.setAttribute(attr, value);
			}
	});
	brandImageAttributes.forEach((attr) => {
		let value = data[attr] ?? this.getAttribute(attr);
		if (value) {
			const id = 'brand-image'
			const _attr = attr.replace(`${id}-`, '') === "url" ? "src" : attr.replace(`${id}-`, '');
			if (brandImage.getAttribute(_attr) != value) brandImage.setAttribute(_attr, value);
			if (this.getAttribute(attr) != value) this.setAttribute(attr, value);
		}
});
}
}
customElements.define("site-header", SiteHeader);
export default SiteHeader;
