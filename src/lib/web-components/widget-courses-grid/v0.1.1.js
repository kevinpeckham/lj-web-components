// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils.0.1.1.min.js";

// types
/** @typedef {{category?: string; disciplines?: string[]; duration?: string; formats?: string[]; imageUrl?: string; level?: string; linkUrl?: string; type?: string; price?: string; title: string; }} Course */

/** @copyright 2024 Lightning Jar - "Widget Product Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://www.lj-cdn.dev/web-components/widget-courses-grid} */

/**
 * Widget Card Grid Web Component
 * @name WidgetCoursesGrid
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of cards.
 *
 * @attribute body-text | -- | Lorem ipsum dolor sit amet. | widget text
 * @attribute body-font-size | 1em | -- | widget text size
 * @attribute body-line-height | 1.33 | -- line height for widget text
 * @attrubute body-margin-bottom | 1rem | -- | marbin below widget text
 * @attribute card-background-color | white | #F6F7F9 | background color of the card
 * @attribute card-border-radius | .35rem | -- | border radius of the card
 * @attribute card-box-shadow | none | 0 0 1px 0 rgba(0,0,0,.4); | box shadow of card
 * @attribute card-button-border-radius | .35rem | -- | rounded edges of card button
 * @attribute card-button-font-size | .8rem | -- | size of card button text
 * @attribute card-button-padding | .45rem 1rem | -- padding in card button
 * @attribute card-hover-background-color | -- | #E8F1FF | background of card on hover
 * @attribute card-hover-box-shadow | box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); | -- | box shadow of card on hover
 * @attribute card-max-width | 100% | -- | max width of the card
 * @attribute card-meta-font-size | .8rem | -- | size of meta text
 * @attribute card-meta-line-height | 1.33 | -- | line height of meta text
 * @attribute card-min-height | 2780px | -- | min height of the card
 * @attribute card-padding | 1rem | -- | padding inside the card
 * @attribute card-title-font-size | .95rem | -- | size of course title
 * @attribute card-title-font-weight | 700 | -- | weight of course title
 * @attribute card-title-line-height | 1.33 | -- | line height of course title
 * @attribute card-title-margin-bottom | 1rem | -- | margin below course title
 * @attribute color-accent | lightblue | rgb(0 184 156 / 100%) | color of the text
 * @attribute color-background | #F8FAFC | -- | background color of the widget
 * @attribute color-primary | currentColor | #0A2E7E | color of the text
 * @attribute courses-data-json | [] | [{"category":"Energy Transition","disciplines":["Net Zero & Renewables"],"formats":["On-Demand"],"imageUrl":"https://www.petroskills.com/images/disciplines/Renewable_Icon.JPG","level":"Basic","linkUrl":"https://www.petroskills.com/en/training/courses/overview-of-net-zero-and-renewables---ng-2---elearning-course~p13995","type":"Course","price":"","title":"Overview of Net-Zero and Renewables - NG2"},{"category":"Energy Transition","disciplines":["Net Zero & Renewables"],"formats":["In-Classroom"],"imageUrl":"https://www.petroskills.com/images/disciplines/Renewable_Icon.JPG","level":"Basic","linkUrl":"https://www.petroskills.com/en/training/courses/fundamentals-of-net-zero-and-renewables---ng-20~p13513","type":"Course","price":"","title":"Fundamentals of Net-Zero and Renewables - NG20"},{"category":"Energy Transition","disciplines":["Net Zero & Renewables"],"formats":["On-Demand"],"imageUrl":"https://www.petroskills.com/images/disciplines/reliability-engineering.png","level":"Basic","linkUrl":"https://www.petroskills.com/en/training/courses/introduction-to-greenhouse-gas-management--accounting--and-reporting---ng-51---elearning-course~p15759","type":"Course","price":"","title":"Introduction to Greenhouse Gas Management, Accounting, and Reporting - NG51"},{"category":"Energy Transition","disciplines":["Net Zero & Renewables"],"formats":["In-Classroom"],"imageUrl":"https://www.petroskills.com/images/disciplines/reliability-engineering.png","level":"Foundation","linkUrl":"https://petroskills.com/en/training/courses/introduction-to-greenhouse-gas-management--accounting--and-reporting---ng-51~p15630","type":"Course","price":"","title":"Introduction to Greenhouse Gas Management, Accounting, and Reporting - NG-51"},{"category":"Energy Transition","disciplines":["Carbon Capture, Storage, and Sequestration","Process Facilities","Net Zero & Renewables"],"formats":["In-Classroom","Virtual"],"imageUrl":"https://www.petroskills.com/images/disciplines/process-facilities.png","level":"Basic","linkUrl":"https://www.petroskills.com/en/training/courses/carbon-capture-from-stationary-industrial-sources---pf-82~p5072","type":"Course","price":"","title":"Carbon Capture from Stationary Industrial Sources - PF-82"}] | json data for the cards
 * @attribute font-family | inherit | -- | typeface for widget
 * @attribute heading-font-size | 1.75rem | -- | size of widget heading text
 * @attribute heading-font-weight | bold | 700 | font weight of widget heading
 * @attribute heading-line-height | 1.25 | -- | line height of widget heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of widget heading
 * @attribute heading-text | -- | In-Classroom & Virtual Instructor-led Courses | widget heading text
 * @attribute link-url | -- | -- | target url for widget link
 * @attribute link-label | -- | -- | text for widget link
 * @attribute meta-font-size | -- | -- | size of widget meta text
 * @attribute meta-margin-bottom | -- | -- | margin below widget meta text
 * @attribute meta-text | -- | Training | widget meta text
 * @attribute show-disciplines | true | false | show course disciplines
 * @attribute show-format | true | -- | show course format
 * @attribute show-level | true | -- | show course level
 * @attribute stylesheet | -- | -- | inject css into inner stylesheet
 */
