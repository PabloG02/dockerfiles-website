import{$ as M,Ba as le,Ta as R,U as ue,W as S,Wb as he,X as ae,Xb as fe,Z as B,aa as _,ac as De,bc as Z,da as ce,fa as L,gc as W,vb as m,wb as h,xa as de}from"./chunk-LKE5NY45.js";var Ee=null;function K(){return Ee}function en(e){Ee??=e}var ge=class{};var ie=new B(""),ye=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>_(Ie),providedIn:"platform"});let e=t;return e})();var Ie=(()=>{let t=class t extends ye{constructor(){super(),this._doc=_(ie),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return K().getBaseHref(this._doc)}onPopState(n){let i=K().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=K().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,s){this._history.pushState(n,i,s)}replaceState(n,i,s){this._history.replaceState(n,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function we(e,t){if(e.length==0)return t;if(t.length==0)return e;let r=0;return e.endsWith("/")&&r++,t.startsWith("/")&&r++,r==2?e+t.substring(1):r==1?e+t:e+"/"+t}function pe(e){let t=e.match(/#|\?|$/),r=t&&t.index||e.length,n=r-(e[r-1]==="/"?1:0);return e.slice(0,n)+e.slice(r)}function I(e){return e&&e[0]!=="?"?"?"+e:e}var re=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>_(Le),providedIn:"root"});let e=t;return e})(),Me=new B(""),Le=(()=>{let t=class t extends re{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??_(ie).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return we(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+I(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${i}${s}`:i}pushState(n,i,s,o){let c=this.prepareExternalUrl(s+I(o));this._platformLocation.pushState(n,i,c)}replaceState(n,i,s,o){let c=this.prepareExternalUrl(s+I(o));this._platformLocation.replaceState(n,i,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(M(ye),M(Me,8))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Be=(()=>{let t=class t{constructor(n){this._subject=new de,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Te(pe(me(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+I(i))}normalize(n){return t.stripTrailingSlash(Oe(this._basePath,me(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",s=null){this._locationStrategy.pushState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+I(i)),s)}replaceState(n,i="",s=null){this._locationStrategy.replaceState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+I(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(s=>s(n,i))}subscribe(n,i,s){return this._subject.subscribe({next:n,error:i,complete:s})}};t.normalizeQueryParams=I,t.joinWithSlash=we,t.stripTrailingSlash=pe,t.\u0275fac=function(i){return new(i||t)(M(re))},t.\u0275prov=S({token:t,factory:()=>Re(),providedIn:"root"});let e=t;return e})();function Re(){return new Be(M(re))}function Oe(e,t){if(!e||!t.startsWith(e))return t;let r=t.substring(e.length);return r===""||["/",";","?","#"].includes(r[0])?r:t}function me(e){return e.replace(/\/index.html$/,"")}function Te(e){if(new RegExp("^(https?:)?//").test(e)){let[,r]=e.split(/\/\/[^\/]+/);return r}return e}var D=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(D||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),p=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(p||{}),b={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Pe(e){return m(e)[h.LocaleId]}function ke(e,t,r){let n=m(e),i=[n[h.DayPeriodsFormat],n[h.DayPeriodsStandalone]],s=C(i,t);return C(s,r)}function Ne(e,t,r){let n=m(e),i=[n[h.DaysFormat],n[h.DaysStandalone]],s=C(i,t);return C(s,r)}function $e(e,t,r){let n=m(e),i=[n[h.MonthsFormat],n[h.MonthsStandalone]],s=C(i,t);return C(s,r)}function xe(e,t){let n=m(e)[h.Eras];return C(n,t)}function k(e,t){let r=m(e);return C(r[h.DateFormat],t)}function N(e,t){let r=m(e);return C(r[h.TimeFormat],t)}function $(e,t){let n=m(e)[h.DateTimeFormat];return C(n,t)}function H(e,t){let r=m(e),n=r[h.NumberSymbols][t];if(typeof n>"u"){if(t===b.CurrencyDecimal)return r[h.NumberSymbols][b.Decimal];if(t===b.CurrencyGroup)return r[h.NumberSymbols][b.Group]}return n}function Ae(e){if(!e[h.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[h.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Ue(e){let t=m(e);return Ae(t),(t[h.ExtraData][2]||[]).map(n=>typeof n=="string"?X(n):[X(n[0]),X(n[1])])}function ze(e,t,r){let n=m(e);Ae(n);let i=[n[h.ExtraData][0],n[h.ExtraData][1]],s=C(i,t)||[];return C(s,r)||[]}function C(e,t){for(let r=t;r>-1;r--)if(typeof e[r]<"u")return e[r];throw new Error("Locale data API: locale data undefined")}function X(e){let[t,r]=e.split(":");return{hours:+t,minutes:+r}}var Ve=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,x={},je=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,w=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(w||{}),a=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(a||{}),u=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(u||{});function Ge(e,t,r,n){let i=Qe(e);t=y(r,t)||t;let o=[],c;for(;t;)if(c=je.exec(t),c){o=o.concat(c.slice(1));let E=o.pop();if(!E)break;t=E}else{o.push(t);break}let g=i.getTimezoneOffset();n&&(g=be(n,g),i=Je(i,n,!0));let A="";return o.forEach(E=>{let v=Xe(E);A+=v?v(i,r,g):E==="''"?"'":E.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),A}function G(e,t,r){let n=new Date(0);return n.setFullYear(e,t,r),n.setHours(0,0,0),n}function y(e,t){let r=Pe(e);if(x[r]??={},x[r][t])return x[r][t];let n="";switch(t){case"shortDate":n=k(e,p.Short);break;case"mediumDate":n=k(e,p.Medium);break;case"longDate":n=k(e,p.Long);break;case"fullDate":n=k(e,p.Full);break;case"shortTime":n=N(e,p.Short);break;case"mediumTime":n=N(e,p.Medium);break;case"longTime":n=N(e,p.Long);break;case"fullTime":n=N(e,p.Full);break;case"short":let i=y(e,"shortTime"),s=y(e,"shortDate");n=U($(e,p.Short),[i,s]);break;case"medium":let o=y(e,"mediumTime"),c=y(e,"mediumDate");n=U($(e,p.Medium),[o,c]);break;case"long":let g=y(e,"longTime"),A=y(e,"longDate");n=U($(e,p.Long),[g,A]);break;case"full":let E=y(e,"fullTime"),v=y(e,"fullDate");n=U($(e,p.Full),[E,v]);break}return n&&(x[r][t]=n),n}function U(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(r,n){return t!=null&&n in t?t[n]:r})),e}function F(e,t,r="-",n,i){let s="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,s=r));let o=String(e);for(;o.length<t;)o="0"+o;return n&&(o=o.slice(o.length-t)),s+o}function He(e,t){return F(e,3).substring(0,t)}function f(e,t,r=0,n=!1,i=!1){return function(s,o){let c=Ye(e,s);if((r>0||c>-r)&&(c+=r),e===a.Hours)c===0&&r===-12&&(c=12);else if(e===a.FractionalSeconds)return He(c,t);let g=H(o,b.MinusSign);return F(c,t,g,n,i)}}function Ye(e,t){switch(e){case a.FullYear:return t.getFullYear();case a.Month:return t.getMonth();case a.Date:return t.getDate();case a.Hours:return t.getHours();case a.Minutes:return t.getMinutes();case a.Seconds:return t.getSeconds();case a.FractionalSeconds:return t.getMilliseconds();case a.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,t,r=D.Format,n=!1){return function(i,s){return Ze(i,s,e,t,r,n)}}function Ze(e,t,r,n,i,s){switch(r){case u.Months:return $e(t,i,n)[e.getMonth()];case u.Days:return Ne(t,i,n)[e.getDay()];case u.DayPeriods:let o=e.getHours(),c=e.getMinutes();if(s){let A=Ue(t),E=ze(t,i,n),v=A.findIndex(T=>{if(Array.isArray(T)){let[Y,P]=T,se=o>=Y.hours&&c>=Y.minutes,oe=o<P.hours||o===P.hours&&c<P.minutes;if(Y.hours<P.hours){if(se&&oe)return!0}else if(se||oe)return!0}else if(T.hours===o&&T.minutes===c)return!0;return!1});if(v!==-1)return E[v]}return ke(t,i,n)[o<12?0:1];case u.Eras:return xe(t,n)[e.getFullYear()<=0?0:1];default:let g=r;throw new Error(`unexpected translation type ${g}`)}}function z(e){return function(t,r,n){let i=-1*n,s=H(r,b.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case w.Short:return(i>=0?"+":"")+F(o,2,s)+F(Math.abs(i%60),2,s);case w.ShortGMT:return"GMT"+(i>=0?"+":"")+F(o,1,s);case w.Long:return"GMT"+(i>=0?"+":"")+F(o,2,s)+":"+F(Math.abs(i%60),2,s);case w.Extended:return n===0?"Z":(i>=0?"+":"")+F(o,2,s)+":"+F(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var We=0,j=4;function Ke(e){let t=G(e,We,1).getDay();return G(e,0,1+(t<=j?j:j+7)-t)}function Se(e){let t=e.getDay(),r=t===0?-3:j-t;return G(e.getFullYear(),e.getMonth(),e.getDate()+r)}function q(e,t=!1){return function(r,n){let i;if(t){let s=new Date(r.getFullYear(),r.getMonth(),1).getDay()-1,o=r.getDate();i=1+Math.floor((o+s)/7)}else{let s=Se(r),o=Ke(s.getFullYear()),c=s.getTime()-o.getTime();i=1+Math.round(c/6048e5)}return F(i,e,H(n,b.MinusSign))}}function V(e,t=!1){return function(r,n){let s=Se(r).getFullYear();return F(s,e,H(n,b.MinusSign),t)}}var J={};function Xe(e){if(J[e])return J[e];let t;switch(e){case"G":case"GG":case"GGG":t=l(u.Eras,d.Abbreviated);break;case"GGGG":t=l(u.Eras,d.Wide);break;case"GGGGG":t=l(u.Eras,d.Narrow);break;case"y":t=f(a.FullYear,1,0,!1,!0);break;case"yy":t=f(a.FullYear,2,0,!0,!0);break;case"yyy":t=f(a.FullYear,3,0,!1,!0);break;case"yyyy":t=f(a.FullYear,4,0,!1,!0);break;case"Y":t=V(1);break;case"YY":t=V(2,!0);break;case"YYY":t=V(3);break;case"YYYY":t=V(4);break;case"M":case"L":t=f(a.Month,1,1);break;case"MM":case"LL":t=f(a.Month,2,1);break;case"MMM":t=l(u.Months,d.Abbreviated);break;case"MMMM":t=l(u.Months,d.Wide);break;case"MMMMM":t=l(u.Months,d.Narrow);break;case"LLL":t=l(u.Months,d.Abbreviated,D.Standalone);break;case"LLLL":t=l(u.Months,d.Wide,D.Standalone);break;case"LLLLL":t=l(u.Months,d.Narrow,D.Standalone);break;case"w":t=q(1);break;case"ww":t=q(2);break;case"W":t=q(1,!0);break;case"d":t=f(a.Date,1);break;case"dd":t=f(a.Date,2);break;case"c":case"cc":t=f(a.Day,1);break;case"ccc":t=l(u.Days,d.Abbreviated,D.Standalone);break;case"cccc":t=l(u.Days,d.Wide,D.Standalone);break;case"ccccc":t=l(u.Days,d.Narrow,D.Standalone);break;case"cccccc":t=l(u.Days,d.Short,D.Standalone);break;case"E":case"EE":case"EEE":t=l(u.Days,d.Abbreviated);break;case"EEEE":t=l(u.Days,d.Wide);break;case"EEEEE":t=l(u.Days,d.Narrow);break;case"EEEEEE":t=l(u.Days,d.Short);break;case"a":case"aa":case"aaa":t=l(u.DayPeriods,d.Abbreviated);break;case"aaaa":t=l(u.DayPeriods,d.Wide);break;case"aaaaa":t=l(u.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":t=l(u.DayPeriods,d.Abbreviated,D.Standalone,!0);break;case"bbbb":t=l(u.DayPeriods,d.Wide,D.Standalone,!0);break;case"bbbbb":t=l(u.DayPeriods,d.Narrow,D.Standalone,!0);break;case"B":case"BB":case"BBB":t=l(u.DayPeriods,d.Abbreviated,D.Format,!0);break;case"BBBB":t=l(u.DayPeriods,d.Wide,D.Format,!0);break;case"BBBBB":t=l(u.DayPeriods,d.Narrow,D.Format,!0);break;case"h":t=f(a.Hours,1,-12);break;case"hh":t=f(a.Hours,2,-12);break;case"H":t=f(a.Hours,1);break;case"HH":t=f(a.Hours,2);break;case"m":t=f(a.Minutes,1);break;case"mm":t=f(a.Minutes,2);break;case"s":t=f(a.Seconds,1);break;case"ss":t=f(a.Seconds,2);break;case"S":t=f(a.FractionalSeconds,1);break;case"SS":t=f(a.FractionalSeconds,2);break;case"SSS":t=f(a.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=z(w.Short);break;case"ZZZZZ":t=z(w.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=z(w.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=z(w.Long);break;default:return null}return J[e]=t,t}function be(e,t){e=e.replace(/:/g,"");let r=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(r)?t:r}function qe(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function Je(e,t,r){let n=r?-1:1,i=e.getTimezoneOffset(),s=be(t,i);return qe(e,n*(s-i))}function Qe(e){if(Ce(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,s=1,o=1]=e.split("-").map(c=>+c);return G(i,s-1,o)}let r=parseFloat(e);if(!isNaN(e-r))return new Date(r);let n;if(n=e.match(Ve))return et(n)}let t=new Date(e);if(!Ce(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function et(e){let t=new Date(0),r=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,s=e[8]?t.setUTCHours:t.setHours;e[9]&&(r=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let o=Number(e[4]||0)-r,c=Number(e[5]||0)-n,g=Number(e[6]||0),A=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(t,o,c,g,A),t}function Ce(e){return e instanceof Date&&!isNaN(e.valueOf())}function tn(e,t){t=encodeURIComponent(t);for(let r of e.split(";")){let n=r.indexOf("="),[i,s]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===t)return decodeURIComponent(s)}return null}function O(e,t){return new ue(2100,!1)}var Q=class{createSubscription(t,r){return W(()=>t.subscribe({next:r,error:n=>{throw n}}))}dispose(t){W(()=>t.unsubscribe())}},ee=class{createSubscription(t,r){return t.then(r,n=>{throw n})}dispose(t){}},tt=new ee,nt=new Q,nn=(()=>{let t=class t{constructor(n){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){if(!this._obj){if(n)try{this.markForCheckOnValueUpdate=!1,this._subscribe(n)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,i=>this._updateLatestValue(n,i))}_selectStrategy(n){if(he(n))return tt;if(fe(n))return nt;throw O(t,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,i){n===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}};t.\u0275fac=function(i){return new(i||t)(R(Z,16))},t.\u0275pipe=L({name:"async",type:t,pure:!1,standalone:!0});let e=t;return e})();var it=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g,rn=(()=>{let t=class t{transform(n){if(n==null)return null;if(typeof n!="string")throw O(t,n);return n.replace(it,i=>i[0].toUpperCase()+i.slice(1).toLowerCase())}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=L({name:"titlecase",type:t,pure:!0,standalone:!0});let e=t;return e})(),sn=(()=>{let t=class t{transform(n){if(n==null)return null;if(typeof n!="string")throw O(t,n);return n.toUpperCase()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=L({name:"uppercase",type:t,pure:!0,standalone:!0});let e=t;return e})(),rt="mediumDate",st=new B(""),ot=new B(""),on=(()=>{let t=class t{constructor(n,i,s){this.locale=n,this.defaultTimezone=i,this.defaultOptions=s}transform(n,i,s,o){if(n==null||n===""||n!==n)return null;try{let c=i??this.defaultOptions?.dateFormat??rt,g=s??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ge(n,c,o||this.locale,g)}catch(c){throw O(t,c.message)}}};t.\u0275fac=function(i){return new(i||t)(R(De,16),R(st,24),R(ot,24))},t.\u0275pipe=L({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var un=(()=>{let t=class t{transform(n,i,s){if(n==null)return null;if(!this.supports(n))throw O(t,n);return n.slice(i,s)}supports(n){return typeof n=="string"||Array.isArray(n)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=L({name:"slice",type:t,pure:!1,standalone:!0});let e=t;return e})();var an=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=ce({type:t}),t.\u0275inj=ae({});let e=t;return e})(),ut="browser",at="server";function ct(e){return e===ut}function cn(e){return e===at}var dn=(()=>{let t=class t{};t.\u0275prov=S({token:t,providedIn:"root",factory:()=>ct(_(le))?new te(_(ie),window):new ne});let e=t;return e})(),te=class{constructor(t,r){this.document=t,this.window=r,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let r=dt(this.document,t);r&&(this.scrollToElement(r),r.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let r=t.getBoundingClientRect(),n=r.left+this.window.pageXOffset,i=r.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],i-s[1])}};function dt(e,t){let r=e.getElementById(t)||e.getElementsByName(t)[0];if(r)return r;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(t)||s.querySelector(`[name="${t}"]`);if(o)return o}i=n.nextNode()}}return null}var ne=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},Fe=class{};export{K as a,en as b,ge as c,ie as d,re as e,Be as f,tn as g,nn as h,rn as i,sn as j,on as k,un as l,an as m,ut as n,ct as o,cn as p,dn as q,Fe as r};