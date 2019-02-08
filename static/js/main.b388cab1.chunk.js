(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),i=a(7),l=a(2),o=a(3),m=a(5),u=a(4),h=a(6),p=a(1),d=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("aside",{className:"sidebar sidebar-"+this.props.theme},r.a.createElement("img",{src:"./img/diamond.svg",alt:"logo-diamond",id:"logo"}),r.a.createElement("div",{id:"menu",onChange:function(t){return e.props.changeType(t.target.id)}},r.a.createElement("input",{type:"radio",name:"jewelry_type",id:"necklace"}),r.a.createElement("label",{htmlFor:"necklace"},"Necklaces"),r.a.createElement("input",{type:"radio",name:"jewelry_type",id:"bracelet"}),r.a.createElement("label",{htmlFor:"bracelet"},"Bracelets"),r.a.createElement("input",{type:"radio",name:"jewelry_type",id:"earring"}),r.a.createElement("label",{htmlFor:"earring"},"Earrings"),r.a.createElement("input",{type:"radio",name:"jewelry_type",id:"ring"}),r.a.createElement("label",{htmlFor:"ring"},"Rings")),r.a.createElement("div",null,r.a.createElement("button",{id:"pref-bth",onClick:function(){return e.props.onClickEvent("prefs")}},r.a.createElement("i",{className:"fas fa-cog"})),r.a.createElement("button",{disabled:0===this.props.cart,onClick:function(){return e.props.onClickEvent("cart")}},"Cart: ",this.props.cart)))}}]),t}(n.Component),v=function(e){return r.a.createElement("main",{id:"content"},e.children)},b=function(e){var t,a=(t=e.selectedType,e.items.filter(function(e){return e.type===t})).map(function(t){return r.a.createElement("li",{className:"items-list-"+e.theme,onClick:function(){return function(t){e.selectItem(t),e.onClickShow("details")}(t)}},r.a.createElement("img",{src:t.preview[0],alt:t.name}))});return r.a.createElement("ul",{className:"items-list"},a)},f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={previewBig:a.props.item.preview[0]},a.price=a.props.currency(a.props.item.price),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"setPreviewBig",value:function(){return r.a.createElement("div",{className:"preview-lg"},r.a.createElement("img",{src:this.state.previewBig,alt:"preview-big"}))}},{key:"getPreview",value:function(){var e=this;return{big:this.setPreviewBig(),small:this.props.item.preview.map(function(t){return r.a.createElement("div",{className:"preview-sm",onClick:function(){return e.setState({previewBig:t})}},r.a.createElement("img",{src:t,alt:"preview-sm"}))})}}},{key:"renderStars",value:function(){var e=Array.from({length:this.props.item.rate},function(){return r.a.createElement("i",{className:"far fa-star"})});return r.a.createElement("div",{className:"stars"},e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"details details-"+this.props.theme},this.props.children,r.a.createElement("div",{id:"details-group"},r.a.createElement("div",{className:"preview"},this.getPreview().big,this.getPreview().small),r.a.createElement("div",{className:"details-item"},r.a.createElement("h1",null,this.props.item.name),this.renderStars(),r.a.createElement("div",{id:"price"},this.price.sign+this.price.price),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,this.props.item.description)),r.a.createElement("button",{className:"btn-outline",id:"button-add",onClick:function(){return e.props.addToCart(e.props.item)}},"ADD TO CART"))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={cartItems:a.props.cartItems},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getItems",value:function(){var e=this;return this.state.cartItems.map(function(t,a){var n=e.props.currency(t.price);return r.a.createElement("li",{className:"item"},r.a.createElement("img",{src:t.preview[0],alt:t.name}),r.a.createElement("h4",null,t.name),r.a.createElement("div",null,n.sign+n.price),r.a.createElement("button",{onClick:function(){return e.removeItem(a)}},r.a.createElement("i",{className:"fas fa-times"})))})}},{key:"removeItem",value:function(e){var t=[].concat(Object(i.a)(this.state.cartItems.slice(0,e)),Object(i.a)(this.state.cartItems.slice(e+1,this.state.cartItems.length)));this.setState({cartItems:t}),this.props.changeCart(t),this.props.decreaseCount(t.length)}},{key:"getTotalPrice",value:function(){var e=this;try{return this.state.cartItems.map(function(t){return e.props.currency(parseInt(t.price)).price}).reduce(function(e,t){return e+t})}catch(t){return 0}}},{key:"render",value:function(){var e=this.getItems(),t=this.getTotalPrice(),a=this.props.currency(t).sign;return r.a.createElement("div",{className:"cart cart-"+this.props.theme},this.props.children,r.a.createElement("ul",{className:"item-list"},e),r.a.createElement("div",{className:"order"},r.a.createElement("span",null,"Total price: ",a+t),r.a.createElement("button",{className:"btn-outline"},"BUY")))}}]),t}(n.Component),C=function(e){return r.a.createElement("button",{className:"button-back button-back-"+e.theme,onClick:function(){return e.onClickEvent("list")}},r.a.createElement("i",{className:"fas fa-chevron-left"}))},g=function(e){var t="light",a="usd";return r.a.createElement("div",{className:"preferences preferences-"+e.theme},e.children,r.a.createElement("form",{onSubmit:function(n){return e.submitForm(n,t,a)}},r.a.createElement("label",{htmlFor:"sel-theme"},"Theme:"),r.a.createElement("select",{id:"sel-theme",onChange:function(e){return t=e.target.value}},r.a.createElement("option",{selected:!0,value:"light"},"Light"),r.a.createElement("option",{value:"dark"},"Dark")),r.a.createElement("label",{htmlFor:"sel-currency"},"Currency:"),r.a.createElement("select",{id:"sel-currency",onChange:function(e){return a=e.target.value}},r.a.createElement("option",{selected:!0,value:"usd"},"USD"),r.a.createElement("option",{value:"eur"},"EUR"),r.a.createElement("option",{value:"rub"},"RUB")),r.a.createElement("button",{className:"btn-outline",type:"submit"},"OK")))},y=r.a.createContext("light"),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={cartCount:0,cartItems:[],items:!1,selectedItem:null,selectedType:"necklace",showList:!0,showDetails:!1,showCart:!1,showPrefs:!1,theme:"light",currency:"usd"},a.renderContent=a.renderContent.bind(Object(p.a)(Object(p.a)(a))),a.addToCart=a.addToCart.bind(Object(p.a)(Object(p.a)(a))),a.getItems=a.getItems.bind(Object(p.a)(Object(p.a)(a))),a.selectItem=a.selectItem.bind(Object(p.a)(Object(p.a)(a))),a.selectType=a.selectType.bind(Object(p.a)(Object(p.a)(a))),a.submitPrefForm=a.submitPrefForm.bind(Object(p.a)(Object(p.a)(a))),a.convertCurrency=a.convertCurrency.bind(Object(p.a)(Object(p.a)(a))),a.changeCartCount=a.changeCartCount.bind(Object(p.a)(Object(p.a)(a))),a.changeCartItems=a.changeCartItems.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getItems",value:function(){var e=this;return fetch("./items.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){return e.setState({items:t})})}},{key:"renderContent",value:function(e){var t={showList:!1,showDetails:!1,showCart:!1,showPrefs:!1};switch(e){case"list":t.showList=!0;break;case"details":t.showDetails=!0;break;case"cart":t.showCart=!0;break;case"prefs":t.showPrefs=!0}return this.setState(t)}},{key:"addToCart",value:function(e){var t=Object(i.a)(this.state.cartItems);t.push(e),this.changeCartCount(t.length),this.setState({cartItems:t})}},{key:"selectItem",value:function(e){this.setState({selectedItem:e})}},{key:"selectType",value:function(e){this.setState({selectedType:e}),this.renderContent("list")}},{key:"submitPrefForm",value:function(e,t,a){e.preventDefault(),this.setState({theme:t,currency:a})}},{key:"convertCurrency",value:function(e){var t,a;switch(this.state.currency){case"usd":t=e,a="$ ";break;case"rub":t=65.5*e,a="\u20bd ";break;case"eur":t=.88*e,a="\u20ac "}return{price:t,sign:a}}},{key:"changeCartCount",value:function(e){this.setState({cartCount:e})}},{key:"changeCartItems",value:function(e){this.setState({cartItems:e})}},{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var e=this;return console.log("this.state.theme",this.state.theme),r.a.createElement(y.Provider,{value:this.state.theme},r.a.createElement(y.Consumer,null,function(t){return r.a.createElement("div",{id:"app",className:"app-"+t},r.a.createElement(d,{cart:e.state.cartCount,onClickEvent:e.renderContent,changeType:e.selectType,theme:t}),r.a.createElement(v,null,e.state.showList&&e.state.items?r.a.createElement(b,{items:e.state.items,onClickShow:e.renderContent,selectItem:e.selectItem,selectedType:e.state.selectedType,theme:t}):null,e.state.showDetails?r.a.createElement(f,{item:e.state.selectedItem,addToCart:e.addToCart,currency:e.convertCurrency,theme:t},r.a.createElement(C,{theme:t,onClickEvent:e.renderContent})):null,e.state.showCart?r.a.createElement(E,{cartItems:e.state.cartItems,currency:e.convertCurrency,decreaseCount:e.changeCartCount,changeCart:e.changeCartItems,theme:t},r.a.createElement(C,{onClickEvent:e.renderContent,theme:t})):null,e.state.showPrefs?r.a.createElement(g,{submitForm:e.submitPrefForm,theme:t,currency:e.state.currency},r.a.createElement(C,{onClickEvent:e.renderContent,theme:t})):null))}))}}]),t}(n.Component);a(16);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.b388cab1.chunk.js.map