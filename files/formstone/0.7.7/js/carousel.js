/*! formstone v0.7.7 [carousel.js] 2015-07-20 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){J.iterate.call(K,i)}function d(){K=a(G.base)}function e(c){var e,f=[H.base,c.customClass,c.rtl?H.rtl:H.ltr];c.maxWidth=c.maxWidth===1/0?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",c.customControls="object"===a.type(c.controls)&&c.controls.previous&&c.controls.next,b.support.transform||(c.useMargin=!0);var i="",k="",l=[H.control,H.control_previous].join(" "),m=[H.control,H.control_next].join(" ");if(c.controls&&!c.customControls&&(i+='<div class="'+H.controls+'">',i+='<button type="button" class="'+l+'">'+c.labels.previous+"</button>",i+='<button type="button" class="'+m+'">'+c.labels.next+"</button>",i+="</div>"),c.pagination&&(k+='<div class="'+H.pagination+'">',k+="</div>"),c.autoHeight&&f.push(H.auto_height),this.addClass(f.join(" ")).wrapInner('<div class="'+H.wrapper+'"><div class="'+H.container+'"><div class="'+H.canister+'"></div></div></div>').append(i).wrapInner('<div class="'+H.viewport+'"></div>').append(k),c.$viewport=this.find(G.viewport).eq(0),c.$container=this.find(G.container).eq(0),c.$canister=this.find(G.canister).eq(0),c.$controls=this.find(G.controls).eq(0),c.$pagination=this.find(G.pagination).eq(0),c.$paginationItems=c.$pagination.find(G.page),c.$controlPrevious=c.$controlNext=a(""),c.customControls?(c.$controlPrevious=a(c.controls.previous).addClass(l),c.$controlNext=a(c.controls.next).addClass(m)):(c.$controlPrevious=c.$controls.find(G.control_previous),c.$controlNext=c.$controls.find(G.control_next)),c.$controlItems=c.$controlPrevious.add(c.$controlNext),c.index=0,c.enabled=!1,c.leftPosition=0,c.autoTimer=null,c.resizeTimer=null,"object"===a.type(c.show)){var n=c.show,o=[];for(e in n)n.hasOwnProperty(e)&&o.push(e);o.sort(J.sortAsc),c.show={};for(e in o)o.hasOwnProperty(e)&&(c.show[o[e]]={width:parseInt(o[e]),count:n[o[e]]})}j(c),a.fsMediaquery("bind",c.rawGuid,c.mq,{enter:function(){h.call(c.$el,c)},leave:function(){g.call(c.$el,c)}}),d()}function f(b){J.clearTimer(b.autoTimer),J.startTimer(b.resizeTimer),g.call(this,b),a.fsMediaquery("unbind",b.rawGuid),b.$controlItems.removeClass([G.control,H.control_previous,G.control_next,G.visible].join(" ")).off(I.namespace),b.$images.off(I.namespace),b.$canister.fsTouch("destroy"),b.$items.removeClass([H.item,H.visible].join(" ")).unwrap().unwrap().unwrap().unwrap(),b.pagination&&b.$pagination.remove(),b.controls&&b.$controls.remove(),this.removeClass([H.base,H.ltr,H.rtl,H.enabled,H.animated,b.customClass].join(" ")),d()}function g(a){a.enabled&&(J.clearTimer(a.autoTimer),a.enabled=!1,this.removeClass([H.enabled,H.animated].join(" ")).off(I.namespace),a.$canister.fsTouch("destroy").off(I.namespace).attr("style","").css(M,"none"),a.$items.css({width:"",height:""}),a.$images.off(I.namespace),a.$controlItems.off(I.namespace),a.$pagination.html(""),u(a),a.useMargin?a.$canister.css({marginLeft:""}):a.$canister.css(L,""),a.index=0)}function h(a){a.enabled||(a.enabled=!0,this.addClass(H.enabled).on(I.clickTouchStart,G.page,a,s),a.$controlItems.on(I.clickTouchStart,a,r),a.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(I.panStart,a,y).on(I.pan,a,z).on(I.panEnd,a,A).on(I.swipe,a,B).css(M,""),j(a),a.$images.on(I.load,a,p),a.autoAdvance&&(a.autoTimer=J.startTimer(a.autoTimer,a.autoTime,function(){q(a)},!0)),i.call(this,a))}function i(a){if(a.enabled){var b,c,d,e,f,g,h,i;if(a.count=a.$items.length,a.count<1)return u(a),void a.$canister.css({height:""});for(this.removeClass(H.animated),a.containerWidth=a.$container.outerWidth(!1),a.visible=x(a),a.perPage=a.paged?1:a.visible,a.itemMargin=parseInt(a.$items.eq(0).css("marginRight"))+parseInt(a.$items.eq(0).css("marginLeft")),a.itemWidth=(a.containerWidth-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.containerWidth,a.pageCount=Math.ceil(a.count/a.perPage),a.canisterWidth=(a.pageWidth+a.itemMargin)*a.pageCount,a.$canister.css({width:a.canisterWidth,height:""}),a.$items.css({width:a.itemWidth,height:""}).removeClass(H.visible),a.pages=[],c=0,d=0;c<a.count;c+=a.perPage){if(f=a.$items.slice(c,c+a.perPage),h=0,f.length<a.perPage&&(f=0===c?a.$items:a.$items.slice(a.$items.length-a.perPage)),g=f.eq(a.rtl?f.length-1:0),i=g.position().left,a.autoHeight)for(e=0;e<f.length;e++)b=f.eq(e).outerHeight(),b>h&&(h=b);else h=g.outerHeight();a.pages.push({left:a.rtl?i-(a.canisterWidth-a.pageWidth-a.itemMargin):i,height:h,$items:f}),h>a.itemHeight&&(a.itemHeight=h),d++}a.paged&&(a.pageCount-=a.count%a.visible),a.pageCount<=0&&(a.pageCount=1),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight?a.$canister.css({height:a.pages[0].height}):a.matchHeight&&a.$items.css({height:a.itemHeight});var j="";for(c=0;c<a.pageCount;c++)j+='<button type="button" class="'+H.page+'">'+(c+1)+"</button>";a.$pagination.html(j),a.pageCount<=1?u(a):v(a),a.$paginationItems=a.$el.find(G.page),t(a,a.index,!1),setTimeout(function(){a.$el.addClass(H.animated)},5)}}function j(a){a.$items=a.$canister.children().addClass(H.item),a.$images=a.$canister.find("img"),a.totalImages=a.$images.length}function k(a){a.enabled&&l.call(this,a,!1)}function l(a,b){a.$images.off(I.namespace),b!==!1&&a.$canister.html(b),a.index=0,j(a),i.call(this,a)}function m(a,b){a.enabled&&(J.clearTimer(a.autoTimer),t(a,b-1))}function n(a){var b=a.index-1;a.infinite&&0>b&&(b=a.pageCount-1),t(a,b)}function o(a){var b=a.index+1;a.infinite&&b>=a.pageCount&&(b=0),t(a,b)}function p(a){var b=a.data;b.resizeTimer=J.startTimer(b.resizeTimer,20,function(){i.call(b.$el,b)})}function q(a){var b=a.index+1;b>=a.pageCount&&(b=0),t(a,b)}function r(b){J.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(H.control_next)?1:-1);J.clearTimer(c.autoTimer),t(c,d)}function s(b){J.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));J.clearTimer(c.autoTimer),t(c,d)}function t(a,b,c){0>b&&(b=a.infinite?a.pageCount-1:0),b>=a.pageCount&&(b=a.infinite?0:a.pageCount-1),a.count<1||(a.pages[b]&&(a.leftPosition=-a.pages[b].left),a.leftPosition=D(a,a.leftPosition),a.useMargin?a.$canister.css({marginLeft:a.leftPosition}):c===!1?(a.$canister.css(M,"none").css(L,"translateX("+a.leftPosition+"px)"),setTimeout(function(){a.$canister.css(M,"")},5)):a.$canister.css(L,"translateX("+a.leftPosition+"px)"),a.$items.removeClass(H.visible),a.pages[b].$items.addClass(H.visible),a.autoHeight&&a.$canister.css({height:a.pages[b].height}),c!==!1&&b!==a.index&&(a.infinite||b>-1&&b<a.pageCount)&&a.$el.trigger(I.update,[b]),a.index=b,w(a))}function u(a){a.$controls.removeClass(H.visible),a.$controlItems.removeClass(H.visible),a.$pagination.removeClass(H.visible)}function v(a){a.$controls.addClass(H.visible),a.$controlItems.addClass(H.visible),a.$pagination.addClass(H.visible)}function w(a){a.$paginationItems.removeClass(H.active).eq(a.index).addClass(H.active),a.infinite?a.$controlItems.addClass(H.visible):a.pageCount<1?a.$controlItems.removeClass(H.visible):(a.$controlItems.addClass(H.visible),a.index<=0?a.$controlPrevious.removeClass(H.visible):(a.index>=a.pageCount||a.leftPosition===a.maxMove)&&a.$controlNext.removeClass(H.visible))}function x(c){if("object"===a.type(c.show)){for(var d in c.show)if(c.show.hasOwnProperty(d)&&b.windowWidth>=c.show[d].width)return c.fill&&c.count<c.show[d].count?c.count:c.show[d].count;return 1}return c.fill&&c.count<c.show?c.count:c.show}function y(a){var b=a.data;if(b.useMargin)b.leftPosition=parseInt(b.$canister.css("marginLeft"));else{var c=b.$canister.css(L).split(",");b.leftPosition=parseInt(c[4])}b.$canister.css(M,"none"),z(a),b.isTouching=!0}function z(a){var b=a.data;b.touchLeft=D(b,b.leftPosition+a.deltaX),b.useMargin?b.$canister.css({marginLeft:b.touchLeft}):b.$canister.css(L,"translateX("+b.touchLeft+"px)")}function A(a){var b=a.data,c=E(b,a),d=a.deltaX>-50&&a.deltaX<50?b.index:b.index+c;C(b,d)}function B(a){var b=a.data,c=E(b,a),d=b.index+c;C(b,d)}function C(a,b){a.$canister.css(M,""),t(a,b),a.isTouching=!1}function D(a,b){return isNaN(b)?b=0:a.rtl?(b>a.maxMove&&(b=a.maxMove),0>b&&(b=0)):(b<a.maxMove&&(b=a.maxMove),b>0&&(b=0)),b}function E(a,b){return a.rtl?"right"===b.directionX?1:-1:"left"===b.directionX?1:-1}var F=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},matchHeight:!1,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,show:1,rtl:!1,useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","controls","control","pagination","page","animated","enabled","visible","active","auto_height","control_previous","control_next"],events:{update:"update",panStart:"panstart",pan:"pan",panEnd:"panend",swipe:"swipe"},methods:{_construct:e,_destruct:f,_resize:c,disable:g,enable:h,jump:m,previous:n,next:o,reset:k,resize:i,update:l}}),G=F.classes,H=G.raw,I=F.events,J=F.functions,K=[],L=b.transform,M=b.transition}(jQuery,Formstone);