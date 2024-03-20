// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";
// @ts-expect-error yep got it
import ContentCard from "/e/wc/content-card.0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "Widget Card Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-card-grid} */

/**
 * Widget Card Grid Web Component
 * @name WidgetCardGrid
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of cards.
 *
 * WIDGET META
 * @attribute widget-meta-font-size | .75rem | -- | font size of the meta text
 * @attribute widget-meta-margin-bottom | 1.5rem | -- | margin bottom of the meta text
 * @attribute widget-meta-text | -- | Challenges
 *
 * WIDGET HEADING
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | bold | -- | font weight of the heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-text | -- | Today's energy industries face new competency challenges.
 *
 * WIDGET TEXT
 * @attribute body-text | -- | Energy companies are typically focused on their core businesses, rather than developing, executing, and maintaining competency development processes, programs, and systems. | text of the widget
*
* Widget CONTAINER
* @attribute color-background | #F8FAFC | -- | background color of the widget
* @attribute color-primary | currentColor | #0A2E7E | color of the text
* @attribute color-accent | lightblue | rgb(0 184 156 / 100%) | color of the text

* CARD
 * @attribute card-background-color | white | #EAF1F7 | background color of the card
 * @attribute card-border-radius | .35rem | .5rem | border radius of the card
 * @attribute card-box-shadow | none | 0 0 1px 0 rgba(0,0,0,.4); | box shadow of the card
 * @attribute card-height | auto | -- | height of the card
 * @attribute card-hover-opacity | -- | -- | opacity of the card on hover
 * @attribute card-hover-background-color | -- | -- | background color of the card on hover
 * @attribute card-max-width | none | 24rem | max width of the card
 * @attribute card-min-height | auto | 20rem | min height of the card
 * @attribute card-opacity | 100% | -- | opacity of the card
 * @attribute card-transition-property | opacity | -- | transition property of the card
 * @attribute card-transition-duration | .3s | -- | transition duration of the card
 * @attribute card-width | 100% | -- | width of the card

 *
 * OUTSIDE HEADING
 * @attribute card-outside-heading-color | inherit | -- | color of the outside heading
 * @attribute card-outside-heading-font-size | inherit | -- | font size of the outside heading
 * @attribute card-outside-heading-font-weight | inherit | -- | font weight of the outside
 heading
 * @attribute card-outside-heading-margin-bottom | .5rem | -- | margin of the outside heading
 * @attribute card-outside-heading-position | above | -- | position of the outside heading
 *
 * BACKGROUND IMAGE
 * @attribute card-background-image-position | bottom | -- | position of the background image
 *
 * CARD HEADER
 * @attribute card-header-border-bottom | 1px solid #e2e8f0 | -- | border bottom of the card header
 * @attribute card-header-background | white | #F9FDFF | background color of the card header
 * @attribute card-header-color-text | inherit | -- | text color of the card header
 * @attribute card-header-font-size | 1rem | -- | font size of the card header
 * @attribute card-header-font-weight | bold | -- | font weight of the card header
 * @attribute card-header-padding | .25rem 1rem | -- | padding of the card header
 * @attribute card-header-logo-width | auto | -- | width of the logo
 * @attribute card-header-logo-height | 2.5rem | -- | height of the logo
 *
 * BODY CONTAINER
 * @attribute card-body-padding | .75rem | -- | padding of the body container
 *
 * BODY TEXT & BULLETS
 * @attribute card-body-font-size | .9rem | -- | font size of the body text
 * @attribute card-body-font-weight | 400 | -- | font weight of the body text
 * @attribute card-body-text-color | inherit | -- | color of the body text
 *
 * DATA
 * @attribute cards-data-json | [] | [{"cardFeatureImageUrl":"/images/custom/petro/ocean-turbines.webp","cardBodyText":"Energy companies are increasingly moving towards diversification beyond traditional hydrocarbons.","cardOutsideHeadingText":"New Skills"},{"cardFeatureImageUrl":"/images/custom/petro/solar-worker.webp","cardBodyText":"The transition to clean energy is expected to generate > 10M net new jobs by 2030.","cardOutsideHeadingText":"New People"},{"cardFeatureImageUrl":"/images/custom/petro/solar-farm.webp","cardBodyText":"In the office, field, or board room, energy workers will require up-skilling and digital dexterity to adapt.","cardOutsideHeadingText":"New Demands"},{"cardFeatureImageUrl":"/images/custom/petro/business-person.webp","cardBodyText":"Significant investment is required to deliver knowledge to the right person, at the right time, in the right format.","cardOutsideHeadingText":"New Investments"}] | json data for the cards
 *
 *
 * FOOTER
 * @attribute card-footer-backdrop-filter | blur(8px) | -- | backdrop filter of the card header
 * @attribute card-footer-border-top | 1px solid #e2e8f0 | --| border bottom of the card header
 * @attribute card-footer-background | rgb(255 255 255 / 40%) | -- | background color of the card header
 * @attribute card-footer-color | inherit | -- | text color of the card header
 * @attribute card-footer-font-size | .85rem | -- | font size of the card header
 * @attribute card-footer-font-weight | 400 | -- | font weight of the card header
 * @attribute card-footer-min-height | 2.5rem | -- | min height of the card header
 * @attribute card-footer-padding | .25rem 1rem | -- | padding of the card header

 *
 * FOOTER LINK
 * @attribute card-footer-link-background | rgb(255 255 255 / 30%) | -- | background color of the footer link (button style)
 * @attribute card-footer-link-border | 1px solid currentColor | -- | border of the footer link (button style)
 * @attribute card-footer-link-border-radius | .25rem; | -- | border radius of the footer link (button style)
 * @attribute card-footer-link-color | currentColor | -- | text color of the footer link (button style)
 * @attribute card-footer-link-font-size | .85em | -- | font size of the footer link (button style)
 * @attribute card-footer-link-font-weight | 400 | -- | font weight of the footer link (button style)
 * @attribute card-footer-link-hover-color | currentColor | -- | text color of the footer link on hover (button style)
 * @attribute card-footer-link-hover-background | rgb(255 255 255 / 80%) | -- | background color of the footer link on hover (button style)
 * @attribute card-footer-link-padding | .25rem .5rem; | -- | padding of the footer link (button style)
 *
 * STYLESHEET
 * @attribute card-stylesheet | -- | #container { color:#042373; } | inject css into the inner stylesheet
 * @attribute style | -- | -- | regular inline style on the component

 */
