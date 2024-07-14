import{$a as Pe,Ab as Oe,Bb as Ie,D as he,Dc as xe,E as de,Ea as Re,F as ue,K as V,P as fe,Rb as Me,S as pe,U as H,V as ye,X as w,Za as Ae,_ as E,a as ce,aa as v,ba as u,ca as ge,cb as Ne,da as me,ec as De,f as Y,fa as ve,i as Z,ja as X,kc as R,la as Te,ma as be,p as le,pc as $,q as x,r as Q,sc as ke,u as D,xa as T,ya as we,za as Ee}from"./chunk-AMQ5GCKU.js";var S=class{},B=class{},A=class s{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(i=>{let t=i.indexOf(":");if(t>0){let n=i.slice(0,t),r=n.toLowerCase(),a=i.slice(t+1).trim();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(a):this.headers.set(r,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((i,t)=>{this.setHeaderEntries(t,i)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([i,t])=>{this.setHeaderEntries(i,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let i=this.headers.get(e.toLowerCase());return i&&i.length>0?i[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,i){return this.clone({name:e,value:i,op:"a"})}set(e,i){return this.clone({name:e,value:i,op:"s"})}delete(e,i){return this.clone({name:e,value:i,op:"d"})}maybeSetNormalizedName(e,i){this.normalizedNames.has(i)||this.normalizedNames.set(i,e)}init(){this.lazyInit&&(this.lazyInit instanceof s?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(i=>{this.headers.set(i,e.headers.get(i)),this.normalizedNames.set(i,e.normalizedNames.get(i))})}clone(e){let i=new s;return i.lazyInit=this.lazyInit&&this.lazyInit instanceof s?this.lazyInit:this,i.lazyUpdate=(this.lazyUpdate||[]).concat([e]),i}applyUpdate(e){let i=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,i);let n=(e.op==="a"?this.headers.get(i):void 0)||[];n.push(...t),this.headers.set(i,n);break;case"d":let r=e.value;if(!r)this.headers.delete(i),this.normalizedNames.delete(i);else{let a=this.headers.get(i);if(!a)return;a=a.filter(o=>r.indexOf(o)===-1),a.length===0?(this.headers.delete(i),this.normalizedNames.delete(i)):this.headers.set(i,a)}break}}setHeaderEntries(e,i){let t=(Array.isArray(i)?i:[i]).map(r=>r.toString()),n=e.toLowerCase();this.headers.set(n,t),this.maybeSetNormalizedName(e,n)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(i=>e(this.normalizedNames.get(i),this.headers.get(i)))}};var te=class{encodeKey(e){return Ue(e)}encodeValue(e){return Ue(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function We(s,e){let i=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{let r=n.indexOf("="),[a,o]=r==-1?[e.decodeKey(n),""]:[e.decodeKey(n.slice(0,r)),e.decodeValue(n.slice(r+1))],l=i.get(a)||[];l.push(o),i.set(a,l)}),i}var Ke=/%(\d[a-f0-9])/gi,qe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ue(s){return encodeURIComponent(s).replace(Ke,(e,i)=>qe[i]??e)}function G(s){return`${s}`}var O=class s{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new te,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=We(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(i=>{let t=e.fromObject[i],n=Array.isArray(t)?t.map(G):[G(t)];this.map.set(i,n)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let i=this.map.get(e);return i?i[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,i){return this.clone({param:e,value:i,op:"a"})}appendAll(e){let i=[];return Object.keys(e).forEach(t=>{let n=e[t];Array.isArray(n)?n.forEach(r=>{i.push({param:t,value:r,op:"a"})}):i.push({param:t,value:n,op:"a"})}),this.clone(i)}set(e,i){return this.clone({param:e,value:i,op:"s"})}delete(e,i){return this.clone({param:e,value:i,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let i=this.encoder.encodeKey(e);return this.map.get(e).map(t=>i+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let i=new s({encoder:this.encoder});return i.cloneFrom=this.cloneFrom||this,i.updates=(this.updates||[]).concat(e),i}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let i=(e.op==="a"?this.map.get(e.param):void 0)||[];i.push(G(e.value)),this.map.set(e.param,i);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],n=t.indexOf(G(e.value));n!==-1&&t.splice(n,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var ne=class{constructor(){this.map=new Map}set(e,i){return this.map.set(e,i),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Ye(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Le(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function Fe(s){return typeof Blob<"u"&&s instanceof Blob}function je(s){return typeof FormData<"u"&&s instanceof FormData}function Ze(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}var j=class s{constructor(e,i,t,n){this.url=i,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let r;if(Ye(this.method)||n?(this.body=t!==void 0?t:null,r=n):r=t,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new A,this.context??=new ne,!this.params)this.params=new O,this.urlWithParams=i;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=i;else{let o=i.indexOf("?"),l=o===-1?"?":o<i.length-1?"&":"";this.urlWithParams=i+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Le(this.body)||Fe(this.body)||je(this.body)||Ze(this.body)?this.body:this.body instanceof O?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||je(this.body)?null:Fe(this.body)?this.body.type||null:Le(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof O?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let i=e.method||this.method,t=e.url||this.url,n=e.responseType||this.responseType,r=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,o=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,c=e.headers||this.headers,p=e.params||this.params,m=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((y,b)=>y.set(b,e.setHeaders[b]),c)),e.setParams&&(p=Object.keys(e.setParams).reduce((y,b)=>y.set(b,e.setParams[b]),p)),new s(i,t,a,{params:p,headers:c,context:m,reportProgress:l,responseType:n,withCredentials:o,transferCache:r})}},I=function(s){return s[s.Sent=0]="Sent",s[s.UploadProgress=1]="UploadProgress",s[s.ResponseHeader=2]="ResponseHeader",s[s.DownloadProgress=3]="DownloadProgress",s[s.Response=4]="Response",s[s.User=5]="User",s}(I||{}),C=class{constructor(e,i=200,t="OK"){this.headers=e.headers||new A,this.status=e.status!==void 0?e.status:i,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},J=class s extends C{constructor(e={}){super(e),this.type=I.ResponseHeader}clone(e={}){return new s({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},_=class s extends C{constructor(e={}){super(e),this.type=I.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new s({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},N=class extends C{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},_e=200,Qe=204;function ee(s,e){return{body:e,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials,transferCache:s.transferCache}}var oe=(()=>{let e=class e{constructor(t){this.handler=t}request(t,n,r={}){let a;if(t instanceof j)a=t;else{let c;r.headers instanceof A?c=r.headers:c=new A(r.headers);let p;r.params&&(r.params instanceof O?p=r.params:p=new O({fromObject:r.params})),a=new j(t,n,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:p,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let o=x(a).pipe(ue(c=>this.handler.handle(c)));if(t instanceof j||r.observe==="events")return o;let l=o.pipe(he(c=>c instanceof _));switch(r.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(D(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe(D(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe(D(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return l.pipe(D(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new O().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,r={}){return this.request("PATCH",t,ee(r,n))}post(t,n,r={}){return this.request("POST",t,ee(r,n))}put(t,n,r={}){return this.request("PUT",t,ee(r,n))}};e.\u0275fac=function(n){return new(n||e)(v(S))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let s=e;return s})(),He=/^\)\]\}',?\n/,et="X-Request-URL";function Se(s){if(s.url)return s.url;let e=et.toLocaleLowerCase();return s.headers.get(e)}var se=(()=>{let e=class e{constructor(){this.fetchImpl=u(re,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=u(Pe)}handle(t){return new Z(n=>{let r=new AbortController;return this.doRequest(t,r.signal,n).then(ie,a=>n.error(new N({error:a}))),()=>r.abort()})}doRequest(t,n,r){return Y(this,null,function*(){let a=this.createRequestInit(t),o;try{let g=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,ce({signal:n},a)));tt(g),r.next({type:I.Sent}),o=yield g}catch(g){r.error(new N({error:g,status:g.status??0,statusText:g.statusText,url:t.urlWithParams,headers:g.headers}));return}let l=new A(o.headers),c=o.statusText,p=Se(o)??t.urlWithParams,m=o.status,y=null;if(t.reportProgress&&r.next(new J({headers:l,status:m,statusText:c,url:p})),o.body){let g=o.headers.get("content-length"),U=[],h=o.body.getReader(),d=0,P,k,f=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>Y(this,null,function*(){for(;;){let{done:M,value:F}=yield h.read();if(M)break;if(U.push(F),d+=F.length,t.reportProgress){k=t.responseType==="text"?(k??"")+(P??=new TextDecoder).decode(F,{stream:!0}):void 0;let ae=()=>r.next({type:I.DownloadProgress,total:g?+g:void 0,loaded:d,partialText:k});f?f.run(ae):ae()}}}));let L=this.concatChunks(U,d);try{let M=o.headers.get("Content-Type")??"";y=this.parseBody(t,L,M)}catch(M){r.error(new N({error:M,headers:new A(o.headers),status:o.status,statusText:o.statusText,url:Se(o)??t.urlWithParams}));return}}m===0&&(m=y?_e:0),m>=200&&m<300?(r.next(new _({body:y,headers:l,status:m,statusText:c,url:p})),r.complete()):r.error(new N({error:y,headers:l,status:m,statusText:c,url:p}))})}parseBody(t,n,r){switch(t.responseType){case"json":let a=new TextDecoder().decode(n).replace(He,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:r});case"arraybuffer":return n.buffer}}createRequestInit(t){let n={},r=t.withCredentials?"include":void 0;if(t.headers.forEach((a,o)=>n[a]=o.join(",")),t.headers.has("Accept")||(n.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let a=t.detectContentTypeHeader();a!==null&&(n["Content-Type"]=a)}return{body:t.serializeBody(),method:t.method,headers:n,credentials:r}}concatChunks(t,n){let r=new Uint8Array(n),a=0;for(let o of t)r.set(o,a),a+=o.length;return r}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac});let s=e;return s})(),re=class{};function ie(){}function tt(s){s.then(ie,ie)}function nt(s,e){return e(s)}function st(s,e,i){return(t,n)=>be(i,()=>e(t,r=>s(r,n)))}var ze=new E(""),rt=new E(""),it=new E("",{providedIn:"root",factory:()=>!0});var Be=(()=>{let e=class e extends S{constructor(t,n){super(),this.backend=t,this.injector=n,this.chain=null,this.pendingTasks=u(Ee),this.contributeToStability=u(it)}handle(t){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(ze),...this.injector.get(rt,[])]));this.chain=n.reduceRight((r,a)=>st(r,a,this.injector),nt)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(t,r=>this.backend.handle(r)).pipe(V(()=>this.pendingTasks.remove(n)))}else return this.chain(t,n=>this.backend.handle(n))}};e.\u0275fac=function(n){return new(n||e)(v(B),v(Te))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let s=e;return s})();var ot=/^\)\]\}',?\n/;function at(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}var Ce=(()=>{let e=class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new ye(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?le(n.\u0275loadImpl()):x(null)).pipe(pe(()=>new Z(a=>{let o=n.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((h,d)=>o.setRequestHeader(h,d.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let h=t.detectContentTypeHeader();h!==null&&o.setRequestHeader("Content-Type",h)}if(t.responseType){let h=t.responseType.toLowerCase();o.responseType=h!=="json"?h:"text"}let l=t.serializeBody(),c=null,p=()=>{if(c!==null)return c;let h=o.statusText||"OK",d=new A(o.getAllResponseHeaders()),P=at(o)||t.url;return c=new J({headers:d,status:o.status,statusText:h,url:P}),c},m=()=>{let{headers:h,status:d,statusText:P,url:k}=p(),f=null;d!==Qe&&(f=typeof o.response>"u"?o.responseText:o.response),d===0&&(d=f?_e:0);let L=d>=200&&d<300;if(t.responseType==="json"&&typeof f=="string"){let M=f;f=f.replace(ot,"");try{f=f!==""?JSON.parse(f):null}catch(F){f=M,L&&(L=!1,f={error:F,text:f})}}L?(a.next(new _({body:f,headers:h,status:d,statusText:P,url:k||void 0})),a.complete()):a.error(new N({error:f,headers:h,status:d,statusText:P,url:k||void 0}))},y=h=>{let{url:d}=p(),P=new N({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});a.error(P)},b=!1,g=h=>{b||(a.next(p()),b=!0);let d={type:I.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(d.total=h.total),t.responseType==="text"&&o.responseText&&(d.partialText=o.responseText),a.next(d)},U=h=>{let d={type:I.UploadProgress,loaded:h.loaded};h.lengthComputable&&(d.total=h.total),a.next(d)};return o.addEventListener("load",m),o.addEventListener("error",y),o.addEventListener("timeout",y),o.addEventListener("abort",y),t.reportProgress&&(o.addEventListener("progress",g),l!==null&&o.upload&&o.upload.addEventListener("progress",U)),o.send(l),a.next({type:I.Sent}),()=>{o.removeEventListener("error",y),o.removeEventListener("abort",y),o.removeEventListener("load",m),o.removeEventListener("timeout",y),t.reportProgress&&(o.removeEventListener("progress",g),l!==null&&o.upload&&o.upload.removeEventListener("progress",U)),o.readyState!==o.DONE&&o.abort()}})))}};e.\u0275fac=function(n){return new(n||e)(v(xe))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let s=e;return s})(),Ve=new E(""),ct="XSRF-TOKEN",lt=new E("",{providedIn:"root",factory:()=>ct}),ht="X-XSRF-TOKEN",dt=new E("",{providedIn:"root",factory:()=>ht}),W=class{},ut=(()=>{let e=class e{constructor(t,n,r){this.doc=t,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=ke(t,this.cookieName),this.lastCookieString=t),this.lastToken}};e.\u0275fac=function(n){return new(n||e)(v($),v(Re),v(lt))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let s=e;return s})();function ft(s,e){let i=s.url.toLowerCase();if(!u(Ve)||s.method==="GET"||s.method==="HEAD"||i.startsWith("http://")||i.startsWith("https://"))return e(s);let t=u(W).getToken(),n=u(dt);return t!=null&&!s.headers.has(n)&&(s=s.clone({headers:s.headers.set(n,t)})),e(s)}var Xe=function(s){return s[s.Interceptors=0]="Interceptors",s[s.LegacyInterceptors=1]="LegacyInterceptors",s[s.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",s[s.NoXsrfProtection=3]="NoXsrfProtection",s[s.JsonpSupport=4]="JsonpSupport",s[s.RequestsMadeViaParent=5]="RequestsMadeViaParent",s[s.Fetch=6]="Fetch",s}(Xe||{});function pt(s,e){return{\u0275kind:s,\u0275providers:e}}function _t(...s){let e=[oe,Ce,Be,{provide:S,useExisting:Be},{provide:B,useFactory:()=>u(se,{optional:!0})??u(Ce)},{provide:ze,useValue:ft,multi:!0},{provide:Ve,useValue:!0},{provide:W,useClass:ut}];for(let i of s)e.push(...i.\u0275providers);return X(e)}function zt(){return pt(Xe.Fetch,[se,{provide:B,useExisting:se}])}var gt=["*"],z=class{},mt=(()=>{let e=class e extends z{constructor(t){super(),this.http=t}getSvg(t){return this.http.get(t,{responseType:"text"})}};e.\u0275fac=function(n){return new(n||e)(v(oe))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let s=e;return s})(),vt=new E("SERVER_URL"),K=(()=>{let e=class e{constructor(){this.loader=u(z),this.serverUrl=u(vt,{optional:!0}),this.document=u($),this.iconsByUrl=new Map,this.iconsLoadingByUrl=new Map}addSvg(t,n){if(!this.iconsByUrl.has(t)){let r=this.document.createElement("DIV");r.innerHTML=n;let a=r.querySelector("svg");this.iconsByUrl.set(t,a)}}loadSvg(t,n=t){if(this.serverUrl&&t.match(/^(http(s)?):/)===null&&(t=this.serverUrl+t,n=t),this.iconsByUrl.has(n))return x(this.iconsByUrl.get(n));if(this.iconsLoadingByUrl.has(n))return this.iconsLoadingByUrl.get(n);let r=this.loader.getSvg(t).pipe(D(a=>{let o=this.document.createElement("DIV");return o.innerHTML=a,o.querySelector("svg")}),H(a=>this.iconsByUrl.set(n,a)),de(a=>(console.error(a),Q(a))),V(()=>this.iconsLoadingByUrl.delete(n)),fe());return this.iconsLoadingByUrl.set(n,r),r}getSvgByName(t){return this.iconsByUrl.has(t)?x(this.iconsByUrl.get(t)):this.iconsLoadingByUrl.has(t)?this.iconsLoadingByUrl.get(t):Q(`No svg with name '${t}' has been loaded`)}unloadSvg(t){this.iconsByUrl.has(t)&&this.iconsByUrl.delete(t)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac});let s=e;return s})();function Tt(s){return s||new K}var bt={provide:K,deps:[[new ge,new me,K]],useFactory:Tt},q=class{constructor(){this.loaded=!1}},Zt=(()=>{let e=class e{constructor(){this.element=u(we),this.differs=u(De),this.renderer=u(Ae),this.iconReg=u(K),this.src=T(),this.name=T(),this.stretch=T(!1),this.applyClass=T(!1),this.svgClass=T(),this.klass=T(void 0,{alias:"class"}),this.viewBox=T(),this.svgAriaLabel=T(),this.svg=Ne(0),this.svgStyle=T(),this.helper=new q,R(()=>{(this.src()||this.name())&&(this.destroy(),this.init(this.src(),this.name()))},{allowSignalWrites:!0}),R(()=>{let r=this.viewBox();this.svg()&&this.updateViewBox(r)}),R(()=>{let r=this.svgStyle()||{};this.svg()&&this.applyChanges(this.helper.differ.diff(r))}),R(()=>{let r=this.svg();this.applyClass()?this.setClass(this.elemSvg,null,this.klass()):this.setClass(this.elemSvg,this.klass(),null)});let t;R(()=>{let r=this.svg();this.setClass(this.elemSvg,t,this.svgClass()),t=this.svgClass()});let n;R(()=>{let r=this.svg(),a=this.element.nativeElement;this.setClass(a,n,this.klass()),this.setClass(this.elemSvg,n,this.applyClass()?this.klass():null),n=this.klass()}),R(()=>{let r=this.svg();this.doAria(this.svgAriaLabel())}),R(()=>{let r=this.svg();this.stylize(this.stretch())})}ngOnDestroy(){this.destroy()}get elemSvg(){return this.element.nativeElement.firstChild}init(t,n){if(t&&n){let r=this.iconReg.loadSvg(t,n);r&&(this.helper.icnSub=r.subscribe(a=>this.initSvg(a)))}else if(n){let r=this.iconReg.getSvgByName(n);r&&(this.helper.icnSub=r.subscribe(a=>this.initSvg(a)))}else if(t){let r=this.iconReg.loadSvg(t);r&&(this.helper.icnSub=r.subscribe(a=>this.initSvg(a)))}else this.element.nativeElement.innerHTML="",this.svg.set(0)}initSvg(t){!this.helper.loaded&&t&&this.setSvg(t)}destroy(){this.helper.icnSub?.unsubscribe(),this.helper=new q,this.helper.differ=this.differs.find({}).create()}setSvg(t){if(!this.helper.loaded&&t){this.helper.svg=t;let n=t.cloneNode(!0),r=this.element.nativeElement;r.innerHTML="",this.renderer.appendChild(r,n),this.helper.loaded=!0,this.copyNgContentAttribute(r,n),this.svg.update(a=>a+1)}}updateViewBox(t){if(t){let n=this.elemSvg;if(t==="auto"){let r=n.getAttribute("width"),a=n.getAttribute("height");if(a&&r){let o=`0 0 ${r} ${a}`;this.renderer.setAttribute(n,"viewBox",o),this.renderer.removeAttribute(n,"width"),this.renderer.removeAttribute(n,"height")}}else t!==""&&(this.renderer.setAttribute(n,"viewBox",t),this.renderer.removeAttribute(n,"width"),this.renderer.removeAttribute(n,"height"))}}copyNgContentAttribute(t,n){let r=t.attributes,a=r.length;for(let o=0;o<a;o+=1){let l=r.item(o);if(l&&l.name.startsWith("_ngcontent")){this.setNgContentAttribute(n,l.name);break}}}setNgContentAttribute(t,n){this.renderer.setAttribute(t,n,"");let r=t.childNodes.length;for(let a=0;a<r;a+=1){let o=t.childNodes[a];o instanceof Element&&this.setNgContentAttribute(o,n)}}stylize(t){if(this.helper.svg){let n=this.element.nativeElement.firstChild;t===!0?this.renderer.setAttribute(n,"preserveAspectRatio","none"):t===!1&&this.renderer.removeAttribute(n,"preserveAspectRatio")}}applyChanges(t){t&&(t.forEachRemovedItem(n=>this.setStyle(n.key,null)),t.forEachAddedItem(n=>this.setStyle(n.key,n.currentValue)),t.forEachChangedItem(n=>this.setStyle(n.key,n.currentValue)))}setStyle(t,n){let[r,a]=t.split(".");n=n!==null&&a?`${n}${a}`:n;let o=this.elemSvg;n!==null?this.renderer.setStyle(o,r,n):this.renderer.removeStyle(o,r)}setClass(t,n,r){if(t){if(n){let a=(Array.isArray(n)?n:n.split(" ")).filter(o=>o);for(let o of a)this.renderer.removeClass(t,o)}if(r){let a=(Array.isArray(r)?r:r.split(" ")).filter(o=>o);for(let o of a)this.renderer.addClass(t,o)}}}doAria(t){let n=this.element.nativeElement.firstChild;n&&!(t===void 0&&n.hasAttribute("aria-label"))&&(t===""?(this.renderer.setAttribute(n,"aria-hidden","true"),this.renderer.removeAttribute(n,"aria-label")):(this.renderer.removeAttribute(n,"aria-hidden"),this.renderer.setAttribute(n,"aria-label",t)))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=ve({type:e,selectors:[["svg-icon"]],inputs:{src:[1,"src"],name:[1,"name"],stretch:[1,"stretch"],applyClass:[1,"applyClass"],svgClass:[1,"svgClass"],klass:[1,"class","klass"],viewBox:[1,"viewBox"],svgAriaLabel:[1,"svgAriaLabel"],svgStyle:[1,"svgStyle"]},standalone:!0,features:[Me],ngContentSelectors:gt,decls:1,vars:0,template:function(n,r){n&1&&(Oe(),Ie(0))},encapsulation:2,changeDetection:0});let s=e;return s})();function Qt(s={}){return X([bt,s.loader||{provide:z,useClass:mt}])}export{oe as a,_t as b,zt as c,Zt as d,Qt as e};
