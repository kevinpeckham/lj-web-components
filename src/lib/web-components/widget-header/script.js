// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";
// @ts-expect-error yep got it
import WidgetHeading from "/e/wc/widget-heading.min.js";
// @ts-expect-error yep got it
import WidgetMeta from "/e/wc/widget-meta.min.js";
// @ts-expect-error yep got it
import LinkButton from "/e/wc/link-button.min.js";


/** @copyright 2024 Lightning Jar - "WidgetHeader" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-header} */

/**
 * Widget Heading Web Component
 * @name WidgetHeader
 * @class
 * @published 2024-02-09
 * @requires ComponentUtils
 * @requires WidgetHeading
 * @requires WidgetMeta
 * @requires LinkButton
 * @classdesc Defines web component that provides a MetaTag, Heading, and LinkButton. Meant for use as a header to a widget or page section.
 * @attribute button-href | -- | https://petroskills.com/about/the-alliance | href for the button
 * @attribute button-textContent | -- | Become a Member | (optional) text for the button
 * @attribute button-title | -- | learn more about becoming a member | title for the button
 * @attribute color-accent | lightblue | #00dcbb | color of the text
 * @attribute color-primary | currentColor | white | color of the text
 * @attribute color-secondary | currentColor | #00bc9c | color of...
 * @attribute heading-textContent | -- | You don't have to face these obstacles alone.
 * @attribute meta-textContent | -- | Alliance Membership
for the text content
 * @note


 */
class WidgetHeader extends HTMLElement {
	// reference to class itself
	get c() { return WidgetHeader };
	buttonTextContent = "";
	buttonTitle = "";
	buttonHref = "";
	colorAccent = "";
	colorPrimary = "";
	colorSecondary = "";
	headingTextContent = "";
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
			"color-primary": "currentColor",
			"color-secondary": "currentColor",
			"heading-textContent": "You don't have to face these obstacles alone.",
			"meta-textContent": "Alliance Membership",
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
	<div
		color-primary="${colorAccent}"
		id="meta"
		is="widget-meta"
		style="margin-bottom: 1em;"
	>${metaText}</div>
	<div
		class="heading-row">
		<h2
			id="heading"
			is="widget-heading",
			max-width="24em"
		>${headingText}</h2>
		<link-button
			border-width=".15em",
			color-backgroundHover="${colorSecondary}",
			color-borderHover="${colorSecondary}",
			color-primary="${colorAccent}",
			color-primaryHover="${colorPrimary}",
			link-href="${buttonHref}",
			link-title="${buttonTitle}",
			link-textContent="${buttonText}"
			style="display:${buttonText ? 'inline-block' : 'none'};"
		>${buttonText}</link-button>
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
		//ComponentUtils.updateManyElAttributes(this.c, this, this.c.ids);
		ComponentUtils.updateFontAttributes(this.c, this);
		ComponentUtils.updateColorAttributes(this.c, this);

	}
}

customElements.define("widget-header", WidgetHeader);
export default WidgetHeader;