class WidgetCardGrid extends HTMLElement {

	// widget
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";

	// Meta
	widgetMetaFontSize = "";
	widgetMetaMarginBottom = "";
	widgetMetaText = "";

	// Widget heading
	headingFontSize = "";
	headingFontWeight = "";
	headingMarginBottom = "";
	headingText = "";

	// Body
	bodyText = "";

	// Outside Heading
	cardOutsideHeadingColor = "";
	cardOutsideHeadingFontSize = "";
	cardOutsideHeadingFontWeight = "";
	cardOutsideHeadingMarginBottom = "";
	cardOutsideHeadingPosition = "";
	cardOutsideHeadingText = "";

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
	cardBackgroundImageAlt = "";
	cardBackgroundImagePosition = "";
	cardBackgroundImageUrl = "";

	// Card Header
	cardHeaderBorderBottom = "";
	cardHeaderBackground = "";
	cardHeaderColorText = "";
	cardHeaderFontSize = "";
	cardHeaderFontWeight = "";
	cardHeaderPadding = "";
	cardHeaderLogoUrl = "";
	cardHeaderLogoAlt = "";
	cardHeaderLogoWidth = "";
	cardHeaderLogoHeight = "";
	cardHeaderText = "";

	// Body Container
	cardBodyPadding = "";

	// Body Text & Bullets
	cardBodyBullets = "[]";
	cardBodyFontSize = "";
	cardBodyFontWeight = "";
	cardBodyTextColor = "";
	cardBodyText = "";

