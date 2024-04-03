// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// types
/** @typedef {{category?: string; disciplines?: string[]; duration?: string; formats?: string[]; imageUrl?: string; level?: string; linkUrl?: string; linkTarget?: string; linkRel?: string; type?: string; price?: string; title: string; }} Course */

/** @copyright 2024 Lightning Jar - "Widget Product Grid" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/widget-courses-grid} */

/**
 * Widget Card Grid Web Component
 * @name WidgetCoursesGrid
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of cards.
 * @attribute body-text | -- | Lorem ipsum dolor sit amet. | widget text
 * @attribute body-font-size | 1em | -- | widget text size
 * @attribute body-line-height | 1.33 | -- | line height for widget text
 * @attribute body-margin-bottom | 1rem | -- | margin below widget text
 * @attribute card-background-color | white | #EAF1F7 | background color of the card
 * @attribute card-border-radius | .35rem | -- | border radius of the card
 * @attribute card-box-shadow | none | 0 0 1px 0 rgba(0,0,0,.4) | box shadow of card
 * @attribute card-button-border-radius | .35rem | -- | rounded edges of card button
 * @attribute card-button-font-size | .8rem | -- | size of card button text
 * @attribute card-button-padding | .45rem 1rem | -- | padding in card button
 * @attribute card-hover-background-color | -- | hsla(179, 60%, 88%, 0.5) | background of card on hover
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
 * @attribute color-accent | lightblue | rgb(0 184 156 / 100%); | color of the text
 * @attribute color-background | #F8FAFC | -- | background color of the widget
 * @attribute color-primary | currentColor | #0A2E7E | color of the text
 * @attribute courses-data-json | [] | [{"category":"Energy Transition","disciplines":["Net Zero & Renewables"],"formats":["On-Demand"],"imageUrl":"https://www.petroskills.com/images/disciplines/Renewable_Icon.JPG","level":"Basic","linkUrl":"https://www.petroskills.com/en/training/courses/overview-of-net-zero-and-renewables---ng-2---elearning-course~p13995","type":"Course","price":"","title":"Overview of Net-Zero and Renewables - NG2"},{"category":"Energy Transition","disciplines":["Net Zero & Renewables"],"formats":["In-Classroom"], "imageUrl":"https://www.petroskills.com/images/disciplines/Renewable_Icon.JPG","level":"Basic","linkUrl":"https://www.petroskills.com/en/training/courses/fundamentals-of-net-zero-and-renewables---ng-20~p13513","type":"Course","price":"","title":"Fundamentals of Net-Zero and Renewables - NG20"},{"category":"Energy Transition","disciplines":["Net Zero & Renewables"],"formats":["On-Demand"],"imageUrl":"https://www.petroskills.com/images/disciplines/reliability-engineering.png","level":"Basic","linkUrl":"https://www.petroskills.com/en/training/courses/introduction-to-greenhouse-gas-management--accounting--and-reporting---ng-51---elearning-course~p15759","type":"Course","price":"","title":"Introduction to Greenhouse Gas Management, Accounting, and Reporting - NG51"},{"category":"Energy Transition","disciplines":["Net Zero & Renewables"],"formats":["In-Classroom"],"imageUrl":"https://www.petroskills.com/images/disciplines/reliability-engineering.png","level":"Foundation","linkUrl":"https://petroskills.com/en/training/courses/introduction-to-greenhouse-gas-management--accounting--and-reporting---ng-51~p15630","type":"Course","price":"","title":"Introduction to Greenhouse Gas Management, Accounting, and Reporting - NG-51"},{"category":"Energy Transition","disciplines":["Carbon Capture, Storage, and Sequestration","Process Facilities","Net Zero & Renewables"],"formats":["In-Classroom","Virtual"],"imageUrl":"https://www.petroskills.com/images/disciplines/process-facilities.png","level":"Basic","linkUrl":"https://www.petroskills.com/en/training/courses/carbon-capture-from-stationary-industrial-sources---pf-82~p5072","type":"Course","price":"","title":"Carbon Capture from Stationary Industrial Sources - PF-82"}] | json data for the cards
 * @attribute font-family | inherit | -- | typeface for widget
 * @attribute heading-font-size | 1.75rem | -- | size of widget heading text
 * @attribute heading-font-weight | bold | 700 | font weight of widget heading
 * @attribute heading-line-height | 1.25 | -- | line height of widget heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of widget heading
 * @attribute heading-text | -- | In-Classroom & Virtual Instructor-led Courses | widget heading text
 * @attribute icons | [{"type":"Course", "iconUrl":"/icons/source.svg"},{"type":"Module", "iconUrl":"/icons/module.svg"}] | -- | specify icons for different course types
 * @attribute link-url | -- | -- | target url for widget link
 * @attribute link-label | -- | -- | text for widget link
 * @attribute link-target | -- | _blank | target for widget link
 * @attribute link-rel | -- | -- | target for widget link
 * @attribute meta-font-size | -- | -- | size of widget meta text
 * @attribute meta-margin-bottom | 1.5rem | -- | margin below widget meta text
 * @attribute meta-text | -- | Training | widget meta text
 * @attribute show-disciplines | true | false | show course disciplines
 * @attribute show-duration | true | -- | show course duration
 * @attribute show-format | true | -- | show course format
 * @attribute show-level | true | -- | show course level
 * @attribute show-price | false | -- | show course price
 * @attribute show-tags | false | true | show auto-tags
 * @attribute stylesheet | -- | -- | inject css into inner stylesheet
 * @attribute tags | -- | Alternative Fuels, Carbon Capture, Climate Change Risk, Energy Storage, Hydrogen, Greenhouse Gas, Global Warming, Net-Zero, Renewables, Solar Power, Wind Power | comma-separated string of tags
 */
