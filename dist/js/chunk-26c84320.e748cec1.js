(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26c84320"],{"47bf":function(t,e,c){"use strict";var a=c("7a23"),o={class:"container py-4"},s=Object(a["i"])('<div class="row"><div class="col-12 text-light text-center fw-bold pb-4"><i class="bi bi-truck" style="font-size:1.5rem;color:cornflowerblue;"></i> 購買任一系列,憑保固卡線上登錄即享免費到府維修收送 </div><div class="col-sm-6 text-light text-center"><h5 class="fw-bold">聯絡資訊</h5><i class="bi bi-shop" style="font-size:1.5rem;color:cornflowerblue;"></i> xxxxxxxxxxxxxxx <br><i class="bi bi-telephone" style="font-size:1.5rem;color:cornflowerblue;"></i> 0986074168 <br><i class="bi bi-envelope" style="font-size:1.5rem;color:cornflowerblue;"></i> zxc38380166@yahoo.com.tw </div><div class="col-sm-6 text-light text-center"><h5 class="fw-bold">社群</h5><i class="bi bi-facebook" style="font-size:1.5rem;color:cornflowerblue;"></i> xxxxxxxxxxxxxxx <br><i class="bi bi-instagram" style="font-size:1.5rem;color:cornflowerblue;"></i> xxxxxxxxxxxxxxx <br><i class="bi bi-github" style="font-size:1.5rem;color:cornflowerblue;"></i> https://github.com/zxc38380166/Vue-work.git </div><div class="col-12 text-center pt-4"><i class="bi bi-watch text-light">Otis-VueWork-Watch此網頁僅做為面試作品使用,圖片取自pexels.com</i></div></div>',1),n=[s];function r(t,e){return Object(a["v"])(),Object(a["g"])("div",o,n)}var i=c("6b0d"),l=c.n(i);const b={},d=l()(b,[["render",r]]);e["a"]=d},"55ef":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var a=c("7a23"),o={class:"container"},s={class:"row"},n={class:"col"},r={class:"mb-3 bg-dark text-light"},i={class:"row g-0"},l={class:"col-md-6"},b={class:"card-body"},d={class:"card-title"},u={class:"card-text"},h=Object(a["j"])(" 特惠價 $ : "),p={class:"text-decoration-line-through fw-lighter px-1"},j={class:"card-text fs-5 fw-bold text-warning px-1"},O={class:"card-text"},f={class:"card-text"},x=Object(a["h"])("p",{class:"card-text"},[Object(a["j"])(" SHAR THIS : "),Object(a["h"])("i",{class:"bi bi-facebook px-2",style:{"font-size":"1.5rem",color:"cornflowerblue"}}),Object(a["h"])("i",{class:"bi bi-instagram px-2",style:{"font-size":"1.5rem",color:"cornflowerblue"}}),Object(a["h"])("i",{class:"bi bi-github px-2",style:{"font-size":"1.5rem",color:"cornflowerblue"}})],-1),g=Object(a["h"])("button",{class:"btn btn-outline-success mx-1",type:"button"},[Object(a["h"])("i",{class:"bi bi-currency-dollar"}),Object(a["j"])("Shop ")],-1),v=Object(a["h"])("i",{class:"bi bi-cart-check",style:{color:"yellow","font-size":"1.2rem"}},null,-1),y=Object(a["j"])(" add to cart "),m={key:0,class:"spinner-border spinner-border-sm",role:"status"},k={class:"col-12"},C={class:"bg-dark"},w=Object(a["h"])("div",{class:"header text-light fs-5"},"詳細說明 :",-1),S={class:"body text-light"},$={class:"blockquote mb-0"},L=Object(a["h"])("footer",{class:"blockquote-footer"},[Object(a["h"])("cite",{title:"Source Title"},"Otis-VueWork-Watch")],-1);function M(t,e,c,M,F,U){var z=Object(a["C"])("UserCart"),q=Object(a["C"])("router-link"),I=Object(a["C"])("UserFoot"),_=Object(a["C"])("Toast"),T=Object(a["C"])("Loading");return Object(a["v"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(z,{ref:"UserCart"},null,512),Object(a["h"])("div",o,[Object(a["h"])("div",s,[Object(a["h"])("div",n,[Object(a["h"])("div",r,[Object(a["h"])("div",i,[Object(a["h"])("div",{class:"col-md-6",style:Object(a["q"])({backgroundImage:"url(".concat(F.product.imageUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"270px"})},null,4),Object(a["h"])("div",l,[Object(a["h"])("div",b,[Object(a["h"])("h5",d,Object(a["F"])(F.product.title),1),Object(a["h"])("p",u,[h,Object(a["h"])("span",p,Object(a["F"])(t.$filters.currency(F.product.origin_price)),1),Object(a["h"])("span",j,Object(a["F"])(t.$filters.currency(F.product.price)),1)]),Object(a["h"])("p",O,"系列名 : "+Object(a["F"])(F.product.category),1),Object(a["h"])("p",f,"規格 : "+Object(a["F"])(F.product.description),1),x,Object(a["k"])(q,{to:"/UserBoard/UserProducts",style:{"text-decoration":"none"},class:"text-success"},{default:Object(a["L"])((function(){return[g]})),_:1}),Object(a["h"])("button",{type:"button",class:"btn btn-outline-warning btn-sm mx-1",onClick:e[0]||(e[0]=Object(a["N"])((function(t){return U.addToCart(F.product.id)}),["prevent"]))},[v,y,F.LoadStatus?(Object(a["v"])(),Object(a["g"])("div",m)):Object(a["f"])("",!0)])])])])])]),Object(a["h"])("div",k,[Object(a["h"])("div",C,[w,Object(a["h"])("div",S,[Object(a["h"])("blockquote",$,[Object(a["h"])("p",null,Object(a["F"])(F.product.content),1),L])])])])])]),Object(a["k"])(I),Object(a["k"])(_,{toastMsg:F.toastMsg},null,8,["toastMsg"]),Object(a["k"])(T,{active:F.isLoading},null,8,["active"])],64)}c("99af");var F=c("0eb4"),U=c("b079"),z=c("47bf"),q={data:function(){return{Id:"",product:{},toastMsg:{},isLoading:!1,LoadStatus:!1}},components:{Toast:F["a"],UserCart:U["a"],UserFoot:z["a"]},methods:{getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("barry-chen","/product/").concat(this.Id);this.isLoading=!0,this.$http.get(e).then((function(e){t.isLoading=!1,t.product=e.data.product,console.log(t.product)}))},addToCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("barry-chen","/cart"),a={product_id:t,qty:1};this.LoadStatus=!0,this.$http.post(c,{data:a}).then((function(t){e.LoadStatus=!1,e.toastMsg=t.data,e.$refs.UserCart.getCart()}))}},created:function(){this.Id=this.$route.params.Id,this.getProduct()}},I=c("6b0d"),_=c.n(I);const T=_()(q,[["render",M]]);e["default"]=T},a3d2:function(t,e,c){},b079:function(t,e,c){"use strict";c("a4d3"),c("e01a");var a=c("7a23"),o={class:"cart text-end"},s={class:"bi bi-cart-fill"},n={ref:"modal",class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},i={class:"modal-content"},l={class:"modal-header"},b=Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},"購物車",-1),d={class:"px-4"},u=Object(a["j"])(" 總計 "),h={class:"text-primary px-2"},p=Object(a["j"])("項 "),j=Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},f={class:"card mb-3",style:{"max-width":"540px"}},x={class:"row g-0"},g={class:"col-8"},v={class:"card-body"},y={class:"card-title"},m={class:"card-text"},k=["onUpdate:modelValue","onChange","disabled"],C=["onClick"],w=Object(a["h"])("i",{class:"bi bi-x"},null,-1),S=[w],$={class:"card-text"},L=Object(a["h"])("br",null,null,-1),M={class:"card-text"},F={class:"text-muted"},U={key:0,class:"text-decoration-line-through"},z={key:1},q={class:"col-12 col-sm-5 fw-bold"},I={key:0},_={class:"col-12 col-sm-12 text-primary"},T={key:0,class:"text-danger"},P={class:"text-center"},V=Object(a["h"])("strong",null,"總計:",-1),W={class:"text-primary mx-2"},B=Object(a["h"])("strong",null,"優惠碼:",-1),D={class:"modal-footer"},R={key:0,class:"spinner-border spinner-border-sm",role:"status"},A=Object(a["h"])("i",{class:"bi bi-cart-fill"},null,-1),H=Object(a["j"])(" 去逛逛 "),J=[A,H];function N(t,e,c,w,A,H){var N=this,E=Object(a["C"])("Toast");return Object(a["v"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("div",o,[Object(a["h"])("button",{class:"btn btn-warning",type:"button",onClick:e[0]||(e[0]=function(t){return N.show()})},[Object(a["h"])("i",s,"Cart * "+Object(a["F"])(A.cart.carts.length),1)])]),Object(a["h"])("div",n,[Object(a["h"])("div",r,[Object(a["h"])("div",i,[Object(a["h"])("div",l,[b,Object(a["h"])("span",d,[u,Object(a["h"])("span",h,Object(a["F"])(A.cart.carts.length),1),p]),j]),Object(a["h"])("div",O,[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(A.cart.carts,(function(e){return Object(a["v"])(),Object(a["g"])("table",{class:"w-100",key:e.id},[Object(a["h"])("tbody",null,[Object(a["h"])("div",f,[Object(a["h"])("div",x,[Object(a["h"])("div",{class:"col-4",style:Object(a["q"])({backgroundImage:"url(".concat(e.product.imageUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"})},null,4),Object(a["h"])("div",g,[Object(a["h"])("div",v,[Object(a["h"])("h6",y,Object(a["F"])(e.product.title),1),Object(a["h"])("p",m,[Object(a["M"])(Object(a["h"])("input",{type:"number",min:"1",max:"10",class:"w-50","onUpdate:modelValue":function(t){return e.qty=t},onChange:function(t){return H.upDataCart(e)},disabled:A.disabled},null,40,k),[[a["I"],e.qty]]),Object(a["h"])("button",{class:"btn-danger btn-sm",onClick:function(t){return H.delCart(e.id)}},S,8,C)]),Object(a["h"])("p",$,[Object(a["j"])(Object(a["F"])(e.product.category),1),L,Object(a["j"])(Object(a["F"])(e.product.description),1)]),Object(a["h"])("p",M,[Object(a["h"])("small",F,[e.final_total!==e.total?(Object(a["v"])(),Object(a["g"])("span",U," $ "+Object(a["F"])(t.$filters.currency(e.total)),1)):(Object(a["v"])(),Object(a["g"])("span",z,"$ "+Object(a["F"])(t.$filters.currency(e.total)),1)),Object(a["h"])("div",q,[e.final_total!==e.total?(Object(a["v"])(),Object(a["g"])("span",I,"以套用優惠卷")):Object(a["f"])("",!0)]),Object(a["h"])("div",_,[e.final_total!==e.total?(Object(a["v"])(),Object(a["g"])("span",T," 折扣後價格: $ "+Object(a["F"])(t.$filters.currency(e.final_total)),1)):Object(a["f"])("",!0)])])])])])])])])])})),128))]),Object(a["h"])("div",P,[V,Object(a["h"])("span",W,"$"+Object(a["F"])(t.$filters.currency(A.cart.final_total)),1),Object(a["h"])("div",null,[B,Object(a["M"])(Object(a["h"])("input",{class:"mx-2",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return A.couponCode=t})},null,512),[[a["I"],A.couponCode]]),Object(a["h"])("button",{type:"button",class:"btn btn-dark",onClick:e[2]||(e[2]=function(){return H.addCouponCode&&H.addCouponCode.apply(H,arguments)})}," 套用 ")])]),Object(a["h"])("div",D,[A.LoadStatus?(Object(a["v"])(),Object(a["g"])("div",R)):Object(a["f"])("",!0),Object(a["h"])("button",{class:"btn btn-outline-success",type:"button",onClick:e[3]||(e[3]=function(){return H.goShop&&H.goShop.apply(H,arguments)})},J),Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:e[4]||(e[4]=function(){return H.delCartS&&H.delCartS.apply(H,arguments)})}," 清空 "),Object(a["h"])("button",{type:"button",class:"btn btn-outline-primary",onClick:e[5]||(e[5]=function(){return H.checkOut&&H.checkOut.apply(H,arguments)})}," 結帳 ")])])])],512),Object(a["k"])(E,{toastMsg:A.toastMsg,ref:"toast"},null,8,["toastMsg"])],64)}c("99af");var E=c("0eb4"),G=c("e0ae"),K={data:function(){return{cart:{carts:[]},toastMsg:"",couponCode:"",disabled:!1,LoadStatus:!1}},components:{Toast:E["a"]},mixins:[G["a"]],methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("barry-chen","/cart");this.$http.get(e).then((function(e){t.cart=e.data.data}))},upDataCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("barry-chen","/cart/").concat(t.id);t.qty>10&&(t.qty=10);var a={product_id:t.id,qty:t.qty};this.LoadStatus=!0,this.disabled=!0,this.$http.put(c,{data:a}).then((function(t){e.LoadStatus=!1,e.toastMsg=t.data,e.getCart(),e.disabled=!1}))},delCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("barry-chen","/cart/").concat(t);this.LoadStatus=!0,this.$http.delete(c).then((function(t){e.LoadStatus=!1,e.toastMsg=t.data,e.getCart()}))},delCartS:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("barry-chen","/carts");this.LoadStatus=!0,this.$http.delete(e).then((function(e){t.LoadStatus=!1,t.toastMsg=e.data,t.getCart()}))},addCouponCode:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("barry-chen","/coupon"),c={code:this.couponCode};this.textDecoration="",this.LoadStatus=!0,this.$http.post(e,{data:c}).then((function(e){t.LoadStatus=!1,t.toastMsg=e.data,t.getCart()}))},checkOut:function(){this.$router.push("/UserBoard/UserCheckOut"),this.hide()},goShop:function(){this.$router.push("/UserBoard/UserProducts"),this.hide()}},created:function(){this.getCart()}},Q=(c("ecf3"),c("6b0d")),X=c.n(Q);const Y=X()(K,[["render",N]]);e["a"]=Y},e01a:function(t,e,c){"use strict";var a=c("23e7"),o=c("83ab"),s=c("da84"),n=c("e330"),r=c("1a2d"),i=c("1626"),l=c("3a9b"),b=c("577e"),d=c("9bf2").f,u=c("e893"),h=s.Symbol,p=h&&h.prototype;if(o&&i(h)&&(!("description"in p)||void 0!==h().description)){var j={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:b(arguments[0]),e=l(p,this)?new h(t):void 0===t?h():h(t);return""===t&&(j[e]=!0),e};u(O,h),O.prototype=p,p.constructor=O;var f="Symbol(test)"==String(h("test")),x=n(p.toString),g=n(p.valueOf),v=/^Symbol\((.*)\)[^)]+$/,y=n("".replace),m=n("".slice);d(p,"description",{configurable:!0,get:function(){var t=g(this),e=x(t);if(r(j,t))return"";var c=f?m(e,7,-1):y(e,v,"$1");return""===c?void 0:c}}),a({global:!0,forced:!0},{Symbol:O})}},ecf3:function(t,e,c){"use strict";c("a3d2")}}]);
//# sourceMappingURL=chunk-26c84320.e748cec1.js.map