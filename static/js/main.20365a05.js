/*! For license information please see main.20365a05.js.LICENSE.txt */
(()=>{var e={4:(e,t,r)=>{"use strict";var n=r(853),a=r(43),o=r(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var s=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),h=Symbol.for("react.consumer"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var k=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var S=Symbol.for("react.memo_cache_sentinel"),C=Symbol.iterator;function E(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=C&&e[C]||e["@@iterator"])?e:null}var z=Symbol.for("react.client.reference");function j(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===z?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case d:return"Fragment";case u:return"Portal";case f:return"Profiler";case p:return"StrictMode";case b:return"Suspense";case y:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case g:return(e.displayName||"Context")+".Provider";case h:return(e._context.displayName||"Context")+".Consumer";case v:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case x:return null!==(t=e.displayName||null)?t:j(e.type)||"Memo";case w:t=e._payload,e=e._init;try{return j(e(t))}catch(r){}}return null}var T,_,N=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=Object.assign;function L(e){if(void 0===T)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||"",_=-1<r.stack.indexOf("\n    at")?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+T+e+_}var O=!1;function A(e,t){if(!e||O)return"";O=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var r=function(){throw Error()};if(Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(r,[])}catch(a){var n=a}Reflect.construct(e,[],r)}else{try{r.call()}catch(o){n=o}e.call(r.prototype)}}else{try{throw Error()}catch(i){n=i}(r=e())&&"function"===typeof r.catch&&r.catch((function(){}))}}catch(l){if(l&&n&&"string"===typeof l.stack)return[l.stack,n.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(a=n=0;n<s.length&&!s[n].includes("DetermineComponentFrameRoot");)n++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(n===s.length||a===c.length)for(n=s.length-1,a=c.length-1;1<=n&&0<=a&&s[n]!==c[a];)a--;for(;1<=n&&0<=a;n--,a--)if(s[n]!==c[a]){if(1!==n||1!==a)do{if(n--,0>--a||s[n]!==c[a]){var u="\n"+s[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=n&&0<=a);break}}}finally{O=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?L(r):""}function R(e){switch(e.tag){case 26:case 27:case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 15:return e=A(e.type,!1);case 11:return e=A(e.type.render,!1);case 1:return e=A(e.type,!0);default:return""}}function F(e){try{var t="";do{t+=R(e),e=e.return}while(e);return t}catch(r){return"\nError generating stack: "+r.message+"\n"+r.stack}}function D(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function M(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function I(e){if(D(e)!==e)throw Error(i(188))}function $(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=$(e)))return t;e=e.sibling}return null}var V=Array.isArray,H=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},B=[],U=-1;function Y(e){return{current:e}}function q(e){0>U||(e.current=B[U],B[U]=null,U--)}function X(e,t){U++,B[U]=e.current,e.current=t}var K=Y(null),Q=Y(null),G=Y(null),Z=Y(null);function J(e,t){switch(X(G,t),X(Q,e),X(K,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Qu(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=Gu(e=Qu(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(K),X(K,t)}function ee(){q(K),q(Q),q(G)}function te(e){null!==e.memoizedState&&X(Z,e);var t=K.current,r=Gu(t,e.type);t!==r&&(X(Q,e),X(K,r))}function re(e){Q.current===e&&(q(K),q(Q)),Z.current===e&&(q(Z),Fd._currentValue=W)}var ne=Object.prototype.hasOwnProperty,ae=n.unstable_scheduleCallback,oe=n.unstable_cancelCallback,ie=n.unstable_shouldYield,le=n.unstable_requestPaint,se=n.unstable_now,ce=n.unstable_getCurrentPriorityLevel,ue=n.unstable_ImmediatePriority,de=n.unstable_UserBlockingPriority,pe=n.unstable_NormalPriority,fe=n.unstable_LowPriority,me=n.unstable_IdlePriority,he=n.log,ge=n.unstable_setDisableYieldValue,ve=null,be=null;function ye(e){if("function"===typeof he&&ge(e),be&&"function"===typeof be.setStrictMode)try{be.setStrictMode(ve,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(we(e)/ke|0)|0},we=Math.log,ke=Math.LN2;var Se=128,Ce=4194304;function Ee(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ze(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=e.warmLanes;e=0!==e.finishedLanes;var l=134217727&r;return 0!==l?0!==(r=l&~a)?n=Ee(r):0!==(o&=l)?n=Ee(o):e||0!==(i=l&~i)&&(n=Ee(i)):0!==(l=r&~a)?n=Ee(l):0!==o?n=Ee(o):e||0!==(i=r&~i)&&(n=Ee(i)),0===n?0:0!==t&&t!==n&&0===(t&a)&&((a=n&-n)>=(i=t&-t)||32===a&&0!==(4194176&i))?t:n}function je(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Te(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function _e(){var e=Se;return 0===(4194176&(Se<<=1))&&(Se=128),e}function Ne(){var e=Ce;return 0===(62914560&(Ce<<=1))&&(Ce=4194304),e}function Pe(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Le(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oe(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-xe(t);e.entangledLanes|=t,e.entanglements[n]=1073741824|e.entanglements[n]|4194218&r}function Ae(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-xe(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}function Re(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Fe(){var e=H.p;return 0!==e?e:void 0===(e=window.event)?32:Gd(e.type)}var De=Math.random().toString(36).slice(2),Me="__reactFiber$"+De,Ie="__reactProps$"+De,$e="__reactContainer$"+De,Ve="__reactEvents$"+De,He="__reactListeners$"+De,We="__reactHandles$"+De,Be="__reactResources$"+De,Ue="__reactMarker$"+De;function Ye(e){delete e[Me],delete e[Ie],delete e[Ve],delete e[He],delete e[We]}function qe(e){var t=e[Me];if(t)return t;for(var r=e.parentNode;r;){if(t=r[$e]||r[Me]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=sd(e);null!==e;){if(r=e[Me])return r;e=sd(e)}return t}r=(e=r).parentNode}return null}function Xe(e){if(e=e[Me]||e[$e]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ke(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function Qe(e){var t=e[Be];return t||(t=e[Be]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[Ue]=!0}var Ze=new Set,Je={};function et(e,t){tt(e,t),tt(e+"Capture",t)}function tt(e,t){for(Je[e]=t,e=0;e<t.length;e++)Ze.add(t[e])}var rt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},ot={};function it(e,t,r){if(a=t,ne.call(ot,a)||!ne.call(at,a)&&(nt.test(a)?ot[a]=!0:(at[a]=!0,0)))if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var n=t.toLowerCase().slice(0,5);if("data-"!==n&&"aria-"!==n)return void e.removeAttribute(t)}e.setAttribute(t,""+r)}var a}function lt(e,t,r){if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+r)}}function st(e,t,r,n){if(null===n)e.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(r)}e.setAttributeNS(t,r,""+n)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ut(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function ft(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var mt=/[\n"\\]/g;function ht(e){return e.replace(mt,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,r,n,a,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?bt(e,i,ct(t)):null!=r?bt(e,i,ct(r)):null!=n&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ct(l):e.removeAttribute("name")}function vt(e,t,r,n,a,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=r){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return;r=null!=r?""+ct(r):"",t=null!=t?""+ct(t):r,l||t===e.value||(e.value=t),e.defaultValue=t}n="function"!==typeof(n=null!=n?n:a)&&"symbol"!==typeof n&&!!n,e.checked=l?e.checked:!!n,e.defaultChecked=!!n,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i)}function bt(e,t,r){"number"===t&&ft(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function yt(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ct(r),t=null,a=0;a<e.length;a++){if(e[a].value===r)return e[a].selected=!0,void(n&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function xt(e,t,r){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=r)?e.defaultValue=null!=r?""+ct(r):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,r,n){if(null==t){if(null!=n){if(null!=r)throw Error(i(92));if(V(n)){if(1<n.length)throw Error(i(93));n=n[0]}r=n}null==r&&(r=""),t=r}r=ct(t),e.defaultValue=r,(n=e.textContent)===r&&""!==n&&null!==n&&(e.value=n)}function kt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ct(e,t,r){var n=0===t.indexOf("--");null==r||"boolean"===typeof r||""===r?n?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":n?e.setProperty(t,r):"number"!==typeof r||0===r||St.has(t)?"float"===t?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function Et(e,t,r){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=r){for(var n in r)!r.hasOwnProperty(n)||null!=t&&t.hasOwnProperty(n)||(0===n.indexOf("--")?e.setProperty(n,""):"float"===n?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&r[a]!==n&&Ct(e,a,n)}else for(var o in t)t.hasOwnProperty(o)&&Ct(e,o,t[o])}function zt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _t(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Nt=null;function Pt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Lt=null,Ot=null;function At(e){var t=Xe(e);if(t&&(e=t.stateNode)){var r=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=n[Ie]||null;if(!a)throw Error(i(90));gt(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<r.length;t++)(n=r[t]).form===e.form&&pt(n)}break e;case"textarea":xt(e,r.value,r.defaultValue);break e;case"select":null!=(t=r.value)&&yt(e,!!r.multiple,t,!1)}}}var Rt=!1;function Ft(e,t,r){if(Rt)return e(t,r);Rt=!0;try{return e(t)}finally{if(Rt=!1,(null!==Lt||null!==Ot)&&(Mc(),Lt&&(t=Lt,e=Ot,Ot=Lt=null,At(t),e)))for(t=0;t<e.length;t++)At(e[t])}}function Dt(e,t){var r=e.stateNode;if(null===r)return null;var n=r[Ie]||null;if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(i(231,t,typeof r));return r}var Mt=!1;if(rt)try{var It={};Object.defineProperty(It,"passive",{get:function(){Mt=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch(wp){Mt=!1}var $t=null,Vt=null,Ht=null;function Wt(){if(Ht)return Ht;var e,t,r=Vt,n=r.length,a="value"in $t?$t.value:$t.textContent,o=a.length;for(e=0;e<n&&r[e]===a[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===a[o-t];t++);return Ht=a.slice(e,1<t?1-t:void 0)}function Bt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Ut(){return!0}function Yt(){return!1}function qt(e){function t(t,r,n,a,o){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Ut:Yt,this.isPropagationStopped=Yt,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Ut)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Ut)},persist:function(){},isPersistent:Ut}),t}var Xt,Kt,Qt,Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=qt(Gt),Jt=P({},Gt,{view:0,detail:0}),er=qt(Jt),tr=P({},Jt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qt&&(Qt&&"mousemove"===e.type?(Xt=e.screenX-Qt.screenX,Kt=e.screenY-Qt.screenY):Kt=Xt=0,Qt=e),Xt)},movementY:function(e){return"movementY"in e?e.movementY:Kt}}),rr=qt(tr),nr=qt(P({},tr,{dataTransfer:0})),ar=qt(P({},Jt,{relatedTarget:0})),or=qt(P({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0})),ir=qt(P({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),lr=qt(P({},Gt,{data:0})),sr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ur={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=ur[e])&&!!t[e]}function pr(){return dr}var fr=qt(P({},Jt,{key:function(e){if(e.key){var t=sr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Bt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?cr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(e){return"keypress"===e.type?Bt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Bt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mr=qt(P({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),hr=qt(P({},Jt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr})),gr=qt(P({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0})),vr=qt(P({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),br=qt(P({},Gt,{newState:0,oldState:0})),yr=[9,13,27,32],xr=rt&&"CompositionEvent"in window,wr=null;rt&&"documentMode"in document&&(wr=document.documentMode);var kr=rt&&"TextEvent"in window&&!wr,Sr=rt&&(!xr||wr&&8<wr&&11>=wr),Cr=String.fromCharCode(32),Er=!1;function zr(e,t){switch(e){case"keyup":return-1!==yr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Tr=!1;var _r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!_r[e.type]:"textarea"===t}function Pr(e,t,r,n){Lt?Ot?Ot.push(n):Ot=[n]:Lt=n,0<(t=Fu(t,"onChange")).length&&(r=new Zt("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Lr=null,Or=null;function Ar(e){Tu(e,0)}function Rr(e){if(pt(Ke(e)))return e}function Fr(e,t){if("change"===e)return t}var Dr=!1;if(rt){var Mr;if(rt){var Ir="oninput"in document;if(!Ir){var $r=document.createElement("div");$r.setAttribute("oninput","return;"),Ir="function"===typeof $r.oninput}Mr=Ir}else Mr=!1;Dr=Mr&&(!document.documentMode||9<document.documentMode)}function Vr(){Lr&&(Lr.detachEvent("onpropertychange",Hr),Or=Lr=null)}function Hr(e){if("value"===e.propertyName&&Rr(Or)){var t=[];Pr(t,Or,e,Pt(e)),Ft(Ar,t)}}function Wr(e,t,r){"focusin"===e?(Vr(),Or=r,(Lr=t).attachEvent("onpropertychange",Hr)):"focusout"===e&&Vr()}function Br(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Rr(Or)}function Ur(e,t){if("click"===e)return Rr(t)}function Yr(e,t){if("input"===e||"change"===e)return Rr(t)}var qr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Xr(e,t){if(qr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!ne.call(t,a)||!qr(e[a],t[a]))return!1}return!0}function Kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qr(e,t){var r,n=Kr(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kr(n)}}function Gr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Gr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Zr(e){for(var t=ft((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=ft((e=t.contentWindow).document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function en(e,t){var r=Zr(t);t=e.focusedElem;var n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&Gr(t.ownerDocument.documentElement,t)){if(null!==n&&Jr(t))if(e=n.start,void 0===(r=n.end)&&(r=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(r,t.value.length);else if((r=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){r=r.getSelection();var a=t.textContent.length,o=Math.min(n.start,a);n=void 0===n.end?o:Math.min(n.end,a),!r.extend&&o>n&&(a=n,n=o,o=a),a=Qr(t,o);var i=Qr(t,n);a&&i&&(1!==r.rangeCount||r.anchorNode!==a.node||r.anchorOffset!==a.offset||r.focusNode!==i.node||r.focusOffset!==i.offset)&&((e=e.createRange()).setStart(a.node,a.offset),r.removeAllRanges(),o>n?(r.addRange(e),r.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),r.addRange(e)))}for(e=[],r=t;r=r.parentNode;)1===r.nodeType&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for("function"===typeof t.focus&&t.focus(),t=0;t<e.length;t++)(r=e[t]).element.scrollLeft=r.left,r.element.scrollTop=r.top}}var tn=rt&&"documentMode"in document&&11>=document.documentMode,rn=null,nn=null,an=null,on=!1;function ln(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;on||null==rn||rn!==ft(n)||("selectionStart"in(n=rn)&&Jr(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},an&&Xr(an,n)||(an=n,0<(n=Fu(nn,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=rn)))}function sn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var cn={animationend:sn("Animation","AnimationEnd"),animationiteration:sn("Animation","AnimationIteration"),animationstart:sn("Animation","AnimationStart"),transitionrun:sn("Transition","TransitionRun"),transitionstart:sn("Transition","TransitionStart"),transitioncancel:sn("Transition","TransitionCancel"),transitionend:sn("Transition","TransitionEnd")},un={},dn={};function pn(e){if(un[e])return un[e];if(!cn[e])return e;var t,r=cn[e];for(t in r)if(r.hasOwnProperty(t)&&t in dn)return un[e]=r[t];return e}rt&&(dn=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);var fn=pn("animationend"),mn=pn("animationiteration"),hn=pn("animationstart"),gn=pn("transitionrun"),vn=pn("transitionstart"),bn=pn("transitioncancel"),yn=pn("transitionend"),xn=new Map,wn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function kn(e,t){xn.set(e,t),et(t,[e])}var Sn=[],Cn=0,En=0;function zn(){for(var e=Cn,t=En=Cn=0;t<e;){var r=Sn[t];Sn[t++]=null;var n=Sn[t];Sn[t++]=null;var a=Sn[t];Sn[t++]=null;var o=Sn[t];if(Sn[t++]=null,null!==n&&null!==a){var i=n.pending;null===i?a.next=a:(a.next=i.next,i.next=a),n.pending=a}0!==o&&Nn(r,a,o)}}function jn(e,t,r,n){Sn[Cn++]=e,Sn[Cn++]=t,Sn[Cn++]=r,Sn[Cn++]=n,En|=n,e.lanes|=n,null!==(e=e.alternate)&&(e.lanes|=n)}function Tn(e,t,r,n){return jn(e,t,r,n),Pn(e)}function _n(e,t){return jn(e,null,null,t),Pn(e)}function Nn(e,t,r){e.lanes|=r;var n=e.alternate;null!==n&&(n.lanes|=r);for(var a=!1,o=e.return;null!==o;)o.childLanes|=r,null!==(n=o.alternate)&&(n.childLanes|=r),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;a&&null!==t&&3===e.tag&&(o=e.stateNode,a=31-xe(r),null===(e=(o=o.hiddenUpdates)[a])?o[a]=[t]:e.push(t),t.lane=536870912|r)}function Pn(e){if(50<Tc)throw Tc=0,_c=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Ln={},On=new WeakMap;function An(e,t){if("object"===typeof e&&null!==e){var r=On.get(e);return void 0!==r?r:(t={value:e,source:t,stack:F(t)},On.set(e,t),t)}return{value:e,source:t,stack:F(t)}}var Rn=[],Fn=0,Dn=null,Mn=0,In=[],$n=0,Vn=null,Hn=1,Wn="";function Bn(e,t){Rn[Fn++]=Mn,Rn[Fn++]=Dn,Dn=e,Mn=t}function Un(e,t,r){In[$n++]=Hn,In[$n++]=Wn,In[$n++]=Vn,Vn=e;var n=Hn;e=Wn;var a=32-xe(n)-1;n&=~(1<<a),r+=1;var o=32-xe(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Hn=1<<32-xe(t)+a|r<<a|n,Wn=o+e}else Hn=1<<o|r<<a|n,Wn=e}function Yn(e){null!==e.return&&(Bn(e,1),Un(e,1,0))}function qn(e){for(;e===Dn;)Dn=Rn[--Fn],Rn[Fn]=null,Mn=Rn[--Fn],Rn[Fn]=null;for(;e===Vn;)Vn=In[--$n],In[$n]=null,Wn=In[--$n],In[$n]=null,Hn=In[--$n],In[$n]=null}var Xn=null,Kn=null,Qn=!1,Gn=null,Zn=!1,Jn=Error(i(519));function ea(e){throw oa(An(Error(i(418,"")),e)),Jn}function ta(e){var t=e.stateNode,r=e.type,n=e.memoizedProps;switch(t[Me]=e,t[Ie]=n,r){case"dialog":_u("cancel",t),_u("close",t);break;case"iframe":case"object":case"embed":_u("load",t);break;case"video":case"audio":for(r=0;r<zu.length;r++)_u(zu[r],t);break;case"source":_u("error",t);break;case"img":case"image":case"link":_u("error",t),_u("load",t);break;case"details":_u("toggle",t);break;case"input":_u("invalid",t),vt(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),dt(t);break;case"select":_u("invalid",t);break;case"textarea":_u("invalid",t),wt(t,n.value,n.defaultValue,n.children),dt(t)}"string"!==typeof(r=n.children)&&"number"!==typeof r&&"bigint"!==typeof r||t.textContent===""+r||!0===n.suppressHydrationWarning||Hu(t.textContent,r)?(null!=n.popover&&(_u("beforetoggle",t),_u("toggle",t)),null!=n.onScroll&&_u("scroll",t),null!=n.onScrollEnd&&_u("scrollend",t),null!=n.onClick&&(t.onclick=Wu),t=!0):t=!1,t||ea(e)}function ra(e){for(Xn=e.return;Xn;)switch(Xn.tag){case 3:case 27:return void(Zn=!0);case 5:case 13:return void(Zn=!1);default:Xn=Xn.return}}function na(e){if(e!==Xn)return!1;if(!Qn)return ra(e),Qn=!0,!1;var t,r=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Zu(e.type,e.memoizedProps)),t=!t),t&&(r=!0),r&&Kn&&ea(e),ra(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===r){Kn=ld(e.nextSibling);break e}r--}else"$"!==t&&"$!"!==t&&"$?"!==t||r++;e=e.nextSibling}Kn=null}}else Kn=Xn?ld(e.stateNode.nextSibling):null;return!0}function aa(){Kn=Xn=null,Qn=!1}function oa(e){null===Gn?Gn=[e]:Gn.push(e)}var ia=Error(i(460)),la=Error(i(474)),sa={then:function(){}};function ca(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ua(){}function da(e,t,r){switch(void 0===(r=e[r])?e.push(t):r!==t&&(t.then(ua,ua),t=r),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===ia)throw Error(i(483));throw e;default:if("string"===typeof t.status)t.then(ua,ua);else{if(null!==(e=tc)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var r=t;r.status="fulfilled",r.value=e}}),(function(e){if("pending"===t.status){var r=t;r.status="rejected",r.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===ia)throw Error(i(483));throw e}throw pa=t,ia}}var pa=null;function fa(){if(null===pa)throw Error(i(459));var e=pa;return pa=null,e}var ma=null,ha=0;function ga(e){var t=ha;return ha+=1,null===ma&&(ma=[]),da(ma,e,t)}function va(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function ba(e,t){if(t.$$typeof===s)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){return(0,e._init)(e._payload)}function xa(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Ds(e,t)).index=0,e.sibling=null,e}function o(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=33554434,r):n:(t.flags|=33554434,r):(t.flags|=1048576,r)}function l(t){return e&&null===t.alternate&&(t.flags|=33554434),t}function s(e,t,r,n){return null===t||6!==t.tag?((t=Hs(r,e.mode,n)).return=e,t):((t=a(t,r)).return=e,t)}function p(e,t,r,n){var o=r.type;return o===d?m(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===w&&ya(o)===t.type)?(va(t=a(t,r.props),r),t.return=e,t):(va(t=Is(r.type,r.key,r.props,null,e.mode,n),r),t.return=e,t)}function f(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Ws(r,e.mode,n)).return=e,t):((t=a(t,r.children||[])).return=e,t)}function m(e,t,r,n,o){return null===t||7!==t.tag?((t=$s(r,e.mode,n,o)).return=e,t):((t=a(t,r)).return=e,t)}function h(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Hs(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case c:return va(r=Is(t.type,t.key,t.props,null,e.mode,r),t),r.return=e,r;case u:return(t=Ws(t,e.mode,r)).return=e,t;case w:return h(e,t=(0,t._init)(t._payload),r)}if(V(t)||E(t))return(t=$s(t,e.mode,r,null)).return=e,t;if("function"===typeof t.then)return h(e,ga(t),r);if(t.$$typeof===g)return h(e,zl(e,t),r);ba(e,t)}return null}function v(e,t,r,n){var a=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return null!==a?null:s(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case c:return r.key===a?p(e,t,r,n):null;case u:return r.key===a?f(e,t,r,n):null;case w:return v(e,t,r=(a=r._init)(r._payload),n)}if(V(r)||E(r))return null!==a?null:m(e,t,r,n,null);if("function"===typeof r.then)return v(e,t,ga(r),n);if(r.$$typeof===g)return v(e,t,zl(e,r),n);ba(e,r)}return null}function b(e,t,r,n,a){if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return s(t,e=e.get(r)||null,""+n,a);if("object"===typeof n&&null!==n){switch(n.$$typeof){case c:return p(t,e=e.get(null===n.key?r:n.key)||null,n,a);case u:return f(t,e=e.get(null===n.key?r:n.key)||null,n,a);case w:return b(e,t,r,n=(0,n._init)(n._payload),a)}if(V(n)||E(n))return m(t,e=e.get(r)||null,n,a,null);if("function"===typeof n.then)return b(e,t,r,ga(n),a);if(n.$$typeof===g)return b(e,t,r,zl(t,n),a);ba(t,n)}return null}function y(s,p,f,m){if("object"===typeof f&&null!==f&&f.type===d&&null===f.key&&(f=f.props.children),"object"===typeof f&&null!==f){switch(f.$$typeof){case c:e:{for(var x=f.key;null!==p;){if(p.key===x){if((x=f.type)===d){if(7===p.tag){r(s,p.sibling),(m=a(p,f.props.children)).return=s,s=m;break e}}else if(p.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===w&&ya(x)===p.type){r(s,p.sibling),va(m=a(p,f.props),f),m.return=s,s=m;break e}r(s,p);break}t(s,p),p=p.sibling}f.type===d?((m=$s(f.props.children,s.mode,m,f.key)).return=s,s=m):(va(m=Is(f.type,f.key,f.props,null,s.mode,m),f),m.return=s,s=m)}return l(s);case u:e:{for(x=f.key;null!==p;){if(p.key===x){if(4===p.tag&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){r(s,p.sibling),(m=a(p,f.children||[])).return=s,s=m;break e}r(s,p);break}t(s,p),p=p.sibling}(m=Ws(f,s.mode,m)).return=s,s=m}return l(s);case w:return y(s,p,f=(x=f._init)(f._payload),m)}if(V(f))return function(a,i,l,s){for(var c=null,u=null,d=i,p=i=0,f=null;null!==d&&p<l.length;p++){d.index>p?(f=d,d=null):f=d.sibling;var m=v(a,d,l[p],s);if(null===m){null===d&&(d=f);break}e&&d&&null===m.alternate&&t(a,d),i=o(m,i,p),null===u?c=m:u.sibling=m,u=m,d=f}if(p===l.length)return r(a,d),Qn&&Bn(a,p),c;if(null===d){for(;p<l.length;p++)null!==(d=h(a,l[p],s))&&(i=o(d,i,p),null===u?c=d:u.sibling=d,u=d);return Qn&&Bn(a,p),c}for(d=n(d);p<l.length;p++)null!==(f=b(d,a,p,l[p],s))&&(e&&null!==f.alternate&&d.delete(null===f.key?p:f.key),i=o(f,i,p),null===u?c=f:u.sibling=f,u=f);return e&&d.forEach((function(e){return t(a,e)})),Qn&&Bn(a,p),c}(s,p,f,m);if(E(f)){if("function"!==typeof(x=E(f)))throw Error(i(150));return function(a,l,s,c){if(null==s)throw Error(i(151));for(var u=null,d=null,p=l,f=l=0,m=null,g=s.next();null!==p&&!g.done;f++,g=s.next()){p.index>f?(m=p,p=null):m=p.sibling;var y=v(a,p,g.value,c);if(null===y){null===p&&(p=m);break}e&&p&&null===y.alternate&&t(a,p),l=o(y,l,f),null===d?u=y:d.sibling=y,d=y,p=m}if(g.done)return r(a,p),Qn&&Bn(a,f),u;if(null===p){for(;!g.done;f++,g=s.next())null!==(g=h(a,g.value,c))&&(l=o(g,l,f),null===d?u=g:d.sibling=g,d=g);return Qn&&Bn(a,f),u}for(p=n(p);!g.done;f++,g=s.next())null!==(g=b(p,a,f,g.value,c))&&(e&&null!==g.alternate&&p.delete(null===g.key?f:g.key),l=o(g,l,f),null===d?u=g:d.sibling=g,d=g);return e&&p.forEach((function(e){return t(a,e)})),Qn&&Bn(a,f),u}(s,p,f=x.call(f),m)}if("function"===typeof f.then)return y(s,p,ga(f),m);if(f.$$typeof===g)return y(s,p,zl(s,f),m);ba(s,f)}return"string"===typeof f&&""!==f||"number"===typeof f||"bigint"===typeof f?(f=""+f,null!==p&&6===p.tag?(r(s,p.sibling),(m=a(p,f)).return=s,s=m):(r(s,p),(m=Hs(f,s.mode,m)).return=s,s=m),l(s)):r(s,p)}return function(e,t,r,n){try{ha=0;var a=y(e,t,r,n);return ma=null,a}catch(i){if(i===ia)throw i;var o=Rs(29,i,null,e.mode);return o.lanes=n,o.return=e,o}}}var wa=xa(!0),ka=xa(!1),Sa=Y(null),Ca=Y(0);function Ea(e,t){X(Ca,e=cc),X(Sa,t),cc=e|t.baseLanes}function za(){X(Ca,cc),X(Sa,Sa.current)}function ja(){cc=Ca.current,q(Sa),q(Ca)}var Ta=Y(null),_a=null;function Na(e){var t=e.alternate;X(Aa,1&Aa.current),X(Ta,e),null===_a&&(null===t||null!==Sa.current||null!==t.memoizedState)&&(_a=e)}function Pa(e){if(22===e.tag){if(X(Aa,Aa.current),X(Ta,e),null===_a){var t=e.alternate;null!==t&&null!==t.memoizedState&&(_a=e)}}else La()}function La(){X(Aa,Aa.current),X(Ta,Ta.current)}function Oa(e){q(Ta),_a===e&&(_a=null),q(Aa)}var Aa=Y(0);function Ra(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fa="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Da=n.unstable_scheduleCallback,Ma=n.unstable_NormalPriority,Ia={$$typeof:g,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $a(){return{controller:new Fa,data:new Map,refCount:0}}function Va(e){e.refCount--,0===e.refCount&&Da(Ma,(function(){e.controller.abort()}))}var Ha=null,Wa=0,Ba=0,Ua=null;function Ya(){if(0===--Wa&&null!==Ha){null!==Ua&&(Ua.status="fulfilled");var e=Ha;Ha=null,Ba=0,Ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var qa=N.S;N.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ha){var r=Ha=[];Wa=0,Ba=wu(),Ua={status:"pending",value:void 0,then:function(e){r.push(e)}}}Wa++,t.then(Ya,Ya)}(0,t),null!==qa&&qa(e,t)};var Xa=Y(null);function Ka(){var e=Xa.current;return null!==e?e:tc.pooledCache}function Qa(e,t){X(Xa,null===t?Xa.current:t.pool)}function Ga(){var e=Ka();return null===e?null:{parent:Ia._currentValue,pool:e}}var Za=0,Ja=null,eo=null,to=null,ro=!1,no=!1,ao=!1,oo=0,io=0,lo=null,so=0;function co(){throw Error(i(321))}function uo(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!qr(e[r],t[r]))return!1;return!0}function po(e,t,r,n,a,o){return Za=o,Ja=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=null===e||null===e.memoizedState?zi:ji,ao=!1,o=r(n,a),ao=!1,no&&(o=mo(t,r,n,a)),fo(e),o}function fo(e){N.H=Ei;var t=null!==eo&&null!==eo.next;if(Za=0,to=eo=Ja=null,ro=!1,io=0,lo=null,t)throw Error(i(300));null===e||Bi||null!==(e=e.dependencies)&&Sl(e)&&(Bi=!0)}function mo(e,t,r,n){Ja=e;var a=0;do{if(no&&(lo=null),io=0,no=!1,25<=a)throw Error(i(301));if(a+=1,to=eo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}N.H=Ti,o=t(r,n)}while(no);return o}function ho(){var e=N.H,t=e.useState()[0];return t="function"===typeof t.then?wo(t):t,e=e.useState()[0],(null!==eo?eo.memoizedState:null)!==e&&(Ja.flags|=1024),t}function go(){var e=0!==oo;return oo=0,e}function vo(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function bo(e){if(ro){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ro=!1}Za=0,to=eo=Ja=null,no=!1,io=oo=0,lo=null}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===to?Ja.memoizedState=to=e:to=to.next=e,to}function xo(){if(null===eo){var e=Ja.alternate;e=null!==e?e.memoizedState:null}else e=eo.next;var t=null===to?Ja.memoizedState:to.next;if(null!==t)to=t,eo=e;else{if(null===e){if(null===Ja.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(eo=e).memoizedState,baseState:eo.baseState,baseQueue:eo.baseQueue,queue:eo.queue,next:null},null===to?Ja.memoizedState=to=e:to=to.next=e}return to}function wo(e){var t=io;return io+=1,null===lo&&(lo=[]),e=da(lo,e,t),t=Ja,null===(null===to?t.memoizedState:to.next)&&(t=t.alternate,N.H=null===t||null===t.memoizedState?zi:ji),e}function ko(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return wo(e);if(e.$$typeof===g)return El(e)}throw Error(i(438,String(e)))}function So(e){var t=null,r=Ja.updateQueue;if(null!==r&&(t=r.memoCache),null==t){var n=Ja.alternate;null!==n&&(null!==(n=n.updateQueue)&&(null!=(n=n.memoCache)&&(t={data:n.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===r&&(r={lastEffect:null,events:null,stores:null,memoCache:null},Ja.updateQueue=r),r.memoCache=t,void 0===(r=t.data[t.index]))for(r=t.data[t.index]=Array(e),n=0;n<e;n++)r[n]=S;return t.index++,r}function Co(e,t){return"function"===typeof t?t(e):t}function Eo(e){return zo(xo(),eo,e)}function zo(e,t,r){var n=e.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=r;var a=e.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}t.baseQueue=a=o,n.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=l=null,c=null,u=t=a.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(nc&p)===p:(Za&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Ba&&(d=!0);else{if((Za&f)===f){u=u.next,f===Ba&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,Ja.lanes|=f,dc|=f}p=u.action,ao&&r(o,p),o=u.hasEagerState?u.eagerState:r(o,p)}else f={lane:p,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=o):c=c.next=f,Ja.lanes|=p,dc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?l=o:c.next=s,!qr(o,e.memoizedState)&&(Bi=!0,d&&null!==(r=Ua)))throw r;e.memoizedState=o,e.baseState=l,e.baseQueue=c,n.lastRenderedState=o}return null===a&&(n.lanes=0),[e.memoizedState,n.dispatch]}function jo(e){var t=xo(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(null!==a){r.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);qr(o,t.memoizedState)||(Bi=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function To(e,t,r){var n=Ja,a=xo(),o=Qn;if(o){if(void 0===r)throw Error(i(407));r=r()}else r=t();var l=!qr((eo||a).memoizedState,r);if(l&&(a.memoizedState=r,Bi=!0),a=a.queue,Jo(Po.bind(null,n,a,e),[e]),a.getSnapshot!==t||l||null!==to&&1&to.memoizedState.tag){if(n.flags|=2048,Xo(9,No.bind(null,n,a,r,t),{destroy:void 0},null),null===tc)throw Error(i(349));o||0!==(60&Za)||_o(n,t,r)}return r}function _o(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=Ja.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Ja.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function No(e,t,r,n){t.value=r,t.getSnapshot=n,Lo(t)&&Oo(e)}function Po(e,t,r){return r((function(){Lo(t)&&Oo(e)}))}function Lo(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!qr(e,r)}catch(n){return!0}}function Oo(e){var t=_n(e,2);null!==t&&Lc(t,e,2)}function Ao(e){var t=yo();if("function"===typeof e){var r=e;if(e=r(),ao){ye(!0);try{r()}finally{ye(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t}function Ro(e,t,r,n){return e.baseState=r,zo(e,eo,"function"===typeof n?n:Co)}function Fo(e,t,r,n,a){if(ki(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==N.T?r(!0):o.isTransition=!1,n(o),null===(r=t.pending)?(o.next=t.pending=o,Do(t,o)):(o.next=r.next,t.pending=r.next=o)}}function Do(e,t){var r=t.action,n=t.payload,a=e.state;if(t.isTransition){var o=N.T,i={};N.T=i;try{var l=r(a,n),s=N.S;null!==s&&s(i,l),Mo(e,t,l)}catch(c){$o(e,t,c)}finally{N.T=o}}else try{Mo(e,t,o=r(a,n))}catch(u){$o(e,t,u)}}function Mo(e,t,r){null!==r&&"object"===typeof r&&"function"===typeof r.then?r.then((function(r){Io(e,t,r)}),(function(r){return $o(e,t,r)})):Io(e,t,r)}function Io(e,t,r){t.status="fulfilled",t.value=r,Vo(t),e.state=r,null!==(t=e.pending)&&((r=t.next)===t?e.pending=null:(r=r.next,t.next=r,Do(e,r)))}function $o(e,t,r){var n=e.pending;if(e.pending=null,null!==n){n=n.next;do{t.status="rejected",t.reason=r,Vo(t),t=t.next}while(t!==n)}e.action=null}function Vo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ho(e,t){return t}function Wo(e,t){if(Qn){var r=tc.formState;if(null!==r){e:{var n=Ja;if(Qn){if(Kn){t:{for(var a=Kn,o=Zn;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=ld(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){Kn=ld(a.nextSibling),n="F!"===a.data;break e}}ea(n)}n=!1}n&&(t=r[0])}}return(r=yo()).memoizedState=r.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},r.queue=n,r=yi.bind(null,Ja,n),n.dispatch=r,n=Ao(!1),o=wi.bind(null,Ja,!1,n.queue),a={state:t,dispatch:null,action:e,pending:null},(n=yo()).queue=a,r=Fo.bind(null,Ja,a,o,r),a.dispatch=r,n.memoizedState=e,[t,r,!1]}function Bo(e){return Uo(xo(),eo,e)}function Uo(e,t,r){t=zo(e,t,Ho)[0],e=Eo(Co)[0],t="object"===typeof t&&null!==t&&"function"===typeof t.then?wo(t):t;var n=xo(),a=n.queue,o=a.dispatch;return r!==n.memoizedState&&(Ja.flags|=2048,Xo(9,Yo.bind(null,a,r),{destroy:void 0},null)),[t,o,e]}function Yo(e,t){e.action=t}function qo(e){var t=xo(),r=eo;if(null!==r)return Uo(t,r,e);xo(),t=t.memoizedState;var n=(r=xo()).queue.dispatch;return r.memoizedState=e,[t,n,!1]}function Xo(e,t,r,n){return e={tag:e,create:t,inst:r,deps:n,next:null},null===(t=Ja.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Ja.updateQueue=t),null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Ko(){return xo().memoizedState}function Qo(e,t,r,n){var a=yo();Ja.flags|=e,a.memoizedState=Xo(1|t,r,{destroy:void 0},void 0===n?null:n)}function Go(e,t,r,n){var a=xo();n=void 0===n?null:n;var o=a.memoizedState.inst;null!==eo&&null!==n&&uo(n,eo.memoizedState.deps)?a.memoizedState=Xo(t,r,o,n):(Ja.flags|=e,a.memoizedState=Xo(1|t,r,o,n))}function Zo(e,t){Qo(8390656,8,e,t)}function Jo(e,t){Go(2048,8,e,t)}function ei(e,t){return Go(4,2,e,t)}function ti(e,t){return Go(4,4,e,t)}function ri(e,t){if("function"===typeof t){e=e();var r=t(e);return function(){"function"===typeof r?r():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ni(e,t,r){r=null!==r&&void 0!==r?r.concat([e]):null,Go(4,4,ri.bind(null,t,e),r)}function ai(){}function oi(e,t){var r=xo();t=void 0===t?null:t;var n=r.memoizedState;return null!==t&&uo(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ii(e,t){var r=xo();t=void 0===t?null:t;var n=r.memoizedState;if(null!==t&&uo(t,n[1]))return n[0];if(n=e(),ao){ye(!0);try{e()}finally{ye(!1)}}return r.memoizedState=[n,t],n}function li(e,t,r){return void 0===r||0!==(1073741824&Za)?e.memoizedState=t:(e.memoizedState=r,e=Pc(),Ja.lanes|=e,dc|=e,r)}function si(e,t,r,n){return qr(r,t)?r:null!==Sa.current?(e=li(e,r,n),qr(e,t)||(Bi=!0),e):0===(42&Za)?(Bi=!0,e.memoizedState=r):(e=Pc(),Ja.lanes|=e,dc|=e,t)}function ci(e,t,r,n,a){var o=H.p;H.p=0!==o&&8>o?o:8;var i=N.T,l={};N.T=l,wi(e,!1,t,r);try{var s=a(),c=N.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)xi(e,t,function(e,t){var r=[],n={status:"pending",value:null,reason:null,then:function(e){r.push(e)}};return e.then((function(){n.status="fulfilled",n.value=t;for(var e=0;e<r.length;e++)(0,r[e])(t)}),(function(e){for(n.status="rejected",n.reason=e,e=0;e<r.length;e++)(0,r[e])(void 0)})),n}(s,n),Nc());else xi(e,t,n,Nc())}catch(u){xi(e,t,{then:function(){},status:"rejected",reason:u},Nc())}finally{H.p=o,N.T=i}}function ui(){}function di(e,t,r,n){if(5!==e.tag)throw Error(i(476));var a=pi(e).queue;ci(e,a,t,W,null===r?ui:function(){return fi(e),r(n)})}function pi(e){var t=e.memoizedState;if(null!==t)return t;var r={};return(t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:W},next:null}).next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:r},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function fi(e){xi(e,pi(e).next.queue,{},Nc())}function mi(){return El(Fd)}function hi(){return xo().memoizedState}function gi(){return xo().memoizedState}function vi(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var r=Nc(),n=Ll(t,e=Pl(r),r);return null!==n&&(Lc(n,t,r),Ol(n,t,r)),t={cache:$a()},void(e.payload=t)}t=t.return}}function bi(e,t,r){var n=Nc();r={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},ki(e)?Si(t,r):null!==(r=Tn(e,t,r,n))&&(Lc(r,e,n),Ci(r,t,n))}function yi(e,t,r){xi(e,t,r,Nc())}function xi(e,t,r,n){var a={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(ki(e))Si(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,qr(l,i))return jn(e,t,a,0),null===tc&&zn(),!1}catch(s){}if(null!==(r=Tn(e,t,a,n)))return Lc(r,e,n),Ci(r,t,n),!0}return!1}function wi(e,t,r,n){if(n={lane:2,revertLane:wu(),action:n,hasEagerState:!1,eagerState:null,next:null},ki(e)){if(t)throw Error(i(479))}else null!==(t=Tn(e,r,n,2))&&Lc(t,e,2)}function ki(e){var t=e.alternate;return e===Ja||null!==t&&t===Ja}function Si(e,t){no=ro=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ci(e,t,r){if(0!==(4194176&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,Ae(e,r)}}var Ei={readContext:El,use:ko,useCallback:co,useContext:co,useEffect:co,useImperativeHandle:co,useLayoutEffect:co,useInsertionEffect:co,useMemo:co,useReducer:co,useRef:co,useState:co,useDebugValue:co,useDeferredValue:co,useTransition:co,useSyncExternalStore:co,useId:co};Ei.useCacheRefresh=co,Ei.useMemoCache=co,Ei.useHostTransitionStatus=co,Ei.useFormState=co,Ei.useActionState=co,Ei.useOptimistic=co;var zi={readContext:El,use:ko,useCallback:function(e,t){return yo().memoizedState=[e,void 0===t?null:t],e},useContext:El,useEffect:Zo,useImperativeHandle:function(e,t,r){r=null!==r&&void 0!==r?r.concat([e]):null,Qo(4194308,4,ri.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){Qo(4,2,e,t)},useMemo:function(e,t){var r=yo();t=void 0===t?null:t;var n=e();if(ao){ye(!0);try{e()}finally{ye(!1)}}return r.memoizedState=[n,t],n},useReducer:function(e,t,r){var n=yo();if(void 0!==r){var a=r(t);if(ao){ye(!0);try{r(t)}finally{ye(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=bi.bind(null,Ja,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},yo().memoizedState=e},useState:function(e){var t=(e=Ao(e)).queue,r=yi.bind(null,Ja,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:ai,useDeferredValue:function(e,t){return li(yo(),e,t)},useTransition:function(){var e=Ao(!1);return e=ci.bind(null,Ja,e.queue,!0,!1),yo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var n=Ja,a=yo();if(Qn){if(void 0===r)throw Error(i(407));r=r()}else{if(r=t(),null===tc)throw Error(i(349));0!==(60&nc)||_o(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Zo(Po.bind(null,n,o,e),[e]),n.flags|=2048,Xo(9,No.bind(null,n,o,r,t),{destroy:void 0},null),r},useId:function(){var e=yo(),t=tc.identifierPrefix;if(Qn){var r=Wn;t=":"+t+"R"+(r=(Hn&~(1<<32-xe(Hn)-1)).toString(32)+r),0<(r=oo++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=so++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return yo().memoizedState=vi.bind(null,Ja)}};zi.useMemoCache=So,zi.useHostTransitionStatus=mi,zi.useFormState=Wo,zi.useActionState=Wo,zi.useOptimistic=function(e){var t=yo();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=wi.bind(null,Ja,!0,r),r.dispatch=t,[e,t]};var ji={readContext:El,use:ko,useCallback:oi,useContext:El,useEffect:Jo,useImperativeHandle:ni,useInsertionEffect:ei,useLayoutEffect:ti,useMemo:ii,useReducer:Eo,useRef:Ko,useState:function(){return Eo(Co)},useDebugValue:ai,useDeferredValue:function(e,t){return si(xo(),eo.memoizedState,e,t)},useTransition:function(){var e=Eo(Co)[0],t=xo().memoizedState;return["boolean"===typeof e?e:wo(e),t]},useSyncExternalStore:To,useId:hi};ji.useCacheRefresh=gi,ji.useMemoCache=So,ji.useHostTransitionStatus=mi,ji.useFormState=Bo,ji.useActionState=Bo,ji.useOptimistic=function(e,t){return Ro(xo(),0,e,t)};var Ti={readContext:El,use:ko,useCallback:oi,useContext:El,useEffect:Jo,useImperativeHandle:ni,useInsertionEffect:ei,useLayoutEffect:ti,useMemo:ii,useReducer:jo,useRef:Ko,useState:function(){return jo(Co)},useDebugValue:ai,useDeferredValue:function(e,t){var r=xo();return null===eo?li(r,e,t):si(r,eo.memoizedState,e,t)},useTransition:function(){var e=jo(Co)[0],t=xo().memoizedState;return["boolean"===typeof e?e:wo(e),t]},useSyncExternalStore:To,useId:hi};function _i(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:P({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}Ti.useCacheRefresh=gi,Ti.useMemoCache=So,Ti.useHostTransitionStatus=mi,Ti.useFormState=qo,Ti.useActionState=qo,Ti.useOptimistic=function(e,t){var r=xo();return null!==eo?Ro(r,0,e,t):(r.baseState=e,[e,r.queue.dispatch])};var Ni={isMounted:function(e){return!!(e=e._reactInternals)&&D(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Nc(),a=Pl(n);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Ll(e,a,n))&&(Lc(t,e,n),Ol(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Nc(),a=Pl(n);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Ll(e,a,n))&&(Lc(t,e,n),Ol(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Nc(),n=Pl(r);n.tag=2,void 0!==t&&null!==t&&(n.callback=t),null!==(t=Ll(e,n,r))&&(Lc(t,e,r),Ol(t,e,r))}};function Pi(e,t,r,n,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!Xr(r,n)||!Xr(a,o))}function Li(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ni.enqueueReplaceState(t,t.state,null)}function Oi(e,t){var r=t;if("ref"in t)for(var n in r={},t)"ref"!==n&&(r[n]=t[n]);if(e=e.defaultProps)for(var a in r===t&&(r=P({},r)),e)void 0===r[a]&&(r[a]=e[a]);return r}var Ai="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function Ri(e){Ai(e)}function Fi(e){console.error(e)}function Di(e){Ai(e)}function Mi(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(r){setTimeout((function(){throw r}))}}function Ii(e,t,r){try{(0,e.onCaughtError)(r.value,{componentStack:r.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(n){setTimeout((function(){throw n}))}}function $i(e,t,r){return(r=Pl(r)).tag=3,r.payload={element:null},r.callback=function(){Mi(e,t)},r}function Vi(e){return(e=Pl(e)).tag=3,e}function Hi(e,t,r,n){var a=r.type.getDerivedStateFromError;if("function"===typeof a){var o=n.value;e.payload=function(){return a(o)},e.callback=function(){Ii(t,r,n)}}var i=r.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){Ii(t,r,n),"function"!==typeof a&&(null===kc?kc=new Set([this]):kc.add(this));var e=n.stack;this.componentDidCatch(n.value,{componentStack:null!==e?e:""})})}var Wi=Error(i(461)),Bi=!1;function Ui(e,t,r,n){t.child=null===e?ka(t,null,r,n):wa(t,e.child,r,n)}function Yi(e,t,r,n,a){r=r.render;var o=t.ref;if("ref"in n){var i={};for(var l in n)"ref"!==l&&(i[l]=n[l])}else i=n;return Cl(t),n=po(e,t,r,i,o,a),l=go(),null===e||Bi?(Qn&&l&&Yn(t),t.flags|=1,Ui(e,t,n,a),t.child):(vo(e,t,a),pl(e,t,a))}function qi(e,t,r,n,a){if(null===e){var o=r.type;return"function"!==typeof o||Fs(o)||void 0!==o.defaultProps||null!==r.compare?((e=Is(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Xi(e,t,o,n,a))}if(o=e.child,!fl(e,a)){var i=o.memoizedProps;if((r=null!==(r=r.compare)?r:Xr)(i,n)&&e.ref===t.ref)return pl(e,t,a)}return t.flags|=1,(e=Ds(o,n)).ref=t.ref,e.return=t,t.child=e}function Xi(e,t,r,n,a){if(null!==e){var o=e.memoizedProps;if(Xr(o,n)&&e.ref===t.ref){if(Bi=!1,t.pendingProps=n=o,!fl(e,a))return t.lanes=e.lanes,pl(e,t,a);0!==(131072&e.flags)&&(Bi=!0)}}return Zi(e,t,r,n,a)}function Ki(e,t,r){var n=t.pendingProps,a=n.children,o=0!==(2&t.stateNode._pendingVisibility),i=null!==e?e.memoizedState:null;if(Gi(e,t),"hidden"===n.mode||o){if(0!==(128&t.flags)){if(n=null!==i?i.baseLanes|r:r,null!==e){for(a=t.child=e.child,o=0;null!==a;)o=o|a.lanes|a.childLanes,a=a.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return Qi(e,t,n,r)}if(0===(536870912&r))return t.lanes=t.childLanes=536870912,Qi(e,t,null!==i?i.baseLanes|r:r,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qa(0,null!==i?i.cachePool:null),null!==i?Ea(t,i):za(),Pa(t)}else null!==i?(Qa(0,i.cachePool),Ea(t,i),La(),t.memoizedState=null):(null!==e&&Qa(0,null),za(),La());return Ui(e,t,a,r),t.child}function Qi(e,t,r,n){var a=Ka();return a=null===a?null:{parent:Ia._currentValue,pool:a},t.memoizedState={baseLanes:r,cachePool:a},null!==e&&Qa(0,null),za(),Pa(t),null!==e&&kl(e,t,n,!0),null}function Gi(e,t){var r=t.ref;if(null===r)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!==typeof r&&"object"!==typeof r)throw Error(i(284));null!==e&&e.ref===r||(t.flags|=2097664)}}function Zi(e,t,r,n,a){return Cl(t),r=po(e,t,r,n,void 0,a),n=go(),null===e||Bi?(Qn&&n&&Yn(t),t.flags|=1,Ui(e,t,r,a),t.child):(vo(e,t,a),pl(e,t,a))}function Ji(e,t,r,n,a,o){return Cl(t),t.updateQueue=null,r=mo(t,n,r,a),fo(e),n=go(),null===e||Bi?(Qn&&n&&Yn(t),t.flags|=1,Ui(e,t,r,o),t.child):(vo(e,t,o),pl(e,t,o))}function el(e,t,r,n,a){if(Cl(t),null===t.stateNode){var o=Ln,i=r.contextType;"object"===typeof i&&null!==i&&(o=El(i)),o=new r(n,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=Ni,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=n,o.state=t.memoizedState,o.refs={},_l(t),i=r.contextType,o.context="object"===typeof i&&null!==i?El(i):Ln,o.state=t.memoizedState,"function"===typeof(i=r.getDerivedStateFromProps)&&(_i(t,r,i,n),o.state=t.memoizedState),"function"===typeof r.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&Ni.enqueueReplaceState(o,o.state,null),Dl(t,n,o,a),Fl(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),n=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=Oi(r,l);o.props=s;var c=o.context,u=r.contextType;i=Ln,"object"===typeof u&&null!==u&&(i=El(u));var d=r.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==i)&&Li(t,o,n,i),Tl=!1;var p=t.memoizedState;o.state=p,Dl(t,n,o,a),Fl(),c=t.memoizedState,l||p!==c||Tl?("function"===typeof d&&(_i(t,r,d,n),c=t.memoizedState),(s=Tl||Pi(t,r,s,n,p,c,i))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),o.props=n,o.state=c,o.context=i,n=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Nl(e,t),u=Oi(r,i=t.memoizedProps),o.props=u,d=t.pendingProps,p=o.context,c=r.contextType,s=Ln,"object"===typeof c&&null!==c&&(s=El(c)),(c="function"===typeof(l=r.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||p!==s)&&Li(t,o,n,s),Tl=!1,p=t.memoizedState,o.state=p,Dl(t,n,o,a),Fl();var f=t.memoizedState;i!==d||p!==f||Tl||null!==e&&null!==e.dependencies&&Sl(e.dependencies)?("function"===typeof l&&(_i(t,r,l,n),f=t.memoizedState),(u=Tl||Pi(t,r,u,n,p,f,s)||null!==e&&null!==e.dependencies&&Sl(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(n,f,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(n,f,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=f),o.props=n,o.state=f,o.context=s,n=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Gi(e,t),n=0!==(128&t.flags),o||n?(o=t.stateNode,r=n&&"function"!==typeof r.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&n?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,r,a)):Ui(e,t,r,a),t.memoizedState=o.state,e=t.child):e=pl(e,t,a),e}function tl(e,t,r,n){return aa(),t.flags|=256,Ui(e,t,r,n),t.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function nl(e){return{baseLanes:e,cachePool:Ga()}}function al(e,t,r){return e=null!==e?e.childLanes&~r:0,t&&(e|=mc),e}function ol(e,t,r){var n,a=t.pendingProps,o=!1,l=0!==(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!==(2&Aa.current)),n&&(o=!0,t.flags&=-129),n=0!==(32&t.flags),t.flags&=-33,null===e){if(Qn){if(o?Na(t):La(),Qn){var s,c=Kn;if(s=c){e:{for(s=c,c=Zn;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=ld(s.nextSibling))){c=null;break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Vn?{id:Hn,overflow:Wn}:null,retryLane:536870912},(s=Rs(18,null,null,0)).stateNode=c,s.return=t,t.child=s,Xn=t,Kn=null,s=!0):s=!1}s||ea(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return"$!"===c.data?t.lanes=16:t.lanes=536870912,null;Oa(t)}return c=a.children,a=a.fallback,o?(La(),c=ll({mode:"hidden",children:c},o=t.mode),a=$s(a,o,r,null),c.return=t,a.return=t,c.sibling=a,t.child=c,(o=t.child).memoizedState=nl(r),o.childLanes=al(e,n,r),t.memoizedState=rl,a):(Na(t),il(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(l)256&t.flags?(Na(t),t.flags&=-257,t=sl(e,t,r)):null!==t.memoizedState?(La(),t.child=e.child,t.flags|=128,t=null):(La(),o=a.fallback,c=t.mode,a=ll({mode:"visible",children:a.children},c),(o=$s(o,c,r,null)).flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,wa(t,e.child,null,r),(a=t.child).memoizedState=nl(r),a.childLanes=al(e,n,r),t.memoizedState=rl,t=o);else if(Na(t),"$!"===c.data){if(n=c.nextSibling&&c.nextSibling.dataset)var u=n.dgst;n=u,(a=Error(i(419))).stack="",a.digest=n,oa({value:a,source:null,stack:null}),t=sl(e,t,r)}else if(Bi||kl(e,t,r,!1),n=0!==(r&e.childLanes),Bi||n){if(null!==(n=tc)){if(0!==(42&(a=r&-r)))a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(0!==(a=0!==(a&(n.suspendedLanes|r))?0:a)&&a!==s.retryLane)throw s.retryLane=a,_n(e,a),Lc(n,e,a),Wi}"$?"===c.data||Bc(),t=sl(e,t,r)}else"$?"===c.data?(t.flags|=128,t.child=e.child,t=lu.bind(null,e),c._reactRetry=t,t=null):(e=s.treeContext,Kn=ld(c.nextSibling),Xn=t,Qn=!0,Gn=null,Zn=!1,null!==e&&(In[$n++]=Hn,In[$n++]=Wn,In[$n++]=Vn,Hn=e.id,Wn=e.overflow,Vn=t),(t=il(t,a.children)).flags|=4096);return t}return o?(La(),o=a.fallback,c=t.mode,u=(s=e.child).sibling,(a=Ds(s,{mode:"hidden",children:a.children})).subtreeFlags=31457280&s.subtreeFlags,null!==u?o=Ds(u,o):(o=$s(o,c,r,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,null===(c=e.child.memoizedState)?c=nl(r):(null!==(s=c.cachePool)?(u=Ia._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=Ga(),c={baseLanes:c.baseLanes|r,cachePool:s}),o.memoizedState=c,o.childLanes=al(e,n,r),t.memoizedState=rl,a):(Na(t),e=(r=e.child).sibling,(r=Ds(r,{mode:"visible",children:a.children})).return=t,r.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r)}function il(e,t){return(t=ll({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ll(e,t){return Vs(e,t,0,null)}function sl(e,t,r){return wa(t,e.child,null,r),(e=il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function cl(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),xl(e.return,t,r)}function ul(e,t,r,n,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function dl(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(Ui(e,t,n.children,r),0!==(2&(n=Aa.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&cl(e,r,t);else if(19===e.tag)cl(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(X(Aa,n),a){case"forwards":for(r=t.child,a=null;null!==r;)null!==(e=r.alternate)&&null===Ra(e)&&(a=r),r=r.sibling;null===(r=a)?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),ul(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Ra(e)){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}ul(t,!0,r,null,o);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pl(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),dc|=t.lanes,0===(r&t.childLanes)){if(null===e)return null;if(kl(e,t,r,!1),0===(r&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(r=Ds(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Ds(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function fl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Sl(e))}function ml(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps)Bi=!0;else{if(!fl(e,r)&&0===(128&t.flags))return Bi=!1,function(e,t,r){switch(t.tag){case 3:J(t,t.stateNode.containerInfo),bl(t,Ia,e.memoizedState.cache),aa();break;case 27:case 5:te(t);break;case 4:J(t,t.stateNode.containerInfo);break;case 10:bl(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(null!==n)return null!==n.dehydrated?(Na(t),t.flags|=128,null):0!==(r&t.child.childLanes)?ol(e,t,r):(Na(t),null!==(e=pl(e,t,r))?e.sibling:null);Na(t);break;case 19:var a=0!==(128&e.flags);if((n=0!==(r&t.childLanes))||(kl(e,t,r,!1),n=0!==(r&t.childLanes)),a){if(n)return dl(e,t,r);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),X(Aa,Aa.current),n)break;return null;case 22:case 23:return t.lanes=0,Ki(e,t,r);case 24:bl(t,Ia,e.memoizedState.cache)}return pl(e,t,r)}(e,t,r);Bi=0!==(131072&e.flags)}else Bi=!1,Qn&&0!==(1048576&t.flags)&&Un(t,Mn,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,a=n._init;if(n=a(n._payload),t.type=n,"function"!==typeof n){if(void 0!==n&&null!==n){if((a=n.$$typeof)===v){t.tag=11,t=Yi(null,t,n,e,r);break e}if(a===x){t.tag=14,t=qi(null,t,n,e,r);break e}}throw t=j(n)||n,Error(i(306,t,""))}Fs(n)?(e=Oi(n,e),t.tag=1,t=el(null,t,n,e,r)):(t.tag=0,t=Zi(null,t,n,e,r))}return t;case 0:return Zi(e,t,t.type,t.pendingProps,r);case 1:return el(e,t,n=t.type,a=Oi(n,t.pendingProps),r);case 3:e:{if(J(t,t.stateNode.containerInfo),null===e)throw Error(i(387));var o=t.pendingProps;n=(a=t.memoizedState).element,Nl(e,t),Dl(t,o,null,r);var l=t.memoizedState;if(o=l.cache,bl(t,Ia,o),o!==a.cache&&wl(t,[Ia],r,!0),Fl(),o=l.element,a.isDehydrated){if(a={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=tl(e,t,o,r);break e}if(o!==n){oa(n=An(Error(i(424)),t)),t=tl(e,t,o,r);break e}for(Kn=ld(t.stateNode.containerInfo.firstChild),Xn=t,Qn=!0,Gn=null,Zn=!0,r=ka(t,null,o,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(aa(),o===n){t=pl(e,t,r);break e}Ui(e,t,o,r)}t=t.child}return t;case 26:return Gi(e,t),null===e?(r=gd(t.type,null,t.pendingProps,null))?t.memoizedState=r:Qn||(r=t.type,e=t.pendingProps,(n=Ku(G.current).createElement(r))[Me]=t,n[Ie]=e,Yu(n,r,e),Ge(n),t.stateNode=n):t.memoizedState=gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return te(t),null===e&&Qn&&(n=t.stateNode=cd(t.type,t.pendingProps,G.current),Xn=t,Zn=!0,Kn=ld(n.firstChild)),n=t.pendingProps.children,null!==e||Qn?Ui(e,t,n,r):t.child=wa(t,null,n,r),Gi(e,t),t.child;case 5:return null===e&&Qn&&((a=n=Kn)&&(null!==(n=function(e,t,r,n){for(;1===e.nodeType;){var a=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(n){if(!e[Ue])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=ld(e.nextSibling)))break}return null}(n,t.type,t.pendingProps,Zn))?(t.stateNode=n,Xn=t,Kn=ld(n.firstChild),Zn=!1,a=!0):a=!1),a||ea(t)),te(t),a=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,n=o.children,Zu(a,o)?n=null:null!==l&&Zu(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=po(e,t,ho,null,null,r),Fd._currentValue=a),Gi(e,t),Ui(e,t,n,r),t.child;case 6:return null===e&&Qn&&((e=r=Kn)&&(null!==(r=function(e,t,r){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!r)return null;if(null===(e=ld(e.nextSibling)))return null}return e}(r,t.pendingProps,Zn))?(t.stateNode=r,Xn=t,Kn=null,e=!0):e=!1),e||ea(t)),null;case 13:return ol(e,t,r);case 4:return J(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=wa(t,null,n,r):Ui(e,t,n,r),t.child;case 11:return Yi(e,t,t.type,t.pendingProps,r);case 7:return Ui(e,t,t.pendingProps,r),t.child;case 8:case 12:return Ui(e,t,t.pendingProps.children,r),t.child;case 10:return n=t.pendingProps,bl(t,t.type,n.value),Ui(e,t,n.children,r),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,Cl(t),n=n(a=El(a)),t.flags|=1,Ui(e,t,n,r),t.child;case 14:return qi(e,t,t.type,t.pendingProps,r);case 15:return Xi(e,t,t.type,t.pendingProps,r);case 19:return dl(e,t,r);case 22:return Ki(e,t,r);case 24:return Cl(t),n=El(Ia),null===e?(null===(a=Ka())&&(a=tc,o=$a(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=r),a=o),t.memoizedState={parent:n,cache:a},_l(t),bl(t,Ia,a)):(0!==(e.lanes&r)&&(Nl(e,t),Dl(t,null,null,r),Fl()),a=e.memoizedState,o=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),bl(t,Ia,n)):(n=o.cache,bl(t,Ia,n),n!==a.cache&&wl(t,[Ia],r,!0))),Ui(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}var hl=Y(null),gl=null,vl=null;function bl(e,t,r){X(hl,t._currentValue),t._currentValue=r}function yl(e){e._currentValue=hl.current,q(hl)}function xl(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function wl(e,t,r,n){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var l=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=r,null!==(s=o.alternate)&&(s.lanes|=r),xl(o.return,r,e),n||(l=null);break e}o=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=r,null!==(o=l.alternate)&&(o.lanes|=r),xl(l,r,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function kl(e,t,r,n){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=a.type;qr(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===Z.current){if(null===(l=a.alternate))throw Error(i(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Fd):e=[Fd])}a=a.return}null!==e&&wl(t,e,r,n),t.flags|=262144}function Sl(e){for(e=e.firstContext;null!==e;){if(!qr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cl(e){gl=e,vl=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function El(e){return jl(gl,e)}function zl(e,t){return null===gl&&Cl(e),jl(e,t)}function jl(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},null===vl){if(null===e)throw Error(i(308));vl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vl=vl.next=t;return r}var Tl=!1;function _l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ll(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&ec)){var a=n.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=Pn(e),Nn(e,null,r),t}return jn(e,n,t,r),Pn(e)}function Ol(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194176&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,Ae(e,r)}}function Al(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var a=null,o=null;if(null!==(r=r.firstBaseUpdate)){do{var i={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};null===o?a=o=i:o=o.next=i,r=r.next}while(null!==r);null===o?a=o=t:o=o.next=t}else a=o=t;return r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var Rl=!1;function Fl(){if(Rl){if(null!==Ua)throw Ua}}function Dl(e,t,r,n){Rl=!1;var a=e.updateQueue;Tl=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,u=c=s=null,l=o;;){var p=-536870913&l.lane,f=p!==l.lane;if(f?(nc&p)===p:(n&p)===p){0!==p&&p===Ba&&(Rl=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var m=e,h=l;p=t;var g=r;switch(h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(g,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=h.payload)?m.call(g,d,p):m)||void 0===p)break e;d=P({},d,p);break e;case 2:Tl=!0}}null!==(p=l.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=a.callbacks)?a.callbacks=[p]:f.push(p))}else f={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,i|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===o&&(a.shared.lanes=0),dc|=i,e.lanes=i,e.memoizedState=d}}function Ml(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function Il(e,t){var r=e.callbacks;if(null!==r)for(e.callbacks=null,e=0;e<r.length;e++)Ml(r[e],t)}function $l(e,t){try{var r=t.updateQueue,n=null!==r?r.lastEffect:null;if(null!==n){var a=n.next;r=a;do{if((r.tag&e)===e){n=void 0;var o=r.create,i=r.inst;n=o(),i.destroy=n}r=r.next}while(r!==a)}}catch(l){nu(t,t.return,l)}}function Vl(e,t,r){try{var n=t.updateQueue,a=null!==n?n.lastEffect:null;if(null!==a){var o=a.next;n=o;do{if((n.tag&e)===e){var i=n.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,a=t;var s=r;try{l()}catch(c){nu(a,s,c)}}}n=n.next}while(n!==o)}}catch(c){nu(t,t.return,c)}}function Hl(e){var t=e.updateQueue;if(null!==t){var r=e.stateNode;try{Il(t,r)}catch(n){nu(e,e.return,n)}}}function Wl(e,t,r){r.props=Oi(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(n){nu(e,t,n)}}function Bl(e,t){try{var r=e.ref;if(null!==r){var n=e.stateNode;switch(e.tag){case 26:case 27:case 5:var a=n;break;default:a=n}"function"===typeof r?e.refCleanup=r(a):r.current=a}}catch(o){nu(e,t,o)}}function Ul(e,t){var r=e.ref,n=e.refCleanup;if(null!==r)if("function"===typeof n)try{n()}catch(a){nu(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof r)try{r(null)}catch(o){nu(e,t,o)}else r.current=null}function Yl(e){var t=e.type,r=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus();break e;case"img":r.src?n.src=r.src:r.srcSet&&(n.srcset=r.srcSet)}}catch(a){nu(e,e.return,a)}}function ql(e,t,r){try{var n=e.stateNode;!function(e,t,r,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,l=null,s=null,c=null,u=null,d=null;for(m in r){var p=r[m];if(r.hasOwnProperty(m)&&null!=p)switch(m){case"checked":case"value":break;case"defaultValue":c=p;default:n.hasOwnProperty(m)||Bu(e,t,m,null,n,p)}}for(var f in n){var m=n[f];if(p=r[f],n.hasOwnProperty(f)&&(null!=m||null!=p))switch(f){case"type":o=m;break;case"name":a=m;break;case"checked":u=m;break;case"defaultChecked":d=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(i(137,t));break;default:m!==p&&Bu(e,t,f,m,n,p)}}return void gt(e,l,s,c,u,d,o,a);case"select":for(o in m=l=s=f=null,r)if(c=r[o],r.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":m=c;default:n.hasOwnProperty(o)||Bu(e,t,o,null,n,c)}for(a in n)if(o=n[a],c=r[a],n.hasOwnProperty(a)&&(null!=o||null!=c))switch(a){case"value":f=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&Bu(e,t,a,o,n,c)}return t=s,r=l,n=m,void(null!=f?yt(e,!!r,f,!1):!!n!==!!r&&(null!=t?yt(e,!!r,t,!0):yt(e,!!r,r?[]:"",!1)));case"textarea":for(s in m=f=null,r)if(a=r[s],r.hasOwnProperty(s)&&null!=a&&!n.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Bu(e,t,s,null,n,a)}for(l in n)if(a=n[l],o=r[l],n.hasOwnProperty(l)&&(null!=a||null!=o))switch(l){case"value":f=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(i(91));break;default:a!==o&&Bu(e,t,l,a,n,o)}return void xt(e,f,m);case"option":for(var h in r)if(f=r[h],r.hasOwnProperty(h)&&null!=f&&!n.hasOwnProperty(h))if("selected"===h)e.selected=!1;else Bu(e,t,h,null,n,f);for(c in n)if(f=n[c],m=r[c],n.hasOwnProperty(c)&&f!==m&&(null!=f||null!=m))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else Bu(e,t,c,f,n,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in r)f=r[g],r.hasOwnProperty(g)&&null!=f&&!n.hasOwnProperty(g)&&Bu(e,t,g,null,n,f);for(u in n)if(f=n[u],m=r[u],n.hasOwnProperty(u)&&f!==m&&(null!=f||null!=m))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(i(137,t));break;default:Bu(e,t,u,f,n,m)}return;default:if(zt(t)){for(var v in r)f=r[v],r.hasOwnProperty(v)&&void 0!==f&&!n.hasOwnProperty(v)&&Uu(e,t,v,void 0,n,f);for(d in n)f=n[d],m=r[d],!n.hasOwnProperty(d)||f===m||void 0===f&&void 0===m||Uu(e,t,d,f,n,m);return}}for(var b in r)f=r[b],r.hasOwnProperty(b)&&null!=f&&!n.hasOwnProperty(b)&&Bu(e,t,b,null,n,f);for(p in n)f=n[p],m=r[p],!n.hasOwnProperty(p)||f===m||null==f&&null==m||Bu(e,t,p,f,n,m)}(n,e.type,r,t),n[Ie]=t}catch(a){nu(e,e.return,a)}}function Xl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function Kl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Xl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Ql(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Wu));else if(4!==n&&27!==n&&null!==(e=e.child))for(Ql(e,t,r),e=e.sibling;null!==e;)Ql(e,t,r),e=e.sibling}function Gl(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&27!==n&&null!==(e=e.child))for(Gl(e,t,r),e=e.sibling;null!==e;)Gl(e,t,r),e=e.sibling}var Zl=!1,Jl=!1,es=!1,ts="function"===typeof WeakSet?WeakSet:Set,rs=null,ns=!1;function as(e,t,r){var n=r.flags;switch(r.tag){case 0:case 11:case 15:vs(e,r),4&n&&$l(5,r);break;case 1:if(vs(e,r),4&n)if(e=r.stateNode,null===t)try{e.componentDidMount()}catch(l){nu(r,r.return,l)}else{var a=Oi(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){nu(r,r.return,s)}}64&n&&Hl(r),512&n&&Bl(r,r.return);break;case 3:if(vs(e,r),64&n&&null!==(n=r.updateQueue)){if(e=null,null!==r.child)switch(r.child.tag){case 27:case 5:case 1:e=r.child.stateNode}try{Il(n,e)}catch(l){nu(r,r.return,l)}}break;case 26:vs(e,r),512&n&&Bl(r,r.return);break;case 27:case 5:vs(e,r),null===t&&4&n&&Yl(r),512&n&&Bl(r,r.return);break;case 12:default:vs(e,r);break;case 13:vs(e,r),4&n&&us(e,r);break;case 22:if(!(a=null!==r.memoizedState||Zl)){t=null!==t&&null!==t.memoizedState||Jl;var o=Zl,i=Jl;Zl=a,(Jl=t)&&!i?ys(e,r,0!==(8772&r.subtreeFlags)):vs(e,r),Zl=o,Jl=i}512&n&&("manual"===r.memoizedProps.mode?Bl(r,r.return):Ul(r,r.return))}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ye(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var is=null,ls=!1;function ss(e,t,r){for(r=r.child;null!==r;)cs(e,t,r),r=r.sibling}function cs(e,t,r){if(be&&"function"===typeof be.onCommitFiberUnmount)try{be.onCommitFiberUnmount(ve,r)}catch(i){}switch(r.tag){case 26:Jl||Ul(r,t),ss(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode).parentNode.removeChild(r);break;case 27:Jl||Ul(r,t);var n=is,a=ls;for(is=r.stateNode,ss(e,t,r),t=(r=r.stateNode).attributes;t.length;)r.removeAttributeNode(t[0]);Ye(r),is=n,ls=a;break;case 5:Jl||Ul(r,t);case 6:a=is;var o=ls;if(is=null,ss(e,t,r),ls=o,null!==(is=a))if(ls)try{e=is,n=r.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)}catch(l){nu(r,t,l)}else try{is.removeChild(r.stateNode)}catch(l){nu(r,t,l)}break;case 18:null!==is&&(ls?(t=is,r=r.stateNode,8===t.nodeType?od(t.parentNode,r):1===t.nodeType&&od(t,r),hp(t)):od(is,r.stateNode));break;case 4:n=is,a=ls,is=r.stateNode.containerInfo,ls=!0,ss(e,t,r),is=n,ls=a;break;case 0:case 11:case 14:case 15:Jl||Vl(2,r,t),Jl||Vl(4,r,t),ss(e,t,r);break;case 1:Jl||(Ul(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount&&Wl(r,t,n)),ss(e,t,r);break;case 21:ss(e,t,r);break;case 22:Jl||Ul(r,t),Jl=(n=Jl)||null!==r.memoizedState,ss(e,t,r),Jl=n;break;default:ss(e,t,r)}}function us(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{hp(e)}catch(r){nu(t,t.return,r)}}function ds(e,t){var r=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new ts),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ts),t;default:throw Error(i(435,e.tag))}}(e);t.forEach((function(t){var n=su.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}function ps(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var a=r[n],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:case 5:is=s.stateNode,ls=!1;break e;case 3:case 4:is=s.stateNode.containerInfo,ls=!0;break e}s=s.return}if(null===is)throw Error(i(160));cs(o,l,a),is=null,ls=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}var fs=null;function ms(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ps(t,e),hs(e),4&n&&(Vl(3,e,e.return),$l(3,e),Vl(5,e,e.return));break;case 1:ps(t,e),hs(e),512&n&&(Jl||null===r||Ul(r,r.return)),64&n&&Zl&&(null!==(e=e.updateQueue)&&(null!==(n=e.callbacks)&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===r?n:r.concat(n))));break;case 26:var a=fs;if(ps(t,e),hs(e),512&n&&(Jl||null===r||Ul(r,r.return)),4&n){var o=null!==r?r.memoizedState:null;if(n=e.memoizedState,null===r)if(null===n)if(null===e.stateNode){e:{n=e.type,r=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":(!(o=a.getElementsByTagName("title")[0])||o[Ue]||o[Me]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(n),a.head.insertBefore(o,a.querySelector("head > title"))),Yu(o,n,r),o[Me]=e,Ge(o),n=o;break e;case"link":var l=jd("link","href",a).get(n+(r.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==r.href?null:r.href)&&o.getAttribute("rel")===(null==r.rel?null:r.rel)&&o.getAttribute("title")===(null==r.title?null:r.title)&&o.getAttribute("crossorigin")===(null==r.crossOrigin?null:r.crossOrigin)){l.splice(s,1);break t}Yu(o=a.createElement(n),n,r),a.head.appendChild(o);break;case"meta":if(l=jd("meta","content",a).get(n+(r.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==r.content?null:""+r.content)&&o.getAttribute("name")===(null==r.name?null:r.name)&&o.getAttribute("property")===(null==r.property?null:r.property)&&o.getAttribute("http-equiv")===(null==r.httpEquiv?null:r.httpEquiv)&&o.getAttribute("charset")===(null==r.charSet?null:r.charSet)){l.splice(s,1);break t}Yu(o=a.createElement(n),n,r),a.head.appendChild(o);break;default:throw Error(i(468,n))}o[Me]=e,Ge(o),n=o}e.stateNode=n}else Td(a,e.type,e.stateNode);else e.stateNode=kd(a,n,e.memoizedProps);else o!==n?(null===o?null!==r.stateNode&&(r=r.stateNode).parentNode.removeChild(r):o.count--,null===n?Td(a,e.type,e.stateNode):kd(a,n,e.memoizedProps)):null===n&&null!==e.stateNode&&ql(e,e.memoizedProps,r.memoizedProps)}break;case 27:if(4&n&&null===e.alternate){a=e.stateNode,o=e.memoizedProps;try{for(var c=a.firstChild;c;){var u=c.nextSibling,d=c.nodeName;c[Ue]||"HEAD"===d||"BODY"===d||"SCRIPT"===d||"STYLE"===d||"LINK"===d&&"stylesheet"===c.rel.toLowerCase()||a.removeChild(c),c=u}for(var p=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Yu(a,p,o),a[Me]=e,a[Ie]=o}catch(h){nu(e,e.return,h)}}case 5:if(ps(t,e),hs(e),512&n&&(Jl||null===r||Ul(r,r.return)),32&e.flags){a=e.stateNode;try{kt(a,"")}catch(h){nu(e,e.return,h)}}4&n&&null!=e.stateNode&&ql(e,a=e.memoizedProps,null!==r?r.memoizedProps:a),1024&n&&(es=!0);break;case 6:if(ps(t,e),hs(e),4&n){if(null===e.stateNode)throw Error(i(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n}catch(h){nu(e,e.return,h)}}break;case 3:if(zd=null,a=fs,fs=pd(t.containerInfo),ps(t,e),fs=a,hs(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{hp(t.containerInfo)}catch(h){nu(e,e.return,h)}es&&(es=!1,gs(e));break;case 4:n=fs,fs=pd(e.stateNode.containerInfo),ps(t,e),hs(e),fs=n;break;case 12:ps(t,e),hs(e);break;case 13:ps(t,e),hs(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==r&&null!==r.memoizedState)&&(yc=se()),4&n&&(null!==(n=e.updateQueue)&&(e.updateQueue=null,ds(e,n)));break;case 22:if(512&n&&(Jl||null===r||Ul(r,r.return)),c=null!==e.memoizedState,u=null!==r&&null!==r.memoizedState,Zl=(d=Zl)||c,Jl=(p=Jl)||u,ps(t,e),Jl=p,Zl=d,hs(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&n&&(t._visibility=c?-2&t._visibility:1|t._visibility,c&&(t=Zl||Jl,null===r||u||t||bs(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(r=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===r){u=r=t;try{if(a=u.stateNode,c)"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none";else{l=u.stateNode;var m=void 0!==(s=u.memoizedProps.style)&&null!==s&&s.hasOwnProperty("display")?s.display:null;l.style.display=null==m||"boolean"===typeof m?"":(""+m).trim()}}catch(h){nu(u,u.return,h)}}}else if(6===t.tag){if(null===r){u=t;try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(h){nu(u,u.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}4&n&&(null!==(n=e.updateQueue)&&(null!==(r=n.retryQueue)&&(n.retryQueue=null,ds(e,r))));break;case 19:ps(t,e),hs(e),4&n&&(null!==(n=e.updateQueue)&&(e.updateQueue=null,ds(e,n)));break;case 21:break;default:ps(t,e),hs(e)}}function hs(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var r=e.return;null!==r;){if(Xl(r)){var n=r;break e}r=r.return}throw Error(i(160))}switch(n.tag){case 27:var a=n.stateNode;Gl(e,Kl(e),a);break;case 5:var o=n.stateNode;32&n.flags&&(kt(o,""),n.flags&=-33),Gl(e,Kl(e),o);break;case 3:case 4:var l=n.stateNode.containerInfo;Ql(e,Kl(e),l);break;default:throw Error(i(161))}}}catch(s){nu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;gs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function vs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)as(e,t.alternate,t),t=t.sibling}function bs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vl(4,t,t.return),bs(t);break;case 1:Ul(t,t.return);var r=t.stateNode;"function"===typeof r.componentWillUnmount&&Wl(t,t.return,r),bs(t);break;case 26:case 27:case 5:Ul(t,t.return),bs(t);break;case 22:Ul(t,t.return),null===t.memoizedState&&bs(t);break;default:bs(t)}e=e.sibling}}function ys(e,t,r){for(r=r&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var n=t.alternate,a=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:ys(a,o,r),$l(4,o);break;case 1:if(ys(a,o,r),"function"===typeof(a=(n=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){nu(n,n.return,c)}if(null!==(a=(n=o).updateQueue)){var l=n.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Ml(s[a],l)}catch(c){nu(n,n.return,c)}}r&&64&i&&Hl(o),Bl(o,o.return);break;case 26:case 27:case 5:ys(a,o,r),r&&null===n&&4&i&&Yl(o),Bl(o,o.return);break;case 12:default:ys(a,o,r);break;case 13:ys(a,o,r),r&&4&i&&us(a,o);break;case 22:null===o.memoizedState&&ys(a,o,r),Bl(o,o.return)}t=t.sibling}}function xs(e,t){var r=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==r&&(null!=e&&e.refCount++,null!=r&&Va(r))}function ws(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Va(e))}function ks(e,t,r,n){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ss(e,t,r,n),t=t.sibling}function Ss(e,t,r,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ks(e,t,r,n),2048&a&&$l(9,t);break;case 3:ks(e,t,r,n),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Va(e)));break;case 12:if(2048&a){ks(e,t,r,n),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){nu(t,t.return,s)}}else ks(e,t,r,n);break;case 23:break;case 22:o=t.stateNode,null!==t.memoizedState?4&o._visibility?ks(e,t,r,n):Es(e,t):4&o._visibility?ks(e,t,r,n):(o._visibility|=4,Cs(e,t,r,n,0!==(10256&t.subtreeFlags))),2048&a&&xs(t.alternate,t);break;case 24:ks(e,t,r,n),2048&a&&ws(t.alternate,t);break;default:ks(e,t,r,n)}}function Cs(e,t,r,n,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,i=t,l=r,s=n,c=i.flags;switch(i.tag){case 0:case 11:case 15:Cs(o,i,l,s,a),$l(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?4&u._visibility?Cs(o,i,l,s,a):Es(o,i):(u._visibility|=4,Cs(o,i,l,s,a)),a&&2048&c&&xs(i.alternate,i);break;case 24:Cs(o,i,l,s,a),a&&2048&c&&ws(i.alternate,i);break;default:Cs(o,i,l,s,a)}t=t.sibling}}function Es(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var r=e,n=t,a=n.flags;switch(n.tag){case 22:Es(r,n),2048&a&&xs(n.alternate,n);break;case 24:Es(r,n),2048&a&&ws(n.alternate,n);break;default:Es(r,n)}t=t.sibling}}var zs=8192;function js(e){if(e.subtreeFlags&zs)for(e=e.child;null!==e;)Ts(e),e=e.sibling}function Ts(e){switch(e.tag){case 26:js(e),e.flags&zs&&null!==e.memoizedState&&function(e,t,r){if(null===Nd)throw Error(i(475));var n=Nd;if("stylesheet"===t.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=vd(r.href),o=e.querySelector(bd(a));if(o)return null!==(e=o._p)&&"object"===typeof e&&"function"===typeof e.then&&(n.count++,n=Ld.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,void Ge(o);o=e.ownerDocument||e,r=yd(r),(a=ud.get(a))&&Cd(r,a),Ge(o=o.createElement("link"));var l=o;l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),Yu(o,"link",r),t.instance=o}null===n.stylesheets&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(n.count++,t=Ld.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}(fs,e.memoizedState,e.memoizedProps);break;case 5:default:js(e);break;case 3:case 4:var t=fs;fs=pd(e.stateNode.containerInfo),js(e),fs=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=zs,zs=16777216,js(e),zs=t):js(e))}}function _s(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ns(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r];rs=n,Os(n,e)}_s(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Ps(e),e=e.sibling}function Ps(e){switch(e.tag){case 0:case 11:case 15:Ns(e),2048&e.flags&&Vl(9,e,e.return);break;case 3:case 12:default:Ns(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,Ls(e)):Ns(e)}}function Ls(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r];rs=n,Os(n,e)}_s(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Vl(8,t,t.return),Ls(t);break;case 22:4&(r=t.stateNode)._visibility&&(r._visibility&=-5,Ls(t));break;default:Ls(t)}e=e.sibling}}function Os(e,t){for(;null!==rs;){var r=rs;switch(r.tag){case 0:case 11:case 15:Vl(8,r,t);break;case 23:case 22:if(null!==r.memoizedState&&null!==r.memoizedState.cachePool){var n=r.memoizedState.cachePool.pool;null!=n&&n.refCount++}break;case 24:Va(r.memoizedState.cache)}if(null!==(n=r.child))n.return=r,rs=n;else e:for(r=e;null!==rs;){var a=(n=rs).sibling,o=n.return;if(os(n),n===r){rs=null;break e}if(null!==a){a.return=o,rs=a;break e}rs=o}}}function As(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rs(e,t,r,n){return new As(e,t,r,n)}function Fs(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ds(e,t){var r=e.alternate;return null===r?((r=Rs(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=31457280&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Ms(e,t){e.flags&=31457282;var r=e.alternate;return null===r?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Is(e,t,r,n,a,o){var l=0;if(n=e,"function"===typeof e)Fs(e)&&(l=1);else if("string"===typeof e)l=function(e,t,r){if(1===r||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,r,K.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case d:return $s(r.children,a,o,t);case p:l=8,a|=24;break;case f:return(e=Rs(12,r,t,2|a)).elementType=f,e.lanes=o,e;case b:return(e=Rs(13,r,t,a)).elementType=b,e.lanes=o,e;case y:return(e=Rs(19,r,t,a)).elementType=y,e.lanes=o,e;case k:return Vs(r,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case m:case g:l=10;break e;case h:l=9;break e;case v:l=11;break e;case x:l=14;break e;case w:l=16,n=null;break e}l=29,r=Error(i(130,null===e?"null":typeof e,"")),n=null}return(t=Rs(l,r,t,a)).elementType=e,t.type=n,t.lanes=o,t}function $s(e,t,r,n){return(e=Rs(7,e,n,t)).lanes=r,e}function Vs(e,t,r,n){(e=Rs(22,e,n,t)).elementType=k,e.lanes=r;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=a._current;if(null===e)throw Error(i(456));if(0===(2&a._pendingVisibility)){var t=_n(e,2);null!==t&&(a._pendingVisibility|=2,Lc(t,e,2))}},attach:function(){var e=a._current;if(null===e)throw Error(i(456));if(0!==(2&a._pendingVisibility)){var t=_n(e,2);null!==t&&(a._pendingVisibility&=-3,Lc(t,e,2))}}};return e.stateNode=a,e}function Hs(e,t,r){return(e=Rs(6,e,null,t)).lanes=r,e}function Ws(e,t,r){return(t=Rs(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bs(e){e.flags|=4}function Us(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!_d(t)){if(null!==(t=Ta.current)&&((4194176&nc)===nc?null!==_a:(62914560&nc)!==nc&&0===(536870912&nc)||t!==_a))throw pa=sa,la;e.flags|=8192}}function Ys(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ne():536870912,e.lanes|=t,hc|=t)}function qs(e,t){if(!Qn)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Xs(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=31457280&a.subtreeFlags,n|=31457280&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Ks(e,t,r){var n=t.pendingProps;switch(qn(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Xs(t),null;case 3:return r=t.stateNode,n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),yl(Ia),ee(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(na(t)?Bs(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==Gn&&(Ac(Gn),Gn=null))),Xs(t),null;case 26:return r=t.memoizedState,null===e?(Bs(t),null!==r?(Xs(t),Us(t,r)):(Xs(t),t.flags&=-16777217)):r?r!==e.memoizedState?(Bs(t),Xs(t),Us(t,r)):(Xs(t),t.flags&=-16777217):(e.memoizedProps!==n&&Bs(t),Xs(t),t.flags&=-16777217),null;case 27:re(t),r=G.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==n&&Bs(t);else{if(!n){if(null===t.stateNode)throw Error(i(166));return Xs(t),null}e=K.current,na(t)?ta(t):(e=cd(a,n,r),t.stateNode=e,Bs(t))}return Xs(t),null;case 5:if(re(t),r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==n&&Bs(t);else{if(!n){if(null===t.stateNode)throw Error(i(166));return Xs(t),null}if(e=K.current,na(t))ta(t);else{switch(a=Ku(G.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof n.is?a.createElement("select",{is:n.is}):a.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e="string"===typeof n.is?a.createElement(r,{is:n.is}):a.createElement(r)}}e[Me]=t,e[Ie]=n;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(Yu(e,r,n),r){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Bs(t)}}return Xs(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==n&&Bs(t);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));if(e=G.current,na(t)){if(e=t.stateNode,r=t.memoizedProps,n=null,null!==(a=Xn))switch(a.tag){case 27:case 5:n=a.memoizedProps}e[Me]=t,(e=!!(e.nodeValue===r||null!==n&&!0===n.suppressHydrationWarning||Hu(e.nodeValue,r)))||ea(t)}else(e=Ku(e).createTextNode(n))[Me]=t,t.stateNode=e}return Xs(t),null;case 13:if(n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=na(t),null!==n&&null!==n.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[Me]=t}else aa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Xs(t),a=!1}else null!==Gn&&(Ac(Gn),Gn=null),a=!0;if(!a)return 256&t.flags?(Oa(t),t):(Oa(t),null)}if(Oa(t),0!==(128&t.flags))return t.lanes=r,t;if(r=null!==n,e=null!==e&&null!==e.memoizedState,r){a=null,null!==(n=t.child).alternate&&null!==n.alternate.memoizedState&&null!==n.alternate.memoizedState.cachePool&&(a=n.alternate.memoizedState.cachePool.pool);var o=null;null!==n.memoizedState&&null!==n.memoizedState.cachePool&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),Ys(t,t.updateQueue),Xs(t),null;case 4:return ee(),null===e&&Lu(t.stateNode.containerInfo),Xs(t),null;case 10:return yl(t.type),Xs(t),null;case 19:if(q(Aa),null===(a=t.memoizedState))return Xs(t),null;if(n=0!==(128&t.flags),null===(o=a.rendering))if(n)qs(a,!1);else{if(0!==uc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=Ra(e))){for(t.flags|=128,qs(a,!1),e=o.updateQueue,t.updateQueue=e,Ys(t,e),t.subtreeFlags=0,e=r,r=t.child;null!==r;)Ms(r,e),r=r.sibling;return X(Aa,1&Aa.current|2),t.child}e=e.sibling}null!==a.tail&&se()>xc&&(t.flags|=128,n=!0,qs(a,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=Ra(o))){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ys(t,e),qs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!Qn)return Xs(t),null}else 2*se()-a.renderingStartTime>xc&&536870912!==r&&(t.flags|=128,n=!0,qs(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=a.last)?e.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,e=Aa.current,X(Aa,n?1&e|2:1&e),t):(Xs(t),null);case 22:case 23:return Oa(t),ja(),n=null!==t.memoizedState,null!==e?null!==e.memoizedState!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?0!==(536870912&r)&&0===(128&t.flags)&&(Xs(t),6&t.subtreeFlags&&(t.flags|=8192)):Xs(t),null!==(r=t.updateQueue)&&Ys(t,r.retryQueue),r=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),n=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(n=t.memoizedState.cachePool.pool),n!==r&&(t.flags|=2048),null!==e&&q(Xa),null;case 24:return r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),yl(Ia),Xs(t),null;case 25:return null}throw Error(i(156,t.tag))}function Qs(e,t){switch(qn(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return yl(Ia),ee(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return re(t),null;case 13:if(Oa(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));aa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return q(Aa),null;case 4:return ee(),null;case 10:return yl(t.type),null;case 22:case 23:return Oa(t),ja(),null!==e&&q(Xa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return yl(Ia),null;default:return null}}function Gs(e,t){switch(qn(t),t.tag){case 3:yl(Ia),ee();break;case 26:case 27:case 5:re(t);break;case 4:ee();break;case 13:Oa(t);break;case 19:q(Aa);break;case 10:yl(t.type);break;case 22:case 23:Oa(t),ja(),null!==e&&q(Xa);break;case 24:yl(Ia)}}var Zs={getCacheForType:function(e){var t=El(Ia),r=t.data.get(e);return void 0===r&&(r=e(),t.data.set(e,r)),r}},Js="function"===typeof WeakMap?WeakMap:Map,ec=0,tc=null,rc=null,nc=0,ac=0,oc=null,ic=!1,lc=!1,sc=!1,cc=0,uc=0,dc=0,pc=0,fc=0,mc=0,hc=0,gc=null,vc=null,bc=!1,yc=0,xc=1/0,wc=null,kc=null,Sc=!1,Cc=null,Ec=0,zc=0,jc=null,Tc=0,_c=null;function Nc(){if(0!==(2&ec)&&0!==nc)return nc&-nc;if(null!==N.T){return 0!==Ba?Ba:wu()}return Fe()}function Pc(){0===mc&&(mc=0===(536870912&nc)||Qn?_e():536870912);var e=Ta.current;return null!==e&&(e.flags|=32),mc}function Lc(e,t,r){(e===tc&&2===ac||null!==e.cancelPendingCommit)&&($c(e,0),Dc(e,nc,mc,!1)),Le(e,r),0!==(2&ec)&&e===tc||(e===tc&&(0===(2&ec)&&(pc|=r),4===uc&&Dc(e,nc,mc,!1)),hu(e))}function Oc(e,t,r){if(0!==(6&ec))throw Error(i(327));for(var n=!r&&0===(60&t)&&0===(t&e.expiredLanes)||je(e,t),a=n?function(e,t){var r=ec;ec|=2;var n=Hc(),a=Wc();tc!==e||nc!==t?(wc=null,xc=se()+500,$c(e,t)):lc=je(e,t);e:for(;;)try{if(0!==ac&&null!==rc){t=rc;var o=oc;t:switch(ac){case 1:ac=0,oc=null,Qc(e,t,o,1);break;case 2:if(ca(o)){ac=0,oc=null,Kc(t);break}t=function(){2===ac&&tc===e&&(ac=7),hu(e)},o.then(t,t);break e;case 3:ac=7;break e;case 4:ac=5;break e;case 7:ca(o)?(ac=0,oc=null,Kc(t)):(ac=0,oc=null,Qc(e,t,o,7));break;case 5:var l=null;switch(rc.tag){case 26:l=rc.memoizedState;case 5:case 27:var s=rc;if(!l||_d(l)){ac=0,oc=null;var c=s.sibling;if(null!==c)rc=c;else{var u=s.return;null!==u?(rc=u,Gc(u)):rc=null}break t}}ac=0,oc=null,Qc(e,t,o,5);break;case 6:ac=0,oc=null,Qc(e,t,o,6);break;case 8:Ic(),uc=6;break e;default:throw Error(i(462))}}qc();break}catch(d){Vc(e,d)}return vl=gl=null,N.H=n,N.A=a,ec=r,null!==rc?0:(tc=null,nc=0,zn(),uc)}(e,t):Uc(e,t,!0),o=n;;){if(0===a){lc&&!n&&Dc(e,t,0,!1);break}if(6===a)Dc(e,t,0,!ic);else{if(r=e.current.alternate,o&&!Fc(r)){a=Uc(e,t,!1),o=!1;continue}if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=gc;var c=s.current.memoizedState.isDehydrated;if(c&&($c(s,l).flags|=256),2!==(l=Uc(s,l,!1))){if(sc&&!c){s.errorRecoveryDisabledLanes|=o,pc|=o,a=4;break e}o=vc,vc=a,null!==o&&Ac(o)}a=l}if(o=!1,2!==a)continue}}if(1===a){$c(e,0),Dc(e,t,0,!0);break}e:{switch(n=e,a){case 0:case 1:throw Error(i(345));case 4:if((4194176&t)===t){Dc(n,t,mc,!ic);break e}break;case 2:vc=null;break;case 3:case 5:break;default:throw Error(i(329))}if(n.finishedWork=r,n.finishedLanes=t,(62914560&t)===t&&10<(o=yc+300-se())){if(Dc(n,t,mc,!ic),0!==ze(n,0))break e;n.timeoutHandle=ed(Rc.bind(null,n,r,vc,wc,bc,t,mc,pc,hc,ic,2,-0,0),o)}else Rc(n,r,vc,wc,bc,t,mc,pc,hc,ic,0,-0,0)}}break}hu(e)}function Ac(e){null===vc?vc=e:vc.push.apply(vc,e)}function Rc(e,t,r,n,a,o,l,s,c,u,d,p,f){var m=t.subtreeFlags;if((8192&m||16785408===(16785408&m))&&(Nd={stylesheets:null,count:0,unsuspend:Pd},Ts(t),null!==(t=function(){if(null===Nd)throw Error(i(475));var e=Nd;return e.stylesheets&&0===e.count&&Ad(e,e.stylesheets),0<e.count?function(t){var r=setTimeout((function(){if(e.stylesheets&&Ad(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}())))return e.cancelPendingCommit=t(Jc.bind(null,e,r,n,a,l,s,c,1,p,f)),void Dc(e,o,l,!u);Jc(e,r,n,a,l,s,c,d,p,f)}function Fc(e){for(var t=e;;){var r=t.tag;if((0===r||11===r||15===r)&&16384&t.flags&&(null!==(r=t.updateQueue)&&null!==(r=r.stores)))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!qr(o(),a))return!1}catch(i){return!1}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dc(e,t,r,n){t&=~fc,t&=~pc,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var o=31-xe(a),i=1<<o;n[o]=-1,a&=~i}0!==r&&Oe(e,r,t)}function Mc(){return 0!==(6&ec)||(gu(0,!1),!1)}function Ic(){if(null!==rc){if(0===ac)var e=rc.return;else vl=gl=null,bo(e=rc),ma=null,ha=0,e=rc;for(;null!==e;)Gs(e.alternate,e),e=e.return;rc=null}}function $c(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;-1!==r&&(e.timeoutHandle=-1,td(r)),null!==(r=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,r()),Ic(),tc=e,rc=r=Ds(e.current,null),nc=t,ac=0,oc=null,ic=!1,lc=je(e,t),sc=!1,hc=mc=fc=pc=dc=uc=0,vc=gc=null,bc=!1,0!==(8&t)&&(t|=32&t);var n=e.entangledLanes;if(0!==n)for(e=e.entanglements,n&=t;0<n;){var a=31-xe(n),o=1<<a;t|=e[a],n&=~o}return cc=t,zn(),r}function Vc(e,t){Ja=null,N.H=Ei,t===ia?(t=fa(),ac=3):t===la?(t=fa(),ac=4):ac=t===Wi?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,oc=t,null===rc&&(uc=1,Mi(e,An(t,e.current)))}function Hc(){var e=N.H;return N.H=Ei,null===e?Ei:e}function Wc(){var e=N.A;return N.A=Zs,e}function Bc(){uc=4,ic||(4194176&nc)!==nc&&null!==Ta.current||(lc=!0),0===(134217727&dc)&&0===(134217727&pc)||null===tc||Dc(tc,nc,mc,!1)}function Uc(e,t,r){var n=ec;ec|=2;var a=Hc(),o=Wc();tc===e&&nc===t||(wc=null,$c(e,t)),t=!1;var i=uc;e:for(;;)try{if(0!==ac&&null!==rc){var l=rc,s=oc;switch(ac){case 8:Ic(),i=6;break e;case 3:case 2:case 6:null===Ta.current&&(t=!0);var c=ac;if(ac=0,oc=null,Qc(e,l,s,c),r&&lc){i=0;break e}break;default:c=ac,ac=0,oc=null,Qc(e,l,s,c)}}Yc(),i=uc;break}catch(u){Vc(e,u)}return t&&e.shellSuspendCounter++,vl=gl=null,ec=n,N.H=a,N.A=o,null===rc&&(tc=null,nc=0,zn()),i}function Yc(){for(;null!==rc;)Xc(rc)}function qc(){for(;null!==rc&&!ie();)Xc(rc)}function Xc(e){var t=ml(e.alternate,e,cc);e.memoizedProps=e.pendingProps,null===t?Gc(e):rc=t}function Kc(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Ji(r,t,t.pendingProps,t.type,void 0,nc);break;case 11:t=Ji(r,t,t.pendingProps,t.type.render,t.ref,nc);break;case 5:bo(t);default:Gs(r,t),t=ml(r,t=rc=Ms(t,cc),cc)}e.memoizedProps=e.pendingProps,null===t?Gc(e):rc=t}function Qc(e,t,r,n){vl=gl=null,bo(t),ma=null,ha=0;var a=t.return;try{if(function(e,t,r,n,a){if(r.flags|=32768,null!==n&&"object"===typeof n&&"function"===typeof n.then){if(null!==(t=r.alternate)&&kl(t,r,a,!0),null!==(r=Ta.current)){switch(r.tag){case 13:return null===_a?Bc():null===r.alternate&&0===uc&&(uc=3),r.flags&=-257,r.flags|=65536,r.lanes=a,n===sa?r.flags|=16384:(null===(t=r.updateQueue)?r.updateQueue=new Set([n]):t.add(n),au(e,n,a)),!1;case 22:return r.flags|=65536,n===sa?r.flags|=16384:(null===(t=r.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},r.updateQueue=t):null===(r=t.retryQueue)?t.retryQueue=new Set([n]):r.add(n),au(e,n,a)),!1}throw Error(i(435,r.tag))}return au(e,n,a),Bc(),!1}if(Qn)return null!==(t=Ta.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==Jn&&oa(An(e=Error(i(422),{cause:n}),r))):(n!==Jn&&oa(An(t=Error(i(423),{cause:n}),r)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,n=An(n,r),Al(e,a=$i(e.stateNode,n,a)),4!==uc&&(uc=2)),!1;var o=Error(i(520),{cause:n});if(o=An(o,r),null===gc?gc=[o]:gc.push(o),4!==uc&&(uc=2),null===t)return!0;n=An(n,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=a&-a,r.lanes|=e,Al(r,e=$i(r.stateNode,n,e)),!1;case 1:if(t=r.type,o=r.stateNode,0===(128&r.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===kc||!kc.has(o))))return r.flags|=65536,a&=-a,r.lanes|=a,Hi(a=Vi(a),e,r,n),Al(r,a),!1}r=r.return}while(null!==r);return!1}(e,a,t,r,nc))return uc=1,Mi(e,An(r,e.current)),void(rc=null)}catch(o){if(null!==a)throw rc=a,o;return uc=1,Mi(e,An(r,e.current)),void(rc=null)}32768&t.flags?(Qn||1===n?e=!0:lc||0!==(536870912&nc)?e=!1:(ic=e=!0,(2===n||3===n||6===n)&&(null!==(n=Ta.current)&&13===n.tag&&(n.flags|=16384))),Zc(t,e)):Gc(t)}function Gc(e){var t=e;do{if(0!==(32768&t.flags))return void Zc(t,ic);e=t.return;var r=Ks(t.alternate,t,cc);if(null!==r)return void(rc=r);if(null!==(t=t.sibling))return void(rc=t);rc=t=e}while(null!==t);0===uc&&(uc=5)}function Zc(e,t){do{var r=Qs(e.alternate,e);if(null!==r)return r.flags&=32767,void(rc=r);if(null!==(r=e.return)&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&null!==(e=e.sibling))return void(rc=e);rc=e=r}while(null!==e);uc=6,rc=null}function Jc(e,t,r,n,a,o,l,s,c,u){var d=N.T,p=H.p;try{H.p=2,N.T=null,function(e,t,r,n,a,o,l,s){do{tu()}while(null!==Cc);if(0!==(6&ec))throw Error(i(327));var c=e.finishedWork;if(n=e.finishedLanes,null===c)return null;if(e.finishedWork=null,e.finishedLanes=0,c===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var u=c.lanes|c.childLanes;if(function(e,t,r,n,a,o){var i=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(r=i&~r;0<r;){var u=31-xe(r),d=1<<u;l[u]=0,s[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}r&=~d}0!==n&&Oe(e,n,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,n,u|=En,o,l,s),e===tc&&(rc=tc=null,nc=0),0===(10256&c.subtreeFlags)&&0===(10256&c.flags)||Sc||(Sc=!0,zc=u,jc=r,function(e,t){ae(e,t)}(pe,(function(){return tu(),null}))),r=0!==(15990&c.flags),0!==(15990&c.subtreeFlags)||r?(r=N.T,N.T=null,o=H.p,H.p=2,l=ec,ec|=4,function(e,t){if(e=e.containerInfo,qu=Bd,Jr(e=Zr(e))){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch(g){r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==r||0!==a&&3!==p.nodeType||(s=l+a),p!==o||0!==n&&3!==p.nodeType||(c=l+n),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===r&&++u===a&&(s=l),f===o&&++d===n&&(c=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}r=-1===s||-1===c?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xu={focusedElem:e,selectionRange:r},Bd=!1,rs=t;null!==rs;)if(e=(t=rs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,rs=e;else for(;null!==rs;){switch(o=(t=rs).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,r=t,a=o.memoizedProps,o=o.memoizedState,n=r.stateNode;try{var h=Oi(r.type,a,(r.elementType,r.type));e=n.getSnapshotBeforeUpdate(h,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(v){nu(r,r.return,v)}}break;case 3:if(0!==(1024&e))if(9===(r=(e=t.stateNode.containerInfo).nodeType))id(e);else if(1===r)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":id(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,rs=e;break}rs=t.return}h=ns,ns=!1}(e,c),ms(c,e),en(Xu,e.containerInfo),Bd=!!qu,Xu=qu=null,e.current=c,as(e,c.alternate,c),le(),ec=l,H.p=o,N.T=r):e.current=c,Sc?(Sc=!1,Cc=e,Ec=n):eu(e,u),u=e.pendingLanes,0===u&&(kc=null),function(e){if(be&&"function"===typeof be.onCommitFiberRoot)try{be.onCommitFiberRoot(ve,e,void 0,128===(128&e.current.flags))}catch(t){}}(c.stateNode),hu(e),null!==t)for(a=e.onRecoverableError,c=0;c<t.length;c++)u=t[c],a(u.value,{componentStack:u.stack});0!==(3&Ec)&&tu(),u=e.pendingLanes,0!==(4194218&n)&&0!==(42&u)?e===_c?Tc++:(Tc=0,_c=e):Tc=0,gu(0,!1)}(e,t,r,n,p,a,o,l)}finally{N.T=d,H.p=p}}function eu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Va(t)))}function tu(){if(null!==Cc){var e=Cc,t=zc;zc=0;var r=Re(Ec),n=N.T,a=H.p;try{if(H.p=32>r?32:r,N.T=null,null===Cc)var o=!1;else{r=jc,jc=null;var l=Cc,s=Ec;if(Cc=null,Ec=0,0!==(6&ec))throw Error(i(331));var c=ec;if(ec|=4,Ps(l.current),Ss(l,l.current,s,r),ec=c,gu(0,!1),be&&"function"===typeof be.onPostCommitFiberRoot)try{be.onPostCommitFiberRoot(ve,l)}catch(u){}o=!0}return o}finally{H.p=a,N.T=n,eu(e,t)}}return!1}function ru(e,t,r){t=An(r,t),null!==(e=Ll(e,t=$i(e.stateNode,t,2),2))&&(Le(e,2),hu(e))}function nu(e,t,r){if(3===e.tag)ru(e,e,r);else for(;null!==t;){if(3===t.tag){ru(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===kc||!kc.has(n))){e=An(r,e),null!==(n=Ll(t,r=Vi(2),2))&&(Hi(r,n,t,e),Le(n,2),hu(n));break}}t=t.return}}function au(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new Js;var a=new Set;n.set(t,a)}else void 0===(a=n.get(t))&&(a=new Set,n.set(t,a));a.has(r)||(sc=!0,a.add(r),e=ou.bind(null,e,t,r),t.then(e,e))}function ou(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,tc===e&&(nc&r)===r&&(4===uc||3===uc&&(62914560&nc)===nc&&300>se()-yc?0===(2&ec)&&$c(e,0):fc|=r,hc===nc&&(hc=0)),hu(e)}function iu(e,t){0===t&&(t=Ne()),null!==(e=_n(e,t))&&(Le(e,t),hu(e))}function lu(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),iu(e,r)}function su(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==n&&n.delete(t),iu(e,r)}var cu=null,uu=null,du=!1,pu=!1,fu=!1,mu=0;function hu(e){var t;e!==uu&&null===e.next&&(null===uu?cu=uu=e:uu=uu.next=e),pu=!0,du||(du=!0,t=vu,nd((function(){0!==(6&ec)?ae(ue,t):t()})))}function gu(e,t){if(!fu&&pu){fu=!0;do{for(var r=!1,n=cu;null!==n;){if(!t)if(0!==e){var a=n.pendingLanes;if(0===a)var o=0;else{var i=n.suspendedLanes,l=n.pingedLanes;o=(1<<31-xe(42|e)+1)-1,o=201326677&(o&=a&~(i&~l))?201326677&o|1:o?2|o:0}0!==o&&(r=!0,xu(n,o))}else o=nc,0===(3&(o=ze(n,n===tc?o:0)))||je(n,o)||(r=!0,xu(n,o));n=n.next}}while(r);fu=!1}}function vu(){pu=du=!1;var e=0;0!==mu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Ju&&(Ju=e,!0);return Ju=null,!1}()&&(e=mu),mu=0);for(var t=se(),r=null,n=cu;null!==n;){var a=n.next,o=bu(n,t);0===o?(n.next=null,null===r?cu=a:r.next=a,null===a&&(uu=r)):(r=n,(0!==e||0!==(3&o))&&(pu=!0)),n=a}gu(e,!1)}function bu(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-xe(o),l=1<<i,s=a[i];-1===s?0!==(l&r)&&0===(l&n)||(a[i]=Te(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(r=nc,r=ze(e,e===(t=tc)?r:0),n=e.callbackNode,0===r||e===t&&2===ac||null!==e.cancelPendingCommit)return null!==n&&null!==n&&oe(n),e.callbackNode=null,e.callbackPriority=0;if(0===(3&r)||je(e,r)){if((t=r&-r)===e.callbackPriority)return t;switch(null!==n&&oe(n),Re(r)){case 2:case 8:r=de;break;case 32:default:r=pe;break;case 268435456:r=me}return n=yu.bind(null,e),r=ae(r,n),e.callbackPriority=t,e.callbackNode=r,t}return null!==n&&null!==n&&oe(n),e.callbackPriority=2,e.callbackNode=null,2}function yu(e,t){var r=e.callbackNode;if(tu()&&e.callbackNode!==r)return null;var n=nc;return 0===(n=ze(e,e===tc?n:0))?null:(Oc(e,n,t),bu(e,se()),null!=e.callbackNode&&e.callbackNode===r?yu.bind(null,e):null)}function xu(e,t){if(tu())return null;Oc(e,t,!0)}function wu(){return 0===mu&&(mu=_e()),mu}function ku(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:_t(""+e)}function Su(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}for(var Cu=0;Cu<wn.length;Cu++){var Eu=wn[Cu];kn(Eu.toLowerCase(),"on"+(Eu[0].toUpperCase()+Eu.slice(1)))}kn(fn,"onAnimationEnd"),kn(mn,"onAnimationIteration"),kn(hn,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(gn,"onTransitionRun"),kn(vn,"onTransitionStart"),kn(bn,"onTransitionCancel"),kn(yn,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ju=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zu));function Tu(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){Ai(u)}a.currentTarget=null,o=s}else for(i=0;i<n.length;i++){if(s=(l=n[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){Ai(u)}a.currentTarget=null,o=s}}}}function _u(e,t){var r=t[Ve];void 0===r&&(r=t[Ve]=new Set);var n=e+"__bubble";r.has(n)||(Ou(t,e,2,!1),r.add(n))}function Nu(e,t,r){var n=0;t&&(n|=4),Ou(r,e,n,t)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function Lu(e){if(!e[Pu]){e[Pu]=!0,Ze.forEach((function(t){"selectionchange"!==t&&(ju.has(t)||Nu(t,!1,e),Nu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Pu]||(t[Pu]=!0,Nu("selectionchange",!1,t))}}function Ou(e,t,r,n){switch(Gd(t)){case 2:var a=Ud;break;case 8:a=Yd;break;default:a=qd}r=a.bind(null,t,r,e),a=void 0,!Mt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),n?void 0!==a?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):void 0!==a?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Au(e,t,r,n,a){var o=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=n.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=qe(l)))return;if(5===(s=i.tag)||6===s||26===s||27===s){n=o=i;continue e}l=l.parentNode}}n=n.return}Ft((function(){var n=o,a=Pt(r),i=[];e:{var l=xn.get(e);if(void 0!==l){var s=Zt,c=e;switch(e){case"keypress":if(0===Bt(r))break e;case"keydown":case"keyup":s=fr;break;case"focusin":c="focus",s=ar;break;case"focusout":c="blur",s=ar;break;case"beforeblur":case"afterblur":s=ar;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=rr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=nr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=hr;break;case fn:case mn:case hn:s=or;break;case yn:s=gr;break;case"scroll":case"scrollend":s=er;break;case"wheel":s=vr;break;case"copy":case"cut":case"paste":s=ir;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=mr;break;case"toggle":case"beforetoggle":s=br}var u=0!==(4&t),d=!u&&("scroll"===e||"scrollend"===e),p=u?null!==l?l+"Capture":null:l;u=[];for(var f,m=n;null!==m;){var h=m;if(f=h.stateNode,5!==(h=h.tag)&&26!==h&&27!==h||null===f||null===p||null!=(h=Dt(m,p))&&u.push(Ru(m,h,f)),d)break;m=m.return}0<u.length&&(l=new s(l,c,null,r,a),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||r===Nt||!(c=r.relatedTarget||r.fromElement)||!qe(c)&&!c[$e])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=n,null!==(c=(c=r.relatedTarget||r.toElement)?qe(c):null)&&(d=D(c),u=c.tag,c!==d||5!==u&&27!==u&&6!==u)&&(c=null)):(s=null,c=n),s!==c)){if(u=rr,h="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(u=mr,h="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==s?l:Ke(s),f=null==c?l:Ke(c),(l=new u(h,m+"leave",s,r,a)).target=d,l.relatedTarget=f,h=null,qe(a)===n&&((u=new u(p,m+"enter",c,r,a)).target=f,u.relatedTarget=d,h=u),d=h,s&&c)e:{for(p=c,m=0,f=u=s;f;f=Du(f))m++;for(f=0,h=p;h;h=Du(h))f++;for(;0<m-f;)u=Du(u),m--;for(;0<f-m;)p=Du(p),f--;for(;m--;){if(u===p||null!==p&&u===p.alternate)break e;u=Du(u),p=Du(p)}u=null}else u=null;null!==s&&Mu(i,l,s,u,!1),null!==c&&null!==d&&Mu(i,d,c,u,!0)}if("select"===(s=(l=n?Ke(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Fr;else if(Nr(l))if(Dr)g=Yr;else{g=Br;var v=Wr}else!(s=l.nodeName)||"input"!==s.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?n&&zt(n.elementType)&&(g=Fr):g=Ur;switch(g&&(g=g(e,n))?Pr(i,g,r,a):(v&&v(e,l,n),"focusout"===e&&n&&"number"===l.type&&null!=n.memoizedProps.value&&bt(l,"number",l.value)),v=n?Ke(n):window,e){case"focusin":(Nr(v)||"true"===v.contentEditable)&&(rn=v,nn=n,an=null);break;case"focusout":an=nn=rn=null;break;case"mousedown":on=!0;break;case"contextmenu":case"mouseup":case"dragend":on=!1,ln(i,r,a);break;case"selectionchange":if(tn)break;case"keydown":case"keyup":ln(i,r,a)}var b;if(xr)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Tr?zr(e,r)&&(y="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(y="onCompositionStart");y&&(Sr&&"ko"!==r.locale&&(Tr||"onCompositionStart"!==y?"onCompositionEnd"===y&&Tr&&(b=Wt()):(Vt="value"in($t=a)?$t.value:$t.textContent,Tr=!0)),0<(v=Fu(n,y)).length&&(y=new lr(y,e,null,r,a),i.push({event:y,listeners:v}),b?y.data=b:null!==(b=jr(r))&&(y.data=b))),(b=kr?function(e,t){switch(e){case"compositionend":return jr(t);case"keypress":return 32!==t.which?null:(Er=!0,Cr);case"textInput":return(e=t.data)===Cr&&Er?null:e;default:return null}}(e,r):function(e,t){if(Tr)return"compositionend"===e||!xr&&zr(e,t)?(e=Wt(),Ht=Vt=$t=null,Tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(y=Fu(n,"onBeforeInput")).length&&(v=new lr("onBeforeInput","beforeinput",null,r,a),i.push({event:v,listeners:y}),v.data=b)),function(e,t,r,n,a){if("submit"===t&&r&&r.stateNode===a){var o=ku((a[Ie]||null).action),i=n.submitter;i&&null!==(t=(t=i[Ie]||null)?ku(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new Zt("action","action",null,n,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(0!==mu){var e=i?Su(a,i):new FormData(a);di(r,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?Su(a,i):new FormData(a),di(r,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,n,r,a)}Tu(i,t)}))}function Ru(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Fu(e,t){for(var r=t+"Capture",n=[];null!==e;){var a=e,o=a.stateNode;5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=Dt(e,r))&&n.unshift(Ru(e,a,o)),null!=(a=Dt(e,t))&&n.push(Ru(e,a,o))),e=e.return}return n}function Du(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Mu(e,t,r,n,a){for(var o=t._reactName,i=[];null!==r&&r!==n;){var l=r,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===n)break;5!==l&&26!==l&&27!==l||null===c||(s=c,a?null!=(c=Dt(r,o))&&i.unshift(Ru(r,c,s)):a||null!=(c=Dt(r,o))&&i.push(Ru(r,c,s))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}var Iu=/\r\n?/g,$u=/\u0000|\uFFFD/g;function Vu(e){return("string"===typeof e?e:""+e).replace(Iu,"\n").replace($u,"")}function Hu(e,t){return t=Vu(t),Vu(e)===t}function Wu(){}function Bu(e,t,r,n,a,o){switch(r){case"children":"string"===typeof n?"body"===t||"textarea"===t&&""===n||kt(e,n):("number"===typeof n||"bigint"===typeof n)&&"body"!==t&&kt(e,""+n);break;case"className":lt(e,"class",n);break;case"tabIndex":lt(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":lt(e,r,n);break;case"style":Et(e,n,o);break;case"data":if("object"!==t){lt(e,"data",n);break}case"src":case"href":if(""===n&&("a"!==t||"href"!==r)){e.removeAttribute(r);break}if(null==n||"function"===typeof n||"symbol"===typeof n||"boolean"===typeof n){e.removeAttribute(r);break}n=_t(""+n),e.setAttribute(r,n);break;case"action":case"formAction":if("function"===typeof n){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===r?("input"!==t&&Bu(e,t,"name",a.name,a,null),Bu(e,t,"formEncType",a.formEncType,a,null),Bu(e,t,"formMethod",a.formMethod,a,null),Bu(e,t,"formTarget",a.formTarget,a,null)):(Bu(e,t,"encType",a.encType,a,null),Bu(e,t,"method",a.method,a,null),Bu(e,t,"target",a.target,a,null))),null==n||"symbol"===typeof n||"boolean"===typeof n){e.removeAttribute(r);break}n=_t(""+n),e.setAttribute(r,n);break;case"onClick":null!=n&&(e.onclick=Wu);break;case"onScroll":null!=n&&_u("scroll",e);break;case"onScrollEnd":null!=n&&_u("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!==typeof n||!("__html"in n))throw Error(i(61));if(null!=(r=n.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=r}}break;case"multiple":e.multiple=n&&"function"!==typeof n&&"symbol"!==typeof n;break;case"muted":e.muted=n&&"function"!==typeof n&&"symbol"!==typeof n;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==n||"function"===typeof n||"boolean"===typeof n||"symbol"===typeof n){e.removeAttribute("xlink:href");break}r=_t(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(r,""+n):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":!0===n?e.setAttribute(r,""):!1!==n&&null!=n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(r,n):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":null!=n&&"function"!==typeof n&&"symbol"!==typeof n&&!isNaN(n)&&1<=n?e.setAttribute(r,n):e.removeAttribute(r);break;case"rowSpan":case"start":null==n||"function"===typeof n||"symbol"===typeof n||isNaN(n)?e.removeAttribute(r):e.setAttribute(r,n);break;case"popover":_u("beforetoggle",e),_u("toggle",e),it(e,"popover",n);break;case"xlinkActuate":st(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":st(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":st(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":st(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":st(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":st(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":st(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":st(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":st(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":it(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<r.length)||"o"!==r[0]&&"O"!==r[0]||"n"!==r[1]&&"N"!==r[1])&&it(e,r=jt.get(r)||r,n)}}function Uu(e,t,r,n,a,o){switch(r){case"style":Et(e,n,o);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!==typeof n||!("__html"in n))throw Error(i(61));if(null!=(r=n.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=r}}break;case"children":"string"===typeof n?kt(e,n):("number"===typeof n||"bigint"===typeof n)&&kt(e,""+n);break;case"onScroll":null!=n&&_u("scroll",e);break;case"onScrollEnd":null!=n&&_u("scrollend",e);break;case"onClick":null!=n&&(e.onclick=Wu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Je.hasOwnProperty(r)||("o"!==r[0]||"n"!==r[1]||(a=r.endsWith("Capture"),t=r.slice(2,a?r.length-7:void 0),"function"===typeof(o=null!=(o=e[Ie]||null)?o[r]:null)&&e.removeEventListener(t,o,a),"function"!==typeof n)?r in e?e[r]=n:!0===n?e.setAttribute(r,""):it(e,r,n):("function"!==typeof o&&null!==o&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,n,a)))}}function Yu(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_u("error",e),_u("load",e);var n,a=!1,o=!1;for(n in r)if(r.hasOwnProperty(n)){var l=r[n];if(null!=l)switch(n){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Bu(e,t,n,l,r,null)}}return o&&Bu(e,t,"srcSet",r.srcSet,r,null),void(a&&Bu(e,t,"src",r.src,r,null));case"input":_u("invalid",e);var s=n=l=o=null,c=null,u=null;for(a in r)if(r.hasOwnProperty(a)){var d=r[a];if(null!=d)switch(a){case"name":o=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":n=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:Bu(e,t,a,d,r,null)}}return vt(e,n,s,c,u,l,o,!1),void dt(e);case"select":for(o in _u("invalid",e),a=l=n=null,r)if(r.hasOwnProperty(o)&&null!=(s=r[o]))switch(o){case"value":n=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Bu(e,t,o,s,r,null)}return t=n,r=l,e.multiple=!!a,void(null!=t?yt(e,!!a,t,!1):null!=r&&yt(e,!!a,r,!0));case"textarea":for(l in _u("invalid",e),n=o=a=null,r)if(r.hasOwnProperty(l)&&null!=(s=r[l]))switch(l){case"value":a=s;break;case"defaultValue":o=s;break;case"children":n=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:Bu(e,t,l,s,r,null)}return wt(e,a,o,n),void dt(e);case"option":for(c in r)if(r.hasOwnProperty(c)&&null!=(a=r[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Bu(e,t,c,a,r,null);return;case"dialog":_u("cancel",e),_u("close",e);break;case"iframe":case"object":_u("load",e);break;case"video":case"audio":for(a=0;a<zu.length;a++)_u(zu[a],e);break;case"image":_u("error",e),_u("load",e);break;case"details":_u("toggle",e);break;case"embed":case"source":case"link":_u("error",e),_u("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in r)if(r.hasOwnProperty(u)&&null!=(a=r[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Bu(e,t,u,a,r,null)}return;default:if(zt(t)){for(d in r)r.hasOwnProperty(d)&&(void 0!==(a=r[d])&&Uu(e,t,d,a,r,void 0));return}}for(s in r)r.hasOwnProperty(s)&&(null!=(a=r[s])&&Bu(e,t,s,a,r,null))}var qu=null,Xu=null;function Ku(e){return 9===e.nodeType?e:e.ownerDocument}function Qu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gu(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Zu(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Ju=null;var ed="function"===typeof setTimeout?setTimeout:void 0,td="function"===typeof clearTimeout?clearTimeout:void 0,rd="function"===typeof Promise?Promise:void 0,nd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof rd?function(e){return rd.resolve(null).then(e).catch(ad)}:ed;function ad(e){setTimeout((function(){throw e}))}function od(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&8===a.nodeType)if("/$"===(r=a.data)){if(0===n)return e.removeChild(a),void hp(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=a}while(r);hp(t)}function id(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":id(r),Ye(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===r.rel.toLowerCase())continue}e.removeChild(r)}}function ld(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}function cd(e,t,r){switch(t=Ku(r),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}var ud=new Map,dd=new Set;function pd(e){return"function"===typeof e.getRootNode?e.getRootNode():e.ownerDocument}var fd=H.d;H.d={f:function(){var e=fd.f(),t=Mc();return e||t},r:function(e){var t=Xe(e);null!==t&&5===t.tag&&"form"===t.type?fi(t):fd.r(e)},D:function(e){fd.D(e),hd("dns-prefetch",e,null)},C:function(e,t){fd.C(e,t),hd("preconnect",e,t)},L:function(e,t,r){fd.L(e,t,r);var n=md;if(n&&e&&t){var a='link[rel="preload"][as="'+ht(t)+'"]';"image"===t&&r&&r.imageSrcSet?(a+='[imagesrcset="'+ht(r.imageSrcSet)+'"]',"string"===typeof r.imageSizes&&(a+='[imagesizes="'+ht(r.imageSizes)+'"]')):a+='[href="'+ht(e)+'"]';var o=a;switch(t){case"style":o=vd(e);break;case"script":o=xd(e)}ud.has(o)||(e=P({rel:"preload",href:"image"===t&&r&&r.imageSrcSet?void 0:e,as:t},r),ud.set(o,e),null!==n.querySelector(a)||"style"===t&&n.querySelector(bd(o))||"script"===t&&n.querySelector(wd(o))||(Yu(t=n.createElement("link"),"link",e),Ge(t),n.head.appendChild(t)))}},m:function(e,t){fd.m(e,t);var r=md;if(r&&e){var n=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+ht(n)+'"][href="'+ht(e)+'"]',o=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=xd(e)}if(!ud.has(o)&&(e=P({rel:"modulepreload",href:e},t),ud.set(o,e),null===r.querySelector(a))){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(wd(o)))return}Yu(n=r.createElement("link"),"link",e),Ge(n),r.head.appendChild(n)}}},X:function(e,t){fd.X(e,t);var r=md;if(r&&e){var n=Qe(r).hoistableScripts,a=xd(e),o=n.get(a);o||((o=r.querySelector(wd(a)))||(e=P({src:e,async:!0},t),(t=ud.get(a))&&Ed(e,t),Ge(o=r.createElement("script")),Yu(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}},S:function(e,t,r){fd.S(e,t,r);var n=md;if(n&&e){var a=Qe(n).hoistableStyles,o=vd(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=n.querySelector(bd(o)))l.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":t},r),(r=ud.get(o))&&Cd(e,r);var s=i=n.createElement("link");Ge(s),Yu(s,"link",e),s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),s.addEventListener("load",(function(){l.loading|=1})),s.addEventListener("error",(function(){l.loading|=2})),l.loading|=4,Sd(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}},M:function(e,t){fd.M(e,t);var r=md;if(r&&e){var n=Qe(r).hoistableScripts,a=xd(e),o=n.get(a);o||((o=r.querySelector(wd(a)))||(e=P({src:e,async:!0,type:"module"},t),(t=ud.get(a))&&Ed(e,t),Ge(o=r.createElement("script")),Yu(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}}};var md="undefined"===typeof document?null:document;function hd(e,t,r){var n=md;if(n&&"string"===typeof t&&t){var a=ht(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof r&&(a+='[crossorigin="'+r+'"]'),dd.has(a)||(dd.add(a),e={rel:e,crossOrigin:r,href:t},null===n.querySelector(a)&&(Yu(t=n.createElement("link"),"link",e),Ge(t),n.head.appendChild(t)))}}function gd(e,t,r,n){var a,o,l,s,c=(c=G.current)?pd(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof r.precedence&&"string"===typeof r.href?(t=vd(r.href),(n=(r=Qe(c).hoistableStyles).get(t))||(n={type:"style",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===r.rel&&"string"===typeof r.href&&"string"===typeof r.precedence){e=vd(r.href);var u=Qe(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(bd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),ud.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ud.set(e,r),u||(a=c,o=e,l=r,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",(function(){return s.loading|=1})),o.addEventListener("error",(function(){return s.loading|=2})),Yu(o,"link",l),Ge(o),a.head.appendChild(o))))),t&&null===n)throw Error(i(528,""));return d}if(t&&null!==n)throw Error(i(529,""));return null;case"script":return t=r.async,"string"===typeof(r=r.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=xd(r),(n=(r=Qe(c).hoistableScripts).get(t))||(n={type:"script",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function vd(e){return'href="'+ht(e)+'"'}function bd(e){return'link[rel="stylesheet"]['+e+"]"}function yd(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function xd(e){return'[src="'+ht(e)+'"]'}function wd(e){return"script[async]"+e}function kd(e,t,r){if(t.count++,null===t.instance)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ht(r.href)+'"]');if(n)return t.instance=n,Ge(n),n;var a=P({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return Ge(n=(e.ownerDocument||e).createElement("style")),Yu(n,"style",a),Sd(n,r.precedence,e),t.instance=n;case"stylesheet":a=vd(r.href);var o=e.querySelector(bd(a));if(o)return t.state.loading|=4,t.instance=o,Ge(o),o;n=yd(r),(a=ud.get(a))&&Cd(n,a),Ge(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),Yu(o,"link",n),t.state.loading|=4,Sd(o,r.precedence,e),t.instance=o;case"script":return o=xd(r.src),(a=e.querySelector(wd(o)))?(t.instance=a,Ge(a),a):(n=r,(a=ud.get(o))&&Ed(n=P({},r),a),Ge(a=(e=e.ownerDocument||e).createElement("script")),Yu(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(n=t.instance,t.state.loading|=4,Sd(n,r.precedence,e));return t.instance}function Sd(e,t,r){for(var n=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,o=a,i=0;i<n.length;i++){var l=n[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===r.nodeType?r.head:r).insertBefore(e,t.firstChild)}function Cd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Ed(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var zd=null;function jd(e,t,r){if(null===zd){var n=new Map,a=zd=new Map;a.set(r,n)}else(n=(a=zd).get(r))||(n=new Map,a.set(r,n));if(n.has(e))return n;for(n.set(e,null),r=r.getElementsByTagName(e),a=0;a<r.length;a++){var o=r[a];if(!(o[Ue]||o[Me]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=n.get(i);l?l.push(o):n.set(i,[o])}}return n}function Td(e,t,r){(e=e.ownerDocument||e).head.insertBefore(r,"title"===t?e.querySelector("head > title"):null)}function _d(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Nd=null;function Pd(){}function Ld(){if(this.count--,0===this.count)if(this.stylesheets)Ad(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Od=null;function Ad(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Od=new Map,t.forEach(Rd,e),Od=null,Ld.call(e))}function Rd(e,t){if(!(4&t.state.loading)){var r=Od.get(e);if(r)var n=r.get(null);else{r=new Map,Od.set(e,r);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(r.set(i.dataset.precedence,i),n=i)}n&&r.set(null,n)}i=(a=t.instance).getAttribute("data-precedence"),(o=r.get(i)||n)===n&&r.set(null,a),r.set(i,a),this.count++,n=Ld.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Fd={$$typeof:g,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Dd(e,t,r,n,a,o,i,l){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pe(0),this.hiddenUpdates=Pe(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Md(e,t,r,n,a,o,i,l,s,c,u,d){return e=new Dd(e,t,r,i,l,s,c,d),t=1,!0===o&&(t|=24),o=Rs(3,null,null,t),e.current=o,o.stateNode=e,(t=$a()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:r,cache:t},_l(o),e}function Id(e){return e?e=Ln:Ln}function $d(e,t,r,n,a,o){a=Id(a),null===n.context?n.context=a:n.pendingContext=a,(n=Pl(t)).payload={element:r},null!==(o=void 0===o?null:o)&&(n.callback=o),null!==(r=Ll(e,n,t))&&(Lc(r,0,t),Ol(r,e,t))}function Vd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function Hd(e,t){Vd(e,t),(e=e.alternate)&&Vd(e,t)}function Wd(e){if(13===e.tag){var t=_n(e,67108864);null!==t&&Lc(t,0,67108864),Hd(e,67108864)}}var Bd=!0;function Ud(e,t,r,n){var a=N.T;N.T=null;var o=H.p;try{H.p=2,qd(e,t,r,n)}finally{H.p=o,N.T=a}}function Yd(e,t,r,n){var a=N.T;N.T=null;var o=H.p;try{H.p=8,qd(e,t,r,n)}finally{H.p=o,N.T=a}}function qd(e,t,r,n){if(Bd){var a=Xd(n);if(null===a)Au(e,t,n,Kd,r),ip(e,n);else if(function(e,t,r,n,a){switch(t){case"focusin":return Jd=lp(Jd,e,t,r,n,a),!0;case"dragenter":return ep=lp(ep,e,t,r,n,a),!0;case"mouseover":return tp=lp(tp,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return rp.set(o,lp(rp.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,np.set(o,lp(np.get(o)||null,e,t,r,n,a)),!0}return!1}(a,e,t,r,n))n.stopPropagation();else if(ip(e,n),4&t&&-1<op.indexOf(e)){for(;null!==a;){var o=Xe(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=Ee(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-xe(i);l.entanglements[1]|=s,i&=~s}hu(o),0===(6&ec)&&(xc=se()+500,gu(0,!1))}}break;case 13:null!==(l=_n(o,2))&&Lc(l,0,2),Mc(),Hd(o,2)}if(null===(o=Xd(n))&&Au(e,t,n,Kd,r),o===a)break;a=o}null!==a&&n.stopPropagation()}else Au(e,t,n,null,r)}}function Xd(e){return Qd(e=Pt(e))}var Kd=null;function Qd(e){if(Kd=null,null!==(e=qe(e))){var t=D(e);if(null===t)e=null;else{var r=t.tag;if(13===r){if(null!==(e=M(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kd=e,null}function Gd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case de:return 8;case pe:case fe:return 32;case me:return 268435456;default:return 32}default:return 32}}var Zd=!1,Jd=null,ep=null,tp=null,rp=new Map,np=new Map,ap=[],op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ip(e,t){switch(e){case"focusin":case"focusout":Jd=null;break;case"dragenter":case"dragleave":ep=null;break;case"mouseover":case"mouseout":tp=null;break;case"pointerover":case"pointerout":rp.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":np.delete(t.pointerId)}}function lp(e,t,r,n,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Xe(t))&&Wd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function sp(e){var t=qe(e.target);if(null!==t){var r=D(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=M(r)))return e.blockedOn=t,void function(e,t){var r=H.p;try{return H.p=e,t()}finally{H.p=r}}(e.priority,(function(){if(13===r.tag){var e=Nc(),t=_n(r,e);null!==t&&Lc(t,0,e),Hd(r,e)}}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function cp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xd(e.nativeEvent);if(null!==r)return null!==(t=Xe(r))&&Wd(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);Nt=n,r.target.dispatchEvent(n),Nt=null,t.shift()}return!0}function up(e,t,r){cp(e)&&r.delete(t)}function dp(){Zd=!1,null!==Jd&&cp(Jd)&&(Jd=null),null!==ep&&cp(ep)&&(ep=null),null!==tp&&cp(tp)&&(tp=null),rp.forEach(up),np.forEach(up)}function pp(e,t){e.blockedOn===t&&(e.blockedOn=null,Zd||(Zd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,dp)))}var fp=null;function mp(e){fp!==e&&(fp=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,(function(){fp===e&&(fp=null);for(var t=0;t<e.length;t+=3){var r=e[t],n=e[t+1],a=e[t+2];if("function"!==typeof n){if(null===Qd(n||r))continue;break}var o=Xe(r);null!==o&&(e.splice(t,3),t-=3,di(o,{pending:!0,data:a,method:r.method,action:n},n,a))}})))}function hp(e){function t(t){return pp(t,e)}null!==Jd&&pp(Jd,e),null!==ep&&pp(ep,e),null!==tp&&pp(tp,e),rp.forEach(t),np.forEach(t);for(var r=0;r<ap.length;r++){var n=ap[r];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ap.length&&null===(r=ap[0]).blockedOn;)sp(r),null===r.blockedOn&&ap.shift();if(null!=(r=(e.ownerDocument||e).$$reactFormReplay))for(n=0;n<r.length;n+=3){var a=r[n],o=r[n+1],i=a[Ie]||null;if("function"===typeof o)i||mp(r);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[Ie]||null)l=i.formAction;else if(null!==Qd(a))continue}else l=i.action;"function"===typeof l?r[n+1]=l:(r.splice(n,3),n-=3),mp(r)}}}function gp(e){this._internalRoot=e}function vp(e){this._internalRoot=e}vp.prototype.render=gp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));$d(t.current,Nc(),e,t,null,null)},vp.prototype.unmount=gp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&tu(),$d(e.current,2,null,e,null,null),Mc(),t[$e]=null}},vp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fe();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ap.length&&0!==t&&t<ap[r].priority;r++);ap.splice(r,0,e),0===r&&sp(e)}};var bp=a.version;if("19.0.0"!==bp)throw Error(i(527,bp,"19.0.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=D(e)))throw Error(i(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(n=a.return)){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return I(a),e;if(o===n)return I(a),t;o=o.sibling}throw Error(i(188))}if(r.return!==n.return)r=a,n=o;else{for(var l=!1,s=a.child;s;){if(s===r){l=!0,r=a,n=o;break}if(s===n){l=!0,n=a,r=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===r){l=!0,r=o,n=a;break}if(s===n){l=!0,n=o,r=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(r.alternate!==n)throw Error(i(190))}if(3!==r.tag)throw Error(i(188));return r.stateNode.current===r?e:t}(t),e=null===(e=null!==e?$(e):null)?null:e.stateNode};var yp={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:N,findFiberByHostInstance:qe,reconcilerVersion:"19.0.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var xp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xp.isDisabled&&xp.supportsFiber)try{ve=xp.inject(yp),be=xp}catch(kp){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var r=!1,n="",a=Ri,o=Fi,s=Di;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Md(e,1,!1,null,0,r,n,a,o,s,0,null),e[$e]=t.current,Lu(8===e.nodeType?e.parentNode:e),new gp(t)},t.hydrateRoot=function(e,t,r){if(!l(e))throw Error(i(299));var n=!1,a="",o=Ri,s=Fi,c=Di,u=null;return null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(n=!0),void 0!==r.identifierPrefix&&(a=r.identifierPrefix),void 0!==r.onUncaughtError&&(o=r.onUncaughtError),void 0!==r.onCaughtError&&(s=r.onCaughtError),void 0!==r.onRecoverableError&&(c=r.onRecoverableError),void 0!==r.unstable_transitionCallbacks&&r.unstable_transitionCallbacks,void 0!==r.formState&&(u=r.formState)),(t=Md(e,1,!0,t,0,n,a,o,s,c,0,u)).context=Id(null),r=t.current,(a=Pl(n=Nc())).callback=null,Ll(r,a,n),t.current.lanes=n,Le(t,n),hu(t),e[$e]=t.current,Lu(e),new vp(t)},t.version="19.0.0"},43:(e,t,r)=>{"use strict";e.exports=r(288)},288:(e,t)=>{"use strict";var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function b(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,h(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function C(e,t,n,a,o,i){return n=i.ref,{$$typeof:r,type:e,key:t,ref:void 0!==n?n:null,props:i}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var z=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(){}function _(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0;break;case p:return _((u=e._init)(e._payload),t,a,o,i)}}if(u)return i=i(e),u=""===o?"."+j(e,0):o,w(i)?(a="",null!=u&&(a=u.replace(z,"$&/")+"/"),_(i,t,a,"",(function(e){return e}))):null!=i&&(E(i)&&(s=i,c=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(z,"$&/")+"/")+u,i=C(s.type,c,void 0,0,0,s.props)),t.push(i)),1;u=0;var d,m=""===o?".":o+":";if(w(e))for(var h=0;h<e.length;h++)u+=_(o=e[h],t,a,l=m+j(o,h),i);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(o=e.next()).done;)u+=_(o=o.value,t,a,l=m+j(o,h++),i);else if("object"===l){if("function"===typeof e.then)return _(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(T,T):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function N(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function O(){}t.Children={map:N,forEach:function(e,t,r){N(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var n=h({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!S.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(n[o]=t[o]);var o=arguments.length-2;if(1===o)n.children=r;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];n.children=i}return C(e.type,a,void 0,0,0,n)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,r){var n,a={},o=null;if(null!=t)for(n in void 0!==t.key&&(o=""+t.key),t)S.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return C(e,o,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,r={};k.T=r;try{var n=e(),a=k.S;null!==a&&a(r,n),"object"===typeof n&&null!==n&&"function"===typeof n.then&&n.then(O,L)}catch(o){L(o)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,r){return k.H.useActionState(e,t,r)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return k.H.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,r){return k.H.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,r){return k.H.useReducer(e,t,r)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,r){return k.H.useSyncExternalStore(e,t,r)},t.useTransition=function(){return k.H.useTransition()},t.version="19.0.0"},324:e=>{e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=r?r.call(n,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(4)},579:(e,t,r)=>{"use strict";e.exports=r(799)},672:(e,t,r)=>{"use strict";var n=r(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=s.T,r=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=r,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var r=t.as,n=c(r,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:a,fetchPriority:o}):"script"===r&&i.d.X(e,{crossOrigin:n,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var r=t.as,n=c(r,t.crossOrigin);i.d.L(e,r,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var r=c(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return s.H.useFormState(e,t,r)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.0.0"},799:(e,t)=>{"use strict";var r=Symbol.for("react.transitional.element");function n(e,t,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in n={},t)"key"!==o&&(n[o]=t[o]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:a,ref:void 0!==t?t:null,props:n}}Symbol.for("react.fragment"),t.jsx=n,t.jsxs=n},853:(e,t,r)=>{"use strict";e.exports=r(896)},896:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,a=e[n];if(!(0<o(a,t)))break e;e[n]=t,e[r]=a,r=n}}function n(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,a=e.length,i=a>>>1;n<i;){var l=2*(n+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,r))c<a&&0>o(u,s)?(e[n]=u,e[c]=r,n=c):(e[n]=s,e[l]=r,n=l);else{if(!(c<a&&0>o(u,r)))break e;e[n]=u,e[c]=r,n=c}}}return t}function o(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=n(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,r(c,t)}t=n(u)}}function w(e){if(g=!1,x(e),!h)if(null!==n(c))h=!0,P();else{var t=n(u);null!==t&&L(w,t.startTime-e)}}var k,S=!1,C=-1,E=5,z=-1;function j(){return!(t.unstable_now()-z<E)}function T(){if(S){var e=t.unstable_now();z=e;var r=!0;try{e:{h=!1,g&&(g=!1,b(C),C=-1),m=!0;var o=f;try{t:{for(x(e),p=n(c);null!==p&&!(p.expirationTime>e&&j());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){p.callback=l,x(e),r=!0;break t}p===n(c)&&a(c),x(e)}else a(c);p=n(c)}if(null!==p)r=!0;else{var s=n(u);null!==s&&L(w,s.startTime-e),r=!1}}break e}finally{p=null,f=o,m=!1}r=void 0}}finally{r?k():S=!1}}}if("function"===typeof y)k=function(){y(T)};else if("undefined"!==typeof MessageChannel){var _=new MessageChannel,N=_.port2;_.port1.onmessage=T,k=function(){N.postMessage(null)}}else k=function(){v(T,0)};function P(){S||(S=!0,k())}function L(e,r){C=v((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,P())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var r=f;f=t;try{return e()}finally{f=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=f;f=e;try{return t()}finally{f=r}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,r(u,e),null===n(c)&&e===n(u)&&(g?(b(C),C=-1):g=!0,L(w,o-i))):(e.sortIndex=l,r(c,e),h||m||(h=!0,P())),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=f;return function(){var r=f;f=t;try{return e.apply(this,arguments)}finally{f=r}}}},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(672)}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";var e=r(43),t=r(391),n=r(579);const a=(0,e.createContext)({isDarkMode:!0,toggleTheme:()=>{}}),o=t=>{let{children:r}=t;const[o,i]=(0,e.useState)((()=>"light"!==localStorage.getItem("theme")));(0,e.useEffect)((()=>{o?document.body.classList.remove("theme-light"):document.body.classList.add("theme-light"),localStorage.setItem("theme",o?"dark":"light")}),[o]);return(0,n.jsx)(a.Provider,{value:{isDarkMode:o,toggleTheme:()=>{i((e=>!e)),"vibrate"in navigator&&navigator.vibrate(3),function(e){try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const r=new t,n=r.createOscillator(),a=r.createGain();n.type="sine",e?(n.frequency.setValueAtTime(880,r.currentTime),n.frequency.exponentialRampToValueAtTime(440,r.currentTime+.3)):(n.frequency.setValueAtTime(440,r.currentTime),n.frequency.exponentialRampToValueAtTime(880,r.currentTime+.3)),a.gain.setValueAtTime(0,r.currentTime),a.gain.linearRampToValueAtTime(.2,r.currentTime+.05),a.gain.exponentialRampToValueAtTime(.001,r.currentTime+.3),n.connect(a),a.connect(r.destination),n.start(),n.stop(r.currentTime+.3)}catch(t){console.log("Sound error:",t)}}(o)}},children:r})};const i=(0,e.createContext)({walletBtc:0,walletEth:0,addFunds:()=>{},deductFunds:()=>{},isWalletOpen:!1,toggleWallet:()=>{}}),l=t=>{let{children:r}=t;const[a,o]=(0,e.useState)(.0184),[l,s]=(0,e.useState)(.124),[c,u]=(0,e.useState)(!1),d=(0,e.useCallback)((e=>{o((t=>t+e))}),[]),p=(0,e.useCallback)((e=>a>=e&&(o((t=>t-e)),!0)),[a]),f=(0,e.useCallback)((()=>{u((e=>!e)),"vibrate"in navigator&&navigator.vibrate(3)}),[]),m=(0,e.useCallback)((()=>{u(!1)}),[]);return(0,n.jsx)(i.Provider,{value:{walletBtc:a,walletEth:l,addFunds:d,deductFunds:p,isWalletOpen:c,toggleWallet:f,closeWallet:m},children:r})};var s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};Object.create;function c(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var u=r(324),d=r.n(u),p="-ms-",f="-moz-",m="-webkit-",h="comm",g="rule",v="decl",b="@keyframes",y=Math.abs,x=String.fromCharCode,w=Object.assign;function k(e){return e.trim()}function S(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,r){return e.replace(t,r)}function E(e,t,r){return e.indexOf(t,r)}function z(e,t){return 0|e.charCodeAt(t)}function j(e,t,r){return e.slice(t,r)}function T(e){return e.length}function _(e){return e.length}function N(e,t){return t.push(e),e}function P(e,t){return e.filter((function(e){return!S(e,t)}))}var L=1,O=1,A=0,R=0,F=0,D="";function M(e,t,r,n,a,o,i,l){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:L,column:O,length:i,return:"",siblings:l}}function I(e,t){return w(M("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $(e){for(;e.root;)e=I(e.root,{children:[e]});N(e,e.siblings)}function V(){return F=R>0?z(D,--R):0,O--,10===F&&(O=1,L--),F}function H(){return F=R<A?z(D,R++):0,O++,10===F&&(O=1,L++),F}function W(){return z(D,R)}function B(){return R}function U(e,t){return j(D,e,t)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(e){return L=O=1,A=T(D=e),R=0,[]}function X(e){return D="",e}function K(e){return k(U(R-1,Z(91===e?e+2:40===e?e+1:e)))}function Q(e){for(;(F=W())&&F<33;)H();return Y(e)>2||Y(F)>3?"":" "}function G(e,t){for(;--t&&H()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return U(e,B()+(t<6&&32==W()&&32==H()))}function Z(e){for(;H();)switch(F){case e:return R;case 34:case 39:34!==e&&39!==e&&Z(F);break;case 40:41===e&&Z(e);break;case 92:H()}return R}function J(e,t){for(;H()&&e+F!==57&&(e+F!==84||47!==W()););return"/*"+U(t,R-1)+"*"+x(47===e?e:H())}function ee(e){for(;!Y(W());)H();return U(e,R)}function te(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function re(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case v:return e.return=e.return||e.value;case h:return"";case b:return e.return=e.value+"{"+te(e.children,n)+"}";case g:if(!T(e.value=e.props.join(",")))return""}return T(r=te(e.children,n))?e.return=e.value+"{"+r+"}":""}function ne(e,t,r){switch(function(e,t){return 45^z(e,0)?(((t<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3):0}(e,t)){case 5103:return m+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+e+e;case 4789:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return m+e+f+e+p+e+e;case 5936:switch(z(e,t+11)){case 114:return m+e+p+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return m+e+p+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return m+e+p+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return m+e+p+e+e;case 6165:return m+e+p+"flex-"+e+e;case 5187:return m+e+C(e,/(\w+).+(:[^]+)/,m+"box-$1$2"+p+"flex-$1$2")+e;case 5443:return m+e+p+"flex-item-"+C(e,/flex-|-self/g,"")+(S(e,/flex-|baseline/)?"":p+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return m+e+p+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return m+e+p+C(e,"shrink","negative")+e;case 5292:return m+e+p+C(e,"basis","preferred-size")+e;case 6060:return m+"box-"+C(e,"-grow","")+m+e+p+C(e,"grow","positive")+e;case 4554:return m+C(e,/([^-])(transform)/g,"$1"+m+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+p+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+e+e;case 4200:if(!S(e,/flex-|baseline/))return p+"grid-column-align"+j(e,t)+e;break;case 2592:case 3360:return p+C(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,S(e.props,/grid-\w+-end/)}))?~E(e+(r=r[t].value),"span",0)?e:p+C(e,"-start","")+e+p+"grid-row-span:"+(~E(r,"span",0)?S(r,/\d+/):+S(r,/\d+/)-+S(e,/\d+/))+";":p+C(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return S(e.props,/grid-\w+-start/)}))?e:p+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,m+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(e)-1-t>6)switch(z(e,t+1)){case 109:if(45!==z(e,t+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+f+(108==z(e,t+3)?"$3":"$2-$3"))+e;case 115:return~E(e,"stretch",0)?ne(C(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,a,o,i,l){return p+r+":"+n+l+(a?p+r+"-span:"+(o?i:+i-+n)+l:"")+e}));case 4949:if(121===z(e,t+6))return C(e,":",":"+m)+e;break;case 6444:switch(z(e,45===z(e,14)?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(45===z(e,14)?"inline-":"")+"box$3$1"+m+"$2$3$1"+p+"$2box$3")+e;case 100:return C(e,":",":"+p)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function ae(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case v:return void(e.return=ne(e.value,e.length,r));case b:return te([I(e,{value:C(e.value,"@","@"+m)})],n);case g:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(S(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$(I(e,{props:[C(t,/:(read-\w+)/,":-moz-$1")]})),$(I(e,{props:[t]})),w(e,{props:P(r,n)});break;case"::placeholder":$(I(e,{props:[C(t,/:(plac\w+)/,":"+m+"input-$1")]})),$(I(e,{props:[C(t,/:(plac\w+)/,":-moz-$1")]})),$(I(e,{props:[C(t,/:(plac\w+)/,p+"input-$1")]})),$(I(e,{props:[t]})),w(e,{props:P(r,n)})}return""}))}}function oe(e){return X(ie("",null,null,null,[""],e=q(e),0,[0],e))}function ie(e,t,r,n,a,o,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,m=0,h=1,g=1,v=1,b=0,w="",k=a,S=o,j=n,_=w;g;)switch(m=b,b=H()){case 40:if(108!=m&&58==z(_,d-1)){-1!=E(_+=C(K(b),"&","&\f"),"&\f",y(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:_+=K(b);break;case 9:case 10:case 13:case 32:_+=Q(m);break;case 92:_+=G(B()-1,7);continue;case 47:switch(W()){case 42:case 47:N(se(J(H(),B()),t,r,s),s);break;default:_+="/"}break;case 123*h:l[c++]=T(_)*v;case 125*h:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==v&&(_=C(_,/\f/g,"")),f>0&&T(_)-d&&N(f>32?ce(_+";",n,r,d-1,s):ce(C(_," ","")+";",n,r,d-2,s),s);break;case 59:_+=";";default:if(N(j=le(_,t,r,c,u,a,l,w,k=[],S=[],d,o),o),123===b)if(0===u)ie(_,t,j,j,k,o,d,l,S);else switch(99===p&&110===z(_,3)?100:p){case 100:case 108:case 109:case 115:ie(e,j,j,n&&N(le(e,j,j,0,0,a,l,w,a,k=[],d,S),S),a,S,d,l,n?k:S);break;default:ie(_,j,j,j,[""],S,0,l,S)}}c=u=f=0,h=v=1,w=_="",d=i;break;case 58:d=1+T(_),f=m;default:if(h<1)if(123==b)--h;else if(125==b&&0==h++&&125==V())continue;switch(_+=x(b),b*h){case 38:v=u>0?1:(_+="\f",-1);break;case 44:l[c++]=(T(_)-1)*v,v=1;break;case 64:45===W()&&(_+=K(H())),p=W(),u=d=T(w=_+=ee(B())),b++;break;case 45:45===m&&2==T(_)&&(h=0)}}return o}function le(e,t,r,n,a,o,i,l,s,c,u,d){for(var p=a-1,f=0===a?o:[""],m=_(f),h=0,v=0,b=0;h<n;++h)for(var x=0,w=j(e,p+1,p=y(v=i[h])),S=e;x<m;++x)(S=k(v>0?f[x]+" "+w:C(w,/&\f/g,f[x])))&&(s[b++]=S);return M(e,t,r,0===a?g:l,s,c,u,d)}function se(e,t,r,n){return M(e,t,r,h,x(F),j(e,2,-2),0,n)}function ce(e,t,r,n,a){return M(e,t,r,v,j(e,0,n),j(e,n+1,-1),n,a)}var ue={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},de="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",pe="active",fe="data-styled-version",me="6.1.16",he="/*!sc*/\n",ge="undefined"!=typeof window&&"HTMLElement"in window,ve=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/poetest",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),be={},ye=(new Set,Object.freeze([])),xe=Object.freeze({});function we(e,t,r){return void 0===r&&(r=xe),e.theme!==r.theme&&e.theme||t||r.theme}var ke=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Se=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ce=/(^-|-$)/g;function Ee(e){return e.replace(Se,"-").replace(Ce,"")}var ze=/(a)(d)/gi,je=function(e){return String.fromCharCode(e+(e>25?39:97))};function Te(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=je(t%52)+r;return(je(t%52)+r).replace(ze,"$1-$2")}var _e,Ne=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Pe=function(e){return Ne(5381,e)};function Le(e){return Te(Pe(e)>>>0)}function Oe(e){return e.displayName||e.name||"Component"}function Ae(e){return"string"==typeof e&&!0}var Re="function"==typeof Symbol&&Symbol.for,Fe=Re?Symbol.for("react.memo"):60115,De=Re?Symbol.for("react.forward_ref"):60112,Me={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ie={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$e={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ve=((_e={})[De]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_e[Fe]=$e,_e);function He(e){return("type"in(t=e)&&t.type.$$typeof)===Fe?$e:"$$typeof"in e?Ve[e.$$typeof]:Me;var t}var We=Object.defineProperty,Be=Object.getOwnPropertyNames,Ue=Object.getOwnPropertySymbols,Ye=Object.getOwnPropertyDescriptor,qe=Object.getPrototypeOf,Xe=Object.prototype;function Ke(e,t,r){if("string"!=typeof t){if(Xe){var n=qe(t);n&&n!==Xe&&Ke(e,n,r)}var a=Be(t);Ue&&(a=a.concat(Ue(t)));for(var o=He(e),i=He(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Ie||r&&r[s]||i&&s in i||o&&s in o)){var c=Ye(t,s);try{We(e,s,c)}catch(e){}}}}return e}function Qe(e){return"function"==typeof e}function Ge(e){return"object"==typeof e&&"styledComponentId"in e}function Ze(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Je(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function et(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function tt(e,t,r){if(void 0===r&&(r=!1),!r&&!et(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=tt(e[n],t[n]);else if(et(t))for(var n in t)e[n]=tt(e[n],t[n]);return e}function rt(e,t){Object.defineProperty(e,"toString",{value:t})}function nt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var at=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,a=n;e>=a;)if((a<<=1)<0)throw nt(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=n;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var a=r;a<n;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),a=n+r,o=n;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(he);return t},e}(),ot=new Map,it=new Map,lt=1,st=function(e){if(ot.has(e))return ot.get(e);for(;it.has(lt);)lt++;var t=lt++;return ot.set(e,t),it.set(t,e),t},ct=function(e,t){lt=t+1,ot.set(e,t),it.set(t,e)},ut="style[".concat(de,"][").concat(fe,'="').concat(me,'"]'),dt=new RegExp("^".concat(de,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),pt=function(e,t,r){for(var n,a=r.split(","),o=0,i=a.length;o<i;o++)(n=a[o])&&e.registerName(t,n)},ft=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(he),a=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var s=l.match(dt);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(ct(u,c),pt(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},mt=function(e){for(var t=document.querySelectorAll(ut),r=0,n=t.length;r<n;r++){var a=t[r];a&&a.getAttribute(de)!==pe&&(ft(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ht(){return r.nc}var gt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(de,"]")));return t[t.length-1]}(r),o=void 0!==a?a.nextSibling:null;n.setAttribute(de,pe),n.setAttribute(fe,me);var i=ht();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},vt=function(){function e(e){this.element=gt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var a=t[r];if(a.ownerNode===e)return a}throw nt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),bt=function(){function e(e){this.element=gt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),yt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xt=ge,wt={isServer:!ge,useCSSOMInjection:!ve},kt=function(){function e(e,t,r){void 0===e&&(e=xe),void 0===t&&(t={});var n=this;this.options=s(s({},wt),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ge&&xt&&(xt=!1,mt(this)),rt(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",a=function(r){var a=function(e){return it.get(e)}(r);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(r);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(de,".g").concat(r,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),n+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(he)},o=0;o<r;o++)a(o);return n}(n)}))}return e.registerId=function(e){return st(e)},e.prototype.rehydrate=function(){!this.server&&ge&&mt(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(s(s({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new yt(r):t?new vt(r):new bt(r)}(this.options),new at(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(st(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(st(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(st(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),St=/&/g,Ct=/^\s*\/\/.*$/gm;function Et(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Et(e.children,t)),e}))}function zt(e){var t,r,n,a=void 0===e?xe:e,o=a.options,i=void 0===o?xe:o,l=a.plugins,s=void 0===l?ye:l,c=function(e,n,a){return a.startsWith(r)&&a.endsWith(r)&&a.replaceAll(r,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===g&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(St,r).replace(n,c))})),i.prefix&&u.push(ae),u.push(re);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,r=a,n=new RegExp("\\".concat(r,"\\b"),"g");var s=e.replace(Ct,""),c=oe(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(c=Et(c,i.namespace));var d,p=[];return te(c,function(e){var t=_(e);return function(r,n,a,o){for(var i="",l=0;l<t;l++)i+=e[l](r,n,a,o)||"";return i}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce((function(e,t){return t.name||nt(15),Ne(e,t.name)}),5381).toString():"",d}var jt=new kt,Tt=zt(),_t=e.createContext({shouldForwardProp:void 0,styleSheet:jt,stylis:Tt}),Nt=(_t.Consumer,e.createContext(void 0));function Pt(){return(0,e.useContext)(_t)}function Lt(t){var r=(0,e.useState)(t.stylisPlugins),n=r[0],a=r[1],o=Pt().styleSheet,i=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),l=(0,e.useMemo)((function(){return zt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})}),[t.enableVendorPrefixes,t.namespace,n]);(0,e.useEffect)((function(){d()(n,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:l}}),[t.shouldForwardProp,i,l]);return e.createElement(_t.Provider,{value:s},e.createElement(Nt.Provider,{value:l},t.children))}var Ot=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Tt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,rt(this,(function(){throw nt(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Tt),this.name+e.hash},e}(),At=function(e){return e>="A"&&e<="Z"};function Rt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;At(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ft=function(e){return null==e||!1===e||""===e},Dt=function(e){var t,r,n=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Ft(o)&&(Array.isArray(o)&&o.isCss||Qe(o)?n.push("".concat(Rt(a),":"),o,";"):et(o)?n.push.apply(n,c(c(["".concat(a," {")],Dt(o),!1),["}"],!1)):n.push("".concat(Rt(a),": ").concat((t=a,null==(r=o)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ue||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Mt(e,t,r,n){return Ft(e)?[]:Ge(e)?[".".concat(e.styledComponentId)]:Qe(e)?!Qe(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Mt(e(t),t,r,n):e instanceof Ot?r?(e.inject(r,n),[e.getName(n)]):[e]:et(e)?Dt(e):Array.isArray(e)?Array.prototype.concat.apply(ye,e.map((function(e){return Mt(e,t,r,n)}))):[e.toString()];var a}function It(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Qe(r)&&!Ge(r))return!1}return!0}var $t=Pe(me),Vt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&It(e),this.componentId=t,this.baseHash=Ne($t,t),this.baseStyle=r,kt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ze(n,this.staticRulesId);else{var a=Je(Mt(this.rules,e,t,r)),o=Te(Ne(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=r(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}n=Ze(n,o),this.staticRulesId=o}else{for(var l=Ne(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Je(Mt(u,e,t,r));l=Ne(l,d+c),s+=d}}if(s){var p=Te(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(s,".".concat(p),void 0,this.componentId)),n=Ze(n,p)}}return n},e}(),Ht=e.createContext(void 0);Ht.Consumer;var Wt={};new Set;function Bt(t,r,n){var a=Ge(t),o=t,i=!Ae(t),l=r.attrs,c=void 0===l?ye:l,u=r.componentId,d=void 0===u?function(e,t){var r="string"!=typeof e?"sc":Ee(e);Wt[r]=(Wt[r]||0)+1;var n="".concat(r,"-").concat(Le(me+r+Wt[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):u,p=r.displayName,f=void 0===p?function(e){return Ae(e)?"styled.".concat(e):"Styled(".concat(Oe(e),")")}(t):p,m=r.displayName&&r.componentId?"".concat(Ee(r.displayName),"-").concat(r.componentId):r.componentId||d,h=a&&o.attrs?o.attrs.concat(c).filter(Boolean):c,g=r.shouldForwardProp;if(a&&o.shouldForwardProp){var v=o.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;g=function(e,t){return v(e,t)&&b(e,t)}}else g=v}var y=new Vt(n,m,a?o.componentStyle:void 0);function x(t,r){return function(t,r,n){var a=t.attrs,o=t.componentStyle,i=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Ht),p=Pt(),f=t.shouldForwardProp||p.shouldForwardProp,m=we(r,d,i)||xe,h=function(e,t,r){for(var n,a=s(s({},t),{className:void 0,theme:r}),o=0;o<e.length;o+=1){var i=Qe(n=e[o])?n(a):n;for(var l in i)a[l]="className"===l?Ze(a[l],i[l]):"style"===l?s(s({},a[l]),i[l]):i[l]}return t.className&&(a.className=Ze(a.className,t.className)),a}(a,r,m),g=h.as||u,v={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===m||("forwardedAs"===b?v.as=h.forwardedAs:f&&!f(b,g)||(v[b]=h[b]));var y=function(e,t){var r=Pt();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(o,h),x=Ze(l,c);return y&&(x+=" "+y),h.className&&(x+=" "+h.className),v[Ae(g)&&!ke.has(g)?"class":"className"]=x,n&&(v.ref=n),(0,e.createElement)(g,v)}(w,t,r)}x.displayName=f;var w=e.forwardRef(x);return w.attrs=h,w.componentStyle=y,w.displayName=f,w.shouldForwardProp=g,w.foldedComponentIds=a?Ze(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=m,w.target=a?o.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,a=t;n<a.length;n++)tt(e,a[n],!0);return e}({},o.defaultProps,e):e}}),rt(w,(function(){return".".concat(w.styledComponentId)})),i&&Ke(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ut(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var Yt=function(e){return Object.assign(e,{isCss:!0})};function qt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Qe(e)||et(e))return Yt(Mt(Ut(ye,c([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Mt(n):Yt(Mt(Ut(n,t)))}function Xt(e,t,r){if(void 0===r&&(r=xe),!t)throw nt(1,t);var n=function(n){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,r,qt.apply(void 0,c([n],a,!1)))};return n.attrs=function(n){return Xt(e,t,s(s({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Xt(e,t,s(s({},r),n))},n}var Kt=function(e){return Xt(Bt,e)},Qt=Kt;ke.forEach((function(e){Qt[e]=Kt(e)}));var Gt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=It(e),kt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var a=n(Je(Mt(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&kt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var r=ht(),n=Je([r&&'nonce="'.concat(r,'"'),"".concat(de,'="true"'),"".concat(fe,'="').concat(me,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw nt(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw nt(2);var n=t.instance.toString();if(!n)return[];var a=((r={})[de]="",r[fe]=me,r.dangerouslySetInnerHTML={__html:n},r),o=ht();return o&&(a.nonce=o),[e.createElement("style",s({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new kt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw nt(2);return e.createElement(Lt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw nt(3)}})(),"__sc-".concat(de,"__");const Zt=(function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var a=qt.apply(void 0,c([t],r,!1)),o="sc-global-".concat(Le(JSON.stringify(a))),i=new Gt(a,o),l=function(t){var r=Pt(),n=e.useContext(Ht),a=e.useRef(r.styleSheet.allocateGSInstance(o)).current;return r.styleSheet.server&&u(a,t,r.styleSheet,n,r.stylis),e.useLayoutEffect((function(){if(!r.styleSheet.server)return u(a,t,r.styleSheet,n,r.stylis),function(){return i.removeStyles(a,r.styleSheet)}}),[a,t,r.styleSheet,n,r.stylis]),null};function u(e,t,r,n,a){if(i.isStatic)i.renderStyles(e,be,r,a);else{var o=s(s({},t),{theme:we(t,n,l.defaultProps)});i.renderStyles(e,o,r,a)}}return e.memo(l)})`
  :root {
    /* 主题变量 - 夜间模式 */
    --theme-background: #0C0E14;
    --theme-background-elevated: #141620;
    --theme-background-pressed: #1A1D28;
    --theme-surface: #1E2231;
    --theme-surface-hover: #252938;
    --theme-border: #2C2F3E;
    --theme-border-light: #3A3F53;
    --theme-text-primary: #FFFFFF;
    --theme-text-secondary: #A9B0C8;
    --theme-text-tertiary: #696E83;
    --theme-text-disabled: #484C59;
    
    /* 白天模式颜色变量 */
    --theme-light-background: #F8FAFC;
    --theme-light-background-elevated: #FFFFFF;
    --theme-light-background-pressed: #F0F8F4;
    --theme-light-surface: #FFFFFF;
    --theme-light-surface-hover: #F4FBF8;
    --theme-light-border: #E4F4EC;
    --theme-light-border-light: #EDF9F3;
    --theme-light-text-primary: #0E3A2B;
    --theme-light-text-secondary: #2A644F;
    --theme-light-text-tertiary: #5B8A7A;
    --theme-light-text-disabled: #A4C5BB;
    
    /* 主题品牌色 */
    --color-primary: #01E499;
    --color-primary-dark: #00C886;
    --color-primary-light: #33EDC6;
    --color-primary-alpha: rgba(1, 228, 153, 0.1);
    --color-primary-glow: rgba(1, 228, 153, 0.4);
    --color-secondary: #4D61FC;
    --color-secondary-dark: #3A4DE7;
    --color-secondary-light: #6478FF;
    --color-secondary-alpha: rgba(77, 97, 252, 0.1);
    --color-secondary-glow: rgba(77, 97, 252, 0.4);
    --color-accent: #FF5C5C;
    --color-accent-dark: #E04444;
    --color-accent-light: #FF8080;
    --color-accent-alpha: rgba(255, 92, 92, 0.1);
    --color-accent-glow: rgba(255, 92, 92, 0.4);
    --color-gold: #FFD700;
    --color-gold-dark: #E6C300;
    --color-gold-light: #FFDF33;
    --color-gold-alpha: rgba(255, 215, 0, 0.1);
    --color-gold-glow: rgba(255, 215, 0, 0.4);
    --color-success: #00C886;
    --color-warning: #FFB017;
    --color-purple: #9D6AFF;
    --color-cyan: #00DAFF;
    
    /* 引用主题变量 */
    --color-background: var(--theme-background);
    --color-background-elevated: var(--theme-background-elevated);
    --color-background-pressed: var(--theme-background-pressed);
    --color-surface: var(--theme-surface);
    --color-surface-hover: var(--theme-surface-hover);
    --color-border: var(--theme-border);
    --color-border-light: var(--theme-border-light);
    --color-text-primary: var(--theme-text-primary);
    --color-text-secondary: var(--theme-text-secondary);
    --color-text-tertiary: var(--theme-text-tertiary);
    --color-text-disabled: var(--theme-text-disabled);

    /* 间距系统 */
    --space-xxs: 4px;
    --space-xs: 8px;
    --space-sm: 12px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-xxl: 48px;
    
    /* 圆角半径 */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-full: 9999px;
    
    /* 阴影 */
    --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 10px rgba(0, 0, 0, 0.25);
    --shadow-lg: 0 8px 20px rgba(0, 0, 0, 0.3);
    --shadow-primary: 0 8px 16px rgba(1, 228, 153, 0.25);
    --shadow-secondary: 0 8px 16px rgba(77, 97, 252, 0.25);
    --shadow-accent: 0 8px 16px rgba(255, 92, 92, 0.25);
    --shadow-gold: 0 8px 16px rgba(255, 215, 0, 0.25);
    --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    
    /* 高级动效时间曲线 */
    --easing-explosive: cubic-bezier(0.34, 1.56, 0.64, 1);
    --easing-magnetic: cubic-bezier(0.23, 1, 0.32, 1.1);
    --easing-quantum: cubic-bezier(0.77, 0, 0.175, 1);
    
    /* 过渡动画 */
    --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: 0.5s var(--easing-explosive);
    
    /* 排版 */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;
    --font-size-xxl: 24px;
    --font-size-display: 32px;
    --font-size-hero: 40px;
    
    /* 布局 */
    --container-width: 1200px;
    --header-height: 70px;
    --card-gap: 20px;
    
    /* 边框 */
    --border-thin: 1px solid var(--color-border);
    --border-medium: 2px solid var(--color-border);
    --border-highlight: 1px solid var(--color-border-light);
    --border-glow: 1px solid var(--color-primary);
    
    /* 动态光照效果 */
    --x: 50%;
    --y: 50%;
    --cursor-glow: radial-gradient(
      circle at var(--x) var(--y), 
      var(--color-primary-glow) 0%, 
      transparent 70%
    );
    --cursor-scale: 1;

    /* 添加响应式间距变量 */
    @media (max-width: 767px) {
      --space-xl: 24px;
      --space-lg: 20px;
      --space-md: 16px;
      --space-sm: 12px;
      --space-xs: 8px;
      --space-xxs: 4px;
      
      --font-size-xl: 18px;
      --font-size-lg: 16px;
      --font-size-md: 14px;
      --font-size-sm: 12px;
      --font-size-xs: 11px;
    }
  }

  /* 增加触摸友好样式 */
  @media (max-width: 767px) {
    button, .interactive-element {
      min-height: 44px; /* 确保触摸目标足够大 */
    }
    
    /* 增加滚动流畅度 */
    * {
      -webkit-overflow-scrolling: touch;
    }
  }  

  /* 全局性能优化 */
  .gpu-layer {
    transform: translateZ(0);
    will-change: transform, opacity;
    backface-visibility: hidden;
    contain: layout style;
  }

  .performance-mode .complex-effect {
    display: none !important;
  }

  /* 重置样式 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text-primary);
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    line-height: 1.5;
    min-height: 100%;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all var(--transition-fast);
  }

  button {
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  /* 主题切换相关 */
  .theme-light {
    --border-thin: 1px solid var(--color-primary-alpha);
    --border-medium: 2px solid var(--color-primary-alpha);
    --border-highlight: 1px solid var(--color-primary-light);
    
    --color-background: var(--theme-light-background);
    --color-background-elevated: var(--theme-light-background-elevated);
    --color-background-pressed: var(--theme-light-background-pressed);
    --color-surface: var(--theme-light-surface);
    --color-surface-hover: var(--theme-light-surface-hover);
    --color-border: var(--theme-light-border);
    --color-border-light: var(--theme-light-border-light);
    --color-text-primary: var(--theme-light-text-primary);
    --color-text-secondary: var(--theme-light-text-secondary);
    --color-text-tertiary: var(--theme-light-text-tertiary);
    --color-text-disabled: var(--theme-light-text-disabled);
    
    /* 品牌色微调 */
    --color-primary: #01D191;
    --color-primary-dark: #00B67D;
    --color-primary-light: #33E1AD;
    --color-primary-alpha: rgba(1, 209, 145, 0.08);
    --color-primary-glow: rgba(1, 209, 145, 0.2);
    
    --color-secondary: #4361E7;
    --color-secondary-dark: #3451D1;
    --color-secondary-light: #6983FF;
    --color-secondary-alpha: rgba(67, 97, 231, 0.08);
    --color-secondary-glow: rgba(67, 97, 231, 0.2);
    
    --color-accent: #FF5147;
    --color-accent-dark: #E04444;
    --color-accent-light: #FF7A73;
    --color-accent-alpha: rgba(255, 81, 71, 0.08);
    --color-accent-glow: rgba(255, 81, 71, 0.2);
    
    --color-gold: #DFAE35;
    --color-gold-dark: #C69932;
    --color-gold-light: #F2CA65;
    --color-gold-alpha: rgba(223, 174, 53, 0.08);
    --color-gold-glow: rgba(223, 174, 53, 0.2);
  }
  
  /* 自定义滚动条 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  /* 白天模式下自定义滚动条颜色 */
  .theme-light ::-webkit-scrollbar-track {
    background: var(--theme-light-background);
  }

  .theme-light ::-webkit-scrollbar-thumb {
    background: var(--color-primary-alpha);
    border-radius: var(--radius-full);
  }

  .theme-light ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`,Jt=Zt,er=Qt.button`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 2000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: all 0.3s var(--easing-explosive);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.3;
  }

  &:hover {
    transform: translateY(-3px) rotate(15deg);
    box-shadow: var(--shadow-lg), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-toggle-icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s var(--easing-explosive);
  }

  &:hover .theme-toggle-icon {
    transform: scale(1.1);
  }

  .sun-icon {
    display: ${e=>e.isDarkMode?"block":"none"};
  }

  .moon-icon {
    display: ${e=>e.isDarkMode?"none":"block"};
  }

  .theme-light & {
    border-color: var(--color-primary);
  }

  @media (max-width: 767px) {
    display: none;
  }
`,tr=Qt.button`
  display: none;
  width: 100%;
  padding: var(--space-md);
  background-color: var(--color-background-elevated);
  border: var(--border-thin);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-md);
  font-weight: 500;
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  text-align: left;

  .theme-toggle-icon {
    width: 20px;
    height: 20px;
    margin-right: var(--space-sm);
    vertical-align: middle;
  }

  &:hover {
    background-color: var(--color-background-pressed);
    color: var(--color-primary);
    transform: translateX(4px);
  }

  &.active {
    background: var(--color-primary-alpha);
    color: var(--color-primary);
  }

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }

  .theme-light & {
    border-color: var(--color-primary);

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`,rr=t=>{let{isMobile:r}=t;const{isDarkMode:o,toggleTheme:i}=(0,e.useContext)(a),l=r?tr:er;return(0,n.jsxs)(l,{className:"theme-toggle interactive-element",onClick:i,isDarkMode:o,children:[(!r||r&&o)&&(0,n.jsxs)("svg",{className:"theme-toggle-icon sun-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,n.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,n.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,n.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,n.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,n.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,n.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,n.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,n.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),(!r||r&&!o)&&(0,n.jsx)("svg",{className:"theme-toggle-icon moon-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),r&&(o?"\u5207\u6362\u5230\u6d45\u8272\u6a21\u5f0f":"\u5207\u6362\u5230\u6df1\u8272\u6a21\u5f0f")]})},nr=()=>{const t=(0,e.useRef)(null),r=(0,e.useCallback)((()=>{if(!t.current)try{const e=window.AudioContext||window.webkitAudioContext;e&&(t.current=new e)}catch(e){console.error("Audio context not supported:",e)}return t.current}),[]);return{playClickSound:(0,e.useCallback)((()=>{const e=r();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="sine",t.frequency.setValueAtTime(800,e.currentTime),t.frequency.exponentialRampToValueAtTime(600,e.currentTime+.1),r.gain.setValueAtTime(0,e.currentTime),r.gain.linearRampToValueAtTime(.1,e.currentTime+.01),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.1),t.connect(r),r.connect(e.destination),t.start(),t.stop(e.currentTime+.1)}catch(t){console.error("Sound error:",t)}}),[r]),playErrorSound:(0,e.useCallback)((()=>{const e=r();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="sawtooth",t.frequency.setValueAtTime(400,e.currentTime),t.frequency.exponentialRampToValueAtTime(200,e.currentTime+.2),r.gain.setValueAtTime(0,e.currentTime),r.gain.linearRampToValueAtTime(.1,e.currentTime+.01),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),t.connect(r),r.connect(e.destination),t.start(),t.stop(e.currentTime+.2)}catch(t){console.error("Sound error:",t)}}),[r]),playRouletteSpinSound:(0,e.useCallback)((()=>{const e=r();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="triangle",t.frequency.setValueAtTime(330,e.currentTime),t.frequency.exponentialRampToValueAtTime(880,e.currentTime+1),t.frequency.exponentialRampToValueAtTime(440,e.currentTime+3),t.frequency.linearRampToValueAtTime(220,e.currentTime+7),r.gain.setValueAtTime(0,e.currentTime),r.gain.linearRampToValueAtTime(.15,e.currentTime+.5),r.gain.setValueAtTime(.15,e.currentTime+4),r.gain.linearRampToValueAtTime(0,e.currentTime+7);const n=e.createOscillator(),a=e.createGain();n.type="sine",n.frequency.setValueAtTime(1200,e.currentTime),n.frequency.exponentialRampToValueAtTime(600,e.currentTime+7),a.gain.setValueAtTime(0,e.currentTime),a.gain.linearRampToValueAtTime(.05,e.currentTime+.1),a.gain.setValueAtTime(.05,e.currentTime+5),a.gain.linearRampToValueAtTime(0,e.currentTime+7),t.connect(r),r.connect(e.destination),n.connect(a),a.connect(e.destination),t.start(),n.start(),t.stop(e.currentTime+7),n.stop(e.currentTime+7)}catch(t){console.error("Sound error:",t)}}),[r]),playWinSound:(0,e.useCallback)((()=>{const e=r();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="sine";const n=[523.25,659.25,783.99,1046.5,1318.51,1567.98],a=[.1,.1,.1,.15,.2,.3];let o=e.currentTime;n.forEach(((e,r)=>{t.frequency.setValueAtTime(e,o),o+=a[r]})),r.gain.setValueAtTime(0,e.currentTime),r.gain.linearRampToValueAtTime(.2,e.currentTime+.05),r.gain.setValueAtTime(.2,e.currentTime+.9),r.gain.linearRampToValueAtTime(0,e.currentTime+1.1);const i=e.createOscillator(),l=e.createGain();i.type="triangle",o=e.currentTime+.05;[329.63,415.3,493.88,659.25,830.61,987.77].forEach(((e,t)=>{i.frequency.setValueAtTime(e,o),o+=a[t]})),l.gain.setValueAtTime(0,e.currentTime),l.gain.linearRampToValueAtTime(.1,e.currentTime+.1),l.gain.setValueAtTime(.1,e.currentTime+.9),l.gain.linearRampToValueAtTime(0,e.currentTime+1.1),t.connect(r),r.connect(e.destination),i.connect(l),l.connect(e.destination),t.start(),i.start(),t.stop(e.currentTime+1.2),i.stop(e.currentTime+1.2)}catch(t){console.error("Sound error:",t)}}),[r]),playLoseSound:(0,e.useCallback)((()=>{const e=r();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="sawtooth";const n=[415.3,369.99,329.63,293.66,277.18],a=[.1,.1,.2,.2,.3];let o=e.currentTime;n.forEach(((e,r)=>{t.frequency.setValueAtTime(e,o),o+=a[r]})),r.gain.setValueAtTime(0,e.currentTime),r.gain.linearRampToValueAtTime(.15,e.currentTime+.05),r.gain.setValueAtTime(.15,e.currentTime+.8),r.gain.linearRampToValueAtTime(0,e.currentTime+1);const i=e.createOscillator(),l=e.createGain();i.type="sine",i.frequency.setValueAtTime(110,e.currentTime),i.frequency.linearRampToValueAtTime(80,e.currentTime+1),l.gain.setValueAtTime(0,e.currentTime),l.gain.linearRampToValueAtTime(.1,e.currentTime+.2),l.gain.linearRampToValueAtTime(0,e.currentTime+1),t.connect(r),r.connect(e.destination),i.connect(l),l.connect(e.destination),t.start(),i.start(),t.stop(e.currentTime+1),i.stop(e.currentTime+1)}catch(t){console.error("Sound error:",t)}}),[r]),playCoinSound:(0,e.useCallback)((()=>{const e=r();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="sine",t.frequency.setValueAtTime(800,e.currentTime),t.frequency.exponentialRampToValueAtTime(300,e.currentTime+.2),r.gain.setValueAtTime(0,e.currentTime),r.gain.linearRampToValueAtTime(.2,e.currentTime+.02),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.5),t.connect(r),r.connect(e.destination),t.start(),t.stop(e.currentTime+.5)}catch(t){console.error("Sound error:",t)}}),[r])}},ar=Qt.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-lg);
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: all 0.3s var(--easing-magnetic);
  white-space: nowrap;
  height: 40px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  backface-visibility: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:active {
    transform: scale(0.95);
  }

  ${e=>e.icon&&qt`
    display: inline-flex;
    gap: var(--space-xs);
    align-items: center;
  `}

  ${e=>"primary"===e.variant&&qt`
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
    color: #000;
    font-weight: 600;
    box-shadow: var(--shadow-primary), 0 0 0 0 var(--color-primary-glow);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(1, 228, 153, 0.3), 0 0 15px var(--color-primary-glow);
    }
  `}

  ${e=>"outline"===e.variant&&qt`
    background-color: transparent;
    border: 1px solid var(--color-border-light);
    color: var(--color-text-primary);
    box-shadow: var(--shadow-sm);

    &:hover {
      background-color: var(--color-background-pressed);
      border-color: var(--color-primary);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md), 0 0 10px var(--color-primary-glow);
    }
  `}

  ${e=>"lg"===e.size&&qt`
    height: 48px;
    padding: var(--space-sm) var(--space-xl);
    font-size: var(--font-size-md);
    border-radius: var(--radius-xl);
    letter-spacing: 0.3px;
  `}

  ${e=>e.fullWidth&&qt`
    width: 100%;
  `}
  
  ${e=>e.disabled&&qt`
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none;
    
    &:hover {
      transform: none !important;
      box-shadow: none;
    }
  `}
`,or=e=>{let{children:t,variant:r="outline",size:a="md",icon:o=null,fullWidth:i=!1,disabled:l=!1,onClick:s,...c}=e;const{playClickSound:u}=nr();return(0,n.jsxs)(ar,{variant:r,size:a,icon:!!o,fullWidth:i,disabled:l,onClick:e=>{l||("vibrate"in navigator&&navigator.vibrate(3),u(),s&&s(e))},...c,children:[o&&(0,n.jsx)("span",{className:"btn-icon",children:o}),t]})},ir=Qt.span`
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  z-index: 2;
`,lr=Qt.button`
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-xs) var(--space-sm);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: all 0.3s var(--easing-magnetic);
  height: 40px;
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-primary-alpha),
      transparent
    );
    transform: translateX(-100%);
    z-index: 1;
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }

  &:hover {
    background-color: var(--color-background-pressed);
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), 0 0 10px var(--color-primary-glow);
  }

  .theme-light & {
    border-color: var(--color-primary);
    background-color: var(--theme-light-background-elevated);
  }

  .theme-light &:hover {
    border-color: var(--color-primary-dark);
  }

  @media (max-width: 767px) {
    padding: var(--space-xxs) var(--space-xs);
    height: 36px;
    width: 36px;
    min-width: unset;
    justify-content: center;

    ${ir} {
      display: none;
    }
  }

  @media (min-width: 768px) {
    min-width: 80px;
    padding: var(--space-xs) var(--space-sm);
    
    ${ir} {
      display: flex;
    }
  }
`,sr=Qt.span`
  color: var(--color-text-secondary);
  position: relative;
  z-index: 2;
`,cr=Qt.span`
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #f7931a, #e88b00);
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 2px 4px rgba(247, 147, 26, 0.3);
  position: relative;
  transition: transform 0.3s var(--easing-explosive);

  ${lr}:hover & {
    transform: rotate(15deg) scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 60%
    );
  }
`,ur=Qt.div`
  position: relative;

  @media (max-width: 767px) {
    width: auto;
    margin-right: var(--space-xs);
  }
`,dr=Qt.div`
  position: absolute;
  top: calc(100% + var(--space-sm));
  right: 0;
  background-color: var(--color-background-elevated);
  border: var(--border-thin);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg), 0 0 30px rgba(1, 228, 153, 0.1);
  width: 420px;
  padding: var(--space-lg);
  z-index: 100;
  transform: translateY(10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s var(--easing-explosive);

  &.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }

  @media (max-width: 767px) {
    position: fixed;
    top: var(--header-height);
    bottom: auto;
    left: 0;
    right: 0;
    width: 96%;
    max-width: 96%;
    margin: 0 auto;
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
    transform: translateY(-100%);
    padding: var(--space-md);
    max-height: calc(100vh - var(--header-height));
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &.active {
      transform: translateY(0);
    }

    &.active.flip {
      top: var(--header-height);
      bottom: auto;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    &.active {
      transform: translateY(0);
      
      &.flip {
        top: auto;
        bottom: calc(100% + var(--space-sm));
        transform: translateY(0);
      }
    }
  }
`,pr=Qt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
`,fr=Qt.div`
  font-weight: 600;
  font-size: var(--font-size-md);
  background: linear-gradient(
    to right,
    var(--color-text-primary),
    var(--color-primary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,mr=Qt.button`
  color: var(--color-text-tertiary);
  font-size: var(--font-size-lg);
  line-height: 1;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s var(--easing-magnetic);

  &:hover {
    color: var(--color-text-primary);
    background-color: var(--color-background-pressed);
    transform: rotate(90deg);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,hr=Qt.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  border: var(--border-thin);
  box-shadow: var(--shadow-inner);
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-md);

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    opacity: 0.1;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.2;
  }
`,gr=Qt.div`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-xs);
  background: linear-gradient(
    to right,
    var(--color-text-primary),
    var(--color-text-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,vr=Qt.div`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
`,br=Qt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
`,yr=Qt.button`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  border: var(--border-thin);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      transparent,
      var(--color-primary-alpha),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background-color: var(--color-surface-hover);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  &:hover::after {
    opacity: 1;
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,xr=Qt.span`
  color: var(--color-primary);
  font-size: var(--font-size-md);
  transition: transform 0.3s var(--easing-explosive);

  ${yr}:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0 0 5px var(--color-primary-glow));
  }
`,wr=Qt.span`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  transition: color 0.3s ease;
  font-weight: 500;

  ${yr}:hover & {
    color: var(--color-primary);
  }
`,kr=Qt.div`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-sm);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`,Sr=Qt.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
`,Cr=Qt.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: var(--border-thin);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transform: translateX(-100%);
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }

  &:hover {
    background-color: var(--color-surface-hover);
    transform: translateX(8px);
    box-shadow: var(--shadow-md), 0 0 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,Er=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,zr=Qt.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s var(--easing-explosive);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 60%
    );
  }

  ${Cr}:hover & {
    transform: rotate(15deg) scale(1.1);
  }

  &.bitcoin {
    background: linear-gradient(135deg, #f7931a, #e88b00);
    color: white;
  }

  &.ethereum {
    background: linear-gradient(135deg, #627eea, #4a65d5);
    color: white;
  }
`,jr=Qt.div`
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: color 0.3s ease;

  ${Cr}:hover & {
    color: var(--color-primary);
  }
`,Tr=Qt.div`
  text-align: right;
`,_r=Qt.div`
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: color 0.3s ease;

  ${Cr}:hover & {
    color: var(--color-primary);
  }
`,Nr=Qt.div`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
`,Pr=Qt.button`
  width: 100%;
  padding: var(--space-sm);
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: all 0.3s var(--easing-magnetic);
  border: var(--border-thin);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-primary-alpha),
      transparent
    );
    transform: translateX(-100%);
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }

  &:hover {
    background-color: var(--color-surface-hover);
    color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,Lr=Qt.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal) var(--easing-magnetic);
  z-index: 99;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 767px) {
    display: block;
  }

  .theme-light & {
    background: rgba(0, 0, 0, 0.2);
  }
`,Or=()=>{const{walletBtc:t,walletEth:r,isWalletOpen:a,toggleWallet:o,closeWallet:l}=(0,e.useContext)(i),{playClickSound:s}=nr(),c=(0,e.useRef)(null),u=(0,e.useRef)(null);(0,e.useEffect)((()=>{const e=e=>{window.innerWidth<=767||!c.current||c.current.contains(e.target)||!u.current||u.current.contains(e.target)||l()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[l]),(0,e.useEffect)((()=>{const e=window.innerWidth<=767;if(a&&c.current&&!e){const e=c.current.getBoundingClientRect(),t=window.innerHeight;e.bottom>t?c.current.classList.add("flip"):c.current.classList.remove("flip")}}),[a]);const d=()=>{s(),"vibrate"in navigator&&navigator.vibrate(3)};return(0,n.jsxs)(ur,{children:[(0,n.jsxs)(lr,{className:"wallet-btn interactive-element",onClick:o,ref:u,children:[(0,n.jsx)(sr,{children:(0,n.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M16.5 20.25V6C16.5 5.60218 16.342 5.22064 16.0607 4.93934C15.7794 4.65804 15.3978 4.5 15 4.5H6.75C6.35218 4.5 5.97064 4.65804 5.68934 4.93934C5.40804 5.22064 5.25 5.60218 5.25 6V8.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M20.25 12.75H16.5C15.672 12.75 15 13.422 15 14.25C15 15.078 15.672 15.75 16.5 15.75H20.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),(0,n.jsxs)(ir,{children:[(0,n.jsx)(cr,{children:"\u20bf"}),(0,n.jsx)("span",{children:t.toFixed(4)})]})]}),a&&(0,n.jsx)(Lr,{className:"active",onClick:l}),(0,n.jsxs)(dr,{ref:c,className:a?"active":"",children:[(0,n.jsxs)(pr,{children:[(0,n.jsx)(fr,{children:"\u6211\u7684\u94b1\u5305"}),(0,n.jsx)(mr,{className:"interactive-element",onClick:l,children:"\xd7"})]}),(0,n.jsxs)(hr,{className:"interactive-element",children:[(0,n.jsxs)(gr,{children:[t.toFixed(4)," BTC"]}),(0,n.jsxs)(vr,{children:["\u2248 \xa5",(305548*t).toFixed(2)]})]}),(0,n.jsxs)(br,{children:[(0,n.jsxs)(yr,{className:"interactive-element",onClick:d,children:[(0,n.jsx)(xr,{children:(0,n.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M12 4V20M12 4L18 10M12 4L6 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,n.jsx)(wr,{children:"\u5145\u503c"})]}),(0,n.jsxs)(yr,{className:"interactive-element",onClick:d,children:[(0,n.jsx)(xr,{children:(0,n.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M12 20V4M12 20L6 14M12 20L18 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,n.jsx)(wr,{children:"\u63d0\u73b0"})]}),(0,n.jsxs)(yr,{className:"interactive-element",onClick:d,children:[(0,n.jsx)(xr,{children:(0,n.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4 4H20M4 8H20M4 12H20M4 16H12M4 20H12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,n.jsx)(wr,{children:"\u5386\u53f2"})]})]}),(0,n.jsxs)(kr,{children:[(0,n.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M12 6V18M12 6L7 11M12 6L17 11",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"\u6211\u7684\u8d44\u4ea7"]}),(0,n.jsxs)(Sr,{children:[(0,n.jsxs)(Cr,{className:"interactive-element",children:[(0,n.jsxs)(Er,{children:[(0,n.jsx)(zr,{className:"bitcoin",children:"\u20bf"}),(0,n.jsx)(jr,{children:"\u6bd4\u7279\u5e01"})]}),(0,n.jsxs)(Tr,{children:[(0,n.jsxs)(_r,{children:[t.toFixed(4)," BTC"]}),(0,n.jsxs)(Nr,{children:["\u2248 \xa5",(305548*t).toFixed(2)]})]})]}),(0,n.jsxs)(Cr,{className:"interactive-element",children:[(0,n.jsxs)(Er,{children:[(0,n.jsx)(zr,{className:"ethereum",children:"\u039e"}),(0,n.jsx)(jr,{children:"\u4ee5\u592a\u574a"})]}),(0,n.jsxs)(Tr,{children:[(0,n.jsxs)(_r,{children:[r.toFixed(3)," ETH"]}),(0,n.jsxs)(Nr,{children:["\u2248 \xa5",(5608*r).toFixed(2)]})]})]})]}),(0,n.jsx)(Pr,{className:"interactive-element",onClick:d,children:"\u7ba1\u7406\u94b1\u5305"})]})]})},Ar=Qt.header`
  background-color: rgba(12, 14, 20, 0.9);
  border-bottom: var(--border-thin);
  height: var(--header-height);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s var(--easing-quantum);

  &.scrolled {
    transform: translateY(-100%);
  }

  &.scrolled.visible {
    transform: translateY(0);
  }

  .theme-light & {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--theme-light-border);
    box-shadow: 0 4px 20px rgba(1, 209, 145, 0.05);
  }
`,Rr=Qt.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
`,Fr=Qt.a`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: auto;
  margin-right: var(--space-md);
  transition: transform 0.3s var(--easing-explosive);

  &:hover {
    transform: scale(1.05);
  }
`,Dr=Qt.div`
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-background);
  font-weight: 700;
  font-size: var(--font-size-md);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-primary);
  transition: transform 0.3s var(--easing-explosive);

  ${Fr}:hover & {
    transform: rotate(-10deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 60%
    );
  }
`,Mr=Qt.div`
  display: inline-block;
  white-space: nowrap;
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
`,Ir=Qt.span`
  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-cyan)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,$r=Qt.nav`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,Vr=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 991px) {
    display: ${e=>e.isOpen?"flex":"none"};
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    background-color: var(--color-background);
    padding: var(--space-md);
    flex-direction: column;
    align-items: flex-start;
    border-bottom: var(--border-thin);
    box-shadow: var(--shadow-lg);
    animation: navSlideDown 0.3s var(--easing-explosive);

    .theme-light & {
      background-color: var(--theme-light-background-elevated);
    }
  }

  @keyframes navSlideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Hr=Qt.a`
  color: var(--color-text-secondary);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  font-size: 16px;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-primary-light)
    );
    border-radius: var(--radius-full);
    transition: width 0.3s var(--easing-explosive);
  }

  &:hover::after,
  &.active::after {
    width: 70%;
  }

  &:hover,
  &.active {
    color: var(--color-text-primary);
    background-color: var(--color-background-elevated);
    transform: translateY(-2px);
  }

  &.active {
    color: var(--color-primary);
    background-color: var(--color-primary-alpha);
  }

  .theme-light & {
    color: var(--theme-light-text-secondary) !important;
  }

  .theme-light &:hover,
  .theme-light &.active {
    color: var(--theme-light-text-primary) !important;
    background-color: var(--theme-light-background-elevated) !important;
  }

  .theme-light &.active {
    color: var(--color-primary-dark) !important;
  }

  @media (max-width: 991px) {
    width: 100%;
    padding: var(--space-sm) var(--space-md);

    &::after {
      bottom: auto;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 3px;
      height: 0;
    }

    &:hover::after,
    &.active::after {
      width: 3px;
      height: 70%;
    }
  }
`,Wr=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-shrink: 0;
  margin-left: auto;

  @media (max-width: 767px) {
    gap: var(--space-xxs);

    .desktop-only {
      display: none;
    }
  }

  @media (min-width: 768px) {
    gap: var(--space-md);

    .menu-toggle {
      display: none;
    }
  }
`,Br=Qt.button`
  display: none; // 默认隐藏
  width: 44px; // 使用移动端友好的点击区域
  height: 44px;
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  background-color: var(--color-background-pressed);
  border: var(--border-thin);
  font-size: var(--font-size-lg);
  transition: all var(--transition-normal) var(--easing-magnetic);

  &:hover {
    background-color: var(--color-background-elevated);
    color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity var(--transition-fast);
    z-index: -1;
  }

  &:hover::after {
    opacity: 0.5;
  }

  @media (max-width: 767px) {
    display: flex; // 移动端显示
    align-items: center;
    justify-content: center;
  }

  .theme-light & {
    border: var(--border-thin);
    color: var(--theme-light-text-primary);
    background-color: var(--theme-light-background-pressed);
  }
`,Ur=Qt.div`
  display: none;
  position: fixed;
  top: var(--header-height);
  right: 0;
  bottom: 0;
  width: 280px;
  height: calc(100vh - var(--header-height));
  background: var(--color-background-elevated);
  padding: var(--space-lg);
  box-shadow: var(--shadow-lg);
  transform: translateX(100%);
  transition: all var(--transition-normal) var(--easing-explosive);
  z-index: 1000;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding-bottom: calc(var(--space-lg) + env(safe-area-inset-bottom, 20px));
  opacity: 0;
  visibility: hidden;

  &.active {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;

    ${Hr} {
      opacity: 0;
      transform: translateX(20px);
      animation: slideIn 0.4s var(--easing-explosive) forwards;

      @for $i from 1 through 7 {
        &:nth-child(#{$i}) {
          animation-delay: #{0.1 + $i * 0.05}s;
        }
      }
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  ${Hr} {
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--space-md);
    margin-bottom: var(--space-xs);
    text-align: left;
    border-radius: var(--radius-md);
    font-size: var(--font-size-md);
    font-weight: 500;
    color: var(--color-text-secondary);
    transition: all var(--transition-normal) var(--easing-magnetic);
    opacity: 0;
    transform: translateX(20px);

    &:hover {
      background: var(--color-background-pressed);
      color: var(--color-text-primary);
      transform: translateX(4px);
    }

    &.active {
      background: var(--color-primary-alpha);
      color: var(--color-primary);
    }

    &:first-child {
      margin-bottom: var(--space-lg);
      color: var(--color-primary);
      border: 1px solid var(--color-primary-alpha);

      &:hover {
        background: var(--color-primary-alpha);
        transform: translateX(4px);
      }
    }
  }

  ${Hr}:last-child {
    margin-bottom: var(--space-lg);
  }

  @media (max-width: 767px) {
    display: block;
  }

  /* 适配刘海屏和底部操作条 */
  @supports (padding: max(0px)) {
    padding-top: max(var(--space-lg), env(safe-area-inset-top));
    padding-right: max(var(--space-lg), env(safe-area-inset-right));
    padding-bottom: max(var(--space-lg), env(safe-area-inset-bottom));
  }

  .theme-light & {
    background: var(--theme-light-background-elevated);
    border-left: var(--border-thin);

    ${Hr} {
      color: var(--theme-light-text-secondary);

      &:hover {
        color: var(--theme-light-text-primary);
      }

      &.active {
        color: var(--color-primary-dark);
      }

      &:first-child {
        color: var(--color-primary-dark);
      }
    }
  }
`,Yr=Qt.div`
  display: none;
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal) var(--easing-explosive);
  z-index: 999;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 767px) {
    display: block;
  }

  .theme-light & {
    background: rgba(0, 0, 0, 0.2);
  }
`,qr=()=>{const{walletBtc:t,toggleWallet:r}=(0,e.useContext)(i),[a,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!0),[c,u]=(0,e.useState)(0),[d,p]=(0,e.useState)(!1),[f,m]=(0,e.useState)(null),h=(0,e.useRef)(null),[g,v]=(0,e.useState)(window.innerWidth<=767);(0,e.useEffect)((()=>{const e=()=>{v(window.innerWidth<=767)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,e.useEffect)((()=>{const e=e=>{d&&h.current&&!h.current.contains(e.target)&&!e.target.closest(".menu-toggle")&&p(!1)},t=e=>{"Escape"===e.key&&d&&p(!1)};return d&&(document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),document.addEventListener("keydown",t),document.body.style.overflow="hidden"),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e),document.removeEventListener("keydown",t),document.body.style.overflow=""}}),[d]);(0,e.useEffect)((()=>{const e=()=>{const e=window.scrollY;e>100?(o(!0),s(!(e>c))):o(!1),u(e)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[c]);return(0,n.jsx)(Ar,{className:`${a?"scrolled":""} ${l?"visible":""}`,children:(0,n.jsxs)(Rr,{children:[(0,n.jsxs)(Fr,{href:"#",className:"interactive-element",children:[(0,n.jsx)(Dr,{children:"P"}),(0,n.jsxs)(Mr,{children:["Poker",(0,n.jsx)(Ir,{children:"Now"})]})]}),!g&&(0,n.jsx)($r,{children:(0,n.jsxs)(Vr,{isOpen:d,children:[(0,n.jsx)(Hr,{href:"#",className:"nav-link active interactive-element",children:"\u9996\u9875"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"\u6e38\u620f"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"\u9526\u6807\u8d5b"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"\u6392\u884c\u699c"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"\u5956\u52b1"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"VIP"})]})}),(0,n.jsxs)(Wr,{children:[(0,n.jsx)(Or,{walletBtc:t,toggleWallet:r}),(0,n.jsx)(or,{variant:"outline",className:"desktop-only interactive-element",children:"\u767b\u5f55"}),(0,n.jsx)(or,{variant:"primary",className:"desktop-only pulse interactive-element",children:"\u6ce8\u518c"}),(0,n.jsx)(Br,{className:"menu-toggle interactive-element",onClick:()=>{p(!d),"vibrate"in navigator&&navigator.vibrate(3)},"aria-label":"\u83dc\u5355",children:"\u2630"})]}),(0,n.jsx)(Yr,{className:d?"active":"",onClick:()=>p(!1)}),(0,n.jsxs)(Ur,{ref:h,className:d?"active":"",onTouchStart:e=>{m(e.touches[0].clientX)},onTouchMove:e=>{if(!f)return;const t=e.touches[0].clientX;f-t<-50&&(p(!1),m(null))},onTouchEnd:()=>{m(null)},children:[(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"\u767b\u5f55/\u6ce8\u518c"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link active interactive-element",children:"\u9996\u9875"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"\u6e38\u620f"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"\u9526\u6807\u8d5b"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"\u6392\u884c\u699c"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"\u5956\u52b1"}),(0,n.jsx)(Hr,{href:"#",className:"nav-link interactive-element",children:"VIP"}),(0,n.jsx)(rr,{isMobile:!0})]})]})})},Xr=Qt.section`
  text-align: center;
  padding: var(--space-xxl) 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--color-background);
  margin-bottom: var(--space-xl);
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    opacity: 0.4;
    filter: blur(50px);
    z-index: 0;
    animation: pulse 8s infinite alternate ease-in-out;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.3; }
    100% { transform: scale(1.3); opacity: 0.5; }
  }
  
  &::before {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%);
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }
  
  &::after {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, var(--color-secondary-glow) 0%, transparent 70%);
    bottom: -80px;
    left: -80px;
    animation-delay: 2s;
  }
  
  .theme-light & {
    background-color: var(--theme-light-background);
    background-image: 
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%2301d191' fill-opacity='0.05' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'%3E%3C/path%3E%3C/svg%3E"),
      radial-gradient(circle at 10% 20%, rgba(1, 209, 145, 0.07) 0%, transparent 30%),
      radial-gradient(circle at 90% 80%, rgba(1, 209, 145, 0.07) 0%, transparent 30%);
    position: relative;
  }
  
  .theme-light &::before, .theme-light &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(50px);
    z-index: 0;
    animation: lightPulse 8s infinite alternate ease-in-out;
  }
  
  @keyframes lightPulse {
    0% { transform: scale(1); opacity: 0.3; }
    100% { transform: scale(1.3); opacity: 0.5; }
  }
  
  .theme-light &::before {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(1, 209, 145, 0.2) 0%, transparent 70%);
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }
  
  .theme-light &::after {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(1, 209, 145, 0.25) 0%, transparent 70%);
    bottom: -80px;
    left: -80px;
    animation-delay: 2s;
  }
`,Kr=Qt.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(1, 228, 153, 0.05) 0%, 
    rgba(12, 14, 20, 0) 50%, 
    rgba(77, 97, 252, 0.05) 100%);
  z-index: 0;
  
  .theme-light & {
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 1500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' stroke='%2301d191' stroke-width='0.5' stroke-opacity='0.08' d='M0 6 L24 6 M6 0 L6 24 M12 0 L12 24 M18 0 L18 24 M0 12 L24 12 M0 18 L24 18'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E"),
    linear-gradient(135deg, 
      rgba(1, 209, 145, 0.05) 0%, 
      rgba(255, 255, 255, 0) 50%, 
      rgba(1, 209, 145, 0.05) 100%);
    z-index: 0;
    opacity: 0.7;
  }
`,Qr=Qt.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  width: 100%;
`,Gr=Qt.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Zr=Qt.h1`
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-lg);
  position: relative;
  transform: translateZ(0);
  will-change: transform;
  animation: titleGlow 4s infinite alternate ease-in-out;
  
  @keyframes titleGlow {
    0% { text-shadow: 0 0 10px rgba(1, 228, 153, 0); }
    100% { text-shadow: 0 0 15px rgba(1, 228, 153, 0.4); }
  }
`,Jr=Qt.p`
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  position: relative;
`,en=Qt.div`
  display: inline-flex;
  gap: var(--space-md);
  position: relative;
  
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    gap: var(--space-sm);
  }
`,tn=()=>(0,n.jsxs)(Xr,{className:"hero",children:[(0,n.jsx)(Kr,{className:"hero-background"}),(0,n.jsx)(Qr,{children:(0,n.jsxs)(Gr,{"data-parallax":"0.2",children:[(0,n.jsx)(Zr,{children:"\u6700\u597d\u73a9\u7684\u52a0\u5bc6\u8d27\u5e01\u6e38\u620f\u5e73\u53f0"}),(0,n.jsx)(Jr,{children:"\u4f53\u9a8c\u9ad8\u8d28\u91cf\u7684\u6251\u514b\u548c\u6e38\u620f\uff0c\u4e0e\u6765\u81ea\u5168\u7403\u7684\u73a9\u5bb6\u4e00\u540c\u7ade\u6280\uff0c\u5c3d\u60c5\u4eab\u53d7\u9ad8\u54c1\u8d28\u5a31\u4e50\u3002"}),(0,n.jsxs)(en,{children:[(0,n.jsx)(or,{variant:"primary",size:"lg",className:"interactive-element",children:"\u7acb\u5373\u5f00\u59cb"}),(0,n.jsx)(or,{variant:"outline",size:"lg",className:"interactive-element",children:"\u4e86\u89e3\u66f4\u591a"})]})]})})]}),rn=Qt.div`
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background: var(--color-background-elevated);
  border-radius: var(--radius-lg);
  border: var(--border-thin);
  margin: 0 10px 10px;  // 与外层容器保持一致的边距,底部增加10px间距
  
  @media (max-width: 560px) {
    // 移动端样式
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding: var(--space-xs);
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    // 添加左右渐变遮罩，提示可滚动
    background: linear-gradient(
      to right,
      var(--color-background-elevated) 0%,
      var(--color-background-elevated) 90%,
      transparent 100%
    );
  }

  @media (min-width: 768px) {
    // PC端样式
    flex-wrap: wrap;
    justify-content: center;
    padding: var(--space-md);
    gap: var(--space-md);
  }
`,nn=Qt.button`
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-full);
  background: ${e=>e.isActive?"var(--color-primary)":"var(--color-background-pressed)"};
  color: ${e=>e.isActive?"var(--color-background)":"var(--color-text)"};
  border: 1px solid ${e=>e.isActive?"var(--color-primary)":"transparent"};
  font-weight: ${e=>e.isActive?"600":"500"};
  white-space: nowrap;
  transition: all 0.3s var(--easing-magnetic);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.isActive?"0 8px 16px var(--color-primary-glow)":"var(--shadow-sm)"};
  }
  
  @media (max-width: 560px) {
    // 移动端样式
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
    flex: 0 0 auto;
    min-width: 80px;  // 确保每个tab有最小宽度
  }

  @media (min-width: 768px) {
    // PC端样式
    padding: var(--space-sm) var(--space-lg);
    min-width: 120px;
  }
`,an=()=>{const[t,r]=(0,e.useState)(0),{playClickSound:a}=nr();return(0,n.jsx)(rn,{children:[{id:0,name:"\u5168\u90e8\u6e38\u620f",icon:"\ud83c\udfae"},{id:1,name:"\u70ed\u95e8\u6e38\u620f",icon:"\ud83d\udd25"},{id:2,name:"\u6700\u65b0\u4e0a\u7ebf",icon:"\u2728"},{id:3,name:"\u6211\u7684\u6536\u85cf",icon:"\u2b50"},{id:4,name:"\u63a8\u8350\u6e38\u620f",icon:"\ud83d\udc4d"}].map((e=>(0,n.jsxs)(nn,{isActive:e.id===t,onClick:()=>{return t=e.id,r(t),a(),void("vibrate"in navigator&&navigator.vibrate(3));var t},children:[(0,n.jsx)("span",{className:"icon",style:{marginRight:"4px"},children:e.icon}),e.name]},e.id)))})},on=Qt.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
    var(--color-background-elevated) 100%
  );
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border: var(--border-thin);
  box-shadow: var(--shadow-inner), 0 0 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.4s var(--easing-magnetic);
  z-index: 1;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
  @media (max-width: 480px) {
    padding: var(--space-sm);
    margin: 0 var(--space-xs);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md), 0 10px 30px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  &::before {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    background: radial-gradient(
      circle,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    bottom: -120px;
    right: -120px;
    border-radius: 50%;
    opacity: 0.4;
    filter: blur(40px);
    z-index: 0;
    transition: all 0.5s ease;
  }

  &::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      var(--color-accent-glow) 0%,
      transparent 70%
    );
    top: -100px;
    left: -100px;
    border-radius: 50%;
    opacity: 0.3;
    filter: blur(40px);
    z-index: 0;
    transition: all 0.5s ease;
  }

  &:hover::before {
    opacity: 0.6;
    transform: scale(1.3);
  }

  &:hover::after {
    opacity: 0.5;
    transform: scale(1.3);
  }

  &.shake-animation {
    animation: shake 0.5s ease-in-out;
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-5px);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(5px);
    }
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,ln=Qt.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin-bottom: var(--space-lg);
  z-index: 1;
  perspective: 1200px;

  @media (max-width: 420px) {
    width: 260px;
    height: 260px;
  }
`,sn=Qt.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.4s var(--easing-magnetic);
  will-change: transform;
`,cn=Qt.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    var(--color-accent) 0deg 18deg,
    #000000 18deg 36deg,
    var(--color-accent) 36deg 54deg,
    #000000 54deg 72deg,
    var(--color-accent) 72deg 90deg,
    #000000 90deg 108deg,
    var(--color-accent) 108deg 126deg,
    #000000 126deg 144deg,
    var(--color-accent) 144deg 162deg,
    #000000 162deg 180deg,
    var(--color-accent) 180deg 198deg,
    #000000 198deg 216deg,
    var(--color-accent) 216deg 234deg,
    #000000 234deg 252deg,
    var(--color-accent) 252deg 270deg,
    #000000 270deg 288deg,
    var(--color-accent) 288deg 306deg,
    #000000 306deg 324deg,
    var(--color-accent) 324deg 342deg,
    #000000 342deg 360deg
  );
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6), 0 0 20px var(--color-accent-glow),
    inset 0 0 30px rgba(0, 0, 0, 0.7);
  border: 12px solid var(--color-background);
  transition: transform 7s cubic-bezier(0.12, 0.95, 0.3, 1);
  transform-origin: center;
  will-change: transform;
  backface-visibility: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    z-index: 2;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.15);
    z-index: 2;
    pointer-events: none;
  }

  &.spin-animation {
    animation: spinFlash 7s linear forwards;
  }

  @keyframes spinFlash {
    0% {
      filter: brightness(1);
    }
    10% {
      filter: brightness(1.3);
    }
    20% {
      filter: brightness(1);
    }
    35% {
      filter: brightness(1.2);
    }
    50% {
      filter: brightness(1);
    }
    75% {
      filter: brightness(1.1);
    }
    90% {
      filter: brightness(1.3);
    }
    100% {
      filter: brightness(1);
    }
  }

  .theme-light & {
    box-shadow: 0 0 30px rgba(1, 209, 145, 0.1),
      0 0 15px var(--color-accent-glow);
    border: 8px solid var(--color-background);
  }
`,un=Qt.div`
  width: 80px;
  height: 80px;
  background: radial-gradient(
    circle,
    var(--color-background-elevated) 0%,
    var(--color-background) 100%
  );
  border-radius: 50%;
  position: absolute;
  border: 4px solid var(--color-border-light);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: conic-gradient(
      transparent 0deg,
      rgba(255, 255, 255, 0.1) 60deg,
      transparent 120deg
    );
    animation: rotateCenter 10s linear infinite;
  }

  &::after {
    content: "";
    width: 35px;
    height: 35px;
    background: linear-gradient(
      135deg,
      var(--color-primary),
      var(--color-primary-dark)
    );
    border-radius: 50%;
    box-shadow: 0 0 20px var(--color-primary-glow),
      inset 0 0 10px rgba(255, 255, 255, 0.5);
    position: relative;
    z-index: 5;
    animation: centerPulse 2s infinite alternate ease-in-out;
  }

  @keyframes centerPulse {
    0% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1.05);
    }
  }

  @keyframes rotateCenter {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .theme-light & {
    background: radial-gradient(circle, white, #f4fbf8);
    border: 3px solid var(--theme-light-border);
  }
`,dn=Qt.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transition: opacity 1s ease;

  &.red {
    box-shadow: 0 0 30px var(--color-accent-glow),
      inset 0 0 20px var(--color-accent-glow);
  }

  &.black {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.3),
      inset 0 0 20px rgba(255, 255, 255, 0.1);
  }

  &.active {
    opacity: 1;
    animation: glowPulse 2s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }
`,pn=Qt.div`
  position: absolute;
  width: 14px;
  height: 14px;
  background: radial-gradient(circle at 30% 30%, white, #bbb);
  border-radius: 50%;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  will-change: transform;

  &.active {
    opacity: 1;
    animation: ballRotate 7s cubic-bezier(0.12, 0.95, 0.3, 1) forwards;
  }

  @keyframes ballRotate {
    0% {
      transform: translate(calc(-50% + 130px), -50%) rotate(0deg);
    }
    80% {
      transform: translate(calc(-50% + 80px), -50%) rotate(1800deg);
    }
    95% {
      transform: translate(calc(-50% + 30px), -50%) rotate(1980deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(2160deg);
    }
  }
`,fn=Qt.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
`,mn=Qt.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 22px solid var(--color-primary);
  filter: drop-shadow(0 0 8px var(--color-primary-glow));
  transform-origin: center bottom;
  animation: pinPulse 1.5s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: -22px;
    left: -12px;
    width: 24px;
    height: 6px;
    background: var(--color-primary-dark);
    border-radius: 3px 3px 0 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: -16px;
    left: -6px;
    width: 12px;
    height: 12px;
    background: var(--color-primary-light);
    border-radius: 50%;
    box-shadow: inset 0 -2px 3px rgba(0, 0, 0, 0.2);
  }

  @keyframes pinPulse {
    0%,
    100% {
      transform: scale(1);
      filter: drop-shadow(0 0 8px var(--color-primary-glow));
    }
    50% {
      transform: scale(1.1);
      filter: drop-shadow(0 0 12px var(--color-primary-glow));
    }
  }
`,hn=Qt.div`
  position: absolute;
  top: -15px;
  bottom: -15px;
  left: -15px;
  right: -15px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--color-background-elevated) 0%,
    var(--color-background) 100%
  );
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,gn=Qt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 6;
  overflow: hidden;
`,vn=Qt.div`
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-md);
  position: relative;
  z-index: 1;
`,bn=Qt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  transition: all 0.3s var(--easing-magnetic);
  opacity: 0.7;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -15px;
    border-radius: var(--radius-lg);
    background: radial-gradient(
      circle at center,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.3;
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    opacity: 1;
  }

  &.active {
    opacity: 1;
    transform: translateY(-3px);
  }

  &.active .color-indicator {
    border: 3px solid white;
    box-shadow: 0 0 20px var(--color-primary-glow);
  }

  &.pulse-animation .color-indicator {
    animation: highlight-pulse 1.5s infinite;
  }

  @keyframes highlight-pulse {
    0% {
      box-shadow: 0 0 0 0 var(--color-primary-glow);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(1, 228, 153, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(1, 228, 153, 0);
    }
  }
`,yn=Qt.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid var(--color-border-light);
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s var(--easing-explosive);

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 60%
    );
  }
`,xn=Qt(yn)`
  background: linear-gradient(
    135deg,
    var(--color-accent),
    var(--color-accent-dark)
  );
`,wn=Qt(yn)`
  background: linear-gradient(135deg, #333, #000);
`,kn=Qt.div`
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all 0.3s ease;

  ${bn}:hover &,
  ${bn}.active & {
    color: var(--color-primary);
    font-weight: 600;
    text-shadow: 0 0 5px var(--color-primary-glow);
  }
`,Sn=t=>{let{isSpinning:r,selectedBet:a,onSelectBet:o,spinResult:i,resultIndicatorRef:l,simplifiedEffects:s}=t;const[c,u]=(0,e.useState)(!1),[d,p]=(0,e.useState)(0),[f,m]=(0,e.useState)(0),[h,g]=(0,e.useState)(0),[v,b]=(0,e.useState)(!1),[y,x]=(0,e.useState)(!1),[w,k]=(0,e.useState)(null),{playClickSound:S}=nr(),C=e=>{o(e),S(),"vibrate"in navigator&&navigator.vibrate(3),E(e)},E=e=>{const t=document.getElementById("particlesContainer");if(!t||document.documentElement.classList.contains("performance-mode"))return;t.innerHTML="";const r="red"===e?"var(--color-accent)":"#FFFFFF";for(let n=0;n<20;n++){const e=document.createElement("div");e.className="particle",e.style.background=r;const n=280*Math.random(),a=280*Math.random();e.style.left=`${n}px`,e.style.top=`${a}px`;const o=1*Math.random()+.5,i=.3*Math.random(),l=6*Math.random()+3;e.style.width=`${l}px`,e.style.height=`${l}px`,e.animate([{transform:"scale(0)",opacity:0},{transform:"scale(1)",opacity:.8},{transform:"scale(0)",opacity:0}],{duration:1e3*o,delay:1e3*i,fill:"forwards",easing:"cubic-bezier(0.4, 0, 0.2, 1)"}),t.appendChild(e)}};return(0,e.useEffect)((()=>{if(!r||!i)return;const e=[9,27,45,63,81,99,117,135,153,171],t=[18,36,54,72,90,108,126,144,162,180];let n;n="red"===i?e[Math.floor(Math.random()*e.length)]:t[Math.floor(Math.random()*t.length)];const a=1440+n;g(0),setTimeout((()=>{g(a),b(!0),setTimeout((()=>{b(!1),k(i),x(!0),setTimeout((()=>{x(!1),k(null)}),3e3)}),7e3)}),50)}),[r,i]),(0,n.jsxs)(on,{className:"game-visual gpu-layer","data-parallax":"0.05",children:[(0,n.jsxs)(ln,{onMouseMove:e=>{if(r)return;const t=e.currentTarget.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top,o=t.width/2,i=t.height/2,l=(o-n)/20;p((a-i)/20),m(l)},onMouseLeave:()=>{u(!1),p(0),m(0)},onMouseEnter:()=>{u(!0)},children:[(0,n.jsx)("div",{className:"result-indicator",ref:l}),(0,n.jsx)(fn,{children:(0,n.jsx)(mn,{})}),(0,n.jsx)(hn,{}),(0,n.jsx)(sn,{style:{transform:`rotateX(${d}deg) rotateY(${f}deg)`},children:(0,n.jsxs)(cn,{className:r?"spin-animation":"",style:{transform:`rotate(${h}deg)`},children:[(0,n.jsx)(dn,{className:`${w||""} ${y?"active":""}`}),(0,n.jsx)(pn,{className:v?"active":""}),(0,n.jsx)(un,{})]})}),(0,n.jsx)(gn,{id:"particlesContainer"})]}),(0,n.jsxs)(vn,{children:[(0,n.jsxs)(bn,{className:""+("red"===a?"active":""),"data-color":"red",onClick:()=>C("red"),children:[(0,n.jsx)(xn,{className:"color-indicator color-red"}),(0,n.jsx)(kn,{children:"\u7ea2\u8272"})]}),(0,n.jsxs)(bn,{className:""+("black"===a?"active":""),"data-color":"black",onClick:()=>C("black"),children:[(0,n.jsx)(wn,{className:"color-indicator color-black"}),(0,n.jsx)(kn,{children:"\u9ed1\u8272"})]})]})]})},Cn=Qt.div`
  flex: 1;
  width: 100%;
  
  @media (max-width: 480px) {
    padding: 0 var(--space-xs);
  }
`,En=Qt.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: var(--border-thin);
  box-shadow: var(--shadow-md);
  transition: all 0.4s var(--easing-magnetic);
  transform: translateZ(0);
  will-change: transform, box-shadow;
  position: relative;
  margin-bottom: var(--space-lg);
  
  @media (max-width: 480px) {
    margin-bottom: var(--space-md);
    border-radius: var(--radius-md);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      transparent 0%, 
      var(--color-primary-alpha) 30%, 
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 0.5;
  }
  
  &:hover {
    box-shadow: var(--shadow-lg), 0 15px 30px var(--color-primary-glow);
    border-color: var(--color-primary);
    transform: translateY(-5px);
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,zn=Qt.div`
  padding: var(--space-md);
  border-bottom: var(--border-thin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-elevated);
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    padding: var(--space-sm);
  }
`,jn=Qt.div`
  font-weight: 600;
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Tn=Qt.div`
  background: linear-gradient(135deg, var(--color-primary-alpha), var(--color-secondary-alpha));
  border: 1px solid var(--color-primary);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-primary);
  box-shadow: 0 0 15px var(--color-primary-glow);
  animation: badgePulse 3s infinite alternate ease-in-out;
  
  @keyframes badgePulse {
    0% { box-shadow: 0 0 10px var(--color-primary-glow); }
    100% { box-shadow: 0 0 20px var(--color-primary-glow); }
  }
`,_n=Qt.div`
  padding: var(--space-md);
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    padding: var(--space-sm);
  }
`,Nn=Qt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  
  @media (max-width: 480px) {
    gap: var(--space-xs);
    margin-bottom: var(--space-sm);
  }
`,Pn=Qt.button`
  padding: var(--space-md);
  border-radius: var(--radius-md);
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  text-align: center;
  font-weight: 500;
  transition: all 0.3s var(--easing-magnetic);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
  @media (max-width: 480px) {
    padding: var(--space-sm);
    font-size: var(--font-size-sm);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    z-index: 1;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &.active {
    border: 2px solid var(--color-primary);
    background-color: var(--color-primary-alpha);
    box-shadow: 0 0 20px var(--color-primary-glow);
    transform: translateY(-4px);
  }
  
  &.red {
    color: var(--color-accent-light);
  }
  
  &.red.active {
    border-color: var(--color-accent);
    background-color: var(--color-accent-alpha);
    box-shadow: 0 0 20px var(--color-accent-glow);
  }
  
  &.black {
    color: var(--color-text-primary);
  }
  
  &.pulse-animation {
    animation: highlight-pulse 1.5s infinite;
  }
  
  @keyframes highlight-pulse {
    0% { box-shadow: 0 0 0 0 var(--color-primary-glow); }
    70% { box-shadow: 0 0 0 15px rgba(1, 228, 153, 0); }
    100% { box-shadow: 0 0 0 0 rgba(1, 228, 153, 0); }
  }
  
  .theme-light & {
    border-color: var(--color-primary);
  }
  
  .theme-light &.active {
    border-color: var(--color-primary-dark);
    background-color: var(--color-primary-alpha);
  }
`,Ln=Qt.div`
  margin-bottom: var(--space-md);
`,On=Qt.label`
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xs);
  font-weight: 500;
`,An=Qt.div`
  position: relative;
`,Rn=Qt.input`
  width: 100%;
  padding: var(--space-md);
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-size: var(--font-size-md);
  box-shadow: var(--shadow-inner);
  transition: all 0.3s var(--easing-magnetic);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-glow), var(--shadow-inner);
    transform: translateY(-2px);
  }
  
  &.pulse-animation {
    animation: highlight-pulse 1.5s infinite;
  }
  
  .theme-light & {
    border-color: var(--color-primary);
  }
`,Fn=Qt.div`
  position: absolute;
  right: var(--space-xs);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 4px;
  
  @media (max-width: 480px) {
    gap: 2px;
  }
`,Dn=Qt.button`
  padding: 4px 10px;
  background: linear-gradient(135deg, var(--color-surface), var(--color-surface-hover));
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  font-weight: 600;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 480px) {
    padding: 4px 6px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, var(--color-primary-alpha), transparent);
    transform: translateX(-100%);
    z-index: 0;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, var(--color-primary-alpha), var(--color-surface-hover));
    color: var(--color-primary);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  .theme-light & {
    border-color: var(--color-primary);
  }
`,Mn=Qt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-background-elevated);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-md);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-inner);
  position: relative;
  overflow: hidden;
  transition: all 0.3s var(--easing-magnetic);
  
  @media (max-width: 480px) {
    padding: var(--space-xs) var(--space-sm);
    margin-bottom: var(--space-sm);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      transparent 0%, 
      var(--color-primary-alpha) 30%, 
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }
  
  &:hover::before {
    opacity: 0.5;
  }
  
  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
  }
  
  .theme-light & {
    border-color: var(--color-primary);
  }
`,In=Qt.div`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
  position: relative;
  z-index: 1;
`,$n=Qt.div`
  font-weight: 600;
  color: var(--color-primary);
  text-shadow: 0 0 10px var(--color-primary-glow);
  position: relative;
  z-index: 1;
  animation: winAmountPulse 2s infinite alternate ease-in-out;
  
  @keyframes winAmountPulse {
    0% { text-shadow: 0 0 5px var(--color-primary-glow); }
    100% { text-shadow: 0 0 15px var(--color-primary-glow); }
  }
`,Vn=Qt.button`
  width: 100%;
  padding: var(--space-md);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #000;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--font-size-md);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  transition: all 0.3s var(--easing-explosive);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-primary), 0 6px 0 var(--color-primary-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    z-index: 1;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-primary), 0 8px 0 var(--color-primary-dark), 0 15px 20px rgba(1, 228, 153, 0.3);
  }
  
  &:active {
    transform: translateY(2px);
    box-shadow: var(--shadow-primary), 0 2px 0 var(--color-primary-dark);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: var(--shadow-primary), 0 6px 0 var(--color-primary-dark);
  }
`,Hn=Qt.span`
  display: inline-flex;
  transition: transform 0.3s var(--easing-explosive);
  
  ${Vn}:hover &:not(.rotating) {
    transform: rotate(-30deg) scale(1.2);
  }
  
  &.rotating {
    animation: rotate-center 1s linear infinite;
  }
  
  @keyframes rotate-center {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
`,Wn=Qt.div`
  margin-top: var(--space-lg);
`,Bn=Qt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
`,Un=Qt.div`
  font-weight: 600;
  font-size: var(--font-size-md);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-primary);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &::before {
    content: '';
    width: 4px;
    height: 16px;
    background: linear-gradient(to bottom, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
  }
`,Yn=Qt.div`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  background-color: var(--color-background-elevated);
  display: flex;
  align-items: center;
  padding: 6px 12px;
  height: 32px;
  line-height: 1;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  transition: all 0.3s var(--easing-magnetic);
  
  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    color: var(--color-primary);
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,qn=Qt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-sm);
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`,Xn=Qt.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-sm);
  border: var(--border-thin);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transform: translateX(-100%);
    z-index: 0;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.03);
    background-color: var(--color-surface-hover);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md), 0 8px 20px var(--color-primary-glow);
    z-index: 1;
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,Kn=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  position: relative;
  z-index: 1;
`,Qn=Qt.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, var(--color-surface-hover), var(--color-background-pressed));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border-light);
  transition: transform 0.3s var(--easing-explosive);
  
  ${Xn}:hover & {
    transform: rotate(15deg) scale(1.1);
    box-shadow: 0 0 10px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
`,Gn=Qt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`,Zn=Qt.div`
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${Xn}:hover & {
    color: var(--color-primary);
    text-shadow: 0 0 5px var(--color-primary-glow);
  }
`,Jn=Qt.div`
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  transition: all 0.3s var(--easing-magnetic);
  
  ${Xn}:hover & {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &.red {
    background: linear-gradient(135deg, var(--color-accent-alpha), rgba(255, 92, 92, 0.05));
    color: var(--color-accent-light);
    border: 1px solid var(--color-accent);
  }
  
  &.black {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
    color: var(--color-text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`,ea=t=>{let{selectedBet:r,betAmount:a,potentialWin:o,isSpinning:i,onBetSelect:l,onBetAmountChange:s,onSpin:c,betsHistory:u}=t;const{playClickSound:d}=nr(),[p,f]=(0,e.useState)(a.toString()),m=e=>{l(e)},h=e=>{let t=parseFloat(p)||0;"half"===e?t=Math.max(10,Math.floor(t/2)):"double"===e?t*=2:"max"===e&&(t=1e3),f(t.toString()),s(t),d(),"vibrate"in navigator&&navigator.vibrate(3)};return(0,n.jsxs)(Cn,{children:[(0,n.jsxs)(En,{className:"betting-card gpu-layer",children:[(0,n.jsxs)(zn,{className:"card-header",children:[(0,n.jsx)(jn,{children:"\u9009\u62e9\u4e0b\u6ce8"}),(0,n.jsx)(Tn,{children:"\u8d54\u7387 2.0x"})]}),(0,n.jsxs)(_n,{children:[(0,n.jsxs)(Nn,{children:[(0,n.jsx)(Pn,{className:"bet-option red interactive-element "+("red"===r?"active":""),onClick:()=>m("red"),children:"\u7ea2\u8272"}),(0,n.jsx)(Pn,{className:"bet-option black interactive-element "+("black"===r?"active":""),onClick:()=>m("black"),children:"\u9ed1\u8272"})]}),(0,n.jsxs)(Ln,{children:[(0,n.jsx)(On,{children:"\u4e0b\u6ce8\u91d1\u989d"}),(0,n.jsxs)(An,{children:[(0,n.jsx)(Rn,{type:"number",className:"bet-input",value:p,onChange:e=>{const t=e.target.value;f(t);const r=parseFloat(t)||0;s(r)},min:"10",step:"10"}),(0,n.jsxs)(Fn,{children:[(0,n.jsx)(Dn,{className:"interactive-element",onClick:()=>h("half"),children:"1/2"}),(0,n.jsx)(Dn,{className:"interactive-element",onClick:()=>h("double"),children:"2x"}),(0,n.jsx)(Dn,{className:"interactive-element",onClick:()=>h("max"),children:"MAX"})]})]})]}),(0,n.jsxs)(Mn,{className:"interactive-element",children:[(0,n.jsx)(In,{children:"\u9884\u8ba1\u6536\u76ca:"}),(0,n.jsxs)($n,{children:["\xa5",o.toFixed(2)]})]}),(0,n.jsxs)(Vn,{className:"interactive-element",onClick:()=>{c()},disabled:i,children:[(0,n.jsx)("span",{children:i?"\u65cb\u8f6c\u4e2d...":"\u65cb\u8f6c\u8f6e\u76d8"}),(0,n.jsx)(Hn,{className:i?"rotating":"",children:(0,n.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M22 2L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]})]}),(0,n.jsxs)(Wn,{children:[(0,n.jsxs)(Bn,{children:[(0,n.jsx)(Un,{children:"\u8fd1\u671f\u6295\u6ce8"}),(0,n.jsx)(Yn,{className:"interactive-element",children:"\u603b\u6295\u6ce8: \xa525,478"})]}),(0,n.jsx)(qn,{children:u.map((e=>(0,n.jsxs)(Xn,{className:"interactive-element",children:[(0,n.jsxs)(Kn,{children:[(0,n.jsx)(Qn,{children:e.user.charAt(0)}),(0,n.jsx)("span",{children:e.user})]}),(0,n.jsxs)(Gn,{children:[(0,n.jsxs)(Zn,{children:["\xa5",e.amount.toFixed(2)]}),(0,n.jsx)(Jn,{className:e.choice,children:"red"===e.choice?"\u7ea2\u8272":"\u9ed1\u8272"})]})]},e.id)))})]})]})},ta=(Qt.div`
  margin-top: var(--space-lg);
`,Qt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-border-light);
`,Qt.div`
  font-weight: 600;
  font-size: var(--font-size-md);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-primary);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-left: var(--space-xs);
  
  &::before {
    content: '';
    width: 4px;
    height: 16px;
    background: linear-gradient(to bottom, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
  }
`,Qt.div`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  background-color: var(--color-background-elevated);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--easing-magnetic);
  
  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    color: var(--color-primary);
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,Qt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-md);
`,Qt.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-md);
  border: var(--border-thin);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transform: translateX(-100%);
    z-index: 0;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.03);
    background-color: var(--color-surface-hover);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md), 0 8px 20px var(--color-primary-glow);
    z-index: 1;
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`),ra=(Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  position: relative;
  z-index: 1;
`,Qt.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, var(--color-surface-hover), var(--color-background-pressed));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border-light);
  transition: transform 0.3s var(--easing-explosive);
  
  ${ta}:hover & {
    transform: rotate(15deg) scale(1.1);
    box-shadow: 0 0 10px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
`,Qt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`,Qt.div`
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${ta}:hover & {
    color: var(--color-primary);
    text-shadow: 0 0 5px var(--color-primary-glow);
  }
`,Qt.div`
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  transition: all 0.3s var(--easing-magnetic);
  
  ${ta}:hover & {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &.red {
    background: linear-gradient(135deg, var(--color-accent-alpha), rgba(255, 92, 92, 0.05));
    color: var(--color-accent-light);
    border: 1px solid var(--color-accent);
  }
  
  &.black {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
    color: var(--color-text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  &.win {
    background: linear-gradient(135deg, var(--color-primary-alpha), rgba(1, 228, 153, 0.05));
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
  
  &.lose {
    background: linear-gradient(135deg, var(--color-accent-alpha), rgba(255, 92, 92, 0.05));
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
  }
`,Qt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s var(--easing-magnetic);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &.active {
    opacity: 1;
    visibility: visible;
  }
`),na=Qt.div`
  background-color: var(--color-background-elevated);
  border-radius: var(--radius-lg);
  width: 360px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  transform: scale(0.8);
  transition: transform 0.5s var(--easing-explosive);
  box-shadow: var(--shadow-lg), 0 20px 40px var(--color-primary-glow);
  border: var(--border-thin);
  position: relative;
  margin: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      var(--color-primary-alpha) 30%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.5;
  }

  ${ra}.active & {
    transform: scale(1);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,aa=Qt.div`
  padding: var(--space-md) var(--space-lg);
  background: linear-gradient(
    135deg,
    var(--color-surface),
    var(--color-surface-hover)
  );
  text-align: center;
  position: relative;
  border-bottom: var(--border-thin);
`,oa=Qt.button`
  position: absolute;
  right: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-lg);
  line-height: 1;
  width: 44px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  box-sizing: content-box;
  padding: 0;
  transition: all 0.3s var(--easing-explosive);
  z-index: 10;

  &:hover {
    color: var(--color-text-primary);
    background-color: var(--color-background-pressed);
    transform: translateY(-50%) rotate(90deg) scale(1.1);
    box-shadow: var(--shadow-md), 0 0 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,ia=Qt.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-xxs);
  background: linear-gradient(
    to right,
    var(--color-text-primary),
    var(--color-primary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,la=Qt.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
`,sa=Qt.div`
  padding: var(--space-lg);
  text-align: center;
`,ca=Qt.div`
  font-size: 72px;
  margin-bottom: var(--space-md);
  display: inline-block;
  animation: bounce 1.5s infinite alternate var(--easing-explosive);
  filter: drop-shadow(0 0 10px var(--color-primary-glow));

  @keyframes bounce {
    from {
      transform: translateY(0) scale(1);
    }
    to {
      transform: translateY(-15px) scale(1.1);
    }
  }
`,ua=Qt.div`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
  background: linear-gradient(
    to right,
    var(--color-text-primary),
    var(--color-primary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: textGlow 2s infinite alternate ease-in-out;

  @keyframes textGlow {
    0% {
      text-shadow: 0 0 5px rgba(1, 228, 153, 0.1);
    }
    100% {
      text-shadow: 0 0 15px rgba(1, 228, 153, 0.3);
    }
  }
`,da=Qt.div`
  background-color: var(--color-surface);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-md);
  border: var(--border-thin);
  box-shadow: var(--shadow-inner);
  position: relative;
  overflow: hidden;
  transition: all 0.3s var(--easing-magnetic);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      var(--color-primary-alpha) 30%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), 0 8px 20px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,pa=Qt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-xs);
  position: relative;
  z-index: 1;

  &:last-child {
    margin-bottom: 0;
    padding-top: var(--space-xs);
    border-top: var(--border-thin);
  }
`,fa=Qt.div`
  color: var(--color-text-secondary);
`,ma=Qt.div`
  font-weight: 600;
`,ha=Qt(ma)`
  color: var(--color-primary);
  font-size: var(--font-size-lg);
  text-shadow: 0 0 10px var(--color-primary-glow);
  animation: winTotalPulse 2s infinite alternate ease-in-out;

  @keyframes winTotalPulse {
    0% {
      text-shadow: 0 0 5px var(--color-primary-glow);
    }
    100% {
      text-shadow: 0 0 15px var(--color-primary-glow);
    }
  }
`,ga=Qt.div`
  display: flex;
  gap: var(--space-sm);
  padding: 0 var(--space-lg) var(--space-lg);
`,va=Qt.button`
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-align: center;
  transition: all 0.3s var(--easing-magnetic);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    z-index: 0;
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
`,ba=Qt(va)`
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: #000;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-primary), 0 4px 0 var(--color-primary-dark);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-primary), 0 6px 0 var(--color-primary-dark),
      0 10px 20px rgba(1, 228, 153, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: var(--shadow-primary), 0 2px 0 var(--color-primary-dark);
  }
`,ya=Qt(va)`
  background: linear-gradient(
    135deg,
    var(--color-surface),
    var(--color-surface-hover)
  );
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-light);
  box-shadow: var(--shadow-sm), 0 4px 0 var(--color-border);

  &:hover {
    background: linear-gradient(
      135deg,
      var(--color-surface-hover),
      var(--color-background-pressed)
    );
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), 0 6px 0 var(--color-border),
      0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--color-primary);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: var(--shadow-sm), 0 2px 0 var(--color-border);
  }

  .theme-light & {
    border-color: var(--color-primary);
  }
`,xa=t=>{let{isOpen:r,betAmount:a,winAmount:o,onContinue:i,onCollect:l,onClose:s}=t;const{playClickSound:c}=nr();(0,e.useEffect)((()=>{r?(()=>{if(document.documentElement.classList.contains("performance-mode"))return;const e=document.getElementById("confettiContainer");if(e)e.innerHTML="";else{const e=document.createElement("div");e.id="confettiContainer",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.pointerEvents="none",e.style.zIndex="9999",document.body.appendChild(e)}const t=document.getElementById("confettiContainer"),r=["#ff4e50","#fc913a","#f9d423","#01e499","#4d61fc"];for(let n=0;n<150;n++){const e=document.createElement("div"),n=10*Math.random()+5,a=r[Math.floor(Math.random()*r.length)];e.style.width=`${n}px`,e.style.height=`${n}px`,e.style.background=a,e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style.borderRadius="50%",e.style.transform="translate(-50%, -50%)";const o=3*Math.random()+2,i=.5*Math.random(),l=0,s=0,c=400*(Math.random()-.5),u=400*(Math.random()-.5),d=0,p=720*Math.random()-360;e.animate([{transform:`translate3d(${l}px, ${s}px, 0) rotate(${d}deg)`,opacity:1},{transform:`translate3d(${c}px, ${u}px, 0) rotate(${p}deg)`,opacity:0}],{duration:1e3*o,delay:1e3*i,easing:"cubic-bezier(0.1, 0.8, 0.2, 1)",fill:"forwards"}),t.appendChild(e)}setTimeout((()=>{t&&t.parentNode&&(t.innerHTML="")}),6e3)})():((()=>{const e=document.getElementById("confettiContainer");e&&(e.innerHTML="")})(),(()=>{const e=document.getElementById("coinsContainer");e&&(e.innerHTML="")})())}),[r]);const u=e=>{if(c(),e===l){"vibrate"in navigator&&navigator.vibrate([10,30,10]);const r=()=>{const e=new Audio("/sounds/coins.mp3");e.volume=.5,e.play().catch((e=>console.log("Audio play failed:",e)))};try{r()}catch(t){console.log("Error playing coin sound:",t)}(()=>{if(document.documentElement.classList.contains("performance-mode"))return;const e=document.getElementById("coinsContainer");if(e)e.innerHTML="";else{const e=document.createElement("div");e.id="coinsContainer",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.pointerEvents="none",e.style.zIndex="9998",document.body.appendChild(e)}const t=document.getElementById("coinsContainer"),r=["#FFD700","#FFC107","#FFCA28","#FFD54F","#FDD835"];for(let n=0;n<100;n++){const e=document.createElement("div"),n=20*Math.random()+15,a=r[Math.floor(Math.random()*r.length)];e.style.width=`${n}px`,e.style.height=`${n}px`,e.style.background=`radial-gradient(circle at 30% 30%, ${a}, #B8860B)`,e.style.position="absolute",e.style.borderRadius="50%",e.style.boxShadow="0 0 10px rgba(255, 215, 0, 0.5)",e.innerHTML=`<span style="\n        position: absolute; \n        top: 50%; \n        left: 50%; \n        transform: translate(-50%, -50%); \n        color: rgba(0,0,0,0.5); \n        font-weight: bold; \n        font-size: ${.8*n}px;\n      ">$</span>`;const o=Math.random()*window.innerWidth;e.style.left=`${o}px`,e.style.top=`-${n}px`;const i=o+200*(Math.random()-.5),l=2*Math.random()+1.5,s=1.5*Math.random(),c=e.animate([{transform:"translate(0, 0) rotate(0deg)",opacity:1},{transform:`translate(${i-o}px, ${window.innerHeight+n}px) rotate(${720*Math.random()}deg)`,opacity:.8}],{duration:1e3*l,delay:1e3*s,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"});e.animate([{boxShadow:"0 0 10px rgba(255, 215, 0, 0.5)"},{boxShadow:"0 0 20px rgba(255, 215, 0, 0.8)"},{boxShadow:"0 0 10px rgba(255, 215, 0, 0.5)"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"}),t.appendChild(e),c.onfinish=()=>{e.parentNode===t&&t.removeChild(e)}}setTimeout((()=>{t&&t.parentNode&&(t.innerHTML="")}),6e3)})(),setTimeout((()=>{e&&e()}),4e3)}else"vibrate"in navigator&&navigator.vibrate(3),e&&e()};return(0,n.jsx)(ra,{className:r?"active":"",children:(0,n.jsxs)(na,{className:"gpu-layer",children:[(0,n.jsxs)(aa,{children:[(0,n.jsx)(ia,{children:"\u6e38\u620f\u7ed3\u679c"}),(0,n.jsx)(la,{children:"\u5e78\u8fd0\u8f6e\u76d8"}),(0,n.jsx)(oa,{className:"interactive-element",onClick:()=>u(s),children:"\xd7"})]}),(0,n.jsxs)(sa,{children:[(0,n.jsx)(ca,{children:"\ud83c\udf89"}),(0,n.jsx)(ua,{children:"\u606d\u559c\u4f60\uff0c\u4f60\u8d62\u4e86\uff01"}),(0,n.jsxs)(da,{className:"interactive-element",children:[(0,n.jsxs)(pa,{children:[(0,n.jsx)(fa,{children:"\u4e0b\u6ce8\u91d1\u989d:"}),(0,n.jsxs)(ma,{children:["\xa5",a.toFixed(2)]})]}),(0,n.jsxs)(pa,{children:[(0,n.jsx)(fa,{children:"\u8d62\u5f97\u91d1\u989d:"}),(0,n.jsxs)(ha,{children:["\xa5",o.toFixed(2)]})]})]})]}),(0,n.jsxs)(ga,{children:[(0,n.jsx)(ba,{className:"interactive-element",onClick:()=>u(i),children:"\u518d\u73a9\u4e00\u6b21"}),(0,n.jsx)(ya,{className:"interactive-element",onClick:()=>u(l),children:"\u6536\u53d6\u5956\u91d1"})]})]})})},wa=Qt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s var(--easing-magnetic);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  &.active {
    opacity: 1;
    visibility: visible;
  }
`,ka=Qt.div`
  background-color: var(--color-background-elevated);
  border-radius: var(--radius-lg);
  width: 360px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  transform: scale(0.8);
  transition: transform 0.5s var(--easing-explosive);
  box-shadow: var(--shadow-lg), 0 20px 40px var(--color-accent-glow);
  border: var(--border-thin);
  position: relative;
  margin: 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      transparent 0%, 
      var(--color-accent-alpha) 30%, 
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 0.3;
  }
  
  ${wa}.active & {
    transform: scale(1);
  }
  
  .theme-light & {
    border-color: var(--color-accent-alpha);
    box-shadow: var(--shadow-lg), 0 20px 40px var(--color-accent-alpha);
  }
`,Sa=Qt.div`
  padding: var(--space-md) var(--space-lg);
  background: linear-gradient(135deg, var(--color-surface), var(--color-surface-hover));
  text-align: center;
  position: relative;
  border-bottom: var(--border-thin);
`,Ca=Qt.button`
  position: absolute;
  right: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-lg);
  line-height: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--easing-explosive);
  z-index: 10;
  
  &:hover {
    color: var(--color-text-primary);
    background-color: var(--color-background-pressed);
    transform: translateY(-50%) rotate(90deg) scale(1.1);
    box-shadow: var(--shadow-md), 0 0 15px var(--color-accent-glow);
    border-color: var(--color-accent);
  }
  
  .theme-light & {
    border-color: var(--color-accent-alpha);
  }
`,Ea=Qt.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-xxs);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,za=Qt.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
`,ja=Qt.div`
  padding: var(--space-lg);
  text-align: center;
`,Ta=Qt.div`
  font-size: 72px;
  margin-bottom: var(--space-md);
  display: inline-block;
  animation: shake 1.5s infinite alternate var(--easing-explosive);
  filter: drop-shadow(0 0 10px var(--color-accent-glow));
  
  @keyframes shake {
    0% { transform: translateX(0) rotate(0); }
    15% { transform: translateX(-5px) rotate(-5deg); }
    30% { transform: translateX(5px) rotate(5deg); }
    45% { transform: translateX(-5px) rotate(-3deg); }
    60% { transform: translateX(5px) rotate(3deg); }
    75% { transform: translateX(-2px) rotate(-1deg); }
    100% { transform: translateX(0) rotate(0); }
  }
`,_a=Qt.div`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: textGlow 2s infinite alternate ease-in-out;
  
  @keyframes textGlow {
    0% { text-shadow: 0 0 5px rgba(255, 92, 92, 0.1); }
    100% { text-shadow: 0 0 15px rgba(255, 92, 92, 0.3); }
  }
`,Na=Qt.div`
  display: flex;
  gap: var(--space-sm);
  padding: 0 var(--space-lg) var(--space-lg);
`,Pa=Qt.button`
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-align: center;
  transition: all 0.3s var(--easing-magnetic);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #000;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-primary), 0 4px 0 var(--color-primary-dark);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    z-index: 0;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-primary), 0 6px 0 var(--color-primary-dark), 0 10px 20px rgba(1, 228, 153, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: var(--shadow-primary), 0 2px 0 var(--color-primary-dark);
  }
`,La=e=>{let{isOpen:t,onTryAgain:r,onClose:a}=e;const{playClickSound:o}=nr(),i=e=>{o(),"vibrate"in navigator&&navigator.vibrate(3),e&&e()};return(0,n.jsx)(wa,{className:t?"active":"",children:(0,n.jsxs)(ka,{className:"gpu-layer",children:[(0,n.jsxs)(Sa,{children:[(0,n.jsx)(Ea,{children:"\u6e38\u620f\u7ed3\u679c"}),(0,n.jsx)(za,{children:"\u5e78\u8fd0\u8f6e\u76d8"}),(0,n.jsx)(Ca,{className:"interactive-element",onClick:()=>i(a),children:"\xd7"})]}),(0,n.jsxs)(ja,{children:[(0,n.jsx)(Ta,{children:"\ud83d\ude22"}),(0,n.jsx)(_a,{children:"\u5f88\u9057\u61be\uff0c\u4f60\u8f93\u4e86\uff01"})]}),(0,n.jsx)(Na,{children:(0,n.jsx)(Pa,{className:"interactive-element",onClick:()=>i(r),children:"\u518d\u8bd5\u4e00\u6b21"})})]})})},Oa=()=>{const[t,r]=(0,e.useState)(!1),[n,a]=(0,e.useState)(!1),[o,i]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const e=()=>{const e=window.innerWidth;r(e<768),a(e>=768&&e<1024),i(e>=1024)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),{isMobile:t,isTablet:n,isDesktop:o}},Aa=Qt.div`
  background-color: var(--color-background-elevated);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: var(--border-thin);
  margin-bottom: var(--space-xl);
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: var(--shadow-md);
  transition: all 0.4s var(--easing-magnetic);
  position: relative;
  transform: translateZ(0);
  will-change: transform, box-shadow;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      var(--color-primary-alpha) 30%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg), 0 15px 30px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,Ra=Qt.div`
  padding: var(--space-md) var(--space-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--border-thin);
  background: linear-gradient(
    135deg,
    var(--color-background-elevated),
    var(--color-background-pressed)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;

  .theme-light & {
    background: linear-gradient(
      135deg,
      var(--theme-light-background-elevated),
      var(--theme-light-background-pressed)
    );
    border-bottom: 1px solid var(--color-primary-alpha);
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }
`,Fa=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  max-width: 80%;

  @media (max-width: 560px) {
    max-width: 100%;
  }

  @media (max-width: 560px) {
    flex-wrap: wrap;
    gap: var(--space-sm);
  }
`,Da=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-weight: 600;
  white-space: nowrap;
`,Ma=Qt.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-background);
  font-size: var(--font-size-sm);
  font-weight: 700;
  box-shadow: var(--shadow-primary), 0 0 15px var(--color-primary-glow);
  position: relative;
  transition: transform 0.3s var(--easing-explosive);

  ${Aa}:hover & {
    transform: rotate(15deg) scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 60%
    );
  }
`,Ia=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);

  @media (max-width: 560px) {
    gap: var(--space-xs);
  }
`,$a=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  background-color: var(--color-background-elevated);
  padding: var(--space-xxs) var(--space-md);
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.05);
  white-space: nowrap;
  transition: all 0.3s var(--easing-magnetic);

  ${Aa}:hover & {
    background-color: var(--color-background-pressed);
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px var(--color-primary-glow);
  }
`,Va=Qt.span`
  color: var(--color-primary);
`,Ha=Qt.div`
  position: absolute;
  top: 0;
  right: 30px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: #000;
  font-size: var(--font-size-xs);
  font-weight: 600;
  padding: var(--space-xs) var(--space-md);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  box-shadow: var(--shadow-primary), 0 0 15px var(--color-primary-glow);
  z-index: 10;
  white-space: nowrap;
  animation: tagPulse 2s infinite alternate ease-in-out;

  @keyframes tagPulse {
    0% {
      box-shadow: var(--shadow-primary), 0 0 15px rgba(1, 228, 153, 0.1);
    }
    100% {
      box-shadow: var(--shadow-primary), 0 0 20px rgba(1, 228, 153, 0.3);
    }
  }

  @media (max-width: 560px) {
    font-size: 10px;
    padding: 3px 8px;
  }
`,Wa=Qt.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-md);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Ba=Qt.div`
  flex: 1;
  min-width: 0; /* 防止flex子项溢出 */
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  @media (min-width: 768px) {
    flex: 2;
    flex-direction: row;
    gap: var(--space-md);
    align-items: flex-start;
  }
`,Ua=(Qt.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  width: 100%;

  @media (min-width: 768px) {
    flex: 1;
    max-width: 380px;
  }
`,Qt.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  padding: var(--space-lg);
  position: relative;
  z-index: 1;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`,Qt.div`
  position: absolute;
  top: -90px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: 8px 16px;
  font-weight: 600;
  font-size: var(--font-size-md);
  box-shadow: var(--shadow-md);
  z-index: 100;
  opacity: 0;
  transition: all 0.4s var(--easing-explosive);
  border: 1px solid var(--color-border-light);
  pointer-events: none;

  &.win {
    background-color: var(--color-primary-alpha);
    color: var(--color-primary);
    border-color: var(--color-primary);
    box-shadow: 0 0 20px var(--color-primary-glow);
    animation: winZoom 1s ease-in-out infinite;
  }

  &.lose {
    background-color: var(--color-accent-alpha);
    color: var(--color-accent);
    border-color: var(--color-accent);
    box-shadow: 0 0 20px var(--color-accent-glow);
  }

  &.show {
    top: -70px;
    opacity: 1;
  }

  @keyframes winZoom {
    0% {
      transform: translateX(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) scale(1.1);
    }
    100% {
      transform: translateX(-50%) scale(1);
    }
  }
`,()=>{const{walletBtc:t,addFunds:r,deductFunds:a}=(0,e.useContext)(i),{playClickSound:o,playErrorSound:l,playRouletteSpinSound:s,playWinSound:c,playLoseSound:u}=nr(),[d,p]=(0,e.useState)("red"),[f,m]=(0,e.useState)(100),[h,g]=(0,e.useState)(200),[v,b]=(0,e.useState)(!1),[y,x]=(0,e.useState)(!1),[w,k]=(0,e.useState)(!1),[S,C]=(0,e.useState)(null),[E,z]=(0,e.useState)([{id:1,user:"user123",amount:500,choice:"red"},{id:2,user:"\u5e78\u8fd0\u73a9\u5bb6",amount:1200,choice:"black"},{id:3,user:"\u8d62\u5bb6666",amount:350,choice:"red"},{id:4,user:"\u5fb7\u5dde\u5927\u5e08",amount:850,choice:"black"}]),j=(0,e.useRef)(null),{isMobile:T}=Oa();(0,e.useEffect)((()=>{g(2*f)}),[f]);const _=e=>{p(e),o(),"vibrate"in navigator&&navigator.vibrate(3)};(0,e.useEffect)((()=>()=>{const e=document.querySelector(".roulette-wheel");e&&(e.style.transition="none",e.style.transform="rotate(0deg)")}),[]);const N=()=>{if(v)return;if(!d)return void P("\u8bf7\u9009\u62e9\u989c\u8272","error");if(f<=0)return void P("\u8bf7\u8f93\u5165\u6709\u6548\u91d1\u989d","error");const e=f/3e5;if(e>t)return void P("\u4f59\u989d\u4e0d\u8db3","error");if(!a(e))return void P("\u4f59\u989d\u4e0d\u8db3","error");b(!0),s();const r=document.querySelector(".roulette-wheel");r&&(r.style.transition="none",r.offsetWidth,r.style.transform="rotate(0deg)",r.offsetWidth,r.style.transition="transform 5s cubic-bezier(0.17, 0.67, 0.24, 0.99)"),"vibrate"in navigator&&navigator.vibrate([10,50,10]);const n=Math.random()>.5?"red":"black";C(n),setTimeout((()=>{b(!1);if(d===n){c(),"vibrate"in navigator&&navigator.vibrate([10,30,10,30,10]);const e={id:Date.now(),user:"\u60a8",amount:f,choice:d,result:"win"};z((t=>[e,...t.slice(0,3)])),setTimeout((()=>{x(!0)}),1e3)}else{u(),"vibrate"in navigator&&navigator.vibrate(30);const e={id:Date.now(),user:"\u60a8",amount:f,choice:d,result:"lose"};z((t=>[e,...t.slice(0,3)])),setTimeout((()=>{k(!0)}),1e3)}}),7e3)},P=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";j.current&&(j.current.textContent=e,j.current.className=`result-indicator show ${t}`,"error"===t&&(l(),"vibrate"in navigator&&navigator.vibrate(30)),setTimeout((()=>{j.current&&(j.current.className="result-indicator")}),2e3))},L=()=>{if(y){x(!1);r(2*f/3e5),"vibrate"in navigator&&navigator.vibrate([3,50,10]),setTimeout((()=>{v||N()}),800)}else w&&(k(!1),"vibrate"in navigator&&navigator.vibrate([3,50,10]),setTimeout((()=>{v||N()}),800))};return(0,n.jsxs)(Aa,{className:"featured-game gpu-layer",children:[(0,n.jsxs)(Ra,{children:[(0,n.jsxs)(Fa,{children:[(0,n.jsxs)(Da,{children:[(0,n.jsx)(Ma,{children:"R"}),(0,n.jsx)("span",{children:"\u5e78\u8fd0\u8f6e\u76d8"})]}),(0,n.jsxs)(Ia,{children:[(0,n.jsxs)($a,{children:[(0,n.jsx)(Va,{children:"\ud83d\udc65"}),(0,n.jsx)("span",{children:"\u5728\u7ebf: 1,254"})]}),(0,n.jsxs)($a,{children:[(0,n.jsx)(Va,{children:"\ud83d\udcb0"}),(0,n.jsx)("span",{children:"\u5956\u6c60: \xa535,780"})]})]})]}),(0,n.jsx)(Ha,{children:"\u70ed\u95e8\u6e38\u620f"})]}),(0,n.jsxs)(Wa,{children:[(0,n.jsxs)(Ba,{children:[(0,n.jsx)(Sn,{isSpinning:v,selectedBet:d,onSelectBet:_,spinResult:S,resultIndicatorRef:j,simplifiedEffects:T}),(0,n.jsx)(ea,{selectedBet:d,betAmount:f,potentialWin:h,isSpinning:v,onBetSelect:_,onBetAmountChange:e=>{m(e)},onSpin:N,betsHistory:E})]}),(0,n.jsx)(xa,{isOpen:y,betAmount:f,winAmount:2*f,onContinue:L,onCollect:()=>{x(!1);r(2*f/3e5),"vibrate"in navigator&&navigator.vibrate([10,30,10,30,10]),setTimeout((()=>{const e=document.createElement("div");e.style.position="fixed",e.style.bottom="20px",e.style.left="50%",e.style.transform="translateX(-50%)",e.style.backgroundColor="var(--color-primary)",e.style.color="var(--color-background)",e.style.padding="12px 24px",e.style.borderRadius="var(--radius-md)",e.style.boxShadow="var(--shadow-lg), 0 5px 15px var(--color-primary-glow)",e.style.zIndex="9999",e.style.fontWeight="600",e.style.opacity="0",e.style.transition="opacity 0.3s var(--easing-explosive), transform 0.3s var(--easing-explosive)",e.style.transform="translate(-50%, 20px)",e.innerHTML="\ud83c\udf89 \u5956\u91d1\u5df2\u6dfb\u52a0\u5230\u60a8\u7684\u94b1\u5305\uff01",document.body.appendChild(e),e.offsetWidth,e.style.opacity="1",e.style.transform="translate(-50%, 0)",setTimeout((()=>{e.style.opacity="0",e.style.transform="translate(-50%, -20px)",setTimeout((()=>{e.parentNode&&document.body.removeChild(e)}),300)}),3e3)}),500)},onClose:()=>x(!1)}),(0,n.jsx)(La,{isOpen:w,onTryAgain:L,onClose:()=>k(!1)})]})]})}),Ya=Qt.div`
  margin-bottom: var(--space-xxl);
  margin-left: 10px;
  margin-right: 10px;
`,qa=Qt.h2`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
  }
`,Xa=Qt.a`
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  transition: all 0.3s var(--easing-magnetic);
  
  &:hover {
    color: var(--color-primary-light);
    transform: translateX(4px);
  }
`,Ka=Qt.span`
  transition: transform 0.3s var(--easing-explosive);
  
  ${Xa}:hover & {
    transform: translateX(6px);
  }
`,Qa=Qt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`,Ga=(Qt.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-lg);
`,Qt.div`
  background-color: var(--color-background-elevated);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.4s var(--easing-magnetic);
  border: var(--border-thin);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  height: 100%;
  position: relative;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: var(--shadow-lg), 0 15px 30px var(--color-primary-glow);
    border-color: var(--color-primary);
    z-index: 2;
  }
  
  &:hover .game-img::before {
    opacity: 1;
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`),Za=Qt.div`
  height: 160px;
  background-color: var(--color-surface);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
    z-index: 1;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: 'PLAY NOW';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    color: var(--color-text-primary);
    background: linear-gradient(135deg, var(--color-primary-alpha), var(--color-primary-glow));
    padding: 10px 20px;
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: 600;
    opacity: 0;
    transition: all 0.4s var(--easing-explosive);
    z-index: 3;
    border: 1px solid var(--color-primary);
    box-shadow: 0 0 20px var(--color-primary-glow);
  }
  
  ${Ga}:hover &::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`,Ja=Qt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.background||"linear-gradient(135deg, #1e3c72, #2a5298)"};
  background-size: cover;
  background-position: center;
  transition: transform 0.7s var(--easing-magnetic);
  will-change: transform;
  
  ${Ga}:hover & {
    transform: scale(1.2);
  }
`,eo=Qt.div`
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  z-index: 2;
  font-size: 28px;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s var(--easing-explosive);
  
  ${Ga}:hover & {
    transform: rotate(15deg) scale(1.1);
    box-shadow: 0 0 30px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
`,to=Qt.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  font-weight: 600;
  z-index: 2;
  text-align: left;
  transition: all 0.3s ease;
  
  ${Ga}:hover & {
    padding-bottom: 25px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`,ro=Qt.div`
  position: absolute;
  top: var(--space-xs);
  padding: 5px 10px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  z-index: 2;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s var(--easing-magnetic);
  
  ${Ga}:hover & {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`,no=Qt(ro)`
  right: var(--space-xs);
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-dark));
  color: white;
  animation: livePulse 2s infinite alternate ease-in-out;
  
  @keyframes livePulse {
    0% { box-shadow: 0 0 5px var(--color-accent-glow); }
    100% { box-shadow: 0 0 15px var(--color-accent-glow); }
  }
`,ao=Qt(ro)`
  left: var(--space-xs);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: var(--color-background);
  animation: popularPulse 2s infinite alternate ease-in-out;
  
  @keyframes popularPulse {
    0% { box-shadow: 0 0 5px var(--color-primary-glow); }
    100% { box-shadow: 0 0 15px var(--color-primary-glow); }
  }
`,oo=Qt.div`
  padding: var(--space-md);
  position: relative;
  background: linear-gradient(to bottom, var(--color-background-elevated), var(--color-surface));
  border-top: var(--border-thin);
  transition: all 0.3s ease;
  
  ${Ga}:hover & {
    background: linear-gradient(to bottom, var(--color-background-elevated), var(--color-primary-alpha));
  }
`,io=Qt.h3`
  font-weight: 600;
  font-size: var(--font-size-md);
  margin-bottom: var(--space-xxs);
  transition: all 0.3s ease;
  
  ${Ga}:hover & {
    color: var(--color-primary);
    transform: translateX(5px);
  }
`,lo=Qt.p`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xs);
  transition: all 0.3s ease;
  
  ${Ga}:hover & {
    transform: translateX(5px);
  }
`,so=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  transition: all 0.3s ease;
  
  ${Ga}:hover & {
    transform: translateX(5px);
  }
`,co=Qt.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  background-color: var(--color-background-elevated);
  padding: 5px 10px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  transition: all 0.3s var(--easing-magnetic);
  
  ${Ga}:hover & {
    background-color: var(--color-primary-alpha);
    border-color: var(--color-primary);
    box-shadow: 0 5px 15px var(--color-primary-glow);
    color: var(--color-primary);
  }
`,uo=[{id:1,name:"\u5fb7\u5dde\u6251\u514b\u9526\u6807\u8d5b",provider:"PokerNow\u539f\u521b",icon:"\u2660\ufe0f",background:"linear-gradient(135deg, #1e3c72, #2a5298)",live:!0,popular:!0,players:456,prize:"\xa510,000"},{id:2,name:"\u73b0\u91d1\u5fb7\u5dde\u6251\u514b",provider:"PokerNow\u539f\u521b",icon:"\u2665\ufe0f",background:"linear-gradient(135deg, #4b6cb7, #182848)",players:178,prize:"\u65e0\u9650\u6ce8"},{id:3,name:"\u767e\u5bb6\u4e50",provider:"PokerNow Casino",icon:"\u2666\ufe0f",background:"linear-gradient(135deg, #904e95, #e96443)",players:89,prize:"\xa550-5,000"},{id:4,name:"VIP\u5fb7\u5dde\u6251\u514b",provider:"PokerNow VIP",icon:"\u2663\ufe0f",background:"linear-gradient(135deg, #2193b0, #6dd5ed)",live:!0,players:64,prize:"\xa51,000 \u8d77"},{id:5,name:"\u6bcf\u5468\u9526\u6807\u8d5b",provider:"PokerNow\u8d5b\u4e8b",icon:"\ud83c\udfb2",background:"linear-gradient(135deg, #834d9b, #d04ed6)",players:320,prize:"\xa520,000"},{id:6,name:"\u8001\u864e\u673a",provider:"PokerNow Casino",icon:"\ud83c\udfae",background:"linear-gradient(135deg, #0f0c29, #302b63, #24243e)",players:145,prize:"\xa51-1,000"},{id:7,name:"\u5965\u9a6c\u54c8\u6251\u514b",provider:"PokerNow\u539f\u521b",icon:"\ud83c\udfaf",background:"linear-gradient(135deg, #40e0d0, #ff8c00, #ff0080)",players:78,prize:"\xa550-500"},{id:8,name:"\u4e94\u5f20\u724c\u64b2\u514b",provider:"PokerNow\u539f\u521b",icon:"\ud83c\udfc6",background:"linear-gradient(135deg, #8e2de2, #4a00e0)",popular:!0,players:42,prize:"\xa520-200"}],po=()=>{const{playClickSound:e}=nr(),t=()=>{e(),"vibrate"in navigator&&navigator.vibrate(3)};return(0,n.jsxs)(Ya,{className:"games-section",children:[(0,n.jsxs)(qa,{children:["\u70ed\u95e8\u76f4\u64ad",(0,n.jsxs)(Xa,{href:"#",className:"interactive-element",children:["\u67e5\u770b\u66f4\u591a",(0,n.jsx)(Ka,{children:(0,n.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),(0,n.jsx)(Qa,{children:uo.map((e=>(0,n.jsxs)(Ga,{className:"interactive-element gpu-layer",onClick:t,children:[(0,n.jsxs)(Za,{className:"game-img",children:[e.live&&(0,n.jsx)(no,{className:"badge-live",children:"\u76f4\u64ad\u4e2d"}),e.popular&&(0,n.jsx)(ao,{className:"badge-popular",children:"\u70ed\u95e8"}),(0,n.jsx)(Ja,{className:"game-img-content",background:e.background}),(0,n.jsx)(eo,{className:"game-img-icon",children:e.icon}),(0,n.jsx)(to,{className:"game-img-title",children:e.name})]}),(0,n.jsxs)(oo,{children:[(0,n.jsx)(io,{children:e.name}),(0,n.jsx)(lo,{children:e.provider}),(0,n.jsxs)(so,{children:[(0,n.jsxs)(co,{children:[(0,n.jsx)("span",{children:"\ud83d\udc64"}),(0,n.jsxs)("span",{children:[e.players," \u4eba"]})]}),(0,n.jsxs)(co,{children:[(0,n.jsx)("span",{children:"\ud83d\udcb0"}),(0,n.jsx)("span",{children:e.prize})]})]})]})]},e.id)))})]})},fo=Qt.footer`
  background-color: var(--color-background-elevated);
  padding-top: var(--space-xl);
  margin-top: var(--space-xxl);
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--color-border);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-primary-glow),
      var(--color-secondary-glow),
      var(--color-primary-glow),
      transparent
    );
    animation: borderFlow 10s infinite linear;
  }
  
  @keyframes borderFlow {
    0% { background-position: 0% 0; }
    100% { background-position: 200% 0; }
  }
  
  .theme-light & {
    border-top-color: var(--color-primary-alpha);
    border-top: 1px solid var(--theme-light-border);
  }
`,mo=Qt.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  width: 100%;
`,ho=Qt.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xxl);
  margin-bottom: var(--space-xl);
  margin-top: var(--space-xl);
  position: relative;
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border);
  
  .theme-light & {
    border-top-color: var(--color-primary-alpha);
  }
  
  @media (max-width: 767px) {
    gap: var(--space-lg);
    flex-direction: column;
  }
`,go=Qt.div`
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  position: relative;
  
  @media (max-width: 767px) {
    max-width: 100%;
    margin-bottom: var(--space-lg);
  }
`,vo=Qt.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
  transition: transform 0.3s var(--easing-explosive);
  
  &:hover {
    transform: scale(1.05);
  }
`,bo=Qt.div`
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-background);
  font-weight: 700;
  font-size: var(--font-size-md);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-primary);
`,yo=Qt.div`
  display: inline-block;
  white-space: nowrap;
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
`,xo=Qt.span`
  background: linear-gradient(to right, var(--color-primary), var(--color-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,wo=Qt.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
  max-width: 360px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
  }
`,ko=Qt.div`
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
`,So=Qt.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  transition: all 0.3s var(--easing-explosive);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, var(--color-primary-alpha) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background-color: var(--color-background-pressed);
    color: var(--color-primary);
    transform: translateY(-6px) rotate(10deg);
    box-shadow: var(--shadow-md), 0 10px 20px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,Co=Qt.span`
  position: relative;
  z-index: 1;
  transition: transform 0.3s var(--easing-explosive);
  
  ${So}:hover & {
    transform: scale(1.2);
  }
`,Eo=Qt.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-xl);
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: var(--space-md);
    width: 100%;
  }
`,zo=Qt.div`
  @media (max-width: 767px) {
    padding: var(--space-xs) 0;
  }
`,jo=Qt.h3`
  font-weight: 600;
  margin-bottom: var(--space-lg);
  position: relative;
  padding-bottom: var(--space-sm);
  color: var(--color-text-primary);
  font-size: var(--font-size-md);
  letter-spacing: 0.5px;
  background: linear-gradient(to right, var(--color-text-primary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
    transition: width 0.3s var(--easing-explosive);
  }
  
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-xs);
  }
`,To=Qt.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  @media (max-width: 767px) {
    gap: var(--space-xs);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    li {
      display: flex;
      align-items: center;
    }
  }
`,_o=Qt.a`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  transition: all 0.3s var(--easing-magnetic);
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-left: var(--space-sm);
  max-width: fit-content;
  line-height: 1.2;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background-color: var(--color-primary);
    border-radius: 50%;
    opacity: 0.7;
    transition: all 0.3s var(--easing-explosive);
  }
  
  &:hover {
    color: var(--color-primary);
    transform: translateX(8px);
  }
  
  &:hover::before {
    opacity: 1;
    transform: translateY(-50%) scale(1.5);
    box-shadow: 0 0 10px var(--color-primary-glow);
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-xs);
    padding-left: var(--space-xs);
    min-height: 24px;
  }
`,No=Qt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
  margin-top: var(--space-xl);
  position: relative;
  z-index: 2;
  
  @media (max-width: 991px) {
    margin-top: calc(-1 * var(--space-xl));
    gap: var(--space-lg);
  }
  
  @media (max-width: 767px) {
    margin-top: 0;
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
`,Po=Qt.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  transition: all 0.3s var(--easing-magnetic);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-lg);
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  transform: translateZ(0);
  will-change: transform, box-shadow;
  box-shadow: var(--shadow-md);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg), 0 10px 20px var(--color-primary-glow);
    border-color: var(--color-primary);
    background-color: var(--color-background-pressed);
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
  
  @media (max-width: 991px) {
    transform: none !important;
    padding: var(--space-md);
  }
`,Lo=Qt.div`
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-primary-alpha), transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: var(--color-primary);
  flex-shrink: 0;
  border: 1px solid var(--color-primary-alpha);
  transition: all 0.3s var(--easing-explosive);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, var(--color-primary-glow) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${Po}:hover & {
    transform: rotate(15deg) scale(1.1);
    box-shadow: 0 10px 20px var(--color-primary-glow);
    background: linear-gradient(135deg, var(--color-primary-alpha), var(--color-primary-glow));
  }
  
  ${Po}:hover &::after {
    opacity: 0.5;
  }
`,Oo=Qt.div`
  flex: 1;
`,Ao=Qt.h4`
  font-weight: 600;
  margin-bottom: var(--space-xs);
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  
  ${Po}:hover & {
    transform: translateX(3px);
  }
`,Ro=Qt.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  transition: all 0.3s ease;
  
  ${Po}:hover & {
    color: var(--color-text-primary);
  }
`,Fo=Qt.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xl) 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-xl);
  gap: var(--space-lg) var(--space-xl);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      transparent 0%, 
      var(--color-primary-alpha) 30%, 
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
  
  .theme-light & {
    border-top-color: var(--color-primary-alpha);
    border-bottom-color: var(--color-primary-alpha);
  }
  
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Do=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
  
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Mo=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-md);
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transform: translateX(-100%);
    z-index: 0;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    background-color: var(--color-background-pressed);
    transform: translateY(-5px);
    box-shadow: var(--shadow-md), 0 10px 20px var(--color-primary-glow);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`,Io=Qt.span`
  color: var(--color-primary);
  font-size: var(--font-size-md);
  position: relative;
  z-index: 1;
  transition: transform 0.3s var(--easing-explosive);
  
  ${Mo}:hover & {
    transform: rotate(15deg) scale(1.2);
  }
`,$o=Qt.div`
  padding: var(--space-lg) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-xs);
  border-top: 1px solid var(--color-border);
  
  .theme-light & {
    border-top-color: var(--color-primary-alpha);
  }
  
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`,Vo=Qt.div`
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Ho=Qt.a`
  color: var(--color-text-tertiary);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-primary-alpha);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    color: var(--color-primary);
    transform: translateY(-2px);
  }
`,Wo=Qt.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,Bo=Qt.span`
  color: var(--color-primary);
  font-size: 18px;
  transition: transform 0.3s var(--easing-explosive);
  
  ${Wo}:hover & {
    transform: rotate(360deg);
  }
`,Uo=()=>(0,n.jsx)(fo,{children:(0,n.jsxs)(mo,{children:[(0,n.jsxs)(No,{children:[(0,n.jsxs)(Po,{className:"interactive-element","data-parallax":"0.03",children:[(0,n.jsx)(Lo,{children:"\ud83d\udd12"}),(0,n.jsxs)(Oo,{children:[(0,n.jsx)(Ao,{children:"\u5b89\u5168\u4fdd\u969c"}),(0,n.jsx)(Ro,{children:"\u4f7f\u7528\u533a\u5757\u94fe\u6280\u672f\u786e\u4fdd\u6240\u6709\u4ea4\u6613\u900f\u660e\u53ef\u9760\uff0c\u4e3a\u60a8\u7684\u8d44\u4ea7\u63d0\u4f9b\u6700\u9ad8\u7ea7\u522b\u7684\u5b89\u5168\u4fdd\u969c\u3002"})]})]}),(0,n.jsxs)(Po,{className:"interactive-element","data-parallax":"0.03",children:[(0,n.jsx)(Lo,{children:"\ud83c\udf10"}),(0,n.jsxs)(Oo,{children:[(0,n.jsx)(Ao,{children:"\u5168\u7403\u8986\u76d6"}),(0,n.jsx)(Ro,{children:"\u652f\u6301\u591a\u79cd\u8bed\u8a00\u548c\u8d27\u5e01\uff0c\u8ba9\u60a8\u968f\u65f6\u968f\u5730\u90fd\u80fd\u7545\u4eab\u6e38\u620f\uff0c\u4e0e\u5168\u7403\u73a9\u5bb6\u4e00\u8d77\u7ade\u6280\u3002"})]})]}),(0,n.jsxs)(Po,{className:"interactive-element","data-parallax":"0.03",children:[(0,n.jsx)(Lo,{children:"\ud83d\udc8e"}),(0,n.jsxs)(Oo,{children:[(0,n.jsx)(Ao,{children:"VIP\u670d\u52a1"}),(0,n.jsx)(Ro,{children:"\u4e13\u5c5e\u5ba2\u6237\u7ecf\u7406\u3001\u66f4\u9ad8\u8fd4\u5229\u548c\u72ec\u5bb6\u6d3b\u52a8\u9080\u8bf7\uff0c\u5c0a\u4eab\u9876\u7ea7VIP\u4f1a\u5458\u7684\u975e\u51e1\u793c\u9047\u3002"})]})]})]}),(0,n.jsxs)(ho,{children:[(0,n.jsxs)(go,{children:[(0,n.jsxs)(vo,{href:"#",className:"interactive-element",children:[(0,n.jsx)(bo,{children:"P"}),(0,n.jsxs)(yo,{children:["Poker",(0,n.jsx)(xo,{children:"Now"})]})]}),(0,n.jsx)(wo,{children:"PokerNow\u662f\u4e00\u5bb6\u9762\u5411\u5168\u7403\u73a9\u5bb6\u7684\u52a0\u5bc6\u8d27\u5e01\u6e38\u620f\u5e73\u53f0\uff0c\u63d0\u4f9b\u5b89\u5168\u3001\u516c\u5e73\u7684\u6e38\u620f\u4f53\u9a8c\u3002\u6211\u4eec\u81f4\u529b\u4e8e\u901a\u8fc7\u533a\u5757\u94fe\u6280\u672f\u6253\u9020\u900f\u660e\u7684\u6e38\u620f\u73af\u5883\uff0c\u6240\u6709\u6e38\u620f\u7ed3\u679c\u5747\u53ef\u9a8c\u8bc1\u516c\u5e73\u6027\u3002"}),(0,n.jsxs)(ko,{children:[(0,n.jsx)(So,{href:"#",className:"interactive-element",children:(0,n.jsx)(Co,{children:(0,n.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),(0,n.jsx)(So,{href:"#",className:"interactive-element",children:(0,n.jsx)(Co,{children:(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M17.5 6.5H17.51",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),(0,n.jsx)(So,{href:"#",className:"interactive-element",children:(0,n.jsx)(Co,{children:(0,n.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),(0,n.jsx)(So,{href:"#",className:"interactive-element",children:(0,n.jsx)(Co,{children:(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M22.5401 6.42C22.4213 5.94541 22.1794 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6001 4.42C18.8801 4 12.0001 4 12.0001 4C12.0001 4 5.12008 4 3.40008 4.46C2.92933 4.59318 2.50206 4.84824 2.16143 5.19941C1.8208 5.55057 1.57887 5.98541 1.46008 6.46C1.14551 8.20556 0.991263 9.97631 1.00008 11.75C0.989358 13.537 1.14361 15.3213 1.46008 17.08C1.59104 17.5398 1.83839 17.9581 2.17823 18.2945C2.51806 18.6308 2.9389 18.8738 3.40008 19C5.12008 19.46 12.0001 19.46 12.0001 19.46C12.0001 19.46 18.8801 19.46 20.6001 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1794 17.9094 22.4213 17.4746 22.5401 17C22.8524 15.2676 23.0064 13.5103 23.0001 11.75C23.0101 9.96295 22.8558 8.1787 22.5401 6.42Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})]}),(0,n.jsxs)(Eo,{children:[(0,n.jsxs)(zo,{children:[(0,n.jsx)(jo,{children:"\u5e73\u53f0\u4ecb\u7ecd"}),(0,n.jsxs)(To,{children:[(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u5173\u4e8e\u6211\u4eec"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u5e73\u53f0\u7279\u70b9"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u5408\u4f5c\u4f19\u4f34"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u8054\u7cfb\u6211\u4eec"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u52a0\u5165\u6211\u4eec"})})]})]}),(0,n.jsxs)(zo,{children:[(0,n.jsx)(jo,{children:"\u6e38\u620f\u4e2d\u5fc3"}),(0,n.jsxs)(To,{children:[(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u5fb7\u5dde\u6251\u514b"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u5965\u9a6c\u54c8"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u8001\u864e\u673a"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u8f6e\u76d8"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u767e\u5bb6\u4e50"})})]})]}),(0,n.jsxs)(zo,{children:[(0,n.jsx)(jo,{children:"\u5e2e\u52a9\u4e0e\u652f\u6301"}),(0,n.jsxs)(To,{children:[(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u5e38\u89c1\u95ee\u9898"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u6e38\u620f\u89c4\u5219"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u5145\u503c\u63d0\u73b0"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u5b89\u5168\u4fdd\u969c"})}),(0,n.jsx)("li",{children:(0,n.jsx)(_o,{href:"#",className:"interactive-element",children:"\u8054\u7cfb\u5ba2\u670d"})})]})]})]})]}),(0,n.jsxs)(Fo,{children:[(0,n.jsxs)(Do,{children:[(0,n.jsxs)(Mo,{className:"interactive-element",children:[(0,n.jsx)(Io,{children:"\ud83d\udd12"}),(0,n.jsx)("span",{children:"SSL\u5b89\u5168\u52a0\u5bc6"})]}),(0,n.jsxs)(Mo,{className:"interactive-element",children:[(0,n.jsx)(Io,{children:"\u2713"}),(0,n.jsx)("span",{children:"\u533a\u5757\u94fe\u8ba4\u8bc1"})]}),(0,n.jsxs)(Mo,{className:"interactive-element",children:[(0,n.jsx)(Io,{children:"\ud83d\udd30"}),(0,n.jsx)("span",{children:"\u6e38\u620f\u516c\u5e73\u8ba4\u8bc1"})]})]}),(0,n.jsxs)(Do,{children:[(0,n.jsxs)(Mo,{className:"interactive-element",children:[(0,n.jsx)(Io,{children:"\ud83d\udd1e"}),(0,n.jsx)("span",{children:"\u8d1f\u8d23\u4efb\u6e38\u620f"})]}),(0,n.jsxs)(Mo,{className:"interactive-element",children:[(0,n.jsx)(Io,{children:"\ud83c\udfc6"}),(0,n.jsx)("span",{children:"\u5353\u8d8a\u670d\u52a1\u5956"})]})]})]}),(0,n.jsxs)($o,{children:[(0,n.jsxs)(Wo,{children:[(0,n.jsx)(Bo,{children:"\xa9"}),(0,n.jsx)("span",{children:"2025 PokerNow. \u4fdd\u7559\u6240\u6709\u6743\u5229\u3002\u4ec5\u4f9b18\u5c81\u4ee5\u4e0a\u4eba\u58eb\u5a31\u4e50\u3002"})]}),(0,n.jsxs)(Vo,{children:[(0,n.jsx)(Ho,{href:"#",className:"interactive-element",children:"\u670d\u52a1\u6761\u6b3e"}),(0,n.jsx)(Ho,{href:"#",className:"interactive-element",children:"\u9690\u79c1\u653f\u7b56"}),(0,n.jsx)(Ho,{href:"#",className:"interactive-element",children:"\u53cd\u6d17\u94b1\u653f\u7b56"}),(0,n.jsx)(Ho,{href:"#",className:"interactive-element",children:"\u8d23\u4efb\u535a\u5f69"})]})]})]})});const Yo=function(){return(0,n.jsx)(o,{children:(0,n.jsxs)(l,{children:[(0,n.jsx)(Jt,{}),(0,n.jsx)(qr,{}),(0,n.jsxs)("main",{children:[(0,n.jsx)(tn,{}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(an,{}),(0,n.jsx)(Ua,{}),(0,n.jsx)(po,{})]})]}),(0,n.jsx)(Uo,{})]})})};t.createRoot(document.getElementById("root")).render((0,n.jsx)(e.StrictMode,{children:(0,n.jsx)(Yo,{})}))})()})();
//# sourceMappingURL=main.20365a05.js.map