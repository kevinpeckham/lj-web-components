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
 * @attribute brand-image-alt | logo | -- | alt text of the brand image
 * @attribute brand-image-url | -- | -- | url of the brand image
 * @attribute brand-link-url | / | -- | url of the brand link
 * @attribute brand-link-title | website home | -- | title of the brand link
 * @attribute button-link-label | Contact | -- | text content of the copy button
 * @attribute button-link-url | -- | -- | url of the copy button
 * @attribute button-link-title | -- | -- | get in touch | title of the copy button
 * @attribute color-accent | lightblue | -- | color of the accent
 * @attribute color-background | white | -- | color of the site header background
 * @attribute color-primary | darkblue | -- | color of the primary text
 * @attribute color-shadow | rgb(0 0 0 / 0.1) | -- | color of the shadow
 * @attribute container-height | 70px | -- | text content of the copy button
 * @attribute menus-data | [] | -- | json data for the menus
 * @attribute data-json-url | -- | /e/wc/site-header@0.1.1.min.json | fetch data from a remote json file if preferred
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
	containerHeight = "";
	menusData = "";
	stylesheetContent = "";

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
		"data-json-url": "",	// url to fetch data from

		// brand - image
		"brand-image-alt": "logo",
		"brand-image-url": "",

		// brand - link
		"brand-link-title": "website home",
		"brand-link-url": "/",

		//- button
		"button-link-label": "Contact",
		"button-link-title": "get in touch",
		"button-link-url": "",

		//- colors
		"color-accent": "red",
		"color-background": "#f8fafc",
		"color-primary": "darkblue",
		"color-shadow": "rgb(0 0 0 / 0.1)",

		//- sizing & layout
		"container-height": "70px",

		//- menus data
		"menus-data": "[]",

		//- stylesheet
		"stylesheet-content": ""
	};
return values;
}

// get parsed data
/** @returns {NavData} */
get parsedData() {
return this.dataJson ? JSON.parse(this.dataJson) : {};
}

// get parsed menus data
get parsedMenusData() {
	return JSON.parse(this.menusData ?? "") ?? [];
}

// get observed attributes
static get observedAttributes() { return Object.keys(this.attributes) }

// get default value for an attribute
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }


get containerHTML() {
	return `
	<header
		id="container"
		style="
			--color-accent: ${this.colorAccent};
			--color-background: ${this.colorBackground};
			--color-primary: ${this.colorPrimary};
			--color-shadow: ${this.colorShadow};
			--container-height: ${this.containerHeight};
			background-color:var(--color-background);
			color:var(--color-primary);
			height:var(--container-height, 70px);
			width:100%;
			z-index:999;">
			<div id="container-inner" class="hide-before-load" ></div>
	</header>`
}

get hamburgerHTML() {
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

/** @param {Link | undefined} link */
getMainNavLink(link) {
	return link && link.url && link.label ? `
	<div class="menu">
		<a
			class="menu-heading-link"
			href="${link.url}">
			${link.label}
		</a>
	</div>` : "";
}

/** @param {NavMenu[] | undefined} menusData */
getNavHTML(menusData) {
	let navContents = '';

	/** @type {NavMenu[]} menus */
	const menus = menusData ?? this.parsedMenusData ?? [];
	menus.forEach((menu) => {
		// if menu is just a link and has no sections
		if (menu.link) {
			navContents += this.getMainNavLink(menu.link);
		}
	});


	return `
	<nav id="main-nav">

		${navContents}

		<a
			id="button-link"
			href="${this.buttonLinkUrl}
			title="${this.buttonLinkTitle}>${this.buttonLinkLabel}</a>
	</nav>
	`
}

get brandHTML() {
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



// TEMPLATE
get template() {
	const template = document.createElement("template");
	template.innerHTML = `
		<style>.hide-before-load { opacity: 0;}</style>
		<link rel="stylesheet" href="https://unpkg.com/tailwindcss@3.4.1/src/css/preflight.css">
		<link rel="stylesheet" href="https://cdn.lj.dev/e/wc/site-header@0.1.1.min.css">
		${this.containerHTML}`.trim();

	// add inner content
	const headerInner = template.content.querySelector("#container-inner");
	if (headerInner) headerInner.innerHTML = `${this.hamburgerHTML}${this.getNavHTML(undefined)}${this.brandHTML}`;
	return template;
}

// IDS
get ids() {
 const ids = [...`${this.template.innerHTML}`.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
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

	// update attributes
	this.updateAttributes();
}

// CONNECTED CALLBACK
connectedCallback() {
	// fetch data from a remote json file if preferred
	this.fetchData();
	this.updateAttributes();
}

// ATTRIBUTE CHANGED CALLBACK
attributeChangedCallback() {
	this.updateAttributes();
}

// METHODS
updateAttributes() {
	ComponentUtils.updateColorAttributes(this.c, this);
}
fetchData() {
	// if no data url or it does not end in .json, return empty string
	if (!this.dataJsonUrl || !this.dataJsonUrl.includes('.json') ) return "";
	else {
  return /** @type {Promise<void>} */(new Promise((res, rej) => {
    fetch(`${this.dataJsonUrl}`)
      .then(data => data.json())
      .then((json) => {
        this.updateAttributesWithRemoteData(json);
        res();
      })
      .catch((error) => rej(error));
  }))
	}
}

	/**
	 * @param {any} data
	 */
updateAttributesWithRemoteData(data) {
	const keys = Object.keys(data);
	const camelKeys = keys.map((key) => ComponentUtils.kebabToCamel(key));	// convert to camel case

	// update color attributes
	keys.forEach((key) => {
		if (key.includes("color-")) {
			const newValue = data[key] ?? this.c.attributes[key];
			const oldValue = this.refs.container.style.getPropertyValue(`--${key}`);
			if (newValue !== oldValue || oldValue === null) {
				this.refs.container.style.setProperty(`--${key}`, newValue);
			};
		}
	});

	// update brand image
	if (data["brand-image-url"] && data["brand-image-url"] !== this.brandImageUrl) {
		this.refs["brand-image"].src = data["brand-image-url"];
		this.refs["brand-image"].alt = data["brand-image-alt"] ?? "logo";
	}

	// update brand link
	if (data["brand-link-url"] && data["brand-link-url"] !== this.brandLinkUrl) {
		this.refs["brand-link"].href = data["brand-link-url"];
		this.refs["brand-link"].title = data["brand-link-title"] ?? "website home";
	}

	// update button link
	if (data["button-link-url"] && data["button-link-url"] !== this.buttonLinkUrl) {
		this.refs["button-link"].href = data["button-link-url"];
		this.refs["button-link"].title = data["button-link-title"] ?? "get in touch";
		this.refs["button-link"].textContent = data["button-link-label"] ?? "Contact";
	}

	// update container height
	if (data["container-height"] && data["container-height"] !== this.containerHeight) {
		this.refs["container"].style.setProperty('--container-height', data["container-height"]) ;
	}

	// update menus
	if (data["menus-data"] && data["menus-data"] !== this.menusData) {

		const currentNav = this.refs["main-nav"];
		const template = document.createElement("template");
		template.innerHTML = this.getNavHTML(data["menus-data"]);
		const newNav = template.content.querySelector("#main-nav");
		if (currentNav && newNav) currentNav.replaceWith(newNav);

	}
}

}
customElements.define("site-header", SiteHeader);
export default SiteHeader;