class WidgetCoursesGrid extends HTMLElement {
	bodyText = "";
	bodyFontSize = "";
	bodyLineHeight = "";
	bodyMarginBottom = "";
	cardBackgroundColor = "";
	cardBorderRadius = "";
	cardBoxShadow = "";
	cardButtonBorderRadius = "";
	cardButtonFontSize = "";
	cardButtonPadding = "";
	cardHoverBackgroundColor = "";
	cardHoverBoxShadow = "";
	cardMaxWidth = "";
	cardMetaFontSize = "";
	cardMetaLineHeight = "";
	cardMinHeight = "";
	cardPadding = "";
	cardTitleFontSize = "";
	cardTitleFontWeight = "";
	cardTitleLineHeight = "";
	cardTitleMarginBottom = "";
	colorAccent = "";
	colorBackground = "";
	colorPrimary = "";
	coursesDataJson = "[]";
	fontFamily = "";
	headingFontSize = "";
	headingFontWeight = "";
	headingLineHeight = "";
	headingMarginBottom = "";
	headingText = "";
	linkUrl = "";
	linkLabel = "";
	metaFontSize = "";
	metaMarginBottom = "";
	metaText = "";
	stylesheet = "";

// reference to class itself
get c() { return WidgetCoursesGrid };

// ICONS
static get courseIcon() {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" style="width:100%;height:auto;"><path d="M88.929 0a8 8 0 0 1 8 8v84a8 8 0 0 1-8 8h-75.07a8 8 0 0 1-8-8V26.338l.22-.226v-.228l4.714-4.606L31.539 0h57.391zm0 8H34.583l.001 21H12.929v64h76V8zM68.5 72a3.5 3.5 0 1 1 0 7h-41a3.5 3.5 0 1 1 0-7h41zm7-17a3.5 3.5 0 1 1 0 7h-48a3.5 3.5 0 1 1 0-7h48zM71 17a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H59a8 8 0 0 1-8-8V25a8 8 0 0 1 8-8h12zm1 7H59a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1zm-44.435-8.689l-6.528 6.143h6.528v-6.143z" fill-rule="evenodd" fill="currentColor"/></svg>`}

	/** @param {string} type */
	getIcon(type) {
		switch (type) {
			case "Course":
				return this.c.courseIcon;
			default:
				return this.c.courseIcon;
		}

	}


// ATTRIBUTES
/**
 * Returns an object. The keys are prop names. The values are the default values for the props.
 * @returns { { [key:string]: string | null } }
 */
static get attributes() {
const values = {
	"body-text": "",
	"body-font-size": "1rem",
	"body-line-height": "1.33",
	"body-margin-bottom": "1rem",
	"card-background-color": "transparent",
	"card-border-radius": ".35rem",
	"card-box-shadow": "none",
	"card-button-border-radius": ".35rem",
	"card-button-font-size": ".8rem",
	"card-button-padding": ".45rem 1rem",
	"card-hover-background-color": "",
	"card-hover-box-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
	"card-max-width": "100%",
	"card-meta-font-size": ".8rem",
	"card-meta-line-height": "1.33",
	"card-min-height": "280px",
	"card-padding": "1rem",
	"card-title-font-size": ".95rem",
	"card-title-font-weight": "600",
	"card-title-line-height": "1.33",
	"card-title-margin-bottom": "1rem",
	"color-accent": "lightblue",
	"color-background": "#F8FAFC",
	"color-primary": "currentColor",
	"courses-data-json": "[]",
	"font-family": "inherit",
	"heading-font-size": "1.5rem",
	"heading-font-weight": "700",
	"heading-line-height": "",
	"heading-margin-bottom": "",
	"heading-text": "",
	"link-url": "",
	"link-label": "",
	"meta-font-size": ".85rem",
	"meta-margin-bottom": "",
	"meta-text": "",
	"stylesheet": "",
	"show-disciplines": "true",
	"show-format": "true",
	"show-level": "true"

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
/** @param {*} context */
buildGridHTML(context) {

	/** @param {*} context, @param {Course} course */
	function buildTile(context, course) {
		const icon = context.getIcon(course.type);
		return `
		<div class="course-outer">
			<a class="course">
				<!-- type -->
				${course?.type ?
					`<div class="type-container">
						<div class="type-icon">${icon}</div>
						<div class="type">${course.type}</div>
						</div>` :
					 ''}

				<h3 class="title" >${course.title?.replace('and','&')}</h3>

				${course?.formats && course.formats[0]  ?
				`<div class="meta-row"><div class="meta label">Format:</div><div class="meta formats">${course?.formats?.join(', ')}</div></div>` : ''}

				${course?.level? `<div class="meta-row"><div class="meta label">Level:</div><div class="meta level">${course.level}</div></div>` : ''}

				${course?.disciplines && course.disciplines[0] && context.showDisciplines != "false" ?
				`<div class="meta-row"><div class="meta label">Discipline:</div><div class="meta disciplines">${course?.disciplines?.join(', ')}</div></div>` : ''}

				${course?.duration? `<div class="meta duration">${course.duration}</div>` : ''}

				${course?.price? `<div class="meta price">${course.price}</div>` : ''}
			</a>
		</div>`
	}

	let result = '';
	this.data.forEach(/** @param { Course } course */ course => result += buildTile(this, course));
	return result ? result : '';
}

// DATA
get data() {
	const result = JSON.parse(this.coursesDataJson) ?? "[]";
	return result;
}


// ELEMENTS
get els() {
  return `
<style id="stylesheet">${this.stylesheet}</style>
<div
	id="container"
	style="
		--body-font-size:${this.bodyFontSize};
		--body-line-height:${this.bodyLineHeight};
		--body-margin-bottom:${this.bodyMarginBottom};
		--card-background-color:${this.cardBackgroundColor};
		--card-border-radius:${this.cardBorderRadius};
		--card-box-shadow:${this.cardBoxShadow};
		--card-button-border-radius:${this.cardButtonBorderRadius};
		--card-button-font-size:${this.cardButtonFontSize};
		--card-button-padding:${this.cardButtonPadding};
		--card-hover-background-color:${this.cardHoverBackgroundColor};
		--card-hover-box-shadow:${this.cardHoverBoxShadow};
		--card-max-width:${this.cardMaxWidth};
		--card-meta-font-size:${this.cardMetaFontSize};
		--card-meta-line-height:${this.cardMetaLineHeight};
		--card-min-height:${this.cardMinHeight};
		--card-padding:${this.cardPadding};
		--card-title-font-size:${this.cardTitleFontSize};
		--card-title-font-weight:${this.cardTitleFontWeight};
		--card-title-line-height:${this.cardTitleLineHeight};
		--card-title-margin-bottom:${this.cardTitleMarginBottom};
		--color-accent:${this.colorAccent};
		--color-background:${this.colorBackground};
		--color-primary:${this.colorPrimary};
		--font-family:${this.fontFamily};
		--heading-font-size:${this.headingFontSize};
		--heading-font-weight:${this.headingFontWeight};
		--heading-line-height:${this.headingLineHeight};
		--heading-margin-bottom:${this.headingMarginBottom};
		--meta-font-size:${this.metaFontSize};
		--meta-margin-bottom:${this.metaMarginBottom};
>
		<div id="container-inner">

			${this.metaText ? `<div id="meta" style="">${this.metaText}</div>` : ''}


			${this.headingText ? `<div id="heading-row">

				${this.headingText && this.headingText?.[0] ?
				`<h2 id="heading">${this.headingText}</h2>` : ''
			}
				${this.linkUrl ? `<a href="${this.linkUrl}" id="link">${this.linkLabel}</a>` : ''}
			</div>` : '' }

			${this.bodyText ? `<p id="text">${this.bodyText ?? ""}</p>` : '' }

			<div id="grid">${this.buildGridHTML(this)}</div>

		</div>
</div>`.trim();
}


// STYLES
get styles() {
	const pageXPadding = ComponentUtils.pageXPadding;
  return `
	${ComponentUtils.preflight}
  <style id="base">
	#container {
		background-color: var(--color-background);
		color: var(--color-primary);
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
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		#grid {
			column-gap:24px;
			grid-template-columns: repeat(3,minmax(0,1fr));
			place-content:center;
		}
	}
	@media (min-width: 1280px) {
		#grid {
			column-gap:32px;
			grid-template-columns: repeat(4,minmax(0,1fr));
		}
		}
	@media (min-width: 1536px) {
		#grid {
			column-gap:48px;
			grid-template-columns: repeat(5,minmax(0,1fr));
			}
	}

	/* Courses */
	.course {
		background-color: var(--card-background-color, white);
		border: solid .5px color-mix(in srgb, var(--color-primary, lightblue) 30%, transparent);
		border-radius: var(--card-border-radius, .35rem);
		box-shadow: var(--card-box-shadow, none);
		display:block;
		min-height: var(--card-min-height, auto);
		overflow:visible;
		padding: var(--card-padding, 1rem);
		transition: background-color .2s ease-in-out, box-shadow .2s ease-in-out;
		width:100%;
	}
	.course:hover {
		background-color: var(--card-hover-background-color, var(--color-background));
		box-shadow: var(--card-hover-box-shadow, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1));
	}
	.course .type-container {
		align-items:center;
		background-color:white;
		border-radius:.35rem;
		display:flex;
		margin-bottom:1rem;
		max-width:fit-content;
		padding:.25rem .5rem;
	}
	.course .type-icon {
		max-width:1rem;
	}
	.course .type {
		color:var(--color-primary);
		font-size:.85rem;
		font-weight:400;
		margin-left:.5rem;
		max-width:fit-content;
	}
	.course .title {
		font-weight:var(--card-title-font-weight, 600);
		font-size:var(--card-title-font-size, .9rem);
		line-height:var(--card-title-line-height, 1.25);
		margin-bottom:var(--card-title-margin-bottom, 1rem);
	}
	.course .meta {
		font-size: .85rem;
	}
	.course .meta.disciplines {
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.course .meta-row {
		display:flex;
		justify-content:start;
	}
	.course .meta.label {
		font-weight:500;
		margin-right:.5rem;
		min-width:fit-content;
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

customElements.define("widget-courses-grid", WidgetCoursesGrid);
export default WidgetCoursesGrid;


