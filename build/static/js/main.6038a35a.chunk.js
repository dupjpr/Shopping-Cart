(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var a=c(0),s=c(1),n=c(7),r=c.n(n),i=c(8),j=c(4),l=c(2),o=(c(14),function(t){var e=t.cart,c=t.handleClickCart,s=t.total,n=t.cartAction,r=t.setCartAction;return Object(a.jsxs)("div",{className:n,children:[Object(a.jsxs)("div",{className:"cart-header",children:[Object(a.jsx)("h2",{children:"Your Dishes"}),Object(a.jsx)("p",{onClick:function(t){"cart-action"===n&&r("cart")},children:"x"}),Object(a.jsx)("hr",{})]}),e.map((function(t){return Object(a.jsxs)("div",{className:"cart-item",children:[Object(a.jsxs)("div",{className:"cart-item-topSection",children:[Object(a.jsx)("div",{className:"cart-item-img",children:Object(a.jsx)("img",{src:t.strMealThumb,alt:"product"})}),Object(a.jsxs)("div",{className:"cart-item-description",children:[Object(a.jsx)("h4",{children:t.strMeal}),Object(a.jsxs)("p",{children:[t.quantity," X $ ",t.price]})]})]}),Object(a.jsxs)("div",{className:"cart-item-bottomSection",children:[Object(a.jsxs)("span",{className:"cart-item-bottomSection-subT",children:["Subtotal: $ ",t.price*t.quantity]}),Object(a.jsx)("span",{onClick:function(){return c(t.idMeal)},children:Object(a.jsx)("i",{class:"far fa-minus-square"})})]})]},t.idMeal)})),Object(a.jsxs)("div",{className:"cart-total",children:[Object(a.jsx)("hr",{}),Object(a.jsxs)("span",{children:["Total: $ ",s]}),Object(a.jsx)("button",{className:"cart-total-button",children:"PAY"})]})]})}),d=(c(15),function(t){var e=t.handleClickBag,c=t.cart,s=t.total;return Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{className:"header-logo",children:[Object(a.jsxs)("div",{className:"logoA",children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"fas fa-ship"})}),Object(a.jsx)("div",{class:"uno"}),Object(a.jsx)("div",{class:"dos"}),Object(a.jsx)("div",{class:"tres"})]}),Object(a.jsx)("h1",{children:"Sea Food"})]}),Object(a.jsxs)("div",{className:"header-bag",children:[Object(a.jsx)("i",{className:"fas fa-shopping-bag",onClick:function(t){return e(t)}}),Object(a.jsxs)("span",{className:"total",children:["$",s]}),Object(a.jsx)("p",{className:"number-items",children:c.length})]})]})}),u=(c(16),function(t){var e=t.products,c=t.handleClick,n=Object(s.useState)(1),r=Object(l.a)(n,2),i=r[0],j=r[1],o=Object(s.useState)(""),d=Object(l.a)(o,2),u=d[0],b=d[1];return Object(a.jsx)("div",{className:"products",children:e.map((function(t){return Object(a.jsxs)("div",{className:"products-product",children:[Object(a.jsxs)("div",{className:"products-product-topSection",children:[Object(a.jsx)("h3",{children:t.strMeal}),Object(a.jsx)("img",{src:t.strMealThumb,alt:"product"}),Object(a.jsxs)("span",{children:["Price: $ ",t.price]})]}),Object(a.jsxs)("div",{className:"products-product-bottomSection",children:[Object(a.jsx)("button",{onClick:function(e){return c(e,t.idMeal,i,j,u)},children:"Add to cart"}),Object(a.jsx)("input",{type:"number",min:"1",onChange:function(t){return function(t){var e=t.target.value,c=t.target;j(e),b(c)}(t)},placeholder:"1"})]})]},t.idMeal)}))})});c(17);var b=function(){var t=Object(s.useState)([]),e=Object(l.a)(t,2),c=e[0],n=e[1],r=Object(s.useState)([]),b=Object(l.a)(r,2),h=b[0],O=b[1],p=Object(s.useState)(0),m=Object(l.a)(p,2),x=m[0],f=m[1],v=Object(s.useState)("cart"),N=Object(l.a)(v,2),g=N[0],C=N[1];return Object(s.useEffect)((function(){fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((function(t){return t.json()})).then((function(t){var e=t.meals.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{price:100})}));n(e)})),console.log("cargando .......")}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{handleClickBag:function(){C("cart-action")},cart:h,total:x}),Object(a.jsx)(u,{products:c,handleClick:function(t,e,a,s,n){var r=c.filter((function(t){return t.idMeal===e}));h.some((function(t){return t.idMeal===e}))||(O([].concat(Object(i.a)(h),[Object(j.a)(Object(j.a)({},r[0]),{},{quantity:parseInt(a)})])),s(1),f(x+parseInt(a)*r[0].price),0!=n.length&&(n.value=1))}}),Object(a.jsx)(o,{cart:h,handleClickCart:function(t){var e=h.filter((function(e){return e.idMeal===t})),c=h.filter((function(e){return e.idMeal!==t}));O(c),f(x-e[0].quantity*e[0].price)},total:x,cartAction:g,setCartAction:C})]})};r.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.6038a35a.chunk.js.map