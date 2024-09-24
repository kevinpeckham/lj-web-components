// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Copy Button" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/scrolling-stat} */

/**
 * Copy Button Web Component
 * @name CopyButton
 * @class
 * @published
 * @requires ComponentUtils
 * @extends HTMLElement
 * @classdesc Defines web component that renders a button that copies text to the user's clipboard. The text to be copied is specified by the target-selector attribute.  All of the text content of the target element will be copied to the clipboard.
 * @attribute color-accent | blue | lightblue| color of the hover state of button
 * @attribute color-background | transparent | rgb(255 255 255 / .05) | background color of the button
 * @attribute color-primary | currentColor | -- | color of the button
 * @attribute message-text | copied! | -- | success message
 * @attribute button-title | copy | -- | text appears on hover
 * @attribute target-selector | -- | p | selector for the target element
 * @attribute size-width | 28px | 28px | button outer size
 * @attribute copy-mode | text | text | set to "html" to copy html, "rendered" to copy rendered html
 * @attribute stylesheet | -- | -- | injects css into custom stylesheet

 */
class CopyButton extends HTMLElement {
	// reference to class itself
	get c() { return CopyButton };


	// ATTRIBUTES
	/**
	 * Returns an object. The keys are prop names. The values are the default values for the props.
	 * @returns { { [key:string]: string } }
	 */
	static get attributes() {
		return {
			"color-accent": "lightblue",
			"color-background": "transparent",
			"color-primary": "currentColor",
			"copy-mode": "text",	// text or html
			"message-text": "copied!",
			"title-text": "copy",
			"target": "",
			"button-title": "copy to clipboard",
			"size-width": "28px",
			"stylesheet": ""
		};
	}

	attValue(/** @type {string} att */ att) {
		return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
	}

// ELEMENTS
get els() {
	const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
	const html = ComponentUtils.stringIfValue;
	const stylesheet = this.attValue('stylesheet');
	const messageText = this.attValue('message-text');
	const buttonTitle = this.attValue('button-title');
	return `
	${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<button id="container" title="${buttonTitle}" style="${cssVars}">
	<div id="message">${messageText}</div>
	<svg id="icon" xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24'>
		<path id="initial" d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2'/>
		<path id="success" d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4'/>
	</svg>
</button>`.trim();
}

	// STYLES
	static get styles() {
		return `
		<style>
		:host, * { box-sizing:border-box;margin:0; }
		#container{
			background-color: var(--color-background, transparent);
			border:solid .1em color-mix(in srgb,currentColor 50%,transparent);
			color:var(--color-primary, currentColor);
			cursor:pointer;
			font-size:calc(var(--size-width, 1.5em) * .45);
			height:2.22em;
			opacity:.6;
			padding:.3em;
			position:relative;
			width:2.22em;
		}
		#container:hover {
			opacity:1;
			color: var(--color-accent, currentColor)
		}
		#container, div {
			align-items:center;
			border-radius:.25em;
			display:flex;
			justify-content:center;
		}
		#container div {
			background-color:color-mix(in srgb,var(--color-accent) 12%,black);
			color: currentColor;
			font-size:.8em;
			letter-spacing:.05em;
			opacity:0;
			padding:.15em .35em;
			position:absolute;
			top:120%;
			transition:opacity .15s;
			white-space:nowrap;
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
		#success { opacity:0}
		#container.success {opacity:1; color:var(--color-accent)}
		#container.success #success { opacity:1 }
		#container.success #message { opacity:1 }
		#container.success #initial { opacity:0 }
		#container.success #title { opacity:0; transition:opacity 0s 0s; }</style>`;
	}

	// TEMPLATE
	get template() {
		const template = document.createElement("template");
		template.innerHTML = `${this.c.styles}${this.els}`.trim();
		return template;
	}

	// constructor
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	 // CONNECTED CALLBACK
	connectedCallback() {
		this.shadowRoot?.appendChild(this.template.content.cloneNode(true));

		// get attributes
		const selector = /** @type {string} */ this.attValue('target-selector') ?? "";
		const copyMode = /** @type {string} */ this.attValue('copy-mode') ?? "text";

		// get elements
		const container = /** @type {HTMLButtonElement} */ this.shadowRoot?.getElementById('container');
		const message = /** @type {HTMLDivElement} */ this.shadowRoot?.getElementById('message');
		const initial = /** @type {SVGPathElement} */ this.shadowRoot?.getElementById('initial');
		const success = /** @type {SVGPathElement} */ this.shadowRoot?.getElementById('success');

		// get target element
		const target = /** @type {HTMLElement | null | undefined} */ (
			selector ? document.querySelector(selector) : null
		);

		/**
		 * @type {string | number | NodeJS.Timeout | undefined}
		 */
		let timeout;

		// add event listener to container
		container?.addEventListener("click", copyTarget);

		// function to copy text to clipboard
		function copyTextToClipboard() {
			// Check if the target element exists and is an HTMLElement
			if (!target || !(target instanceof HTMLElement)) return;

			// Get the text to copy
			const text = target.textContent;

			// Check if the text exists
			if (!text) return;

			// Copy the text to the clipboard
			navigator.clipboard.writeText(text)
			.then(() => {
				window.console.log('text content copied to clipboard');
			})
			.catch((err) => {
				window.console.error('text to copy HTML content: ', err);
			});
		}
		// function to copy HTML to clipboard
		function copyHtmlToClipboard() {

			// Check if the element exists and is an HTMLElement
			if (!target || !(target instanceof HTMLElement)) return;

			// Create a Blob containing the HTML
			const html = target.outerHTML;
			navigator.clipboard.writeText(html)
			.then(() => {
				window.console.log('HTML content copied to clipboard');
			})
			.catch((err) => {
				window.console.error('Failed to copy HTML content: ', err);
			});
		}
		// function to copy rendered HTML to clipboard
		function copyRenderedHtmlToClipboard() {
			// Get the element containing the rendered HTML
			const element = target;

			// Check if the element exists and is an HTMLElement
			if (!element || !(element instanceof HTMLElement)) return;

			// Create a Blob containing the HTML
			const blob = new Blob([element.outerHTML], { type: 'text/html' });

			// Create a new ClipboardItem
			const data = new ClipboardItem({
				'text/html': blob
			});

			// Use the Clipboard API to write the ClipboardItem
			navigator.clipboard.write([data])
			.then(() => {
				window.console.log('rendered HTML content copied to clipboard');
			})
			.catch((err) => {
				window.console.error('Failed to copy rendered HTML content: ', err);
			});
		}
		// function to copy content based on copy mode
		function copyContentToClipboard() {
			const mode = copyMode ? copyMode.toLowerCase() : 'text';
			if (copyMode === 'html') {
				copyHtmlToClipboard();
			} else if (copyMode === 'rendered') {
				copyRenderedHtmlToClipboard();
			} else {
				copyTextToClipboard();
			}
		}
		// helper functions to reveal / hide the copied icon
		function showCopied() {
			// reveal copied icon
			if (initial && success && message) {
				container?.classList.add("success");
			}
		}
		function hideCopied() {
			// reveal copied icon
			if (initial && success && message) {
				container?.classList.remove("success");
			}
		}
		function copyTarget() {
			// clear timeout if it exists
			if (timeout) clearTimeout(timeout);

			// return if no target
			if (!target) return;

			// copy text to clipboard
			copyContentToClipboard();

			// show copied icon
			showCopied();

			// hide copied icon after x time
			timeout = setTimeout(() => {
				hideCopied();
				clearTimeout(timeout);
			}, 1500);
		}
}}


customElements.define("copy-button", CopyButton);
export default CopyButton;
