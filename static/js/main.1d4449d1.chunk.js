(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,n){e.exports={navLinkContainer:"Header_navLinkContainer__3ajTM",navLinkContainerActive:"Header_navLinkContainerActive__1LrVo",navButton:"Header_navButton__DN5ig",navLink:"Header_navLink__1i-p7"}},function(e,a,n){e.exports={affairs:"Affairs_affairs__1Sm3l",affair:"Affairs_affair__3yWNV"}},,,,function(e,a,n){e.exports={message:"Message_message__1CLBJ",messageWindow:"Message_messageWindow__tBWXS",name:"Message_name__1OAZa",messageTime:"Message_messageTime__1-RPX"}},function(e,a,n){e.exports={superInput:"SuperInputText_superInput__3jQTk",errorInput:"SuperInputText_errorInput__14T0a",error:"SuperInputText_error__1V_Wc"}},,function(e,a,n){e.exports={errorContainer:"Error404_errorContainer__1lt9h",errorContent:"Error404_errorContent__eleBF",navLink:"Error404_navLink__2ZZwz"}},function(e,a,n){e.exports={checkbox:"SuperCheckbox_checkbox__uKP_I",spanClassName:"SuperCheckbox_spanClassName__1moew"}},function(e,a,n){e.exports={input:"Greeting_input__3EXxO",error:"Greeting_error__rvOWD"}},,,function(e,a,n){e.exports={blue:"HW4_blue__1mBvC",column:"HW4_column__3aRSt",testSpanError:"HW4_testSpanError__3EnQ4"}},function(e,a,n){e.exports={default:"SuperButton_default__2HAtz",red:"SuperButton_red__3Q7V0"}},,,,,function(e,a,n){e.exports={App:"App_App__1dd1J"}},,,,function(e,a,n){e.exports=n(40)},,,,,function(e,a,n){},,,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(24),c=n.n(l),o=(n(34),n(25)),i=n.n(o),s=n(3),u=n(5),m=n(6),d=n.n(m);var E=function(){var e=Object(t.useState)(!1),a=Object(s.a)(e,2),n=a[0],l=a[1],c=function(){l(!n)};return r.a.createElement("div",{className:d.a.header},r.a.createElement("div",{className:d.a.navButton,onClick:c},"|||"),r.a.createElement("div",{className:n?"".concat(d.a.navLinkContainer," ").concat(d.a.navLinkContainerActive):d.a.navLinkContainer},r.a.createElement(u.b,{to:"/pre-junior",className:d.a.navLink,onClick:c},"Pre-junior"),r.a.createElement(u.b,{to:"/junior",className:d.a.navLink,onClick:c},"Junior"),r.a.createElement(u.b,{to:"/junior-plus",className:d.a.navLink,onClick:c},"Junior-plus")))},f=n(1),p=n(11),_=n.n(p);var v=function(e){return r.a.createElement("div",{className:_.a.message},r.a.createElement("img",{src:e.avatar,alt:""}),r.a.createElement("div",{className:_.a.messageWindow},r.a.createElement("div",{className:_.a.name},e.name),e.message,r.a.createElement("div",{className:_.a.messageTime},e.time)))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",k="some text",C="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:h,name:b,message:k,time:C}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var N=function(){return r.a.createElement("div",null,r.a.createElement(g,null))},j=n(14),x=n.n(j);var O=function(){return r.a.createElement("div",{className:x.a.errorContainer},r.a.createElement("div",{className:x.a.errorContent},r.a.createElement(u.b,{to:"/",className:x.a.navLink},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")))},S=n(8),w=n(12),y=n.n(w),A=function(e){e.type;var a=e.onChange,n=e.onChangeText,t=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,s=Object(S.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(y.a.error," ").concat(i||""),m="".concat(c?"".concat(y.a.errorInput," ").concat(y.a.superInput):y.a.superInput," ").concat(o||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:u},c))},L=n(19),T=n.n(L),W=n(20),B=n.n(W),I=function(e){var a=e.red,n=e.className,t=Object(S.a)(e,["red","className"]),l="".concat(a?B.a.red:B.a.default," ").concat(n);return r.a.createElement("button",Object.assign({className:l},t))},H=n(15),F=n.n(H),J=function(e){e.type;var a=e.onChange,n=e.onChangeChecked,t=e.className,l=(e.spanClassName,e.children),c=Object(S.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(F.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),n&&n(e.currentTarget.checked)},className:o},c)),r.a.createElement("span",{className:F.a.checkboxCheckmark}),l&&r.a.createElement("span",{className:F.a.spanClassName},l))};var M=function(){var e=Object(t.useState)(""),a=Object(s.a)(e,2),n=a[0],l=a[1],c=n?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(t.useState)(!1),u=Object(s.a)(i,2),m=u[0],d=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:T.a.column},r.a.createElement(A,{value:n,onChangeText:l,onEnter:o,error:c}),r.a.createElement(A,{className:T.a.blue}),r.a.createElement(I,null,"default"),r.a.createElement(I,{red:!0,onClick:o},"delete "),r.a.createElement(I,{disabled:!0},"disabled"),r.a.createElement(J,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(J,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var P=function(){return r.a.createElement("div",null,r.a.createElement(M,null))};var U=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("div",null,e.affair.name),r.a.createElement("div",null,e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},X=n(7),K=n.n(X);var V=function(e){var a=e.data.map((function(a){return r.a.createElement(U,{className:K.a.affair,key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:K.a.affairs},a,r.a.createElement("button",{className:K.a.btn,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:K.a.btn,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:K.a.btn,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:K.a.btn,onClick:function(){e.setFilter("low")}},"Low"))},Z=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var G=function(){var e=Object(t.useState)(Z),a=Object(s.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)("all"),o=Object(s.a)(c,2),i=o[0],u=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(n,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(V,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){var n;return null!==(n=e._id!==a)&&void 0!==n?n:e}))}(n,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},Q=n(28),R=n(16),z=n.n(R),D=function(e){var a=e.name,n=e.setNameCallback,t=e.addUser,l=e.error,c=e.totalUsers,o=l?"".concat(z.a.error," ").concat(z.a.input):z.a.input;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:n,className:o,placeholder:"Name"}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:t},"add"),r.a.createElement("span",null,c))},q=function(e){var a=e.users,n=e.addUserCallback,l=Object(t.useState)(""),c=Object(s.a)(l,2),o=c[0],i=c[1],u=Object(t.useState)(""),m=Object(s.a)(u,2),d=m[0],E=m[1],f=a.length;return r.a.createElement(D,{name:o,setNameCallback:function(e){E(""),i(e.currentTarget.value)},addUser:function(){o.trim(),o?(n(o),alert("Hello  ".concat(o,"!")),i("")):E("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!")},error:d,totalUsers:f})},Y=n(42);var $=function(){var e=Object(t.useState)([]),a=Object(s.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(q,{users:n,addUserCallback:function(e){l([].concat(Object(Q.a)(n),[{_id:Object(Y.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ee=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement($,null))},ae="/pre-junior",ne="/junior",te="/junior-plus";var re=function(){return r.a.createElement("div",null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,render:function(){return r.a.createElement(f.a,{to:ae})}}),r.a.createElement(f.b,{path:ae,render:function(){return r.a.createElement(N,null)}}),r.a.createElement(f.b,{path:ne,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(f.b,{path:te,render:function(){return r.a.createElement(P,null)}}),r.a.createElement(f.b,{render:function(){return r.a.createElement(O,null)}})))};var le=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(E,null),r.a.createElement(re,null)))};var ce=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.1d4449d1.chunk.js.map