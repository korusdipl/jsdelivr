/*! esri-leaflet-heatmap-feature-layer - v1.0.0-rc.4 - 2015-07-10
*   Copyright (c) 2015 Environmental Systems Research Institute, Inc.
*   Apache License*/

!function(a){if("function"==typeof define&&define.amd?define(["leaflet","esri-leaflet"],function(L,b){return a(L,b)}):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=a(require("leaflet"),require("esri-leaflet"))),window&&window.L&&window.L.esri){var b=a(L,L.esri);window.L.esri.Layers.HeatmapFeatureLayer=b,window.L.esri.HeatmapFeatureLayer=b,window.L.esri.Layers.heatmapFeatureLayer=function(a){return new b(a)},window.L.esri.heatmapFeatureLayer=function(a){return new b(a)}}}(function(L,a){var b=a.Layers.FeatureManager.extend({initialize:function(b){a.Layers.FeatureManager.prototype.initialize.call(this,b),b=L.setOptions(this,b),this._cache={},this._active={},this.heat=new window.L.heatLayer([],b)},onAdd:function(b){a.Layers.FeatureManager.prototype.onAdd.call(this,b),this._map.addLayer(this.heat)},onRemove:function(b){a.Layers.FeatureManager.prototype.onRemove.call(this,b),this._map.removeLayer(this.heat)},createLayers:function(a){for(var b=a.length-1;b>=0;b--){var c=a[b],d=c.id,e=new L.LatLng(c.geometry.coordinates[1],c.geometry.coordinates[0]);this._cache[d]=e,!this._active[d]&&(!this.options.timeField||this.options.timeField&&this._featureWithinTimeRange(c))&&(this._active[d]=e,this.heat._latlngs.push(e))}this.heat.redraw()},addLayers:function(a){for(var b=a.length-1;b>=0;b--){var c=a[b];if(!this._active[c]){var d=this._cache[c];this.heat._latlngs.push(d),this._active[c]=d}}this.heat.redraw()},removeLayers:function(a,b){for(var c=[],d=a.length-1;d>=0;d--){var e=a[d];this._active[e]&&delete this._active[e],this._cache[e]&&b&&delete this._cache[e]}for(var f in this._active)c.push(this._active[f]);this.heat.setLatLngs(c)}});return b});
//# sourceMappingURL=esri-leaflet-heatmap-feature-layer.js.map