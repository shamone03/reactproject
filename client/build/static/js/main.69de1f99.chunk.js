(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(22),s=n.n(a),o=n(14),i=n(4),u=n(19),l=n(3),j=n.n(l),d=n(7),b=n(10),h=(n(31),n(0)),p=function(e){return Object(h.jsx)("button",{onClick:function(){e.onClick()},className:"btn",style:f(e.color),children:e.text})},f=function(e){return{backgroundColor:e}};p.defaultProps={color:"black",text:"button"};var O=p,x=function(e){var t=e.toggleShowAddTask,n=e.showAddTask;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:"task tracker"}),Object(h.jsx)(O,{color:n?"red":"green",text:n?"Close":"Add",onClick:function(){t()}})]})},m=n(25),g=function(e){var t=e.toggleCheck,n=e.taskID,r=e.checked;return Object(h.jsx)(O,{onClick:function(){return t(n)},text:r?"\ud83d\udc4c":"\ud83d\udc4e"})},k=function(e){var t=e.task,n=e.onDelete,r=e.toggleCheck;return Object(h.jsxs)("div",{className:"task",children:[Object(h.jsx)(g,{toggleCheck:r,taskID:t._id,checked:t.done}),Object(h.jsxs)("div",{className:"todotask",children:[Object(h.jsxs)("h3",{children:[t.title," ",Object(h.jsx)(m.a,{onClick:function(){return n(t._id)},style:{color:"red"}})]}),Object(h.jsx)("p",{children:t.body})]})]})},v=function(e){var t=e.tasks,n=e.onDelete,r=e.toggleCheck;return Object(h.jsx)("div",{id:"tasks",children:t.map((function(e){return Object(h.jsx)(k,{task:e,onDelete:n,toggleCheck:r},e._id)}))})},y=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(b.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(!1),d=Object(b.a)(j,2),p=d[0],f=d[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?t({title:a,body:u,done:p}):alert("Enter a title")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Title"}),Object(h.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"description",onChange:function(e){return l(e.target.value)},value:u})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Status"}),Object(h.jsx)("input",{type:"checkbox",onChange:function(e){return f(e.currentTarget.checked)},checked:p})]}),Object(h.jsx)("input",{type:"submit",name:"",className:"btn btn-block",value:"Add Task"})]})},w=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks",{method:"POST",cors:"same-origin",headers:{Origin:"/","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",200===n.status);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks",{method:"DELETE",cors:"same-origin",headers:{Origin:"/","Content-Type":"application/json"},body:JSON.stringify({_id:t})});case 2:return n=e.sent,e.abrupt("return",200===n.status);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks",{method:"GET",cors:"same-origin",headers:{Origin:"/","Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(33).config();var S=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(b.a)(a,2),o=s[0],i=s[1],l=Object(r.useState)(!1),p=Object(b.a)(l,2),f=p[0],O=p[1];Object(r.useEffect)(Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)}))),[f]);var m=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(o),e.next=3,w(t);case 3:if(e.t0=e.sent,!0!==e.t0){e.next=7;break}i([].concat(Object(u.a)(o),[t])),O(!f);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(o),e.next=3,C(t);case 3:if(!e.sent){e.next=6;break}O(!f),console.log("deleted ",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{title:"hello",toggleShowAddTask:function(){return c(!n)},showAddTask:n}),n?Object(h.jsx)(y,{onAdd:m}):"",o.length>0?Object(h.jsx)(v,{tasks:o,onDelete:g,toggleCheck:function(e){var t=Object(u.a)(o),n=o.find((function(t){return t._id===e}));t[o.indexOf(n)].done=!t[o.indexOf(n)].done,i(t)}}):Object(h.jsx)("p",{children:"No tasks"})]})},T=function(){var e=Object(d.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users",{method:"POST",cors:"same-origin",headers:{Origin:"/","Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 2:return r=e.sent,e.abrupt("return",200===r.status);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var F=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(b.a)(a,2),o=s[0],i=s[1],u=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(n,o);case 2:if(!e.sent){e.next=4;break}console.log("success");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Register"}),Object(h.jsxs)("form",{className:"add-form",onSubmit:u,children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Username"}),Object(h.jsx)("input",{type:"text",placeholder:"username",onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Password"}),Object(h.jsx)("input",{type:"text",placeholder:"password",onChange:function(e){return i(e.target.value)}})]}),Object(h.jsx)("input",{type:"submit",name:"",className:"btn btn-block",value:"Add Task"})]})]})};var A=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h1",{children:"Login"})})};var E=function(){return Object(h.jsx)(o.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("nav",{id:"navBar",children:[Object(h.jsx)("li",{className:"listElement",id:"homeLink",children:Object(h.jsx)(o.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{className:"listElement",id:"registerLink",children:Object(h.jsx)(o.b,{to:"/register",children:"Register"})}),Object(h.jsx)("li",{className:"listElement",id:"loginLink",children:Object(h.jsx)(o.b,{to:"/login",children:"Login"})})]}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",component:S}),Object(h.jsx)(i.a,{path:"/register",component:F}),Object(h.jsx)(i.a,{path:"/login",component:A})]})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),D()}},[[43,1,2]]]);
//# sourceMappingURL=main.69de1f99.chunk.js.map