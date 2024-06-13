import{s as D}from"./DRvq9BCq.js";import{af as V,ah as w,ag as d,ai as L,aj as b,Z as l,al as T,i as K,am as B,t as m,v as h,a5 as x,V as z,W as P,a2 as v,L as M,z as S,x as A,aa as R,a0 as y,a3 as k,y as N,a6 as j,X as G,Y as U}from"./B8dgAnca.js";import{s as F}from"./mckQk5Bx.js";import{s as q}from"./B5gI5bQS.js";import{s as H}from"./BNcEm9fg.js";import"./BPuLA2pe.js";var W={submenu:function(e){var i=e.instance,s=e.processedItem;return{display:i.isItemActive(s)?"block":"none"}}},Z={root:function(e){var i=e.instance;return["p-menubar p-component",{"p-menubar-mobile":i.queryMatches,"p-menubar-mobile-active":i.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",menu:"p-menubar-root-list",menuitem:function(e){var i=e.instance,s=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":i.isItemActive(s),"p-focus":i.isItemFocused(s),"p-disabled":i.isItemDisabled(s)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator",end:"p-menubar-end"},X=V.extend({name:"menubar",classes:Z,inlineStyles:W}),Y={name:"BaseMenubar",extends:F,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:X,provide:function(){return{$parentInstance:this}}},O={name:"MenubarSub",hostName:"Menubar",extends:F,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,i,s){return e&&e.item?d.getItemValue(e.item[i],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,i,s){return this.ptm(s,{context:{item:e,index:i,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return d.isNotEmpty(e.items)},onItemClick:function(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.$emit("item-click",{originalEvent:e,processedItem:i,isFocus:!0})},onItemMouseEnter:function(e,i){this.$emit("item-mouseenter",{originalEvent:e,processedItem:i})},onItemMouseMove:function(e,i){this.$emit("item-mousemove",{originalEvent:e,processedItem:i})},getAriaSetSize:function(){var e=this;return this.items.filter(function(i){return e.isItemVisible(i)&&!e.getItemProp(i,"separator")}).length},getAriaPosInset:function(e){var i=this;return e-this.items.slice(0,e).filter(function(s){return i.isItemVisible(s)&&i.getItemProp(s,"separator")}).length+1},getMenuItemProps:function(e,i){return{action:l({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,i,"action")),icon:l({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,i,"icon")),label:l({class:this.cx("label")},this.getPTOptions(e,i,"label")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,i,"submenuIcon"))}}},components:{AngleRightIcon:H,AngleDownIcon:q},directives:{ripple:T}},J=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],Q=["onClick","onMouseenter","onMousemove"],_=["href","target"],$=["id"],ee=["id"];function te(t,e,i,s,a,n){var u=K("MenubarSub",!0),f=B("ripple");return m(),h("ul",l({class:i.level===0?t.cx("menu"):t.cx("submenu")},i.level===0?t.ptm("menu"):t.ptm("submenu")),[(m(!0),h(x,null,z(i.items,function(r,o){return m(),h(x,{key:n.getItemKey(r)},[n.isItemVisible(r)&&!n.getItemProp(r,"separator")?(m(),h("li",l({key:0,id:n.getItemId(r),style:n.getItemProp(r,"style"),class:[t.cx("menuitem",{processedItem:r}),n.getItemProp(r,"class")],role:"menuitem","aria-label":n.getItemLabel(r),"aria-disabled":n.isItemDisabled(r)||void 0,"aria-expanded":n.isItemGroup(r)?n.isItemActive(r):void 0,"aria-haspopup":n.isItemGroup(r)&&!n.getItemProp(r,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(o)},n.getPTOptions(r,o,"menuitem"),{"data-p-highlight":n.isItemActive(r),"data-p-focused":n.isItemFocused(r),"data-p-disabled":n.isItemDisabled(r)}),[A("div",l({class:t.cx("content"),onClick:function(I){return n.onItemClick(I,r)},onMouseenter:function(I){return n.onItemMouseEnter(I,r)},onMousemove:function(I){return n.onItemMouseMove(I,r)}},n.getPTOptions(r,o,"content")),[i.templates.item?(m(),y(k(i.templates.item),{key:1,item:r.item,root:i.root,hasSubmenu:n.getItemProp(r,"items"),label:n.getItemLabel(r),props:n.getMenuItemProps(r,o)},null,8,["item","root","hasSubmenu","label","props"])):R((m(),h("a",l({key:0,href:n.getItemProp(r,"url"),class:t.cx("action"),target:n.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true"},n.getPTOptions(r,o,"action")),[i.templates.itemicon?(m(),y(k(i.templates.itemicon),{key:0,item:r.item,class:M(t.cx("icon"))},null,8,["item","class"])):n.getItemProp(r,"icon")?(m(),h("span",l({key:1,class:[t.cx("icon"),n.getItemProp(r,"icon")]},n.getPTOptions(r,o,"icon")),null,16)):v("",!0),A("span",l({id:n.getItemLabelId(r),class:t.cx("label")},n.getPTOptions(r,o,"label")),N(n.getItemLabel(r)),17,$),n.getItemProp(r,"items")?(m(),h(x,{key:2},[i.templates.submenuicon?(m(),y(k(i.templates.submenuicon),{key:0,root:i.root,active:n.isItemActive(r),class:M(t.cx("submenuIcon"))},null,8,["root","active","class"])):(m(),y(k(i.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:t.cx("submenuIcon")},n.getPTOptions(r,o,"submenuIcon")),null,16,["class"]))],64)):v("",!0)],16,_)),[[f]])],16,Q),n.isItemVisible(r)&&n.isItemGroup(r)?(m(),y(u,{key:0,menuId:i.menuId,role:"menu",style:j(t.sx("submenu",!0,{processedItem:r})),focusedItemId:i.focusedItemId,items:r.items,mobileActive:i.mobileActive,activeItemPath:i.activeItemPath,templates:i.templates,level:i.level+1,"aria-labelledby":n.getItemLabelId(r),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(c){return t.$emit("item-click",c)}),onItemMouseenter:e[1]||(e[1]=function(c){return t.$emit("item-mouseenter",c)}),onItemMousemove:e[2]||(e[2]=function(c){return t.$emit("item-mousemove",c)})},null,8,["menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):v("",!0)],16,J)):v("",!0),n.isItemVisible(r)&&n.getItemProp(r,"separator")?(m(),h("li",l({key:1,id:n.getItemId(r),class:[t.cx("separator"),n.getItemProp(r,"class")],style:n.getItemProp(r,"style"),role:"separator"},t.ptm("separator")),null,16,ee)):v("",!0)],64)}),128))],16)}O.render=te;var ie={name:"Menubar",extends:Y,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||w()},activeItemPath:function(e){d.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||w(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&L.clear(this.container),this.container=null},methods:{getItemProp:function(e,i){return e?d.getItemValue(e[i]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return d.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&d.isNotEmpty(e.items)},toggle:function(e){var i=this;this.mobileActive?(this.mobileActive=!1,L.clear(this.menubar),this.hide()):(this.mobileActive=!0,L.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){i.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){b.focus(this.menubar)},hide:function(e,i){var s=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){b.focus(s.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},i&&b.focus(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&d.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var i=e.processedItem,s=e.isFocus;if(!d.isEmpty(i)){var a=i.index,n=i.key,u=i.level,f=i.parentKey,r=i.items,o=d.isNotEmpty(r),c=this.activeItemPath.filter(function(I){return I.parentKey!==f&&I.parentKey!==n});o&&c.push(i),this.focusedItemInfo={index:a,level:u,parentKey:f},this.activeItemPath=c,o&&(this.dirty=!0),s&&b.focus(this.menubar)}},onItemClick:function(e){var i=e.originalEvent,s=e.processedItem,a=this.isProccessedItemGroup(s),n=d.isEmpty(s.parent),u=this.isSelected(s);if(u){var f=s.index,r=s.key,o=s.level,c=s.parentKey;this.activeItemPath=this.activeItemPath.filter(function(p){return r!==p.key&&r.startsWith(p.key)}),this.focusedItemInfo={index:f,level:o,parentKey:c},this.dirty=!n,b.focus(this.menubar)}else if(a)this.onItemChange(e);else{var I=n?s:this.activeItemPath.find(function(p){return p.parentKey===""});this.hide(i),this.changeFocusedItemIndex(i,I?I.index:-1),this.mobileActive=!1,b.focus(this.menubar)}},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var i=this.visibleItems[this.focusedItemInfo.index],s=i?d.isEmpty(i.parent):null;if(s){var a=this.isProccessedItemGroup(i);a&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key},this.onArrowRightKey(e))}else{var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n)}e.preventDefault()},onArrowUpKey:function(e){var i=this,s=this.visibleItems[this.focusedItemInfo.index],a=d.isEmpty(s.parent);if(a){var n=this.isProccessedItemGroup(s);if(n){this.onItemChange({originalEvent:e,processedItem:s}),this.focusedItemInfo={index:-1,parentKey:s.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(e,u)}}else{var f=this.activeItemPath.find(function(o){return o.key===s.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:f?f.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==i.focusedItemInfo.parentKey});else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()},onArrowLeftKey:function(e){var i=this,s=this.visibleItems[this.focusedItemInfo.index],a=s?this.activeItemPath.find(function(u){return u.key===s.parentKey}):null;if(a)this.onItemChange({originalEvent:e,processedItem:a}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==i.focusedItemInfo.parentKey}),e.preventDefault();else{var n=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()}},onArrowRightKey:function(e){var i=this.visibleItems[this.focusedItemInfo.index],s=i?this.activeItemPath.find(function(u){return u.key===i.parentKey}):null;if(s){var a=this.isProccessedItemGroup(i);a&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key},this.onArrowDownKey(e))}else{var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var i=b.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=i&&b.findSingle(i,'a[data-pc-section="action"]');s?s.click():i&&i.click();var a=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(a);!n&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var i=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(i.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var i=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(i);!s&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var s=e.container&&!e.container.contains(i.target),a=!(e.target&&(e.target===i.target||e.target.contains(i.target)));s&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(i){b.isTouchDevice()||e.hide(i,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var i=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=i,this.queryMatches=i.matches,this.matchMediaListener=function(){e.queryMatches=i.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var i;return this.isValidItem(e)&&((i=this.getProccessedItemLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidItem(i)})},findLastItemIndex:function(){var e=this;return d.findLastIndex(this.visibleItems,function(i){return e.isValidItem(i)})},findNextItemIndex:function(e){var i=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return i.isValidItem(a)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var i=this,s=e>0?d.findLastIndex(this.visibleItems.slice(0,e),function(a){return i.isValidItem(a)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidSelectedItem(i)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,i){var s=this;this.searchValue=(this.searchValue||"")+i;var a=-1,n=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(u){return s.isItemMatched(u)}),a!==-1&&(n=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),n},changeFocusedItemIndex:function(e,i){this.focusedItemInfo.index!==i&&(this.focusedItemInfo.index=i,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,i=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,s=b.findSingle(this.menubar,'li[id="'.concat(i,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var i=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(f,r){var o=(n!==""?n+"_":"")+r,c={item:f,index:r,level:s,key:o,parent:a,parentKey:n};c.items=i.createProcessedItems(f.items,s+1,c,o),u.push(c)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,i=this.activeItemPath.find(function(s){return s.key===e.focusedItemInfo.parentKey});return i?i.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(d.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:O,BarsIcon:D}};function g(t){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(t)}function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,s)}return i}function E(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?C(Object(i),!0).forEach(function(s){ne(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function ne(t,e,i){return e=se(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function se(t){var e=re(t,"string");return g(e)=="symbol"?e:String(e)}function re(t,e){if(g(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,e||"default");if(g(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ae=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function oe(t,e,i,s,a,n){var u=K("BarsIcon"),f=K("MenubarSub");return m(),h("div",l({ref:n.containerRef,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(m(),h("div",l({key:0,class:t.cx("start")},t.ptm("start")),[P(t.$slots,"start")],16)):v("",!0),P(t.$slots,"menubutton",{id:a.id,class:M(t.cx("button")),toggleCallback:function(o){return n.menuButtonClick(o)}},function(){var r;return[t.model&&t.model.length>0?(m(),h("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":a.mobileActive,"aria-controls":a.id,"aria-label":(r=t.$primevue.config.locale.aria)===null||r===void 0?void 0:r.navigation,onClick:e[0]||(e[0]=function(o){return n.menuButtonClick(o)}),onKeydown:e[1]||(e[1]=function(o){return n.menuButtonKeydown(o)})},E(E({},t.buttonProps),t.ptm("button"))),[P(t.$slots,"menubuttonicon",{},function(){return[S(u,G(U(t.ptm("menubuttonicon"))),null,16)]})],16,ae)):v("",!0)]}),S(f,{ref:n.menubarRef,id:a.id,role:"menubar",items:n.processedItems,templates:t.$slots,root:!0,mobileActive:a.mobileActive,tabindex:"0","aria-activedescendant":a.focused?n.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?n.focusedItemId:void 0,activeItemPath:a.activeItemPath,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,unstyled:t.unstyled,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter,onItemMousemove:n.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(m(),h("div",l({key:1,class:t.cx("end")},t.ptm("end")),[P(t.$slots,"end")],16)):v("",!0)],16)}ie.render=oe;export{ie as default};
