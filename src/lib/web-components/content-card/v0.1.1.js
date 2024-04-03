// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Content Card" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/content-card} */

/**
 * Logo Block Web Component
 * @name ContentCard
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a linked tile with a single full bleed image-- for typical use in a grid of products.
 *
 * @attribute background-image-alt | -- | -- | alt text of the background image
 * @attribute background-image-position | bottom | -- | position of the background image
 * @attribute background-image-url | -- | -- | url of the background image
 * @attribute body-bullets-data | [] | -- | array of bullet points
 * @attribute body-font-size | .95rem | -- | font size of the body text
 * @attribute body-font-weight | 400 | -- | font weight of the body text
 * @attribute body-image-url | -- | -- | url of the image
 * @attribute body-padding | .75rem | -- | padding of the body container
 * @attribute body-color | inherit | -- | color of the body text
 * @attribute body-text | -- | Energy companies are increasingly moving towards diversification beyond traditional hydrocarbons. | text of the body
 * @attribute card-background-color | white | #F7FAFC | background color of the card
 * @attribute card-border-radius | .35rem | .5rem | border radius of the card
 * @attribute card-box-shadow | none | 0 0 1px 0 rgba(0,0,0,.4) | box shadow of the card
 * @attribute card-height | auto | -- | height of the card
 * @attribute card-hover-opacity | -- | -- | opacity of the card on hover
 * @attribute card-hover-background-color | -- | -- | background color of the card on hover
 * @attribute card-link-url | -- | -- | url of a link for the entire card
 * @attribute card-link-rel | -- | -- | rel of a link for the entire card
 * @attribute card-max-width | none | 24rem | max width of the card
 * @attribute card-min-height | auto | 20rem | min height of the card
 * @attribute card-opacity | 100% | -- | opacity of the card
 * @attribute card-transition-property | opacity | -- | transition property of the card
 * @attribute card-transition-duration | .3s | -- | transition duration of the card
 * @attribute card-width | 100% | -- | width of the card
 * @attribute color-primary | currentColor | #0A2E7E | primary text color
 * @attribute feature-image-alt | -- | -- | alt text of the feature image
 * @attribute feature-image-position | bottom-right | -- | position of the feature image
 * @attribute feature-image-url | -- | https://cdn.lj.dev/images/custom/petro/ocean-turbines.webp | url of the feature image
 * @attribute footer-backdrop-filter | blur(8px) | -- | backdrop filter of the card header
 * @attribute footer-border-top | 1px solid #e2e8f0 | --| border bottom of the card header
 * @attribute footer-background | rgb(255 255 255 / 40%) | -- | background color of the card header
 * @attribute footer-color | inherit | -- | text color of the card header
 * @attribute footer-font-size | .85rem | -- | font size of the card header
 * @attribute footer-font-weight | 400 | -- | font weight of the card header
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
 * @attribute footer-min-height | 2.5rem | -- | min height of the card header
 * @attribute footer-padding | .25rem 1rem | -- | padding of the card header
 * @attribute footer-text | -- | -- | text of the card footer
 * @attribute header-border-bottom | 1px solid #e2e8f0 | -- | border bottom of the card header
 * @attribute header-background | white | -- | background color of the card header
 * @attribute header-color | inherit | -- | text color of the card header
 * @attribute header-font-size | 1rem | -- | font size of the card header
 * @attribute header-font-weight | 500 | 900 | font weight of the card header
 * @attribute header-padding | .25rem 1rem | -- | padding of the card header
 * @attribute header-logo-url | -- | -- | url of the logo
 * @attribute header-logo-alt | -- | -- | alt text of the logo
 * @attribute header-logo-width | auto | -- | width of the logo
 * @attribute header-logo-height | 2.5rem | -- | height of the logo
 * @attribute header-text | -- | -- | text of the card header
 * @attribute outside-heading-color | inherit | -- | color of the outside heading
 * @attribute outside-heading-font-size | inherit | -- | font size of the outside heading
 * @attribute outside-heading-font-weight | inherit | -- | font weight of the outside heading
 * @attribute outside-heading-margin-bottom | .5rem | -- | margin of the outside heading
 * @attribute outside-heading-text | -- | New Skills | text of the outside heading
 * @attribute outside-heading-position | above | -- | position of the outside heading
 * @attribute stylesheet | -- | #container { color:#042373; } | inject css into the inner stylesheet
 */

