// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,i=o.__lookupGetter__,u=o.__lookupSetter__;var c=t,_=function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(e,r)||u.call(e,r)?(c=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e},f=r()?c:_;function p(e,r,t,o){var n,a,l,i,u,c,_,f,p,b,y,d,v,s,j,g,m;if(!((g=r[0])<=0))for(c=(n=t[0])<0?(1-g)*n:0,_=(a=t[1])<0?(1-g)*a:0,f=(l=t[2])<0?(1-g)*l:0,p=(i=t[3])<0?(1-g)*i:0,b=(u=t[4])<0?(1-g)*u:0,y=e[0],d=e[1],v=e[2],s=e[3],j=e[4],m=0;m<g;m++)j[b]=o(y[c],d[_],v[f],s[p]),c+=n,_+=a,f+=l,p+=i,b+=u}function b(e,r,t,o,n){var a,l,i,u,c,_,f,p,b,y,d,v,s,j,g,m,w;if(!((m=r[0])<=0))for(_=o[0],f=o[1],p=o[2],b=o[3],y=o[4],a=t[0],l=t[1],i=t[2],u=t[3],c=t[4],d=e[0],v=e[1],s=e[2],j=e[3],g=e[4],w=0;w<m;w++)g[y]=n(d[_],v[f],s[p],j[b]),_+=a,f+=l,p+=i,b+=u,y+=c}(function(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(p,"ndarray",b);export{p as default,b as ndarray};
//# sourceMappingURL=mod.js.map
