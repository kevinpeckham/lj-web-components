// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";
// @ts-expect-error yep got it
import SubWidgetHeading from "/e/wc/sub-widget-heading.@0.1.1.min.js";
// @ts-expect-error yep got it
import SubWidgetMeta from "/e/wc/sub-widget-meta@0.1.1.min.js";
// @ts-expect-error yep got it
import LinkButton from "/e/wc/link-button@0.1.1.min.js";
// @ts-expect-error yep got it
import SubWidgetText from "/e/wc/sub-widget-text@0.1.1.min.js";


/** @copyright 2024 Lightning Jar - "SubWidgetHeader" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/sub-widget-header} */

/**
 * Widget Heading Web Component
 * @name SubWidgetHeader
 * @class
 * @unpublished
 * @requires ComponentUtils
 * @requires SubWidgetHeading
 * @requires SubWidgetMeta
 * @requires SubWidgetText
 * @requires LinkButton
 * @classdesc Defines web component that provides a MetaTag, Heading, and LinkButton. Meant for use as a header to a widget or page section.
 * @attribute button-href | -- | https://petroskills.com/about/the-alliance | href for the button
 * @attribute button-text | -- | Become a Member | (optional) text for the button
 * @attribute button-title | -- | learn more about becoming a member | title for the button
 * @attribute color-accent | lightblue | #00dcbb | color of the text
 * @attribute color-primary | currentColor | white | color of the text
 * @attribute color-secondary | currentColor | #00bc9c | color of...
 * @attribute heading-text | -- | You don't have to face these obstacles alone. | heading text
 * @attribute header-text | -- | Energy companies are typically focused on their core businesses, rather than developing, executing, and maintaining competency development processes, programs, and systems. | header text
for the text content
 * @attribute meta-text | -- | Alliance Membership | meta text

 * @note


 */
class SubWidgetHeader extends HTMLElement {
	// reference to class itself
	get c() { return SubWidgetHeader };
	buttonText = "";
	buttonTitle = "";
	buttonHref = "";
	colorAccent = "";
	colorPrimary = "";
	colorSecondary = "";
	headerText = "";
	headingText = "";
	metaText = "";


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
			"color-primary": "currentColor",
			"color-secondary": "currentColor",
			"heading-text": "You don't have to face these obstacles alone.",
			"header-text": "",
			"meta-text": "Alliance Membership",
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
		metaText,
		headerText
	} = content
	return `
<div id="container">
	<div
		color-primary="${colorAccent}"
		id="meta"
		is="sub-widget-meta"
		style="margin-bottom: 1em;"
	>${metaText}</div>
	<div
		class="heading-row">
		<h2
			color-primary="${colorPrimary}"
			id="heading"
			is="sub-widget-heading",
			max-width="24em"
		>${headingText}</h2>
		<link-button
			id="button"
			border-width=".15em",
			color-backgroundHover="${colorSecondary}",
			color-borderHover="${colorSecondary}",
			color-primary="${colorAccent}",
			color-primaryHover="${colorPrimary}",
			link-href="${buttonHref}",
			link-title="${buttonTitle}",
			link-text="${buttonText}"
			style="display:${buttonText ? 'inline-block' : 'none'};"
		>${buttonText}</link-button>
	</div>
	<p
		id="text"
		is="sub-widget-text"
		max-width="32rem">${headerText}</p>
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
		margin-bottom:2.5rem;
		position:relative;
	}
	.heading-row {
		display: grid;
		grid-template-columns: minmax(0,1fr);
		place-content: center;
		place-items:center;
		text-align:center;
		gap: 1.5rem;
		margin-bottom: 2rem;
		width:100%;
	}
	p {
		display:block;
		max-width:30rem;
	}
	@media (min-width: 640px) {
		.heading-row {
			text-align:left;
			place-items:start;
			place-content:start;
		}
	}
	@media (min-width: 1024px) {
		.heading-row {
			margin-bottom: 3rem;
			display:flex;
			justify-content:space-between;
			align-items:flex-end;
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
			headerText: this.headerText,
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
		ComponentUtils.updateFontAttributes(this.c, this);
		ComponentUtils.updateColorAttributes(this.c, this);
	}
}

customElements.define("sub-widget-header", SubWidgetHeader);
export default SubWidgetHeader;
