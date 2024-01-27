/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/concept-bubble} */

/**
 * Scrolling Stat Web Component
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that displays a number that counts up when it is scrolled into view.

 * @param {HTMLDivElement} container The container element.
 * @param {HTMLSpanElement} concept The animation element.
 * @param {HTMLSpanElement} caption The caption element.
 * @param { { [key:string]: HTMLSpanElement} } refs
 * @attribute {string} [concept=""]
 * @attribute {string} [caption=""]
 *
 */
class ConceptBubble extends HTMLElement {
	refs;

	/**
	 * Attributes to observe for adding, removing, or changing.
	 * @static
	 * @returns {string[]} An array of attribute names to observe.
	 */

	static get elementIds() {
		return ["container", "concept", "caption", "icon", "info", "stylesheet"];
	}
	static get observedAttributes() {
		return [
			"color-accent",
			"color-background",
			"color-border",
			"color-primary",
			"color-secondary",
			"color-swatch",
			"content-caption",
			"content-concept",
			"content-info",
			"content-stylesheet",
		];
	}
	/**
	 * Builds an object of refs elements from the elementIds array.
	 * @param {*} context
	 * @returns { { [key:string]: HTMLSpanElement} }
	 */
	static getDomElements(context) {
		const result = /** @type { { [key:string]: HTMLSpanElement} } */ (
			ConceptBubble.elementIds.reduce(
				(acc, id) => ({
					...acc,
					[id]: /** @type {HTMLSpanElement} */ (
						context.shadowRoot?.getElementById(id)
					),
				}),
				{},
			)
		);
		return result;
	}

	static createTemplate() {
		// create a template
		const template = document.createElement("template");
		template.innerHTML = `
		${ConceptBubble.styles}
		${ConceptBubble.template}
		`;
		return template;
	}

	// get template
	static get template() {
		return `
				<span id="container">
					<span id="concept"></span>
					<span id="caption"></span>
					<span id="icon">i<span id="info"></span></span>
				</span>`;
	}

	// get styles
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
				:host(:is([content-info=""],[content-info=undefined],[content-info=null])) #icon, :host(:not([content-info])) #icon {
					opacity:0;
					pointer-events:none;
				}

		</style><style id="stylesheet"></style>`;
	}

	// constructor
	constructor() {
		super();

		// programattically create getters and setters for each observed attribute
		for (let attr of ConceptBubble.observedAttributes) {
			Object.defineProperty(this, attr, {
				get: function () {
					return this.getAttribute(attr);
				},
				set: function (value) {
					this.setAttribute(attr, value);
					// if the attribute contains the word "content",
					// set the textContent of the corresponding element to the value of the attribute
					if (attr.includes("content")) {
						this.refs[attr.split("-")[1]].textContent = value;
					}
					// if the attribute contains the word "color",
					else if (attr.includes("color")) {
						this.refs.container.style.setProperty(`--${attr}`, value);
					}
				},
			});
		}

		// create a shadow root
		this.attachShadow({ mode: "open" });

		// create a template
		const template = ConceptBubble.createTemplate();

		// append the template content to the shadow DOM
		this.shadowRoot?.appendChild(template.content.cloneNode(true));

		// get refs elements
		this.refs = ConceptBubble.getDomElements(this);
	}
	/**
	 * Method invoked when the custom element is first connected to the document's DOM. Defines DOM elements, adds css styling, and starts the observer.
	 * @method
	 * @returns {void}
	 * @summary Creates the shadow DOM, add styles, and starts the observer.
	 */
	connectedCallback() {
		// TEXT
		// for each observed attribute that contains the word "content",
		// set the textContent of the corresponding element to the value of the attribute
		ConceptBubble.observedAttributes.forEach((attr) => {
			if (attr.includes("content")) {
				this.refs[attr.split("-")[1]].textContent = this.getAttribute(attr);
			}
		});

		// COLORS
		// for each observed attribute that contains the word "color",
		// set the style property of the corresponding css variable to the value of the attribute
		ConceptBubble.observedAttributes.forEach((attr) => {
			if (attr.includes("color")) {
				this.refs.container.style.setProperty(
					`--${attr}`,
					this.getAttribute(attr),
				);
			}
		});
	}
}
customElements.define("concept-bubble", ConceptBubble);
export default ConceptBubble;
