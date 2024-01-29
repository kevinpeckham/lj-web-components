/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
`/** @author Kevin Peckham */`;
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Scrolling Stat Web Component
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that displays a number that counts up when it is scrolled into view.
 */

class ScrollingStat extends HTMLElement {
	// els = [""];
	animationDuration = "0";
	animationValueStart = "0";
	animationValueEnd = "0";
	colorBackground = "";
	colorBorder = "";
	colorPrimary = "";
	colorSecondary = "";
	contentSuffix = "";
	contentCaption = "";
	contentStylesheet = "";
	refs;

	// private variables
	#isOnScreen = false;
	#startTime = 0; // start time of the animation
	#start = 0; // number to start the animation from
	#end = 99; // number to end the animation at
	#duration = 0; // duration of the animation

	// TEMPLATE
	// define elements here
	static els = `
			<style id="stylesheet" content></style>
			<span id="container">
				<span id="animation">0</span>
				<span id="suffix" content></span>
				<span id="caption" content>&nbsp;</span>
			</span>`;

	// define styles here
	static styles = `
			<style>
				host:, * { margin:0; box-sizing:border-box ; }
				#container {
					align-items: baseline;
					background: var(--color-background, rgb(255 255 255 / 5%));
					outline: 1px solid var(--color-border, transparent);
					border-radius: .3em;
					color: var(--color-primary, currentColor);
					display: grid;
					font-weight: 800;
					gap: .3em;
					grid: auto-flow/auto 1fr;
					line-height: 1;
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
					color: var(--color-secondary, currentColor);
					font-size:.9em;
					font-style:italic;
					font-weight:400;
					grid-column:1/span 2;
					line-height:1.3;
					opacity:.9;
				}
		</style>`;

	// define custom attributes here
	/**
	 * Returns an object. The keys are prop names and the values are default values.
	 * @returns { { [key:string]: string} }
	 */
	static get customAttributes() {
		// attribute, default
		const values = [
			["animation-duration", "800"],
			["animation-value-end", "199"],
			["animation-value-start", "2"],
		];

		// convert values to obj
		const obj = values.reduce((acc, v) => ({ ...acc, [v[0]]: v[1] }), {});
		return obj;
	}

	// TEMPLATE
	// returns the template
	static get template() {
		// create a template
		const template = document.createElement("template");
		template.innerHTML = `
			${this.styles}
			${this.els}
			`;
		return template;
	}

