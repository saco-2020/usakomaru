(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{357:function(t,e,r){var content=r(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("1930a9a0",content,!0,{sourceMap:!1})},358:function(t,e,r){var content=r(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("445c8038",content,!0,{sourceMap:!1})},359:function(t,e,r){"use strict";var n=r(364),o=r(365);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},360:function(t,e,r){"use strict";var n=r(357);r.n(n).a},361:function(t,e,r){(e=r(15)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},362:function(t,e,r){"use strict";var n=r(358);r.n(n).a},363:function(t,e,r){(e=r(15)(!1)).push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=e},364:function(t,e,r){"use strict";var n=r(4),o=r(18),l=r(115),c=r(48),f=r(237),d=r(236),v=r(235),h=r(25),y=r(12),m=r(167),x=r(116),w=r(170);t.exports=function(t,e,r){var O=-1!==t.indexOf("Map"),j=-1!==t.indexOf("Weak"),k=O?"set":"add",S=o[t],C=S&&S.prototype,_=S,T={},P=function(t){var e=C[t];c(C,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(j&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return j&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(j&&!h(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(l(t,"function"!=typeof S||!(j||C.forEach&&!y((function(){(new S).entries().next()})))))_=r.getConstructor(e,t,O,k),f.REQUIRED=!0;else if(l(t,!0)){var D=new _,E=D[k](j?{}:-0,1)!=D,z=y((function(){D.has(1)})),L=m((function(t){new S(t)})),V=!j&&y((function(){for(var t=new S,e=5;e--;)t[k](e,e);return!t.has(-0)}));L||((_=e((function(e,r){v(e,_,t);var n=w(new S,e,_);return null!=r&&d(r,n[k],n,O),n}))).prototype=C,C.constructor=_),(z||V)&&(P("delete"),P("has"),O&&P("get")),(V||E)&&P(k),j&&C.clear&&delete C.clear}return T[t]=_,n({global:!0,forced:_!=S},T),x(_,t),j||r.setStrong(_,t,O),_}},365:function(t,e,r){"use strict";var n=r(38).f,o=r(93),l=r(239),c=r(94),f=r(235),d=r(236),v=r(168),h=r(169),y=r(33),m=r(237).fastKey,x=r(82),w=x.set,O=x.getterFor;t.exports={getConstructor:function(t,e,r,v){var h=t((function(t,n){f(t,h,e),w(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=n&&d(n,t[v],t,r)})),x=O(e),j=function(t,e,r){var n,o,l=x(t),c=k(t,e);return c?c.value=r:(l.last=c={index:o=m(e,!0),key:e,value:r,previous:n=l.last,next:void 0,removed:!1},l.first||(l.first=c),n&&(n.next=c),y?l.size++:t.size++,"F"!==o&&(l.index[o]=c)),t},k=function(t,e){var r,n=x(t),o=m(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return l(h.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=x(this),r=k(this,t);if(r){var n=r.next,o=r.previous;delete e.index[r.index],r.removed=!0,o&&(o.next=n),n&&(n.previous=o),e.first==r&&(e.first=n),e.last==r&&(e.last=o),y?e.size--:this.size--}return!!r},forEach:function(t){for(var e,r=x(this),n=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!k(this,t)}}),l(h.prototype,r?{get:function(t){var e=k(this,t);return e&&e.value},set:function(t,e){return j(this,0===t?0:t,e)}}:{add:function(t){return j(this,t=0===t?0:t,t)}}),y&&n(h.prototype,"size",{get:function(){return x(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=O(e),l=O(n);v(t,e,(function(t,e){w(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=l(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},366:function(t,e,r){"use strict";r(362);var n=r(81),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"/vuetify-logo.svg"}})}),[],!1,null,null,null);e.a=component.exports},367:function(t,e,r){"use strict";r(360);var n=r(81),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.a=component.exports},371:function(t,e,r){"use strict";r(10),r(7),r(8),r(51),r(141),r(91),r(359),r(24),r(13),r(14),r(11),r(17),r(36),r(55),r(74),r(75),r(9),r(56);var n=r(2),o=(r(238),r(0)),l=r(73),c=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(m)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var f in r)c+=String(r[f]);var d=O.get(c);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var n=r[t],o=w(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),O.set(c,d)}(),t(r.tag,Object(l.a)(data,{class:d}),o)}})},372:function(t,e,r){"use strict";r(10),r(29),r(7),r(8),r(51),r(141),r(359),r(13),r(14),r(11),r(17),r(36),r(64),r(55),r(74),r(9),r(56);var n=r(2),o=(r(238),r(0)),l=r(73),c=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(r,n){return r[t+Object(c.D)(n)]=e(),r}),{})}var m=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},x=y("align",(function(){return{type:String,default:null,validator:m}})),w=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},O=y("justify",(function(){return{type:String,default:null,validator:w}})),j=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},k=y("alignContent",(function(){return{type:String,default:null,validator:j}})),S={align:Object.keys(x),justify:Object.keys(O),alignContent:Object.keys(k)},C={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,r){var n=C[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var T=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},x),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:j}},k),render:function(t,e){var r=e.props,data=e.data,o=e.children,c="";for(var f in r)c+=String(r[f]);var d=T.get(c);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var n=r[t],o=_(e,t,n);o&&d.push(o)}));d.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),T.set(c,d)}(),t(r.tag,Object(l.a)(data,{staticClass:"row",class:d}),o)}})},411:function(t,e,r){"use strict";r.r(e);var n=r(367),o=r(366),l={components:{Logo:n.a,VuetifyLogo:o.a},data:function(){return{headers:[{text:"薬局名",align:"start",sortable:!1,value:"name"},{text:"頭痛薬",value:"head"},{text:"腹痛薬",value:"stomache"},{text:"解熱剤",value:"fever"},{text:"風邪薬",value:"chill"},{text:"軟膏",value:"diabetic"}],desserts:[{name:"A薬局",head:1,stomache:2,fever:3,chill:8,diabetic:0},{name:"A薬局(予測)",head:14,stomache:5,fever:10,chill:13,diabetic:4},{name:"B薬局",head:4,stomache:3,fever:4,chill:0,diabetic:2},{name:"B薬局(予測)",head:5,stomache:3,fever:8,chill:5,diabetic:16},{name:"C薬局",head:10,stomache:3,fever:6,chill:8,diabetic:18},{name:"C薬局(予測)",head:14,stomache:2,fever:24,chill:34,diabetic:4},{name:"D薬局",head:14,stomache:2,fever:24,chill:34,diabetic:4},{name:"D薬局(予測)",head:14,stomache:3,fever:24,chill:36,diabetic:9}]}}},c=r(81),f=r(117),d=r.n(f),v=r(371),h=r(139),y=r(372),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",[t._v("可視化")])]),t._v(" "),r("br"),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("h3",[t._v("地表温度")]),t._v(" "),r("div",[r("v-img",{attrs:{src:"/tanzania.jpeg"}})],1)]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("h3",[t._v("飢餓指数")]),t._v(" "),r("div",[r("v-img",{attrs:{src:"/tanzania.jpeg"}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:v.a,VImg:h.a,VRow:y.a})}}]);