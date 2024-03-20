// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";


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
 * @classdesc Defines web component that displays a billboard with a headline, text, button and slotted content
 * @attribute color-accent | lightblue | #ceede9 | color of the accent
 * @attribute color-background | transparent | #F8FAFC | color of the background
 * @attribute color-primary | currentColor | #0b2e7e | color of the primary text
 * @attribute color-shadow | black | rgb(11 46 126) | color of the shadow
 * @attribute flair-count | 30 | -- | number of flairs
 * @attribute flair-glyph | ○ | -- | glyph for the flairs
 * @attribute flair-on | true | -- | boolean to turn flairs on or off
 * @attribute font-family | inherit | -- | font family for the text
 * @attribute heading-font-weight | 900 | -- | font weight for the heading
 * @attribute heading-text | -- | Robust Training & <br> Competency Solutions <br> For The Energy Industry. | text for the heading
 * @attribute images-data | -- | [{"url":"https://www.competencyalliance.dev/images/wind.webp","alt":"wind power","left":"20%","top":"16%","width":"30%"},{"url":"https://www.competencyalliance.dev/images/solar.webp","alt":"solar power","left":"55%","top":"15%","width":"15%"},{"url":"https://www.competencyalliance.dev/images/hardhat.webp","alt":"hardhat","left":"65%","top":"30%","width":"20%"},{"url":"https://www.competencyalliance.dev/images/refinery.webp","alt":"refinery","left":"50%","top":"52%","width":"40%"},{"url":"https://www.competencyalliance.dev/images/offshore.webp","alt":"offshore oil platform","left":"20%","top":"52%","width":"25%"}] | json data for the images
 * @attribute link-href | -- | /contact | DEPRECATED url for the link
	* @attribute link-url | -- | -- | url for the link

* @attribute link-rel | -- | contact | rel for the link
 * @attribute link-text | -- | Get Started | text for the link
 * @attribute link-title | -- | contact us to learn more | title for the link
 * @attribute paragraph-text | -- | We cater to the evolving needs of the industry and its customers including: digital learning, certification, assessment, data analytics, and competency consulting. | text for the paragraph
 * @attribute stylesheet | -- | #container { border-bottom: solid 1px rgb(229 231 235 / 40% )  } | inject css into the inner stylesheet
 * @attribute data-json-url | -- | -- | url of remote json data
 * @note
 */
class HomeBillboard extends HTMLElement {

	// reference to class itself
	get c() { return HomeBillboard };

	// PRIVATE VARIABLES
	#isOnScreen = false;

	// PROPERTIES
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";
	colorShadow = "";
	flairCount = "30";
	flairGlyph = ""
	flairOn = "true";
	fontFamily = "";
	headingFontWeight = "";
	headingText = "";
	imagesData = "[]";
	linkHref = "";
	linkRel = "";
	linkText = "";
	linkTitle = "";
	linkUrl = "";
	paragraphText = "";
	stylesheet = "";


// ATTRIBUTES GETTER
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string } }
 */
