// @ts-expect-error - type defs not available
import { ComponentUtils } from "/e/wc/component-utils@0.1.1.min.js";

/** @copyright 2024 Lightning Jar - "TextTopic" web component - License MIT */
/** @author Kevin Peckham */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://cdn.lj.dev/web-components/text-topic} */

/**
 * Text Topic Web Component
 * @name TextTopic
 * @class
 * @published 2024-03-14
 * @requires ComponentUtils
 * @extends HTMLElement
 * @classdesc Defines web component that renders a section of plain body text, with an optional heading and and optional link.
 * @attribute body-text | -- | <p>PetroSkills expands under The Competency Alliance to Bridge the Learning and Development Gap Between Petroleum and the Energy TransitionThe energy industry is facing major challenges, such as the need for clean energy, new business models, emerging technologies, and the reallocation of oil and gas professionals to low carbon or renewable energy. These challenges are driving the requirement for new skills and competencies. To better serve the industry and its customers, PetroSkills is expanding into The Competency Alliance, building on the methodology we used to become the Oil & Gas industry’s leading alliance and expanding it to the Net Zero and Renewable sectors.</p><p>The Competency Alliance is grouped to cover the three major energy sectors. As it has done for over 50 years, PetroSkills covers Upstream, Midstream, and Downstream oil and gas. NetZeroSkills includes Greenhouse Gas Management, Carbon Capture/Sequestration, and Hydrogen. RenewableSkills handles the Wind and Geothermal sectors</p> | accepts a string of HTML content
 * @attribute color-primary | currentColor | white | color of the text
 * @attribute color-secondary | currentColor | darkblue | color of the link text on hover
 * @attribute font-family | inherit | -- | font family for the text
 * @attribute heading-text | -- | The Energy Industry Faces New Challenges | text for the heading
 * @attribute link-padding | .75rem 1.33rem | -- | padding around the text in the button button
 * @attribute link-rel | -- | external | selector for the target element
 * @attribute link-text | -- | Learn More | button text
 * @attribute link-target | -- | -- | button link target
 * @attribute link-title | -- | -- | selector for the target element
 * @attribute link-url | -- | https://cdn.lj.dev/web-components | text appears on hover
 * @attribute transition-duration | .3s| .4s | transition duration for hover effect on link
 * @attribute transition-property | background-color, color, opacity | -- | transition property for hover effect on link
 * @attribute stylesheet | -- | -- | injects css into custom stylesheet
 */
class TextTopic extends HTMLElement {

get c() { return TextTopic };


// ATTRIBUTES
/** @returns { { [key:string]: string } }  */
static get attributes() {
	const values = {
		"body-text": "",
		"color-primary": "currentColor",
		"color-secondary": "darkblue",
		"font-family": "inherit",
		"heading-text": "",
		"link-padding": ".55rem 1.2rem",
		"link-rel": "external",
		"link-text": "",
		"link-target": "",
		"link-title": "",
		"link-url": "",
		"transition-duration": ".15s",
		"transition-property": "background-color, color, opacity",
		"stylesheet": ""
	};
return values;
}

	attValue(/** @type {string} att */ att) {
		return this.getAttribute(att) ?? this.c.attributes[att] ?? "";
	}

// ELEMENTS MASTER LAYOUT GETTER
get els() {
	const cssVars = ComponentUtils.cssVars(this.c.attributes, this);
	const html = ComponentUtils.stringIfValue;
	const stylesheet = this.attValue('stylesheet');
	const heading = this.attValue('heading-text');
	const body = this.attValue('body-text');
	const link = this.attValue('link-text');
	const linkUrl = this.attValue('link-url');
	const linkRel = this.attValue('link-rel');
	const linkTarget = this.attValue('link-target');
	const linkTitle = this.attValue('link-title');
	return `
${html(stylesheet, `<style id="stylesheet">${stylesheet}</style>`)}
<div id="container" style="${cssVars}">
	${html(heading, `<h3 id="heading">${heading}</h3>`)}
	${html(body, `<div id="text">${body}</div>`)}
	${html(link, `<a id="link" href="${linkUrl}"
		${html(linkTarget, `target="${linkTarget}" `)}
		${html(linkRel, `rel="${linkRel}" `)}
		${html(linkTitle, `title="${linkTitle}" `)}
		>${link}</a>`, linkUrl)}
</div>`.trim();
}

// STYLES
get styles() {
	return `
	${ComponentUtils.preflight}
	<style id="base">
	*:empty {display:none;}
	#container {
		color: var(--color-primary, currentColor);
		font-size:1rem;
		max-width:576px;
		text-decoration:none;
	}
	#heading {
		font-size:1.05rem;
		font-weight: 700;
		margin-bottom:1rem;
		opacity:.95;
	}
	#text {
		line-height:1.6;
		opacity:0.9;
	}
	#text p {
		margin-bottom:1rem;
	}
	#link {
		color: var(--color-primary, currentColor);
		display:inline-block;
		font-size: .8rem;
		border: solid 1px var(--color-primary, currentColor);
		border-radius:.25rem;
		margin-bottom:.5rem;
		padding:.35rem .85rem;
		transition:background-color .15s ease;
	}
	#link:hover {
		border-color: var(--color-secondary, lightblue);
		background-color: var(--color-primary, lightblue);
		color: var(--color-secondary, currentColor);
	}
</style>`.trim();
}

// TEMPLATE
get template() {
	const template = document.createElement("template");
	template.innerHTML = `${this.styles}${this.els}`.trim();
	return template;
}

// CONSTRUCTOR
constructor() { super(); this.attachShadow({ mode: "open" });}

// CONNECTED CALLBACK
connectedCallback() { this.shadowRoot?.appendChild(this.template.content.cloneNode(true))}
}

customElements.define("text-topic", TextTopic);
export default TextTopic;