	// Footer
	cardFooterBackdropFilter = "";
	cardFooterBorderTop = "";
	cardFooterBackground = "";
	cardFooterColorText = "";
	cardFooterFontSize = "";
	cardFooterFontWeight = "";
	cardFooterMinHeight = "";
	cardFooterPadding = "";
	cardFooterText = "";

	// Footer Link
	cardFooterLinkUrl = "";
	cardFooterLinkRel = "";
	cardFooterLinkTitle = "";
	cardFooterLinkLabel = "";
	cardFooterLinkBackground = "";
	cardFooterLinkBorder = "";
	cardFooterLinkBorderRadius = "";
	cardFooterLinkColor = "";
	cardFooterLinkFontSize = "";
	cardFooterLinkFontWeight = "";
	cardFooterLinkHoverColor = "";
	cardFooterLinkHoverBackground = "";
	cardFooterLinkPadding = "";

	// Data
	cardsDataJson = "[]";

	// stylesheet
	stylesheet = "";

// reference to class itself
get c() { return WidgetCardGrid };



// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string | null } }
 */
static get attributes() {
const values = {

	/* container */
	"widget-background": "white",
	"color-background": "#F8FAFC",
	"color-primary": "currentColor",
	"color-accent": "currentColor",

	/* meta */
	"widget-meta-font-size": ".75rem",
	"widget-meta-margin-bottom": ".5rem",
	"widget-meta-text": "",

	/* heading */
	"heading-font-size": "1.25rem",
	"heading-font-weight": "bold",
	"heading-margin-bottom": "1.5rem",
	"heading-text": "",

	/* body */
	"body-text": "",

	/* outside */
	"card-outside-heading-color": "inherit",
	"card-outside-heading-font-size": "1rem",
	"card-outside-heading-font-weight": "bold",
	"card-outside-heading-margin-bottom": ".5rem",
	"card-outside-heading-position": "top",
	"card-outside-heading-text": "",

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
	"card-background-image-alt": "",
	"card-background-image-position": "bottom",
	"card-background-image-url": "",

	/* header */
	"card-header-border-bottom": "1px solid #e2e8f0",
	"card-header-background": "white",
	"card-header-color-text": "",
	"card-header-font-size": "1rem",
	"card-header-font-weight": "500",
	"card-header-padding": ".25rem .75rem",
	"card-header-logo-url": "",
	"card-header-logo-alt": "",
	"card-header-logo-width": "auto",
	"card-header-logo-height": "2.5rem",
	"card-header-text": "",

	/* body container */
	"card-body-padding": ".75rem",
	"card-body-text-color": "inherit",
	"card-body-font-size": "100%",
	"card-body-font-weight": "inherit",

	/* body text & bullets */
	"card-body-text": "",

	/* footer */
	"card-footer-backdrop-filter": "blur(8px)",
	"card-footer-border-top": "1px solid #e2e8f0",
	"card-footer-background": "rgb(255 255 255 / 40%)",
	"card-footer-color-text": "inherit",
	"card-footer-font-size": ".85rem",
	"card-footer-font-weight": "400",
	"card-footer-min-height": "2.5rem",
	"card-footer-padding": ".5rem 1rem",
	"card-footer-text": "",

	/* footer link */
  "card-footer-link-url": "/",
	"card-footer-link-rel": "",
  "card-footer-link-title": "",
	"card-footer-link-label": "",
	"card-footer-link-background": "rgb(255 255 255 / 30%)",
	"card-footer-link-border": "1px solid currentColor",
	"card-footer-link-border-radius": ".25rem",
	"card-footer-link-color": "currentColor",
	"card-footer-link-font-size": ".85em",
	"card-footer-link-font-weight": "400",
	"card-footer-link-hover-color": "currentColor",
	"card-footer-link-hover-background": "rgb(255 255 255 / 80%)",
	"card-footer-link-padding": ".25rem .5rem",

	/* data */
	"cards-data-json": "[]",

	/* stylesheet */
  "card-stylesheet": "",
	"stylesheet": "",

};
return values;
}

// OBSERVED ATTRIBUTES GETTER
static get observedAttributes() { return Object.keys(this.attributes) }

// ATTRIBUTE DEFAULT VALUE GETTER
/** @param {string} attr */
static getDefault(attr) { return this.attributes[attr] ?? "" }

/** @typedef {{[key:string]: string}} card */

// HTML BUILDERS
buildGridHTML() {

	// list attributes
	const attributes = [
		"outside-heading-color",
		"outside-heading-font-size",
		"outside-heading-font-weight",
		"outside-heading-margin-bottom",
		"outside-heading-position",
		"outside-heading-text",
		"card-background-color",
		"card-border-radius",
		"card-box-shadow",
		"card-height",
		"card-hover-opacity",
		"card-hover-background-color",
		"card-max-width",
		"card-min-height",
		"card-opacity",
		"card-transition-property",
		"card-transition-duration",
		"card-width",
		"card-link-url",
		"card-link-rel",
		"card-link-title",
		"background-image-alt",
		"background-image-position",
		"background-image-url",
		"feature-image-url",
		"feature-image-alt",
		"feature-image-position",
		"body-bullets",
		"body-text",
		"header-border-bottom",
		"header-background",
		"header-color-text",
		"header-font-size",
		"header-font-weight",
		"header-padding",
		"header-logo-url",
		"header-logo-alt",
		"header-logo-width",
		"header-logo-height",
		"header-text",
		"body-padding",
		"body-text-color",
		"body-font-size",
		"body-font-weight",
		"body-text",
		"footer-backdrop-filter",
		"footer-border-top",
		"footer-background",
		"footer-color-text",
		"footer-font-size",
		"footer-font-weight",
		"footer-min-height",
		"footer-padding",
		"footer-text",
		"footer-link-url",
		"footer-link-rel",
		"footer-link-title",
		"footer-link-label",
		"footer-link-background",
		"footer-link-border",
		"footer-link-border-radius",
		"footer-link-color",
		"footer-link-font-size",
		"footer-link-font-weight",
		"footer-link-hover-color",
		"footer-link-hover-background",
		"footer-link-padding",
		"stylesheet"
	]

		// helper function
	/** @param {string} attName, @param {card} item */
	const buildAttributeString = (item, attName) => {
		// if attName does not begin with 'card-', add it
		const adjustedName  = (!attName.startsWith("card-")) ? `card-${attName}` : attName;


		// get camel case version of attName
		/** @type { string } camelCase */
		const camelCase = ComponentUtils.kebabToCamel(adjustedName);

		if (attName === "body-bullets" && item['cardBodyBullets']) { return `${attName}='${JSON.stringify(item['cardBodyBullets'])}'`}

		// if item has a matching value, return it
		else if (item[camelCase]) return `${attName}='${item[camelCase]}'`

		// else if this has a matching value, return it
		// @ts-expect-error - this is a class
		else if (this?.[camelCase] && this[camelCase] != this.c.getDefault(adjustedName)) return `${attName}="${this?.[camelCase]}"`

		// else return an empty string
		else return "";

	}

	// build attributes
	/** @param {card} item */
	const buildAttributesString = (item) => {
		// return a string of all attributes
		const str = attributes.map(att => buildAttributeString(item, att)).join(`\n`);
		return str;
	}

	const data = this.data;

	const html =  data.map((
		/** @type {card} item */
		item) => {
			return `<content-card ${buildAttributesString(item)}></content-card>`
	}).join("");

	return html;
}

// DATA
get data() {
	const result = JSON.parse(this.cardsDataJson) ?? "[]";
	return result;
}


// ELEMENTS
get els() {
  return `
<style id="stylesheet">${this.stylesheet}</style>
<div
	id="container"
	style="
		--color-background:${this.colorBackground};
		--color-primary:${this.colorPrimary};
		--color-accent:${this.colorAccent};
		--heading-font-size:${this.headingFontSize};
		--heading-font-weight:${this.headingFontWeight};
		--heading-margin-bottom:${this.headingMarginBottom};
		--font-size:${this.widgetMetaFontSize};
		--margin-bottom:${this.widgetMetaMarginBottom};"
>
		<div
			id="container-inner"
			>

			<!-- meta -->
			${this.widgetMetaText ? `<div id="meta" style="">${this.widgetMetaText}</div>` : ''}

			<!-- heading row -->
			<h2 id="heading">${this.headingText}</h2>

			<!-- text -->
			<p id="text">${this.bodyText ?? ""}</p>

			<!-- card grid -->
			<div id="grid">${this.buildGridHTML()}</div>\

		</div>


</div>`.trim();
}


// STYLES
get styles() {
	const pageXPadding = ComponentUtils.pageXPadding;
  return `
	<style id="preflight">${ComponentUtils.preflight}</style>
  <style id="base">
	#container {
		background-color: var(--color-background);
		display:grid;
		align-items:start;
		padding:64px ${pageXPadding.xxs} 96px;
		max-width:100%;
	}
	@media (min-width: 420px) {
		#container {
			padding:64px ${pageXPadding.xs} 96px;
		}
	}
	@media (min-width: 640px) {
		#container {
			padding:64px ${pageXPadding.sm} 96px;
		}
	}
	@media (min-width: 760px) {
		#container {
			padding:64px ${pageXPadding.md} 96px;
		}
	}
	@media (min-width: 1024px) {
		#container {
			padding:48px ${pageXPadding.lg} 76px;
		}
	}
	@media (min-width: 1280px) {
		#container {
			padding:64px ${pageXPadding.xl} 96px;
		}
	}
	@media (min-width: 1536px) {
		#container {
			padding:64px ${pageXPadding['2xl']} 96px;
		}
	}
	/* Meta */
	#meta {
		color: var(--color-accent, currentColor);
		font-size: var(--font-size, .85rem);
		margin-bottom: var(--margin-bottom, 1.5rem);
		opacity:1;
		text-transform:uppercase;
	}
	/* Heading */
	#heading {
		color: inherit;
		filer:drop-shadow(0 1px 1px rgba(0, 0, 0, .05));
		font-size: 1.25rem;
		font-weight: var(--heading-font-weight, bold);
		margin-bottom: .5rem;
	}
	@media (min-width: 640px) {
		#heading {
			font-size: 1.5rem;
			margin-bottom: .75rem;
		}
	}
	@media (min-width: 768px) {
		#heading {
			font-size: 1.5em;
			margin-bottom: .825rem;
		}
	}
	@media (min-width: 1024px) {
		#heading {
			font-size: 1.75em;
		}
	}
	#text {
		color: inherit;
		display:block;
		max-width:none;
		margin-bottom:2rem;
		opacity:.9;
	}
	@media (min-width: 640px) {
		#text {
			padding:0;
			margin-bottom:48px;
			}
		}
	@media (min-width: 768px) {
		#text {
			max-width:576px;
			padding:0;
			margin-bottom:48px;
			}
		}
	@media (min-width: 1024px) {
	#text {
		max-width:576px;
		margin-bottom:56px;
		}
	}
	@media (min-width: 1280px) {
		#text {
			max-width:576px;
			margin-bottom:64px;
			}
		}
	#grid {
		display:grid;
		grid-template-columns:repeat(1, minmax(0, 1fr));
		gap:1rem;
		place-items:start;
		width:auto;
	}
	@media (min-width: 640px) {
		#grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 720px) {
		#grid {
			gap:1.25rem;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		#grid {
			column-gap:24px;
			grid-template-columns: repeat(4,minmax(0,1fr));
			place-content:center;
		}
		#grid content-card:nth-child(1), #grid content-card:nth-child(3) {
			transform:translateY(-1rem);
		}
		#grid content-card:nth-child(2), #grid content-card:nth-child(4) {
			transform:translateY(1rem);
		}
	}
	@media (min-width: 1280px) {
		#grid { column-gap:32px; }
	}
	@media (min-width: 1536px) {
		#grid { column-gap:48px; }
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

}

customElements.define("widget-card-grid", WidgetCardGrid);
export default WidgetCardGrid;


