// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "edge",
};

const min: string = `class ScrollingStat extends HTMLElement{d=parseInt(this.getAttribute("d")??"600");o=!1;n=document.createElement("span");s=0;static get observedAttributes(){return["d","number","unit","text"]}constructor(){super(),this.connectedCallback=this.connectedCallback.bind(this),this.tw=this.tw.bind(this),this.oc=this.oc.bind(this)}connectedCallback(){const t=this.attachShadow({mode:"open"}),n=document.createElement("span"),e=document.createElement("span"),i=document.createElement("span"),s=document.createElement("style");n.setAttribute("id","w"),this.n.textContent="0",i.textContent=this.getAttribute("text")??"",e.textContent=this.getAttribute("unit")??"";s.textContent="\n\t\t#w {\n\t\t\talign-items:baseline;\n\t\t\tbackground:rgb(255 255 255 / .05);\n\t\t\tborder-radius:.3em;\n\t\t\tdisplay:grid;\n\t\t\tfont-weight:800;\n\t\t\tgap:.3em;\n\t\t\tgrid: auto-flow / auto 1fr;\n\t\t\tline-height:1;\n\t\t\toutline:1px solid currentColor;\n\t\t\tpadding:1.5em;\n\t\t\tmax-width:12em;\n\t\t}\n\t\t#w span:nth-child(1) {\n\t\t\tfont-size:2.75em;\n\t\t}\n\t\t#w span:nth-child(2) {\n\t\t\tfont-size:1.9em;\n\t\t}\n\t\t#w span:nth-child(3) {\n\t\t\tfont-size:.9em;\n\t\t\tfont-weight:400;\n\t\t\tfont-style:italic;\n\t\t\tgrid-column:1/span 2;\n\t\t\tline-height:1.3;\n\t\t\topacity:.9;\n\t\t}",t.replaceChildren(s,n),n.replaceChildren(this.n,e,i);const o=new IntersectionObserver(this.oc,{rootMargin:"0%",threshold:.5});n&&o.observe(n)}oc(t){const n=t[0].isIntersecting;n!=this.o&&(this.s=0,this.tw(),this.o=n)}tw(){this.s||(this.s=Date.now());const t=this.getAttribute("number")??"99",n=t.split(".")[1]?.length??0,e=Math.min((Date.now()-this.s)/this.d,1);this.n.textContent=(Number(t)*e).toFixed(n),e<1?window.requestAnimationFrame((()=>this.tw())):this.n.textContent=t}}customElements.define("scrolling-stat",ScrollingStat);`;

import type { RequestHandler } from "./$types";

// handle request
export const GET: RequestHandler = async () => {
	const headers: { [key: string]: string } = {
		"Content-Type": "text/javascript",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
		"Referrer-Policy": "strict-origin-when-cross-origin",
	};

	// return response
	return new Response(min, {
		headers,
	});
};
