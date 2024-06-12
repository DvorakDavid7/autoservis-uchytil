import{s as m}from"./BcgNEYwY.js";import{af as p,t as u,v as l,Z as r,x as d,y as f,a2 as c}from"./IYVSU8hd.js";var v={root:function(a){var i=a.props;return["p-knob p-component",{"p-disabled":i.disabled}]},range:"p-knob-range",value:"p-knob-value",label:"p-knob-text"},y=p.extend({name:"knob",classes:v}),b={name:"BaseKnob",extends:m,props:{modelValue:{type:Number,default:null},size:{type:Number,default:100},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},valueColor:{type:String,default:"var(--primary-color, Black)"},rangeColor:{type:String,default:"var(--surface-border, LightGray)"},textColor:{type:String,default:"var(--text-color-secondary, Black)"},strokeWidth:{type:Number,default:14},showValue:{type:Boolean,default:!0},valueTemplate:{type:[String,Function],default:"{value}"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:y,provide:function(){return{$parentInstance:this}}},o=3.14159265358979,g={name:"Knob",extends:b,inheritAttrs:!1,emits:["update:modelValue","change"],data:function(){return{radius:40,midX:50,midY:50,minRadians:4*o/3,maxRadians:-o/3}},methods:{updateValue:function(a,i){var n=a-this.size/2,s=this.size/2-i,t=Math.atan2(s,n),h=-o/2-o/6;this.updateModel(t,h)},updateModel:function(a,i){var n;if(a>this.maxRadians)n=this.mapRange(a,this.minRadians,this.maxRadians,this.min,this.max);else if(a<i)n=this.mapRange(a+2*o,this.minRadians,this.maxRadians,this.min,this.max);else return;var s=Math.round((n-this.min)/this.step)*this.step+this.min;this.$emit("update:modelValue",s),this.$emit("change",s)},updateModelValue:function(a){a>this.max?this.$emit("update:modelValue",this.max):a<this.min?this.$emit("update:modelValue",this.min):this.$emit("update:modelValue",a)},mapRange:function(a,i,n,s,t){return(a-i)*(t-s)/(n-i)+s},onClick:function(a){!this.disabled&&!this.readonly&&this.updateValue(a.offsetX,a.offsetY)},onMouseDown:function(a){!this.disabled&&!this.readonly&&(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),a.preventDefault())},onMouseUp:function(a){!this.disabled&&!this.readonly&&(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),a.preventDefault())},onTouchStart:function(a){!this.disabled&&!this.readonly&&(window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),a.preventDefault())},onTouchEnd:function(a){!this.disabled&&!this.readonly&&(window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),a.preventDefault())},onMouseMove:function(a){!this.disabled&&!this.readonly&&(this.updateValue(a.offsetX,a.offsetY),a.preventDefault())},onTouchMove:function(a){if(!this.disabled&&!this.readonly&&a.touches.length==1){var i=this.$el.getBoundingClientRect(),n=a.targetTouches.item(0),s=n.clientX-i.left,t=n.clientY-i.top;this.updateValue(s,t)}},onKeyDown:function(a){if(!this.disabled&&!this.readonly)switch(a.code){case"ArrowRight":case"ArrowUp":{a.preventDefault(),this.updateModelValue(this.modelValue+this.step);break}case"ArrowLeft":case"ArrowDown":{a.preventDefault(),this.updateModelValue(this.modelValue-this.step);break}case"Home":{a.preventDefault(),this.$emit("update:modelValue",this.min);break}case"End":{a.preventDefault(),this.$emit("update:modelValue",this.max);break}case"PageUp":{a.preventDefault(),this.updateModelValue(this.modelValue+10);break}case"PageDown":{a.preventDefault(),this.updateModelValue(this.modelValue-10);break}}}},computed:{rangePath:function(){return"M ".concat(this.minX," ").concat(this.minY," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.maxX," ").concat(this.maxY)},valuePath:function(){return"M ".concat(this.zeroX," ").concat(this.zeroY," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc," ").concat(this.sweep," ").concat(this.valueX," ").concat(this.valueY)},zeroRadians:function(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)},valueRadians:function(){return this.mapRange(this.modelValue,this.min,this.max,this.minRadians,this.maxRadians)},minX:function(){return this.midX+Math.cos(this.minRadians)*this.radius},minY:function(){return this.midY-Math.sin(this.minRadians)*this.radius},maxX:function(){return this.midX+Math.cos(this.maxRadians)*this.radius},maxY:function(){return this.midY-Math.sin(this.maxRadians)*this.radius},zeroX:function(){return this.midX+Math.cos(this.zeroRadians)*this.radius},zeroY:function(){return this.midY-Math.sin(this.zeroRadians)*this.radius},valueX:function(){return this.midX+Math.cos(this.valueRadians)*this.radius},valueY:function(){return this.midY-Math.sin(this.valueRadians)*this.radius},largeArc:function(){return Math.abs(this.zeroRadians-this.valueRadians)<o?0:1},sweep:function(){return this.valueRadians>this.zeroRadians?0:1},valueToDisplay:function(){return typeof this.valueTemplate=="string"?this.valueTemplate.replace(/{value}/g,this.modelValue):this.valueTemplate(this.modelValue)}}},w=["width","height","tabindex","aria-valuemin","aria-valuemax","aria-valuenow","aria-labelledby","aria-label"],M=["d","stroke-width","stroke"],R=["d","stroke-width","stroke"],k=["fill"];function V(e,a,i,n,s,t){return u(),l("div",r({class:e.cx("root")},e.ptmi("root")),[(u(),l("svg",r({viewBox:"0 0 100 100",role:"slider",width:e.size,height:e.size,tabindex:e.readonly||e.disabled?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onClick:a[0]||(a[0]=function(){return t.onClick&&t.onClick.apply(t,arguments)}),onKeydown:a[1]||(a[1]=function(){return t.onKeyDown&&t.onKeyDown.apply(t,arguments)}),onMousedown:a[2]||(a[2]=function(){return t.onMouseDown&&t.onMouseDown.apply(t,arguments)}),onMouseup:a[3]||(a[3]=function(){return t.onMouseUp&&t.onMouseUp.apply(t,arguments)}),onTouchstartPassive:a[4]||(a[4]=function(){return t.onTouchStart&&t.onTouchStart.apply(t,arguments)}),onTouchend:a[5]||(a[5]=function(){return t.onTouchEnd&&t.onTouchEnd.apply(t,arguments)})},e.ptm("svg")),[d("path",r({d:t.rangePath,"stroke-width":e.strokeWidth,stroke:e.rangeColor,class:e.cx("range")},e.ptm("range")),null,16,M),d("path",r({d:t.valuePath,"stroke-width":e.strokeWidth,stroke:e.valueColor,class:e.cx("value")},e.ptm("value")),null,16,R),e.showValue?(u(),l("text",r({key:0,x:50,y:57,"text-anchor":"middle",fill:e.textColor,class:e.cx("label")},e.ptm("label")),f(t.valueToDisplay),17,k)):c("",!0)],16,w))],16)}g.render=V;export{g as default};