	// IDS
	static get ids() {
		return [...`${this.els + this.styles}`.matchAll(/id="([^"]+)"/g)].map(
			(m) => m[1],
		);
	}

	// REFS
	/**
	 * Builds an object of refs elements from the ids array.
	 * @param {*} x = context
	 * @returns { { [key:string]: HTMLSpanElement} }
	 */
	static getRefs(x) {
		return /** @type { { [key:string]: HTMLSpanElement} } */ (
			this.ids.reduce(
				(acc, id) => ({
					...acc,
					[id]: /** @type {HTMLSpanElement} */ (
						x.shadowRoot?.getElementById(id)
					),
				}),
				{},
			)
		);
	}

	// PROPS
	static get getColorAttributes() {
		const regex = /var\(--(.*?),(?: )*?(.*?)\)/g;
		/** @type {{[key:string]: string}}j */
		const obj = {};
		let match;
		while ((match = regex.exec(this.styles)) !== null) {
			obj[match[1].trim()] = match[2].trim();
		}
		return obj;
	}
	/**
	 * return an array of content props from elements with content attribute
	 * @example
	 * // returns ["content-suffix", "content-caption", "content-stylesheet"]
	 * this.contentProps
	 * */
	static get #contentProps() {
		const regex = /<.*?id="(.*?)"(.*?)content(.*?)>/g;
		const matches = this.findMatches(regex, this.els);
		return matches.map((v) => `content-${v}`);
	}
	/**  return an array of color properties from stylesheet variables
	 * @example
	 * // returns ["color-background", "color-border", "color-primary", "color-secondary"]
	 * this.colorProps
	 *  */
	static get #colorProps() {
		return Object.keys(this.getColorAttributes);
	}

	// custom props
	/**
	 * return an array of custom props from the customAttributes method
	 * @example
	 * // returns ["animation-duration", "animation-value-start", "animation-value-end"]
	 * this.customProps
	 * */
	static get #customProps() {
		return Object.keys(this.customAttributes);
	}

	// OBSERVED ATTRIBUTES
	static get observedAttributes() {
		// prettier-ignore
		return [
			...this.#customProps,
			...this.#contentProps,
			...this.#colorProps];
	}

	// COLOR
	/**
	 * updates the css variables for all color attributes
	 * @param {*} x = context
	 * @param {string} attr
	 * */
	static setColor(x, attr) {
		x.refs.container.style.setProperty(`--${attr}`, x.getAttribute(attr));
	}
	/**
	 * updates the css variables for all color attributes
	 * @param {*} x = context */
	static setAllColors(x) {
		this.observedAttributes.forEach((attr) => {
			if (attr.includes("color")) {
				this.setColor(x, attr);
			}
		});
	}

	// TEXT
	/**
	 * updates the textContent of an element based on the matching attribute
	 * @param {*} x = context
	 * @param {*} attr
	 */
	static setText(x, attr) {
		x.refs[attr.split("-")[1]].textContent = x.getAttribute(attr);
	}
	/**
	 * updates the textContent of elements based on the content attributes
	 * @param {*} x */
	static setAllText(x) {
		this.observedAttributes.forEach((attr) => {
			if (attr.includes("content")) {
				x.refs[attr.split("-")[1]].textContent = x.getAttribute(attr);
			}
		});
	}

	// TWEEN
	/**
	 * Tween method to animate the displayed number.
	 * @method
	 * @param {*} x = context */
	static tween(x) {
		// if startTime is zero, record new the start time
		if (!x.startTime) x.startTime = Date.now();

		// calculate elapsed time
		const elapsed = Date.now() - x.startTime;

		// calculate progress
		const progress = Math.min(elapsed / x.duration, 1);

		// calculate the current value, "V"
		const current = x.start + (x.end - x.start) * progress;

		// advance animation to the current value
		x.updateAnimationText(current.toFixed(x.places));

		// if the current time elapsed is less than the duration
		// and the end value is not reached, request another frame
		// otherwise, update the display with the end value
		elapsed < x.duration
			? window.requestAnimationFrame(() => this.tween(x))
			: x.updateAnimationText(`${x.end}`);
	}

	// STATIC UTILS

	/**
	 * Converts a kebab-case string to camelCase.
	 * @param {string} str */
	static kebabToCamelCase(str) {
		return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
	}

	// find matches utility
	/**
	 * Generic static method to find matches in a string.
	 * @param {string} str
	 * @param {RegExp} regex
	 * @returns {string[]}
	 *  */
	static findMatches(regex, str) {
		const variables = new Set();
		let match;
		while ((match = regex.exec(str)) !== null) {
			variables.add(match[1].trim());
		}
		return Array.from(variables);
	}

	/**
	 * Get the number of decimal places in a string representation of a number.
	 * @param {string} str */
	static places(str, limit = 2) {
		return Math.min((str.split(".")[1] || "").length, limit);
	}
	/**
	 * Scrub a number string.
	 * @param {string} str
	 * @param {number} [limit]*/
	static scrubNumberString(str, limit) {
		// return empty string if str is falsy
		if (!str) return "";

		// remove illegal characters
		const s1 = str.toString().replace(/[^\d-.]+?/g, "") ?? "";

		// deal with more than 1 negative symbol
		const s2 = s1.includes("-")
			? "-" + s1.split("-")[s1.split("-").length - 1]
			: s1;

		// deal with more than 1 dot
		const s3 = s2.includes(".")
			? `${s2.split(".")[0]}.${s2.split(".")[1]}`
			: s2;

		// if decimal places limit is provided, then apply limit
		limit = limit && typeof limit === "number" ? limit : undefined;
		const split = s3.split(".");
		const length = split[1]?.length ?? 0;
		const s4 =
			limit && length > limit
				? `${split[0]}.${split[1].substring(0, limit)}`
				: s3;

		// make sure the result is a number not "-" or "."
		const s5 = parseFloat(s4 ?? "") ? parseFloat(s4 ?? "") : "";

		// return with one more fallback just in case
		return s5.toString() ?? "";
	}

	// CONSTRUCTOR
	constructor() {
		super();

		// programattically create getters and setters for each observed attribute
		// our getters and setters will use the camelCase version of the attribute name
		for (let attr of ScrollingStat.observedAttributes) {
			const attrCamel = ScrollingStat.kebabToCamelCase(attr);
			Object.defineProperty(this, attrCamel, {
				get: function () {
					// coerce to string in case the attribute is a number
					//console.log("get", this.getAttribute(attr));
					return this.getAttribute(attr) ?? "";
				},
				set: function (value) {
					this.setAttribute(attr, value);
				},
			});
		}

		// create a shadow root
		this.attachShadow({ mode: "open" });

		// create a template
		const template = ScrollingStat.template;

		// append the template content to the shadow DOM
		this.shadowRoot?.appendChild(template.content.cloneNode(true));

		// define refs elements
		this.refs = ScrollingStat.getRefs(this);

		// binding the parent context to the methods
		this.connectedCallback = this.connectedCallback.bind(this);
		this.observerCallback = this.observerCallback.bind(this);
	}

	// getter and setter for animation start time -- private variable
	get startTime() {
		return this.#startTime;
	}
	set startTime(value) {
		this.#startTime = value;
	}
	resetStartTime() {
		this.#startTime = 0;
	}

	// getter and setter for isOnScreen -- private variable
	get isOnScreen() {
		return this.#isOnScreen;
	}
	/** @param {boolean} value */
	set isOnScreen(value) {
		this.#isOnScreen = value;
		// when the element is scrolled into view, reset the start time and start the tween
		if (value) {
			this.#startTime = 0;
			ScrollingStat.tween(this);
		}
	}

	// getter and setter and updater for end -- private variable
	get end() {
		return this.#end;
	}
	set end(value) {
		this.#end = value;
	}
	updateEnd() {
		const fallback = ScrollingStat.customAttributes["animation-value-end"];
		const raw = this.animationValueEnd;
		const scrubbed = ScrollingStat.scrubNumberString(raw, 2);
		const num = scrubbed
			? parseFloat(scrubbed) ?? fallback
			: parseFloat(fallback);
		this.end = num;
	}

	// getter and setter and updater for start -- private variable
	get start() {
		return this.#start;
	}
	set start(value) {
		this.#start = value;
	}
	updateStart() {
		const end = this.end;
		const fallback = ScrollingStat.customAttributes["animation-value-start"];
		const fb = (Math.abs(end) > 49 ? 0 : end > 0 ? 99 : -99) ?? fallback;
		const raw = this.animationValueStart;
		const scrubbed = ScrollingStat.scrubNumberString(raw, 2);
		const num = scrubbed ? parseFloat(scrubbed) ?? fb : fb;
		this.start = num;
	}

	// getter and setter and updater for duration -- private variable
	get duration() {
		return this.#duration;
	}
	set duration(value) {
		this.#duration = value;
	}
	updateDuration() {
		const fallback = parseInt(
			ScrollingStat.customAttributes["animation-duration"],
		);
		const raw = this.animationDuration;
		const scrubbed = ScrollingStat.scrubNumberString(raw, 2);
		const num = scrubbed ? Math.abs(parseInt(scrubbed)) ?? fallback : fallback;
		this.duration = num;
	}

	// updaters
	updatePlaces() {
		this.places = ScrollingStat.places(this.animationValueEnd);
	}

	// NON-STATIC METHODS
	/**
	 * Updates the textContent of the animation element.
	 * @param {string} str */
	updateAnimationText(str) {
		this.refs.animation.textContent = str ?? "";
	}
	resetAnimation() {
		this.updateEnd();
		this.updatePlaces();
		this.updateStart();
		this.updateDuration();
		this.resetStartTime();
	}
	resetContent() {
		ScrollingStat.setAllText(this);
		ScrollingStat.setAllColors(this);
	}
	/**
	 * Method invoked when the custom element is first connected to the document's DOM. Defines DOM elements, adds css styling, and starts the observer.
	 * @method
	 * @returns {void}
	 * @summary Creates the shadow DOM, add styles, and starts the observer.
	 */

	attributeChangedCallback() {
		this.resetAnimation();
		this.resetContent();
	}

	connectedCallback() {
		// reset values
		this.resetAnimation();
		this.resetContent();

		// create and start the observer
		new IntersectionObserver(this.observerCallback, {
			rootMargin: "0%",
			threshold: 0.5,
		}).observe(this.refs.container);
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
customElements.define("scrolling-stat", ScrollingStat);
export default ScrollingStat;
