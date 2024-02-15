/** @copyright 2024 Lightning Jar - "Scrolling Stat" web component - License MIT */
/** @license MIT */
/** @version 0.1.1 */
/** {@link https://lj-cdn.dev/web-components/scrolling-stat} */

/**
 * @module ComponentUtils
 * @published 2024-02-09
 * @private
 */

export const ComponentUtils = {
	/** @typedef {string} S */
	breakpoints: ["2xl", "xl", "lg", "md", "sm", "xs", "xxs"],
	breakpointMap: {
		"2xl": {min: "1440px", max: "9999px"},
		"xl": {min: "1280px", max: "1439px"},
		"lg": {min: "1024px", max: "1279px"},
		"md": {min: "768px", max: "1023px"},
		"sm": {min: "640px", max: "767px"},
		"xs": {min: "420px", max: "639px"},
		"xxs": {min: "0", max: "419px"
	}},

	titleCase: /** @param {S} s */ (s) => s.replace(/\b\w/g, (l) => l.toUpperCase()),

	/**
	 * @name kebabToCamel
	 * @method
	 * @memberof ComponentUtils
	 * @param {S} s
	 * @returns {S}
	 * */
  kebabToCamel: (s) => s.replace(/-(\w)/ig, (g) => g[1].toUpperCase()),
  getIds: /** @param {S} s */ (s)=> [...s.matchAll(/id="([^"]+)"/g)].map((m) => m[1]),
	/** @param {*} xt * @param {S} id */
	getElAttributesById: (xt, id) => Object.keys(xt.attributes).filter((attr) => attr.includes(`${id}-`)),
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

        // get camelCase version of att image-src -> imageSrc
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
    const refs = /** @type { { [key:string]: HTMLElement} } */ (
      clazz.ids.reduce(
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
   * Create getters and setters for observed attributes
   * @param {*} clazz
   * @param {*} context
   * */
  createOAGS(clazz, context) {
    for (let attr of clazz.observedAttributes) {
      const def = clazz.getDefault(attr);
      Object.defineProperty(context, this.kebabToCamel(attr), {
        get: function () {
          return context.getAttribute(attr) ?? def;
        },
        // set: function (value) {
        //   if (typeof value === 'string' && !attr.includes('data')) context.setAttribute(attr, value)
        // },
      });
    }
  }
}


export default ComponentUtils;