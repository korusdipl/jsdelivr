/*! Qoopido.js library 3.7.0, 2015-07-23 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e){window.qoopido.registerSingleton("url",e,["./base"])}(function(e,t,n,o,r,c,i){"use strict";function a(e){var t=c.createElement("a");return t.href=e||"",t}var s,u,f=new RegExp("[?&]?([^=]+)=([^&]*)","g");try{s=location}catch(l){s=a()}return u=new RegExp("".concat("^",s.protocol,"//",s.hostname),"i"),e.base.extend({resolve:function(e){return a(e).href},redirect:function(e,t){t=t||r,t.location.href=this.resolve(e)},getParameter:function(e){for(var t,n={},o=a(e).search.split("+").join(" ");t=f.exec(o);)n[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return n},isLocal:function(e){return u.test(this.resolve(e))}})});