webpackJsonp([1],{"9M+g":function(t,e){},"D0/X":function(t,e){},DTI1:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("我要入場")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"Payment"}},[t._v("繳費")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"LeavePark"}},[t._v("我要出場")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"ConfirmProcess"}},[t._v("再次入場？")])],1)])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var r=s("VU/8")({name:"App"},a,!1,function(t){s("XS8U")},null,null).exports,o=s("/ocq"),i=s("Xxa5"),l=s.n(i),c=s("//Fk"),u=s.n(c),h=s("exGp"),d=s.n(h),f=s("PJh5"),v="#242a36",m="#999999",p="#ffd654";f.locale("zh-tw"),f.relativeTimeThreshold("s",60),f.relativeTimeThreshold("m",60),f.relativeTimeThreshold("h",24),f.relativeTimeThreshold("ss",-1),f.updateLocale("zh-tw",{relativeTime:{ss:"%d 秒"}});var x={name:"EnterPark",mounted:function(){this.initLiff()},methods:{initLiff:function(){var t=this;return d()(l.a.mark(function e(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new u.a(function(t,e){});case 2:case"end":return t.stop()}},e,t)}))()},enter:function(){var t=this;return d()(l.a.mark(function e(){var s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=f().format("Y/MM/DD HH:mm"),e.next=3,t.initLiff();case 3:return e.next=5,liff.sendMessages([{type:"flex",altText:"您已於 "+s+" 進入「MP 停車場」",contents:{type:"bubble",styles:{header:{backgroundColor:p}},header:{type:"box",layout:"vertical",margin:"md",contents:[{type:"text",text:"您已進入",size:"xs",color:v},{align:"center",color:v,size:"xxl",text:"MP 停車場",type:"text",weight:"bold"}]},body:{type:"box",layout:"vertical",contents:[{type:"box",layout:"horizontal",contents:[{type:"text",text:"入場時間",size:"sm",color:m,flex:0},{type:"text",text:s,size:"sm",color:v,align:"end"}]},{type:"box",layout:"horizontal",contents:[{type:"text",text:"停車費率",size:"sm",color:m,flex:0},{type:"text",text:"每小時 40 元",size:"sm",color:v,align:"end"}]}]},footer:{type:"box",layout:"horizontal",contents:[{type:"button",style:"secondary",height:"md",color:p,action:{type:"uri",label:"繳費出場",uri:"line://app/1558590172-3dZgPjvR"}}]}}}]);case 5:liff.closeWindow();case 6:case"end":return e.stop()}},e,t)}))()}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container text-monospace",attrs:{id:"app"}},[e("b-card",{attrs:{"bg-variant":"light","text-variant":"black",title:"MP 停車場"}},[e("b-card-text",{staticClass:"mt-5"},[this._v("請確認前方沒有其他車輛，再按下按鈕。")]),this._v(" "),e("b-card-text",[this._v("進入停車場")]),this._v(" "),e("b-button",{staticClass:"btn btn-danger btn-lg btn-block mt-3",on:{click:this.enter}},[this._v("打開柵欄")])],1)],1)},staticRenderFns:[]};var j=s("VU/8")(x,b,!1,function(t){s("DTI1")},"data-v-168f5ea1",null).exports,y=s("PJh5"),g="#242a36",z="#999999",k="#ffd654";y.locale("zh-tw"),y.relativeTimeThreshold("s",60),y.relativeTimeThreshold("m",60),y.relativeTimeThreshold("h",24),y.relativeTimeThreshold("ss",-1),y.updateLocale("zh-tw",{relativeTime:{ss:"%d 秒"}});var w={name:"Payment",mounted:function(){this.initLiff()},methods:{initLiff:function(){var t=this;return d()(l.a.mark(function e(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new u.a(function(t,e){});case 2:case"end":return t.stop()}},e,t)}))()},enter:function(){var t=this;return d()(l.a.mark(function e(){var s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=y().format("Y/MM/DD HH:mm"),e.next=3,t.initLiff();case 3:return e.next=5,liff.sendMessages([{type:"flex",altText:"您已於 "+s+" 進入「MP 停車場」",contents:{type:"bubble",styles:{header:{backgroundColor:k}},header:{type:"box",layout:"vertical",margin:"md",contents:[{type:"text",text:"您已進入",size:"xs",color:g},{align:"center",color:g,size:"xxl",text:"MP 停車場",type:"text",weight:"bold"}]},body:{type:"box",layout:"vertical",contents:[{type:"box",layout:"horizontal",contents:[{type:"text",text:"入場時間",size:"sm",color:z,flex:0},{type:"text",text:s,size:"sm",color:g,align:"end"}]},{type:"box",layout:"horizontal",contents:[{type:"text",text:"停車費率",size:"sm",color:z,flex:0},{type:"text",text:"每小時 40 元",size:"sm",color:g,align:"end"}]}]},footer:{type:"box",layout:"horizontal",contents:[{type:"button",style:"secondary",height:"md",color:k,action:{type:"uri",label:"繳費出場",uri:"line://app/1558590172-3dZgPjvR"}}]}}}]);case 5:liff.closeWindow();case 6:case"end":return e.stop()}},e,t)}))()}}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container text-monospace",attrs:{id:"app"}},[e("b-card",{attrs:{"bg-variant":"light","text-variant":"black",title:"MP 停車場"}},[e("b-card-text",{staticClass:"mt-5"},[this._v("繳費")]),this._v(" "),e("b-button",{staticClass:"btn btn-danger btn-lg btn-block mt-3",on:{click:this.enter}},[this._v("費款")])],1)],1)},staticRenderFns:[]};var P=s("VU/8")(w,T,!1,function(t){s("jrSM")},"data-v-9ce7166c",null).exports,C=s("PJh5"),M="#242a36",_="#999999",L="#ffd654";C.locale("zh-tw"),C.relativeTimeThreshold("s",60),C.relativeTimeThreshold("m",60),C.relativeTimeThreshold("h",24),C.relativeTimeThreshold("ss",-1),C.updateLocale("zh-tw",{relativeTime:{ss:"%d 秒"}});var E={name:"LeavePark",mounted:function(){this.initLiff()},methods:{initLiff:function(){var t=this;return d()(l.a.mark(function e(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new u.a(function(t,e){});case 2:case"end":return t.stop()}},e,t)}))()},enter:function(){var t=this;return d()(l.a.mark(function e(){var s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=C().format("Y/MM/DD HH:mm"),e.next=3,t.initLiff();case 3:return e.next=5,liff.sendMessages([{type:"flex",altText:"您已於 "+s+" 進入「MP 停車場」",contents:{type:"bubble",styles:{header:{backgroundColor:L}},header:{type:"box",layout:"vertical",margin:"md",contents:[{type:"text",text:"您已進入",size:"xs",color:M},{align:"center",color:M,size:"xxl",text:"MP 停車場",type:"text",weight:"bold"}]},body:{type:"box",layout:"vertical",contents:[{type:"box",layout:"horizontal",contents:[{type:"text",text:"入場時間",size:"sm",color:_,flex:0},{type:"text",text:s,size:"sm",color:M,align:"end"}]},{type:"box",layout:"horizontal",contents:[{type:"text",text:"停車費率",size:"sm",color:_,flex:0},{type:"text",text:"每小時 40 元",size:"sm",color:M,align:"end"}]}]},footer:{type:"box",layout:"horizontal",contents:[{type:"button",style:"secondary",height:"md",color:L,action:{type:"uri",label:"繳費出場",uri:"line://app/1558590172-3dZgPjvR"}}]}}}]);case 5:liff.closeWindow();case 6:case"end":return e.stop()}},e,t)}))()}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container text-monospace",attrs:{id:"app"}},[e("b-card",{attrs:{"bg-variant":"light","text-variant":"black",title:"MP 停車場"}},[e("b-card-text",{staticClass:"mt-5"},[this._v("請確認前方沒有其他車輛，再按下按鈕。")]),this._v(" "),e("b-card-text",[this._v("離開停車場")]),this._v(" "),e("b-button",{staticClass:"btn btn-danger btn-lg btn-block mt-3",on:{click:this.enter}},[this._v("打開柵欄")])],1)],1)},staticRenderFns:[]};var H=s("VU/8")(E,F,!1,function(t){s("D0/X")},"data-v-81fdb226",null).exports,R=s("PJh5"),D="#242a36",q="#999999",N="#ffd654";R.locale("zh-tw"),R.relativeTimeThreshold("s",60),R.relativeTimeThreshold("m",60),R.relativeTimeThreshold("h",24),R.relativeTimeThreshold("ss",-1),R.updateLocale("zh-tw",{relativeTime:{ss:"%d 秒"}});var U={name:"ConfirmProcess",mounted:function(){this.initLiff()},methods:{initLiff:function(){var t=this;return d()(l.a.mark(function e(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new u.a(function(t,e){});case 2:case"end":return t.stop()}},e,t)}))()},enter:function(){var t=this;return d()(l.a.mark(function e(){var s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=R().format("Y/MM/DD HH:mm"),e.next=3,t.initLiff();case 3:return e.next=5,liff.sendMessages([{type:"flex",altText:"您已於 "+s+" 進入「MP 停車場」",contents:{type:"bubble",styles:{header:{backgroundColor:N}},header:{type:"box",layout:"vertical",margin:"md",contents:[{type:"text",text:"您已進入",size:"xs",color:D},{align:"center",color:D,size:"xxl",text:"MP 停車場",type:"text",weight:"bold"}]},body:{type:"box",layout:"vertical",contents:[{type:"box",layout:"horizontal",contents:[{type:"text",text:"入場時間",size:"sm",color:q,flex:0},{type:"text",text:s,size:"sm",color:D,align:"end"}]},{type:"box",layout:"horizontal",contents:[{type:"text",text:"停車費率",size:"sm",color:q,flex:0},{type:"text",text:"每小時 40 元",size:"sm",color:D,align:"end"}]}]},footer:{type:"box",layout:"horizontal",contents:[{type:"button",style:"secondary",height:"md",color:N,action:{type:"uri",label:"繳費出場",uri:"line://app/1558590172-3dZgPjvR"}}]}}}]);case 5:liff.closeWindow();case 6:case"end":return e.stop()}},e,t)}))()}}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container text-monospace",attrs:{id:"app"}},[e("b-card",{attrs:{"bg-variant":"light","text-variant":"black",title:"MP 停車場"}},[e("b-card-text",{staticClass:"mt-5"},[this._v("如果要再次入場，再次點選。")]),this._v(" "),e("b-button",{staticClass:"btn btn-danger btn-lg btn-block mt-3",on:{click:this.enter}},[this._v("我要入場")]),this._v(" "),e("b-button",{staticClass:"btn btn-danger btn-lg btn-block mt-3",on:{click:this.enter}},[this._v("關閉")])],1)],1)},staticRenderFns:[]};var O=s("VU/8")(U,X,!1,function(t){s("dTWJ")},"data-v-0f5cc591",null).exports;n.a.use(o.a);var S=new o.a({routes:[{path:"/",name:"EnterPark",component:j},{path:"/Payment",name:"Payment",component:P},{path:"/LeavePark",name:"LeavePark",component:H},{path:"/ConfirmProcess",name:"ConfirmProcess",component:O}]}),V=s("e6fC"),W=s.n(V);s("Jmt5"),s("9M+g");n.a.config.productionTip=!1,n.a.use(W.a),new n.a({el:"#app",router:S,components:{App:r},template:"<App/>"})},XS8U:function(t,e){},dTWJ:function(t,e){},jrSM:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(r(t))}function r(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.f48fbc35c499b27c2d83.js.map