(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{404:function(t,e,n){"use strict";n.r(e);var c=n(8),r=(n(14),n(49),{data:function(){return{loading:!1,sellers:[],count:""}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchDefaultProduct();case 2:case"end":return e.stop()}}),e)})))()},methods:{fetchDefaultProduct:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/unauthenticate/allsellers").then((function(e){t.sellers=e.data.data,t.count=e.data.data_count})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return e.stop()}}),e)})))()}}}),l=n(34),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"category"},[e("div",{staticClass:"row"},[e("div",{staticClass:"sell_title bg_appliance justify-content-center"},[e("div",{staticClass:"text-center"},[e("h5",[t._v("Top "+t._s(t.count)+" Offical Store")])])])]),t._v(" "),e("div",{staticClass:"row px-2"},t._l(t.sellers,(function(t){return e("div",{key:t.id,staticClass:"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3"},[e("Nuxt-link",{attrs:{to:"/business/".concat(t.slug)}},[e("div",{staticClass:"cat_div"},[e("img",{staticClass:"img-fluid",attrs:{src:t.thumnail,loading:"lazy"}})])])],1)})),0)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);