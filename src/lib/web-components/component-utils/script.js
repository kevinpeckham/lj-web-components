export class ComponentUtils {
  /** @param {string} str */
  static kebabToCamel(str) { return str.replace(/-([a-z])/ig, (g) => g[1].toUpperCase())}
  /** @param {string} str */
  static getIds(str) {
    return [...str.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
  }
  /**
   * @param {*} clazz
   * @param {*} context
   * @param {string} id
   * */
  static updateElAttributes(clazz, context, id) {

    // get the element
    /** @type { (HTMLElement | HTMLImageElement | HTMLAnchorElement) } el */
    const el = context.refs[id];

    // get all attributes that start with "[id]-" e.g. for #image -> "image-src"
    /** @type {string[]} attrs */
    const attrs = clazz.observedAttributes.filter((/** @type {string} attr */ attr) => attr.includes(`${id}-`));

    // iterate over the attributes
    attrs.forEach((attr) => {
        // get the key e.g. "src"
        const key = attr.split("-")[1] ?? "";

        // get camelCase version of att image-src -> imageSrc
        const camel = this.kebabToCamel(attr);

        // get the possibly new value of the attribute
        const newValue = context[camel];

        // get the old value of the attribute
        const oldValue = (key === "textContent") ? el?.textContent : el?.getAttribute(key);

        // set the attribute if it is a content attribute
        if ((key === "textContent") && (oldValue !== newValue)) el.textContent = context[camel]
        else if (key && (oldValue !== newValue)) el?.setAttribute(key, context[camel] );
    });

  }
  /**
   * @param {*} clazz
   * @param {*} context
   * @param {string[]} ids
   * */
  static updateManyElAttributes(clazz, context, ids) {
    ids.forEach((id) => this.updateElAttributes(clazz, context, id));
  }
  /**
   * @param {*} clazz
   * @param {*} context
   * */
  static getRefs(clazz, context) {
    return /** @type { { [key:string]: HTMLElement} } */ (
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
  }
  /**
   * Create getters and setters for observed attributes
   * @param {*} clazz
   * @param {*} context
   * */
  static createOAGS(clazz, context) {
    for (let attr of clazz.observedAttributes) {
      const def = clazz.getDefault(attr);
      Object.defineProperty(context, this.kebabToCamel(attr), {
        get: function () {
          return context.getAttribute(attr) ?? def;
        },
        set: function (value) {
          if (typeof value === 'string') context.setAttribute(attr, value);
        },
      });
    }
  }
}
export default ComponentUtils;