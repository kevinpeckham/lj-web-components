/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
/** @license MIT */
/** @version 0.0.2 */
/** {@link https://lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Scrolling Stat Web Component
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that displays a number that counts up when it is scrolled into view.
 */
class ScrollingStat extends HTMLElement {
// reference to class itself
get c() { return ScrollingStat };

// initialize animation variables
animationDuration = "0";
animationValueStart = "0";
animationValueEnd = "0";

// initialize private variables
#isOnScreen = false;
#startTime = 0; // start time of the animation
#start = 0; // number to start the animation from
#end = 99; // number to end the animation at
#duration = 0; // duration of the animation
#places = 0; // number of decimal places to display

// ATTRIBUTES


/**
 * Returns an object. The keys are prop names and the values are objects with default, example, and description properties.
 * @returns { { [key:string]: { default: string, example: string, description: string} } }
 */
static get attributes() {
  // attribute, default, example, description
  // TODO: move examples and descriptions out of minified file
  const values = [
    ["animation-duration", "800", "600", "duration of animation in ms"],
    ["animation-value-end", "99", "98.99", "the number to animate from"],
    ["animation-value-start", "0", "", "the number to animate to"],
    ["color-background", "transparent", "", "background color"],
    ["color-border", "transparent", "currentColor", "border color"],
    ["color-primary", "currentColor", "", "primary text color"],
    ["color-secondary", "currentColor", "", "secondary text color"],
    ["content-suffix", "", "%", "characters displayed after number"],
    ["content-caption","","widgets per lorem","caption displayed after number",],
    ["content-stylesheet", "", "", "inject css into stylesheet"],
  ];

  // convert values to obj
  const obj = values.reduce(
    (acc, v) => ({...acc, [v[0]]:
      (v[2] && v[3]) ?
      { default: v[1], example: v[2], description: v[3] } :
      { default: v[1] }
    }),
    {},
  );
  return obj;
}
static get observedAttributes() { return Object.keys(this.attributes) }
/**
 *
 * @param {string} prop
 * @returns
 */
static getDefault(prop) {
  return this.attributes[prop]?.default ?? "";
}

// GETTERS AND SETTERS
/**
 * Creates Observed Attribute Getters and Setters.
 * @param {*} x = context
 * @returns {void}
 * */
static createOAGS(x) {
  for (let attr of this.observedAttributes) {
		const def = this.getDefault(attr);
    Object.defineProperty(x, this.kebabToCamel(attr), {
      get: function () {
        return x.getAttribute(attr) ?? def;
      },
      set: function (value) {
        if (typeof value === 'string') x.setAttribute(attr, value);
      },
    });
  }
}

// ELEMENTS
static get els() {
return `
<style id="stylesheet"></style>
<span id="container">
  <span id="animation"></span>
  <span id="suffix"></span>
  <span id="caption"></span>
</span>`.trim();
}

// STYLES
static get styles() {
return `
<style>
host:, * { margin:0; box-sizing:border-box ; }
#container {
  align-items: baseline;
  background: var(--color-background, ${this.getDefault("color-background")});
  outline: 1px solid var(--color-border, ${this.getDefault("color-border")});
  border-radius: .3em;
  color: var(--color-primary, ${this.getDefault("color-primary")} );
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
  color: var(--color-secondary, ${this.getDefault("color-secondary")});
  font-size:.9em;
  font-style:italic;
  font-weight:400;
  grid-column:1/span 2;
  line-height:1.3;
  opacity:.9;
}
</style>`
};

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

// COLORS
/** @param {*} x = context */
static setAllColors(x) {
	const attrs = this.observedAttributes.filter((attr) => attr.includes("color-"));
	/** @type {HTMLElement | null} */
	const container = x.refs.container;
	if (container) {
  attrs.forEach((attr) => container.style.setProperty(`--${attr}`, x.getAttribute(attr)));
	}
}

// TEXT
/** @param {*} x = context */
static setAllText(x) {
	// get all attributes that start with "content-"
	const attrs = this.observedAttributes.filter((attr) => attr.includes("content-"));
	attrs.forEach((attr) => {
			const key = attr.split("-")[1];
			/** @type { (HTMLElement | null) } el */
			const el = x.refs[key];
			if (key && el) {
				el.textContent = x.getAttribute(attr) ?? "";
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

  // UTILS
  /**
   * Converts a kebab-case string to camelCase.
   * @param {string} str */
  static kebabToCamel(str) {
    return str.replace(/-([a-z])/ig, (g) => g[1].toUpperCase());
  }
  /**
   * Get the number of decimal places in a string representation of a number.
   * @param {string} str */
  static places(str, limit = 2) {
		if (!str) return 0;
    return Math.min((str.split(".")[1] ?? "")?.length, limit);
  }
  /**
   * Scrub a number string.
   * @param {string} str - the string to scrub
   * @param {string} fallback - the fallback value if the string is not a number
   * @param {number} [limit] - an optional limit to the number of decimal places
   * */
  static scrubNumberString(str, fallback, limit) {
    // Set fallback to a valid number or default to "0"
    fallback = isNaN(parseFloat(fallback)) ? "0" : parseFloat(fallback).toString();

    // Check if the input string is valid
    if (!str) return fallback;

    // Remove illegal characters and handle negative sign and dot
    let cleanedStr = str.toString().replace(/[^\d-.]+/g, "");
    cleanedStr = cleanedStr.replace(/(?!^)-+/g, "").replace(/\.(?=.*\.)/g, "");

    // Apply decimal place limit if provided
    if (typeof limit === "number" && limit > 0) {
        const parts = cleanedStr?.split(".");
        if (parts.length > 1) {
            cleanedStr = parts[0] + "." + parts[1].substring(0, limit);
        }
    }

    // Ensure the result is a valid number, else return fallback
    return isNaN(parseFloat(cleanedStr)) ? fallback : cleanedStr;
}


  // CONSTRUCTOR
  constructor() {
    super();

    // programattically create getters and setters for each observed attribute
    this.c.createOAGS(this);

    // create a shadow root
    this.attachShadow({ mode: "open" });

    // create a template
    const template = this.c.template;

    // append the template content to the shadow DOM
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    // define refs elements
    this.refs = this.c.getRefs(this);

    // binding the parent context to the methods
    this.connectedCallback = this.connectedCallback.bind(this);
    this.observerCallback = this.observerCallback.bind(this);
  }

  // getter and setter and reset for #startTime -- private variable
  get startTime() {
    return this.#startTime;
  }
  set startTime(value) {
    if (value && typeof value  === "number") this.#startTime = value;
  }
  resetStartTime() {
    this.startTime = 0;
  }

  // getter and setter for isOnScreen -- private variable
  get isOnScreen() {
    return this.#isOnScreen;
  }
  /** @param {boolean} value */
  set isOnScreen(value) {
    if (typeof value  === "boolean") this.#isOnScreen = value;
    // when the element is scrolled into view, reset the start time and start the tween
    if (value === true) {
      this.#startTime = 0;
      this.c.tween(this);
    }
  }

  // getter and setter and updater for end -- private variable
  get end() {
    return this.#end;
  }
  set end(value) {
    if (typeof value === "number") this.#end = value;
  }
  updateEnd() {
    const fallback = this.c.getDefault("animation-value-end");
    this.end = this.start = parseFloat(this.c.scrubNumberString(this.animationValueEnd, `${fallback}`, 2));
  }

  // getter and setter and updater for start -- private variable
  get start() {
    return this.#start;
  }
  set start(value) {
		if (typeof value === "number") this.#start = value;
  }
  updateStart() {
    const fallback = this.c.getDefault("animation-value-start");
    this.start = parseFloat(this.c.scrubNumberString(this.animationValueStart, `${fallback}`, 2));
}

  // getter and setter and updater for duration -- private variable
  get duration() {
    return this.#duration;
  }
  set duration(value) {
		if (typeof value === "number") this.#duration = value;
  }
  updateDuration() {
    const fallback = this.c.getDefault("animation-duration");
    this.duration = Math.abs(parseInt(this.c.scrubNumberString(this.animationDuration, `${fallback}`, 0)));
  }

   // getter and setter and updater for places -- private variable
	 get places() {
    return this.#places;
  }
  set places(value) {
		if (typeof value === "number") this.#places = value;
  }
  updatePlaces() {
    this.places = this.c.places(this.animationValueEnd);
  }

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
    this.c.setAllText(this);
    this.c.setAllColors(this);
  }

  // LIFECYCLE METHODS
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

  // OBSERVER CALLBACK
  /**
   * callback method which fires when the element is scrolled into view
   * @param {IntersectionObserverEntry[]} entries
   * @returns {void}
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
