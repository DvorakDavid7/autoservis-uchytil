import{s as o}from"./qz20UPWG.js";import{R as s,t as l,v as n,x as a,a1 as t,$ as r}from"./CHpXfb25.js";var p={root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},d=s.extend({name:"toolbar",classes:p}),i={name:"BaseToolbar",extends:o,props:{ariaLabelledby:{type:String,default:null}},style:d,provide:function(){return{$parentInstance:this}}},b={name:"Toolbar",extends:i,inheritAttrs:!1},c=["aria-labelledby"];function m(e,u,v,$,f,g){return l(),n("div",r({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[a("div",r({class:e.cx("start")},e.ptm("start")),[t(e.$slots,"start")],16),a("div",r({class:e.cx("center")},e.ptm("center")),[t(e.$slots,"center")],16),a("div",r({class:e.cx("end")},e.ptm("end")),[t(e.$slots,"end")],16)],16,c)}b.render=m;export{b as default};