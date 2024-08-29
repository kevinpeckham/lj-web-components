!function(){

	document.addEventListener('DOMContentLoaded', function() {
		customStyling();
	});

	function customStyling(){let e="",t=function t(){let n=document.body.className.split(" "),a=["page-template-page-dbe-home","page-template-page-dbe"].find(e=>n.includes(e)),r=n.find(e=>e.includes("page-id-"));return(e=r?r.replace("page-id-",""):"",a)?(document.body.className=`${a} ${r}`,document.body.dataset.pageId=e,a):""}();if(!t)return;let n=document.documentElement.classList.contains("lj");if(n)return;(function e(){let t=document.getElementById("csp"),n="<meta id=\"csp\" http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; img-src https://res.cloudinary.com; style-src https://lj.cdn.dev https://fonts.googleapis.com; script-src https://lj.cdn.dev https://plausible.io; font-src https://fonts.gstatic.com; connect-src 'self'; frame-src 'self'; child-src 'self'; object-src 'none'; form-action 'self'; base-uri 'self'; block-all-mixed-content; upgrade-insecure-requests;\">";t||document.head.insertAdjacentHTML("afterbegin",n),t&&(t.outerHTML=n)})(),function t(){let n=document.body.className,a=document.createElement("body");a.dataset.id=e,a.className=n;let r=document.createElement("div");r.id="body-container",r.className="test",a.appendChild(r),document.body=a}();let a=document.getElementById("body-container");(function e(){let t=document.head.querySelectorAll("script");t.forEach(e=>e.remove())})(),function e(){let t=Array.from(document.head.querySelectorAll("[rel=stylesheet]"));t.forEach(e=>{e.href.includes("cdn.lj.dev")||e.remove()});let n=Array.from(document.querySelectorAll("style"));n.forEach(e=>{e.hasAttribute("data-vite-dev-id")||e.remove()})}(),function e(){let t=document.querySelector("template#template-alert"),n=t?.content?t.content.textContent??"":"",r=n?.replace(/More/,"").trim()??"",l=`
		<div id="alert-bar" class="page-x-padding"><a href="/rider-alert" title="learn more"><span class="alert-content">${r}...</span> <span class="alert-cta">Learn More</span></a></div>`;a?.insertAdjacentHTML("beforeend",l)}(),function e(){if(!a)return;let t=document.querySelector("template#template-site-nav"),n=t?.content;if(!n)return"";let r=document.createElement("header");r.id="site-header",r.append(n.cloneNode(!0)),a.insertAdjacentHTML("beforeend",r.outerHTML)}(),function e(){let t=document.createElement("page");t.id="page",a?.insertAdjacentElement("beforeend",t)}(),function t(){let n=document.getElementById("page");if(!n)return"";let a=document.querySelector("template#template-sidebar-nav"),r=a?.content,l=Array.from(r?.children??[]),i=l.map(t=>{if(!t||!(t instanceof HTMLDivElement))return"";let n=t.firstElementChild instanceof HTMLAnchorElement?t.firstElementChild:null;if(!n)return"";let a=n.parentElement?.className.split(" "),r=a?.find(e=>e.includes("page-item-"));return n.className="sidebar-nav-item",r?.includes(e)&&(n.className+=" active"),n.title="go to "+n.textContent,n.textContent=n?.textContent?.replace(/([a-z])\/([a-z])/i,"$1 / $2")?.replace("and","&")?.replace("Resource Links","Resources")??"",n.outerHTML}).join(""),c=`
	<nav class="page-x-padding main-y-padding" id="sidebar-nav">
		<a href="/dbe-sbe-programs/" class="sidebar-nav-heading">DBE & SBE Programs</a>
		${i}
	</nav>`;n?.insertAdjacentHTML("afterbegin",c)}(),function e(){let t=document.getElementById("page");if(!t)return;let n=document.createElement("main");n.id="main",n.className="page-x-padding main-y-padding";let a=function e(){let t=document.body.className,n=t.includes("page-template-page-dbe")&&!t.includes("page-template-page-dbe-home")?"DBE & SBE Programs":"";return n}(),r=function e(){let t=document.querySelector("template#template-page-title"),n=t?.content??"",a=n?n.textContent??"":"";return a}(),l=document.querySelector("template#template-main"),i=l?.content,c=document.createElement("div");c.append(i?.cloneNode(!0)??""),c?.insertAdjacentHTML("afterbegin",`<h1>${r}</h1>`),a&&c?.insertAdjacentHTML("afterbegin",`<a id="breadcrumb" href="/dbe-sbe-programs" title="back to DBE & SBE Programs landing page" >${a}</a>`);let s=Array.from(c?.children??[]);s.forEach(e=>{if(e.removeAttribute("class"),e.removeAttribute("style"),e.getAttribute("target")?.includes("_blank")&&e.setAttribute("target","_self"),"noopener"!==e.getAttribute("rel")||e.getAttribute("href")?.includes("ccrta.org")||e.getAttribute("href")?.includes("ccrta.pimcore.dev")||e.setAttribute("rel","external"),e.getAttribute("href")?.includes("http://")){let t=e.getAttribute("href")??"";e.setAttribute("href",t.replace("http://","https://"))}"P"===e.tagName&&""===e.textContent&&e.remove(),"DIV"===e.tagName&&""===e.textContent?.trim()&&e.remove()});let o=c?.querySelector(".dbe-menu");o?.remove();let d=c?.innerHTML;n?.insertAdjacentHTML("afterbegin",d??""),t?.appendChild(n)}(),function e(){if(!t.includes("page-template-page-dbe-home"))return"";let n=document.getElementById("sidebar-nav"),a=n?.outerHTML??"";if(!a)return"";let r=document.getElementById("main");if(!r)return"";let l=a.replaceAll(/sidebar-nav/gi,"landing-nav"),i=document.createElement("div");i.innerHTML=l;let c=i.firstElementChild;c?.removeAttribute("class");let s=document.createElement("div");s.className="landing-nav-heading",s.textContent="DBE & SBE Topics",c?.insertBefore(s,c?.firstElementChild),c?.querySelector(".landing-nav-heading")?.remove(),r?.insertAdjacentHTML("beforeend",c?.outerHTML??"")}(),function e(){let t=document.querySelector("template#template-footer"),n=t?.content;if(!n)return;let a=document.createElement("footer");a.id="footer",a.append(n?.cloneNode(!0)),document.body.appendChild(a)}();let r=document.documentElement;r.classList.add("lj")}

}();

