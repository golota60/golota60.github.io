const f={};function L(e){f.context=e}function J(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const K=(e,t)=>e===t,T={equals:K};let j=F;const y=1,v=2,k={owned:null,cleanups:null,context:null,owner:null};var d=null;let b=null,u=null,h=null,p=null,$=0;function Q(e,t){const n=u,s=d,i=e.length===0,l=i?k:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=i?e:()=>e(()=>S(()=>H(l)));d=l,u=null;try{return E(r,!0)}finally{u=n,d=s}}function ue(e,t){t=t?Object.assign({},T,t):T;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Y(n,i));return[I.bind(n),s]}function U(e,t,n){const s=D(e,t,!1,y);A(s)}function Z(e,t,n){j=te;const s=D(e,t,!1,y);s.user=!0,p?p.push(s):A(s)}function ce(e,t,n){n=n?Object.assign({},T,n):T;const s=D(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,A(s),I.bind(s)}function S(e){if(u===null)return e();const t=u;u=null;try{return e()}finally{u=t}}function ae(e){Z(()=>S(e))}function I(){const e=b;if(this.sources&&(this.state||e))if(this.state===y||e)A(this);else{const t=h;h=null,E(()=>C(this),!1),h=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function Y(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=b&&b.running;r&&b.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?h.push(l):p.push(l),l.observers&&R(l)),r||(l.state=y)}if(h.length>1e6)throw h=[],new Error},!1)),t}function A(e){if(!e.fn)return;H(e);const t=d,n=u,s=$;u=d=e,z(e,e.value,s),u=n,d=t}function z(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(H),e.owned=null),e.updatedAt=n+1,V(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Y(e,s):e.value=s,e.updatedAt=n)}function D(e,t,n,s=y,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==k&&(d.owned?d.owned.push(l):d.owned=[l]),l}function m(e){const t=b;if(e.state===0||t)return;if(e.state===v||t)return C(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===y||t)A(e);else if(e.state===v||t){const i=h;h=null,E(()=>C(e,n[0]),!1),h=i}}function E(e,t){if(h)return e();let n=!1;t||(h=[]),p?n=!0:p=[],$++;try{const s=e();return ee(n),s}catch(s){n||(p=null),h=null,V(s)}}function ee(e){if(h&&(F(h),h=null),e)return;const t=p;p=null,t.length&&E(()=>j(t),!1)}function F(e){for(let t=0;t<e.length;t++)m(e[t])}function te(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:m(s)}for(f.context&&L(),t=0;t<n;t++)m(e[t])}function C(e,t){const n=b;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===y||n?i!==t&&(!i.updatedAt||i.updatedAt<$)&&m(i):(i.state===v||n)&&C(i,t))}}function R(e){const t=b;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=v,s.pure?h.push(s):p.push(s),s.observers&&R(s))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ne(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function V(e){throw e=ne(e),e}let G=!1;function se(){G=!0}function he(e,t){if(G&&f.context){const n=f.context;L(J());const s=S(()=>e(t||{}));return L(n),s}return S(()=>e(t||{}))}function ie(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,c=t[i-1].nextSibling,a=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const g=l<s?o?n[o-1].nextSibling:n[l-o]:c;for(;o<l;)e.insertBefore(n[o++],g)}else if(l===o)for(;r<i;)(!a||!a.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const g=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],g),t[i]=n[l]}else{if(!a){a=new Map;let w=o;for(;w<l;)a.set(n[w],w++)}const g=a.get(t[r]);if(g!=null)if(o<g&&g<l){let w=r,M=1,O;for(;++w<i&&w<l&&!((O=a.get(t[w]))==null||O!==g+M);)M++;if(M>g-o){const X=t[r];for(;o<g;)e.insertBefore(n[o++],X)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const _="_$DX_DELEGATE";function oe(e,t,n,s={}){let i;return Q(l=>{i=l,t===document?e():le(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function de(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ge(e,t=window.document){const n=t[_]||(t[_]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,W))}}function pe(e,t){t==null?e.removeAttribute("class"):e.className=t}function ye(e,t,n){return S(()=>e(t,n))}function le(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return N(e,t,s,n);U(i=>N(e,t(),i,n),s)}function re(e,t,n={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=globalThis._$HY.load,f.gather=i=>P(t,i),f.registry=new Map,f.context={id:n.renderId||"",count:0},P(t,n.renderId);const s=oe(e,t,[...t.childNodes],n);return f.context=null,s}function we(e){let t,n;if(!f.context||!(t=f.registry.get(n=fe()))){if(f.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e.cloneNode(!0)}return f.completed&&f.completed.add(t),f.registry.delete(n),t}function be(e){let t=e,n=0,s=[];if(f.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function xe(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=f;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;W(s),t.shift()}}),f.events.queued=!0)}function W(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),f.registry&&!f.done&&(f.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function N(e,t,n,s,i){if(f.context){!n&&(n=[...e.childNodes]);let o=[];for(let c=0;c<n.length;c++){const a=n[c];a.nodeType===8&&a.data==="!"?a.remove():o.push(a)}n=o}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(f.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=x(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(f.context)return n;n=x(e,n,s)}else{if(l==="function")return U(()=>{let o=t();for(;typeof o=="function";)o=o();n=N(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(B(o,t,n,i))return U(()=>n=N(e,o,n,s,!0)),()=>n;if(f.context){if(!o.length)return n;for(let a=0;a<o.length;a++)if(o[a].parentNode)return n=o}if(o.length===0){if(n=x(e,n,s),r)return n}else c?n.length===0?q(e,o,s):ie(e,n,o):(n&&x(e),q(e,o));n=o}else if(t instanceof Node){if(f.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=x(e,n,s,t);x(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function B(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],c=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=B(e,o,c)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=B(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const a=String(o);c&&c.nodeType===3?(c.data=a,e.push(c)):e.push(document.createTextNode(a))}}return i}function q(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function x(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const c=o.parentNode===e;!l&&!r?c?e.replaceChild(i,o):e.insertBefore(i,n):c&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}function P(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],l=i.getAttribute("data-hk");(!t||l.startsWith(t))&&!f.registry.has(l)&&f.registry.set(l,i)}}function fe(){const e=f.context;return`${e.id}${e.count++}`}const Se=(...e)=>(se(),re(...e));export{ce as a,U as b,ue as c,ge as d,pe as e,he as f,we as g,Z as h,le as i,be as j,oe as k,Se as l,ae as o,xe as r,f as s,de as t,ye as u};