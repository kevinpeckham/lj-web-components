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


/** @copyright Lightning Jar 2024 - "Site Footer" web component */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/site-footer} */

/**
 * Copyright Statement Web Component
 * @name SiteFooter
 * @class
 * @published 2024-24-09
 * @extends HTMLElement
 * @classdesc Defines web component that renders a simple responsive site footer with logo, links and copyright statement.
 * @attribute brand-image-alt | logo | The Competency Alliance logo | alt text of the brand image
 * @attribute brand-image-url | -- | /images/custom/petro/tca-logo-dark.svg | url of the brand image
 * @attribute brand-link-url | / | -- | url of the brand link
 * @attribute brand-link-title | website home | -- | title of the brand link
 * @attribute brand-width | 100px | 100px | width of the brand image
 *
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
	copyrightText = "";
	dataJson = "";
	dataJsonUrl = "";
	fontFamily = "";
	containerHeight = "";
	legalLinksData = "";
	menusData = "";
	navLinksData = "";
	stylesheet= "";

// reference to class itself
get c() { return SiteFooter };


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

// ELEMENTS MASTER LAYOUT GETTER
get els() {
	return `
<style id="stylesheet">${this.stylesheet}</style>
<footer
	id="container"
	style="
		--color-accent: ${this.colorAccent};
		--color-background: ${this.colorBackground};
		--color-primary: ${this.colorPrimary};
		--color-shadow: ${this.colorShadow};
		--container-height: ${this.containerHeight};
		--font-family: ${this.fontFamily};">


		<!-- top section: brand, links, button -->
		<div id="top-section">
			<a
				id="brand-link"
				href="${this.brandLinkUrl}"
				title="${this.brandLinkTitle}">
				<img
					id="brand-image"
					alt="${this.brandImageAlt}"
					src="${this.brandImageUrl}"
					loading="lazy" />
			</a>
			<div id="nav-links">
			${JSON.parse(this.navLinksData).map((
				/** @type {Link} link*/
				link) => `<a class="nav-link" href="${link.url}">${link.label}</a>`).join("")}
			</div>
			<a
				id="button-link"
				href="${this.buttonLinkUrl}">${this.buttonLinkLabel}
			</a>
		</div>

		<!-- bottom section: legal and attribution -->
		<div id="bottom-section">
			<div id="copyright-statement">${this.copyrightText}</div>
			<div id="legal-links">
			${JSON.parse(this.legalLinksData).map((
				/** @type {Link} link*/
				link) => `<a href="${link.url}" rel="noopener noreferrer">${link.label}</a>`).join("")}


			</div>
		</div>
</footer>`.trim();
}

//${JSON.parse(this.legalLinksData).map((link) => 'test')};
//<!-- `<a href="${link.url}" rel="noopener noreferrer">${link.label}</a>`).join("") -->

get preflight() {
	return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}::before,::after {--tw-content:""}html,:host {line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:theme( "fontFamily.sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body {margin:0;line-height:inherit}hr {height:0;color:inherit;border-top-width:1px}abbr:where([title]) {text-decoration:underline dotted}h1,h2,h3,h4,h5,h6 {font-size:inherit;font-weight:inherit}a {color:inherit;text-decoration:inherit}b,strong {font-weight:bolder}code,kbd,samp,pre {font-family:theme( "fontFamily.mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small {font-size:80%}sub,sup {font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub {bottom:-0.25em}sup {top:-0.5em}table {text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea {font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select {text-transform:none}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring {outline:auto}:-moz-ui-invalid {box-shadow:none}progress {vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button {height:auto}[type="search"] {-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration {-webkit-appearance:none}::-webkit-file-upload-button {-webkit-appearance:button;font:inherit}summary {display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin:0}fieldset {margin:0;padding:0}legend {padding:0}ol,ul,menu {list-style:none;margin:0;padding:0}dialog {padding:0}textarea {resize:vertical}input::placeholder,textarea::placeholder {opacity:1;color:theme("colors.gray.400", #9ca3af)}button,[role="button"] {cursor:pointer}:disabled {cursor:default}img,svg,video,canvas,audio,iframe,embed,object {display:block;vertical-align:middle}img,video {max-width:100%;height:auto}[hidden] {display:none}`
}

get styles() {
	return `
<style id="preflight">${this.preflight}</style>
<style id="base">
	:host {
		box-sizing: border-box;
		border-width: 0;
		border-style: solid;
	}

	/* container */
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

/* top section */
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


/* button */
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

/* bottom section */
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

}

// CONNECTED CALLBACK
connectedCallback() {
		// append the template content to the shadow DOM
		this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

		// define refs elements
		this.refs = ComponentUtils.getRefs(this.c, this);

}


}
customElements.define("site-footer", SiteFooter);
export default SiteFooter;
