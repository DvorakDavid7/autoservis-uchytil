import{aj as d,W as t,t as r,a0 as s,a4 as l,a2 as i}from"./IYVSU8hd.js";var u={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=d.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p(e,c,n,f,a,o){return o.inline?t(e.$slots,"default",{key:0}):a.mounted?(r(),s(l,{key:1,to:n.appendTo},[t(e.$slots,"default")],8,["to"])):i("",!0)}u.render=p;export{u as s};
