var M,d,Le,R,he,Ue,te,ce,_e,ne,Re,I={},Te=[],Qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,X=Array.isArray;function x(t,e){for(var _ in e)t[_]=e[_];return t}function De(t){var e=t.parentNode;e&&e.removeChild(t)}function T(t,e,_){var n,r,o,u={};for(o in e)o=="key"?n=e[o]:o=="ref"?r=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?M.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)u[o]===void 0&&(u[o]=t.defaultProps[o]);return F(t,u,n,r,null)}function F(t,e,_,n,r){var o={type:t,props:e,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Le,__i:-1,__u:0};return r==null&&d.vnode!=null&&d.vnode(o),o}function Z(t){return t.children}function K(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?D(t):null}function Ae(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return Ae(t)}}function re(t){(!t.__d&&(t.__d=!0)&&R.push(t)&&!J.__r++||he!==d.debounceRendering)&&((he=d.debounceRendering)||Ue)(J)}function J(){var t,e,_,n,r,o,u,c;for(R.sort(te);t=R.shift();)t.__d&&(e=R.length,n=void 0,o=(r=(_=t).__v).__e,u=[],c=[],_.__P&&((n=x({},r)).__v=r.__v+1,d.vnode&&d.vnode(n),ue(_.__P,n,r,_.__n,_.__P.namespaceURI,32&r.__u?[o]:null,u,o??D(r),!!(32&r.__u),c),n.__v=r.__v,n.__.__k[n.__i]=n,Ie(u,n,c),n.__e!=o&&Ae(n)),R.length>e&&R.sort(te));J.__r=0}function Be(t,e,_,n,r,o,u,c,s,l,a){var i,h,f,m,C,g=n&&n.__k||Te,p=e.length;for(_.__d=s,Xe(_,e,g),s=_.__d,i=0;i<p;i++)(f=_.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(h=f.__i===-1?I:g[f.__i]||I,f.__i=i,ue(t,f,h,r,o,u,c,s,l,a),m=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&le(h.ref,null,f),a.push(f.ref,f.__c||m,f)),C==null&&m!=null&&(C=m),65536&f.__u||h.__k===f.__k?s=Ne(f,s,t):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:m&&(s=m.nextSibling),f.__d=void 0,f.__u&=-196609);_.__d=s,_.__e=C}function Xe(t,e,_){var n,r,o,u,c,s=e.length,l=_.length,a=l,i=0;for(t.__k=[],n=0;n<s;n++)u=n+i,(r=t.__k[n]=(r=e[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?F(null,r,null,null,null):X(r)?F(Z,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?F(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=t,r.__b=t.__b+1,c=Ze(r,_,u,a),r.__i=c,o=null,c!==-1&&(a--,(o=_[c])&&(o.__u|=131072)),o==null||o.__v===null?(c==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):c!==u&&(c==u-1?i--:c==u+1?i++:c>u?a>s-u?i+=c-u:i--:c<u&&(c==u-i?i-=c-u:i++),c!==n+i&&(r.__u|=65536))):(o=_[u])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=D(o)),oe(o,o,!1),_[u]=null,a--);if(a)for(n=0;n<l;n++)(o=_[n])!=null&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=D(o)),oe(o,o))}function Ne(t,e,_){var n,r;if(typeof t.type=="function"){for(n=t.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=t,e=Ne(n[r],e,_));return e}t.__e!=e&&(e&&t.type&&!_.contains(e)&&(e=D(t)),_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Fe(t,e){return e=e||[],t==null||typeof t=="boolean"||(X(t)?t.some(function(_){Fe(_,e)}):e.push(t)),e}function Ze(t,e,_,n){var r=t.key,o=t.type,u=_-1,c=_+1,s=e[_];if(s===null||s&&r==s.key&&o===s.type&&!(131072&s.__u))return _;if(n>(s!=null&&!(131072&s.__u)?1:0))for(;u>=0||c<e.length;){if(u>=0){if((s=e[u])&&!(131072&s.__u)&&r==s.key&&o===s.type)return u;u--}if(c<e.length){if((s=e[c])&&!(131072&s.__u)&&r==s.key&&o===s.type)return c;c++}}return-1}function pe(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||Qe.test(e)?_:_+"px"}function j(t,e,_,n,r){var o;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)_&&e in _||pe(t.style,e,"");if(_)for(e in _)n&&_[e]===n[e]||pe(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=_,_?n?_.u=n.u:(_.u=ce,t.addEventListener(e,o?ne:_e,o)):t.removeEventListener(e,o?ne:_e,o);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&_==1?"":_))}}function de(t){return function(e){if(this.l){var _=this.l[e.type+t];if(e.t==null)e.t=ce++;else if(e.t<_.u)return;return _(d.event?d.event(e):e)}}}function ue(t,e,_,n,r,o,u,c,s,l){var a,i,h,f,m,C,g,p,v,H,P,$,L,q,B,E,w=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(s=!!(32&_.__u),o=[c=e.__e=_.__e]),(a=d.__b)&&a(e);e:if(typeof w=="function")try{if(p=e.props,v="prototype"in w&&w.prototype.render,H=(a=w.contextType)&&n[a.__c],P=a?H?H.props.value:a.__:n,_.__c?g=(i=e.__c=_.__c).__=i.__E:(v?e.__c=i=new w(p,P):(e.__c=i=new K(p,P),i.constructor=w,i.render=et),H&&H.sub(i),i.props=p,i.state||(i.state={}),i.context=P,i.__n=n,h=i.__d=!0,i.__h=[],i._sb=[]),v&&i.__s==null&&(i.__s=i.state),v&&w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=x({},i.__s)),x(i.__s,w.getDerivedStateFromProps(p,i.__s))),f=i.props,m=i.state,i.__v=e,h)v&&w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),v&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(v&&w.getDerivedStateFromProps==null&&p!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(p,P),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(p,i.__s,P)===!1||e.__v===_.__v)){for(e.__v!==_.__v&&(i.props=p,i.state=i.__s,i.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(N){N&&(N.__=e)}),$=0;$<i._sb.length;$++)i.__h.push(i._sb[$]);i._sb=[],i.__h.length&&u.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(p,i.__s,P),v&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,m,C)})}if(i.context=P,i.props=p,i.__P=t,i.__e=!1,L=d.__r,q=0,v){for(i.state=i.__s,i.__d=!1,L&&L(e),a=i.render(i.props,i.state,i.context),B=0;B<i._sb.length;B++)i.__h.push(i._sb[B]);i._sb=[]}else do i.__d=!1,L&&L(e),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++q<25);i.state=i.__s,i.getChildContext!=null&&(n=x(x({},n),i.getChildContext())),v&&!h&&i.getSnapshotBeforeUpdate!=null&&(C=i.getSnapshotBeforeUpdate(f,m)),Be(t,X(E=a!=null&&a.type===Z&&a.key==null?a.props.children:a)?E:[E],e,_,n,r,o,u,c,s,l),i.base=e.__e,e.__u&=-161,i.__h.length&&u.push(i),g&&(i.__E=i.__=null)}catch(N){if(e.__v=null,s||o!=null){for(e.__u|=s?160:32;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,e.__e=c}else e.__e=_.__e,e.__k=_.__k;d.__e(N,e,_)}else o==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=Ve(_.__e,e,_,n,r,o,u,s,l);(a=d.diffed)&&a(e)}function Ie(t,e,_){e.__d=void 0;for(var n=0;n<_.length;n++)le(_[n],_[++n],_[++n]);d.__c&&d.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){d.__e(o,r.__v)}})}function Ve(t,e,_,n,r,o,u,c,s){var l,a,i,h,f,m,C,g=_.props,p=e.props,v=e.type;if(v==="svg"?r="http://www.w3.org/2000/svg":v==="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((f=o[l])&&"setAttribute"in f==!!v&&(v?f.localName===v:f.nodeType===3)){t=f,o[l]=null;break}}if(t==null){if(v===null)return document.createTextNode(p);t=document.createElementNS(r,v,p.is&&p),o=null,c=!1}if(v===null)g===p||c&&t.data===p||(t.data=p);else{if(o=o&&M.call(t.childNodes),g=_.props||I,!c&&o!=null)for(g={},l=0;l<t.attributes.length;l++)g[(f=t.attributes[l]).name]=f.value;for(l in g)if(f=g[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=f;else if(l!=="key"&&!(l in p)){if(l=="value"&&"defaultValue"in p||l=="checked"&&"defaultChecked"in p)continue;j(t,l,null,f,r)}}for(l in p)f=p[l],l=="children"?h=f:l=="dangerouslySetInnerHTML"?a=f:l=="value"?m=f:l=="checked"?C=f:l==="key"||c&&typeof f!="function"||g[l]===f||j(t,l,f,g[l],r);if(a)c||i&&(a.__html===i.__html||a.__html===t.innerHTML)||(t.innerHTML=a.__html),e.__k=[];else if(i&&(t.innerHTML=""),Be(t,X(h)?h:[h],e,_,n,v==="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,u,o?o[0]:_.__k&&D(_,0),c,s),o!=null)for(l=o.length;l--;)o[l]!=null&&De(o[l]);c||(l="value",m!==void 0&&(m!==t[l]||v==="progress"&&!m||v==="option"&&m!==g[l])&&j(t,l,m,g[l],r),l="checked",C!==void 0&&C!==t[l]&&j(t,l,C,g[l],r))}return t}function le(t,e,_){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(r){d.__e(r,_)}}function oe(t,e,_){var n,r;if(d.unmount&&d.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||le(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){d.__e(o,e)}n.base=n.__P=null}if(n=t.__k)for(r=0;r<n.length;r++)n[r]&&oe(n[r],e,_||typeof t.type!="function");_||t.__e==null||De(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function et(t,e,_){return this.constructor(t,_)}function Me(t,e,_){var n,r,o,u;d.__&&d.__(t,e),r=(n=typeof _=="function")?null:_&&_.__k||e.__k,o=[],u=[],ue(e,t=(!n&&_||e).__k=T(Z,null,[t]),r||I,I,e.namespaceURI,!n&&_?[_]:r?null:e.firstChild?M.call(e.childNodes):null,o,!n&&_?_:r?r.__e:e.firstChild,n,u),Ie(o,t,u)}function We(t,e){Me(t,e,We)}function ve(t,e,_){var n,r,o,u,c=x({},t.props);for(o in t.type&&t.type.defaultProps&&(u=t.type.defaultProps),e)o=="key"?n=e[o]:o=="ref"?r=e[o]:c[o]=e[o]===void 0&&u!==void 0?u[o]:e[o];return arguments.length>2&&(c.children=arguments.length>3?M.call(arguments,2):_),F(t.type,c,n||t.key,r||t.ref,null)}function Oe(t,e){var _={__c:e="__cC"+Re++,__:t,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,o;return this.getChildContext||(r=[],(o={})[e]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&r.some(function(c){c.__e=!0,re(c)})},this.sub=function(u){r.push(u);var c=u.componentWillUnmount;u.componentWillUnmount=function(){r&&r.splice(r.indexOf(u),1),c&&c.call(u)}}),n.children}};return _.Provider.__=_.Consumer.contextType=_}M=Te.slice,d={__e:function(t,e,_,n){for(var r,o,u;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),u=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,n||{}),u=r.__d),u)return r.__E=r}catch(c){t=c}throw t}},Le=0,K.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},_),this.props)),t&&x(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),re(this))},K.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),re(this))},K.prototype.render=Z,R=[],Ue=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,te=function(t,e){return t.__v.__b-e.__v.__b},J.__r=0,ce=0,_e=de(!1),ne=de(!0),Re=0;var tt=0;function b(t,e,_,n,r,o){e||(e={});var u,c,s=e;if("ref"in s)for(c in s={},e)c=="ref"?u=e[c]:s[c]=e[c];var l={type:t,props:s,key:_,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--tt,__i:-1,__u:0,__source:r,__self:o};if(typeof t=="function"&&(u=t.defaultProps))for(c in u)s[c]===void 0&&(s[c]=u[c]);return d.vnode&&d.vnode(l),l}const _t="modulepreload",nt=function(t){return"/"+t},me={},rt=function(e,_,n){let r=Promise.resolve();if(_&&_.length>0&&typeof window<"u"){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),u=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.all(_.map(c=>{if(c=nt(c),c in me)return;me[c]=!0;const s=c.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":_t,s||(a.as="script",a.crossOrigin=""),a.href=c,u&&a.setAttribute("nonce",u),document.head.appendChild(a),s)return new Promise((i,h)=>{a.addEventListener("load",i),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>e()).catch(o=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=o,window.dispatchEvent(u),!u.defaultPrevented)throw o})};var A,y,V,ye,Q=0,qe=[],k=d,ge=k.__b,ke=k.__r,be=k.diffed,Ee=k.__c,we=k.unmount,Ce=k.__;function W(t,e){k.__h&&k.__h(y,t,Q||e),Q=0;var _=y.__H||(y.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function ot(t){return Q=1,se(Ge,t)}function se(t,e,_){var n=W(A++,2);if(n.t=t,!n.__c&&(n.__=[Ge(void 0,e),function(c){var s=n.__N?n.__N[0]:n.__[0],l=n.t(s,c);s!==l&&(n.__N=[l,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.u)){var r=function(c,s,l){if(!n.__c.__H)return!0;var a=n.__c.__H.__.filter(function(h){return!!h.__c});if(a.every(function(h){return!h.__N}))return!o||o.call(this,c,s,l);var i=!1;return a.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(i=!0)}}),!(!i&&n.__c.props===c)&&(!o||o.call(this,c,s,l))};y.u=!0;var o=y.shouldComponentUpdate,u=y.componentWillUpdate;y.componentWillUpdate=function(c,s,l){if(this.__e){var a=o;o=void 0,r(c,s,l),o=a}u&&u.call(this,c,s,l)},y.shouldComponentUpdate=r}return n.__N||n.__}function it(t,e){var _=W(A++,3);!k.__s&&ae(_.__H,e)&&(_.__=t,_.i=e,y.__H.__h.push(_))}function je(t,e){var _=W(A++,4);!k.__s&&ae(_.__H,e)&&(_.__=t,_.i=e,y.__h.push(_))}function S(t){return Q=5,fe(function(){return{current:t}},[])}function fe(t,e){var _=W(A++,7);return ae(_.__H,e)&&(_.__=t(),_.__H=e,_.__h=t),_.__}function ze(t){var e=y.context[t.__c],_=W(A++,9);return _.c=t,e?(_.__==null&&(_.__=!0,e.sub(y)),e.props.value):t.__}function ct(){for(var t;t=qe.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Y),t.__H.__h.forEach(ie),t.__H.__h=[]}catch(e){t.__H.__h=[],k.__e(e,t.__v)}}k.__b=function(t){y=null,ge&&ge(t)},k.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Ce&&Ce(t,e)},k.__r=function(t){ke&&ke(t),A=0;var e=(y=t.__c).__H;e&&(V===y?(e.__h=[],y.__h=[],e.__.forEach(function(_){_.__N&&(_.__=_.__N),_.i=_.__N=void 0})):(e.__h.forEach(Y),e.__h.forEach(ie),e.__h=[],A=0)),V=y},k.diffed=function(t){be&&be(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(qe.push(e)!==1&&ye===k.requestAnimationFrame||((ye=k.requestAnimationFrame)||ut)(ct)),e.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.i=void 0})),V=y=null},k.__c=function(t,e){e.some(function(_){try{_.__h.forEach(Y),_.__h=_.__h.filter(function(n){return!n.__||ie(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],k.__e(n,_.__v)}}),Ee&&Ee(t,e)},k.unmount=function(t){we&&we(t);var e,_=t.__c;_&&_.__H&&(_.__H.__.forEach(function(n){try{Y(n)}catch(r){e=r}}),_.__H=void 0,e&&k.__e(e,_.__v))};var Pe=typeof requestAnimationFrame=="function";function ut(t){var e,_=function(){clearTimeout(n),Pe&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(_,100);Pe&&(e=requestAnimationFrame(_))}function Y(t){var e=y,_=t.__c;typeof _=="function"&&(t.__c=void 0,_()),y=e}function ie(t){var e=y;t.__c=t.__(),y=e}function ae(t,e){return!t||t.length!==e.length||e.some(function(_,n){return _!==t[n]})}function Ge(t,e){return typeof e=="function"?e(t):e}let U;const lt=(t,e)=>{if(U=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return t;const _=e.target.closest("a[href]");if(!_||_.origin!=location.origin||/^#/.test(_.getAttribute("href"))||!/^(_?self)?$/i.test(_.target))return t;U=!0,e.preventDefault(),e=_.href.replace(location.origin,"")}else typeof e=="string"?U=!0:e&&e.url?(U=!e.replace,e=e.url):e=location.pathname+location.search;return U===!0?history.pushState(null,"",e):U===!1&&history.replaceState(null,"",e),e},st=(t,e,_)=>{t=t.split("/").filter(Boolean),e=(e||"").split("/").filter(Boolean);for(let n=0,r,o;n<Math.max(t.length,e.length);n++){let[,u,c,s]=(e[n]||"").match(/^(:?)(.*?)([+*?]?)$/);if(r=t[n],!(!u&&c==r)){if(!u&&r&&s=="*"){_.rest="/"+t.slice(n).map(decodeURIComponent).join("/");break}if(!u||!r&&s!="?"&&s!="*")return;if(o=s=="+"||s=="*",o?r=t.slice(n).map(decodeURIComponent).join("/"):r&&(r=decodeURIComponent(r)),_.params[c]=r,c in _||(_[c]=r),o)break}}return _};function O(t){const[e,_]=se(lt,t.url||location.pathname+location.search),n=U===!0,r=fe(()=>{const o=new URL(e,location.origin),u=o.pathname.replace(/(.)\/$/g,"$1");return{url:e,path:u,query:Object.fromEntries(o.searchParams),route:(c,s)=>_({url:c,replace:s}),wasPush:n}},[e]);return je(()=>(addEventListener("click",_),addEventListener("popstate",_),()=>{removeEventListener("click",_),removeEventListener("popstate",_)}),[]),T(O.ctx.Provider,{value:r},t.children)}const ft=Promise.resolve();function Ke(t){const[e,_]=se(E=>E+1,0),{url:n,query:r,wasPush:o,path:u}=Ye(),{rest:c=u,params:s={}}=ze($e),l=S(!1),a=S(u),i=S(0),h=S(),f=S(),m=S(),C=S(!1),g=S();g.current=!1;const p=S(!1);let v,H,P;Fe(t.children).some(E=>{if(st(c,E.props.path,P={...E.props,path:c,query:r,params:s,rest:""}))return v=ve(E,P);E.props.default&&(H=ve(E,P))});let $=v||H;fe(()=>{f.current=h.current;const E=f.current&&f.current.props.children;!E||!$||$.type!==E.type||$.props.component!==E.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),i.current++,p.current=!0):p.current=!1},[n]);const L=h.current&&h.current.__u&z&&h.current.__u&G,q=h.current&&h.current.__h;h.current=T($e.Provider,{value:P},$),L?(h.current.__u|=z,h.current.__u|=G):q&&(h.current.__h=!0);const B=f.current;return f.current=null,this.__c=(E,w)=>{g.current=!0,f.current=B,t.onLoadStart&&t.onLoadStart(n),l.current=!0;let N=i.current;E.then(()=>{N===i.current&&(f.current=null,h.current&&(w.__h&&(h.current.__h=w.__h),w.__u&G&&(h.current.__u|=G),w.__u&z&&(h.current.__u|=z)),ft.then(_))})},je(()=>{const E=this.__v&&this.__v.__e;if(g.current){!C.current&&!m.current&&(m.current=E);return}!C.current&&m.current&&(m.current!==E&&m.current.remove(),m.current=null),C.current=!0,a.current!==u&&(o&&scrollTo(0,0),t.onRouteChange&&t.onRouteChange(n),a.current=u),t.onLoadEnd&&l.current&&t.onLoadEnd(n),l.current=!1},[u,o,e]),p.current?[T(ee,{r:h}),T(ee,{r:f})]:T(ee,{r:h})}const z=32,G=128,ee=({r:t})=>t.current;Ke.Provider=O;O.ctx=Oe({});const $e=Oe({}),Se=t=>T(t.component,t),Ye=()=>ze(O.ctx),xe=d.__e;d.__e=(t,e,_)=>{if(t&&t.then){let n=e;for(;n=n.__;)if(n.__c&&n.__c.__c)return e.__e==null&&(e.__e=_.__e,e.__k=_.__k),e.__k||(e.__k=[]),n.__c.__c(t,e)}xe&&xe(t,e,_)};let He;function at(t,e){if(typeof window>"u")return;let _=document.querySelector("script[type=isodata]");e=e||_&&_.parentNode||document.body,!He&&_?We(t,e):Me(t,e),He=!0}function ht(t,e){return rt(()=>import("./prerender-Cmh14Q-m.js"),[]).then(_=>_.default(t,e))}function pt(){const{url:t}=Ye();return b("header",{children:b("nav",{children:[b("a",{href:"/",class:t=="/"&&"active",children:"Home"}),b("a",{href:"/404",class:t=="/404"&&"active",children:"404"})]})})}const dt=()=>{const[t,e]=ot();return b("section",{children:b("div",{children:[b("button",{onClick:()=>{fetch("/api/dishByName/lasagna").then(n=>n.json()).then(n=>e(n.ctx_param)).catch(n=>console.error("GET BY NAME ERROR",n))},type:"button",children:"Get By Name"}),b("p",{children:t})]})})};function vt(){return it(()=>{fetch("/api/publicDishes/main").then(t=>t.json()).then(t=>{console.log("---DATA",t)}).catch(t=>console.error("GET ALL PUBLIC DISHES ERROR",t))},[]),b("div",{class:"home",children:b(dt,{})})}function mt(){return b("section",{children:[b("h1",{children:"404: Not Found"}),b("p",{children:"It's gone :("})]})}function Je(){return b(O,{children:[b(pt,{}),b("main",{children:b(Ke,{children:[b(Se,{path:"/",component:vt}),b(Se,{default:!0,component:mt})]})})]})}typeof window<"u"&&at(b(Je,{}),document.getElementById("app"));async function yt(t){return await ht(b(Je,{...t}))}export{Je as App,ve as E,T as _,Z as k,d as l,yt as prerender};
