(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{325:function(t,e,r){"use strict";var c=r(2),n=r(91).find,o=r(147),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),c({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},327:function(t,e,r){"use strict";var c=r(2),n=r(91).findIndex,o=r(147),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),c({target:"Array",proto:!0,forced:d},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},348:function(t,e,r){var content=r(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(121).default)("8cfcd002",content,!0,{sourceMap:!1})},354:function(t,e,r){"use strict";r(348)},355:function(t,e,r){var c=r(120)((function(i){return i[1]}));c.push([t.i,".loading-indicator[data-v-9e6d1ac8]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-9e6d1ac8],.loading-indicator[data-v-9e6d1ac8]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-9e6d1ac8]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-9e6d1ac8]{margin:0}.loader-top[data-v-9e6d1ac8]{top:0}.loader-bottom[data-v-9e6d1ac8]{bottom:0}",""]),c.locals={},t.exports=c},396:function(t,e,r){"use strict";r.r(e);r(43);var c=r(8),n=r(26),o=(r(14),r(35),r(327),r(325),r(221),r(44),r(92),r(71),r(23),r(50),r(49),{props:{receivedSlug:String},data:function(){var t;return t={loading:!1,cart:[]},Object(n.a)(t,"loading",!1),Object(n.a)(t,"prouducts",[]),Object(n.a)(t,"categories",[]),Object(n.a)(t,"pro_count",0),Object(n.a)(t,"categoryname",""),t},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.calculateSubtotal(),t.loadCart(),t.cartItemCount(),r=t.$route.query.slug,t.fetchData(r),e.next=7,t.fetchDataCategory();case 7:case"end":return e.stop()}}),e)})))()},methods:{cartItemCount:function(){var t=0;this.cart.forEach((function(e){t+=e.quantity})),this.itemCount=t,console.log("Emitting cartItemCountUpdated event with itemCount:",this.itemCount),this.$eventBus.$emit("cartItemCountUpdated",this.itemCount)},updateQuantity:function(t,e){var r=this.cart.findIndex((function(e){return e.product.id===t}));-1!==r&&(this.cart[r].quantity=e,this.saveCart(),this.calculateSubtotal())},addToCart:function(t){var e=this.prouducts.find((function(e){return e.id===t}));this.cart.find((function(e){return e.product.id===t}))||this.cart.push({product:e,quantity:1}),this.saveCart(),this.cartItemCount(),this.calculateSubtotal()},removeFromCart:function(t){var e=this.cart.findIndex((function(e){return e.product.id===t.id}));-1!==e&&(this.cart[e].quantity>1?this.cart[e].quantity-=1:this.cart.splice(e,1),this.saveCart(),this.calculateSubtotal(),this.cartItemCount())},loadCart:function(){var t=localStorage.getItem("cart");t&&(this.cart=JSON.parse(t))},saveCart:function(){var t=this;this.loading=!0,localStorage.setItem("cart",JSON.stringify(this.cart)),setTimeout((function(){t.loading=!1}),2e3)},calculateSubtotal:function(){var t=0;return this.cart.forEach((function(e){var r=e.product;console.log("Quantity: ".concat(e.quantity,", Price: ").concat(r.price));var c=parseFloat(r.price.replace(/[^\d.]/g,""));isNaN(e.quantity)||isNaN(c)?console.error("Invalid quantity or price:",e.quantity,r.price):t+=e.quantity*c})),this.subtotal=t},categoryGrid:function(){var t=this.$route.query.slug;this.$router.push({path:"/category/category-list",query:{slug:t}})},redirectCategory:function(t){this.$router.push({path:"/category/category-list",query:{slug:t}})},fetchData:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,e.$axios.get("/unauthenticate/findCategorys/".concat(t)).then((function(t){e.prouducts=t.data.result,e.pro_count=t.data.pro_count,e.categoryname=t.data.categoryname})).catch((function(t){})).finally((function(){e.loading=!1}));case 3:r.sent;case 6:case"end":return r.stop()}}),r)})))()},fetchDataCategory:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/unauthenticate/filterCategorys").then((function(e){t.categories=e.data})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return e.stop()}}),e)})))()}}}),l=(r(354),r(34)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t.loading?e("div",{staticClass:"loading-indicator"},[e("div",{staticClass:"loader-container"},[e("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),e("img",{attrs:{src:"/loader/loader.gif",alt:"Loader"}})],1)]):t._e(),t._v(" "),e("div",{staticClass:"product_section"},[e("div",{staticClass:"row px-2"},[e("div",{staticClass:"col-md-4 desktop_view"},[e("div",{staticClass:"left_side_product"},[e("div",{staticClass:"category_list"},[e("h6",[t._v("Category")]),t._v(" "),e("ul",t._l(t.categories,(function(r){return e("li",{key:r.id},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.fetchData(r.slug)}}},[t._v(t._s(r.name))])])})),0)])])]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"product_list"},[e("div",{staticClass:"title_product"},[e("div",[e("h6",[t._v(t._s(t.categoryname))])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"grid_list"},[e("div",[e("p",[t._v(t._s(t.pro_count)+" product found")])]),t._v(" "),e("div",{staticClass:"d-flex"},[t._m(1),t._v(" "),e("a",{attrs:{href:"#"},on:{click:t.categoryGrid}},[e("i",{staticClass:"fa-solid fa-list"})]),t._v(" "),e("Nuxt-Link",{staticClass:"active",attrs:{to:"#"}},[e("i",{staticClass:"fa-solid fa-grip"})])],1),t._v(" "),e("div",{staticClass:"filter_modal"},[t._m(2),t._v(" "),e("div",{staticClass:"modal_fdiv"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"left_side_product"},[e("div",{staticClass:"category_list"},[e("h6",[t._v("Category")]),t._v(" "),e("ul",t._l(t.categories,(function(r){return e("li",{key:r.id},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.fetchData(r.slug)}}},[t._v(t._s(r.name))])])})),0)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])])])])])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.prouducts,(function(r){return e("div",{key:r.id,staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"},[t.prouducts.length>0?e("div",{staticClass:"product_grid"},[t.prouducts.length>0?e("nuxt-link",{attrs:{to:"/product-details/".concat(r.pro_slug)}},[e("img",{staticClass:"img-fluid",attrs:{src:r.thumnail_img,loading:"lazy"}})]):t._e(),t._v(" "),e("span",[t._v("Free Delivery")]),t._v(" "),e("strong",[t._v("Official Store ")]),t._v(" "),e("h1",[t._v(t._s(r.product_name))]),t._v(" "),e("p",[t._v("$"+t._s(r.price))]),t._v(" "),0!==r.discount?e("p",[e("strike",[t._v("$"+t._s(r.discount))]),t._v(" "),e("span",[t._v("-5%")])],1):t._e(),t._v(" "),t._m(9,!0),t._v(" "),e("button",{staticClass:"btn_cart",attrs:{type:"button"},on:{click:function(e){return t.addToCart(r.id)}}},[t._v("Add to cart ")])],1):t._e()])})),0)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-none"},[e("label",{attrs:{for:""}},[t._v("Short By:")]),t._v(" "),e("select",{attrs:{name:"",id:""}},[e("option",{attrs:{value:""}},[t._v("Popularity")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("New arrival")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("Low to High")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("high to low")])])])},function(){var t=this._self._c;return t("a",{staticClass:"filter_btn mobile_view",attrs:{type:"button"}},[t("i",{staticClass:"fa-solid fa-sliders"})])},function(){var t=this._self._c;return t("div",{staticClass:"row px-4"},[t("div",{staticClass:"col-6"}),this._v(" "),t("div",{staticClass:"col-6 text-end"},[t("i",{staticClass:"fa-solid fa-x filter_close",staticStyle:{cursor:"pointer"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"delivery_list"},[e("h6",[t._v("Express delivery")]),t._v(" "),e("ul",[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("DHL ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"delivery_list"},[e("h6",[t._v("Shipped from ")]),t._v(" "),e("ul",[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("From Bangladesh ")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("From Bangladesh ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands_list"},[e("h6",[t._v("Brand")]),t._v(" "),e("div",{staticClass:"search_side"},[e("i",{staticClass:"fa-solid fa-magnifying-glass"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Addidas ")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("AGM ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"price_range"},[e("div",{staticClass:"sidebr_title"},[e("h6",[t._v("Price Range ")]),t._v(" "),e("button",{staticClass:"btn_apply",attrs:{type:"button"}},[t._v("Apply")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"price-filter-range",attrs:{id:"slider-range",name:"rangeInput"}}),t._v(" "),e("div",{staticClass:"d-flex",staticStyle:{margin:"10px auto"}},[e("input",{staticClass:"price-range-field",staticStyle:{width:"45%",margin:"0px 3px"},attrs:{type:"number",min:"0",max:"9900",oninput:"validity.valid||(value='0');",id:"min_price"}}),t._v(" "),e("input",{staticClass:"price-range-field",staticStyle:{width:"45%",margin:"0px 3px"},attrs:{type:"number",min:"0",max:"10000",oninput:"validity.valid||(value='10000');",id:"max_price"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands_list"},[e("h6",[t._v("size")]),t._v(" "),e("div",{staticClass:"search_side"},[e("i",{staticClass:"fa-solid fa-magnifying-glass"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("XS")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("S")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands_list"},[e("h6",[t._v("Gender")]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Boys")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Girls")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star"})]),t._v(" "),e("h6",[t._v("(200)")])])}],!1,null,"9e6d1ac8",null);e.default=component.exports}}]);