(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{383:function(t,e,r){"use strict";r.r(e);r(43);var n=r(8),c=(r(14),r(49),{data:function(){return{categoryname:"",currentSlide:0,category_slug:"",loading:!1,products:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initOwlCarousel();case 2:return e.next=4,t.fetchDefaultProduct();case 4:case"end":return e.stop()}}),e)})))()},methods:{scrollLeft:function(){this.currentSlide>0&&(this.currentSlide--,this.scrollToCurrentSlide())},scrollRight:function(){this.currentSlide<this.products.length-1&&(this.currentSlide++,this.scrollToCurrentSlide())},scrollToCurrentSlide:function(){this.$refs.slider.scrollLeft=160*this.currentSlide},fetchDefaultProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,26,e.next=4,t.$axios.get("/unauthenticate/searchProductCategory",{params:{category_id:26}}).then((function(e){t.products=e.data.result,t.categoryname=e.data.name,t.category_slug=e.data.catslug})).catch((function(t){})).finally((function(){t.loading=!1}));case 4:case 5:case"end":return e.stop()}}),e)})))()},initOwlCarousel:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.$el.querySelector(".slider"),n=!1,r.addEventListener("mousedown",(function(t){n=!0,c=t.pageX,l=r.scrollLeft})),r.addEventListener("mouseleave",(function(){n=!1})),r.addEventListener("mouseup",(function(){n=!1})),r.addEventListener("mousemove",(function(t){if(n){t.preventDefault();var e=3*(t.pageX-c);r.scrollLeft=l-e}}));case 6:case"end":return e.stop()}}),e)})))()}}}),l=r(34),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"top_selling"},[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"sell_title stock_deals"},[e("div",[e("h5",[t._v(t._s(t.categoryname))])]),t._v(" "),e("div",[e("nuxt-link",{attrs:{to:"category/category-list?slug="+t.category_slug}},[t._v("See All "),e("i",{staticClass:"fas fa-arrow-right"})])],1)])]),t._v(" "),e("div",{staticClass:"container text-center my-3"},[t.loading?e("div",{staticClass:"loading-indicator",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"loader-container"},[e("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),e("img",{attrs:{src:"/loader/loader.gif",alt:"Loader"}})],1)]):t._e(),t._v(" "),e("div",{staticClass:"slider-container"},[e("div",{ref:"slider",staticClass:"slider"},[t._l(t.products,(function(r){return e("div",{key:r.id,staticClass:"slide"},[e("nuxt-link",{attrs:{to:"/product-details/".concat(r.slug)}},[e("img",{staticStyle:{height:"150px",width:"150px"},attrs:{src:r.thumnail,alt:""}}),t._v(" "),e("p",{staticClass:"text-center"},[t._v("\r\n                                        "+t._s(r.name)+"\r\n                                    ")])])],1)})),t._v(" "),e("div",{staticClass:"prev-slide",on:{click:t.scrollLeft}},[t._v("‹")]),t._v(" "),e("div",{staticClass:"next-slide",on:{click:t.scrollRight}},[t._v("›")])],2)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);