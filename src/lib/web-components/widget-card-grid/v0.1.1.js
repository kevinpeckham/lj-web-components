// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// TYPES
/** @typedef {string} S */
/** @typedef {string | undefined} Su */
/** @typedef {{[key:string]: unknown; cardBackgroundImageAlt: Su; cardBackgroundImageUrl: Su; cardBodyBullets: S[]; cardBodyText: Su; cardFeatureImageUrl: Su; cardFooterLinkLabel: Su; cardFooterLinkUrl: Su; cardFooterLinkTitle: Su; cardFooterText: Su; cardHeaderLogoAlt: Su; cardHeaderLogoUrl: Su; cardHeaderText: Su; cardOutsideHeadingText: Su; }} Card */

/** @copyright 2024 Lightning Jar - "Widget Card Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https:/cdn.lj.dev/web-components/widget-card-grid} */

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
 * @attribute meta-font-size | .75rem | -- | font size of the meta text
 * @attribute meta-margin-bottom | 1.5rem | -- | margin bottom of the meta text
 * @attribute meta-text | -- | Challenges
 *
 * WIDGET HEADING

 *
 * WIDGET TEXT
 * @attribute body-text | -- | In partnership with our members, The Competency Alliance has established the NetZero and Renewables divisions, following the PetroSkills model used to form an industry benchmark in the Oil and Gas sector 20 years ago. | text of the widget
 * @attribute card-background-color | white | #EAF1F7 | background color of the card
 * @attribute card-background-image-position | -- | -- | position of the background image
 * @attribute card-body-color | inherit | -- | color of the body text
 * @attribute card-body-font-size | .95rem | -- | font size of the body text
 * @attribute card-body-font-weight | inherit | -- | font weight of the body text
 * @attribute card-body-padding | .75rem | -- | padding of the body container
 * @attribute card-border | solid .5px hsla(206, 32%, 22%, 0.3) | -- | border of the card
 * @attribute card-border-radius | .35rem | .5rem | border radius of the card
 * @attribute card-box-shadow | 0 0 1px 0 rgba(0,0,0,.4) |  -- | box shadow of the card
 * @attribute card-footer-backdrop-filter | blur(8px) | -- | backdrop filter of the card header
 * @attribute card-footer-border-top | 1px solid #e2e8f0 | --| border bottom of the card header
 * @attribute card-footer-background | rgb(255 255 255 / 40%) | -- | background color of the card header
 * @attribute card-footer-color | inherit | -- | text color of the card header
 * @attribute card-footer-font-size | .85rem | -- | font size of the card header
 * @attribute card-footer-font-weight | 400 | -- | font weight of the card header
 * @attribute card-footer-link-background | rgb(255 255 255 / 30%) | -- | background color of the footer link (button style)
 * @attribute card-footer-link-border | 1px solid currentColor | -- | border of the footer link (button style)
 * @attribute card-footer-link-border-radius | .25rem; | -- | border radius of the footer link (button style)
 * @attribute card-footer-link-color | currentColor | -- | text color of the footer link (button style)
 * @attribute card-footer-link-font-size | .85em | -- | font size of the footer link (button style)
 * @attribute card-footer-link-font-weight | 400 | -- | font weight of the footer link (button style)
 * @attribute card-footer-link-hover-color | currentColor | -- | text color of the footer link on hover (button style)
 * @attribute card-footer-link-hover-background | rgb(255 255 255 / 80%) | -- | background color of the footer link on hover (button style)
 * @attribute card-footer-link-padding | .25rem .5rem; | -- | padding of the footer link (button style)
 * @attribute card-footer-min-height | 2.5rem | -- | min height of the card header
 * @attribute card-footer-padding | .25rem 1rem | -- | padding of the card header
 * @attribute card-header-border-bottom | 1px solid #e2e8f0 | -- | border bottom of the card header
 * @attribute card-header-background | white | #F9FDFF | background color of the card header
 * @attribute card-header-color | inherit | -- | text color of the card header
 * @attribute card-header-font-size | 1rem | -- | font size of the card header
 * @attribute card-header-font-weight | 900 | -- | font weight of the card header
 * @attribute card-header-padding | .25rem 1rem | -- | padding of the card header
 * @attribute card-header-logo-width | auto | -- | width of the logo
 * @attribute card-header-logo-height | 2.5rem | -- | height of the logo
