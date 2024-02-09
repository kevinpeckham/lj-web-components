// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";

/** @copyright 2024 Lightning Jar - "Logo Block" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Logo Block Web Component
 * @name LogoBlock
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a logo with a link. For typical use in the header of a website.
 * @attribute image-alt | -- | -- | alt text for the image
 * @attribute image-height | -- | 64 | native height of the image in px
 * @attribute image-src | -- | https://lightningjar.com/assets/img/lightning-jar-logo-04.svg | src for the image
 * @attribute image-width | -- | 432 | native width of the image in px
 * @attribute link-href | / | https://www.lightningjar.com | href for the link
 * @attribute link-title | -- | Lightning Jar homepage | title for the link
 * @attribute stylesheet-textContent | -- | #container {width:240px;} | inject css into stylesheet
 */
class LogoBlock extends HTMLElement {

// reference to class itself
get c() { return LogoBlock };


// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string } }
 */
static get attributes() {
const values = {
  "image-alt":"",
  "image-height":"",
  "image-src": "",
  "image-width": "",
  "link-href": "/",
  "link-title": "go to homepage",
  "stylesheet-textContent": "",
};
return values;
}
static get observedAttributes() { return Object.keys(this.attributes) }

/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

// ELEMENTS
static get els() {
  return `
<style id="stylesheet"></style>
<span id="container">
  <a id="link" href="/">
    <img
      id="image"
      aria-hidden="true"
      draggable="false"
      src=""/>
    </a>
</span>`.trim();
}
// STYLES
static get styles() {
  return `
  <style>
  :host, *:not(style) { display:block;box-sizing:border-box; margin:0; }
  #link {
    display:flex;
    width:100%;
    height:100%;
  }
  #image {
    width:100%;
    height:auto;
  }
</style>`
}
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

// CONSTRUCTOR
constructor() {
	super();

	// programattically create getters and setters for each observed attribute
	ComponentUtils.createOAGS(this.c, this);

	// create a shadow root
	this.attachShadow({ mode: "open" });

	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.c.template.content.cloneNode(true))

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);

	// update attributes
	this.updateAttributes();
}

// LIFECYCLE CALLBACKS
connectedCallback() {
	this.updateAttributes();
}
attributeChangedCallback() {
	this.updateAttributes();
}

// METHODS
updateAttributes() {
	ComponentUtils.updateManyElAttributes(this.c, this, this.c.ids);
}}

customElements.define("logo-block", LogoBlock);
export default LogoBlock;


