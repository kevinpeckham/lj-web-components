// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";
// @ts-expect-error yep got it
import SubWidgetHeader from "/e/wc/sub-widget-header@0.1.1.min.js";
// @ts-expect-error yep got it
import LogoGrid from "/e/wc/logo-grid@0.1.1.min.js";



/** @copyright 2024 Lightning Jar - "SubWidgetContainer" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/sub-widget-container} */

/**
 * Widget Heading Web Component
 * @name SubWidgetContainer
 * @class
 * @unpublished
 * @requires ComponentUtils
 * @requires SubWidgetHeader
 * @requires SubWidgetText
 * @classdesc Defines web component that provides a container for a widget with Heading, MetaTag, LinkButton and slot.
 * @attribute button-href | -- | # | href for the button
 * @attribute button-text | -- | Click Me | text for the button
 * @attribute button-title | -- | learn more | title for the button
 * @attribute color-accent | lightblue | #00dcbb | color of the text
 * @attribute color-background | -- | #0A2F7E| color of the widget background
 * @attribute color-primary | currentColor | white | color of the text
 * @attribute color-secondary | currentColor | #00bc9c | color of...
 * @attribute heading-text | -- | It takes one to know one. | text for the heading
 * @attribute heading-margin-bottom | 2.5rem | -- | margin bottom for the heading
 * @attribute meta-text | -- | This Just In
 * @attribute container-padding | 4rem | 4rem 4rem 6rem 4rem | padding for the container
 * @slot | -- | <div>Content in a slot.</div> | slot
for the text content
 * @note
 */
class SubWidgetContainer extends HTMLElement {
	// reference to class itself
	get c() { return SubWidgetContainer };
	buttonText = "";
	buttonTitle = "";
	buttonHref = "";
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";
	colorSecondary = "";
	headingText = "";
	headingMarginBottom = "";
	containerPadding = "";
	metaText = "";
	stylesheet = "";


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"button-href": "",
			"button-text": "",
			"button-title": "",
			"color-accent": "lightblue",
			"color-background": "transparent",
			"color-primary": "currentColor",
			"color-secondary": "currentColor",
			"heading-margin-bottom": "1rem",
			"heading-text": "",
			"meta-text": "",
			"container-padding": "4rem",
			"stylesheet": ""
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
	<sub-widget-header
	button-href="${buttonHref}"
	button-text="${buttonText}"
	button-title="${buttonTitle}"
	color-accent="${colorAccent}"
	color-primary="${colorPrimary}"
	color-secondary="${colorSecondary}"
	heading-text="${headingText}"
	meta-text="${metaText}">
	</sub-widget-header>
	<slot id="slot"></slot>
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
		color: var(--color-primary, currentColor);
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
		margin-bottom: var(--heading-margin-bottom, 1rem);
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
			headingText: this.headingText,
			metaText: this.metaText,
			buttonText: this.buttonText ?? "",
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
		this.refs.stylesheet.textContent = this.getAttribute("stylesheet");

	}
}

customElements.define("sub-widget-container", SubWidgetContainer);
export default SubWidgetContainer;
