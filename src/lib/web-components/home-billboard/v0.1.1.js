// @ts-expect-error - type defs not available

import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";
// @ts-expect-error yep got it
import LinkButton from "/e/wc/link-button@0.1.1.min.js";

// types
/** @typedef {{url?:string; alt?:string; left?:string; top?:string; width?:string; }} ImageDatum */

/** @copyright 2024 Lightning Jar - "HomeBillboard" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/home-billboard} */

/**
 * Widget Heading Web Component
 * @name HomeBillboard
 * @classduration of the transition effect
 * @published 2024-02-14
 * @requires ComponentUtils
 * @requires SubWidgetContainer
 * @requires SubWidgetText
 * @requires LogoGrid
 * @classdesc Defines web component that displays a billboard with a headline, text, button and slotted content
 * @attribute link-href | -- | / | url for the button
 * @attribute link-text | -- | Get Started | text for the button
 * @attribute link-title | -- | explore training & competency solutions | title for the button
 * @attribute link-rel | -- | -- | rel for the button
 * @attribute color-accent | lightblue | #ceede9 | color of the text
 * @attribute color-background | -- | #F8FAFC | color of the widget background
 * @attribute color-primary | currentColor | #0b2e7e | color of the text
 * @attribute color-shadow | black | rgb(11 46 126) | color of the shadow
 * @attribute container-padding | 4rem | -- | padding for the container
 * @attribute images-data | [] | -- | data for images in json format
 * @attribute font-family | inherit | -- | font family for the text
 * @attribute heading-text | -- | Robust Training &<br>Competency Solutions<br>For The Energy Industry. | text for the heading
 * @attribute paragraph-text | -- | We cater to the evolving needs of the industry and its customers including: digital learning, certification, assessment, data analytics, and competency consulting. | text for the widget
 * @attribute rings-on | true | -- | if true, display rings
 * @attribute rings-count | 30 | -- | number of rings to display
 * @attribute stylesheet | -- | #container { border-bottom: solid 1px rgb(229 231 235 / 40% )  } | inject css into the inner stylesheet
 * @attribute data-json-url | -- | /e/wc/home-billboard.min.json | url of remote json data
 * @note
 */
class HomeBillboard extends HTMLElement {

	// reference to class itself
	get c() { return HomeBillboard };

	// PROPERTIES
	linkHref = "";
	buttonRel = "";
	linkText = "";
	linkTitle = "";
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";
	colorShadow = "";
	containerPadding = "";
	fontFamily = "";
	headingText = "";
	imagesData = "[]";
	paragraphText = "";
	ringsOn = "true";
	ringsCount = "30";
	stylesheet = "";
	dataJsonUrl = "";

// ATTRIBUTES GETTER
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string } }
 */
static get attributes() {
	const values = {
		// sub-widget-container attributes
		"link-href": "",
		"link-rel": "",
		"link-text": "",
		"link-title": "",
		"color-accent": "lightblue",
		"color-background": "transparent",
		"color-primary": "currentColor",
		"color-shadow": "black",
		"container-padding": "4rem",
		"font-family": "",
		"heading-text": "",
		"images-data": "[]",
		"paragraph-text": "",
		"rings-on": "true",
		"rings-count": "30",
		"stylesheet": "",
		"data-json-url": "",
	};
return values;
}

// OBSERVED ATTRIBUTES GETTER
static get observedAttributes() { return Object.keys(this.attributes) }

// ATTRIBUTE DEFAULT VALUE GETTER
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

// PARSE DATA JSON
/** @returns {ImageDatum[]} */
get parsedImagesData() {
	return JSON.parse(this.imagesData) ?? []
}

