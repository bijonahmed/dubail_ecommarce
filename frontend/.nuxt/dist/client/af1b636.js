(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{400:function(t,n,e){"use strict";e.r(n);e(43);var r=e(8),c=(e(14),e(49),{data:function(){return{loading:!1,prouducts:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.fetchDefaultProduct();case 2:case"end":return n.stop()}}),n)})))()},methods:{fetchDefaultProduct:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.$axios.get("/unauthenticate/limitedProducts").then((function(n){t.prouducts=n.data})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return n.stop()}}),n)})))()}}}),o=e(34),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"category"},[n("div",{staticClass:"row px-2"},[t.loading?n("div",{staticClass:"loading-indicator",staticStyle:{"text-align":"center"}},[n("div",{staticClass:"loader-container"},[n("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),n("img",{attrs:{src:"/loader/loader.gif",loading:"lazy",alt:"Loader"}})],1)]):t._e(),t._v(" "),t._l(t.prouducts,(function(e){return n("div",{key:e.id,staticClass:"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3"},[n("Nuxt-link",{attrs:{to:"/product-details/".concat(e.slug)}},[n("div",{staticClass:"cat_div"},[n("img",{staticClass:"img-fluid",attrs:{src:e.thumnail,loading:"lazy"}}),t._v(" "),n("p",[t._v(t._s(e.name))])])])],1)}))],2)])])])])}),[],!1,null,null,null);n.default=component.exports}}]);