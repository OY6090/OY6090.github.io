"use strict";function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}$(function(){function v(t){var e=$("#nav");(t=0===t||(1===t?n+i>e.width()-a-30:n+i>e.width()-30))?e.addClass("hide-menu"):e.removeClass("hide-menu")}function C(){$("#sidebar").removeClass("tocOpenPc").animate({left:"-300px"},400),$("#menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#nav").hasClass("hide-menu")&&setTimeout(function(){v(2)},400)}function _(){$("#nav").hasClass("hide-menu")||v(1),$("#sidebar").addClass("tocOpenPc").animate({left:0},400),$("#menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400)}var o,n=$("#site-name").width(),i=$("#menus").width(),a=$("#sidebar").width()||300,w=!1,t=$("#rightside");function L(t){t.each(function(t,e){var o=$(e),e=o.attr("datetime");o.text(btf.diffDate(e,!0)).css("display","inline")})}t.on("click","#readmode",function(){$("body").toggleClass("read-mode")}),$("#darkmode").length&&t.on("click","#darkmode",function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&$("#disqus_thread").children().length&&setTimeout(function(){return window.disqusReset()},200)}),t.on("click","#rightside_config",function(){return $("#rightside-config-hide").toggleClass("show")}),t.on("click","#go-up",function(){return btf.scrollToDest("body")}),window.refreshFn=function(){var t,o,e,n,i,a,s,c,l,r,d,f,h,u,p,m,g,y,b;window.innerWidth<768?v(0):v(2),$("#nav").addClass("show"),GLOBAL_CONFIG_SITE.isPost?(1024<window.innerWidth&&$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){_()},400),$("#toggle-sidebar").on("click",function(){var t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on"),(t?C:_)()}),GLOBAL_CONFIG_SITE.isSidebar&&function(){var c=$("#sidebar"),l=c.find(".toc-child"),r=c.find(".toc-link"),n=$("#article-container");l.hide(),$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop();o(e),i(e)},100));var o=function(t){var e=n.height(),o=$(window).height(),e=(t-n.offset().top)/(o<e?e-o:$(document).height()-o),o=Math.round(100*e),o=100<o?100:o<=0?0:o;c.find(".progress-num").text(o),c.find(".sidebar-toc__progress-bar").animate({width:o+"%"},100)},d=GLOBAL_CONFIG.isanchor,f=5<=GLOBAL_CONFIG.hexoversion.split(".")[0],h=n.find("h1,h2,h3,h4,h5,h6"),i=function(e){if(0===r.length)return!1;var o="";h.each(function(){var t=$(this);e>t.offset().top-70&&(o=f?"#"+encodeURI($(this).attr("id")):"#"+$(this).attr("id"))}),""===o&&(r.removeClass("active"),l.hide());var t,n,i,a,s=r.filter(".active");o&&s.attr("href")!==o&&(d&&(a=o,window.history.replaceState&&a!==window.location.hash&&window.history.replaceState(void 0,void 0,a)),r.removeClass("active"),(t=r.filter('[href="'+o+'"]')).addClass("active"),n=e,s=(i=t).offset().top,i=(a=c.find(".sidebar-toc__content")).scrollTop(),s>n+$(window).height()-100&&a.scrollTop(i+100),s<n+100&&a.scrollTop(i-100),(t=(i=0<(i=t.parents(".toc-child")).length?i.last():t).closest(".toc-item").find(".toc-child")).is(":visible")||t.fadeIn(400),i.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide())}}(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(m=GLOBAL_CONFIG.noticeOutdate,(g=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=m.limitDay&&(g='<div class="post-outdate-notice">'.concat(m.messagePrev+" "+g+" "+m.messageNext,"</div>"),"top"===m.position?$("#article-container").prepend(g):$("#article-container").append(g))),GLOBAL_CONFIG.relativeDate.post&&L($("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&L($("#recent-posts time")),!GLOBAL_CONFIG.runtime||(y=$("#runtimeshow")).length&&(b=y.attr("data-publishDate"),y.text(btf.diffDate(b)+" "+GLOBAL_CONFIG.runtime)),(y=$("#last-push-date")).length&&(b=y.attr("data-lastPushDate"),b=btf.diffDate(b,!0),y.text(b)),$("#aside-cat-list .card-category-list-item.parent i").on("click",function(t){t.preventDefault(),$(this).toggleClass("expand").parents(".parent").next().slideToggle(300)})),function(){var e=$("#toggle-menu"),o=$("#mobile-sidebar-menus"),n=$("#mobile-toc-button"),i=$("#menu_mask"),a=$("body"),s=$("#sidebar");function t(t){btf.sidebarPaddingR(),a.css("overflow","hidden"),i.fadeIn(),"menu"===t&&(e.removeClass("close").addClass("open"),o.addClass("open")),"toc"===t&&(n.removeClass("close").addClass("open"),s.addClass("tocOpenMobile").css({transform:"translate3d(-100%,0,0)",left:""}))}function c(t){a.css({overflow:"","padding-right":""}),i.fadeOut(),"menu"===t&&(e.removeClass("open").addClass("close"),o.removeClass("open")),"toc"===t&&(n.removeClass("open").addClass("close"),s.removeClass("tocOpenMobile").css({transform:""}))}function l(t){t.matches?s.hasClass("tocOpenPc")&&C():(d.hasClass("on")&&_(),n.hasClass("open")&&c("toc"))}e.on("click",function(){t("menu")}),n.on("click",function(){t("toc")}),i.on("click touchstart",function(t){e.hasClass("open")&&c("menu"),n.hasClass("open")&&c("toc")}),$(window).on("resize",function(t){e.is(":visible")||e.hasClass("open")&&c("menu")});var r=window.matchMedia("(max-width: 1024px)"),d=$("#toggle-sidebar");r.addListener(l),document.addEventListener("pjax:send",function(){r.removeListener(l)}),s.find(".toc-link").on("click",function(t){t.preventDefault(),btf.scrollToDest(decodeURI($(this).attr("href"))),window.innerWidth<1024&&c("toc")})}(),GLOBAL_CONFIG_SITE.isHome&&$("#scroll-down").on("click",function(){btf.scrollToDest("#content-inner")}),GLOBAL_CONFIG.highlight&&(p=GLOBAL_CONFIG.highlight.highlightCopy,m=GLOBAL_CONFIG.highlight.highlightLang,g=GLOBAL_CONFIG_SITE.isHighlightShrink,y=p||m||void 0!==g,b="highlighjs"===GLOBAL_CONFIG.highlight.plugin?$("figure.highlight"):$('pre[class*="language-"]'),y&&b.length&&(d="prismjs"===GLOBAL_CONFIG.highlight.plugin,u=!(h=f="")===g?"closed":"",void 0!==g&&(f='<i class="fas fa-angle-down expand '.concat(u,'"></i>')),p&&(h='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),m?d?b.each(function(){var t=$(this),e=void 0!==t.attr("data-language")?t.attr("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");t.wrap('<figure class="highlight"></figure>').before('<div class="highlight-tools '.concat(u,'">').concat(f+e+h,"</div>"))}):b.each(function(t,e){var o=$(this),n=o.attr("class").split(" ")[1];"plain"!==n&&void 0!==n||(n="Code"),n='<div class="code-lang">'.concat(n,"</div>"),o.prepend('<div class="highlight-tools '.concat(u,'">').concat(f+n+h,"</div>"))}):(m='<div class="highlight-tools '.concat(u,'">').concat(f+h,"</div>"),d?b.wrap('<figure class="highlight"></figure>').before(m):b.prepend(m)),void 0!==g&&$(".highlight-tools >.expand").on("click",function(){var t=$(this),e=t.parent().nextAll();t.toggleClass("closed"),e.is(":visible")?e.css("display","none"):e.css("display","block")}),p&&$(".highlight-tools >.copy-button").on("click",function(){var t=$(this).parents("figure.highlight");t.addClass("copy-true");var e,o=window.getSelection(),n=document.createRange();d?n.selectNodeContents(t.find("> pre code")[0]):n.selectNodeContents(t.find("table .code pre")[0]),o.removeAllRanges(),o.addRange(n),o.toString(),e=this,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(e).prev(".copy-notice").animate({opacity:0},650)},400)})):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport),o.removeAllRanges(),t.removeClass("copy-true")}))),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each(function(t,e){var o=$(e);o.attr("alt")&&(e=$('<div class="img-alt is-center">'+o.attr("alt")+"</div>"),o.after(e))}),(t=$(".justified-gallery")).length&&((e=t.find("img")).unwrap(),e.length&&e.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),w?btf.initJustifiedGallery(t):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.justifiedGallery.js),function(){btf.initJustifiedGallery(t)}),w=!0)),"null"!==GLOBAL_CONFIG.lightbox&&("fancybox"===GLOBAL_CONFIG.lightbox?($("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(t,e){var o=$(e).attr("data-lazy-src")?$(e).attr("data-lazy-src"):$(e).attr("src"),n=$(e).attr("alt")?$(e).attr("alt"):"";$(e).wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(n,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})):(o=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";o.update({background:e})})),a=!(i=0),s=$("#rightside"),c=$("#nav"),l="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow,$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop(),o=i<e;56<(i=e)?(o?(c.hasClass("visible")&&c.removeClass("visible"),r&&!0===a&&(chatBtnHide(),a=!1)):(c.hasClass("visible")||c.addClass("visible"),l&&!1===a&&(window.chatBtnShow(),a=!0)),c.addClass("fixed"),"0"===s.css("opacity")&&s.css({opacity:"1",transform:"translateX(-38px)"})):(0===e&&c.removeClass("fixed").removeClass("visible"),s.css({opacity:"",transform:""}))},200)),$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')}),(e=$(".hide-button")).length&&e.on("click",function(t){var e=$(this),o=$(this).next(".hide-content");e.toggleClass("open"),o.toggle(),e.hasClass("open")&&0<o.find(".justified-gallery").length&&btf.initJustifiedGallery(o.find(".justified-gallery"))}),$("#article-container .tabs").find(".tab > button:not(.tab-to-top)").on("click",function(t){var e,o=$(this),n=o.parent();n.hasClass("active")||(e=o.parents(".nav-tabs").next(),n.siblings(".active").removeClass("active"),n.addClass("active"),o=o.attr("data-href"),e.find("> .tab-item-content").removeClass("active"),e.find("> ".concat(o)).addClass("active"),0<(o=e.find(o).find(".justified-gallery")).length&&btf.initJustifiedGallery(o))}),$("#article-container .tabs .tab-to-top").on("click",function(){btf.scrollToDest($(this).parents(".tabs"))}),n=!1,$("#switch-comments-btn").on("click",function(){$("#post-comment > .comment-wrap > div").each(function(t,e){(e=$(e)).is(":visible")?e.hide():e.css({display:"block",animation:"tabshow .5s"})}),n||"function"!=typeof loadOtherComment||(n=!0,loadOtherComment())})},refreshFn(),$(window).on("resize",function(){window.innerWidth<768?v(0):$("#sidebar").hasClass("tocOpenPc")&&$("#nav").hasClass("fixed")?v(1):v(2)}),$("#mobile-sidebar-menus .expand").on("click",function(){$(this).parents(".menus_item").find("> .menus_item_child").slideToggle(),$(this).toggleClass("hide")}),$(window).on("touchmove",function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(o=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>o.limitCount?e+"\n\n\n"+o.languages.author+"\n"+o.languages.link+window.location.href+"\n"+o.languages.source+"\n"+o.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});