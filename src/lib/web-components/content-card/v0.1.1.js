// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Content Card" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/content-card} */

/**
 * Logo Block Web Component
 * @name ContentCard
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a linked tile with a single full bleed image-- for typical use in a grid of products.
 *
 * CONTAINER
 * @attribute color-primary | currentColor | #0A2E7E | primary text color
 *
 * CARD
 * @attribute card-background-color | white | #EAF1F7 | background color of the card
 * @attribute card-border-radius | .35rem | -- | border radius of the card
 * @attribute card-box-shadow | none | 0 0 1px 0 rgba(0,0,0,.2) | box shadow of the card
 * @attribute card-height | auto | -- | height of the card
 * @attribute card-hover-opacity | -- | -- | opacity of the card on hover
 * @attribute card-hover-background-color | -- | -- | background color of the card on hover
 * @attribute card-max-width | none | 16rem | max width of the card
 * @attribute card-min-height | auto | 20rem | min height of the card
 * @attribute card-opacity | 100% | -- | opacity of the card
 * @attribute card-transition-property | opacity | -- | transition property of the card
 * @attribute card-transition-duration | .3s | -- | transition duration of the card
 * @attribute card-width | 100% | -- | width of the card
 *
 * CARD LINK
 * @attribute card-link-url | -- | -- | url of a link for the entire card
 * @attribute card-link-rel | -- | -- | rel of a link for the entire card
 *
 * OUTSIDE HEADING
 * @attribute outside-heading-color | inherit | -- | color of the outside heading
 * @attribute outside-heading-font-size | inherit | -- | font size of the outside heading
 * @attribute outside-heading-font-weight | inherit | -- | font weight of the outside
 heading
 * @attribute outside-heading-margin-bottom | .5rem | -- | margin of the outside heading
 * @attribute outside-heading-text | -- | New Skills | text of the outside heading
 * @attribute outside-heading-position | above | -- | position of the outside heading
 *
 * BACKGROUND IMAGE
 * @attribute background-image-alt | -- | -- | alt text of the background image
 * @attribute background-image-position | bottom | -- | position of the background image
 * @attribute background-image-url | -- | -- | url of the background image
 *
 * FEATURE IMAGE
 * @attribute feature-image-alt | -- | -- | alt text of the feature image
 * @attribute feature-image-position | bottom-right | -- | position of the feature image
 * @attribute feature-image-url | -- | /images/custom/petro/ocean-turbines.webp | url of the feature image
 *
 * CARD HEADER
 * @attribute header-border-bottom | 1px solid #e2e8f0 | -- | border bottom of the card header
 * @attribute header-background | white | -- | background color of the card header
 * @attribute header-color-text | inherit | -- | text color of the card header
 * @attribute header-font-size | 1rem | -- | font size of the card header
 * @attribute header-font-weight | 500 | 900 | font weight of the card header
 * @attribute header-padding | .25rem 1rem | -- | padding of the card header
 * @attribute header-logo-url | -- | -- | url of the logo
 * @attribute header-logo-alt | -- | -- | alt text of the logo
 * @attribute header-logo-width | auto | -- | width of the logo
 * @attribute header-logo-height | 2.5rem | -- | height of the logo
 * @attribute header-text | -- | -- | text of the card header
 *
 * BODY CONTAINER
 * @attribute body-padding | .75rem | -- | padding of the body container
 *
 * BODY TEXT & BULLETS
 * @attribute body-bullets | [] | -- | array of bullet points
 * @attribute body-font-size | .9rem | -- | font size of the body text
 * @attribute body-font-weight | 400 | -- | font weight of the body text
 * @attribute body-text-color | inherit | -- | color of the body text
 * @attribute body-text | -- | Energy companies are increasingly moving towards diversification beyond traditional hydrocarbons. | text of the body
 *
 * @attribute body-image-url | -- | -- | url of the image
 *
 * FOOTER
 * @attribute footer-backdrop-filter | blur(8px) | -- | backdrop filter of the card header
 * @attribute footer-border-top | 1px solid #e2e8f0 | --| border bottom of the card header
 * @attribute footer-background | rgb(255 255 255 / 40%) | -- | background color of the card header
 * @attribute footer-color-text | inherit | -- | text color of the card header
 * @attribute footer-font-size | .85rem | -- | font size of the card header
 * @attribute footer-font-weight | 400 | -- | font weight of the card header
 * @attribute footer-min-height | 2.5rem | -- | min height of the card header
 * @attribute footer-padding | .25rem 1rem | -- | padding of the card header
 * @attribute footer-text | -- | -- | text of the card footer
 *
 * FOOTER LINK
 * @attribute footer-link-url | -- | -- | url of the footer link
 * @attribute footer-link-rel | -- | -- | rel of the footer link
 * @attribute footer-link-title | -- | -- | title of the footer link
 * @attribute footer-link-label | -- | -- | label of the footer link;
 * @attribute footer-link-background | rgb(255 255 255 / 30%) | -- | background color of the footer link (button style)
 * @attribute footer-link-border | 1px solid currentColor | -- | border of the footer link (button style)
 * @attribute footer-link-border-radius | .25rem; | -- | border radius of the footer link (button style)
 * @attribute footer-link-color | currentColor | -- | text color of the footer link (button style)
 * @attribute footer-link-font-size | .85em | -- | font size of the footer link (button style)
 * @attribute footer-link-font-weight | 400 | -- | font weight of the footer link (button style)
 * @attribute footer-link-hover-color | currentColor | -- | text color of the footer link on hover (button style)
 * @attribute footer-link-hover-background | rgb(255 255 255 / 80%) | -- | background color of the footer link on hover (button style)
 * @attribute footer-link-padding | .25rem .5rem; | -- | padding of the footer link (button style)
 *
 * @attribute stylesheet | -- | #container { color:#042373; } | inject css into the inner stylesheet
 * @attribute style | -- | -- | regular inline style on the component
 * @attribute transition-property | opacity | -- | duration of the transition effect
 * @attribute transition-duration | .3s | -- | duration of the transition effect
 * @attribute translate-x | -- | -- | move tile on x axis
 */
