/*! Qoopido.js library 3.7.0, 2015-07-23 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e){window.qoopido.register("support/element/canvas",e,["../../support"])}(function(e,t,o,n,s,a,r){"use strict";var p=e.support;return p.addTest("/element/canvas",function(e){var t=p.pool?p.pool.obtain("canvas"):a.createElement("canvas");t.getContext&&t.getContext("2d")?e.resolve():e.reject(),t.dispose&&t.dispose()})});