// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";


/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Scrolling Stat Web Component
 * @class
 * @extends HTMLElement
 * @published 2024-02-09
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
 * @attribute stylesheet-text | --           | --                | inject css into stylesheet
 */
class ScrollingStat extends HTMLElement {
// reference to class itself
get c() { return ScrollingStat };

// initialize variables
animationDuration = "0";
animationValueEnd = "0";
animationValueStart = "0";
colorBackground = "";
colorBorder = "";
colorPrimary = "";
colorSecondary = "";
containerBorderWidth = "";
containerHeight = "";
containerWidth = "";
containerMaxWidth = "";
containerPadding = "";
fontFamily = "";
suffixText = "";
captionText = "";
stylesheetText = "";

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
    "stylesheet-text": "",
	};
  return values;
}

// OBSERVED ATTRIBUTES
static get observedAttributes() { return Object.keys(this.attributes) }

// GET DEFAULT VALUE FOR AN ATTRIBUTE
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }


// ELEMENTS
get els() {
return `
<span
	id="container"
	style="
		--color-background: ${this.colorBackground};
		--color-border: ${this.colorBorder};
		--color-primary: ${this.colorPrimary};
		--color-secondary: ${this.colorSecondary};
		--font-family: ${this.fontFamily};
		--container-height: ${this.containerHeight};
		--container-border-width: ${this.containerBorderWidth};
		--container-width: ${this.containerWidth};
		--container-max-width: ${this.containerMaxWidth};
		--container-padding: ${this.containerPadding};"
	>
  <span id="animation">${this.animationValueStart}</span>
  <span id="suffix">${this.suffixText}</span>
  <span id="caption">${this.captionText}</span>
</span>
`.trim();
}

// PREFLIGHT
get preflight() {
	return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor} html,:host {line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body {margin:0;line-height:inherit}hr {height:0;color:inherit;border-top-width:1px}abbr:where([title]) {text-decoration:underline dotted}h1,h2,h3,h4,h5,h6 {font-size:inherit;font-weight:inherit}a {color:inherit;text-decoration:inherit}b,strong {font-weight:bolder} button,select {text-transform:none}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring {outline:auto}:-moz-ui-invalid {box-shadow:none}progress {vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button {height:auto}[type="search"] {-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration {-webkit-appearance:none}::-webkit-file-upload-button {-webkit-appearance:button;font:inherit}summary {display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin:0}fieldset {margin:0;padding:0}legend {padding:0}ol,ul,menu {list-style:none;margin:0;padding:0}dialog {padding:0}textarea {resize:vertical}input::placeholder,textarea::placeholder {opacity:1;color:theme("colors.gray.400", #9ca3af)}button,[role="button"] {cursor:pointer}:disabled {cursor:default}img,svg,video,canvas,audio,iframe,embed,object {display:block;vertical-align:middle}img,video {max-width:100%;height:auto}[hidden] {display:none}`
}

// STYLES
get styles() {
return `
<style id="preflight">${this.preflight}</style>
<style id="base">
host:, * { margin:0; box-sizing:border-box ; }
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
</style><style id="stylesheet"></style>`
};

// TEMPLATE
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.styles}${this.els}`.trim();
	return template;
}

// IDS
get ids() {
	return [...`${this.els + this.styles}`.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
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

  // programattically create getters and setters for each observed attribute
	ComponentUtils.createOAGS(this.c, this);

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

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);

	// reset values
	this.resetAnimation();
		// this.updateAttributes();

	// create and start the observer
	new IntersectionObserver(this.observerCallback, {
		rootMargin: "0%",
		threshold: 0.5,
	}).observe(this.refs.container);
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
	const fallback = this.c.getDefault("animation-value-end");
	this.end = this.start = parseFloat(this.c.scrubNumberString(this.animationValueEnd, `${fallback}`, 2));
}

// PRIVATE VARIABLE - #start
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

// PRIVATE VARIABLE - #duration
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

// PRIVATE VARIABLE - #places
// get the number of decimal places to display
get places() {
	return this.#places;
}
set places(value) {
	if (typeof value === "number") this.#places = value;
}
updatePlaces() {
	this.places = this.c.places(this.animationValueEnd);
}

// ATTRIBUTE CHANGED CALLBACK
attributeChangedCallback() {
	this.resetAnimation();
	this.updateAttributes();
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

// METHOD - UPDATE ATTRIBUTES
updateAttributes() {
	// ComponentUtils.updateManyElAttributes(this.c, this, this.ids);
	// ComponentUtils.updateColorAttributes(this.c, this);
}

// METHOD - UPDATE ANIMATION TEXT
/** @param {string} str */
updateAnimationText(str) {
	this.refs.animation.textContent = str ?? "";
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
