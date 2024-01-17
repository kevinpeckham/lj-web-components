// @preserve Copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT
/**
 * Class representing a TestComponent.
 * @extends HTMLElement
 */
class ScrollingStat extends HTMLElement {
	o = false; // is on screen
	n = document.createElement("span");
	s = 0; // start time

	// the observed attributes
	static get observedAttributes() {
		return ["duration", "number_start", "number_end", "unit", "text"];
	}

	// constructor
	constructor() {
		super();

		// binding the parent context to the methods
		this.connectedCallback = this.connectedCallback.bind(this);
		this.tw = this.tw.bind(this);
		this.oc = this.oc.bind(this);
	}
	/*
	 * @returns {void}
	 * @description
	 * This is the connected callback
	 */
	connectedCallback() {
		// create a shadow root
		const shadowRoot = this.attachShadow({ mode: "open" }),
			elem = document.createElement("span"),
			unitElem = document.createElement("span"),
			textElem = document.createElement("span"),
			styleElem = document.createElement("style"),
			attrs = ["text", "unit"].map((attr) => this.getAttribute(attr) || "");

		// add text content
		this.n.textContent = "0";
		[textElem.textContent, unitElem.textContent] = attrs;

		// add the style rules
		styleElem.textContent = `
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
			font-weight:400;
			font-style:italic;
			grid-column:1/span 2;
			line-height:1.3;
			opacity:.9;
		}`;

		// append to shadow DOM
		shadowRoot.replaceChildren(styleElem, elem);
		elem.replaceChildren(this.n, unitElem, textElem);
		elem.id = "w";

		// create the observer
		const observer = new IntersectionObserver(this.oc, {
			rootMargin: "0%",
			threshold: 0.5,
		});

		// start the observer
		observer.observe(elem);
	}
	/**
	 * @param {IntersectionObserverEntry[]} entries
	 * @returns {void}
	 * @description
	 * This is the observer callback method
	 */
	oc(entries) {
		// get the first entry
		const isVisible = entries[0].isIntersecting;

		// if on screen and not already on screen, start the animation
		if (isVisible != this.o) {
			this.s = 0;
			this.tw();
			this.o = isVisible;
		}
	}
	/**
	 * @returns {void}
	 * @description
	 * This is the tween number method
	 * @example
	 * tw(600, 99)
	 */
	tw() {
		// record the start time
		if (!this.s) this.s = Date.now();

		// scrub number function
		/**
		 * @returns {string}
		 * @param {string} str
		 * @description
		 * Scrubs invalid characters from a number string
		 * @example
		 * tw(600, 99)
		 */
		// const scrub_number = (str, regex) => str?.replace(regex, "");

		// get the duration
		const duration = Math.abs(parseInt(this.getAttribute("duration") || "800")),
			// get the end value
			endValue = parseFloat(this.getAttribute("number_end") || "99"),
			// get the start value
			// @ts-expect-error -- parseFloat will coerce the string to a number
			// prettier-ignore
			startValue = parseFloat(this.getAttribute("number_start") || (Math.abs(endValue) > 49 ? 0 : endValue > 0 ? 99 : -99)),
			// get progress
			progress = Math.min((Date.now() - this.s) / duration, 1),
			// get the current value
			currentValue = startValue + (endValue - startValue) * progress,
			// decimal places -- limit to 2
			decimalPlaces = Math.min((`${endValue}`.split(".")[1] || "").length, 2);

		// advance the displayed number
		this.n.textContent = currentValue.toFixed(decimalPlaces);

		// if the current number is not yet the target number, request another frame
		Date.now() - this.s < duration && endValue - Number(this.n.textContent)
			? window.requestAnimationFrame(() => this.tw())
			: // set the final number
				(this.n.textContent = endValue.toFixed(decimalPlaces));
	}
}
customElements.define("scrolling-stat", ScrollingStat);
