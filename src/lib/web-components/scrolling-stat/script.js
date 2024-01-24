/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Scrolling Stat Web Component
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that displays a number that counts up when it is scrolled into view.
 * @param {HTMLSpanElement} animation The animation element.
 * @param {HTMLDivElement} container The container element.
 * @param {number} decimalPlaces The number of decimal places to display.
 * @param {number} duration The duration of the animation in milliseconds.
 * @param {boolean} isOnScreen Whether the element is on screen.
 * @param {function} observerCallback The callback method for the observer.
 * @param {number} animationStartTime The time the animation started.
 * @param {function} tween The method that advances the animation.
 * @param {number} [valueStart=0] The duration of the animation in milliseconds.
 * @param {number} [valueEnd=99] The starting number.
 * @param { { [key:string]: HTMLSpanElement} } refs
 * @attribute {string} [animation-duration=800] The duration of the animation in milliseconds.
 * @attribute {string} [animation-value-start=0] The starting number.
 * @attribute {string} [animation-value-end=99] The ending number.
 * @attribute {string} [suffix=""] The unit of measurement.
 * @attribute {string} [caption=""] The text to display below the number.
 *
 */
class ScrollingStat extends HTMLElement {
	refs;
	animationStartTime;

	/**
	 * Attributes to observe for adding, removing, or changing.
	 * @static
	 * @returns {string[]} An array of attribute names to observe.
	 */

	static get elementIds() {
		return ["container", "animation", "suffix", "caption"];
	}
	static get observedAttributes() {
		return [
			"animation-duration",
			"animation-value-start",
			"animation-value-end",
			"suffix",
			"caption",
		];
	}
	/**
	 * Builds an object of refs elements from the elementIds array.
	 * @param {*} context
	 * @returns { { [key:string]: HTMLSpanElement} }
	 */
	static getDomElements(context) {
		const result = /** @type { { [key:string]: HTMLSpanElement} } */ (
			ScrollingStat.elementIds.reduce(
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
					<span id="animation">0</span>
					<span id="suffix"></span>
					<span id="caption">&nbsp;</span>
				</span>`;
	}

	// get styles
	static get styles() {
		return `
			<style>
				host:, * { margin:0; box-sizing:border-box ; }
				#container {
					align-items: baseline;
					background: rgb(100%100%100%/5%);
					border-radius: .3em;
					display: grid;
					font-weight: 800;
					gap: .3em;
					grid: auto-flow/auto 1fr;
					line-height: 1;
					outline: 1px solid;
					padding: 1.5em;
					max-width: 12em;
				}
				#animation{
					font-size:2.75em;
				}
				#suffix {
					font-size:1.9em;
				}
				#caption {
					font-size:.9em;
					font-style:italic;
					font-weight:400;
					grid-column:1/span 2;
					line-height:1.3;
					opacity:.9;
				}
		</style>`;
	}

	// getters and setters -- make attributes reflect in properties
	get animationDuration() {
		return this.getAttribute("animation-duration") || "800";
	}
	get animationDurationNumber() {
		return Math.abs(parseInt(this.animationDuration));
	}
	set animationDuration(value) {
		this.setAttribute("animation-duration", value);
	}
	get animationValueStart() {
		const attribute = this.getAttribute("animation-value-start");
		if (attribute) {
			return attribute;
		} else {
			const end = parseFloat(this.getAttribute("animationValueEnd") ?? "99");
			return `${Math.abs(end) > 49 ? 0 : end > 0 ? 99 : -99}`;
		}
	}
	get animationValueStartNumber() {
		return parseFloat(this.animationValueStart);
	}
	set animationValueStart(value) {
		this.setAttribute("animation-value-start", value);
	}
	get animationValueEnd() {
		return this.getAttribute("animation-value-end") || "99";
	}
	get animationValueEndNumber() {
		return parseFloat(this.animationValueEnd);
	}
	set animationValueEnd(value) {
		this.setAttribute("animation-value-end", value);
	}
	get animationValueCurrentNumber() {
		const start = this.animationValueStartNumber;
		const end = this.animationValueEndNumber;
		const progress = this.animationProgress;
		return start + (end - start) * progress;
	}
	get animationValueCurrentString() {
		return this.animationValueCurrentNumber.toFixed(this.decimalPlaces);
	}
	get suffix() {
		return this.getAttribute("suffix") || "";
	}
	set suffix(value) {
		this.setAttribute("suffix", value);
	}
	get caption() {
		return this.getAttribute("caption") || "";
	}
	set caption(value) {
		this.setAttribute("caption", value);
	}

	// derived
	get decimalPlaces() {
		return Math.min(
			(`${this.animationValueEnd}`.split(".")[1] || "").length,
			2,
		);
	}
	get animationProgress() {
		return Math.min(
			(Date.now() - this.animationStartTime) / this.animationDurationNumber,
			1,
		);
	}
	get animationTimeElapsed() {
		return Date.now() - this.animationStartTime;
	}

	// triggers
	/** @param {boolean} value */
	set isOnScreen(value) {
		this.animationStartTime = 0;
		if (value) this.tween();
	}

	// helpers
	/** @param {string | undefined | null} str */
	updateAnimationDisplay(str) {
		this.refs.animation.textContent = str
			? str
			: this.animationValueCurrentString;
	}

	// constructor
	constructor() {
		super();

		// set initial values
		this.animationStartTime = 0;
		this.isOnScreen = false;

		// create a shadow root
		this.attachShadow({ mode: "open" });

		// create a template
		const template = document.createElement("template");
		template.innerHTML = `
		${ScrollingStat.styles}
		${ScrollingStat.template}
		`;

		// append the template content to the shadow DOM
		this.shadowRoot?.appendChild(template.content.cloneNode(true));

		// binding the parent context to the methods
		this.connectedCallback = this.connectedCallback.bind(this);
		this.observerCallback = this.observerCallback.bind(this);
		this.tween = this.tween.bind(this);

		// get refs elements
		this.refs = ScrollingStat.getDomElements(this);
	}
	/**
	 * Method invoked when the custom element is first connected to the document's DOM. Defines DOM elements, adds css styling, and starts the observer.
	 * @method
	 * @returns {void}
	 * @summary Creates the shadow DOM, add styles, and starts the observer.
	 */
	connectedCallback() {
		// reset values
		this.animationStartTime = 0;
		this.isOnScreen = false;

		// set text content
		this.updateAnimationDisplay(this.animationValueStart);
		this.refs.caption.textContent = this.caption;
		this.refs.suffix.textContent = this.suffix;

		// create the observer
		const observer = new IntersectionObserver(this.observerCallback, {
			rootMargin: "0%",
			threshold: 0.5,
		});

		// start the observer
		observer.observe(this.refs.container);
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
	/**
	 * Tween Method
	 * @method
	 * @returns {void}
	 * @example
	 * tween(0, 99)
	 */
	tween() {
		// if zero, record new the start time
		if (!this.animationStartTime) this.animationStartTime = Date.now();

		// advance the displayed number to the current value
		this.updateAnimationDisplay(this.animationValueCurrentString);

		// if the current time elapsed is less than the duration
		// and the end value is not reached, request another frame
		// otherwise, update the display with the end value
		this.animationTimeElapsed < this.animationDurationNumber
			? window.requestAnimationFrame(() => this.tween())
			: this.updateAnimationDisplay(this.animationValueEnd);
	}
}
customElements.define("scrolling-stat", ScrollingStat);
export default ScrollingStat;
