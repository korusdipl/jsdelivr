/*! Qoopido.js library 3.6.8, 2015-07-09 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e){window.qoopido.register("jquery/plugins/emerge",e,["../../dom/element/emerge","jquery"])}(function(e,r,t,n,o,c,i){"use strict";var u,g=e.jquery||o.jQuery,a=t.pop(),d="emerged",m="demerged",s="".concat(d,".",a),f="".concat(m,".",a);return g.fn[a]=function(e){return this.each(function(){u.create(this,e)})},u=e["dom/element/emerge"].extend({_constructor:function(e,r){var t=this,n=g(e);u._parent._constructor.call(t,e,r),t.on(d,function(e){n.trigger(s,{priority:e.data})}),t.on(m,function(){n.trigger(f)})}})});