"use strict";var card_category_list=document.getElementsByClassName("card-category-list child"),item=document.getElementsByClassName("card-category-list-item");function toggle(e){"none"==e.parentElement.nextSibling.style.display?(e.parentElement.nextSibling.style.display="block",e.parentElement.nextSibling.style.height="100%",e.className=e.className.replace("fa-chevron-up","fa-chevron-down")):(e.parentElement.nextSibling.style.display="none",e.className=e.className.replace("fa-chevron-down","fa-chevron-up"))}for(var i=0;i<card_category_list.length;i++)card_category_list[i].style.display="none",card_category_list[i].style.transition="all 1s",card_category_list[i].previousSibling.innerHTML+='<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" onclick="toggle(this)"></i>';var top_up="<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif' title='回到顶部' >";document.getElementById("go-up").innerHTML+=top_up;for(var mobile_sidebar_menus=document.getElementById("mobile-sidebar-menus"),menus_item_child=mobile_sidebar_menus.getElementsByClassName("menus_item_child"),menus_expand=mobile_sidebar_menus.getElementsByClassName("expand"),i=0;i<menus_item_child.length;i++)menus_item_child[i].style.display="none",menus_expand[i].className+=" closed";var titleTime,OriginTitle=document.title;function qipao(){$("#page-header").circleMagic({radius:10,density:.2,color:"rgba(255,255,255,.4)",clearOffset:.99})}document.addEventListener("visibilitychange",function(){document.hidden?($('[rel="icon"]').attr("href","/img/favicon.ico"),document.title="(つェ⊂) 我藏好了哦~~",clearTimeout(titleTime)):($('[rel="icon"]').attr("href","/img/favicon.ico"),document.title="(*´∇｀*) 被你发现啦~~"+OriginTitle,titleTime=setTimeout(function(){document.title=OriginTitle},2e3))}),function(i){i.fn.circleMagic=function(e){var n,a,o,l,t=!0,s=[],r=i.extend({color:"rgba(255,0,0,.5)",radius:10,density:.3,clearOffset:.2},e),c=this[0];function d(){if(t)for(var e in l.clearRect(0,0,n,a),s)s[e].draw();requestAnimationFrame(d)}function m(){var e=this;function t(){e.pos.x=Math.random()*n,e.pos.y=a+100*Math.random(),e.alpha=.1+Math.random()*r.clearOffset,e.scale=.1+.3*Math.random(),e.speed=Math.random(),"random"===r.color?e.color="rgba("+Math.floor(255*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.random().toPrecision(2)+")":e.color=r.color}e.pos={},t(),this.draw=function(){e.alpha<=0&&t(),e.pos.y-=e.speed,e.alpha-=5e-4,l.beginPath(),l.arc(e.pos.x,e.pos.y,e.scale*r.radius,0,2*Math.PI,!1),l.fillStyle=e.color,l.fill(),l.closePath()}}!function(){var e;n=c.offsetWidth,a=c.offsetHeight,(e=document.createElement("canvas")).id="canvas",e.style.top=0,e.style.zIndex=0,e.style.position="absolute",c.appendChild(e),e.parentElement.style.overflow="hidden",(o=document.getElementById("canvas")).width=n,o.height=a,l=o.getContext("2d");for(var t=0;t<n*r.density;t++){var i=new m;s.push(i)}d()}(),window.addEventListener("scroll",function(){t=!(document.body.scrollTop>a)},!1),window.addEventListener("resize",function(){n=c.clientWidth,a=c.clientHeight,c.height=a+"px",o.width=n,o.height=a},!1)}}(jQuery),qipao();var xiaokang=new xkTool;xiaokang.footFish();