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
 * @attribute {string} [data-duration=800] The duration of the animation in milliseconds.
 * @attribute {string} [data-number-start=0] The starting number.
 * @attribute {string} [data-number-end=99] The ending number.
 * @attribute {string} [data-unit=""] The unit of measurement.
 * @attribute {string} [data-text=""] The text to display below the number.
 *
 */
class ScrollingStat extends HTMLElement {
	isOnScreen = false;
	start = 0;
	numberSpan = document.createElement("span");

	/**
	 * Attributes to observe for adding, removing, or changing.
	 * @static
	 * @returns {string[]} An array of attribute names to observe.
	 */
	static get observedAttributes() {
		return [
			"data-duration",
			"data-number-start",
			"data-number-end",
			"data-unit",
			"data-text",
		];
	}

	// constructor
	constructor() {
		super();

		// binding the parent context to the methods
		this.connectedCallback = this.connectedCallback.bind(this);
		this.tween = this.tween.bind(this);
		this.observerCallback = this.observerCallback.bind(this);
	}
	/**
	 * Method invoked when the custom element is first connected to the document's DOM. Defines DOM elements, adds css styling, and starts the observer.
	 * @method
	 * @returns {void}
	 * @summary Creates the shadow DOM, add styles, and starts the observer.
	 */
	connectedCallback() {
		// create a shadow root
		const shadowRoot = this.attachShadow({ mode: "open" }),
			elem = document.createElement("span"),
			unitElem = document.createElement("span"),
			textElem = document.createElement("span"),
			styleElem = document.createElement("style"),
			attrs = ["data-text", "data-unit"].map(
				(attr) => this.getAttribute(attr) || "",
			);

		// add text content
		this.numberSpan.textContent = "0";
		[textElem.textContent, unitElem.textContent] = attrs;

		// add the style rules
		styleElem.textContent = `
		* { margin:0;font-size;1em;box-sizing:border-box; }
		#w {
			align-items:baseline;
			background:rgb(100%100%100%/5%);
			border-radius:.3em;
			display:grid;
			font-weight:800;
			gap:.3em;
			grid:auto-flow/auto 1fr;
			line-height:1;
			outline:1px solid;
			padding:1.5em;
			max-width:12em;
		}
		#w span:nth-child(1) {
			font-size:2.75em;
		}
		#w span:nth-child(2) {
			font-size:1.9em;
		}
		#w span:nth-child(3) {
			font-size:.9em;
			font-style:italic;
			font-weight:400;
			grid-column:1/span 2;
			line-height:1.3;
			opacity:.9;
		}`;

		// append to shadow DOM
		shadowRoot.replaceChildren(styleElem, elem);
		elem.replaceChildren(this.numberSpan, unitElem, textElem);
		elem.id = "w";

		// create the observer
		const observer = new IntersectionObserver(this.observerCallback, {
			rootMargin: "0%",
			threshold: 0.5,
		});

		// start the observer
		observer.observe(elem);
	}
	/**
	 * @param {IntersectionObserverEntry[]} entries
	 * @returns {void}
	 * @description callback method which fires when the element is scrolled into view
	 */
	observerCallback(entries) {
		// test if the element is on screen
		const isVisible = entries[0].isIntersecting;

		// if on screen and not already on screen, start the animation
		if (isVisible != this.isOnScreen) {
			this.start = 0;
			this.tween();
			this.isOnScreen = isVisible;
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
		// record the start time
		if (!this.start) this.start = Date.now();

		// get the duration
		const duration = Math.abs(
				parseInt(this.getAttribute("data-duration") || "800"),
			),
			// get the end value
			endValue = parseFloat(this.getAttribute("data-number-end") || "99"),
			// get the start value
			// @ts-expect-error -- parseFloat will coerce the string to a number
			// prettier-ignore
			startValue = parseFloat(this.getAttribute("data-number-start") || (Math.abs(endValue) > 49 ? 0 : endValue > 0 ? 99 : -99)),
			// get progress
			progress = Math.min((Date.now() - this.start) / duration, 1),
			// get the current value
			currentValue = startValue + (endValue - startValue) * progress,
			// decimal places -- limit to 2
			decimalPlaces = Math.min((`${endValue}`.split(".")[1] || "").length, 2);

		// advance the displayed number
		this.numberSpan.textContent = currentValue.toFixed(decimalPlaces);

		// if the current number is not yet the target number, request another frame
		Date.now() - this.start < duration &&
		endValue - Number(this.numberSpan.textContent)
			? window.requestAnimationFrame(() => this.tween())
			: // set the final number
				(this.numberSpan.textContent = endValue.toFixed(decimalPlaces));
	}
}
customElements.define("scrolling-stat", ScrollingStat);
export default ScrollingStat;
