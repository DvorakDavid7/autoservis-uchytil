import{s as v}from"./BFnH7717.js";import{s as P}from"./vmXDBPUN.js";import{af as w,ah as c,al as O,am as S,t as p,v as u,x as s,W as d,a2 as g,aa as f,Z as l,z as B,A as D,ab as j,a1 as E,y as m,a0 as I,a3 as K}from"./B8dgAnca.js";import{s as A}from"./mckQk5Bx.js";import"./BPuLA2pe.js";var C={root:function(t){var o=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":o.toggleable}]},legend:"p-fieldset-legend",legendtitle:"p-fieldset-legend-text",togglericon:"p-fieldset-toggler",toggleablecontent:"p-toggleable-content",content:"p-fieldset-content"},L=w.extend({name:"fieldset",classes:C}),N={name:"BaseFieldset",extends:A,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:L,provide:function(){return{$parentInstance:this}}},k={name:"Fieldset",extends:N,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||c()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||c()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:O},components:{PlusIcon:P,MinusIcon:v}};function a(e){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(e)}function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function y(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?b(Object(o),!0).forEach(function(n){F(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function F(e,t,o){return t=V(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function V(e){var t=M(e,"string");return a(t)=="symbol"?t:String(t)}function M(e,t){if(a(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(a(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var T=["id"],_=["id","aria-controls","aria-expanded","aria-label"],$=["id","aria-labelledby"];function q(e,t,o,n,r,i){var h=S("ripple");return p(),u("fieldset",l({class:e.cx("root")},e.ptmi("root")),[s("legend",l({class:e.cx("legend")},e.ptm("legend")),[e.toggleable?g("",!0):d(e.$slots,"legend",{key:0},function(){return[s("span",l({id:r.id+"_header",class:e.cx("legendtitle")},e.ptm("legendtitle")),m(e.legend),17,T)]}),e.toggleable?f((p(),u("a",l({key:1,id:r.id+"_header",tabindex:"0",role:"button","aria-controls":r.id+"_content","aria-expanded":!r.d_collapsed,"aria-label":i.buttonAriaLabel,onClick:t[0]||(t[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),onKeydown:t[1]||(t[1]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},y(y({},e.toggleButtonProps),e.ptm("toggler"))),[d(e.$slots,"togglericon",{collapsed:r.d_collapsed},function(){return[(p(),I(K(r.d_collapsed?"PlusIcon":"MinusIcon"),l({class:e.cx("togglericon")},e.ptm("togglericon")),null,16,["class"]))]}),d(e.$slots,"legend",{},function(){return[s("span",l({class:e.cx("legendtitle")},e.ptm("legendtitle")),m(e.legend),17)]})],16,_)),[[h]]):g("",!0)],16),B(E,l({name:"p-toggleable-content"},e.ptm("transition")),{default:D(function(){return[f(s("div",l({id:r.id+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":r.id+"_header"},e.ptm("toggleablecontent")),[s("div",l({class:e.cx("content")},e.ptm("content")),[d(e.$slots,"default")],16)],16,$),[[j,!r.d_collapsed]])]}),_:3},16)],16)}k.render=q;export{k as default};
