this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,a=t[0],u=t[1],l=t[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={12:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;return o.push([643,2,1,0]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.React}()},102:function(e,t,n){"use strict";var r=n(0),c=(n(2),n(43)),o=n(6),i=n.n(o);n(137);t.a=function(e){var t=e.className,n=e.headingLevel,o=e.onChange,a=e.heading,u="h".concat(n);return Object(r.createElement)(u,null,Object(r.createElement)(c.PlainText,{className:i()("wc-block-component-title",t),value:a,onChange:o}))}},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(35),c=n(34),o=n(0),i=n(38),a=function(e){var t=e.namespace,n=e.resourceName,a=e.resourceValues,u=void 0===a?[]:a,l=e.query,s=void 0===l?{}:l,b=e.shouldSelect,d=void 0===b||b;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");var p=Object(o.useRef)({results:[],isLoading:!0}),f=Object(i.a)(s),m=Object(i.a)(u),g=Object(c.useSelect)((function(e){if(!d)return null;var c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,f,m];return{results:c.getCollection.apply(c,o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,n,m,f,d]);return null!==g&&(p.current=g),p.current}},137:function(e,t,n){var r=n(138);"string"==typeof r&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(30)(r,c);r.locals&&(e.exports=r.locals)},138:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"r",(function(){return o})),n.d(t,"k",(function(){return i})),n.d(t,"m",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"l",(function(){return l})),n.d(t,"o",(function(){return s})),n.d(t,"d",(function(){return b})),n.d(t,"n",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"p",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return g})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return v})),n.d(t,"q",(function(){return j})),n.d(t,"a",(function(){return w})),n.d(t,"s",(function(){return _}));var r=n(4),c=Object(r.getSetting)("enableReviewRating",!0),o=Object(r.getSetting)("showAvatars",!0),i=Object(r.getSetting)("max_columns",6),a=Object(r.getSetting)("min_columns",1),u=Object(r.getSetting)("default_columns",3),l=Object(r.getSetting)("max_rows",6),s=Object(r.getSetting)("min_rows",1),b=Object(r.getSetting)("default_rows",2),d=Object(r.getSetting)("min_height",500),p=Object(r.getSetting)("default_height",500),f=Object(r.getSetting)("placeholderImgSrc",""),m=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),g=Object(r.getSetting)("limitTags"),h=Object(r.getSetting)("hasProducts",!0),O=Object(r.getSetting)("hasTags",!0),v=Object(r.getSetting)("homeUrl",""),j=Object(r.getSetting)("productCount",0),w=Object(r.getSetting)("attributes",[]),_=Object(r.getSetting)("wcBlocksAssetUrl","")},21:function(e,t){!function(){e.exports=this.wp.compose}()},23:function(e,t){!function(){e.exports=this.wp.blocks}()},3:function(e,t){!function(){e.exports=this.wp.components}()},339:function(e,t,n){"use strict";var r=n(0),c=n(3);t.a=function(){return Object(r.createElement)(c.Icon,{icon:Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(r.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(r.createElement)("g",{mask:"url(#external-mask)"},Object(r.createElement)("path",{d:"M0 0h24v24H0z"})))})}},34:function(e,t){!function(){e.exports=this.wp.data}()},35:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(44),o=n.n(c),i=function(e){var t=Object(r.useRef)();return o()(e,t.current)||(t.current=e),t.current}},4:function(e,t){!function(){e.exports=this.wc.wcSettings}()},43:function(e,t){!function(){e.exports=this.wp.blockEditor}()},44:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},48:function(e,t,n){"use strict";var r=n(11),c=n.n(r),o=n(13),i=n.n(o),a=n(17),u=n.n(a),l=n(14),s=n.n(l),b=n(15),d=n.n(b),p=n(12),f=n.n(p),m=n(16),g=n.n(m),h=n(0),O=n(5),v=n(6),j=n.n(v),w=n(3),_=n(21),y=(n(98),function(e){function t(){var e;return i()(this,t),(e=s()(this,d()(t).apply(this,arguments))).onClick=e.onClick.bind(f()(e)),e}return g()(t,e),u()(t,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.label,o=n.checked,i=n.instanceId,a=n.className,u=n.help,l=n.options,s=n.value,b="inspector-toggle-button-control-".concat(i);return u&&(e=Object(O.isFunction)(u)?u(o):u),Object(h.createElement)(w.BaseControl,{id:b,help:e,className:j()("components-toggle-button-control",a)},Object(h.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},r),Object(h.createElement)(w.ButtonGroup,{"aria-labelledby":b+"__label"},l.map((function(e,n){var o={};return s===e.value?(o.isPrimary=!0,o["aria-pressed"]=!0):(o.isDefault=!0,o["aria-pressed"]=!1),Object(h.createElement)(w.Button,c()({key:"".concat(e.label,"-").concat(e.value,"-").concat(n),value:e.value,onClick:t.onClick,"aria-label":r+": "+e.label},o),e.label)}))))}}]),t}(h.Component));t.a=Object(_.withInstanceId)(y)},5:function(e,t){!function(){e.exports=this.lodash}()},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=Object(r.createContext)("page"),o=function(){return Object(r.useContext)(c)};c.Provider},621:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(10),c=function(e,t){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,n.current]),n.current}},628:function(e,t,n){var r=n(629);"string"==typeof r&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(30)(r,c);r.locals&&(e.exports=r.locals)},629:function(e,t,n){},630:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(7),c=n.n(r),o=n(62),i=n.n(o),a=n(85),u=n.n(a),l=n(25),s=n.n(l),b=n(0),d=n(91),p=n(109),f=n(50),m=n(348),g=n(5),h=n(38);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.queryAttribute,n=e.queryPrices,r=e.queryState,c=Object(f.a)();c="".concat(c,"-collection-data");var o=Object(d.a)(c),a=s()(o,1)[0],l=Object(d.b)("calculate_attribute_counts",[],c),O=s()(l,2),j=O[0],w=O[1],_=Object(d.b)("calculate_price_range",null,c),y=s()(_,2),k=y[0],E=y[1],x=Object(h.a)(t||{}),C=Object(h.a)(n);Object(b.useEffect)((function(){"object"===u()(x)&&Object.keys(x).length&&(j.find((function(e){return e.taxonomy===x.taxonomy}))||w([].concat(i()(j),[x])))}),[x,j,w]),Object(b.useEffect)((function(){k!==C&&void 0!==C&&E(C)}),[C,E,k]);var S=Object(b.useState)(!1),F=s()(S,2),N=F[0],P=F[1],R=Object(m.a)(N,200),L=s()(R,1)[0];N||P(!0);var B=Object(b.useMemo)((function(){return function(e){var t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(g.sortBy)(e.calculate_attribute_counts.map((function(e){return{taxonomy:e.taxonomy,query_type:e.queryType}})),["taxonomy","query_type"])),t}(a)}),[a]);return Object(p.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:v({},r,{page:void 0,per_page:void 0,orderby:void 0,order:void 0},B),shouldSelect:L})}},643:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n.n(r),o=n(0),i=n(1),a=n(23),u=n(6),l=n.n(u),s=n(43),b=n(3),d=n(18),p=n(4),f=n(84),m=n(102),g=n(25),h=n.n(g),O=n(91),v=n(630),j=(n(2),n(631),function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=parseInt(e[0],10),i=parseInt(e[1],10);return Number.isFinite(o)||(o=t||0),Number.isFinite(i)||(i=n||r),Number.isFinite(t)&&t>o&&(o=t),Number.isFinite(n)&&n<=o&&(o=n-r),Number.isFinite(t)&&t>=i&&(i=t+r),Number.isFinite(n)&&n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]}),w=n(89),_=function(e){var t=e.disabled,n=e.onClick;return Object(o.createElement)("button",{type:"submit",className:"wc-block-price-filter__button wc-block-form-button",disabled:t,onClick:n},Object(i.__)("Go",'woocommerce'))};_.defaultProps={disabled:!1};var y=_,k=function(e){var t=e.minPrice,n=e.maxPrice;return t||n?Object(o.createElement)("div",{className:"wc-block-price-filter__range-text"},Object(i.sprintf)(Object(i.__)("Price: %s — %s",'woocommerce'),t,n)):null},E=function(e){var t=e.disabled,n=e.onBlur,r=e.onChange,c=e.minPrice,a=e.maxPrice;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input","aria-label":Object(i.__)("Filter products by minimum price",'woocommerce'),onChange:r,onBlur:n,disabled:t,value:c}),Object(o.createElement)("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input","aria-label":Object(i.__)("Filter products by maximum price",'woocommerce'),onChange:r,onBlur:n,disabled:t,value:a}))};E.defaultProps={disabled:!1,onBlur:function(){},onChange:function(){}};var x=E,C=function(e){var t=e.minPrice,n=e.maxPrice,r=e.minConstraint,c=e.maxConstraint,a=e.onChange,u=void 0===a?function(){}:a,s=e.step,b=void 0===s?10:s,d=e.currencySymbol,p=void 0===d?"$":d,f=e.priceFormat,m=void 0===f?"%1$s%2$s":f,g=e.showInputFields,O=void 0===g||g,v=e.showFilterButton,_=void 0!==v&&v,E=e.isLoading,C=void 0!==E&&E,S=e.onSubmit,F=void 0===S?function(){}:S,N=Object(o.useRef)(),P=Object(o.useRef)(),R=Object(o.useState)(Object(w.a)(t,m,p)),L=h()(R,2),B=L[0],M=L[1],H=Object(o.useState)(Object(w.a)(n,m,p)),I=h()(H,2),z=I[0],T=I[1];Object(o.useEffect)((function(){M(Object(w.a)(t,m,p))}),[t,m,p]),Object(o.useEffect)((function(){T(Object(w.a)(n,m,p))}),[n,m,p]);var V=Object(o.useMemo)((function(){return isFinite(r)&&isFinite(c)}),[r,c]),U=Object(o.useMemo)((function(){return isFinite(t)&&isFinite(n)&&V?{"--low":Math.round((t-r)/(c-r)*100)-.5+"%","--high":Math.round((n-r)/(c-r)*100)+.5+"%"}:{"--low":"0%","--high":"100%"}}),[t,n,r,c,V,b]),D=Object(o.useCallback)((function(e){if(!C&&V){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=N.current.offsetWidth,o=N.current.value,i=P.current.offsetWidth,a=P.current.value,u=r*(o/c),l=i*(a/c);Math.abs(n-u)>Math.abs(n-l)?(N.current.style.zIndex=20,P.current.style.zIndex=21):(N.current.style.zIndex=21,P.current.style.zIndex=20)}}),[C,c,V]),Y=Object(o.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=e.target.value,a=o?[Math.round(i/b)*b,n]:[t,Math.round(i/b)*b],l=j(a,r,c,b,o);u([parseInt(l[0],10),parseInt(l[1],10)])}),[t,n,r,c,b]),q=Object(o.useCallback)((function(e){var r=e.target.classList.contains("wc-block-price-filter__amount--min"),c=e.target.value.replace(/[^0-9.-]+/g,""),o=j(r?[c,n]:[t,c],null,null,b,r);u([parseInt(o[0],10),parseInt(o[1],10)]),M(Object(w.a)(parseInt(o[0],10),m,p)),T(Object(w.a)(parseInt(o[1],10),m,p))}),[t,n,r,c,b]),A=Object(o.useCallback)((function(e){var t=e.target.value.replace(/[^0-9.-]+/g,"");e.target.classList.contains("wc-block-price-filter__amount--min")?M(Object(w.a)(t,m,p)):T(Object(w.a)(t,m,p))}),[m,p]),Q=l()("wc-block-price-filter",O&&"wc-block-price-filter--has-input-fields",_&&"wc-block-price-filter--has-filter-button",C&&"is-loading",!V&&"is-disabled"),W=N&&document.activeElement===N.current?b:1,K=P&&document.activeElement===P.current?b:1;return Object(o.createElement)("div",{className:Q},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-wrapper",onMouseMove:D,onFocus:D},V&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress",style:U}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min","aria-label":Object(i.__)("Filter products by minimum price",'woocommerce'),value:Number.isFinite(t)?t:r,onChange:Y,step:W,min:r,max:c,ref:N,disabled:C}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max","aria-label":Object(i.__)("Filter products by maximum price",'woocommerce'),value:Number.isFinite(n)?n:c,onChange:Y,step:K,min:r,max:c,ref:P,disabled:C}))),Object(o.createElement)("div",{className:"wc-block-price-filter__controls"},O?Object(o.createElement)(x,{disabled:C||!V,onChange:A,onBlur:q,minPrice:B,maxPrice:z}):Object(o.createElement)(k,{minPrice:B,maxPrice:z}),_&&Object(o.createElement)(y,{disabled:C||!V,onClick:F})))},S=n(347),F=n(621),N=function(e,t){var n;"ROUND_UP"===t?n=isNaN(e)?null:10*Math.ceil(parseFloat(e,10)/10):"ROUND_DOWN"===t&&(n=isNaN(e)?null:10*Math.floor(parseFloat(e,10)/10));var r=Object(F.a)(n,(function(e){return Number.isFinite(e)}));return Number.isFinite(n)?n:r},P=function(e){var t=e.attributes,n=e.isEditor,r=void 0!==n&&n,c=Object(O.b)("min_price"),i=h()(c,2),a=i[0],u=i[1],l=Object(O.b)("max_price"),s=h()(l,2),b=s[0],d=s[1],f=Object(O.a)(),m=h()(f,1)[0],g=Object(v.a)({queryPrices:!0,queryState:m}),j=g.results,w=g.isLoading,_=Object(o.useState)(),y=h()(_,2),k=y[0],E=y[1],x=Object(o.useState)(),F=h()(x,2),P=F[0],R=F[1],L=function(e){var t=e.minPrice,n=e.maxPrice;return{minConstraint:N(t,"ROUND_DOWN"),maxConstraint:N(n,"ROUND_UP")}}({minPrice:j.min_price,maxPrice:j.max_price}),B=L.minConstraint,M=L.maxConstraint,H=Object(S.a)((function(){z()}),500),I=h()(H,1)[0],z=Object(o.useCallback)((function(){u(k===B?void 0:k),d(P===M?void 0:P)}),[k,P,B,M]),T=Object(o.useCallback)((function(e){e[0]!==k&&E(e[0]),e[1]!==P&&R(e[1])}),[B,M,k,P]);if(Object(o.useEffect)((function(){t.showFilterButton||I()}),[k,P,t.showFilterButton]),Object(o.useEffect)((function(){a!==k&&E(Number.isFinite(a)?a:B),b!==P&&R(Number.isFinite(b)?b:M)}),[a,b,B,M]),!w&&(null===B||null===M||B===M))return null;var V="h".concat(t.headingLevel);return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&Object(o.createElement)(V,null,t.heading),Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(C,{minConstraint:B,maxConstraint:M,minPrice:k,maxPrice:P,step:10,currencySymbol:p.CURRENCY.symbol,priceFormat:p.CURRENCY.priceFormat,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:T,onSubmit:z,isLoading:w})))},R=(n(628),function(){return Object(o.createElement)(b.Icon,{icon:Object(o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(o.createElement)("mask",{id:"money-mask",width:"20",height:"14",x:"2",y:"5",maskUnits:"userSpaceOnUse"},Object(o.createElement)("path",{fill:"#fff",fillRule:"evenodd",d:"M2 5v14h20V5H2zm5 12c0-1.657-1.343-3-3-3v-4c1.657 0 3-1.343 3-3h10c0 1.657 1.343 3 3 3v4c-1.657 0-3 1.343-3 3H7zm7-5c0-1.7-.9-3-2-3s-2 1.3-2 3 .9 3 2 3 2-1.3 2-3z",clipRule:"evenodd"})),Object(o.createElement)("g",{mask:"url(#money-mask)"},Object(o.createElement)("path",{d:"M0 0h24v24H0z"})))})}),L=n(339),B=n(48);Object(a.registerBlockType)("woocommerce/price-filter",{title:Object(i.__)("Filter Products by Price",'woocommerce'),icon:{src:Object(o.createElement)(R,null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce",'woocommerce')],description:Object(i.__)("Display a slider to filter products in your store by price.",'woocommerce'),supports:{multiple:!1},example:{},attributes:{showInputFields:{type:"boolean",default:!0},showFilterButton:{type:"boolean",default:!1},heading:{type:"string",default:Object(i.__)("Filter by price",'woocommerce')},headingLevel:{type:"number",default:3}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=t.className,c=t.heading,a=t.headingLevel,u=t.showInputFields,l=t.showFilterButton;return Object(o.createElement)(o.Fragment,null,0===d.q?Object(o.createElement)(b.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(R,null),label:Object(i.__)("Filter Products by Price",'woocommerce'),instructions:Object(i.__)("Display a slider to filter products in your store by price.",'woocommerce')},Object(o.createElement)("p",null,Object(i.__)("Products with prices are needed for filtering by price. You haven't created any products yet.",'woocommerce')),Object(o.createElement)(b.Button,{className:"wc-block-price-slider__add_product_button",isDefault:!0,isLarge:!0,href:Object(p.getAdminLink)("post-new.php?post_type=product")},Object(i.__)("Add new product",'woocommerce')+" ",Object(o.createElement)(L.a,null)),Object(o.createElement)(b.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(i.__)("Learn more",'woocommerce'))):Object(o.createElement)("div",{className:r},Object(o.createElement)(s.InspectorControls,{key:"inspector"},Object(o.createElement)(b.PanelBody,{title:Object(i.__)("Block Settings",'woocommerce')},Object(o.createElement)(B.a,{label:Object(i.__)("Price Range",'woocommerce'),value:u?"editable":"text",options:[{label:Object(i.__)("Editable",'woocommerce'),value:"editable"},{label:Object(i.__)("Text",'woocommerce'),value:"text"}],onChange:function(e){return n({showInputFields:"editable"===e})}}),Object(o.createElement)(b.ToggleControl,{label:Object(i.__)("Filter button",'woocommerce'),help:l?Object(i.__)("Results will only update when the button is pressed.",'woocommerce'):Object(i.__)("Results will update when the slider is moved.",'woocommerce'),checked:l,onChange:function(){return n({showFilterButton:!l})}}),Object(o.createElement)("p",null,Object(i.__)("Heading Level",'woocommerce')),Object(o.createElement)(f.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:a,onChange:function(e){return n({headingLevel:e})}}))),Object(o.createElement)(m.a,{headingLevel:a,heading:c,onChange:function(e){return n({heading:e})}}),Object(o.createElement)(b.Disabled,null,Object(o.createElement)(P,{attributes:t,isEditor:!0}))))},save:function(e){var t=e.attributes,n=t.className,r={"data-showinputfields":t.showInputFields,"data-showfilterbutton":t.showFilterButton,"data-heading":t.heading,"data-heading-level":t.headingLevel};return Object(o.createElement)("div",c()({className:l()("is-loading",n)},r),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},84:function(e,t,n){"use strict";var r=n(13),c=n.n(r),o=n(17),i=n.n(o),a=n(14),u=n.n(a),l=n(15),s=n.n(l),b=n(16),d=n.n(b),p=n(0),f=n(5),m=n(1),g=n(3);function h(e){var t=e.level,n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(p.createElement)(g.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(p.createElement)(g.Path,{d:n[t]})):null}var O=function(e){function t(){return c()(this,t),u()(this,s()(t).apply(this,arguments))}return d()(t,e),i()(t,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(p.createElement)(h,{level:e}),title:Object(m.sprintf)(Object(m.__)("Heading %d"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,c=t.minLevel,o=t.maxLevel,i=t.selectedLevel,a=t.onChange;return Object(p.createElement)(g.Toolbar,{isCollapsed:r,icon:Object(p.createElement)(h,{level:i}),controls:Object(f.range)(c,o).map((function(t){return e.createLevelControl(t,i,a)}))})}}]),t}(p.Component);t.a=O},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),c=n(4),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.CURRENCY.priceFormat,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.CURRENCY.symbol,o=parseInt(e,10);if(!isFinite(o))return"";var i=Object(r.sprintf)(t,n,o),a=document.createElement("textarea");return a.innerHTML=i,a.value}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p}));var r=n(25),c=n.n(r),o=n(35),i=n(34),a=n(0),u=n(50),l=n(5),s=n(38),b=function(e){var t=Object(u.a)();e=e||t;var n=Object(i.useSelect)((function(t){return t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),r=Object(i.useDispatch)(o.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[n,Object(a.useCallback)((function(t){r(e,t)}),[e])]},d=function(e,t,n){var r=Object(u.a)();n=n||r;var c=Object(i.useSelect)((function(r){return r(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)}),[n,e]),l=Object(i.useDispatch)(o.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(a.useCallback)((function(t){l(n,e,t)}),[n,e])]},p=function(e,t){var n=Object(u.a)(),r=b(t=t||n),o=c()(r,2),i=o[0],d=o[1],p=Object(s.a)(e),f=Object(a.useRef)(!1);return Object(a.useEffect)((function(){d(Object(l.assign)({},i,p)),f.current=!0}),[p]),f.current?[i,d]:[e,d]}}});