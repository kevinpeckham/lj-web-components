/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://lj-cdn.dev/web-components/scrolling-stat} */

/**
 * @module ComponentUtils
 * @published 2024-02-09
 * @private
 */

/** @typedef {string} S */
/** @typedef {string | string[] | undefined} V */
/** @typedef {{[key:string]: string; min:string, max:string }} BPMapDatum */
export const ComponentUtils = {

	breakpoints: ["2xl", "xl", "lg", "md", "sm", "xs", "xxs"],
	/** @type {{[key:string]: BPMapDatum;}} */
	breakpointMap: {
		"2xl": {min: "1440px", max: "9999px"},
		"xl": {min: "1280px", max: "1439px"},
		"lg": {min: "1024px", max: "1279px"},
		"md": {min: "768px", max: "1023px"},
		"sm": {min: "640px", max: "767px"},
		"xs": {min: "420px", max: "639px"},
		"xxs": {min: "0", max: "419px"
	}},
	camelToKebab: /** @param {S} s */ (s) => s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(),
	nonCssAttKeywords: ["data", "link", "image", "show", "stylesheet", "tags", "text","value"],
	cssAtts: /** @param {*} atts */ (atts) => Object.keys(atts).filter((attr) => ComponentUtils.nonCssAttKeywords.every((kw) => !attr.includes(kw))),
	cssVars: /** @param {*} atts, @param {*} xt */ (atts, xt) => ComponentUtils.cssAtts(atts).map((att) => `--${att}: ${xt.attValue(att)};`).join('\n'),
	getElAttributesById: ( /** @type {*} xt */ xt, /** @type {S} */ id) => Object.keys(xt.attributes).filter((attr) => attr.includes(`${id}-`)),
	getIds: /** @param {S} s */ (s)=> [...s.matchAll(/id="([^"]+)"/g)].map((m) => m[1]),
	hasValue: /** @param {V} val */ (val) => val && (val[0]) ? true : false,
	stringIfValue: ( /** @type {V} val */ val, /** @type {S} string */ string, /** @type {boolean} condition */
	condition) => ComponentUtils.hasValue(val) && (condition || condition === undefined) ? string : '',
	kebabToCamel: /** @param {S} s */ (s) => s.replace(/-(\w)/ig, (g) => g[1].toUpperCase()),
	/** @type {{[key:string]: string}} */
	pageXPadding:  {"2xl": "6rem","xl": "5rem","lg": "4rem","md": "3rem","sm": "2.5rem","xs": "1rem","xxs": ".75rem"},
	titleCase: /** @param {S} s */ (s) => s.replace(/\b\w/g, (l) => l.toUpperCase()),


	paddingXStyles() {
		const selector = "#container, .container";
		const media = (/** @type {S} */ bp) => `@media (min-width: ${ComponentUtils.breakpointMap[bp].min})`
		const rule = (/** @type {S} */ bp) => `padding-inline:${ComponentUtils.pageXPadding[bp]};`
		const /** @type {string[]} */ bps =  ['xs','sm','md','lg','xl','2xl']
		const xxs = `${ selector } { padding-inline:${this.pageXPadding.xxs}; }`
		const styles = xxs + ' ' + bps.map((bp) => `${media(bp)} { ${selector} { ${rule(bp)} }}`).join(' ');
		return styles
	},

	/** @param {string} [selector] */
	widgetPaddingStyles(selector) {
		selector = selector ?? "#container";
		return `
		${selector} {
			padding:64px ${this.pageXPadding.xxs} 96px;
		}
		@media (min-width: 420px) {
			${selector} {
				padding:64px ${this.pageXPadding.xs} 96px;
			}
		}
		@media (min-width: 640px) {
			${selector} {
				padding:64px 24px 96px;
			}
		}
		@media (min-width: 760px) {
			${selector} {
				padding:64px ${this.pageXPadding.md} 96px;
			}
		}
		@media (min-width: 1024px) {
			${selector} {
				padding:48px ${this.pageXPadding.lg} 76px;
			}
		}
		@media (min-width: 1280px) {
			${selector} {
				padding:64px ${this.pageXPadding.xl} 96px;
			}
		}
		@media (min-width: 1536px) {
			${selector} {
				padding:64px ${this.pageXPadding['2xl']} 96px;
			}
		}`
	},
	preflight: `<style id="preflight">*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}::before,::after{--tw-content:""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:theme("fontFamily.sans",ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:theme("fontFamily.mono",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:theme("colors.gray.400",#9ca3af)}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}</style>`,

  /**
   * @param {*} clazz
   * @param {*} context
   * @param {string} id
   * */
  updateElAttributes(clazz, context, id) {

    // get the element
    /** @type { (HTMLElement | HTMLImageElement | HTMLAnchorElement) } el */
    const el = context.refs[id];

    // get all attributes for an el by id "[id]-" e.g. for #image -> "image-src"
    /** @type {string[]} attrs */
    // const attrs = clazz.observedAttributes.filter((/** @type {string} attr */ attr) => attr.includes(`${id}-`));
		const attrs = this.getElAttributesById(clazz, id);

    // iterate over the attributes
    attrs.forEach((attr) => {
        // get the key e.g. "src"
        const key = attr.split("-")[1] ?? "";

        // get camelCase version of att e.g. image-src -> imageSrc
        const camel = this.kebabToCamel(attr);

				// get the default value of the attribute
				const defaultValue = clazz.attributes[attr];

        // get the possibly new value of the attribute
        const newValue = context[camel] ?? defaultValue;

        // get the old value of the attribute
        const oldValue = (key === "textContent") ? el?.textContent : el?.getAttribute(key);

				const wasUpdated = (oldValue !== newValue);
        // set the attribute if it is a content attribute
        if ((key === "textContent") && wasUpdated) el.textContent = context[camel]
				else if (key && wasUpdated) el?.setAttribute(key, context[camel] );
    });

  },
	/** @param {*} cl * @param {*} xt * @param {string[]} ids */
  updateManyElAttributes(cl, xt, ids) {
		ids.forEach((id) => {

			this.updateElAttributes(cl, xt, id)
		})
},
	/**
   * @param {*} clazz
   * @param {*} context
   * */
	getFontAttributes(clazz, context) {
		return Object.keys(clazz.attributes).filter((attr) => {return attr.includes("font-") || attr.includes("text-") || attr.includes("line-") || attr.includes("letter-")});
	},
		/**
   * @param {*} clazz
   * @param {*} context
   * */
	updateFontAttributes(clazz, context) {
		const fontAttrs = this.getFontAttributes(clazz, context);

		fontAttrs.forEach((attr) => {
			let key = "font";
			if (attr.includes("text-")) key = "text";
			if (attr.includes("line-")) key = "line";
			if (attr.includes("letter-")) key = "letter";
			const prop = attr.split("-")[1] ?? "";
			const size = attr.split("-")[2] ?? "";
			const camel = this.kebabToCamel(attr);
			const defaultValue = clazz.attributes[attr];
			const newValue = context[camel] ?? defaultValue;
			const cssVariable = `--${key}-${prop}${size ? `-${size}` : ""}`;
			const oldValue = context.refs.container.style.getPropertyValue(`$cssVariable`);
			if (newValue !== oldValue || oldValue === null) {
				context.refs.container.style.setProperty(`${cssVariable}`, newValue);
			};
		});
	},
	/**
   * @param {*} clazz
   * @param {*} context
   * */
	getColorAttributes(clazz, context) {
		return Object.keys(clazz.attributes).filter((attr) => attr.includes("color-"));
	},
		/**
   * @param {*} clazz
   * @param {*} context
   * */
	updateColorAttributes(clazz, context) {
		const colorAttrs = this.getColorAttributes(clazz, context);

		colorAttrs.forEach((attr) => {
			const key = attr.split("-")[1] ?? "";
			const camel = this.kebabToCamel(attr);
			const defaultValue = clazz.attributes[attr];
			const newValue = context[camel] ?? defaultValue;
			const oldValue = context.refs.container.style.getPropertyValue(`--color-${key}`);
			if (newValue !== oldValue || oldValue === null) {
				context.refs.container.style.setProperty(`--color-${key}`, newValue);
			};
		});
	},
	/**
   * @param {*} clazz
   * @param {*} context
   * */
	getSizeAttributes(clazz, context) {
		return Object.keys(clazz.attributes).filter((attr) => attr.includes("size-") && !attr.includes("font-"));
	},
	/**
   * @param {*} clazz
   * @param {*} context
   * */
	updateSizeAttributes(clazz, context) {
		const attrs = this.getSizeAttributes(clazz, context);

		attrs.forEach((attr) => {
			const key = attr.split("-")[1] ?? "";
			const camel = this.kebabToCamel(attr);
			const defaultValue = clazz.attributes[attr];
			const newValue = context[camel] ?? defaultValue;
			const oldValue = context.refs.container.style.getPropertyValue(`--size-${key}`);
			if (newValue !== oldValue || oldValue === null) {
				context.refs.container.style.setProperty(`--size-${key}`, newValue);
			};
		});
	},
  /**
	 * Returns an object of references to elements in the shadow root
   * @param {*} clazz
   * @param {*} context
   * */
  getRefs(clazz, context) {
		// ids method is typicall static, but it can be an instance method
		const ids = (clazz?.ids?.length > 0) ? clazz.ids : context?.ids ?? [];
    const refs = /** @type { { [key:string]: HTMLElement} } */ (
      ids.reduce(
        /**
         * @param {*} acc
         * @param {string} id
         * @returns
         */
        (acc, id) => ({
          ...acc,
          [id]: /** @type {HTMLElement} */ (
            context.shadowRoot?.getElementById(id)
          ),
        }),
        {},
      )
    );
		// if there is no container, then lookup via ".container" class
		if (!refs.container) { refs.container = context.shadowRoot?.querySelector(".container")}
		return refs;
  },
  /**
   * Create getters for observed attributes
   * @param {*} clazz
   * @param {*} context
   * */
  createOAGS(clazz, context) { return this.createGetters(clazz, context) },
	 /**
   * Create getters for observed attributes
   * @param {*} clazz
   * @param {*} context
   * */
	createGetters(clazz, context) {
		for (let attr of Object.keys(clazz.attributes)) {
			const def = clazz.attributes[attr] ?? "";
			const kebab = attr.includes("-") ? attr : this.camelToKebab(attr);
			const camel =  attr.includes("-") ? this.kebabToCamel(attr) : attr;

      Object.defineProperty(context, camel, {
        get: function () {
          return context.getAttribute(kebab) ?? def;
        }
      });
    }
	}
}


export default ComponentUtils;