class WidgetCoursesGrid extends HTMLElement {

// reference to class itself
get c() { return WidgetCoursesGrid };

// ATTRIBUTES
/** @returns { { [key:string]: string | null } } */
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
	"heading-line-height": "1.25",
	"heading-margin-bottom": "1.5rem",
	"heading-text": "",
	"icons": '[{"type":"Course","iconUrl":"/icons/course.svg"},{"type":"Module","iconUrl":"/icons/module.svg"}]',
	"link-url": "",
	"link-label": "",
	"link-target": "",
	"link-rel": "",
	"meta-font-size": ".85rem",
	"meta-margin-bottom": "1.25rem",
	"meta-text": "",
	"stylesheet": "",
	"show-disciplines": "true",
	"show-format": "true",
	"show-level": "true",
	"show-price": "false",
	"show-tags": "false",
	"tags": "",
};
return values;
}

/** @param {Course} course */
getIcon(course) {
	const courseType = course?.type ?? 'Course';
	/** @typedef {{type:string, iconUrl: string}} Icon */
	const /** @type {Icon[]} */ icons  =  JSON.parse(this.attValue('icons') ?? "[]");
	const def = '';
	const getIconUrl = () => icons.find(icon => icon.type === courseType)?.iconUrl ?? def;
	const buildIcon = () => getIconUrl() ? `<img class="icon" src="${getIconUrl()}" loading="lazy"/>` : ''
	return buildIcon();
}

/** @param {Course} course */
getTags(course) {
	/** @type {string[]} */
	const tags = this.attValue('tags').split(',').map(/** @param {string} tag */ tag => tag.trim());
	const text = course?.title + ' ' + course?.disciplines?.join(' ');
	const result = tags.filter(/** @param {string} tag */ tag => text.toLowerCase().includes(tag.toLowerCase()));
	return result;
}

