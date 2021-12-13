(this.webpackJsonp20211201_budget_planner=this.webpackJsonp20211201_budget_planner||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var a,c,i=t(0),s=t(10),r=t.n(s),o=(t(24),t(11)),u=t(4),d=t(9),l=t(2),b=(t(25),t(3)),p=t(1),m=b.a.div(a||(a=Object(l.a)(["\n    display: grid;\n    grid-template-columns: auto;\n    grid-gap: 1rem;\n\n    div {\n        padding: 0 1.25rem;\n        display: flex;\n        align-items: center;\n        height: 4.5em;\n    }\n      \n    #budgetRemaining {\n        background-color: #d5eddb;\n    }\n      \n    #budgetSpent {\n        background-color: #cbe5ff;\n    }\n\n    .negative {\n        color: #ea1f25;\n    }\n\n    @media screen and (min-width: 575px) {\n        grid-template-columns: repeat(3, 1fr);\n    }\n"]))),j=b.a.div(c||(c=Object(l.a)(["\n    background-color: #e1e3e4;\n    justify-content: space-between;\n    column-gap: .5rem;\n\n    input {\n        background-color: #fff;\n    }\n      \n    .fas {\n        margin-top: .4rem;\n    }\n      \n    .fa-check-circle {\n        color: #43af49;\n    }\n      \n    .fa-times-circle {\n        color: #ea1f25;\n    }\n"])));var g,h,x=function(e){var n=Object(p.jsxs)(j,{children:["Budget:\u2002$",e.budgetTotal,Object(p.jsx)("button",{className:"formBtn",onClick:e.switchBudgetMode,children:"Edit"})]}),t=Object(p.jsxs)(j,{children:[Object(p.jsx)("label",{htmlFor:"newBudget",children:"Budget:"}),Object(p.jsx)("input",{type:"number",name:"newBudget",id:"newBudget",min:"1",value:e.newBudget,onChange:e.handleChange}),Object(p.jsx)("button",{className:"iconBtn",onClick:e.saveNewBudget,children:Object(p.jsx)("i",{className:"fas fa-check-circle"})}),Object(p.jsx)("button",{className:"iconBtn",onClick:e.cancelNewBudget,children:Object(p.jsx)("i",{className:"fas fa-times-circle"})})]});return Object(p.jsxs)(m,{children:[e.budgetMode?t:n,e.budgetRemaining>0?Object(p.jsxs)("div",{id:"budgetRemaining",children:["Remaining:\u2002$",e.budgetRemaining]}):Object(p.jsxs)("div",{id:"budgetRemaining",children:["Remaining:\u2002$",Object(p.jsxs)("span",{className:"negative",children:["(",Math.abs(e.budgetRemaining),")"]})]}),Object(p.jsxs)("div",{id:"budgetSpent",children:["Spent so far:\u2002$",e.budgetSpent]})]})},f=b.a.div(g||(g=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    > div {\n        display: flex;\n        column-gap: 1.25rem;\n    }\n"]))),O=b.a.div(h||(h=Object(l.a)(['\n    background-color: #007dfe;\n    color: #fff;\n    height: 1.5em;\n    font-size: small;\n    position: relative;\n    display:flex;\n    align-items: center;\n\n    &::before, &::after {\n        content: "";\n        background-color: #007dfe;\n        border-radius: 50%;\n        position: absolute;\n        height: 1.5em;\n        width: 1.5em;\n        z-index: -1;\n    }\n\n    &::before {\n        left: -.75em;\n    }\n      \n    &::after {\n        right: -.75em;\n    }\n'])));var v,E=function(e){var n=Object(i.useContext)(T);return Object(p.jsxs)(f,{children:[Object(p.jsx)("div",{children:e.name}),Object(p.jsxs)("div",{children:[Object(p.jsxs)(O,{children:["$",e.cost,n]}),Object(p.jsx)("button",{className:"iconBtn",onClick:n,children:Object(p.jsx)("i",{className:"fas fa-times-circle"})})]})]})},C=b.a.ul(v||(v=Object(l.a)(["\n  margin: .75rem 0 1rem;\n  list-style-type: none;\n  height: 15em;\n  overflow: auto;\n\n  li {\n    padding: .75rem;\n    border: 1px solid #e1e3e4;\n  }\n"])));var w,N=function(e){var n=(e.searchMode?e.expenseList.filter((function(n){return n.name.toLowerCase().includes(e.inputSearch.toLowerCase())})):e.expenseList).map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(E,{name:e.name,cost:e.cost})},e.name.toLowerCase().replace(/\s/g,"-"))}));return Object(p.jsxs)("div",{className:"ExpenseList",children:[Object(p.jsx)("h2",{children:"Expenses"}),Object(p.jsx)("input",{type:"text",name:"inputSearch",id:"inputSearch",placeholder:"Type to search...",style:{marginTop:".75rem"},value:e.inputSearch,onChange:e.searchExpense}),Object(p.jsx)(C,{children:n})]})},B=b.a.ul(w||(w=Object(l.a)(["\n    margin: .75rem 0 1rem;\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 1rem;\n\n    @media screen and (min-width: 575px) {\n        grid-template-columns: repeat(3, 1fr);\n    }\n"])));var y,S=function(e){return Object(p.jsxs)("div",{className:"AddExpense",children:[Object(p.jsx)("h2",{children:"Add Expense"}),Object(p.jsxs)(B,{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("label",{htmlFor:"inputExpenseName",children:"Name"}),Object(p.jsx)("input",{type:"text",name:"inputExpenseName",id:"inputExpenseName",value:e.inputExpenseName,onChange:e.handleChange})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("label",{htmlFor:"inputExpenseCost",children:"Cost"}),Object(p.jsx)("input",{type:"number",name:"inputExpenseCost",id:"inputExpenseCost",min:"1",value:e.inputExpenseCost,onChange:e.handleChange})]})]}),Object(p.jsx)("button",{className:"formBtn",onClick:e.addExpense,children:"Save"})]})},k=t(6),L=b.a.div(y||(y=Object(l.a)(["\n  width: 100%;\n  margin: auto;\n\n  > * {\n    margin: 1.5rem 1rem;\n  }\n\n  @media screen and (min-width: 575px) {\n    max-width: 800px;\n  }\n"]))),T=Object(i.createContext)();var M=function(){var e=Object(k.c)((function(e){return e.expenseList})),n=Object(k.c)((function(e){return e.budgetTotal})),t=Object(k.b)(),a=Object(i.useState)(!1),c=Object(d.a)(a,2),s=c[0],r=c[1],l=Object(i.useState)(""),b=Object(d.a)(l,2),m=b[0],j=b[1],g=Object(i.useState)(!1),h=Object(d.a)(g,2),f=h[0],O=h[1],v=Object(i.useState)({newBudget:n,inputExpenseName:"",inputExpenseCost:""}),E=Object(d.a)(v,2),C=E[0],w=E[1],B=function(e){w((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(o.a)({},e.target.name,e.target.value))}))},y=e.reduce((function(e,n){return e+n.cost}),0),M=n-y;return Object(p.jsxs)(L,{children:[Object(p.jsx)("h1",{children:"My Budget Planner"}),Object(p.jsx)(x,{budgetMode:s,newBudget:C.newBudget,budgetTotal:n,budgetRemaining:M,budgetSpent:y,handleChange:B,switchBudgetMode:function(){r(!0)},cancelNewBudget:function(){w((function(e){return Object(u.a)(Object(u.a)({},e),{},{newBudget:n})})),r(!1)},saveNewBudget:function(){Number(C.newBudget)<1?alert("Budget must be at least $1"):(t({type:"UPDATE",newBudget:C.newBudget}),r(!1))}}),Object(p.jsx)(T.Provider,{value:function(e){if(window.confirm("Are you sure you want to delete this expense?")){var n=e.target.parentElement.parentElement.previousElementSibling.innerHTML,a=Number(e.target.parentElement.previousElementSibling.innerHTML.slice(1));t(function(e,n){return{type:"DELETE",name:e,cost:n}}(n,a))}},children:Object(p.jsx)(N,{searchMode:f,inputSearch:m,expenseList:e,searchExpense:function(e){var n=!!e.target.value;j(e.target.value),O(n)}})}),Object(p.jsx)(S,{inputExpenseName:C.inputExpenseName,inputExpenseCost:C.inputExpenseCost,handleChange:B,addExpense:function(){if(C.inputExpenseName&&""!==C.inputExpenseCost)if(Number(C.inputExpenseCost)<1)alert("Cost must be at least $1");else{var e=C.inputExpenseName,n=Number(C.inputExpenseCost);t(function(e,n){return{type:"ADD",name:e,cost:n}}(e,n)),w((function(e){return Object(u.a)(Object(u.a)({},e),{},{inputExpenseName:"",inputExpenseCost:""})}))}else alert("Cannot add expense without a name and cost")}})]})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),i(e),s(e)}))},R=t(13),A=t(14),F=[{name:"Shopping",cost:50},{name:"Vacation",cost:300},{name:"Transportation",cost:70},{name:"Gas",cost:400},{name:"Child Care",cost:500}],$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD":return[].concat(Object(A.a)(e),[{name:n.name,cost:n.cost}]);case"DELETE":var t=e.findIndex((function(e){return e.name===n.name&&e.cost===n.cost}));return[].concat(Object(A.a)(e.slice(0,t)),Object(A.a)(e.slice(t+1)));default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3,n=arguments.length>1?arguments[1]:void 0;return"UPDATE"===n.type?n.newBudget:e},_=Object(R.a)({expenseList:$,budgetTotal:P}),I=Object(R.b)(_);r.a.render(Object(p.jsx)(k.a,{store:I,children:Object(p.jsx)(M,{})}),document.getElementById("root")),D()}},[[34,1,2]]]);
//# sourceMappingURL=main.fa3f434b.chunk.js.map