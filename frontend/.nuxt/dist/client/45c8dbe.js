(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{380:function(t,e,r){"use strict";r.r(e);r(43);var n,l=r(26),c=r(8),o=(r(14),r(49),{data:function(){return{currentSlide:0,autoplayInterval:null,loading:!1,toproducts:[]}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initOwlCarousel();case 2:return e.next=4,t.fetchDefaultProduct();case 4:case"end":return e.stop()}}),e)})))()},methods:(n={scrollLeft:function(){this.currentSlide>0&&(this.currentSlide--,this.scrollToCurrentSlide())},scrollRight:function(){this.currentSlide<this.toproducts.length-1&&(this.currentSlide++,this.scrollToCurrentSlide())},scrollToCurrentSlide:function(){this.$refs.slider.scrollLeft=160*this.currentSlide}},Object(l.a)(n,"scrollToCurrentSlide",(function(){var t=this.$el.querySelector(".slider");t.scrollLeft=this.currentSlide*t.offsetWidth})),Object(l.a)(n,"fetchDefaultProduct",(function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/unauthenticate/topSellingProducts").then((function(e){t.toproducts=e.data})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return e.stop()}}),e)})))()})),Object(l.a)(n,"initOwlCarousel",(function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.$el.querySelector(".slider"),n=!1,r.addEventListener("mousedown",(function(t){n=!0,l=t.pageX,c=r.scrollLeft})),r.addEventListener("mouseleave",(function(){n=!1})),r.addEventListener("mouseup",(function(){n=!1})),r.addEventListener("mousemove",(function(t){if(n){t.preventDefault();var e=3*(t.pageX-l);r.scrollLeft=c-e}}));case 6:case"end":return e.stop()}}),e)})))()})),n)}),d=r(34),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"top_selling"},[t._m(0),t._v(" "),t.loading?e("div",{staticClass:"loading-indicator",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"loader-container"},[e("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),e("img",{attrs:{src:"/loader/loader.gif",alt:"Loader"}})],1)]):t._e(),t._v(" "),e("div",{staticClass:"slider-container"},[e("div",{ref:"slider",staticClass:"slider"},[t._l(t.toproducts,(function(r){return e("div",{key:r.id,staticClass:"slide"},[e("img",{staticStyle:{height:"150px",width:"150px"},attrs:{src:r.thumnail,alt:""}}),t._v(" "),e("p",{staticClass:"text-center"},[e("a",{attrs:{href:"#"}},[t._v(t._s(r.name))])])])})),t._v(" "),e("div",{staticClass:"prev-slide",on:{click:t.scrollLeft}},[t._v("‹")]),t._v(" "),e("div",{staticClass:"next-slide",on:{click:t.scrollRight}},[t._v("›")])],2)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("div",{staticClass:"sell_title"},[t("h5",[this._v("Top Selling items")])])])])}],!1,null,null,null);e.default=component.exports}}]);