const e=[0],l=[],t=["click"],n=Object,o=Array,r=o.isArray,s=Map,f=Int32Array,c=queueMicrotask,u=Node.prototype,a=Element.prototype,i=document,p=i.createElement("template"),d=p.content;i.createElement("template").content.firstChild;const h=u.insertBefore,v=u.removeChild,g=u.cloneNode,m=a.setAttribute,y=a.removeAttribute,b=a.addEventListener,E=a.removeEventListener,M=(e,l)=>n.getOwnPropertyDescriptor(e,l),w=M(u,"firstChild").get;M(u,"lastChild").get;const L=M(u,"nextSibling").get;M(u,"previousSibling").get;const k=M(u,"textContent").set;M(u,"nodeType").get;const A=M(a,"innerHTML").set,S=M(a,"className").set,T=M(HTMLElement.prototype,"style").get,C=M(SVGElement.prototype,"style").get,H=n.seal({p:null,n:null,si:0,e:[]}),N=(e,l,t,n,o)=>({f:e,v:l,c:t,p:n,s1:o}),P=()=>{const e=H.e;if(e.length>0){H.e=[];for(let l=0;l<e.length;l++)e[l]()}},j=(e,l,t,n,o,r,s)=>{let f;for(let c=0;c<l.length;c++){const u=l[c],a=7&u,i=u>>9;if(0===a)e=n[i],f=void 0;else{const l=u>>3&63,n=r[l];if(4===a){const l=t[i];null===o?void 0!==n&&(e[l]=n):e[l]!==n&&(e[l]=n)}else{let r;if(null!==o&&(r=o[l]),r!==n)if(1===a)0===i?""!==n&&null!=n&&false!==n?S.call(e,n):""!==r&&null!=r&&false!==r&&S.call(e,""):1===i?""!==n&&null!=n&&false!==n?null==r||""===r||false===r?k.call(e,n):w.call(e).nodeValue=n:null!=r&&""!==r&&false!==r&&k.call(e,""):""!==n&&null!=n&&false!==n?A.call(e,n):""!==r&&null!=r&&false!==r&&k.call(e,"");else if(7===a)n(e);else{const l=t[i];2===a?false!==n&&null!=n?m.call(e,l,n):false!==r&&null!=r&&y.call(e,l):3===a?e[l]=n:5===a?false!==n&&null!=n?(void 0===f&&(f=false===s?T.call(e):C.call(e)),f.setProperty(l,n)):false!==r&&null!=r&&(void 0===f&&(f=false===s?T.call(e):C.call(e)),f.removeProperty(l)):(null!=r&&false!==r&&E.call(e,l,r),null!=n&&false!==n&&b.call(e,l,n))}}}}},x=(e,l,t,n,o)=>{const r=H;for(;;){const s=l[t++];if(1&s&&(o[++r.si]=e),2&s){const n=s>>3;if(n)x(w.call(e),l,t,t+=n,o);else{const l=e;o[++r.si]=e=L.call(e),l.remove()}}if(t===n)return;e=L.call(e)}},B=(e,l,t,n)=>{let r=t.length;const s=o(r),f=N(l,n,s,e,null);for(;r>0;)s[--r]=V(f,t[r]);return f},O=(e,l,t,n)=>{if(!r(t))return I(l,true),V(e,t);const s=l.c;let f=s,c=s.length,u=t.length;if(u!==c){for(l.c=f=o(u);c>u;){const e=s[--c];null!==e&&I(e,true)}for(;u>c;)f[--u]=V(l,t[u])}for(;u>0;)f[--u]=R(l,s[u],t[u],n);return l},R=(e,l,t,n)=>{if(null===l)return V(e,t);if(false===t||null==t||""===t)return I(l,true),null;const o=l.c,r=l.v,s=l.s1,f=l.f,c=127&f;if(l.f=c,l.v=t,16===c){const o=H;return"object"!==typeof t?(r!==t&&(s.nodeValue=t),1024&n&&h.call(o.p,s,o.n),o.n=s,l):(v.call(o.p,s),V(e,t))}if(r===t)return D(l,n),l;if(l.f=c,8===c)return O(e,l,t,n);const u=t.d,a=t.p,i=r.p;if(r.d!==u)return I(l,true),V(e,t);if(2===c)640&(f|n)||void 0===u.p2||true!==u.p2(i,a)?l.c=R(l,o,s(a),n):null!==o&&D(o,n);else if(1===c){const e=H,t=e.p,r=u.p1,f=r.f,c=r.d,p=r.p,d=r.c,v=s[0];if(1024&n&&(n^=1024,h.call(t,v,e.n)),j(v,p,c,s,i,a,!!(4096&f)),null!==o){e.p=v,e.n=null;let r=0;for(let t=0;t<d.length;t++){const f=d[t],c=3&f,u=f>>2;0===c?o[r]=R(l,o[r++],a[u],n):1===c?e.n=s[u]:(e.p=s[u],e.n=null)}e.p=t}e.n=v}else 4===c?U(l,i,a,n):(i.v!==a.v&&(n|=512),l.c=R(l,o,a.c,n));return l},V=(e,l)=>{if(false!==l&&null!=l){if("object"===typeof l){if(r(l))return B(e,8,l,l);{const t=l.d,n=l.p,r=t.p1,s=7&t.f;if(1===s){const s=H,f=s.p,c=s.n,u=r,a=u.d,i=u.p,p=u.s,d=u.c,v=u.f,g=t.p2(),m=o(63&v);m[0]=g,p.length>0&&(s.si=0,x(w.call(g),p,0,p.length,m)),j(g,i,a,m,null,n,!!(4096&v));const y=N(1,l,null,e,m);if(d.length>0){const e=o(v>>6&63);y.c=e,s.p=g,s.n=null;let l=0;for(let t=0;t<d.length;t++){const o=d[t],r=3&o,f=o>>2;0===r?e[l++]=V(y,n[f]):1===r?s.n=m[f]:(s.p=m[f],s.n=null)}s.p=f}return s.n=g,h.call(f,g,c),y}if(2===s){const t={f:2,v:l,c:null,p:e,s1:null,s2:null},o=r(t);return t.c=V(t,o(n)),t.s1=o,t}if(4===s)return B(e,4,n.v,l);const f=N(64,l,null,e,null);return f.c=V(f,n.c),f}}if(""!==l){const t=H,n=t.n,o=i.createTextNode(l);return t.n=o,h.call(t.p,o,n),N(16,l,null,e,o)}}return null},D=(e,l)=>{const t=H,n=e.s1,o=e.v,r=e.c,s=e.f,f=127&s;if(e.f=f,1===f){const e=n[0];if(1024&l&&(l^=1024,h.call(t.p,e,t.n)),256&s){t.p=e,t.n=null;const s=t.p,f=o.d.p1.c;let c=0;for(let e=0;e<f.length;e++){const o=f[e],s=3&o,u=o>>2;if(0===s){const e=r[c++];null!==e&&D(e,l)}else 1===s?t.n=n[u]:(t.p=n[u],t.n=null)}t.p=s}t.n=e}else if(16===f)1024&l&&h.call(t.p,n,t.n),t.n=n;else if(2===f)640&(s|l)?e.c=R(e,r,n(o.p),l):null!==r&&D(r,l);else if(64===f)null!==r&&D(r,l);else{let e=r.length;for(;--e>=0;){const t=r[e];null!==t&&D(t,l)}}},I=(e,l)=>{const t=e.f,n=e.c;if(true===l&&17&t&&(l=false,v.call(H.p,1&t?e.s1[0]:e.s1)),2&t){const l=e.s2;if(null!==l)if("function"===typeof l)l();else for(let e=0;e<l.length;e++)l[e]()}if(null!==n)if(r(n))for(let e=0;e<n.length;e++){const t=n[e];null!==t&&I(t,l)}else I(n,l)},U=(e,l,t,n)=>{const r=l.k,c=t.k,u=t.v;let a=c.length,i=r.length;const p=o(a);if(0===a)i>0&&I(e,true);else if(0===i)for(;a>0;)p[--a]=V(e,u[a]);else{const l=e.c;let t=i-1,o=a-1,d=0;e:for(;;){for(;r[t]===c[o];)if(p[o]=R(e,l[t--],u[o],n),d>--o||d>t)break e;for(;r[d]===c[d]&&++d<=t&&d<=o;);break}if(d>t)for(;o>=d;)p[o]=V(e,u[o--]);else if(d>o){a=d;do{const e=l[a++];null!==e&&I(e,true)}while(a<=t)}else{let a=o-d+1;const i=new f(a),h=new s;for(let e=0;e<a;e++){i[e]=-1;const l=d+e;h.set(c[l],l)}let v=0;for(let e=d;e<=t;e++){const t=l[e],n=h.get(r[e]);void 0!==n?(v=v<n?n:1073741823,i[n-d]=e,p[n]=t):null!==t&&I(t,true)}for(1024&n||1073741823!==v||J(i);a-- >0;){o=a+d;const l=u[o],t=i[a];p[o]=-1===t?V(e,l):R(e,p[o],l,n|(1073741823===v&&-2!==t?1024:0))}}for(;d>0;)p[--d]=R(e,l[d],u[d],n)}e.c=p},J=e=>{const l=e.length,t=new f(l),n=new f(l);let o,r,s,c,u=0,a=0;for(;-1===e[a];a++);for(n[0]=a++;a<l;a++)if(r=e[a],-1!==r)if(o=n[u],e[o]<r)t[a]=o,n[++u]=a;else{for(s=0,c=u;s<c;)o=s+c>>1,e[n[o]]<r?s=o+1:c=o;r<e[n[s]]&&(s>0&&(t[a]=n[s-1]),n[s]=a)}for(o=n[u];u-- >=0;)e[o]=-2,o=t[o]},$=e=>()=>("string"===typeof e&&(p.innerHTML=e,e=d.firstChild),g.call(e,true)),q=e=>()=>i.createElement(e),G=(e,l,n,o,r)=>({f:1,p1:{f:l,p:n,c:o,s:r,d:t},p2:e}),X=(e,l)=>({d:e,p:l}),z=(e,l)=>{const t={f:2,p1:e,p2:l};return e=>({d:t,p:e})},F=e=>e.v.p,K=(e,l)=>{const t=e.s2;e.s2=null===t?l:"function"===typeof t?[t,l]:(t.push(l),t)},Q=(e,l,t)=>{var n,o,r;return s=>{true===r||void 0!==t&&void 0!==o&&false!==t(o,s)||(void 0===r&&K(e,(()=>{r=false,void 0!==n&&n()})),r=true,H.e.push((()=>{true===r&&(r=false,void 0!==n&&n(),n=l(s))}))),o=s}},W=e=>{if(!(128&e.f)){e.f|=128;let l=e,t=e.p;for(;null!==t;){if(256&t.f)return;l=t,t.f|=256,t=t.p}l.v.d.p1(l,l.s1)}},Y=(e,l)=>{for(;768&(l|e.f);){const t=H,{p:n,n:o}=t;if(e.f=32,null!==e.c){const t=e.v.p;H.p=t.p,H.n=t.n,D(e.c,l),l=0,P()}t.p=n,t.n=o}},Z=(e,l,t)=>{const n=H,{p:o,n:r}=n,s=e.v.p;n.p=s.p,n.n=s.n,e.f=32,e.c=R(e,e.c,l,t),P(),n.p=o,n.n=r,Y(e,0)},_=(e=>{var l={f:32,p1:e,p2:null};return(e,t=null,n)=>N(32,{d:l,p:{p:e,n:t}},null,null,n)})((e=>{c((()=>{Y(e,0)}))})),ee=(e,l,t)=>{Z(e,l,true===t?512:0)},le=(e,l)=>[()=>l,t=>{t!==l&&(l=t,W(e))}],te=(e,l)=>e===l,ne={f1:{fields:["ID","Route","Run","Operator"],data:[["1","Brown Line","E102","SJones"],["2","UPN","M405","AJohnson"],["3","Hiawatha","A006","LBeck"],["4","Red Line","E432","LHill"],["5","Hiawatha","A005","LBeck"],["6","","M623","ESanders"]]},f2:{fields:["ID","Name"],data:[["1","Vasya"],["2","Sveta"],["3","Sam"]]}};function oe(e,l){return e=Math.ceil(e),l=Math.floor(l),Math.floor(Math.random()*(l-e+1))+e}function re(e){return e.map((e=>{let l=e.slice();return l[0]=`${oe(0,100)}`,l}))}function se(e){console.log(`fakefetch! ${e}`);let l=e.includes("f1")?ne.f1:ne.f2,t={...l,data:re(l.data)};return Promise.resolve({json:()=>Promise.resolve(t)})}const fe=G(q("th"),65,l,e,l),ce=G(q("td"),65,l,e,l),ue=G(q("tr"),65,l,e,l),ae=G($("<div><h3></h3><table><thead><tr></tr></thead><tbody></tbody></table></div>"),196,l,[15,8,11,4,7,0],[1,26,10,1,1]),ie=z((e=>{let[l,t]=le(e,null);const n=Q(e,(l=>{let{url:n}=F(e);se(n).then((e=>e.json())).then(t)}),te);return e=>{n(e.seed);let t=l();return null==t?null:X(ae,[e.cap,t.fields.map((e=>X(fe,[e]))),t.data.map((e=>X(ue,[e.map((e=>X(ce,[e])))])))])}})),pe=G($("<div><strong></strong><button>X</button></div>"),67,[1024,14],[7,0],[1,1]),de=z((e=>e=>X(pe,[e.text,e.dismiss]))),he=G(q("button"),65,[6],[4],l),ve=(e,l)=>X(he,[l,e]),ge=(e,l)=>t=>(void 0!==t&&t!==l&&(l=t,W(e)),l),me=z((e=>{let l=ge(e,0),t=ge(e,0),n=ge(e,false),o=()=>n(false);return()=>[ie({url:"f1",cap:"Routes",seed:l()}),ie({url:"f2",cap:"Operators",seed:t()}),ve("Update Table 1",(()=>l(l()+1))),ve("Update Table 2",(()=>t(t()+1))),ve("Show Alert",(()=>n(true))),n()?de({text:"Error!",dismiss:o}):null]}));ee(_(document.body),me());
//# sourceMappingURL=bundle.js.map