import{V as d,a1 as t,t as r,M as s,af as l,N as i}from"./CHpXfb25.js";var u={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=d.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p(e,f,n,c,o,a){return a.inline?t(e.$slots,"default",{key:0}):o.mounted?(r(),s(l,{key:1,to:n.appendTo},[t(e.$slots,"default")],8,["to"])):i("",!0)}u.render=p;export{u as s};
