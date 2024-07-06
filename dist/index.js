"use strict";var j=function(a,v){return function(){return v||a((v={exports:{}}).exports,v),v.exports}};var z=j(function(J,k){
function D(a,v,r,n,i){var u,p,N,l,m,q,t,x,c,y,O,R,b,f,g,o,w;if(o=v[0],!(o<=0))for(q=n[0],t=n[1],x=n[2],c=n[3],y=n[4],u=r[0],p=r[1],N=r[2],l=r[3],m=r[4],O=a[0],R=a[1],b=a[2],f=a[3],g=a[4],w=0;w<o;w++)g[y]=i(O[q],R[t],b[x],f[c]),q+=u,t+=p,x+=N,c+=l,y+=m}k.exports=D
});var B=j(function(K,A){
var e=require('@stdlib/strided-base-stride2offset/dist'),E=z();function F(a,v,r,n){var i,u;return u=v[0],i=[e(u,r[0]),e(u,r[1]),e(u,r[2]),e(u,r[3]),e(u,r[4])],E(a,v,r,i,n)}A.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),H=z();G(C,"ndarray",H);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
