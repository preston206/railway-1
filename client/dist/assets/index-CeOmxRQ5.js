var M,d,Te,L,ae,He,te,ce,ne,_e,Re,F={},Le=[],Xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function x(t,e){for(var n in e)t[n]=e[n];return t}function Ue(t){var e=t.parentNode;e&&e.removeChild(t)}function U(t,e,n){var _,r,o,u={};for(o in e)o=="key"?_=e[o]:o=="ref"?r=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?M.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)u[o]===void 0&&(u[o]=t.defaultProps[o]);return B(t,u,_,r,null)}function B(t,e,n,_,r){var o={type:t,props:e,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Te,__i:-1,__u:0};return r==null&&d.vnode!=null&&d.vnode(o),o}function X(t){return t.children}function z(t,e){this.props=t,this.context=e}function A(t,e){if(e==null)return t.__?A(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?A(t):null}function Ae(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Ae(t)}}function re(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!Y.__r++||ae!==d.debounceRendering)&&((ae=d.debounceRendering)||He)(Y)}function Y(){var t,e,n,_,r,o,u,c;for(L.sort(te);t=L.shift();)t.__d&&(e=L.length,_=void 0,o=(r=(n=t).__v).__e,u=[],c=[],n.__P&&((_=x({},r)).__v=r.__v+1,d.vnode&&d.vnode(_),ue(n.__P,_,r,n.__n,n.__P.namespaceURI,32&r.__u?[o]:null,u,o??A(r),!!(32&r.__u),c),_.__v=r.__v,_.__.__k[_.__i]=_,Be(u,_,c),_.__e!=o&&Ae(_)),L.length>e&&L.sort(te));Y.__r=0}function De(t,e,n,_,r,o,u,c,s,l,a){var i,h,f,y,P,k=_&&_.__k||Le,p=e.length;for(n.__d=s,Ze(n,e,k),s=n.__d,i=0;i<p;i++)(f=n.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(h=f.__i===-1?F:k[f.__i]||F,f.__i=i,ue(t,f,h,r,o,u,c,s,l,a),y=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&le(h.ref,null,f),a.push(f.ref,f.__c||y,f)),P==null&&y!=null&&(P=y),65536&f.__u||h.__k===f.__k?s=Ne(f,s,t):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:y&&(s=y.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=s,n.__e=P}function Ze(t,e,n){var _,r,o,u,c,s=e.length,l=n.length,a=l,i=0;for(t.__k=[],_=0;_<s;_++)u=_+i,(r=t.__k[_]=(r=e[_])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?B(null,r,null,null,null):Q(r)?B(X,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?B(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=t,r.__b=t.__b+1,c=Ve(r,n,u,a),r.__i=c,o=null,c!==-1&&(a--,(o=n[c])&&(o.__u|=131072)),o==null||o.__v===null?(c==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):c!==u&&(c==u-1?i--:c==u+1?i++:c>u?a>s-u?i+=c-u:i--:c<u&&(c==u-i?i-=c-u:i++),c!==_+i&&(r.__u|=65536))):(o=n[u])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=A(o)),oe(o,o,!1),n[u]=null,a--);if(a)for(_=0;_<l;_++)(o=n[_])!=null&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=A(o)),oe(o,o))}function Ne(t,e,n){var _,r;if(typeof t.type=="function"){for(_=t.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=t,e=Ne(_[r],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=A(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Ie(t,e){return e=e||[],t==null||typeof t=="boolean"||(Q(t)?t.some(function(n){Ie(n,e)}):e.push(t)),e}function Ve(t,e,n,_){var r=t.key,o=t.type,u=n-1,c=n+1,s=e[n];if(s===null||s&&r==s.key&&o===s.type&&!(131072&s.__u))return n;if(_>(s!=null&&!(131072&s.__u)?1:0))for(;u>=0||c<e.length;){if(u>=0){if((s=e[u])&&!(131072&s.__u)&&r==s.key&&o===s.type)return u;u--}if(c<e.length){if((s=e[c])&&!(131072&s.__u)&&r==s.key&&o===s.type)return c;c++}}return-1}function he(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Xe.test(e)?n:n+"px"}function q(t,e,n,_,r){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||he(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||he(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?_?n.u=_.u:(n.u=ce,t.addEventListener(e,o?_e:ne,o)):t.removeEventListener(e,o?_e:ne,o);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function pe(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=ce++;else if(e.t<n.u)return;return n(d.event?d.event(e):e)}}}function ue(t,e,n,_,r,o,u,c,s,l){var a,i,h,f,y,P,k,p,v,T,w,$,H,O,D,b,C=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),o=[c=e.__e=n.__e]),(a=d.__b)&&a(e);e:if(typeof C=="function")try{if(p=e.props,v="prototype"in C&&C.prototype.render,T=(a=C.contextType)&&_[a.__c],w=a?T?T.props.value:a.__:_,n.__c?k=(i=e.__c=n.__c).__=i.__E:(v?e.__c=i=new C(p,w):(e.__c=i=new z(p,w),i.constructor=C,i.render=tt),T&&T.sub(i),i.props=p,i.state||(i.state={}),i.context=w,i.__n=_,h=i.__d=!0,i.__h=[],i._sb=[]),v&&i.__s==null&&(i.__s=i.state),v&&C.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=x({},i.__s)),x(i.__s,C.getDerivedStateFromProps(p,i.__s))),f=i.props,y=i.state,i.__v=e,h)v&&C.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),v&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(v&&C.getDerivedStateFromProps==null&&p!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(p,w),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(p,i.__s,w)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(i.props=p,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(N){N&&(N.__=e)}),$=0;$<i._sb.length;$++)i.__h.push(i._sb[$]);i._sb=[],i.__h.length&&u.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(p,i.__s,w),v&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,y,P)})}if(i.context=w,i.props=p,i.__P=t,i.__e=!1,H=d.__r,O=0,v){for(i.state=i.__s,i.__d=!1,H&&H(e),a=i.render(i.props,i.state,i.context),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[]}else do i.__d=!1,H&&H(e),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++O<25);i.state=i.__s,i.getChildContext!=null&&(_=x(x({},_),i.getChildContext())),v&&!h&&i.getSnapshotBeforeUpdate!=null&&(P=i.getSnapshotBeforeUpdate(f,y)),De(t,Q(b=a!=null&&a.type===X&&a.key==null?a.props.children:a)?b:[b],e,n,_,r,o,u,c,s,l),i.base=e.__e,e.__u&=-161,i.__h.length&&u.push(i),k&&(i.__E=i.__=null)}catch(N){if(e.__v=null,s||o!=null){for(e.__u|=s?160:32;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,e.__e=c}else e.__e=n.__e,e.__k=n.__k;d.__e(N,e,n)}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=et(n.__e,e,n,_,r,o,u,s,l);(a=d.diffed)&&a(e)}function Be(t,e,n){e.__d=void 0;for(var _=0;_<n.length;_++)le(n[_],n[++_],n[++_]);d.__c&&d.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){d.__e(o,r.__v)}})}function et(t,e,n,_,r,o,u,c,s){var l,a,i,h,f,y,P,k=n.props,p=e.props,v=e.type;if(v==="svg"?r="http://www.w3.org/2000/svg":v==="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((f=o[l])&&"setAttribute"in f==!!v&&(v?f.localName===v:f.nodeType===3)){t=f,o[l]=null;break}}if(t==null){if(v===null)return document.createTextNode(p);t=document.createElementNS(r,v,p.is&&p),o=null,c=!1}if(v===null)k===p||c&&t.data===p||(t.data=p);else{if(o=o&&M.call(t.childNodes),k=n.props||F,!c&&o!=null)for(k={},l=0;l<t.attributes.length;l++)k[(f=t.attributes[l]).name]=f.value;for(l in k)if(f=k[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=f;else if(l!=="key"&&!(l in p)){if(l=="value"&&"defaultValue"in p||l=="checked"&&"defaultChecked"in p)continue;q(t,l,null,f,r)}}for(l in p)f=p[l],l=="children"?h=f:l=="dangerouslySetInnerHTML"?a=f:l=="value"?y=f:l=="checked"?P=f:l==="key"||c&&typeof f!="function"||k[l]===f||q(t,l,f,k[l],r);if(a)c||i&&(a.__html===i.__html||a.__html===t.innerHTML)||(t.innerHTML=a.__html),e.__k=[];else if(i&&(t.innerHTML=""),De(t,Q(h)?h:[h],e,n,_,v==="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,u,o?o[0]:n.__k&&A(n,0),c,s),o!=null)for(l=o.length;l--;)o[l]!=null&&Ue(o[l]);c||(l="value",y!==void 0&&(y!==t[l]||v==="progress"&&!y||v==="option"&&y!==k[l])&&q(t,l,y,k[l],r),l="checked",P!==void 0&&P!==t[l]&&q(t,l,P,k[l],r))}return t}function le(t,e,n){try{if(typeof t=="function"){var _=typeof t.__u=="function";_&&t.__u(),_&&e==null||(t.__u=t(e))}else t.current=e}catch(r){d.__e(r,n)}}function oe(t,e,n){var _,r;if(d.unmount&&d.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||le(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){d.__e(o,e)}_.base=_.__P=null}if(_=t.__k)for(r=0;r<_.length;r++)_[r]&&oe(_[r],e,n||typeof t.type!="function");n||t.__e==null||Ue(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function tt(t,e,n){return this.constructor(t,n)}function Fe(t,e,n){var _,r,o,u;d.__&&d.__(t,e),r=(_=typeof n=="function")?null:n&&n.__k||e.__k,o=[],u=[],ue(e,t=(!_&&n||e).__k=U(X,null,[t]),r||F,F,e.namespaceURI,!_&&n?[n]:r?null:e.firstChild?M.call(e.childNodes):null,o,!_&&n?n:r?r.__e:e.firstChild,_,u),Be(o,t,u)}function Me(t,e){Fe(t,e,Me)}function de(t,e,n){var _,r,o,u,c=x({},t.props);for(o in t.type&&t.type.defaultProps&&(u=t.type.defaultProps),e)o=="key"?_=e[o]:o=="ref"?r=e[o]:c[o]=e[o]===void 0&&u!==void 0?u[o]:e[o];return arguments.length>2&&(c.children=arguments.length>3?M.call(arguments,2):n),B(t.type,c,_||t.key,r||t.ref,null)}function We(t,e){var n={__c:e="__cC"+Re++,__:t,Consumer:function(_,r){return _.children(r)},Provider:function(_){var r,o;return this.getChildContext||(r=[],(o={})[e]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&r.some(function(c){c.__e=!0,re(c)})},this.sub=function(u){r.push(u);var c=u.componentWillUnmount;u.componentWillUnmount=function(){r&&r.splice(r.indexOf(u),1),c&&c.call(u)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}M=Le.slice,d={__e:function(t,e,n,_){for(var r,o,u;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),u=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,_||{}),u=r.__d),u)return r.__E=r}catch(c){t=c}throw t}},Te=0,z.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},n),this.props)),t&&x(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),re(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),re(this))},z.prototype.render=X,L=[],He=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,te=function(t,e){return t.__v.__b-e.__v.__b},Y.__r=0,ce=0,ne=pe(!1),_e=pe(!0),Re=0;var nt=0;function m(t,e,n,_,r,o){e||(e={});var u,c,s=e;if("ref"in s)for(c in s={},e)c=="ref"?u=e[c]:s[c]=e[c];var l={type:t,props:s,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--nt,__i:-1,__u:0,__source:r,__self:o};if(typeof t=="function"&&(u=t.defaultProps))for(c in u)s[c]===void 0&&(s[c]=u[c]);return d.vnode&&d.vnode(l),l}const _t="modulepreload",rt=function(t){return"/"+t},ve={},ot=function(e,n,_){let r=Promise.resolve();if(n&&n.length>0&&typeof window<"u"){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),u=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.all(n.map(c=>{if(c=rt(c),c in ve)return;ve[c]=!0;const s=c.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":_t,s||(a.as="script",a.crossOrigin=""),a.href=c,u&&a.setAttribute("nonce",u),document.head.appendChild(a),s)return new Promise((i,h)=>{a.addEventListener("load",i),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>e()).catch(o=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=o,window.dispatchEvent(u),!u.defaultPrevented)throw o})};var I,g,V,me,J=0,Oe=[],E=d,ye=E.__b,ge=E.__r,ke=E.diffed,be=E.__c,Ee=E.unmount,Ce=E.__;function Z(t,e){E.__h&&E.__h(g,t,J||e),J=0;var n=g.__H||(g.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function qe(t){return J=1,se(Ke,t)}function se(t,e,n){var _=Z(I++,2);if(_.t=t,!_.__c&&(_.__=[Ke(void 0,e),function(c){var s=_.__N?_.__N[0]:_.__[0],l=_.t(s,c);s!==l&&(_.__N=[l,_.__[1]],_.__c.setState({}))}],_.__c=g,!g.u)){var r=function(c,s,l){if(!_.__c.__H)return!0;var a=_.__c.__H.__.filter(function(h){return!!h.__c});if(a.every(function(h){return!h.__N}))return!o||o.call(this,c,s,l);var i=!1;return a.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(i=!0)}}),!(!i&&_.__c.props===c)&&(!o||o.call(this,c,s,l))};g.u=!0;var o=g.shouldComponentUpdate,u=g.componentWillUpdate;g.componentWillUpdate=function(c,s,l){if(this.__e){var a=o;o=void 0,r(c,s,l),o=a}u&&u.call(this,c,s,l)},g.shouldComponentUpdate=r}return _.__N||_.__}function Ge(t,e){var n=Z(I++,4);!E.__s&&ze(n.__H,e)&&(n.__=t,n.i=e,g.__h.push(n))}function S(t){return J=5,fe(function(){return{current:t}},[])}function fe(t,e){var n=Z(I++,7);return ze(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function je(t){var e=g.context[t.__c],n=Z(I++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(g)),e.props.value):t.__}function it(){for(var t;t=Oe.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(K),t.__H.__h.forEach(ie),t.__H.__h=[]}catch(e){t.__H.__h=[],E.__e(e,t.__v)}}E.__b=function(t){g=null,ye&&ye(t)},E.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Ce&&Ce(t,e)},E.__r=function(t){ge&&ge(t),I=0;var e=(g=t.__c).__H;e&&(V===g?(e.__h=[],g.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(K),e.__h.forEach(ie),e.__h=[],I=0)),V=g},E.diffed=function(t){ke&&ke(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Oe.push(e)!==1&&me===E.requestAnimationFrame||((me=E.requestAnimationFrame)||ct)(it)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),V=g=null},E.__c=function(t,e){e.some(function(n){try{n.__h.forEach(K),n.__h=n.__h.filter(function(_){return!_.__||ie(_)})}catch(_){e.some(function(r){r.__h&&(r.__h=[])}),e=[],E.__e(_,n.__v)}}),be&&be(t,e)},E.unmount=function(t){Ee&&Ee(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{K(_)}catch(r){e=r}}),n.__H=void 0,e&&E.__e(e,n.__v))};var Pe=typeof requestAnimationFrame=="function";function ct(t){var e,n=function(){clearTimeout(_),Pe&&cancelAnimationFrame(e),setTimeout(t)},_=setTimeout(n,100);Pe&&(e=requestAnimationFrame(n))}function K(t){var e=g,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),g=e}function ie(t){var e=g;t.__c=t.__(),g=e}function ze(t,e){return!t||t.length!==e.length||e.some(function(n,_){return n!==t[_]})}function Ke(t,e){return typeof e=="function"?e(t):e}let R;const ut=(t,e)=>{if(R=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return t;const n=e.target.closest("a[href]");if(!n||n.origin!=location.origin||/^#/.test(n.getAttribute("href"))||!/^(_?self)?$/i.test(n.target))return t;R=!0,e.preventDefault(),e=n.href.replace(location.origin,"")}else typeof e=="string"?R=!0:e&&e.url?(R=!e.replace,e=e.url):e=location.pathname+location.search;return R===!0?history.pushState(null,"",e):R===!1&&history.replaceState(null,"",e),e},lt=(t,e,n)=>{t=t.split("/").filter(Boolean),e=(e||"").split("/").filter(Boolean);for(let _=0,r,o;_<Math.max(t.length,e.length);_++){let[,u,c,s]=(e[_]||"").match(/^(:?)(.*?)([+*?]?)$/);if(r=t[_],!(!u&&c==r)){if(!u&&r&&s=="*"){n.rest="/"+t.slice(_).map(decodeURIComponent).join("/");break}if(!u||!r&&s!="?"&&s!="*")return;if(o=s=="+"||s=="*",o?r=t.slice(_).map(decodeURIComponent).join("/"):r&&(r=decodeURIComponent(r)),n.params[c]=r,c in n||(n[c]=r),o)break}}return n};function W(t){const[e,n]=se(ut,t.url||location.pathname+location.search),_=R===!0,r=fe(()=>{const o=new URL(e,location.origin),u=o.pathname.replace(/(.)\/$/g,"$1");return{url:e,path:u,query:Object.fromEntries(o.searchParams),route:(c,s)=>n({url:c,replace:s}),wasPush:_}},[e]);return Ge(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)}),[]),U(W.ctx.Provider,{value:r},t.children)}const st=Promise.resolve();function Ye(t){const[e,n]=se(b=>b+1,0),{url:_,query:r,wasPush:o,path:u}=Je(),{rest:c=u,params:s={}}=je(we),l=S(!1),a=S(u),i=S(0),h=S(),f=S(),y=S(),P=S(!1),k=S();k.current=!1;const p=S(!1);let v,T,w;Ie(t.children).some(b=>{if(lt(c,b.props.path,w={...b.props,path:c,query:r,params:s,rest:""}))return v=de(b,w);b.props.default&&(T=de(b,w))});let $=v||T;fe(()=>{f.current=h.current;const b=f.current&&f.current.props.children;!b||!$||$.type!==b.type||$.props.component!==b.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),i.current++,p.current=!0):p.current=!1},[_]);const H=h.current&&h.current.__u&G&&h.current.__u&j,O=h.current&&h.current.__h;h.current=U(we.Provider,{value:w},$),H?(h.current.__u|=G,h.current.__u|=j):O&&(h.current.__h=!0);const D=f.current;return f.current=null,this.__c=(b,C)=>{k.current=!0,f.current=D,t.onLoadStart&&t.onLoadStart(_),l.current=!0;let N=i.current;b.then(()=>{N===i.current&&(f.current=null,h.current&&(C.__h&&(h.current.__h=C.__h),C.__u&j&&(h.current.__u|=j),C.__u&G&&(h.current.__u|=G)),st.then(n))})},Ge(()=>{const b=this.__v&&this.__v.__e;if(k.current){!P.current&&!y.current&&(y.current=b);return}!P.current&&y.current&&(y.current!==b&&y.current.remove(),y.current=null),P.current=!0,a.current!==u&&(o&&scrollTo(0,0),t.onRouteChange&&t.onRouteChange(_),a.current=u),t.onLoadEnd&&l.current&&t.onLoadEnd(_),l.current=!1},[u,o,e]),p.current?[U(ee,{r:h}),U(ee,{r:f})]:U(ee,{r:h})}const G=32,j=128,ee=({r:t})=>t.current;Ye.Provider=W;W.ctx=We({});const we=We({}),$e=t=>U(t.component,t),Je=()=>je(W.ctx),Se=d.__e;d.__e=(t,e,n)=>{if(t&&t.then){let _=e;for(;_=_.__;)if(_.__c&&_.__c.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),e.__k||(e.__k=[]),_.__c.__c(t,e)}Se&&Se(t,e,n)};let xe;function ft(t,e){if(typeof window>"u")return;let n=document.querySelector("script[type=isodata]");e=e||n&&n.parentNode||document.body,!xe&&n?Me(t,e):Fe(t,e),xe=!0}function at(t,e){return ot(()=>import("./prerender-Br8SzBeV.js"),[]).then(n=>n.default(t,e))}function ht(){const{url:t}=Je();return m("header",{children:m("nav",{children:[m("a",{href:"/",class:t=="/"&&"active",children:"Home"}),m("a",{href:"/404",class:t=="/404"&&"active",children:"404"})]})})}const pt=()=>{const[t,e]=qe();return m("article",{class:"api-tester",children:[m("button",{onClick:()=>{fetch("/api/test").then(_=>_.json()).then(_=>{console.log("---GENERAL API TESTER - DATA",_.document),e(_.document.name)}).catch(_=>console.error("GENERAL API TESTER ERROR",_))},type:"button",children:"General API Tester"}),m("p",{class:"result",children:t})]})},dt=()=>{const[t,e]=qe();return m("article",{class:"api-tester api-tester--dish-by-name",children:[m("input",{type:"text",id:"by_name_input"}),m("button",{onClick:()=>{const _=document.querySelector("#by_name_input");console.log("---INPUT VAL",_.value),_.value&&fetch(`/api/dishByName/${_.value}`).then(r=>r.json()).then(r=>{r.document.error?e(r.document.error):e(r.document.name)}).catch(r=>console.error("GET BY NAME ERROR",r))},type:"button",children:"Get By Name"}),m("p",{class:"result",children:t})]})};function vt(){return m("div",{class:"container",children:[m(pt,{}),m(dt,{})]})}function mt(){return m("section",{children:[m("h1",{children:"404: Not Found"}),m("p",{children:"It's gone :("})]})}function Qe(){return m(W,{children:[m(ht,{}),m("main",{children:m(Ye,{children:[m($e,{path:"/",component:vt}),m($e,{default:!0,component:mt})]})})]})}typeof window<"u"&&ft(m(Qe,{}),document.getElementById("app"));async function yt(t){return await at(m(Qe,{...t}))}export{Qe as App,de as E,U as _,X as k,d as l,yt as prerender};
