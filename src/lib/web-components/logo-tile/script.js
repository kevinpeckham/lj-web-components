// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.min.js";

/** @copyright 2024 Lightning Jar - "Logo Tile" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/logo-tile} */

/**
 * Logo Block Web Component
 * @name LogoTile
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a single linked tile with a logo -- for typical use in a grid of logos.
 * @attribute color-background | -- | white | background color of the tile
 * @attribute image-alt | -- | -- | alt text for the image
 * @attribute image-src | -- | /images/apple.svg | src for the image
 * @attribute link-href | / | https://apple.com | href for the link
 * @attribute link-title | -- | go to apple | title for the link
 * @attribute tile-aspect-ratio | -- | 120 / 120 | aspect ratio of the tile
 * @attribute tile-opacity | 100% | 90% | default opacity of tile
 * @attribute tile-opacity-hover | 100% | -- | opacity of tile on hover
 * @attribute size-height | 100% | -- | outer height of the tile
 * @attribute size-width | 100% | -- | outer width of the tile
 * @attribute stylesheet-textContent | -- | -- | inject css into the inner stylesheet
 * @attribute style | -- | width:160px; | regular inline style on the component
 * @attribute transition-duration | .3s | -- | duration of the transition effect
 */
class LogoTile extends HTMLElement {

// reference to class itself
get c() { return LogoTile };


// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string } }
 */
static get attributes() {
const values = {

	"color-background": "",
  "image-alt":"",
  "image-src": "",
  "link-href": "/",
  "link-title": "go to homepage",
	"size-height": "100%",
	"size-width": "100%",
  "stylesheet-textContent": "",
	"tile-aspect-ratio": "",
	"tile-opacity": "100%",
	"tile-opacity-hover": "100%",
	"transition-property": "opacity",
	"transition-duration": "0.3s",
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
<div id="container">
  <a id="link" href="/">
    <img
      id="image"
      aria-hidden="true"
      draggable="false"
      src=""/>
  </a>
</div>`.trim();
}
// STYLES
static get styles() {
  return `
  <style>
  :host, *:not(style) { display:block;box-sizing:border-box; margin:0; }
	#container {
		aspect-ratio:var(--tile-aspect-ratio);
		background-color:var(--color-background, white);
		border-radius:1em;
		display:flex;
		opacity:var(--tile-opacity, 1);
		width:var(--size-width, 100%);
		height:var(--size-height, auto);
		overflow:hidden;
		transition-property:var(--transition-property, opacity);
		transition-duration:var(--transition-duration, .3s);
	}
  #link {
		display:flex;
		align-items:center;
		justify-content:center;
		position:relative;
		height:100%;
		width:100%;
  }
  #image {
		object-position:center;
		object-fit:cover;
		min-width:100%;
		min-height:100%;
  }
	#container:hover {
		opacity:var(--tile-opacity-hover, 100%);
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
	ComponentUtils.updateColorAttributes(this.c, this);
	ComponentUtils.updateSizeAttributes(this.c, this);
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--tile-aspect-ratio", this?.tileAspectRatio ?? "");
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--tile-opacity", this?.tileOpacity ?? "");
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--tile-opacity-hover", this?.tileOpacityHover ?? "");
}}

customElements.define("logo-tile", LogoTile);
export default LogoTile;


