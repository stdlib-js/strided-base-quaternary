"use strict";var b=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var h=b(function(G,g){
function B(r,i,v,l){var o,w,z,c,q,t,u,e,n,x,p,y,N,m,O,a,f;if(a=i[0],!(a<=0))for(o=v[0],w=v[1],z=v[2],c=v[3],q=v[4],o<0?t=(1-a)*o:t=0,w<0?u=(1-a)*w:u=0,z<0?e=(1-a)*z:e=0,c<0?n=(1-a)*c:n=0,q<0?x=(1-a)*q:x=0,p=r[0],y=r[1],N=r[2],m=r[3],O=r[4],f=0;f<a;f++)O[x]=l(p[t],y[u],N[e],m[n]),t+=o,u+=w,e+=z,n+=c,x+=q}g.exports=B
});var k=b(function(H,j){
function C(r,i,v,l,o){var w,z,c,q,t,u,e,n,x,p,y,N,m,O,a,f,R;if(f=i[0],!(f<=0))for(u=l[0],e=l[1],n=l[2],x=l[3],p=l[4],w=v[0],z=v[1],c=v[2],q=v[3],t=v[4],y=r[0],N=r[1],m=r[2],O=r[3],a=r[4],R=0;R<f;R++)a[p]=o(y[u],N[e],m[n],O[x]),u+=w,e+=z,n+=c,x+=q,p+=t}j.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=h(),E=k();D(A,"ndarray",E);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
