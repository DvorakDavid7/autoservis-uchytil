import{t as o,v as p,Z as l,x as b,af as Y,ah as G,ai as T,ag as c,aj as a,ak as $,an as _,al as ee,i as w,am as te,W as h,L as x,a2 as v,z as P,A as K,a1 as ie,a0 as I,a3 as A,y as O,U as ne,a5 as B,V as re,aa as se,B as H}from"./CC6jHXIu.js";import{s as le}from"./ChcUK9c1.js";import{s as oe}from"./DFm0IsTe.js";import{s as ae}from"./Drw6Q6ru.js";import{s as ue}from"./CC0zjIPi.js";import{s as de}from"./CynU8Fz2.js";import{s as ce}from"./4tGN30TL.js";import{O as pe}from"./DgWRyDXp.js";import{s as fe}from"./BlZQo45k.js";import he from"./5s1KaM8w.js";import{s as be}from"./BMMMixjp.js";var N={name:"BlankIcon",extends:le},ye=b("rect",{width:"1",height:"1",fill:"currentColor","fill-opacity":"0"},null,-1),me=[ye];function ge(t,e,i,r,s,n){return o(),p("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),me,16)}N.render=ge;var Oe={root:function(e){var i=e.instance,r=e.props,s=e.state;return["p-dropdown p-component p-inputwrapper",{"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":i.$primevue.config.inputStyle==="filled","p-dropdown-clearable":r.showClear,"p-focus":s.focused,"p-inputwrapper-filled":i.hasSelectedOption,"p-inputwrapper-focus":s.focused||s.overlayVisible,"p-overlay-open":s.overlayVisible}]},input:function(e){var i,r=e.instance,s=e.props;return["p-dropdown-label p-inputtext",{"p-placeholder":!s.editable&&r.label===s.placeholder,"p-dropdown-label-empty":!s.editable&&!r.$slots.value&&(r.label==="p-emptylabel"||((i=r.label)===null||i===void 0?void 0:i.length)===0)}]},clearIcon:"p-dropdown-clear-icon",trigger:"p-dropdown-trigger",loadingicon:"p-dropdown-trigger-icon",dropdownIcon:"p-dropdown-trigger-icon",panel:function(e){e.props;var i=e.instance;return["p-dropdown-panel p-component",{"p-ripple-disabled":i.$primevue.config.ripple===!1}]},header:"p-dropdown-header",filterContainer:"p-dropdown-filter-container",filterInput:function(e){var i=e.props,r=e.instance;return["p-dropdown-filter p-inputtext p-component",{"p-variant-filled":i.variant?i.variant==="filled":r.$primevue.config.inputStyle==="filled"}]},filterIcon:"p-dropdown-filter-icon",wrapper:"p-dropdown-items-wrapper",list:"p-dropdown-items",itemGroup:"p-dropdown-item-group",itemGroupLabel:"p-dropdown-item-group-label",item:function(e){var i=e.instance,r=e.props,s=e.state,n=e.option,d=e.focusedOption;return["p-dropdown-item",{"p-highlight":i.isSelected(n)&&r.highlightOnSelect,"p-focus":s.focusedOptionIndex===d,"p-disabled":i.isOptionDisabled(n)}]},itemLabel:"p-dropdown-item-label",checkIcon:"p-dropdown-check-icon",blankIcon:"p-dropdown-blank-icon",emptyMessage:"p-dropdown-empty-message"},ve=Y.extend({name:"dropdown",classes:Oe}),Ie={name:"BaseDropdown",extends:be,props:{modelValue:null,options:Array,optionLabel:[String,Function],optionValue:[String,Function],optionDisabled:[String,Function],optionGroupLabel:[String,Function],optionGroupChildren:[String,Function],scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},resetFilterOnHide:{type:Boolean,default:!1},resetFilterOnClear:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!0},checkmark:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ve,provide:function(){return{$parentInstance:this}}};function L(t){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(t)}function Se(t){return Fe(t)||ke(t)||Le(t)||we()}function we(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(t,e){if(t){if(typeof t=="string")return j(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return j(t,e)}}function ke(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Fe(t){if(Array.isArray(t))return j(t)}function j(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function R(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,r)}return i}function U(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?R(Object(i),!0).forEach(function(r){q(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function q(t,e,i){return e=Ce(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ce(t){var e=Ve(t,"string");return L(e)=="symbol"?e:String(e)}function Ve(t,e){if(L(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e||"default");if(L(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var xe={name:"Dropdown",extends:Ie,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],outsideClickListener:null,scrollHandler:null,resizeListener:null,labelClickListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||G()},modelValue:function(){this.isModelValueChanged=!0},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||G(),this.autoUpdateModel(),this.bindLabelClickListener()},updated:function(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindLabelClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(T.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel:function(e){return this.optionLabel?c.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?c.resolveFieldData(e,this.optionValue):e},getOptionRenderKey:function(e,i){return(this.dataKey?c.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+i},getPTItemOptions:function(e,i,r,s){return this.ptm(s,{context:{option:e,index:r,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(r,i),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?c.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return c.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return c.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset:function(e){var i=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(r){return i.isOptionGroup(r)}).length:e)+1},show:function(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),e&&a.focus(this.$refs.focusInput)},hide:function(e){var i=this,r=function(){i.$emit("before-hide"),i.overlayVisible=!1,i.clicked=!1,i.focusedOptionIndex=-1,i.searchValue="",i.resetFilterOnHide&&(i.filterValue=null),e&&a.focus(i.$refs.focusInput)};setTimeout(function(){r()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled||a.isAndroid()){e.preventDefault();return}var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!i&&c.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked=!1},onEditableInput:function(e){var i=e.target.value;this.searchValue="";var r=this.searchOptions(e,i);!r&&(this.focusedOptionIndex=-1),this.updateModel(e,i),!this.overlayVisible&&c.isNotEmpty(i)&&this.show()},onContainerClick:function(e){this.disabled||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(e){this.updateModel(e,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(e){var i=e.relatedTarget===this.$refs.focusInput?a.getFirstFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;a.focus(i)},onLastHiddenFocus:function(e){var i=e.relatedTarget===this.$refs.focusInput?a.getLastFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;a.focus(i)},onOptionSelect:function(e,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(i);this.updateModel(e,s),r&&this.hide(!0)},onOptionMouseMove:function(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)},onFilterChange:function(e){var i=e.target.value;this.filterValue=i,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:i}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){pe.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onDeleteKey:function(e){this.showClear&&(this.updateModel(e,null),e.preventDefault())},onArrowDownKey:function(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!i)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var r=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,r),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i?(e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),e.preventDefault()},onEndKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var r=e.currentTarget,s=r.value.length;r.setSelectionRange(s,s),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)),e.preventDefault()},onSpaceKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!i&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault(),e.stopPropagation()},onTabKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i||(this.overlayVisible&&this.hasFocusableElements()?(a.focus(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&!this.overlayVisible&&this.show()},onOverlayEnter:function(e){T.set("overlay",e,this.$primevue.config.zIndex.overlay),a.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&a.focus(this.$refs.filterInput)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){T.clear(e)},alignOverlay:function(){this.appendTo==="self"?a.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=a.getOuterWidth(this.$el)+"px",a.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){e.overlayVisible&&e.overlay&&!e.$el.contains(i.target)&&!e.overlay.contains(i.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new $(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!a.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindLabelClickListener:function(){var e=this;if(!this.editable&&!this.labelClickListener){var i=document.querySelector('label[for="'.concat(this.inputId,'"]'));i&&a.isVisible(i)&&(this.labelClickListener=function(){a.focus(e.$refs.focusInput)},i.addEventListener("click",this.labelClickListener))}},unbindLabelClickListener:function(){if(this.labelClickListener){var e=document.querySelector('label[for="'.concat(this.inputId,'"]'));e&&a.isVisible(e)&&e.removeEventListener("click",this.labelClickListener)}},hasFocusableElements:function(){return a.getFocusableElements(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(e){var i;return this.isValidOption(e)&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return c.isNotEmpty(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.isValidOption(e)&&c.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return c.findLastIndex(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,r=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return i.isValidOption(s)}):-1;return r>-1?r+e+1:e},findPrevOptionIndex:function(e){var i=this,r=e>0?c.findLastIndex(this.visibleOptions.slice(0,e),function(s){return i.isValidOption(s)}):-1;return r>-1?r:e},findSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,i){var r=this;this.searchValue=(this.searchValue||"")+i;var s=-1,n=!1;return c.isNotEmpty(this.searchValue)&&(this.focusedOptionIndex!==-1?(s=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(d){return r.isOptionMatched(d)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(d){return r.isOptionMatched(d)}):s+this.focusedOptionIndex):s=this.visibleOptions.findIndex(function(d){return r.isOptionMatched(d)}),s!==-1&&(n=!0),s===-1&&this.focusedOptionIndex===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),n},changeFocusedOptionIndex:function(e,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[i],!1))},scrollInView:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var r=i!==-1?"".concat(e.id,"_").concat(i):e.focusedOptionId,s=a.findSingle(e.list,'li[id="'.concat(r,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(i!==-1?i:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,i){this.$emit("update:modelValue",i),this.$emit("change",{originalEvent:e,value:i})},flatOptions:function(e){var i=this;return(e||[]).reduce(function(r,s,n){r.push({optionGroup:s,group:!0,index:n});var d=i.getOptionGroupChildren(s);return d&&d.forEach(function(S){return r.push(S)}),r},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,i){this.list=e,i&&i(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,i=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var r=_.filter(i,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var s=this.options||[],n=[];return s.forEach(function(d){var S=e.getOptionGroupChildren(d),F=S.filter(function(D){return r.includes(D)});F.length>0&&n.push(U(U({},d),{},q({},typeof e.optionGroupChildren=="string"?e.optionGroupChildren:"items",Se(F))))}),this.flatOptions(n)}return r}return i},hasSelectedOption:function(){return c.isNotEmpty(this.modelValue)},label:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return c.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(i){return!e.isOptionGroup(i)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},directives:{ripple:ee},components:{VirtualScroller:he,Portal:fe,TimesIcon:ce,ChevronDownIcon:ae,SpinnerIcon:de,SearchIcon:ue,CheckIcon:oe,BlankIcon:N}};function k(t){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(t)}function z(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,r)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?z(Object(i),!0).forEach(function(r){Ke(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):z(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function Ke(t,e,i){return e=De(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function De(t){var e=Me(t,"string");return k(e)=="symbol"?e:String(e)}function Me(t,e){if(k(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e||"default");if(k(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ee=["id"],Te=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Pe=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],Ae=["value","placeholder","aria-owns","aria-activedescendant"],Be=["id","aria-label"],He=["id"],je=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-highlight","data-p-focused","data-p-disabled"];function Ge(t,e,i,r,s,n){var d=w("SpinnerIcon"),S=w("CheckIcon"),F=w("BlankIcon"),D=w("VirtualScroller"),W=w("Portal"),Z=te("ripple");return o(),p("div",l({ref:"container",id:s.id,class:t.cx("root"),onClick:e[16]||(e[16]=function(){return n.onContainerClick&&n.onContainerClick.apply(n,arguments)})},t.ptmi("root")),[t.editable?(o(),p("input",l({key:0,ref:"focusInput",id:t.inputId,type:"text",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:n.editableInputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?n.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[1]||(e[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onKeydown:e[2]||(e[2]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)}),onInput:e[3]||(e[3]=function(){return n.onEditableInput&&n.onEditableInput.apply(n,arguments)})},m(m({},t.inputProps),t.ptm("input"))),null,16,Te)):(o(),p("span",l({key:1,ref:"focusInput",id:t.inputId,class:[t.cx("input"),t.inputClass],style:t.inputStyle,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel||(n.label==="p-emptylabel"?void 0:n.label),"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?n.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[4]||(e[4]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[5]||(e[5]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onKeydown:e[6]||(e[6]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)})},m(m({},t.inputProps),t.ptm("input"))),[h(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){return[H(O(n.label==="p-emptylabel"?" ":n.label||"empty"),1)]})],16,Pe)),t.showClear&&t.modelValue!=null?h(t.$slots,"clearicon",{key:2,class:x(t.cx("clearIcon")),onClick:n.onClearClick,clearCallback:n.onClearClick},function(){return[(o(),I(A(t.clearIcon?"i":"TimesIcon"),l({ref:"clearIcon",class:[t.cx("clearIcon"),t.clearIcon],onClick:n.onClearClick},m(m({},t.clearIconProps),t.ptm("clearIcon")),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):v("",!0),b("div",l({class:t.cx("trigger")},t.ptm("trigger")),[t.loading?h(t.$slots,"loadingicon",{key:0,class:x(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(o(),p("span",l({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(o(),I(d,l({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):h(t.$slots,"dropdownicon",{key:1,class:x(t.cx("dropdownIcon"))},function(){return[(o(),I(A(t.dropdownIcon?"span":"ChevronDownIcon"),l({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),P(W,{appendTo:t.appendTo},{default:K(function(){return[P(ie,l({name:"p-connected-overlay",onEnter:n.onOverlayEnter,onAfterEnter:n.onOverlayAfterEnter,onLeave:n.onOverlayLeave,onAfterLeave:n.onOverlayAfterLeave},t.ptm("transition")),{default:K(function(){return[s.overlayVisible?(o(),p("div",l({key:0,ref:n.overlayRef,class:[t.cx("panel"),t.panelClass],style:t.panelStyle,onClick:e[14]||(e[14]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)}),onKeydown:e[15]||(e[15]=function(){return n.onOverlayKeyDown&&n.onOverlayKeyDown.apply(n,arguments)})},m(m({},t.panelProps),t.ptm("panel"))),[b("span",l({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[7]||(e[7]=function(){return n.onFirstHiddenFocus&&n.onFirstHiddenFocus.apply(n,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),h(t.$slots,"header",{value:t.modelValue,options:n.visibleOptions}),t.filter?(o(),p("div",l({key:0,class:t.cx("header")},t.ptm("header")),[b("div",l({class:t.cx("filterContainer")},t.ptm("filterContainer")),[b("input",l({ref:"filterInput",type:"text",value:s.filterValue,onVnodeMounted:e[8]||(e[8]=function(){return n.onFilterUpdated&&n.onFilterUpdated.apply(n,arguments)}),onVnodeUpdated:e[9]||(e[9]=function(){return n.onFilterUpdated&&n.onFilterUpdated.apply(n,arguments)}),class:t.cx("filterInput"),placeholder:t.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":s.id+"_list","aria-activedescendant":n.focusedOptionId,onKeydown:e[10]||(e[10]=function(){return n.onFilterKeyDown&&n.onFilterKeyDown.apply(n,arguments)}),onBlur:e[11]||(e[11]=function(){return n.onFilterBlur&&n.onFilterBlur.apply(n,arguments)}),onInput:e[12]||(e[12]=function(){return n.onFilterChange&&n.onFilterChange.apply(n,arguments)})},m(m({},t.filterInputProps),t.ptm("filterInput"))),null,16,Ae),h(t.$slots,"filtericon",{class:x(t.cx("filterIcon"))},function(){return[(o(),I(A(t.filterIcon?"span":"SearchIcon"),l({class:[t.cx("filterIcon"),t.filterIcon]},t.ptm("filterIcon")),null,16,["class"]))]})],16),b("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),O(n.filterResultMessageText),17)],16)):v("",!0),b("div",l({class:t.cx("wrapper"),style:{"max-height":n.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("wrapper")),[P(D,l({ref:n.virtualScrollerRef},t.virtualScrollerOptions,{items:n.visibleOptions,style:{height:t.scrollHeight},tabindex:-1,disabled:n.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),ne({content:K(function(g){var M=g.styleClass,J=g.contentRef,C=g.items,y=g.getItemOptions,Q=g.contentStyle,V=g.itemSize;return[b("ul",l({ref:function(f){return n.listRef(f,J)},id:s.id+"_list",class:[t.cx("list"),M],style:Q,role:"listbox","aria-label":n.listAriaLabel},t.ptm("list")),[(o(!0),p(B,null,re(C,function(u,f){return o(),p(B,{key:n.getOptionRenderKey(u,n.getOptionIndex(f,y))},[n.isOptionGroup(u)?(o(),p("li",l({key:0,id:s.id+"_"+n.getOptionIndex(f,y),style:{height:V?V+"px":void 0},class:t.cx("itemGroup"),role:"option"},t.ptm("itemGroup")),[h(t.$slots,"optiongroup",{option:u.optionGroup,index:n.getOptionIndex(f,y)},function(){return[b("span",l({class:t.cx("itemGroupLabel")},t.ptm("itemGroupLabel")),O(n.getOptionGroupLabel(u.optionGroup)),17)]})],16,He)):se((o(),p("li",l({key:1,id:s.id+"_"+n.getOptionIndex(f,y),class:t.cx("item",{option:u,focusedOption:n.getOptionIndex(f,y)}),style:{height:V?V+"px":void 0},role:"option","aria-label":n.getOptionLabel(u),"aria-selected":n.isSelected(u),"aria-disabled":n.isOptionDisabled(u),"aria-setsize":n.ariaSetSize,"aria-posinset":n.getAriaPosInset(n.getOptionIndex(f,y)),onClick:function(E){return n.onOptionSelect(E,u)},onMousemove:function(E){return n.onOptionMouseMove(E,n.getOptionIndex(f,y))},"data-p-highlight":n.isSelected(u),"data-p-focused":s.focusedOptionIndex===n.getOptionIndex(f,y),"data-p-disabled":n.isOptionDisabled(u)},n.getPTItemOptions(u,y,f,"item")),[t.checkmark?(o(),p(B,{key:0},[n.isSelected(u)?(o(),I(S,l({key:0,class:t.cx("checkIcon")},t.ptm("checkIcon")),null,16,["class"])):(o(),I(F,l({key:1,class:t.cx("blankIcon")},t.ptm("blankIcon")),null,16,["class"]))],64)):v("",!0),h(t.$slots,"option",{option:u,index:n.getOptionIndex(f,y)},function(){return[b("span",l({class:t.cx("itemLabel")},t.ptm("itemLabel")),O(n.getOptionLabel(u)),17)]})],16,je)),[[Z]])],64)}),128)),s.filterValue&&(!C||C&&C.length===0)?(o(),p("li",l({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[h(t.$slots,"emptyfilter",{},function(){return[H(O(n.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(o(),p("li",l({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[h(t.$slots,"empty",{},function(){return[H(O(n.emptyMessageText),1)]})],16)):v("",!0)],16,Be)]}),_:2},[t.$slots.loader?{name:"loader",fn:K(function(g){var M=g.options;return[h(t.$slots,"loader",{options:M})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),h(t.$slots,"footer",{value:t.modelValue,options:n.visibleOptions}),!t.options||t.options&&t.options.length===0?(o(),p("span",l({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),O(n.emptyMessageText),17)):v("",!0),b("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),O(n.selectedMessageText),17),b("span",l({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[13]||(e[13]=function(){return n.onLastHiddenFocus&&n.onLastHiddenFocus.apply(n,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):v("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,Ee)}xe.render=Ge;export{xe as default};
