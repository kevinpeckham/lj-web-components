// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

// TYPE
/** @typedef {string | string[] | undefined} Value */
/** @typedef {{[key:string]: Value; "link-label": string | undefined; "link-url": string | undefined; "section-heading": string | undefined; "section-text": string[] | undefined }} SectionDatum */

/** @copyright 2024 Lightning Jar - "Widget Page Main" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/widget-page-main} */

/**
 * Widget Card Grid Web Component
 * @name WidgetPageMain
 * @class
 * @requires ComponentUtils
 * @published 2024-02-09
 * @extends HTMLElement
 * @classdesc A web component for displaying a grid of image tiles.
 *
 * @attribute color-accent | lightblue | rgb(0 184 156 / 100%) | color of the text
 * @attribute color-background | white | #F8FAFC | background color of the widget
 * @attribute color-primary | currentColor | #0A2E7E | color of the text
 * @attribute heading-font-size | 1.25rem | -- | font size of the heading
 * @attribute heading-font-weight | 600 | -- | font weight of the heading
 * @attribute heading-margin-bottom | 1.5rem | -- | margin bottom of the heading
 * @attribute heading-margin-top | 1.5rem | -- | margin top of the heading
 * @attribute heading-text | -- | PetroSkills expands under The Competency Alliance to Bridge the Learning and Development Gap Between Petroleum and the Energy Transition | widget heading text
 * @attribute body-text | -- | Browse our world-class training courses and modules by category. | text of the widget
 * @slot | -- | <div slot="main">[slot=main]</div> | slot for the main content
 * @slot | -- | <div slot="sidebar">[slot=sidebar]</div> | slot for the sidebar content
 * SIDEBAR
 * @attribute include-sidebar | true | -- | include the sidebar
 *
 * DATA
 * @attribute sections-data-json | [] | [{"section-heading":"The Energy Industry Faces New Challenges","section-text":["PetroSkills expands under The Competency Alliance to Bridge the Learning and Development Gap Between Petroleum and the Energy TransitionThe energy industry is facing major challenges, such as the need for clean energy, new business models, emerging technologies, and the reallocation of oil and gas professionals to low carbon or renewable energy. These challenges are driving the requirement for new skills and competencies. To better serve the industry and its customers, PetroSkills is expanding into The Competency Alliance, building on the methodology we used to become the Oil & Gas industry’s leading alliance and expanding it to the Net Zero and Renewable sectors.","The Competency Alliance is grouped to cover the three major energy sectors. As it has done for over 50 years, PetroSkills covers Upstream, Midstream, and Downstream oil and gas. NetZeroSkills includes Greenhouse Gas Management, Carbon Capture/Sequestration, and Hydrogen. RenewableSkills handles the Wind and Geothermal sectors.","Just as PetroSkills does, and will continue to do in oil & gas, The Competency Alliance’s industry-collaboration model is enabling it to become a leading provider of competency-based training and development solutions across multiple sectors of the energy industry. This includes not just traditional training and development, but also digital and online learning, certification and assessment, and data analytics. By offering a wider range of services, including workforce assessment and competency consulting, The Competency Alliance is better equipped to meet the changing needs of the industry and its customers."],"link-url":"https://petroskills.com/training","link-title":"View All Courses"},{"section-heading":"New Energy Sectors","section-text":["Sectors are formed by energy companies coming together to collaborate and build performance-ready professionals. Certain aspects of training are important, but not unique, and Alliance members can leverage external resources to benchmark those learning and development at a lower cost versus each company going it alone. & “The Alliance model has been very successful for over 20 years. We are now leveraging our proven capabilities and processes to develop and deliver high-quality competency management and training solutions to new energy sectors,” says Tony Sperduti, Senior Vice President of Renewables and Net-Zero Energy for The Competency Alliance."]},{"section-heading":"A Wealth of Training Resources","section-text":["The Competency Alliance already has 200+ instructor-led courses and thousands of hours of eLearning based on the Competency Maps that have been developed and vetted through Alliance Member SMEs. Competency Maps for Net Zero and Renewable technology are driving additional content in the Energy Transition sectors."],"link-label":"Get Started","link-url":"/"}] | json data for the body content sections
 *
 * STYLESHEET
 * @attribute card-stylesheet | -- | #container { color:#042373; } | inject css into the inner stylesheet
 * @attribute style | -- | -- | regular inline style on the component

 */