static get attributes() {
	const values = {
		"color-accent": "lightblue",
		"color-background": "transparent",
		"color-primary": "currentColor",
		"color-shadow": "black",
		"flair-count": "30",
		"flair-glyph": "○",
		"flair-on": "true",
		"font-family": "",
		"heading-font-weight": "900",
		"heading-text": "",
		"images-data": "[]",
		"link-href": "",
		"link-rel": "",
		"link-text": "",
		"link-title": "",
		"link-url": "",
		"paragraph-text": "",
		"stylesheet": "",
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
			class="billboard-image flip-in"
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

buildFlairHTML() {
	const top = this.c.randomInteger(5, 95);
	const left = this.c.calculateLeft(top);
	const size = this.c.randomInteger(40, 100);
	const opacity = this.c.calculateOpacity(size);
	const scale = this.c.calculateScale(size);
	const shadowX = (size * 0.01).toFixed(2);
	const shadowY = 1;
	const shadowBlur = (size * 0.01).toFixed(2);
	const shadowOpacity = (size * 0.004).toFixed(2);
	const shadowColor = `color-mix(in srgb, ${this.colorShadow} ${Number(Number(shadowOpacity)?.toFixed(2) ?? '.16') * 100}%, transparent)`;
	const shadow = `drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor})`;
	const timing = "ease-in-out";
	const translateX = 0;
	const translateY = 0;
	const duration = 0.3;
	const delay = 0;
	const color = this.colorPrimary ?? 'currentColor';
	const pointerEvents = "auto";


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

		let lastValue = 0;
	return `
	<div
		class="flair"
		style="${style}"
		role="presentation"
		aria-hidden="true">
	</div>`
}

/** @param {MouseEvent} e */
static handleMouseEnter(e) {

	/** @type {HTMLDivElement | null} t */
	const t = e.target instanceof HTMLDivElement ? e.target : null;
	if (t) {
		const lastScaleValue = t.style.scale;
		t.style.transitionDelay = "0";
		t.style.transitionDuration = "0.1s";
		t.style.pointerEvents = "none";
		t.style.transitionTimingFunction = "ease-out";
		t.style.scale = "0.25";

	// after time, reset scale to random value
	setTimeout(() => {
		this.jump(t, lastScaleValue);
	}, 300);
}
}
/** @param {HTMLDivElement} t, @param {string} lastScaleValue */
static jump(t, lastScaleValue) {
	// bind this to the function
		t.style.transitionDelay = "0";
		t.style.transitionDuration = "0";
		t.style.transform = `translate(${this.randomInteger(-1, 1)}em, ${this.randomInteger(-1, 1)}em)`;
		t.style.transitionDuration = "0.3";
		t.style.transitionDelay = "0.2";
		t.style.pointerEvents = "auto";
		t.style.transitionTimingFunction = "ease-in";
		t.style.scale = lastScaleValue;
}
buildFlairsHTML() {
	const count = this.flairCount ? Number(this.flairCount) : 30;
 	let str= "";
	for (let i = 0; i < count; i++) {
		str += this.buildFlairHTML();
	}
	return str;
}
buildGraphicHTML() {
	return `
	<div
		id="billboard-images"
		class="animation-reset"
		aria-hidden="true">

		<!-- base circle -->
		<div id="base-circle"></div>

		<!-- flairs -->
		${this.buildFlairsHTML()}

		<!-- images -->
		<div id="images-container">
			${this.buildImagesHTML()}
		</div>`.trim();
}

// ELEMENTS MASTER LAYOUT GETTER
get els() {
	return `
<style id="stylesheet">${this.stylesheet}</style>
<div id="container" style="
	--color-accent:${this.colorAccent};
	--color-background:${this.colorBackground};
	--color-primary:${this.colorPrimary};
	--color-shadow:${this.colorShadow};
	--font-family:${this.fontFamily};
	--flair-glyph:'${this.flairGlyph}';">
	<div id="container-inner">
		<div id="content-container">
			${ this.headingText ? `<h1 id="heading">${this.headingText}</h1>` : ""}
			${this.paragraphText ? `<p id="paragraph">${this.paragraphText}</p>` : ""}
			${this.linkText && (this.linkUrl || this.linkHref) ? `<a
				id="heading-link"
				${this.linkRel ? `rel="${this.linkRel}"` : ""}
				${this.linkTitle ? `title="${this.linkTitle}"` : ""}
				href="${this.linkUrl ? this.linkUrl : this.linkHref ?? ''}">${this.linkText}</a>` : ""}
		</div>
		<div id="graphic-container">
			${this.buildGraphicHTML()}
			<slot id="slot"></slot>
		</div>
	</div>
</div>`.trim();
}

// STYLES GETTER
get styles() {
	return `
	${ComponentUtils.preflight}
	<style id="base">
		#container {
			background-color: var(--color-background);
			color: var(--color-primary, darkblue);
			overflow:visible;
		}

		#container-inner {
			display: grid;
			grid-template-columns: repeat(1,minmax(0,1fr));
			place-items: center;
			height:auto;
			width:100%;
		}
		/* container-inner - sm */
		@media (min-width: 640px) {
			#container-inner {
				padding:0 128px 96px;
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
			#container-inner {
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
			display:grid;
			grid-template-columns:repeat(1,minmax(0,1fr));
			place-items:center;
			place-content:center;
		}
		/* content-container - lg */
		@media (min-width: 1024px) {
			#content-container {
				order:0;
				place-content:start;
				place-items:start;
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
		#heading-link {
			color: var(--color-primary, currentColor);
			display:block;
			font-size: .9rem;
			border: solid 1px var(--color-primary, currentColor);
			border-radius:.25rem;
			margin-bottom:.5rem;
			max-width: fit-content;
			padding:.35rem .85rem;
			transition-property:background-color,color;
			transition-duration: .15s;
			transition-timing-function: ease;
		}
		#heading-link:hover {
			background-color:var(--color-primary, currentColor);
			color:var(--color-background, currentColor);
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
			opacity:1;
			transition: opacity 0.3s ease-in;
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
		#billboard-images.animation-reset #base-circle {
			opacity:0;
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
			transition-duration: 0.3s;
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
		#billboard-images.animation-reset .billboard-image {
			transform: rotate3d(0, 0, 0, 0);
			scale: 0;
		}
		/* flip-in-xy */
		#billboard-images.animation-reset .billboard-image.flip-in:first-child,
		#billboard-images.animation-reset .billboard-image.flip-in:nth-child(4) {
			transform: rotate3d(1, 1, 0, 1turn);
		}
		/* flip-in-y */
		#billboard-images.animation-reset .billboard-image.flip-in:nth-child(2){
			transform: rotate3d(0, 1, 0, 1turn);
		}
		/* flip-in-x */
		#billboard-images.animation-reset .billboard-image.flip-in:nth-child(3),
		#billboard-images.animation-reset .billboard-image.flip-in:nth-child(5) {
			transform: rotate3d(1, 0, 0, 1turn);
		}
		#billboard-images.animation-reset .billboard-image.spin-in {
			transform: rotate3d(0, 0, 1, 1turn);
		}
		/* ring */
		#billboard-images .flair {
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
			transition-property: scale, opacity;
		}
		#billboard-images .flair::after {
			background-clip: text;
			background-size: 100%;
			border-radius: 50%;
			content: var(--flair-glyph, "○");
			display: flex;
			justify-content: center;
			align-items: center;
			vertical-align: middle;
			pointer-events: none;
			line-height: 1;
		}
		#billboard-images.animation-reset .flair {
			scale: 0;
			opacity: 0!important;
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

	// bind observer callback to the class
	this.observerCallback = this.observerCallback.bind(this);
}

// CONNECTED CALLBACK
connectedCallback() {
	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);

	// add event listeners to the rings
	this.refs.container.querySelectorAll(".flair").forEach(( /** @type {HTMLDivElement} ring */ ring) => {
		ring.addEventListener("mouseenter", (e) => {
			this.c.handleMouseEnter(/** @type {MouseEvent} e */ e);
		});
	});

	// create and start the observer
	new IntersectionObserver(this.observerCallback, {
		rootMargin: "0%",
		threshold: 0.5,
	}).observe(this.refs.container);
}

// ATTRIBUTE CHANGED CALLBACK
// attributeChangedCallback() {}




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

// PRIVATE VARIABLE - #isOnScreen
get isOnScreen() {
	return this.#isOnScreen;
}
/** @param {boolean} value */
set isOnScreen(value) {

	if (typeof value  === "boolean") this.#isOnScreen = value;
	// when the element is scrolled into view do this
	if (value === true) {
		this.refs['billboard-images']?.classList.remove("animation-reset");
	} else {
		this.refs['billboard-images']?.classList.add("animation-reset");
	}

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
		// this.refs.container.classList.toggle("animation-reset", !isOnScreen);
		this.isOnScreen = isOnScreen;
	}
}
}

customElements.define("home-billboard", HomeBillboard);
export default HomeBillboard;
