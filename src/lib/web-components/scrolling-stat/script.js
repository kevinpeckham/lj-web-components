/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
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
    (acc, v) => ({...acc, [v[0]]: { default: v[1], example: v[2], description: v[3] }}),
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

// ELEMENTS
static get els() {
return `
<style id="stylesheet"></style>
<span id="container">
  <span id="animation">0</span>
  <span id="suffix"></span>
  <span id="caption">&nbsp;</span>
</span>`.trim();
}

// STYLES
static styles = `
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
</style>`;

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
  this.observedAttributes.forEach((attr) => {
    if (attr.includes("color")) {
      x.refs.container.style.setProperty(`--${attr}`, x.getAttribute(attr));
    }
  });
}

// TEXT
/** @param {*} x = context */
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
    return Math.min((str.split(".")[1] || "").length, limit);
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
    if (typeof limit === "number") {
        const parts = cleanedStr.split(".");
        if (parts[1]) {
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
    // our getters and setters will use the camelCase version of the attribute name
    for (let attr of ScrollingStat.observedAttributes) {
      const attrCamel = ScrollingStat.kebabToCamel(attr);
      Object.defineProperty(this, attrCamel, {
        get: function () {
          return this.getAttribute(attr) ?? ScrollingStat.getDefault(attr);
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
  const fallback = ScrollingStat.getDefault("animation-value-end");
  const raw = this.animationValueEnd;
  const scrubbed = ScrollingStat.scrubNumberString(raw, fallback, 2);
  const num = parseFloat(scrubbed);
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
    const fallback = ScrollingStat.getDefault("animation-value-start");
    const fb = (Math.abs(end) > 49 ? 0 : end > 0 ? 99 : -99) ?? fallback;
    const raw = this.animationValueStart;
    const scrubbed = ScrollingStat.scrubNumberString(raw, `${fb}`, 2);
    const num = parseFloat(scrubbed);
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
    const fallback = ScrollingStat.getDefault("animation-duration");
    const raw = this.animationDuration;
    const scrubbed = ScrollingStat.scrubNumberString(raw, fallback, 2);
    const num = Math.abs(parseInt(scrubbed));
    this.duration = num;
  }

  // updaters
  updatePlaces() {
    this.places = ScrollingStat.places(this.animationValueEnd);
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
    ScrollingStat.setAllText(this);
    ScrollingStat.setAllColors(this);
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
