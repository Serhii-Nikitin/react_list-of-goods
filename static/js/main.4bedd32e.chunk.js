(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(0),o=n.n(s),a=n(7),r=n.n(a),i=n(2),c=n(3),l=n(5),u=n(4),m=n(1),d=(n(13),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={goods:Object(m.a)(t.props.goods)},t.reverse=function(){return t.setState((function(t){return{goods:Object(m.a)(t.goods).reverse()}}))},t.sortAlphabetically=function(){return t.setState((function(t){return{goods:Object(m.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){return t.setState((function(t){return{goods:Object(m.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("ul",null,this.state.goods.map((function(t){return o.a.createElement("li",{className:"item",key:t},t)}))),o.a.createElement("div",{className:"columns"},o.a.createElement("button",{type:"button",className:"column button is-dark is-medium",onClick:this.reverse},"Reverse"),o.a.createElement("button",{type:"button",className:"column button is-dark is-medium",onClick:this.sortAlphabetically},"Sort alphabetically"),o.a.createElement("button",{type:"button",className:"column button is-dark is-medium",onClick:this.sortByLength},"Sort by length")))}}]),n}(o.a.Component)),b=(n(14),n(15),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={isGoodsListVisible:!1},t.showGoodsList=function(){return t.setState((function(t){return{isGoodsListVisible:!t.isGoodsListVisible}}))},t.reset=function(){return t.setState({isGoodsListVisible:!1})},t}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"title"},"Goods:"),this.state.isGoodsListVisible?o.a.createElement("div",{className:"wrapper"},o.a.createElement(d,{goods:b}),o.a.createElement("button",{type:"button",className:"button is-hovered is-danger is-outlined is-large",onClick:this.reset},"Reset")):o.a.createElement("button",{type:"button",className:"button is-hovered is-primary is-outlined is-large",onClick:this.showGoodsList},"Start"))}}]),n}(o.a.Component);r.a.render(o.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.4bedd32e.chunk.js.map