$(".Home-mobile").imagesLoaded({},(function(){$(document).ready((function(){gsap.to(".Loading-Container svg",{opacity:0,delay:1,ease:"expo.in"}),gsap.to(".Loading-Container",{scale:0,delay:1,ease:"expo.in"});const e=new Lenis;requestAnimationFrame((function o(n){e.raf(n),requestAnimationFrame(o)})),setTimeout((()=>{e.scrollTo(0,0)}),100),setTimeout((()=>{e.stop()}),1001);let o=new Swiper(".mainSwiper",{loop:!1,direction:"vertical",autoplay:!1,speed:1e3,grabCursor:!1,watchSlidesProgress:!0,mousewheelControl:!0,mousewheel:!0,pagination:{el:".mainSwiper > .swiper-pagination",clickable:!0,type:"bullets",renderBullet:function(e,o){return console.log(o),'<span class="'+o+'"><span class="inner"></span></span>'}},on:{init:function(){let e=this.slides;console.log(e);for(let o=0;o<e.length;o++)e[o].setAttribute("data-index",o)},slideChange:function(e){let o=e.slides[this.activeIndex].getAttribute("data-index");switch(console.log("active Section",o),o){case"0":console.log("Section",0);break;case"1":console.log("Section",1);break;case"2":console.log("Section",2);break;case"3":console.log("Section",3);break;case"4":console.log("Section",4)}},reachEnd:function(){let o=this;setTimeout((function(){document.querySelector("body").classList.remove("fixeSec"),o.params.touchReleaseOnEdges=!0,o.params.mousewheel.releaseOnEdges=!0,e.start(),console.log("end")}),500)},reachBeginning:function(){let o=this;setTimeout((function(){console.log("begin"),document.querySelector("body").classList.add("fixeSec"),e.scrollTo(".Section-1"),o.params.touchReleaseOnEdges=!0,o.params.mousewheel.releaseOnEdges=!0,e.stop()}),500)}}});onEnter=()=>{console.log("onEnter")},onEnterBack=()=>{console.log("onEnterBack")},onLeave=()=>{console.log("onLeave")},onLeaveBack=()=>{console.log("onLeaveBack"),setTimeout((()=>{o.params.touchReleaseOnEdges=!0,o.params.mousewheel.releaseOnEdges=!0,document.querySelector("body").classList.add("fixeSec"),e.stop()}),100)},gsap.to(".section-3 ",{scrollTrigger:{trigger:".Home-mobile",start:"top 0",end:"bottom bottom",scrub:!0,onEnter:()=>onEnter(),onEnterBack:()=>onEnterBack(),onLeave:()=>onLeave(),onLeaveBack:()=>onLeaveBack()}});new Swiper(".swiper-Banners",{slidesPerView:1,spaceBetween:0,effect:"slide",mousewheelControl:!0,mousewheel:!0,speed:1e3,autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-Banners .swiper-button-next",prevEl:".swiper-Banners .swiper-button-prev"}})}))}));