import Z from"./Ca0JFKzo.js";import{s as J}from"./BLIlsQWC.js";import{s as Q}from"./BvRCxkuG.js";import{s as X}from"./R39Oo4Zq.js";import{O as Y}from"./Cl3gOHmp.js";import{s as $}from"./BxQH5iUo.js";import{af as _,ag as u,ah as R,ai as A,aj as p,ak as ee,al as te,i as x,am as ie,t as a,v as h,Z as l,a2 as I,a5 as F,V as z,x as S,W as m,L as V,a0 as K,A as k,a3 as G,y as v,z as E,a1 as ne,U as oe,B as D,aa as se}from"./CkZ6atYt.js";import le from"./CzA8_eYd.js";import{s as re}from"./laanq9xe.js";import"./DUbSrdPx.js";import"./u0x3RX6G.js";var ae={root:{position:"relative"}},ue={root:function(e){var i=e.instance,o=e.props;return["p-autocomplete p-component p-inputwrapper",{"p-disabled":o.disabled,"p-invalid":o.invalid,"p-focus":i.focused,"p-autocomplete-dd":o.dropdown,"p-autocomplete-multiple":o.multiple,"p-inputwrapper-filled":o.modelValue||u.isNotEmpty(i.inputValue),"p-inputwrapper-focus":i.focused,"p-overlay-open":i.overlayVisible}]},input:function(e){var i=e.props,o=e.instance;return["p-autocomplete-input p-inputtext p-component",{"p-autocomplete-dd-input":i.dropdown,"p-variant-filled":i.variant?i.variant==="filled":o.$primevue.config.inputStyle==="filled"}]},container:function(e){var i=e.props,o=e.instance;return["p-autocomplete-multiple-container p-component p-inputtext",{"p-variant-filled":i.variant?i.variant==="filled":o.$primevue.config.inputStyle==="filled"}]},token:function(e){var i=e.instance,o=e.i;return["p-autocomplete-token",{"p-focus":i.focusedMultipleOptionIndex===o}]},tokenLabel:"p-autocomplete-token-label",removeTokenIcon:"p-autocomplete-token-icon",inputToken:"p-autocomplete-input-token",loadingIcon:"p-autocomplete-loader",dropdownButton:"p-autocomplete-dropdown",panel:function(e){e.props;var i=e.instance;return["p-autocomplete-panel p-component",{"p-ripple-disabled":i.$primevue.config.ripple===!1}]},list:"p-autocomplete-items",itemGroup:"p-autocomplete-item-group",item:function(e){var i=e.instance,o=e.option,s=e.i,n=e.getItemOptions;return["p-autocomplete-item",{"p-highlight":i.isSelected(o),"p-focus":i.focusedOptionIndex===i.getOptionIndex(s,n),"p-disabled":i.isOptionDisabled(o)}]},emptyMessage:"p-autocomplete-empty-message"},de=_.extend({name:"autocomplete",classes:ue,inlineStyles:ae}),pe={name:"BaseAutoComplete",extends:re,props:{modelValue:null,suggestions:{type:Array,default:null},field:{type:[String,Function],default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},autoHighlight:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},inputProps:{type:null,default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},panelProps:{type:null,default:null},dropdownIcon:{type:String,default:void 0},dropdownClass:{type:[String,Object],default:null},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:de,provide:function(){return{$parentInstance:this}}};function B(t){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(t)}function ce(t){return me(t)||ye(t)||he(t)||fe()}function fe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(t,e){if(t){if(typeof t=="string")return P(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return P(t,e)}}function ye(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function me(t){if(Array.isArray(t))return P(t)}function P(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var Oe={name:"AutoComplete",extends:pe,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","item-select","item-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{"$attrs.id":function(e){this.id=e||R()},suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1),this.autoUpdateModel()}},mounted:function(){this.id=this.id||R(),this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(A.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel:function(e){return this.field||this.optionLabel?u.resolveFieldData(e,this.field||this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,i){return(this.dataKey?u.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+i},getPTOptions:function(e,i,o,s){return this.ptm(s,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,i),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?u.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return u.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return u.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset:function(e){var i=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return i.isOptionGroup(o)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&p.focus(this.$refs.focusInput)},hide:function(e){var i=this,o=function(){i.$emit("before-hide"),i.dirty=e,i.overlayVisible=!1,i.clicked=!1,i.focusedOptionIndex=-1,e&&p.focus(i.$refs.focusInput)};setTimeout(function(){o()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var i=this;this.searchTimeout&&clearTimeout(this.searchTimeout);var o=e.target.value;this.multiple||this.updateModel(e,o),o.length===0?(this.hide(),this.$emit("clear")):o.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){i.search(e,o,"input")},this.delay)):this.hide()},onChange:function(e){var i=this;if(this.forceSelection){var o=!1;if(this.visibleOptions&&!this.multiple){var s=this.visibleOptions.find(function(n){return i.isOptionMatched(n,i.$refs.focusInput.value||"")});s!==void 0&&(o=!0,!this.isSelected(s)&&this.onOptionSelect(e,s))}o||(this.$refs.focusInput.value="",this.$emit("clear"),!this.multiple&&this.updateModel(e,null))}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&p.focus(this.$refs.focusInput)},onDropdownClick:function(e){var i=void 0;this.overlayVisible?this.hide(!0):(p.focus(this.$refs.focusInput),i=this.$refs.focusInput.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.$emit("dropdown-click",{originalEvent:e,query:i})},onOptionSelect:function(e,i){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(i);this.multiple?(this.$refs.focusInput.value="",this.isSelected(i)||this.updateModel(e,[].concat(ce(this.modelValue||[]),[s]))):this.updateModel(e,s),this.$emit("item-select",{originalEvent:e,value:i}),o&&this.hide(!0)},onOptionMouseMove:function(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)},onOverlayClick:function(e){Y.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var i=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault()}},onArrowLeftKey:function(e){var i=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(u.isEmpty(i.value)&&this.hasSelectedOption?(p.focus(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.modelValue.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var i=e.currentTarget,o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var i=e.currentTarget,o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e))},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onBackspaceKey:function(e){if(this.multiple){if(u.isNotEmpty(this.modelValue)&&!this.$refs.focusInput.value){var i=this.modelValue[this.modelValue.length-1],o=this.modelValue.slice(0,-1);this.$emit("update:modelValue",o),this.$emit("item-unselect",{originalEvent:e,value:i})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.modelValue.length-1&&(this.focusedMultipleOptionIndex=-1,p.focus(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){A.set("overlay",e,this.$primevue.config.zIndex.overlay),p.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){A.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput;this.appendTo==="self"?p.relativePosition(this.overlay,e):(this.overlay.style.minWidth=p.getOuterWidth(e)+"px",p.absolutePosition(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){e.overlayVisible&&e.overlay&&e.isOutsideClicked(i)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new ee(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!p.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.$el.contains(e.target):!1},isOptionMatched:function(e,i){var o;return this.isValidOption(e)&&((o=this.getOptionLabel(e))===null||o===void 0?void 0:o.toLocaleLowerCase(this.searchLocale))===i.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return u.isNotEmpty(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,i){return u.equals(e,i,this.equalityKey)},isSelected:function(e){var i=this,o=this.getOptionValue(e);return this.multiple?(this.modelValue||[]).some(function(s){return i.isEquals(s,o)}):this.isEquals(this.modelValue,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return u.findLastIndex(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return i.isValidOption(s)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var i=this,o=e>0?u.findLastIndex(this.visibleOptions.slice(0,e),function(s){return i.isValidOption(s)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,i,o){i!=null&&(o==="input"&&i.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:i})))},removeOption:function(e,i){var o=this,s=this.modelValue[i],n=this.modelValue.filter(function(b,w){return w!==i}).map(function(b){return o.getOptionValue(b)});this.updateModel(e,n),this.$emit("item-unselect",{originalEvent:e,value:s}),this.dirty=!0,p.focus(this.$refs.focusInput)},changeFocusedOptionIndex:function(e,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),(this.selectOnFocus||this.autoHighlight)&&this.onOptionSelect(e,this.visibleOptions[i],!1))},scrollInView:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var o=i!==-1?"".concat(e.id,"_").concat(i):e.focusedOptionId,s=p.findSingle(e.list,'li[id="'.concat(o,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(i!==-1?i:e.focusedOptionIndex)})},autoUpdateModel:function(){(this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,i){this.$emit("update:modelValue",i),this.$emit("change",{originalEvent:e,value:i})},flatOptions:function(e){var i=this;return(e||[]).reduce(function(o,s,n){o.push({optionGroup:s,group:!0,index:n});var b=i.getOptionGroupChildren(s);return b&&b.forEach(function(w){return o.push(w)}),o},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,i){this.list=e,i&&i(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(u.isNotEmpty(this.modelValue))if(B(this.modelValue)==="object"){var e=this.getOptionLabel(this.modelValue);return e??this.modelValue}else return this.modelValue;else return""},hasSelectedOption:function(){return u.isNotEmpty(this.modelValue)},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return u.isNotEmpty(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(i){return!e.isOptionGroup(i)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},components:{Button:Z,VirtualScroller:le,Portal:$,ChevronDownIcon:J,SpinnerIcon:Q,TimesCircleIcon:X},directives:{ripple:te}};function L(t){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(t)}function j(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,o)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?j(Object(i),!0).forEach(function(o){ge(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function ge(t,e,i){return e=be(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function be(t){var e=ve(t,"string");return L(e)=="symbol"?e:String(e)}function ve(t,e){if(L(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e||"default");if(L(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ie=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Se=["aria-activedescendant"],we=["id","aria-label","aria-setsize","aria-posinset"],ke=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Le=["id","aria-label"],Ce=["id"],Me=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-highlight","data-p-focus","data-p-disabled"];function xe(t,e,i,o,s,n){var b=x("SpinnerIcon"),w=x("Button"),H=x("VirtualScroller"),U=x("Portal"),N=ie("ripple");return a(),h("div",l({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[15]||(e[15]=function(){return n.onContainerClick&&n.onContainerClick.apply(n,arguments)})},t.ptmi("root")),[t.multiple?I("",!0):(a(),h("input",l({key:0,ref:"focusInput",id:t.inputId,type:"text",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:n.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?n.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[1]||(e[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onKeydown:e[2]||(e[2]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)}),onInput:e[3]||(e[3]=function(){return n.onInput&&n.onInput.apply(n,arguments)}),onChange:e[4]||(e[4]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},g(g({},t.inputProps),t.ptm("input"))),null,16,Ie)),t.multiple?(a(),h("ul",l({key:1,ref:"multiContainer",class:t.cx("container"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":s.focused?n.focusedMultipleOptionId:void 0,onFocus:e[10]||(e[10]=function(){return n.onMultipleContainerFocus&&n.onMultipleContainerFocus.apply(n,arguments)}),onBlur:e[11]||(e[11]=function(){return n.onMultipleContainerBlur&&n.onMultipleContainerBlur.apply(n,arguments)}),onKeydown:e[12]||(e[12]=function(){return n.onMultipleContainerKeyDown&&n.onMultipleContainerKeyDown.apply(n,arguments)})},t.ptm("container")),[(a(!0),h(F,null,z(t.modelValue,function(c,f){return a(),h("li",l({key:f,id:s.id+"_multiple_option_"+f,class:t.cx("token",{i:f}),role:"option","aria-label":n.getOptionLabel(c),"aria-selected":!0,"aria-setsize":t.modelValue.length,"aria-posinset":f+1},t.ptm("token")),[m(t.$slots,"chip",{value:c},function(){return[S("span",l({class:t.cx("tokenLabel")},t.ptm("tokenLabel")),v(n.getOptionLabel(c)),17)]}),m(t.$slots,"removetokenicon",{class:V(t.cx("removeTokenIcon")),index:f,onClick:function(O){return n.removeOption(O,f)},removeCallback:function(O){return n.removeOption(O,f)}},function(){return[(a(),K(G(t.removeTokenIcon?"span":"TimesCircleIcon"),l({class:[t.cx("removeTokenIcon"),t.removeTokenIcon],onClick:function(O){return n.removeOption(O,f)},"aria-hidden":"true"},t.ptm("removeTokenIcon")),null,16,["class","onClick"]))]})],16,we)}),128)),S("li",l({class:t.cx("inputToken"),role:"option"},t.ptm("inputToken")),[S("input",l({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?n.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[5]||(e[5]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[6]||(e[6]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onKeydown:e[7]||(e[7]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)}),onInput:e[8]||(e[8]=function(){return n.onInput&&n.onInput.apply(n,arguments)}),onChange:e[9]||(e[9]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},g(g({},t.inputProps),t.ptm("input"))),null,16,ke)],16)],16,Se)):I("",!0),s.searching||t.loading?m(t.$slots,"loadingicon",{key:2,class:V(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(a(),h("i",l({key:0,class:["pi-spin",t.cx("loadingIcon"),t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(a(),K(b,l({key:1,class:[t.cx("loadingIcon"),t.loadingIcon],spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):I("",!0),t.dropdown?(a(),K(w,{key:3,ref:"dropdownButton",type:"button",tabindex:"-1",class:V([t.cx("dropdownButton"),t.dropdownClass]),disabled:t.disabled,"aria-hidden":"true",onClick:n.onDropdownClick,unstyled:t.unstyled,pt:t.ptm("dropdownButton")},{icon:k(function(){return[m(t.$slots,"dropdownicon",{class:V(t.dropdownIcon)},function(){return[(a(),K(G(t.dropdownIcon?"span":"ChevronDownIcon"),l({class:t.dropdownIcon},t.ptm("dropdownButton").icon,{"data-pc-section":"dropdownicon"}),null,16,["class"]))]})]}),_:3},8,["class","disabled","onClick","unstyled","pt"])):I("",!0),S("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),v(n.searchResultMessageText),17),E(U,{appendTo:t.appendTo},{default:k(function(){return[E(ne,l({name:"p-connected-overlay",onEnter:n.onOverlayEnter,onAfterEnter:n.onOverlayAfterEnter,onLeave:n.onOverlayLeave,onAfterLeave:n.onOverlayAfterLeave},t.ptm("transition")),{default:k(function(){return[s.overlayVisible?(a(),h("div",l({key:0,ref:n.overlayRef,class:[t.cx("panel"),t.panelClass],style:g(g({},t.panelStyle),{},{"max-height":n.virtualScrollerDisabled?t.scrollHeight:""}),onClick:e[13]||(e[13]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)}),onKeydown:e[14]||(e[14]=function(){return n.onOverlayKeyDown&&n.onOverlayKeyDown.apply(n,arguments)})},g(g({},t.panelProps),t.ptm("panel"))),[m(t.$slots,"header",{value:t.modelValue,suggestions:n.visibleOptions}),E(H,l({ref:n.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:n.visibleOptions,tabindex:-1,disabled:n.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),oe({content:k(function(c){var f=c.styleClass,C=c.contentRef,O=c.items,y=c.getItemOptions,q=c.contentStyle,M=c.itemSize;return[S("ul",l({ref:function(d){return n.listRef(d,C)},id:s.id+"_list",class:[t.cx("list"),f],style:q,role:"listbox","aria-label":n.listAriaLabel},t.ptm("list")),[(a(!0),h(F,null,z(O,function(r,d){return a(),h(F,{key:n.getOptionRenderKey(r,n.getOptionIndex(d,y))},[n.isOptionGroup(r)?(a(),h("li",l({key:0,id:s.id+"_"+n.getOptionIndex(d,y),style:{height:M?M+"px":void 0},class:t.cx("itemGroup"),role:"option"},t.ptm("itemGroup")),[m(t.$slots,"optiongroup",{option:r.optionGroup,item:r.optionGroup,index:n.getOptionIndex(d,y)},function(){return[D(v(n.getOptionGroupLabel(r.optionGroup)),1)]})],16,Ce)):se((a(),h("li",l({key:1,id:s.id+"_"+n.getOptionIndex(d,y),style:{height:M?M+"px":void 0},class:t.cx("item",{option:r,i:d,getItemOptions:y}),role:"option","aria-label":n.getOptionLabel(r),"aria-selected":n.isSelected(r),"aria-disabled":n.isOptionDisabled(r),"aria-setsize":n.ariaSetSize,"aria-posinset":n.getAriaPosInset(n.getOptionIndex(d,y)),onClick:function(T){return n.onOptionSelect(T,r)},onMousemove:function(T){return n.onOptionMouseMove(T,n.getOptionIndex(d,y))},"data-p-highlight":n.isSelected(r),"data-p-focus":s.focusedOptionIndex===n.getOptionIndex(d,y),"data-p-disabled":n.isOptionDisabled(r)},n.getPTOptions(r,y,d,"item")),[t.$slots.option?m(t.$slots,"option",{key:0,option:r,index:n.getOptionIndex(d,y)},function(){return[D(v(n.getOptionLabel(r)),1)]}):m(t.$slots,"item",{key:1,item:r,index:n.getOptionIndex(d,y)},function(){return[D(v(n.getOptionLabel(r)),1)]})],16,Me)),[[N]])],64)}),128)),!O||O&&O.length===0?(a(),h("li",l({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[m(t.$slots,"empty",{},function(){return[D(v(n.searchResultMessageText),1)]})],16)):I("",!0)],16,Le)]}),_:2},[t.$slots.loader?{name:"loader",fn:k(function(c){var f=c.options;return[m(t.$slots,"loader",{options:f})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"]),m(t.$slots,"footer",{value:t.modelValue,suggestions:n.visibleOptions}),S("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),v(n.selectedMessageText),17)],16)):I("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}Oe.render=xe;export{Oe as default};
