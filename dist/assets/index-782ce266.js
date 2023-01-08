(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Ga(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Wa(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Oe(s)?Bg(s):Wa(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Oe(t))return t;if(_e(t))return t}}const Fg=/;(?![^(]*\))/g,Ug=/:([^]+)/,$g=/\/\*.*?\*\//gs;function Bg(t){const e={};return t.replace($g,"").split(Fg).forEach(n=>{if(n){const s=n.split(Ug);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Qa(t){let e="";if(Oe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Qa(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Vg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qg=Ga(Vg);function Sh(t){return!!t||t===""}const rn=t=>Oe(t)?t:t==null?"":W(t)||_e(t)&&(t.toString===kh||!J(t.toString))?JSON.stringify(t,Ah,2):String(t),Ah=(t,e)=>e&&e.__v_isRef?Ah(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Rh(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!W(e)&&!Dh(e)?String(e):e,ye={},es=[],St=()=>{},jg=()=>!1,Hg=/^on[^a-z]/,Ui=t=>Hg.test(t),Xa=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Ya=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kg=Object.prototype.hasOwnProperty,ie=(t,e)=>Kg.call(t,e),W=Array.isArray,ts=t=>$i(t)==="[object Map]",Rh=t=>$i(t)==="[object Set]",J=t=>typeof t=="function",Oe=t=>typeof t=="string",Ja=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",xh=t=>_e(t)&&J(t.then)&&J(t.catch),kh=Object.prototype.toString,$i=t=>kh.call(t),zg=t=>$i(t).slice(8,-1),Dh=t=>$i(t)==="[object Object]",Za=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=Ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gg=/-(\w)/g,cs=Bi(t=>t.replace(Gg,(e,n)=>n?n.toUpperCase():"")),Wg=/\B([A-Z])/g,bs=Bi(t=>t.replace(Wg,"-$1").toLowerCase()),Nh=Bi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ro=Bi(t=>t?`on${Nh(t)}`:""),er=(t,e)=>!Object.is(t,e),ri=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},di=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Su;const Qg=()=>Su||(Su=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class Xg{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Yg(t,e=Pt){e&&e.active&&e.effects.push(t)}const ec=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Oh=t=>(t.w&fn)>0,Ph=t=>(t.n&fn)>0,Jg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=fn},Zg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Oh(r)&&!Ph(r)?r.delete(t):e[n++]=r,r.w&=~fn,r.n&=~fn}e.length=n}},ea=new WeakMap;let Ls=0,fn=1;const ta=30;let Ct;const Nn=Symbol(""),na=Symbol("");class tc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yg(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=on;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,on=!0,fn=1<<++Ls,Ls<=ta?Jg(this):Au(this),this.fn()}finally{Ls<=ta&&Zg(this),fn=1<<--Ls,Ct=this.parent,on=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(Au(this),this.onStop&&this.onStop(),this.active=!1)}}function Au(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let on=!0;const Mh=[];function Ts(){Mh.push(on),on=!1}function Cs(){const t=Mh.pop();on=t===void 0?!0:t}function dt(t,e,n){if(on&&Ct){let s=ea.get(t);s||ea.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=ec()),Lh(r)}}function Lh(t,e){let n=!1;Ls<=ta?Ph(t)||(t.n|=fn,n=!Oh(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function zt(t,e,n,s,r,i){const o=ea.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=pi(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Za(n)&&a.push(o.get("length")):(a.push(o.get(Nn)),ts(t)&&a.push(o.get(na)));break;case"delete":W(t)||(a.push(o.get(Nn)),ts(t)&&a.push(o.get(na)));break;case"set":ts(t)&&a.push(o.get(Nn));break}if(a.length===1)a[0]&&sa(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);sa(ec(c))}}function sa(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&Ru(s);for(const s of n)s.computed||Ru(s)}function Ru(t,e){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const em=Ga("__proto__,__v_isRef,__isVue"),Fh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ja)),tm=nc(),nm=nc(!1,!0),sm=nc(!0),xu=rm();function rm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)dt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ts();const s=ae(this)[e].apply(this,n);return Cs(),s}}),t}function nc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?_m:qh:e?Vh:Bh).get(s))return s;const o=W(s);if(!t&&o&&ie(xu,r))return Reflect.get(xu,r,i);const a=Reflect.get(s,r,i);return(Ja(r)?Fh.has(r):em(r))||(t||dt(s,"get",r),e)?a:We(a)?o&&Za(r)?a:a.value:_e(a)?t?jh(a):Er(a):a}}const im=Uh(),om=Uh(!0);function Uh(t=!1){return function(n,s,r,i){let o=n[s];if(us(o)&&We(o)&&!We(r))return!1;if(!t&&(!gi(r)&&!us(r)&&(o=ae(o),r=ae(r)),!W(n)&&We(o)&&!We(r)))return o.value=r,!0;const a=W(n)&&Za(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?er(r,o)&&zt(n,"set",s,r):zt(n,"add",s,r)),c}}function am(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&zt(t,"delete",e,void 0),s}function cm(t,e){const n=Reflect.has(t,e);return(!Ja(e)||!Fh.has(e))&&dt(t,"has",e),n}function um(t){return dt(t,"iterate",W(t)?"length":Nn),Reflect.ownKeys(t)}const $h={get:tm,set:im,deleteProperty:am,has:cm,ownKeys:um},lm={get:sm,set(t,e){return!0},deleteProperty(t,e){return!0}},hm=Ye({},$h,{get:nm,set:om}),sc=t=>t,Vi=t=>Reflect.getPrototypeOf(t);function Vr(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&dt(r,"get",e),dt(r,"get",i));const{has:o}=Vi(r),a=s?sc:n?oc:tr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function qr(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&dt(s,"has",t),dt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function jr(t,e=!1){return t=t.__v_raw,!e&&dt(ae(t),"iterate",Nn),Reflect.get(t,"size",t)}function ku(t){t=ae(t);const e=ae(this);return Vi(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function Du(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=Vi(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?er(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function Nu(t){const e=ae(this),{has:n,get:s}=Vi(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&zt(e,"delete",t,void 0),i}function Ou(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function Hr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?sc:t?oc:tr;return!t&&dt(a,"iterate",Nn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Kr(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=ts(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?sc:e?oc:tr;return!e&&dt(i,"iterate",c?na:Nn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function fm(){const t={get(i){return Vr(this,i)},get size(){return jr(this)},has:qr,add:ku,set:Du,delete:Nu,clear:Ou,forEach:Hr(!1,!1)},e={get(i){return Vr(this,i,!1,!0)},get size(){return jr(this)},has:qr,add:ku,set:Du,delete:Nu,clear:Ou,forEach:Hr(!1,!0)},n={get(i){return Vr(this,i,!0)},get size(){return jr(this,!0)},has(i){return qr.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Hr(!0,!1)},s={get(i){return Vr(this,i,!0,!0)},get size(){return jr(this,!0)},has(i){return qr.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Hr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Kr(i,!1,!1),n[i]=Kr(i,!0,!1),e[i]=Kr(i,!1,!0),s[i]=Kr(i,!0,!0)}),[t,n,e,s]}const[dm,pm,gm,mm]=fm();function rc(t,e){const n=e?t?mm:gm:t?pm:dm;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const ym={get:rc(!1,!1)},vm={get:rc(!1,!0)},wm={get:rc(!0,!1)},Bh=new WeakMap,Vh=new WeakMap,qh=new WeakMap,_m=new WeakMap;function Em(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bm(t){return t.__v_skip||!Object.isExtensible(t)?0:Em(zg(t))}function Er(t){return us(t)?t:ic(t,!1,$h,ym,Bh)}function Tm(t){return ic(t,!1,hm,vm,Vh)}function jh(t){return ic(t,!0,lm,wm,qh)}function ic(t,e,n,s,r){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=bm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ns(t){return us(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function us(t){return!!(t&&t.__v_isReadonly)}function gi(t){return!!(t&&t.__v_isShallow)}function Hh(t){return ns(t)||us(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Kh(t){return di(t,"__v_skip",!0),t}const tr=t=>_e(t)?Er(t):t,oc=t=>_e(t)?jh(t):t;function zh(t){on&&Ct&&(t=ae(t),Lh(t.dep||(t.dep=ec())))}function Gh(t,e){t=ae(t),t.dep&&sa(t.dep)}function We(t){return!!(t&&t.__v_isRef===!0)}function ss(t){return Wh(t,!1)}function Cm(t){return Wh(t,!0)}function Wh(t,e){return We(t)?t:new Im(t,e)}class Im{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:tr(e)}get value(){return zh(this),this._value}set value(e){const n=this.__v_isShallow||gi(e)||us(e);e=n?e:ae(e),er(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:tr(e),Gh(this))}}function ft(t){return We(t)?t.value:t}const Sm={get:(t,e,n)=>ft(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return We(r)&&!We(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Qh(t){return ns(t)?t:new Proxy(t,Sm)}var Xh;class Am{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xh]=!1,this._dirty=!0,this.effect=new tc(e,()=>{this._dirty||(this._dirty=!0,Gh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return zh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Xh="__v_isReadonly";function Rm(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=St):(s=t.get,r=t.set),new Am(s,r,i||!r,n)}function an(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){qi(i,e,n)}return r}function vt(t,e,n,s){if(J(t)){const i=an(t,e,n,s);return i&&xh(i)&&i.catch(o=>{qi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(vt(t[i],e,n,s));return r}function qi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){an(c,null,10,[t,o,a]);return}}xm(t,n,r,s)}function xm(t,e,n,s=!0){console.error(t)}let nr=!1,ra=!1;const ze=[];let Lt=0;const rs=[];let jt=null,In=0;const Yh=Promise.resolve();let ac=null;function Jh(t){const e=ac||Yh;return t?e.then(this?t.bind(this):t):e}function km(t){let e=Lt+1,n=ze.length;for(;e<n;){const s=e+n>>>1;sr(ze[s])<t?e=s+1:n=s}return e}function cc(t){(!ze.length||!ze.includes(t,nr&&t.allowRecurse?Lt+1:Lt))&&(t.id==null?ze.push(t):ze.splice(km(t.id),0,t),Zh())}function Zh(){!nr&&!ra&&(ra=!0,ac=Yh.then(tf))}function Dm(t){const e=ze.indexOf(t);e>Lt&&ze.splice(e,1)}function Nm(t){W(t)?rs.push(...t):(!jt||!jt.includes(t,t.allowRecurse?In+1:In))&&rs.push(t),Zh()}function Pu(t,e=nr?Lt+1:0){for(;e<ze.length;e++){const n=ze[e];n&&n.pre&&(ze.splice(e,1),e--,n())}}function ef(t){if(rs.length){const e=[...new Set(rs)];if(rs.length=0,jt){jt.push(...e);return}for(jt=e,jt.sort((n,s)=>sr(n)-sr(s)),In=0;In<jt.length;In++)jt[In]();jt=null,In=0}}const sr=t=>t.id==null?1/0:t.id,Om=(t,e)=>{const n=sr(t)-sr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tf(t){ra=!1,nr=!0,ze.sort(Om);const e=St;try{for(Lt=0;Lt<ze.length;Lt++){const n=ze[Lt];n&&n.active!==!1&&an(n,null,14)}}finally{Lt=0,ze.length=0,ef(),nr=!1,ac=null,(ze.length||rs.length)&&tf()}}function Pm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||ye;f&&(r=n.map(g=>Oe(g)?g.trim():g)),h&&(r=n.map(pi))}let a,c=s[a=Ro(e)]||s[a=Ro(cs(e))];!c&&i&&(c=s[a=Ro(bs(e))]),c&&vt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vt(u,t,6,r)}}function nf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=u=>{const l=nf(u,e,!0);l&&(a=!0,Ye(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(_e(t)&&s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Ye(o,i),_e(t)&&s.set(t,o),o)}function ji(t,e){return!t||!Ui(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,bs(e))||ie(t,e))}let yt=null,Hi=null;function mi(t){const e=yt;return yt=t,Hi=t&&t.type.__scopeId||null,e}function Mm(t){Hi=t}function Lm(){Hi=null}function Vs(t,e=yt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ju(-1);const i=mi(e);let o;try{o=t(...r)}finally{mi(i),s._d&&ju(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:v}=t;let S,R;const A=mi(t);try{if(n.shapeFlag&4){const D=r||s;S=Mt(l.call(D,D,h,i,g,f,m)),R=c}else{const D=e;S=Mt(D.length>1?D(i,{attrs:c,slots:a,emit:u}):D(i,null)),R=e.props?c:Fm(c)}}catch(D){js.length=0,qi(D,t,1),S=$e(Rt)}let T=S;if(R&&v!==!1){const D=Object.keys(R),{shapeFlag:Z}=T;D.length&&Z&7&&(o&&D.some(Xa)&&(R=Um(R,o)),T=dn(T,R))}return n.dirs&&(T=dn(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),S=T,mi(A),S}const Fm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ui(n))&&((e||(e={}))[n]=t[n]);return e},Um=(t,e)=>{const n={};for(const s in t)(!Xa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function $m(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Mu(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!ji(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Mu(s,o,u):!0:!!o;return!1}function Mu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ji(n,i))return!0}return!1}function Bm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Vm=t=>t.__isSuspense;function qm(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Nm(t)}function ii(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function At(t,e,n=!1){const s=Ue||yt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const zr={};function oi(t,e,n){return sf(t,e,n)}function sf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ye){const a=Ue;let c,u=!1,l=!1;if(We(t)?(c=()=>t.value,u=gi(t)):ns(t)?(c=()=>t,s=!0):W(t)?(l=!0,u=t.some(T=>ns(T)||gi(T)),c=()=>t.map(T=>{if(We(T))return T.value;if(ns(T))return Rn(T);if(J(T))return an(T,a,2)})):J(t)?e?c=()=>an(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),vt(t,a,3,[f])}:c=St,e&&s){const T=c;c=()=>Rn(T())}let h,f=T=>{h=R.onStop=()=>{an(T,a,4)}},g;if(ir)if(f=St,e?n&&vt(e,a,3,[c(),l?[]:void 0,f]):c(),r==="sync"){const T=My();g=T.__watcherHandles||(T.__watcherHandles=[])}else return St;let m=l?new Array(t.length).fill(zr):zr;const v=()=>{if(R.active)if(e){const T=R.run();(s||u||(l?T.some((D,Z)=>er(D,m[Z])):er(T,m)))&&(h&&h(),vt(e,a,3,[T,m===zr?void 0:l&&m[0]===zr?[]:m,f]),m=T)}else R.run()};v.allowRecurse=!!e;let S;r==="sync"?S=v:r==="post"?S=()=>rt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),S=()=>cc(v));const R=new tc(c,S);e?n?v():m=R.run():r==="post"?rt(R.run.bind(R),a&&a.suspense):R.run();const A=()=>{R.stop(),a&&a.scope&&Ya(a.scope.effects,R)};return g&&g.push(A),A}function jm(t,e,n){const s=this.proxy,r=Oe(t)?t.includes(".")?rf(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=Ue;ls(this);const a=sf(r,i.bind(s),n);return o?ls(o):On(),a}function rf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Rn(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),We(t))Rn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Rn(t[n],e);else if(Rh(t)||ts(t))t.forEach(n=>{Rn(n,e)});else if(Dh(t))for(const n in t)Rn(t[n],e);return t}function Hm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return br(()=>{t.isMounted=!0}),lf(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],Km={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},setup(t,{slots:e}){const n=Ry(),s=Hm();let r;return()=>{const i=e.default&&af(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Rt){o=v;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return ko(o);const u=Lu(o);if(!u)return ko(o);const l=ia(u,a,s,n);oa(u,l);const h=n.subTree,f=h&&Lu(h);let g=!1;const{getTransitionKey:m}=u.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,g=!0)}if(f&&f.type!==Rt&&(!Sn(u,f)||g)){const v=ia(f,a,s,n);if(oa(f,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ko(o);c==="in-out"&&u.type!==Rt&&(v.delayLeave=(S,R,A)=>{const T=of(s,f);T[String(f.key)]=f,S._leaveCb=()=>{R(),S._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=A})}return o}}},zm=Km;function of(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ia(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:S,onAfterAppear:R,onAppearCancelled:A}=e,T=String(t.key),D=of(n,t),Z=(X,Ce)=>{X&&vt(X,s,9,Ce)},oe=(X,Ce)=>{const me=Ce[1];Z(X,Ce),W(X)?X.every(qe=>qe.length<=1)&&me():X.length<=1&&me()},ke={mode:i,persisted:o,beforeEnter(X){let Ce=a;if(!n.isMounted)if(r)Ce=v||a;else return;X._leaveCb&&X._leaveCb(!0);const me=D[T];me&&Sn(t,me)&&me.el._leaveCb&&me.el._leaveCb(),Z(Ce,[X])},enter(X){let Ce=c,me=u,qe=l;if(!n.isMounted)if(r)Ce=S||c,me=R||u,qe=A||l;else return;let je=!1;const _t=X._enterCb=Vt=>{je||(je=!0,Vt?Z(qe,[X]):Z(me,[X]),ke.delayedLeave&&ke.delayedLeave(),X._enterCb=void 0)};Ce?oe(Ce,[X,_t]):_t()},leave(X,Ce){const me=String(t.key);if(X._enterCb&&X._enterCb(!0),n.isUnmounting)return Ce();Z(h,[X]);let qe=!1;const je=X._leaveCb=_t=>{qe||(qe=!0,Ce(),_t?Z(m,[X]):Z(g,[X]),X._leaveCb=void 0,D[me]===t&&delete D[me])};D[me]=t,f?oe(f,[X,je]):je()},clone(X){return ia(X,e,n,s)}};return ke}function ko(t){if(Ki(t))return t=dn(t),t.children=null,t}function Lu(t){return Ki(t)?t.children?t.children[0]:void 0:t}function oa(t,e){t.shapeFlag&6&&t.component?oa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function af(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===it?(o.patchFlag&128&&r++,s=s.concat(af(o.children,e,a))):(e||o.type!==Rt)&&s.push(a!=null?dn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function cf(t){return J(t)?{setup:t,name:t.name}:t}const ai=t=>!!t.type.__asyncLoader,Ki=t=>t.type.__isKeepAlive;function Gm(t,e){uf(t,"a",e)}function Wm(t,e){uf(t,"da",e)}function uf(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(zi(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ki(r.parent.vnode)&&Qm(s,e,n,r),r=r.parent}}function Qm(t,e,n,s){const r=zi(e,t,s,!0);hf(()=>{Ya(s[e],r)},n)}function zi(t,e,n=Ue,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ts(),ls(n);const a=vt(e,n,t,o);return On(),Cs(),a});return s?r.unshift(i):r.push(i),i}}const Jt=t=>(e,n=Ue)=>(!ir||t==="sp")&&zi(t,(...s)=>e(...s),n),Xm=Jt("bm"),br=Jt("m"),Ym=Jt("bu"),Jm=Jt("u"),lf=Jt("bum"),hf=Jt("um"),Zm=Jt("sp"),ey=Jt("rtg"),ty=Jt("rtc");function ny(t,e=Ue){zi("ec",t,e)}function Gr(t,e){const n=yt;if(n===null)return t;const s=Qi(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ye]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Rn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function En(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ts(),vt(c,n,8,[t.el,a,t,e]),Cs())}}const sy=Symbol();function yi(t,e,n,s){let r;const i=n&&n[s];if(W(t)||Oe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const aa=t=>t?Tf(t)?Qi(t)||t.proxy:aa(t.parent):null,qs=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>aa(t.parent),$root:t=>aa(t.root),$emit:t=>t.emit,$options:t=>uc(t),$forceUpdate:t=>t.f||(t.f=()=>cc(t.update)),$nextTick:t=>t.n||(t.n=Jh.bind(t.proxy)),$watch:t=>jm.bind(t)}),Do=(t,e)=>t!==ye&&!t.__isScriptSetup&&ie(t,e),ry={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Do(s,e))return o[e]=1,s[e];if(r!==ye&&ie(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ie(u,e))return o[e]=3,i[e];if(n!==ye&&ie(n,e))return o[e]=4,n[e];ca&&(o[e]=0)}}const l=qs[e];let h,f;if(l)return e==="$attrs"&&dt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Do(r,e)?(r[e]=n,!0):s!==ye&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ye&&ie(t,o)||Do(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(qs,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ca=!0;function iy(t){const e=uc(t),n=t.proxy,s=t.ctx;ca=!1,e.beforeCreate&&Fu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:v,deactivated:S,beforeDestroy:R,beforeUnmount:A,destroyed:T,unmounted:D,render:Z,renderTracked:oe,renderTriggered:ke,errorCaptured:X,serverPrefetch:Ce,expose:me,inheritAttrs:qe,components:je,directives:_t,filters:Vt}=e;if(u&&oy(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const he=o[de];J(he)&&(s[de]=he.bind(n))}if(r){const de=r.call(n,n);_e(de)&&(t.data=Er(de))}if(ca=!0,i)for(const de in i){const he=i[de],Et=J(he)?he.bind(n,n):J(he.get)?he.get.bind(n,n):St,_n=!J(he)&&J(he.set)?he.set.bind(n):St,bt=mt({get:Et,set:_n});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>bt.value,set:st=>bt.value=st})}if(a)for(const de in a)ff(a[de],s,n,de);if(c){const de=J(c)?c.call(n):c;Reflect.ownKeys(de).forEach(he=>{ii(he,de[he])})}l&&Fu(l,t,"c");function Ie(de,he){W(he)?he.forEach(Et=>de(Et.bind(n))):he&&de(he.bind(n))}if(Ie(Xm,h),Ie(br,f),Ie(Ym,g),Ie(Jm,m),Ie(Gm,v),Ie(Wm,S),Ie(ny,X),Ie(ty,oe),Ie(ey,ke),Ie(lf,A),Ie(hf,D),Ie(Zm,Ce),W(me))if(me.length){const de=t.exposed||(t.exposed={});me.forEach(he=>{Object.defineProperty(de,he,{get:()=>n[he],set:Et=>n[he]=Et})})}else t.exposed||(t.exposed={});Z&&t.render===St&&(t.render=Z),qe!=null&&(t.inheritAttrs=qe),je&&(t.components=je),_t&&(t.directives=_t)}function oy(t,e,n=St,s=!1){W(t)&&(t=ua(t));for(const r in t){const i=t[r];let o;_e(i)?"default"in i?o=At(i.from||r,i.default,!0):o=At(i.from||r):o=At(i),We(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Fu(t,e,n){vt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ff(t,e,n,s){const r=s.includes(".")?rf(n,s):()=>n[s];if(Oe(t)){const i=e[t];J(i)&&oi(r,i)}else if(J(t))oi(r,t.bind(n));else if(_e(t))if(W(t))t.forEach(i=>ff(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&oi(r,i,t)}}function uc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>vi(c,u,o,!0)),vi(c,e,o)),_e(e)&&i.set(e,c),c}function vi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&vi(t,i,n,!0),r&&r.forEach(o=>vi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ay[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ay={data:Uu,props:Tn,emits:Tn,methods:Tn,computed:Tn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Tn,directives:Tn,watch:uy,provide:Uu,inject:cy};function Uu(t,e){return e?t?function(){return Ye(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function cy(t,e){return Tn(ua(t),ua(e))}function ua(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function Tn(t,e){return t?Ye(Ye(Object.create(null),t),e):e}function uy(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const s in e)n[s]=et(t[s],e[s]);return n}function ly(t,e,n,s=!1){const r={},i={};di(i,Wi,1),t.propsDefaults=Object.create(null),df(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Tm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function hy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(ji(t.emitsOptions,f))continue;const g=e[f];if(c)if(ie(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const m=cs(f);r[m]=la(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{df(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ie(e,h)&&((l=bs(h))===h||!ie(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=la(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],u=!0)}u&&zt(t,"set","$attrs")}function df(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(si(c))continue;const u=e[c];let l;r&&ie(r,l=cs(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ji(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ae(n),u=a||ye;for(let l=0;l<i.length;l++){const h=i[l];n[h]=la(r,c,h,u[h],t,!ie(u,h))}}return o}function la(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(ls(r),s=u[n]=c.call(null,e),On())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===bs(n))&&(s=!0))}return s}function pf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const l=h=>{c=!0;const[f,g]=pf(h,e,!0);Ye(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return _e(t)&&s.set(t,es),es;if(W(i))for(let l=0;l<i.length;l++){const h=cs(i[l]);$u(h)&&(o[h]=ye)}else if(i)for(const l in i){const h=cs(l);if($u(h)){const f=i[l],g=o[h]=W(f)||J(f)?{type:f}:Object.assign({},f);if(g){const m=qu(Boolean,g.type),v=qu(String,g.type);g[0]=m>-1,g[1]=v<0||m<v,(m>-1||ie(g,"default"))&&a.push(h)}}}const u=[o,a];return _e(t)&&s.set(t,u),u}function $u(t){return t[0]!=="$"}function Bu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Vu(t,e){return Bu(t)===Bu(e)}function qu(t,e){return W(e)?e.findIndex(n=>Vu(n,t)):J(e)&&Vu(e,t)?0:-1}const gf=t=>t[0]==="_"||t==="$stable",lc=t=>W(t)?t.map(Mt):[Mt(t)],fy=(t,e,n)=>{if(e._n)return e;const s=Vs((...r)=>lc(e(...r)),n);return s._c=!1,s},mf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(gf(r))continue;const i=t[r];if(J(i))e[r]=fy(r,i,s);else if(i!=null){const o=lc(i);e[r]=()=>o}}},yf=(t,e)=>{const n=lc(e);t.slots.default=()=>n},dy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),di(e,"_",n)):mf(e,t.slots={})}else t.slots={},e&&yf(t,e);di(t.slots,Wi,1)},py=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ye(r,e),!n&&a===1&&delete r._):(i=!e.$stable,mf(e,r)),o=e}else e&&(yf(t,e),o={default:1});if(i)for(const a in r)!gf(a)&&!(a in o)&&delete r[a]};function vf(){return{app:null,config:{isNativeTag:jg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gy=0;function my(t,e){return function(s,r=null){J(s)||(s=Object.assign({},s)),r!=null&&!_e(r)&&(r=null);const i=vf(),o=new Set;let a=!1;const c=i.app={_uid:gy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ly,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(c,...l)):J(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=$e(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,Qi(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function ha(t,e,n,s,r=!1){if(W(t)){t.forEach((f,g)=>ha(f,e&&(W(e)?e[g]:e),n,s,r));return}if(ai(s)&&!r)return;const i=s.shapeFlag&4?Qi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Oe(u)?(l[u]=null,ie(h,u)&&(h[u]=null)):We(u)&&(u.value=null)),J(c))an(c,a,12,[o,l]);else{const f=Oe(c),g=We(c);if(f||g){const m=()=>{if(t.f){const v=f?ie(h,c)?h[c]:l[c]:c.value;r?W(v)&&Ya(v,i):W(v)?v.includes(i)||v.push(i):f?(l[c]=[i],ie(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ie(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(m.id=-1,rt(m,n)):m()}}}const rt=qm;function yy(t){return vy(t)}function vy(t,e){const n=Qg();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=St,insertStaticContent:m}=t,v=(d,p,y,w=null,b=null,k=null,P=!1,x=null,N=!!p.dynamicChildren)=>{if(d===p)return;d&&!Sn(d,p)&&(w=O(d),st(d,b,k,!0),d=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:C,ref:j,shapeFlag:F}=p;switch(C){case Gi:S(d,p,y,w);break;case Rt:R(d,p,y,w);break;case No:d==null&&A(p,y,w,P);break;case it:je(d,p,y,w,b,k,P,x,N);break;default:F&1?Z(d,p,y,w,b,k,P,x,N):F&6?_t(d,p,y,w,b,k,P,x,N):(F&64||F&128)&&C.process(d,p,y,w,b,k,P,x,N,re)}j!=null&&b&&ha(j,d&&d.ref,k,p||d,!p)},S=(d,p,y,w)=>{if(d==null)s(p.el=a(p.children),y,w);else{const b=p.el=d.el;p.children!==d.children&&u(b,p.children)}},R=(d,p,y,w)=>{d==null?s(p.el=c(p.children||""),y,w):p.el=d.el},A=(d,p,y,w)=>{[d.el,d.anchor]=m(d.children,p,y,w,d.el,d.anchor)},T=({el:d,anchor:p},y,w)=>{let b;for(;d&&d!==p;)b=f(d),s(d,y,w),d=b;s(p,y,w)},D=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),r(d),d=y;r(p)},Z=(d,p,y,w,b,k,P,x,N)=>{P=P||p.type==="svg",d==null?oe(p,y,w,b,k,P,x,N):Ce(d,p,b,k,P,x,N)},oe=(d,p,y,w,b,k,P,x)=>{let N,C;const{type:j,props:F,shapeFlag:H,transition:G,dirs:te}=d;if(N=d.el=o(d.type,k,F&&F.is,F),H&8?l(N,d.children):H&16&&X(d.children,N,null,w,b,k&&j!=="foreignObject",P,x),te&&En(d,null,w,"created"),F){for(const fe in F)fe!=="value"&&!si(fe)&&i(N,fe,null,F[fe],k,d.children,w,b,M);"value"in F&&i(N,"value",null,F.value),(C=F.onVnodeBeforeMount)&&Ot(C,w,d)}ke(N,d,d.scopeId,P,w),te&&En(d,null,w,"beforeMount");const pe=(!b||b&&!b.pendingBranch)&&G&&!G.persisted;pe&&G.beforeEnter(N),s(N,p,y),((C=F&&F.onVnodeMounted)||pe||te)&&rt(()=>{C&&Ot(C,w,d),pe&&G.enter(N),te&&En(d,null,w,"mounted")},b)},ke=(d,p,y,w,b)=>{if(y&&g(d,y),w)for(let k=0;k<w.length;k++)g(d,w[k]);if(b){let k=b.subTree;if(p===k){const P=b.vnode;ke(d,P,P.scopeId,P.slotScopeIds,b.parent)}}},X=(d,p,y,w,b,k,P,x,N=0)=>{for(let C=N;C<d.length;C++){const j=d[C]=x?tn(d[C]):Mt(d[C]);v(null,j,p,y,w,b,k,P,x)}},Ce=(d,p,y,w,b,k,P)=>{const x=p.el=d.el;let{patchFlag:N,dynamicChildren:C,dirs:j}=p;N|=d.patchFlag&16;const F=d.props||ye,H=p.props||ye;let G;y&&bn(y,!1),(G=H.onVnodeBeforeUpdate)&&Ot(G,y,p,d),j&&En(p,d,y,"beforeUpdate"),y&&bn(y,!0);const te=b&&p.type!=="foreignObject";if(C?me(d.dynamicChildren,C,x,y,w,te,k):P||he(d,p,x,null,y,w,te,k,!1),N>0){if(N&16)qe(x,p,F,H,y,w,b);else if(N&2&&F.class!==H.class&&i(x,"class",null,H.class,b),N&4&&i(x,"style",F.style,H.style,b),N&8){const pe=p.dynamicProps;for(let fe=0;fe<pe.length;fe++){const Se=pe[fe],Tt=F[Se],Gn=H[Se];(Gn!==Tt||Se==="value")&&i(x,Se,Tt,Gn,b,d.children,y,w,M)}}N&1&&d.children!==p.children&&l(x,p.children)}else!P&&C==null&&qe(x,p,F,H,y,w,b);((G=H.onVnodeUpdated)||j)&&rt(()=>{G&&Ot(G,y,p,d),j&&En(p,d,y,"updated")},w)},me=(d,p,y,w,b,k,P)=>{for(let x=0;x<p.length;x++){const N=d[x],C=p[x],j=N.el&&(N.type===it||!Sn(N,C)||N.shapeFlag&70)?h(N.el):y;v(N,C,j,null,w,b,k,P,!0)}},qe=(d,p,y,w,b,k,P)=>{if(y!==w){if(y!==ye)for(const x in y)!si(x)&&!(x in w)&&i(d,x,y[x],null,P,p.children,b,k,M);for(const x in w){if(si(x))continue;const N=w[x],C=y[x];N!==C&&x!=="value"&&i(d,x,C,N,P,p.children,b,k,M)}"value"in w&&i(d,"value",y.value,w.value)}},je=(d,p,y,w,b,k,P,x,N)=>{const C=p.el=d?d.el:a(""),j=p.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:G}=p;G&&(x=x?x.concat(G):G),d==null?(s(C,y,w),s(j,y,w),X(p.children,y,j,b,k,P,x,N)):F>0&&F&64&&H&&d.dynamicChildren?(me(d.dynamicChildren,H,y,b,k,P,x),(p.key!=null||b&&p===b.subTree)&&wf(d,p,!0)):he(d,p,y,j,b,k,P,x,N)},_t=(d,p,y,w,b,k,P,x,N)=>{p.slotScopeIds=x,d==null?p.shapeFlag&512?b.ctx.activate(p,y,w,P,N):Vt(p,y,w,b,k,P,N):Ds(d,p,N)},Vt=(d,p,y,w,b,k,P)=>{const x=d.component=Ay(d,w,b);if(Ki(d)&&(x.ctx.renderer=re),xy(x),x.asyncDep){if(b&&b.registerDep(x,Ie),!d.el){const N=x.subTree=$e(Rt);R(null,N,p,y)}return}Ie(x,d,p,y,b,k,P)},Ds=(d,p,y)=>{const w=p.component=d.component;if($m(d,p,y))if(w.asyncDep&&!w.asyncResolved){de(w,p,y);return}else w.next=p,Dm(w.update),w.update();else p.el=d.el,w.vnode=p},Ie=(d,p,y,w,b,k,P)=>{const x=()=>{if(d.isMounted){let{next:j,bu:F,u:H,parent:G,vnode:te}=d,pe=j,fe;bn(d,!1),j?(j.el=te.el,de(d,j,P)):j=te,F&&ri(F),(fe=j.props&&j.props.onVnodeBeforeUpdate)&&Ot(fe,G,j,te),bn(d,!0);const Se=xo(d),Tt=d.subTree;d.subTree=Se,v(Tt,Se,h(Tt.el),O(Tt),d,b,k),j.el=Se.el,pe===null&&Bm(d,Se.el),H&&rt(H,b),(fe=j.props&&j.props.onVnodeUpdated)&&rt(()=>Ot(fe,G,j,te),b)}else{let j;const{el:F,props:H}=p,{bm:G,m:te,parent:pe}=d,fe=ai(p);if(bn(d,!1),G&&ri(G),!fe&&(j=H&&H.onVnodeBeforeMount)&&Ot(j,pe,p),bn(d,!0),F&&ee){const Se=()=>{d.subTree=xo(d),ee(F,d.subTree,d,b,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Se()):Se()}else{const Se=d.subTree=xo(d);v(null,Se,y,w,d,b,k),p.el=Se.el}if(te&&rt(te,b),!fe&&(j=H&&H.onVnodeMounted)){const Se=p;rt(()=>Ot(j,pe,Se),b)}(p.shapeFlag&256||pe&&ai(pe.vnode)&&pe.vnode.shapeFlag&256)&&d.a&&rt(d.a,b),d.isMounted=!0,p=y=w=null}},N=d.effect=new tc(x,()=>cc(C),d.scope),C=d.update=()=>N.run();C.id=d.uid,bn(d,!0),C()},de=(d,p,y)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,hy(d,p.props,w,y),py(d,p.children,y),Ts(),Pu(),Cs()},he=(d,p,y,w,b,k,P,x,N=!1)=>{const C=d&&d.children,j=d?d.shapeFlag:0,F=p.children,{patchFlag:H,shapeFlag:G}=p;if(H>0){if(H&128){_n(C,F,y,w,b,k,P,x,N);return}else if(H&256){Et(C,F,y,w,b,k,P,x,N);return}}G&8?(j&16&&M(C,b,k),F!==C&&l(y,F)):j&16?G&16?_n(C,F,y,w,b,k,P,x,N):M(C,b,k,!0):(j&8&&l(y,""),G&16&&X(F,y,w,b,k,P,x,N))},Et=(d,p,y,w,b,k,P,x,N)=>{d=d||es,p=p||es;const C=d.length,j=p.length,F=Math.min(C,j);let H;for(H=0;H<F;H++){const G=p[H]=N?tn(p[H]):Mt(p[H]);v(d[H],G,y,null,b,k,P,x,N)}C>j?M(d,b,k,!0,!1,F):X(p,y,w,b,k,P,x,N,F)},_n=(d,p,y,w,b,k,P,x,N)=>{let C=0;const j=p.length;let F=d.length-1,H=j-1;for(;C<=F&&C<=H;){const G=d[C],te=p[C]=N?tn(p[C]):Mt(p[C]);if(Sn(G,te))v(G,te,y,null,b,k,P,x,N);else break;C++}for(;C<=F&&C<=H;){const G=d[F],te=p[H]=N?tn(p[H]):Mt(p[H]);if(Sn(G,te))v(G,te,y,null,b,k,P,x,N);else break;F--,H--}if(C>F){if(C<=H){const G=H+1,te=G<j?p[G].el:w;for(;C<=H;)v(null,p[C]=N?tn(p[C]):Mt(p[C]),y,te,b,k,P,x,N),C++}}else if(C>H)for(;C<=F;)st(d[C],b,k,!0),C++;else{const G=C,te=C,pe=new Map;for(C=te;C<=H;C++){const ut=p[C]=N?tn(p[C]):Mt(p[C]);ut.key!=null&&pe.set(ut.key,C)}let fe,Se=0;const Tt=H-te+1;let Gn=!1,Tu=0;const Ns=new Array(Tt);for(C=0;C<Tt;C++)Ns[C]=0;for(C=G;C<=F;C++){const ut=d[C];if(Se>=Tt){st(ut,b,k,!0);continue}let Nt;if(ut.key!=null)Nt=pe.get(ut.key);else for(fe=te;fe<=H;fe++)if(Ns[fe-te]===0&&Sn(ut,p[fe])){Nt=fe;break}Nt===void 0?st(ut,b,k,!0):(Ns[Nt-te]=C+1,Nt>=Tu?Tu=Nt:Gn=!0,v(ut,p[Nt],y,null,b,k,P,x,N),Se++)}const Cu=Gn?wy(Ns):es;for(fe=Cu.length-1,C=Tt-1;C>=0;C--){const ut=te+C,Nt=p[ut],Iu=ut+1<j?p[ut+1].el:w;Ns[C]===0?v(null,Nt,y,Iu,b,k,P,x,N):Gn&&(fe<0||C!==Cu[fe]?bt(Nt,y,Iu,2):fe--)}}},bt=(d,p,y,w,b=null)=>{const{el:k,type:P,transition:x,children:N,shapeFlag:C}=d;if(C&6){bt(d.component.subTree,p,y,w);return}if(C&128){d.suspense.move(p,y,w);return}if(C&64){P.move(d,p,y,re);return}if(P===it){s(k,p,y);for(let F=0;F<N.length;F++)bt(N[F],p,y,w);s(d.anchor,p,y);return}if(P===No){T(d,p,y);return}if(w!==2&&C&1&&x)if(w===0)x.beforeEnter(k),s(k,p,y),rt(()=>x.enter(k),b);else{const{leave:F,delayLeave:H,afterLeave:G}=x,te=()=>s(k,p,y),pe=()=>{F(k,()=>{te(),G&&G()})};H?H(k,te,pe):pe()}else s(k,p,y)},st=(d,p,y,w=!1,b=!1)=>{const{type:k,props:P,ref:x,children:N,dynamicChildren:C,shapeFlag:j,patchFlag:F,dirs:H}=d;if(x!=null&&ha(x,null,y,d,!0),j&256){p.ctx.deactivate(d);return}const G=j&1&&H,te=!ai(d);let pe;if(te&&(pe=P&&P.onVnodeBeforeUnmount)&&Ot(pe,p,d),j&6)E(d.component,y,w);else{if(j&128){d.suspense.unmount(y,w);return}G&&En(d,null,p,"beforeUnmount"),j&64?d.type.remove(d,p,y,b,re,w):C&&(k!==it||F>0&&F&64)?M(C,p,y,!1,!0):(k===it&&F&384||!b&&j&16)&&M(N,p,y),w&&zn(d)}(te&&(pe=P&&P.onVnodeUnmounted)||G)&&rt(()=>{pe&&Ot(pe,p,d),G&&En(d,null,p,"unmounted")},y)},zn=d=>{const{type:p,el:y,anchor:w,transition:b}=d;if(p===it){Br(y,w);return}if(p===No){D(d);return}const k=()=>{r(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:x}=b,N=()=>P(y,k);x?x(d.el,k,N):N()}else k()},Br=(d,p)=>{let y;for(;d!==p;)y=f(d),r(d),d=y;r(p)},E=(d,p,y)=>{const{bum:w,scope:b,update:k,subTree:P,um:x}=d;w&&ri(w),b.stop(),k&&(k.active=!1,st(P,d,p,y)),x&&rt(x,p),rt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},M=(d,p,y,w=!1,b=!1,k=0)=>{for(let P=k;P<d.length;P++)st(d[P],p,y,w,b)},O=d=>d.shapeFlag&6?O(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),V=(d,p,y)=>{d==null?p._vnode&&st(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,y),Pu(),ef(),p._vnode=d},re={p:v,um:st,m:bt,r:zn,mt:Vt,mc:X,pc:he,pbc:me,n:O,o:t};let Ee,ee;return e&&([Ee,ee]=e(re)),{render:V,hydrate:Ee,createApp:my(V,Ee)}}function bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wf(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=tn(r[i]),a.el=o.el),n||wf(o,a)),a.type===Gi&&(a.el=o.el)}}function wy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const _y=t=>t.__isTeleport,it=Symbol(void 0),Gi=Symbol(void 0),Rt=Symbol(void 0),No=Symbol(void 0),js=[];let It=null;function tt(t=!1){js.push(It=t?null:[])}function Ey(){js.pop(),It=js[js.length-1]||null}let rr=1;function ju(t){rr+=t}function _f(t){return t.dynamicChildren=rr>0?It||es:null,Ey(),rr>0&&It&&It.push(t),t}function lt(t,e,n,s,r,i){return _f($(t,e,n,s,r,i,!0))}function Ef(t,e,n,s,r){return _f($e(t,e,n,s,r,!0))}function fa(t){return t?t.__v_isVNode===!0:!1}function Sn(t,e){return t.type===e.type&&t.key===e.key}const Wi="__vInternal",bf=({key:t})=>t??null,ci=({ref:t,ref_key:e,ref_for:n})=>t!=null?Oe(t)||We(t)||J(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function $(t,e=null,n=null,s=0,r=null,i=t===it?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bf(e),ref:e&&ci(e),scopeId:Hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yt};return a?(hc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),rr>0&&!o&&It&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&It.push(c),c}const $e=by;function by(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===sy)&&(t=Rt),fa(t)){const a=dn(t,e,!0);return n&&hc(a,n),rr>0&&!i&&It&&(a.shapeFlag&6?It[It.indexOf(t)]=a:It.push(a)),a.patchFlag|=-2,a}if(Oy(t)&&(t=t.__vccOpts),e){e=Ty(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=Qa(a)),_e(c)&&(Hh(c)&&!W(c)&&(c=Ye({},c)),e.style=Wa(c))}const o=Oe(t)?1:Vm(t)?128:_y(t)?64:_e(t)?4:J(t)?2:0;return $(t,e,n,s,r,o,i,!0)}function Ty(t){return t?Hh(t)||Wi in t?Ye({},t):t:null}function dn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Cy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&bf(a),ref:e&&e.ref?n&&r?W(r)?r.concat(ci(e)):[r,ci(e)]:ci(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Hs(t=" ",e=0){return $e(Gi,null,t,e)}function Hu(t="",e=!1){return e?(tt(),Ef(Rt,null,t)):$e(Rt,null,t)}function Mt(t){return t==null||typeof t=="boolean"?$e(Rt):W(t)?$e(it,null,t.slice()):typeof t=="object"?tn(t):$e(Gi,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function hc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Wi in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),s&64?(n=16,e=[Hs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Qa([e.class,s.class]));else if(r==="style")e.style=Wa([e.style,s.style]);else if(Ui(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ot(t,e,n,s=null){vt(t,e,7,[n,s])}const Iy=vf();let Sy=0;function Ay(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Iy,i={uid:Sy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pf(s,r),emitsOptions:nf(s,r),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Pm.bind(null,i),t.ce&&t.ce(i),i}let Ue=null;const Ry=()=>Ue||yt,ls=t=>{Ue=t,t.scope.on()},On=()=>{Ue&&Ue.scope.off(),Ue=null};function Tf(t){return t.vnode.shapeFlag&4}let ir=!1;function xy(t,e=!1){ir=e;const{props:n,children:s}=t.vnode,r=Tf(t);ly(t,n,r,e),dy(t,s);const i=r?ky(t,e):void 0;return ir=!1,i}function ky(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kh(new Proxy(t.ctx,ry));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Ny(t):null;ls(t),Ts();const i=an(s,t,0,[t.props,r]);if(Cs(),On(),xh(i)){if(i.then(On,On),e)return i.then(o=>{Ku(t,o,e)}).catch(o=>{qi(o,t,0)});t.asyncDep=i}else Ku(t,i,e)}else Cf(t,e)}function Ku(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=Qh(e)),Cf(t,n)}let zu;function Cf(t,e,n){const s=t.type;if(!t.render){if(!e&&zu&&!s.render){const r=s.template||uc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Ye(Ye({isCustomElement:i,delimiters:a},o),c);s.render=zu(r,u)}}t.render=s.render||St}ls(t),Ts(),iy(t),Cs(),On()}function Dy(t){return new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}})}function Ny(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Dy(t))},slots:t.slots,emit:t.emit,expose:e}}function Qi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qh(Kh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}}))}function Oy(t){return J(t)&&"__vccOpts"in t}const mt=(t,e)=>Rm(t,e,ir);function If(t,e,n){const s=arguments.length;return s===2?_e(e)&&!W(e)?fa(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&fa(n)&&(n=[n]),$e(t,e,n))}const Py=Symbol(""),My=()=>At(Py),Ly="3.2.45",Fy="http://www.w3.org/2000/svg",An=typeof document<"u"?document:null,Gu=An&&An.createElement("template"),Uy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?An.createElementNS(Fy,t):An.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Gu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Gu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function $y(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function By(t,e,n){const s=t.style,r=Oe(n);if(n&&!r){for(const i in n)da(s,i,n[i]);if(e&&!Oe(e))for(const i in e)n[i]==null&&da(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Wu=/\s*!important$/;function da(t,e,n){if(W(n))n.forEach(s=>da(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Vy(t,e);Wu.test(n)?t.setProperty(bs(s),n.replace(Wu,""),"important"):t[s]=n}}const Qu=["Webkit","Moz","ms"],Oo={};function Vy(t,e){const n=Oo[e];if(n)return n;let s=cs(e);if(s!=="filter"&&s in t)return Oo[e]=s;s=Nh(s);for(let r=0;r<Qu.length;r++){const i=Qu[r]+s;if(i in t)return Oo[e]=i}return e}const Xu="http://www.w3.org/1999/xlink";function qy(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xu,e.slice(6,e.length)):t.setAttributeNS(Xu,e,n);else{const i=qg(e);n==null||i&&!Sh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function jy(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Sh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Qn(t,e,n,s){t.addEventListener(e,n,s)}function Hy(t,e,n,s){t.removeEventListener(e,n,s)}function Ky(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=zy(e);if(s){const u=i[e]=Qy(s,r);Qn(t,a,u,c)}else o&&(Hy(t,a,o,c),i[e]=void 0)}}const Yu=/(?:Once|Passive|Capture)$/;function zy(t){let e;if(Yu.test(t)){e={};let s;for(;s=t.match(Yu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bs(t.slice(2)),e]}let Po=0;const Gy=Promise.resolve(),Wy=()=>Po||(Gy.then(()=>Po=0),Po=Date.now());function Qy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;vt(Xy(s,n.value),e,5,[s])};return n.value=t,n.attached=Wy(),n}function Xy(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ju=/^on[a-z]/,Yy=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?$y(t,s,r):e==="style"?By(t,n,s):Ui(e)?Xa(e)||Ky(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jy(t,e,s,r))?jy(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),qy(t,e,s,r))};function Jy(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ju.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ju.test(e)&&Oe(n)?!1:e in t}const Zy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};zm.props;const Zu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>ri(e,n):e};function ev(t){t.target.composing=!0}function el(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wr={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Zu(r);const i=s||r.props&&r.props.type==="number";Qn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=pi(a)),t._assign(a)}),n&&Qn(t,"change",()=>{t.value=t.value.trim()}),e||(Qn(t,"compositionstart",ev),Qn(t,"compositionend",el),Qn(t,"change",el))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Zu(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&pi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},tv=Ye({patchProp:Yy},Uy);let tl;function nv(){return tl||(tl=yy(tv))}const sv=(...t)=>{const e=nv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=rv(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function rv(t){return Oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xn=typeof window<"u";function iv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const le=Object.assign;function Mo(t,e){const n={};for(const s in e){const r=e[s];n[s]=kt(r)?r.map(t):t(r)}return n}const Ks=()=>{},kt=Array.isArray,ov=/\/$/,av=t=>t.replace(ov,"");function Lo(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=hv(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function cv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&hs(e.matched[s],n.matched[r])&&Sf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lv(t[n],e[n]))return!1;return!0}function lv(t,e){return kt(t)?sl(t,e):kt(e)?sl(e,t):t===e}function sl(t,e){return kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function hv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var or;(function(t){t.pop="pop",t.push="push"})(or||(or={}));var zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zs||(zs={}));function fv(t){if(!t)if(Xn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),av(t)}const dv=/^[^#]+#/;function pv(t,e){return t.replace(dv,"#")+e}function gv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Xi=()=>({left:window.pageXOffset,top:window.pageYOffset});function mv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=gv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function rl(t,e){return(history.state?history.state.position-e:-1)+t}const pa=new Map;function yv(t,e){pa.set(t,e)}function vv(t){const e=pa.get(t);return pa.delete(t),e}let wv=()=>location.protocol+"//"+location.host;function Af(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),nl(c,"")}return nl(n,t)+s+r}function _v(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Af(t,location),m=n.value,v=e.value;let S=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}S=v?f.position-v.position:0}else s(g);r.forEach(R=>{R(n.value,m,{delta:S,type:or.pop,direction:S?S>0?zs.forward:zs.back:zs.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(g),g}function l(){const{history:f}=window;f.state&&f.replaceState(le({},f.state,{scroll:Xi()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function il(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Xi():null}}function Ev(t){const{history:e,location:n}=window,s={value:Af(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:wv()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=le({},e.state,il(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=le({},r.value,e.state,{forward:c,scroll:Xi()});i(l.current,l,!0);const h=le({},il(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function bv(t){t=fv(t);const e=Ev(t),n=_v(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=le({location:"",base:t,go:s,createHref:pv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Tv(t){return typeof t=="string"||t&&typeof t=="object"}function Rf(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xf=Symbol("");var ol;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ol||(ol={}));function fs(t,e){return le(new Error,{type:t,[xf]:!0},e)}function qt(t,e){return t instanceof Error&&xf in t&&(e==null||!!(t.type&e))}const al="[^/]+?",Cv={sensitive:!1,strict:!1,start:!0,end:!0},Iv=/[.+*?^${}()[\]/\\]/g;function Sv(t,e){const n=le({},Cv,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Iv,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:v,optional:S,regexp:R}=f;i.push({name:m,repeatable:v,optional:S});const A=R||al;if(A!==al){g+=10;try{new RegExp(`(${A})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${A}): `+D.message)}}let T=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(T=S&&u.length<2?`(?:/${T})`:"/"+T),S&&(T+="?"),r+=T,g+=20,S&&(g+=-8),v&&(g+=-20),A===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:m,repeatable:v,optional:S}=g,R=m in u?u[m]:"";if(kt(R)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const A=kt(R)?R.join("/"):R;if(!A)if(S)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=A}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Av(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Rv(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Av(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(cl(s))return 1;if(cl(r))return-1}return r.length-s.length}function cl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xv={type:0,value:""},kv=/[a-zA-Z0-9_]/;function Dv(t){if(!t)return[[]];if(t==="/")return[[xv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:kv.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function Nv(t,e,n){const s=Sv(Dv(t.path),n),r=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ov(t,e){const n=[],s=new Map;e=hl({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,m=Pv(l);m.aliasOf=f&&f.record;const v=hl(e,l),S=[m];if("alias"in l){const T=typeof l.alias=="string"?[l.alias]:l.alias;for(const D of T)S.push(le({},m,{components:f?f.record.components:m.components,path:D,aliasOf:f?f.record:m}))}let R,A;for(const T of S){const{path:D}=T;if(h&&D[0]!=="/"){const Z=h.record.path,oe=Z[Z.length-1]==="/"?"":"/";T.path=h.record.path+(D&&oe+D)}if(R=Nv(T,h,v),f?f.alias.push(R):(A=A||R,A!==R&&A.alias.push(R),g&&l.name&&!ll(R)&&o(l.name)),m.children){const Z=m.children;for(let oe=0;oe<Z.length;oe++)i(Z[oe],R,f&&f.children[oe])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return A?()=>{o(A)}:Ks}function o(l){if(Rf(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&Rv(l,n[h])>=0&&(l.record.path!==n[h].record.path||!kf(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!ll(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},m,v;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw fs(1,{location:l});v=f.record.name,g=le(ul(h.params,f.keys.filter(A=>!A.optional).map(A=>A.name)),l.params&&ul(l.params,f.keys.map(A=>A.name))),m=f.stringify(g)}else if("path"in l)m=l.path,f=n.find(A=>A.re.test(m)),f&&(g=f.parse(m),v=f.record.name);else{if(f=h.name?s.get(h.name):n.find(A=>A.re.test(h.path)),!f)throw fs(1,{location:l,currentLocation:h});v=f.record.name,g=le({},h.params,l.params),m=f.stringify(g)}const S=[];let R=f;for(;R;)S.unshift(R.record),R=R.parent;return{name:v,path:m,params:g,matched:S,meta:Lv(S)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ul(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Pv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Mv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Mv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ll(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lv(t){return t.reduce((e,n)=>le(e,n.meta),{})}function hl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function kf(t,e){return e.children.some(n=>n===t||kf(t,n))}const Df=/#/g,Fv=/&/g,Uv=/\//g,$v=/=/g,Bv=/\?/g,Nf=/\+/g,Vv=/%5B/g,qv=/%5D/g,Of=/%5E/g,jv=/%60/g,Pf=/%7B/g,Hv=/%7C/g,Mf=/%7D/g,Kv=/%20/g;function fc(t){return encodeURI(""+t).replace(Hv,"|").replace(Vv,"[").replace(qv,"]")}function zv(t){return fc(t).replace(Pf,"{").replace(Mf,"}").replace(Of,"^")}function ga(t){return fc(t).replace(Nf,"%2B").replace(Kv,"+").replace(Df,"%23").replace(Fv,"%26").replace(jv,"`").replace(Pf,"{").replace(Mf,"}").replace(Of,"^")}function Gv(t){return ga(t).replace($v,"%3D")}function Wv(t){return fc(t).replace(Df,"%23").replace(Bv,"%3F")}function Qv(t){return t==null?"":Wv(t).replace(Uv,"%2F")}function wi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Xv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Nf," "),o=i.indexOf("="),a=wi(o<0?i:i.slice(0,o)),c=o<0?null:wi(i.slice(o+1));if(a in e){let u=e[a];kt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function fl(t){let e="";for(let n in t){const s=t[n];if(n=Gv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(s)?s.map(i=>i&&ga(i)):[s&&ga(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Yv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Jv=Symbol(""),dl=Symbol(""),Yi=Symbol(""),dc=Symbol(""),ma=Symbol("");function Os(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function nn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(fs(4,{from:n,to:e})):h instanceof Error?a(h):Tv(h)?a(fs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Fo(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Zv(a)){const u=(a.__vccOpts||a)[e];u&&r.push(nn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=iv(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&nn(f,n,s,i,o)()}))}}return r}function Zv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pl(t){const e=At(Yi),n=At(dc),s=mt(()=>e.resolve(ft(t.to))),r=mt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(hs.bind(null,l));if(f>-1)return f;const g=gl(c[u-2]);return u>1&&gl(l)===g&&h[h.length-1].path!==g?h.findIndex(hs.bind(null,c[u-2])):f}),i=mt(()=>r.value>-1&&nw(n.params,s.value.params)),o=mt(()=>r.value>-1&&r.value===n.matched.length-1&&Sf(n.params,s.value.params));function a(c={}){return tw(c)?e[ft(t.replace)?"replace":"push"](ft(t.to)).catch(Ks):Promise.resolve()}return{route:s,href:mt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const ew=cf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pl,setup(t,{slots:e}){const n=Er(pl(t)),{options:s}=At(Yi),r=mt(()=>({[ml(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ml(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:If("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Gs=ew;function tw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!kt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function gl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ml=(t,e,n)=>t??e??n,sw=cf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=At(ma),r=mt(()=>t.route||s.value),i=At(dl,0),o=mt(()=>{let u=ft(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=mt(()=>r.value.matched[o.value]);ii(dl,mt(()=>o.value+1)),ii(Jv,a),ii(ma,r);const c=ss();return oi(()=>[c.value,a.value,t.name],([u,l,h],[f,g,m])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!hs(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return yl(n.default,{Component:f,route:u});const g=h.props[l],m=g?g===!0?u.params:typeof g=="function"?g(u):g:null,S=If(f,le({},m,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return yl(n.default,{Component:S,route:u})||S}}});function yl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lf=sw;function rw(t){const e=Ov(t.routes,t),n=t.parseQuery||Xv,s=t.stringifyQuery||fl,r=t.history,i=Os(),o=Os(),a=Os(),c=Cm(en);let u=en;Xn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Mo.bind(null,E=>""+E),h=Mo.bind(null,Qv),f=Mo.bind(null,wi);function g(E,M){let O,V;return Rf(E)?(O=e.getRecordMatcher(E),V=M):V=E,e.addRoute(V,O)}function m(E){const M=e.getRecordMatcher(E);M&&e.removeRoute(M)}function v(){return e.getRoutes().map(E=>E.record)}function S(E){return!!e.getRecordMatcher(E)}function R(E,M){if(M=le({},M||c.value),typeof E=="string"){const d=Lo(n,E,M.path),p=e.resolve({path:d.path},M),y=r.createHref(d.fullPath);return le(d,p,{params:f(p.params),hash:wi(d.hash),redirectedFrom:void 0,href:y})}let O;if("path"in E)O=le({},E,{path:Lo(n,E.path,M.path).path});else{const d=le({},E.params);for(const p in d)d[p]==null&&delete d[p];O=le({},E,{params:h(E.params)}),M.params=h(M.params)}const V=e.resolve(O,M),re=E.hash||"";V.params=l(f(V.params));const Ee=cv(s,le({},E,{hash:zv(re),path:V.path})),ee=r.createHref(Ee);return le({fullPath:Ee,hash:re,query:s===fl?Yv(E.query):E.query||{}},V,{redirectedFrom:void 0,href:ee})}function A(E){return typeof E=="string"?Lo(n,E,c.value.path):le({},E)}function T(E,M){if(u!==E)return fs(8,{from:M,to:E})}function D(E){return ke(E)}function Z(E){return D(le(A(E),{replace:!0}))}function oe(E){const M=E.matched[E.matched.length-1];if(M&&M.redirect){const{redirect:O}=M;let V=typeof O=="function"?O(E):O;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=A(V):{path:V},V.params={}),le({query:E.query,hash:E.hash,params:"path"in V?{}:E.params},V)}}function ke(E,M){const O=u=R(E),V=c.value,re=E.state,Ee=E.force,ee=E.replace===!0,d=oe(O);if(d)return ke(le(A(d),{state:typeof d=="object"?le({},re,d.state):re,force:Ee,replace:ee}),M||O);const p=O;p.redirectedFrom=M;let y;return!Ee&&uv(s,V,O)&&(y=fs(16,{to:p,from:V}),_n(V,V,!0,!1)),(y?Promise.resolve(y):Ce(p,V)).catch(w=>qt(w)?qt(w,2)?w:Et(w):de(w,p,V)).then(w=>{if(w){if(qt(w,2))return ke(le({replace:ee},A(w.to),{state:typeof w.to=="object"?le({},re,w.to.state):re,force:Ee}),M||p)}else w=qe(p,V,!0,ee,re);return me(p,V,w),w})}function X(E,M){const O=T(E,M);return O?Promise.reject(O):Promise.resolve()}function Ce(E,M){let O;const[V,re,Ee]=iw(E,M);O=Fo(V.reverse(),"beforeRouteLeave",E,M);for(const d of V)d.leaveGuards.forEach(p=>{O.push(nn(p,E,M))});const ee=X.bind(null,E,M);return O.push(ee),Wn(O).then(()=>{O=[];for(const d of i.list())O.push(nn(d,E,M));return O.push(ee),Wn(O)}).then(()=>{O=Fo(re,"beforeRouteUpdate",E,M);for(const d of re)d.updateGuards.forEach(p=>{O.push(nn(p,E,M))});return O.push(ee),Wn(O)}).then(()=>{O=[];for(const d of E.matched)if(d.beforeEnter&&!M.matched.includes(d))if(kt(d.beforeEnter))for(const p of d.beforeEnter)O.push(nn(p,E,M));else O.push(nn(d.beforeEnter,E,M));return O.push(ee),Wn(O)}).then(()=>(E.matched.forEach(d=>d.enterCallbacks={}),O=Fo(Ee,"beforeRouteEnter",E,M),O.push(ee),Wn(O))).then(()=>{O=[];for(const d of o.list())O.push(nn(d,E,M));return O.push(ee),Wn(O)}).catch(d=>qt(d,8)?d:Promise.reject(d))}function me(E,M,O){for(const V of a.list())V(E,M,O)}function qe(E,M,O,V,re){const Ee=T(E,M);if(Ee)return Ee;const ee=M===en,d=Xn?history.state:{};O&&(V||ee?r.replace(E.fullPath,le({scroll:ee&&d&&d.scroll},re)):r.push(E.fullPath,re)),c.value=E,_n(E,M,O,ee),Et()}let je;function _t(){je||(je=r.listen((E,M,O)=>{if(!Br.listening)return;const V=R(E),re=oe(V);if(re){ke(le(re,{replace:!0}),V).catch(Ks);return}u=V;const Ee=c.value;Xn&&yv(rl(Ee.fullPath,O.delta),Xi()),Ce(V,Ee).catch(ee=>qt(ee,12)?ee:qt(ee,2)?(ke(ee.to,V).then(d=>{qt(d,20)&&!O.delta&&O.type===or.pop&&r.go(-1,!1)}).catch(Ks),Promise.reject()):(O.delta&&r.go(-O.delta,!1),de(ee,V,Ee))).then(ee=>{ee=ee||qe(V,Ee,!1),ee&&(O.delta&&!qt(ee,8)?r.go(-O.delta,!1):O.type===or.pop&&qt(ee,20)&&r.go(-1,!1)),me(V,Ee,ee)}).catch(Ks)}))}let Vt=Os(),Ds=Os(),Ie;function de(E,M,O){Et(E);const V=Ds.list();return V.length?V.forEach(re=>re(E,M,O)):console.error(E),Promise.reject(E)}function he(){return Ie&&c.value!==en?Promise.resolve():new Promise((E,M)=>{Vt.add([E,M])})}function Et(E){return Ie||(Ie=!E,_t(),Vt.list().forEach(([M,O])=>E?O(E):M()),Vt.reset()),E}function _n(E,M,O,V){const{scrollBehavior:re}=t;if(!Xn||!re)return Promise.resolve();const Ee=!O&&vv(rl(E.fullPath,0))||(V||!O)&&history.state&&history.state.scroll||null;return Jh().then(()=>re(E,M,Ee)).then(ee=>ee&&mv(ee)).catch(ee=>de(ee,E,M))}const bt=E=>r.go(E);let st;const zn=new Set,Br={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:S,getRoutes:v,resolve:R,options:t,push:D,replace:Z,go:bt,back:()=>bt(-1),forward:()=>bt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ds.add,isReady:he,install(E){const M=this;E.component("RouterLink",Gs),E.component("RouterView",Lf),E.config.globalProperties.$router=M,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(c)}),Xn&&!st&&c.value===en&&(st=!0,D(r.location).catch(re=>{}));const O={};for(const re in en)O[re]=mt(()=>c.value[re]);E.provide(Yi,M),E.provide(dc,Er(O)),E.provide(ma,c);const V=E.unmount;zn.add(E),E.unmount=function(){zn.delete(E),zn.size<1&&(u=en,je&&je(),je=null,c.value=en,st=!1,Ie=!1),V()}}};return Br}function Wn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function iw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>hs(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>hs(u,c))||r.push(c))}return[n,s,r]}function ow(){return At(Yi)}function aw(){return At(dc)}const cw={__name:"App",setup(t){return(e,n)=>(tt(),Ef(ft(Lf)))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},uw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ff(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},lw=function(t){const e=Ff(t);return Uf.encodeByteArray(e,!0)},_i=function(t){return lw(t).replace(/\./g,"")},hw=function(t){try{return Uf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function fw(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dw(){try{return typeof indexedDB=="object"}catch{return!1}}function pw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function gw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=()=>gw().__FIREBASE_DEFAULTS__,yw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hw(t[1]);return e&&JSON.parse(e)},$f=()=>{try{return mw()||yw()||vw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ww=t=>{var e,n;return(n=(e=$f())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bf=t=>{const e=ww(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},_w=()=>{var t;return(t=$f())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_i(JSON.stringify(n)),_i(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="FirebaseError";class Vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=bw,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qf.prototype.create)}}class qf{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Tw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Vn(r,a,s)}}function Tw(t,e){return t.replace(Cw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Cw=/\{\$([^}]+)}/g;function ya(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(vl(i)&&vl(o)){if(!ya(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function vl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class ds{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ew;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Aw(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sw(t){return t===Cn?void 0:t}function Aw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Iw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const xw={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},kw=ce.INFO,Dw={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Nw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Dw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=kw,this._logHandler=Nw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Ow=(t,e)=>e.some(n=>t instanceof n);let wl,_l;function Pw(){return wl||(wl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mw(){return _l||(_l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hf=new WeakMap,va=new WeakMap,Kf=new WeakMap,Uo=new WeakMap,pc=new WeakMap;function Lw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hf.set(n,t)}).catch(()=>{}),pc.set(e,t),e}function Fw(t){if(va.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});va.set(t,e)}let wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return va.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Uw(t){wa=t(wa)}function $w(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($o(this),e,...n);return Kf.set(s,e.sort?e.sort():[e]),cn(s)}:Mw().includes(t)?function(...e){return t.apply($o(this),e),cn(Hf.get(this))}:function(...e){return cn(t.apply($o(this),e))}}function Bw(t){return typeof t=="function"?$w(t):(t instanceof IDBTransaction&&Fw(t),Ow(t,Pw())?new Proxy(t,wa):t)}function cn(t){if(t instanceof IDBRequest)return Lw(t);if(Uo.has(t))return Uo.get(t);const e=Bw(t);return e!==t&&(Uo.set(t,e),pc.set(e,t)),e}const $o=t=>pc.get(t);function Vw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=cn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(cn(o.result),c.oldVersion,c.newVersion,cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const qw=["get","getKey","getAll","getAllKeys","count"],jw=["put","add","delete","clear"],Bo=new Map;function El(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bo.get(e))return Bo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=jw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Bo.set(e,i),i}Uw(t=>({...t,get:(e,n,s)=>El(e,n)||t.get(e,n,s),has:(e,n)=>!!El(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _a="@firebase/app",bl="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new jf("@firebase/app"),zw="@firebase/app-compat",Gw="@firebase/analytics-compat",Ww="@firebase/analytics",Qw="@firebase/app-check-compat",Xw="@firebase/app-check",Yw="@firebase/auth",Jw="@firebase/auth-compat",Zw="@firebase/database",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",s_="@firebase/installations",r_="@firebase/installations-compat",i_="@firebase/messaging",o_="@firebase/messaging-compat",a_="@firebase/performance",c_="@firebase/performance-compat",u_="@firebase/remote-config",l_="@firebase/remote-config-compat",h_="@firebase/storage",f_="@firebase/storage-compat",d_="@firebase/firestore",p_="@firebase/firestore-compat",g_="firebase",m_="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="[DEFAULT]",y_={[_a]:"fire-core",[zw]:"fire-core-compat",[Ww]:"fire-analytics",[Gw]:"fire-analytics-compat",[Xw]:"fire-app-check",[Qw]:"fire-app-check-compat",[Yw]:"fire-auth",[Jw]:"fire-auth-compat",[Zw]:"fire-rtdb",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[s_]:"fire-iid",[r_]:"fire-iid-compat",[i_]:"fire-fcm",[o_]:"fire-fcm-compat",[a_]:"fire-perf",[c_]:"fire-perf-compat",[u_]:"fire-rc",[l_]:"fire-rc-compat",[h_]:"fire-gcs",[f_]:"fire-gcs-compat",[d_]:"fire-fst",[p_]:"fire-fst-compat","fire-js":"fire-js",[g_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Map,ba=new Map;function v_(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ar(t){const e=t.name;if(ba.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;ba.set(e,t);for(const n of Ei.values())v_(n,t);return!0}function zf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new qf("app","Firebase",w_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=m_;function Wf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ea,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw un.create("bad-app-name",{appName:String(r)});if(n||(n=_w()),!n)throw un.create("no-options");const i=Ei.get(r);if(i){if(ya(n,i.options)&&ya(s,i.config))return i;throw un.create("duplicate-app",{appName:r})}const o=new Rw(r);for(const c of ba.values())o.addComponent(c);const a=new __(n,s,o);return Ei.set(r,a),a}function Qf(t=Ea){const e=Ei.get(t);if(!e&&t===Ea)return Wf();if(!e)throw un.create("no-app",{appName:t});return e}function ln(t,e,n){var s;let r=(s=y_[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(a.join(" "));return}ar(new ds(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firebase-heartbeat-database",b_=1,cr="firebase-heartbeat-store";let Vo=null;function Xf(){return Vo||(Vo=Vw(E_,b_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cr)}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),Vo}async function T_(t){try{return(await Xf()).transaction(cr).objectStore(cr).get(Yf(t))}catch(e){if(e instanceof Vn)Fn.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function Tl(t,e){try{const s=(await Xf()).transaction(cr,"readwrite");return await s.objectStore(cr).put(e,Yf(t)),s.done}catch(n){if(n instanceof Vn)Fn.warn(n.message);else{const s=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(s.message)}}}function Yf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=1024,I_=30*24*60*60*1e3;class S_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new R_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=I_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cl(),{heartbeatsToSend:n,unsentEntries:s}=A_(this._heartbeatsCache.heartbeats),r=_i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Cl(){return new Date().toISOString().substring(0,10)}function A_(t,e=C_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Il(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Il(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class R_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dw()?pw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await T_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Il(t){return _i(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){ar(new ds("platform-logger",e=>new Hw(e),"PRIVATE")),ar(new ds("heartbeat",e=>new S_(e),"PRIVATE")),ln(_a,bl,t),ln(_a,bl,"esm2017"),ln("fire-js","")}x_("");var k_="firebase",D_="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(k_,D_,"app");var N_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,gc=gc||{},z=N_||self;function bi(){}function Ji(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Tr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function O_(t){return Object.prototype.hasOwnProperty.call(t,qo)&&t[qo]||(t[qo]=++P_)}var qo="closure_uid_"+(1e9*Math.random()>>>0),P_=0;function M_(t,e,n){return t.call.apply(t.bind,arguments)}function L_(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=M_:Qe=L_,Qe.apply(null,arguments)}function Qr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function yn(){this.s=this.s,this.o=this.o}var F_=0;yn.prototype.s=!1;yn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),F_!=0)&&O_(this)};yn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Sl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ji(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var U_=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",bi,e),z.removeEventListener("test",bi,e)}catch{}return t}();function Ti(t){return/^[\s\xa0]*$/.test(t)}var Al=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function jo(t,e){return t<e?-1:t>e?1:0}function Zi(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return Zi().indexOf(t)!=-1}function yc(t){return yc[" "](t),t}yc[" "]=bi;function $_(t){var e=q_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var B_=Ft("Opera"),ps=Ft("Trident")||Ft("MSIE"),Zf=Ft("Edge"),Ta=Zf||ps,ed=Ft("Gecko")&&!(Zi().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),V_=Zi().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function td(){var t=z.document;return t?t.documentMode:void 0}var Ci;e:{var Ho="",Ko=function(){var t=Zi();if(ed)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zf)return/Edge\/([\d\.]+)/.exec(t);if(ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(V_)return/WebKit\/(\S+)/.exec(t);if(B_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ko&&(Ho=Ko?Ko[1]:""),ps){var zo=td();if(zo!=null&&zo>parseFloat(Ho)){Ci=String(zo);break e}}Ci=Ho}var q_={};function j_(){return $_(function(){let t=0;const e=Al(String(Ci)).split("."),n=Al("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=jo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||jo(r[2].length==0,i[2].length==0)||jo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ca;if(z.document&&ps){var Rl=td();Ca=Rl||parseInt(Ci,10)||void 0}else Ca=void 0;var H_=Ca;function ur(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ed){e:{try{yc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:K_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ur.X.h.call(this)}}Ve(ur,Xe);var K_={2:"touch",3:"pen",4:"mouse"};ur.prototype.h=function(){ur.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cr="closure_listenable_"+(1e6*Math.random()|0),z_=0;function G_(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++z_,this.ba=this.ea=!1}function eo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function vc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function nd(t){const e={};for(const n in t)e[n]=t[n];return e}const xl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sd(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<xl.length;i++)n=xl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function to(t){this.src=t,this.g={},this.h=0}to.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Sa(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new G_(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Ia(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Jf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(eo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sa(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var wc="closure_lm_"+(1e6*Math.random()|0),Go={};function rd(t,e,n,s,r){if(s&&s.once)return od(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)rd(t,e[i],n,s,r);return null}return n=bc(n),t&&t[Cr]?t.N(e,n,Tr(s)?!!s.capture:!!s,r):id(t,e,n,!1,s,r)}function id(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Tr(r)?!!r.capture:!!r,a=Ec(t);if(a||(t[wc]=a=new to(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=W_(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)U_||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(cd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function W_(){function t(n){return e.call(t.src,t.listener,n)}const e=Q_;return t}function od(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)od(t,e[i],n,s,r);return null}return n=bc(n),t&&t[Cr]?t.O(e,n,Tr(s)?!!s.capture:!!s,r):id(t,e,n,!0,s,r)}function ad(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ad(t,e[i],n,s,r);else s=Tr(s)?!!s.capture:!!s,n=bc(n),t&&t[Cr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Sa(i,n,s,r),-1<n&&(eo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ec(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sa(e,n,s,r)),(n=-1<t?e[t]:null)&&_c(n))}function _c(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Cr])Ia(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(cd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ec(e))?(Ia(n,t),n.h==0&&(n.src=null,e[wc]=null)):eo(t)}}}function cd(t){return t in Go?Go[t]:Go[t]="on"+t}function Q_(t,e){if(t.ba)t=!0;else{e=new ur(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&_c(t),t=n.call(s,e)}return t}function Ec(t){return t=t[wc],t instanceof to?t:null}var Wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function bc(t){return typeof t=="function"?t:(t[Wo]||(t[Wo]=function(e){return t.handleEvent(e)}),t[Wo])}function Le(){yn.call(this),this.i=new to(this),this.P=this,this.I=null}Ve(Le,yn);Le.prototype[Cr]=!0;Le.prototype.removeEventListener=function(t,e,n,s){ad(this,t,e,n,s)};function Be(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var r=e;e=new Xe(s,t),sd(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Xr(o,s,!0,e)&&r}if(o=e.g=t,r=Xr(o,s,!0,e)&&r,r=Xr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Xr(o,s,!1,e)&&r}Le.prototype.M=function(){if(Le.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)eo(n[s]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Le.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ia(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Tc=z.JSON.stringify;function X_(){var t=hd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Y_{constructor(){this.h=this.g=null}add(e,n){const s=ud.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ud=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new J_,t=>t.reset());class J_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Z_(t){z.setTimeout(()=>{throw t},0)}function ld(t,e){Aa||eE(),Ra||(Aa(),Ra=!0),hd.add(t,e)}var Aa;function eE(){var t=z.Promise.resolve(void 0);Aa=function(){t.then(tE)}}var Ra=!1,hd=new Y_;function tE(){for(var t;t=X_();){try{t.h.call(t.g)}catch(n){Z_(n)}var e=ud;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ra=!1}function no(t,e){Le.call(this),this.h=t||1,this.g=e||z,this.j=Qe(this.lb,this),this.l=Date.now()}Ve(no,Le);U=no.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Be(this,"tick"),this.ca&&(Cc(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){no.X.M.call(this),Cc(this),delete this.g};function Ic(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function fd(t){t.g=Ic(()=>{t.g=null,t.i&&(t.i=!1,fd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class nE extends yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fd(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lr(t){yn.call(this),this.h=t,this.g={}}Ve(lr,yn);var kl=[];function dd(t,e,n,s){Array.isArray(n)||(n&&(kl[0]=n.toString()),n=kl);for(var r=0;r<n.length;r++){var i=rd(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function pd(t){vc(t.g,function(e,n){this.g.hasOwnProperty(n)&&_c(e)},t),t.g={}}lr.prototype.M=function(){lr.X.M.call(this),pd(this)};lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function so(){this.g=!0}so.prototype.Aa=function(){this.g=!1};function sE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function rE(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Zn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+oE(t,n)+(s?" "+s:"")})}function iE(t,e){t.info(function(){return"TIMEOUT: "+e})}so.prototype.info=function(){};function oE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Tc(n)}catch{return e}}var qn={},Dl=null;function ro(){return Dl=Dl||new Le}qn.Pa="serverreachability";function gd(t){Xe.call(this,qn.Pa,t)}Ve(gd,Xe);function hr(t){const e=ro();Be(e,new gd(e))}qn.STAT_EVENT="statevent";function md(t,e){Xe.call(this,qn.STAT_EVENT,t),this.stat=e}Ve(md,Xe);function nt(t){const e=ro();Be(e,new md(e,t))}qn.Qa="timingevent";function yd(t,e){Xe.call(this,qn.Qa,t),this.size=e}Ve(yd,Xe);function Ir(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var io={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},vd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sc(){}Sc.prototype.h=null;function Nl(t){return t.h||(t.h=t.i())}function wd(){}var Sr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ac(){Xe.call(this,"d")}Ve(Ac,Xe);function Rc(){Xe.call(this,"c")}Ve(Rc,Xe);var xa;function oo(){}Ve(oo,Sc);oo.prototype.g=function(){return new XMLHttpRequest};oo.prototype.i=function(){return{}};xa=new oo;function Ar(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new lr(this),this.O=aE,t=Ta?125:void 0,this.T=new no(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _d}function _d(){this.i=null,this.g="",this.h=!1}var aE=45e3,ka={},Ii={};U=Ar.prototype;U.setTimeout=function(t){this.O=t};function Da(t,e,n){t.K=1,t.v=co(Gt(e)),t.s=n,t.P=!0,Ed(t,null)}function Ed(t,e){t.F=Date.now(),Rr(t),t.A=Gt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),xd(n.i,"t",s),t.C=0,n=t.l.H,t.h=new _d,t.g=Xd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new nE(Qe(t.La,t,t.g),t.N)),dd(t.S,t.g,"readystatechange",t.ib),e=t.H?nd(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),hr(),sE(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Ht(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const l=Ht(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Ta||this.g&&(this.h.h||this.g.fa()||Ll(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?hr(3):hr(2)),ao(this);var n=this.g.aa();this.Y=n;t:if(bd(this)){var s=Ll(this.g);t="";var r=s.length,i=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),Ws(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,rE(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ti(a)){var u=a;break t}}u=null}if(n=u)Zn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Na(this,n);else{this.i=!1,this.o=3,nt(12),xn(this),Ws(this);break e}}this.P?(Td(this,l,o),Ta&&this.i&&l==3&&(dd(this.S,this.T,"tick",this.hb),this.T.start())):(Zn(this.j,this.m,o,null),Na(this,o)),l==4&&xn(this),this.i&&!this.I&&(l==4?zd(this.l,this):(this.i=!1,Rr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),xn(this),Ws(this)}}}catch{}finally{}};function bd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Td(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=cE(t,n),r==Ii){e==4&&(t.o=4,nt(14),s=!1),Zn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ka){t.o=4,nt(15),Zn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Zn(t.j,t.m,r,null),Na(t,r);bd(t)&&r!=Ii&&r!=ka&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mc(e),e.K=!0,nt(11))):(Zn(t.j,t.m,n,"[Invalid Chunked Response]"),xn(t),Ws(t))}U.hb=function(){if(this.g){var t=Ht(this.g),e=this.g.fa();this.C<e.length&&(ao(this),Td(this,t,e),this.i&&t!=4&&Rr(this))}};function cE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ii:(n=Number(e.substring(n,s)),isNaN(n)?ka:(s+=1,s+n>e.length?Ii:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,xn(this)};function Rr(t){t.V=Date.now()+t.O,Cd(t,t.O)}function Cd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ir(Qe(t.gb,t),e)}function ao(t){t.B&&(z.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(iE(this.j,this.A),this.K!=2&&(hr(),nt(17)),xn(this),this.o=2,Ws(this)):Cd(this,this.V-t)};function Ws(t){t.l.G==0||t.I||zd(t.l,t)}function xn(t){ao(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Cc(t.T),pd(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Na(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Oa(n.h,t))){if(!t.J&&Oa(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ri(n),ho(n);else break e;Pc(n),nt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ir(Qe(n.cb,n),6e3));if(1>=Nd(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else kn(n,11)}else if((t.J||n.g==t)&&Ri(n),!Ti(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(xc(i,i.h),i.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,we(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Qd(s,s.H?s.ka:null,s.V),o.J){Od(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ao(a),Rr(a)),s.g=o}else Hd(s);0<n.i.length&&fo(n)}else u[0]!="stop"&&u[0]!="close"||kn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kn(n,7):Oc(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}hr(4)}catch{}}function uE(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ji(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function lE(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ji(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Id(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ji(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=lE(t),s=uE(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Sd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Pn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pn){this.h=e!==void 0?e:t.h,Si(this,t.j),this.s=t.s,this.g=t.g,Ai(this,t.m),this.l=t.l,e=t.i;var n=new fr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ol(this,n),this.o=t.o}else t&&(n=String(t).match(Sd))?(this.h=!!e,Si(this,n[1]||"",!0),this.s=Fs(n[2]||""),this.g=Fs(n[3]||"",!0),Ai(this,n[4]),this.l=Fs(n[5]||"",!0),Ol(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.h=!!e,this.i=new fr(null,this.h))}Pn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Us(e,Pl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Us(e,Pl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Us(n,n.charAt(0)=="/"?pE:dE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Us(n,mE)),t.join("")};function Gt(t){return new Pn(t)}function Si(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ai(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ol(t,e,n){e instanceof fr?(t.i=e,yE(t.i,t.h)):(n||(e=Us(e,gE)),t.i=new fr(e,t.h))}function we(t,e,n){t.i.set(e,n)}function co(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Us(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pl=/[#\/\?@]/g,dE=/[#\?:]/g,pE=/[#\?]/g,gE=/[#\?@]/g,mE=/#/g;function fr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vn(t){t.g||(t.g=new Map,t.h=0,t.i&&hE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=fr.prototype;U.add=function(t,e){vn(this),this.i=null,t=Is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ad(t,e){vn(t),e=Is(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Rd(t,e){return vn(t),e=Is(t,e),t.g.has(e)}U.forEach=function(t,e){vn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){vn(this);let e=[];if(typeof t=="string")Rd(this,t)&&(e=e.concat(this.g.get(Is(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return vn(this),this.i=null,t=Is(this,t),Rd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function xd(t,e,n){Ad(t,e),0<n.length&&(t.i=null,t.g.set(Is(t,e),mc(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yE(t,e){e&&!t.j&&(vn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ad(this,s),xd(this,r,n))},t)),t.j=e}var vE=class{constructor(e,n){this.h=e,this.g=n}};function kd(t){this.l=t||wE,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wE=10;function Dd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Nd(t){return t.h?1:t.g?t.g.size:0}function Oa(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xc(t,e){t.g?t.g.add(e):t.h=e}function Od(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kd.prototype.cancel=function(){if(this.i=Pd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Pd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return mc(t.i)}function kc(){}kc.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};kc.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function _E(){this.g=new kc}function EE(t,e,n){const s=n||"";try{Id(t,function(r,i){let o=r;Tr(r)&&(o=Tc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function bE(t,e){const n=new so;if(z.Image){const s=new Image;s.onload=Qr(Yr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qr(Yr,n,s,"TestLoadImage: error",!1,e),s.onabort=Qr(Yr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qr(Yr,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Yr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function xr(t){this.l=t.ac||null,this.j=t.jb||!1}Ve(xr,Sc);xr.prototype.g=function(){return new uo(this.l,this.j)};xr.prototype.i=function(t){return function(){return t}}({});function uo(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(uo,Le);var Dc=0;U=uo.prototype;U.open=function(t,e){if(this.readyState!=Dc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=Dc};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dr(this)),this.g&&(this.readyState=3,dr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Md(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Md(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kr(this):dr(this),this.readyState==3&&Md(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,kr(this))};U.Ua=function(t){this.g&&(this.response=t,kr(this))};U.ga=function(){this.g&&kr(this)};function kr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function dr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var TE=z.JSON.parse;function be(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ld,this.K=this.L=!1}Ve(be,Le);var Ld="",CE=/^https?$/i,IE=["POST","PUT"];U=be.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xa.g(),this.C=this.u?Nl(this.u):Nl(xa),this.g.onreadystatechange=Qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ml(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=Jf(IE,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$d(this),0<this.B&&((this.K=SE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.qa,this)):this.A=Ic(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ml(this,i)}};function SE(t){return ps&&j_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof gc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function Ml(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fd(t),lo(t)}function Fd(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),lo(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lo(this,!0)),be.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?Ud(this):this.fb())};U.fb=function(){Ud(this)};function Ud(t){if(t.h&&typeof gc<"u"&&(!t.C[1]||Ht(t)!=4||t.aa()!=2)){if(t.v&&Ht(t)==4)Ic(t.Ha,0,t);else if(Be(t,"readystatechange"),Ht(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Sd)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!CE.test(r?r.toLowerCase():"")}n=s}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<Ht(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Fd(t)}}finally{lo(t)}}}}function lo(t,e){if(t.g){$d(t);const n=t.g,s=t.C[0]?bi:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=s}catch{}}}function $d(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Ht(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),TE(e)}};function Ll(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ld:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Bd(t){let e="";return vc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Nc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Bd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Ps(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vd(t){this.Ca=0,this.i=[],this.j=new so,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ps("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ps("baseRetryDelayMs",5e3,t),this.bb=Ps("retryDelaySeedMs",1e4,t),this.$a=Ps("forwardChannelMaxRetries",2,t),this.ta=Ps("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new kd(t&&t.concurrentRequestLimit),this.Fa=new _E,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=Vd.prototype;U.ma=8;U.G=1;function Oc(t){if(qd(t),t.G==3){var e=t.U++,n=Gt(t.F);we(n,"SID",t.I),we(n,"RID",e),we(n,"TYPE","terminate"),Dr(t,n),e=new Ar(t,t.j,e,void 0),e.K=2,e.v=co(Gt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xd(e.l,null),e.g.da(e.v)),e.F=Date.now(),Rr(e)}Wd(t)}function ho(t){t.g&&(Mc(t),t.g.cancel(),t.g=null)}function qd(t){ho(t),t.u&&(z.clearTimeout(t.u),t.u=null),Ri(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function fo(t){Dd(t.h)||t.m||(t.m=!0,ld(t.Ja,t),t.C=0)}function AE(t,e){return Nd(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ir(Qe(t.Ja,t,e),Gd(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ar(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=nd(i),sd(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jd(this,r,e),n=Gt(this.F),we(n,"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),Dr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Bd(i)))+"&"+e:this.o&&Nc(n,this.o,i)),xc(this.h,r),this.Ya&&we(n,"TYPE","init"),this.O?(we(n,"$req",e),we(n,"SID","null"),r.Z=!0,Da(r,n,null)):Da(r,n,e),this.G=2}}else this.G==3&&(t?Fl(this,t):this.i.length==0||Dd(this.h)||Fl(this))};function Fl(t,e){var n;e?n=e.m:n=t.U++;const s=Gt(t.F);we(s,"SID",t.I),we(s,"RID",n),we(s,"AID",t.T),Dr(t,s),t.o&&t.s&&Nc(s,t.o,t.s),n=new Ar(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=jd(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),xc(t.h,n),Da(n,s,e)}function Dr(t,e){t.ia&&vc(t.ia,function(n,s){we(e,s,n)}),t.l&&Id({},function(n,s){we(e,s,n)})}function jd(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Qe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{EE(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Hd(t){t.g||t.u||(t.Z=1,ld(t.Ia,t),t.A=0)}function Pc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ir(Qe(t.Ia,t),Gd(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Kd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ir(Qe(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nt(10),ho(this),Kd(this))};function Mc(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Kd(t){t.g=new Ar(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Gt(t.sa);we(e,"RID","rpc"),we(e,"SID",t.I),we(e,"CI",t.L?"0":"1"),we(e,"AID",t.T),we(e,"TYPE","xmlhttp"),Dr(t,e),t.o&&t.s&&Nc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=co(Gt(e)),n.s=null,n.P=!0,Ed(n,t)}U.cb=function(){this.v!=null&&(this.v=null,ho(this),Pc(this),nt(19))};function Ri(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function zd(t,e){var n=null;if(t.g==e){Ri(t),Mc(t),t.g=null;var s=2}else if(Oa(t.h,e))n=e.D,Od(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ro(),Be(s,new yd(s,n)),fo(t)}else Hd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&AE(t,e)||s==2&&Pc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:kn(t,5);break;case 4:kn(t,10);break;case 3:kn(t,6);break;default:kn(t,2)}}}function Gd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function kn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Qe(t.kb,t);n||(n=new Pn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Si(n,"https"),co(n)),bE(n.toString(),s)}else nt(2);t.G=0,t.l&&t.l.va(e),Wd(t),qd(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Wd(t){if(t.G=0,t.la=[],t.l){const e=Pd(t.h);(e.length!=0||t.i.length!=0)&&(Sl(t.la,e),Sl(t.la,t.i),t.h.i.length=0,mc(t.i),t.i.length=0),t.l.ua()}}function Qd(t,e,n){var s=n instanceof Pn?Gt(n):new Pn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ai(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Pn(null,void 0);s&&Si(i,s),e&&(i.g=e),r&&Ai(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&we(s,n,e),we(s,"VER",t.ma),Dr(t,s),s}function Xd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new be(new xr({jb:!0})):new be(t.ra),e.Ka(t.H),e}function Yd(){}U=Yd.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function xi(){if(ps&&!(10<=Number(H_)))throw Error("Environmental error: no available transport.")}xi.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Le.call(this),this.g=new Vd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ti(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ti(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ss(this)}Ve(pt,Le);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Qd(t,null,t.V),fo(t)};pt.prototype.close=function(){Oc(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tc(t),t=n);e.i.push(new vE(e.ab++,t)),e.G==3&&fo(e)};pt.prototype.M=function(){this.g.l=null,delete this.j,Oc(this.g),delete this.g,pt.X.M.call(this)};function Jd(t){Ac.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve(Jd,Ac);function Zd(){Rc.call(this),this.status=1}Ve(Zd,Rc);function Ss(t){this.g=t}Ve(Ss,Yd);Ss.prototype.xa=function(){Be(this.g,"a")};Ss.prototype.wa=function(t){Be(this.g,new Jd(t))};Ss.prototype.va=function(t){Be(this.g,new Zd)};Ss.prototype.ua=function(){Be(this.g,"b")};xi.prototype.createWebChannel=xi.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;io.NO_ERROR=0;io.TIMEOUT=8;io.HTTP_ERROR=6;vd.COMPLETE="complete";wd.EventType=Sr;Sr.OPEN="a";Sr.CLOSE="b";Sr.ERROR="c";Sr.MESSAGE="d";Le.prototype.listen=Le.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.Oa;be.prototype.getLastErrorCode=be.prototype.Ea;be.prototype.getStatus=be.prototype.aa;be.prototype.getResponseJson=be.prototype.Sa;be.prototype.getResponseText=be.prototype.fa;be.prototype.send=be.prototype.da;be.prototype.setWithCredentials=be.prototype.Ka;var RE=function(){return new xi},xE=function(){return ro()},Qo=io,kE=vd,DE=qn,Ul={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},NE=xr,Jr=wd,OE=be;const $l="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new jf("@firebase/firestore");function Bl(){return Un.logLevel}function B(t,...e){if(Un.logLevel<=ce.DEBUG){const n=e.map(Lc);Un.debug(`Firestore (${As}): ${t}`,...n)}}function Wt(t,...e){if(Un.logLevel<=ce.ERROR){const n=e.map(Lc);Un.error(`Firestore (${As}): ${t}`,...n)}}function Pa(t,...e){if(Un.logLevel<=ce.WARN){const n=e.map(Lc);Un.warn(`Firestore (${As}): ${t}`,...n)}}function Lc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function ge(t,e){t||K()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class ME{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LE{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ge(typeof s.accessToken=="string"),new ep(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new He(e)}}class FE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ge(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class UE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new FE(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $E{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BE{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.A=n.token,new $E(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=VE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new De(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new De(0,0))}static max(){return new Q(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return pr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends pr{construct(e,n,s){return new ve(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const qE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends pr{construct(e,n,s){return new Ge(e,n,s)}static isValidIdentifier(e){return qE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new L(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ve.fromString(e))}static fromName(e){return new q(ve.fromString(e).popFirst(5))}static empty(){return new q(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ve(e.slice()))}}function jE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new De(n+1,0):new De(n,s));return new pn(r,q.empty(),e)}function HE(t){return new pn(t.readTime,t.key,-1)}class pn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new pn(Q.min(),q.empty(),-1)}static max(){return new pn(Q.max(),q.empty(),-1)}}function KE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==zE)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(r=>r?I.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new I((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new I((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Or(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Fc.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class gr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function np(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){return t==null}function ki(t){return t===0&&1/t==-1/0}function QE(t){return typeof t=="number"&&Number.isInteger(t)&&!ki(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Je(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const XE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(t){if(ge(!!t),typeof t=="string"){let e=0;const n=XE.exec(t);if(ge(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ms(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rp(t){const e=t.mapValue.fields.__previous_value__;return sp(e)?rp(e):e}function mr(t){const e=gn(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $n(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sp(t)?4:YE(t)?9007199254740991:10:K()}function Bt(t,e){if(t===e)return!0;const n=$n(t);if(n!==$n(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mr(t).isEqual(mr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=gn(s.timestampValue),o=gn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ms(s.bytesValue).isEqual(ms(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Re(s.geoPointValue.latitude)===Re(r.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Re(s.integerValue)===Re(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Re(s.doubleValue),o=Re(r.doubleValue);return i===o?ki(i)===ki(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Vl(i)!==Vl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Bt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function yr(t,e){return(t.values||[]).find(n=>Bt(n,e))!==void 0}function ys(t,e){if(t===e)return 0;const n=$n(t),s=$n(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Re(r.integerValue||r.doubleValue),a=Re(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ql(t.timestampValue,e.timestampValue);case 4:return ql(mr(t),mr(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ms(r),a=ms(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ue(o[c],a[c]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Re(r.latitude),Re(i.latitude));return o!==0?o:ue(Re(r.longitude),Re(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ys(o[c],a[c]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Zr.mapValue&&i===Zr.mapValue)return 0;if(r===Zr.mapValue)return 1;if(i===Zr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ue(a[l],u[l]);if(h!==0)return h;const f=ys(o[a[l]],c[u[l]]);if(f!==0)return f}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function ql(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=gn(t),s=gn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function vs(t){return Ma(t)}function Ma(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=gn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ms(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ma(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ma(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function jl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function La(t){return!!t&&"integerValue"in t}function Uc(t){return!!t&&"arrayValue"in t}function Hl(t){return!!t&&"nullValue"in t}function Kl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ui(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Qs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.position=e,this.inclusive=n}}function zl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=ys(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{}class xe extends ip{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new e0(e,n,s):n==="array-contains"?new s0(e,s):n==="in"?new r0(e,s):n==="not-in"?new i0(e,s):n==="array-contains-any"?new o0(e,s):new xe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new t0(e,s):new n0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ys(n,this.value)):n!==null&&$n(this.value)===$n(n)&&this.matchesComparison(ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dt extends ip{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Dt(e,n)}matches(e){return op(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function op(t){return t.op==="and"}function JE(t){return ZE(t)&&op(t)}function ZE(t){for(const e of t.filters)if(e instanceof Dt)return!1;return!0}function ap(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+vs(t.value);{const e=t.filters.map(n=>ap(n)).join(",");return`${t.op}(${e})`}}function cp(t,e){return t instanceof xe?function(n,s){return s instanceof xe&&n.op===s.op&&n.field.isEqual(s.field)&&Bt(n.value,s.value)}(t,e):t instanceof Dt?function(n,s){return s instanceof Dt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&cp(i,s.filters[o]),!0):!1}(t,e):void K()}function up(t){return t instanceof xe?function(e){return`${e.field.canonicalString()} ${e.op} ${vs(e.value)}`}(t):t instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(up).join(" ,")+"}"}(t):"Filter"}class e0 extends xe{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class t0 extends xe{constructor(e,n){super(e,"in",n),this.keys=lp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class n0 extends xe{constructor(e,n){super(e,"not-in",n),this.keys=lp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class s0 extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uc(n)&&yr(n.arrayValue,this.value)}}class r0 extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yr(this.value.arrayValue,n)}}class i0 extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yr(this.value.arrayValue,n)}}class o0 extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>yr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function a0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ei(this.root,e,this.comparator,!0)}}class ei{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=r??Fe.EMPTY,this.right=i??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Fe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wl(this.data.getIterator())}getIteratorFrom(e){return new Wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ne(this.comparator);return n.data=e,n}}class Wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new wt([])}unionWith(e){let n=new Ne(Ge.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ui(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=Ge.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Qs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ui(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ui(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){jn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ot(Qs(this.value))}}function hp(t){const e=[];return jn(t.fields,(n,s)=>{const r=new Ge([n]);if(ui(s)){const i=hp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ke(e,0,Q.min(),Q.min(),Q.min(),ot.empty(),0)}static newFoundDocument(e,n,s,r){return new Ke(e,1,n,Q.min(),s,r,0)}static newNoDocument(e,n){return new Ke(e,2,n,Q.min(),Q.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,Q.min(),Q.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ql(t,e=null,n=[],s=[],r=null,i=null,o=null){return new c0(t,e,n,s,r,i,o)}function $c(t){const e=Y(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ap(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),po(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>vs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>vs(s)).join(",")),e.ft=n}return e.ft}function Bc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!a0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gl(t.startAt,e.startAt)&&Gl(t.endAt,e.endAt)}function Fa(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function u0(t,e,n,s,r,i,o,a){return new Pr(t,e,n,s,r,i,o,a)}function Vc(t){return new Pr(t)}function Xl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function qc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function dp(t){return t.collectionGroup!==null}function is(t){const e=Y(t);if(e.dt===null){e.dt=[];const n=qc(e),s=fp(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Xs(n)),e.dt.push(new Xs(Ge.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Xs(Ge.keyField(),i))}}}return e.dt}function Qt(t){const e=Y(t);if(!e._t)if(e.limitType==="F")e._t=Ql(e.path,e.collectionGroup,is(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of is(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Xs(i.field,o))}const s=e.endAt?new Di(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Di(e.startAt.position,e.startAt.inclusive):null;e._t=Ql(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Ua(t,e){e.getFirstInequalityField(),qc(t);const n=t.filters.concat([e]);return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ni(t,e,n){return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function go(t,e){return Bc(Qt(t),Qt(e))&&t.limitType===e.limitType}function pp(t){return`${$c(Qt(t))}|lt:${t.limitType}`}function $a(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>up(s)).join(", ")}]`),po(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>vs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>vs(s)).join(",")),`Target(${n})`}(Qt(t))}; limitType=${t.limitType})`}function jc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of is(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=zl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,is(n),s)||n.endAt&&!function(r,i,o){const a=zl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,is(n),s))}(t,e)}function l0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gp(t){return(e,n)=>{let s=!1;for(const r of is(t)){const i=h0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function h0(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ys(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ki(e)?"-0":e}}function yp(t){return{integerValue:""+t}}function f0(t,e){return QE(e)?yp(e):mp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this._=void 0}}function d0(t,e,n){return t instanceof Oi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof vr?wp(t,e):t instanceof wr?_p(t,e):function(s,r){const i=vp(s,r),o=Yl(i)+Yl(s.gt);return La(i)&&La(s.gt)?yp(o):mp(s.yt,o)}(t,e)}function p0(t,e,n){return t instanceof vr?wp(t,e):t instanceof wr?_p(t,e):n}function vp(t,e){return t instanceof Pi?La(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Oi extends mo{}class vr extends mo{constructor(e){super(),this.elements=e}}function wp(t,e){const n=Ep(e);for(const s of t.elements)n.some(r=>Bt(r,s))||n.push(s);return{arrayValue:{values:n}}}class wr extends mo{constructor(e){super(),this.elements=e}}function _p(t,e){let n=Ep(e);for(const s of t.elements)n=n.filter(r=>!Bt(r,s));return{arrayValue:{values:n}}}class Pi extends mo{constructor(e,n){super(),this.yt=e,this.gt=n}}function Yl(t){return Re(t.integerValue||t.doubleValue)}function Ep(t){return Uc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function g0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof vr&&s instanceof vr||n instanceof wr&&s instanceof wr?gs(n.elements,s.elements,Bt):n instanceof Pi&&s instanceof Pi?Bt(n.gt,s.gt):n instanceof Oi&&s instanceof Oi}(t.transform,e.transform)}class m0{constructor(e,n){this.version=e,this.transformResults=n}}class xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function li(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yo{}function bp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hc(t.key,xt.none()):new Mr(t.key,t.data,xt.none());{const n=t.data,s=ot.empty();let r=new Ne(Ge.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new wn(t.key,s,new wt(r.toArray()),xt.none())}}function y0(t,e,n){t instanceof Mr?function(s,r,i){const o=s.value.clone(),a=Zl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof wn?function(s,r,i){if(!li(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Zl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Tp(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,s){return t instanceof Mr?function(r,i,o,a){if(!li(r.precondition,i))return o;const c=r.value.clone(),u=eh(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof wn?function(r,i,o,a){if(!li(r.precondition,i))return o;const c=eh(r.fieldTransforms,a,i),u=i.data;return u.setAll(Tp(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return li(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function v0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=vp(s.transform,r||null);i!=null&&(n===null&&(n=ot.empty()),n.set(s.field,i))}return n||null}function Jl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&gs(n,s,(r,i)=>g0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mr extends yo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class wn extends yo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Zl(t,e,n){const s=new Map;ge(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,p0(o,a,n[r]))}return s}function eh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,d0(i,o,e))}return s}class Hc extends yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class w0 extends yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,se;function E0(t){switch(t){default:return K();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Cp(t){if(t===void 0)return Wt("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ae.OK:return _.OK;case Ae.CANCELLED:return _.CANCELLED;case Ae.UNKNOWN:return _.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return _.INTERNAL;case Ae.UNAVAILABLE:return _.UNAVAILABLE;case Ae.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ae.NOT_FOUND:return _.NOT_FOUND;case Ae.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ae.ABORTED:return _.ABORTED;case Ae.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ae.DATA_LOSS:return _.DATA_LOSS;default:return K()}}(se=Ae||(Ae={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return np(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=new Pe(q.comparator);function Xt(){return b0}const Ip=new Pe(q.comparator);function $s(...t){let e=Ip;for(const n of t)e=e.insert(n.key,n);return e}function Sp(t){let e=Ip;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Dn(){return Js()}function Ap(){return Js()}function Js(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const T0=new Pe(q.comparator),C0=new Ne(q.comparator);function ne(...t){let e=C0;for(const n of t)e=e.add(n);return e}const I0=new Ne(ue);function Rp(){return I0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Lr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new vo(Q.min(),r,Rp(),Xt(),ne())}}class Lr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Lr(s,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class xp{constructor(e,n){this.targetId=e,this.Et=n}}class kp{constructor(e,n,s=Je.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class th{constructor(){this.At=0,this.Rt=sh(),this.bt=Je.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ne(),n=ne(),s=ne();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new Lr(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=sh()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class S0{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Xt(),this.qt=nh(),this.Ut=new Ne(ue)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Fa(i))if(s===0){const o=new q(i.path);this.Qt(n,o,Ke.newNoDocument(o,Q.min()))}else ge(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Fa(a.target)){const c=new q(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ke.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ne();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new vo(e,n,this.Ut,this.Lt,s);return this.Lt=Xt(),this.qt=nh(),this.Ut=new Ne(ue),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new th,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ne(ue),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new th),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function nh(){return new Pe(q.comparator)}function sh(){return new Pe(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),R0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),x0=(()=>({and:"AND",or:"OR"}))();class k0{constructor(e,n){this.databaseId=e,this.wt=n}}function Mi(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dp(t,e){return t.wt?e.toBase64():e.toUint8Array()}function D0(t,e){return Mi(t,e.toTimestamp())}function $t(t){return ge(!!t),Q.fromTimestamp(function(e){const n=gn(e);return new De(n.seconds,n.nanos)}(t))}function Kc(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Np(t){const e=ve.fromString(t);return ge(Lp(e)),e}function Ba(t,e){return Kc(t.databaseId,e.path)}function Xo(t,e){const n=Np(e);if(n.get(1)!==t.databaseId.projectId)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Op(n))}function Va(t,e){return Kc(t.databaseId,e)}function N0(t){const e=Np(t);return e.length===4?ve.emptyPath():Op(e)}function qa(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Op(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rh(t,e,n){return{name:Ba(t,e),fields:n.value.mapValue.fields}}function O0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(ge(u===void 0||typeof u=="string"),Je.fromBase64String(u||"")):(ge(u===void 0||u instanceof Uint8Array),Je.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:Cp(c.code);return new L(u,c.message||"")}(o);n=new kp(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Xo(t,s.document.name),i=$t(s.document.updateTime),o=s.document.createTime?$t(s.document.createTime):Q.min(),a=new ot({mapValue:{fields:s.document.fields}}),c=Ke.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new hi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Xo(t,s.document),i=s.readTime?$t(s.readTime):Q.min(),o=Ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Xo(t,s.document),i=s.removedTargetIds||[];n=new hi([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new _0(r),o=s.targetId;n=new xp(o,i)}}return n}function P0(t,e){let n;if(e instanceof Mr)n={update:rh(t,e.key,e.value)};else if(e instanceof Hc)n={delete:Ba(t,e.key)};else if(e instanceof wn)n={update:rh(t,e.key,e.data),updateMask:j0(e.fieldMask)};else{if(!(e instanceof w0))return K();n={verify:Ba(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Oi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof wr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Pi)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:D0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function M0(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?$t(s.updateTime):$t(r);return i.isEqual(Q.min())&&(i=$t(r)),new m0(i,s.transformResults||[])}(n,e))):[]}function L0(t,e){return{documents:[Va(t,e.path)]}}function F0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Va(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Va(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Mp(Dt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Yn(l.field),direction:B0(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||po(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function U0(t){let e=N0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ge(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Pp(l);return h instanceof Dt&&JE(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Xs(Jn(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,po(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Di(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Di(f,h)}(n.endAt)),u0(e,r,o,i,a,"F",c,u)}function $0(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pp(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Jn(e.unaryFilter.field);return xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Jn(e.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jn(e.unaryFilter.field);return xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jn(e.unaryFilter.field);return xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return xe.create(Jn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(n=>Pp(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function B0(t){return A0[t]}function V0(t){return R0[t]}function q0(t){return x0[t]}function Yn(t){return{fieldPath:t.canonicalString()}}function Jn(t){return Ge.fromServerFormat(t.fieldPath)}function Mp(t){return t instanceof xe?function(e){if(e.op==="=="){if(Kl(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NAN"}};if(Hl(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Kl(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NOT_NAN"}};if(Hl(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(e.field),op:V0(e.op),value:e.value}}}(t):t instanceof Dt?function(e){const n=e.getFilters().map(s=>Mp(s));return n.length===1?n[0]:{compositeFilter:{op:q0(e.op),filters:n}}}(t):K()}function j0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&y0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ys(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ys(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ap();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=bp(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,s)=>Jl(n,s))&&gs(this.baseMutations,e.baseMutations,(n,s)=>Jl(n,s))}}class zc{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ge(e.mutations.length===s.length);let r=T0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new zc(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=Je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.ie=e}}function G0(t){const e=U0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ni(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.Je=new Q0}addToCollectionParentIndex(e,n){return this.Je.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(pn.min())}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class Q0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ne(ve.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ne(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ws(0)}static vn(){return new ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ys(s.mutation,r,wt.empty(),De.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=Dn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=$s();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Dn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Xt();const o=Js(),a=Js();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof wn)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Ys(l.mutation,u,l.mutation.getFieldMask(),De.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Y0(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Js();let r=new Pe((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||wt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ap();l.forEach(f=>{if(!i.has(f)){const g=bp(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):I.resolve(Dn());let a=-1,c=i;return o.next(u=>I.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?I.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:Sp(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let r=$s();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=$s();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const c=function(u,l){return new Pr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Ke.newInvalidDocument(u)))});let o=$s();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Ys(u.mutation,c,wt.empty(),De.now()),jc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:$t(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:G0(s.bundledQuery),readTime:$t(s.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.overlays=new Pe(q.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Dn();return I.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const r=Dn(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Pe((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Dn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Dn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return I.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new K0(n,s));let i=this.es.get(n);i===void 0&&(i=ne(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.ns=new Ne(Me.ss),this.rs=new Ne(Me.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Me(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Me(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new q(new ve([])),s=new Me(n,e),r=new Me(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new ve([])),s=new Me(n,e),r=new Me(n,e+1);let i=ne();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Me(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Me{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||ue(e._s,n._s)}static os(e,n){return ue(e._s,n._s)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ne(Me.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new H0(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Me(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Me(n,0),r=new Me(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ne(ue);return n.forEach(r=>{const i=new Me(r,0),o=new Me(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),I.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new Me(new q(i),0);let a=new Ne(ue);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ge(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return I.forEach(n.mutations,r=>{const i=new Me(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Me(n,0),r=this.gs.firstAfterOrEqual(s);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.Es=e,this.docs=new Pe(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let s=Xt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ke.newInvalidDocument(r))}),I.resolve(s)}getAllFromCollection(e,n,s){let r=Xt();const i=new q(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||KE(HE(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return I.resolve(r)}getAllFromCollectionGroup(e,n,s,r){K()}As(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new sb(this)}getSize(e){return I.resolve(this.size)}}class sb extends X0{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.persistence=e,this.Rs=new Rs(n=>$c(n),Bc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Gc,this.targetCount=0,this.vs=ws.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(i).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Fc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new rb(this),this.indexManager=new W0,this.remoteDocumentCache=function(s){return new nb(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new z0(n),this.Ns=new Z0(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new tb(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const r=new ob(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return I.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class ob extends GE{constructor(e){super(),this.currentSequenceNumber=e}}class Wc{constructor(e){this.persistence=e,this.Fs=new Gc,this.$s=null}static Bs(e){return new Wc(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,s=>{const r=q.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qc(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Xl(n))return I.resolve(null);let s=Qt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ni(n,null,"F"),s=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ne(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Ni(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Xl(n)||r.isEqual(Q.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Bl()<=ce.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),$a(n)),this.Bi(e,o,n,jE(r,-1)))})}Fi(e,n){let s=new Ne(gp(e));return n.forEach((r,i)=>{jc(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Bl()<=ce.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",$a(n)),this.Ni.getDocumentsMatchingQuery(e,n,pn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Pe(ue),this.Ui=new Rs(i=>$c(i),Bc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new J0(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function ub(t,e,n,s){return new cb(t,e,n,s)}async function Fp(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function lb(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=I.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(m=>{const v=c.docVersions.get(g);ge(v!==null),m.version.compareTo(v)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Up(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function hb(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Je.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(m,v,S){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=Xt(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(fb(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(Q.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function fb(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Xt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function db(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function pb(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,I.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Mn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function ja(t,e,n){const s=Y(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Or(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function ih(t,e,n){const s=Y(t);let r=Q.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Y(a),h=l.Ui.get(u);return h!==void 0?I.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Qt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?i:ne())).next(a=>(gb(s,l0(e),a),{documents:a,Hi:i})))}function gb(t,e,n){let s=t.Ki.get(e)||Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class oh{constructor(){this.activeTargetIds=Rp()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mb{constructor(){this.Lr=new oh,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new oh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(B("RestConnection","Received: ",c),c),c=>{throw Pa("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+As,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=vb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new OE;a.setWithCredentials(!0),a.listenOnce(kE.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Qo.NO_ERROR:const u=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Qo.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new L(_.DEADLINE_EXCEEDED,"Request time out"));break;case Qo.HTTP_ERROR:const l=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(v)>=0?v:_.UNKNOWN}(f.status);o(new L(g,f.message))}else o(new L(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(_.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=RE(),o=xE(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new NE({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");B("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new wb({Hr:m=>{h?B("Connection","Not sending because WebChannel is closed:",m):(l||(B("Connection","Opening WebChannel transport."),u.open(),l=!0),B("Connection","WebChannel sending:",m),u.send(m))},Jr:()=>u.close()}),g=(m,v,S)=>{m.listen(v,R=>{try{S(R)}catch(A){setTimeout(()=>{throw A},0)}})};return g(u,Jr.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),g(u,Jr.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),f.io())}),g(u,Jr.EventType.ERROR,m=>{h||(h=!0,Pa("Connection","WebChannel transport errored:",m),f.io(new L(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,Jr.EventType.MESSAGE,m=>{var v;if(!h){const S=m.data[0];ge(!!S);const R=S,A=R.error||((v=R[0])===null||v===void 0?void 0:v.error);if(A){B("Connection","WebChannel received error:",A);const T=A.status;let D=function(oe){const ke=Ae[oe];if(ke!==void 0)return Cp(ke)}(T),Z=A.message;D===void 0&&(D=_.INTERNAL,Z="Unknown error status: "+T+" with message "+A.message),h=!0,f.io(new L(D,Z)),u.close()}else B("Connection","WebChannel received:",S),f.ro(S)}}),g(o,DE.STAT_EVENT,m=>{m.stat===Ul.PROXY?B("Connection","Detected buffering proxy"):m.stat===Ul.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Yo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){return new k0(t,!0)}class $p{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new $p(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new L(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Eb extends Bp{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=O0(this.yt,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?$t(i.readTime):Q.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=qa(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Fa(a)?{documents:L0(r,a)}:{query:F0(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Dp(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Mi(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=$0(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=qa(this.yt),n.removeTarget=e,this.Bo(n)}}class bb extends Bp{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=M0(e.writeResults,e.commitTime),s=$t(e.commitTime);return this.listener.Zo(s,n)}return ge(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=qa(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>P0(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(_.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(_.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Cb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Wt(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Hn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c._u.add(4),await Fr(c),c.gu.set("Unknown"),c._u.delete(4),await _o(c)}(this))})}),this.gu=new Cb(s,r)}}async function _o(t){if(Hn(t))for(const e of t.wu)await e(!0)}async function Fr(t){for(const e of t.wu)await e(!1)}function Vp(t,e){const n=Y(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Jc(n)?Yc(n):xs(n).ko()&&Xc(n,e))}function qp(t,e){const n=Y(t),s=xs(n);n.du.delete(e),s.ko()&&jp(n,e),n.du.size===0&&(s.ko()?s.Fo():Hn(n)&&n.gu.set("Unknown"))}function Xc(t,e){t.yu.Ot(e.targetId),xs(t).zo(e)}function jp(t,e){t.yu.Ot(e),xs(t).Ho(e)}function Yc(t){t.yu=new S0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),xs(t).start(),t.gu.uu()}function Jc(t){return Hn(t)&&!xs(t).No()&&t.du.size>0}function Hn(t){return Y(t)._u.size===0}function Hp(t){t.yu=void 0}async function Sb(t){t.du.forEach((e,n)=>{Xc(t,e)})}async function Ab(t,e){Hp(t),Jc(t)?(t.gu.hu(e),Yc(t)):t.gu.set("Unknown")}async function Rb(t,e,n){if(t.gu.set("Online"),e instanceof kp&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Li(t,s)}else if(e instanceof hi?t.yu.Kt(e):e instanceof xp?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Q.min()))try{const s=await Up(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Je.EMPTY_BYTE_STRING,c.snapshotVersion)),jp(r,a);const u=new Mn(c.target,a,1,c.sequenceNumber);Xc(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await Li(t,s)}}async function Li(t,e,n){if(!Or(e))throw e;t._u.add(1),await Fr(t),t.gu.set("Offline"),n||(n=()=>Up(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await _o(t)})}function Kp(t,e){return e().catch(n=>Li(t,n,e))}async function Eo(t){const e=Y(t),n=mn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;xb(e);)try{const r=await db(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,kb(e,r)}catch(r){await Li(e,r)}zp(e)&&Gp(e)}function xb(t){return Hn(t)&&t.fu.length<10}function kb(t,e){t.fu.push(e);const n=mn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function zp(t){return Hn(t)&&!mn(t).No()&&t.fu.length>0}function Gp(t){mn(t).start()}async function Db(t){mn(t).eu()}async function Nb(t){const e=mn(t);for(const n of t.fu)e.Xo(n.mutations)}async function Ob(t,e,n){const s=t.fu.shift(),r=zc.from(s,e,n);await Kp(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Eo(t)}async function Pb(t,e){e&&mn(t).Yo&&await async function(n,s){if(r=s.code,E0(r)&&r!==_.ABORTED){const i=n.fu.shift();mn(n).Mo(),await Kp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Eo(n)}var r}(t,e),zp(t)&&Gp(t)}async function ch(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=Hn(n);n._u.add(3),await Fr(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await _o(n)}async function Mb(t,e){const n=Y(t);e?(n._u.delete(2),await _o(n)):e||(n._u.add(2),await Fr(n),n.gu.set("Unknown"))}function xs(t){return t.pu||(t.pu=function(e,n,s){const r=Y(e);return r.su(),new Eb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Sb.bind(null,t),Zr:Ab.bind(null,t),Wo:Rb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Jc(t)?Yc(t):t.gu.set("Unknown")):(await t.pu.stop(),Hp(t))})),t.pu}function mn(t){return t.Iu||(t.Iu=function(e,n,s){const r=Y(e);return r.su(),new bb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Db.bind(null,t),Zr:Pb.bind(null,t),tu:Nb.bind(null,t),Zo:Ob.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Eo(t)):(await t.Iu.stop(),t.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Zc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eu(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),Or(t))return new L(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=$s(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new os;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.Tu=new Pe(q.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class _s{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _s(e,n,os.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.Au=void 0,this.listeners=[]}}class Fb{constructor(){this.queries=new Rs(e=>pp(e),go),this.onlineState="Unknown",this.Ru=new Set}}async function Wp(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Lb),r)try{i.Au=await n.onListen(s)}catch(o){const a=eu(o,`Initialization of query '${$a(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&tu(n)}async function Qp(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Ub(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&tu(n)}function $b(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function tu(t){t.Ru.forEach(e=>{e.next()})}class Xp{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new _s(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.key=e}}class Jp{constructor(e){this.key=e}}class Bb{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ne(),this.mutatedKeys=ne(),this.Gu=gp(e),this.Qu=new os(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new uh,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=jc(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;f&&g?f.data.isEqual(g.data)?m!==v&&(s.track({type:3,doc:g}),S=!0):this.Hu(f,g)||(s.track({type:2,doc:g}),S=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),S=!0):f&&!g&&(s.track({type:1,doc:f}),S=!0,(c||u)&&(a=!0)),S&&(g?(o=o.add(g),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new _s(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new uh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ne(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Jp(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Yp(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ne();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return _s.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Vb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class qb{constructor(e){this.key=e,this.nc=!1}}class jb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Rs(a=>pp(a),go),this.rc=new Map,this.oc=new Set,this.uc=new Pe(q.comparator),this.cc=new Map,this.ac=new Gc,this.hc={},this.lc=new Map,this.fc=ws.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Hb(t,e){const n=eT(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await pb(n.localStore,Qt(e));n.isPrimaryClient&&Vp(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Kb(n,e,s,a==="current",o.resumeToken)}return r}async function Kb(t,e,n,s,r){t._c=(h,f,g)=>async function(m,v,S,R){let A=v.view.Wu(S);A.$i&&(A=await ih(m.localStore,v.query,!1).then(({documents:Z})=>v.view.Wu(Z,A)));const T=R&&R.targetChanges.get(v.targetId),D=v.view.applyChanges(A,m.isPrimaryClient,T);return hh(m,v.targetId,D.Xu),D.snapshot}(t,h,f,g);const i=await ih(t.localStore,e,!0),o=new Bb(e,i.Hi),a=o.Wu(i.documents),c=Lr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);hh(t,n,u.Xu);const l=new Vb(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function zb(t,e){const n=Y(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!go(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ja(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),qp(n.remoteStore,s.targetId),Ha(n,s.targetId)}).catch(Nr)):(Ha(n,s.targetId),await ja(n.localStore,s.targetId,!0))}async function Gb(t,e,n){const s=tT(t);try{const r=await function(i,o){const a=Y(i),c=De.now(),u=o.reduce((f,g)=>f.add(g.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Xt(),m=ne();return a.Gi.getEntries(f,u).next(v=>{g=v,g.forEach((S,R)=>{R.isValidDocument()||(m=m.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(v=>{l=v;const S=[];for(const R of o){const A=v0(R,l.get(R.key).overlayedDocument);A!=null&&S.push(new wn(R.key,A,hp(A.value.mapValue),xt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(f,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:Sp(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Pe(ue)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ur(s,r.changes),await Eo(s.remoteStore)}catch(r){const i=eu(r,"Failed to persist write");n.reject(i)}}async function Zp(t,e){const n=Y(t);try{const s=await hb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(ge(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?ge(o.nc):r.removedDocuments.size>0&&(ge(o.nc),o.nc=!1))}),await Ur(n,s,e)}catch(s){await Nr(s)}}function lh(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&tu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Wb(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Pe(q.comparator);o=o.insert(i,Ke.newNoDocument(i,Q.min()));const a=ne().add(i),c=new vo(Q.min(),new Map,new Ne(ue),o,a);await Zp(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),nu(s)}else await ja(s.localStore,e,!1).then(()=>Ha(s,e,n)).catch(Nr)}async function Qb(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await lb(n.localStore,e);tg(n,s,null),eg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ur(n,r)}catch(r){await Nr(r)}}async function Xb(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ge(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);tg(s,e,n),eg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ur(s,r)}catch(r){await Nr(r)}}function eg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function tg(t,e,n){const s=Y(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Ha(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||ng(t,s)})}function ng(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(qp(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),nu(t))}function hh(t,e,n){for(const s of n)s instanceof Yp?(t.ac.addReference(s.key,e),Yb(t,s)):s instanceof Jp?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||ng(t,s.key)):K()}function Yb(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oc.add(s),nu(t))}function nu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(ve.fromString(e)),s=t.fc.next();t.cc.set(s,new qb(n)),t.uc=t.uc.insert(n,s),Vp(t.remoteStore,new Mn(Qt(Vc(n.path)),s,2,Fc.at))}}async function Ur(t,e,n){const s=Y(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Qc.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>I.forEach(c,h=>I.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>I.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Or(l))throw l;B("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.qi.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,m)}}}(s.localStore,i))}async function Jb(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await Fp(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new L(_.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ur(n,s.ji)}}function Zb(t,e){const n=Y(t),s=n.cc.get(e);if(s&&s.nc)return ne().add(s.key);{let r=ne();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function eT(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wb.bind(null,e),e.sc.Wo=Ub.bind(null,e.eventManager),e.sc.wc=$b.bind(null,e.eventManager),e}function tT(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xb.bind(null,e),e}class nT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=wo(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return ub(this.persistence,new ab,e.initialUser,this.yt)}yc(e){return new ib(Wc.Bs,this.yt)}gc(e){return new mb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>lh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jb.bind(null,this.syncEngine),await Mb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Fb}createDatastore(e){const n=wo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new _b(r));var r;return function(i,o,a,c){return new Tb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>lh(this.syncEngine,a,0),o=ah.C()?new ah:new yb,new Ib(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new jb(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Fr(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e,n){if(!n)throw new L(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rT(t,e,n,s){if(e===!0&&s===!0)throw new L(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fh(t){if(!q.isDocumentKey(t))throw new L(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dh(t){if(q.isDocumentKey(t))throw new L(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bo(t);throw new L(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function iT(t,e){if(e<=0)throw new L(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new Map;class gh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new PE;switch(n.type){case"gapi":const s=n.client;return new UE(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ph.get(e);n&&(B("ComponentProvider","Removing Datastore"),ph.delete(e),n.terminate())}(this),Promise.resolve()}}function oT(t,e,n,s={}){var r;const i=(t=Yt(t,To))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Pa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=He.MOCK_USER;else{o=Vf(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new L(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new He(c)}t._authCredentials=new ME(new ep(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class Kn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Kn(this.firestore,e,this._query)}}class hn extends Kn{constructor(e,n,s){super(e,n,Vc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new q(e))}withConverter(e){return new hn(this.firestore,e,this._path)}}function su(t,e,...n){if(t=ct(t),sg("collection","path",e),t instanceof To){const s=ve.fromString(e,...n);return dh(s),new hn(t,null,s)}{if(!(t instanceof at||t instanceof hn))throw new L(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return dh(s),new hn(t.firestore,null,s)}}function _r(t,e,...n){if(t=ct(t),arguments.length===1&&(e=tp.R()),sg("doc","path",e),t instanceof To){const s=ve.fromString(e,...n);return fh(s),new at(t,null,new q(s))}{if(!(t instanceof at||t instanceof hn))throw new L(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return fh(s),new at(t.firestore,t instanceof hn?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=He.UNAUTHENTICATED,this.clientId=tp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=eu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cT(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Fp(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function uT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lT(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ch(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ch(e.remoteStore,i)),t.onlineComponents=e}async function lT(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await cT(t,new nT)),t.offlineComponents}async function ig(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await uT(t,new sT)),t.onlineComponents}function hT(t){return ig(t).then(e=>e.syncEngine)}async function og(t){const e=await ig(t),n=e.eventManager;return n.onListen=Hb.bind(null,e.syncEngine),n.onUnlisten=zb.bind(null,e.syncEngine),n}function fT(t,e,n={}){const s=new Kt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new rg({next:h=>{i.enqueueAndForget(()=>Qp(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new L(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new L(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Xp(Vc(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Wp(r,l)}(await og(t),t.asyncQueue,e,n,s)),s.promise}function dT(t,e,n={}){const s=new Kt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new rg({next:h=>{i.enqueueAndForget(()=>Qp(r,l)),h.fromCache&&a.source==="server"?c.reject(new L(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Xp(o,u,{includeMetadataChanges:!0,Nu:!0});return Wp(r,l)}(await og(t),t.asyncQueue,e,n,s)),s.promise}class pT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new $p(this,"async_queue_retry"),this.Wc=()=>{const n=Yo();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Yo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Yo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Kt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Or(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Wt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Zc.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&K()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class ks extends To{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new pT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ag(this),this._firestoreClient.terminate()}}function gT(t,e){const n=typeof t=="object"?t:Qf(),s=typeof t=="string"?t:e||"(default)",r=zf(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Bf("firestore");i&&oT(r,...i)}return r}function ru(t){return t._firestoreClient||ag(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ag(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new WE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new aT(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(Je.fromBase64String(e))}catch(n){throw new L(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=/^__.*__$/;class yT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new wn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mr(e,this.data,n,this.fieldTransforms)}}class cg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new wn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ug(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class au{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new au(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Fi(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(ug(this.sa)&&mT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class vT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||wo(e)}da(e,n,s,r=!1){return new au({sa:e,methodName:n,fa:s,path:Ge.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function cu(t){const e=t._freezeSettings(),n=wo(t._databaseId);return new vT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wT(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);uu("Data must be an object, but it was:",o,s);const a=lg(s,o);let c,u;if(i.merge)c=new wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Ka(e,h,n);if(!o.contains(f))throw new L(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);fg(l,f)||l.push(f)}c=new wt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new yT(new ot(a),c,u)}class Io extends iu{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Io}}function _T(t,e,n,s){const r=t.da(1,e,n);uu("Data must be an object, but it was:",r,s);const i=[],o=ot.empty();jn(s,(c,u)=>{const l=lu(e,c,n);u=ct(u);const h=r.ca(l);if(u instanceof Io)i.push(l);else{const f=$r(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new wt(i);return new cg(o,a,r.fieldTransforms)}function ET(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Ka(e,s,n)],c=[r];if(i.length%2!=0)throw new L(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Ka(e,i[f])),c.push(i[f+1]);const u=[],l=ot.empty();for(let f=a.length-1;f>=0;--f)if(!fg(u,a[f])){const g=a[f];let m=c[f];m=ct(m);const v=o.ca(g);if(m instanceof Io)u.push(g);else{const S=$r(m,v);S!=null&&(u.push(g),l.set(g,S))}}const h=new wt(u);return new cg(l,h,o.fieldTransforms)}function bT(t,e,n,s=!1){return $r(n,t.da(s?4:3,e))}function $r(t,e){if(hg(t=ct(t)))return uu("Unsupported field value:",e,t),lg(t,e);if(t instanceof iu)return function(n,s){if(!ug(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=$r(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return f0(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=De.fromDate(n);return{timestampValue:Mi(s.yt,r)}}if(n instanceof De){const r=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mi(s.yt,r)}}if(n instanceof ou)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Es)return{bytesValue:Dp(s.yt,n._byteString)};if(n instanceof at){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Kc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${bo(n)}`)}(t,e)}function lg(t,e){const n={};return np(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(t,(s,r)=>{const i=$r(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function hg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof ou||t instanceof Es||t instanceof at||t instanceof iu)}function uu(t,e,n){if(!hg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=bo(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Ka(t,e,n){if((e=ct(e))instanceof Co)return e._internalPath;if(typeof e=="string")return lu(t,e);throw Fi("Field path arguments must be of type string or ",t,!1,void 0,n)}const TT=new RegExp("[~\\*/\\[\\]]");function lu(t,e,n){if(e.search(TT)>=0)throw Fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Co(...e.split("."))._internalPath}catch{throw Fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new L(_.INVALID_ARGUMENT,a+t+c)}function fg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CT extends dg{data(){return super.data()}}function hu(t,e){return typeof e=="string"?lu(t,e):e instanceof Co?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fu{}class pg extends fu{}function ST(t,e,...n){let s=[];e instanceof fu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof du).length,o=r.filter(a=>a instanceof So).length;if(i>1||i>0&&o>0)throw new L(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class So extends pg{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new So(e,n,s)}_apply(e){const n=this._parse(e);return gg(e._query,n),new Kn(e.firestore,e.converter,Ua(e._query,n))}_parse(e){const n=cu(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){yh(l,u);const f=[];for(const g of l)f.push(mh(a,r,g));h={arrayValue:{values:f}}}else h=mh(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||yh(l,u),h=bT(o,i,l,u==="in"||u==="not-in");return xe.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function AT(t,e,n){const s=e,r=hu("where",t);return So._create(r,s,n)}class du extends fu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new du(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)gg(i,a),i=Ua(i,a)}(e._query,n),new Kn(e.firestore,e.converter,Ua(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pu extends pg{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new pu(e,n,s)}_apply(e){return new Kn(e.firestore,e.converter,Ni(e._query,this._limit,this._limitType))}}function RT(t){return iT("limit",t),pu._create("limit",t,"F")}function mh(t,e,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new L(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dp(e)&&n.indexOf("/")!==-1)throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ve.fromString(n));if(!q.isDocumentKey(s))throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return jl(t,new q(s))}if(n instanceof at)return jl(t,n._key);throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bo(n)}.`)}function yh(t,e){if(!Array.isArray(t)||t.length===0)throw new L(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new L(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function gg(t,e){if(e.isInequality()){const s=qc(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new L(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=fp(t);i!==null&&xT(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xT(t,e,n){if(!n.isEqual(e))throw new L(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class kT{convertValue(e,n="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const s={};return jn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ou(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=rp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(mr(e));default:return null}}convertTimestamp(e){const n=gn(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ve.fromString(e);ge(Lp(s));const r=new gr(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mg extends dg{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(hu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fi extends mg{data(e={}){return super.data(e)}}class NT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Bs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fi(this._firestore,this._userDataWriter,s.key,s,new Bs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:OT(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function OT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){t=Yt(t,at);const e=Yt(t.firestore,ks);return fT(ru(e),t._key).then(n=>FT(e,t,n))}class vg extends kT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function gu(t){t=Yt(t,Kn);const e=Yt(t.firestore,ks),n=ru(e),s=new vg(e);return IT(t._query),dT(n,t._query).then(r=>new NT(e,s,t,r))}function PT(t,e,n,...s){t=Yt(t,at);const r=Yt(t.firestore,ks),i=cu(r);let o;return o=typeof(e=ct(e))=="string"||e instanceof Co?ET(i,"updateDoc",t._key,e,n,s):_T(i,"updateDoc",t._key,e),mu(r,[o.toMutation(t._key,xt.exists(!0))])}function MT(t){return mu(Yt(t.firestore,ks),[new Hc(t._key,xt.none())])}function LT(t,e){const n=Yt(t.firestore,ks),s=_r(t),r=DT(t.converter,e);return mu(n,[wT(cu(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,xt.exists(!1))]).then(()=>s)}function mu(t,e){return function(n,s){const r=new Kt;return n.asyncQueue.enqueueAndForget(async()=>Gb(await hT(n),s,r)),r.promise}(ru(t),e)}function FT(t,e,n){const s=n.docs.get(e._key),r=new vg(t);return new mg(t,r,e._key,s,new Bs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){As=n})(Gf),ar(new ds("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ks(new LE(n.getProvider("auth-internal")),new BE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ln($l,"3.8.0",t),ln($l,"3.8.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="firebasestorage.googleapis.com",_g="storageBucket",UT=2*60*1e3,$T=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Vn{constructor(e,n,s=0){super(Jo(e),`Firebase Storage: ${n} (${Jo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Jo(t){return"storage/"+t}function yu(){const t="An unknown error occurred, please check the error payload for server response.";return new Te("unknown",t)}function BT(t){return new Te("object-not-found","Object '"+t+"' does not exist.")}function VT(t){return new Te("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qT(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te("unauthenticated",t)}function jT(){return new Te("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function HT(t){return new Te("unauthorized","User does not have permission to access '"+t+"'.")}function KT(){return new Te("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function zT(){return new Te("canceled","User canceled the upload/download.")}function GT(t){return new Te("invalid-url","Invalid URL '"+t+"'.")}function WT(t){return new Te("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function QT(){return new Te("no-default-bucket","No default bucket found. Did you set the '"+_g+"' property when initializing the app?")}function XT(){return new Te("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function YT(){return new Te("no-download-url","The given file does not have any download URLs.")}function JT(t){return new Te("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function za(t){return new Te("invalid-argument",t)}function Eg(){return new Te("app-deleted","The Firebase app was deleted.")}function ZT(t){return new Te("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zs(t,e){return new Te("invalid-format","String does not match format '"+t+"': "+e)}function Ms(t){throw new Te("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ht.makeFromUrl(e,n)}catch{return new ht(e,"")}if(s.path==="")return s;throw WT(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},v=n===wg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",R=new RegExp(`^https?://${v}/${r}/${S}`,"i"),T=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:u},{regex:R,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<T.length;D++){const Z=T[D],oe=Z.regex.exec(e);if(oe){const ke=oe[Z.indices.bucket];let X=oe[Z.indices.path];X||(X=""),s=new ht(ke,X),Z.postModify(s);break}}if(s==null)throw GT(e);return s}}class eC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...S){u||(u=!0,e.apply(null,S))}function h(S){r=setTimeout(()=>{r=null,t(g,c())},S)}function f(){i&&clearTimeout(i)}function g(S,...R){if(u){f();return}if(S){f(),l.call(null,S,...R);return}if(c()||o){f(),l.call(null,S,...R);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,h(T)}let m=!1;function v(S){m||(m=!0,f(),!u&&(r!==null?(S||(a=2),clearTimeout(r),h(0)):S||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function nC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){return t!==void 0}function rC(t){return typeof t=="object"&&!Array.isArray(t)}function vu(t){return typeof t=="string"||t instanceof String}function vh(t){return wu()&&t instanceof Blob}function wu(){return typeof Blob<"u"&&!fw()}function wh(t,e,n,s){if(s<e)throw za(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw za(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function bg(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ln;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ln||(Ln={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,s,r,i,o,a,c,u,l,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ti(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ln.NO_ERROR,c=i.getStatus();if((!a||iC(c,this.additionalRetryCodes_))&&this.retry){const l=i.getErrorCode()===Ln.ABORT;s(!1,new ti(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ti(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());sC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=yu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Eg():zT();o(c)}else{const c=KT();o(c)}};this.canceled_?n(!1,new ti(!1,null,!0)):this.backoffId_=tC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ti{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function aC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hC(t,e,n,s,r,i,o=!0){const a=bg(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return uC(u,e),aC(u,n),cC(u,i),lC(u,s),new oC(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function dC(...t){const e=fC();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(wu())return new Blob(t);throw new Te("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function pC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){if(typeof atob>"u")throw JT("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zo{constructor(e,n){this.data=e,this.contentType=n||null}}function mC(t,e){switch(t){case Ut.RAW:return new Zo(Tg(e));case Ut.BASE64:case Ut.BASE64URL:return new Zo(Cg(t,e));case Ut.DATA_URL:return new Zo(vC(e),wC(e))}throw yu()}function Tg(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function yC(t){let e;try{e=decodeURIComponent(t)}catch{throw Zs(Ut.DATA_URL,"Malformed data URL.")}return Tg(e)}function Cg(t,e){switch(t){case Ut.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Zs(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Zs(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gC(e)}catch(r){throw r.message.includes("polyfill")?r:Zs(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ig{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Zs(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=_C(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function vC(t){const e=new Ig(t);return e.base64?Cg(Ut.BASE64,e.rest):yC(e.rest)}function wC(t){return new Ig(t).contentType}function _C(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){let s=0,r="";vh(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(vh(this.data_)){const s=this.data_,r=pC(s,e,n);return r===null?null:new sn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new sn(s,!0)}}static getBlob(...e){if(wu()){const n=e.map(s=>s instanceof sn?s.data_:s);return new sn(dC.apply(null,n))}else{const n=e.map(o=>vu(o)?mC(Ut.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new sn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t){let e;try{e=JSON.parse(t)}catch{return null}return rC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bC(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Ag(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){return e}class Ze{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||TC}}let ni=null;function CC(t){return!vu(t)||t.length<2?t:Ag(t)}function Rg(){if(ni)return ni;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(i,o){return CC(o)}const n=new Ze("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Ze("size");return r.xform=s,t.push(r),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),ni=t,ni}function IC(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new ht(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function SC(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return IC(s,t),s}function xg(t,e,n){const s=Sg(e);return s===null?null:SC(t,s,n)}function AC(t,e,n,s){const r=Sg(e);if(r===null||!vu(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),g=Ao(f,n,s),m=bg({alt:"media",token:u});return g+m})[0]}function RC(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class _u{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){if(!t)throw yu()}function xC(t,e){function n(s,r){const i=xg(t,r,e);return kg(i!==null),i}return n}function kC(t,e){function n(s,r){const i=xg(t,r,e);return kg(i!==null),AC(i,r,t.host,t._protocol)}return n}function Dg(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=jT():r=qT():n.getStatus()===402?r=VT(t.bucket):n.getStatus()===403?r=HT(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Ng(t){const e=Dg(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=BT(t.path)),i.serverResponse=r.serverResponse,i}return n}function DC(t,e,n){const s=e.fullServerUrl(),r=Ao(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new _u(r,i,kC(t,n),o);return a.errorHandler=Ng(e),a}function NC(t,e){const n=e.fullServerUrl(),s=Ao(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const a=new _u(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=Ng(e),a}function OC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function PC(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=OC(null,e)),s}function MC(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let D=0;D<2;D++)T=T+Math.random().toString().slice(2);return T}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=PC(e,s,r),l=RC(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",g=sn.getBlob(h,s,f);if(g===null)throw XT();const m={name:u.fullPath},v=Ao(i,t.host,t._protocol),S="POST",R=t.maxUploadRetryTime,A=new _u(v,S,xC(t,n),R);return A.urlParams=m,A.headers=o,A.body=g.uploadData(),A.errorHandler=Dg(e),A}class LC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ln.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ln.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ln.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Ms("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ms("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ms("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ms("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ms("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FC extends LC{initXhr(){this.xhr_.responseType="text"}}function Eu(){return new FC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n){this._service=e,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bn(e,n)}get root(){const e=new ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ag(this._location.path)}get storage(){return this._service}get parent(){const e=EC(this._location.path);if(e===null)return null;const n=new ht(this._location.bucket,e);return new Bn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ZT(e)}}function UC(t,e,n){t._throwIfRoot("uploadBytes");const s=MC(t.storage,t._location,Rg(),new sn(e,!0),n);return t.storage.makeRequestWithTokens(s,Eu).then(r=>({metadata:r,ref:t}))}function $C(t){t._throwIfRoot("getDownloadURL");const e=DC(t.storage,t._location,Rg());return t.storage.makeRequestWithTokens(e,Eu).then(n=>{if(n===null)throw YT();return n})}function BC(t){t._throwIfRoot("deleteObject");const e=NC(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Eu)}function VC(t,e){const n=bC(t._location.path,e),s=new ht(t._location.bucket,n);return new Bn(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){return/^[A-Za-z]+:\/\//.test(t)}function jC(t,e){return new Bn(t,e)}function Og(t,e){if(t instanceof bu){const n=t;if(n._bucket==null)throw QT();const s=new Bn(n,n._bucket);return e!=null?Og(s,e):s}else return e!==void 0?VC(t,e):t}function HC(t,e){if(e&&qC(e)){if(t instanceof bu)return jC(t,e);throw za("To use ref(service, url), the first argument must be a Storage instance.")}else return Og(t,e)}function _h(t,e){const n=e==null?void 0:e[_g];return n==null?null:ht.makeFromBucketSpec(n,t)}function KC(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Vf(r,t.app.options.projectId))}class bu{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=wg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=UT,this._maxUploadRetryTime=$T,this._requests=new Set,r!=null?this._bucket=ht.makeFromBucketSpec(r,this._host):this._bucket=_h(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,e):this._bucket=_h(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bn(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new eC(Eg());{const o=hC(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Eh="@firebase/storage",bh="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="storage";function zC(t,e,n){return t=ct(t),UC(t,e,n)}function GC(t){return t=ct(t),$C(t)}function WC(t){return t=ct(t),BC(t)}function Th(t,e){return t=ct(t),HC(t,e)}function QC(t=Qf(),e){t=ct(t);const s=zf(t,Pg).getImmediate({identifier:e}),r=Bf("storage");return r&&XC(s,...r),s}function XC(t,e,n,s={}){KC(t,e,n,s)}function YC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new bu(n,s,r,e,Gf)}function JC(){ar(new ds(Pg,YC,"PUBLIC").setMultipleInstances(!0)),ln(Eh,bh,""),ln(Eh,bh,"esm2017")}JC();const ZC={apiKey:"AIzaSyD2OD7f32hGUnbizkaCQdXUXkCol-Ycl30",authDomain:"app-odonto-a4ac4.firebaseapp.com",projectId:"app-odonto-a4ac4",storageBucket:"app-odonto-a4ac4.appspot.com",messagingSenderId:"922824486299",appId:"1:922824486299:web:f195882ea173f7787c453e"},Mg=Wf(ZC),as=gT(Mg),Ch=QC(Mg);const eI={class:"container"},tI=$("h1",{class:"title has-text-centered is-1 mt-4"},"Odonto App",-1),nI={class:"box mb-6"},sI={class:"title has-text-centered"},rI={class:"is-size-3 mb-5 has-text-justified"},iI={class:"image-container"},oI=["src"],aI={class:"opcoes-container buttons are-medium mt-6 is-justify-content-center"},cI=["onClick"],uI={__name:"QuestionarioView",setup(t){const e=su(as,"perguntas"),n=ss("");br(()=>{s()});const s=async()=>{const i=ST(e,AT("is_inicio","==",!0),RT(1));(await gu(i)).forEach(async a=>{n.value=a.data()})},r=async i=>{const o=_r(as,"perguntas",i),a=await yg(o);n.value=a.data()};return(i,o)=>(tt(),lt("div",eI,[tI,$("div",nI,[$("h2",sI,rn(n.value.titulo),1),$("p",rI,rn(n.value.texto),1),$("div",iI,[$("img",{class:"image has-image-centered",src:n.value.url_imagem,alt:""},null,8,oI)]),$("div",aI,[$("button",{onClick:o[0]||(o[0]=a=>s()),class:"button"},"Início "),(tt(!0),lt(it,null,yi(n.value.opcoes,(a,c)=>(tt(),lt("button",{key:c,onClick:u=>r(a.proxima_pergunta),class:"button"},rn(a.opcao_texto),9,cI))),128))])])]))}};const lI=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},hI=t=>(Mm("data-v-d0ded84a"),t=t(),Lm(),t),fI={class:"container"},dI=hI(()=>$("h1",{class:"title has-text-centered is-1 mt-4"},"DASHBOARD",-1)),pI={class:"columns is-multiline is-centered"},gI={class:"card-header"},mI={class:"card-header-title"},yI={class:"card-content"},vI={class:"content"},wI={class:"image-container"},_I=["src"],EI={class:"card-footer"},bI={__name:"DashboardView",setup(t){const e=ss([]),n=su(as,"perguntas");br(()=>{s()});const s=async()=>{(await gu(n)).forEach(o=>{e.value.push(o)})},r=async i=>{await MT(_r(n,i)),e.value=e.value.filter(o=>o.id!==i)};return(i,o)=>(tt(),lt("div",fI,[dI,$e(ft(Gs),{to:"/nova-pergunta",class:"button is-large mt-6 mb-6 is-fullwidth"},{default:Vs(()=>[Hs("Adicionar nova pergunta")]),_:1}),$("div",pI,[(tt(!0),lt(it,null,yi(e.value,a=>(tt(),lt("div",{key:a.id,class:"card column is-one-fifth"},[$("header",gI,[$("p",mI,rn(a.data().nome),1)]),$("div",yI,[$("div",vI,[$("h1",null,rn(a.data().titulo),1),$("p",null,rn(a.data().texto),1),$("div",wI,[$("img",{class:"image has-image-centered",src:a.data().url_imagem,alt:""},null,8,_I)])])]),$("footer",EI,[$e(ft(Gs),{to:{name:"editarPergunta",params:{idPergunta:a.id}},class:"card-footer-item"},{default:Vs(()=>[Hs("Editar")]),_:2},1032,["to"]),$e(ft(Gs),{to:"#",onClick:c=>r(a.id),class:"card-footer-item delete-link"},{default:Vs(()=>[Hs("Apagar")]),_:2},1032,["onClick"])])]))),128))])]))}},TI=lI(bI,[["__scopeId","data-v-d0ded84a"]]);const CI={class:"container"},II=$("h1",{class:"title has-text-centered is-1 mt-4"},"Odonto App",-1),SI=$("h2",{class:"title"},"NOVA PERGUNTA",-1),AI={class:"field"},RI=$("label",{class:"label"},"Nome da pergunta",-1),xI={class:"control"},kI={class:"field"},DI=$("label",{class:"label"},"Título",-1),NI={class:"control"},OI={class:"field"},PI=$("label",{class:"label"},"Conteúdo da pergunta",-1),MI={class:"control"},LI={class:"file has-name"},FI={class:"file-label"},UI=$("span",{class:"file-cta"},[$("span",{class:"file-icon"},[$("i",{class:"fas fa-upload"})]),$("span",{class:"file-label"}," Escolha uma imagem... ")],-1),$I={class:"file-name"},BI={class:"image-container"},VI=["src"],qI={class:"control is-expanded"},jI=["onUpdate:modelValue"],HI={class:"select"},KI=["onChange"],zI=$("option",{selected:""},"Seleciona a próxima pergunta",-1),GI=["value","selected"],WI={class:"control ml-3"},QI=["onClick"],XI={class:"control mt-5"},YI={class:"field is-grouped is-grouped-right mt-6"},JI={key:0,class:"control"},ZI={key:1,class:"control"},eS={class:"control"},Ih={__name:"PerguntaView",setup(t){const e=ow(),n=aw(),s=ss([]),r=ss({}),i=ss({nome:"",texto:"",titulo:"",url_imagem:"",nome_imagem_firestore:"",opcoes:[{opcao_texto:"",proxima_pergunta:""}]}),o=su(as,"perguntas");let a=null;br(()=>{n.params.idPergunta&&(a=n.params.idPergunta,f(a)),c()});const c=async()=>{(await gu(o)).forEach(T=>{s.value.push(T)})},u=(A,T)=>{i.value.opcoes[T].proxima_pergunta=A.target.value},l=A=>{i.value.opcoes.splice(A,1)},h=()=>{i.value.opcoes.push({opcao_texto:"",proxima_pergunta:""})},f=async A=>{const T=_r(as,"perguntas",A),D=await yg(T);i.value=D.data(),r.value.url_imagem=D.data().url_imagem},g=async()=>{Object.keys(r.value).length>0&&await v(),await LT(o,i.value),e.push("/dashboard")},m=async()=>{"type"in r.value&&(await S(),await v());const A=_r(as,"perguntas",a);await PT(A,i.value),e.push("/dashboard")},v=async()=>{const A=r.value.type.split("/")[1],T=Date.now()+A,D=Th(Ch,T);await zC(D,r.value).then(async()=>{i.value.url_imagem=await GC(D),i.value.nome_imagem_firestore=T})},S=async()=>{const A=Th(Ch,i.value.nome_imagem_firestore);await WC(A)},R=A=>{const T=A.target.files[0];r.value=T,r.value.url_imagem=URL.createObjectURL(T)};return(A,T)=>(tt(),lt("div",CI,[II,SI,$("div",AI,[RI,$("div",xI,[Gr($("input",{class:"input",type:"text",placeholder:"Insira o nome da pergunta","onUpdate:modelValue":T[0]||(T[0]=D=>i.value.nome=D)},null,512),[[Wr,i.value.nome]])])]),$("div",kI,[DI,$("div",NI,[Gr($("input",{class:"input",type:"text",placeholder:"Insira o título da pergunta","onUpdate:modelValue":T[1]||(T[1]=D=>i.value.titulo=D)},null,512),[[Wr,i.value.titulo]])])]),$("div",OI,[PI,$("div",MI,[Gr($("textarea",{class:"textarea",placeholder:"Digite aqui o conteúdo da pergunta","onUpdate:modelValue":T[2]||(T[2]=D=>i.value.texto=D)},null,512),[[Wr,i.value.texto]])])]),$("div",LI,[$("label",FI,[$("input",{class:"file-input",type:"file",name:"resume",onChange:T[3]||(T[3]=D=>R(D))},null,32),UI,$("span",$I,rn(r.value.nome_imagem?r.value.nome_imagem:"..."),1)])]),$("div",BI,[$("img",{class:"image",src:r.value.url_imagem,alt:""},null,8,VI)]),(tt(!0),lt(it,null,yi(i.value.opcoes,(D,Z)=>(tt(),lt("div",{key:Z,class:"field is-grouped mt-5"},[$("div",qI,[Gr($("input",{class:"input",type:"text",placeholder:"Texto da opção","onUpdate:modelValue":oe=>D.opcao_texto=oe},null,8,jI),[[Wr,D.opcao_texto]])]),$("div",HI,[$("select",{onChange:oe=>u(oe,Z)},[zI,(tt(!0),lt(it,null,yi(s.value,oe=>(tt(),lt("option",{key:oe.id,value:oe.id,selected:D.proxima_pergunta===oe.id},rn(oe.data().titulo),9,GI))),128))],40,KI)]),$("div",WI,[$("button",{class:"button is-link",onClick:oe=>l(Z)},"Remover opcao",8,QI)])]))),128)),$("div",XI,[$("button",{class:"button is-link",onClick:T[4]||(T[4]=D=>h())},"Adicionar opcao")]),$("div",YI,[ft(n).params.idPergunta?Hu("",!0):(tt(),lt("div",JI,[$("button",{onClick:T[5]||(T[5]=D=>g()),class:"button"},"Cadastrar")])),ft(n).params.idPergunta?(tt(),lt("div",ZI,[$("button",{onClick:T[6]||(T[6]=D=>m()),class:"button"},"Salvar Edicao")])):Hu("",!0),$("div",eS,[$e(ft(Gs),{to:"/dashboard",class:"button is-danger is-light"},{default:Vs(()=>[Hs("Cancelar")]),_:1})])])]))}},tS=rw({history:bv("/"),routes:[{path:"",name:"questionario",component:uI},{path:"/dashboard",name:"dashboard",component:TI},{path:"/nova-pergunta",name:"novaPergunta",component:Ih},{path:"/editar-pergunta/:idPergunta",name:"editarPergunta",component:Ih}]}),Lg=sv(cw);Lg.use(tS);Lg.mount("#app");
