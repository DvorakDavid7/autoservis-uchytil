import{s}from"./qz20UPWG.js";import{R as r,t as u,v as p,x as d,$ as n}from"./CHpXfb25.js";var o={root:{position:"relative"}},c={root:function(t){var l=t.instance,i=t.props;return["p-inputswitch p-component",{"p-highlight":l.checked,"p-disabled":i.disabled,"p-invalid":i.invalid}]},input:"p-inputswitch-input",slider:"p-inputswitch-slider"},h=r.extend({name:"inputswitch",classes:c,inlineStyles:o}),f={name:"BaseInputSwitch",extends:s,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:h,provide:function(){return{$parentInstance:this}}},b={name:"InputSwitch",extends:f,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(t){var l=t==="root"?this.ptmi:this.ptm;return l(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var l=this.checked?this.falseValue:this.trueValue;this.$emit("update:modelValue",l),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){this.$emit("blur",t)}},computed:{checked:function(){return this.modelValue===this.trueValue}}},y=["data-p-highlight","data-p-disabled"],m=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function g(e,t,l,i,v,a){return u(),p("div",n({class:e.cx("root"),style:e.sx("root")},a.getPTOptions("root"),{"data-p-highlight":a.checked,"data-p-disabled":e.disabled}),[d("input",n({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":a.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:t[2]||(t[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,m),d("span",n({class:e.cx("slider")},a.getPTOptions("slider")),null,16)],16,y)}b.render=g;export{b as default};
