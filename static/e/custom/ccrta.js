!function(){

	// auto initialize an event listener for the dom to load
	document.addEventListener('DOMContentLoaded', function() {
		customStyling();
	});

	// customStyling function
	function customStyling() {
		// look for the correct body class
		const bodyClass = evaluateBodyClass();
		if (!bodyClass) return;

		// prevent re-running function -- return if lj class is already present
		const hasLJ = document.documentElement.classList.contains('lj');
		if (hasLJ) return;

		// add a content security policy
		addCSP();

		// scrub scripts
		scrubScripts();

		// scrub styles
		scrubStyles();

		// get new body content
		const newBodyContent = createNewBodyContent();

		// replace body content
		replaceBodyContent(newBodyContent);

		// add "lj" class to html element
		const html = document.documentElement;
		html.classList.add('lj');

		function evaluateBodyClass() {
			// page ids for activation
			const approvedPageClasses = ['page-template-page-dbe-home', 'page-template-page-dbe'];

			// get body classes
			const bodyClasses = document.body.className.split(' ');

			// get the key page class
			const bodyClass = approvedPageClasses.find((cls) => bodyClasses.includes(cls));

			// return if current page does not a matching id
			if (!bodyClass) return '';

			// scrub body classes to just the key page class
			document.body.className = bodyClass;

			return bodyClass;
		}
		function addCSP() {
			const csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://res.cloudinary.com; style-src https://lj.cdn.dev; script-src https://lj.cdn.dev; font-src 'self' https://fonts.googleapis.com; connect-src 'self'; frame-src 'self'; child-src 'self'; object-src 'none'; form-action 'self'; base-uri 'self'; block-all-mixed-content; upgrade-insecure-requests;">`;
			document.head.insertAdjacentHTML('afterbegin', csp);
		}
		function scrubScripts() {
			// remove all scripts page
			const headScripts = document.head.querySelectorAll('script');
			headScripts.forEach((script) => script.remove());
		}
		function scrubStyles() {
			// remove all stylesheets links from the head of the page, except for the one with
			// href="https://cdn.lj.dev/e/custom/ccrta.css"
			/** @type { HTMLLinkElement[] } stylesheetLinks */
			const headStyleLinks = Array.from(document.head.querySelectorAll('[rel=stylesheet]'));
			headStyleLinks.forEach((link) => {
				console.log(link.href);
				if (!link?.href?.includes('cdn.lj.dev')) {
					link.remove();
				}
			});

			// remove all style elements from the page
			// except for the ones with data-vite-dev-id
			const headStylesElements = Array.from(document.querySelectorAll('style'));
			headStylesElements.forEach((style) => {
				if (!style.hasAttribute('data-vite-dev-id')) {
					style.remove();
				}
			});
		}
		function formatAlertBar() {
			const alertText =
				document.getElementById('head-topbar')?.innerText?.replace(/More/, '').trim() ?? '';
			const newAlertBarHTML = `
			<div id="alert-bar" class="page-x-padding"><a href="/rider-alert" title="learn more"><span class="alert-content">${alertText}.</span> <span class="alert-cta">Learn More</span></a></div>`;
			return newAlertBarHTML;
		}
		function formatSiteHeader() {
			const newHeaderHTML = getNewHeaderHTML();
			return newHeaderHTML;
		}
		function formatMain() {
			// get default banner && h1 content
			const defaultBanner = document.getElementById('default-banner');
			const h1 = defaultBanner?.querySelector('h1') ?? document.querySelector('h1');
			const h1Text = h1 ? JSON.parse(JSON.stringify(h1?.textContent?.trim())) : '';
			defaultBanner?.remove();

			// get main + main inner
			const defaultContent = document.querySelector('.default-content');
			const main = defaultContent?.querySelector('main');
			const mainInner = main?.firstElementChild;

			// insert new h1 into main inner
			mainInner?.insertAdjacentHTML('afterbegin', `<h1>${h1Text}</h1>`);

			// scrub inline classes and styles from all children of main inner
			const mainInnerChildren = Array.from(mainInner?.children ?? []);
			mainInnerChildren.forEach((child) => {
				child.removeAttribute('class');
				child.removeAttribute('style');
			});

			// remove nav
			const nav = mainInner?.querySelector('.dbe-menu');
			nav?.remove();

			const mainInnerHTML = mainInner?.innerHTML;
			return mainInnerHTML;
		}
		function formatSidebarNav() {
			const sidebarNav = document.querySelector('nav.side-nav-container');
			/** @type {HTMLElement[]} */
			const sidebarNavLinksArr = Array.from(sidebarNav?.querySelectorAll('.side-nav-item') ?? []);
			/** @param { HTMLElement } link */
			const sidebarNavLinksHTML = sidebarNavLinksArr
				.map((link) => {
					link.className = 'sidebar-nav-item';
					link.title = 'go to ' + link.textContent;
					link.textContent =
						link?.textContent
							?.replace(/([a-z])\/([a-z])/i, '$1 / $2')
							?.replace('and', '&')
							?.replace('Resource Links', 'Resources') ?? '';
					return link.outerHTML;
				})
				.join('');

			const sidebarNavHeadingText = sidebarNav
				?.querySelector('.menu')
				?.firstElementChild?.textContent?.trim();

			const sidebarNavHTML = `
		<nav class="page-x-padding main-y-padding" id="sidebar-nav">
			<a href="/dbe-sbe-programs/" class="sidebar-nav-heading">${sidebarNavHeadingText}</a>
			${sidebarNavLinksHTML}
		</nav>`;

			return sidebarNavHTML;
		}
		function formatLandingNav(/** @type { string } */ sidebarNavHTML) {
			// if not the landing page
			if (!bodyClass.includes('page-template-page-dbe-home')) return '';

			// search and replace classes
			const classesUpdated = sidebarNavHTML.replaceAll(/sidebar-nav/gi, 'landing-nav');

			// create a temporary div to parse the updated classes
			const tempDiv = document.createElement('div');
			tempDiv.innerHTML = classesUpdated;

			// extract the nav
			const landingNav = tempDiv.firstElementChild;
			landingNav?.removeAttribute('class');

			// add label
			const label = document.createElement('div');
			label.className = 'landing-nav-heading';
			label.textContent = 'DBE & SBE Topics';
			landingNav?.insertBefore(label, landingNav?.firstElementChild);

			// remove heading;
			landingNav?.querySelector('.landing-nav-heading')?.remove();

			return landingNav?.outerHTML ?? '';
		}
		function formatFooter() {
			const newFooterHTML = `
		<footer id="footer">
		<div id="footer-main" class="page-x-padding">
			<div id="footer-menus">
				<div id="footer-menu-customer-support" class="widget">
					<div class="widget-title">Customer Support</div>
					<div class="widget-menu">
						<a class="widget-menu-link" href="https://ccrta.pimcore.dev/contact-us/">Contact Us</a>
						<a class="widget-menu-telephone" href="tel:3618832287">361.883.2287<span class="telephone-label">toll free</span></a>
						<div class="widget-menu-text">
							<span class="widget-menu-text-subheading">Customer Service Center</span>
							<span class="widget-menu-text-content">Mon - Sat, 8:00 am - 5:00 pm</span></div>
						<div class="widget-menu-text">
							<span class="widget-menu-text-subheading">Accessibility</span>
							<span class="widget-menu-text-content">Accessible formats available, such as large print and braille are available upon request.</span>
							</div>
					</div>
				</div>
					<div id="footer-menu-staff" class="widget">
						<div class="widget-title">Staff</div>
						<div class="widget-menu">
							<a class="widget-menu-link" href="https://ccrta.pimcore.dev/board-of-directors/">Board of Directors</a>
							<a class="widget-menu-link" href="https://ccrta.pimcore.dev/staff/">Administration</a>
						</div>
					</div>
					<div id="footer-menu-opportunities" class="widget">
						<div class="widget-title">Opportunities</div>
						<div class="widget-menu">
							<a class="widget-menu-link" href="https://ccrta.pimcore.dev/board-of-directors/">Career with CCRTA</a>
							<a class="widget-menu-link" href="https://ccrta.pimcore.dev/staff/">Business with CCRTA</a>
							<a class="widget-menu-link" href="https://ccrta.pimcore.dev/disadvantaged-small-business-enterprise-program/">DBE Information</a>
						</div>
					</div>
				</div>
				<div id="footer-contact" class="widget">
				<a id="footer-brand" href="/" title="go to home">
					<img src="https://res.cloudinary.com/dn0pqjjbq/image/upload/v1723762116/ccrta-mark_ymcjh3.svg" alt="ccrta logo - a stylized uppercase letter B in a circle" role="img"/>
				</a>
					<div class="widget-title">Corpus&nbsp;Christi Regional Transportation&nbsp;Authority</div>
					<div class="footer-addresses">
						<div class="footer-address">Staples&nbsp;St.&nbsp;Center, 602&nbsp;N.&nbsp;Staples&nbsp;St.<br>Corpus Christi, TX 78405</div>
						<div class="footer-address">5658 Bear Lane<br>Corpus Christi, TX 78401</div>
					</div>
					<div id="footer-social">
						<a class="social social-fb" href="https://www.facebook.com/CorpusChristiRTA" title="facebook" rel="nofollow" target="_self">
							<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 256 256" aria-label="facebook icon" width="256" height="256">
								<path d="M170.901 220.151h-38.073v-92.905h-19.021V95.228h19.021V76.006c0-26.119 10.741-41.651 41.256-41.651h25.405v32.021h-15.88c-11.879 0-12.665 4.474-12.665 12.825l-.043 16.025h28.768l-3.366 32.017h-25.401v92.909z" />
							</svg></a>
						<a class="social social-x" href="https://x.com/ccrta" title="X" rel="nofollow" target="_self">
							<svg viewBox="0 0 24 24" aria-label="X icon" role="img" width="27" height="27">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
							</svg></a>
						<a class="social social-yt" href="https://www.youtube.com/user/rtacommunity" title="YouTube" rel="nofollow" target="_self">
							<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="youtube icon" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M9.68 8.9v6.18l5.84-3.1"></path>
							</svg>
						</a>
						<div>
						</div>
					</div>
				</div>
				</div>

				<div id="footer-bottom" class="page-x-padding">
					<a href="/privacy">Privacy Policy</a>
					<div class="legal">
						<span class="copyright">©2024 Corpus Christi Regional Transportation Authority</span>
						<span class="vertical-bar">&nbsp;|&nbsp;</span>
						<span class="attribution">Powered by Lightning Jar</span>
					</div>
				</div>
	</footer>`;

			return newFooterHTML;
		}
		function replaceElement(
			/** @type { HTMLElement | null | undefined  } */ oldElement,
			/** @type { string } */ newElementString
		) {
			if (!oldElement) {
				return;
			}

			const tempDiv = document.createElement('div');
			tempDiv.innerHTML = newElementString.trim();
			const newElement = tempDiv.firstChild;

			if (!newElement) {
				return;
			}
			const parent = oldElement.parentNode;
			parent?.replaceChild(newElement, oldElement);
			return newElement;
		}
		function createNewBodyContent() {
			const alertBar = formatAlertBar();
			const siteHeader = formatSiteHeader();
			const mainHTML = formatMain();
			const sidebarNavHTML = formatSidebarNav();
			const landingNavHTML = formatLandingNav(sidebarNavHTML);
			const footer = formatFooter();

			const newBodyContents = `
			<div id="body-container">
				${alertBar}
				${siteHeader}
					<page id="page">${sidebarNavHTML}
						<main id="main" class="page-x-padding main-y-padding">${mainHTML}${landingNavHTML}</main>
					</page>
				${footer}
				</div>`;

			return newBodyContents;
		}
		function replaceBodyContent(/**type {string} */ newBodyContent) {
			// empty body
			document.body.innerHTML = '';

			// add a container to body
			document.body.insertAdjacentHTML('afterbegin', '<div id="body-container"></div>');
			const bodyContainer = document.getElementById('body-container');

			// replace body contents
			replaceElement(bodyContainer, newBodyContent);
		}
		function getNewHeaderHTML() {
			return `
			<header id=site-header><div id=site-header-inner style=opacity:0><input id=hamburger-toggle style=opacity:0 type=checkbox> <label class=rounded-md for=hamburger-toggle id=hamburger-icon><span class=sr-only id=hamburger-sr-label>Toggle menu</span></label><nav class=page-x-padding id=main-nav><div class=menu id=main-nav-menu-0><button aria-expanded=false class=menu-heading-button type=button>Getting Started</button><div class=menu-outer-container><div class=menu-inner-container style=opacity:0><div class=menu-section><div class=menu-section-heading>How to Ride</div><div class="group/item menu-item"><a href=/gettingstarted/ class=menu-item-link>Getting Started</a></div><div class="group/item menu-item"><a href=/rider-info/how-to-ride-the-bus/ class=menu-item-link>How To Ride The Bus</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>Find Your Way</div><div class="group/item menu-item"><a href=/rider-info/routes-maps-schedules/ class=menu-item-link>Routes, Maps, Schedules</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>More Information</div><div class="group/item menu-item"><a href=/evacuation/ class=menu-item-link>Evacuation Guidelines</a></div><div class="group/item menu-item"><a href=/rider-info/programs/ class=menu-item-link>Programs</a></div><div class="group/item menu-item"><a href=/faq/ class=menu-item-link>FAQs</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>Additional Services</div><div class="group/item menu-item"><a href=/express/ class=menu-item-link>Express</a></div><div class="group/item menu-item"><a href=/flex/ class=menu-item-link>Flex</a></div><div class="group/item menu-item"><a href=/rural/ class=menu-item-link>Rural Transportation</a></div><div class="group/item menu-item"><a href=/accessibility-policy/ class=menu-item-link>Accessibility</a></div><div class="group/item menu-item"><a href=/rider-info/bike-ride/ class=menu-item-link>Bike & Ride</a></div></div></div></div></div><div class=menu id=main-nav-menu-1><button aria-expanded=false class=menu-heading-button type=button>News & Opportunities</button><div class=menu-outer-container><div class=menu-inner-container style=opacity:0><div class=menu-section><div class=menu-section-heading>News</div><div class="group/item menu-item"><a href=/news-opportunities/public-notice/ class=menu-item-link>Public Notices</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>Special Programs</div><div class="group/item menu-item"><a href=/news-opportunities/5310-program/ class=menu-item-link>5310 Program</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>For Vendors</div><div class="group/item menu-item"><a href=/news-opportunities/business-with-us/ class=menu-item-link>Business With Us</a></div><div class="group/item menu-item"><a href=/news-opportunities/dbe-program/ class=menu-item-link>DBE & SBE Programs</a></div><div class="group/item menu-item"><a href=https://www.ccrta.com/ class=menu-item-link>DBE Benefits</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>Meetings</div><div class="group/item menu-item"><a href=/news-opportunities/agendas/ class=menu-item-link>Agendas</a></div></div></div></div></div><div class=menu id=main-nav-menu-2><button aria-expanded=false class=menu-heading-button type=button>Get a Pass</button><div class=menu-outer-container><div class=menu-inner-container style=opacity:0><div class=menu-section><div class=menu-section-heading>Mobile App</div><div class="group/item menu-item"><a href=/gopass/ class=menu-item-link>Plan, Pay, Go!</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>Fares & Pricing</div><div class="group/item menu-item"><a href=/get-a-pass/fares/ class=menu-item-link>Fares</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>How to Buy</div><div class="group/item menu-item"><a href=/get-a-pass/places-to-purchase/ class=menu-item-link>Places To Purchase</a></div></div></div></div></div><div class=menu id=main-nav-menu-3><button aria-expanded=false class=menu-heading-button type=button>About</button><div class=menu-outer-container><div class=menu-inner-container style=opacity:0><div class=menu-section><div class=menu-section-heading>Our Team</div><div class="group/item menu-item"><a href=/staff/ class=menu-item-link>Staff</a></div><div class="group/item menu-item"><a href=/board-of-directors/ class=menu-item-link>CCRTA Board Of Directors</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>Knowledge & Compliance</div><div class="group/item menu-item"><a href=/rcat/ class=menu-item-link>RCAT</a></div><div class="group/item menu-item"><a href=/title-vi/ class=menu-item-link>Title VI</a></div><div class="group/item menu-item"><a href=/long-range-plans/ class=menu-item-link>Service Plans</a></div><div class="group/item menu-item"><a href=/open-records/ class=menu-item-link>Open Records</a></div><div class="group/item menu-item"><a href=https://gtfs.ccrta.cadavl.com/CCRTA/GTFS/GTFS_CCRTA.zip class=menu-item-link>GTFS Feed</a></div></div><div class=menu-section><div class=menu-section-divider></div><div class=menu-section-heading>Get In Touch</div><div class="group/item menu-item"><a href=/ads/ class=menu-item-link>Bus And Bench Advertising</a></div><div class="group/item menu-item"><a href=/contact-us/ class=menu-item-link>Contact Us</a></div></div></div></div></div><div class=menu id=main-nav-menu-4><a href=/financial-transparency/ class=menu-heading-button>Transparency</a></div><a href=/contact id=site-header-button title="go to contact page"label=Contact>Contact</a></nav><a href="/" id=site-header-brand title="go to home"><img id=site-header-brand-logo src="https://res.cloudinary.com/dn0pqjjbq/image/upload/v1723762116/ccrta-mark_ymcjh3.svg"></a></div></header>`;
		}
	}

}();

