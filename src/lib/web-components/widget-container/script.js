// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";
// @ts-expect-error yep got it
import WidgetHeader from "/e/wc/widget-header.min.js";
// @ts-expect-error yep got it
import WidgetText from "/e/wc/widget-text.min.js";
// @ts-expect-error yep got it
import LogoGrid from "/e/wc/logo-grid.min.js";



/** @copyright 2024 Lightning Jar - "WidgetContainer" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-container} */

/**
 * Widget Heading Web Component
 * @name WidgetContainer
 * @class
 * @published 2024-02-09
 * @requires ComponentUtils
 * @requires WidgetHeader
 * @requires WidgetText
 * @classdesc Defines web component that provides a container for a widget with Heading, MetaTag, LinkButton and slot.
 * @attribute button-href | -- | https://petroskills.com/about/the-alliance | href for the button
 * @attribute button-textContent | -- | Become a Member | (optional) text for the button
 * @attribute button-title | -- | learn more about becoming a member | title for the button
 * @attribute color-accent | lightblue | #00dcbb | color of the text
 * @attribute color-background | -- | #0A2F7E| color of the widget background
 * @attribute color-primary | currentColor | white | color of the text
 * @attribute color-secondary | currentColor | #00bc9c | color of...
 * @attribute heading-textContent | -- | You don't have to face these obstacles alone.
 * @attribute meta-textContent | -- | Alliance Membership
 * @attribute container-padding | 4rem | 4rem 4rem 6rem 4rem | padding for the container
 * @slot | -- | <logo-grid grid-stagger="on" tile-border-radius="1em" tile-color-background="white" tile-aspect-ratio="290 / 128" tile-opacity="85%" tile-opacity-hover="100%" tile-padding="10px" data-tiles={[{"name":"Apple","image-src":"/images/logos/apple.svg","link-href":"https://apple.com"},{"name":"Svelte","image-src":"/images/logos/svelte.svg","link-href":"https://svelte.dev"},{"name":"Node","image-src":"/images/logos/nodejs.svg","link-href":"https://nodejs.org"},{"name":"Typescript","image-src":"/images/logos/typescript.svg","link-href":"https://www.typescriptlang.org"},{"name":"Tailwind","image-src":"/images/logos/tailwind.svg","link-href":"https://tailwindcss.com"},{"name":"Vercel","image-src":"/images/logos/vercel.svg","link-href":"https://vercel.com"},{"name":"Github","image-src":"/images/logos/github.svg","link-href":"https://github.com"},{"name":"Vite","image-src":"/images/logos/vite.svg","link-href":"https://vite.com"},{"name":"PNPM","image-src":"/images/logos/pnpm.svg","link-href":"https://pnpm.io"}]}></logo-grid> | slot
for the text content
 * @note


 */
class WidgetContainer extends HTMLElement {
	// reference to class itself
	get c() { return WidgetContainer };
	buttonTextContent = "";
	buttonTitle = "";
	buttonHref = "";
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";
	colorSecondary = "";
	headingTextContent = "";
	containerPadding = "";
	metaTextContent = "";


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"button-href": "",
			"button-textContent": "",
			"button-title": "",
			"color-accent": "lightblue",
			"color-background": "transparent",
			"color-primary": "currentColor",
			"color-secondary": "currentColor",
			"heading-textContent": "You don't have to face these obstacles alone.",
			"meta-textContent": "Alliance Membership",
			"container-padding": "4rem",
		};

	return values;
	}

	// get observed attributes
	static get observedAttributes() { return Object.keys(this.attributes) }

	// get default value for an attribute
	/** @param {string} attr */
	static getDefault(attr) { return this.attributes[attr] ?? "" }

// ELEMENTS
/** @param {{[key:string]: string}} content */
static els(content) {
	const {
		buttonHref,
		buttonText,
		buttonTitle,
		headingText,
		colorAccent,
		colorPrimary,
		colorSecondary,
		metaText
	} = content
	return `
<div id="container">
	<widget-header
	button-href="https://petroskills.com/about/the-alliance"
	button-textContent="Become a Member"
	button-title="learn more about becoming a member"
	color-accent="#00dcbb"
	color-primary="white"
	color-secondary="#00bc9c"
	heading-textContent="You don't have to face these obstacles alone."
	meta-textContent="Alliance Membership">
	</widget-header>
	<div id="slot"></div>
</div>

</div>`.trim();
}

// STYLES
static get styles() {
	return `
<style>
	:host, * { box-sizing:border-box;margin:0; }
	#container {
		font-size:16px;
		background-color: var(--color-background, transparent);
		padding: var(--container-padding, 4rem);
	}
	.heading-row {
		display: grid;
		grid-template-columns: minmax(0,1fr);
		place-content: center;
		place-items:center;
		text-align:center;
		gap: 1.5rem;
		margin-bottom: 2.5rem;
		position:relative;
		width:100%;
	}
	@media (min-width: 640px) {
		.heading-row {
			text-align:left;
			display:flex;
			justify-content:space-between;
			align-items:flex-end;
		}
	}
	@media (min-width: 1024px) {
		.heading-row {
			margin-bottom: 3rem;
		}
	}
</style><style id="stylesheet"></style>`.trim();
}

// TEMPLATE
/** @param {{[key:string]: string}} content */
static template(content) {
	const template = document.createElement("template");

	template.innerHTML = `${this.styles}${this.els(content)}`.trim();
	return template;
}

	// IDS
	static get ids() {
		return [...`${this.els + this.styles}`.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
	}

	// constructor
	constructor() {
		super();

		// programattically create getters and setters for each observed attribute
    ComponentUtils.createOAGS(this.c, this);

		// create a shadow root
		this.attachShadow({ mode: "open" });

		// append the template content to the shadow DOM
		const content = {
			colorAccent: this.colorAccent,
			colorPrimary: this.colorPrimary,
			colorSecondary: this.colorSecondary,
			headingText: this.headingTextContent,
			metaText: this.metaTextContent,
			buttonText: this.buttonTextContent ?? "",
			buttonTitle: this.buttonTitle,
			buttonHref: this.buttonHref,
		};
		const template = this.c.template(content);
		this.shadowRoot?.appendChild(template.content.cloneNode(true))

		// define refs elements
    this.refs = ComponentUtils.getRefs(this.c, this);

		// update attributes
    this.updateAttributes();


	}

	// CONNECTED CALLBACK
	connectedCallback() {
		this.updateAttributes();
	}

	// ATTRIBUTE CHANGED CALLBACK
	attributeChangedCallback() {
		this.updateAttributes();
	}

	// METHODS
	updateAttributes() {
		ComponentUtils.updateManyElAttributes(this.c, this, this.c.ids);
		ComponentUtils.updateFontAttributes(this.c, this);
		ComponentUtils.updateColorAttributes(this.c, this);

		this.refs.slot.innerHTML = this.innerHTML;
		this.refs.container.style.setProperty("--container-padding", this.containerPadding);

	}
}

customElements.define("widget-container", WidgetContainer);
export default WidgetContainer;
