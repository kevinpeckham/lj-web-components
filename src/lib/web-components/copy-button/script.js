/** @copyright 2024 Lightning Jar - "Copy Button" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Scrolling Stat Web Component
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that renders a button that copies text to the clipboard.

 *
 */
class CopyButton extends HTMLElement {
	/**
	 * Attributes to observe for adding, removing, or changing.
	 * @static
	 * @returns {string[]} An array of attribute names to observe.
	 */
	static get observedAttributes() {
		return [
			"data-size",
			"data-accent-color",
			"data-target-selector",
			"data-title",
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
					* { box-sizing:border-box;margin:0; }
					button {
						background-color:rgb(100%100%100%/.05);
						border:solid.075em color-mix(in srgb,currentColor 50%,transparent);
						color:currentColor;
						cursor:pointer;
						font-size:var(--size, 16px);
						height:1.75em;
						opacity:.6;
						padding:.3em;
						position:relative;
						width:1.75em;
					}
					button:hover {
						opacity:1;
					}
					button, div {
						align-items:center;
						border-radius:.25em;
						display:flex;
						justify-content:center;
					}
					div {
						background-color:rgb(100%100%100%/.05);
						color: var(--accent-color, blue);
						font-size:.85em;
						letter-spacing:.05em;
						opacity:0;
						padding:.15em .35em;
						position:absolute;
						top:120%;
						transition:opacity .15s;
					}
					svg {
						fill:none;
						height:auto;
						pointer-events:none;
						stroke:currentColor;
						stroke-width:1;
						width:100%;
					}
					path {
						stroke-linecap:round;
						stroke-linejoin:round;
						transition:opacity .15s;
					}
					path#copied {
						opacity:0;
					}
				</style>
				<button>
					<div>copied!</div>
					<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24'><path style="opacity:1;" id="copy" d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2'/><path id="copied" d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4'/></svg>
				</button>
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
		// get selector
		const selector = this.getAttribute("data-target-selector") ?? "";

		// get button
		const button = /** @type {HTMLButtonElement} */ (
			this.shadowRoot?.querySelector("button")
		);

		// get message element
		const message = button?.querySelector("div");

		// get svg paths
		const copy_path = /** @type {SVGPathElement} */ (
			button?.querySelector("#copy")
		);
		const copied_path = /** @type {SVGPathElement} */ (
			button?.querySelector("#copied")
		);

		// get target element
		const target = /** @type {HTMLElement | null | undefined} */ (
			selector ? document.querySelector(selector) : null
		);

		const targetContent = /** @type {string} */ (
			// @ts-expect-error - target might be an input or a textarea
			target?.value ?? target?.textContent ?? ""
		);

		// get accent color
		const accent_color = this.getAttribute("data-accent-color");
		button?.style.setProperty("--accent-color", accent_color ?? "red");

		// get size
		const size = this.getAttribute("data-size");
		button?.style.setProperty("--size", size ?? "16px");

		// get title
		const title = this.getAttribute("data-title");
		button?.setAttribute("title", title ?? "copy to clipboard");

		// helper function to reveal / hide the copied icon
		const showCopied = () => {
			// reveal copied icon
			if (copy_path && copied_path && message) {
				button.style.opacity = "1";
				button.style.color = "var(--accent-color)";
				copy_path.style.opacity = "0";
				copied_path.style.opacity = "1";
				message.style.opacity = "1";
			}
		};
		function hideCopied() {
			// reveal copied icon
			if (copy_path && copied_path && message) {
				button.style.removeProperty("opacity");
				button.style.removeProperty("color");
				copy_path.style.opacity = "1";
				copied_path.style.opacity = "0";
				message.style.opacity = "0";
			}
		}
		/**
		 * @type {string | number | NodeJS.Timeout | undefined}
		 */
		let timeout;
		button?.addEventListener("click", () => {
			// copy text to clipboard
			if (target && targetContent) {
				// clear timeout if it exists
				if (timeout) clearTimeout(timeout);
				navigator.clipboard
					.writeText(targetContent)
					.then(() => {
						// show copied icon
						showCopied();

						// hide copied icon after 2 seconds
						timeout = setTimeout(() => {
							hideCopied();
							clearTimeout(timeout);
						}, 1500);
					})
					.catch((err) => console.error("failed to copy text: ", err));
			} else {
				console.error("copy failed");
			}
		});
	}
}
customElements.define("copy-button", CopyButton);
export default CopyButton;
