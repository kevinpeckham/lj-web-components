// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// TYPES
/** @typedef {{url?:string; alt?:string; left?:string; top?:string; width?:string; }} ImageDatum */
/** @copyright 2024 Lightning Jar - "HomeBillboard" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/home-billboard} */

 /**
	* Widget Heading Web Component
 * @name HomeBillboard
 * @classduration of the transition effect
 * @published 2024-02-14
 * @requires ComponentUtils
 * @classdesc Defines web component that displays a billboard with a headline, text, button and slotted content
 * @attribute border-bottom-color | var(--color-primary) | -- | color of the border bottom
 * @attribute border-bottom-size | 1px | -- | size of the border bottom
 * @attribute border-bottom-opacity | 10% | -- | opacity of the border bottom
 * @attribute color-accent | lightblue | #ceede9 | color of the accent
 * @attribute color-background | transparent | #F8FAFC | color of the background
 * @attribute color-primary | currentColor | #0b2e7e | color of the primary text
 * @attribute color-shadow | black | rgb(11 46 126) | color of the shadow
 * @attribute flair-count | 30 | -- | number of flairs
 * @attribute flair-glyph | -- | -- | glyph for the flairs
 * @attribute flair-on | true | -- | boolean to turn flairs on or off
 * @attribute font-family | inherit | -- | font family for the text
 * @attribute heading-font-weight | 900 | -- | font weight for the heading
 * @attribute heading-text | -- | Robust Training & <br> Competency Solutions <br> For The Energy Industry. | text for the heading
 * @attribute images-data | -- | [{"url":"https://www.competencyalliance.dev/images/wind.webp","alt":"wind power","left":"20%","top":"16%","width":"30%"},{"url":"https://www.competencyalliance.dev/images/solar.webp","alt":"solar power","left":"55%","top":"15%","width":"15%"},{"url":"https://www.competencyalliance.dev/images/hardhat.webp","alt":"hardhat","left":"65%","top":"30%","width":"20%"},{"url":"https://www.competencyalliance.dev/images/refinery.webp","alt":"refinery","left":"50%","top":"52%","width":"40%"},{"url":"https://www.competencyalliance.dev/images/offshore.webp","alt":"offshore oil platform","left":"20%","top":"52%","width":"25%"}] | json data for the images
 * @attribute link-url | -- | -- | url for the link
 * @attribute link-rel | -- | contact | rel for the link
 * @attribute link-text | -- | Get Started | text for the link
 * @attribute link-title | -- | contact us to learn more | title for the link
 * @attribute paragraph-text | -- | We cater to the evolving needs of the industry and its customers including: digital learning, certification, assessment, data analytics, and competency consulting. | text for the paragraph
 * @attribute stylesheet | -- | -- | inject css into the inner stylesheet
 * @attribute data-json-url | -- | -- | url of remote json data
 */