* @attribute card-height | auto | -- | height of the card
 * @attribute card-hover-opacity | -- | -- | opacity of the card on hover
 * @attribute card-hover-background-color | -- | -- | background color of the card on hover
 * @attribute card-max-width | 100% | -- | max width of the card
 * @attribute card-min-height | auto | 24rem | min height of the card
 * @attribute card-opacity | 100% | -- | opacity of the card
 * @attribute card-outside-heading-color | inherit | -- | color of the outside heading
 * @attribute card-outside-heading-font-size | inherit | -- | font size of the outside heading
 * @attribute card-outside-heading-font-weight | inherit | -- | font weight of the outside
 * @attribute card-outside-heading-margin-bottom | .5rem | -- | margin of the outside heading
 * @attribute card-outside-heading-position | above | -- | position of the outside heading
 * @attribute card-width | 100% | -- | width of the card
 * _attribute cards-data-json | [] | [{"cardFeatureImageUrl":"https://petroskills.com/microsite/TCA/grid-images/ocean-turbines.webp","cardOutsideHeadingText":"New Skills","cardBodyText":"Energy companies are increasingly moving towards diversification beyond traditional hydrocarbons."},{"cardFeatureImageUrl":"https://petroskills.com/microsite/TCA/grid-images/solar-worker.webp","cardOutsideHeadingText":"New People","cardBodyText":"The transition to clean energy is expected to generate > 10M net new jobs by 2030."},{"cardFeatureImageUrl":"https://petroskills.com/microsite/TCA/grid-images/solar-farm.webp","cardOutsideHeadingText":"New Demands","cardBodyText":"In the office, field, or board room, energy workers will require up-skilling and digital dexterity to adapt."},{"cardFeatureImageUrl":"https://petroskills.com/microsite/TCA/grid-images/business-person.webp","cardOutsideHeadingText":"New Investments","cardBodyText":"Significant investment is required to deliver knowledge to the right person, at the right time, in the right format."}] | json data for the cards
 * @attribute cards-data-json | [] | [{"cardBackgroundImageUrl":"https://thecompetencyalliance.com/microsite/TCA/grid-images/company_graphic_petroskills.png","cardHeaderLogoUrl":"https://thecompetencyalliance.com/microsite/TCA/grid-icons/mark-petroskills.svg","cardHeaderText":"PetroSkills","cardBodyBullets":["Upstream","Midstream","Downstream"],"cardFooterLinkUrl":"https://petroskills.com","cardFooterLinkLabel":"Learn More"},{"cardBackgroundImageUrl":"https://thecompetencyalliance.com/microsite/TCA/grid-images/company_graphic_netzeroskills.png","cardHeaderLogoUrl":"https://thecompetencyalliance.com/microsite/TCA/grid-icons/mark-net-zero-skills.svg","cardHeaderText":"NetZeroSkills","cardBodyBullets":["Green House Gas Management","Carbon Capture, Utilization & Storage","Hydrogen"],"cardFooterLinkUrl":"https://netzeroskills.com","cardFooterLinkLabel":"Learn More"},{"cardBackgroundImageUrl":"https://thecompetencyalliance.com/microsite/TCA/grid-images/company_graphic_renewableskills.png","cardHeaderLogoUrl":"https://thecompetencyalliance.com/microsite/TCA/grid-icons/mark-renewable-skills.svg","cardHeaderText":"RenewableSkills","cardBodyBullets":["Geothermal","Wind"],"cardFooterLinkUrl":"https://renewableskills.com","cardFooterLinkLabel":"Learn More"},{"cardBackgroundImageUrl":"https://thecompetencyalliance.com/microsite/TCA/grid-images/company_graphic_ability.png","cardHeaderLogoUrl":"https://thecompetencyalliance.com/microsite/TCA/grid-icons/mark-ability.svg","cardHeaderText":"Ability","cardBodyBullets":["Competency Engine & LMS","Competency Consulting","Economics & PM","Organizational Effectiveness"],"cardFooterLinkUrl":"https://www.petroskills.com/ability","cardFooterLinkLabel":"Learn More"}] | json data for the cards
 * @attribute color-background | #F8FAFC | -- | background color of the widget
 * @attribute color-primary | currentColor | #0A2E7E | color of the text
 * @attribute color-accent | lightblue | rgb(0 184 156 / 100%) | color of the text
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | bold | -- | font weight of the heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-text | -- | Expertise that Spans the Energy Value Chain.
 * @attribute stylesheet | -- | #container { color:#0b2e7e; } | inject css into the inner stylesheet
 */