// HTML BUILDERS
/** @param {ImageDatum} imageDatum */
buildimageHTML(imageDatum) {
	if (!imageDatum || !imageDatum?.url ) return "";
	return `
	<img
			class="billboard-image flip-in-xy"
			alt="${ imageDatum?.alt }"
			draggable="false"
			height="600"
			loading="lazy"
			src="${ imageDatum?.url }"
			style="left: ${imageDatum?.left ?? '0' }; top: ${imageDatum?.top ?? '0'}; width: ${imageDatum?.width ?? '100%'}"
			width="600" />`
}
/** @param {ImageDatum[]} [newImagesData] */
buildImagesHTML(newImagesData) {
	const imagesData = newImagesData && newImagesData[0] ? newImagesData : this.parsedImagesData;
	return imagesData.map(
		/** @param {ImageDatum} imageDatum */
		(imageDatum) => this.buildimageHTML(imageDatum)).join("");
}
buildRingHTML() {
	let top = this.c.randomInteger(5, 95);
	let left = this.c.calculateLeft(top);
	let size = this.c.randomInteger(40, 100);
	let opacity = this.c.calculateOpacity(size);
	let scale = this.c.calculateScale(size);
	let shadowX = (size * 0.01).toFixed(2);
	let shadowY = 1;
	let shadowBlur = (size * 0.01).toFixed(2);
	let shadowOpacity = (size * 0.004).toFixed(2);
	let shadowColor = `color-mix(in srgb, ${this.colorShadow} ${Number(Number(shadowOpacity)?.toFixed(2) ?? '.16') * 100}%, transparent)`;
	let shadow = `drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor})`;
	let timing = "ease-in-out";
	let translateX = 0;
	let translateY = 0;
	let duration = 0.3;
	let delay = 0;
	let color = this.colorPrimary ?? 'currentColor';
	let pointerEvents = "auto";

	let style = `
		color: ${color};
		left: ${left}%;
		top: ${top}%;
		opacity: ${opacity};
		pointer-events: ${pointerEvents};
		scale: ${scale};
		filter: ${shadow};
		transform: translate(${translateX}em, ${translateY}em);
		transition-duration: ${duration}s;
		transition-timing-function: ${timing};
		transition-delay: ${delay}s;`
	return `
	<div
		class="ring"
		style="${style}"
		role="presentation"
		aria-hidden="true">
	</div>`
}
buildRingsHTML() {
	const count = this.ringsCount ? Number(this.ringsCount) : 30;
 	let str= "";
	for (let i = 0; i < count; i++) {
		str += this.buildRingHTML();
	}
	return str;
}
buildGraphicHTML() {

	return `
	<div
		id="billboard-images"
		aria-hidden="true">

		<!-- base circle -->
		<div id="base-circle"></div>

		<!-- rings -->
		${this.buildRingsHTML()}

		<!-- images -->
		<div id="images-container">
			${this.buildImagesHTML()}
		</div>`
}
buildLinkHTML(/** @type {{[key:string]: string;}} [data] */ data) {

	// string for the attributes
	let attributeString = "";

	// attributes
	const attributes = "color-background color-primary link-href link-text link-title link-rel".split(" ");

	// iterate over the attributes, if the data has a value for the attribute, update the attribute
	attributes.forEach((attr) => {
		const value = data?.[attr] ?? this.getAttribute(attr) ?? "";
		if (value) {
			attributeString += ` ${attr}="${value}"`;
			this.setAttribute(attr, value);
		}});
	return `
	<link-button
		color-backgroundHover="${this.colorPrimary}"
		color-primaryHover="${this.colorBackground}"
		${attributeString}
		id="button"></link-button>`
}

// ELEMENTS MASTER LAYOUT GETTER
get els() {
	return `
<style id="stylesheet">${this.stylesheet}</style>
<div id="container" style="--color-accent:${this.colorAccent}; --color-background:${this.colorBackground}; --color-primary:${this.colorPrimary}; --color-shadow:${this.colorShadow}; --font-family:${this.fontFamily}">
	<div id="container-inner">
		<div id="content-container">
			<h1 id="heading">${this.headingText}</h1>
			<p id="paragraph">${this.paragraphText}</p>
			<div id="link-container">
				${this.buildLinkHTML()}
			</div>
		</div>
		<div id="graphic-container">
			${this.buildGraphicHTML()}
			<slot id="slot"></slot>
		</div>
	</div>
</div>`.trim();
}

