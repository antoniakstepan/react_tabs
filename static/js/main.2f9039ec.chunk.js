(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(2),o=a.n(c),r=a(3),s=a(4),u=a(7),l=a(6),b=(a(13),a(5)),d=a.n(b),m=function(t){var e=t.tabs,a=t.activeTabId,n=t.chooseTab;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"tab"},e.map((function(t){return i.a.createElement("button",{type:"button",key:t.id,onClick:function(){n(t.id)},className:d()("button",{button__active:a===t.id})},t.title)}))),i.a.createElement("div",null,e.find((function(t){return t.id===a})).content))},p=[{id:"tab-1",title:"Tab 1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aliquam."},{id:"tab-2",title:"Tab 2",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},{id:"tab-3",title:"Tab 3",content:"Lorem ipsum dolor sit amet consectetur "}],v=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={activeTabId:p[0].id},t.chooseTab=function(e){t.setState({activeTabId:e})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Selected tab is\xa0",p.find((function(e){return e.id===t.state.activeTabId})).title),i.a.createElement(m,{tabs:p,activeTabId:this.state.activeTabId,chooseTab:this.chooseTab}))}}]),a}(i.a.Component);o.a.render(i.a.createElement(v,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2f9039ec.chunk.js.map