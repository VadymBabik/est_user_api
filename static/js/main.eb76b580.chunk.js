(this.webpackJsonptest_user=this.webpackJsonptest_user||[]).push([[0],{11:function(e,t,n){e.exports={user:"User_user__2N01w",editWrapper:"User_editWrapper__1s_8r",wrapper:"User_wrapper__1meBW",user__desc:"User_user__desc__RTJfp",user__options:"User_user__options__1T3V-",edit:"User_edit__3ESVN",delete:"User_delete__qgYu2",check:"User_check__3lu7c",processSave:"User_processSave__2MtF0"}},18:function(e,t,n){e.exports={pagination:"Pagination_pagination__29PN9",activePage:"Pagination_activePage__2Epty",disabledPage:"Pagination_disabledPage__3eh_c",previousLin:"Pagination_previousLin__1AGjq",nextLink:"Pagination_nextLink__1bbmW"}},21:function(e,t,n){e.exports={modal:"Modal_modal__2iG9Q",modal__content:"Modal_modal__content__1RajZ",modal__title:"Modal_modal__title__3BwQL",modal__body:"Modal_modal__body__RSQKr"}},35:function(e,t,n){e.exports={selected:"Header_selected__3CvZz"}},38:function(e,t,n){e.exports={InputWrapper:"TextInput_InputWrapper__PlQsI"}},39:function(e,t,n){e.exports={textArea:"TextArea_textArea__zeUC8"}},41:function(e,t,n){e.exports={preloader:"Preloader_preloader__2x_a1"}},42:function(e,t,n){e.exports={wrapper:"NewUser_wrapper__24gCO"}},43:function(e,t,n){e.exports={App:"App_App__KRX30"}},80:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(14),s=n.n(r),i=n(16),l=n(3),o=(n(50),n(51),n(35)),u=n.n(o),d=n(0),j=function(){return Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"navbar-fixed",children:Object(d.jsx)("nav",{className:"indigo",children:Object(d.jsxs)("div",{className:"nav-wrapper container",children:[Object(d.jsx)(i.b,{to:"/",className:"brand-logo left",children:"PrUser"}),Object(d.jsx)("ul",{id:"nav-mobile",className:"right ",children:Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/create_new_user",activeClassName:u.a.selected,children:"Create new user"})})})]})})})})},b=function(){return Object(d.jsx)("footer",{className:"page-footer blue-grey darken-3",children:Object(d.jsx)("div",{className:"footer-copyright center-align",children:Object(d.jsx)("div",{className:"container",children:"\xa9 2021 Project User"})})})},p=n(17),h=n(12),m=n(9),x=n.n(m),O=n(13),v=n(37),_=n.n(v),f="LOADING_USER",g="LOADING_ERROR",N="FETCH_USERS",y=function(e){return{type:N,payload:e}},w=function(){var e=Object(O.a)(x.a.mark((function e(){var t,n,a,c=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:"get",a=c.length>2&&void 0!==c[2]?c[2]:{},e.next=5,_()({method:n,url:"http://localhost:3010/api".concat(t),data:a}).then((function(e){return e.data})).catch((function(e){throw e}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=n(11),k=n.n(C),P="IS_EDIT_USER",S="USER_EDIT",E="PROCESS_SAVE",I="FINISH_EDIT_USER",L=function(e){return{type:S,payload:e}},U=function(){return{type:I}},R=function(e,t){return function(){var n=Object(O.a)(x.a.mark((function n(a){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:E}),n.next=4,w("/users/".concat(e),"put",t);case 4:return n.t0=a,n.t1=y,n.next=8,w("/users");case 8:n.t2=n.sent,n.t3=(0,n.t1)(n.t2),(0,n.t0)(n.t3),a(U()),n.next=17;break;case 14:throw n.prev=14,n.t4=n.catch(0),n.t4.message;case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}()},A=n(38),T=n.n(A),D=function(e){var t=e.value,n=e.onKeyPress,a=e.onChange,c=e.label;return Object(d.jsxs)("div",{className:"".concat(T.a.InputWrapper," input-field"),children:[Object(d.jsx)("input",{className:"validate",id:"textInput",value:t,onChange:a,onKeyPress:n,type:"text"}),Object(d.jsx)("label",{className:"active",htmlFor:"textInput",children:c})]})},F=n(39),K=n.n(F),W=function(e){var t=e.value,n=e.onKeyPress,a=e.onChange,c=e.label;return Object(d.jsxs)("div",{className:"".concat(K.a.textArea," input-field"),children:[Object(d.jsx)("textarea",{value:t,onChange:a,onKeyPress:n,id:"textarea",className:"materialize-textarea validate"}),Object(d.jsx)("label",{className:"active",htmlFor:"textarea",children:c})]})},M=function(e){var t=e.children,n=document.getElementById("portal"),c=document.createElement("div");return Object(a.useEffect)((function(){return n.appendChild(c),function(){return n.removeChild(c)}}),[n,c]),Object(r.createPortal)(t,c)},B=n(21),G=n.n(B),z=function(e){var t=e.onClick,n=e.title,a=e.text1,c=e.fn1,r=e.text2,s=e.fn2;return Object(d.jsx)("div",{onClick:t,className:G.a.modal,children:Object(d.jsxs)("div",{onClick:function(){return function(e){return e.stopPropagation()}},className:"".concat(G.a.modal__content," z-depth-4"),children:[Object(d.jsx)("h5",{className:G.a.modal__title,children:n}),Object(d.jsxs)("div",{className:G.a.modal__body,children:[Object(d.jsx)("span",{onClick:c,className:"waves-effect waves-light btn",children:a}),Object(d.jsx)("span",{onClick:s,className:"waves-effect waves-light btn",children:r})]})]})})},Q=function(e){var t=e.user,n=Object(a.useState)(!1),c=Object(p.a)(n,2),r=c[0],s=c[1],i=t.name,l=t.surname,o=t.desc,u=t.id,j=Object(h.b)(),b=function(e){"Enter"===e.key&&j(R(u,{name:g,surname:N,desc:C}))},m=Object(h.c)((function(e){return e.editor})),v=m.userId,_=m.isEdit,f=m.processSave,g=m.name,N=m.surname,C=m.desc;return Object(d.jsxs)("li",{className:"".concat(k.a.user," collection-item row ").concat(f&&v===u?k.a.processSave:""),children:[_&&v===u?Object(d.jsxs)("div",{className:"".concat(k.a.editWrapper," row col s10"),children:[Object(d.jsx)("div",{className:"col s12 m6 l3",children:Object(d.jsx)(D,{value:g,label:"Name",onChange:function(e){return j(L({name:e.target.value}))},onKeyPress:b})}),Object(d.jsx)("div",{className:"col s12 m6 l3",children:Object(d.jsx)(D,{value:N,label:"Surname",onChange:function(e){return j(L({surname:e.target.value}))},onKeyPress:b})}),Object(d.jsx)("div",{className:"col s12 m12 l6",children:Object(d.jsx)(W,{value:C,label:"Description",onChange:function(e){return j(L({desc:e.target.value}))},onKeyPress:b})})]}):Object(d.jsxs)("div",{className:"".concat(k.a.wrapper," row col s10"),children:[Object(d.jsx)("div",{className:"col s12 m6 l3",children:Object(d.jsx)("p",{className:"".concat(k.a.user__name," "),children:i})}),Object(d.jsx)("div",{className:"col s12 m6 l3",children:Object(d.jsx)("p",{className:"".concat(k.a.user__surname),children:l})}),Object(d.jsx)("div",{className:"col s12 m12 l6",children:Object(d.jsx)("p",{className:"".concat(k.a.user__desc),children:o})})]}),Object(d.jsx)("div",{className:"".concat(k.a.user__options," center-align col s2"),children:_&&v===u?Object(d.jsx)("i",{onClick:function(){return j(R(u,{name:g,surname:N,desc:C}))},className:"".concat(k.a.check," material-icons"),children:"check"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{onClick:function(){return j({type:P,payload:{id:u,name:i,surname:l,desc:o}})},className:"".concat(k.a.edit," material-icons"),children:"edit"}),Object(d.jsx)("i",{onClick:function(){return s(!0)},className:"".concat(k.a.delete," material-icons"),children:"delete"})]})}),r&&Object(d.jsx)(M,{children:Object(d.jsx)(z,{title:"are you sure you want to delete the user?",text1:"Yes",fn1:function(){return j(function(e){return function(){var t=Object(O.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w("/users/".concat(e),"delete");case 3:a=t.sent,n(y(a)),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(u))},text2:"No",fn2:function(){s(!1)},onClick:function(){return s(!1)}})})]})},H=n(40),J=n.n(H),V=n(18),q=n.n(V),Y=function(e){var t=e.pageCount,n=e.changePage;return Object(d.jsx)(J.a,{previousLabel:"<",nextLabel:">",pageCount:t,onPageChange:n,containerClassName:q.a.pagination,previousLinkClassName:q.a.previousLin,nextLinkClassName:q.a.nextLink,disabledClassName:q.a.disabledPage,activeClassName:q.a.activePage})},Z=n(41),X=n.n(Z),$=function(){return Object(d.jsx)("div",{className:X.a.preloader,children:Object(d.jsx)("div",{className:"preloader-wrapper big active",children:Object(d.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(d.jsx)("div",{className:"circle-clipper left",children:Object(d.jsx)("div",{className:"circle"})}),Object(d.jsx)("div",{className:"gap-patch",children:Object(d.jsx)("div",{className:"circle"})}),Object(d.jsx)("div",{className:"circle-clipper right",children:Object(d.jsx)("div",{className:"circle"})})]})})})},ee=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.users})),n=t.data,c=t.isLoading,r=Object(a.useState)(0),s=Object(p.a)(r,2),i=s[0],l=s[1],o=5*i,u=n.slice(o,o+5),j=Math.ceil(n.length/5);return Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:f}),e.t0=t,e.t1=y,e.next=6,w("/users");case 6:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),(0,e.t0)(e.t3),e.next=15;break;case 11:throw e.prev=11,e.t4=e.catch(0),t((n=e.t4,{type:g,payload:n})),e.t4.message;case 15:case"end":return e.stop()}var n}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{className:"center-align",children:"List user"}),c?Object(d.jsx)($,{}):Object(d.jsxs)("div",{children:[Object(d.jsx)("ul",{className:"collection ",children:n.length?u.map((function(e){return Object(d.jsx)(Q,{user:e},e.id)})):Object(d.jsx)("li",{className:"collection-item center-align",children:"List user emty"})}),n.length>5&&Object(d.jsx)(Y,{changePage:function(e){var t=e.selected;l(t)},pageCount:j})]})]})},te=n(42),ne=n.n(te),ae=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(h.b)(),s=Object(l.g)(),i=Object(h.c)((function(e){return e.editor})),o=i.name,u=i.surname,j=i.desc;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{className:"center-align",children:"List user"}),Object(d.jsx)("ul",{className:"collection ",children:Object(d.jsxs)("div",{className:"".concat(ne.a.wrapper," col s12"),children:[Object(d.jsx)(D,{value:o,label:"Name",onChange:function(e){return r(L({name:e.target.value}))}}),Object(d.jsx)(D,{value:u,label:"Surname",onChange:function(e){return r(L({surname:e.target.value}))}}),Object(d.jsx)(W,{value:j,label:"Description",onChange:function(e){return r(L({desc:e.target.value}))}}),Object(d.jsxs)("button",{onClick:function(){var e;r((e={name:o,surname:u,desc:j},function(){var t=Object(O.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w("/users","post",e);case 3:return a=t.sent,console.log(a),t.t0=n,t.t1=y,t.next=9,w("/users");case 9:t.t2=t.sent,t.t3=(0,t.t1)(t.t2),(0,t.t0)(t.t3),n(U()),t.next=18;break;case 15:throw t.prev=15,t.t4=t.catch(0),t.t4;case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}())),c(!0)},className:"btn indigo waves-effect waves-light ".concat(o&&u&&j?"active":"disabled"),children:["Save new user",Object(d.jsx)("i",{className:"material-icons right",children:"send"})]})]})}),n&&Object(d.jsx)(M,{children:Object(d.jsx)(z,{title:"User created successfully!",text1:"Go to list",fn1:function(){return s.push("/")},text2:"\u0421reate new user",fn2:function(){c(!1)},onClick:function(){return c(!1)}})})]})},ce=n(43),re=n.n(ce);var se=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:re.a.App,children:[Object(d.jsx)(j,{}),Object(d.jsx)("main",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsx)(ee,{})}),Object(d.jsx)(l.b,{exact:!0,path:"/create_new_user",children:Object(d.jsx)(ae,{})}),Object(d.jsx)(l.a,{to:"/"})]})}),Object(d.jsx)(b,{})]})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},le=n(20),oe=n(44),ue=n(45),de=n(4),je={data:[],isLoading:!1,isError:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(de.a)(Object(de.a)({},e),{},{isLoading:!0});case g:return Object(de.a)(Object(de.a)({},e),{},{isError:t.payload});case N:return Object(de.a)(Object(de.a)({},e),{},{isLoading:!1,isError:null,data:t.payload});default:return e}},pe={isEdit:!1,processSave:!1,userId:null,name:"",surname:"",desc:""},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(de.a)(Object(de.a)({},e),{},{isEdit:!0,userId:t.payload.id,name:t.payload.name,surname:t.payload.surname,desc:t.payload.desc});case S:return Object(de.a)(Object(de.a)({},e),t.payload);case E:return Object(de.a)(Object(de.a)({},e),{},{processSave:!0});case I:return Object(de.a)(Object(de.a)({},e),{},{isEdit:!1,processSave:!1,userId:null,name:"",surname:"",desc:""});default:return e}},me=Object(le.combineReducers)({users:be,editor:he}),xe=Object(le.createStore)(me,Object(oe.composeWithDevTools)(Object(le.applyMiddleware)(ue.a)));s.a.render(Object(d.jsx)(h.a,{store:xe,children:Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(se,{})})}),document.getElementById("root")),ie()}},[[80,1,2]]]);
//# sourceMappingURL=main.eb76b580.chunk.js.map