// HTML BUILDERS
/**  @param {Course} course */
buildTile(course) {
	const icon = this.getIcon(course) ? this.getIcon(course) : '';
	const tags = this.getTags(course);
	const { disciplines, duration, formats, level, price, linkRel, linkTarget, linkUrl , title, type} = course;
	const showDisciplines = this.attValue('show-disciplines') != "false";
	const showDuration = this.attValue('show-duration') != "false";
	const showTags = this.attValue('show-tags') != "false";
	const showPrice = this.attValue('show-price') != "false";
	const html = ComponentUtils.stringIfValue;
	return `
	<div class="course-outer">
		<a class="course" ${linkTarget ? `target="${linkTarget}"` : 'target="_self"'} ${linkRel ? `rel="${linkRel}"` : ''} href="${linkUrl}" title="go to course page">
			${html(type, `<div class="type-container"><div class="type-icon">${icon}</div><div class="type">${type}</div></div>`)}
			${html(title, `<h3 class="title" >${title?.replace('and','&')}</h3>`)}
			${html(formats, `<div class="meta-row"><div class="meta label">Format:</div><div class="meta formats">${formats?.join(', ')}</div></div>`)}
			${html(level, `<div class="meta-row"><div class="meta label">Level:</div><div class="meta level">${level}</div></div>`)}
			${html(disciplines, `<div class="meta-row"><div class="meta label">Discipline:</div><div class="meta disciplines">${disciplines?.join(', ')}</div></div>`, showDisciplines)}
			${html(duration, `<div class="meta-row"><div class="meta label">Duration:</div><div class="meta duration">${duration}</div></div>`, showDuration)}
			${html(tags, `<div class="tags meta-row">${tags.map(tag => `<div class="tag">${tag}</div>`).join('')}</div>`, showTags)}
			${html(price, `<div class="meta price${price}</div>`, showPrice)}
			<div class="link-button">Learn More</div>
		</a>
	</div>`
}

buildGridHTML() {
	let result = '';
	const data = JSON.parse(this.attValue('courses-data-json') ?? "[]");
	data.forEach(/** @param { Course } course */ course => result += this.buildTile(course));
	return result ? result : '';
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}


// ELEMENTS
get els() {

const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
const html = ComponentUtils.stringIfValue;
const stylesheet = this.attValue('stylesheet');
  return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div id="container" style="${cssVars}">
		<div id="container-inner">
			${html('meta-text', `<div id="meta" style="">${this.attValue('meta-text')}</div>`)}
			<div id="heading-row">
				${html('heading-text',`<h2 id="heading">${this.attValue('heading-text')}</h2>`)}
				${html('link-url', `<a href="${this.attValue('link-url')}" id="link">${this.attValue('link-label')}</a>`)}
			</div>
			${html('body-text', `<p id="text">${this.attValue('body-text')}</p>`)}
			<div id="grid">${this.buildGridHTML()}</div>
		</div>
</div>`.trim();
}

// STYLES
static get styles() {
	const p = ComponentUtils.pageXPadding;
  return `
	${ComponentUtils.preflight}
  <style id="base">
	#container {
		background-color: var(--color-background);
		color: var(--color-primary);
		display:grid;
		align-items:start;
		padding-block:64px 96px;
		max-width:100%;
	}
	@media (min-width: 420px) { #container { padding-block:64px 96px; }}
	@media (min-width: 1024px) { #container { padding-block:48px 76px; }}
	@media (min-width: 1280px) { #container { padding-block:64px 96px; }}
	${ComponentUtils.paddingXStyles()}
	#meta {
		color: var(--color-accent, currentColor);
		font-size: var(--font-size, .85rem);
		margin-bottom: var(--margin-bottom, 1.5rem);
		opacity:1;
		text-transform:uppercase;
	}
	#heading-row:empty { display: none; }
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
	.course {
		background-color: var(--card-background-color, white);
		border: solid .5px color-mix(in srgb, var(--color-primary, lightblue) 30%, transparent);
		border-radius: var(--card-border-radius, .35rem);
		box-shadow: var(--card-box-shadow, none);
		display:block;
		min-height: var(--card-min-height, auto);
		overflow:visible;
		padding: var(--card-padding, 1rem);
		position: relative;
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
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
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
	.course .tags {
		position:absolute;
		left:1rem;
		bottom:1rem;
	}
	.course .tag {
		border: solid 1px var(--color-primary);
		border-radius:.35rem;
		font-size: .75rem;
		font-style: italic;
		font-weight: 500;
		margin-right:.5em;
		padding: .25em .25em;
		background-color: color-mix(in srgb, var(--color-primary) 5%, transparent);
		/*color: white;*/
	}
	.course .link-button {
		background-color: var(--color-primary);
		border: solid 1px var(--color-primary);
		border-radius: .35em;
		bottom: 2rem;
		color: white;
		font-size:.8rem;
		padding: .4rem .85rem;
		position:absolute;
		pointer-events:none;
		transition:opacity .2s ease-in-out;
		right: 2rem;
	}
	.course:hover .link-button {
		pointer-events:auto;
	}
	@media (min-width: 640px) {
		.course .link-button {
			opacity: 0;
		}
		.course:hover .link-button {
			opacity:1;
		}
		.course:hover .tags {
			opacity:0;
		}
	}
</style>`.trim();
}
// TEMPLATE
get template() {
  const template = document.createElement("template");
  template.innerHTML = `${this.c.styles}${this.els}`.trim();
  return template;
}

// CONSTRUCTOR
constructor() {
	super();
	this.attachShadow({ mode: "open" });
}

// CONNECTED CALLBACK
connectedCallback() {
	// append the template content to the shadow DOM
	this.shadowRoot?.appendChild(this.template.content.cloneNode(true))
}

}

customElements.define("widget-courses-grid", WidgetCoursesGrid);
export default WidgetCoursesGrid;


