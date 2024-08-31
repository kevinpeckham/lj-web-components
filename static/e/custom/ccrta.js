!function(){

	document.addEventListener('DOMContentLoaded', function() {
		customStyling();
	});

	function customStyling(){let pageId='';const pageTemplateClass=evaluateBodyClass();if(!pageTemplateClass){return}const hasLJ=document.documentElement.classList.contains('lj');if(hasLJ){return}addCSP();buildNewBody();const bodyContainer=document.getElementById('body-container');scrubScripts();scrubStyles();buildAlertBar();buildSiteNav();buildPage();buildSidebarNav();buildMain();buildLandingPageNav();buildFooter();const html=document.documentElement;html.classList.add('lj');function evaluateBodyClass(){const approvedPageClasses=['page-template-page-dbe-home','page-template-page-dbe'];const bodyClasses=document.body.className.split(' ');const templateClass=approvedPageClasses.find((cls)=>bodyClasses.includes(cls));const pageIdClass=bodyClasses.find((cls)=>cls.includes('page-id-'));pageId=pageIdClass?pageIdClass.replace('page-id-',''):'';if(!templateClass){return ''}document.body.className=`${ templateClass } ${ pageIdClass }`;document.body.dataset.pageId=pageId;return templateClass}function addCSP(){const existingCSP=document.getElementById('csp');const csp=`<meta id="csp" http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://res.cloudinary.com; style-src https://cdn.lj.dev https://fonts.googleapis.com; style-src-elem https://cdn.lj.dev https://fonts.googleapis.com; script-src https://cdn.lj.dev https://plausible.io; style-src-attr 'none'; font-src https://fonts.gstatic.com https://fonts.googleapis.com; connect-src 'self'; frame-src 'self'; child-src 'self'; object-src 'none'; form-action 'self'; base-uri 'self'; block-all-mixed-content; upgrade-insecure-requests;">`;if(!existingCSP){document.head.insertAdjacentHTML('afterbegin',csp)}if(existingCSP){existingCSP.outerHTML=csp}}function scrubScripts(){const headScripts=document.head.querySelectorAll('script');headScripts.forEach((script)=>script.remove())}function scrubStyles(){const headStyleLinks=Array.from(document.head.querySelectorAll('[rel=stylesheet]'));headStyleLinks.forEach((link)=>{if(!link.href.includes('cdn.lj.dev')){link.remove()}});const headStylesElements=Array.from(document.querySelectorAll('style'));headStylesElements.forEach((style)=>{if(!style.hasAttribute('data-vite-dev-id')){style.remove()}})}function buildAlertBar(){const template=document.querySelector('template#template-alert');const content=template?.content?(template.content.textContent??''):'';const alertText=content?.replace(/More/,'').trim()??'';const newAlertBarInnerHTML=`
		<div id="alert-bar" class="page-x-padding"><a href="/rider-alert" title="learn more"><span class="alert-content">${ alertText }...</span> <span class="alert-cta">Learn More</span></a></div>`;bodyContainer?.insertAdjacentHTML('beforeend',newAlertBarInnerHTML)}function buildSiteNav(){if(!bodyContainer){return}const template=document.querySelector('template#template-site-nav');const content=template?.content;if(!content){return ''}const siteNav=document.createElement('header');siteNav.id='site-header';siteNav.append(content.cloneNode(true));bodyContainer.insertAdjacentHTML('beforeend',siteNav.outerHTML)}function buildNewBody(){const bodyClasses=document.body.className;const newBody=document.createElement('body');newBody.dataset.id=pageId;newBody.className=bodyClasses;const newBodyContainer=document.createElement('div');newBodyContainer.id='body-container';newBodyContainer.className='test';newBody.appendChild(newBodyContainer);document.body=newBody}function buildPage(){const page=document.createElement('page');page.id='page';bodyContainer?.insertAdjacentElement('beforeend',page)}function getBreadCrumb(){const bodyClass=document.body.className;const breadcrumb=bodyClass.includes('page-template-page-dbe')&&!bodyClass.includes('page-template-page-dbe-home')?'DBE & SBE Programs':'';return breadcrumb}function getPageTitle(){const titleTemplate=document.querySelector('template#template-page-title');const titleContent=titleTemplate?.content??'';const title=titleContent?(titleContent.textContent??''):'';return title}function buildFooter(){const template=document.querySelector('template#template-footer');const content=template?.content;if(!content){return}const footer=document.createElement('footer');footer.id='footer';footer.append(content?.cloneNode(true));document.body.appendChild(footer)}function buildMain(){const page=document.getElementById('page');if(!page){return}const main=document.createElement('main');main.id='main';main.className='page-x-padding main-y-padding';const breadcrumb=getBreadCrumb();const pageTitle=getPageTitle();const mainTemplate=document.querySelector('template#template-main');const mainContent=mainTemplate?.content;const mainInner=document.createElement('div');mainInner.append(mainContent?.cloneNode(true)??'');mainInner?.insertAdjacentHTML('afterbegin',`<h1>${ pageTitle }</h1>`);if(breadcrumb){mainInner?.insertAdjacentHTML('afterbegin',`<a id="breadcrumb" href="/dbe-sbe-programs" title="back to DBE & SBE Programs landing page" >${ breadcrumb }</a>`)}const mainInnerChildren=Array.from(mainInner?.children??[]);mainInnerChildren.forEach((child)=>{child.removeAttribute('class');child.removeAttribute('style');if(child.getAttribute('target')?.includes('_blank')){child.setAttribute('target','_self')}if(child.getAttribute('rel')==='noopener'&&!child.getAttribute('href')?.includes('ccrta.org')&&!child.getAttribute('href')?.includes('ccrta.pimcore.dev')){child.setAttribute('rel','external')}if(child.getAttribute('href')?.includes('http://')){const href=child.getAttribute('href')??'';child.setAttribute('href',href.replace('http://','https://'))}if(child.tagName==='P'&&child.textContent===''){child.remove()}if(child.tagName==='DIV'&&child.textContent?.trim()===''){child.remove()}});const nav=mainInner?.querySelector('.dbe-menu');nav?.remove();const mainInnerHTML=mainInner?.innerHTML;main?.insertAdjacentHTML('afterbegin',mainInnerHTML??'');page?.appendChild(main)}function buildSidebarNav(){const page=document.getElementById('page');if(!page){return ''}const sidebarNavTemplate=document.querySelector('template#template-sidebar-nav');const sidebarNavContent=sidebarNavTemplate?.content;const sidebarNavArr=Array.from(sidebarNavContent?.children??[]);const sidebarNavLinksHTML=sidebarNavArr.map((linkParent)=>{if(!linkParent||!(linkParent instanceof HTMLDivElement)){return ''}const link=linkParent.firstElementChild instanceof HTMLAnchorElement?linkParent.firstElementChild:null;if(!link){return ''}const parentClasses=link.parentElement?.className.split(' ');const pageItem=parentClasses?.find((i)=>i.includes('page-item-'));link.className='sidebar-nav-item';if(pageItem?.includes(pageId)){link.className+=' active'}link.title='go to '+link.textContent;link.textContent=link?.textContent?.replace(/([a-z])\/([a-z])/i,'$1 / $2')?.replace('and','&')?.replace('Resource Links','Resources')??'';return link.outerHTML}).join('');const sidebarNavHTML=`
	<nav class="page-x-padding main-y-padding" id="sidebar-nav">
		<a href="/dbe-sbe-programs/" class="sidebar-nav-heading">DBE & SBE Programs</a>
		${ sidebarNavLinksHTML }
	</nav>`;page?.insertAdjacentHTML('afterbegin',sidebarNavHTML)}function buildLandingPageNav(){if(!pageTemplateClass.includes('page-template-page-dbe-home')){return ''}const sidebarNav=document.getElementById('sidebar-nav');const sidebarNavHTML=sidebarNav?.outerHTML??'';if(!sidebarNavHTML){return ''}const main=document.getElementById('main');if(!main){return ''}const classesUpdated=sidebarNavHTML.replaceAll(/sidebar-nav/gi,'landing-nav');const tempDiv=document.createElement('div');tempDiv.innerHTML=classesUpdated;const landingNav=tempDiv.firstElementChild;landingNav?.removeAttribute('class');const label=document.createElement('div');label.className='landing-nav-heading';label.textContent='DBE & SBE Topics';landingNav?.insertBefore(label,landingNav?.firstElementChild);landingNav?.querySelector('.landing-nav-heading')?.remove();main?.insertAdjacentHTML('beforeend',landingNav?.outerHTML??'')}}

}();

