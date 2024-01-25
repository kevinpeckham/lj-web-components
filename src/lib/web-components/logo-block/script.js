/** @copyright 2024 Lightning Jar - "Logo Block" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Logo Block Web Component
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that renders a formatted code block.

 *
 */
class LogoBlock extends HTMLElement {
	/**
	 * Attributes to observe for adding, removing, or changing.
	 * @static
	 * @returns {string[]} An array of attribute names to observe.
	 */
	static get observedAttributes() {
		return [
			"image-height",
			"image-width",
			"image-src",
			"link-href",
			"link-title",
		];
	}

	// constructor
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		// Create a template for the button
		const template = document.createElement("template");

		template.innerHTML = `
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
			</style>
			<a
				id="link"
				href="/">
				<img
					 id="image"
					 aria-hidden="true"
					 draggable="false"
					 src="${this.getAttribute("image-src") ?? ""}"/>
			</a>
		`;

		// append the template content to the shadow DOM
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}
	/**
	 * Method invoked when the custom element is first connected to the document's DOM. Defines DOM elements, adds css styling, and starts the observer.
	 * @method
	 * @returns {void}
	 * @summary Creates the shadow DOM, add styles, and starts the observer.
	 */
	connectedCallback() {
		//** LINK */
		// get link element
		const link = /** @type {HTMLAnchorElement} */ (
			this.shadowRoot?.getElementById("link")
		);

		// get and set link href
		const linkHref = this.getAttribute("link-href") ?? "";
		if (linkHref) link.setAttribute("href", linkHref);

		// get and set link rel
		const linkRel = linkHref.includes("http") ? "external noopener" : "";
		if (linkRel) link.setAttribute("rel", linkRel);

		// get and set link title
		const linkTitle = this.getAttribute("link-title") ?? "";
		if (linkTitle) link.setAttribute("title", linkTitle);

		//** IMAGE */
		// get image element
		const image = /** @type {HTMLImageElement} */ (
			this.shadowRoot?.getElementById("image")
		);

		// get and set height
		const imageHeight = this.getAttribute("image-height") ?? "";
		if (imageHeight) image.setAttribute("height", imageHeight);

		// get and set width
		const imageWidth = this.getAttribute("image-width") ?? "";
		if (imageWidth) image.setAttribute("width", imageWidth);

		// get and set image src
		const imageSrc = this.getAttribute("image-src") ?? "";
		if (image && image.src !== image.src) image.setAttribute("src", imageSrc);
	}
}
customElements.define("logo-block", LogoBlock);
export default LogoBlock;