class ContentCard extends HTMLElement {

get c() { return ContentCard };


// ATTRIBUTES
/** @returns { { [key:string]: string | null } }*/
static get attributes() {
return {
	"background-image-alt": "",
	"background-image-position": "bottom",
	"background-image-url": "",
	"body-bullets": "[]", // deprecated
	"body-bullets-data": "[]",
	"body-text": "",
	"body-color": "inherit",
	"body-font-size": ".95rem",
	"body-font-weight": "inherit",
	"body-padding": ".75rem",
	"card-background-color": "white",
	"card-border-radius": ".35rem",
	"card-box-shadow": "none",
	"card-height": "auto",
	"card-hover-opacity": "1",
	"card-hover-background-color": "var(--card-background-color)",
	"card-link-url": "",
	"card-link-rel": "",
	"card-link-title": "",
	"card-max-width": "none",
	"card-min-height": "auto",
	"card-opacity": "100%",
	"card-transition-property": "opacity",
	"card-transition-duration": "0.3s",
	"card-width": "100%",
	"color-primary": "currentColor",
	"feature-image-alt": "",
	"feature-image-position": "bottom-right",
	"feature-image-url": "",
	"footer-backdrop-filter": "blur(8px)",
	"footer-border-top": "1px solid #e2e8f0",
	"footer-background": "rgb(255 255 255 / 40%)",
	"footer-color": "inherit",
	"footer-font-size": ".85rem",
	"footer-font-weight": "400",
	"footer-link-url": "",
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
	"footer-min-height": "2.5rem",
	"footer-padding": ".5rem 1rem",
	"footer-text": "",
	"header-border-bottom": "1px solid #e2e8f0",
	"header-background": "white",
	"header-color": "inherit",
	"header-font-size": "1rem",
	"header-font-weight": "500",
	"header-padding": ".25rem .75rem",
	"header-logo-url": "",
	"header-logo-alt": "",
	"header-logo-width": "auto",
	"header-logo-height": "2.5rem",
	"header-text": "",
	"outside-heading-color": "inherit",
	"outside-heading-font-size": "1rem",
	"outside-heading-font-weight": "bold",
	"outside-heading-margin-bottom": ".5rem",
	"outside-heading-position": "above",
	"outside-heading-text": "",
  "stylesheet": ""
}}

// HTML BUILDERS
buildBulletsHTML() {
	/** @type {string[]} bulletsData */
	const data = JSON.parse(this.attValue('body-bullets-data')) ?? JSON.parse(this.attValue('body-bullets')) ?? [];
	const bullets = data.map((bullet) => `<li>${bullet}</li>`).join("");
	return `<ul id="body-bullets">${bullets}</ul>`;
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {
const exclude = ['body-bullets'];
const cssVars = ComponentUtils.cssVars(this.c.attributes, this, exclude);
const html = ComponentUtils.stringIfValue;

// values
const backgroundImageAlt = this.attValue('background-image-alt');
const backgroundImageUrl = this.attValue('background-image-url');
const bodyBullets = this.buildBulletsHTML()
const bodyText = this.attValue('body-text');
const featureImageAlt = this.attValue('feature-image-alt');
const featureImageUrl = this.attValue('feature-image-url');
const footerLinkLabel = this.attValue('footer-link-label');
const footerLinkUrl = this.attValue('footer-link-url');
const footerLinkTitle = this.attValue('footer-link-title');
const footerText = this.attValue('footer-text');
const headerLogoAlt = this.attValue('header-logo-alt');
const headerLogoHeight = this.attValue('header-logo-height');
const headerLogoWidth = this.attValue('header-logo-width');
const headerLogoUrl = this.attValue('header-logo-url');
const headerText = this.attValue('header-text');
const outsideHeadingText = this.attValue('outside-heading-text');
const stylesheet = this.attValue('stylesheet');

return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div id="container" style="${cssVars}">
	${html(outsideHeadingText, `<h3 id="outside-heading">${outsideHeadingText}</h3>`)}
	<div id="card">
		<div id="card-inner">
			${html('test', `<header id="header">
				${html(headerLogoUrl, `<img id="header-image"
					${html(headerLogoAlt, `alt="${headerLogoAlt}" `)}
					${html(headerLogoHeight, `height="${headerLogoHeight}" `)}
					${html(headerLogoWidth, `width="${headerLogoWidth}" `)}
					${html(headerLogoUrl, `src="${headerLogoUrl}" `)}
					loading="lazy" />`)}
				${html(headerText, `<span id="header-text">${headerText}</span>`)}
			</header>`, headerLogoUrl || headerText)}
			<div id="body">
				${html(bodyText, `<p id="body-text">${bodyText}</p>`)}
				${html(bodyBullets, bodyBullets)}
				${html(featureImageUrl, `<div id="feature-image-container"><figure id="feature-image-figure"><img role="presentation" ${html(featureImageAlt, `alt="${featureImageAlt}"`)} id="feature-image" src="${featureImageUrl}" /></figure></div>`)}
			</div>
			${html('test', `<footer id="footer">
				${html(footerLinkLabel, `<a id="footer-link" href="${footerLinkUrl}" title="${footerLinkTitle}">${footerLinkLabel}</a>`)}
				${html(footerText, `<span id="footer-text">${footerText}</span>`)}
			</footer>`, footerLinkLabel || footerText)}
			${html(backgroundImageUrl, `<img role="presentation" alt="${backgroundImageAlt ?? ''}" id="background-image" src="${backgroundImageUrl}" />`)}
		</div>
	</div>
</div>`.trim();
}

// STYLES
static get styles() {
return `
	${ComponentUtils.preflight}
  <style id="base">
	*:empty { display:none; }
	#container {
		background-color:transparent;
		color: var(--color-primary, currentColor);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		width:100%;
	}
	#card {
		background-color: var(--card-background-color, white);
		border-radius: var(--card-border-radius, .35em);
		box-shadow: var(--card-box-shadow, none);
		display: flex;
		opacity: var(--card-opacity, 100%);
		outline:transparent;
		position:relative;
		transition-property: opacity, shadow;
		transition-duration: var(--card-transition-duration, .3s);
		max-width: 100%;
		width: 100%;
	}
	#card:hover {
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
		opacity: var(--card-hover-opacity, 100%);
	}
	#container #outside-heading {
		color: var(--outside-heading-color, inherit);
		font-size: var(--outside-heading-font-size, 1rem);
		font-weight: var(--outside-heading-font-weight, 500);
		margin-bottom: var(--outside-heading-margin-bottom, 0);
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
		transition: background-color .3s ease-in-out;
		width: var(--card-width, 100%);
	}
	#card-inner:hover {
		background-color:var(--card-hover-background-color, white);
	}
	#header {
		border-bottom: var(--header-border-bottom, 1px solid #e2e8f0);
		background: var(--header-background, transparent);
		color: var(--header-color, inherit);
		font-size: var(--header-font-size, 1rem);
		font-weight: var(--header-font-weight, 500);
		max-height: fit-content;
		padding: var(--header-padding, .5rem .25rem);
		max-width: 100%;
	}
	#header-text {
		color: var(--header-color, inherit);
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
		width:100%;
	}
	#body-text {
		font-size:.95rem;
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
		display:flex;
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
		color: var(--footer-color, inherit);
		column-gap:1rem;
		font-size: var(--footer-font-size, 1rem);
		font-weight: var(--footer-font-weight, 500);
		justify-self: end;
		padding: var(--footer-padding, .25rem 1rem);
		max-height:fit-content;
		min-height: var(--footer-min-height, 2.5rem);
		max-width:100%;
		width:100%;
		z-index:10;
	}
	#footer-link {
		background: var(--footer-link-background, transparent);
		border: 1px solid currentColor;
		border-radius: .25rem;
		color: var(--footer-color, inherit);
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
  template.innerHTML = `${this.c.styles}${this.els}`.trim();
  return template;
}

constructor() { super(); this.attachShadow({ mode: "open" }); }
connectedCallback() { this.shadowRoot?.appendChild(this.template.content.cloneNode(true)) }
}

customElements.define("content-card", ContentCard);
export default ContentCard;


