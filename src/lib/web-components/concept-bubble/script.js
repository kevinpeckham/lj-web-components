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
 * @param {boolean} isOnScreen The state of the element.
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
		return ["container", "concept", "caption", "icon-i", "info"];
	}
	static get observedAttributes() {
		return [
			"concept",
			"caption",
			"color-accent",
			"color-secondary",
			"color-primary",
			"info",
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

	// get template
	static get template() {
		return `
				<span id="container">
					<span id="concept"></span>
					<span id="caption"></span>
					<span id="icon-i">i<span id="info"></span></span>
				</span>`;
	}

	// get styles
	static get styles() {
		return `
			<style>
				host:, * { margin:0; box-sizing:border-box ;}
				#container {
					align-items: baseline;
					background: rgb(100%100%100%/5%);
					border-radius: .5em;
					display: grid;
					font-weight: 800;
					gap: .3em;
					grid: auto-flow/auto 1fr;
					line-height: 1;
					outline: 1px solid;
					padding: 1.25em;
					position:relative;
					max-width: 8em;
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
				#icon-i {
					align-items:center;
					bottom: .75em;
					border-radius: 50%;
					border: 1px solid;
					cursor: pointer;
					display:flex;
					font-size:.5em;
					height: 1em;
					justify-content:center;
					opacity:.5;
					padding: .25em;
					position:absolute;
					transition: opacity .5s;
					right:.75em;
					width: 1em;
				}
				#icon-i:hover {
					opacity:1;
					color:var(--color-accent);
				}
				#icon-i:hover #info {
					opacity:1;
				}
				#info {
					border-radius: .5em;
					color: var(--color-secondary);
					position:absolute;
					bottom: 0%;
					left:95%;
					font-weight:400;
					font-size:1.8em;
					opacity:0;
					pointer-events:none;
					transition: opacity .25s;
					padding:.5em;
					background:var(--color-accent, lightblue);
				}

				/* if no value is provied for info, hide the icon */
				:host(:is([info=""],[info=undefined],[info=null])) #icon-i, :host(:not([info])) #icon-i {
					opacity:0;
					pointer-events:none;
				}

		</style>`;
	}

	// concept
	get concept() {
		return this.getAttribute("concept") || "";
	}
	set concept(value) {
		this.setAttribute("concept", value);
	}

	// caption
	get caption() {
		return this.getAttribute("caption") || "";
	}
	set caption(value) {
		this.setAttribute("caption", value);
	}

	// accent color
	get colorAccent() {
		return this.getAttribute("color-accent") || "lightblue";
	}
	set colorAccent(value) {
		this.setAttribute("color-accent", value);
		this.refs.container.style.setProperty("--color-accent", value);
	}

	// primary color
	get colorPrimary() {
		return this.getAttribute("color-primary") || "currentColor";
	}
	set colorPrimary(value) {
		this.setAttribute("color-primary", value);
		this.refs.container.style.setProperty("--color-primary", value);
	}

	// secondary color
	get colorSecondary() {
		return this.getAttribute("color-secondary") || "#142239";
	}
	set colorSecondary(value) {
		this.setAttribute("color-secondary", value);
		this.refs.container.style.setProperty("--color-secondary", value);
	}

	// info
	get info() {
		return this.getAttribute("info") || "";
	}
	set info(value) {
		this.setAttribute("info", value);
		if (value) this.refs.info.textContent = value;
	}

	/**
	 * @method
	 * @param {boolean} value */
	set isOnScreen(value) {
		if (value) this.refs?.container.classList.add("on-screen");
		else this.refs?.container.classList.remove("on-screen");
	}

	// helpers
	/** @param {string | undefined | null} str */
	updateDisplay(str) {}

	// constructor
	constructor() {
		super();

		// set initial values
		this.isOnScreen = false;

		// create a shadow root
		this.attachShadow({ mode: "open" });

		// create a template
		const template = document.createElement("template");
		template.innerHTML = `
		${ConceptBubble.styles}
		${ConceptBubble.template}
		`;

		// append the template content to the shadow DOM
		this.shadowRoot?.appendChild(template.content.cloneNode(true));

		// binding the parent context to the methods
		this.connectedCallback = this.connectedCallback.bind(this);

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
		// reset values
		this.isOnScreen = false;

		// set text content
		this.refs.caption.textContent = this.caption;
		this.refs.concept.textContent = this.concept;
		this.refs.info.textContent = this.info;
		this.refs.container.style.setProperty("--color-accent", this.colorAccent);
		this.refs.container.style.setProperty("--color-primary", this.colorPrimary);
		this.refs.container.style.setProperty(
			"--color-secondary",
			this.colorSecondary,
		);
	}
	/**
	 * @param {IntersectionObserverEntry[]} entries
	 * @returns {void}
	 * @description callback method which fires when the element is scrolled into view
	 */
	observerCallback(entries) {
		// test if the element is on screen
		const isOnScreen = entries[0].isIntersecting;

		// update variable to match the state of the element
		if (isOnScreen != this.isOnScreen) {
			this.isOnScreen = isOnScreen;
		}
	}
}
customElements.define("concept-bubble", ConceptBubble);
export default ConceptBubble;
