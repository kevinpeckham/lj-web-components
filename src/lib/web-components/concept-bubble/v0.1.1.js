// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/concept-bubble} */

/**
 * Scrolling Stat Web Component
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc Defines web component that displays a number that counts up when it is scrolled into view.
 * @attribute color-accent | lightblue | lightblue | color of icon hover state
 * @attribute color-background | transparent | rgb(255 255 255 / .05) | background color of the bubble
 * @attribute color-border | transparent | lightblue | border color of the bubble
 * @attribute color-primary | currentColor | -- | color of the concept text
 * @attribute color-secondary | #142239 | -- | color of the caption text
 * @attribute color-swatch | transparent | lightblue | color of the bottom of the bubble
 * @attribute caption-textContent | -- | what do you think? | text content of the caption
 * @attribute concept-textContent | -- | Hello World | text content of the concept
 * @attribute info-textContent | -- | info | text content of the info
 * @attribute stylesheet-textContent | -- | -- | injects css into scoped custom stylesheet
 *
 */
class ConceptBubble extends HTMLElement {
	// reference to class itself
	get c() { return ConceptBubble };
	// refs;

	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		const values = {
			"color-accent": "lightblue",
			"color-background": "transparent",
			"color-border": "transparent",
			"color-primary": "currentColor",
			"color-secondary": "#142239",
			"color-swatch": "transparent",
			"caption-textContent": "test",
			"concept-textContent": "",
			"info-textContent": "",
			"stylesheet-textContent": "",
		};
	return values;
	}

	// get observed attributes
	static get observedAttributes() { return Object.keys(this.attributes) }

	// get default value for an attribute
	/** @param {string} attr */
	static getDefault(attr) { return this.attributes[attr] ?? "" }

	// ELEMENTS
	static get els() {
		return `
		<span id="container">
			<span id="concept"></span>
			<span id="caption"></span>
			<span id="icon">i<span id="info"></span></span>
		</span>`.trim();
	}

	// STYLES
	static get styles() {
		return `
			<style>
				host:, * { margin:0; box-sizing:border-box ;}
				#container {
					align-items: baseline;
					background-color: var(--color-background, transparent);
					border: 1px solid var(--color-border, currentColor);
					border-radius: .5em;
					display: grid;
					font-weight: 800;
					gap: .3em;
					grid: auto-flow/auto 1fr;
					line-height: 1;
					padding: 1.25em;
					position:relative;
					max-width: 10em;
				}
				#container:after {
					background-color:var(--color-swatch, transparent);
					border-radius: 0 0 .4em .4em;
					bottom:0;
					content:" ";
					height:.8em;
					opacity:1;
					position:absolute;
					width:100%;
				}
				#concept{
					font-size:1.25em;
				}
				#caption {
					font-size:.9em;
					font-style:italic;
					font-weight:400;
					grid-column:1/span 2;
					line-height:1.3;
					opacity:.9;
				}
				#icon, #info {
					position:absolute;
					transition: opacity .25s;
				}
				#icon {
					align-items:center;
					top: .75em;
					border-radius: 50%;
					border: 1px solid;
					cursor: pointer;
					display:flex;
					font-size:.5em;
					height: 1em;
					justify-content:center;
					opacity:.5;
					padding: .25em;
					right:.75em;
					width: 1em;
				}
				#icon:hover {
					opacity:1;
					color:var(--color-accent, lightblue);
				}
				#icon:hover #info {
					opacity:1;
				}
				#info {
					border-radius: .4em;
					color: var(--color-secondary, #142239);
					bottom: 0%;
					left:95%;
					font-weight:400;
					font-size:1.8em;
					opacity:0;
					padding:.5em;
					background:var(--color-accent, lightblue);
				}

				/* if no value is provied for info, hide the icon */
				:host(:is([info-textContent=""],[info-textContent=undefined],[info-textContent=null])) #icon, :host(:not([info-textContent])) #icon {
					opacity:0;
					pointer-events:none;
				}

		</style><style id="stylesheet"></style>`;
	}

	// TEMPLATE
	static get template() {
		const template = document.createElement("template");
		template.innerHTML = `${this.styles}${this.els}`.trim();
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
    this.shadowRoot?.appendChild(this.c.template.content.cloneNode(true))

		// define refs elements
    this.refs = ComponentUtils.getRefs(this.c, this);

		// update attributes
    this.updateAttributes();
	}

	 // LIFECYCLE CALLBACKS
	connectedCallback() {
		this.updateAttributes();
	 }
	 attributeChangedCallback() {
		this.updateAttributes();
	 }

	// METHODS
  updateAttributes() {
    ComponentUtils.updateManyElAttributes(this.c, this, this.c.ids);
		ComponentUtils.updateColorAttributes(this.c, this);
  }

}
customElements.define("concept-bubble", ConceptBubble);
export default ConceptBubble;
