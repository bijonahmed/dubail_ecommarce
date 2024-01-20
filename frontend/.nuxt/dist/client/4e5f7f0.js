(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{324:function(t,e,n){"use strict";var r=n(2),o=n(91).find,l=n(147),c="find",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},472:function(t,e,n){"use strict";n.r(e);n(43);var r=n(8),o=(n(49),n(324),n(14),n(146)),l=n.n(o),c={head:{title:"Login"},data:function(){return{insertdata:{name:"",email:"",password:"",invite_code:"",password_confirmation:""},login:{email:"",password:""},notifmsg:"",invidecodeError:"",errors:{}}},mounted:function(){this.defaultLoading()},methods:{defaultLoading:function(){this.$nextTick((function(){l()(".toggle-password").click((function(){l()(this).toggleClass("fa-eye-slash fa-eye");var input=l()(this).parent().find("input");"password"==input.attr("type")?input.attr("type","text"):input.attr("type","password")})),l()(".signIn").on("click",(function(){l()(".log_sec").css({transform:"translateX(-100%)","transition-duration":"1s",opacity:"1",filter:"blur(0px)"}),l()(".log_sec").addClass("inactive"),l()(".sign_sec").css({transform:"translateX(-100%)","transition-duration":"1s",opacity:"0",filter:"none"}),l()(".sign_sec").removeClass("inactive"),l()(".sign_sec").addClass("active")})),l()(".sign_up").on("click",(function(){l()(".log_sec").css({transform:"translateX(0%)","transition-duration":"1s",opacity:"0",filter:"blur(3px)"}),l()(".log_sec").removeClass("inactive"),l()(".log_sec").addClass("active"),l()(".sign_sec").css({transform:"translateX(0%)","transition-duration":"1s",opacity:"1"}),l()(".sign_sec").addClass("inactive")}))}))},saveData:function(){var t=this,e=new FormData;e.append("name",this.insertdata.name),e.append("email",this.insertdata.email),e.append("password",this.insertdata.password),e.append("invite_code",this.insertdata.invite_code),e.append("password_confirmation",this.insertdata.password_confirmation);this.$axios.post("/auth/register",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var n=e.data.access_token;t.$auth.setUserToken(n),Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(t){t.onmouseenter=Swal.stopTimer,t.onmouseleave=Swal.resumeTimer}}).fire({icon:"success",title:"Signed in successfully"}),t.$router.push("/")})).catch((function(e){t.invidecodeError=e.response.data.error,console.log("code error: "+e.response.data.error),422===e.response.status&&(t.errors=e.response.data.errors)}))},customerLogin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={email:t.login.email,password:t.login.password},e.next=4,t.$axios.post("/auth/login",n);case 4:return r=e.sent,data=r.data,e.next=8,t.$auth.setUserToken(data.access_token);case 8:if(3!==data.role_id){e.next=12;break}return e.abrupt("return",t.$router.push("/seller/seller-profile"));case 12:if(2!==data.role_id){e.next=16;break}return e.abrupt("return",t.$router.push("/user/user-profile"));case 16:console.warn("Unsupported role_id:",data.role_id);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()}}},d=n(34),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("span",{staticStyle:{"background-image":"url('/images/login_bg.jpg')","background-position":"center","background-repeat":"no-repeat","background-size":"cover","min-height":"100vh",overflow:"hidden"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-item-center",staticStyle:{height:"100vh"}},[e("div",{staticClass:"col-lg-4 col-md-6 m-auto in_row"},[e("div",{staticClass:"login_section"},[e("div",{staticClass:"sign_sec"},[t._m(0),t._v(" "),e("form",{staticClass:"forms-sample",attrs:{id:"formrest",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.saveData()}}},[e("div",{staticClass:"group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.insertdata.name,expression:"insertdata.name"}],staticClass:"input",staticStyle:{"--i":"0"},attrs:{type:"text"},domProps:{value:t.insertdata.name},on:{input:function(e){e.target.composing||t.$set(t.insertdata,"name",e.target.value)}}}),t._v(" "),t.errors.name?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.name[0]))]):t._e(),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Name")]),t._v(" "),e("i",{staticClass:"fa-solid fa-user"})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.insertdata.email,expression:"insertdata.email"}],staticClass:"input",staticStyle:{"--i":"0"},attrs:{type:"email"},domProps:{value:t.insertdata.email},on:{input:function(e){e.target.composing||t.$set(t.insertdata,"email",e.target.value)}}}),t._v(" "),t.errors.name?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.email[0]))]):t._e(),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Email Address")]),t._v(" "),e("i",{staticClass:"fa-solid fa-envelope"})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.insertdata.invite_code,expression:"insertdata.invite_code"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.insertdata.invite_code},on:{input:function(e){e.target.composing||t.$set(t.insertdata,"invite_code",e.target.value)}}}),t._v(" "),e("span",{staticClass:"text-danger"},[t._v(t._s(t.invidecodeError))]),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Invite Code")]),t._v(" "),e("i",{staticClass:"fa-solid fa-link"})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.insertdata.password,expression:"insertdata.password"}],staticClass:"input",staticStyle:{"--i":"1"},attrs:{type:"password"},domProps:{value:t.insertdata.password},on:{input:function(e){e.target.composing||t.$set(t.insertdata,"password",e.target.value)}}}),t._v(" "),t.errors.name?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.password[0]))]):t._e(),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Password")]),t._v(" "),e("i",{staticClass:"fa-regular fa-eye-slash toggle-password"})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.insertdata.password_confirmation,expression:"insertdata.password_confirmation"}],staticClass:"input",staticStyle:{"--i":"1"},attrs:{type:"password"},domProps:{value:t.insertdata.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.insertdata,"password_confirmation",e.target.value)}}}),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Retype Password")]),t._v(" "),e("i",{staticClass:"fa-regular fa-eye-slash toggle-password"})]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn_login submit mt-2",staticStyle:{opacity:".8"},attrs:{type:"submit"}},[t._v("Sign Up ")])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"log_sec"},[e("h2",[t._v("Welcome back")]),t._v(" "),e("p",[t._v(" Sign in to continue your Account")]),t._v(" "),e("form",{staticClass:"forms-sample",attrs:{id:"formrest",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.customerLogin()}}},[e("div",{staticClass:"group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"input",staticStyle:{"--i":"0"},attrs:{type:"email"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}}),t._v(" "),t.errors.email?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.email[0]))]):t._e(),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Email")]),t._v(" "),e("i",{staticClass:"fa-solid fa-user"})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"input",staticStyle:{"--i":"1"},attrs:{type:"password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),t.errors.password?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.password[0]))]):t._e(),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Password")]),t._v(" "),e("i",{staticClass:"fa-regular fa-eye-slash toggle-password"})]),t._v(" "),e("button",{staticClass:"btn_login",attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Sign Up")]),t._v(" "),e("p",[t._v("SignUp to register a new Account.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social_login"},[e("div",[e("h6",[t._v("Allready have Account?"),e("button",{staticClass:"signIn",attrs:{type:"button"}},[t._v("LogIn")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"text-end"},[t("a",{attrs:{href:"#"}},[this._v("Forget Password?")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social_login"},[e("span",{staticClass:"signup_link"},[t._v("Don't Have Account?"),e("button",{staticClass:"sign_up"},[t._v("SignUp")])])])}],!1,null,null,null);e.default=component.exports}}]);