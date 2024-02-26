// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";
// @ts-expect-error yep got it
import SubWidgetText from "/e/wc/sub-widget-text@0.1.1.min.js";
// @ts-expect-error yep got it
import SubWidgetHeading from "/e/wc/sub-widget-heading@0.1.1.min.js";
// @ts-expect-error yep got it
import LinkButton from "/e/wc/link-button@0.1.1.min.js";

// types
/** @typedef {{url?:string; alt?: string; left?: string; top?: string; width?: string; }} ImageDatum */

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
 * @attribute button-href | -- | / | url for the button
 * @attribute button-text | -- | Get Started | text for the button
 * @attribute button-title | -- | explore training & competency solutions | title for the button
 * @attribute button-rel | -- | -- | rel for the button
 * @attribute color-accent | lightblue | #ceede9 | color of the text
 * @attribute color-background | -- | #F8FAFC | color of the widget background
 * @attribute color-button-background-hover | -- | #0b2e7e | color of the button background on hover
 * @attribute color-button-primary-hover | -- | white | color of the button text on hover
 * @attribute color-primary | currentColor | #0b2e7e | color of the text
 * @attribute color-shadow | black | rgb(11 46 126) | color of the shadow
 * @attribute container-padding | 4rem | -- | padding for the container
 * @attribute images-data | [] | [{"url":"https://res.cloudinary.com/dn0pqjjbq/image/upload/v1708950992/petro/wind_xvg3mh.webp", "alt":"wind", "left":"20%", "top":"16%", "width":"30%"},{"url":"https://res.cloudinary.com/dn0pqjjbq/image/upload/v1708951699/petro/solar_ksxj0e.webp", "alt":"solar", "left":"55%", "top":"15%", "width":"15%"},{"url":"https://res.cloudinary.com/dn0pqjjbq/image/upload/v1708951881/petro/hardhat_lgkwgc.webp", "alt":"hard hat", "left":"65%", "top":"30%", "width":"20%"},{"url":"https://res.cloudinary.com/dn0pqjjbq/image/upload/v1708951980/petro/refinery_q6souz.webp", "alt":"refinery", "left":"50%", "top":"52%", "width":"40%"},{"url":"https://www.competencyalliance.dev/images/offshore.avif","alt":"offshore", "left":"20%", "top":"52%", "width":"25%"}] | data for images in json format
 * @attribute font-family | -- | Mulish,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji | font family for the text
 * @attribute heading-text | -- | Robust Training &<br>Competency Solutions<br>For The Energy Industry. | text for the heading
 * @attribute widget-text | -- | We cater to the evolving needs of the industry and its customers including: digital learning, certification, assessment, data analytics, and competency consulting. | text for the widget
 * @attribute stylesheet | -- | #container { border-bottom: solid 1px rgb(229 231 235 / 40% )  } | inject css into the inner stylesheet
 * @attribute data-json-url | -- |-- | url of remote json data
 * @note
 */
class HomeBillboard extends HTMLElement {

	// reference to class itself
	get c() { return HomeBillboard };

