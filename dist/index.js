"use strict";var j=function(v,a){return function(){try{return a||v((a={exports:{}}).exports,a),a.exports}catch(r){throw (a=0, r)}};};var z=j(function(J,k){
function D(v,a,r,n,i){var u,p,N,l,m,q,t,x,c,y,O,R,b,f,g,o,w;if(o=a[0],!(o<=0))for(q=n[0],t=n[1],x=n[2],c=n[3],y=n[4],u=r[0],p=r[1],N=r[2],l=r[3],m=r[4],O=v[0],R=v[1],b=v[2],f=v[3],g=v[4],w=0;w<o;w++)g[y]=i(O[q],R[t],b[x],f[c]),q+=u,t+=p,x+=N,c+=l,y+=m}k.exports=D
});var B=j(function(K,A){
var e=require('@stdlib/strided-base-stride2offset/dist'),E=z();function F(v,a,r,n){var i,u;return u=a[0],i=[e(u,r[0]),e(u,r[1]),e(u,r[2]),e(u,r[3]),e(u,r[4])],E(v,a,r,i,n)}A.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),H=z();G(C,"ndarray",H);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