class ContentCard extends HTMLElement {

	// Container
	colorPrimary = "currentColor";

	// Outside Heading
	outsideHeadingColor = "";
	outsideHeadingFontSize = "";
	outsideHeadingFontWeight = "";
	outsideHeadingMarginBottom = "";
	outsideHeadingPosition = "";
	outsideHeadingText = "";

	// Card
	cardBackgroundColor = "";
	cardBorderRadius = "";
	cardBoxShadow = "";
	cardHeight = "";
	cardHoverOpacity = "";
	cardHoverBackgroundColor = "";
	cardMaxWidth = "";
	cardMinHeight = "";
	cardOpacity = "";
	cardTransitionProperty = "";
	cardTransitionDuration = "";
	cardWidth = "";

	// Background Image
	backgroundImageAlt = "";
	backgroundImagePosition = "";
	backgroundImageUrl = "";

	// Feature Image
	featureImageAlt = "";
	featureImagePosition = "";
	featureImageUrl = "";

	// Card Header
	headerBorderBottom = "";
	headerBackground = "";
	headerColorText = "";
	headerFontSize = "";
	headerFontWeight = "";
	headerPadding = "";
	headerLogoUrl = "";
	headerLogoAlt = "";
	headerLogoWidth = "";
	headerLogoHeight = "";
	headerText = "";

	// Body Container
	bodyPadding = "";

	// Body Text & Bullets
	bodyBullets = "[]";
	bodyFontSize = "";
	bodyFontWeight = "";
	bodyTextColor = "";
	bodyText = "";

	// Footer
	footerBackdropFilter = "";
	footerBorderTop = "";
	footerBackground = "";
	footerColorText = "";
	footerFontSize = "";
	footerFontWeight = "";
	footerMinHeight = "";
	footerPadding = "";
	footerText = "";