class WidgetPageMain extends HTMLElement {

get c() { return WidgetPageMain };

/** @returns { { [key:string]: string | null } } */
static get attributes() {
const values = {
  "body-text": "",
  "color-accent": "currentColor",
  "color-background": "#0B2E7E",
  "color-primary": "currentColor",
  "heading-font-size": "1.25rem",
  "heading-font-weight": "600",
  "heading-margin-bottom": "1.5rem",
  "heading-margin-top": "1.5rem",
  "heading-text": "",
	"include-sidebar": "true",
  "link-url": "",
  "link-label": "",
  "sections-data-json": '[]',
  "stylesheet": "",
};
return values;
}

static buildSection(/** @type {SectionDatum} */ item) {
	const html = ComponentUtils.stringIfValue;
	const sectionHeading = item?.['section-heading'] ?? '';
	const sectionText = item?.['section-text'] ?? [];
	const linkLabel = item?.['link-label'] ?? '';
	const linkUrl = item?.['link-url'] ?? '';
	return `
		<section class="tile">
			${html(sectionHeading, `<h3 class="section-heading">${sectionHeading}</h3>`)}
			${html(sectionText, sectionText.map((item) => `<p class="section-text">${item}</p>`).join(""))}
			${html(linkLabel, `<a class="section-link" href="${linkUrl}">${linkLabel}</a>`)}
		</section>`
}

// HTML BUILDERS
buildSectionsHTML() {
	const /** @type {SectionDatum[]} */ data = JSON.parse(this.attValue('sections-data-json')) ?? "[]";
  return data.map((item) => this.c.buildSection(item)).join("");
}

attValue(/** @type {string} att */ att) {
	return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
}

// ELEMENTS
get els() {
	const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
	const html = ComponentUtils.stringIfValue;
	const stylesheet = this.attValue('stylesheet');
	const heading = this.attValue('heading-text');
	const sections = this.buildSectionsHTML();
  return `
	${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div id="container" style="${cssVars}">
  <main id="main">
    ${html(heading, `<h2 id="main-heading">${heading}</h2>`)}
    ${html(sections, sections)}
		<slot name="main"></slot>
  </main>
  <aside id="sidebar">
		<slot name="sidebar"></slot>
  </aside>
</div>`.trim();
}

// STYLES
static get styles() {
  return `
  ${ComponentUtils.preflight}
  <style id="base">
  #container {
    align-items:start;
    background-color: var(--color-background, transparent);
    color: var(--color-primary, currentColor);
    display:grid;
    grid-template-columns:	grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 4rem;
    padding:64px 16px 96px;
    width:100%;
  }
  @media (min-width: 640px) {
    #container {
      padding:64px 24px 96px;
    }
  }
  @media (min-width: 1024px) {
    #container {
      column-gap: 4rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding:48px 32px 76px;
    }
  }
  @media (min-width: 1280px) {
    #container {
      padding:64px 80px 96px;
    }
  }
  @media (min-width: 1024px) {
    #main {
      grid-column: span 2 / span 2;
    }
  }
  #main-heading {
    color: var(--color-primary, currentColor);
    font-size: 1.25rem;
    font-weight: var(--heading-font-weight, 600);
    margin-bottom: 2rem;
    max-width: 576px;
  }
  @media (min-width: 640px) {
    #main-heading {
      font-size: 1.5rem;
      margin-bottom: 2rem;
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
    #heading-link:hover {
      background-color:var(--color-accent, currentColor);
      color:var(--color-primary, currentColor);
    }
  }
  #main section {
    margin-bottom: 2rem;
  }
  #main section .section-heading {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    max-width: 576px;
    opacity:.95;
  }
  #main section .section-text {
    color: var(--color-primary, currentColor);
    display:block;
    line-height:1.6;
    max-width:none;
    margin-bottom:1rem;
    opacity:.9;
  }
  @media (min-width: 640px) {
    #main section .section-text {
      padding:0;
      }
    }
  @media (min-width: 768px) {
    #main section .section-text {
      max-width:576px;
      padding:0;
      }
    }
  @media (min-width: 1024px) {
    #main section .section-text {
    max-width:576px;
    }
  }
  @media (min-width: 1280px) {
    #main section .section-text {
      max-width:576px;
      }
    }
  #main section .section-link {
    color: var(--color-primary, currentColor);
    display:inline-block;
    font-size: .8rem;
    border: solid 1px var(--color-primary, currentColor);
    border-radius:.25rem;
    margin-bottom:.5rem;
    padding:.35rem .85rem;
    transition:background-color .15s ease;
    }
  #main section .section-link:hover {
      background-color:var(--color-primary, currentColor);
      color:var(--color-background, currentColor);
  }
</style>`
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

// LIFECYCLE CALLBACKS
connectedCallback() {
  // append the template content to the shadow DOM
  this.shadowRoot?.appendChild(this.template.content.cloneNode(true))
}
}

customElements.define("widget-page-main", WidgetPageMain);
export default WidgetPageMain;


