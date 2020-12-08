"use strict";function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}$(function(){function y(t){var e=$("#nav");(t=0===t||(1===t?o+n>e.width()-a-30:o+n>e.width()-30))?e.addClass("hide-menu"):e.removeClass("hide-menu")}function C(){$("#sidebar").removeClass("tocOpenPc").animate({left:"-300px"},400),$("#menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#nav").hasClass("hide-menu")&&setTimeout(function(){y(2)},400)}function w(){$("#nav").hasClass("hide-menu")||y(1),$("#sidebar").addClass("tocOpenPc").animate({left:0},400),$("#menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400)}var i,o=$("#site-name").width(),n=$("#menus").width(),a=$("#sidebar").width()||300,L=!1,t=$("#rightside");function O(t){t.each(function(t,e){var i=$(e),e=i.attr("datetime");i.text(btf.diffDate(e,!0)).css("display","inline")})}t.on("click","#readmode",function(){$("body").toggleClass("read-mode")}),$("#darkmode").length&&t.on("click","#darkmode",function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&$("#disqus_thread").children().length&&setTimeout(function(){return window.disqusReset()},200)}),t.on("click","#rightside_config",function(){return $("#rightside-config-hide").toggleClass("show")}),t.on("click","#go-up",function(){return btf.scrollToDest("body")}),window.refreshFn=function(){var t,i,e,o,n,a,s,c,l,r,d,h,f,u,p,g,m,b,v;window.innerWidth<768?y(0):y(2),$("#nav").addClass("show"),GLOBAL_CONFIG_SITE.isPost?(1024<window.innerWidth&&$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){w()},400),$("#toggle-sidebar").on("click",function(){var t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on"),(t?C:w)()}),GLOBAL_CONFIG_SITE.isSidebar&&function(){var c=$("#sidebar"),l=c.find(".toc-child"),r=c.find(".toc-link"),o=$("#article-container");l.hide(),$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop();i(e),n(e)},100));var i=function(t){var e=o.height(),i=$(window).height(),e=(t-o.offset().top)/(i<e?e-i:$(document).height()-i),i=Math.round(100*e),i=100<i?100:i<=0?0:i;c.find(".progress-num").text(i),c.find(".sidebar-toc__progress-bar").animate({width:i+"%"},100)},d=GLOBAL_CONFIG.isanchor,h=5<=GLOBAL_CONFIG.hexoversion.split(".")[0],f=o.find("h1,h2,h3,h4,h5,h6"),n=function(e){if(0===r.length)return!1;var i="";f.each(function(){var t=$(this);e>t.offset().top-70&&(i=h?"#"+encodeURI($(this).attr("id")):"#"+$(this).attr("id"))}),""===i&&(r.removeClass("active"),l.hide());var t,o,n,a,s=r.filter(".active");i&&s.attr("href")!==i&&(d&&(a=i,window.history.replaceState&&a!==window.location.hash&&window.history.replaceState(void 0,void 0,a)),r.removeClass("active"),(t=r.filter('[href="'+i+'"]')).addClass("active"),o=e,s=(n=t).offset().top,n=(a=c.find(".sidebar-toc__content")).scrollTop(),s>o+$(window).height()-100&&a.scrollTop(n+100),s<o+100&&a.scrollTop(n-100),(t=(n=0<(n=t.parents(".toc-child")).length?n.last():t).closest(".toc-item").find(".toc-child")).is(":visible")||t.fadeIn(400),n.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide())}}(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(g=GLOBAL_CONFIG.noticeOutdate,(m=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=g.limitDay&&(m='<div class="post-outdate-notice">'.concat(g.messagePrev+" "+m+" "+g.messageNext,"</div>"),"top"===g.position?$("#article-container").prepend(m):$("#article-container").append(m))),GLOBAL_CONFIG.relativeDate.post&&O($("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&O($("#recent-posts time")),!GLOBAL_CONFIG.runtime||(b=$("#runtimeshow")).length&&(v=b.attr("data-publishDate"),b.text(btf.diffDate(v)+" "+GLOBAL_CONFIG.runtime)),(b=$("#last-push-date")).length&&(v=b.attr("data-lastPushDate"),v=btf.diffDate(v,!0),b.text(v)),$("#aside-cat-list .card-category-list-item.parent i").on("click",function(t){t.preventDefault(),$(this).toggleClass("expand").parents(".parent").next().slideToggle(300)})),function(){var e=$("#toggle-menu"),i=$("#mobile-sidebar-menus"),o=$("#mobile-toc-button"),n=$("#menu_mask"),a=$("body"),s=$("#sidebar");function t(t){btf.sidebarPaddingR(),a.css("overflow","hidden"),n.fadeIn(),"menu"===t&&(e.removeClass("close").addClass("open"),i.addClass("open")),"toc"===t&&(o.removeClass("close").addClass("open"),s.addClass("tocOpenMobile").css({transform:"translate3d(-100%,0,0)",left:""}))}function c(t){a.css({overflow:"","padding-right":""}),n.fadeOut(),"menu"===t&&(e.removeClass("open").addClass("close"),i.removeClass("open")),"toc"===t&&(o.removeClass("open").addClass("close"),s.removeClass("tocOpenMobile").css({transform:""}))}function l(t){t.matches?s.hasClass("tocOpenPc")&&C():(d.hasClass("on")&&w(),o.hasClass("open")&&c("toc"))}e.on("click",function(){t("menu")}),o.on("click",function(){t("toc")}),n.on("click touchstart",function(t){e.hasClass("open")&&c("menu"),o.hasClass("open")&&c("toc")}),$(window).on("resize",function(t){e.is(":visible")||e.hasClass("open")&&c("menu")});var r=window.matchMedia("(max-width: 1024px)"),d=$("#toggle-sidebar");r.addListener(l),document.addEventListener("pjax:send",function(){r.removeListener(l)}),s.find(".toc-link").on("click",function(t){t.preventDefault(),btf.scrollToDest(decodeURI($(this).attr("href"))),window.innerWidth<1024&&c("toc")})}(),GLOBAL_CONFIG_SITE.isHome&&$("#scroll-down").on("click",function(){btf.scrollToDest("#content-inner")}),GLOBAL_CONFIG.highlight&&(p=GLOBAL_CONFIG.highlight.highlightCopy,g=GLOBAL_CONFIG.highlight.highlightLang,m=GLOBAL_CONFIG_SITE.isHighlightShrink,b=p||g||void 0!==m,v="highlighjs"===GLOBAL_CONFIG.highlight.plugin?$("figure.highlight"):$('pre[class*="language-"]'),b&&v.length&&(d="prismjs"===GLOBAL_CONFIG.highlight.plugin,u=!(f=h="")===m?"closed":"",void 0!==m&&(h='<i class="fas fa-angle-down expand '.concat(u,'"></i>')),p&&(f='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),g?d?v.each(function(){var t=$(this),e=void 0!==t.attr("data-language")?t.attr("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");t.wrap('<figure class="highlight"></figure>').before('<div class="highlight-tools '.concat(u,'">').concat(h+e+f,"</div>"))}):v.each(function(t,e){var i=$(this),o=i.attr("class").split(" ")[1];"plain"!==o&&void 0!==o||(o="Code"),o='<div class="code-lang">'.concat(o,"</div>"),i.prepend('<div class="highlight-tools '.concat(u,'">').concat(h+o+f,"</div>"))}):(g='<div class="highlight-tools '.concat(u,'">').concat(h+f,"</div>"),d?v.wrap('<figure class="highlight"></figure>').before(g):v.prepend(g)),void 0!==m&&$(".highlight-tools >.expand").on("click",function(){var t=$(this),e=t.parent().nextAll();t.toggleClass("closed"),e.is(":visible")?e.css("display","none"):e.css("display","block")}),p&&$(".highlight-tools >.copy-button").on("click",function(){var t=$(this).parents("figure.highlight");t.addClass("copy-true");var e,i=window.getSelection(),o=document.createRange();d?o.selectNodeContents(t.find("> pre code")[0]):o.selectNodeContents(t.find("table .code pre")[0]),i.removeAllRanges(),i.addRange(o),i.toString(),e=this,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(e).prev(".copy-notice").animate({opacity:0},650)},400)})):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport),i.removeAllRanges(),t.removeClass("copy-true")}))),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each(function(t,e){var i=$(e);i.attr("alt")&&(e=$('<div class="img-alt is-center">'+i.attr("alt")+"</div>"),i.after(e))}),(t=$(".justified-gallery")).length&&((e=t.find("img")).unwrap(),e.length&&e.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),L?btf.initJustifiedGallery(t):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.justifiedGallery.js),function(){btf.initJustifiedGallery(t)}),L=!0)),"null"!==GLOBAL_CONFIG.lightbox&&("fancybox"===GLOBAL_CONFIG.lightbox?($("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(t,e){var i=$(e).attr("data-lazy-src")?$(e).attr("data-lazy-src"):$(e).attr("src"),o=$(e).attr("alt")?$(e).attr("alt"):"";$(e).wrap('<a href="'.concat(i,'" data-fancybox="group" data-caption="').concat(o,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})):(i=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";i.update({background:e})})),a=!(n=0),s=$("#rightside"),c=$("#nav"),l="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow,$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop(),i=n<e;56<(n=e)?(i?(c.hasClass("visible")&&c.removeClass("visible"),r&&!0===a&&(chatBtnHide(),a=!1)):(c.hasClass("visible")||c.addClass("visible"),l&&!1===a&&(window.chatBtnShow(),a=!0)),c.addClass("fixed"),"0"===s.css("opacity")&&s.css({opacity:"1",transform:"translateX(-38px)"})):(0===e&&c.removeClass("fixed").removeClass("visible"),s.css({opacity:"",transform:""}))},200)),$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')}),(e=$(".hide-button")).length&&e.on("click",function(t){var e=$(this),i=$(this).next(".hide-content");e.toggleClass("open"),i.toggle(),e.hasClass("open")&&0<i.find(".justified-gallery").length&&btf.initJustifiedGallery(i.find(".justified-gallery"))}),$("#article-container .tabs").find(".tab > button:not(.tab-to-top)").on("click",function(t){var e,i=$(this),o=i.parent();o.hasClass("active")||(e=i.parents(".nav-tabs").next(),o.siblings(".active").removeClass("active"),o.addClass("active"),i=i.attr("data-href"),e.find("> .tab-item-content").removeClass("active"),e.find("> ".concat(i)).addClass("active"),0<(i=e.find(i).find(".justified-gallery")).length&&btf.initJustifiedGallery(i))}),$("#article-container .tabs .tab-to-top").on("click",function(){btf.scrollToDest($(this).parents(".tabs"))}),o=!1,$("#switch-comments-btn").on("click",function(){$("#post-comment > .comment-wrap > div").each(function(t,e){(e=$(e)).is(":visible")?e.hide():e.css({display:"block",animation:"tabshow .5s"})}),o||"function"!=typeof loadOtherComment||(o=!0,loadOtherComment())})},refreshFn(),$(window).on("resize",function(){window.innerWidth<768?y(0):$("#sidebar").hasClass("tocOpenPc")&&$("#nav").hasClass("fixed")?y(1):y(2)}),$("#mobile-sidebar-menus .expand").on("click",function(){$(this).parents(".menus_item").find("> .menus_item_child").slideToggle(),$(this).toggleClass("hide")}),$(window).on("touchmove",function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(i=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>i.limitCount?e+"\n\n\n"+i.languages.author+"\n"+i.languages.link+window.location.href+"\n"+i.languages.source+"\n"+i.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});