class HomeBillboard extends HTMLElement {

get c() { return HomeBillboard };

// PRIVATE VARIABLES
#isOnScreen = false;

// ATTRIBUTES
/** @returns { { [key:string]: string } } */
static get attributes() {
	const values = {
		"border-bottom-color": "var(--color-primary)",
		"border-bottom-size": "1px",
		"border-bottom-opacity": "10%",
		"color-accent": "lightblue",
		"color-background": "transparent",
		"color-primary": "currentColor",
		"color-shadow": "black",
		"flair-count": "30",
		"flair-glyph": "&#9675;",
		"flair-on": "true",
		"font-family": "inherit",
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

// HTML BUILDERS
/** @param {ImageDatum} imageDatum */
static buildimageHTML(imageDatum) {
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

buildImagesHTML() {
	const /** @type {ImageDatum[]} */ imagesData  = JSON.parse(this.attValue('images-data')) ?? []
	return imagesData.map((imageDatum) => this.c.buildimageHTML(imageDatum)).join("");
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
	const shadowColor = `color-mix(in srgb, ${this.attValue('color-shadow')} ${Number(Number(shadowOpacity)?.toFixed(2) ?? '.16') * 100}%, transparent)`;
	const shadow = `drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor})`;
	const timing = "ease-in-out";
	const translateX = 0;
	const translateY = 0;
	const duration = 0.3;
	const delay = 0;
	const color = this.attValue('color-primary') ?? 'currentColor';
	const pointerEvents = "auto";
	const style = `
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
	const flairCount = this.attValue('flair-count');
	const count = flairCount ? Number(flairCount) : 30;
 	let str= "";
	for (let i = 0; i < count; i++) {
		str += this.buildFlairHTML();
	}
	return str;
}
buildGraphicHTML() {
	const html = ComponentUtils.stringIfValue;
	const flairs = this.buildFlairsHTML();
	const images = this.buildImagesHTML();
return `
<div
	id="billboard-images"
	class="animation-reset"
	aria-hidden="true">
	<div id="base-circle"></div>
	${html(flairs, flairs)}
	${html(images, `<div id="images-container">${images}</div>`)}`.trim();
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS MASTER LAYOUT GETTER
get els() {
const cssVars = ComponentUtils.cssVars(this.c.attributes, this, ["flair"]);
const glyph = this.attValue('flair-glyph');
const graphic = this.buildGraphicHTML();
const heading = this.attValue('heading-text');
const link = this.attValue('link-text');
const linkUrl = this.attValue('link-url') ?? this.attValue('link-href');
const linkRel = this.attValue('link-rel');
const linkTitle = this.attValue('link-title');
const paragraph = this.attValue('paragraph-text');
const html = ComponentUtils.stringIfValue;
const slotContents = this.innerText;
const stylesheet = this.attValue('stylesheet');
return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div id="container" style="${cssVars} --flair-glyph:'${glyph}';">
	<div id="container-inner">
		<div id="content-container">
			${html(heading, `<h1 id="heading">${heading}</h1>`)}
			${html(paragraph, `<p id="paragraph">${paragraph}</p>`)}
			${html(link, `<a
				id="heading-link"
				${html(linkRel, `rel="${linkRel}" `)}
				${html(linkTitle, `title="${linkTitle}" `)}
				href="${linkUrl}">${link}</a>`,linkUrl)}
		</div>
		<div id="graphic-container">
			${html(graphic, graphic)}
			${html(slotContents, `<slot id="slot">${slotContents}</slot>`)}
		</div>
	</div>
</div>`.trim();
}

// STYLES GETTER
static get styles() {
return `
${ComponentUtils.preflight}
<style id="base">
	*:empty { display:none; }
	#container {
		background-color: var(--color-background);
		border-bottom: solid 1px lightgray;
		border-bottom: solid var(--border-bottom-size) color-mix(in srgb, var(--border-bottom-color) var(--border-bottom-opacity), transparent);
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
	@media (min-width: 640px) {
		#container-inner {
			padding:0 16% 54px;
		}
	}
	@media (min-width: 768px) {
		#container-inner {
			padding:0 24% 96px;
		}
	}
	@media (min-width: 1024px) {
		#container-inner {
			column-gap:64px;
			grid-template-columns: repeat(2,minmax(0,1fr));
			padding:96px 64px;
			place-content:center;
		}
	}
	@media (min-width: 1280px) {
		#container-inner {
			padding:128px 80px;
		}
	}
	@media (min-width: 1536px) {
		#container-inner {
			padding:calc(60px + 4vw) 96px;
		}
	}
	#content-container {
		order:1;
		display:grid;
		grid-template-columns:repeat(1,minmax(0,1fr));
		place-items:center;
		place-content:center;
	}
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
		font-size:calc(1rem + 1vw);
		line-height:1.25;
		max-width:380px;
		padding:0 10% 3rem;
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
	@media (min-width: 640px) {
		#heading {
			font-size:1.5rem;
			padding:2rem 0 1rem;
		}
	}
	@media (min-width: 760px) {
		#heading {
			font-size:1.55rem;
			padding:1rem 0;
		}
	}
	@media (min-width: 1024px) {
		#heading {
			text-align:start;
			font-size:1.75rem;
			max-width:100%;
		}
	}
	@media (min-width: 1536px) {
		#heading {
			font-size:calc(1.5rem + .5vw);
		}
	}
	#paragraph {
		display:none;
		font-weight:500;
		margin-bottom:1.5rem;
		opacity:.95;
		text-align:center;
	}
	@media (min-width: 640px) {
		#paragraph {
			display:block;
		}
	}
	@media (min-width: 1024px) {
		#paragraph {
			text-align:start;
		}
	}
	@media (min-width: 1536px) {
		#paragraph {
			font-size: calc(.8rem + .3vw);
		}
	}
	#link-container {
		display:flex;
		justify-content:center;
	}
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
	@media (min-width: 1024px) {
		#graphic-container {
			order:0;
	}
}
	@media (min-width: 1536px) {
		#graphic-container {
			width:calc(60% + 10vw);
	}
}
#billboard-images {
	aspect-ratio:1;
	display:flex;
	justify-content:center;
	overflow:visible;
	position:relative;
	user-select:none;
	width:100%;
}
@media (min-width: 640px) {
	#billboard-images {
		display:block;
	}
}
@media (min-width: 768px) {
	#billboard-images {
		font-size:11px;
		max-width:32rem;
	}
}
@media (min-width: 1024px) {
	#billboard-images {
		align-items:center;
		font-size:16px;
		max-width:none;
		width:100%;
	}
}
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
	opacity:0;
	pointer-events: none;
	transition: opacity 0.3s ease-in;
	line-height: 1;
}
@media (min-width: 640px) {
	#billboard-images	.flair::after { opacity:1; }
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
	template.innerHTML = `${this.c.styles}${this.els}`.trim();
	return template;
}

// CONSTRUCTOR
constructor() {
	super();
	this.attachShadow({ mode: "open" });
	this.observerCallback = this.observerCallback.bind(this);
}

// CONNECTED CALLBACK
connectedCallback() {
	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

	// ref flair elements & container
	const flairs = this.shadowRoot?.querySelectorAll(".flair")
	const container = this.shadowRoot?.getElementById("container");

	// add event listeners to the flair elements
	flairs?.forEach((flair) => {
		const div = flair instanceof HTMLDivElement ? flair : null;
		div?.addEventListener("mouseenter", (e) => {
			this.c.handleMouseEnter(/** @type {MouseEvent} e */ e);
		});
	});

	// create and start the observer
	const observer = new IntersectionObserver(this.observerCallback, {
		rootMargin: "0%",
		threshold: 0.5,
	})

	if (container ) observer.observe(container);
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

// PRIVATE VARIABLE - #isOnScreen
get isOnScreen() {
	return this.#isOnScreen;
}
/** @param {boolean} value */
set isOnScreen(value) {
	const imagesContainer = this.shadowRoot?.getElementById("billboard-images");

	if (typeof value  === "boolean") this.#isOnScreen = value;
	// when the element is scrolled into view do this
	if (value === true) {
		imagesContainer?.classList.remove("animation-reset");
	} else {
		imagesContainer?.classList.add("animation-reset");
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
