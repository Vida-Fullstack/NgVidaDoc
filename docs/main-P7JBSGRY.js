import{a as ne,b as ie,c as oe,d as re,e as ae,f as se,g as ce,h as le,i as de,j as pe,l as me,m as he}from"./chunk-SSMEH7AO.js";import{C as $,E as Q,Ia as c,N as U,O as q,Q as z,Qa as _,T as g,Ta as M,V as X,Y as a,_a as D,ab as C,bb as S,ca as x,cb as T,da as y,db as L,ea as E,eb as o,fb as r,g as Z,gb as l,hb as A,ib as v,j as J,jb as u,la as k,pa as I,pb as O,qb as B,r as b,s as W,sb as F,ta as Y,tb as H,ua as ee,v as K,xb as te}from"./chunk-SB4QTE4K.js";var ge=new X("HighlightJs-Config");var ue=[{path:"404",title:"P\xE1gina n\xE3o encontrada",loadComponent:()=>import("./chunk-LMGTL4CX.js")},{path:":menu",loadComponent:()=>import("./chunk-PCZ66JOT.js")},{path:":menu/:subMenu",loadComponent:()=>import("./chunk-PCZ66JOT.js")},{path:"**",pathMatch:"full",redirectTo:"404"}];var fe={providers:[te({eventCoalescing:!0}),{provide:ge,useValue:{lang:"html"}},me(),ie(re(),oe([])),pe(ue)]};var N;try{N=typeof Intl<"u"&&Intl.v8BreakIterator}catch{N=!1}var _e=(()=>{class e{_platformId=a(Y);isBrowser=this._platformId?ne(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||N)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function V(e){return Array.isArray(e)?e:[e]}var Me=new Set,h,ve=(()=>{class e{_platform=a(_e);_nonce=a(ee,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):xe}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&be(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function be(e,n){if(!Me.has(e))try{h||(h=document.createElement("style"),n&&h.setAttribute("nonce",n),h.setAttribute("type","text/css"),document.head.appendChild(h)),h.sheet&&(h.sheet.insertRule(`@media ${e} {body{ }}`,0),Me.add(e))}catch(t){console.error(t)}}function xe(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var R=(()=>{class e{_mediaMatcher=a(ve);_zone=a(k);_queries=new Map;_destroySubject=new J;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Ce(V(t)).some(s=>this._registerQuery(s).mql.matches)}observe(t){let s=Ce(V(t)).map(p=>this._registerQuery(p).observable),d=W(s);return d=K(d.pipe(Q(1)),d.pipe(U(1),$(0))),d.pipe(b(p=>{let m={matches:!1,breakpoints:{}};return p.forEach(({matches:f,query:we})=>{m.matches=m.matches||f,m.breakpoints[we]=f}),m}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),d={observable:new Z(p=>{let m=f=>this._zone.run(()=>p.next(f));return i.addListener(m),()=>{i.removeListener(m)}}).pipe(q(i),b(({matches:p})=>({query:t,matches:p})),z(this._destroySubject)),mql:i};return this._queries.set(t,d),d}static \u0275fac=function(i){return new(i||e)};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ce(e){return e.map(n=>n.split(",")).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var G={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Oe=e=>[e],Pe=()=>({exact:!0});function Ee(e,n){if(e&1){let t=A();o(0,"li")(1,"a",4),v("click",function(){x(t);let s=u(4);return y(s.toggleMenu())}),O(2),r()()}if(e&2){let t=n.$implicit;c(),D("routerLink",H(4,Oe,t.router))("routerLinkActive","active")("routerLinkActiveOptions",F(6,Pe)),c(),B(t.title)}}function ke(e,n){if(e&1&&(o(0,"ul"),T(1,Ee,3,7,"li",null,S),r()),e&2){let t=u().$implicit;c(),L(t.subMenu)}}function Ie(e,n){if(e&1){let t=A();o(0,"li")(1,"a",4),v("click",function(){x(t);let s=u(2);return y(s.toggleMenu())}),O(2),r(),M(3,ke,3,0,"ul"),r()}if(e&2){let t=n.$implicit;c(),D("routerLink",H(5,Oe,t.router))("routerLinkActive","active")("routerLinkActiveOptions",F(7,Pe)),c(),B(t.title),c(),C(t.subMenu?3:-1)}}function De(e,n){e&1&&(o(0,"li"),O(1,"Nenhuma p\xE1gina cadastrada!"),r())}function Se(e,n){if(e&1&&(o(0,"header")(1,"div")(2,"nav")(3,"a")(4,"figure"),l(5,"img",3),r()(),o(6,"section")(7,"ul"),T(8,Ie,4,8,"li",null,S,!1,De,2,0,"li"),r()()()()()),e&2){let t=u();c(8),L(t.getPages())}}function Te(e,n){e&1&&(E(),o(0,"svg",1)(1,"mask",5),l(2,"rect",6),r(),o(3,"g",7),l(4,"path",8),r()())}function Le(e,n){e&1&&(E(),o(0,"svg",2)(1,"mask",9),l(2,"rect",10),r(),o(3,"g",11),l(4,"path",12),r()())}var P=class e{#e=a(he);#t=a(R);getPages=this.#e.getPages;getSelectedPageContent=this.#e.getSelectedPageContent;isToggleMenu=I(!0);isMobile=I(!1);ngOnInit(){this.#t.observe("(max-width: 845px)").subscribe(n=>{n.breakpoints[G.Handset]||n.breakpoints[G.Tablet]||n.matches?(this.isMobile.set(!0),this.isToggleMenu.set(!1)):this.isMobile.set(!1)})}toggleMenu(){this.isMobile()&&this.isToggleMenu.set(!this.isToggleMenu())}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["app-menu"]],decls:4,vars:2,consts:[["type","button",1,"toggle-menu",3,"click"],["width","25","height","25","viewBox","0 0 25 25","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["src","assets/images/logo.png","alt","Documenta\xE7\xF5es"],[3,"click","routerLink","routerLinkActive","routerLinkActiveOptions"],["id","mask0_1482_7","maskUnits","userSpaceOnUse","x","0","y","0","width","25","height","25",2,"mask-type","alpha"],["x","0.244141","y","0.633789","width","24","height","24","fill","#D9D9D9"],["mask","url(#mask0_1482_7)"],["d","M3.24414 18.6338V16.6338H21.2441V18.6338H3.24414ZM3.24414 13.6338V11.6338H21.2441V13.6338H3.24414ZM3.24414 8.63379V6.63379H21.2441V8.63379H3.24414Z","fill","#1C1B1F"],["id","mask0_1482_13","maskUnits","userSpaceOnUse","x","0","y","0","width","24","height","24",2,"mask-type","alpha"],["width","24","height","24","fill","#D9D9D9"],["mask","url(#mask0_1482_13)"],["d","M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z","fill","#1C1B1F"]],template:function(t,i){t&1&&(M(0,Se,11,1,"header"),o(1,"button",0),v("click",function(){return i.toggleMenu()}),M(2,Te,5,0,":svg:svg",1)(3,Le,5,0,":svg:svg",2),r()),t&2&&(C(i.isToggleMenu()?0:-1),c(2),C(i.isToggleMenu()?3:2))},dependencies:[le,de],styles:["[_nghost-%COMP%]{display:block;z-index:999}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{position:relative;height:100vh;height:100dvh;width:18.75rem}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;overflow:hidden}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{position:relative;height:100vh;height:100dvh;display:flex;flex-direction:column;position:fixed;width:18.75rem;border-right:var(--gray) .0625rem solid;overflow:hidden;background:var(--white);padding:1.75rem 1.3125rem}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:fit-content}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0;overflow:hidden;margin-left:.4375rem}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%;overflow-y:auto;background:none;border:none;cursor:initial;padding:0;margin:0;margin-top:1.3125rem}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:.4375rem}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:var(--black);text-decoration:none;font-weight:700;padding:.4375rem .875rem;width:100%;transition:.5s;display:flex;align-items:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:var(--gray-010);border-radius:.4375rem}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:.875rem}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:lighter}[_nghost-%COMP%]   .toggle-menu[_ngcontent-%COMP%]{display:none;position:fixed;bottom:1.9375rem;right:1.9375rem;background:var(--white);width:3.125rem;height:3.125rem;border-radius:6.25rem}@media (max-width: 845px){[_nghost-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], [_nghost-%COMP%]   nav[_ngcontent-%COMP%], [_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{width:100%!important;position:fixed}[_nghost-%COMP%]   .toggle-menu[_ngcontent-%COMP%]{display:block}}"],changeDetection:0})};var w=class e{#e=a(ce);constructor(){let n=localStorage.getItem("@redirect");console.log(n),n&&(this.#e.navigate([...n?.replace(/^\/+|\/+$/g,"")?.split("/")||""]),localStorage.removeItem("@redirect"))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"d-flex"],[1,"container","container-wraper"]],template:function(t,i){t&1&&(o(0,"div",0),l(1,"app-menu"),o(2,"main",1),l(3,"router-outlet"),r()())},dependencies:[se,P],encapsulation:2,changeDetection:0})};ae(w,fe).catch(e=>console.error(e));
