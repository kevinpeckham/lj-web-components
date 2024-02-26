// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Logo Tile" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
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
 * @attribute image-aspect-ratio | -- | 120 / 120 | aspect ratio of the image
 * @attribute image-padding | -- | -- | padding around the outside of image
 * @attribute image-src | -- | /images/logos/apple.svg | src for the image
 * @attribute link-href | / | https://apple.com | href for the link
 * @attribute link-title | -- | go to apple | title for the link
 * @attribute tile-border-radius | -- | 1em | border radius of the tile
 * @attribute tile-opacity | 100% | 90% | default opacity of tile
 * @attribute tile-opacity-hover | 100% | -- | opacity of tile on hover
 * @attribute size-height | 100% | -- | outer height of the tile
 * @attribute size-width | 100% | -- | outer width of the tile
 * @attribute stagger | -- | -- | outer width of the tile
 * @attribute stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute style | -- | width:160px; | regular inline style on the component
 * @attribute transition-property | opacity | -- | duration of the transition effect
 * @attribute transition-duration | .3s | -- | duration of the transition effect
 * @attribute translate-x | -- | -- | move tile on x axis
 */
class LogoTile extends HTMLElement {

// reference to class itself
get c() { return LogoTile };


// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string | null } }
 */
static get attributes() {
const values = {
	"color-background": "",
  "image-alt":"",
	"image-aspect-ratio": "",
	"image-padding": "",
  "image-src": "",
  "link-href": "/",
  "link-title": "go to homepage",
	"size-height": "100%",
	"size-width": "100%",
	"stagger": "",
  "stylesheet": "",
	"tile-border-radius": "1em",
	"tile-opacity": "100%",
	"tile-opacity-hover": "100%",
	"transition-property": "opacity",
	"transition-duration": "0.3s",
	"translate-x": "",
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
			loading="lazy"
      draggable="false"
      src=""/>
  </a>
</div>`.trim();
}
// STYLES
static get styles() {
  return `
  <style id="base">
  :host, *:not(style) { display:block;box-sizing:border-box; margin:0; }
	#container {
		align-items:center;
		background-color:var(--color-background, transparent);
		border-radius:var(--tile-border-radius, 1em);
		display:flex;
		justify-content:center;
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
		padding: var(--image-padding, 0);
		justify-content:center;
		position:relative;
		height:100%;
		width:100%;
  }
  #image {
		aspect-ratio:var(--image-aspect-ratio);
		object-position:center;
		object-fit:cover;
		min-width:100%;
		min-height:100%;
  }
	#container:hover {
		opacity:var(--tile-opacity-hover, 100%);
	}
	@media (min-width: 1024px) {
		#container {
			transform:translateX(var(--lg-translate-x, 0));
		}
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
	this.refs.container.style.setProperty("--image-aspect-ratio", this?.imageAspectRatio ?? "");
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--image-padding", this?.imagePadding ?? "");
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--tile-opacity", this?.tileOpacity ?? "");
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--tile-opacity-hover", this?.tileOpacityHover ?? "");
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--tile-border-radius", this?.tileBorderRadius ?? "");
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--transition-duration", this?.transitionDuration ?? "");
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--transition-property", this?.transitionProperty ?? "");
	// @ts-expect-error - yes it is
	this.refs.container.style.setProperty("--lg-translate-x", this?.stagger ?? "");
	// @ts-expect-error - yes it is
	this.refs.stylesheet.textContent = this?.stylesheet ?? "";
}}

customElements.define("logo-tile", LogoTile);
export default LogoTile;


