var api;if("undefined"!=typeof window&&!window.famobi){!function(e,n){var t={orientationChangeCallback:null,brandingLogo:null,config:null,reached_home:!1,splashComplete:!1,volume:1,init:function(){return new Promise(function(e,n){var t,i,a;this.config||(t="famobi.json",i=function(n){var t=JSON.parse(n);if(t.game_i18n){this.config=t,this.config.disable_console&&(window.console={log:function(){},warn:function(){},info:function(){},error:function(){}}),this.log("init..."),this.game.init(),this.includeCSS("html5games/gameapi/v1/play.css");for(var i=0;this.config.includeCSS&&i<this.config.includeCSS.length;i++)this.includeCSS(this.config.includeCSS[i]);for(window.famobi_gameJS&&window.famobi_gameJS.length&&"string"==typeof window.famobi_gameJS[window.famobi_gameJS.length-1]&&window.famobi_gameJS.push(function(){}),window.famobi_gameJS.unshift("custom.js"),window.famobi_gameJS.unshift("html5games/gameapi/famobi_analytics_v1.js"),window.famobi_gameJS.unshift("html5games/gameapi/detection.js"),window.famobi_gameJS.unshift("html5games/gameapi/zepto.min.js"),i=0;this.config.includeJS&&i<this.config.includeJS.length;i++)window.famobi_gameJS.unshift(this.config.includeJS[i]);window.addEventListener("orientationchange",function(){"function"==typeof this.orientationChangeCallback&&this.orientationChangeCallback()}.bind(this),!1),this.getUrlParams().fg_aid,window.famobi_multiplayer=this.config.features.multiplayer||!1,this.config.gameParams=this.config.gameParams||{},window.addEventListener("famobi_tracking_screen",function(e){this.config.autoShowMenuScreens&&this.config.autoShowMenuScreens.includes(e.detail.screen)&&(this.reached_home=!0,setTimeout(function(){this.splashComplete&&window.famobi.menu.show()},1e3))}),this.config.show_splash&&this.showSplashScreen(function(){this.splashComplete=!0,this.reached_home&&window.famobi.menu.show()},this.config.splash_duration<0),document.title=this.config.title||(String.prototype.replaceAll=function(e,n){return this.split(e).join(n)},window.famobi_gameID.replaceAll("-"," ").replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})),this.ads.init(),this.adapters.add("analytics","trackStats",function(e,n){window.famobi.config.logging&&(console.log("%c "+e+" %c (trackStats)","background: #333333; color: white; display: block;",""),n&&console.log(n))}),this.adapters.add("analytics","trackEvent",function(e,n){"EVENT_LIVESCORE"!=e&&window.famobi.config.logging&&(console.log("%c "+e+" %c (trackEvent)","background: #0092c3; color: white; display: block;",""),n&&console.log(n))}),this.adapters.add("analytics","trackScreen",function(e,n){window.famobi.config.logging&&(console.log("%c "+e+" %c (trackScreen)","background: #f08119; color: white; display: block;",""),n&&console.log("pageTitle: "+n))}),e("running-jack"!==window.famobi_gameID)}else console.error("famobi.json: field name 'game_i18n' is missing. For more information please visit: https://sites.google.com/a/famobi.com/api-docs/api-implementation/localization")}.bind(this),(a=new XMLHttpRequest).overrideMimeType("application/json"),a.open("GET",t,!0),a.onreadystatechange=function(){4===a.readyState&&"200"==a.status&&i(a.responseText)},a.send(null))}.bind(this))},showInterstitialAd:function(e){var n=this;return new Promise(function(t,i){n.showAd(function(){t()},e)})},forceAd:function(e){this.showAd(e,!0)},rewardedAd:function(e){return this.hasFeature("rewarded")&&this.hasRewardedAd()?void this.rewardedads.show().then(function(n){"function"==typeof e&&e(n)}):(this.log("rewarded ads: not supported"),void("function"==typeof e&&e(this.rewardedads.defaultReturnValue)))},showAd:function(e,n){return this.config.ads.off?(this.log("ads: off"),void("function"==typeof e&&e())):!0===n||this.ads.hasCooledDown()?(this.ads.adcount++,this.ads.lastAdCall=Date.now(),this.game.pause(),this.log("showing ad..."),void this.ads.show(this.ads.show_initial&&1==this.ads.adcount).then(function(){this.log("ad finished"),"function"==typeof e&&e(),setTimeout(function(){this.game.resume()}.bind(this),100)}.bind(this))):(this.log("skipping ad..."),void("function"==typeof e&&e()))},rewardedads:{lastAdCall:Date.now(),adcount:0,defaultReturnValue:{adType:"rewarded",adDidLoad:!1,adDidShow:!1,adCount:0,rewardGranted:!1},init:function(){window.famobi},hasCooledDown:function(){return!0},show:function(){var e=window.famobi;return new Promise(function(n,t){setTimeout(function(){n({adType:"rewarded",adDidLoad:!0,adDidShow:!0,adCount:e.rewardedads.adcount,rewardGranted:!0})},0)})}},ads:{lastAdCall:Date.now(),adcount:0,off:!0,show_initial:!1,min_s_before:10,min_s_between:90,init:function(){var e=window.famobi;e.config.ads=e.config.ads||{},this.lastAdCall=Date.now(),this.off=!1!==e.config.ads.off,this.show_initial=e.config.ads.show_initial||!1,this.min_s_before=e.config.ads.min_s_before||10,this.min_s_between=e.config.ads.min_s_between||90},hasCooledDown:function(){var e=0===this.adcount&&+this.min_s_before>0?+this.min_s_before:+this.min_s_between;return Date.now()-1e3*e>this.lastAdCall},show:function(e){var n=window.famobi;return e&&n.log("initial ad"),new Promise(function(e,n){setTimeout(function(){e()},0)})}},gametranslation:{init:function(){window.famobi.gametranslation.curLangString=window.famobi.gametranslation.getUserLang(),-1===window.famobi.gametranslation.getSupportedLanguages().indexOf(window.famobi.gametranslation.curLangString)&&(window.famobi.gametranslation.curLangString="en"),window.famobi.gametranslation.translationData=window.famobi.gametranslation.getGameTranslations(),window.famobi.gametranslation.translateHtml(faZepto("body"))},getSupportedLanguages:function(){return window.famobi.config.languages||Object.keys(window.famobi.config.game_i18n)||[]},getGameTranslations:function(){var e=window.famobi.config.game_i18n,n=window.famobi.gametranslation.curLangString;return e.current?e.current:(faZepto.each(e,function(n,t){faZepto.each(t,function(t,i){null==i?e[n][t]="":"string"==typeof e[n][t]&&(e[n][t]=i.replace(/\{lang\}/g,n))})}),e.current=faZepto.extend({},e.default,e[window.famobi.config.aid+".default"],e[n],e[window.famobi.config.aid+"."+n]),window.famobi.config.game_i18n.current=e.current)},translateString:function(e){return window.famobi.gametranslation.translationData.hasOwnProperty(e)?window.famobi.gametranslation.translationData[e]:null},getNavigatorLocale:function(){var e="";return navigator.languages&&window.famobi.sizeOf(navigator.languages)?e=navigator.languages[0]:navigator.language?e=navigator.language:navigator.userLanguage?e=navigator.userLanguage:navigator.browserLanguage&&(e=navigator.browserLanguage),e},getNavigatorLanguage:function(){return window.famobi.gametranslation.getNavigatorLocale().substr(0,2)},getUserLang:function(){var e=window.famobi.getUrlParams(),n=window.famobi.gametranslation.getNavigatorLanguage();if(e.locale&&2==e.locale.length)return e.locale;switch(n){case"ch":case"at":return"de";default:return n}},translateHtml:function(e){return e.find("[data-i18n]").each(function(){var e=this.getAttribute("data-i18n");this.innerHTML=window.famobi.gametranslation.translateString(e)}),e}},__:function(e){switch(e){case"test_preload_image":return"html5games/images/testPreloadImage.png";case"preload_image":return"html5games/images/"+(this.config.preload_image||"preloadImage")+".png";case"more_games_image":return this.getBrandingButtonImage()}var n=this.getCurrentLanguage();if(this.config.game_i18n){if(this.config.game_i18n[n]&&(this.config.game_i18n[n]=Object.assign(this.config.game_i18n[n],this.config.game_i18n[this.config.aid+"."+n])),this.config.game_i18n[n]&&this.config.game_i18n[n][e])return"string"==typeof this.config.game_i18n[n][e]?this.config.game_i18n[n][e].replace("{lang}",n):this.config.game_i18n[n][e];if(this.config.game_i18n.default&&(this.config.game_i18n.default=Object.assign(this.config.game_i18n.default,this.config.game_i18n[this.config.aid+".default"])),this.config.game_i18n.default&&this.config.game_i18n.default[e])return"string"==typeof this.config.game_i18n.default[e]?this.config.game_i18n.default[e].replace("{lang}",n):this.config.game_i18n.default[e]}return this.warn("No translation found for '"+e+"'"),null},getCurrentLanguage:function(){var e;try{e=new URL(window.location.href).searchParams.get("locale")}catch(e){console.error(e)}return e||(navigator.language||navigator.userLanguage).substr(0,2)},showSplashScreen:function(e,n,t){if(document.getElementById("famobi_splash")){if(splashScreen.style.display="block",splashScreen.style.animation=splashScreen._orgAni,t)return;n?(window.removeEventListener(n,()=>this.hideSplashScreen(e)),window.addEventListener(n,()=>this.hideSplashScreen(e))):setTimeout(()=>this.hideSplashScreen(e),this.config.splash_duration)}else i="html5games/splash/splash.html",a=(i=>{this.includeCSS("html5games/splash/splash.css");let a=document.createElement("div");a.classList.add("splash-screen"),a.style.position="absolute",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.innerHTML=i,this.config.preload_image&&(a.querySelector(".logo").src="html5games/images/"+this.config.preload_image+".png"),document.body.appendChild(a),this.splashScreen=a,t||(n?window.addEventListener(n,()=>this.hideSplashScreen(e)):setTimeout(()=>this.hideSplashScreen(e),this.config.splash_duration))}),(o=new XMLHttpRequest).overrideMimeType("application/xhtml+xml"),o.open("GET",i,!0),o.onreadystatechange=function(){4===o.readyState&&"200"==o.status&&a(o.responseText)},o.send(null);var i,a,o},hideSplashScreen:function(e){this.splashScreen.style.display="none",this.splashScreen._orgAni||(this.splashScreen._orgAni=this.splashScreen.style.animation),this.splashScreen.style.animation="none",e&&e(this.splashScreen)},getAbsolutePath:function(e){var n=document.location.protocol+"//"+document.location.pathname;return"file:"!==document.location.protocol?e:(e.startsWith("/")&&(e=e.substr(1)),n.substr(0,n.lastIndexOf("/")+1)+e)},menu:{create:function(){window.famobi.menu=this,window.famobi.menu.rootElement=document.getElementById("fg-root"),window.famobi.menu.bodyElement=document.getElementsByTagName("body")[0],window.famobi.menu.headElement=document.getElementsByTagName("head")[0],window.famobi.menu.rootElement||(window.famobi.menu.rootElement=document.createElement("div"),window.famobi.menu.rootElement.setAttribute("id","fg-root"),window.famobi.menu.rootElement.classList.add("fg_root"),window.famobi.menu.rootElement.style="color: #999;font-weight:normal;",document.body.insertBefore(window.famobi.menu.rootElement,document.body.firstChild)),window.famobi.menu.fgOverlay=document.createElement("div"),window.famobi.menu.fgOverlay.setAttribute("id","fg-overlay"),window.famobi.config.overlay_position&&(window.famobi.menu.fgOverlay.className="overlay-"+window.famobi.config.overlay_position+" clip-"+window.famobi.config.overlay_position),window.famobi.config.overlay_distance&&""!==window.famobi.config.overlay_distance&&(window.famobi.config.overlay_position&&"bottom"==window.famobi.config.overlay_position?window.famobi.menu.fgOverlay.style.bottom=isNaN(window.famobi.config.overlay_distance)?window.famobi.config.overlay_distance:window.famobi.config.overlay_distance+"px":window.famobi.menu.fgOverlay.style.top=isNaN(window.famobi.config.overlay_distance)?window.famobi.config.overlay_distance:window.famobi.config.overlay_distance+"px"),window.famobi.menu.rootElement.appendChild(window.famobi.menu.fgOverlay),window.famobi.menu.fgOverlay.innerHTML='<header id="fg-header"><div class="fg-clip" id="fg-clip"><div class="fg-clip-btn"><span></span></div></div></header>',window.famobi.menu.fgNavigation=document.createElement("nav"),window.famobi.menu.fgNavigation.style.position="relative",window.famobi.menu.fgNavigation.setAttribute("id","fg-navigation"),window.famobi.menu.fgOverlay.appendChild(window.famobi.menu.fgNavigation),window.famobi.menu.fgOverlay_visible=!1,window.famobi.menu.fgHeader=document.getElementById("fg-header"),faZepto("#fg-clip, #fg-logo").each(function(){window.famobi.menu.handleClick(this,window.famobi.menu.toggleOverlay)});let e=window.famobi.getCurrentLanguage(),n="";if(window.famobi.config.supportedLanguages&&window.famobi.config.supportedLanguages.length>1){n='<ul class="fg-langs">';let t="";for(let i=0;i<window.famobi.config.supportedLanguages.length;i++)n+=`<li class="${(t=window.famobi.config.supportedLanguages[i])==e?"fg-lang fg-lang-selected":"fg-lang"}" data-switch-lang="${t}" style="cursor: pointer;">\n                                <a href="javascript:void(0);">\n                                  <img class="fg-flag" src="html5games/images/flags/flag_${t}.png" alt="${t}">\n                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve">\n                                      <path d="M630.7,227.3"></path>\n                                      <path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"></path>\n                                    </svg>\n                                  </a>\n                                </li>`;n+="</ul>"}var t=`${window.famobi.hasFeature("highscores")?'<ul class="fa-menu-buttons">\n                          <li data-famobi-href="leaderboard">\n                            <a href="javascript:void(0);" class="fa-menu-button-leaderboard">\n                              <img src="html5games/images/leaderboard2.svg" alt="leaderboard">\n                            </a>\n                          </li>\n                         </ul>':""}\n                        <ul class="fg-related-games">\n                          <li>\n                            <a href="${window.famobi.config.branding_url||window.famobi.config.more_games_url}" target="_blank">\n                              <img src="html5games/images/icon.svg" alt="${window.famobi.config.name}">\n                            </a>\n                          </li>\n                        </ul>\n                        ${n}`;window.famobi.menu.setHtml(t),window.famobi.config.menuless&&(window.famobi.menu.fgOverlay.style.display="none")},show:function(){if(window.famobi.menu.fgOverlay_visible)return window.famobi.menu;window.famobi.menu.fgNavigation.querySelector(".fa-menu-button-leaderboard img")&&(window.famobi.menu.fgNavigation.querySelector(".fa-menu-button-leaderboard img").style.animation="growAndShake 1s linear 1s 1 forwards",setTimeout(()=>window.famobi.menu.fgNavigation.querySelector(".fa-menu-button-leaderboard img").style.animation="none",2e3));var e=faZepto("#fg-overlay .fa-menu-button-fullscreen");return this.hideAll(),window.famobi.menu.eventHandler=window.famobi.menu.handleClick(faZepto("html").get(0),this.hideAll),faZepto("html").get(0).style.cursor="pointer",document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?e.removeClass("fa-fullscreen-disabled").addClass("fa-fullscreen-enabled"):e.removeClass("fa-fullscreen-enabled").addClass("fa-fullscreen-disabled"),window.famobi.menu.fgOverlay_visible=!0,faZepto(window.famobi.menu.fgOverlay).addClass("navigation-view"),window.famobi.menu.fgNavigation.style.display="",window.famobi.menu},hide:function(){return hideAll()},hideAll:function(){return window.famobi.menu.fgOverlay_visible?(window.famobi.menu.eventHandler&&window.famobi.menu.removeClick(faZepto("html").get(0),window.famobi.menu.eventHandler),faZepto(window.famobi.menu.fgOverlay).removeClass("iframe-view navigation-view fa-lang-shown"),window.famobi.menu.fgOverlay_visible=!1,window.famobi.menu):window.famobi.menu},handleClick:function(e,n){var t=function(e){return n.call(this,e),e.cancelBubble=!0,e.stopPropagation(),!1};return"function"==typeof n&&(window.navigator.msPointerEnabled?e.addEventListener("MSPointerDown",t,!1):window.PointerEvent?(e.addEventListener("pointerup",t,!1),e.addEventListener("pointermove",this.eventTrap,!0),e.addEventListener("pointerdown",this.eventTrap,!0)):detection.is.touch?(e.addEventListener("touchend",t,!1),e.addEventListener("touchmove",this.eventTrap,!0),e.addEventListener("touchstart",this.eventTrap,!0)):e.addEventListener("click",t,!1),e.style.cursor="pointer"),t},removeClick:function(e,n){return"function"==typeof n&&(window.navigator.msPointerEnabled?e.removeEventListener("MSPointerDown",n,!1):window.PointerEvent?(e.removeEventListener("pointerup",n,!1),e.removeEventListener("pointermove",this.eventTrap,!0),e.removeEventListener("pointerdown",this.eventTrap,!0)):detection.is.touch?(e.removeEventListener("touchend",n,!1),e.removeEventListener("touchmove",this.eventTrap,!0),e.removeEventListener("touchstart",this.eventTrap,!0)):e.removeEventListener("click",n,!1)),e},eventTrap:function(e){e.preventDefault(),e.cancelBubble=!0,e.stopPropagation()},toggleOverlay:function(e){return window.famobi.menu.fgOverlay_visible?window.famobi.menu.hideAll():window.famobi.menu.show(),e.stopPropagation(),!1},setHtml:function(e){window.famobi.menu.fgNavigation.innerHTML=e,window.famobi.menu.bindEvents()},toggleLanguages:function(){var e=faZepto(window.famobi.menu.fgOverlay);e.hasClass("fa-lang-shown")?e.removeClass("fa-lang-shown"):e.addClass("fa-lang-shown")},switchLanguage:function(e){var n,t=window.famobi.getUrlParams();window.famobi.menu.hideAll(),t.locale=e,n=faZepto.param(t),document.location.replace(document.location.pathname+"?"+n+(document.location.hash?document.location.hash:""))},bindEvents:function(){faZepto("[data-switch-lang]").each(function(){var e=faZepto(this),n=faZepto(this).attr("data-switch-lang");e.removeClass("fg-lang-selected"),n===window.famobi.gametranslation.curLangString&&(e.closest("ul").prepend(e),e.addClass("fg-lang-selected")),window.famobi.menu.handleClick(this,function(){!0===e.hasClass("fg-lang-selected")?window.famobi.menu.toggleLanguages():n.length&&window.famobi.menu.switchLanguage(n)})}),faZepto("[data-famobi-href]").css("cursor","pointer").each(function(){window.famobi.menu.handleClick(this,function(){var e=faZepto(this).attr("data-famobi-href");switch(window.famobi.menu.hideAll(),e){case"moreGames":return window.famobi.menu.moreGamesLink();case"back":return window.famobi.menu.backLink();case"leaderboard":return window.famobi.showLeaderboard();default:if(this.href)return window.open(this.href,""),!1}}.bind(this))})}},getMoreGamesButtonImage:function(){return this.brandingLogo?this.brandingLogo.src:"html5games/images/"+(this.config.more_games_button_image||"logo")+".png"},getBrandingButtonImage:function(){return this.brandingLogo?this.brandingLogo.src:"html5games/images/"+(this.config.branding_button_image||this.config.more_games_button_image||"logo")+".png"},moreGamesLink:function(){var e;(e=this.config.more_games_url)&&(window.open(e,"")||(window.top.location.href=e))},openBrandingLink:function(){this.moreGamesLink()},localStorage:{setItem:function(e,n){window.localStorage.setItem(window.famobi_gameID+":"+e,n)},getItem:function(e){return window.localStorage.getItem(window.famobi_gameID+":"+e)},removeItem:function(e){window.localStorage.removeItem(window.famobi_gameID+":"+e)},clear:function(){for(var e in window.localStorage)e.startsWith(window.famobi_gameID+":")&&window.localStorage.removeItem(e)}},log:function(){this.config&&!this.config.logging||console.log(1===arguments.length?arguments[0]:arguments)},warn:function(){this.config&&!this.config.logging||console.warn(1===arguments.length?arguments[0]:arguments)},orientation:{init:function(){this.rootElement=document.getElementById("fg-root"),this.update(window.famobi.config.gameParams.orientation)},update:function(e){return void 0!==e&&(window.famobi.config.rotation||!1!==window.famobi.config.rotation&&!detection.is.pc&&!detection.is.tablet)&&window.screen&&window.screen.height!==window.screen.width&&(this.rootElement.className=this.rootElement.className+" fg-orientation-"+e,void 0===this.fgLandscapeOverlay&&(this.fgLandscapeOverlay=document.createElement("div"),this.fgLandscapeOverlay.setAttribute("id","fg-landscape-overlay"),this.fgLandscapeImage=document.createElement("img"),this.fgLandscapeImage.setAttribute("src","html5games/images/RotateToLandscape.png"),this.fgLandscapeImage.setAttribute("class","fg-orientation-icon"),this.fgLandscapeImage.setAttribute("alt","switch to landscape"),this.fgLandscapeOverlay.appendChild(this.fgLandscapeImage),this.rootElement.appendChild(this.fgLandscapeOverlay)),void 0===this.fgPortraitOverlay&&(this.fgPortraitOverlay=document.createElement("div"),this.fgPortraitOverlay.setAttribute("id","fg-portrait-overlay"),this.fgPortraitImage=document.createElement("img"),this.fgPortraitImage.setAttribute("src","html5games/images/RotateToPortrait.png"),this.fgPortraitImage.setAttribute("class","fg-orientation-icon"),this.fgPortraitImage.setAttribute("alt","switch to portrait"),this.fgPortraitOverlay.appendChild(this.fgPortraitImage),this.rootElement.appendChild(this.fgPortraitOverlay))),this}},sizeOf:function(e){var n,t=0;if(!e)return t;if(void 0!==e.length)return e.length;if(Object.keys)t=Object.keys(e).length;else for(n in e)e.hasOwnProperty(n)&&t++;return t},getOrientation:function(){var e=window.matchMedia("all and (orientation:landscape)");return e&&!0===e.matches?"landscape":"portrait"},onOrientationChange:function(e){return this.orientationChangeCallback=e,"function"!=typeof e&&this.error("famobi.onorientationchange: no valid callback provided."),faZepto(window).resize(e)},submitHighscore:function(e,n,t){!t&&this.warn("famobi.submitHighscore is deprecated, please use famobi_analytics.trackEvent('EVENT_LEVELSCORE')instead: https://sites.google.com/a/famobi.com/api-docs/api-implementation/famobi-analytics")},levelUp:function(){this.warn("famobi.levelUp is deprecated, please use famobi_analytics.trackEvent('EVENT_LEVELSUCCESS') instead: https://sites.google.com/a/famobi.com/api-docs/api-implementation/famobi-analytics")},gameOver:function(){this.warn("famobi.gameOver is deprecated, please use famobi_analytics.trackEvent('EVENT_LEVELFAIL') instead: https://sites.google.com/a/famobi.com/api-docs/api-implementation/famobi-analytics")},includeCSS:function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,n.appendChild(t)},sendLiveScore:function(e){},hasRewardedAd:function(){return this.hasFeature("rewarded")},hasFeature:function(e){return"local"==e&&(e="standalone"),e in this.config.features&&!!this.config.features[e]},getAppLink:function(){return""},getUrlParams:function(e,n,t){e=/[?&]?([^=]+)=([^&]*)/g,n=document.location&&document.location.search?document.location.search.split("+").join(" "):"";for(var i={};t=e.exec(n);)i[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return i.fg_aid?this.config.aid=i.fg_aid:i.fg_aid=this.config.aid,i},showLeaderboard:function(){window.famobi.hasFeature("highscores")},game:{waitingCounter:0,setWaiting:function(e){return e?this.waitingCounter++:this.waitingCounter>0?this.waitingCounter--:this.waitingCounter=0,this},isWaiting:function(){return this.waitingCounter>0},canResume:function(){return 1===this.waitingCounter},init:function(){this.waitingCounter=0},pause:function(){if(this.isWaiting())return this.setWaiting(!0),!1;this.setWaiting(!0);try{if("function"==typeof window.famobi_onPauseRequested)return window.famobi_onPauseRequested(),!0;if(window.game&&void 0!==window.game.paused)return window.game.paused=!0,!0;if(void 0!==window.cr_setSuspended)return cr_setSuspended(!0),!0;window.createjs}catch(e){window.famobi.log("Pausing game failed: "+e)}},resume:function(){if(!this.isWaiting())return!1;if(!this.canResume())return this.setWaiting(!1),!1;this.setWaiting(!1);try{if("function"==typeof window.famobi_onResumeRequested)return window.famobi_onResumeRequested(),!0;if(window.game&&void 0!==window.game.paused)return window.game.paused=!1,!0;if(void 0!==window.cr_setSuspended)return cr_setSuspended(!1),!0;window.createjs}catch(e){window.famobi.log("Resuming game failed: "+e)}return!1}},translateHtml:function(){return this.gametranslation.translateHtml.apply(this,arguments)},setPreloadProgress:function(e){this.config.logging&&console.info(e+"%")},gameReady:function(){this.adapters.run("game","ready"),this.log("Received gameReady signal")},playerReady:function(){this.adapters.run("player","ready"),this.log("Received playerReady signal")},setVolume:function(e){this.volume=Math.max(0,Math.min(1,e)),this.volume!=e&&console.warn("volume: value out of bounds. Now forced to "+this.volume),this.adapters.run("request","changeVolume",this.volume)},getVolume:function(){return this.volume},getFeatureProperties:function(e){return this.hasFeature(e)&&"object"==typeof this.config.features[e]?this.config.features[e]:{}},adaptersModule:function(){var e,n=this;function t(){this.adapters={ads:{show:this.createAdapter(),rewarded:this.createAdapter(),callback:this.createAdapter(),vastUrl:this.createAdapter()},adEvent:{loaded:this.createAdapter(),displayed:this.createAdapter(),errored:this.createAdapter(),userClosed:this.createAdapter(),completed:this.createAdapter()},analytics:{trackEvent:this.createAdapter(),trackScreen:this.createAdapter(),trackStats:this.createAdapter()},game:{loaded:this.createAdapter({queueCalls:!0,runOnce:!0}),gameOver:this.createAdapter(),levelUp:this.createAdapter(),preloadProgress:this.createAdapter(),preloadComplete:this.createAdapter({queueCalls:!0,runOnce:!0}),ready:this.createAdapter({queueCalls:!0,runOnce:!0})},player:{ready:this.createAdapter({queueCalls:!0,runOnce:!0})},highscore:{show:this.createAdapter(),submit:this.createAdapter()},screenshot:{submit:this.createAdapter()},request:{startGame:this.createAdapter({queueCalls:!0,runOnce:!0}),stopGame:this.createAdapter(),pauseGameplay:this.createAdapter(),resumeGameplay:this.createAdapter(),enableAudio:this.createAdapter(),disableAudio:this.createAdapter(),enableMusic:this.createAdapter(),disableMusic:this.createAdapter(),changeVolume:this.createAdapter()}},this.adapter_templates={ads:{show:[function(e,n){}],rewarded:[function(e){}],callback:[function(e){}],vastUrl:[function(){}]},adEvent:{loaded:[function(e){}],displayed:[function(){}],errored:[function(e){}],userClosed:[function(e){}],completed:[function(e){}]},analytics:{trackEvent:[function(e,n){}],trackScreen:[function(e,n){}],trackStats:[function(e,n){}]},game:{loaded:[function(){}],gameOver:[function(){}],levelUp:[function(){}],preloadProgress:[function(){}],preloadComplete:[function(){}],ready:[function(){}]},highscore:{show:[function(e){}],submit:[function(e,n){}]},screenshot:{submit:[function(e,n){}]},request:{startGame:[function(){}],stopGame:[function(){}],pauseGameplay:[function(){}],resumeGameplay:[function(){}],enableAudio:[function(){}],disableAudio:[function(){}],enableMusic:[function(){}],disableMusic:[function(){}],changeVolume:[function(e){}]},player:{ready:[function(){}]}}}var i=t.prototype;return i.createAdapter=function(e){return{callbacks:[],queueCalls:!(!e||!e.queueCalls),queue:[],runOnce:!(!e||!e.runOnce),numRuns:0}},i.init=function(){var e="",n="";if(void 0!==window.famobi_adapters)for(e in window.famobi_adapters)for(n in window.famobi_adapters[e])this.add(e,n,window.famobi_adapters[e][n])},i.list=function(){return this.adapters},i.add=function(e,t,i){if(!(e in this.adapters&&t in this.adapters[e]))return n.log("adapters.add: invalid (sub-)section"),this;if("function"!=typeof i)return n.log("adapters.add: invalid callback"),this;var a=this.adapters[e][t];return"object"==typeof a&&Array.isArray(a.callbacks)?(n.log("adapters.add: push callback for",e,t),a.callbacks.push(i),a.queueCalls&&a.queue.length>0&&a.queue.forEach(function(n){try{i.apply(this,n)}catch(n){console.warn("adapters.run: callback failed for",e+"."+t,"\n",n)}},this),this):(n.log("adapters.add: broken adapter object for",e,t),this)},i.has=function(e,n){return e in this.adapters&&n in this.adapters[e]&&"object"==typeof this.adapters[e][n]&&Array.isArray(this.adapters[e][n].callbacks)&&this.adapters[e][n].callbacks.length>0},i.run=function(e,n){var t=arguments?Array.prototype.slice.call(arguments,2):[];if(!(e in this.adapters&&n in this.adapters[e]&&"object"==typeof this.adapters[e][n]))return!1;var i=this.adapters[e][n];return i.runOnce&&i.numRuns>0?(console.warn("adapters.run: one-time adapter called more than once for",e+"."+n,"\n"),!1):(i.numRuns+=1,i.queueCalls&&i.queue.push(t),i.callbacks.length>0&&(i.callbacks.forEach(function(i){try{i.apply(this,t)}catch(t){console.warn("adapters.run: callback failed for",e+"."+n,"\n",t)}},this),!0))},(e=new t).init(),e},requestsModule:function(){var e,n=this;function t(){this.adapterSection="requests",this.legitActionIdentifiers=["startGame","stopGame","pauseGameplay","resumeGameplay","enableAudio","enableMusic","disableAudio","disableMusic","changeVolume"]}var i=t.prototype;return i.init=function(){},i.isAction=function(n){return"string"==typeof n&&e.legitActionIdentifiers.indexOf(n)>-1},i.onRequest=function(t,i){n.adapters?e.isAction(t)?"function"==typeof i?n.adapters.add("request",t,i):console.warn("onRequest(): required param 'callback' has to be of type 'function'"):console.warn("onRequest(): required param 'action' has to be one of \""+e.legitActionIdentifiers.join('", "')+'"'):console.warn("onRequest(): adapters module required")},i.requestAction=function(t){n.adapters?e.isAction(t)?n.adapters.run.apply(n.adapters,["request"].concat(Array.from(arguments))):console.warn("requestAction(): required param 'action' has to be one of \""+e.legitActionIdentifiers.join('", "')+'"'):console.warn("onRequest(): adapters module required")},(e=new t).init(),e},onRequest:function(e,n){this.requests?this.requests.onRequest(e,n):console.warn("onRequest(): requests module required")},requestAction:function(){this.requests?this.requests.requestAction.apply(this,arguments):console.warn("onRequest(): requests module required")}};n.famobi=t}(0,window);var isPageReady=new Promise(function(e,n){/complete|loaded|interactive/.test(document.readyState)&&document.body?e():document.addEventListener("DOMContentLoaded",e,!1)});isPageReady.then(function(){return window.famobi.adapters=window.famobi.adaptersModule.call(window.famobi),window.famobi.requests=window.famobi.requestsModule.call(window.famobi),window.famobi.init()}).then(function(){Promise.all(window.famobi.config.ads&&window.famobi.config.ads.show_initial?[window.famobi.showInterstitialAd(!0)]:[]).then(function(){setTimeout(function(){!function e(){if(!window.famobi_gameJS.length)return window.famobi.gametranslation.init(),window.famobi.menu.create(),window.famobi.orientation.init(),void window.setTimeout(function(){var e=document.createEvent("Events");e.initEvent("deviceready",!0,!1),document.dispatchEvent(e)},50);var n=window.famobi_gameJS.shift();if("function"==typeof n)"undefined"!=typeof Zepto&&void 0===window.faZepto&&(window.faZepto=Zepto,Zepto.getScript=function(e,n,t){var i=document.createElement("script");i.async="async",i.src=e,n&&(i.onload=n),t&&(i.onerror=t),document.getElementsByTagName("head")[0].appendChild(i)}),n instanceof Promise?n().then(function(){e()}):(n(),e());else{var t=document.createElement("script"),i=n.match(/(\{(.*?)\})/);t.onload=e,t.onerror=e,t.src=i?window.famobi.__(i[2]):n,document.body.appendChild(t)}}()},window.famobi.config.nextTimeout||0)})})}