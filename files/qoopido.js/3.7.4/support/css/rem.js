/*! Qoopido.js library 3.7.4, 2015-08-14 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e,t){t.qoopido.register("support/css/rem",e,["../../support"])}(function(e,t,o,s){"use strict";var r=e.support;return r.addTest("/css/rem",function(e){var t=r.pool?r.pool.obtain("div"):document.createElement("div");try{t.style.fontSize="3rem"}catch(o){}/rem/.test(t.style.fontSize)?e.resolve():e.reject(),t.dispose&&t.dispose()})},this);