get preflight() {
	return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}::before,::after {--tw-content:""}html,:host {line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:theme( "fontFamily.sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body {margin:0;line-height:inherit}hr {height:0;color:inherit;border-top-width:1px}abbr:where([title]) {text-decoration:underline dotted}h1,h2,h3,h4,h5,h6 {font-size:inherit;font-weight:inherit}a {color:inherit;text-decoration:inherit}b,strong {font-weight:bolder}code,kbd,samp,pre {font-family:theme( "fontFamily.mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small {font-size:80%}sub,sup {font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub {bottom:-0.25em}sup {top:-0.5em}table {text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea {font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select {text-transform:none}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring {outline:auto}:-moz-ui-invalid {box-shadow:none}progress {vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button {height:auto}[type="search"] {-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration {-webkit-appearance:none}::-webkit-file-upload-button {-webkit-appearance:button;font:inherit}summary {display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin:0}fieldset {margin:0;padding:0}legend {padding:0}ol,ul,menu {list-style:none;margin:0;padding:0}dialog {padding:0}textarea {resize:vertical}input::placeholder,textarea::placeholder {opacity:1;color:theme("colors.gray.400", #9ca3af)}button,[role="button"] {cursor:pointer}:disabled {cursor:default}img,svg,video,canvas,audio,iframe,embed,object {display:block;vertical-align:middle}img,video {max-width:100%;height:auto}[hidden] {display:none}`
}

// STYLES GETTER
get styles() {
	return `
	<style id="preflight">${this.preflight}</style>
	<style id="base">
		#container {
			background-color: var(--color-background);
			color: var(--color-primary, darkblue);
			overflow:visible;
		}
		#container-inner {
			display: grid;
			grid-template-columns: repeat(1,minmax(0,1fr));
			height:auto;
			padding:0 16px 96px;
			width:100%;
		}
		/* container-inner - sm */
		@media (min-width: 640px) {
			#container-inner {
				padding:0 128px 96px;
				place-items: center;
			}
		}
		/* container-inner - md */
		@media (min-width: 768px) {
			#container-inner {
				padding:0 224px 96px;
			}
		}
		/* container-inner - lg */
		@media (min-width: 1024px) {
			#container-inner {
				column-gap:64px;
				grid-template-columns: repeat(2,minmax(0,1fr));
				padding:96px 64px;
				place-content:center;
			}
		}
		/* container - xl */
		@media (min-width: 1280px) {
			#container {
				padding:128px 80px;
		}
		}
		/* container-inner - 2xl */
		@media (min-width: 1536px) {
			#container-inner {
				padding:160px 96px;
			}
		}
		#content-container {
			order:1;
		}
		/* content-container - lg */
		@media (min-width: 1024px) {
			#content-container {
				order:0;
		}
	}
		#heading {
			display:block;
			filter: drop-shadow(0 1px 1px rgba(0,0,0,.05));
			font-family: var(--font-family, inherit);
			font-weight:900;
			font-size:1.25rem;
			line-height:1.25;
			padding-bottom:2rem;
			text-align:center;
			text-transform:capitalize;
		}
		/* heading - sm */
		@media (min-width: 640px) {
			#heading {
				font-size:1.65rem;
				padding:1rem 0;
			}
		}
		/* heading - lg */
		@media (min-width: 1024px) {
			#heading {
				text-align:start;
				font-size:1.75rem;
			}
		}
		#paragraph {
			display:none;
			font-weight:500;
			margin-bottom:1.5rem;
			opacity:.95;
			text-align:center;
		}
		/* text - sm */
		@media (min-width: 640px) {
			#paragraph {
				display:block;
			}
		}
		/* text - lg */
		@media (min-width: 1024px) {
			#paragraph {
				text-align:start;
			}
		}
		/* link-container */
		#link-container {
			display:flex;
			justify-content:center;
		}
		/* link-container - lg */
		@media (min-width: 1024px) {
			#link-container {
				justify-content:start;
			}
		}
		#graphic-container {
			background-color:rgb(10 46 126 / 0%);
			user-select:none;
			aspect-ratio:1;
			order:0;
			width:100%;
		}
		/* graphic-container - lg */
		@media (min-width: 1024px) {
			#graphic-container {
				order:0;
		}
	}
		/* billboard images */
		#billboard-images {
			aspect-ratio:1;
			display:flex;
			justify-content:center;
			overflow:visible;
			position:relative;
			user-select:none;
			width:100%;
		}
		/* billboard images - sm */
		@media (min-width: 640px) {
			#billboard-images {
				display:block;
			}
		}
		/* billboard images - md */
		@media (min-width: 768px) {
			#billboard-images {
				font-size:11px;
				max-width:32rem;
			}
		}
		/* billboard images - lg */
		@media (min-width: 1024px) {
			#billboard-images {
				align-items:center;
				font-size:16px;
				max-width:none;
				width:100%;
			}
		}
		/* base circle */
		#billboard-images #base-circle {
			aspect-ratio:1;
			align-items:center;
			background-color:transparent;
			display:flex;
			filter:drop-shadow(0 1px 2px rgb(0 0 0 / .1));
			height:auto;
			justify-content:center;
			position:relative;
			width:100%;
		}
		/* base circe - after */
		#billboard-images #base-circle::after {
			aspect-ratio:1;
			background-color:var(--color-accent, lightblue);
			content:"";
			position:absolute;
			border-radius: 9999px;
			width:50%;
		}
		/* image */
		#billboard-images .billboard-image {
			aspect-ratio:1;
			box-shadow: 0 4px 6px -1px color-mix(in srgb, rgb(11 46 126) 40%, transparent), 0 2px 4px -2px color-mix(in srgb, rgb(11 46 126) 10%, transparent);
			border-radius: 9999px;
			background: transparent;
			display:flex;
			font-size: 10px;
			items-align:center;
			justify-content:center;
			overflow-clip-margin: content-box;
			overflow-x: clip;
			overflow-y: clip;
			position:absolute;
			scale: 1;
			transition-duration: 0.2s;
			transition-property: transform, scale;
			transition-timing-function: ease-out;
			transform: rotate3d(0, 0, 0, 0);
			opacity: 1;
		}
		@supports not (box-shadow: color-mix(in srgb, rgb(11 46 126) 40%)) {
			#billboard-images .billboard-image { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .4) }
		}
		/* image hover */
		#billboard-images .billboard-image:hover {
			transform: scale(1.1);
		}
		#billboard-images.animation-reset .image.photo {
			transform: rotate3d(0, 0, 0, 0);
			scale: 0;
		}
		#billboard-images.animation-reset .image.photo.spin-in {
			transform: rotate3d(0, 0, 1, 1turn);
		}
		#billboard-images.animation-reset .image.photo.flip-in-x {
			transform: rotate3d(1, 0, 0, 1turn);
		}
		#billboard-images.animation-reset .image.photo.flip-in-y {
			transform: rotate3d(0, 1, 0, 1turn);
		}
		#billboard-images.animation-reset .image.photo.flip-in-xy {
			transform: rotate3d(1, 1, 0, 1turn);
		}

		/* ring */
		#billboard-images .ring {
			align-items: center;
			aspect-ratio: 1 / 1;
			border-radius: 50%;
			font-size: 2em;
			font-weight: 600;
			justify-items: center;
			line-height: 1;
			position: absolute;
			text-align: center;
			transform-origin: center;
			transition-duration: 3s;
			transition-timing-function: ease-out;
			transition-property: scale;
		}
		#billboard-images .ring::after {
			background-clip: text;
			background-size: 100%;
			border-radius: 50%;
			content: "○";
			display: flex;
			justify-content: center;
			align-items: center;
			vertical-align: middle;
			pointer-events: none;
			line-height: 1;
		}

	</style>`;
}

// TEMPLATE GETTER
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.styles}${this.els}`.trim();
	return template;
}

// IDS GETTER
get ids() {
	return [...`${this.els + this.styles}`.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
}

// CONSTRUCTOR
constructor() {
	super();

	// programattically create getters and setters for each observed attribute
	ComponentUtils.createOAGS(this.c, this);

	// create a shadow root
	this.attachShadow({ mode: "open" });

	// append template to shadow root
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true));

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);

}

// CONNECTED CALLBACK
connectedCallback() { this.fetchData(); }

// ATTRIBUTE CHANGED CALLBACK
attributeChangedCallback() {}

// REBUILDERS -- rebuild elements with new data
/** @param {*} data */
rebuildImagesWithNewData(data) {
	// if there is not valid images data return
	if (!data || !data['images-data'] || !data['images-data'][0]) return;

	// exiting elements
	const shadowRoot = this.shadowRoot;
	const billboardImages = shadowRoot?.getElementById("billboard-images");
	const imagesContainer = shadowRoot?.getElementById("images-container");

	// new container
	const newImagesContainer = document.createElement("div");
	newImagesContainer.id = "images-container";

	// rebuild images with new data
	const imagesData = data['images-data'];

	newImagesContainer.innerHTML = this.buildImagesHTML(imagesData);
	if (billboardImages && imagesContainer) {
		billboardImages?.replaceChild(newImagesContainer, imagesContainer) };
}
/** @param {*} data */
rebuildLinkWithNewData(data) {
	// button attributes
	const attributes = "link-href link-text link-title link-rel".split(" ");

	// if no relevant data points, return
	let hasData = false;
	attributes.forEach((attr) => {if (data?.[attr]) hasData = true;});
	if (!hasData) return;

	// existing elements
	const shadowRoot = this.shadowRoot;
	const contentContainer = shadowRoot?.getElementById("content-container");
	const linkContainer = shadowRoot?.getElementById("link-container");

	// new container
	const newLinkContainer = document.createElement("div");
	newLinkContainer.id = "link-container";

	// add the new link
	newLinkContainer.innerHTML = this.buildLinkHTML(data);
	if (contentContainer && linkContainer) {
		contentContainer?.replaceChild(newLinkContainer, linkContainer) };
}

/** @param {*} data */
updateCSSVariables(data) {
	const attributes = "color-accent color-background color-primary color-shadow font-family".split(" ");

	// iterate over the attributes, if the data has a value for the attribute, update the attribute
	attributes.forEach((attr) => {
		let value = data?.[attr] ?? this.getAttribute(attr);
		if (value) {
			if (this.refs.container.style.getPropertyValue(`--${attr}`) != value) this.refs.container.style.setProperty(`--${attr}`, value);
			if (this.getAttribute(attr) != value) this.setAttribute(attr, value);
		}
	});

}


// UPDATERS
/** @param {{[key:string]: string;}} [data] */
updateTextContent(data) {
	const attributes = "stylesheet heading-text paragraph-text".split(" ");

	// iterate over the attributes, if the data has a value for the attribute, update the attribute
	attributes.forEach((attr) => {
		let value = data?.[attr] ?? this.getAttribute(attr);
		if (value) {
			if (this.innerHTML != value) this.refs[`${attr.split('-')[0]}`].innerHTML = value;
			if (this.getAttribute(attr) != value) this.setAttribute(attr, value);
		}
	});

}



// FETCH DATA
fetchData() {
	// if no data url or it does not end in .json, return empty string
	if (!this.dataJsonUrl || !this.dataJsonUrl.includes('.json') ) return "";
	else {
  return /** @type {Promise<void>} */(new Promise((res, rej) => {
    fetch(`${this.dataJsonUrl}`)
      .then(data => data.json())
      .then((json) => {
				if (json) {
				this.updateCSSVariables(json);
				this.updateTextContent(json);
				this.rebuildLinkWithNewData(json);
				this.rebuildImagesWithNewData(json);

			}
        res();
      })
      .catch((error) => rej(error));
  }))
	}
}

// STATIC HELPERS
/**
 * @method randomInteger
 * @static
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
static randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @method calculateLeft
 * @static
 * @param {number} top
 * @returns {number}
 * */
static calculateLeft(top) {
	if (top < 24 || top > 72) return this.randomInteger(5, 95);
		else {
			const ab = this.randomInteger(0, 1);
			if (ab == 0) return this.randomInteger(5, 20);
			else if (ab == 1) return this.randomInteger(80, 90);
		}
		return 0;
}
/**
 * @method calculateOpacity
 * @static
 * @param {number} size
 * @param {number} [min]
 * @param {number} [max]
 * @returns {number}
 * */
static calculateOpacity(size, min, max) {
	size = size ? size : 0;
	min = min ?? 0;
	max = max ?? 1;
	const calculated = size * 0.01;
	const maxLimitApplied = calculated > max ? max : calculated;
	const minLimitApplied = calculated < min ? min : maxLimitApplied;
	const result = Number(minLimitApplied.toFixed(2));
	return result;
}
/**
 * @method calculateScale
 * @static
 * @param {number} size
 * @param {number} [min]
 * @param {number} [max]
 * @returns {number}
 * */
static calculateScale(size, min, max) {
	size = size ? size : 0;
	min = min ?? 0;
	max = max ?? 1;
	const calculated = Number((size * 0.01).toFixed(2));
	if (calculated > max) return max;
	else if (calculated < min) return min;
	else return calculated;
}
}

customElements.define("home-billboard", HomeBillboard);
export default HomeBillboard;
