(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{324:function(t,e,l){var content=l(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(121).default)("1eb94e2e",content,!0,{sourceMap:!1})},327:function(t,e,l){"use strict";l(324)},328:function(t,e,l){var r=l(120)((function(i){return i[1]}));r.push([t.i,".loading-indicator[data-v-0f4af44c]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-0f4af44c],.loading-indicator[data-v-0f4af44c]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-0f4af44c]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-0f4af44c]{margin:0}.loader-top[data-v-0f4af44c]{top:0}.loader-bottom[data-v-0f4af44c]{bottom:0}",""]),r.locals={},t.exports=r},329:function(t,e,l){"use strict";l.r(e);var r=l(8),o=(l(49),l(14),{middleware:"auth",data:function(){return{loading:!1,business_name_slug:"",notifmsg:"",orders:[],errors:{}}},mounted:function(){this.defaultLoading()},methods:{defaultLoading:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.post("/auth/me").then((function(e){t.business_name_slug=e.data.business_name_slug})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},logout:function(){this.$auth.logout(),localStorage.removeItem("jwtToken"),this.$router.push("/")}}}),n=(l(327),l(34)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"user_sidebar"},[e("div",{staticClass:"user_page_list"},[e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/business/"+t.business_name_slug,exact:""}},[t._v("My Shop")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-dashboard"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-dashboard",exact:""}},[t._v("Dashboard ")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-products"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-products",exact:""}},[t._v("Products ")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-products-post"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-products-post",exact:""}},[t._v("Add Products ")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-orders"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-orders",exact:""}},[t._v("Orders ")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-wishlist"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-wishlist",exact:""}},[t._v("Wishlist ")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-wallet"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-wallet",exact:""}},[t._v("Wallet")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-profile"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-profile",exact:""}},[t._v("Profile information")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-comission-history"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-comission-history",exact:""}},[t._v("Comission History")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-payment-history"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-payment-history",exact:""}},[t._v("Payment History")])],1),t._v(" "),e("li",{class:{active:"/seller/seller-account-setting"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/seller/seller-account-setting",exact:""}},[t._v("Account Settings")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("LogOut ")])])])])])])}),[],!1,null,"0f4af44c",null);e.default=component.exports}}]);