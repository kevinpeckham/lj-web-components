// @preserve Copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT
/**
 * Class representing a TestComponent.
 * @extends HTMLElement
 */
class ScrollingStat extends HTMLElement {
	d = parseInt(this.getAttribute("d") ?? "600"); // duration
	o = false; // is on screen
	n = document.createElement("span");
	s = 0; // start time

	// the observed attributes
	static get observedAttributes() {
		return ["d", "number", "unit", "text"];
	}

	// constructor
	constructor() {
		super();

		// binding the parent context to the methods
		this.connectedCallback = this.connectedCallback.bind(this);
		this.tw = this.tw.bind(this);

		// observer callback
		this.oc = this.oc.bind(this);
	}

	/**
	 * @returns {void}
	 * @description
	 * This is the connected callback
	 */
	connectedCallback() {
		// create a shadow root
		const shadow = this.attachShadow({ mode: "open" });

		// create dom elements
		const w = document.createElement("span");
		const unit = document.createElement("span");
		const text = document.createElement("span");
		const style = document.createElement("style");

		// add attributes
		w.setAttribute("id", "w");

		// add text content
		this.n.textContent = "0";
		text.textContent = this.getAttribute("text") ?? "";
		unit.textContent = this.getAttribute("unit") ?? "";

		// add the style rules
		const style_rules = `
		#w {
			align-items:baseline;
			background:rgb(255 255 255 / .05);
			border-radius:.3em;
			display:grid;
			font-weight:800;
			gap:.3em;
			grid: auto-flow / auto 1fr;
			line-height:1;
			outline:1px solid currentColor;
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
		style.textContent = style_rules;

		// append to shadow DOM
		shadow.replaceChildren(style, w);
		w.replaceChildren(this.n, unit, text);

		// observer options
		const observer_options = {
			rootMargin: "0%",
			threshold: 0.5,
		};

		// create an observer
		const observer = new IntersectionObserver(this.oc, observer_options);

		// start the observer
		if (w) observer.observe(w);
	}
	/**
	 * @param {IntersectionObserverEntry[]} entries
	 * @returns {void}
	 * @description
	 * This is the observer callback method
	 */
	oc(entries) {
		// get the first entry
		const result = entries[0].isIntersecting;

		// if on screen and not already on screen, start the animation
		if (result != this.o) {
			this.s = 0;
			this.tw();
			this.o = result;
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

		// get the target number
		const target = this.getAttribute("number") ?? "99";

		// decimal places
		const places = target.split(".")[1]?.length ?? 0;

		// calculate the progress
		const progress = Math.min((Date.now() - this.s) / this.d, 1);

		// advance the number
		this.n.textContent = (Number(target) * progress).toFixed(places);

		// if the current number is not yet the target number, request another frame
		if (progress < 1) {
			window.requestAnimationFrame(() => this.tw());
			return;
		}

		// set the final number
		this.n.textContent = target;
	}
}
customElements.define("scrolling-stat", ScrollingStat);
