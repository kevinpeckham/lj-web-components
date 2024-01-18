// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "edge",
};

const scrolling_stat =
	'class ScrollingStat extends HTMLElement{o=!1;n=document.createElement("span");s=0;static get observedAttributes(){return["duration","number_start","number_end","unit","text"]}constructor(){super(),this.connectedCallback=this.connectedCallback.bind(this),this.tw=this.tw.bind(this),this.oc=this.oc.bind(this)}connectedCallback(){const t=this.attachShadow({mode:"open"}),n=document.createElement("span"),e=document.createElement("span"),i=document.createElement("span"),s=document.createElement("style"),o=["text","unit"].map((t=>this.getAttribute(t)||""));this.n.textContent="0",[i.textContent,e.textContent]=o,s.textContent=" #w {align-items:baseline;background:rgb(100%100%100%/5%);border-radius:.3em;display:grid;font-weight:800;gap:.3em;grid:auto-flow/auto 1fr;line-height:1;outline:1px solid;padding:1.5em;max-width:12em}#w span:nth-child(1){font-size:2.75em}#w span:nth-child(2){font-size:1.9em}#w span:nth-child(3){font-size:.9em;font-weight:400;font-style:italic;grid-column:1/span 2;line-height:1.3;opacity:.9}",t.replaceChildren(s,n),n.replaceChildren(this.n,e,i),n.id="w";new IntersectionObserver(this.oc,{rootMargin:"0%",threshold:.5}).observe(n)}oc(t){const n=t[0].isIntersecting;n!=this.o&&(this.s=0,this.tw(),this.o=n)}tw(){this.s||(this.s=Date.now());const t=Math.abs(parseInt(this.getAttribute("duration")||"800")),n=parseFloat(this.getAttribute("number_end")||"99"),e=parseFloat(this.getAttribute("number_start")||(Math.abs(n)>49?0:n>0?99:-99)),i=e+(n-e)*Math.min((Date.now()-this.s)/t,1),s=Math.min((`${n}`.split(".")[1]||"").length,2);this.n.textContent=i.toFixed(s),Date.now()-this.s<t&&n-Number(this.n.textContent)?window.requestAnimationFrame((()=>this.tw())):this.n.textContent=n.toFixed(s)}}customElements.define("scrolling-stat",ScrollingStat);';

const files: { [key: string]: string } = {
	"scrolling-stat.min.js": scrolling_stat,
};

import type { RequestHandler } from "./$types";

// handle request
export const GET: RequestHandler = async ({ params, locals }) => {
	// get slug
	const slug = params.slug;

	// unpack locals
	const { content, utils } = locals;

	// get error function from utils
	const error = utils.error;

	// get file
	const file = files[slug] ? files[slug] : null;

	// throw error if no file
	if (!file) throw error(404, "No file found");

	// set headers
	// note: vercel caching will automatically apply compression + compression headers
	const headers: { [key: string]: string } = {
		"Content-Type": "text/javascript",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
		//"Cache-Control": "no-cache, no-store, must-revalidate",
		"Referrer-Policy": "strict-origin-when-cross-origin",
	};

	// return response
	return new Response(file, {
		headers,
	});
};
