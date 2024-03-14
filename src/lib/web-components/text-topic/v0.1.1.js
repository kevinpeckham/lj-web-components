// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "TextTopic" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/text-topic} */

/**
 * Text Topic Web Component
 * @name TextTopic
 * @class
 * @published 2024-03-14
 * @requires ComponentUtils
 * @extends HTMLElement
 * @classdesc Defines web component that renders a section of plain body text, with an optional heading and and optional link.
 * @attribute body-text | -- | <p>PetroSkills expands under The Competency Alliance to Bridge the Learning and Development Gap Between Petroleum and the Energy TransitionThe energy industry is facing major challenges, such as the need for clean energy, new business models, emerging technologies, and the reallocation of oil and gas professionals to low carbon or renewable energy. These challenges are driving the requirement for new skills and competencies. To better serve the industry and its customers, PetroSkills is expanding into The Competency Alliance, building on the methodology we used to become the Oil & Gas industry’s leading alliance and expanding it to the Net Zero and Renewable sectors.</p><p>The Competency Alliance is grouped to cover the three major energy sectors. As it has done for over 50 years, PetroSkills covers Upstream, Midstream, and Downstream oil and gas. NetZeroSkills includes Greenhouse Gas Management, Carbon Capture/Sequestration, and Hydrogen. RenewableSkills handles the Wind and Geothermal sectors</p> | accepts a string of HTML content
 * @attribute color-primary | currentColor | white | color of the text
 * @attribute color-secondary | currentColor | darkblue | color of the link text on hover
 * @attribute font-family | inherit | -- | font family for the text
 * @attribute heading-text | -- | The Energy Industry Faces New Challenges | text for the heading
 * @attribute link-padding | .55rem 1.2rem | .75rem 1.33rem | padding around the text in the button button
 * @attribute link-rel | -- | external | selector for the target element
 * @attribute link-text | -- | Get Started | button text
 * @attribute link-title | -- | -- | selector for the target element
 * @attribute link-url | / | https://cdn.lj.dev/web-components | text appears on hover
 * @attribute transition-duration | .3s| .4s | transition duration for hover effect on link
 * @attribute transition-property | background-color, color, opacity | -- | transition property for hover effect on link
 * @attribute stylesheet | -- | -- | injects css into custom stylesheet
 */
class TextTopic extends HTMLElement {
	bodyText = "";
	colorPrimary = "";
	colorSecondary = "";
	fontFamily = "";
	headingText = "";
	linkPadding = "";
	linkRel = "";
	linkText = "";
	linkTitle = "";
	linkUrl = "";
	transitionDuration = "";
	transitionProperty = "";
	stylesheet = "";

	// reference to class itself
	get c() { return TextTopic };


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"body-text": "",
			"color-primary": "currentColor",
			"color-secondary": "darkblue",
			"font-family": "inherit",
			"heading-text": "",
			"link-padding": ".55rem 1.2rem",
			"link-rel": "external",
			"link-text": "Get Started",
			"link-title": "",
			"link-url": "/",
			"transition-duration": ".15s",
			"transition-property": "background-color, color, opacity",
			"stylesheet": ""
		};
	return values;
	}

	// get observed attributes
	static get observedAttributes() { return Object.keys(this.attributes) }

	// get default value for an attribute
	/** @param {string} attr */
	static getDefault(attr) { return this.attributes[attr] ?? "" }

// ELEMENTS MASTER LAYOUT GETTER
get els() {
	return `
<style id="stylesheet"></style>
<div
	id="container"
	style="
		--color-primary: ${this.colorPrimary};
		--color-secondary: ${this.colorSecondary};
		--font-family: ${this.fontFamily};
		--link-padding: ${this.linkPadding};
		--transition-duration: ${this.transitionDuration};
		--transition-property: ${this.transitionProperty};">
	<h3 id="heading">${this.headingText}</h3>
	<div id="text">${this.bodyText}</div>
	<a
		href="${this.linkUrl}"
		${(this.linkRel) ? `rel="${this.linkRel}"` : ''}
		${this.linkTitle ? `title="${this.linkTitle}"` : ''}
		id="link">${this.linkText}</a>
</div>`.trim();
}

get preflight() {
	return `
	*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}
	html,:host {line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}
	body {margin:0;line-height:inherit}
	hr {height:0;color:inherit;border-top-width:1px}
	abbr:where([title]) {text-decoration:underline dotted}
	h1,h2,h3,h4,h5,h6 {font-size:inherit;font-weight:inherit}
	a {color:inherit;text-decoration:inherit}
	b,strong {font-weight:bold}
	button,select {text-transform:none}
	:-moz-ui-invalid {box-shadow:none}
	blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin:0}
	ol,ul,menu {list-style:none;margin:0;padding:0}
	:disabled {cursor:default}
	img,svg,video,canvas,audio,iframe,embed,object {display:block;vertical-align:middle}
	img,video {max-width:100%;height:auto}
	[hidden] {display:none}`
}

// STYLES
get styles() {
	return `
	<style id="preflight">${this.preflight}</style>
	<style id="base">
	:host, * { box-sizing:border-box;margin:0; }
	#container {
		color: var(--color-primary, currentColor);
		font-size:1rem;
		max-width:576px;
		text-decoration:none;
	}
	#heading {
		font-size:1.05rem;
		font-weight: 700;
		margin-bottom:1rem;
		opacity:.95;
	}
	#text {
		line-height:1.6;
		opacity:0.9;
	}
	#text p {
		margin-bottom:1rem;
	}
	#link {
		color: var(--color-primary, currentColor);
		display:inline-block;
		font-size: .8rem;
		border: solid 1px var(--color-primary, currentColor);
		border-radius:.25rem;
		margin-bottom:.5rem;
		padding:.35rem .85rem;
		transition:background-color .15s ease;
	}
	#link:hover {
		border-color: var(--color-secondary, lightblue);
		background-color: var(--color-primary, lightblue);
		color: var(--color-secondary, currentColor);
	}
</style>`.trim();
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

	// constructor
	constructor() {
		super();

		// programattically create getters for each observed attribute
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

	// ATTRIBUTE CHANGED CALLBACK
	attributeChangedCallback() {
	}
}

customElements.define("text-topic", TextTopic);
export default TextTopic;
