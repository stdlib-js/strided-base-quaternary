// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__,f=r,c=function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||u.call(e,t)?(f=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},_=t()?f:c;function p(e,t,r,o){var n,a,i,l,u,f,c,_,p,d,y,b,s,v,j,m,g;if(!((m=t[0])<=0))for(f=(n=r[0])<0?(1-m)*n:0,c=(a=r[1])<0?(1-m)*a:0,_=(i=r[2])<0?(1-m)*i:0,p=(l=r[3])<0?(1-m)*l:0,d=(u=r[4])<0?(1-m)*u:0,y=e[0],b=e[1],s=e[2],v=e[3],j=e[4],g=0;g<m;g++)j[d]=o(y[f],b[c],s[_],v[p]),f+=n,c+=a,_+=i,p+=l,d+=u}return _(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,o,n){var a,i,l,u,f,c,_,p,d,y,b,s,v,j,m,g,h;if(!((g=t[0])<=0))for(c=o[0],_=o[1],p=o[2],d=o[3],y=o[4],a=r[0],i=r[1],l=r[2],u=r[3],f=r[4],b=e[0],s=e[1],v=e[2],j=e[3],m=e[4],h=0;h<g;h++)m[y]=n(b[c],s[_],v[p],j[d]),c+=a,_+=i,p+=l,d+=u,y+=f}}),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).quaternary=t();
//# sourceMappingURL=browser.js.map
