(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{400:function(t,e,n){"use strict";n.r(e);n(43);var r=n(8),c=(n(14),n(49),{data:function(){return{loading:!1,prouducts:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchDefaultProduct();case 2:case"end":return e.stop()}}),e)})))()},methods:{fetchDefaultProduct:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/unauthenticate/speacialCategory").then((function(e){t.prouducts=e.data.data})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return e.stop()}}),e)})))()}}}),o=n(34),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"category"},[e("div",{staticClass:"row px-2"},[t.loading?e("div",{staticClass:"loading-indicator",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"loader-container"},[e("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),e("img",{attrs:{src:"/loader/loader.gif",loading:"lazy",alt:"Loader"}})],1)]):t._e(),t._v(" "),t._l(t.prouducts,(function(n){return e("div",{key:n.id,staticClass:"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3"},[e("Nuxt-link",{attrs:{to:"/category/category-grid?slug=".concat(n.slug)}},[e("div",{staticClass:"cat_div"},[e("img",{staticClass:"img-fluid",attrs:{src:n.image,loading:"lazy"}}),t._v(" "),e("p",[t._v(t._s(n.name))])])])],1)}))],2)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);