import{c as Ct,g as Dt}from"./_commonjsHelpers.Cpj98o6Y.js";var ft={exports:{}};/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/(function(ut,Wt){(function(A,N){ut.exports=N()})(Ct,function(){var A={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function N(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function lt(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var R={success:lt,failure:N};/*! @license is-dom-node v1.0.4

			Copyright 2018 Fisssion LLC.

			Permission is hereby granted, free of charge, to any person obtaining a copy
			of this software and associated documentation files (the "Software"), to deal
			in the Software without restriction, including without limitation the rights
			to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			copies of the Software, and to permit persons to whom the Software is
			furnished to do so, subject to the following conditions:

			The above copyright notice and this permission notice shall be included in all
			copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
			SOFTWARE.

		*/function C(t){return typeof window.Node=="object"?t instanceof window.Node:t!==null&&typeof t=="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

			Copyright 2018 Fisssion LLC.

			Permission is hereby granted, free of charge, to any person obtaining a copy
			of this software and associated documentation files (the "Software"), to deal
			in the Software without restriction, including without limitation the rights
			to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			copies of the Software, and to permit persons to whom the Software is
			furnished to do so, subject to the following conditions:

			The above copyright notice and this permission notice shall be included in all
			copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
			SOFTWARE.

		*/function dt(t){var e=Object.prototype.toString.call(t),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?t instanceof window.NodeList:t!==null&&typeof t=="object"&&typeof t.length=="number"&&r.test(e)&&(t.length===0||C(t[0]))}/*! @license Tealight v0.3.6

			Copyright 2018 Fisssion LLC.

			Permission is hereby granted, free of charge, to any person obtaining a copy
			of this software and associated documentation files (the "Software"), to deal
			in the Software without restriction, including without limitation the rights
			to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			copies of the Software, and to permit persons to whom the Software is
			furnished to do so, subject to the following conditions:

			The above copyright notice and this permission notice shall be included in all
			copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
			SOFTWARE.

		*/function $(t,e){if(e===void 0&&(e=document),t instanceof Array)return t.filter(C);if(C(t))return[t];if(dt(t))return Array.prototype.slice.call(t);if(typeof t=="string")try{var r=e.querySelectorAll(t);return Array.prototype.slice.call(r)}catch{return[]}return[]}function P(t){return t!==null&&t instanceof Object&&(t.constructor===Object||Object.prototype.toString.call(t)==="[object Object]")}function s(t,e){if(P(t)){var r=Object.keys(t);return r.forEach(function(i){return e(t[i],i,t)})}if(t instanceof Array)return t.forEach(function(i,o){return e(i,o,t)});throw new TypeError("Expected either an array or object literal.")}function w(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+t;e.forEach(function(o){return i+=`
 — `+o}),console.log(i,"color: #ea654b;")}}function V(){var t=this,e=function(){return{active:[],stale:[]}},r=e(),i=e(),o=e();try{s($("[data-sr-id]"),function(n){var a=parseInt(n.getAttribute("data-sr-id"));r.active.push(a)})}catch(n){throw n}s(this.store.elements,function(n){r.active.indexOf(n.id)===-1&&r.stale.push(n.id)}),s(r.stale,function(n){return delete t.store.elements[n]}),s(this.store.elements,function(n){o.active.indexOf(n.containerId)===-1&&o.active.push(n.containerId),n.hasOwnProperty("sequence")&&i.active.indexOf(n.sequence.id)===-1&&i.active.push(n.sequence.id)}),s(this.store.containers,function(n){o.active.indexOf(n.id)===-1&&o.stale.push(n.id)}),s(o.stale,function(n){var a=t.store.containers[n].node;a.removeEventListener("scroll",t.delegate),a.removeEventListener("resize",t.delegate),delete t.store.containers[n]}),s(this.store.sequences,function(n){i.active.indexOf(n.id)===-1&&i.stale.push(n.id)}),s(i.stale,function(n){return delete t.store.sequences[n]})}/*! @license Rematrix v0.3.0

			Copyright 2018 Julian Lloyd.

			Permission is hereby granted, free of charge, to any person obtaining a copy
			of this software and associated documentation files (the "Software"), to deal
			in the Software without restriction, including without limitation the rights
			to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			copies of the Software, and to permit persons to whom the Software is
			furnished to do so, subject to the following conditions:

			The above copyright notice and this permission notice shall be included in
			all copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			THE SOFTWARE.
		*/function D(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var e=b();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function b(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function ht(t,e){for(var r=D(t),i=D(e),o=[],n=0;n<4;n++)for(var a=[r[n],r[n+4],r[n+8],r[n+12]],l=0;l<4;l++){var p=l*4,c=[i[p],i[p+1],i[p+2],i[p+3]],d=a[0]*c[0]+a[1]*c[1]+a[2]*c[2]+a[3]*c[3];o[n+p]=d}return o}function vt(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var r=e[2].split(", ").map(parseFloat);return D(r)}}return b()}function pt(t){var e=Math.PI/180*t,r=b();return r[5]=r[10]=Math.cos(e),r[6]=r[9]=Math.sin(e),r[9]*=-1,r}function yt(t){var e=Math.PI/180*t,r=b();return r[0]=r[10]=Math.cos(e),r[2]=r[8]=Math.sin(e),r[2]*=-1,r}function gt(t){var e=Math.PI/180*t,r=b();return r[0]=r[5]=Math.cos(e),r[1]=r[4]=Math.sin(e),r[4]*=-1,r}function Z(t,e){var r=b();return r[0]=t,r[5]=typeof e=="number"?e:t,r}function bt(t){var e=b();return e[12]=t,e}function mt(t){var e=b();return e[13]=t,e}var J=function(){var t={},e=document.documentElement.style;function r(i,o){if(o===void 0&&(o=e),i&&typeof i=="string"){if(t[i])return t[i];if(typeof o[i]=="string")return t[i]=i;if(typeof o["-webkit-"+i]=="string")return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return t={}},r}();function wt(t){var e=window.getComputedStyle(t.node),r=e.position,i=t.config,o={},n=t.node.getAttribute("style")||"",a=n.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=a?a.map(function(g){return g.trim()}).join("; ")+";":"",o.generated=a.some(function(g){return g.match(/visibility\s?:\s?visible/i)})?o.computed:a.concat(["visibility: visible"]).map(function(g){return g.trim()}).join("; ")+";";var l=parseFloat(e.opacity),p=isNaN(parseFloat(i.opacity))?parseFloat(e.opacity):parseFloat(i.opacity),c={computed:l!==p?"opacity: "+l+";":"",generated:l!==p?"opacity: "+p+";":""},d=[];if(parseFloat(i.distance)){var f=i.origin==="top"||i.origin==="bottom"?"Y":"X",v=i.distance;(i.origin==="top"||i.origin==="left")&&(v=/^-/.test(v)?v.substr(1):"-"+v);var T=v.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),y=T[0],j=T[1];switch(j){case"em":v=parseInt(e.fontSize)*y;break;case"px":v=y;break;case"%":v=f==="Y"?t.node.getBoundingClientRect().height*y/100:t.node.getBoundingClientRect().width*y/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}f==="Y"?d.push(mt(v)):d.push(bt(v))}i.rotate.x&&d.push(pt(i.rotate.x)),i.rotate.y&&d.push(yt(i.rotate.y)),i.rotate.z&&d.push(gt(i.rotate.z)),i.scale!==1&&(i.scale===0?d.push(Z(2e-4)):d.push(Z(i.scale)));var h={};if(d.length){h.property=J("transform"),h.computed={raw:e[h.property],matrix:vt(e[h.property])},d.unshift(h.computed.matrix);var At=d.reduce(ht);h.generated={initial:h.property+": matrix3d("+At.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var u={};if(c.generated||h.generated.initial){u.property=J("transition"),u.computed=e[u.property],u.fragments=[];var ot=i.delay,q=i.duration,L=i.easing;c.generated&&u.fragments.push({delayed:"opacity "+q/1e3+"s "+L+" "+ot/1e3+"s",instant:"opacity "+q/1e3+"s "+L+" 0s"}),h.generated.initial&&u.fragments.push({delayed:h.property+" "+q/1e3+"s "+L+" "+ot/1e3+"s",instant:h.property+" "+q/1e3+"s "+L+" 0s"});var Nt=u.computed&&!u.computed.match(/all 0s|none 0s/);Nt&&u.fragments.unshift({delayed:u.computed,instant:u.computed});var at=u.fragments.reduce(function(g,M,st){return g.delayed+=st===0?M.delayed:", "+M.delayed,g.instant+=st===0?M.instant:", "+M.instant,g},{delayed:"",instant:""});u.generated={delayed:u.property+": "+at.delayed+";",instant:u.property+": "+at.instant+";"}}else u.generated={delayed:"",instant:""};return{inline:o,opacity:c,position:r,transform:h,transition:u}}function O(t,e){e.split(";").forEach(function(r){var i=r.split(":"),o=i[0],n=i.slice(1);o&&n&&(t.style[o.trim()]=n.join(":"))})}function F(t){var e=this,r;try{s($(t),function(i){var o=i.getAttribute("data-sr-id");if(o!==null){r=!0;var n=e.store.elements[o];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),O(n.node,n.styles.inline.generated),i.removeAttribute("data-sr-id"),delete e.store.elements[o]}})}catch(i){return w.call(this,"Clean failed.",i.message)}if(r)try{V.call(this)}catch(i){return w.call(this,"Clean failed.",i.message)}}function Et(){var t=this;s(this.store.elements,function(e){O(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),s(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.removeEventListener("scroll",t.delegate),r.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function k(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(P(t))return s(e,function(i){s(i,function(o,n){P(o)?((!t[n]||!P(t[n]))&&(t[n]={}),k(t[n],o)):t[n]=o})}),t;throw new TypeError("Target must be an object literal.")}function S(t){return t===void 0&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var z=function(){var t=0;return function(){return t++}}();function K(){var t=this;V.call(this),s(this.store.elements,function(e){var r=[e.styles.inline.generated];e.visible?(r.push(e.styles.opacity.computed),r.push(e.styles.transform.generated.final),e.revealed=!0):(r.push(e.styles.opacity.generated),r.push(e.styles.transform.generated.initial),e.revealed=!1),O(e.node,r.filter(function(i){return i!==""}).join(" "))}),s(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.addEventListener("scroll",t.delegate),r.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function I(t,e){e===void 0&&(e={});var r=e.pristine||this.pristine,i=t.config.useDelay==="always"||t.config.useDelay==="onload"&&r||t.config.useDelay==="once"&&!t.seen,o=t.visible&&!t.revealed,n=!t.visible&&t.revealed&&t.config.reset;if(e.reveal||o)return Tt.call(this,t,i);if(e.reset||n)return jt.call(this,t)}function Tt(t,e){var r=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?r.push(t.styles.transition.generated.delayed):r.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,O(t.node,r.filter(function(i){return i!==""}).join(" ")),Q.call(this,t,e)}function jt(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,O(t.node,e.filter(function(r){return r!==""}).join(" ")),Q.call(this,t)}function Q(t,e){var r=this,i=e?t.config.duration+t.config.delay:t.config.duration,o=t.revealed?t.config.beforeReveal:t.config.beforeReset,n=t.revealed?t.config.afterReveal:t.config.afterReset,a=0;t.callbackTimer&&(a=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),o(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){n(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&F.call(r,t.node)},i-a)}}function _(t,e){if(e===void 0&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return I.call(this,t,{reset:!0});var r=this.store.sequences[t.sequence.id],i=t.sequence.index;if(r){var o=new tt(r,"visible",this.store),n=new tt(r,"revealed",this.store);if(r.models={visible:o,revealed:n},!n.body.length){var a=r.members[o.body[0]],l=this.store.elements[a];if(l)return x.call(this,r,o.body[0],-1,e),x.call(this,r,o.body[0],1,e),I.call(this,l,{reveal:!0,pristine:e})}if(!r.blocked.head&&i===[].concat(n.head).pop()&&i>=[].concat(o.body).shift())return x.call(this,r,i,-1,e),I.call(this,t,{reveal:!0,pristine:e});if(!r.blocked.foot&&i===[].concat(n.foot).shift()&&i<=[].concat(o.body).pop())return x.call(this,r,i,1,e),I.call(this,t,{reveal:!0,pristine:e})}}function Ot(t){var e=Math.abs(t);if(!isNaN(e))this.id=z(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function tt(t,e,r){var i=this;this.head=[],this.body=[],this.foot=[],s(t.members,function(o,n){var a=r.elements[o];a&&a[e]&&i.body.push(n)}),this.body.length&&s(t.members,function(o,n){var a=r.elements[o];a&&!a[e]&&(n<i.body[0]?i.head.push(n):i.foot.push(n))})}function x(t,e,r,i){var o=this,n=["head",null,"foot"][1+r],a=t.members[e+r],l=this.store.elements[a];t.blocked[n]=!0,setTimeout(function(){t.blocked[n]=!1,l&&_.call(o,l,i)},t.interval)}function et(t,e,r){var i=this;e===void 0&&(e={}),r===void 0&&(r=!1);var o=[],n,a=e.interval||A.interval;try{a&&(n=new Ot(a));var l=$(t);if(!l.length)throw new Error("Invalid reveal target.");var p=l.reduce(function(c,d){var f={},v=d.getAttribute("data-sr-id");v?(k(f,i.store.elements[v]),O(f.node,f.styles.inline.computed)):(f.id=z(),f.node=d,f.seen=!1,f.revealed=!1,f.visible=!1);var T=k({},f.config||i.defaults,e);if(!T.mobile&&S()||!T.desktop&&!S())return v&&F.call(i,f),c;var y=$(T.container)[0];if(!y)throw new Error("Invalid container.");if(!y.contains(d))return c;var j;return j=Rt(y,o,i.store.containers),j===null&&(j=z(),o.push({id:j,node:y})),f.config=T,f.containerId=j,f.styles=wt(f),n&&(f.sequence={id:n.id,index:n.members.length},n.members.push(f.id)),c.push(f),c},[]);s(p,function(c){i.store.elements[c.id]=c,c.node.setAttribute("data-sr-id",c.id)})}catch(c){return w.call(this,"Reveal failed.",c.message)}s(o,function(c){i.store.containers[c.id]={id:c.id,node:c.node}}),n&&(this.store.sequences[n.id]=n),r!==!0&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(K.bind(this),0))}function Rt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i=null;return s(e,function(o){s(o,function(n){i===null&&n.node===t&&(i=n.id)})}),i}function $t(){var t=this;s(this.store.history,function(e){et.call(t,e.target,e.options,!0)}),K.call(this)}var kt=function(t){return(t>0)-(t<0)||+t},rt=Math.sign||kt;/*! @license miniraf v1.0.1

			Copyright 2018 Fisssion LLC.

			Permission is hereby granted, free of charge, to any person obtaining a copy
			of this software and associated documentation files (the "Software"), to deal
			in the Software without restriction, including without limitation the rights
			to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			copies of the Software, and to permit persons to whom the Software is
			furnished to do so, subject to the following conditions:

			The above copyright notice and this permission notice shall be included in all
			copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
			SOFTWARE.

		*/var it=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){return it(e)},0)}}(),It=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||it;function nt(t,e){var r=e?t.node.clientHeight:t.node.offsetHeight,i=e?t.node.clientWidth:t.node.offsetWidth,o=0,n=0,a=t.node;do isNaN(a.offsetTop)||(o+=a.offsetTop),isNaN(a.offsetLeft)||(n+=a.offsetLeft),a=a.offsetParent;while(a);return{bounds:{top:o,right:n+i,bottom:o+r,left:n},height:r,width:i}}function Pt(t){var e,r;return t.node===document.documentElement?(e=window.pageYOffset,r=window.pageXOffset):(e=t.node.scrollTop,r=t.node.scrollLeft),{top:e,left:r}}function St(t){t===void 0&&(t={});var e=this.store.containers[t.containerId];if(e){var r=Math.max(0,Math.min(1,t.config.viewFactor)),i=t.config.viewOffset,o={top:t.geometry.bounds.top+t.geometry.height*r,right:t.geometry.bounds.right-t.geometry.width*r,bottom:t.geometry.bounds.bottom-t.geometry.height*r,left:t.geometry.bounds.left+t.geometry.width*r},n={top:e.geometry.bounds.top+e.scroll.top+i.top,right:e.geometry.bounds.right+e.scroll.left-i.right,bottom:e.geometry.bounds.bottom+e.scroll.top-i.bottom,left:e.geometry.bounds.left+e.scroll.left+i.left};return o.top<n.bottom&&o.right>n.left&&o.bottom>n.top&&o.left<n.right||t.styles.position==="fixed"}}function xt(t,e){var r=this;t===void 0&&(t={type:"init"}),e===void 0&&(e=this.store.elements),It(function(){var i=t.type==="init"||t.type==="resize";s(r.store.containers,function(o){i&&(o.geometry=nt.call(r,o,!0));var n=Pt.call(r,o);o.scroll&&(o.direction={x:rt(n.left-o.scroll.left),y:rt(n.top-o.scroll.top)}),o.scroll=n}),s(e,function(o){(i||o.geometry===void 0)&&(o.geometry=nt.call(r,o)),o.visible=St.call(r,o)}),s(e,function(o){o.sequence?_.call(r,o):I.call(r,o)}),r.pristine=!1})}function qt(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function Lt(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var Mt="4.0.9",Y,W,H,X,B,m,U,G;function E(t){t===void 0&&(t={});var e=typeof this>"u"||Object.getPrototypeOf(this)!==E.prototype;if(e)return new E(t);if(!E.isSupported())return w.call(this,"Instantiation failed.","This browser is not supported."),R.failure();var r;try{r=m?k({},m,t):k({},A,t)}catch(o){return w.call(this,"Invalid configuration.",o.message),R.failure()}try{var i=$(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(o){return w.call(this,o.message),R.failure()}return m=r,!m.mobile&&S()||!m.desktop&&!S()?(w.call(this,"This device is disabled.","desktop: "+m.desktop,"mobile: "+m.mobile),R.failure()):(R.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Y=Y||xt.bind(this),W=W||Et.bind(this),H=H||et.bind(this),X=X||F.bind(this),B=B||$t.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Y}}),Object.defineProperty(this,"destroy",{get:function(){return W}}),Object.defineProperty(this,"reveal",{get:function(){return H}}),Object.defineProperty(this,"clean",{get:function(){return X}}),Object.defineProperty(this,"sync",{get:function(){return B}}),Object.defineProperty(this,"defaults",{get:function(){return m}}),Object.defineProperty(this,"version",{get:function(){return Mt}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),G||(G=this))}return E.isSupported=function(){return qt()&&Lt()},Object.defineProperty(E,"debug",{get:function(){return U||!1},set:function(t){return U=typeof t=="boolean"?t:U}}),E(),E})})(ft);var Ft=ft.exports;const Xt=Dt(Ft);var zt=new Date,Yt=zt.getFullYear();const ct=document.getElementById("year");ct&&(ct.innerHTML=Yt.toString());export{Xt as S};
