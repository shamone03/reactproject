(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{149:function(e,t,n){},154:function(e,t){},156:function(e,t){},171:function(e,t){},173:function(e,t){},201:function(e,t){},203:function(e,t){},204:function(e,t){},209:function(e,t){},211:function(e,t){},217:function(e,t){},219:function(e,t){},238:function(e,t){},250:function(e,t){},253:function(e,t){},279:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),a=n(139),s=n.n(a),o=n(32),i=n(8),u=n(76),l=n(5),j=n.n(l),d=n(10),b=n(12),h=(n(149),n(0)),f=function(e){return Object(h.jsx)("button",{onClick:function(){e.onClick()},className:"btn",style:p(e.color),children:e.text})},p=function(e){return{backgroundColor:e}};f.defaultProps={color:"black",text:"button"};var O=f,x=function(e){var t=e.toggleShowAddTask,n=e.showAddTask;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:"task tracker"}),Object(h.jsx)(O,{color:n?"red":"green",text:n?"Close":"Add",onClick:function(){t()}})]})},m=n(143),g=function(e){var t=e.toggleCheck,n=e.taskID,r=e.checked;return Object(h.jsx)(O,{onClick:function(){return t(n)},text:r?"\ud83d\udc4c":"\ud83d\udc4e"})},k=function(e){var t=e.task,n=e.onDelete,r=e.toggleCheck;return Object(h.jsxs)("div",{className:"task",children:[Object(h.jsx)(g,{toggleCheck:r,taskID:t._id,checked:t.done}),Object(h.jsxs)("div",{className:"todotask",children:[Object(h.jsxs)("h3",{children:[t.title," ",Object(h.jsx)(m.a,{onClick:function(){return n(t._id)},style:{color:"red"}})]}),Object(h.jsx)("p",{children:t.body})]})]})},v=function(e){var t=e.tasks,n=e.onDelete,r=e.toggleCheck;return Object(h.jsx)("div",{id:"tasks",children:t.map((function(e){return Object(h.jsx)(k,{task:e,onDelete:n,toggleCheck:r},e._id)}))})},y=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(b.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(!1),d=Object(b.a)(j,2),f=d[0],p=d[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?t({title:a,body:u,done:f}):alert("Enter a title")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Title"}),Object(h.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"description",onChange:function(e){return l(e.target.value)},value:u})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Status"}),Object(h.jsx)("input",{type:"checkbox",onChange:function(e){return p(e.currentTarget.checked)},checked:f})]}),Object(h.jsx)("input",{type:"submit",name:"",className:"btn btn-block",value:"Add Task"})]})},w=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.hasOwnProperty("token")){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,fetch("/api/tasks/add",{method:"PUT",cors:"same-origin",headers:{Origin:"/","Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(t)});case 4:return n=e.sent,e.abrupt("return",200===n.status);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.hasOwnProperty("token")){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,fetch("/api/tasks",{method:"DELETE",cors:"same-origin",headers:{Origin:"/","Content-Type":"application/json"},body:JSON.stringify({_id:t})});case 4:return n=e.sent,e.abrupt("return",200===n.status);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.hasOwnProperty("token")){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,fetch("/api/tasks",{method:"GET",cors:"same-origin",headers:{Origin:"/","Content-Type":"application/json",Authorization:localStorage.getItem("token")}});case 4:return t=e.sent,e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=n(140),T=n.n(N);n(270).config();var F=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(b.a)(a,2),o=s[0],i=s[1],l=Object(r.useState)(!1),f=Object(b.a)(l,2),p=f[0],O=f[1];Object(r.useEffect)(Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)}))),[p]);var m=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(o),e.next=3,w(t);case 3:if(e.t0=e.sent,!0!==e.t0){e.next=7;break}i([].concat(Object(u.a)(o),[t])),O(!p);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(o),e.next=3,S(t);case 3:if(!e.sent){e.next=6;break}O(!p),console.log("deleted ",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[localStorage.hasOwnProperty("token")?Object(h.jsx)("h1",{children:T.a.decode(localStorage.getItem("token")).username}):Object(h.jsx)("p",{children:"not logged in"}),Object(h.jsx)(x,{title:"hello",toggleShowAddTask:function(){return c(!n)},showAddTask:n}),n?Object(h.jsx)(y,{onAdd:m}):"",o.length>0?Object(h.jsx)(v,{tasks:o,onDelete:g,toggleCheck:function(e){var t=Object(u.a)(o),n=o.find((function(t){return t._id===e}));t[o.indexOf(n)].done=!t[o.indexOf(n)].done,i(t)}}):Object(h.jsx)("p",{children:"No tasks"})]})},P=function(){var e=Object(d.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users",{method:"POST",cors:"same-origin",headers:{Origin:"/","Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 2:return r=e.sent,e.abrupt("return",200===r.status);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/login",{method:"POST",cors:"same-origin",headers:{Origin:"/","Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 2:if(200!==(r=e.sent).status){e.next=11;break}return e.next=6,r.json();case 6:return c=e.sent,localStorage.setItem("token",c.token),e.abrupt("return",c.token);case 11:return e.abrupt("return","error");case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var E=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(b.a)(a,2),o=s[0],i=s[1],u=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(n,o);case 2:if(!e.sent){e.next=4;break}console.log("success");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Register"}),Object(h.jsxs)("form",{className:"add-form",onSubmit:u,children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Username"}),Object(h.jsx)("input",{type:"text",placeholder:"username",onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Password"}),Object(h.jsx)("input",{type:"text",placeholder:"password",onChange:function(e){return i(e.target.value)}})]}),Object(h.jsx)("input",{type:"submit",name:"",className:"btn btn-block",value:"Register"})]})]})};var L=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(b.a)(a,2),o=s[0],i=s[1],u=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,A(n,o);case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{className:"add-form",onSubmit:u,children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Username"}),Object(h.jsx)("input",{type:"text",placeholder:"username",onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Password"}),Object(h.jsx)("input",{type:"text",placeholder:"password",onChange:function(e){return i(e.target.value)}})]}),Object(h.jsx)("input",{type:"submit",name:"",className:"btn btn-block",value:"Login"})]})]})};var D=function(){return Object(h.jsx)(o.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("nav",{id:"navBar",children:[Object(h.jsx)("li",{className:"listElement",id:"homeLink",children:Object(h.jsx)(o.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{className:"listElement",id:"registerLink",children:Object(h.jsx)(o.b,{to:"/register",children:"Register"})}),localStorage.hasOwnProperty("token")?Object(h.jsx)("li",{className:"listElement",id:"loginLink",children:Object(h.jsx)(o.b,{to:"/login",children:"Logout"})}):Object(h.jsx)("li",{className:"listElement",id:"loginLink",children:Object(h.jsx)(o.b,{to:"/login",children:"Login"})})]}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",component:F}),Object(h.jsx)(i.a,{path:"/register",component:E}),Object(h.jsx)(i.a,{path:"/login",component:L})]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,280)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),I()}},[[279,1,2]]]);
//# sourceMappingURL=main.c3e3433a.chunk.js.map