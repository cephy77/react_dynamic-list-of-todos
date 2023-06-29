(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c.n(a),n=c(2),l=c(1),i=(c(10),c(11),c(12),c(3)),o=c.n(i),d=c(0),r=Object(l.memo)((function(e){var t=e.todos,c=e.selectedTodo,a=e.choseTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.id===(null===c||void 0===c?void 0:c.id);return Object(d.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":t}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:o()("far",{"fa-eye":!t,"fa-eye-slash":t})})})})})]},e.id)}))})]})})),j=function(e){var t=e.filterQuery,c=e.applyFilter,a=e.applyQuery,s=Object(l.useState)(""),i=Object(n.a)(s,2),o=i[0],r=i[1];return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var a=e.target.value;a!==t&&c(a)},defaultValue:t,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:o,onChange:function(e){r(e.target.value),a(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),o&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){r(""),a("")}})})]})]})},u=(c(14),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.onClose,c=e.todo,a=Object(l.useState)(!1),s=Object(n.a)(a,2),i=s[0],r=s[1],j=Object(l.useState)(null),h=Object(n.a)(j,2),m=h[0],O=h[1];return Object(l.useEffect)((function(){var e;(e=c.userId,b("/users/".concat(e))).then((function(e){return O(e)})).finally((function(){return r(!0)}))}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),i?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:t})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(d.jsx)("strong",{className:o()({"has-text-danger":!(null!==c&&void 0!==c&&c.completed),"has-text-success":null===c||void 0===c?void 0:c.completed}),children:null!==c&&void 0!==c&&c.completed?"Done":"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===m||void 0===m?void 0:m.name})]})]})]}):Object(d.jsx)(u,{})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(!0),i=Object(n.a)(s,2),o=i[0],m=i[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],p=x[1],v=Object(l.useState)(null),N=Object(n.a)(v,2),y=N[0],g=N[1],k=Object(l.useState)(null),C=Object(n.a)(k,2),S=C[0],w=C[1];Object(l.useEffect)((function(){b("/todos").then((function(e){return a(e)})).finally((function(){return m(!1)}))}),[]);var T=Object(l.useMemo)((function(){var e="all"===f?c:c.filter((function(e){return"active"===f?!e.completed:e.completed}));return y?e.filter((function(e){return e.title.toLowerCase().includes(y.toLowerCase())})):e}),[c,f,y]),_=Object(l.useCallback)((function(e){return p(e)}),[]),E=Object(l.useCallback)((function(e){return g(e)}),[]),L=Object(l.useCallback)((function(){return w(null)}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{filterQuery:f,applyFilter:_,applyQuery:E})}),Object(d.jsx)("div",{className:"block",children:o&&T?Object(d.jsx)(u,{}):Object(d.jsx)(r,{todos:T,selectedTodo:S,choseTodo:w})})]})})}),S&&Object(d.jsx)(h,{onClose:L,todo:S})]})};s.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0eeebb8e.chunk.js.map