	// PROPERTIES
	buttonHref = "";
	buttonRel = "";
	buttonText = "";
	buttonTitle = "";
	colorAccent = "";
	colorBackground = "";
	colorButtonBackgroundHover = "";
	colorButtonPrimaryHover = "";
	colorPrimary = "";
	colorShadow = "";
	containerPadding = "";
	fontFamily = "";
	headingText = "";
	imagesData = "[]";
	widgetText = "";
	stylesheet = "";
	dataJsonUrl = "";

// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string } }
 */
static get attributes() {
	const values = {
		// sub-widget-container attributes
		"color-button-background-hover": "",
		"color-button-primary-hover": "",
		"button-href": "",
		"button-rel": "",
		"button-text": "",
		"button-title": "",
		"color-accent": "lightblue",
		"color-background": "transparent",
		"color-primary": "currentColor",
		"color-shadow": "black",
		"container-padding": "4rem",
		"font-family": "",
		"heading-text": "",
		"images-data": "[]",
		"widget-text": "",
		"rings-on": "true",
		"rings-count": "30",
		"stylesheet": "",
		"data-json-url": "",
	};
return values;
}

// get observed attributes
static get observedAttributes() { return Object.keys(this.attributes) }

// get default value for an attribute
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

// IMAGES
get parsedImagesData() {
	return JSON.parse(this.imagesData) ?? []
}
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
get billboardImagesHTML() {
	return this.parsedImagesData.map(
		/** @param {ImageDatum} imageDatum */
		(imageDatum) => this.buildimageHTML(imageDatum)).join("");
}

// RINGS
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

get ringHTML() {
	let top = this.c.randomInteger(5, 95);
	let left = this.c.calculateLeft(top);
	let size = this.c.randomInteger(40, 100);
	let opacity = this.c.calculateOpacity(size);
	let scale = this.c.calculateScale(size);
	let shadowX = (size * 0.01).toFixed(2);
	let shadowY = 1;
	let shadowBlur = (size * 0.01).toFixed(2);
	let shadowOpacity = (size * 0.004).toFixed(2);
	let shadowColor = `color-mix(in srgb, this.colorShadow ${(Number(shadowOpacity) ?? .16) * 100}%, transparent)`;
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
		transition-delay: ${delay}s;
	`
	return `
	<div
		class="ring"
		style="${style};"
		role="presentation"
		aria-hidden="true">
	</div>`
}

// ELEMENTS
get graphicHTML() {

	return `
	<div
		id="billboard-images"
		aria-hidden="true">

		<!-- base circle -->
		<div id="base-circle"></div>

		<!-- images -->
		${this.billboardImagesHTML}

		<!-- rings -->
		${this.ringHTML}
	`
}

get els() {
	return `
<style id="stylesheet">${this.stylesheet}</style>
<div id="container" style="--color-accent:${this.colorAccent}; --color-background:${this.colorBackground}; --color-primary:${this.colorPrimary}; --color-shadow:${this.colorShadow}; --font-family:${this.fontFamily}">
	<div id="container-inner">
		<div id="content-container">
			<h1 id="heading">${this.headingText}</h1>
			<p id="text">${this.widgetText}</p>
			<div id="button-container">
				<link-button
					${this.colorBackground ? `color-background="${this.colorBackground}"` : ""}
					${this.colorPrimary ? `color-primary="${this.colorPrimary}"` : ""}
					color-backgroundHover="${this.colorButtonBackgroundHover ?? this.colorPrimary ?? 'currentColor'}"
					${this.colorButtonPrimaryHover ? `color-primaryHover="${this.colorButtonPrimaryHover}"` : ""}
					link-href="${this.buttonHref}"
					link-text="${this.buttonText}"
					link-title="${this.buttonTitle}"
					link-rel="${this.buttonRel}"
					id="button">${this.buttonText}</link-button>
			</div>
		</div>
		<div id="graphic-container">
			${this.graphicHTML}
			<slot id="slot"></slot>
		</div>
	</div>
</div>`.trim();
}

get styles() {
	return `
	<link rel="stylesheet" href="/e/wc/preflight.min.css">
	<style>
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
		#text {
			display:none;
			font-weight:500;
			margin-bottom:1.5rem;
			opacity:.95;
			text-align:center;
		}
		/* text - sm */
		@media (min-width: 640px) {
			#text {
				display:block;
			}
		}
		/* text - lg */
		@media (min-width: 1024px) {
			#text {
				text-align:start;
			}
		}
		/* button-container */
		#button-container {
			display:flex;
			justify-content:center;
		}
		/* button-container - lg */
		@media (min-width: 1024px) {
			#button-container {
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
		#base-circle {
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
		#base-circle::after {
			aspect-ratio:1;
			background-color:var(--color-accent, lightblue);
			content:"";
			position:absolute;
			border-radius: 9999px;
			width:50%;
		}
		/* image */
		.billboard-image {
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
		}
		@supports not (box-shadow: color-mix(in srgb, rgb(11 46 126) 40%) {
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .4);
		}
		/* ring */
		.ring {
			align-items: center;
			aspect-ratio: 1;
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
		.ring::after {
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

// constructor
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

	// update attributes
	this.updateAttributes();
}

	// CONNECTED CALLBACK
	connectedCallback() { this.fetchData(); }

	// ATTRIBUTE CHANGED CALLBACK
	attributeChangedCallback() {}

	// METHODS
	updateAttributes() {
		// update css custom color properties
		// this.refs.container.style.setProperty("--color-accent", this.colorAccent);
		// this.refs.container.style.setProperty("--color-background", this.colorBackground);
		// this.refs.container.style.setProperty("--color-primary", this.colorPrimary);
		// this.refs.container.style.setProperty("--font-family", this.fontFamily);

		// heading text
		if (this.refs.heading.innerHTML != this.headingText) {
			this.refs.heading.innerHTML = this.headingText;
		}
		// widget text
		if (this.refs.text.innerHTML != this.widgetText) {
			this.refs.text.innerHTML = this.widgetText;
		}

		// update the inner stylesheet
		this.refs.stylesheet.textContent = this.getAttribute("stylesheet");
	}

/** @param {*} data */
rebuildWithNewData(data) {
	const shadowRoot = this.shadowRoot;
	const container = shadowRoot?.getElementById("container");
	const containerInner = shadowRoot?.getElementById("container-inner");
	const newContainerInner = document.createElement("div");
	newContainerInner.id = "container-inner";
	newContainerInner.innerHTML = "";
	if (container && containerInner) {
		container?.replaceChild(newContainerInner, containerInner) };
}
fetchData() {
	// if no data url or it does not end in .json, return empty string
	if (!this.dataJsonUrl || !this.dataJsonUrl.includes('.json') ) return "";
	else {
  return /** @type {Promise<void>} */(new Promise((res, rej) => {
    fetch(`${this.dataJsonUrl}`)
      .then(data => data.json())
      .then((json) => {
				if (json) {
        this.rebuildWithNewData(json);
			}
        res();
      })
      .catch((error) => rej(error));
  }))
	}
}
}

customElements.define("home-billboard", HomeBillboard);
export default HomeBillboard;
