/** @copyright 2024 Lightning Jar - "Code Block" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.0.1 */
/** {@link https://www.lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Code Block Web Component
 * @class
 * @extends HTMLElement
 * @classdesc Defines web component that renders a formatted code block.

 *
 */
class CodeBlock extends HTMLElement {
	/**
	 * Attributes to observe for adding, removing, or changing.
	 * @static
	 * @returns {string[]} An array of attribute names to observe.
	 */
	static get observedAttributes() {
		return [
			"data-accent-color",
			"data-background-color",
			"data-text-color",
			"data-text-content",
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
					#outer {

					}
					#heading {
						display:inline-block;
						margin-bottom:.5em;
					}
					#inner {
						align-items:start;
						background-color:var(--bg-color, #101B2D);
						border-radius:.25em;
						color:var(--text-color, #BFDBFE);
						cursor:text;
						display:grid;
						font-size:.9em;
						grid-template-columns:minmax(0,1fr) auto;
						justify-content:between;
						padding:.5em .5em .5em 1em;
						position:relative;
						width:100%;
					}
					div:focus-within {
						box-shadow: 0px 0px 0px 2px var(--accent-color, #ebf92f);
					}
					pre {
						overflow-x:auto;
						white-space:pre-line;
						word-break:break-all;
					}
				</style>
				<div id="outer">
					<div id="header"><span id="heading"></span><span id="subheading"></span></div>
					<div id="inner">
						<pre>
							<code id="code">
								<slot></slot>
							</code>
						</pre>
						<copy-button data-target-selector="#code"></copy-button>
					</div>
				</div>
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
		// get container element
		const outer = /** @type {HTMLDivElement} */ (
			this.shadowRoot?.getElementById("outer")
		);

		// get code element
		const code = /** @type {HTMLElement} */ (
			this.shadowRoot?.querySelector("code")
		);

		// get accent color
		const accentColor = this.getAttribute("data-accent-color");
		if (accentColor) {
			outer.style.setProperty("--accent-color", accentColor);
		}

		// get background color
		const backgroundColor = this.getAttribute("data-background-color") ?? "";
		if (backgroundColor) {
			outer.style.setProperty("--bg-color", backgroundColor);
		}

		// get text color
		const textColor = this.getAttribute("data-text-color") ?? "";
		if (textColor) {
			outer.style.setProperty("--text-color", textColor);
		}

		// get heading content
		const header = this.shadowRoot?.getElementById("header");
		const headingElement = this.shadowRoot?.getElementById("heading");
		const headingContent = this.getAttribute("data-heading-content") ?? "";
		if (headingElement && headingContent) {
			headingElement.textContent = headingContent;
		} else if (header) {
			header.style.display = "none";
		}

		// get text content
		const text = this.getAttribute("data-text-content") ?? "";
		if (text && code) {
			code.textContent = text;
		}

		// get copy button
		const copyButton = this.shadowRoot?.querySelector("copy-button");
		if (copyButton) {
			copyButton.setAttribute("data-accent-color", accentColor ?? "");
		}
	}
}
customElements.define("code-block", CodeBlock);
export default CodeBlock;
