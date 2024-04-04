// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";


/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/scrolling-stat} */

/**
 * Scrolling Stat Web Component
 * @class
 * @extends HTMLElement
 * @unpublished
 * @classdesc Web component that displays a number that counts up or down to another number when the element is scrolled into view.
 * @attribute animation-duration     | 800          | 600               | duration of animation in ms
 * @attribute animation-value-end    | 99           | 98.99             | the number to animate from
 * @attribute animation-value-start  | 0            | --                | the number to animate to
 * @attribute color-background       | transparent  | rgb(255 255 255 / 2.5%) | background color
 * @attribute color-border           | currentColor | --     						| border color
 * @attribute color-primary          | currentColor | --               | primary text color
 * @attribute color-secondary        | currentColor | --                | secondary text color
 * @attribute container-border-width | 1px          | --                | border width of the container
 * @attribute container-height       | auto         | --                | height of the container
 * @attribute container-width        | 100%         | --                | width of the container
 * @attribute container-max-width    | none         | 14rem                | max width of the container
 * @attribute container-padding      | 1.5em        | --                | padding of the container
 * @attribute font-family            | inherit      | --                | font family
 * @attribute suffix-text     | --           | %                 | characters displayed after number
 * @attribute caption-text    | --           | widgets per lorem | caption displayed after number
 * @attribute stylesheet | --           | --                | inject css into stylesheet
 */
class ScrollingStat extends HTMLElement {
// reference to class itself
get c() { return ScrollingStat };

// initialize private variables
#isOnScreen = false;
#startTime = 0; // start time of the animation
#start = 0; // number to start the animation from
#end = 99; // number to end the animation at
#duration = 0; // duration of the animation
#places = 0; // number of decimal places to display

// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
static get attributes() {
  // attribute, default
  const values = {
    "animation-duration": "800",
    "animation-value-end": "99",
    "animation-value-start": "0",
    "color-background": "transparent",
    "color-border": "currentColor",
    "color-primary": "currentColor",
    "color-secondary": "currentColor",
		"container-border-width": "1px",
		"container-height": "auto",
		"container-width": "100%",
		"container-max-width": "none",
		"container-padding": "1.5em",
		"font-family": "inherit",
    "suffix-text": "",
    "caption-text": "",
    "stylesheet": "",
	};
  return values;
}

// OBSERVED ATTRIBUTES
static get observedAttributes() { return Object.keys(this.attributes) }


attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {
const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
const html = ComponentUtils.stringIfValue;
const start = this.attValue("animation-value-start");
const caption = this.attValue("caption-text");
const suffix = this.attValue("suffix-text");
const stylesheet = this.attValue('stylesheet');
return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<span id="container" style="${cssVars}">
  ${html(start, `<span id="animation">${start}</span>`)}
  ${html(suffix, `<span id="suffix">${suffix}</span>`)}
  ${html(caption, `<span id="caption">${caption}</span>`)}
</span>
`.trim();
}


// STYLES
static get styles() {
return `
${ComponentUtils.preflight}
<style id="base">
#container {
  align-items: baseline;
  background: var(--color-background, transparent);
	border: 1px solid var(--color-border, transparent);
  border-radius: .3em;
	border-width: var(--container-border-width, 1px);
  color: var(--color-primary, currentColor);
  display: grid;
	font-family: var(--font-family, inherit);
  font-weight: 800;
	gap: .3em;
	grid: auto-flow/auto 1fr;
	height: var(--container-height, auto);
  line-height: 1;
	outline: 1px solid var(--color-border, transparent);
  padding: var(--container-padding, 1.5em);
  max-width: var(--container-max-width, none);
	width: var(--container-width, 100%);
}
#animation{
  font-size:2.75em;
	-webkit-font-smoothing: auto;
	-moz-osx-font-smoothing: auto;
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
</style>`
};

// TEMPLATE
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.c.styles}${this.els}`.trim();
	return template;
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

	// create a shadow root
	this.attachShadow({ mode: "open" });

	// binding the parent context to the methods
	this.connectedCallback = this.connectedCallback.bind(this);
	this.observerCallback = this.observerCallback.bind(this);
}

// CONNECTED CALLBACK
connectedCallback() {
	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

	// reset values
	this.resetAnimation();

	// ref container
	const container = this.shadowRoot?.getElementById("container");

	// create and start the observer
	const observer = new IntersectionObserver(this.observerCallback, {
		rootMargin: "0%",
		threshold: 0.5,
	})

	// observe the container
	if (container) observer.observe(container);
}

// GETTERS, SETTERS AND UPDATERS FOR PRIVATE VARIABLES
// PRIVATE VARIABLE - #startTime
get startTime() {
	return this.#startTime;
}
set startTime(value) {
	if (value && typeof value  === "number") this.#startTime = value;
}
resetStartTime() {
	this.startTime = 0;
}

// PRIVATE VARIABLE - #isOnScreen
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

// PRIVATE VARIABLE - #end
get end() {
	return this.#end;
}
set end(value) {
	if (typeof value === "number") this.#end = value;
}
updateEnd() {
	const fallback = this.attValue("animation-value-end");
	this.end = this.start = parseFloat(this.c.scrubNumberString(fallback, `${fallback}`, 2));
}

// PRIVATE VARIABLE - #start
get start() {
	return this.#start;
}
set start(value) {
	if (typeof value === "number") this.#start = value;
}
updateStart() {
	const fallback = this.attValue("animation-value-start");
	this.start = parseFloat(this.c.scrubNumberString(fallback, `${fallback}`, 2));
}

// PRIVATE VARIABLE - #duration
get duration() {
	return this.#duration;
}
set duration(value) {
	if (typeof value === "number") this.#duration = value;
}
updateDuration() {
	const fallback = this.attValue("animation-duration");
	this.duration = Math.abs(parseInt(this.c.scrubNumberString(this.attValue('animation-duration'), `${fallback}`, 0)));
}

// PRIVATE VARIABLE - #places
// get the number of decimal places to display
get places() {
	return this.#places;
}
set places(value) {
	if (typeof value === "number") this.#places = value;
}
updatePlaces() {
	this.places = this.c.places(this.attValue("animation-value-end"), 2);
}

// ATTRIBUTE CHANGED CALLBACK
attributeChangedCallback() {
	this.resetAnimation();
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

// METHOD - UPDATE ANIMATION TEXT
/** @param {string} str */
updateAnimationText(str) {
	const ref = this.shadowRoot?.getElementById("animation");
	if (ref) ref.textContent = str ?? "";
}

// METHOD - RESET ANIMATION
resetAnimation() {
	this.updateEnd();
	this.updatePlaces();
	this.updateStart();
	this.updateDuration();
	this.resetStartTime();
}
}
customElements.define("scrolling-stat", ScrollingStat);
export default ScrollingStat;