class WidgetCardGrid extends HTMLElement {

get c() { return WidgetCardGrid };

// ATTRIBUTES
/** @returns { { [key:string]: string | null } } */
static get attributes() {
return {
	"body-text": "",
	"card-background-color": "white",
	"card-background-image-position": "bottom",
	"card-body-color": "inherit",
	"card-body-font-size": ".95rem",
	"card-body-font-weight": "inherit",
	"card-border": "solid .5px hsla(206, 32%, 22%, 0.3)",
	"card-body-padding": ".5rem .75rem",
	"card-border-radius": ".5rem",
	"card-box-shadow": "0 0 1px 0 rgba(0,0,0,.4)",
	"card-footer-backdrop-filter": "blur(8px)",
	"card-footer-border-top": "1px solid #e2e8f0",
	"card-footer-background": "rgb(255 255 255 / 40%)",
	"card-footer-color": "inherit",
	"card-footer-font-size": ".95rem",
	"card-footer-font-weight": "500",
	"card-footer-link-background": "rgb(255 255 255 / 30%)",
	"card-footer-link-border": "1px solid currentColor",
	"card-footer-link-border-radius": ".25rem",
	"card-footer-link-color": "currentColor",
	"card-footer-link-font-size": ".85em",
	"card-footer-link-font-weight": "400",
	"card-footer-link-hover-color": "currentColor",
	"card-footer-link-hover-background": "rgb(255 255 255 / 80%)",
	"card-footer-link-padding": ".25rem .25rem",
	"card-footer-min-height": "2.5rem",
	"card-footer-padding": ".5rem 1rem",
	"card-header-border-bottom": "1px solid #e2e8f0",
	"card-header-background": "white",
	"card-header-color": "inherit",
	"card-header-font-size": "1rem",
	"card-header-font-weight": "900",
	"card-header-padding": ".25rem .75rem",
	"card-header-logo-width": "auto",
	"card-header-logo-height": "2.5rem",
	"card-height": "auto",
	"card-hover-opacity": "1",
	"card-hover-background-color": "var(--card-background-color)",
	"card-hover-box-shadow": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
	"card-max-width": "none",
	"card-min-height": "auto",
	"card-opacity": "1",
	"card-outside-heading-color": "inherit",
	"card-outside-heading-font-size": "1rem",
	"card-outside-heading-font-weight": "700",
	"card-outside-heading-margin-bottom": ".5rem",
	"card-outside-heading-position": "top",
	"card-width": "100%",
	"card-stylesheet": "",
	"cards-data-json": "[]",
	"color-background": "#F8FAFC",
	"color-primary": "currentColor",
	"color-accent": "currentColor",
	"heading-font-size": "1.25rem",
	"heading-font-weight": "bold",
	"heading-margin-bottom": "1.5rem",
	"heading-text": "",
	"meta-text": "", // replaces "widget-meta-text"
	"meta-font-size": ".75rem", // replaces "widget-meta-font-size"
	"meta-margin-bottom": ".5rem", // replaces "widget-meta-margin-bottom"
	"stylesheet": "",
	"widget-background": "var(--color-background)", // deprecated
	"widget-meta-text": "", // deprecated

}}

buildCardHTML(/** @type {Card} */ card) {
	const html = ComponentUtils.stringIfValue;
	const backgroundImageAlt = card?.cardBackgroundImageAlt ?? "";
	const backgroundImageUrl = card?.cardBackgroundImageUrl ?? "";
	const bodyBullets = card?.cardBodyBullets ?? [];
	const bodyText = card?.cardBodyText ?? "";
	const bullets = this.buildBulletsHTML(bodyBullets);
	const featureImageAlt = card?.cardBackgroundImageAlt ?? "";
	const featureImageUrl = card?.cardFeatureImageUrl ?? "";
	const footerLinkLabel = card?.cardFooterLinkLabel ?? "";
	const footerLinkUrl = card?.cardFooterLinkUrl ?? "";
	const footerLinkTitle = card?.cardFooterLinkTitle ?? "";
	const footerText = card?.cardFooterText ?? "";
	const headerLogoAlt = card?.cardHeaderLogoAlt ?? "";
	const headerLogoHeight = this.attValue('header-logo-height');
	const headerLogoWidth = this.attValue('header-logo-width');
	const headerLogoUrl = card?.cardHeaderLogoUrl ?? "";
	const headerText = card?.cardHeaderText ?? "";
	const outsideHeadingText = card?.cardOutsideHeadingText ?? "";
	const stylesheet = this.attValue('card-stylesheet');

	return `<div class="card-outer">
	${html(outsideHeadingText, `<h3 class="card-outside-heading">${outsideHeadingText}</h3>`)}
	<div class="card">
		<div class="card-inner">
			${html('test', `<header class="card-header">
				${html(headerLogoUrl, `<img class="card-header-image"
					${html(headerLogoAlt, `alt="${headerLogoAlt}" `)}
					${html(headerLogoHeight, `height="${headerLogoHeight}" `)}
					${html(headerLogoWidth, `width="${headerLogoWidth}" `)}
					${html(headerLogoUrl, `src="${headerLogoUrl}" `)}
					loading="lazy" />`)}
				${html(headerText, `<div class="card-header-text">${headerText}</div>`)}
			</header>`, headerLogoUrl || headerText)}
			<div class="card-body">
				${html(bodyText, `<p class="card-body-text">${bodyText}</p>`)}
				${html(bullets, bullets)}
				${html(featureImageUrl, `<div class="card-feature-image-container"><figure class="card-feature-image-figure"><img role="presentation" ${html(featureImageAlt, `alt="${featureImageAlt}"`)} class="card-feature-image" src="${featureImageUrl}" /></figure></div>`)}
			</div>
			${html('test', `<footer class="card-footer">
				${html(footerLinkLabel, `<a class="card-footer-link" href="${footerLinkUrl}" title="${footerLinkTitle}">${footerLinkLabel}</a>`)}
				${html(footerText, `<span class="card-footer-text">${footerText}</span>`)}
			</footer>`, footerLinkLabel || footerText)}
			${html(backgroundImageUrl, `<img role="presentation" alt="${backgroundImageAlt ?? ''}" class="card-background-image" src="${backgroundImageUrl}" />`)}
		</div>
	</div>
</div>`.trim();
}

// HTML BUILDERS
buildGridHTML() {
	const /** @type {Card[]} item */ data = JSON.parse(this.attValue('cards-data-json')) ?? "[]";
	return data.map((card) => this.buildCardHTML(card)).join("");
}

buildBulletsHTML(/** @type {string[]} */ bullets) {
	const result = bullets.map((bullet) => `<div class="li"><span class="bullet">&#x2022;</span><span class="li-content">${bullet}</span></div>`).join("");
	return `<div class="card-body-bullets">${result}</div>`;
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {
	const containerVars = ComponentUtils.cssVars(this.c.attributes, this);
	const html = ComponentUtils.stringIfValue;
	const stylesheet = this.attValue('stylesheet');
	const bodyText = this.attValue('body-text');
	const headingText = this.attValue('heading-text');
	const widgetMetaText = this.attValue('widget-meta-text') ? this.attValue('widget-meta-text') : this.attValue('meta-text') ?? "";
	const grid = this.buildGridHTML();
  return `
	${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
	<div id="container" style="${containerVars}">
		<div id="container-inner">
			${html(widgetMetaText, `<div id="meta" style="">${widgetMetaText}</div>`)}
			${html(headingText, `<h2 id="heading">${headingText[0].toUpperCase() + headingText.substring(1).toLowerCase()}</h2>`)}
			${html(bodyText, `<p id="text">${bodyText}</p>`)}
			${html(grid, `<div id="grid">${grid}</div>`)}
		</div>
</div>`.trim();
}

// STYLES
static get styles() {
  return `
	${ComponentUtils.preflight}
  <style id="base">
	#container {
		align-items:start;
		background-color: var(--color-background);
		display:grid;
		color: var(--color-primary);
		padding-block:64px 96px;
		max-width:100%;
	}
	@media (min-width: 420px) {
		#container {
			padding-block:64px 96px;
		}
	}
	@media (min-width: 640px) {
		#container {
			padding-block:64px 96px;
		}
	}
	@media (min-width: 760px) {
		#container {
			padding-block:64px 96px;
		}
	}
	@media (min-width: 1024px) {
		#container {
			padding-block:48px 76px;
		}
	}
	@media (min-width: 1280px) {
		#container {
			padding-block:64px 96px;
		}
	}
	@media (min-width: 1536px) {
		#container {
			padding-block:64px 96px;
		}
	}
	${ComponentUtils.paddingXStyles()}
	#meta {
		color: var(--color-accent, currentColor);
		font-size: var(--font-size, .85rem);
		margin-bottom: var(--margin-bottom, 1.5rem);
		opacity:1;
		text-transform:uppercase;
	}
	#heading {
		color: inherit;
		filer:drop-shadow(0 1px 1px rgba(0, 0, 0, .05));
		font-size: 1.25rem;
		font-weight: var(--heading-font-weight, bold);
		line-height:1.25;
		margin-bottom: .5rem;
		max-width:576px;
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
		place-items:start stretch;
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
		#grid .card-outer:nth-child(1), #grid .card-outer:nth-child(3) {
			transform:translateY(-1rem);
		}
		#grid .card-outer:nth-child(2), #grid .card-outer:nth-child(4) {
			transform:translateY(1rem);
		}
	}
	@media (min-width: 1280px) {
		#grid { column-gap:32px; }
	}
	@media (min-width: 1536px) {
		#grid { column-gap:48px; }
	}
	.card-outer {
		background-color:transparent;
		color: var(--card-body-color);
		width:100%;
	}
	.card {
		background-color: transparent;
		display: block;
		outline:transparent;
		position:relative;
		max-width: 100%;
	}
	.card-outer .card-outside-heading {
		color: var(--card-outside-heading-color, inherit);
		font-size: var(--card-outside-heading-font-size, 1rem);
		font-weight: var(--card-outside-heading-font-weight, 700);
		margin-bottom: var(--card-outside-heading-margin-bottom, 0);
	}
	.card-inner {
		background-color: var(--card-background-color, white);
		border-radius: var(--card-border-radius, .35em);
		border: var(--card-border, none);
		box-shadow: var(--card-box-shadow, none);
		display:grid;
		place-content:start;
		place-items:stretch;
		grid-template-rows: minmax(max-content, auto) 1fr minmax(max-content, auto);
		grid-template-columns: repeat(1, minmax(0, 1fr));
		height: 100%;
		min-height: var(--card-min-height, auto);
		overflow: hidden;
		position:relative;
		transition-property: background-color, box-shadow, opacity;
		transition:duration: .35s;
		transition-timing-function: ease-in-out;
		width: var(--card-width, 100%);
	}
	.card-inner:hover {
		background-color:var(--card-hover-background-color, white);
		box-shadow: var(--card-hover-box-shadow, 0 25px 50px -12px rgb(0 0 0 / 0.25));
		opacity: var(--card-hover-opacity, 100%);
	}
	.card-inner .card-header {
		border-bottom: var(--card-header-border-bottom, 1px solid #e2e8f0);
		background-color: var(--card-header-background);
		color: var(--card-header-color);
		display:flex;
		font-size: var(--card-header-font-size, 1rem);
		font-weight: var(--card-header-font-weight, 700);
		max-width: 100%;
		overflow:hidden;
		padding: var(--card-header-padding, .5rem .25rem);
		z-index:3;
	}
	.card-inner .card-header .card-header-text {
		color: var(--card-header-color, inherit);
		font-size: var(--card-header-font-size, 1rem);
		font-weight: var(--card-header-font-weight, 900);
		max-height: fit-content;
		padding: var(--card-header-padding, .5rem .25rem);
		width: 100%;
		text-align: left;
	}
	.card-inner .card-header .card-header-image {
		display:flex;
		width: var(--card-header-logo-width, auto);
		height: var(--card-header-logo-height, auto);
	}
	.card-inner .card-body {
		color: var(--card-body-color);
		display:grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		height:auto;
		font-size: var(--card-body-font-size);
		font-weight: var(--card-body-font-weight, 400);
		padding: var(--card-body-padding);
		width:100%;
	}
	.card-inner .card-body-text {
		font-size:.95rem;
		margin-bottom: .5rem;
		opacity:.9;
		padding: var(--card-body-padding, 1rem);
	}
	.card-inner .card-body-bullets {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		place-items-start;
		place-content:start;
		row-gap:0.5rem;
		z-index:2;
	}
	.card-inner .card-body-bullets .li {
		background-color:var(--card-background-color);
		background-color:color-mix(in srgb, var(--card-background-color, transparent) 95%, transparent);
		border-radius:.25rem;
		display:flex;
		font-size: .95em;
		position:relative;
		max-width:fit-content;
	}
	.card-inner .card-body-bullets .li .bullet {
		display:inline-block;
		left:0;
		margin-right:.25rem;
	}
	.card-inner .card-body-bullets .li .li-content {
		display:inline-block;
	}

	.card-feature-image-container {
		bottom:0;
		right:0;
		display: flex;
		justify-content: flex-end;
		position: absolute;
		width:100%;
		max-width:400px;
	}
	.card-feature-image-figure {
		align-items: center;
		aspect-ratio:1;
		border-top-left-radius:9999px;
		background:#CFF3F3;
		display: flex;
		height:auto;
		items-center;
		justify-content: flex-end;
		width:80%;
	}
	.card-feature-image {
		aspect-ratio:1;
		bottom:0;
		display:flex;
		height:auto;
		position:absolute;
		opacity:1;
		overflow:hidden;
		pointer-events:none;
		transform:translate(33%, 33%);
		width:100%;
		scale:1.2;
		z-index:0;
	}
	.card-background-image {
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
	.card-footer {
		align-items: center;
		background: var(--card-footer-background, transparent);
		backdrop-filter: var(--card-footer-backdrop-filter, none);
		border-top: var(--card-footer-border-top, 1px solid #e2e8f0);
		color: var(--card-footer-color, inherit);
		column-gap:1rem;
		font-size: var(--card-footer-font-size, 1rem);
		font-weight: var(--card-footer-font-weight, 500);
		justify-self: end;
		padding: var(--card-footer-padding, .25rem 1rem);
		min-height: var(--card-footer-min-height, 2.5rem);
		max-width:100%;
		width:100%;
		z-index:10;
	}
	.card-footer-link {
		background: var(--card-footer-link-background, transparent);
		border: 1px solid currentColor;
		border-radius: .25rem;
		color: var(--card-footer-color, inherit);
		font-size: .85em;
		padding: var(--card-footer-link-padding, .25rem .5rem);
		text-decoration: none;
		box-shadow: 0 0 0 0px currentColor;
		transition-property: background, color, border;
		transition-duration: .1s;
	}
	.card-footer-link:hover {
		background: var(--card-footer-link-hover-background, transparent);
		border: 1px solid transparent;
		color: var(--card-footer-link-hover-color, currentColor);
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
connectedCallback() {	this.shadowRoot?.appendChild(this.template.content.cloneNode(true)) }
}

customElements.define("widget-card-grid", WidgetCardGrid);
export default WidgetCardGrid;