	// Footer Link
	footerLinkUrl = "";
	footerLinkRel = "";
	footerLinkTitle = "";
	footerLinkLabel = "";
	footerLinkBackground = "";
	footerLinkBorder = "";
	footerLinkBorderRadius = "";
	footerLinkColor = "";
	footerLinkFontSize = "";
	footerLinkFontWeight = "";
	footerLinkHoverColor = "";
	footerLinkHoverBackground = "";
	footerLinkPadding = "";

	// stylesheet
	stylesheet = "";

// reference to class itself
get c() { return ContentCard };


// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string | null } }
 */
static get attributes() {
const values = {
	/* container */
	"color-primary": "currentColor",


	/* outside */
	"outside-heading-color": "inherit",
	"outside-heading-font-size": "1rem",
	"outside-heading-font-weight": "inherit",
	"outside-heading-margin-bottom": ".5rem",
	"outside-heading-position": "above",
	"outside-heading-text": "",

	/* card */
	"card-background-color": "white",
	"card-border-radius": ".35rem",
	"card-box-shadow": "none",
	"card-height": "auto",
	"card-hover-opacity": "",
	"card-hover-background-color": "",
	"card-max-width": "none",
	"card-min-height": "auto",
	"card-opacity": "100%",
	"card-transition-property": "opacity",
	"card-transition-duration": "0.3s",
	"card-width": "100%",

	/* card link */
	"card-link-url": "",
	"card-link-rel": "",
	"card-link-title": "",

	/* background image */
	"background-image-alt": "",
	"background-image-position": "bottom",
	"background-image-url": "",

	/* feature image */
	"feature-image-alt": "",
	"feature-image-position": "bottom-right",
	"feature-image-url": "",

	/* header */
	"header-border-bottom": "1px solid #e2e8f0",
	"header-background": "white",
	"header-color-text": "",
	"header-font-size": "1rem",
	"header-font-weight": "500",
	"header-padding": ".25rem .75rem",
	"header-logo-url": "",
	"header-logo-alt": "",
	"header-logo-width": "auto",
	"header-logo-height": "2.5rem",
	"header-text": "",

	/* body container */
	"body-padding": ".75rem",
	"body-text-color": "inherit",
	"body-font-size": "100%",
	"body-font-weight": "inherit",

	/* body text & bullets */
	"body-bullets": "[]",
	"body-text": "",

	/* footer */
	"footer-backdrop-filter": "blur(8px)",
	"footer-border-top": "1px solid #e2e8f0",
	"footer-background": "rgb(255 255 255 / 40%)",
	"footer-color-text": "inherit",
	"footer-font-size": ".85rem",
	"footer-font-weight": "400",
	"footer-min-height": "2.5rem",
	"footer-padding": ".5rem 1rem",
	"footer-text": "",

	/* footer link */
  "footer-link-url": "/",
	"footer-link-rel": "",
  "footer-link-title": "",
	"footer-link-label": "",
	"footer-link-background": "rgb(255 255 255 / 30%)",
	"footer-link-border": "1px solid currentColor",
	"footer-link-border-radius": ".25rem",
	"footer-link-color": "currentColor",
	"footer-link-font-size": ".85em",
	"footer-link-font-weight": "400",
	"footer-link-hover-color": "currentColor",
	"footer-link-hover-background": "rgb(255 255 255 / 80%)",
	"footer-link-padding": ".25rem .5rem",

	/* stylesheet */
  "stylesheet": "",

};
return values;
}

// OBSERVED ATTRIBUTES GETTER
static get observedAttributes() { return Object.keys(this.attributes) }

// ATTRIBUTE DEFAULT VALUE GETTER
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

// HTML BUILDERS
buildBulletsHTML() {
	/** @type {string[]} bulletsData */
	const bulletsData = JSON.parse(this.bodyBullets);
	const bullets = bulletsData.map((bullet) => `<li>${bullet}</li>`).join("");
	window.console.log(bullets);
	return `<ul id="body-bullets">${bullets ?? 'test'}</ul>`;
}


// ELEMENTS
get els() {
  return `
<style id="stylesheet">${this.stylesheet}</style>
<div
	id="container"
	style="
		--color-primary: ${this.colorPrimary};
		--outside-heading-color: ${this.outsideHeadingColor};
		--outside-heading-font-size: ${this.outsideHeadingFontSize};
		--outside-heading-font-weight: ${this.outsideHeadingFontWeight};
		--outside-heading-margin-bottom: ${this.outsideHeadingMarginBottom};
		--outside-heading-position: ${this.outsideHeadingPosition};
		--card-background-color: ${this.cardBackgroundColor};
		--card-border-radius: ${this.cardBorderRadius};
		--card-box-shadow: ${this.cardBoxShadow};
		--card-height: ${this.cardHeight};
		--card-hover-opacity: ${this.cardHoverOpacity};
		--card-hover-background-color: ${this.cardHoverBackgroundColor};
		--card-max-width: ${this.cardMaxWidth};
		--card-min-height: ${this.cardMinHeight};
		--card-opacity: ${this.cardOpacity};
		--card-transition-property: ${this.cardTransitionProperty};
		--card-transition-duration: ${this.cardTransitionDuration};
		--card-width: ${this.cardWidth};
		--background-image-alt: ${this.backgroundImageAlt};
		--background-image-position: ${this.backgroundImagePosition};
		--header-border-bottom: ${this.headerBorderBottom};
		--header-background: ${this.headerBackground};
		--header-color-text: ${this.headerColorText};
		--header-font-size: ${this.headerFontSize};
		--header-font-weight: ${this.headerFontWeight};
		--header-padding: ${this.headerPadding};
		--header-logo-url: ${this.headerLogoUrl};
		--header-logo-alt: ${this.headerLogoAlt};
		--header-logo-width: ${this.headerLogoWidth};
		--header-logo-height: ${this.headerLogoHeight};
		--header-text: ${this.headerText};
		--body-padding: ${this.bodyPadding};
		--body-font-size: ${this.bodyFontSize};
		--body-font-weight: ${this.bodyFontWeight};
		--body-text-color: ${this.bodyTextColor};
		--footer-backdrop-filter: ${this.footerBackdropFilter};
		--footer-border-top: ${this.footerBorderTop};
		--footer-background: ${this.footerBackground};
		--footer-color-text: ${this.footerColorText};
		--footer-font-size: ${this.footerFontSize};
		--footer-font-weight: ${this.footerFontWeight};
		--footer-min-height: ${this.footerMinHeight};
		--footer-padding: ${this.footerPadding};
		--footer-link-background: ${this.footerLinkBackground};
		--footer-link-border: ${this.footerLinkBorder};
		--footer-link-border-radius: ${this.footerLinkBorderRadius};
		--footer-link-color: ${this.footerLinkColor};
		--footer-link-font-size: ${this.footerLinkFontSize};
		--footer-link-font-weight: ${this.footerLinkFontWeight};
		--footer-link-hover-color: ${this.footerLinkHoverColor};
		--footer-link-hover-background: ${this.footerLinkHoverBackground};
		--footer-link-padding: ${this.footerLinkPadding};
	">

	<!-- outside heading -->
	${this.outsideHeadingText ? `<h3 style="--outside-heading-color: ${this.outsideHeadingColor};" id="outside-heading">${this.outsideHeadingText}</h3>` : ''}

	<!-- card -->
	<div id="card">

		<!-- card-inner -->
		<div id="card-inner">

			<!-- header -->
			<header id="header">
				<img id="header-image" src="${this.headerLogoUrl}" alt="${this.headerLogoAlt}" width="${this.headerLogoWidth}" height="${this.headerLogoHeight}" loading="lazy" />
				<span id="header-text">${this.headerText}</span>
			</header>

			<!-- body -->
			<div id="body">
				<!-- body text -->
				<p id="body-text">${this.bodyText}</p>

				<!-- body bullets -->
				${this.buildBulletsHTML()}

				<!-- feature-image -->
				<div id="feature-image-container">
					<figure id="feature-image-figure">
						<img role="presentation" alt="${this.featureImageAlt ?? ''}" id="feature-image" src="${this.featureImageUrl}" />
					</figure>
				</div>


			${this.footerText || this.footerLinkLabel ? `
			<!-- footer -->
			<footer id="footer">
				${this.footerLinkLabel ? `<a id="footer-link" href="${this.footerLinkUrl}" title="${this.footerLinkTitle}">${this.footerLinkLabel}</a>` : ""}
				${this.footerText ? `<span>${this.footerText}</span>` : ""}
			</footer>` : ""}


			<!-- background-image -->
			<img role="presentation" alt="${this.backgroundImageAlt ?? ''}" id="background-image" src="${this.backgroundImageUrl}" />
		</div>
	</div>
</div>`.trim();
}

get preflight() {
	return `*,::before,::after {box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}::before,::after {--tw-content:""}html,:host {line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:theme( "fontFamily.sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body {margin:0;line-height:inherit}hr {height:0;color:inherit;border-top-width:1px}abbr:where([title]) {text-decoration:underline dotted}h1,h2,h3,h4,h5,h6 {font-size:inherit;font-weight:inherit}a {color:inherit;text-decoration:inherit}b,strong {font-weight:bolder}code,kbd,samp,pre {font-family:theme( "fontFamily.mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small {font-size:80%}sub,sup {font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub {bottom:-0.25em}sup {top:-0.5em}table {text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea {font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select {text-transform:none}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring {outline:auto}:-moz-ui-invalid {box-shadow:none}progress {vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button {height:auto}[type="search"] {-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration {-webkit-appearance:none}::-webkit-file-upload-button {-webkit-appearance:button;font:inherit}summary {display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin:0}fieldset {margin:0;padding:0}legend {padding:0}ol,ul,menu {list-style:none;margin:0;padding:0}dialog {padding:0}textarea {resize:vertical}input::placeholder,textarea::placeholder {opacity:1;color:theme("colors.gray.400", #9ca3af)}button,[role="button"] {cursor:pointer}:disabled {cursor:default}img,svg,video,canvas,audio,iframe,embed,object {display:block;vertical-align:middle}img,video {max-width:100%;height:auto}[hidden] {display:none}`
}

// STYLES
get styles() {
  return `
	<style id="preflight">${this.preflight}</style>
  <style id="base">
  :host, *:not(style) { display:block;box-sizing:border-box; margin:0; }
	#container {
		color: var(--color-primary, currentColor);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
	}
	#card {
		border-radius: var(--card-border-radius, .35em);
		box-shadow: var(--card-box-shadow, none);
		display: flex;
		order:${this.outsideHeadingPosition === "below" ? "1" : "2"};
		opacity: var(--card-opacity, 100%);
		outline:transparent;
		position:relative;
		transition-property: ${this.cardHoverOpacity ? 'opacity,' : ''}, shadow;
		transition-duration: var(--card-transition-duration, .3s);
		max-width: var(--card-max-width, none);
		width: 100%;
	}
	#card:hover {
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	}
	#container #outside-heading {
		color: var(--outside-heading-color, inherit);
		font-size: var(--outside-heading-font-size, 1rem);
		font-weight: var(--outside-heading-font-weight, 500);
		margin-bottom: var(--outside-heading-margin-bottom, 0);
		order: ${this.outsideHeadingPosition === "below" ? "2" : "1"};
	}
	#container #outside-heading:hover {
		opacity: ${this.cardHoverOpacity};
	}
	#card-inner {
		background: var(--card-background-color, white);
		border-radius: var(--card-border-radius, .35em);
		display:grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		grid-template-rows: auto 1fr minmax(fit, auto);
		height: 100%;
		min-height: var(--card-min-height, auto);
		overflow: hidden;
		position:relative;
		width: var(--card-width, 100%);
	}
	#card-inner:hover {
		${this.cardHoverBackgroundColor ? `background: var(--card-hover-background-color, white);` : ''}
	}
	#header {
		border-bottom: var(--header-border-bottom, 1px solid #e2e8f0);
		background: var(--header-background, transparent);
		color: var(--header-color-text, inherit);
		display:${this.headerText || this.headerLogoUrl ? 'flex' : 'none'};
		font-size: var(--header-font-size, 1rem);
		font-weight: var(--header-font-weight, 500);
		max-height: fit-content;
		padding: var(--header-padding, .5rem .25rem);
		width: 100%;
	}
	#header-text {
		color: var(--header-color-text, inherit);
		font-size: var(--header-font-size, 1rem);
		font-weight: var(--header-font-weight, 500);
		padding: var(--header-padding, .5rem .25rem);
		width: 100%;
		text-align: left;
	}
	#header-image {
		display:flex;
		width: var(--header-logo-width, auto);
		height: var(--header-logo-height, auto);
	}
	#body {
		display:grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		height:auto;
		font-size: var(--body-font-size, .9rem);
		font-weight: var(--body-font-weight, 400);
		color: var(--body-text-color, inherit);
	}
	#body-text {
		font-size:.9rem;
		margin-bottom: .5rem;
		opacity:.9;
		padding: var(--body-padding, 1rem);
	}
	#body-bullets {
		list-style-type: disc;
		list-style-position: inside;
		padding: var(--body-padding, 1rem);
	}
	#body-bullets li {
		display: list-item;
		margin-bottom: .25rem;
		font-size: .9em;
	}
	#body-bullets li::marker {
		font-feature-settings:"cv02", "cv03", "cv04", "cv11";
		font-family: Inter var, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
		unicode-bidi: isolate;
		color:inherit;
		text-indent:none;
	}
	#feature-image-container {
		display: flex;
		justify-content: flex-end;
		position: relative;
		width:100%;
	}
	#feature-image-figure {
		align-items: center;
		aspect-ratio:1;
		border-top-left-radius:9999px;
		background:#CFF3F3;
		display: flex;
		height:auto;
		items-center;
		justify-content: flex-end;
		position: relative;
		width:80%;
	}
	#feature-image {
		aspect-ratio:1;
		bottom:0;
		display:${this.featureImageUrl ? 'flex' : 'none'};
		height:auto;
		position:absolute;
		object-fit:contain;

		overflow:hidden;
		pointer-events:none;
		scale:1.5;
		transform:translate(24%, 24%);
		object-position: 60% 0%;


		width:100%;
		z-index:0;
	}
	#background-image {
		bottom:0;
		display:flex;
		height:auto;
		position:absolute;
		object-fit:contain;
		object-position: end;
		pointer-events:none;
		width:100%;
		z-index:0;
	}
	#footer {
		align-items: center;
		background: var(--footer-background, transparent);
		backdrop-filter: var(--footer-backdrop-filter, none);
		border-top: var(--footer-border-top, 1px solid #e2e8f0);
		color: var(--footer-color-text, inherit);
		column-gap:1rem;
		display:${this.footerLinkLabel || this.footerText ? 'flex' : 'none'};
		font-size: var(--footer-font-size, 1rem);
		font-weight: var(--footer-font-weight, 500);
		justify-self: end;
		padding: var(--footer-padding, .25rem 1rem);
		max-height:fit-content;
		min-height: var(--footer-min-height, 2.5rem);
		width:100%;
		z-index:10;
	}
	#footer-link {
		background: var(--footer-link-background, transparent);
		border: 1px solid currentColor;
		border-radius: .25rem;
		color: var(--footer-color-text, inherit);
		font-size: .85em;
		padding: var(--footer-link-padding, .25rem .5rem);
		text-decoration: none;
		box-shadow: 0 0 0 0px currentColor;
		transition-property: background, color, border;
		transition-duration: .1s;
	}
	#footer-link:hover {
		background: var(--footer-link-hover-background, transparent);
		border: 1px solid transparent;
		color: var(--footer-link-hover-color, currentColor);
	}
</style>`
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

// CONSTRUCTOR
constructor() {
	super();

	// programattically create getters and setters for each observed attribute
	ComponentUtils.createOAGS(this.c, this);

	// create a shadow root
	this.attachShadow({ mode: "open" });

}

// LIFECYCLE CALLBACKS

connectedCallback() {
	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))

	// define refs elements
	this.refs = ComponentUtils.getRefs(this.c, this);
}

// METHODS
}

customElements.define("content-card", ContentCard);
export default ContentCard;


