(()=>{var eh=Object.create;var Eo=Object.defineProperty;var th=Object.getOwnPropertyDescriptor;var nh=Object.getOwnPropertyNames,ga=Object.getOwnPropertySymbols,ih=Object.getPrototypeOf,xa=Object.prototype.hasOwnProperty,oh=Object.prototype.propertyIsEnumerable;var ya=(e,r,i)=>r in e?Eo(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,me=(e,r)=>{for(var i in r||(r={}))xa.call(r,i)&&ya(e,i,r[i]);if(ga)for(var i of ga(r))oh.call(r,i)&&ya(e,i,r[i]);return e};var sh=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var rh=(e,r,i,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of nh(r))!xa.call(e,l)&&l!==i&&Eo(e,l,{get:()=>r[l],enumerable:!(s=th(r,l))||s.enumerable});return e};var ah=(e,r,i)=>(i=e!=null?eh(ih(e)):{},rh(r||!e||!e.__esModule?Eo(i,"default",{value:e,enumerable:!0}):i,e));var ka=sh((Wt,dn)=>{(function(){var e,r="4.17.21",i=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",p="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",T=500,S="__lodash_placeholder__",R=1,f=2,P=4,b=1,te=2,z=1,W=2,Bo=4,Ue=8,It=16,We=32,St=64,Je=128,Gt=256,li=512,ic=30,oc="...",sc=800,rc=16,Mo=1,ac=2,cc=3,mt=1/0,ot=9007199254740991,lc=17976931348623157e292,fn=0/0,Ge=4294967295,_c=Ge-1,uc=Ge>>>1,pc=[["ary",Je],["bind",z],["bindKey",W],["curry",Ue],["curryRight",It],["flip",li],["partial",We],["partialRight",St],["rearg",Gt]],$t="[object Arguments]",mn="[object Array]",dc="[object AsyncFunction]",zt="[object Boolean]",Ht="[object Date]",fc="[object DOMException]",hn="[object Error]",vn="[object Function]",Uo="[object GeneratorFunction]",Fe="[object Map]",jt="[object Number]",mc="[object Null]",Ke="[object Object]",Wo="[object Promise]",hc="[object Proxy]",Jt="[object RegExp]",Le="[object Set]",Kt="[object String]",gn="[object Symbol]",vc="[object Undefined]",Qt="[object WeakMap]",gc="[object WeakSet]",Xt="[object ArrayBuffer]",Ot="[object DataView]",_i="[object Float32Array]",ui="[object Float64Array]",pi="[object Int8Array]",di="[object Int16Array]",fi="[object Int32Array]",mi="[object Uint8Array]",hi="[object Uint8ClampedArray]",vi="[object Uint16Array]",gi="[object Uint32Array]",yc=/\b__p \+= '';/g,xc=/\b(__p \+=) '' \+/g,bc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Go=/&(?:amp|lt|gt|quot|#39);/g,zo=/[&<>"']/g,wc=RegExp(Go.source),kc=RegExp(zo.source),Cc=/<%-([\s\S]+?)%>/g,Ic=/<%([\s\S]+?)%>/g,Ho=/<%=([\s\S]+?)%>/g,Sc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$c=/^\w*$/,Oc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yi=/[\\^$.*+?()[\]{}|]/g,Tc=RegExp(yi.source),xi=/^\s+/,Ac=/\s/,Rc=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ec=/\{\n\/\* \[wrapped with (.+)\] \*/,Pc=/,? & /,qc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fc=/[()=,{}\[\]\/\s]/,Lc=/\\(\\)?/g,Dc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,jo=/\w*$/,Nc=/^[-+]0x[0-9a-f]+$/i,Bc=/^0b[01]+$/i,Mc=/^\[object .+?Constructor\]$/,Uc=/^0o[0-7]+$/i,Wc=/^(?:0|[1-9]\d*)$/,Gc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yn=/($^)/,zc=/['\n\r\u2028\u2029\\]/g,xn="\\ud800-\\udfff",Hc="\\u0300-\\u036f",jc="\\ufe20-\\ufe2f",Jc="\\u20d0-\\u20ff",Jo=Hc+jc+Jc,Ko="\\u2700-\\u27bf",Qo="a-z\\xdf-\\xf6\\xf8-\\xff",Kc="\\xac\\xb1\\xd7\\xf7",Qc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Xc="\\u2000-\\u206f",Yc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xo="A-Z\\xc0-\\xd6\\xd8-\\xde",Yo="\\ufe0e\\ufe0f",Vo=Kc+Qc+Xc+Yc,bi="['\u2019]",Vc="["+xn+"]",Zo="["+Vo+"]",bn="["+Jo+"]",es="\\d+",Zc="["+Ko+"]",ts="["+Qo+"]",ns="[^"+xn+Vo+es+Ko+Qo+Xo+"]",wi="\\ud83c[\\udffb-\\udfff]",el="(?:"+bn+"|"+wi+")",is="[^"+xn+"]",ki="(?:\\ud83c[\\udde6-\\uddff]){2}",Ci="[\\ud800-\\udbff][\\udc00-\\udfff]",Tt="["+Xo+"]",os="\\u200d",ss="(?:"+ts+"|"+ns+")",tl="(?:"+Tt+"|"+ns+")",rs="(?:"+bi+"(?:d|ll|m|re|s|t|ve))?",as="(?:"+bi+"(?:D|LL|M|RE|S|T|VE))?",cs=el+"?",ls="["+Yo+"]?",nl="(?:"+os+"(?:"+[is,ki,Ci].join("|")+")"+ls+cs+")*",il="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ol="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_s=ls+cs+nl,sl="(?:"+[Zc,ki,Ci].join("|")+")"+_s,rl="(?:"+[is+bn+"?",bn,ki,Ci,Vc].join("|")+")",al=RegExp(bi,"g"),cl=RegExp(bn,"g"),Ii=RegExp(wi+"(?="+wi+")|"+rl+_s,"g"),ll=RegExp([Tt+"?"+ts+"+"+rs+"(?="+[Zo,Tt,"$"].join("|")+")",tl+"+"+as+"(?="+[Zo,Tt+ss,"$"].join("|")+")",Tt+"?"+ss+"+"+rs,Tt+"+"+as,ol,il,es,sl].join("|"),"g"),_l=RegExp("["+os+xn+Jo+Yo+"]"),ul=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,pl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],dl=-1,V={};V[_i]=V[ui]=V[pi]=V[di]=V[fi]=V[mi]=V[hi]=V[vi]=V[gi]=!0,V[$t]=V[mn]=V[Xt]=V[zt]=V[Ot]=V[Ht]=V[hn]=V[vn]=V[Fe]=V[jt]=V[Ke]=V[Jt]=V[Le]=V[Kt]=V[Qt]=!1;var Y={};Y[$t]=Y[mn]=Y[Xt]=Y[Ot]=Y[zt]=Y[Ht]=Y[_i]=Y[ui]=Y[pi]=Y[di]=Y[fi]=Y[Fe]=Y[jt]=Y[Ke]=Y[Jt]=Y[Le]=Y[Kt]=Y[gn]=Y[mi]=Y[hi]=Y[vi]=Y[gi]=!0,Y[hn]=Y[vn]=Y[Qt]=!1;var fl={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ml={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},vl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},gl=parseFloat,yl=parseInt,us=typeof global=="object"&&global&&global.Object===Object&&global,xl=typeof self=="object"&&self&&self.Object===Object&&self,ae=us||xl||Function("return this")(),Si=typeof Wt=="object"&&Wt&&!Wt.nodeType&&Wt,ht=Si&&typeof dn=="object"&&dn&&!dn.nodeType&&dn,ps=ht&&ht.exports===Si,$i=ps&&us.process,$e=function(){try{var g=ht&&ht.require&&ht.require("util").types;return g||$i&&$i.binding&&$i.binding("util")}catch(w){}}(),ds=$e&&$e.isArrayBuffer,fs=$e&&$e.isDate,ms=$e&&$e.isMap,hs=$e&&$e.isRegExp,vs=$e&&$e.isSet,gs=$e&&$e.isTypedArray;function be(g,w,x){switch(x.length){case 0:return g.call(w);case 1:return g.call(w,x[0]);case 2:return g.call(w,x[0],x[1]);case 3:return g.call(w,x[0],x[1],x[2])}return g.apply(w,x)}function bl(g,w,x,A){for(var D=-1,J=g==null?0:g.length;++D<J;){var se=g[D];w(A,se,x(se),g)}return A}function Oe(g,w){for(var x=-1,A=g==null?0:g.length;++x<A&&w(g[x],x,g)!==!1;);return g}function wl(g,w){for(var x=g==null?0:g.length;x--&&w(g[x],x,g)!==!1;);return g}function ys(g,w){for(var x=-1,A=g==null?0:g.length;++x<A;)if(!w(g[x],x,g))return!1;return!0}function st(g,w){for(var x=-1,A=g==null?0:g.length,D=0,J=[];++x<A;){var se=g[x];w(se,x,g)&&(J[D++]=se)}return J}function wn(g,w){var x=g==null?0:g.length;return!!x&&At(g,w,0)>-1}function Oi(g,w,x){for(var A=-1,D=g==null?0:g.length;++A<D;)if(x(w,g[A]))return!0;return!1}function Z(g,w){for(var x=-1,A=g==null?0:g.length,D=Array(A);++x<A;)D[x]=w(g[x],x,g);return D}function rt(g,w){for(var x=-1,A=w.length,D=g.length;++x<A;)g[D+x]=w[x];return g}function Ti(g,w,x,A){var D=-1,J=g==null?0:g.length;for(A&&J&&(x=g[++D]);++D<J;)x=w(x,g[D],D,g);return x}function kl(g,w,x,A){var D=g==null?0:g.length;for(A&&D&&(x=g[--D]);D--;)x=w(x,g[D],D,g);return x}function Ai(g,w){for(var x=-1,A=g==null?0:g.length;++x<A;)if(w(g[x],x,g))return!0;return!1}var Cl=Ri("length");function Il(g){return g.split("")}function Sl(g){return g.match(qc)||[]}function xs(g,w,x){var A;return x(g,function(D,J,se){if(w(D,J,se))return A=J,!1}),A}function kn(g,w,x,A){for(var D=g.length,J=x+(A?1:-1);A?J--:++J<D;)if(w(g[J],J,g))return J;return-1}function At(g,w,x){return w===w?Nl(g,w,x):kn(g,bs,x)}function $l(g,w,x,A){for(var D=x-1,J=g.length;++D<J;)if(A(g[D],w))return D;return-1}function bs(g){return g!==g}function ws(g,w){var x=g==null?0:g.length;return x?Pi(g,w)/x:fn}function Ri(g){return function(w){return w==null?e:w[g]}}function Ei(g){return function(w){return g==null?e:g[w]}}function ks(g,w,x,A,D){return D(g,function(J,se,X){x=A?(A=!1,J):w(x,J,se,X)}),x}function Ol(g,w){var x=g.length;for(g.sort(w);x--;)g[x]=g[x].value;return g}function Pi(g,w){for(var x,A=-1,D=g.length;++A<D;){var J=w(g[A]);J!==e&&(x=x===e?J:x+J)}return x}function qi(g,w){for(var x=-1,A=Array(g);++x<g;)A[x]=w(x);return A}function Tl(g,w){return Z(w,function(x){return[x,g[x]]})}function Cs(g){return g&&g.slice(0,Os(g)+1).replace(xi,"")}function we(g){return function(w){return g(w)}}function Fi(g,w){return Z(w,function(x){return g[x]})}function Yt(g,w){return g.has(w)}function Is(g,w){for(var x=-1,A=g.length;++x<A&&At(w,g[x],0)>-1;);return x}function Ss(g,w){for(var x=g.length;x--&&At(w,g[x],0)>-1;);return x}function Al(g,w){for(var x=g.length,A=0;x--;)g[x]===w&&++A;return A}var Rl=Ei(fl),El=Ei(ml);function Pl(g){return"\\"+vl[g]}function ql(g,w){return g==null?e:g[w]}function Rt(g){return _l.test(g)}function Fl(g){return ul.test(g)}function Ll(g){for(var w,x=[];!(w=g.next()).done;)x.push(w.value);return x}function Li(g){var w=-1,x=Array(g.size);return g.forEach(function(A,D){x[++w]=[D,A]}),x}function $s(g,w){return function(x){return g(w(x))}}function at(g,w){for(var x=-1,A=g.length,D=0,J=[];++x<A;){var se=g[x];(se===w||se===S)&&(g[x]=S,J[D++]=x)}return J}function Cn(g){var w=-1,x=Array(g.size);return g.forEach(function(A){x[++w]=A}),x}function Dl(g){var w=-1,x=Array(g.size);return g.forEach(function(A){x[++w]=[A,A]}),x}function Nl(g,w,x){for(var A=x-1,D=g.length;++A<D;)if(g[A]===w)return A;return-1}function Bl(g,w,x){for(var A=x+1;A--;)if(g[A]===w)return A;return A}function Et(g){return Rt(g)?Ul(g):Cl(g)}function De(g){return Rt(g)?Wl(g):Il(g)}function Os(g){for(var w=g.length;w--&&Ac.test(g.charAt(w)););return w}var Ml=Ei(hl);function Ul(g){for(var w=Ii.lastIndex=0;Ii.test(g);)++w;return w}function Wl(g){return g.match(Ii)||[]}function Gl(g){return g.match(ll)||[]}var zl=function g(w){w=w==null?ae:ct.defaults(ae.Object(),w,ct.pick(ae,pl));var x=w.Array,A=w.Date,D=w.Error,J=w.Function,se=w.Math,X=w.Object,Di=w.RegExp,Hl=w.String,Te=w.TypeError,In=x.prototype,jl=J.prototype,Pt=X.prototype,Sn=w["__core-js_shared__"],$n=jl.toString,Q=Pt.hasOwnProperty,Jl=0,Ts=function(){var t=/[^.]+$/.exec(Sn&&Sn.keys&&Sn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),On=Pt.toString,Kl=$n.call(X),Ql=ae._,Xl=Di("^"+$n.call(Q).replace(yi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Tn=ps?w.Buffer:e,lt=w.Symbol,An=w.Uint8Array,As=Tn?Tn.allocUnsafe:e,Rn=$s(X.getPrototypeOf,X),Rs=X.create,Es=Pt.propertyIsEnumerable,En=In.splice,Ps=lt?lt.isConcatSpreadable:e,Vt=lt?lt.iterator:e,vt=lt?lt.toStringTag:e,Pn=function(){try{var t=wt(X,"defineProperty");return t({},"",{}),t}catch(n){}}(),Yl=w.clearTimeout!==ae.clearTimeout&&w.clearTimeout,Vl=A&&A.now!==ae.Date.now&&A.now,Zl=w.setTimeout!==ae.setTimeout&&w.setTimeout,qn=se.ceil,Fn=se.floor,Ni=X.getOwnPropertySymbols,e_=Tn?Tn.isBuffer:e,qs=w.isFinite,t_=In.join,n_=$s(X.keys,X),re=se.max,_e=se.min,i_=A.now,o_=w.parseInt,Fs=se.random,s_=In.reverse,Bi=wt(w,"DataView"),Zt=wt(w,"Map"),Mi=wt(w,"Promise"),qt=wt(w,"Set"),en=wt(w,"WeakMap"),tn=wt(X,"create"),Ln=en&&new en,Ft={},r_=kt(Bi),a_=kt(Zt),c_=kt(Mi),l_=kt(qt),u_=kt(en),Dn=lt?lt.prototype:e,nn=Dn?Dn.valueOf:e,Ls=Dn?Dn.toString:e;function _(t){if(ne(t)&&!N(t)&&!(t instanceof H)){if(t instanceof Ae)return t;if(Q.call(t,"__wrapped__"))return Dr(t)}return new Ae(t)}var Lt=function(){function t(){}return function(n){if(!ee(n))return{};if(Rs)return Rs(n);t.prototype=n;var o=new t;return t.prototype=e,o}}();function Nn(){}function Ae(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=e}_.templateSettings={escape:Cc,evaluate:Ic,interpolate:Ho,variable:"",imports:{_}},_.prototype=Nn.prototype,_.prototype.constructor=_,Ae.prototype=Lt(Nn.prototype),Ae.prototype.constructor=Ae;function H(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ge,this.__views__=[]}function p_(){var t=new H(this.__wrapped__);return t.__actions__=he(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=he(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=he(this.__views__),t}function d_(){if(this.__filtered__){var t=new H(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function f_(){var t=this.__wrapped__.value(),n=this.__dir__,o=N(t),a=n<0,c=o?t.length:0,u=Su(0,c,this.__views__),m=u.start,v=u.end,y=v-m,k=a?v:m-1,C=this.__iteratees__,I=C.length,O=0,E=_e(y,this.__takeCount__);if(!o||!a&&c==y&&E==y)return rr(t,this.__actions__);var F=[];e:for(;y--&&O<E;){k+=n;for(var M=-1,L=t[k];++M<I;){var G=C[M],j=G.iteratee,Ie=G.type,fe=j(L);if(Ie==ac)L=fe;else if(!fe){if(Ie==Mo)continue e;break e}}F[O++]=L}return F}H.prototype=Lt(Nn.prototype),H.prototype.constructor=H;function gt(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var a=t[n];this.set(a[0],a[1])}}function m_(){this.__data__=tn?tn(null):{},this.size=0}function h_(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function v_(t){var n=this.__data__;if(tn){var o=n[t];return o===d?e:o}return Q.call(n,t)?n[t]:e}function g_(t){var n=this.__data__;return tn?n[t]!==e:Q.call(n,t)}function y_(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=tn&&n===e?d:n,this}gt.prototype.clear=m_,gt.prototype.delete=h_,gt.prototype.get=v_,gt.prototype.has=g_,gt.prototype.set=y_;function Qe(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var a=t[n];this.set(a[0],a[1])}}function x_(){this.__data__=[],this.size=0}function b_(t){var n=this.__data__,o=Bn(n,t);if(o<0)return!1;var a=n.length-1;return o==a?n.pop():En.call(n,o,1),--this.size,!0}function w_(t){var n=this.__data__,o=Bn(n,t);return o<0?e:n[o][1]}function k_(t){return Bn(this.__data__,t)>-1}function C_(t,n){var o=this.__data__,a=Bn(o,t);return a<0?(++this.size,o.push([t,n])):o[a][1]=n,this}Qe.prototype.clear=x_,Qe.prototype.delete=b_,Qe.prototype.get=w_,Qe.prototype.has=k_,Qe.prototype.set=C_;function Xe(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var a=t[n];this.set(a[0],a[1])}}function I_(){this.size=0,this.__data__={hash:new gt,map:new(Zt||Qe),string:new gt}}function S_(t){var n=Yn(this,t).delete(t);return this.size-=n?1:0,n}function $_(t){return Yn(this,t).get(t)}function O_(t){return Yn(this,t).has(t)}function T_(t,n){var o=Yn(this,t),a=o.size;return o.set(t,n),this.size+=o.size==a?0:1,this}Xe.prototype.clear=I_,Xe.prototype.delete=S_,Xe.prototype.get=$_,Xe.prototype.has=O_,Xe.prototype.set=T_;function yt(t){var n=-1,o=t==null?0:t.length;for(this.__data__=new Xe;++n<o;)this.add(t[n])}function A_(t){return this.__data__.set(t,d),this}function R_(t){return this.__data__.has(t)}yt.prototype.add=yt.prototype.push=A_,yt.prototype.has=R_;function Ne(t){var n=this.__data__=new Qe(t);this.size=n.size}function E_(){this.__data__=new Qe,this.size=0}function P_(t){var n=this.__data__,o=n.delete(t);return this.size=n.size,o}function q_(t){return this.__data__.get(t)}function F_(t){return this.__data__.has(t)}function L_(t,n){var o=this.__data__;if(o instanceof Qe){var a=o.__data__;if(!Zt||a.length<i-1)return a.push([t,n]),this.size=++o.size,this;o=this.__data__=new Xe(a)}return o.set(t,n),this.size=o.size,this}Ne.prototype.clear=E_,Ne.prototype.delete=P_,Ne.prototype.get=q_,Ne.prototype.has=F_,Ne.prototype.set=L_;function Ds(t,n){var o=N(t),a=!o&&Ct(t),c=!o&&!a&&ft(t),u=!o&&!a&&!c&&Mt(t),m=o||a||c||u,v=m?qi(t.length,Hl):[],y=v.length;for(var k in t)(n||Q.call(t,k))&&!(m&&(k=="length"||c&&(k=="offset"||k=="parent")||u&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||et(k,y)))&&v.push(k);return v}function Ns(t){var n=t.length;return n?t[Yi(0,n-1)]:e}function D_(t,n){return Vn(he(t),xt(n,0,t.length))}function N_(t){return Vn(he(t))}function Ui(t,n,o){(o!==e&&!Be(t[n],o)||o===e&&!(n in t))&&Ye(t,n,o)}function on(t,n,o){var a=t[n];(!(Q.call(t,n)&&Be(a,o))||o===e&&!(n in t))&&Ye(t,n,o)}function Bn(t,n){for(var o=t.length;o--;)if(Be(t[o][0],n))return o;return-1}function B_(t,n,o,a){return _t(t,function(c,u,m){n(a,c,o(c),m)}),a}function Bs(t,n){return t&&He(n,ce(n),t)}function M_(t,n){return t&&He(n,ge(n),t)}function Ye(t,n,o){n=="__proto__"&&Pn?Pn(t,n,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[n]=o}function Wi(t,n){for(var o=-1,a=n.length,c=x(a),u=t==null;++o<a;)c[o]=u?e:ko(t,n[o]);return c}function xt(t,n,o){return t===t&&(o!==e&&(t=t<=o?t:o),n!==e&&(t=t>=n?t:n)),t}function Re(t,n,o,a,c,u){var m,v=n&R,y=n&f,k=n&P;if(o&&(m=c?o(t,a,c,u):o(t)),m!==e)return m;if(!ee(t))return t;var C=N(t);if(C){if(m=Ou(t),!v)return he(t,m)}else{var I=ue(t),O=I==vn||I==Uo;if(ft(t))return lr(t,v);if(I==Ke||I==$t||O&&!c){if(m=y||O?{}:Or(t),!v)return y?vu(t,M_(m,t)):hu(t,Bs(m,t))}else{if(!Y[I])return c?t:{};m=Tu(t,I,v)}}u||(u=new Ne);var E=u.get(t);if(E)return E;u.set(t,m),ia(t)?t.forEach(function(L){m.add(Re(L,n,o,L,t,u))}):ta(t)&&t.forEach(function(L,G){m.set(G,Re(L,n,o,G,t,u))});var F=k?y?co:ao:y?ge:ce,M=C?e:F(t);return Oe(M||t,function(L,G){M&&(G=L,L=t[G]),on(m,G,Re(L,n,o,G,t,u))}),m}function U_(t){var n=ce(t);return function(o){return Ms(o,t,n)}}function Ms(t,n,o){var a=o.length;if(t==null)return!a;for(t=X(t);a--;){var c=o[a],u=n[c],m=t[c];if(m===e&&!(c in t)||!u(m))return!1}return!0}function Us(t,n,o){if(typeof t!="function")throw new Te(l);return un(function(){t.apply(e,o)},n)}function sn(t,n,o,a){var c=-1,u=wn,m=!0,v=t.length,y=[],k=n.length;if(!v)return y;o&&(n=Z(n,we(o))),a?(u=Oi,m=!1):n.length>=i&&(u=Yt,m=!1,n=new yt(n));e:for(;++c<v;){var C=t[c],I=o==null?C:o(C);if(C=a||C!==0?C:0,m&&I===I){for(var O=k;O--;)if(n[O]===I)continue e;y.push(C)}else u(n,I,a)||y.push(C)}return y}var _t=fr(ze),Ws=fr(zi,!0);function W_(t,n){var o=!0;return _t(t,function(a,c,u){return o=!!n(a,c,u),o}),o}function Mn(t,n,o){for(var a=-1,c=t.length;++a<c;){var u=t[a],m=n(u);if(m!=null&&(v===e?m===m&&!Ce(m):o(m,v)))var v=m,y=u}return y}function G_(t,n,o,a){var c=t.length;for(o=B(o),o<0&&(o=-o>c?0:c+o),a=a===e||a>c?c:B(a),a<0&&(a+=c),a=o>a?0:sa(a);o<a;)t[o++]=n;return t}function Gs(t,n){var o=[];return _t(t,function(a,c,u){n(a,c,u)&&o.push(a)}),o}function le(t,n,o,a,c){var u=-1,m=t.length;for(o||(o=Ru),c||(c=[]);++u<m;){var v=t[u];n>0&&o(v)?n>1?le(v,n-1,o,a,c):rt(c,v):a||(c[c.length]=v)}return c}var Gi=mr(),zs=mr(!0);function ze(t,n){return t&&Gi(t,n,ce)}function zi(t,n){return t&&zs(t,n,ce)}function Un(t,n){return st(n,function(o){return tt(t[o])})}function bt(t,n){n=pt(n,t);for(var o=0,a=n.length;t!=null&&o<a;)t=t[je(n[o++])];return o&&o==a?t:e}function Hs(t,n,o){var a=n(t);return N(t)?a:rt(a,o(t))}function pe(t){return t==null?t===e?vc:mc:vt&&vt in X(t)?Iu(t):Nu(t)}function Hi(t,n){return t>n}function z_(t,n){return t!=null&&Q.call(t,n)}function H_(t,n){return t!=null&&n in X(t)}function j_(t,n,o){return t>=_e(n,o)&&t<re(n,o)}function ji(t,n,o){for(var a=o?Oi:wn,c=t[0].length,u=t.length,m=u,v=x(u),y=1/0,k=[];m--;){var C=t[m];m&&n&&(C=Z(C,we(n))),y=_e(C.length,y),v[m]=!o&&(n||c>=120&&C.length>=120)?new yt(m&&C):e}C=t[0];var I=-1,O=v[0];e:for(;++I<c&&k.length<y;){var E=C[I],F=n?n(E):E;if(E=o||E!==0?E:0,!(O?Yt(O,F):a(k,F,o))){for(m=u;--m;){var M=v[m];if(!(M?Yt(M,F):a(t[m],F,o)))continue e}O&&O.push(F),k.push(E)}}return k}function J_(t,n,o,a){return ze(t,function(c,u,m){n(a,o(c),u,m)}),a}function rn(t,n,o){n=pt(n,t),t=Er(t,n);var a=t==null?t:t[je(Pe(n))];return a==null?e:be(a,t,o)}function js(t){return ne(t)&&pe(t)==$t}function K_(t){return ne(t)&&pe(t)==Xt}function Q_(t){return ne(t)&&pe(t)==Ht}function an(t,n,o,a,c){return t===n?!0:t==null||n==null||!ne(t)&&!ne(n)?t!==t&&n!==n:X_(t,n,o,a,an,c)}function X_(t,n,o,a,c,u){var m=N(t),v=N(n),y=m?mn:ue(t),k=v?mn:ue(n);y=y==$t?Ke:y,k=k==$t?Ke:k;var C=y==Ke,I=k==Ke,O=y==k;if(O&&ft(t)){if(!ft(n))return!1;m=!0,C=!1}if(O&&!C)return u||(u=new Ne),m||Mt(t)?Ir(t,n,o,a,c,u):ku(t,n,y,o,a,c,u);if(!(o&b)){var E=C&&Q.call(t,"__wrapped__"),F=I&&Q.call(n,"__wrapped__");if(E||F){var M=E?t.value():t,L=F?n.value():n;return u||(u=new Ne),c(M,L,o,a,u)}}return O?(u||(u=new Ne),Cu(t,n,o,a,c,u)):!1}function Y_(t){return ne(t)&&ue(t)==Fe}function Ji(t,n,o,a){var c=o.length,u=c,m=!a;if(t==null)return!u;for(t=X(t);c--;){var v=o[c];if(m&&v[2]?v[1]!==t[v[0]]:!(v[0]in t))return!1}for(;++c<u;){v=o[c];var y=v[0],k=t[y],C=v[1];if(m&&v[2]){if(k===e&&!(y in t))return!1}else{var I=new Ne;if(a)var O=a(k,C,y,t,n,I);if(!(O===e?an(C,k,b|te,a,I):O))return!1}}return!0}function Js(t){if(!ee(t)||Pu(t))return!1;var n=tt(t)?Xl:Mc;return n.test(kt(t))}function V_(t){return ne(t)&&pe(t)==Jt}function Z_(t){return ne(t)&&ue(t)==Le}function eu(t){return ne(t)&&oi(t.length)&&!!V[pe(t)]}function Ks(t){return typeof t=="function"?t:t==null?ye:typeof t=="object"?N(t)?Ys(t[0],t[1]):Xs(t):ha(t)}function Ki(t){if(!_n(t))return n_(t);var n=[];for(var o in X(t))Q.call(t,o)&&o!="constructor"&&n.push(o);return n}function tu(t){if(!ee(t))return Du(t);var n=_n(t),o=[];for(var a in t)a=="constructor"&&(n||!Q.call(t,a))||o.push(a);return o}function Qi(t,n){return t<n}function Qs(t,n){var o=-1,a=ve(t)?x(t.length):[];return _t(t,function(c,u,m){a[++o]=n(c,u,m)}),a}function Xs(t){var n=_o(t);return n.length==1&&n[0][2]?Ar(n[0][0],n[0][1]):function(o){return o===t||Ji(o,t,n)}}function Ys(t,n){return po(t)&&Tr(n)?Ar(je(t),n):function(o){var a=ko(o,t);return a===e&&a===n?Co(o,t):an(n,a,b|te)}}function Wn(t,n,o,a,c){t!==n&&Gi(n,function(u,m){if(c||(c=new Ne),ee(u))nu(t,n,m,o,Wn,a,c);else{var v=a?a(mo(t,m),u,m+"",t,n,c):e;v===e&&(v=u),Ui(t,m,v)}},ge)}function nu(t,n,o,a,c,u,m){var v=mo(t,o),y=mo(n,o),k=m.get(y);if(k){Ui(t,o,k);return}var C=u?u(v,y,o+"",t,n,m):e,I=C===e;if(I){var O=N(y),E=!O&&ft(y),F=!O&&!E&&Mt(y);C=y,O||E||F?N(v)?C=v:ie(v)?C=he(v):E?(I=!1,C=lr(y,!0)):F?(I=!1,C=_r(y,!0)):C=[]:pn(y)||Ct(y)?(C=v,Ct(v)?C=ra(v):(!ee(v)||tt(v))&&(C=Or(y))):I=!1}I&&(m.set(y,C),c(C,y,a,u,m),m.delete(y)),Ui(t,o,C)}function Vs(t,n){var o=t.length;if(!!o)return n+=n<0?o:0,et(n,o)?t[n]:e}function Zs(t,n,o){n.length?n=Z(n,function(u){return N(u)?function(m){return bt(m,u.length===1?u[0]:u)}:u}):n=[ye];var a=-1;n=Z(n,we(q()));var c=Qs(t,function(u,m,v){var y=Z(n,function(k){return k(u)});return{criteria:y,index:++a,value:u}});return Ol(c,function(u,m){return mu(u,m,o)})}function iu(t,n){return er(t,n,function(o,a){return Co(t,a)})}function er(t,n,o){for(var a=-1,c=n.length,u={};++a<c;){var m=n[a],v=bt(t,m);o(v,m)&&cn(u,pt(m,t),v)}return u}function ou(t){return function(n){return bt(n,t)}}function Xi(t,n,o,a){var c=a?$l:At,u=-1,m=n.length,v=t;for(t===n&&(n=he(n)),o&&(v=Z(t,we(o)));++u<m;)for(var y=0,k=n[u],C=o?o(k):k;(y=c(v,C,y,a))>-1;)v!==t&&En.call(v,y,1),En.call(t,y,1);return t}function tr(t,n){for(var o=t?n.length:0,a=o-1;o--;){var c=n[o];if(o==a||c!==u){var u=c;et(c)?En.call(t,c,1):eo(t,c)}}return t}function Yi(t,n){return t+Fn(Fs()*(n-t+1))}function su(t,n,o,a){for(var c=-1,u=re(qn((n-t)/(o||1)),0),m=x(u);u--;)m[a?u:++c]=t,t+=o;return m}function Vi(t,n){var o="";if(!t||n<1||n>ot)return o;do n%2&&(o+=t),n=Fn(n/2),n&&(t+=t);while(n);return o}function U(t,n){return ho(Rr(t,n,ye),t+"")}function ru(t){return Ns(Ut(t))}function au(t,n){var o=Ut(t);return Vn(o,xt(n,0,o.length))}function cn(t,n,o,a){if(!ee(t))return t;n=pt(n,t);for(var c=-1,u=n.length,m=u-1,v=t;v!=null&&++c<u;){var y=je(n[c]),k=o;if(y==="__proto__"||y==="constructor"||y==="prototype")return t;if(c!=m){var C=v[y];k=a?a(C,y,v):e,k===e&&(k=ee(C)?C:et(n[c+1])?[]:{})}on(v,y,k),v=v[y]}return t}var nr=Ln?function(t,n){return Ln.set(t,n),t}:ye,cu=Pn?function(t,n){return Pn(t,"toString",{configurable:!0,enumerable:!1,value:So(n),writable:!0})}:ye;function lu(t){return Vn(Ut(t))}function Ee(t,n,o){var a=-1,c=t.length;n<0&&(n=-n>c?0:c+n),o=o>c?c:o,o<0&&(o+=c),c=n>o?0:o-n>>>0,n>>>=0;for(var u=x(c);++a<c;)u[a]=t[a+n];return u}function _u(t,n){var o;return _t(t,function(a,c,u){return o=n(a,c,u),!o}),!!o}function Gn(t,n,o){var a=0,c=t==null?a:t.length;if(typeof n=="number"&&n===n&&c<=uc){for(;a<c;){var u=a+c>>>1,m=t[u];m!==null&&!Ce(m)&&(o?m<=n:m<n)?a=u+1:c=u}return c}return Zi(t,n,ye,o)}function Zi(t,n,o,a){var c=0,u=t==null?0:t.length;if(u===0)return 0;n=o(n);for(var m=n!==n,v=n===null,y=Ce(n),k=n===e;c<u;){var C=Fn((c+u)/2),I=o(t[C]),O=I!==e,E=I===null,F=I===I,M=Ce(I);if(m)var L=a||F;else k?L=F&&(a||O):v?L=F&&O&&(a||!E):y?L=F&&O&&!E&&(a||!M):E||M?L=!1:L=a?I<=n:I<n;L?c=C+1:u=C}return _e(u,_c)}function ir(t,n){for(var o=-1,a=t.length,c=0,u=[];++o<a;){var m=t[o],v=n?n(m):m;if(!o||!Be(v,y)){var y=v;u[c++]=m===0?0:m}}return u}function or(t){return typeof t=="number"?t:Ce(t)?fn:+t}function ke(t){if(typeof t=="string")return t;if(N(t))return Z(t,ke)+"";if(Ce(t))return Ls?Ls.call(t):"";var n=t+"";return n=="0"&&1/t==-mt?"-0":n}function ut(t,n,o){var a=-1,c=wn,u=t.length,m=!0,v=[],y=v;if(o)m=!1,c=Oi;else if(u>=i){var k=n?null:bu(t);if(k)return Cn(k);m=!1,c=Yt,y=new yt}else y=n?[]:v;e:for(;++a<u;){var C=t[a],I=n?n(C):C;if(C=o||C!==0?C:0,m&&I===I){for(var O=y.length;O--;)if(y[O]===I)continue e;n&&y.push(I),v.push(C)}else c(y,I,o)||(y!==v&&y.push(I),v.push(C))}return v}function eo(t,n){return n=pt(n,t),t=Er(t,n),t==null||delete t[je(Pe(n))]}function sr(t,n,o,a){return cn(t,n,o(bt(t,n)),a)}function zn(t,n,o,a){for(var c=t.length,u=a?c:-1;(a?u--:++u<c)&&n(t[u],u,t););return o?Ee(t,a?0:u,a?u+1:c):Ee(t,a?u+1:0,a?c:u)}function rr(t,n){var o=t;return o instanceof H&&(o=o.value()),Ti(n,function(a,c){return c.func.apply(c.thisArg,rt([a],c.args))},o)}function to(t,n,o){var a=t.length;if(a<2)return a?ut(t[0]):[];for(var c=-1,u=x(a);++c<a;)for(var m=t[c],v=-1;++v<a;)v!=c&&(u[c]=sn(u[c]||m,t[v],n,o));return ut(le(u,1),n,o)}function ar(t,n,o){for(var a=-1,c=t.length,u=n.length,m={};++a<c;){var v=a<u?n[a]:e;o(m,t[a],v)}return m}function no(t){return ie(t)?t:[]}function io(t){return typeof t=="function"?t:ye}function pt(t,n){return N(t)?t:po(t,n)?[t]:Lr(K(t))}var uu=U;function dt(t,n,o){var a=t.length;return o=o===e?a:o,!n&&o>=a?t:Ee(t,n,o)}var cr=Yl||function(t){return ae.clearTimeout(t)};function lr(t,n){if(n)return t.slice();var o=t.length,a=As?As(o):new t.constructor(o);return t.copy(a),a}function oo(t){var n=new t.constructor(t.byteLength);return new An(n).set(new An(t)),n}function pu(t,n){var o=n?oo(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}function du(t){var n=new t.constructor(t.source,jo.exec(t));return n.lastIndex=t.lastIndex,n}function fu(t){return nn?X(nn.call(t)):{}}function _r(t,n){var o=n?oo(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}function ur(t,n){if(t!==n){var o=t!==e,a=t===null,c=t===t,u=Ce(t),m=n!==e,v=n===null,y=n===n,k=Ce(n);if(!v&&!k&&!u&&t>n||u&&m&&y&&!v&&!k||a&&m&&y||!o&&y||!c)return 1;if(!a&&!u&&!k&&t<n||k&&o&&c&&!a&&!u||v&&o&&c||!m&&c||!y)return-1}return 0}function mu(t,n,o){for(var a=-1,c=t.criteria,u=n.criteria,m=c.length,v=o.length;++a<m;){var y=ur(c[a],u[a]);if(y){if(a>=v)return y;var k=o[a];return y*(k=="desc"?-1:1)}}return t.index-n.index}function pr(t,n,o,a){for(var c=-1,u=t.length,m=o.length,v=-1,y=n.length,k=re(u-m,0),C=x(y+k),I=!a;++v<y;)C[v]=n[v];for(;++c<m;)(I||c<u)&&(C[o[c]]=t[c]);for(;k--;)C[v++]=t[c++];return C}function dr(t,n,o,a){for(var c=-1,u=t.length,m=-1,v=o.length,y=-1,k=n.length,C=re(u-v,0),I=x(C+k),O=!a;++c<C;)I[c]=t[c];for(var E=c;++y<k;)I[E+y]=n[y];for(;++m<v;)(O||c<u)&&(I[E+o[m]]=t[c++]);return I}function he(t,n){var o=-1,a=t.length;for(n||(n=x(a));++o<a;)n[o]=t[o];return n}function He(t,n,o,a){var c=!o;o||(o={});for(var u=-1,m=n.length;++u<m;){var v=n[u],y=a?a(o[v],t[v],v,o,t):e;y===e&&(y=t[v]),c?Ye(o,v,y):on(o,v,y)}return o}function hu(t,n){return He(t,uo(t),n)}function vu(t,n){return He(t,Sr(t),n)}function Hn(t,n){return function(o,a){var c=N(o)?bl:B_,u=n?n():{};return c(o,t,q(a,2),u)}}function Dt(t){return U(function(n,o){var a=-1,c=o.length,u=c>1?o[c-1]:e,m=c>2?o[2]:e;for(u=t.length>3&&typeof u=="function"?(c--,u):e,m&&de(o[0],o[1],m)&&(u=c<3?e:u,c=1),n=X(n);++a<c;){var v=o[a];v&&t(n,v,a,u)}return n})}function fr(t,n){return function(o,a){if(o==null)return o;if(!ve(o))return t(o,a);for(var c=o.length,u=n?c:-1,m=X(o);(n?u--:++u<c)&&a(m[u],u,m)!==!1;);return o}}function mr(t){return function(n,o,a){for(var c=-1,u=X(n),m=a(n),v=m.length;v--;){var y=m[t?v:++c];if(o(u[y],y,u)===!1)break}return n}}function gu(t,n,o){var a=n&z,c=ln(t);function u(){var m=this&&this!==ae&&this instanceof u?c:t;return m.apply(a?o:this,arguments)}return u}function hr(t){return function(n){n=K(n);var o=Rt(n)?De(n):e,a=o?o[0]:n.charAt(0),c=o?dt(o,1).join(""):n.slice(1);return a[t]()+c}}function Nt(t){return function(n){return Ti(fa(da(n).replace(al,"")),t,"")}}function ln(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var o=Lt(t.prototype),a=t.apply(o,n);return ee(a)?a:o}}function yu(t,n,o){var a=ln(t);function c(){for(var u=arguments.length,m=x(u),v=u,y=Bt(c);v--;)m[v]=arguments[v];var k=u<3&&m[0]!==y&&m[u-1]!==y?[]:at(m,y);if(u-=k.length,u<o)return br(t,n,jn,c.placeholder,e,m,k,e,e,o-u);var C=this&&this!==ae&&this instanceof c?a:t;return be(C,this,m)}return c}function vr(t){return function(n,o,a){var c=X(n);if(!ve(n)){var u=q(o,3);n=ce(n),o=function(v){return u(c[v],v,c)}}var m=t(n,o,a);return m>-1?c[u?n[m]:m]:e}}function gr(t){return Ze(function(n){var o=n.length,a=o,c=Ae.prototype.thru;for(t&&n.reverse();a--;){var u=n[a];if(typeof u!="function")throw new Te(l);if(c&&!m&&Xn(u)=="wrapper")var m=new Ae([],!0)}for(a=m?a:o;++a<o;){u=n[a];var v=Xn(u),y=v=="wrapper"?lo(u):e;y&&fo(y[0])&&y[1]==(Je|Ue|We|Gt)&&!y[4].length&&y[9]==1?m=m[Xn(y[0])].apply(m,y[3]):m=u.length==1&&fo(u)?m[v]():m.thru(u)}return function(){var k=arguments,C=k[0];if(m&&k.length==1&&N(C))return m.plant(C).value();for(var I=0,O=o?n[I].apply(this,k):C;++I<o;)O=n[I].call(this,O);return O}})}function jn(t,n,o,a,c,u,m,v,y,k){var C=n&Je,I=n&z,O=n&W,E=n&(Ue|It),F=n&li,M=O?e:ln(t);function L(){for(var G=arguments.length,j=x(G),Ie=G;Ie--;)j[Ie]=arguments[Ie];if(E)var fe=Bt(L),Se=Al(j,fe);if(a&&(j=pr(j,a,c,E)),u&&(j=dr(j,u,m,E)),G-=Se,E&&G<k){var oe=at(j,fe);return br(t,n,jn,L.placeholder,o,j,oe,v,y,k-G)}var Me=I?o:this,it=O?Me[t]:t;return G=j.length,v?j=Bu(j,v):F&&G>1&&j.reverse(),C&&y<G&&(j.length=y),this&&this!==ae&&this instanceof L&&(it=M||ln(it)),it.apply(Me,j)}return L}function yr(t,n){return function(o,a){return J_(o,t,n(a),{})}}function Jn(t,n){return function(o,a){var c;if(o===e&&a===e)return n;if(o!==e&&(c=o),a!==e){if(c===e)return a;typeof o=="string"||typeof a=="string"?(o=ke(o),a=ke(a)):(o=or(o),a=or(a)),c=t(o,a)}return c}}function so(t){return Ze(function(n){return n=Z(n,we(q())),U(function(o){var a=this;return t(n,function(c){return be(c,a,o)})})})}function Kn(t,n){n=n===e?" ":ke(n);var o=n.length;if(o<2)return o?Vi(n,t):n;var a=Vi(n,qn(t/Et(n)));return Rt(n)?dt(De(a),0,t).join(""):a.slice(0,t)}function xu(t,n,o,a){var c=n&z,u=ln(t);function m(){for(var v=-1,y=arguments.length,k=-1,C=a.length,I=x(C+y),O=this&&this!==ae&&this instanceof m?u:t;++k<C;)I[k]=a[k];for(;y--;)I[k++]=arguments[++v];return be(O,c?o:this,I)}return m}function xr(t){return function(n,o,a){return a&&typeof a!="number"&&de(n,o,a)&&(o=a=e),n=nt(n),o===e?(o=n,n=0):o=nt(o),a=a===e?n<o?1:-1:nt(a),su(n,o,a,t)}}function Qn(t){return function(n,o){return typeof n=="string"&&typeof o=="string"||(n=qe(n),o=qe(o)),t(n,o)}}function br(t,n,o,a,c,u,m,v,y,k){var C=n&Ue,I=C?m:e,O=C?e:m,E=C?u:e,F=C?e:u;n|=C?We:St,n&=~(C?St:We),n&Bo||(n&=~(z|W));var M=[t,n,c,E,I,F,O,v,y,k],L=o.apply(e,M);return fo(t)&&Pr(L,M),L.placeholder=a,qr(L,t,n)}function ro(t){var n=se[t];return function(o,a){if(o=qe(o),a=a==null?0:_e(B(a),292),a&&qs(o)){var c=(K(o)+"e").split("e"),u=n(c[0]+"e"+(+c[1]+a));return c=(K(u)+"e").split("e"),+(c[0]+"e"+(+c[1]-a))}return n(o)}}var bu=qt&&1/Cn(new qt([,-0]))[1]==mt?function(t){return new qt(t)}:To;function wr(t){return function(n){var o=ue(n);return o==Fe?Li(n):o==Le?Dl(n):Tl(n,t(n))}}function Ve(t,n,o,a,c,u,m,v){var y=n&W;if(!y&&typeof t!="function")throw new Te(l);var k=a?a.length:0;if(k||(n&=~(We|St),a=c=e),m=m===e?m:re(B(m),0),v=v===e?v:B(v),k-=c?c.length:0,n&St){var C=a,I=c;a=c=e}var O=y?e:lo(t),E=[t,n,o,a,c,C,I,u,m,v];if(O&&Lu(E,O),t=E[0],n=E[1],o=E[2],a=E[3],c=E[4],v=E[9]=E[9]===e?y?0:t.length:re(E[9]-k,0),!v&&n&(Ue|It)&&(n&=~(Ue|It)),!n||n==z)var F=gu(t,n,o);else n==Ue||n==It?F=yu(t,n,v):(n==We||n==(z|We))&&!c.length?F=xu(t,n,o,a):F=jn.apply(e,E);var M=O?nr:Pr;return qr(M(F,E),t,n)}function kr(t,n,o,a){return t===e||Be(t,Pt[o])&&!Q.call(a,o)?n:t}function Cr(t,n,o,a,c,u){return ee(t)&&ee(n)&&(u.set(n,t),Wn(t,n,e,Cr,u),u.delete(n)),t}function wu(t){return pn(t)?e:t}function Ir(t,n,o,a,c,u){var m=o&b,v=t.length,y=n.length;if(v!=y&&!(m&&y>v))return!1;var k=u.get(t),C=u.get(n);if(k&&C)return k==n&&C==t;var I=-1,O=!0,E=o&te?new yt:e;for(u.set(t,n),u.set(n,t);++I<v;){var F=t[I],M=n[I];if(a)var L=m?a(M,F,I,n,t,u):a(F,M,I,t,n,u);if(L!==e){if(L)continue;O=!1;break}if(E){if(!Ai(n,function(G,j){if(!Yt(E,j)&&(F===G||c(F,G,o,a,u)))return E.push(j)})){O=!1;break}}else if(!(F===M||c(F,M,o,a,u))){O=!1;break}}return u.delete(t),u.delete(n),O}function ku(t,n,o,a,c,u,m){switch(o){case Ot:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case Xt:return!(t.byteLength!=n.byteLength||!u(new An(t),new An(n)));case zt:case Ht:case jt:return Be(+t,+n);case hn:return t.name==n.name&&t.message==n.message;case Jt:case Kt:return t==n+"";case Fe:var v=Li;case Le:var y=a&b;if(v||(v=Cn),t.size!=n.size&&!y)return!1;var k=m.get(t);if(k)return k==n;a|=te,m.set(t,n);var C=Ir(v(t),v(n),a,c,u,m);return m.delete(t),C;case gn:if(nn)return nn.call(t)==nn.call(n)}return!1}function Cu(t,n,o,a,c,u){var m=o&b,v=ao(t),y=v.length,k=ao(n),C=k.length;if(y!=C&&!m)return!1;for(var I=y;I--;){var O=v[I];if(!(m?O in n:Q.call(n,O)))return!1}var E=u.get(t),F=u.get(n);if(E&&F)return E==n&&F==t;var M=!0;u.set(t,n),u.set(n,t);for(var L=m;++I<y;){O=v[I];var G=t[O],j=n[O];if(a)var Ie=m?a(j,G,O,n,t,u):a(G,j,O,t,n,u);if(!(Ie===e?G===j||c(G,j,o,a,u):Ie)){M=!1;break}L||(L=O=="constructor")}if(M&&!L){var fe=t.constructor,Se=n.constructor;fe!=Se&&"constructor"in t&&"constructor"in n&&!(typeof fe=="function"&&fe instanceof fe&&typeof Se=="function"&&Se instanceof Se)&&(M=!1)}return u.delete(t),u.delete(n),M}function Ze(t){return ho(Rr(t,e,Mr),t+"")}function ao(t){return Hs(t,ce,uo)}function co(t){return Hs(t,ge,Sr)}var lo=Ln?function(t){return Ln.get(t)}:To;function Xn(t){for(var n=t.name+"",o=Ft[n],a=Q.call(Ft,n)?o.length:0;a--;){var c=o[a],u=c.func;if(u==null||u==t)return c.name}return n}function Bt(t){var n=Q.call(_,"placeholder")?_:t;return n.placeholder}function q(){var t=_.iteratee||$o;return t=t===$o?Ks:t,arguments.length?t(arguments[0],arguments[1]):t}function Yn(t,n){var o=t.__data__;return Eu(n)?o[typeof n=="string"?"string":"hash"]:o.map}function _o(t){for(var n=ce(t),o=n.length;o--;){var a=n[o],c=t[a];n[o]=[a,c,Tr(c)]}return n}function wt(t,n){var o=ql(t,n);return Js(o)?o:e}function Iu(t){var n=Q.call(t,vt),o=t[vt];try{t[vt]=e;var a=!0}catch(u){}var c=On.call(t);return a&&(n?t[vt]=o:delete t[vt]),c}var uo=Ni?function(t){return t==null?[]:(t=X(t),st(Ni(t),function(n){return Es.call(t,n)}))}:Ao,Sr=Ni?function(t){for(var n=[];t;)rt(n,uo(t)),t=Rn(t);return n}:Ao,ue=pe;(Bi&&ue(new Bi(new ArrayBuffer(1)))!=Ot||Zt&&ue(new Zt)!=Fe||Mi&&ue(Mi.resolve())!=Wo||qt&&ue(new qt)!=Le||en&&ue(new en)!=Qt)&&(ue=function(t){var n=pe(t),o=n==Ke?t.constructor:e,a=o?kt(o):"";if(a)switch(a){case r_:return Ot;case a_:return Fe;case c_:return Wo;case l_:return Le;case u_:return Qt}return n});function Su(t,n,o){for(var a=-1,c=o.length;++a<c;){var u=o[a],m=u.size;switch(u.type){case"drop":t+=m;break;case"dropRight":n-=m;break;case"take":n=_e(n,t+m);break;case"takeRight":t=re(t,n-m);break}}return{start:t,end:n}}function $u(t){var n=t.match(Ec);return n?n[1].split(Pc):[]}function $r(t,n,o){n=pt(n,t);for(var a=-1,c=n.length,u=!1;++a<c;){var m=je(n[a]);if(!(u=t!=null&&o(t,m)))break;t=t[m]}return u||++a!=c?u:(c=t==null?0:t.length,!!c&&oi(c)&&et(m,c)&&(N(t)||Ct(t)))}function Ou(t){var n=t.length,o=new t.constructor(n);return n&&typeof t[0]=="string"&&Q.call(t,"index")&&(o.index=t.index,o.input=t.input),o}function Or(t){return typeof t.constructor=="function"&&!_n(t)?Lt(Rn(t)):{}}function Tu(t,n,o){var a=t.constructor;switch(n){case Xt:return oo(t);case zt:case Ht:return new a(+t);case Ot:return pu(t,o);case _i:case ui:case pi:case di:case fi:case mi:case hi:case vi:case gi:return _r(t,o);case Fe:return new a;case jt:case Kt:return new a(t);case Jt:return du(t);case Le:return new a;case gn:return fu(t)}}function Au(t,n){var o=n.length;if(!o)return t;var a=o-1;return n[a]=(o>1?"& ":"")+n[a],n=n.join(o>2?", ":" "),t.replace(Rc,`{
/* [wrapped with `+n+`] */
`)}function Ru(t){return N(t)||Ct(t)||!!(Ps&&t&&t[Ps])}function et(t,n){var o=typeof t;return n=n==null?ot:n,!!n&&(o=="number"||o!="symbol"&&Wc.test(t))&&t>-1&&t%1==0&&t<n}function de(t,n,o){if(!ee(o))return!1;var a=typeof n;return(a=="number"?ve(o)&&et(n,o.length):a=="string"&&n in o)?Be(o[n],t):!1}function po(t,n){if(N(t))return!1;var o=typeof t;return o=="number"||o=="symbol"||o=="boolean"||t==null||Ce(t)?!0:$c.test(t)||!Sc.test(t)||n!=null&&t in X(n)}function Eu(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function fo(t){var n=Xn(t),o=_[n];if(typeof o!="function"||!(n in H.prototype))return!1;if(t===o)return!0;var a=lo(o);return!!a&&t===a[0]}function Pu(t){return!!Ts&&Ts in t}var qu=Sn?tt:Ro;function _n(t){var n=t&&t.constructor,o=typeof n=="function"&&n.prototype||Pt;return t===o}function Tr(t){return t===t&&!ee(t)}function Ar(t,n){return function(o){return o==null?!1:o[t]===n&&(n!==e||t in X(o))}}function Fu(t){var n=ni(t,function(a){return o.size===T&&o.clear(),a}),o=n.cache;return n}function Lu(t,n){var o=t[1],a=n[1],c=o|a,u=c<(z|W|Je),m=a==Je&&o==Ue||a==Je&&o==Gt&&t[7].length<=n[8]||a==(Je|Gt)&&n[7].length<=n[8]&&o==Ue;if(!(u||m))return t;a&z&&(t[2]=n[2],c|=o&z?0:Bo);var v=n[3];if(v){var y=t[3];t[3]=y?pr(y,v,n[4]):v,t[4]=y?at(t[3],S):n[4]}return v=n[5],v&&(y=t[5],t[5]=y?dr(y,v,n[6]):v,t[6]=y?at(t[5],S):n[6]),v=n[7],v&&(t[7]=v),a&Je&&(t[8]=t[8]==null?n[8]:_e(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=c,t}function Du(t){var n=[];if(t!=null)for(var o in X(t))n.push(o);return n}function Nu(t){return On.call(t)}function Rr(t,n,o){return n=re(n===e?t.length-1:n,0),function(){for(var a=arguments,c=-1,u=re(a.length-n,0),m=x(u);++c<u;)m[c]=a[n+c];c=-1;for(var v=x(n+1);++c<n;)v[c]=a[c];return v[n]=o(m),be(t,this,v)}}function Er(t,n){return n.length<2?t:bt(t,Ee(n,0,-1))}function Bu(t,n){for(var o=t.length,a=_e(n.length,o),c=he(t);a--;){var u=n[a];t[a]=et(u,o)?c[u]:e}return t}function mo(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var Pr=Fr(nr),un=Zl||function(t,n){return ae.setTimeout(t,n)},ho=Fr(cu);function qr(t,n,o){var a=n+"";return ho(t,Au(a,Mu($u(a),o)))}function Fr(t){var n=0,o=0;return function(){var a=i_(),c=rc-(a-o);if(o=a,c>0){if(++n>=sc)return arguments[0]}else n=0;return t.apply(e,arguments)}}function Vn(t,n){var o=-1,a=t.length,c=a-1;for(n=n===e?a:n;++o<n;){var u=Yi(o,c),m=t[u];t[u]=t[o],t[o]=m}return t.length=n,t}var Lr=Fu(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(Oc,function(o,a,c,u){n.push(c?u.replace(Lc,"$1"):a||o)}),n});function je(t){if(typeof t=="string"||Ce(t))return t;var n=t+"";return n=="0"&&1/t==-mt?"-0":n}function kt(t){if(t!=null){try{return $n.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function Mu(t,n){return Oe(pc,function(o){var a="_."+o[0];n&o[1]&&!wn(t,a)&&t.push(a)}),t.sort()}function Dr(t){if(t instanceof H)return t.clone();var n=new Ae(t.__wrapped__,t.__chain__);return n.__actions__=he(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function Uu(t,n,o){(o?de(t,n,o):n===e)?n=1:n=re(B(n),0);var a=t==null?0:t.length;if(!a||n<1)return[];for(var c=0,u=0,m=x(qn(a/n));c<a;)m[u++]=Ee(t,c,c+=n);return m}function Wu(t){for(var n=-1,o=t==null?0:t.length,a=0,c=[];++n<o;){var u=t[n];u&&(c[a++]=u)}return c}function Gu(){var t=arguments.length;if(!t)return[];for(var n=x(t-1),o=arguments[0],a=t;a--;)n[a-1]=arguments[a];return rt(N(o)?he(o):[o],le(n,1))}var zu=U(function(t,n){return ie(t)?sn(t,le(n,1,ie,!0)):[]}),Hu=U(function(t,n){var o=Pe(n);return ie(o)&&(o=e),ie(t)?sn(t,le(n,1,ie,!0),q(o,2)):[]}),ju=U(function(t,n){var o=Pe(n);return ie(o)&&(o=e),ie(t)?sn(t,le(n,1,ie,!0),e,o):[]});function Ju(t,n,o){var a=t==null?0:t.length;return a?(n=o||n===e?1:B(n),Ee(t,n<0?0:n,a)):[]}function Ku(t,n,o){var a=t==null?0:t.length;return a?(n=o||n===e?1:B(n),n=a-n,Ee(t,0,n<0?0:n)):[]}function Qu(t,n){return t&&t.length?zn(t,q(n,3),!0,!0):[]}function Xu(t,n){return t&&t.length?zn(t,q(n,3),!0):[]}function Yu(t,n,o,a){var c=t==null?0:t.length;return c?(o&&typeof o!="number"&&de(t,n,o)&&(o=0,a=c),G_(t,n,o,a)):[]}function Nr(t,n,o){var a=t==null?0:t.length;if(!a)return-1;var c=o==null?0:B(o);return c<0&&(c=re(a+c,0)),kn(t,q(n,3),c)}function Br(t,n,o){var a=t==null?0:t.length;if(!a)return-1;var c=a-1;return o!==e&&(c=B(o),c=o<0?re(a+c,0):_e(c,a-1)),kn(t,q(n,3),c,!0)}function Mr(t){var n=t==null?0:t.length;return n?le(t,1):[]}function Vu(t){var n=t==null?0:t.length;return n?le(t,mt):[]}function Zu(t,n){var o=t==null?0:t.length;return o?(n=n===e?1:B(n),le(t,n)):[]}function ep(t){for(var n=-1,o=t==null?0:t.length,a={};++n<o;){var c=t[n];a[c[0]]=c[1]}return a}function Ur(t){return t&&t.length?t[0]:e}function tp(t,n,o){var a=t==null?0:t.length;if(!a)return-1;var c=o==null?0:B(o);return c<0&&(c=re(a+c,0)),At(t,n,c)}function np(t){var n=t==null?0:t.length;return n?Ee(t,0,-1):[]}var ip=U(function(t){var n=Z(t,no);return n.length&&n[0]===t[0]?ji(n):[]}),op=U(function(t){var n=Pe(t),o=Z(t,no);return n===Pe(o)?n=e:o.pop(),o.length&&o[0]===t[0]?ji(o,q(n,2)):[]}),sp=U(function(t){var n=Pe(t),o=Z(t,no);return n=typeof n=="function"?n:e,n&&o.pop(),o.length&&o[0]===t[0]?ji(o,e,n):[]});function rp(t,n){return t==null?"":t_.call(t,n)}function Pe(t){var n=t==null?0:t.length;return n?t[n-1]:e}function ap(t,n,o){var a=t==null?0:t.length;if(!a)return-1;var c=a;return o!==e&&(c=B(o),c=c<0?re(a+c,0):_e(c,a-1)),n===n?Bl(t,n,c):kn(t,bs,c,!0)}function cp(t,n){return t&&t.length?Vs(t,B(n)):e}var lp=U(Wr);function Wr(t,n){return t&&t.length&&n&&n.length?Xi(t,n):t}function _p(t,n,o){return t&&t.length&&n&&n.length?Xi(t,n,q(o,2)):t}function up(t,n,o){return t&&t.length&&n&&n.length?Xi(t,n,e,o):t}var pp=Ze(function(t,n){var o=t==null?0:t.length,a=Wi(t,n);return tr(t,Z(n,function(c){return et(c,o)?+c:c}).sort(ur)),a});function dp(t,n){var o=[];if(!(t&&t.length))return o;var a=-1,c=[],u=t.length;for(n=q(n,3);++a<u;){var m=t[a];n(m,a,t)&&(o.push(m),c.push(a))}return tr(t,c),o}function vo(t){return t==null?t:s_.call(t)}function fp(t,n,o){var a=t==null?0:t.length;return a?(o&&typeof o!="number"&&de(t,n,o)?(n=0,o=a):(n=n==null?0:B(n),o=o===e?a:B(o)),Ee(t,n,o)):[]}function mp(t,n){return Gn(t,n)}function hp(t,n,o){return Zi(t,n,q(o,2))}function vp(t,n){var o=t==null?0:t.length;if(o){var a=Gn(t,n);if(a<o&&Be(t[a],n))return a}return-1}function gp(t,n){return Gn(t,n,!0)}function yp(t,n,o){return Zi(t,n,q(o,2),!0)}function xp(t,n){var o=t==null?0:t.length;if(o){var a=Gn(t,n,!0)-1;if(Be(t[a],n))return a}return-1}function bp(t){return t&&t.length?ir(t):[]}function wp(t,n){return t&&t.length?ir(t,q(n,2)):[]}function kp(t){var n=t==null?0:t.length;return n?Ee(t,1,n):[]}function Cp(t,n,o){return t&&t.length?(n=o||n===e?1:B(n),Ee(t,0,n<0?0:n)):[]}function Ip(t,n,o){var a=t==null?0:t.length;return a?(n=o||n===e?1:B(n),n=a-n,Ee(t,n<0?0:n,a)):[]}function Sp(t,n){return t&&t.length?zn(t,q(n,3),!1,!0):[]}function $p(t,n){return t&&t.length?zn(t,q(n,3)):[]}var Op=U(function(t){return ut(le(t,1,ie,!0))}),Tp=U(function(t){var n=Pe(t);return ie(n)&&(n=e),ut(le(t,1,ie,!0),q(n,2))}),Ap=U(function(t){var n=Pe(t);return n=typeof n=="function"?n:e,ut(le(t,1,ie,!0),e,n)});function Rp(t){return t&&t.length?ut(t):[]}function Ep(t,n){return t&&t.length?ut(t,q(n,2)):[]}function Pp(t,n){return n=typeof n=="function"?n:e,t&&t.length?ut(t,e,n):[]}function go(t){if(!(t&&t.length))return[];var n=0;return t=st(t,function(o){if(ie(o))return n=re(o.length,n),!0}),qi(n,function(o){return Z(t,Ri(o))})}function Gr(t,n){if(!(t&&t.length))return[];var o=go(t);return n==null?o:Z(o,function(a){return be(n,e,a)})}var qp=U(function(t,n){return ie(t)?sn(t,n):[]}),Fp=U(function(t){return to(st(t,ie))}),Lp=U(function(t){var n=Pe(t);return ie(n)&&(n=e),to(st(t,ie),q(n,2))}),Dp=U(function(t){var n=Pe(t);return n=typeof n=="function"?n:e,to(st(t,ie),e,n)}),Np=U(go);function Bp(t,n){return ar(t||[],n||[],on)}function Mp(t,n){return ar(t||[],n||[],cn)}var Up=U(function(t){var n=t.length,o=n>1?t[n-1]:e;return o=typeof o=="function"?(t.pop(),o):e,Gr(t,o)});function zr(t){var n=_(t);return n.__chain__=!0,n}function Wp(t,n){return n(t),t}function Zn(t,n){return n(t)}var Gp=Ze(function(t){var n=t.length,o=n?t[0]:0,a=this.__wrapped__,c=function(u){return Wi(u,t)};return n>1||this.__actions__.length||!(a instanceof H)||!et(o)?this.thru(c):(a=a.slice(o,+o+(n?1:0)),a.__actions__.push({func:Zn,args:[c],thisArg:e}),new Ae(a,this.__chain__).thru(function(u){return n&&!u.length&&u.push(e),u}))});function zp(){return zr(this)}function Hp(){return new Ae(this.value(),this.__chain__)}function jp(){this.__values__===e&&(this.__values__=oa(this.value()));var t=this.__index__>=this.__values__.length,n=t?e:this.__values__[this.__index__++];return{done:t,value:n}}function Jp(){return this}function Kp(t){for(var n,o=this;o instanceof Nn;){var a=Dr(o);a.__index__=0,a.__values__=e,n?c.__wrapped__=a:n=a;var c=a;o=o.__wrapped__}return c.__wrapped__=t,n}function Qp(){var t=this.__wrapped__;if(t instanceof H){var n=t;return this.__actions__.length&&(n=new H(this)),n=n.reverse(),n.__actions__.push({func:Zn,args:[vo],thisArg:e}),new Ae(n,this.__chain__)}return this.thru(vo)}function Xp(){return rr(this.__wrapped__,this.__actions__)}var Yp=Hn(function(t,n,o){Q.call(t,o)?++t[o]:Ye(t,o,1)});function Vp(t,n,o){var a=N(t)?ys:W_;return o&&de(t,n,o)&&(n=e),a(t,q(n,3))}function Zp(t,n){var o=N(t)?st:Gs;return o(t,q(n,3))}var ed=vr(Nr),td=vr(Br);function nd(t,n){return le(ei(t,n),1)}function id(t,n){return le(ei(t,n),mt)}function od(t,n,o){return o=o===e?1:B(o),le(ei(t,n),o)}function Hr(t,n){var o=N(t)?Oe:_t;return o(t,q(n,3))}function jr(t,n){var o=N(t)?wl:Ws;return o(t,q(n,3))}var sd=Hn(function(t,n,o){Q.call(t,o)?t[o].push(n):Ye(t,o,[n])});function rd(t,n,o,a){t=ve(t)?t:Ut(t),o=o&&!a?B(o):0;var c=t.length;return o<0&&(o=re(c+o,0)),si(t)?o<=c&&t.indexOf(n,o)>-1:!!c&&At(t,n,o)>-1}var ad=U(function(t,n,o){var a=-1,c=typeof n=="function",u=ve(t)?x(t.length):[];return _t(t,function(m){u[++a]=c?be(n,m,o):rn(m,n,o)}),u}),cd=Hn(function(t,n,o){Ye(t,o,n)});function ei(t,n){var o=N(t)?Z:Qs;return o(t,q(n,3))}function ld(t,n,o,a){return t==null?[]:(N(n)||(n=n==null?[]:[n]),o=a?e:o,N(o)||(o=o==null?[]:[o]),Zs(t,n,o))}var _d=Hn(function(t,n,o){t[o?0:1].push(n)},function(){return[[],[]]});function ud(t,n,o){var a=N(t)?Ti:ks,c=arguments.length<3;return a(t,q(n,4),o,c,_t)}function pd(t,n,o){var a=N(t)?kl:ks,c=arguments.length<3;return a(t,q(n,4),o,c,Ws)}function dd(t,n){var o=N(t)?st:Gs;return o(t,ii(q(n,3)))}function fd(t){var n=N(t)?Ns:ru;return n(t)}function md(t,n,o){(o?de(t,n,o):n===e)?n=1:n=B(n);var a=N(t)?D_:au;return a(t,n)}function hd(t){var n=N(t)?N_:lu;return n(t)}function vd(t){if(t==null)return 0;if(ve(t))return si(t)?Et(t):t.length;var n=ue(t);return n==Fe||n==Le?t.size:Ki(t).length}function gd(t,n,o){var a=N(t)?Ai:_u;return o&&de(t,n,o)&&(n=e),a(t,q(n,3))}var yd=U(function(t,n){if(t==null)return[];var o=n.length;return o>1&&de(t,n[0],n[1])?n=[]:o>2&&de(n[0],n[1],n[2])&&(n=[n[0]]),Zs(t,le(n,1),[])}),ti=Vl||function(){return ae.Date.now()};function xd(t,n){if(typeof n!="function")throw new Te(l);return t=B(t),function(){if(--t<1)return n.apply(this,arguments)}}function Jr(t,n,o){return n=o?e:n,n=t&&n==null?t.length:n,Ve(t,Je,e,e,e,e,n)}function Kr(t,n){var o;if(typeof n!="function")throw new Te(l);return t=B(t),function(){return--t>0&&(o=n.apply(this,arguments)),t<=1&&(n=e),o}}var yo=U(function(t,n,o){var a=z;if(o.length){var c=at(o,Bt(yo));a|=We}return Ve(t,a,n,o,c)}),Qr=U(function(t,n,o){var a=z|W;if(o.length){var c=at(o,Bt(Qr));a|=We}return Ve(n,a,t,o,c)});function Xr(t,n,o){n=o?e:n;var a=Ve(t,Ue,e,e,e,e,e,n);return a.placeholder=Xr.placeholder,a}function Yr(t,n,o){n=o?e:n;var a=Ve(t,It,e,e,e,e,e,n);return a.placeholder=Yr.placeholder,a}function Vr(t,n,o){var a,c,u,m,v,y,k=0,C=!1,I=!1,O=!0;if(typeof t!="function")throw new Te(l);n=qe(n)||0,ee(o)&&(C=!!o.leading,I="maxWait"in o,u=I?re(qe(o.maxWait)||0,n):u,O="trailing"in o?!!o.trailing:O);function E(oe){var Me=a,it=c;return a=c=e,k=oe,m=t.apply(it,Me),m}function F(oe){return k=oe,v=un(G,n),C?E(oe):m}function M(oe){var Me=oe-y,it=oe-k,va=n-Me;return I?_e(va,u-it):va}function L(oe){var Me=oe-y,it=oe-k;return y===e||Me>=n||Me<0||I&&it>=u}function G(){var oe=ti();if(L(oe))return j(oe);v=un(G,M(oe))}function j(oe){return v=e,O&&a?E(oe):(a=c=e,m)}function Ie(){v!==e&&cr(v),k=0,a=y=c=v=e}function fe(){return v===e?m:j(ti())}function Se(){var oe=ti(),Me=L(oe);if(a=arguments,c=this,y=oe,Me){if(v===e)return F(y);if(I)return cr(v),v=un(G,n),E(y)}return v===e&&(v=un(G,n)),m}return Se.cancel=Ie,Se.flush=fe,Se}var bd=U(function(t,n){return Us(t,1,n)}),wd=U(function(t,n,o){return Us(t,qe(n)||0,o)});function kd(t){return Ve(t,li)}function ni(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new Te(l);var o=function(){var a=arguments,c=n?n.apply(this,a):a[0],u=o.cache;if(u.has(c))return u.get(c);var m=t.apply(this,a);return o.cache=u.set(c,m)||u,m};return o.cache=new(ni.Cache||Xe),o}ni.Cache=Xe;function ii(t){if(typeof t!="function")throw new Te(l);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function Cd(t){return Kr(2,t)}var Id=uu(function(t,n){n=n.length==1&&N(n[0])?Z(n[0],we(q())):Z(le(n,1),we(q()));var o=n.length;return U(function(a){for(var c=-1,u=_e(a.length,o);++c<u;)a[c]=n[c].call(this,a[c]);return be(t,this,a)})}),xo=U(function(t,n){var o=at(n,Bt(xo));return Ve(t,We,e,n,o)}),Zr=U(function(t,n){var o=at(n,Bt(Zr));return Ve(t,St,e,n,o)}),Sd=Ze(function(t,n){return Ve(t,Gt,e,e,e,n)});function $d(t,n){if(typeof t!="function")throw new Te(l);return n=n===e?n:B(n),U(t,n)}function Od(t,n){if(typeof t!="function")throw new Te(l);return n=n==null?0:re(B(n),0),U(function(o){var a=o[n],c=dt(o,0,n);return a&&rt(c,a),be(t,this,c)})}function Td(t,n,o){var a=!0,c=!0;if(typeof t!="function")throw new Te(l);return ee(o)&&(a="leading"in o?!!o.leading:a,c="trailing"in o?!!o.trailing:c),Vr(t,n,{leading:a,maxWait:n,trailing:c})}function Ad(t){return Jr(t,1)}function Rd(t,n){return xo(io(n),t)}function Ed(){if(!arguments.length)return[];var t=arguments[0];return N(t)?t:[t]}function Pd(t){return Re(t,P)}function qd(t,n){return n=typeof n=="function"?n:e,Re(t,P,n)}function Fd(t){return Re(t,R|P)}function Ld(t,n){return n=typeof n=="function"?n:e,Re(t,R|P,n)}function Dd(t,n){return n==null||Ms(t,n,ce(n))}function Be(t,n){return t===n||t!==t&&n!==n}var Nd=Qn(Hi),Bd=Qn(function(t,n){return t>=n}),Ct=js(function(){return arguments}())?js:function(t){return ne(t)&&Q.call(t,"callee")&&!Es.call(t,"callee")},N=x.isArray,Md=ds?we(ds):K_;function ve(t){return t!=null&&oi(t.length)&&!tt(t)}function ie(t){return ne(t)&&ve(t)}function Ud(t){return t===!0||t===!1||ne(t)&&pe(t)==zt}var ft=e_||Ro,Wd=fs?we(fs):Q_;function Gd(t){return ne(t)&&t.nodeType===1&&!pn(t)}function zd(t){if(t==null)return!0;if(ve(t)&&(N(t)||typeof t=="string"||typeof t.splice=="function"||ft(t)||Mt(t)||Ct(t)))return!t.length;var n=ue(t);if(n==Fe||n==Le)return!t.size;if(_n(t))return!Ki(t).length;for(var o in t)if(Q.call(t,o))return!1;return!0}function Hd(t,n){return an(t,n)}function jd(t,n,o){o=typeof o=="function"?o:e;var a=o?o(t,n):e;return a===e?an(t,n,e,o):!!a}function bo(t){if(!ne(t))return!1;var n=pe(t);return n==hn||n==fc||typeof t.message=="string"&&typeof t.name=="string"&&!pn(t)}function Jd(t){return typeof t=="number"&&qs(t)}function tt(t){if(!ee(t))return!1;var n=pe(t);return n==vn||n==Uo||n==dc||n==hc}function ea(t){return typeof t=="number"&&t==B(t)}function oi(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ot}function ee(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function ne(t){return t!=null&&typeof t=="object"}var ta=ms?we(ms):Y_;function Kd(t,n){return t===n||Ji(t,n,_o(n))}function Qd(t,n,o){return o=typeof o=="function"?o:e,Ji(t,n,_o(n),o)}function Xd(t){return na(t)&&t!=+t}function Yd(t){if(qu(t))throw new D(s);return Js(t)}function Vd(t){return t===null}function Zd(t){return t==null}function na(t){return typeof t=="number"||ne(t)&&pe(t)==jt}function pn(t){if(!ne(t)||pe(t)!=Ke)return!1;var n=Rn(t);if(n===null)return!0;var o=Q.call(n,"constructor")&&n.constructor;return typeof o=="function"&&o instanceof o&&$n.call(o)==Kl}var wo=hs?we(hs):V_;function ef(t){return ea(t)&&t>=-ot&&t<=ot}var ia=vs?we(vs):Z_;function si(t){return typeof t=="string"||!N(t)&&ne(t)&&pe(t)==Kt}function Ce(t){return typeof t=="symbol"||ne(t)&&pe(t)==gn}var Mt=gs?we(gs):eu;function tf(t){return t===e}function nf(t){return ne(t)&&ue(t)==Qt}function of(t){return ne(t)&&pe(t)==gc}var sf=Qn(Qi),rf=Qn(function(t,n){return t<=n});function oa(t){if(!t)return[];if(ve(t))return si(t)?De(t):he(t);if(Vt&&t[Vt])return Ll(t[Vt]());var n=ue(t),o=n==Fe?Li:n==Le?Cn:Ut;return o(t)}function nt(t){if(!t)return t===0?t:0;if(t=qe(t),t===mt||t===-mt){var n=t<0?-1:1;return n*lc}return t===t?t:0}function B(t){var n=nt(t),o=n%1;return n===n?o?n-o:n:0}function sa(t){return t?xt(B(t),0,Ge):0}function qe(t){if(typeof t=="number")return t;if(Ce(t))return fn;if(ee(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=ee(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=Cs(t);var o=Bc.test(t);return o||Uc.test(t)?yl(t.slice(2),o?2:8):Nc.test(t)?fn:+t}function ra(t){return He(t,ge(t))}function af(t){return t?xt(B(t),-ot,ot):t===0?t:0}function K(t){return t==null?"":ke(t)}var cf=Dt(function(t,n){if(_n(n)||ve(n)){He(n,ce(n),t);return}for(var o in n)Q.call(n,o)&&on(t,o,n[o])}),aa=Dt(function(t,n){He(n,ge(n),t)}),ri=Dt(function(t,n,o,a){He(n,ge(n),t,a)}),lf=Dt(function(t,n,o,a){He(n,ce(n),t,a)}),_f=Ze(Wi);function uf(t,n){var o=Lt(t);return n==null?o:Bs(o,n)}var pf=U(function(t,n){t=X(t);var o=-1,a=n.length,c=a>2?n[2]:e;for(c&&de(n[0],n[1],c)&&(a=1);++o<a;)for(var u=n[o],m=ge(u),v=-1,y=m.length;++v<y;){var k=m[v],C=t[k];(C===e||Be(C,Pt[k])&&!Q.call(t,k))&&(t[k]=u[k])}return t}),df=U(function(t){return t.push(e,Cr),be(ca,e,t)});function ff(t,n){return xs(t,q(n,3),ze)}function mf(t,n){return xs(t,q(n,3),zi)}function hf(t,n){return t==null?t:Gi(t,q(n,3),ge)}function vf(t,n){return t==null?t:zs(t,q(n,3),ge)}function gf(t,n){return t&&ze(t,q(n,3))}function yf(t,n){return t&&zi(t,q(n,3))}function xf(t){return t==null?[]:Un(t,ce(t))}function bf(t){return t==null?[]:Un(t,ge(t))}function ko(t,n,o){var a=t==null?e:bt(t,n);return a===e?o:a}function wf(t,n){return t!=null&&$r(t,n,z_)}function Co(t,n){return t!=null&&$r(t,n,H_)}var kf=yr(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=On.call(n)),t[n]=o},So(ye)),Cf=yr(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=On.call(n)),Q.call(t,n)?t[n].push(o):t[n]=[o]},q),If=U(rn);function ce(t){return ve(t)?Ds(t):Ki(t)}function ge(t){return ve(t)?Ds(t,!0):tu(t)}function Sf(t,n){var o={};return n=q(n,3),ze(t,function(a,c,u){Ye(o,n(a,c,u),a)}),o}function $f(t,n){var o={};return n=q(n,3),ze(t,function(a,c,u){Ye(o,c,n(a,c,u))}),o}var Of=Dt(function(t,n,o){Wn(t,n,o)}),ca=Dt(function(t,n,o,a){Wn(t,n,o,a)}),Tf=Ze(function(t,n){var o={};if(t==null)return o;var a=!1;n=Z(n,function(u){return u=pt(u,t),a||(a=u.length>1),u}),He(t,co(t),o),a&&(o=Re(o,R|f|P,wu));for(var c=n.length;c--;)eo(o,n[c]);return o});function Af(t,n){return la(t,ii(q(n)))}var Rf=Ze(function(t,n){return t==null?{}:iu(t,n)});function la(t,n){if(t==null)return{};var o=Z(co(t),function(a){return[a]});return n=q(n),er(t,o,function(a,c){return n(a,c[0])})}function Ef(t,n,o){n=pt(n,t);var a=-1,c=n.length;for(c||(c=1,t=e);++a<c;){var u=t==null?e:t[je(n[a])];u===e&&(a=c,u=o),t=tt(u)?u.call(t):u}return t}function Pf(t,n,o){return t==null?t:cn(t,n,o)}function qf(t,n,o,a){return a=typeof a=="function"?a:e,t==null?t:cn(t,n,o,a)}var _a=wr(ce),ua=wr(ge);function Ff(t,n,o){var a=N(t),c=a||ft(t)||Mt(t);if(n=q(n,4),o==null){var u=t&&t.constructor;c?o=a?new u:[]:ee(t)?o=tt(u)?Lt(Rn(t)):{}:o={}}return(c?Oe:ze)(t,function(m,v,y){return n(o,m,v,y)}),o}function Lf(t,n){return t==null?!0:eo(t,n)}function Df(t,n,o){return t==null?t:sr(t,n,io(o))}function Nf(t,n,o,a){return a=typeof a=="function"?a:e,t==null?t:sr(t,n,io(o),a)}function Ut(t){return t==null?[]:Fi(t,ce(t))}function Bf(t){return t==null?[]:Fi(t,ge(t))}function Mf(t,n,o){return o===e&&(o=n,n=e),o!==e&&(o=qe(o),o=o===o?o:0),n!==e&&(n=qe(n),n=n===n?n:0),xt(qe(t),n,o)}function Uf(t,n,o){return n=nt(n),o===e?(o=n,n=0):o=nt(o),t=qe(t),j_(t,n,o)}function Wf(t,n,o){if(o&&typeof o!="boolean"&&de(t,n,o)&&(n=o=e),o===e&&(typeof n=="boolean"?(o=n,n=e):typeof t=="boolean"&&(o=t,t=e)),t===e&&n===e?(t=0,n=1):(t=nt(t),n===e?(n=t,t=0):n=nt(n)),t>n){var a=t;t=n,n=a}if(o||t%1||n%1){var c=Fs();return _e(t+c*(n-t+gl("1e-"+((c+"").length-1))),n)}return Yi(t,n)}var Gf=Nt(function(t,n,o){return n=n.toLowerCase(),t+(o?pa(n):n)});function pa(t){return Io(K(t).toLowerCase())}function da(t){return t=K(t),t&&t.replace(Gc,Rl).replace(cl,"")}function zf(t,n,o){t=K(t),n=ke(n);var a=t.length;o=o===e?a:xt(B(o),0,a);var c=o;return o-=n.length,o>=0&&t.slice(o,c)==n}function Hf(t){return t=K(t),t&&kc.test(t)?t.replace(zo,El):t}function jf(t){return t=K(t),t&&Tc.test(t)?t.replace(yi,"\\$&"):t}var Jf=Nt(function(t,n,o){return t+(o?"-":"")+n.toLowerCase()}),Kf=Nt(function(t,n,o){return t+(o?" ":"")+n.toLowerCase()}),Qf=hr("toLowerCase");function Xf(t,n,o){t=K(t),n=B(n);var a=n?Et(t):0;if(!n||a>=n)return t;var c=(n-a)/2;return Kn(Fn(c),o)+t+Kn(qn(c),o)}function Yf(t,n,o){t=K(t),n=B(n);var a=n?Et(t):0;return n&&a<n?t+Kn(n-a,o):t}function Vf(t,n,o){t=K(t),n=B(n);var a=n?Et(t):0;return n&&a<n?Kn(n-a,o)+t:t}function Zf(t,n,o){return o||n==null?n=0:n&&(n=+n),o_(K(t).replace(xi,""),n||0)}function em(t,n,o){return(o?de(t,n,o):n===e)?n=1:n=B(n),Vi(K(t),n)}function tm(){var t=arguments,n=K(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var nm=Nt(function(t,n,o){return t+(o?"_":"")+n.toLowerCase()});function im(t,n,o){return o&&typeof o!="number"&&de(t,n,o)&&(n=o=e),o=o===e?Ge:o>>>0,o?(t=K(t),t&&(typeof n=="string"||n!=null&&!wo(n))&&(n=ke(n),!n&&Rt(t))?dt(De(t),0,o):t.split(n,o)):[]}var om=Nt(function(t,n,o){return t+(o?" ":"")+Io(n)});function sm(t,n,o){return t=K(t),o=o==null?0:xt(B(o),0,t.length),n=ke(n),t.slice(o,o+n.length)==n}function rm(t,n,o){var a=_.templateSettings;o&&de(t,n,o)&&(n=e),t=K(t),n=ri({},n,a,kr);var c=ri({},n.imports,a.imports,kr),u=ce(c),m=Fi(c,u),v,y,k=0,C=n.interpolate||yn,I="__p += '",O=Di((n.escape||yn).source+"|"+C.source+"|"+(C===Ho?Dc:yn).source+"|"+(n.evaluate||yn).source+"|$","g"),E="//# sourceURL="+(Q.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++dl+"]")+`
`;t.replace(O,function(L,G,j,Ie,fe,Se){return j||(j=Ie),I+=t.slice(k,Se).replace(zc,Pl),G&&(v=!0,I+=`' +
__e(`+G+`) +
'`),fe&&(y=!0,I+=`';
`+fe+`;
__p += '`),j&&(I+=`' +
((__t = (`+j+`)) == null ? '' : __t) +
'`),k=Se+L.length,L}),I+=`';
`;var F=Q.call(n,"variable")&&n.variable;if(!F)I=`with (obj) {
`+I+`
}
`;else if(Fc.test(F))throw new D(p);I=(y?I.replace(yc,""):I).replace(xc,"$1").replace(bc,"$1;"),I="function("+(F||"obj")+`) {
`+(F?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(v?", __e = _.escape":"")+(y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+I+`return __p
}`;var M=ma(function(){return J(u,E+"return "+I).apply(e,m)});if(M.source=I,bo(M))throw M;return M}function am(t){return K(t).toLowerCase()}function cm(t){return K(t).toUpperCase()}function lm(t,n,o){if(t=K(t),t&&(o||n===e))return Cs(t);if(!t||!(n=ke(n)))return t;var a=De(t),c=De(n),u=Is(a,c),m=Ss(a,c)+1;return dt(a,u,m).join("")}function _m(t,n,o){if(t=K(t),t&&(o||n===e))return t.slice(0,Os(t)+1);if(!t||!(n=ke(n)))return t;var a=De(t),c=Ss(a,De(n))+1;return dt(a,0,c).join("")}function um(t,n,o){if(t=K(t),t&&(o||n===e))return t.replace(xi,"");if(!t||!(n=ke(n)))return t;var a=De(t),c=Is(a,De(n));return dt(a,c).join("")}function pm(t,n){var o=ic,a=oc;if(ee(n)){var c="separator"in n?n.separator:c;o="length"in n?B(n.length):o,a="omission"in n?ke(n.omission):a}t=K(t);var u=t.length;if(Rt(t)){var m=De(t);u=m.length}if(o>=u)return t;var v=o-Et(a);if(v<1)return a;var y=m?dt(m,0,v).join(""):t.slice(0,v);if(c===e)return y+a;if(m&&(v+=y.length-v),wo(c)){if(t.slice(v).search(c)){var k,C=y;for(c.global||(c=Di(c.source,K(jo.exec(c))+"g")),c.lastIndex=0;k=c.exec(C);)var I=k.index;y=y.slice(0,I===e?v:I)}}else if(t.indexOf(ke(c),v)!=v){var O=y.lastIndexOf(c);O>-1&&(y=y.slice(0,O))}return y+a}function dm(t){return t=K(t),t&&wc.test(t)?t.replace(Go,Ml):t}var fm=Nt(function(t,n,o){return t+(o?" ":"")+n.toUpperCase()}),Io=hr("toUpperCase");function fa(t,n,o){return t=K(t),n=o?e:n,n===e?Fl(t)?Gl(t):Sl(t):t.match(n)||[]}var ma=U(function(t,n){try{return be(t,e,n)}catch(o){return bo(o)?o:new D(o)}}),mm=Ze(function(t,n){return Oe(n,function(o){o=je(o),Ye(t,o,yo(t[o],t))}),t});function hm(t){var n=t==null?0:t.length,o=q();return t=n?Z(t,function(a){if(typeof a[1]!="function")throw new Te(l);return[o(a[0]),a[1]]}):[],U(function(a){for(var c=-1;++c<n;){var u=t[c];if(be(u[0],this,a))return be(u[1],this,a)}})}function vm(t){return U_(Re(t,R))}function So(t){return function(){return t}}function gm(t,n){return t==null||t!==t?n:t}var ym=gr(),xm=gr(!0);function ye(t){return t}function $o(t){return Ks(typeof t=="function"?t:Re(t,R))}function bm(t){return Xs(Re(t,R))}function wm(t,n){return Ys(t,Re(n,R))}var km=U(function(t,n){return function(o){return rn(o,t,n)}}),Cm=U(function(t,n){return function(o){return rn(t,o,n)}});function Oo(t,n,o){var a=ce(n),c=Un(n,a);o==null&&!(ee(n)&&(c.length||!a.length))&&(o=n,n=t,t=this,c=Un(n,ce(n)));var u=!(ee(o)&&"chain"in o)||!!o.chain,m=tt(t);return Oe(c,function(v){var y=n[v];t[v]=y,m&&(t.prototype[v]=function(){var k=this.__chain__;if(u||k){var C=t(this.__wrapped__),I=C.__actions__=he(this.__actions__);return I.push({func:y,args:arguments,thisArg:t}),C.__chain__=k,C}return y.apply(t,rt([this.value()],arguments))})}),t}function Im(){return ae._===this&&(ae._=Ql),this}function To(){}function Sm(t){return t=B(t),U(function(n){return Vs(n,t)})}var $m=so(Z),Om=so(ys),Tm=so(Ai);function ha(t){return po(t)?Ri(je(t)):ou(t)}function Am(t){return function(n){return t==null?e:bt(t,n)}}var Rm=xr(),Em=xr(!0);function Ao(){return[]}function Ro(){return!1}function Pm(){return{}}function qm(){return""}function Fm(){return!0}function Lm(t,n){if(t=B(t),t<1||t>ot)return[];var o=Ge,a=_e(t,Ge);n=q(n),t-=Ge;for(var c=qi(a,n);++o<t;)n(o);return c}function Dm(t){return N(t)?Z(t,je):Ce(t)?[t]:he(Lr(K(t)))}function Nm(t){var n=++Jl;return K(t)+n}var Bm=Jn(function(t,n){return t+n},0),Mm=ro("ceil"),Um=Jn(function(t,n){return t/n},1),Wm=ro("floor");function Gm(t){return t&&t.length?Mn(t,ye,Hi):e}function zm(t,n){return t&&t.length?Mn(t,q(n,2),Hi):e}function Hm(t){return ws(t,ye)}function jm(t,n){return ws(t,q(n,2))}function Jm(t){return t&&t.length?Mn(t,ye,Qi):e}function Km(t,n){return t&&t.length?Mn(t,q(n,2),Qi):e}var Qm=Jn(function(t,n){return t*n},1),Xm=ro("round"),Ym=Jn(function(t,n){return t-n},0);function Vm(t){return t&&t.length?Pi(t,ye):0}function Zm(t,n){return t&&t.length?Pi(t,q(n,2)):0}return _.after=xd,_.ary=Jr,_.assign=cf,_.assignIn=aa,_.assignInWith=ri,_.assignWith=lf,_.at=_f,_.before=Kr,_.bind=yo,_.bindAll=mm,_.bindKey=Qr,_.castArray=Ed,_.chain=zr,_.chunk=Uu,_.compact=Wu,_.concat=Gu,_.cond=hm,_.conforms=vm,_.constant=So,_.countBy=Yp,_.create=uf,_.curry=Xr,_.curryRight=Yr,_.debounce=Vr,_.defaults=pf,_.defaultsDeep=df,_.defer=bd,_.delay=wd,_.difference=zu,_.differenceBy=Hu,_.differenceWith=ju,_.drop=Ju,_.dropRight=Ku,_.dropRightWhile=Qu,_.dropWhile=Xu,_.fill=Yu,_.filter=Zp,_.flatMap=nd,_.flatMapDeep=id,_.flatMapDepth=od,_.flatten=Mr,_.flattenDeep=Vu,_.flattenDepth=Zu,_.flip=kd,_.flow=ym,_.flowRight=xm,_.fromPairs=ep,_.functions=xf,_.functionsIn=bf,_.groupBy=sd,_.initial=np,_.intersection=ip,_.intersectionBy=op,_.intersectionWith=sp,_.invert=kf,_.invertBy=Cf,_.invokeMap=ad,_.iteratee=$o,_.keyBy=cd,_.keys=ce,_.keysIn=ge,_.map=ei,_.mapKeys=Sf,_.mapValues=$f,_.matches=bm,_.matchesProperty=wm,_.memoize=ni,_.merge=Of,_.mergeWith=ca,_.method=km,_.methodOf=Cm,_.mixin=Oo,_.negate=ii,_.nthArg=Sm,_.omit=Tf,_.omitBy=Af,_.once=Cd,_.orderBy=ld,_.over=$m,_.overArgs=Id,_.overEvery=Om,_.overSome=Tm,_.partial=xo,_.partialRight=Zr,_.partition=_d,_.pick=Rf,_.pickBy=la,_.property=ha,_.propertyOf=Am,_.pull=lp,_.pullAll=Wr,_.pullAllBy=_p,_.pullAllWith=up,_.pullAt=pp,_.range=Rm,_.rangeRight=Em,_.rearg=Sd,_.reject=dd,_.remove=dp,_.rest=$d,_.reverse=vo,_.sampleSize=md,_.set=Pf,_.setWith=qf,_.shuffle=hd,_.slice=fp,_.sortBy=yd,_.sortedUniq=bp,_.sortedUniqBy=wp,_.split=im,_.spread=Od,_.tail=kp,_.take=Cp,_.takeRight=Ip,_.takeRightWhile=Sp,_.takeWhile=$p,_.tap=Wp,_.throttle=Td,_.thru=Zn,_.toArray=oa,_.toPairs=_a,_.toPairsIn=ua,_.toPath=Dm,_.toPlainObject=ra,_.transform=Ff,_.unary=Ad,_.union=Op,_.unionBy=Tp,_.unionWith=Ap,_.uniq=Rp,_.uniqBy=Ep,_.uniqWith=Pp,_.unset=Lf,_.unzip=go,_.unzipWith=Gr,_.update=Df,_.updateWith=Nf,_.values=Ut,_.valuesIn=Bf,_.without=qp,_.words=fa,_.wrap=Rd,_.xor=Fp,_.xorBy=Lp,_.xorWith=Dp,_.zip=Np,_.zipObject=Bp,_.zipObjectDeep=Mp,_.zipWith=Up,_.entries=_a,_.entriesIn=ua,_.extend=aa,_.extendWith=ri,Oo(_,_),_.add=Bm,_.attempt=ma,_.camelCase=Gf,_.capitalize=pa,_.ceil=Mm,_.clamp=Mf,_.clone=Pd,_.cloneDeep=Fd,_.cloneDeepWith=Ld,_.cloneWith=qd,_.conformsTo=Dd,_.deburr=da,_.defaultTo=gm,_.divide=Um,_.endsWith=zf,_.eq=Be,_.escape=Hf,_.escapeRegExp=jf,_.every=Vp,_.find=ed,_.findIndex=Nr,_.findKey=ff,_.findLast=td,_.findLastIndex=Br,_.findLastKey=mf,_.floor=Wm,_.forEach=Hr,_.forEachRight=jr,_.forIn=hf,_.forInRight=vf,_.forOwn=gf,_.forOwnRight=yf,_.get=ko,_.gt=Nd,_.gte=Bd,_.has=wf,_.hasIn=Co,_.head=Ur,_.identity=ye,_.includes=rd,_.indexOf=tp,_.inRange=Uf,_.invoke=If,_.isArguments=Ct,_.isArray=N,_.isArrayBuffer=Md,_.isArrayLike=ve,_.isArrayLikeObject=ie,_.isBoolean=Ud,_.isBuffer=ft,_.isDate=Wd,_.isElement=Gd,_.isEmpty=zd,_.isEqual=Hd,_.isEqualWith=jd,_.isError=bo,_.isFinite=Jd,_.isFunction=tt,_.isInteger=ea,_.isLength=oi,_.isMap=ta,_.isMatch=Kd,_.isMatchWith=Qd,_.isNaN=Xd,_.isNative=Yd,_.isNil=Zd,_.isNull=Vd,_.isNumber=na,_.isObject=ee,_.isObjectLike=ne,_.isPlainObject=pn,_.isRegExp=wo,_.isSafeInteger=ef,_.isSet=ia,_.isString=si,_.isSymbol=Ce,_.isTypedArray=Mt,_.isUndefined=tf,_.isWeakMap=nf,_.isWeakSet=of,_.join=rp,_.kebabCase=Jf,_.last=Pe,_.lastIndexOf=ap,_.lowerCase=Kf,_.lowerFirst=Qf,_.lt=sf,_.lte=rf,_.max=Gm,_.maxBy=zm,_.mean=Hm,_.meanBy=jm,_.min=Jm,_.minBy=Km,_.stubArray=Ao,_.stubFalse=Ro,_.stubObject=Pm,_.stubString=qm,_.stubTrue=Fm,_.multiply=Qm,_.nth=cp,_.noConflict=Im,_.noop=To,_.now=ti,_.pad=Xf,_.padEnd=Yf,_.padStart=Vf,_.parseInt=Zf,_.random=Wf,_.reduce=ud,_.reduceRight=pd,_.repeat=em,_.replace=tm,_.result=Ef,_.round=Xm,_.runInContext=g,_.sample=fd,_.size=vd,_.snakeCase=nm,_.some=gd,_.sortedIndex=mp,_.sortedIndexBy=hp,_.sortedIndexOf=vp,_.sortedLastIndex=gp,_.sortedLastIndexBy=yp,_.sortedLastIndexOf=xp,_.startCase=om,_.startsWith=sm,_.subtract=Ym,_.sum=Vm,_.sumBy=Zm,_.template=rm,_.times=Lm,_.toFinite=nt,_.toInteger=B,_.toLength=sa,_.toLower=am,_.toNumber=qe,_.toSafeInteger=af,_.toString=K,_.toUpper=cm,_.trim=lm,_.trimEnd=_m,_.trimStart=um,_.truncate=pm,_.unescape=dm,_.uniqueId=Nm,_.upperCase=fm,_.upperFirst=Io,_.each=Hr,_.eachRight=jr,_.first=Ur,Oo(_,function(){var t={};return ze(_,function(n,o){Q.call(_.prototype,o)||(t[o]=n)}),t}(),{chain:!1}),_.VERSION=r,Oe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){_[t].placeholder=_}),Oe(["drop","take"],function(t,n){H.prototype[t]=function(o){o=o===e?1:re(B(o),0);var a=this.__filtered__&&!n?new H(this):this.clone();return a.__filtered__?a.__takeCount__=_e(o,a.__takeCount__):a.__views__.push({size:_e(o,Ge),type:t+(a.__dir__<0?"Right":"")}),a},H.prototype[t+"Right"]=function(o){return this.reverse()[t](o).reverse()}}),Oe(["filter","map","takeWhile"],function(t,n){var o=n+1,a=o==Mo||o==cc;H.prototype[t]=function(c){var u=this.clone();return u.__iteratees__.push({iteratee:q(c,3),type:o}),u.__filtered__=u.__filtered__||a,u}}),Oe(["head","last"],function(t,n){var o="take"+(n?"Right":"");H.prototype[t]=function(){return this[o](1).value()[0]}}),Oe(["initial","tail"],function(t,n){var o="drop"+(n?"":"Right");H.prototype[t]=function(){return this.__filtered__?new H(this):this[o](1)}}),H.prototype.compact=function(){return this.filter(ye)},H.prototype.find=function(t){return this.filter(t).head()},H.prototype.findLast=function(t){return this.reverse().find(t)},H.prototype.invokeMap=U(function(t,n){return typeof t=="function"?new H(this):this.map(function(o){return rn(o,t,n)})}),H.prototype.reject=function(t){return this.filter(ii(q(t)))},H.prototype.slice=function(t,n){t=B(t);var o=this;return o.__filtered__&&(t>0||n<0)?new H(o):(t<0?o=o.takeRight(-t):t&&(o=o.drop(t)),n!==e&&(n=B(n),o=n<0?o.dropRight(-n):o.take(n-t)),o)},H.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},H.prototype.toArray=function(){return this.take(Ge)},ze(H.prototype,function(t,n){var o=/^(?:filter|find|map|reject)|While$/.test(n),a=/^(?:head|last)$/.test(n),c=_[a?"take"+(n=="last"?"Right":""):n],u=a||/^find/.test(n);!c||(_.prototype[n]=function(){var m=this.__wrapped__,v=a?[1]:arguments,y=m instanceof H,k=v[0],C=y||N(m),I=function(G){var j=c.apply(_,rt([G],v));return a&&O?j[0]:j};C&&o&&typeof k=="function"&&k.length!=1&&(y=C=!1);var O=this.__chain__,E=!!this.__actions__.length,F=u&&!O,M=y&&!E;if(!u&&C){m=M?m:new H(this);var L=t.apply(m,v);return L.__actions__.push({func:Zn,args:[I],thisArg:e}),new Ae(L,O)}return F&&M?t.apply(this,v):(L=this.thru(I),F?a?L.value()[0]:L.value():L)})}),Oe(["pop","push","shift","sort","splice","unshift"],function(t){var n=In[t],o=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",a=/^(?:pop|shift)$/.test(t);_.prototype[t]=function(){var c=arguments;if(a&&!this.__chain__){var u=this.value();return n.apply(N(u)?u:[],c)}return this[o](function(m){return n.apply(N(m)?m:[],c)})}}),ze(H.prototype,function(t,n){var o=_[n];if(o){var a=o.name+"";Q.call(Ft,a)||(Ft[a]=[]),Ft[a].push({name:n,func:o})}}),Ft[jn(e,W).name]=[{name:"wrapper",func:e}],H.prototype.clone=p_,H.prototype.reverse=d_,H.prototype.value=f_,_.prototype.at=Gp,_.prototype.chain=zp,_.prototype.commit=Hp,_.prototype.next=jp,_.prototype.plant=Kp,_.prototype.reverse=Qp,_.prototype.toJSON=_.prototype.valueOf=_.prototype.value=Xp,_.prototype.first=_.prototype.head,Vt&&(_.prototype[Vt]=Jp),_},ct=zl();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(ae._=ct,define(function(){return ct})):ht?((ht.exports=ct)._=ct,Si._=ct):ae._=ct}).call(Wt)});$(function(){frappe.realtime.on("toconsole",function(e){e.forEach(r=>{console.log(r)})})});var h=new Vue;var ch={data(){return{drawer:!1,mini:!0,item:0,items:[{text:"POS",icon:"mdi-network-pos"}],page:"",fav:!0,menu:!1,message:!1,hints:!0,menu_item:0,snack:!1,snackColor:"",snackText:"",company:"POS Awesome",company_img:"/assets/erpnext/images/erpnext-logo.svg",pos_profile:"",freeze:!1,freezeTitle:"",freezeMsg:"",last_invoice:""}},methods:{changePage(e){this.$emit("changePage",e)},go_desk(){frappe.set_route("/"),location.reload()},go_about(){window.open("https://github.com/yrestom/POS-Awesome","_blank").focus()},close_shift_dialog(){h.$emit("open_closing_dialog")},show_mesage(e){this.snack=!0,this.snackColor=e.color,this.snackText=e.text},logOut(){var e=this;return e.logged_out=!0,frappe.call({method:"logout",callback:function(r){r.exc||(frappe.set_route("/login"),location.reload())}})},print_last_invoice(){if(!this.last_invoice)return;let e=this.pos_profile.print_format_for_online||this.pos_profile.print_format,r=this.pos_profile.letter_head||0,i=frappe.urllib.get_base_url()+"/printview?doctype=Sales%20Invoice&name="+this.last_invoice+"&trigger_print=1&format="+e+"&no_letterhead="+r,s=window.open(i,"Print");s.addEventListener("load",function(){s.print()},!0)}},created:function(){this.$nextTick(function(){h.$on("show_mesage",e=>{this.show_mesage(e)}),h.$on("set_company",e=>{this.company=e.name,this.company_img=e.company_logo?e.company_logo:this.company_img}),h.$on("register_pos_profile",e=>{this.pos_profile=e.pos_profile;let r={text:"Payments",icon:"mdi-cash-register"};this.pos_profile.posa_use_pos_awesome_payments&&this.items.length!==2&&this.items.push(r)}),h.$on("set_last_invoice",e=>{this.last_invoice=e}),h.$on("freeze",e=>{this.freeze=!0,this.freezeTitle=e.title,this.freezeMsg=e.msg}),h.$on("unfreeze",()=>{this.freeze=!1,this.freezTitle="",this.freezeMsg=""})})}},ba=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("nav",[i("v-app-bar",{staticClass:"elevation-2",attrs:{app:"",height:"40"}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(s){s.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),i("v-img",{staticClass:"mr-2",attrs:{src:"/assets/posawesome/js/posapp/components/pos/pos.png",alt:"POS Awesome","max-width":"32",color:"primary"}}),e._v(" "),i("v-toolbar-title",{staticClass:"text-uppercase primary--text",staticStyle:{cursor:"pointer"},on:{click:e.go_desk}},[i("span",{staticClass:"font-weight-light"},[e._v("pos")]),e._v(" "),i("span",[e._v("awesome")])]),e._v(" "),i("v-spacer"),e._v(" "),i("v-btn",{staticStyle:{cursor:"unset"},attrs:{text:"",color:"primary"}},[i("span",{attrs:{right:""}},[e._v(e._s(e.pos_profile.name))])]),e._v(" "),i("div",{staticClass:"text-center"},[i("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(s){var l=s.on,p=s.attrs;return[i("v-btn",e._g(e._b({attrs:{color:"primary",dark:"",text:""}},"v-btn",p,!1),l),[e._v("Menu")])]}}])},[e._v(" "),i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",tile:""}},[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"primary"},model:{value:e.menu_item,callback:function(s){e.menu_item=s},expression:"menu_item"}},[!e.pos_profile.posa_hide_closing_shift&&e.item==0?i("v-list-item",{on:{click:e.close_shift_dialog}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-content-save-move-outline")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e.__("Close Shift")))])],1)],1):e._e(),e._v(" "),e.pos_profile.posa_allow_print_last_invoice&&this.last_invoice?i("v-list-item",{on:{click:e.print_last_invoice}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-printer")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e.__("Print Last Invoice")))])],1)],1):e._e(),e._v(" "),i("v-divider",{staticClass:"my-0"}),e._v(" "),i("v-list-item",{on:{click:e.logOut}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-logout")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e.__("Logout")))])],1)],1),e._v(" "),i("v-list-item",{on:{click:e.go_about}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-information-outline")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e.__("About")))])],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),i("v-navigation-drawer",{staticClass:"primary margen-top",attrs:{"mini-variant":e.mini,app:"",width:"170"},on:{"update:miniVariant":function(s){e.mini=s},"update:mini-variant":function(s){e.mini=s}},model:{value:e.drawer,callback:function(s){e.drawer=s},expression:"drawer"}},[i("v-list",{attrs:{dark:""}},[i("v-list-item",{staticClass:"px-2"},[i("v-list-item-avatar",[i("v-img",{attrs:{src:e.company_img}})],1),e._v(" "),i("v-list-item-title",[e._v(e._s(e.company))]),e._v(" "),i("v-btn",{attrs:{icon:""},on:{click:function(s){s.stopPropagation(),e.mini=!e.mini}}},[i("v-icon",[e._v("mdi-chevron-left")])],1)],1),e._v(" "),i("v-list-item-group",{attrs:{color:"white"},model:{value:e.item,callback:function(s){e.item=s},expression:"item"}},e._l(e.items,function(s){return i("v-list-item",{key:s.text,on:{click:function(l){return e.changePage(s.text)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:e._s(s.icon)}})],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(s.text)}})],1)],1)}),1)],1)],1),e._v(" "),i("v-snackbar",{attrs:{timeout:5e3,color:e.snackColor,top:"",right:""},model:{value:e.snack,callback:function(s){e.snack=s},expression:"snack"}},[e._v(`
    `+e._s(e.snackText)+`
  `)]),e._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.freeze,callback:function(s){e.freeze=s},expression:"freeze"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[e._v(`
        `+e._s(e.freezeTitle)+`
      `)]),e._v(" "),i("v-card-text",[e._v(e._s(e.freezeMsg))])],1)],1)],1)},lh=[];ba._withStripped=!0;var _h=function(e){!e||e("data-v-d478673a_0",{source:`
.margen-top[data-v-d478673a] {
  margin-top: 0px;
}
`,map:{version:3,sources:["../posawesome/posawesome/public/js/posapp/components/Navbar.vue"],names:[],mappings:";AA8QA;EACA,eAAA;AACA",file:"Navbar.vue",sourcesContent:[`<template>
  <nav>
    <v-app-bar app height="40" class="elevation-2">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="grey--text"
      ></v-app-bar-nav-icon>
      <v-img
        src="/assets/posawesome/js/posapp/components/pos/pos.png"
        alt="POS Awesome"
        max-width="32"
        class="mr-2"
        color="primary"
      ></v-img>
      <v-toolbar-title
        @click="go_desk"
        style="cursor: pointer"
        class="text-uppercase primary--text"
      >
        <span class="font-weight-light">pos</span>
        <span>awesome</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn style="cursor: unset" text color="primary">
        <span right>{{ pos_profile.name }}</span>
      </v-btn>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark text v-bind="attrs" v-on="on"
              >Menu</v-btn
            >
          </template>
          <v-card class="mx-auto" max-width="300" tile>
            <v-list dense>
              <v-list-item-group v-model="menu_item" color="primary">
                <v-list-item
                  @click="close_shift_dialog"
                  v-if="!pos_profile.posa_hide_closing_shift && item == 0"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-content-save-move-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      __('Close Shift')
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click="print_last_invoice"
                  v-if="
                    pos_profile.posa_allow_print_last_invoice &&
                    this.last_invoice
                  "
                >
                  <v-list-item-icon>
                    <v-icon>mdi-printer</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      __('Print Last Invoice')
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="my-0"></v-divider>
                <v-list-item @click="logOut">
                  <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ __('Logout') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="go_about">
                  <v-list-item-icon>
                    <v-icon>mdi-information-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ __('About') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      class="primary margen-top"
      width="170"
    >
      <v-list dark>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="company_img"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>{{ company }}</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <!-- <MyPopup/> -->
        <v-list-item-group v-model="item" color="white">
          <v-list-item
            v-for="item in items"
            :key="item.text"
            @click="changePage(item.text)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-snackbar v-model="snack" :timeout="5000" :color="snackColor" top right>
      {{ snackText }}
    </v-snackbar>
    <v-dialog v-model="freeze" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          {{ freezeTitle }}
        </v-card-title>
        <v-card-text>{{ freezeMsg }}</v-card-text>
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
import { evntBus } from '../bus';

export default {
  // components: {MyPopup},
  data() {
    return {
      drawer: false,
      mini: true,
      item: 0,
      items: [{ text: 'POS', icon: 'mdi-network-pos' }],
      page: '',
      fav: true,
      menu: false,
      message: false,
      hints: true,
      menu_item: 0,
      snack: false,
      snackColor: '',
      snackText: '',
      company: 'POS Awesome',
      company_img: '/assets/erpnext/images/erpnext-logo.svg',
      pos_profile: '',
      freeze: false,
      freezeTitle: '',
      freezeMsg: '',
      last_invoice: '',
    };
  },
  methods: {
    changePage(key) {
      this.$emit('changePage', key);
    },
    go_desk() {
      frappe.set_route('/');
      location.reload();
    },
    go_about() {
      const win = window.open(
        'https://github.com/yrestom/POS-Awesome',
        '_blank'
      );
      win.focus();
    },
    close_shift_dialog() {
      evntBus.$emit('open_closing_dialog');
    },
    show_mesage(data) {
      this.snack = true;
      this.snackColor = data.color;
      this.snackText = data.text;
    },
    logOut() {
      var me = this;
      me.logged_out = true;
      return frappe.call({
        method: 'logout',
        callback: function (r) {
          if (r.exc) {
            return;
          }
          frappe.set_route('/login');
          location.reload();
        },
      });
    },
    print_last_invoice() {
      if (!this.last_invoice) return;
      const print_format =
        this.pos_profile.print_format_for_online ||
        this.pos_profile.print_format;
      const letter_head = this.pos_profile.letter_head || 0;
      const url =
        frappe.urllib.get_base_url() +
        '/printview?doctype=Sales%20Invoice&name=' +
        this.last_invoice +
        '&trigger_print=1' +
        '&format=' +
        print_format +
        '&no_letterhead=' +
        letter_head;
      const printWindow = window.open(url, 'Print');
      printWindow.addEventListener(
        'load',
        function () {
          printWindow.print();
        },
        true
      );
    },
  },
  created: function () {
    this.$nextTick(function () {
      evntBus.$on('show_mesage', (data) => {
        this.show_mesage(data);
      });
      evntBus.$on('set_company', (data) => {
        this.company = data.name;
        this.company_img = data.company_logo
          ? data.company_logo
          : this.company_img;
      });
      evntBus.$on('register_pos_profile', (data) => {
        this.pos_profile = data.pos_profile;
        const payments = { text: 'Payments', icon: 'mdi-cash-register' };
        if (
          this.pos_profile.posa_use_pos_awesome_payments &&
          this.items.length !== 2
        ) {
          this.items.push(payments);
        }
      });
      evntBus.$on('set_last_invoice', (data) => {
        this.last_invoice = data;
      });
      evntBus.$on('freeze', (data) => {
        this.freeze = true;
        this.freezeTitle = data.title;
        this.freezeMsg = data.msg;
      });
      evntBus.$on('unfreeze', () => {
        this.freeze = false;
        this.freezTitle = '';
        this.freezeMsg = '';
      });
    });
  },
};
<\/script>

<style scoped>
.margen-top {
  margin-top: 0px;
}
</style>
`]},media:void 0})},uh="data-v-d478673a",ph=void 0,dh=!1;function fh(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};f.__file="../posawesome/posawesome/public/js/posapp/components/Navbar.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s;{let P;if(r&&(P=d?function(b){r.call(this,R(b,this.$root.$options.shadowRoot))}:function(b){r.call(this,T(b))}),P!==void 0)if(f.functional){let b=f.render;f.render=function(z,W){return P.call(W),b(z,W)}}else{let b=f.beforeCreate;f.beforeCreate=b?[].concat(b,P):[P]}}return f}function Po(){let e=Po.styles||(Po.styles={}),r=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(s,l){if(document.querySelector('style[data-vue-ssr-id~="'+s+'"]'))return;let p=r?l.media||"default":s,d=e[p]||(e[p]={ids:[],parts:[],element:void 0});if(!d.ids.includes(s)){let T=l.source,S=d.ids.length;if(d.ids.push(s),r&&(d.element=d.element||document.querySelector("style[data-group="+p+"]")),!d.element){let R=document.head||document.getElementsByTagName("head")[0],f=d.element=document.createElement("style");f.type="text/css",l.media&&f.setAttribute("media",l.media),r&&(f.setAttribute("data-group",p),f.setAttribute("data-next-index","0")),R.appendChild(f)}if(r&&(S=parseInt(d.element.getAttribute("data-next-index")),d.element.setAttribute("data-next-index",S+1)),d.element.styleSheet)d.parts.push(T),d.element.styleSheet.cssText=d.parts.filter(Boolean).join(`
`);else{let R=document.createTextNode(T),f=d.element.childNodes;f[S]&&d.element.removeChild(f[S]),f.length?d.element.insertBefore(R,f[S]):d.element.appendChild(R)}}}}var mh=fh({render:ba,staticRenderFns:lh},_h,ch,uh,dh,ph,!1,Po,void 0,void 0),wa=mh;var Ca=ah(ka()),hh={data:()=>({pos_profile:"",flags:{},items_view:"list",item_group:"ALL",loading:!1,items_group:["ALL"],items:[],search:"",first_search:"",itemsPerPage:1e3,offersCount:0,appliedOffersCount:0,couponsCount:0,appliedCouponsCount:0,customer_price_list:null,float_precision:2,currency_precision:2,new_line:!1,qty:1}),watch:{filtred_items(e){this.update_items_details(e)},customer_price_list(){this.get_items()},new_line(){h.$emit("set_new_line",this.new_line)}},methods:{show_offers(){h.$emit("show_offers","true")},show_coupons(){h.$emit("show_coupons","true")},get_items(){if(!this.pos_profile){console.log("No POS Profile");return}let e=this;this.loading=!0,e.pos_profile.posa_local_storage&&localStorage.items_storage&&(e.items=JSON.parse(localStorage.getItem("items_storage")),h.$emit("set_all_items",e.items),e.loading=!1),frappe.call({method:"posawesome.posawesome.api.posapp.get_items",args:{pos_profile:e.pos_profile,price_list:e.customer_price_list},callback:function(r){r.message&&(e.items=r.message,h.$emit("set_all_items",e.items),e.loading=!1,console.info("loadItmes"),e.pos_profile.posa_local_storage&&(localStorage.setItem("items_storage",""),localStorage.setItem("items_storage",JSON.stringify(r.message))))}})},get_items_groups(){if(!this.pos_profile){console.log("No POS Profile");return}if(this.pos_profile.item_groups.length>0)this.pos_profile.item_groups.forEach(e=>{e.item_group!=="All Item Groups"&&this.items_group.push(e.item_group)});else{let e=this;frappe.call({method:"posawesome.posawesome.api.posapp.get_items_groups",args:{},callback:function(r){r.message&&r.message.forEach(i=>{e.items_group.push(i.name)})}})}},getItmesHeaders(){let e=[{text:__("Name"),align:"start",sortable:!0,value:"item_name"},{text:__("Code"),align:"start",sortable:!0,value:"item_code"},{text:__("Rate"),value:"rate",align:"start"},{text:__("Available QTY"),value:"actual_qty",align:"start"},{text:__("UOM"),value:"stock_uom",align:"start"}];return this.pos_profile.posa_display_item_code||e.splice(1,1),e},add_item(e){e.has_variants?h.$emit("open_variants_model",e,this.items):((!e.qty||e.qty===1)&&(e.qty=Math.abs(this.qty)),h.$emit("add_item",e),this.qty=1)},enter_event(){if(!this.filtred_items.length||!this.first_search)return;let e=this.get_item_qty(this.first_search),r=me({},this.filtred_items[0]);r.qty=flt(e),r.item_barcode.forEach(i=>{this.search==i.barcode&&(r.uom=i.posa_uom)}),this.flags.serial_no&&(r.to_set_serial_no=this.flags.serial_no),this.add_item(r),this.search=null,this.first_search=null,this.debounce_search=null,this.flags.serial_no=null,this.qty=1,this.$refs.debounce_search.focus()},get_item_qty(e){let r=Math.abs(this.qty);if(e.startsWith(this.pos_profile.posa_scale_barcode_start)){let i=e.substr(7,5),s;i.startsWith("0000")?s="0.00"+i.substr(4):i.startsWith("000")?s="0.0"+i.substr(3):i.startsWith("00")?s="0."+i.substr(2):i.startsWith("0")?s=i.substr(1,1)+"."+i.substr(2,i.length):i.startsWith("0")||(s=i.substr(0,2)+"."+i.substr(2,i.length)),r=s}return r},get_search(e){let r="";return e&&e.startsWith(this.pos_profile.posa_scale_barcode_start)?r=e.substr(0,7):r=e,r},esc_event(){this.search=null,this.first_search=null,this.qty=1,this.$refs.debounce_search.focus()},update_items_details(e){let r=this;frappe.call({method:"posawesome.posawesome.api.posapp.get_items_details",args:{pos_profile:r.pos_profile,items_data:e},callback:function(i){i.message&&e.forEach(s=>{let l=i.message.find(p=>p.item_code==s.item_code);if(s.actual_qty=l.actual_qty,s.serial_no_data=l.serial_no_data,s.batch_no_data=l.batch_no_data,s.item_uoms=l.item_uoms,s.item_tax_rate=l.item_tax_rate,s.included_in_print_rate=l.included_in_print_rate,s.incoming_rate=l.incoming_rate,s.bin_ivr=l.bin_ivr,r.pos_profile.posa_tax_inclusive&&l.included_in_print_rate){let p=l.item_tax_rate/100,d=l.rate/(1+p);s.item_tax_amount=(l.rate-d).toFixed(3),s.item_amount=s.rate}else s.item_tax_amount=(l.rate*l.item_tax_rate/100).toFixed(3),s.item_amount=flt(s.rate)+flt(s.item_tax_amount)})}})},update_cur_items_details(){this.update_items_details(this.filtred_items)},scan_barcoud(){let e=this;onScan.attachTo(document,{suffixKeyCodes:[],keyCodeMapper:function(r){return r.stopImmediatePropagation(),onScan.decodeKeyEvent(r)},onScan:function(r){setTimeout(()=>{e.trigger_onscan(r)},300)}})},trigger_onscan(e){this.filtred_items.length==0?(h.$emit("show_mesage",{text:`No Item has this barcode "${e}"`,color:"error"}),frappe.utils.play_sound("error")):(this.enter_event(),this.debounce_search=null,this.search=null)},formtCurrency(e){return e=parseFloat(e),e.toFixed(this.currency_precision).replace(/\d(?=(\d{3})+\.)/g,"$&,")},formtFloat(e){return e=parseFloat(e),e.toFixed(this.float_precision).replace(/\d(?=(\d{3})+\.)/g,"$&,")}},computed:{filtred_items(){this.search=this.get_search(this.first_search);let e=[],r=[];return this.item_group!="ALL"?r=this.items.filter(i=>i.item_group.toLowerCase().includes(this.item_group.toLowerCase())):r=this.items,!this.search||this.search.length<3?this.pos_profile.posa_show_template_items&&this.pos_profile.posa_hide_variants_items?e=r.filter(i=>!i.variant_of).slice(0,50):e=r.slice(0,50):(this.search&&(e=r.filter(i=>{let s=!1;for(let l of i.item_barcode)if(l.barcode==this.search){s=!0;break}return s}),e.length==0&&(e=r.filter(i=>i.item_code.toLowerCase().includes(this.search.toLowerCase())),e.length==0&&(e=r.filter(i=>i.item_name.toLowerCase().includes(this.search.toLowerCase()))),e.length==0&&this.pos_profile.posa_search_serial_no&&(e=r.filter(i=>{let s=!1;for(let l of i.serial_no_data)if(l.serial_no==this.search){s=!0,this.flags.serial_no=null,this.flags.serial_no=this.search;break}return s})))),this.pos_profile.posa_show_template_items&&this.pos_profile.posa_hide_variants_items?e.filter(i=>!i.variant_of).slice(0,50):e.slice(0,50))},debounce_search:{get(){return this.first_search},set:Ca.default.debounce(function(e){this.first_search=e},200)}},created:function(){this.$nextTick(function(){}),h.$on("register_pos_profile",e=>{this.pos_profile=e.pos_profile,this.get_items(),this.get_items_groups(),this.float_precision=frappe.defaults.get_default("float_precision")||2,this.currency_precision=frappe.defaults.get_default("currency_precision")||2}),h.$on("update_cur_items_details",()=>{this.update_cur_items_details()}),h.$on("update_offers_counters",e=>{this.offersCount=e.offersCount,this.appliedOffersCount=e.appliedOffersCount}),h.$on("update_coupons_counters",e=>{this.couponsCount=e.couponsCount,this.appliedCouponsCount=e.appliedCouponsCount}),h.$on("update_customer_price_list",e=>{this.customer_price_list=e})},mounted(){this.scan_barcoud()}},Ia=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",[i("v-card",{staticClass:"selection mx-auto grey lighten-5",staticStyle:{"max-height":"75vh",height:"75vh"}},[i("v-progress-linear",{attrs:{active:e.loading,indeterminate:e.loading,absolute:"",top:"",color:"info"}}),e._v(" "),i("v-row",{staticClass:"items px-2 py-1"},[i("v-col",{staticClass:"pb-0 mb-2"},[i("v-text-field",{ref:"debounce_search",attrs:{dense:"",clearable:"",autofocus:"",outlined:"",color:"primary",label:e.frappe._("Search Items"),hint:"Search by item code, serial number, batch no or barcode","background-color":"white","hide-details":""},on:{keydown:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"esc",27,s.key,["Esc","Escape"])?null:e.esc_event.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.enter_event.apply(null,arguments)}]},model:{value:e.debounce_search,callback:function(s){e.debounce_search=s},expression:"debounce_search"}})],1),e._v(" "),e.pos_profile.posa_input_qty?i("v-col",{staticClass:"pb-0 mb-2",attrs:{cols:"3"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("QTY"),"background-color":"white","hide-details":"",type:"number"},on:{keydown:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.enter_event.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"esc",27,s.key,["Esc","Escape"])?null:e.esc_event.apply(null,arguments)}]},model:{value:e.qty,callback:function(s){e.qty=e._n(s)},expression:"qty"}})],1):e._e(),e._v(" "),e.pos_profile.posa_new_line?i("v-col",{staticClass:"pb-0 mb-2",attrs:{cols:"2"}},[i("v-checkbox",{attrs:{color:"accent",value:"true",label:"NLine",dense:"","hide-details":""},model:{value:e.new_line,callback:function(s){e.new_line=s},expression:"new_line"}})],1):e._e(),e._v(" "),i("v-col",{staticClass:"pt-0 mt-0",attrs:{cols:"12"}},[e.items_view=="card"?i("div",{staticClass:"items",attrs:{fluid:""}},[i("v-row",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"67vh"},attrs:{dense:""}},e._l(e.filtred_items,function(s,l){return i("v-col",{key:l,attrs:{xl:"2",lg:"3",md:"6",sm:"6",cols:"6","min-height":"50"}},[i("v-card",{attrs:{hover:"hover"},on:{click:function(p){return e.add_item(s)}}},[i("v-img",{staticClass:"white--text align-end",attrs:{src:s.image||"/assets/posawesome/js/posapp/components/pos/placeholder-image.png",gradient:"to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)",height:"100px"}},[i("v-card-text",{staticClass:"text-subtitle-2 px-1 pb-2",domProps:{textContent:e._s(s.item_name)}})],1),e._v(" "),i("v-card-text",{staticClass:"text--primary pa-1"},[i("div",{staticClass:"text-caption primary--text"},[e._v(`
                    `+e._s(e.formtCurrency(s.rate)||0)+`
                    `+e._s(s.currency||"")+`
                  `)])])],1)],1)}),1)],1):e._e(),e._v(" "),e.items_view=="list"?i("div",{staticClass:"items",attrs:{fluid:""}},[i("div",{staticClass:"my-0 py-0 overflow-y-auto",staticStyle:{"max-height":"65vh"}},[[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.getItmesHeaders(),items:e.filtred_items,"item-key":"item_code","items-per-page":e.itemsPerPage,"hide-default-footer":""},on:{"click:row":e.add_item},scopedSlots:e._u([{key:"item.rate",fn:function(s){var l=s.item;return[e._v(`
                  `+e._s(e.formtCurrency(l.rate))+`
                `)]}},{key:"item.actual_qty",fn:function(s){var l=s.item;return[e._v(`
                  `+e._s(e.formtFloat(l.actual_qty))+`
                `)]}}],null,!1,2682212702)})]],2)]):e._e()])],1)],1),e._v(" "),i("v-card",{staticClass:"cards mb-0 mt-3 pa-2 grey lighten-5"},[i("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{items:e.items_group,label:e.frappe._("Items Group"),dense:"",outlined:"","hide-details":""},model:{value:e.item_group,callback:function(s){e.item_group=s},expression:"item_group"}})],1),e._v(" "),i("v-col",{staticClass:"mt-1",attrs:{cols:"3"}},[i("v-btn-toggle",{attrs:{color:"primary",group:"",dense:"",rounded:""},model:{value:e.items_view,callback:function(s){e.items_view=s},expression:"items_view"}},[i("v-btn",{attrs:{small:"",value:"list"}},[e._v(e._s(e.__("List")))]),e._v(" "),i("v-btn",{attrs:{small:"",value:"card"}},[e._v(e._s(e.__("Card")))])],1)],1),e._v(" "),i("v-col",{staticClass:"mt-2",attrs:{cols:"4"}},[i("v-btn",{attrs:{small:"",block:"",color:"primary",text:""},on:{click:e.show_coupons}},[e._v(e._s(e.couponsCount)+" "+e._s(e.__("Coupons")))])],1),e._v(" "),i("v-col",{staticClass:"mt-2",attrs:{cols:"5"}},[i("v-btn",{attrs:{small:"",block:"",color:"primary",text:""},on:{click:e.show_offers}},[e._v(e._s(e.offersCount)+" "+e._s(e.__("Offers"))+" : "+e._s(e.appliedOffersCount)+`
          `+e._s(e.__("Applied")))])],1)],1)],1)],1)},vh=[];Ia._withStripped=!0;var gh=function(e){!e||e("data-v-161a324a_0",{source:`











































































































































































































































































































































































































































































































































































`,map:{version:3,sources:[],names:[],mappings:"",file:"ItemsSelector.vue"},media:void 0})},yh="data-v-161a324a",xh=void 0,bh=!1;function wh(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};f.__file="../posawesome/posawesome/public/js/posapp/components/pos/ItemsSelector.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s;{let P;if(r&&(P=d?function(b){r.call(this,R(b,this.$root.$options.shadowRoot))}:function(b){r.call(this,T(b))}),P!==void 0)if(f.functional){let b=f.render;f.render=function(z,W){return P.call(W),b(z,W)}}else{let b=f.beforeCreate;f.beforeCreate=b?[].concat(b,P):[P]}}return f}function qo(){let e=qo.styles||(qo.styles={}),r=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(s,l){if(document.querySelector('style[data-vue-ssr-id~="'+s+'"]'))return;let p=r?l.media||"default":s,d=e[p]||(e[p]={ids:[],parts:[],element:void 0});if(!d.ids.includes(s)){let T=l.source,S=d.ids.length;if(d.ids.push(s),r&&(d.element=d.element||document.querySelector("style[data-group="+p+"]")),!d.element){let R=document.head||document.getElementsByTagName("head")[0],f=d.element=document.createElement("style");f.type="text/css",l.media&&f.setAttribute("media",l.media),r&&(f.setAttribute("data-group",p),f.setAttribute("data-next-index","0")),R.appendChild(f)}if(r&&(S=parseInt(d.element.getAttribute("data-next-index")),d.element.setAttribute("data-next-index",S+1)),d.element.styleSheet)d.parts.push(T),d.element.styleSheet.cssText=d.parts.filter(Boolean).join(`
`);else{let R=document.createTextNode(T),f=d.element.childNodes;f[S]&&d.element.removeChild(f[S]),f.length?d.element.insertBefore(R,f[S]):d.element.appendChild(R)}}}}var kh=wh({render:Ia,staticRenderFns:vh},gh,hh,yh,bh,xh,!1,qo,void 0,void 0),Sa=kh;var Ch={data:()=>({customerDialog:!1,pos_profile:"",customer_id:"",customer_name:"",tax_id:"",mobile_no:"",email_id:"",referral_code:"",birthday:null,birthday_menu:!1,group:"",groups:[],territory:"",territorys:[],genders:[],customer_type:"Individual",gender:"",loyalty_points:null,loyalty_program:null}),watch:{},methods:{close_dialog(){this.customerDialog=!1,this.clear_customer()},clear_customer(){this.customer_name="",this.tax_id="",this.mobile_no="",this.email_id="",this.referral_code="",this.birthday="",this.group=frappe.defaults.get_user_default("Customer Group"),this.territory=frappe.defaults.get_user_default("Territory"),this.customer_id="",this.customer_type="Individual",this.gender="",this.loyalty_points=null,this.loyalty_program=null},getCustomerGroups(){if(this.groups.length>0)return;let e=this;frappe.db.get_list("Customer Group",{fields:["name"],filters:{is_group:0},limit:1e3,order_by:"name"}).then(r=>{r.length>0&&r.forEach(i=>{e.groups.push(i.name)})})},getCustomerTerritorys(){if(this.territorys.length>0)return;let e=this;frappe.db.get_list("Territory",{fields:["name"],filters:{is_group:0},limit:5e3,order_by:"name"}).then(r=>{r.length>0&&r.forEach(i=>{e.territorys.push(i.name)})})},getGenders(){let e=this;frappe.db.get_list("Gender",{fields:["name"],page_length:10}).then(r=>{r.length>0&&r.forEach(i=>{e.genders.push(i.name)})})},submit_dialog(){if(!this.customer_name){h.$emit("show_mesage",{text:__("Customer name is required."),color:"error"});return}if(!this.group){h.$emit("show_mesage",{text:__("Customer group is required."),color:"error"});return}if(!this.territory){h.$emit("show_mesage",{text:__("Customer territory is required."),color:"error"});return}if(this.customer_name){let e=this,r={customer_id:this.customer_id,customer_name:this.customer_name,company:this.pos_profile.company,tax_id:this.tax_id,mobile_no:this.mobile_no,email_id:this.email_id,referral_code:this.referral_code,birthday:this.birthday,customer_group:this.group,territory:this.territory,customer_type:this.customer_type,gender:this.gender,method:this.customer_id?"update":"create",pos_profile_doc:this.pos_profile};frappe.call({method:"posawesome.posawesome.api.posapp.create_customer",args:r,callback:i=>{if(!i.exc&&i.message.name){let s=__("Customer created successfully.");e.customer_id&&(s=__("Customer updated successfully.")),h.$emit("show_mesage",{text:s,color:"success"}),r.name=i.message.name,frappe.utils.play_sound("submit"),h.$emit("add_customer_to_list",r),h.$emit("set_customer",i.message.name),h.$emit("fetch_customer_details"),this.close_dialog()}else frappe.utils.play_sound("error"),h.$emit("show_mesage",{text:__("Customer creation failed."),color:"error"})}}),this.customerDialog=!1}}},created:function(){h.$on("open_update_customer",e=>{this.customerDialog=!0,e&&(this.customer_name=e.customer_name,this.customer_id=e.name,this.tax_id=e.tax_id,this.mobile_no=e.mobile_no,this.email_id=e.email_id,this.referral_code=e.referral_code,this.birthday=e.birthday,this.group=e.customer_group,this.territory=e.territory,this.loyalty_points=e.loyalty_points,this.loyalty_program=e.loyalty_program,this.gender=e.gender)}),h.$on("register_pos_profile",e=>{this.pos_profile=e.pos_profile}),h.$on("payments_register_pos_profile",e=>{this.pos_profile=e.pos_profile}),this.getCustomerGroups(),this.getCustomerTerritorys(),this.getGenders(),this.group=frappe.defaults.get_user_default("Customer Group"),this.territory=frappe.defaults.get_user_default("Territory")}},$a=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"600px"},on:{"click:outside":e.clear_customer},model:{value:e.customerDialog,callback:function(s){e.customerDialog=s},expression:"customerDialog"}},[i("v-card",[i("v-card-title",[e.customer_id?i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Update Customer")))]):i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Create Customer")))])]),e._v(" "),i("v-card-text",{staticClass:"pa-0"},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{dense:"",color:"primary",label:e.frappe._("Customer Name")+" *","background-color":"white","hide-details":""},model:{value:e.customer_name,callback:function(s){e.customer_name=s},expression:"customer_name"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",color:"primary",label:e.frappe._("Tax ID"),"background-color":"white","hide-details":""},model:{value:e.tax_id,callback:function(s){e.tax_id=s},expression:"tax_id"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",color:"primary",label:e.frappe._("Mobile No"),"background-color":"white","hide-details":""},model:{value:e.mobile_no,callback:function(s){e.mobile_no=s},expression:"mobile_no"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",color:"primary",label:e.frappe._("Email Id"),"background-color":"white","hide-details":""},model:{value:e.email_id,callback:function(s){e.email_id=s},expression:"email_id"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-select",{attrs:{dense:"",label:"Gender",items:e.genders},model:{value:e.gender,callback:function(s){e.gender=s},expression:"gender"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",color:"primary",label:e.frappe._("Referral Code"),"background-color":"white","hide-details":""},model:{value:e.referral_code,callback:function(s){e.referral_code=s},expression:"referral_code"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-menu",{ref:"birthday_menu",attrs:{"close-on-content-click":!1,transition:"scale-transition",dense:""},scopedSlots:e._u([{key:"activator",fn:function(s){var l=s.on,p=s.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:e.frappe._("Birthday"),readonly:"",dense:"",clearable:"","hide-details":"",color:"primary"},model:{value:e.birthday,callback:function(d){e.birthday=d},expression:"birthday"}},"v-text-field",p,!1),l))]}}]),model:{value:e.birthday_menu,callback:function(s){e.birthday_menu=s},expression:"birthday_menu"}},[e._v(" "),i("v-date-picker",{attrs:{color:"primary","no-title":"",scrollable:"",max:e.frappe.datetime.now_date()},on:{input:function(s){e.birthday_menu=!1}},model:{value:e.birthday,callback:function(s){e.birthday=s},expression:"birthday"}})],1)],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-autocomplete",{attrs:{clearable:"",dense:"","auto-select-first":"",color:"primary",label:e.frappe._("Customer Group")+" *",items:e.groups,"background-color":"white","no-data-text":e.__("Group not found"),"hide-details":"",required:""},model:{value:e.group,callback:function(s){e.group=s},expression:"group"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-autocomplete",{attrs:{clearable:"",dense:"","auto-select-first":"",color:"primary",label:e.frappe._("Territory")+" *",items:e.territorys,"background-color":"white","no-data-text":e.__("Territory not found"),"hide-details":"",required:""},model:{value:e.territory,callback:function(s){e.territory=s},expression:"territory"}})],1),e._v(" "),e.loyalty_program?i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{label:e.frappe._("Loyalty Program"),dense:"",readonly:"","hide-details":""},model:{value:e.loyalty_program,callback:function(s){e.loyalty_program=s},expression:"loyalty_program"}})],1):e._e(),e._v(" "),e.loyalty_points?i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{label:e.frappe._("Loyalty Points"),dense:"",readonly:"","hide-details":""},model:{value:e.loyalty_points,callback:function(s){e.loyalty_points=s},expression:"loyalty_points"}})],1):e._e()],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error",dark:""},on:{click:e.close_dialog}},[e._v(e._s(e.__("Close")))]),e._v(" "),i("v-btn",{attrs:{color:"success",dark:""},on:{click:e.submit_dialog}},[e._v(e._s(e.__("Submit")))])],1)],1)],1)],1)},Ih=[];$a._withStripped=!0;var Sh=void 0,$h=void 0,Oh=void 0,Th=!1;function Ah(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/UpdateCustomer.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var Rh=Ah({render:$a,staticRenderFns:Ih},Sh,Ch,$h,Th,Oh,!1,void 0,void 0,void 0),ai=Rh;var Eh={data:()=>({pos_profile:"",customers:[],customer:"",readonly:!1,customer_info:{}}),components:{UpdateCustomer:ai},methods:{get_customer_names(){let e=this;this.customers.length>0||(e.pos_profile.posa_local_storage&&localStorage.customer_storage&&(e.customers=JSON.parse(localStorage.getItem("customer_storage"))),frappe.call({method:"posawesome.posawesome.api.posapp.get_customer_names",args:{pos_profile:this.pos_profile.pos_profile},callback:function(r){r.message&&(e.customers=r.message,console.info("loadCustomers"),e.pos_profile.posa_local_storage&&(localStorage.setItem("customer_storage",""),localStorage.setItem("customer_storage",JSON.stringify(r.message))))}}))},new_customer(){h.$emit("open_update_customer",null)},edit_customer(){h.$emit("open_update_customer",this.customer_info)},customFilter(e,r,i){let s=e.customer_name?e.customer_name.toLowerCase():"",l=e.tax_id?e.tax_id.toLowerCase():"",p=e.email_id?e.email_id.toLowerCase():"",d=e.mobile_no?e.mobile_no.toLowerCase():"",T=e.name.toLowerCase(),S=r.toLowerCase();return s.indexOf(S)>-1||l.indexOf(S)>-1||p.indexOf(S)>-1||d.indexOf(S)>-1||T.indexOf(S)>-1}},computed:{},created:function(){this.$nextTick(function(){h.$on("register_pos_profile",e=>{this.pos_profile=e,this.get_customer_names()}),h.$on("payments_register_pos_profile",e=>{this.pos_profile=e,this.get_customer_names()}),h.$on("set_customer",e=>{this.customer=e}),h.$on("add_customer_to_list",e=>{this.customers.push(e)}),h.$on("set_customer_readonly",e=>{this.readonly=e}),h.$on("set_customer_info_to_edit",e=>{this.customer_info=e}),h.$on("fetch_customer_details",()=>{this.get_customer_names()})})},watch:{customer(){h.$emit("update_customer",this.customer)}}},Oa=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",[i("v-autocomplete",{attrs:{dense:"",clearable:"","auto-select-first":"",outlined:"",color:"primary",label:e.frappe._("Customer"),items:e.customers,"item-text":"customer_name","item-value":"name","background-color":"white","no-data-text":e.__("Customer not found"),"hide-details":"",filter:e.customFilter,disabled:e.readonly,"append-icon":"mdi-plus","prepend-inner-icon":"mdi-account-edit"},on:{"click:append":e.new_customer,"click:prepend-inner":e.edit_customer},scopedSlots:e._u([{key:"item",fn:function(s){return[[i("v-list-item-content",[i("v-list-item-title",{staticClass:"primary--text subtitle-1",domProps:{innerHTML:e._s(s.item.customer_name)}}),e._v(" "),s.item.customer_name!=s.item.name?i("v-list-item-subtitle",{domProps:{innerHTML:e._s("ID: "+s.item.name)}}):e._e(),e._v(" "),s.item.tax_id?i("v-list-item-subtitle",{domProps:{innerHTML:e._s("TAX ID: "+s.item.tax_id)}}):e._e(),e._v(" "),s.item.email_id?i("v-list-item-subtitle",{domProps:{innerHTML:e._s("Email: "+s.item.email_id)}}):e._e(),e._v(" "),s.item.mobile_no?i("v-list-item-subtitle",{domProps:{innerHTML:e._s("Mobile No: "+s.item.mobile_no)}}):e._e(),e._v(" "),s.item.primary_address?i("v-list-item-subtitle",{domProps:{innerHTML:e._s("Primary Address: "+s.item.primary_address)}}):e._e()],1)]]}}]),model:{value:e.customer,callback:function(s){e.customer=s},expression:"customer"}}),e._v(" "),i("div",{staticClass:"mb-8"},[i("UpdateCustomer")],1)],1)},Ph=[];Oa._withStripped=!0;var qh=void 0,Fh=void 0,Lh=void 0,Dh=!1;function Nh(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/Customer.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var Bh=Nh({render:Oa,staticRenderFns:Ph},qh,Eh,Fh,Dh,Lh,!1,void 0,void 0,void 0),ci=Bh;var Mh={data(){return{pos_profile:"",pos_opening_shift:"",stock_settings:"",invoice_doc:"",return_doc:"",customer:"",customer_info:"",discount_amount:0,additional_discount_percentage:0,total_tax:0,invoice_sum:0,items:[],posOffers:[],posa_offers:[],posa_coupons:[],allItems:[],discount_percentage_offer_name:null,invoiceTypes:["Invoice","Order"],invoiceType:"Invoice",itemsPerPage:1e3,expanded:[],singleExpand:!0,cancel_dialog:!1,float_precision:2,currency_precision:2,new_line:!1,delivery_charges:[],delivery_charges_rate:0,selcted_delivery_charges:{},invoice_posting_date:!1,posting_date:frappe.datetime.nowdate(),items_headers:[{text:__("Name"),align:"start",sortable:!0,value:"item_name"},{text:__("QTY"),value:"qty",align:"center"},{text:__("UOM"),value:"uom",align:"center"},{text:__("Rate"),value:"rate",align:"center"},{text:__("Tax"),value:"item_tax_amount",align:"center"},{text:__("Amount"),value:"amount",align:"center"}]}},components:{Customer:ci},computed:{total_qty(){this.close_payments();let e=0;return this.items.forEach(r=>{e+=r.qty}),flt(e).toFixed(this.float_precision)},Total(){let e=0;return this.items.forEach(r=>{e+=r.qty*r.rate}),console.log("sum",e),console.log("currency_precision",this.currency_precision),flt(e).toFixed(this.currency_precision)},subtotal(){this.close_payments();let e=0;return this.items.forEach(r=>{e+=r.qty*r.rate}),e-=flt(this.discount_amount),e+=flt(this.delivery_charges_rate),flt(e).toFixed(this.currency_precision)},total_item_tax(){this.close_payments();let e=0;return this.items.forEach(r=>{e+=r.item_tax_amount*r.qty}),flt(e).toFixed(this.currency_precision)},total_item_amount(){this.close_payments();let e=0;return this.items.forEach(r=>{e+=r.item_amount*r.qty}),e-=flt(this.discount_amount),this.invoice_sum=flt(e).toFixed(this.currency_precision),flt(e).toFixed(this.currency_precision)},total_items_discount_amount(){let e=0;return this.items.forEach(r=>{e+=r.qty*r.discount_amount}),flt(e).toFixed(this.float_precision)}},methods:{remove_item(e){let r=this.items.findIndex(s=>s.posa_row_id==e.posa_row_id);r>=0&&this.items.splice(r,1);let i=this.expanded.findIndex(s=>s.posa_row_id==e.posa_row_id);i>=0&&this.expanded.splice(i,1)},add_one(e){e.qty++,e.qty==0&&this.remove_item(e),this.calc_sotck_gty(e,e.qty),this.$forceUpdate()},subtract_one(e){e.qty--,e.qty==0&&this.remove_item(e),this.calc_sotck_gty(e,e.qty),this.$forceUpdate()},add_item(e){e.uom||(e.uom=e.stock_uom);let r=-1;if(this.new_item||(r=this.items.findIndex(i=>i.item_code===e.item_code&&i.uom===e.uom&&!i.posa_is_offer&&!i.posa_is_replace)),r===-1||this.new_line){let i=this.get_new_item(e);e.has_serial_no&&e.to_set_serial_no&&(i.serial_no_selected=[],i.serial_no_selected.push(e.to_set_serial_no),e.to_set_serial_no=null),this.items.unshift(i),this.update_item_detail(i)}else{let i=this.items[r];if(this.update_items_details([i]),e.has_serial_no&&e.to_set_serial_no){if(i.serial_no_selected.includes(e.to_set_serial_no)){h.$emit("show_mesage",{text:__("This Serial Number {0} has already been added!",[e.to_set_serial_no]),color:"warning"}),e.to_set_serial_no=null;return}i.serial_no_selected.push(e.to_set_serial_no),e.to_set_serial_no=null}if(!i.has_batch_no)i.qty+=e.qty||1,this.calc_sotck_gty(i,i.qty);else if(i.stock_qty<i.actual_batch_qty||!i.batch_no)i.qty+=e.qty||1,this.calc_sotck_gty(i,i.qty);else{let s=this.get_new_item(i);s.batch_no="",s.batch_no_expiry_date="",s.actual_batch_qty="",s.qty=e.qty||1,this.items.unshift(s)}this.set_serial_no(i)}this.$forceUpdate()},get_new_item(e){let r=me({},e);return e.qty||(e.qty=1),e.posa_is_offer||(e.posa_is_offer=0),e.posa_is_replace||(e.posa_is_replace=""),r.stock_qty=e.qty,r.discount_amount=0,r.discount_percentage=0,r.discount_amount_per_item=0,r.price_list_rate=e.rate,r.qty=e.qty,r.uom=e.uom?e.uom:e.stock_uom,r.actual_batch_qty="",r.conversion_factor=1,r.posa_offers=JSON.stringify([]),r.posa_offer_applied=0,r.posa_is_offer=e.posa_is_offer,r.posa_is_replace=e.posa_is_replace||null,r.is_free_item=0,r.posa_notes="",r.posa_delivery_date="",r.posa_row_id=this.makeid(20),(!this.pos_profile.posa_auto_set_batch&&r.has_batch_no||r.has_serial_no)&&this.expanded.push(r),r},cancel_invoice(){let e=this.get_invoice_doc();this.invoiceType="Invoice",this.invoiceTypes=["Invoice","Order"],this.posting_date=frappe.datetime.nowdate(),e.name&&this.pos_profile.posa_allow_delete&&frappe.call({method:"posawesome.posawesome.api.posapp.delete_invoice",args:{invoice:e.name},async:!0,callback:function(r){r.message&&h.$emit("show_mesage",{text:r.message,color:"warning"})}}),this.items=[],this.posa_offers=[],h.$emit("set_pos_coupons",[]),this.posa_coupons=[],this.customer=this.pos_profile.customer,this.invoice_doc="",this.return_doc="",this.discount_amount=0,this.additional_discount_percentage=0,this.delivery_charges_rate=0,this.selcted_delivery_charges={},h.$emit("set_customer_readonly",!1),this.cancel_dialog=!1},new_invoice(e={}){let r=null;h.$emit("set_customer_readonly",!1),this.expanded=[],this.posa_offers=[],h.$emit("set_pos_coupons",[]),this.posa_coupons=[],this.return_doc="";let i=this.get_invoice_doc();return i.name?r=this.update_invoice(i):i.items.length&&(r=this.update_invoice(i)),!e.name&&!e.is_return?(this.items=[],this.customer=this.pos_profile.customer,this.invoice_doc="",this.discount_amount=0,this.additional_discount_percentage=0,this.invoiceType="Invoice",this.invoiceTypes=["Invoice","Order"]):(e.is_return&&(h.$emit("set_customer_readonly",!0),this.invoiceType="Return",this.invoiceTypes=["Return"]),this.invoice_doc=e,this.items=e.items,this.update_items_details(this.items),this.posa_offers=e.posa_offers||[],this.items.forEach(s=>{s.posa_row_id||(s.posa_row_id=this.makeid(20)),s.batch_no&&this.set_batch_qty(s,s.batch_no)}),this.customer=e.customer,this.posting_date=e.posting_date||frappe.datetime.nowdate(),this.discount_amount=e.discount_amount,this.additional_discount_percentage=e.additional_discount_percentage,this.items.forEach(s=>{s.serial_no&&(s.serial_no_selected=[],s.serial_no.split(`
`).forEach(p=>{p.length&&s.serial_no_selected.push(p)}),s.serial_no_selected_count=s.serial_no_selected.length)})),r},get_invoice_doc(){let e={};return this.invoice_doc.name&&(e=me({},this.invoice_doc)),e.doctype="Sales Invoice",e.is_pos=1,e.ignore_pricing_rule=1,e.company=e.company||this.pos_profile.company,e.pos_profile=e.pos_profile||this.pos_profile.name,e.campaign=e.campaign||this.pos_profile.campaign,e.currency=e.currency||this.pos_profile.currency,e.naming_series=e.naming_series||this.pos_profile.naming_series,e.customer=this.customer,e.items=this.get_invoice_items(),e.total=this.subtotal,e.discount_amount=flt(this.discount_amount),e.additional_discount_percentage=flt(this.additional_discount_percentage),e.posa_pos_opening_shift=this.pos_opening_shift.name,e.payments=this.get_payments(),e.taxes=[],e.is_return=this.invoice_doc.is_return,e.return_against=this.invoice_doc.return_against,e.posa_offers=this.posa_offers,e.posa_coupons=this.posa_coupons,e.posa_delivery_charges=this.selcted_delivery_charges.name,e.posa_delivery_charges_rate=this.delivery_charges_rate||0,e.posting_date=this.posting_date,e.invoice_sum=this.invoice_sum,e},get_invoice_items(){let e=[];return this.items.forEach(r=>{let i={item_code:r.item_code,posa_row_id:r.posa_row_id,posa_offers:r.posa_offers,posa_offer_applied:r.posa_offer_applied,posa_is_offer:r.posa_is_offer,posa_is_replace:r.posa_is_replace,is_free_item:r.is_free_item,qty:r.qty,rate:r.rate,uom:r.uom,amount:r.qty*r.rate,conversion_factor:r.conversion_factor,serial_no:r.serial_no,discount_percentage:r.discount_percentage,discount_amount:r.discount_amount,batch_no:r.batch_no,posa_notes:r.posa_notes,posa_delivery_date:r.posa_delivery_date,price_list_rate:r.price_list_rate};e.push(i)}),e},get_payments(){let e=[];return this.pos_profile.payments.forEach(r=>{e.push({amount:0,mode_of_payment:r.mode_of_payment,default:r.default,account:""})}),e},update_invoice(e){let r=this;return frappe.call({method:"posawesome.posawesome.api.posapp.update_invoice",args:{data:e},async:!1,callback:function(i){i.message&&(r.invoice_doc=i.message)}}),this.invoice_doc},proces_invoice(){let e=this.get_invoice_doc();return e.name?this.update_invoice(e):this.update_invoice(e)},show_payment(){if(!this.customer){h.$emit("show_mesage",{text:__("There is no Customer !"),color:"error"});return}if(!this.items.length){h.$emit("show_mesage",{text:__("There is no Items !"),color:"error"});return}if(!this.validate())return;h.$emit("show_payment","true");let e=this.proces_invoice();h.$emit("send_invoice_doc_payment",e)},validate(){let e=!0;return this.items.forEach(r=>{if(this.stock_settings.allow_negative_stock!=1&&this.invoiceType=="Invoice"&&(r.is_stock_item&&r.stock_qty&&!r.actual_qty||r.is_stock_item&&r.stock_qty>r.actual_qty)&&(h.$emit("show_mesage",{text:__("The existing quantity '{0}' for item '{1}' is not enough",[r.actual_qty,r.item_name]),color:"error"}),e=!1),r.max_discount>0&&r.discount_percentage>r.max_discount&&(h.$emit("show_mesage",{text:__("Maximum discount for Item {0} is {1}%",[r.item_name,r.max_discount]),color:"error"}),e=!1),r.has_serial_no&&!this.invoice_doc.is_return&&(!r.serial_no_selected||r.stock_qty!=r.serial_no_selected.length)&&(h.$emit("show_mesage",{text:__("Selected serial numbers of item {0} is incorrect",[r.item_name]),color:"error"}),e=!1),r.has_batch_no&&r.stock_qty>r.actual_batch_qty&&(h.$emit("show_mesage",{text:__("The existing batch quantity of item {0} is not enough",[r.item_name]),color:"error"}),e=!1),this.pos_profile.posa_allow_user_to_edit_additional_discount&&this.discount_amount/this.Total*100>this.pos_profile.posa_max_discount_allowed&&(h.$emit("show_mesage",{text:__("The discount should not be higher than {0}%",[this.pos_profile.posa_max_discount_allowed]),color:"error"}),e=!1),this.invoice_doc.is_return){if(this.subtotal>=0)return h.$emit("show_mesage",{text:__("Return Invoice Total Not Correct"),color:"error"}),e=!1,e;if(this.subtotal*-1>this.return_doc.total)return h.$emit("show_mesage",{text:__("Return Invoice Total should not be higher than {0}",[this.return_doc.total]),color:"error"}),e=!1,e;this.items.forEach(i=>{let s=this.return_doc.items.find(l=>l.item_code==i.item_code);if(s){if(i.qty*-1>s.qty||i.qty>=0)return h.$emit("show_mesage",{text:__("The QTY of the item {0} cannot be greater than {1}",[i.item_name,s.qty]),color:"error"}),e=!1,e}else return h.$emit("show_mesage",{text:__("The item {0} cannot be returned because it is not in the invoice {1}",[i.item_name,this.return_doc.name]),color:"error"}),e=!1,e})}}),e},get_draft_invoices(){let e=this;frappe.call({method:"posawesome.posawesome.api.posapp.get_draft_invoices",args:{pos_opening_shift:this.pos_opening_shift.name},async:!1,callback:function(r){r.message&&h.$emit("open_drafts",r.message)}})},open_returns(){h.$emit("open_returns",this.pos_profile.company)},close_payments(){h.$emit("show_payment","false")},update_items_details(e){if(!e.length>0)return;let r=this;!r.pos_profile||frappe.call({method:"posawesome.posawesome.api.posapp.get_items_details",async:!1,args:{pos_profile:r.pos_profile,items_data:e},callback:function(i){i.message&&e.forEach(s=>{let l=i.message.find(p=>p.posa_row_id==s.posa_row_id);if(s.actual_qty=l.actual_qty,s.serial_no_data=l.serial_no_data,s.batch_no_data=l.batch_no_data,s.item_uoms=l.item_uoms,s.has_batch_no=l.has_batch_no,s.has_serial_no=l.has_serial_no,s.item_tax_rate=l.item_tax_rate,s.included_in_print_rate=l.included_in_print_rate,l.included_in_print_rate){let p=l.item_tax_rate/100,d=l.rate/(1+p);s.item_tax_amount=(l.rate-d).toFixed(3),s.item_amount=s.rate}else s.item_tax_amount=(l.rate*l.item_tax_rate/100).toFixed(3),s.item_amount=flt(s.rate)+flt(s.item_tax_amount)})}})},update_item_detail(e){let r=this;frappe.call({method:"posawesome.posawesome.api.posapp.get_item_detail",args:{warehouse:this.pos_profile.warehouse,doc:this.get_invoice_doc(),price_list:this.pos_profile.price_list,item:{item_code:e.item_code,customer:this.customer,doctype:"Sales Invoice",name:"New Sales Invoice 1",company:this.pos_profile.company,conversion_rate:1,qty:e.qty,price_list_rate:e.price_list_rate,child_docname:"New Sales Invoice Item 1",cost_center:this.pos_profile.cost_center,currency:this.pos_profile.currency,pos_profile:this.pos_profile.name,price_list:this.pos_profile.selling_price_list,uom:e.uom,tax_category:"",transaction_type:"selling",update_stock:this.pos_profile.update_stock,price_list:this.get_price_list(),has_batch_no:e.has_batch_no,serial_no:e.serial_no,batch_no:e.batch_no,is_stock_item:e.is_stock_item}},callback:function(i){if(i.message){let s=i.message;e.has_batch_no&&r.pos_profile.posa_auto_set_batch&&!e.batch_no&&s.batch_no&&(e.batch_no=s.batch_no,r.set_batch_qty(e,e.batch_no,!1)),s.has_pricing_rule||r.pos_profile.posa_apply_customer_discount&&r.customer_info.posa_discount>0&&r.customer_info.posa_discount<=100&&e.posa_is_offer==0&&!e.posa_is_replace&&e.posa_offer_applied==0&&(e.max_discount>0?e.discount_percentage=e.max_discount<r.customer_info.posa_discount?e.max_discount:r.customer_info.posa_discount:e.discount_percentage=r.customer_info.posa_discount),e.btach_price||!e.is_free_item&&!e.posa_is_offer&&!e.posa_is_replace&&(e.price_list_rate=s.price_list_rate),e.last_purchase_rate=s.last_purchase_rate,e.projected_qty=s.projected_qty,e.reserved_qty=s.reserved_qty,e.conversion_factor=s.conversion_factor,e.stock_qty=s.stock_qty,e.actual_qty=s.actual_qty,e.stock_uom=s.stock_uom,e.has_serial_no=s.has_serial_no,e.has_batch_no=s.has_batch_no,r.calc_item_price(e)}}})},fetch_customer_details(){let e=this;this.customer&&frappe.call({method:"posawesome.posawesome.api.posapp.get_customer_info",args:{customer:e.customer},async:!1,callback:r=>{let i=r.message;r.exc||(e.customer_info=me({},i)),e.update_price_list()}})},get_price_list(){let e=this.pos_profile.selling_price_list;if(this.customer_info&&this.pos_profile){let{customer_price_list:r,customer_group_price_list:i}=this.customer_info,s=this.pos_profile.selling_price_list;r&&r!=s?e=r:i&&i!=s&&(e=i)}return e},update_price_list(){let e=this.get_price_list();e==this.pos_profile.selling_price_list&&(e=null),h.$emit("update_customer_price_list",e)},update_discount_umount(){let e=flt(this.additional_discount_percentage);e>=-100&&e<=100?this.discount_amount=this.Total*e/100:(this.additional_discount_percentage=0,this.discount_amount=0)},calc_prices(e,r,i){if(event.target.id==="rate"?(e.discount_percentage=0,r<e.price_list_rate?e.discount_amount=(flt(e.price_list_rate)-flt(r)).toFixed(this.currency_precision):r<0?(e.rate=e.price_list_rate,e.discount_amount=0):r>e.price_list_rate&&(e.discount_amount=0)):event.target.id==="discount_amount"?r<0?(e.discount_amount=0,e.discount_percentage=0):(e.rate=flt(e.price_list_rate)-flt(r),e.discount_percentage=0):event.target.id==="discount_percentage"&&(r<0?(e.discount_amount=0,e.discount_percentage=0):(e.rate=(flt(e.price_list_rate)-flt(e.price_list_rate)*flt(r)/100).toFixed(this.currency_precision),e.discount_amount=(flt(e.price_list_rate)-flt(e.rate)).toFixed(this.currency_precision))),e.included_in_print_rate){let s=e.item_tax_rate/100,l=e.rate/(1+s);e.item_tax_amount=(e.rate-l).toFixed(3),e.item_amount=flt(e.rate)}else e.item_tax_amount=(e.rate*e.item_tax_rate/100).toFixed(3),e.item_amount=flt(e.rate)+flt(e.item_tax_amount)},calc_item_price(e){e.posa_offer_applied||e.price_list_rate&&(e.rate=e.price_list_rate),e.discount_percentage?(e.rate=flt(e.price_list_rate)-flt(e.price_list_rate)*flt(e.discount_percentage)/100,e.discount_amount=(flt(e.price_list_rate)-flt(e.rate)).toFixed(this.currency_precision)):e.discount_amount&&(e.rate=(flt(e.price_list_rate)-flt(e.discount_amount)).toFixed(this.currency_precision))},calc_uom(e,r){let i=e.item_uoms.find(s=>s.uom==r);e.conversion_factor=i.conversion_factor,e.posa_offer_applied||(e.discount_amount=0,e.discount_percentage=0),e.btach_price&&(e.price_list_rate=e.btach_price*i.conversion_factor),this.update_item_detail(e)},calc_sotck_gty(e,r){e.stock_qty=e.conversion_factor*r},set_serial_no(e){!e.has_serial_no||(e.serial_no="",e.serial_no_selected.forEach(r=>{e.serial_no+=r+`
`}),e.serial_no_selected_count=e.serial_no_selected.length,e.serial_no_selected_count!=e.stock_qty&&h.$emit("show_mesage",{text:__("Selected Serial No QTY is {0} it should be {1}",[e.serial_no_selected_count,e.stock_qty]),color:"warning"}))},set_batch_qty(e,r,i=!0){let s=e.batch_no_data.find(l=>l.batch_no==r);e.actual_batch_qty=s.batch_qty,e.batch_no_expiry_date=s.expiry_date,s.btach_price?(e.btach_price=s.btach_price,e.price_list_rate=s.btach_price,e.rate=s.btach_price):i&&(e.btach_price=null,this.update_item_detail(e))},formtCurrency(e){return e=parseFloat(e),e.toFixed(this.currency_precision).replace(/\d(?=(\d{3})+\.)/g,"$&,")},formtFloat(e){return e=parseFloat(e),e.toFixed(this.float_precision).replace(/\d(?=(\d{3})+\.)/g,"$&,")},shortOpenPayment(e){e.key==="s"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.show_payment())},shortDeleteFirstItem(e){e.key==="d"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.remove_item(this.items[0]))},shortOpenFirstItem(e){e.key==="a"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.expanded=[],this.expanded.push(this.items[0]))},shortSelectDiscount(e){e.key==="z"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.$refs.discount.focus())},makeid(e){let r="",i="abcdefghijklmnopqrstuvwxyz0123456789",s=i.length;for(var l=0;l<e;l++)r+=i.charAt(Math.floor(Math.random()*s));return r},checkOfferIsAppley(e,r){let i=!1,s=JSON.parse(e.posa_offers);for(let l of s){let p=this.posa_offers.find(d=>l==d.row_id);if(p&&p.offer_name==r.name){i=!0;break}}return i},handelOffers(){let e=[];this.posOffers.forEach(r=>{if(r.apply_on==="Item Code"){let i=this.getItemOffer(r);i&&e.push(i)}else if(r.apply_on==="Item Group"){let i=this.getGroupOffer(r);i&&e.push(i)}else if(r.apply_on==="Brand"){let i=this.getBrandOffer(r);i&&e.push(i)}else if(r.apply_on==="Transaction"){let i=this.getTransactionOffer(r);i&&e.push(i)}}),this.setItemGiveOffer(e),this.updatePosOffers(e)},setItemGiveOffer(e){e.forEach(r=>{if(r.apply_on=="Item Code"&&r.apply_type=="Item Code"&&r.replace_item)r.give_item=r.item,r.apply_item_code=r.item;else if(r.apply_on=="Item Group"&&r.apply_type=="Item Group"&&r.replace_cheapest_item){let i=this.getCheapestItem(r).item_code;r.give_item=i,r.apply_item_code=i}})},getCheapestItem(e){let r;typeof e.items=="string"?r=JSON.parse(e.items):r=e.items;let i=[];return r.forEach(l=>{i.push(this.getItemFromRowID(l))}),i.reduce(function(l,p){return!p.posa_is_replace&&!p.posa_is_offer&&p.price_list_rate<l.price_list_rate?p:l})},getItemFromRowID(e){return this.items.find(i=>i.posa_row_id==e)},checkQtyAnountOffer(e,r,i){let s=!1,l=!1,p=!1,d=!1,T=[];(e.min_qty||e.min_qty==0)&&(r>=e.min_qty&&(s=!0),T.push(s)),e.max_qty>0&&(r<=e.max_qty&&(l=!0),T.push(l)),e.min_amt>0&&(i>=e.min_amt&&(p=!0),T.push(p)),e.max_amt>0&&(i<=e.max_amt&&(d=!0),T.push(d));let S=!1;return T.includes(!1)||(S=!0),{apply:S,conditions:{min_qty:s,max_qty:l,min_amt:p,max_amt:d}}},checkOfferCoupon(e){if(e.coupon_based){let r=this.posa_coupons.find(i=>e.name==i.pos_offer);return r?(e.coupon=r.coupon,!0):!1}else return e.coupon=null,!0},getItemOffer(e){let r=null;return e.apply_on==="Item Code"&&this.checkOfferCoupon(e)&&this.items.forEach(i=>{if(!i.posa_is_offer&&i.item_code===e.item){let s=[];e.offer==="Item Price"&&i.posa_offer_applied&&!this.checkOfferIsAppley(i,e)||this.checkQtyAnountOffer(e,i.stock_qty,i.stock_qty*i.price_list_rate).apply&&(s.push(i.posa_row_id),e.items=s,r=e)}}),r},getGroupOffer(e){let r=null;if(e.apply_on==="Item Group"&&this.checkOfferCoupon(e)){let i=[],s=0,l=0;this.items.forEach(p=>{!p.posa_is_offer&&p.item_group===e.item_group&&(e.offer==="Item Price"&&p.posa_offer_applied&&!this.checkOfferIsAppley(p,e)||(s+=p.stock_qty,l+=p.stock_qty*p.price_list_rate,i.push(p.posa_row_id)))}),(s||l)&&this.checkQtyAnountOffer(e,s,l).apply&&(e.items=i,r=e)}return r},getBrandOffer(e){let r=null;if(e.apply_on==="Brand"&&this.checkOfferCoupon(e)){let i=[],s=0,l=0;this.items.forEach(p=>{!p.posa_is_offer&&p.brand===e.brand&&(e.offer==="Item Price"&&p.posa_offer_applied&&!this.checkOfferIsAppley(p,e)||(s+=p.stock_qty,l+=p.stock_qty*p.price_list_rate,i.push(p.posa_row_id)))}),(s||l)&&this.checkQtyAnountOffer(e,s,l).apply&&(e.items=i,r=e)}return r},getTransactionOffer(e){let r=null;if(e.apply_on==="Transaction"&&this.checkOfferCoupon(e)){let i=0;this.items.forEach(d=>{!d.posa_is_offer&&!d.posa_is_replace&&(i+=d.stock_qty)});let s=[],l=i,p=this.Total;(l||p)&&this.checkQtyAnountOffer(e,l,p).apply&&(this.items.forEach(T=>{s.push(T.posa_row_id)}),e.items=s,r=e)}return r},updatePosOffers(e){h.$emit("update_pos_offers",e)},updateInvoiceOffers(e){this.posa_offers.forEach(r=>{e.find(s=>r.row_id==s.row_id)||this.removeApplyOffer(r)}),e.forEach(r=>{let i=this.posa_offers.find(s=>s.row_id==r.row_id);if(i){if(i.items=JSON.stringify(r.items),i.offer==="Give Product"&&i.give_item&&i.give_item!=r.give_item){let s=this.items.find(p=>p.posa_row_id==i.give_item_row_id);if(s){let p=r.items.filter(d=>d!=s.posa_row_id);r.items=p,this.remove_item(s),i.give_item_row_id=null,i.give_item=null}let l=this.ApplyOnGiveProduct(r);if(r.replace_cheapest_item){let p=this.getCheapestItem(r),d=this.items.find(S=>S.posa_row_id==s.posa_is_replace);if(l.qty=s.qty,d&&!d.posa_is_replace)d.qty+=s.qty;else{let S=this.ApplyOnGiveProduct({given_qty:s.qty},s.item_code);S.posa_is_offer=0,this.items.unshift(S)}l.posa_is_offer=0,l.posa_is_replace=p.posa_row_id;let T=p.qty-l.qty;T<=0?(l.qty+=T,this.remove_item(p),l.posa_row_id=p.posa_row_id,l.posa_is_replace=l.posa_row_id):p.qty=T}this.items.unshift(l),i.give_item_row_id=l.posa_row_id,i.give_item=l.item_code}else i.offer==="Give Product"&&i.give_item&&i.give_item==r.give_item&&(r.replace_item||r.replace_cheapest_item)?this.$nextTick(function(){let s=this.getItemFromRowID(i.give_item_row_id),l=r.given_qty-s.qty;if(l>0){let p=JSON.parse(i.items),d=[];p.forEach(S=>{d.push(this.getItemFromRowID(S))});let T=d.find(S=>S.item_code==s.item_code&&S.posa_is_replace!=s.posa_row_id);T&&(T.qty-l>0?(s.qty+=l,T.qty-=l):(s.qty+=T.qty,this.remove_item(T)))}}):i.offer==="Item Price"?this.ApplyOnPrice(r):i.offer==="Grand Total"&&this.ApplyOnTotal(r);this.addOfferToItems(i)}else this.applyNewOffer(r)})},removeApplyOffer(e){if(e.offer==="Item Price"){this.RemoveOnPrice(e);let r=this.posa_offers.findIndex(i=>i.row_id===e.row_id);this.posa_offers.splice(r,1)}if(e.offer==="Give Product"){let r=this.items.find(s=>s.posa_row_id==e.give_item_row_id),i=this.posa_offers.findIndex(s=>s.row_id===e.row_id);this.posa_offers.splice(i,1),this.remove_item(r)}if(e.offer==="Grand Total"){this.RemoveOnTotal(e);let r=this.posa_offers.findIndex(i=>i.row_id===e.row_id);this.posa_offers.splice(r,1)}if(e.offer==="Loyalty Point"){let r=this.posa_offers.findIndex(i=>i.row_id===e.row_id);this.posa_offers.splice(r,1)}this.deleteOfferFromItems(e)},applyNewOffer(e){if(e.offer==="Item Price"&&this.ApplyOnPrice(e),e.offer==="Give Product"){let i;if(typeof e.items=="string"?i=JSON.parse(e.items):i=e.items,e.apply_on=="Item Code"&&e.apply_type=="Item Code"&&e.replace_item){let s=this.ApplyOnGiveProduct(e,e.item);s.posa_is_replace=i[0];let l=this.items.find(d=>d.posa_row_id==s.posa_is_replace),p=l.qty-e.given_qty;s.posa_is_offer=0,p<=0?(s.qty=l.qty,this.remove_item(l),s.posa_row_id=s.posa_is_replace):l.qty=p,this.items.unshift(s),e.give_item_row_id=s.posa_row_id}else if(e.apply_on=="Item Group"&&e.apply_type=="Item Group"&&e.replace_cheapest_item){let s=[];i.forEach(T=>{s.push(this.getItemFromRowID(T))});let l=s.find(T=>T.item_code==e.give_item),p=this.ApplyOnGiveProduct(e,e.give_item);p.posa_is_offer=0,p.posa_is_replace=l.posa_row_id;let d=l.qty-e.given_qty;d<=0?(p.qty=l.qty,this.remove_item(l),p.posa_row_id=p.posa_is_replace):l.qty=d,this.items.unshift(p),e.give_item_row_id=p.posa_row_id}else{let s=this.ApplyOnGiveProduct(e);this.items.unshift(s),s&&(e.give_item_row_id=s.posa_row_id)}}e.offer==="Grand Total"&&this.ApplyOnTotal(e),e.offer==="Loyalty Point"&&h.$emit("show_mesage",{text:__("Loyalty Point Offer Applied"),color:"success"});let r={offer_name:e.name,row_id:e.row_id,apply_on:e.apply_on,offer:e.offer,items:JSON.stringify(e.items),give_item:e.give_item,give_item_row_id:e.give_item_row_id,offer_applied:e.offer_applied,coupon_based:e.coupon_based,coupon:e.coupon};this.posa_offers.push(r),this.addOfferToItems(r)},ApplyOnGiveProduct(e,r){r||(r=e.give_item);let s=this.allItems.find(p=>p.item_code==r);if(!s)return;let l=me({},s);return l.qty=e.given_qty,l.stock_qty=e.given_qty,l.rate=e.discount_type==="Rate"?e.rate:s.rate,l.discount_amount=e.discount_type==="Discount Amount"?e.discount_amount:0,l.discount_percentage=e.discount_type==="Discount Percentage"?e.discount_percentage:0,l.discount_amount_per_item=0,l.uom=s.uom?s.uom:s.stock_uom,l.actual_batch_qty="",l.conversion_factor=1,l.posa_offers=JSON.stringify([]),l.posa_offer_applied=0,l.posa_is_offer=1,l.posa_is_replace=null,l.posa_notes="",l.posa_delivery_date="",l.is_free_item=e.discount_type==="Rate"&&!e.rate||e.discount_type==="Discount Percentage"&&e.discount_percentage==0?1:0,l.posa_row_id=this.makeid(20),l.price_list_rate=e.discount_type==="Rate"&&!e.rate||e.discount_type==="Discount Percentage"&&e.discount_percentage==0?0:s.rate,(!this.pos_profile.posa_auto_set_batch&&l.has_batch_no||l.has_serial_no)&&this.expanded.push(l),this.update_item_detail(l),l},ApplyOnPrice(e){this.items.forEach(r=>{e.items.includes(r.posa_row_id)&&(JSON.parse(r.posa_offers).includes(e.row_id)||(e.discount_type==="Rate"?r.rate=e.rate:e.discount_type==="Discount Percentage"?r.discount_percentage+=e.discount_percentage:e.discount_type==="Discount Amount"&&(r.discount_amount+=e.discount_amount),r.posa_offer_applied=1,this.calc_item_price(r)))})},RemoveOnPrice(e){this.items.forEach(r=>{if(JSON.parse(r.posa_offers).includes(e.row_id)){let s=this.posOffers.find(l=>l.name==e.offer_name);s&&(s.discount_type==="Rate"?r.rate=r.price_list_rate:s.discount_type==="Discount Percentage"?(r.discount_percentage-=e.discount_percentage,r.discount_percentage||(r.discount_percentage=0,r.discount_amount=0,r.rate=r.price_list_rate)):s.discount_type==="Discount Amount"&&(r.discount_amount-=e.discount_amount),this.calc_item_price(r))}})},ApplyOnTotal(e){e.name||(e=this.posOffers.find(r=>r.name==e.offer_name)),(!this.discount_percentage_offer_name||this.discount_percentage_offer_name==e.name)&&e.discount_percentage>0&&e.discount_percentage<=100&&(this.discount_amount=(flt(this.Total)*flt(e.discount_percentage)/100).toFixed(this.currency_precision),this.discount_percentage_offer_name=e.name)},RemoveOnTotal(e){this.discount_percentage_offer_name&&this.discount_percentage_offer_name==e.offer_name&&(this.discount_amount=0,this.discount_percentage_offer_name=null)},addOfferToItems(e){JSON.parse(e.items).forEach(i=>{this.items.forEach(s=>{if(s.posa_row_id==i){let l=JSON.parse(s.posa_offers);l.includes(e.row_id)||(l.push(e.row_id),e.offer==="Item Price"&&(s.posa_offer_applied=1)),s.posa_offers=JSON.stringify(l)}})})},deleteOfferFromItems(e){JSON.parse(e.items).forEach(i=>{this.items.forEach(s=>{if(s.posa_row_id==i){let p=JSON.parse(s.posa_offers).filter(d=>d!=e.row_id);e.offer==="Item Price"&&(s.posa_offer_applied=0),s.posa_offers=JSON.stringify(p)}})})},validate_due_date(e){let r=frappe.datetime.now_date(),i=Date.parse(r);Date.parse(e.posa_delivery_date)<i&&setTimeout(()=>{e.posa_delivery_date=r},0)},load_print_page(e){let r=this.pos_profile.print_format_for_online||this.pos_profile.print_format,i=this.pos_profile.letter_head||0,s=frappe.urllib.get_base_url()+"/printview?doctype=Sales%20Invoice&name="+e+"&trigger_print=1&format="+r+"&no_letterhead="+i,l=window.open(s,"Print");l.addEventListener("load",function(){l.print()},!0)},print_draft_invoice(){if(!this.pos_profile.posa_allow_print_draft_invoices){h.$emit("show_mesage",{text:__("You are not allowed to print draft invoices"),color:"error"});return}let e=this.invoice_doc.name;frappe.run_serially([()=>{let r=this.new_invoice();e=r.name?r.name:e},()=>{this.load_print_page(e)}])},set_delivery_charges(){let e=this;if(!this.pos_profile||!this.customer||!this.pos_profile.posa_use_delivery_charges){this.delivery_charges=[],this.delivery_charges_rate=0,this.selcted_delivery_charges={};return}this.delivery_charges_rate=0,this.selcted_delivery_charges={},frappe.call({method:"posawesome.posawesome.api.posapp.get_applicable_delivery_charges",args:{company:this.pos_profile.company,pos_profile:this.pos_profile.name,customer:this.customer},async:!0,callback:function(r){r.message&&(e.delivery_charges=r.message)}})},deliveryChargesFilter(e,r,i){let s=e.name.toLowerCase(),l=r.toLowerCase();return s.indexOf(l)>-1},update_delivery_charges(){this.selcted_delivery_charges?this.delivery_charges_rate=this.selcted_delivery_charges.rate:this.delivery_charges_rate=0}},created(){h.$on("register_pos_profile",e=>{this.pos_profile=e.pos_profile,this.customer=e.pos_profile.customer,this.pos_opening_shift=e.pos_opening_shift,this.stock_settings=e.stock_settings,this.float_precision=frappe.defaults.get_default("float_precision")||2,this.currency_precision=frappe.defaults.get_default("currency_precision")||2}),h.$on("add_item",e=>{this.add_item(e)}),h.$on("update_customer",e=>{this.customer=e}),h.$on("new_invoice",()=>{this.invoice_doc="",this.cancel_invoice()}),h.$on("load_invoice",e=>{this.new_invoice(e),h.$emit("set_pos_coupons",e.posa_coupons)}),h.$on("set_offers",e=>{this.posOffers=e}),h.$on("update_invoice_offers",e=>{this.updateInvoiceOffers(e)}),h.$on("update_invoice_coupons",e=>{this.posa_coupons=e,this.handelOffers()}),h.$on("set_all_items",e=>{this.allItems=e,this.items.forEach(r=>{this.update_item_detail(r)})}),h.$on("load_return_invoice",e=>{this.new_invoice(e.invoice_doc),this.discount_amount=-e.return_doc.discount_amount,this.additional_discount_percentage=-e.return_doc.additional_discount_percentage,this.return_doc=e.return_doc}),h.$on("set_new_line",e=>{this.new_line=e}),document.addEventListener("keydown",this.shortOpenPayment.bind(this)),document.addEventListener("keydown",this.shortDeleteFirstItem.bind(this)),document.addEventListener("keydown",this.shortOpenFirstItem.bind(this)),document.addEventListener("keydown",this.shortSelectDiscount.bind(this))},destroyed(){document.removeEventListener("keydown",this.shortOpenPayment),document.removeEventListener("keydown",this.shortDeleteFirstItem),document.removeEventListener("keydown",this.shortOpenFirstItem),document.removeEventListener("keydown",this.shortSelectDiscount)},watch:{customer(){this.close_payments(),h.$emit("set_customer",this.customer),this.fetch_customer_details(),this.set_delivery_charges()},customer_info(){h.$emit("set_customer_info_to_edit",this.customer_info)},expanded(e){this.update_items_details(e),e.length>0&&this.update_item_detail(e[0])},discount_percentage_offer_name(){h.$emit("update_discount_percentage_offer_name",{value:this.discount_percentage_offer_name})},items:{deep:!0,handler(e){this.handelOffers(),this.$forceUpdate()}},invoiceType(){h.$emit("update_invoice_type",this.invoiceType)},discount_amount(){!this.discount_amount||this.discount_amount==0?this.additional_discount_percentage=0:this.pos_profile.posa_use_percentage_discount?this.additional_discount_percentage=this.discount_amount/this.Total*100:this.additional_discount_percentage=0}}},Ta=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",[i("v-dialog",{attrs:{"max-width":"330"},model:{value:e.cancel_dialog,callback:function(s){e.cancel_dialog=s},expression:"cancel_dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Cancel Current Invoice ?")))])]),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error"},on:{click:e.cancel_invoice}},[e._v(`
          `+e._s(e.__("Cancel"))+`
        `)]),e._v(" "),i("v-btn",{attrs:{color:"warning"},on:{click:function(s){e.cancel_dialog=!1}}},[e._v(`
          `+e._s(e.__("Back"))+`
        `)])],1)],1)],1),e._v(" "),i("v-card",{staticClass:"cards my-0 py-0 grey lighten-5",staticStyle:{"max-height":"70vh",height:"70vh"}},[i("v-row",{staticClass:"items px-2 py-1",attrs:{align:"center"}},[e.pos_profile.posa_allow_sales_order?i("v-col",{staticClass:"pb-2 pr-0",attrs:{cols:"9"}},[i("Customer")],1):e._e(),e._v(" "),e.pos_profile.posa_allow_sales_order?e._e():i("v-col",{staticClass:"pb-2",attrs:{cols:"12"}},[i("Customer")],1),e._v(" "),e.pos_profile.posa_allow_sales_order?i("v-col",{staticClass:"pb-2",attrs:{cols:"3"}},[i("v-select",{attrs:{dense:"","hide-details":"",outlined:"",color:"primary","background-color":"white",items:e.invoiceTypes,label:e.frappe._("Type"),disabled:e.invoiceType=="Return"},model:{value:e.invoiceType,callback:function(s){e.invoiceType=s},expression:"invoiceType"}})],1):e._e()],1),e._v(" "),e.pos_profile.posa_use_delivery_charges?i("v-row",{staticClass:"items px-2 py-1 mt-0 pt-0",attrs:{align:"center"}},[i("v-col",{staticClass:"pb-0 mb-0 pr-0 pt-0",attrs:{cols:"8"}},[i("v-autocomplete",{attrs:{dense:"",clearable:"","auto-select-first":"",outlined:"",color:"primary",label:e.frappe._("Delivery Charges"),items:e.delivery_charges,"item-text":"name","return-object":"","background-color":"white","no-data-text":e.__("Charges not found"),"hide-details":"",filter:e.deliveryChargesFilter,disabled:e.readonly},on:{change:function(s){return e.update_delivery_charges()}},scopedSlots:e._u([{key:"item",fn:function(s){return[[i("v-list-item-content",[i("v-list-item-title",{staticClass:"primary--text subtitle-1",domProps:{innerHTML:e._s(s.item.name)}}),e._v(" "),i("v-list-item-subtitle",{domProps:{innerHTML:e._s("Rate: "+s.item.rate)}})],1)]]}}],null,!1,2885212015),model:{value:e.selcted_delivery_charges,callback:function(s){e.selcted_delivery_charges=s},expression:"selcted_delivery_charges"}})],1),e._v(" "),i("v-col",{staticClass:"pb-0 mb-0 pt-0",attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Delivery Charges Rate"),"background-color":"white","hide-details":"",value:e.formtCurrency(e.delivery_charges_rate),prefix:e.pos_profile.currency,disabled:""}})],1)],1):e._e(),e._v(" "),e.pos_profile.posa_allow_change_posting_date?i("v-row",{staticClass:"items px-2 py-1 mt-0 pt-0",attrs:{align:"center"}},[e.pos_profile.posa_allow_change_posting_date?i("v-col",{staticClass:"pb-2",attrs:{cols:"4"}},[i("v-menu",{ref:"invoice_posting_date",attrs:{"close-on-content-click":!1,transition:"scale-transition",dense:""},scopedSlots:e._u([{key:"activator",fn:function(s){var l=s.on,p=s.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:e.frappe._("Posting Date"),readonly:"",outlined:"",dense:"","background-color":"white",clearable:"",color:"primary","hide-details":""},model:{value:e.posting_date,callback:function(d){e.posting_date=d},expression:"posting_date"}},"v-text-field",p,!1),l))]}}],null,!1,216671095),model:{value:e.invoice_posting_date,callback:function(s){e.invoice_posting_date=s},expression:"invoice_posting_date"}},[e._v(" "),i("v-date-picker",{attrs:{"no-title":"",scrollable:"",color:"primary",min:e.frappe.datetime.add_days(e.frappe.datetime.now_date(!0),-7),max:e.frappe.datetime.add_days(e.frappe.datetime.now_date(!0),7)},on:{input:function(s){e.invoice_posting_date=!1}},model:{value:e.posting_date,callback:function(s){e.posting_date=s},expression:"posting_date"}})],1)],1):e._e()],1):e._e(),e._v(" "),i("div",{staticClass:"my-0 py-0 overflow-y-auto",staticStyle:{"max-height":"60vh"}},[[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.items_headers,items:e.items,"single-expand":e.singleExpand,expanded:e.expanded,"show-expand":"","item-key":"posa_row_id","items-per-page":e.itemsPerPage,"hide-default-footer":""},on:{"update:expanded":function(s){e.expanded=s}},scopedSlots:e._u([{key:"item.qty",fn:function(s){var l=s.item;return[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary","background-color":"white","hide-details":"",type:"number",disabled:!!l.posa_is_offer||!!l.posa_is_replace},on:{change:function(p){return e.calc_sotck_gty(l,p)}},model:{value:l.qty,callback:function(p){e.$set(l,"qty",e._n(p))},expression:"item.qty"}})]}},{key:"item.rate",fn:function(s){var l=s.item;return[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary","background-color":"white","hide-details":"",type:"number",prefix:e.invoice_doc.currency,id:"rate",disabled:!!l.posa_is_offer||!!l.posa_is_replace||!!l.posa_offer_applied||!e.pos_profile.posa_allow_user_to_edit_rate||!!e.invoice_doc.is_return},on:{change:function(p){return e.calc_prices(l,p)}},model:{value:l.rate,callback:function(p){e.$set(l,"rate",e._n(p))},expression:"item.rate"}})]}},{key:"item.amount",fn:function(s){var l=s.item;return[e._v(e._s(e.formtCurrency(l.qty*l.item_amount)))]}},{key:"item.item_tax_amount",fn:function(s){var l=s.item;return[e._v(e._s(e.formtCurrency(l.qty*l.item_tax_amount)))]}},{key:"item.posa_is_offer",fn:function(s){var l=s.item;return[i("v-simple-checkbox",{attrs:{value:!!l.posa_is_offer||!!l.posa_is_replace,disabled:""}})]}},{key:"expanded-item",fn:function(s){var l=s.headers,p=s.item;return[i("td",{staticClass:"ma-0 pa-0",attrs:{colspan:l.length}},[i("v-row",{staticClass:"ma-0 pa-0"},[i("v-col",{attrs:{cols:"1"}},[i("v-btn",{attrs:{disabled:!!p.posa_is_offer||!!p.posa_is_replace,icon:"",color:"error"},on:{click:function(d){return d.stopPropagation(),e.remove_item(p)}}},[i("v-icon",[e._v("mdi-delete")])],1)],1),e._v(" "),i("v-spacer"),e._v(" "),i("v-col",{attrs:{cols:"1"}},[i("v-btn",{attrs:{disabled:!!p.posa_is_offer||!!p.posa_is_replace,icon:"",color:"secondary"},on:{click:function(d){return d.stopPropagation(),e.subtract_one(p)}}},[i("v-icon",[e._v("mdi-minus-circle-outline")])],1)],1),e._v(" "),i("v-col",{attrs:{cols:"1"}},[i("v-btn",{attrs:{disabled:!!p.posa_is_offer||!!p.posa_is_replace,icon:"",color:"secondary"},on:{click:function(d){return d.stopPropagation(),e.add_one(p)}}},[i("v-icon",[e._v("mdi-plus-circle-outline")])],1)],1)],1),e._v(" "),i("v-row",{staticClass:"ma-0 pa-0"},[i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Item Code"),"background-color":"white","hide-details":"",disabled:""},model:{value:p.item_code,callback:function(d){e.$set(p,"item_code",d)},expression:"item.item_code"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("QTY"),"background-color":"white","hide-details":"",type:"number",disabled:!!p.posa_is_offer||!!p.posa_is_replace},on:{change:function(d){return e.calc_sotck_gty(p,d)}},model:{value:p.qty,callback:function(d){e.$set(p,"qty",e._n(d))},expression:"item.qty"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-select",{attrs:{dense:"","background-color":"white",label:e.frappe._("UOM"),items:p.item_uoms,outlined:"","item-text":"uom","item-value":"uom","hide-details":"",disabled:!!e.invoice_doc.is_return||!!p.posa_is_offer||!!p.posa_is_replace},on:{change:function(d){return e.calc_uom(p,d)}},model:{value:p.uom,callback:function(d){e.$set(p,"uom",d)},expression:"item.uom"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Rate"),"background-color":"white","hide-details":"",type:"number",prefix:e.invoice_doc.currency,id:"rate",disabled:!!p.posa_is_offer||!!p.posa_is_replace||!!p.posa_offer_applied||!e.pos_profile.posa_allow_user_to_edit_rate||!!e.invoice_doc.is_return},on:{change:function(d){return e.calc_prices(p,d)}},model:{value:p.rate,callback:function(d){e.$set(p,"rate",e._n(d))},expression:"item.rate"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Discount Percentage"),"background-color":"white","hide-details":"",type:"number",id:"discount_percentage",disabled:!!(!!p.posa_is_offer||!!p.posa_is_replace||p.posa_offer_applied||!e.pos_profile.posa_allow_user_to_edit_item_discount||!!e.invoice_doc.is_return)},on:{change:function(d){return e.calc_prices(p,d)}},model:{value:p.discount_percentage,callback:function(d){e.$set(p,"discount_percentage",e._n(d))},expression:"item.discount_percentage"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Discount Amount"),"background-color":"white","hide-details":"",type:"number",prefix:e.invoice_doc.currency,id:"discount_amount",disabled:!!p.posa_is_offer||!!p.posa_is_replace||!!p.posa_offer_applied||!e.pos_profile.posa_allow_user_to_edit_item_discount||!!e.invoice_doc.is_return},on:{change:function(d){return e.calc_prices(p,d)}},model:{value:p.discount_amount,callback:function(d){e.$set(p,"discount_amount",e._n(d))},expression:"item.discount_amount"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Price list Rate"),"background-color":"white","hide-details":"",type:"number",disabled:"",prefix:e.invoice_doc.currency},model:{value:p.price_list_rate,callback:function(d){e.$set(p,"price_list_rate",d)},expression:"item.price_list_rate"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Available QTY"),"background-color":"white","hide-details":"",type:"number",disabled:""},model:{value:p.actual_qty,callback:function(d){e.$set(p,"actual_qty",d)},expression:"item.actual_qty"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Group"),"background-color":"white","hide-details":"",disabled:""},model:{value:p.item_group,callback:function(d){e.$set(p,"item_group",d)},expression:"item.item_group"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Stock QTY"),"background-color":"white","hide-details":"",type:"number",disabled:""},model:{value:p.stock_qty,callback:function(d){e.$set(p,"stock_qty",d)},expression:"item.stock_qty"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Stock UOM"),"background-color":"white","hide-details":"",disabled:""},model:{value:p.stock_uom,callback:function(d){e.$set(p,"stock_uom",d)},expression:"item.stock_uom"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Last Incoming Rate"),"background-color":"white","hide-details":"",disabled:""},model:{value:p.incoming_rate,callback:function(d){e.$set(p,"incoming_rate",d)},expression:"item.incoming_rate"}})],1),e._v(" "),p.posa_offer_applied?i("v-col",{attrs:{align:"center",cols:"4"}},[i("v-checkbox",{staticClass:"shrink mr-2 mt-0",attrs:{dense:"",label:e.frappe._("Offer Applied"),readonly:"","hide-details":""},model:{value:p.posa_offer_applied,callback:function(d){e.$set(p,"posa_offer_applied",d)},expression:"item.posa_offer_applied"}})],1):e._e(),e._v(" "),p.has_serial_no==1||p.serial_no?i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Serial No QTY"),"background-color":"white","hide-details":"",type:"number",disabled:""},model:{value:p.serial_no_selected_count,callback:function(d){e.$set(p,"serial_no_selected_count",d)},expression:"item.serial_no_selected_count"}})],1):e._e(),e._v(" "),p.has_serial_no==1||p.serial_no?i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{items:p.serial_no_data,"item-text":"serial_no",outlined:"",dense:"",chips:"",color:"primary","small-chips":"",label:e.frappe._("Serial No"),multiple:""},on:{change:function(d){return e.set_serial_no(p)}},model:{value:p.serial_no_selected,callback:function(d){e.$set(p,"serial_no_selected",d)},expression:"item.serial_no_selected"}})],1):e._e(),e._v(" "),p.has_batch_no==1||p.batch_no?i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Batch No Available QTY"),"background-color":"white","hide-details":"",type:"number",disabled:""},model:{value:p.actual_batch_qty,callback:function(d){e.$set(p,"actual_batch_qty",d)},expression:"item.actual_batch_qty"}})],1):e._e(),e._v(" "),p.has_batch_no==1||p.batch_no?i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Batch No Expiry Date"),"background-color":"white","hide-details":"",disabled:""},model:{value:p.batch_no_expiry_date,callback:function(d){e.$set(p,"batch_no_expiry_date",d)},expression:"item.batch_no_expiry_date"}})],1):e._e(),e._v(" "),p.has_batch_no==1||p.batch_no?i("v-col",{attrs:{cols:"8"}},[i("v-autocomplete",{attrs:{items:p.batch_no_data,"item-text":"batch_no",outlined:"",dense:"",color:"primary",label:e.frappe._("Batch No")},on:{change:function(d){return e.set_batch_qty(p,d)}},scopedSlots:e._u([{key:"item",fn:function(d){return[[i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:e._s(d.item.batch_no)}}),e._v(" "),i("v-list-item-subtitle",{domProps:{innerHTML:e._s("Available QTY  '"+d.item.batch_qty+"' - Expiry Date "+d.item.expiry_date)}})],1)]]}}],null,!0),model:{value:p.batch_no,callback:function(d){e.$set(p,"batch_no",d)},expression:"item.batch_no"}})],1):e._e(),e._v(" "),e.pos_profile.posa_allow_sales_order&&e.invoiceType=="Order"?i("v-col",{attrs:{cols:"4"}},[i("v-menu",{ref:"item_delivery_date",attrs:{"close-on-content-click":!1,"return-value":p.posa_delivery_date,transition:"scale-transition",dense:""},on:{"update:returnValue":function(d){return e.$set(p,"posa_delivery_date",d)},"update:return-value":function(d){return e.$set(p,"posa_delivery_date",d)}},scopedSlots:e._u([{key:"activator",fn:function(d){var T=d.on,S=d.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:e.frappe._("Delivery Date"),readonly:"",outlined:"",dense:"",clearable:"",color:"primary","hide-details":""},model:{value:p.posa_delivery_date,callback:function(R){e.$set(p,"posa_delivery_date",R)},expression:"item.posa_delivery_date"}},"v-text-field",S,!1),T))]}}],null,!0),model:{value:p.item_delivery_date,callback:function(d){e.$set(p,"item_delivery_date",d)},expression:"item.item_delivery_date"}},[e._v(" "),i("v-date-picker",{attrs:{"no-title":"",scrollable:"",color:"primary",min:e.frappe.datetime.now_date()},model:{value:p.posa_delivery_date,callback:function(d){e.$set(p,"posa_delivery_date",d)},expression:"item.posa_delivery_date"}},[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(d){p.item_delivery_date=!1}}},[e._v(`
                        Cancel
                      `)]),e._v(" "),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(d){e.$refs.item_delivery_date.save(p.posa_delivery_date),e.validate_due_date(p)}}},[e._v(`
                        OK
                      `)])],1)],1)],1):e._e(),e._v(" "),e.pos_profile.posa_display_additional_notes?i("v-col",{attrs:{cols:"8"}},[i("v-textarea",{staticClass:"pa-0",attrs:{outlined:"",dense:"",clearable:"",color:"primary","auto-grow":"",rows:"1",label:e.frappe._("Additional Notes"),value:p.posa_notes},model:{value:p.posa_notes,callback:function(d){e.$set(p,"posa_notes",d)},expression:"item.posa_notes"}})],1):e._e(),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Valuation Rate"),"background-color":"white","hide-details":"",disabled:""},model:{value:p.bin_ivr,callback:function(d){e.$set(p,"bin_ivr",d)},expression:"item.bin_ivr"}})],1)],1)],1)]}}])})]],2)],1),e._v(" "),i("v-card",{staticClass:"cards mb-0 mt-3 py-0 grey lighten-5"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"7"}},[i("v-row",{staticClass:"pa-1 pt-9 pr-1",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"pa-1",attrs:{cols:"6"}},[i("v-text-field",{attrs:{value:e.formtFloat(e.total_qty),label:e.frappe._("Total Qty"),outlined:"",dense:"",readonly:"","hide-details":"",color:"accent"}})],1),e._v(" "),i("v-col",{staticClass:"pa-1",attrs:{cols:"6"}},[i("v-text-field",{attrs:{value:e.formtCurrency(e.subtotal),label:e.frappe._("Net Total"),outlined:"",dense:"",readonly:"","hide-details":"",color:"success",prefix:e.pos_profile.currency}})],1),e._v(" "),i("v-col",{staticClass:"pa-1 mt-2",attrs:{cols:"6"}},[i("v-text-field",{attrs:{value:e.formtCurrency(e.total_item_tax),label:e.frappe._("Total Tax"),outlined:"",dense:"",readonly:"","hide-details":"",color:"success",prefix:e.pos_profile.currency}})],1),e._v(" "),i("v-col",{staticClass:"pa-1 mt-2",attrs:{cols:"6"}},[i("v-text-field",{attrs:{value:e.formtCurrency(e.total_item_amount),label:e.frappe._("Grand Total"),outlined:"",dense:"",color:"warning",readonly:"","hide-details":"",prefix:e.pos_profile.currency}})],1),e._v(" "),e.pos_profile.posa_use_percentage_discount?e._e():i("v-col",{staticClass:"pa-1 mt-2",attrs:{cols:"6"}},[i("v-text-field",{ref:"discount",attrs:{label:e.frappe._("Additional Discount"),outlined:"",dense:"","hide-details":"",color:"accent",type:"number",prefix:e.pos_profile.currency,disabled:!!(!e.pos_profile.posa_allow_user_to_edit_additional_discount||e.discount_percentage_offer_name)},model:{value:e.discount_amount,callback:function(s){e.discount_amount=s},expression:"discount_amount"}})],1),e._v(" "),e.pos_profile.posa_use_percentage_discount?i("v-col",{staticClass:"pa-1",attrs:{cols:"6"}},[i("v-text-field",{ref:"percentage_discount",attrs:{label:e.frappe._("Additional Discount %"),outlined:"",dense:"",color:"warning","hide-details":"",type:"number",disabled:!!(!e.pos_profile.posa_allow_user_to_edit_additional_discount||e.discount_percentage_offer_name)},on:{change:e.update_discount_umount},model:{value:e.additional_discount_percentage,callback:function(s){e.additional_discount_percentage=s},expression:"additional_discount_percentage"}})],1):e._e(),e._v(" "),i("v-col",{staticClass:"pa-1 mt-2",attrs:{cols:"6"}},[i("v-text-field",{attrs:{value:e.formtCurrency(e.total_items_discount_amount),label:e.frappe._("Items Discounts"),outlined:"",dense:"",color:"warning",readonly:"","hide-details":"",prefix:e.pos_profile.currency}})],1)],1)],1),e._v(" "),i("v-col",{attrs:{cols:"5"}},[i("v-row",{staticClass:"pa-1 pt-2 pl-0",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"pa-1",attrs:{cols:"6"}},[i("v-btn",{staticClass:"pa-0",attrs:{block:"",color:"warning",dark:""},on:{click:e.get_draft_invoices}},[e._v(e._s(e.__("Held")))])],1),e._v(" "),i("v-col",{staticClass:"pa-1",attrs:{cols:"6"}},[i("v-btn",{staticClass:"pa-0",class:{"disable-events":!e.pos_profile.posa_allow_return},attrs:{block:"",color:"secondary",dark:""},on:{click:e.open_returns}},[e._v(e._s(e.__("Return")))])],1),e._v(" "),i("v-col",{staticClass:"pa-1",attrs:{cols:"6"}},[i("v-btn",{staticClass:"pa-0",attrs:{block:"",color:"error",dark:""},on:{click:function(s){e.cancel_dialog=!0}}},[e._v(e._s(e.__("Cancel")))])],1),e._v(" "),i("v-col",{staticClass:"pa-1",attrs:{cols:"6"}},[i("v-btn",{staticClass:"pa-0",attrs:{block:"",color:"accent",dark:""},on:{click:e.new_invoice}},[e._v(e._s(e.__("Save/New")))])],1),e._v(" "),i("v-col",{staticClass:"pa-1"},[i("v-btn",{staticClass:"pa-0",attrs:{block:"",color:"success",dark:""},on:{click:e.show_payment}},[e._v(e._s(e.__("PAY")))])],1),e._v(" "),e.pos_profile.posa_allow_print_draft_invoices?i("v-col",{staticClass:"pa-1",attrs:{cols:"6"}},[i("v-btn",{staticClass:"pa-0",attrs:{block:"",color:"primary",dark:""},on:{click:e.print_draft_invoice}},[e._v(e._s(e.__("Print Draft")))])],1):e._e()],1)],1)],1)],1)],1)},Uh=[];Ta._withStripped=!0;var Wh=function(e){!e||e("data-v-6d0f63a9_0",{source:`
.border_line_bottom[data-v-6d0f63a9] {
  border-bottom: 1px solid lightgray;
}
.disable-events[data-v-6d0f63a9] {
  pointer-events: none;
}
`,map:{version:3,sources:["../posawesome/posawesome/public/js/posapp/components/pos/Invoice.vue"],names:[],mappings:";AAypFA;EACA,kCAAA;AACA;AACA;EACA,oBAAA;AACA",file:"Invoice.vue",sourcesContent:[`<template>
  <div>
    <v-dialog v-model="cancel_dialog" max-width="330">
      <v-card>
        <v-card-title class="text-h5">
          <span class="headline primary--text">{{
            __('Cancel Current Invoice ?')
          }}</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="cancel_invoice">
            {{ __('Cancel') }}
          </v-btn>
          <v-btn color="warning" @click="cancel_dialog = false">
            {{ __('Back') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card
      style="max-height: 70vh; height: 70vh"
      class="cards my-0 py-0 grey lighten-5"
    >
      <v-row align="center" class="items px-2 py-1">
        <v-col
          v-if="pos_profile.posa_allow_sales_order"
          cols="9"
          class="pb-2 pr-0"
        >
          <Customer></Customer>
        </v-col>
        <v-col
          v-if="!pos_profile.posa_allow_sales_order"
          cols="12"
          class="pb-2"
        >
          <Customer></Customer>
        </v-col>
        <v-col v-if="pos_profile.posa_allow_sales_order" cols="3" class="pb-2">
          <v-select
            dense
            hide-details
            outlined
            color="primary"
            background-color="white"
            :items="invoiceTypes"
            :label="frappe._('Type')"
            v-model="invoiceType"
            :disabled="invoiceType == 'Return'"
          ></v-select>
        </v-col>
      </v-row>

      <v-row
        align="center"
        class="items px-2 py-1 mt-0 pt-0"
        v-if="pos_profile.posa_use_delivery_charges"
      >
        <v-col cols="8" class="pb-0 mb-0 pr-0 pt-0">
          <v-autocomplete
            dense
            clearable
            auto-select-first
            outlined
            color="primary"
            :label="frappe._('Delivery Charges')"
            v-model="selcted_delivery_charges"
            :items="delivery_charges"
            item-text="name"
            return-object
            background-color="white"
            :no-data-text="__('Charges not found')"
            hide-details
            :filter="deliveryChargesFilter"
            :disabled="readonly"
            @change="update_delivery_charges()"
          >
            <template v-slot:item="data">
              <template>
                <v-list-item-content>
                  <v-list-item-title
                    class="primary--text subtitle-1"
                    v-html="data.item.name"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="\`Rate: \${data.item.rate}\`"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="4" class="pb-0 mb-0 pt-0">
          <v-text-field
            dense
            outlined
            color="primary"
            :label="frappe._('Delivery Charges Rate')"
            background-color="white"
            hide-details
            :value="formtCurrency(delivery_charges_rate)"
            :prefix="pos_profile.currency"
            disabled
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row
        align="center"
        class="items px-2 py-1 mt-0 pt-0"
        v-if="pos_profile.posa_allow_change_posting_date"
      >
        <v-col
          v-if="pos_profile.posa_allow_change_posting_date"
          cols="4"
          class="pb-2"
        >
          <v-menu
            ref="invoice_posting_date"
            v-model="invoice_posting_date"
            :close-on-content-click="false"
            transition="scale-transition"
            dense
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="posting_date"
                :label="frappe._('Posting Date')"
                readonly
                outlined
                dense
                background-color="white"
                clearable
                color="primary"
                hide-details
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="posting_date"
              no-title
              scrollable
              color="primary"
              :min="
                frappe.datetime.add_days(frappe.datetime.now_date(true), -7)
              "
              :max="frappe.datetime.add_days(frappe.datetime.now_date(true), 7)"
              @input="invoice_posting_date = false"
            >
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <div class="my-0 py-0 overflow-y-auto" style="max-height: 60vh">
        <template @mouseover="style = 'cursor: pointer'">
          <v-data-table
            :headers="items_headers"
            :items="items"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            show-expand
            item-key="posa_row_id"
            class="elevation-1"
            :items-per-page="itemsPerPage"
            hide-default-footer
          >
            <template v-slot:item.qty="{ item }">
              <v-text-field
                dense
                outlined
                color="primary"
                background-color="white"
                hide-details
                v-model.number="item.qty"
                type="number"
                @change="calc_sotck_gty(item, $event)"
                :disabled="!!item.posa_is_offer || !!item.posa_is_replace"
              ></v-text-field>
            </template>
            <template v-slot:item.rate="{ item }">
              <v-text-field
                dense
                outlined
                color="primary"
                background-color="white"
                hide-details
                v-model.number="item.rate"
                type="number"
                :prefix="invoice_doc.currency"
                @change="calc_prices(item, $event)"
                id="rate"
                :disabled="
                  !!item.posa_is_offer ||
                  !!item.posa_is_replace ||
                  !!item.posa_offer_applied ||
                  !pos_profile.posa_allow_user_to_edit_rate ||
                  !!invoice_doc.is_return
                    ? true
                    : false
                "
              ></v-text-field>
            </template>
            
            <template v-slot:item.amount="{ item }">{{
              formtCurrency(item.qty * item.item_amount)
            }}</template>
            <template v-slot:item.item_tax_amount="{ item }">{{
              formtCurrency(item.qty * item.item_tax_amount)
            }}</template>
            <template v-slot:item.posa_is_offer="{ item }">
              <v-simple-checkbox
                :value="!!item.posa_is_offer || !!item.posa_is_replace"
                disabled
              ></v-simple-checkbox>
            </template>

            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length" class="ma-0 pa-0">
                <v-row class="ma-0 pa-0">
                  <v-col cols="1">
                    <v-btn
                      :disabled="!!item.posa_is_offer || !!item.posa_is_replace"
                      icon
                      color="error"
                      @click.stop="remove_item(item)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="1">
                    <v-btn
                      :disabled="!!item.posa_is_offer || !!item.posa_is_replace"
                      icon
                      color="secondary"
                      @click.stop="subtract_one(item)"
                    >
                      <v-icon>mdi-minus-circle-outline</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="1">
                    <v-btn
                      :disabled="!!item.posa_is_offer || !!item.posa_is_replace"
                      icon
                      color="secondary"
                      @click.stop="add_one(item)"
                    >
                      <v-icon>mdi-plus-circle-outline</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row class="ma-0 pa-0">
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Item Code')"
                      background-color="white"
                      hide-details
                      v-model="item.item_code"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('QTY')"
                      background-color="white"
                      hide-details
                      v-model.number="item.qty"
                      type="number"
                      @change="calc_sotck_gty(item, $event)"
                      :disabled="!!item.posa_is_offer || !!item.posa_is_replace"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-select
                      dense
                      background-color="white"
                      :label="frappe._('UOM')"
                      v-model="item.uom"
                      :items="item.item_uoms"
                      outlined
                      item-text="uom"
                      item-value="uom"
                      hide-details
                      @change="calc_uom(item, $event)"
                      :disabled="
                        !!invoice_doc.is_return ||
                        !!item.posa_is_offer ||
                        !!item.posa_is_replace
                      "
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Rate')"
                      background-color="white"
                      hide-details
                      v-model.number="item.rate"
                      type="number"
                      :prefix="invoice_doc.currency"
                      @change="calc_prices(item, $event)"
                      id="rate"
                      :disabled="
                        !!item.posa_is_offer ||
                        !!item.posa_is_replace ||
                        !!item.posa_offer_applied ||
                        !pos_profile.posa_allow_user_to_edit_rate ||
                        !!invoice_doc.is_return
                          ? true
                          : false
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Discount Percentage')"
                      background-color="white"
                      hide-details
                      v-model.number="item.discount_percentage"
                      type="number"
                      @change="calc_prices(item, $event)"
                      id="discount_percentage"
                      :disabled="
                        !!item.posa_is_offer ||
                        !!item.posa_is_replace ||
                        item.posa_offer_applied ||
                        !pos_profile.posa_allow_user_to_edit_item_discount ||
                        !!invoice_doc.is_return
                          ? true
                          : false
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Discount Amount')"
                      background-color="white"
                      hide-details
                      v-model.number="item.discount_amount"
                      type="number"
                      :prefix="invoice_doc.currency"
                      @change="calc_prices(item, $event)"
                      id="discount_amount"
                      :disabled="
                        !!item.posa_is_offer ||
                        !!item.posa_is_replace ||
                        !!item.posa_offer_applied ||
                        !pos_profile.posa_allow_user_to_edit_item_discount ||
                        !!invoice_doc.is_return
                          ? true
                          : false
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Price list Rate')"
                      background-color="white"
                      hide-details
                      v-model="item.price_list_rate"
                      type="number"
                      disabled
                      :prefix="invoice_doc.currency"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Available QTY')"
                      background-color="white"
                      hide-details
                      v-model="item.actual_qty"
                      type="number"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Group')"
                      background-color="white"
                      hide-details
                      v-model="item.item_group"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Stock QTY')"
                      background-color="white"
                      hide-details
                      v-model="item.stock_qty"
                      type="number"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Stock UOM')"
                      background-color="white"
                      hide-details
                      v-model="item.stock_uom"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Last Incoming Rate')"
                      background-color="white"
                      hide-details
                      v-model="item.incoming_rate"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col align="center" cols="4" v-if="item.posa_offer_applied">
                    <v-checkbox
                      dense
                      :label="frappe._('Offer Applied')"
                      v-model="item.posa_offer_applied"
                      readonly
                      hide-details
                      class="shrink mr-2 mt-0"
                    ></v-checkbox>
                  </v-col>
                  <v-col
                    cols="4"
                    v-if="item.has_serial_no == 1 || item.serial_no"
                  >
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Serial No QTY')"
                      background-color="white"
                      hide-details
                      v-model="item.serial_no_selected_count"
                      type="number"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    v-if="item.has_serial_no == 1 || item.serial_no"
                  >
                    <v-autocomplete
                      v-model="item.serial_no_selected"
                      :items="item.serial_no_data"
                      item-text="serial_no"
                      outlined
                      dense
                      chips
                      color="primary"
                      small-chips
                      :label="frappe._('Serial No')"
                      multiple
                      @change="set_serial_no(item)"
                    ></v-autocomplete>
                  </v-col>
                  <v-col
                    cols="4"
                    v-if="item.has_batch_no == 1 || item.batch_no"
                  >
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Batch No Available QTY')"
                      background-color="white"
                      hide-details
                      v-model="item.actual_batch_qty"
                      type="number"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="4"
                    v-if="item.has_batch_no == 1 || item.batch_no"
                  >
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Batch No Expiry Date')"
                      background-color="white"
                      hide-details
                      v-model="item.batch_no_expiry_date"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="8"
                    v-if="item.has_batch_no == 1 || item.batch_no"
                  >
                    <v-autocomplete
                      v-model="item.batch_no"
                      :items="item.batch_no_data"
                      item-text="batch_no"
                      outlined
                      dense
                      color="primary"
                      :label="frappe._('Batch No')"
                      @change="set_batch_qty(item, $event)"
                    >
                      <template v-slot:item="data">
                        <template>
                          <v-list-item-content>
                            <v-list-item-title
                              v-html="data.item.batch_no"
                            ></v-list-item-title>
                            <v-list-item-subtitle
                              v-html="
                                \`Available QTY  '\${data.item.batch_qty}' - Expiry Date \${data.item.expiry_date}\`
                              "
                            ></v-list-item-subtitle>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col
                    cols="4"
                    v-if="
                      pos_profile.posa_allow_sales_order &&
                      invoiceType == 'Order'
                    "
                  >
                    <v-menu
                      ref="item_delivery_date"
                      v-model="item.item_delivery_date"
                      :close-on-content-click="false"
                      :return-value.sync="item.posa_delivery_date"
                      transition="scale-transition"
                      dense
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="item.posa_delivery_date"
                          :label="frappe._('Delivery Date')"
                          readonly
                          outlined
                          dense
                          clearable
                          color="primary"
                          hide-details
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="item.posa_delivery_date"
                        no-title
                        scrollable
                        color="primary"
                        :min="frappe.datetime.now_date()"
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="item.item_delivery_date = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="
                            [
                              $refs.item_delivery_date.save(
                                item.posa_delivery_date
                              ),
                              validate_due_date(item),
                            ]
                          "
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col
                    cols="8"
                    v-if="pos_profile.posa_display_additional_notes"
                  >
                    <v-textarea
                      class="pa-0"
                      outlined
                      dense
                      clearable
                      color="primary"
                      auto-grow
                      rows="1"
                      :label="frappe._('Additional Notes')"
                      v-model="item.posa_notes"
                      :value="item.posa_notes"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      outlined
                      color="primary"
                      :label="frappe._('Valuation Rate')"
                      background-color="white"
                      hide-details
                      v-model="item.bin_ivr"
                      disabled
                    ></v-text-field>
                  </v-col>
                </v-row>
              </td>
            </template>
          </v-data-table>
        </template>
      </div>
    </v-card>
    <v-card class="cards mb-0 mt-3 py-0 grey lighten-5">
      <v-row no-gutters>
        <v-col cols="7">
          <v-row no-gutters class="pa-1 pt-9 pr-1">
            <v-col cols="6" class="pa-1">
              <v-text-field
                :value="formtFloat(total_qty)"
                :label="frappe._('Total Qty')"
                outlined
                dense
                readonly
                hide-details
                color="accent"
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="pa-1">
              <v-text-field
                :value="formtCurrency(subtotal)"
                :label="frappe._('Net Total')"
                outlined
                dense
                readonly
                hide-details
                color="success"
                :prefix="pos_profile.currency"
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="pa-1 mt-2">
              <v-text-field
                :value="formtCurrency(total_item_tax)"
                :label="frappe._('Total Tax')"
                outlined
                dense
                readonly
                hide-details
                color="success"
                :prefix="pos_profile.currency"
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="pa-1 mt-2">
              <v-text-field
                :value="formtCurrency(total_item_amount)"
                :label="frappe._('Grand Total')"
                outlined
                dense
                color="warning"
                readonly
                hide-details
                :prefix="pos_profile.currency"
              ></v-text-field>
            </v-col>
            <v-col
              v-if="!pos_profile.posa_use_percentage_discount"
              cols="6"
              class="pa-1 mt-2"
            >
              <v-text-field
                v-model="discount_amount"
                :label="frappe._('Additional Discount')"
                ref="discount"
                outlined
                dense
                hide-details
                color="accent"
                type="number"
                :prefix="pos_profile.currency"
                :disabled="
                  !pos_profile.posa_allow_user_to_edit_additional_discount ||
                  discount_percentage_offer_name
                    ? true
                    : false
                "
              ></v-text-field>
            </v-col>
            <v-col
              v-if="pos_profile.posa_use_percentage_discount"
              cols="6"
              class="pa-1"
            >
              <v-text-field
                v-model="additional_discount_percentage"
                :label="frappe._('Additional Discount %')"
                ref="percentage_discount"
                outlined
                dense
                color="warning"
                hide-details
                type="number"
                :disabled="
                  !pos_profile.posa_allow_user_to_edit_additional_discount ||
                  discount_percentage_offer_name
                    ? true
                    : false
                "
                @change="update_discount_umount"
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="pa-1 mt-2">
              <v-text-field
                :value="formtCurrency(total_items_discount_amount)"
                :label="frappe._('Items Discounts')"
                outlined
                dense
                color="warning"
                readonly
                hide-details
                :prefix="pos_profile.currency"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5">
          <v-row no-gutters class="pa-1 pt-2 pl-0">
            <v-col cols="6" class="pa-1">
              <v-btn
                block
                class="pa-0"
                color="warning"
                dark
                @click="get_draft_invoices"
                >{{ __('Held') }}</v-btn
              >
            </v-col>
            <v-col cols="6" class="pa-1">
              <v-btn
                block
                class="pa-0"
                :class="{ 'disable-events': !pos_profile.posa_allow_return }"
                color="secondary"
                dark
                @click="open_returns"
                >{{ __('Return') }}</v-btn
              >
            </v-col>
            <v-col cols="6" class="pa-1">
              <v-btn
                block
                class="pa-0"
                color="error"
                dark
                @click="cancel_dialog = true"
                >{{ __('Cancel') }}</v-btn
              >
            </v-col>
            <v-col cols="6" class="pa-1">
              <v-btn
                block
                class="pa-0"
                color="accent"
                dark
                @click="new_invoice"
                >{{ __('Save/New') }}</v-btn
              >
            </v-col>
            <v-col class="pa-1">
              <v-btn
                block
                class="pa-0"
                color="success"
                @click="show_payment"
                dark
                >{{ __('PAY') }}</v-btn
              >
            </v-col>
            <v-col
              v-if="pos_profile.posa_allow_print_draft_invoices"
              cols="6"
              class="pa-1"
            >
              <v-btn
                block
                class="pa-0"
                color="primary"
                @click="print_draft_invoice"
                dark
                >{{ __('Print Draft') }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { evntBus } from '../../bus';
import Customer from './Customer.vue';

export default {
  data() {
    return {
      pos_profile: '',
      pos_opening_shift: '',
      stock_settings: '',
      invoice_doc: '',
      return_doc: '',
      customer: '',
      customer_info: '',
      discount_amount: 0,
      additional_discount_percentage: 0,
      total_tax: 0,
      invoice_sum: 0,
      items: [],
      posOffers: [],
      posa_offers: [],
      posa_coupons: [],
      allItems: [],
      discount_percentage_offer_name: null,
      invoiceTypes: ['Invoice', 'Order'],
      invoiceType: 'Invoice',
      itemsPerPage: 1000,
      expanded: [],
      singleExpand: true,
      cancel_dialog: false,
      float_precision: 2,
      currency_precision: 2,
      new_line: false,
      delivery_charges: [],
      delivery_charges_rate: 0,
      selcted_delivery_charges: {},
      invoice_posting_date: false,
      posting_date: frappe.datetime.nowdate(),
      items_headers: [
        {
          text: __('Name'),
          align: 'start',
          sortable: true,
          value: 'item_name',
        },
        { text: __('QTY'), value: 'qty', align: 'center' },
        { text: __('UOM'), value: 'uom', align: 'center' },
        { text: __('Rate'), value: 'rate', align: 'center' },
        { text: __('Tax'), value: 'item_tax_amount', align: 'center' },
        { text: __('Amount'), value: 'amount', align: 'center' },
        // { text: __('is Offer'), value: 'posa_is_offer', align: 'center' },
      ],
    };
  },

  components: {
    Customer,
  },

  computed: {
    total_qty() {
      this.close_payments();
      let qty = 0;
      this.items.forEach((item) => {
        qty += item.qty;
      });
      return flt(qty).toFixed(this.float_precision);
    },
    Total() {
      let sum = 0;
      this.items.forEach((item) => {
        sum += item.qty * item.rate;
      });
      console.log("sum",sum)
      console.log("currency_precision",this.currency_precision)
      return flt(sum).toFixed(this.currency_precision);
    },
    subtotal() {
      this.close_payments();
      let sum = 0;
      this.items.forEach((item) => {
        sum += item.qty * item.rate;
      });
      sum -= flt(this.discount_amount);
      sum += flt(this.delivery_charges_rate);
      return flt(sum).toFixed(this.currency_precision);
    },
    total_item_tax(){
      this.close_payments();
      let sum = 0;
      this.items.forEach((item) => {
        sum += (item.item_tax_amount * item.qty)
      });
      return flt(sum).toFixed(this.currency_precision);
    },
    total_item_amount(){
      this.close_payments();
      let sum = 0;
      this.items.forEach((item) => {
        sum += (item.item_amount * item.qty)
      });
      sum -= flt(this.discount_amount);
      this.invoice_sum = flt(sum).toFixed(this.currency_precision);
      return flt(sum).toFixed(this.currency_precision);
    },
    total_items_discount_amount() {
      let sum = 0;
      this.items.forEach((item) => {
        sum += item.qty * item.discount_amount;
      });
      return flt(sum).toFixed(this.float_precision);
    },
  },

  methods: {
    remove_item(item) {
      const index = this.items.findIndex(
        (el) => el.posa_row_id == item.posa_row_id
      );
      if (index >= 0) {
        this.items.splice(index, 1);
      }
      const idx = this.expanded.findIndex(
        (el) => el.posa_row_id == item.posa_row_id
      );
      if (idx >= 0) {
        this.expanded.splice(idx, 1);
      }
    },

    add_one(item) {
      item.qty++;
      if (item.qty == 0) {
        this.remove_item(item);
      }
      this.calc_sotck_gty(item, item.qty);
      this.$forceUpdate();
    },
    subtract_one(item) {
      item.qty--;
      if (item.qty == 0) {
        this.remove_item(item);
      }
      this.calc_sotck_gty(item, item.qty);
      this.$forceUpdate();
    },

    add_item(item) {
      if (!item.uom) {
        item.uom = item.stock_uom;
      }
      let index = -1;
      if (!this.new_item) {
        index = this.items.findIndex(
          (el) =>
            el.item_code === item.item_code &&
            el.uom === item.uom &&
            !el.posa_is_offer &&
            !el.posa_is_replace
        );
      }
      if (index === -1 || this.new_line) {
        const new_item = this.get_new_item(item);
        if (item.has_serial_no && item.to_set_serial_no) {
          new_item.serial_no_selected = [];
          new_item.serial_no_selected.push(item.to_set_serial_no);
          item.to_set_serial_no = null;
        }
        this.items.unshift(new_item);
        this.update_item_detail(new_item);
      } else {
        const cur_item = this.items[index];
        this.update_items_details([cur_item]);
        if (item.has_serial_no && item.to_set_serial_no) {
          if (cur_item.serial_no_selected.includes(item.to_set_serial_no)) {
            evntBus.$emit('show_mesage', {
              text: __(\`This Serial Number {0} has already been added!\`, [
                item.to_set_serial_no,
              ]),
              color: 'warning',
            });
            item.to_set_serial_no = null;
            return;
          }
          cur_item.serial_no_selected.push(item.to_set_serial_no);
          item.to_set_serial_no = null;
        }
        if (!cur_item.has_batch_no) {
          cur_item.qty += item.qty || 1;
          this.calc_sotck_gty(cur_item, cur_item.qty);
        } else {
          if (
            cur_item.stock_qty < cur_item.actual_batch_qty ||
            !cur_item.batch_no
          ) {
            cur_item.qty += item.qty || 1;
            this.calc_sotck_gty(cur_item, cur_item.qty);
          } else {
            const new_item = this.get_new_item(cur_item);
            new_item.batch_no = '';
            new_item.batch_no_expiry_date = '';
            new_item.actual_batch_qty = '';
            new_item.qty = item.qty || 1;
            this.items.unshift(new_item);
          }
        }
        this.set_serial_no(cur_item);
      }
      this.$forceUpdate();
    },

    get_new_item(item) {
      const new_item = { ...item };
      if (!item.qty) {
        item.qty = 1;
      }
      if (!item.posa_is_offer) {
        item.posa_is_offer = 0;
      }
      if (!item.posa_is_replace) {
        item.posa_is_replace = '';
      }
      new_item.stock_qty = item.qty;
      new_item.discount_amount = 0;
      new_item.discount_percentage = 0;
      new_item.discount_amount_per_item = 0;
      new_item.price_list_rate = item.rate;
      new_item.qty = item.qty;
      new_item.uom = item.uom ? item.uom : item.stock_uom;
      new_item.actual_batch_qty = '';
      new_item.conversion_factor = 1;
      new_item.posa_offers = JSON.stringify([]);
      new_item.posa_offer_applied = 0;
      new_item.posa_is_offer = item.posa_is_offer;
      new_item.posa_is_replace = item.posa_is_replace || null;
      new_item.is_free_item = 0;
      new_item.posa_notes = '';
      new_item.posa_delivery_date = '';
      new_item.posa_row_id = this.makeid(20);
      if (
        (!this.pos_profile.posa_auto_set_batch && new_item.has_batch_no) ||
        new_item.has_serial_no
      ) {
        this.expanded.push(new_item);
      }
      return new_item;
    },

    cancel_invoice() {
      const doc = this.get_invoice_doc();
      this.invoiceType = 'Invoice';
      this.invoiceTypes = ['Invoice', 'Order'];
      this.posting_date = frappe.datetime.nowdate();
      if (doc.name && this.pos_profile.posa_allow_delete) {
        frappe.call({
          method: 'posawesome.posawesome.api.posapp.delete_invoice',
          args: { invoice: doc.name },
          async: true,
          callback: function (r) {
            if (r.message) {
              evntBus.$emit('show_mesage', {
                text: r.message,
                color: 'warning',
              });
            }
          },
        });
      }
      this.items = [];
      this.posa_offers = [];
      evntBus.$emit('set_pos_coupons', []);
      this.posa_coupons = [];
      this.customer = this.pos_profile.customer;
      this.invoice_doc = '';
      this.return_doc = '';
      this.discount_amount = 0;
      this.additional_discount_percentage = 0;
      this.delivery_charges_rate = 0;
      this.selcted_delivery_charges = {};
      evntBus.$emit('set_customer_readonly', false);
      this.cancel_dialog = false;
    },

    new_invoice(data = {}) {
      let old_invoice = null;
      evntBus.$emit('set_customer_readonly', false);
      this.expanded = [];
      this.posa_offers = [];
      evntBus.$emit('set_pos_coupons', []);
      this.posa_coupons = [];
      this.return_doc = '';
      const doc = this.get_invoice_doc();
      if (doc.name) {
        old_invoice = this.update_invoice(doc);
      } else {
        if (doc.items.length) {
          old_invoice = this.update_invoice(doc);
        }
      }
      if (!data.name && !data.is_return) {
        this.items = [];
        this.customer = this.pos_profile.customer;
        this.invoice_doc = '';
        this.discount_amount = 0;
        this.additional_discount_percentage = 0;
        this.invoiceType = 'Invoice';
        this.invoiceTypes = ['Invoice', 'Order'];
      } else {
        if (data.is_return) {
          evntBus.$emit('set_customer_readonly', true);
          this.invoiceType = 'Return';
          this.invoiceTypes = ['Return'];
        }
        this.invoice_doc = data;
        this.items = data.items;
        this.update_items_details(this.items);
        this.posa_offers = data.posa_offers || [];
        this.items.forEach((item) => {
          if (!item.posa_row_id) {
            item.posa_row_id = this.makeid(20);
          }
          if (item.batch_no) {
            this.set_batch_qty(item, item.batch_no);
          }
        });
        this.customer = data.customer;
        this.posting_date = data.posting_date || frappe.datetime.nowdate();
        this.discount_amount = data.discount_amount;
        this.additional_discount_percentage =
          data.additional_discount_percentage;
        this.items.forEach((item) => {
          if (item.serial_no) {
            item.serial_no_selected = [];
            const serial_list = item.serial_no.split('\\n');
            serial_list.forEach((element) => {
              if (element.length) {
                item.serial_no_selected.push(element);
              }
            });
            item.serial_no_selected_count = item.serial_no_selected.length;
          }
        });
      }
      return old_invoice;
    },

    get_invoice_doc() {
      let doc = {};
      if (this.invoice_doc.name) {
        doc = { ...this.invoice_doc };
      }
      doc.doctype = 'Sales Invoice';
      doc.is_pos = 1;
      doc.ignore_pricing_rule = 1;
      doc.company = doc.company || this.pos_profile.company;
      doc.pos_profile = doc.pos_profile || this.pos_profile.name;
      doc.campaign = doc.campaign || this.pos_profile.campaign;
      doc.currency = doc.currency || this.pos_profile.currency;
      doc.naming_series = doc.naming_series || this.pos_profile.naming_series;
      doc.customer = this.customer;
      doc.items = this.get_invoice_items();
      doc.total = this.subtotal;
      doc.discount_amount = flt(this.discount_amount);
      doc.additional_discount_percentage = flt(
        this.additional_discount_percentage
      );
      doc.posa_pos_opening_shift = this.pos_opening_shift.name;
      doc.payments = this.get_payments();
      doc.taxes = [];
      doc.is_return = this.invoice_doc.is_return;
      doc.return_against = this.invoice_doc.return_against;
      doc.posa_offers = this.posa_offers;
      doc.posa_coupons = this.posa_coupons;
      doc.posa_delivery_charges = this.selcted_delivery_charges.name;
      doc.posa_delivery_charges_rate = this.delivery_charges_rate || 0;
      doc.posting_date = this.posting_date;
      doc.invoice_sum = this.invoice_sum;
      return doc;
    },

    get_invoice_items() {
      const items_list = [];
      this.items.forEach((item) => {
        const new_item = {
          item_code: item.item_code,
          posa_row_id: item.posa_row_id,
          posa_offers: item.posa_offers,
          posa_offer_applied: item.posa_offer_applied,
          posa_is_offer: item.posa_is_offer,
          posa_is_replace: item.posa_is_replace,
          is_free_item: item.is_free_item,
          qty: item.qty,
          rate: item.rate,
          uom: item.uom,
          amount: item.qty * item.rate,
          conversion_factor: item.conversion_factor,
          serial_no: item.serial_no,
          discount_percentage: item.discount_percentage,
          discount_amount: item.discount_amount,
          batch_no: item.batch_no,
          posa_notes: item.posa_notes,
          posa_delivery_date: item.posa_delivery_date,
          price_list_rate: item.price_list_rate,
        };
        items_list.push(new_item);
      });

      return items_list;
    },

    get_payments() {
      const payments = [];
      this.pos_profile.payments.forEach((payment) => {
        payments.push({
          amount: 0,
          mode_of_payment: payment.mode_of_payment,
          default: payment.default,
          account: '',
        });
      });
      return payments;
    },

    update_invoice(doc) {
      const vm = this;
      frappe.call({
        method: 'posawesome.posawesome.api.posapp.update_invoice',
        args: {
          data: doc,
        },
        async: false,
        callback: function (r) {
          if (r.message) {
            vm.invoice_doc = r.message;
          }
        },
      });
      return this.invoice_doc;
    },

    proces_invoice() {
      const doc = this.get_invoice_doc();
      if (doc.name) {
        return this.update_invoice(doc);
      } else {
        return this.update_invoice(doc);
      }
    },

    show_payment() {
      if (!this.customer) {
        evntBus.$emit('show_mesage', {
          text: __(\`There is no Customer !\`),
          color: 'error',
        });
        return;
      }
      if (!this.items.length) {
        evntBus.$emit('show_mesage', {
          text: __(\`There is no Items !\`),
          color: 'error',
        });
        return;
      }
      if (!this.validate()) {
        return;
      }
      evntBus.$emit('show_payment', 'true');
      const invoice_doc = this.proces_invoice();
      evntBus.$emit('send_invoice_doc_payment', invoice_doc);
    },

    validate() {
      let value = true;
      this.items.forEach((item) => {
        if (this.stock_settings.allow_negative_stock != 1) {
          if (
            this.invoiceType == 'Invoice' &&
            ((item.is_stock_item && item.stock_qty && !item.actual_qty) ||
              (item.is_stock_item && item.stock_qty > item.actual_qty))
          ) {
            evntBus.$emit('show_mesage', {
              text: __(
                \`The existing quantity '{0}' for item '{1}' is not enough\`,
                [item.actual_qty, item.item_name]
              ),
              color: 'error',
            });
            value = false;
          }
        }
        if (
          item.max_discount > 0 &&
          item.discount_percentage > item.max_discount
        ) {
          evntBus.$emit('show_mesage', {
            text: __(\`Maximum discount for Item {0} is {1}%\`, [
              item.item_name,
              item.max_discount,
            ]),
            color: 'error',
          });
          value = false;
        }
        if (item.has_serial_no) {
          if (
            !this.invoice_doc.is_return &&
            (!item.serial_no_selected ||
              item.stock_qty != item.serial_no_selected.length)
          ) {
            evntBus.$emit('show_mesage', {
              text: __(\`Selected serial numbers of item {0} is incorrect\`, [
                item.item_name,
              ]),
              color: 'error',
            });
            value = false;
          }
        }
        if (item.has_batch_no) {
          if (item.stock_qty > item.actual_batch_qty) {
            evntBus.$emit('show_mesage', {
              text: __(
                \`The existing batch quantity of item {0} is not enough\`,
                [item.item_name]
              ),
              color: 'error',
            });
            value = false;
          }
        }
        if (this.pos_profile.posa_allow_user_to_edit_additional_discount) {
          const clac_percentage = (this.discount_amount / this.Total) * 100;
          if (clac_percentage > this.pos_profile.posa_max_discount_allowed) {
            evntBus.$emit('show_mesage', {
              text: __(\`The discount should not be higher than {0}%\`, [
                this.pos_profile.posa_max_discount_allowed,
              ]),
              color: 'error',
            });
            value = false;
          }
        }
        if (this.invoice_doc.is_return) {
          if (this.subtotal >= 0) {
            evntBus.$emit('show_mesage', {
              text: __(\`Return Invoice Total Not Correct\`),
              color: 'error',
            });
            value = false;
            return value;
          }
          if (this.subtotal * -1 > this.return_doc.total) {
            evntBus.$emit('show_mesage', {
              text: __(\`Return Invoice Total should not be higher than {0}\`, [
                this.return_doc.total,
              ]),
              color: 'error',
            });
            value = false;
            return value;
          }
          this.items.forEach((item) => {
            const return_item = this.return_doc.items.find(
              (element) => element.item_code == item.item_code
            );

            if (!return_item) {
              evntBus.$emit('show_mesage', {
                text: __(
                  \`The item {0} cannot be returned because it is not in the invoice {1}\`,
                  [item.item_name, this.return_doc.name]
                ),
                color: 'error',
              });
              value = false;
              return value;
            } else if (item.qty * -1 > return_item.qty || item.qty >= 0) {
              evntBus.$emit('show_mesage', {
                text: __(\`The QTY of the item {0} cannot be greater than {1}\`, [
                  item.item_name,
                  return_item.qty,
                ]),
                color: 'error',
              });
              value = false;
              return value;
            }
          });
        }
      });
      return value;
    },

    get_draft_invoices() {
      const vm = this;
      frappe.call({
        method: 'posawesome.posawesome.api.posapp.get_draft_invoices',
        args: {
          pos_opening_shift: this.pos_opening_shift.name,
        },
        async: false,
        callback: function (r) {
          if (r.message) {
            evntBus.$emit('open_drafts', r.message);
          }
        },
      });
    },

    open_returns() {
      evntBus.$emit('open_returns', this.pos_profile.company);
    },

    close_payments() {
      evntBus.$emit('show_payment', 'false');
    },

    update_items_details(items) {
      if (!items.length > 0) {
        return;
      }
      const vm = this;
      if (!vm.pos_profile) return;
      frappe.call({
        method: 'posawesome.posawesome.api.posapp.get_items_details',
        async: false,
        args: {
          pos_profile: vm.pos_profile,
          items_data: items,
        },
        callback: function (r) {
          if (r.message) {
            items.forEach((item) => {
              const updated_item = r.message.find(
                (element) => element.posa_row_id == item.posa_row_id
              );
              item.actual_qty = updated_item.actual_qty;
              item.serial_no_data = updated_item.serial_no_data;
              item.batch_no_data = updated_item.batch_no_data;
              item.item_uoms = updated_item.item_uoms;
              item.has_batch_no = updated_item.has_batch_no;
              item.has_serial_no = updated_item.has_serial_no;
              item.item_tax_rate = updated_item.item_tax_rate;
              item.included_in_print_rate = updated_item.included_in_print_rate
              if (updated_item.included_in_print_rate){
                let tax_rate = updated_item.item_tax_rate/100
                let item_price = updated_item.rate / (1 + tax_rate)
                item.item_tax_amount = (updated_item.rate - item_price).toFixed(3)   
                item.item_amount = item.rate
              }else{
                item.item_tax_amount = ((updated_item.rate * updated_item.item_tax_rate)/100).toFixed(3)
                item.item_amount = flt(item.rate) + flt(item.item_tax_amount)
              }
            });
          }
        },
      });
    },

    update_item_detail(item) {
      const vm = this;
      frappe.call({
        method: 'posawesome.posawesome.api.posapp.get_item_detail',
        args: {
          warehouse: this.pos_profile.warehouse,
          doc: this.get_invoice_doc(),
          price_list: this.pos_profile.price_list,
          item: {
            item_code: item.item_code,
            customer: this.customer,
            doctype: 'Sales Invoice',
            name: 'New Sales Invoice 1',
            company: this.pos_profile.company,
            conversion_rate: 1,
            qty: item.qty,
            price_list_rate: item.price_list_rate,
            child_docname: 'New Sales Invoice Item 1',
            cost_center: this.pos_profile.cost_center,
            currency: this.pos_profile.currency,
            // plc_conversion_rate: 1,
            pos_profile: this.pos_profile.name,
            price_list: this.pos_profile.selling_price_list,
            uom: item.uom,
            tax_category: '',
            transaction_type: 'selling',
            update_stock: this.pos_profile.update_stock,
            price_list: this.get_price_list(),
            has_batch_no: item.has_batch_no,
            serial_no: item.serial_no,
            batch_no: item.batch_no,
            is_stock_item: item.is_stock_item,
          },
        },
        callback: function (r) {
          if (r.message) {
            const data = r.message;
            if (
              item.has_batch_no &&
              vm.pos_profile.posa_auto_set_batch &&
              !item.batch_no &&
              data.batch_no
            ) {
              item.batch_no = data.batch_no;
              vm.set_batch_qty(item, item.batch_no, false);
            }
            if (data.has_pricing_rule) {
            } else if (
              vm.pos_profile.posa_apply_customer_discount &&
              vm.customer_info.posa_discount > 0 &&
              vm.customer_info.posa_discount <= 100
            ) {
              if (
                item.posa_is_offer == 0 &&
                !item.posa_is_replace &&
                item.posa_offer_applied == 0
              ) {
                if (item.max_discount > 0) {
                  item.discount_percentage =
                    item.max_discount < vm.customer_info.posa_discount
                      ? item.max_discount
                      : vm.customer_info.posa_discount;
                } else {
                  item.discount_percentage = vm.customer_info.posa_discount;
                }
              }
            }
            if (!item.btach_price) {
              if (
                !item.is_free_item &&
                !item.posa_is_offer &&
                !item.posa_is_replace
              ) {
                item.price_list_rate = data.price_list_rate;
              }
            }
            item.last_purchase_rate = data.last_purchase_rate;
            item.projected_qty = data.projected_qty;
            item.reserved_qty = data.reserved_qty;
            item.conversion_factor = data.conversion_factor;
            item.stock_qty = data.stock_qty;
            item.actual_qty = data.actual_qty;
            item.stock_uom = data.stock_uom;
            (item.has_serial_no = data.has_serial_no),
              (item.has_batch_no = data.has_batch_no),
              vm.calc_item_price(item);
          }
        },
      });
    },

    fetch_customer_details() {
      const vm = this;
      if (this.customer) {
        frappe.call({
          method: 'posawesome.posawesome.api.posapp.get_customer_info',
          args: {
            customer: vm.customer,
          },
          async: false,
          callback: (r) => {
            const message = r.message;
            if (!r.exc) {
              vm.customer_info = {
                ...message,
              };
            }
            vm.update_price_list();
          },
        });
      }
    },

    get_price_list() {
      let price_list = this.pos_profile.selling_price_list;
      if (this.customer_info && this.pos_profile) {
        const { customer_price_list, customer_group_price_list } =
          this.customer_info;
        const pos_price_list = this.pos_profile.selling_price_list;
        if (customer_price_list && customer_price_list != pos_price_list) {
          price_list = customer_price_list;
        } else if (
          customer_group_price_list &&
          customer_group_price_list != pos_price_list
        ) {
          price_list = customer_group_price_list;
        }
      }
      return price_list;
    },

    update_price_list() {
      let price_list = this.get_price_list();
      if (price_list == this.pos_profile.selling_price_list) {
        price_list = null;
      }
      evntBus.$emit('update_customer_price_list', price_list);
    },
    update_discount_umount() {
      const value = flt(this.additional_discount_percentage);
      if (value >= -100 && value <= 100) {
        this.discount_amount = (this.Total * value) / 100;
      } else {
        this.additional_discount_percentage = 0;
        this.discount_amount = 0;
      }
    },

    calc_prices(item, value, $event) {
      if (event.target.id === 'rate') {
        item.discount_percentage = 0;
        if (value < item.price_list_rate) {
          item.discount_amount = (
            flt(item.price_list_rate) - flt(value)
          ).toFixed(this.currency_precision);
        } else if (value < 0) {
          item.rate = item.price_list_rate;
          item.discount_amount = 0;
        } else if (value > item.price_list_rate) {
          item.discount_amount = 0;
        }
      } else if (event.target.id === 'discount_amount') {
        if (value < 0) {
          item.discount_amount = 0;
          item.discount_percentage = 0;
        } else {
          item.rate = flt(item.price_list_rate) - flt(value);
          item.discount_percentage = 0;
        }
      } else if (event.target.id === 'discount_percentage') {
        if (value < 0) {
          item.discount_amount = 0;
          item.discount_percentage = 0;
        } else {
          item.rate = (
            flt(item.price_list_rate) -
            (flt(item.price_list_rate) * flt(value)) / 100
          ).toFixed(this.currency_precision);
          item.discount_amount = (
            flt(item.price_list_rate) - flt(item.rate)
          ).toFixed(this.currency_precision);
        }
      }
      if (item.included_in_print_rate){
        let tax_rate = item.item_tax_rate/100
        let item_price = item.rate / (1 + tax_rate)
        item.item_tax_amount = (item.rate - item_price).toFixed(3)
        item.item_amount = flt(item.rate)
      }else{
        item.item_tax_amount = ((item.rate * item.item_tax_rate)/100).toFixed(3)
        item.item_amount = (flt(item.rate) + flt(item.item_tax_amount)) 
      }
    },

    calc_item_price(item) {
      if (!item.posa_offer_applied) {
        if (item.price_list_rate) {
          item.rate = item.price_list_rate;
        }
      }
      if (item.discount_percentage) {
        item.rate =
          flt(item.price_list_rate) -
          (flt(item.price_list_rate) * flt(item.discount_percentage)) / 100;
        item.discount_amount = (
          flt(item.price_list_rate) - flt(item.rate)
        ).toFixed(this.currency_precision);
      } else if (item.discount_amount) {
        item.rate = (
          flt(item.price_list_rate) - flt(item.discount_amount)
        ).toFixed(this.currency_precision);
      }
    },

    calc_uom(item, value) {
      const new_uom = item.item_uoms.find((element) => element.uom == value);
      item.conversion_factor = new_uom.conversion_factor;
      if (!item.posa_offer_applied) {
        item.discount_amount = 0;
        item.discount_percentage = 0;
      }
      if (item.btach_price) {
        item.price_list_rate = item.btach_price * new_uom.conversion_factor;
      }
      this.update_item_detail(item);
    },

    calc_sotck_gty(item, value) {
      item.stock_qty = item.conversion_factor * value;
    },

    set_serial_no(item) {
      if (!item.has_serial_no) return;
      item.serial_no = '';
      item.serial_no_selected.forEach((element) => {
        item.serial_no += element + '\\n';
      });
      item.serial_no_selected_count = item.serial_no_selected.length;
      if (item.serial_no_selected_count != item.stock_qty) {
        evntBus.$emit('show_mesage', {
          text: __(\`Selected Serial No QTY is {0} it should be {1}\`, [
            item.serial_no_selected_count,
            item.stock_qty,
          ]),
          color: 'warning',
        });
      }
    },

    set_batch_qty(item, value, update = true) {
      const batch_no = item.batch_no_data.find(
        (element) => element.batch_no == value
      );
      item.actual_batch_qty = batch_no.batch_qty;
      item.batch_no_expiry_date = batch_no.expiry_date;
      if (batch_no.btach_price) {
        item.btach_price = batch_no.btach_price;
        item.price_list_rate = batch_no.btach_price;
        item.rate = batch_no.btach_price;
      } else if (update) {
        item.btach_price = null;
        this.update_item_detail(item);
      }
    },

    formtCurrency(value) {
      value = parseFloat(value);
      return value
        .toFixed(this.currency_precision)
        .replace(/\\d(?=(\\d{3})+\\.)/g, '$&,');
    },

    formtFloat(value) {
      value = parseFloat(value);
      return value
        .toFixed(this.float_precision)
        .replace(/\\d(?=(\\d{3})+\\.)/g, '$&,');
    },

    shortOpenPayment(e) {
      if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.show_payment();
      }
    },

    shortDeleteFirstItem(e) {
      if (e.key === 'd' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.remove_item(this.items[0]);
      }
    },

    shortOpenFirstItem(e) {
      if (e.key === 'a' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.expanded = [];
        this.expanded.push(this.items[0]);
      }
    },

    shortSelectDiscount(e) {
      if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.$refs.discount.focus();
      }
    },

    makeid(length) {
      let result = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },

    checkOfferIsAppley(item, offer) {
      let applied = false;
      const item_offers = JSON.parse(item.posa_offers);
      for (const row_id of item_offers) {
        const exist_offer = this.posa_offers.find((el) => row_id == el.row_id);
        if (exist_offer && exist_offer.offer_name == offer.name) {
          applied = true;
          break;
        }
      }
      return applied;
    },

    handelOffers() {
      const offers = [];
      this.posOffers.forEach((offer) => {
        if (offer.apply_on === 'Item Code') {
          const itemOffer = this.getItemOffer(offer);
          if (itemOffer) {
            offers.push(itemOffer);
          }
        } else if (offer.apply_on === 'Item Group') {
          const groupOffer = this.getGroupOffer(offer);
          if (groupOffer) {
            offers.push(groupOffer);
          }
        } else if (offer.apply_on === 'Brand') {
          const brandOffer = this.getBrandOffer(offer);
          if (brandOffer) {
            offers.push(brandOffer);
          }
        } else if (offer.apply_on === 'Transaction') {
          const transactionOffer = this.getTransactionOffer(offer);
          if (transactionOffer) {
            offers.push(transactionOffer);
          }
        }
      });

      this.setItemGiveOffer(offers);
      this.updatePosOffers(offers);
    },

    setItemGiveOffer(offers) {
      // Set item give offer for replace
      offers.forEach((offer) => {
        if (
          offer.apply_on == 'Item Code' &&
          offer.apply_type == 'Item Code' &&
          offer.replace_item
        ) {
          offer.give_item = offer.item;
          offer.apply_item_code = offer.item;
        } else if (
          offer.apply_on == 'Item Group' &&
          offer.apply_type == 'Item Group' &&
          offer.replace_cheapest_item
        ) {
          const offerItemCode = this.getCheapestItem(offer).item_code;
          offer.give_item = offerItemCode;
          offer.apply_item_code = offerItemCode;
        }
      });
    },

    getCheapestItem(offer) {
      let itemsRowID;
      if (typeof offer.items === 'string') {
        itemsRowID = JSON.parse(offer.items);
      } else {
        itemsRowID = offer.items;
      }
      const itemsList = [];
      itemsRowID.forEach((row_id) => {
        itemsList.push(this.getItemFromRowID(row_id));
      });
      const result = itemsList.reduce(function (res, obj) {
        return !obj.posa_is_replace &&
          !obj.posa_is_offer &&
          obj.price_list_rate < res.price_list_rate
          ? obj
          : res;
      });
      return result;
    },

    getItemFromRowID(row_id) {
      const item = this.items.find((el) => el.posa_row_id == row_id);
      return item;
    },

    checkQtyAnountOffer(offer, qty, amount) {
      let min_qty = false;
      let max_qty = false;
      let min_amt = false;
      let max_amt = false;
      const applys = [];

      if (offer.min_qty || offer.min_qty == 0) {
        if (qty >= offer.min_qty) {
          min_qty = true;
        }
        applys.push(min_qty);
      }

      if (offer.max_qty > 0) {
        if (qty <= offer.max_qty) {
          max_qty = true;
        }
        applys.push(max_qty);
      }

      if (offer.min_amt > 0) {
        if (amount >= offer.min_amt) {
          min_amt = true;
        }
        applys.push(min_amt);
      }

      if (offer.max_amt > 0) {
        if (amount <= offer.max_amt) {
          max_amt = true;
        }
        applys.push(max_amt);
      }
      let apply = false;
      if (!applys.includes(false)) {
        apply = true;
      }
      const res = {
        apply: apply,
        conditions: { min_qty, max_qty, min_amt, max_amt },
      };
      return res;
    },

    checkOfferCoupon(offer) {
      if (offer.coupon_based) {
        const coupon = this.posa_coupons.find(
          (el) => offer.name == el.pos_offer
        );
        if (coupon) {
          offer.coupon = coupon.coupon;
          return true;
        } else {
          return false;
        }
      } else {
        offer.coupon = null;
        return true;
      }
    },

    getItemOffer(offer) {
      let apply_offer = null;
      if (offer.apply_on === 'Item Code') {
        if (this.checkOfferCoupon(offer)) {
          this.items.forEach((item) => {
            if (!item.posa_is_offer && item.item_code === offer.item) {
              const items = [];
              if (
                offer.offer === 'Item Price' &&
                item.posa_offer_applied &&
                !this.checkOfferIsAppley(item, offer)
              ) {
              } else {
                const res = this.checkQtyAnountOffer(
                  offer,
                  item.stock_qty,
                  item.stock_qty * item.price_list_rate
                );
                if (res.apply) {
                  items.push(item.posa_row_id);
                  offer.items = items;
                  apply_offer = offer;
                }
              }
            }
          });
        }
      }
      return apply_offer;
    },

    getGroupOffer(offer) {
      let apply_offer = null;
      if (offer.apply_on === 'Item Group') {
        if (this.checkOfferCoupon(offer)) {
          const items = [];
          let total_count = 0;
          let total_amount = 0;
          this.items.forEach((item) => {
            if (!item.posa_is_offer && item.item_group === offer.item_group) {
              if (
                offer.offer === 'Item Price' &&
                item.posa_offer_applied &&
                !this.checkOfferIsAppley(item, offer)
              ) {
              } else {
                total_count += item.stock_qty;
                total_amount += item.stock_qty * item.price_list_rate;
                items.push(item.posa_row_id);
              }
            }
          });
          if (total_count || total_amount) {
            const res = this.checkQtyAnountOffer(
              offer,
              total_count,
              total_amount
            );
            if (res.apply) {
              offer.items = items;
              apply_offer = offer;
            }
          }
        }
      }
      return apply_offer;
    },

    getBrandOffer(offer) {
      let apply_offer = null;
      if (offer.apply_on === 'Brand') {
        if (this.checkOfferCoupon(offer)) {
          const items = [];
          let total_count = 0;
          let total_amount = 0;
          this.items.forEach((item) => {
            if (!item.posa_is_offer && item.brand === offer.brand) {
              if (
                offer.offer === 'Item Price' &&
                item.posa_offer_applied &&
                !this.checkOfferIsAppley(item, offer)
              ) {
              } else {
                total_count += item.stock_qty;
                total_amount += item.stock_qty * item.price_list_rate;
                items.push(item.posa_row_id);
              }
            }
          });
          if (total_count || total_amount) {
            const res = this.checkQtyAnountOffer(
              offer,
              total_count,
              total_amount
            );
            if (res.apply) {
              offer.items = items;
              apply_offer = offer;
            }
          }
        }
      }
      return apply_offer;
    },
    getTransactionOffer(offer) {
      let apply_offer = null;
      if (offer.apply_on === 'Transaction') {
        if (this.checkOfferCoupon(offer)) {
          let total_qty = 0;
          this.items.forEach((item) => {
            if (!item.posa_is_offer && !item.posa_is_replace) {
              total_qty += item.stock_qty;
            }
          });
          const items = [];
          const total_count = total_qty;
          const total_amount = this.Total;
          if (total_count || total_amount) {
            const res = this.checkQtyAnountOffer(
              offer,
              total_count,
              total_amount
            );
            if (res.apply) {
              this.items.forEach((item) => {
                items.push(item.posa_row_id);
              });
              offer.items = items;
              apply_offer = offer;
            }
          }
        }
      }
      return apply_offer;
    },

    updatePosOffers(offers) {
      evntBus.$emit('update_pos_offers', offers);
    },

    updateInvoiceOffers(offers) {
      this.posa_offers.forEach((invoiceOffer) => {
        const existOffer = offers.find(
          (offer) => invoiceOffer.row_id == offer.row_id
        );
        if (!existOffer) {
          this.removeApplyOffer(invoiceOffer);
        }
      });
      offers.forEach((offer) => {
        const existOffer = this.posa_offers.find(
          (invoiceOffer) => invoiceOffer.row_id == offer.row_id
        );
        if (existOffer) {
          existOffer.items = JSON.stringify(offer.items);
          if (
            existOffer.offer === 'Give Product' &&
            existOffer.give_item &&
            existOffer.give_item != offer.give_item
          ) {
            const item_to_remove = this.items.find(
              (item) => item.posa_row_id == existOffer.give_item_row_id
            );
            if (item_to_remove) {
              const updated_item_offers = offer.items.filter(
                (row_id) => row_id != item_to_remove.posa_row_id
              );
              offer.items = updated_item_offers;
              this.remove_item(item_to_remove);
              existOffer.give_item_row_id = null;
              existOffer.give_item = null;
            }
            const newItemOffer = this.ApplyOnGiveProduct(offer);
            if (offer.replace_cheapest_item) {
              const cheapestItem = this.getCheapestItem(offer);
              const oldBaseItem = this.items.find(
                (el) => el.posa_row_id == item_to_remove.posa_is_replace
              );
              newItemOffer.qty = item_to_remove.qty;
              if (oldBaseItem && !oldBaseItem.posa_is_replace) {
                oldBaseItem.qty += item_to_remove.qty;
              } else {
                const restoredItem = this.ApplyOnGiveProduct(
                  {
                    given_qty: item_to_remove.qty,
                  },
                  item_to_remove.item_code
                );
                restoredItem.posa_is_offer = 0;
                this.items.unshift(restoredItem);
              }
              newItemOffer.posa_is_offer = 0;
              newItemOffer.posa_is_replace = cheapestItem.posa_row_id;
              const diffQty = cheapestItem.qty - newItemOffer.qty;
              if (diffQty <= 0) {
                newItemOffer.qty += diffQty;
                this.remove_item(cheapestItem);
                newItemOffer.posa_row_id = cheapestItem.posa_row_id;
                newItemOffer.posa_is_replace = newItemOffer.posa_row_id;
              } else {
                cheapestItem.qty = diffQty;
              }
            }
            this.items.unshift(newItemOffer);
            existOffer.give_item_row_id = newItemOffer.posa_row_id;
            existOffer.give_item = newItemOffer.item_code;
          } else if (
            existOffer.offer === 'Give Product' &&
            existOffer.give_item &&
            existOffer.give_item == offer.give_item &&
            (offer.replace_item || offer.replace_cheapest_item)
          ) {
            this.$nextTick(function () {
              const offerItem = this.getItemFromRowID(
                existOffer.give_item_row_id
              );
              const diff = offer.given_qty - offerItem.qty;
              if (diff > 0) {
                const itemsRowID = JSON.parse(existOffer.items);
                const itemsList = [];
                itemsRowID.forEach((row_id) => {
                  itemsList.push(this.getItemFromRowID(row_id));
                });
                const existItem = itemsList.find(
                  (el) =>
                    el.item_code == offerItem.item_code &&
                    el.posa_is_replace != offerItem.posa_row_id
                );
                if (existItem) {
                  const diffExistQty = existItem.qty - diff;
                  if (diffExistQty > 0) {
                    offerItem.qty += diff;
                    existItem.qty -= diff;
                  } else {
                    offerItem.qty += existItem.qty;
                    this.remove_item(existItem);
                  }
                }
              }
            });
          } else if (existOffer.offer === 'Item Price') {
            this.ApplyOnPrice(offer);
          } else if (existOffer.offer === 'Grand Total') {
            this.ApplyOnTotal(offer);
          }
          this.addOfferToItems(existOffer);
        } else {
          this.applyNewOffer(offer);
        }
      });
    },

    removeApplyOffer(invoiceOffer) {
      if (invoiceOffer.offer === 'Item Price') {
        this.RemoveOnPrice(invoiceOffer);
        const index = this.posa_offers.findIndex(
          (el) => el.row_id === invoiceOffer.row_id
        );
        this.posa_offers.splice(index, 1);
      }
      if (invoiceOffer.offer === 'Give Product') {
        const item_to_remove = this.items.find(
          (item) => item.posa_row_id == invoiceOffer.give_item_row_id
        );
        const index = this.posa_offers.findIndex(
          (el) => el.row_id === invoiceOffer.row_id
        );
        this.posa_offers.splice(index, 1);
        this.remove_item(item_to_remove);
      }
      if (invoiceOffer.offer === 'Grand Total') {
        this.RemoveOnTotal(invoiceOffer);
        const index = this.posa_offers.findIndex(
          (el) => el.row_id === invoiceOffer.row_id
        );
        this.posa_offers.splice(index, 1);
      }
      if (invoiceOffer.offer === 'Loyalty Point') {
        const index = this.posa_offers.findIndex(
          (el) => el.row_id === invoiceOffer.row_id
        );
        this.posa_offers.splice(index, 1);
      }
      this.deleteOfferFromItems(invoiceOffer);
    },

    applyNewOffer(offer) {
      if (offer.offer === 'Item Price') {
        this.ApplyOnPrice(offer);
      }
      if (offer.offer === 'Give Product') {
        let itemsRowID;
        if (typeof offer.items === 'string') {
          itemsRowID = JSON.parse(offer.items);
        } else {
          itemsRowID = offer.items;
        }
        if (
          offer.apply_on == 'Item Code' &&
          offer.apply_type == 'Item Code' &&
          offer.replace_item
        ) {
          const item = this.ApplyOnGiveProduct(offer, offer.item);
          item.posa_is_replace = itemsRowID[0];
          const baseItem = this.items.find(
            (el) => el.posa_row_id == item.posa_is_replace
          );
          const diffQty = baseItem.qty - offer.given_qty;
          item.posa_is_offer = 0;
          if (diffQty <= 0) {
            item.qty = baseItem.qty;
            this.remove_item(baseItem);
            item.posa_row_id = item.posa_is_replace;
          } else {
            baseItem.qty = diffQty;
          }
          this.items.unshift(item);
          offer.give_item_row_id = item.posa_row_id;
        } else if (
          offer.apply_on == 'Item Group' &&
          offer.apply_type == 'Item Group' &&
          offer.replace_cheapest_item
        ) {
          const itemsList = [];
          itemsRowID.forEach((row_id) => {
            itemsList.push(this.getItemFromRowID(row_id));
          });
          const baseItem = itemsList.find(
            (el) => el.item_code == offer.give_item
          );
          const item = this.ApplyOnGiveProduct(offer, offer.give_item);
          item.posa_is_offer = 0;
          item.posa_is_replace = baseItem.posa_row_id;
          const diffQty = baseItem.qty - offer.given_qty;
          if (diffQty <= 0) {
            item.qty = baseItem.qty;
            this.remove_item(baseItem);
            item.posa_row_id = item.posa_is_replace;
          } else {
            baseItem.qty = diffQty;
          }
          this.items.unshift(item);
          offer.give_item_row_id = item.posa_row_id;
        } else {
          const item = this.ApplyOnGiveProduct(offer);
          this.items.unshift(item);
          if (item) {
            offer.give_item_row_id = item.posa_row_id;
          }
        }
      }
      if (offer.offer === 'Grand Total') {
        this.ApplyOnTotal(offer);
      }
      if (offer.offer === 'Loyalty Point') {
        evntBus.$emit('show_mesage', {
          text: __('Loyalty Point Offer Applied'),
          color: 'success',
        });
      }

      const newOffer = {
        offer_name: offer.name,
        row_id: offer.row_id,
        apply_on: offer.apply_on,
        offer: offer.offer,
        items: JSON.stringify(offer.items),
        give_item: offer.give_item,
        give_item_row_id: offer.give_item_row_id,
        offer_applied: offer.offer_applied,
        coupon_based: offer.coupon_based,
        coupon: offer.coupon,
      };
      this.posa_offers.push(newOffer);
      this.addOfferToItems(newOffer);
    },

    ApplyOnGiveProduct(offer, item_code) {
      if (!item_code) {
        item_code = offer.give_item;
      }
      const items = this.allItems;
      const item = items.find((item) => item.item_code == item_code);
      if (!item) {
        return;
      }
      const new_item = { ...item };
      new_item.qty = offer.given_qty;
      new_item.stock_qty = offer.given_qty;
      new_item.rate = offer.discount_type === 'Rate' ? offer.rate : item.rate;
      new_item.discount_amount =
        offer.discount_type === 'Discount Amount' ? offer.discount_amount : 0;
      new_item.discount_percentage =
        offer.discount_type === 'Discount Percentage'
          ? offer.discount_percentage
          : 0;
      new_item.discount_amount_per_item = 0;
      new_item.uom = item.uom ? item.uom : item.stock_uom;
      new_item.actual_batch_qty = '';
      new_item.conversion_factor = 1;
      new_item.posa_offers = JSON.stringify([]);
      new_item.posa_offer_applied = 0;
      new_item.posa_is_offer = 1;
      new_item.posa_is_replace = null;
      new_item.posa_notes = '';
      new_item.posa_delivery_date = '';
      new_item.is_free_item =
        (offer.discount_type === 'Rate' && !offer.rate) ||
        (offer.discount_type === 'Discount Percentage' &&
          offer.discount_percentage == 0)
          ? 1
          : 0;
      new_item.posa_row_id = this.makeid(20);
      new_item.price_list_rate =
        (offer.discount_type === 'Rate' && !offer.rate) ||
        (offer.discount_type === 'Discount Percentage' &&
          offer.discount_percentage == 0)
          ? 0
          : item.rate;
      if (
        (!this.pos_profile.posa_auto_set_batch && new_item.has_batch_no) ||
        new_item.has_serial_no
      ) {
        this.expanded.push(new_item);
      }
      this.update_item_detail(new_item);
      return new_item;
    },

    ApplyOnPrice(offer) {
      this.items.forEach((item) => {
        if (offer.items.includes(item.posa_row_id)) {
          const item_offers = JSON.parse(item.posa_offers);
          if (!item_offers.includes(offer.row_id)) {
            if (offer.discount_type === 'Rate') {
              item.rate = offer.rate;
            } else if (offer.discount_type === 'Discount Percentage') {
              item.discount_percentage += offer.discount_percentage;
            } else if (offer.discount_type === 'Discount Amount') {
              item.discount_amount += offer.discount_amount;
            }
            item.posa_offer_applied = 1;
            this.calc_item_price(item);
          }
        }
      });
    },

    RemoveOnPrice(offer) {
      this.items.forEach((item) => {
        const item_offers = JSON.parse(item.posa_offers);
        if (item_offers.includes(offer.row_id)) {
          const originalOffer = this.posOffers.find(
            (el) => el.name == offer.offer_name
          );
          if (originalOffer) {
            if (originalOffer.discount_type === 'Rate') {
              item.rate = item.price_list_rate;
            } else if (originalOffer.discount_type === 'Discount Percentage') {
              item.discount_percentage -= offer.discount_percentage;
              if (!item.discount_percentage) {
                item.discount_percentage = 0;
                item.discount_amount = 0;
                item.rate = item.price_list_rate;
              }
            } else if (originalOffer.discount_type === 'Discount Amount') {
              item.discount_amount -= offer.discount_amount;
            }
            this.calc_item_price(item);
          }
        }
      });
    },

    ApplyOnTotal(offer) {
      if (!offer.name) {
        offer = this.posOffers.find((el) => el.name == offer.offer_name);
      }
      if (
        (!this.discount_percentage_offer_name ||
          this.discount_percentage_offer_name == offer.name) &&
        offer.discount_percentage > 0 &&
        offer.discount_percentage <= 100
      ) {
        this.discount_amount = (
          (flt(this.Total) * flt(offer.discount_percentage)) /
          100
        ).toFixed(this.currency_precision);
        this.discount_percentage_offer_name = offer.name;
      }
    },

    RemoveOnTotal(offer) {
      if (
        this.discount_percentage_offer_name &&
        this.discount_percentage_offer_name == offer.offer_name
      ) {
        this.discount_amount = 0;
        this.discount_percentage_offer_name = null;
      }
    },

    addOfferToItems(offer) {
      const offer_items = JSON.parse(offer.items);
      offer_items.forEach((el) => {
        this.items.forEach((exist_item) => {
          if (exist_item.posa_row_id == el) {
            const item_offers = JSON.parse(exist_item.posa_offers);
            if (!item_offers.includes(offer.row_id)) {
              item_offers.push(offer.row_id);
              if (offer.offer === 'Item Price') {
                exist_item.posa_offer_applied = 1;
              }
            }
            exist_item.posa_offers = JSON.stringify(item_offers);
          }
        });
      });
    },

    deleteOfferFromItems(offer) {
      const offer_items = JSON.parse(offer.items);
      offer_items.forEach((el) => {
        this.items.forEach((exist_item) => {
          if (exist_item.posa_row_id == el) {
            const item_offers = JSON.parse(exist_item.posa_offers);
            const updated_item_offers = item_offers.filter(
              (row_id) => row_id != offer.row_id
            );
            if (offer.offer === 'Item Price') {
              exist_item.posa_offer_applied = 0;
            }
            exist_item.posa_offers = JSON.stringify(updated_item_offers);
          }
        });
      });
    },

    validate_due_date(item) {
      const today = frappe.datetime.now_date();
      const parse_today = Date.parse(today);
      const new_date = Date.parse(item.posa_delivery_date);
      if (new_date < parse_today) {
        setTimeout(() => {
          item.posa_delivery_date = today;
        }, 0);
      }
    },
    load_print_page(invoice_name) {
      const print_format =
        this.pos_profile.print_format_for_online ||
        this.pos_profile.print_format;
      const letter_head = this.pos_profile.letter_head || 0;
      const url =
        frappe.urllib.get_base_url() +
        '/printview?doctype=Sales%20Invoice&name=' +
        invoice_name +
        '&trigger_print=1' +
        '&format=' +
        print_format +
        '&no_letterhead=' +
        letter_head;
      const printWindow = window.open(url, 'Print');
      printWindow.addEventListener(
        'load',
        function () {
          printWindow.print();
          // printWindow.close();
          // NOTE : uncomoent this to auto closing printing window
        },
        true
      );
    },

    print_draft_invoice() {
      if (!this.pos_profile.posa_allow_print_draft_invoices) {
        evntBus.$emit('show_mesage', {
          text: __(\`You are not allowed to print draft invoices\`),
          color: 'error',
        });
        return;
      }
      let invoice_name = this.invoice_doc.name;
      frappe.run_serially([
        () => {
          const invoice_doc = this.new_invoice();
          invoice_name = invoice_doc.name ? invoice_doc.name : invoice_name;
        },
        () => {
          this.load_print_page(invoice_name);
        },
      ]);
    },
    set_delivery_charges() {
      const vm = this;
      if (
        !this.pos_profile ||
        !this.customer ||
        !this.pos_profile.posa_use_delivery_charges
      ) {
        this.delivery_charges = [];
        this.delivery_charges_rate = 0;
        this.selcted_delivery_charges = {};
        return;
      }
      this.delivery_charges_rate = 0;
      this.selcted_delivery_charges = {};
      frappe.call({
        method:
          'posawesome.posawesome.api.posapp.get_applicable_delivery_charges',
        args: {
          company: this.pos_profile.company,
          pos_profile: this.pos_profile.name,
          customer: this.customer,
        },
        async: true,
        callback: function (r) {
          if (r.message) {
            vm.delivery_charges = r.message;
          }
        },
      });
    },
    deliveryChargesFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const searchText = queryText.toLowerCase();
      return textOne.indexOf(searchText) > -1;
    },
    update_delivery_charges() {
      if (this.selcted_delivery_charges) {
        this.delivery_charges_rate = this.selcted_delivery_charges.rate;
      } else {
        this.delivery_charges_rate = 0;
      }
    },
  },

  created() {
    evntBus.$on('register_pos_profile', (data) => {
      this.pos_profile = data.pos_profile;
      this.customer = data.pos_profile.customer;
      this.pos_opening_shift = data.pos_opening_shift;
      this.stock_settings = data.stock_settings;
      this.float_precision =
        frappe.defaults.get_default('float_precision') || 2;
      this.currency_precision =
        frappe.defaults.get_default('currency_precision') || 2;
        
    });
    evntBus.$on('add_item', (item) => {
      this.add_item(item);
    });
    evntBus.$on('update_customer', (customer) => {
      this.customer = customer;
    });
    evntBus.$on('new_invoice', () => {
      this.invoice_doc = '';
      this.cancel_invoice();
    });
    evntBus.$on('load_invoice', (data) => {
      this.new_invoice(data);
      evntBus.$emit('set_pos_coupons', data.posa_coupons);
    });
    evntBus.$on('set_offers', (data) => {
      this.posOffers = data;
    });
    evntBus.$on('update_invoice_offers', (data) => {
      this.updateInvoiceOffers(data);
    });
    evntBus.$on('update_invoice_coupons', (data) => {
      this.posa_coupons = data;
      this.handelOffers();
    });
    evntBus.$on('set_all_items', (data) => {
      this.allItems = data;
      this.items.forEach((item) => {
        this.update_item_detail(item);
      });
    });
    evntBus.$on('load_return_invoice', (data) => {
      this.new_invoice(data.invoice_doc);
      this.discount_amount = -data.return_doc.discount_amount;
      this.additional_discount_percentage =
        -data.return_doc.additional_discount_percentage;
      this.return_doc = data.return_doc;
    });
    evntBus.$on('set_new_line', (data) => {
      this.new_line = data;
    });
    document.addEventListener('keydown', this.shortOpenPayment.bind(this));
    document.addEventListener('keydown', this.shortDeleteFirstItem.bind(this));
    document.addEventListener('keydown', this.shortOpenFirstItem.bind(this));
    document.addEventListener('keydown', this.shortSelectDiscount.bind(this));
  },
  destroyed() {
    document.removeEventListener('keydown', this.shortOpenPayment);
    document.removeEventListener('keydown', this.shortDeleteFirstItem);
    document.removeEventListener('keydown', this.shortOpenFirstItem);
    document.removeEventListener('keydown', this.shortSelectDiscount);
  },
  watch: {
    customer() {
      this.close_payments();
      evntBus.$emit('set_customer', this.customer);
      this.fetch_customer_details();
      this.set_delivery_charges();
    },
    customer_info() {
      evntBus.$emit('set_customer_info_to_edit', this.customer_info);
    },
    expanded(data_value) {
      this.update_items_details(data_value);
      if (data_value.length > 0) {
        this.update_item_detail(data_value[0]);
      }
    },
    discount_percentage_offer_name() {
      evntBus.$emit('update_discount_percentage_offer_name', {
        value: this.discount_percentage_offer_name,
      });
    },
    items: {
      deep: true,
      handler(items) {
        this.handelOffers();
        this.$forceUpdate();
      },
    },
    invoiceType() {
      evntBus.$emit('update_invoice_type', this.invoiceType);
    },
    discount_amount() {
      if (!this.discount_amount || this.discount_amount == 0) {
        this.additional_discount_percentage = 0;
      } else if (this.pos_profile.posa_use_percentage_discount) {
        this.additional_discount_percentage =
          (this.discount_amount / this.Total) * 100;
      } else {
        this.additional_discount_percentage = 0;
      }
    },
  },
};
<\/script>

<style scoped>
.border_line_bottom {
  border-bottom: 1px solid lightgray;
}
.disable-events {
  pointer-events: none;
}
</style>
`]},media:void 0})},Gh="data-v-6d0f63a9",zh=void 0,Hh=!1;function jh(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};f.__file="../posawesome/posawesome/public/js/posapp/components/pos/Invoice.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s;{let P;if(r&&(P=d?function(b){r.call(this,R(b,this.$root.$options.shadowRoot))}:function(b){r.call(this,T(b))}),P!==void 0)if(f.functional){let b=f.render;f.render=function(z,W){return P.call(W),b(z,W)}}else{let b=f.beforeCreate;f.beforeCreate=b?[].concat(b,P):[P]}}return f}function Fo(){let e=Fo.styles||(Fo.styles={}),r=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(s,l){if(document.querySelector('style[data-vue-ssr-id~="'+s+'"]'))return;let p=r?l.media||"default":s,d=e[p]||(e[p]={ids:[],parts:[],element:void 0});if(!d.ids.includes(s)){let T=l.source,S=d.ids.length;if(d.ids.push(s),r&&(d.element=d.element||document.querySelector("style[data-group="+p+"]")),!d.element){let R=document.head||document.getElementsByTagName("head")[0],f=d.element=document.createElement("style");f.type="text/css",l.media&&f.setAttribute("media",l.media),r&&(f.setAttribute("data-group",p),f.setAttribute("data-next-index","0")),R.appendChild(f)}if(r&&(S=parseInt(d.element.getAttribute("data-next-index")),d.element.setAttribute("data-next-index",S+1)),d.element.styleSheet)d.parts.push(T),d.element.styleSheet.cssText=d.parts.filter(Boolean).join(`
`);else{let R=document.createTextNode(T),f=d.element.childNodes;f[S]&&d.element.removeChild(f[S]),f.length?d.element.insertBefore(R,f[S]):d.element.appendChild(R)}}}}var Jh=jh({render:Ta,staticRenderFns:Uh},Wh,Mh,Gh,Hh,zh,!1,Fo,void 0,void 0),Aa=Jh;var xe={data(){return{float_precision:2,currency_precision:2}},methods:{flt(e,r,i,s){return!r&&r!=0&&(r=this.currency_precision||2),s||(s="Banker's Rounding (legacy)"),flt(e,r,i,s)},formtCurrency(e,r){var s;let i=get_number_format((s=this.pos_profile)==null?void 0:s.currency);return e=format_number(e,i,r||this.currency_precision||2),e},formtFloat(e,r){let i=get_number_format(this.pos_profile.currency);return e=format_number(e,i,r||this.float_precision||2),e},setFormatedCurrency(e,r,i,s=!1,l){let p=0;try{let d=parseFloat(l);isNaN(d)||(p=d),s&&p<0&&(p=p*-1),p=this.formtCurrency(l,i)}catch(d){console.error(d),p=0}return typeof e=="object"?e[r]=p:this[r]=p,p},setFormatedFloat(e,r,i,s=!1,l){let p=0;try{p=parseFloat(l),isNaN(p)?p=0:s&&p<0&&(p=p*-1),p=this.formtFloat(l,i)}catch(d){console.error(d),p=0}return typeof e=="object"?e[r]=p:this[r]=p,p},currencySymbol(e){return get_currency_symbol(e)},isNumber(e){return/^-?(\d+|\d{1,3}(\.\d{3})*)(,\d+)?$/.test(e)||"invalid number"}},mounted(){this.float_precision=frappe.defaults.get_default("float_precision")||2,this.currency_precision=frappe.defaults.get_default("currency_precision")||2}};var Kh={mixins:[xe],props:["dialog"],data:()=>({dialog_data:{},is_loading:!1,companys:[],company:"",pos_profiles_data:[],pos_profiles:[],pos_profile:"",payments_method_data:[],payments_methods:[],payments_methods_headers:[{text:__("Mode of Payment"),align:"start",sortable:!1,value:"mode_of_payment"},{text:__("Opening Amount"),value:"amount",align:"center",sortable:!1}],itemsPerPage:100,max25chars:e=>e.length<=12||"Input too long!",pagination:{},snack:!1,snackColor:"",snackText:""}),watch:{company(e){this.pos_profiles=[],this.pos_profiles_data.forEach(r=>{r.company===e&&this.pos_profiles.push(r.name),this.pos_profiles.length?this.pos_profile=this.pos_profiles[0]:this.pos_profile=""})},pos_profile(e){this.payments_methods=[],this.payments_method_data.forEach(r=>{r.parent===e&&this.payments_methods.push({mode_of_payment:r.mode_of_payment,amount:0,currency:r.currency})})}},methods:{close_opening_dialog(){h.$emit("close_opening_dialog")},get_opening_dialog_data(){let e=this;frappe.call({method:"posawesome.posawesome.api.posapp.get_opening_dialog_data",args:{},callback:function(r){r.message&&(console.info(r.message),r.message.companys.forEach(i=>{e.companys.push(i.name)}),e.company=e.companys[0],e.pos_profiles_data=r.message.pos_profiles_data,e.payments_method_data=r.message.payments_method)}})},submit_dialog(){if(!this.payments_methods.length||!this.company||!this.pos_profile)return;this.is_loading=!0;let e=this;return frappe.call("posawesome.posawesome.api.posapp.create_opening_voucher",{pos_profile:this.pos_profile,company:this.company,balance_details:this.payments_methods}).then(r=>{r.message&&(h.$emit("register_pos_data",r.message),h.$emit("set_company",r.message.company),e.close_opening_dialog(),is_loading=!1)})},go_desk(){frappe.set_route("/"),location.reload()}},created:function(){this.$nextTick(function(){this.get_opening_dialog_data()})}},Ra=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(s){e.dialog=s},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Create POS Opening Shift")))])]),e._v(" "),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{items:e.companys,label:e.frappe._("Company"),required:""},model:{value:e.company,callback:function(s){e.company=s},expression:"company"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{items:e.pos_profiles,label:e.frappe._("POS Profile"),required:""},model:{value:e.pos_profile,callback:function(s){e.pos_profile=s},expression:"pos_profile"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12"}},[[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.payments_methods_headers,items:e.payments_methods,"item-key":"mode_of_payment","items-per-page":e.itemsPerPage,"hide-default-footer":""},scopedSlots:e._u([{key:"item.amount",fn:function(s){return[i("v-edit-dialog",{attrs:{"return-value":s.item.amount},on:{"update:returnValue":function(l){return e.$set(s.item,"amount",l)},"update:return-value":function(l){return e.$set(s.item,"amount",l)}},scopedSlots:e._u([{key:"input",fn:function(){return[i("v-text-field",{attrs:{rules:[e.max25chars],label:e.frappe._("Edit"),"single-line":"",counter:"",type:"number"},model:{value:s.item.amount,callback:function(l){e.$set(s.item,"amount",l)},expression:"props.item.amount"}})]},proxy:!0}],null,!0)},[e._v(`
                      `+e._s(e.currencySymbol(s.item.currency))+`
                      `+e._s(e.formtCurrency(s.item.amount))+`
                      `)])]}}])})]],2)],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error",dark:""},on:{click:e.go_desk}},[e._v("Cancel")]),e._v(" "),i("v-btn",{attrs:{color:"success",disabled:e.is_loading,dark:""},on:{click:e.submit_dialog}},[e._v("Submit")])],1)],1)],1)],1)},Qh=[];Ra._withStripped=!0;var Xh=void 0,Yh=void 0,Vh=void 0,Zh=!1;function ev(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/OpeningDialog.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var tv=ev({render:Ra,staticRenderFns:Qh},Xh,Kh,Yh,Zh,Vh,!1,void 0,void 0,void 0),Ea=tv;var nv={mixins:[xe],data:()=>({loading:!1,pos_profile:"",invoice_doc:"",loyalty_amount:0,is_credit_sale:0,is_write_off_change:0,date_menu:!1,po_date_menu:!1,addresses:[],sales_persons:[],sales_person:"",paid_change:0,order_delivery_date:!1,paid_change_rules:[],is_return:!1,is_cashback:!0,redeem_customer_credit:!1,customer_credit_dict:[],phone_dialog:!1,invoiceType:"Invoice",pos_settings:"",customer_info:"",mpesa_modes:[]}),methods:{back_to_invoice(){h.$emit("show_payment","false"),h.$emit("set_customer_readonly",!1)},submit(e,r=!1,i=!1){if(!this.invoice_doc.is_return&&this.total_payments<0){h.$emit("show_mesage",{text:"Payments not correct",color:"error"}),frappe.utils.play_sound("error");return}let s=!0;if(!r&&(this.invoice_doc.payments.forEach(d=>{d.type=="Phone"&&![0,"0","",null,void 0].includes(d.amount)&&(s=!1)}),!s)){h.$emit("show_mesage",{text:__("Please request phone payment or use other payment method"),color:"error"}),frappe.utils.play_sound("error"),console.error("phone payment not requested");return}if(!this.pos_profile.posa_allow_partial_payment&&this.total_payments<this.invoice_doc.grand_total){h.$emit("show_mesage",{text:"The amount paid is not complete",color:"error"}),frappe.utils.play_sound("error");return}if(this.pos_profile.posa_allow_partial_payment&&!this.pos_profile.posa_allow_credit_sale&&this.total_payments==0){h.$emit("show_mesage",{text:"Please enter the amount paid",color:"error"}),frappe.utils.play_sound("error");return}if(this.paid_change||(this.paid_change=0),this.paid_change>-this.diff_payment){h.$emit("show_mesage",{text:"Paid change can not be greater than total change!",color:"error"}),frappe.utils.play_sound("error");return}let l=this.flt(this.flt(this.paid_change)+this.flt(-this.credit_change));if(this.is_cashback&&l!=-this.diff_payment){h.$emit("show_mesage",{text:"Error in change calculations!",color:"error"}),frappe.utils.play_sound("error");return}if(this.customer_credit_dict.filter(d=>flt(d.credit_to_redeem)?flt(d.credit_to_redeem)>flt(d.total_credit):!1).length>0){h.$emit("show_mesage",{text:"redeamed credit can not greater than its total.",color:"error"}),frappe.utils.play_sound("error");return}if(!this.invoice_doc.is_return&&this.redeemed_customer_credit>this.invoice_doc.grand_total){h.$emit("show_mesage",{text:"can not redeam customer credit more than invoice total",color:"error"}),frappe.utils.play_sound("error");return}this.submit_invoice(i),this.customer_credit_dict=[],this.redeem_customer_credit=!1,this.is_cashback=!0,this.sales_person="",h.$emit("new_invoice","false"),this.back_to_invoice()},submit_invoice(e){this.invoice_doc.payments.forEach(s=>{s.amount=flt(s.amount)}),this.customer_credit_dict.length&&this.customer_credit_dict.forEach(s=>{s.credit_to_redeem=flt(s.credit_to_redeem)});let r={};r.total_change=-this.diff_payment,r.paid_change=this.paid_change,r.credit_change=-this.credit_change,r.redeemed_customer_credit=this.redeemed_customer_credit,r.customer_credit_dict=this.customer_credit_dict,r.is_cashback=this.is_cashback;let i=this;frappe.call({method:"posawesome.posawesome.api.posapp.submit_invoice",args:{data:r,invoice:this.invoice_doc},async:!0,callback:function(s){s.message&&(e&&i.load_print_page(),h.$emit("set_last_invoice",i.invoice_doc.name),h.$emit("show_mesage",{text:`Invoice ${s.message.name} is Submited`,color:"success"}),frappe.utils.play_sound("submit"),this.addresses=[])}})},set_full_amount(e){this.invoice_doc.payments.forEach(r=>{r.amount=r.idx==e?this.invoice_doc.grand_total:0})},set_rest_amount(e){this.invoice_doc.payments.forEach(r=>{r.idx==e&&r.amount==0&&this.diff_payment>0&&(r.amount=this.diff_payment)})},clear_all_amounts(){this.invoice_doc.payments.forEach(e=>{e.amount=0})},load_print_page(){let e=this.pos_profile.print_format_for_online||this.pos_profile.print_format,r=this.pos_profile.letter_head||0,i=frappe.urllib.get_base_url()+"/printview?doctype=Sales%20Invoice&name="+this.invoice_doc.name+"&trigger_print=1&format="+e+"&no_letterhead="+r,s=window.open(i,"Print");s.addEventListener("load",function(){s.print()},!0)},validate_due_date(){let e=frappe.datetime.now_date(),r=Date.parse(e);Date.parse(this.invoice_doc.due_date)<r&&setTimeout(()=>{this.invoice_doc.due_date=e},0)},shortPay(e){e.key==="x"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.submit())},set_paid_change(){this.paid_change||(this.paid_change=0),this.paid_change_rules=[];let e=-this.diff_payment;this.paid_change>e&&(this.paid_change_rules=["Paid change can not be greater than total change!"],this.credit_change=0)},get_available_credit(e){this.clear_all_amounts(),e?frappe.call("posawesome.posawesome.api.posapp.get_available_credit",{customer:this.invoice_doc.customer,company:this.pos_profile.company}).then(r=>{let i=r.message;i.length?this.customer_credit_dict=i:this.customer_credit_dict=[]}):this.customer_credit_dict=[]},get_addresses(){let e=this;!e.invoice_doc||frappe.call({method:"posawesome.posawesome.api.posapp.get_customer_addresses",args:{customer:e.invoice_doc.customer},async:!0,callback:function(r){r.exc?e.addresses=[]:e.addresses=r.message}})},addressFilter(e,r,i){let s=e.address_title?e.address_title.toLowerCase():"",l=e.address_line1?e.address_line1.toLowerCase():"",p=e.address_line2?e.address_line2.toLowerCase():"",d=e.city?e.city.toLowerCase():"",T=e.name.toLowerCase(),S=r.toLowerCase();return s.indexOf(S)>-1||l.indexOf(S)>-1||p.indexOf(S)>-1||d.indexOf(S)>-1||T.indexOf(S)>-1},new_address(){h.$emit("open_new_address",this.invoice_doc.customer)},get_sales_person_names(){let e=this;e.pos_profile.posa_local_storage&&localStorage.sales_persons_storage&&(e.sales_persons=JSON.parse(localStorage.getItem("sales_persons_storage"))),frappe.call({method:"posawesome.posawesome.api.posapp.get_sales_person_names",callback:function(r){r.message&&(e.sales_persons=r.message,e.pos_profile.posa_local_storage&&(localStorage.setItem("sales_persons_storage",""),localStorage.setItem("sales_persons_storage",JSON.stringify(r.message))))}})},salesPersonFilter(e,r,i){let s=e.sales_person_name?e.sales_person_name.toLowerCase():"",l=e.name.toLowerCase(),p=r.toLowerCase();return s.indexOf(p)>-1||l.indexOf(p)>-1},request_payment(){this.phone_dialog=!1;let e=this;if(!this.invoice_doc.contact_mobile){h.$emit("show_mesage",{text:__("Pleas Set Customer Mobile Number"),color:"error"}),h.$emit("open_edit_customer"),this.back_to_invoice();return}h.$emit("freeze",{title:__("Waiting for payment... ")}),this.invoice_doc.payments.forEach(i=>{i.amount=flt(i.amount)});let r=me({},this.invoice_doc);r.total_change=-this.diff_payment,r.paid_change=this.paid_change,r.credit_change=-this.credit_change,r.redeemed_customer_credit=this.redeemed_customer_credit,r.customer_credit_dict=this.customer_credit_dict,r.is_cashback=this.is_cashback,frappe.call({method:"posawesome.posawesome.api.posapp.update_invoice",args:{data:r},async:!1,callback:function(i){i.message&&(e.invoice_doc=i.message)}}).then(()=>{frappe.call({method:"posawesome.posawesome.api.posapp.create_payment_request",args:{doc:e.invoice_doc}}).fail(()=>{h.$emit("unfreeze"),h.$emit("show_mesage",{text:__("Payment request failed"),color:"error"})}).then(({message:i})=>{let s=i.name;setTimeout(()=>{frappe.db.get_value("Payment Request",s,["status","grand_total"]).then(({message:l})=>{l.status!="Paid"?(h.$emit("unfreeze"),h.$emit("show_mesage",{text:__("Payment Request took too long to respond. Please try requesting for payment again"),color:"error"})):(h.$emit("unfreeze"),h.$emit("show_mesage",{text:__("Payment of {0} received successfully.",[e.formtCurrency(l.grand_total,e.invoice_doc.currency,0)]),color:"success"}),frappe.db.get_doc("Sales Invoice",e.invoice_doc.name).then(p=>{e.invoice_doc=p,e.submit(null,!0)}))})},3e4)})})},get_mpesa_modes(){let e=this;frappe.call({method:"posawesome.posawesome.api.m_pesa.get_mpesa_mode_of_payment",args:{company:e.pos_profile.company},async:!0,callback:function(r){r.exc?e.mpesa_modes=[]:e.mpesa_modes=r.message}})},is_mpesa_c2b_payment(e){return this.mpesa_modes.includes(e.mode_of_payment)&&e.type=="Bank"?(e.amount=0,!0):!1},mpesa_c2b_dialg(e){let r={company:this.pos_profile.company,mode_of_payment:e.mode_of_payment,customer:this.invoice_doc.customer};h.$emit("open_mpesa_payments",r)},set_mpesa_payment(e){this.pos_profile.use_customer_credit=1,this.redeem_customer_credit=!0;let r={type:"Advance",credit_origin:e.name,total_credit:flt(e.unallocated_amount),credit_to_redeem:flt(e.unallocated_amount)};this.clear_all_amounts(),this.customer_credit_dict.push(r)}},computed:{total_payments(){let e=parseFloat(this.invoice_doc.loyalty_amount);return this.invoice_doc&&this.invoice_doc.payments&&this.invoice_doc.payments.forEach(r=>{e+=this.flt(r.amount)}),e+=this.flt(this.redeemed_customer_credit),this.is_cashback||(e=0),this.flt(e,this.currency_precision)},diff_payment(){let e=this.flt(this.invoice_doc.grand_total-this.total_payments,this.currency_precision);return this.paid_change=-e,e},credit_change(){let e=-this.diff_payment;return this.paid_change>e?0:this.flt(this.paid_change-e,this.currency_precision)},diff_lable(){return this.diff_payment<0?"Change":"To Be Paid"},available_pioints_amount(){let e=0;return this.customer_info.loyalty_points&&(e=this.customer_info.loyalty_points*this.customer_info.conversion_factor),e},available_customer_credit(){let e=0;return this.customer_credit_dict.map(r=>{e+=r.total_credit}),e},redeemed_customer_credit(){let e=0;return this.customer_credit_dict.map(r=>{flt(r.credit_to_redeem)?e+=flt(r.credit_to_redeem):r.credit_to_redeem=0}),e},vaildatPayment(){return this.pos_profile.posa_allow_sales_order?this.invoiceType=="Order"&&!this.invoice_doc.posa_delivery_date:!1},request_payment_field(){let e=!1;return!this.pos_settings||this.pos_settings.invoice_fields.length==0?e=!1:this.pos_settings.invoice_fields.forEach(r=>{r.fieldtype=="Button"&&r.fieldname=="request_for_payment"&&(e=!0)}),e}},mounted:function(){this.$nextTick(function(){h.$on("send_invoice_doc_payment",e=>{this.invoice_doc=e;let r=this.invoice_doc.payments.find(i=>i.default==1);this.is_credit_sale=0,this.is_write_off_change=0,r&&(r.amount=this.flt(e.grand_total,this.currency_precision)),this.loyalty_amount=0,this.get_addresses(),this.get_sales_person_names()}),h.$on("register_pos_profile",e=>{this.pos_profile=e.pos_profile,this.get_mpesa_modes()}),h.$on("add_the_new_address",e=>{this.addresses.push(e),this.$forceUpdate()}),h.$on("update_invoice_type",e=>{this.invoiceType=e,this.invoice_doc&&e!="Order"&&(this.invoice_doc.posa_delivery_date=null,this.invoice_doc.posa_notes=null,this.invoice_doc.shipping_address_name=null)})}),h.$on("update_customer",e=>{this.customer!=e&&(this.customer_credit_dict=[],this.redeem_customer_credit=!1,this.is_cashback=!0)}),h.$on("set_pos_settings",e=>{this.pos_settings=e}),h.$on("set_customer_info_to_edit",e=>{this.customer_info=e}),h.$on("set_mpesa_payment",e=>{this.set_mpesa_payment(e)}),document.addEventListener("keydown",this.shortPay.bind(this))},beforeDestroy(){h.$off("send_invoice_doc_payment"),h.$off("register_pos_profile"),h.$off("add_the_new_address"),h.$off("update_invoice_type"),h.$off("update_customer"),h.$off("set_pos_settings"),h.$off("set_customer_info_to_edit"),h.$off("update_invoice_coupons"),h.$off("set_mpesa_payment")},destroyed(){document.removeEventListener("keydown",this.shortPay)},watch:{loyalty_amount(e){e>this.available_pioints_amount?(this.invoice_doc.loyalty_amount=0,this.invoice_doc.redeem_loyalty_points=0,this.invoice_doc.loyalty_points=0,h.$emit("show_mesage",{text:`Loyalty Amount can not be more then ${this.available_pioints_amount}`,color:"error"})):(this.invoice_doc.loyalty_amount=this.flt(this.loyalty_amount),this.invoice_doc.redeem_loyalty_points=1,this.invoice_doc.loyalty_points=this.flt(this.loyalty_amount)/this.customer_info.conversion_factor)},is_credit_sale(e){e==1&&this.invoice_doc.payments.forEach(r=>{r.amount=0,r.base_amount=0})},is_write_off_change(e){e==1?(this.invoice_doc.write_off_amount=this.diff_payment,this.invoice_doc.write_off_outstanding_amount_automatically=1):(this.invoice_doc.write_off_amount=0,this.invoice_doc.write_off_outstanding_amount_automatically=0)},redeemed_customer_credit(e){e>this.available_customer_credit&&h.$emit("show_mesage",{text:`You can redeem customer credit upto ${this.available_customer_credit}`,color:"error"})},sales_person(){this.sales_person?this.invoice_doc.sales_team=[{sales_person:this.sales_person,allocated_percentage:100}]:this.invoice_doc.sales_team=[]}}},Pa=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",[i("v-card",{staticClass:"selection mx-auto grey lighten-5 pa-1",staticStyle:{"max-height":"76vh",height:"76vh"}},[i("v-progress-linear",{attrs:{active:e.loading,indeterminate:e.loading,absolute:"",top:"",color:"info"}}),e._v(" "),i("div",{staticClass:"overflow-y-auto px-2 pt-2",staticStyle:{"max-height":"75vh"}},[e.invoice_doc?i("v-row",{staticClass:"px-1 py-0"},[i("v-col",{attrs:{cols:"7"}},[i("v-text-field",{attrs:{outlined:"",color:"primary",label:e.frappe._("Paid Amount"),"background-color":"white","hide-details":"",value:e.formtCurrency(e.total_payments),readonly:"",prefix:e.currencySymbol(e.invoice_doc.currency),dense:""}})],1),e._v(" "),i("v-col",{attrs:{cols:"5"}},[i("v-text-field",{attrs:{outlined:"",color:"primary",label:e.frappe._(e.diff_lable),"background-color":"white","hide-details":"",value:e.formtCurrency(e.diff_payment),readonly:"",prefix:e.currencySymbol(e.invoice_doc.currency),dense:""}})],1),e._v(" "),e.diff_payment<0&&!e.invoice_doc.is_return?i("v-col",{attrs:{cols:"7"}},[i("v-text-field",{attrs:{outlined:"",color:"primary",label:e.frappe._("Paid Change"),"background-color":"white",prefix:e.currencySymbol(e.invoice_doc.currency),rules:e.paid_change_rules,dense:"",readonly:"",type:"number"},on:{input:function(s){return e.set_paid_change()}},model:{value:e.paid_change,callback:function(s){e.paid_change=s},expression:"paid_change"}})],1):e._e(),e._v(" "),e.diff_payment<0&&!e.invoice_doc.is_return?i("v-col",{attrs:{cols:"5"}},[i("v-text-field",{attrs:{outlined:"",color:"primary",label:e.frappe._("Credit Change"),"background-color":"white","hide-details":"",value:e.formtCurrency(e.credit_change),readonly:"",prefix:e.currencySymbol(e.invoice_doc.currency),dense:""}})],1):e._e()],1):e._e(),e._v(" "),i("v-divider"),e._v(" "),e.is_cashback?i("div",e._l(e.invoice_doc.payments,function(s){return i("v-row",{key:s.name,staticClass:"pyments px-1 py-0"},[e.is_mpesa_c2b_payment(s)?e._e():i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._(s.mode_of_payment),"background-color":"white","hide-details":"",value:e.formtCurrency(s.amount),rules:[e.isNumber],prefix:e.currencySymbol(e.invoice_doc.currency),readonly:!!e.invoice_doc.is_return},on:{change:function(l){return e.setFormatedCurrency(s,"amount",null,!0,l)},focus:function(l){return e.set_rest_amount(s.idx)}}})],1),e._v(" "),e.is_mpesa_c2b_payment(s)?e._e():i("v-col",{attrs:{cols:(s.type!="Phone"||s.amount==0||!e.request_payment_field)&&!e.is_mpesa_c2b_payment(s)}},[i("v-btn",{attrs:{block:"",color:"primary",dark:""},on:{click:function(l){return e.set_full_amount(s.idx)}}},[e._v(e._s(s.mode_of_payment))])],1),e._v(" "),e.is_mpesa_c2b_payment(s)?i("v-col",{staticClass:"pl-3",attrs:{cols:12}},[i("v-btn",{attrs:{block:"",color:"success",dark:""},on:{click:function(l){return e.mpesa_c2b_dialg(s)}}},[e._v(`
              `+e._s(e.__("Get Payments "+s.mode_of_payment))+`
            `)])],1):e._e(),e._v(" "),s.type=="Phone"&&s.amount>0&&e.request_payment_field?i("v-col",{staticClass:"pl-1",attrs:{cols:3}},[i("v-btn",{attrs:{block:"",color:"success",dark:"",disabled:s.amount==0},on:{click:function(l){e.phone_dialog=!0,s.amount=e.flt(s.amount,0)}}},[e._v(`
              `+e._s(e.__("Request"))+`
            `)])],1):e._e()],1)}),1):e._e(),e._v(" "),e.invoice_doc&&e.available_pioints_amount>0&&!e.invoice_doc.is_return?i("v-row",{staticClass:"pyments px-1 py-0"},[i("v-col",{attrs:{cols:"7"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Redeem Loyalty Points"),"background-color":"white","hide-details":"",type:"number",prefix:e.currencySymbol(e.invoice_doc.currency)},model:{value:e.loyalty_amount,callback:function(s){e.loyalty_amount=s},expression:"loyalty_amount"}})],1),e._v(" "),i("v-col",{attrs:{cols:"5"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("You can redeem upto"),"background-color":"white","hide-details":"",value:e.formtFloat(e.available_pioints_amount),prefix:e.currencySymbol(e.invoice_doc.currency),disabled:""}})],1)],1):e._e(),e._v(" "),e.invoice_doc&&e.available_customer_credit>0&&!e.invoice_doc.is_return&&e.redeem_customer_credit?i("v-row",{staticClass:"pyments px-1 py-0"},[i("v-col",{attrs:{cols:"7"}},[i("v-text-field",{attrs:{dense:"",outlined:"",disabled:"",color:"primary",label:e.frappe._("Redeemed Customer Credit"),"background-color":"white","hide-details":"",type:"number",prefix:e.currencySymbol(e.invoice_doc.currency)},model:{value:e.redeemed_customer_credit,callback:function(s){e.redeemed_customer_credit=s},expression:"redeemed_customer_credit"}})],1),e._v(" "),i("v-col",{attrs:{cols:"5"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("You can redeem credit upto"),"background-color":"white","hide-details":"",value:e.formtCurrency(e.available_customer_credit),prefix:e.currencySymbol(e.invoice_doc.currency),disabled:""}})],1)],1):e._e(),e._v(" "),i("v-divider"),e._v(" "),i("v-row",{staticClass:"px-1 py-0"},[i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Net Total"),"background-color":"white","hide-details":"",value:e.formtCurrency(e.invoice_doc.net_total),disabled:"",prefix:e.currencySymbol(e.invoice_doc.currency)}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Tax and Charges"),"background-color":"white","hide-details":"",value:e.formtCurrency(e.invoice_doc.total_taxes_and_charges),disabled:"",prefix:e.currencySymbol(e.invoice_doc.currency)}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Total Amount"),"background-color":"white","hide-details":"",value:e.formtCurrency(e.invoice_doc.total),disabled:"",prefix:e.currencySymbol(e.invoice_doc.currency)}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Discount Amount"),"background-color":"white","hide-details":"",value:e.formtCurrency(e.invoice_doc.discount_amount),disabled:"",prefix:e.currencySymbol(e.invoice_doc.currency)}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Grand Total"),"background-color":"white","hide-details":"",value:e.formtCurrency(e.invoice_doc.grand_total),disabled:"",prefix:e.currencySymbol(e.invoice_doc.currency)}})],1),e._v(" "),e.pos_profile.posa_allow_sales_order&&e.invoiceType=="Order"?i("v-col",{attrs:{cols:"6"}},[i("v-menu",{ref:"order_delivery_date",attrs:{"close-on-content-click":!1,transition:"scale-transition",dense:""},scopedSlots:e._u([{key:"activator",fn:function(s){var l=s.on,p=s.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:e.frappe._("Delivery Date"),readonly:"",outlined:"",dense:"","background-color":"white",clearable:"",color:"primary","hide-details":""},model:{value:e.invoice_doc.posa_delivery_date,callback:function(d){e.$set(e.invoice_doc,"posa_delivery_date",d)},expression:"invoice_doc.posa_delivery_date"}},"v-text-field",p,!1),l))]}}],null,!1,3418006649),model:{value:e.order_delivery_date,callback:function(s){e.order_delivery_date=s},expression:"order_delivery_date"}},[e._v(" "),i("v-date-picker",{attrs:{"no-title":"",scrollable:"",color:"primary",min:e.frappe.datetime.now_date()},on:{input:function(s){e.order_delivery_date=!1}},model:{value:e.invoice_doc.posa_delivery_date,callback:function(s){e.$set(e.invoice_doc,"posa_delivery_date",s)},expression:"invoice_doc.posa_delivery_date"}})],1)],1):e._e(),e._v(" "),e.invoice_doc.posa_delivery_date?i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{dense:"",clearable:"","auto-select-first":"",outlined:"",color:"primary",label:e.frappe._("Address"),items:e.addresses,"item-text":"address_title","item-value":"name","background-color":"white","no-data-text":"Address not found","hide-details":"",filter:e.addressFilter,"append-icon":"mdi-plus"},on:{"click:append":e.new_address},scopedSlots:e._u([{key:"item",fn:function(s){return[[i("v-list-item-content",[i("v-list-item-title",{staticClass:"primary--text subtitle-1",domProps:{innerHTML:e._s(s.item.address_title)}}),e._v(" "),i("v-list-item-title",{domProps:{innerHTML:e._s(s.item.address_line1)}}),e._v(" "),s.item.custoaddress_line2mer_name?i("v-list-item-subtitle",{domProps:{innerHTML:e._s(s.item.address_line2)}}):e._e(),e._v(" "),s.item.city?i("v-list-item-subtitle",{domProps:{innerHTML:e._s(s.item.city)}}):e._e(),e._v(" "),s.item.state?i("v-list-item-subtitle",{domProps:{innerHTML:e._s(s.item.state)}}):e._e(),e._v(" "),s.item.country?i("v-list-item-subtitle",{domProps:{innerHTML:e._s(s.item.mobile_no)}}):e._e(),e._v(" "),s.item.address_type?i("v-list-item-subtitle",{domProps:{innerHTML:e._s(s.item.address_type)}}):e._e()],1)]]}}],null,!1,2426684905),model:{value:e.invoice_doc.shipping_address_name,callback:function(s){e.$set(e.invoice_doc,"shipping_address_name",s)},expression:"invoice_doc.shipping_address_name"}})],1):e._e(),e._v(" "),e.pos_profile.posa_display_additional_notes?i("v-col",{attrs:{cols:"12"}},[i("v-textarea",{staticClass:"pa-0",attrs:{outlined:"",dense:"","background-color":"white",clearable:"",color:"primary","auto-grow":"",rows:"2",label:e.frappe._("Additional Notes"),value:e.invoice_doc.posa_notes},model:{value:e.invoice_doc.posa_notes,callback:function(s){e.$set(e.invoice_doc,"posa_notes",s)},expression:"invoice_doc.posa_notes"}})],1):e._e()],1),e._v(" "),e.pos_profile.posa_allow_customer_purchase_order?i("div",[i("v-divider"),e._v(" "),i("v-row",{staticClass:"px-1 py-0",attrs:{justify:"center",align:"start"}},[i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{label:e.frappe._("Purchase Order"),outlined:"",dense:"","background-color":"white",clearable:"",color:"primary","hide-details":""},model:{value:e.invoice_doc.po_no,callback:function(s){e.$set(e.invoice_doc,"po_no",s)},expression:"invoice_doc.po_no"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-menu",{ref:"po_date_menu",attrs:{"close-on-content-click":!1,transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(s){var l=s.on,p=s.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:e.frappe._("Purchase Order Date"),readonly:"",outlined:"",dense:"","hide-details":"",color:"primary"},model:{value:e.invoice_doc.po_date,callback:function(d){e.$set(e.invoice_doc,"po_date",d)},expression:"invoice_doc.po_date"}},"v-text-field",p,!1),l))]}}],null,!1,3566944987),model:{value:e.po_date_menu,callback:function(s){e.po_date_menu=s},expression:"po_date_menu"}},[e._v(" "),i("v-date-picker",{attrs:{"no-title":"",scrollable:"",color:"primary"},on:{input:function(s){e.po_date_menu=!1}},model:{value:e.invoice_doc.po_date,callback:function(s){e.$set(e.invoice_doc,"po_date",s)},expression:"invoice_doc.po_date"}})],1)],1)],1)],1):e._e(),e._v(" "),i("v-divider"),e._v(" "),i("v-row",{staticClass:"px-1 py-0",attrs:{align:"start","no-gutters":""}},[e.pos_profile.posa_allow_write_off_change&&e.diff_payment>0&&!e.invoice_doc.is_return?i("v-col",{attrs:{cols:"6"}},[i("v-switch",{staticClass:"my-0 py-0",attrs:{flat:"",label:e.frappe._("Write Off Difference Amount")},model:{value:e.is_write_off_change,callback:function(s){e.is_write_off_change=s},expression:"is_write_off_change"}})],1):e._e(),e._v(" "),e.pos_profile.posa_allow_credit_sale&&!e.invoice_doc.is_return?i("v-col",{attrs:{cols:"6"}},[i("v-switch",{staticClass:"my-0 py-0",attrs:{flat:"",label:e.frappe._("Is Credit Sale")},model:{value:e.is_credit_sale,callback:function(s){e.is_credit_sale=s},expression:"is_credit_sale"}})],1):e._e(),e._v(" "),e.invoice_doc.is_return&&e.pos_profile.use_cashback?i("v-col",{attrs:{cols:"6"}},[i("v-switch",{staticClass:"my-0 py-0",attrs:{flat:"",label:e.frappe._("Is Cashback")},model:{value:e.is_cashback,callback:function(s){e.is_cashback=s},expression:"is_cashback"}})],1):e._e(),e._v(" "),e.is_credit_sale?i("v-col",{attrs:{cols:"6"}},[i("v-menu",{ref:"date_menu",attrs:{"close-on-content-click":!1,transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(s){var l=s.on,p=s.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:e.frappe._("Due Date"),readonly:"",outlined:"",dense:"","hide-details":"",color:"primary"},model:{value:e.invoice_doc.due_date,callback:function(d){e.$set(e.invoice_doc,"due_date",d)},expression:"invoice_doc.due_date"}},"v-text-field",p,!1),l))]}}],null,!1,2759492897),model:{value:e.date_menu,callback:function(s){e.date_menu=s},expression:"date_menu"}},[e._v(" "),i("v-date-picker",{attrs:{"no-title":"",scrollable:"",color:"primary",min:e.frappe.datetime.now_date()},on:{input:function(s){e.date_menu=!1}},model:{value:e.invoice_doc.due_date,callback:function(s){e.$set(e.invoice_doc,"due_date",s)},expression:"invoice_doc.due_date"}})],1)],1):e._e(),e._v(" "),!e.invoice_doc.is_return&&e.pos_profile.use_customer_credit?i("v-col",{attrs:{cols:"6"}},[i("v-switch",{staticClass:"my-0 py-0",attrs:{flat:"",label:e.frappe._("Use Customer Credit")},on:{change:function(s){return e.get_available_credit(s)}},model:{value:e.redeem_customer_credit,callback:function(s){e.redeem_customer_credit=s},expression:"redeem_customer_credit"}})],1):e._e()],1),e._v(" "),e.invoice_doc&&e.available_customer_credit>0&&!e.invoice_doc.is_return&&e.redeem_customer_credit?i("div",e._l(e.customer_credit_dict,function(s,l){return i("v-row",{key:l},[i("v-col",{attrs:{cols:"4"}},[i("div",{staticClass:"pa-2 py-3"},[e._v(e._s(s.credit_origin))])]),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Available Credit"),"background-color":"white","hide-details":"",value:e.formtCurrency(s.total_credit),disabled:"",prefix:e.currencySymbol(e.invoice_doc.currency)}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Redeem Credit"),"background-color":"white","hide-details":"",type:"number",prefix:e.currencySymbol(e.invoice_doc.currency)},model:{value:s.credit_to_redeem,callback:function(p){e.$set(s,"credit_to_redeem",p)},expression:"row.credit_to_redeem"}})],1)],1)}),1):e._e(),e._v(" "),i("v-divider"),e._v(" "),i("v-row",{staticClass:"pb-0 mb-2",attrs:{align:"start"}},[i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{dense:"",clearable:"","auto-select-first":"",outlined:"",color:"primary",label:e.frappe._("Sales Person"),items:e.sales_persons,"item-text":"sales_person_name","item-value":"name","background-color":"white","no-data-text":e.__("Sales Person not found"),"hide-details":"",filter:e.salesPersonFilter,disabled:e.readonly},scopedSlots:e._u([{key:"item",fn:function(s){return[[i("v-list-item-content",[i("v-list-item-title",{staticClass:"primary--text subtitle-1",domProps:{innerHTML:e._s(s.item.sales_person_name)}}),e._v(" "),s.item.sales_person_name!=s.item.name?i("v-list-item-subtitle",{domProps:{innerHTML:e._s("ID: "+s.item.name)}}):e._e()],1)]]}}]),model:{value:e.sales_person,callback:function(s){e.sales_person=s},expression:"sales_person"}})],1)],1)],1)],1),e._v(" "),i("v-card",{staticClass:"cards mb-0 mt-3 py-0",attrs:{flat:""}},[i("v-row",{attrs:{align:"start","no-gutters":""}},[i("v-col",{attrs:{cols:"6"}},[i("v-btn",{attrs:{block:"",large:"",color:"primary",dark:"",disabled:e.vaildatPayment},on:{click:e.submit}},[e._v(e._s(e.__("Submit")))])],1),e._v(" "),i("v-col",{staticClass:"pl-1",attrs:{cols:"6"}},[i("v-btn",{attrs:{block:"",large:"",color:"success",dark:"",disabled:e.vaildatPayment},on:{click:function(s){return e.submit(void 0,!1,!0)}}},[e._v(e._s(e.__("Submit & Print")))])],1),e._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-btn",{staticClass:"mt-2 pa-1",attrs:{block:"",large:"",color:"error",dark:""},on:{click:e.back_to_invoice}},[e._v(e._s(e.__("Cancel Payment")))])],1)],1)],1),e._v(" "),i("div",[i("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.phone_dialog,callback:function(s){e.phone_dialog=s},expression:"phone_dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Confirm Mobile Number")))])]),e._v(" "),i("v-card-text",{staticClass:"pa-0"},[i("v-container",[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Mobile Number"),"background-color":"white","hide-details":"",type:"number"},model:{value:e.invoice_doc.contact_mobile,callback:function(s){e.$set(e.invoice_doc,"contact_mobile",s)},expression:"invoice_doc.contact_mobile"}})],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error",dark:""},on:{click:function(s){e.phone_dialog=!1}}},[e._v(e._s(e.__("Close")))]),e._v(" "),i("v-btn",{attrs:{color:"primary",dark:""},on:{click:e.request_payment}},[e._v(e._s(e.__("Request")))])],1)],1)],1)],1)],1)},iv=[];Pa._withStripped=!0;var ov=void 0,sv=void 0,rv=void 0,av=!1;function cv(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/Payments.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var lv=cv({render:Pa,staticRenderFns:iv},ov,nv,sv,av,rv,!1,void 0,void 0,void 0),qa=lv;var _v={mixins:[xe],data:()=>({loading:!1,pos_profile:"",pos_offers:[],allItems:[],discount_percentage_offer_name:null,itemsPerPage:1e3,expanded:[],singleExpand:!0,items_headers:[{text:__("Name"),value:"name",align:"start"},{text:__("Apply On"),value:"apply_on",align:"start"},{text:__("Offer"),value:"offer",align:"start"},{text:__("Applied"),value:"offer_applied",align:"start"}]}),computed:{offersCount(){return this.pos_offers.length},appliedOffersCount(){return this.pos_offers.filter(e=>!!e.offer_applied).length}},methods:{back_to_invoice(){h.$emit("show_offers","false")},forceUpdateItem(){let e=[];e=[...this.pos_offers],this.pos_offers=e},makeid(e){let r="",i="abcdefghijklmnopqrstuvwxyz0123456789",s=i.length;for(var l=0;l<e;l++)r+=i.charAt(Math.floor(Math.random()*s));return r},updatePosOffers(e){let r=[];this.pos_offers.forEach(i=>{e.find(l=>l.name===i.name)||r.push(i.row_id)}),this.removeOffers(r),e.forEach(i=>{let s=this.pos_offers.find(l=>i.name===l.name);if(s)s.items=i.items,s.offer==="Grand Total"&&!this.discount_percentage_offer_name&&(s.offer_applied=!!s.auto),i.apply_on=="Item Group"&&i.apply_type=="Item Group"&&i.replace_cheapest_item&&(s.give_item=i.give_item,s.apply_item_code=i.apply_item_code);else{let l=me({},i);i.row_id||(l.row_id=this.makeid(20)),i.apply_type=="Item Code"&&(l.give_item=i.apply_item_code||"Nothing"),i.offer_applied?l.offer_applied==!!i.offer_applied:i.apply_type=="Item Group"&&i.offer=="Give Product"&&!i.replace_cheapest_item&&!i.replace_item||i.offer==="Grand Total"&&this.discount_percentage_offer_name?l.offer_applied=!1:l.offer_applied=!!i.auto,l.offer=="Give Product"&&!l.give_item&&(l.give_item=this.get_give_items(l)[0].item_code),this.pos_offers.push(l),h.$emit("show_mesage",{text:__("New Offer Available"),color:"warning"})}})},removeOffers(e){this.pos_offers=this.pos_offers.filter(r=>!e.includes(r.row_id))},handelOffers(){let e=this.pos_offers.filter(r=>r.offer_applied);h.$emit("update_invoice_offers",e)},handleNewLine(e){return e?e.replace(/(?:\r\n|\r|\n)/g,"<br />"):""},get_give_items(e){if(e.apply_type=="Item Code")return[e.apply_item_code];if(e.apply_type=="Item Group"){let r=this.allItems,i=[],s=r.filter(l=>l.item_group==e.apply_item_group);return e.less_then>0?i=s.filter(l=>l.rate<e.less_then):i=s,i}else return[]},updateCounters(){h.$emit("update_offers_counters",{offersCount:this.offersCount,appliedOffersCount:this.appliedOffersCount})},updatePosCoupuns(){let e=this.pos_offers.filter(r=>r.offer_applied&&r.coupon_based);h.$emit("update_pos_coupons",e)}},watch:{pos_offers:{deep:!0,handler(e){this.handelOffers(),this.updateCounters(),this.updatePosCoupuns()}}},created:function(){this.$nextTick(function(){h.$on("register_pos_profile",e=>{this.pos_profile=e.pos_profile})}),h.$on("update_customer",e=>{this.customer!=e&&(this.offers=[])}),h.$on("update_pos_offers",e=>{this.updatePosOffers(e)}),h.$on("update_discount_percentage_offer_name",e=>{this.discount_percentage_offer_name=e.value}),h.$on("set_all_items",e=>{this.allItems=e})}},Fa=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",[i("v-card",{staticClass:"selection mx-auto grey lighten-5",staticStyle:{"max-height":"80vh",height:"80vh"}},[i("v-card-title",[i("span",{staticClass:"text-h6 primary--text"},[e._v(e._s(e.__("Offers")))])]),e._v(" "),i("div",{staticClass:"my-0 py-0 overflow-y-auto",staticStyle:{"max-height":"75vh"}},[[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.items_headers,items:e.pos_offers,"single-expand":e.singleExpand,expanded:e.expanded,"show-expand":"","item-key":"row_id","items-per-page":e.itemsPerPage,"hide-default-footer":""},on:{"update:expanded":function(s){e.expanded=s}},scopedSlots:e._u([{key:"item.offer_applied",fn:function(s){var l=s.item;return[i("v-simple-checkbox",{attrs:{disabled:l.offer=="Give Product"&&!l.give_item&&(!e.offer.replace_cheapest_item||!e.offer.replace_item)||l.offer=="Grand Total"&&e.discount_percentage_offer_name&&e.discount_percentage_offer_name!=l.name},on:{click:e.forceUpdateItem},model:{value:l.offer_applied,callback:function(p){e.$set(l,"offer_applied",p)},expression:"item.offer_applied"}})]}},{key:"expanded-item",fn:function(s){var l=s.headers,p=s.item;return[i("td",{attrs:{colspan:l.length}},[i("v-row",{staticClass:"mt-2"},[p.description?i("v-col",[i("div",{staticClass:"primary--text",domProps:{innerHTML:e._s(e.handleNewLine(p.description))}})]):e._e(),e._v(" "),p.offer=="Give Product"?i("v-col",[i("v-autocomplete",{attrs:{items:e.get_give_items(p),"item-text":"item_code",outlined:"",dense:"",color:"primary",label:e.frappe._("Give Item"),disabled:p.apply_type!="Item Group"||p.replace_item||p.replace_cheapest_item},model:{value:p.give_item,callback:function(d){e.$set(p,"give_item",d)},expression:"item.give_item"}})],1):e._e()],1)],1)]}}])})]],2)],1),e._v(" "),i("v-card",{staticClass:"cards mb-0 mt-3 py-0",staticStyle:{"max-height":"11vh",height:"11vh"},attrs:{flat:""}},[i("v-row",{attrs:{align:"start","no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-btn",{staticClass:"pa-1",attrs:{block:"",large:"",color:"warning",dark:""},on:{click:e.back_to_invoice}},[e._v(e._s(e.__("Back")))])],1)],1)],1)],1)},uv=[];Fa._withStripped=!0;var pv=void 0,dv=void 0,fv=void 0,mv=!1;function hv(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/PosOffers.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var vv=hv({render:Fa,staticRenderFns:uv},pv,_v,dv,mv,fv,!1,void 0,void 0,void 0),La=vv;var gv={data:()=>({loading:!1,pos_profile:"",customer:"",posa_coupons:[],new_coupon:null,itemsPerPage:1e3,singleExpand:!0,items_headers:[{text:__("Coupon"),value:"coupon_code",align:"start"},{text:__("Type"),value:"type",align:"start"},{text:__("Offer"),value:"pos_offer",align:"start"},{text:__("Applied"),value:"applied",align:"start"}]}),computed:{couponsCount(){return this.posa_coupons.length},appliedCouponsCount(){return this.posa_coupons.filter(e=>!!e.applied).length}},methods:{back_to_invoice(){h.$emit("show_coupons","false")},add_coupon(e){if(!this.customer||!e)return;if(this.posa_coupons.find(s=>s.coupon_code==e)){h.$emit("show_mesage",{text:__("This coupon already used !"),color:"error"});return}let i=this;frappe.call({method:"posawesome.posawesome.api.posapp.get_pos_coupon",args:{coupon:e,customer:i.customer,company:i.pos_profile.company},callback:function(s){if(s.message){let l=s.message;if(l.msg!="Apply"||!l.coupon)h.$emit("show_mesage",{text:l.msg,color:"error"});else{i.new_coupon=null;let p=l.coupon;i.posa_coupons.push({coupon:p.name,coupon_code:p.coupon_code,type:p.coupon_type,applied:0,pos_offer:p.pos_offer,customer:p.customer||i.customer})}}}})},setActiveGiftCoupons(){if(!this.customer)return;let e=this;frappe.call({method:"posawesome.posawesome.api.posapp.get_active_gift_coupons",args:{customer:e.customer,company:e.pos_profile.company},callback:function(r){r.message&&r.message.forEach(s=>{e.add_coupon(s)})}})},updatePosCoupons(e){this.posa_coupons.forEach(r=>{e.find(s=>s.offer_applied&&s.coupon==r.coupon)?r.applied=1:r.applied=0})},removeCoupon(e){this.posa_coupons=this.posa_coupons.filter(r=>!e.includes(r.coupon))},updateInvoice(){h.$emit("update_invoice_coupons",this.posa_coupons)},updateCounters(){h.$emit("update_coupons_counters",{couponsCount:this.couponsCount,appliedCouponsCount:this.appliedCouponsCount})}},watch:{posa_coupons:{deep:!0,handler(){this.updateInvoice(),this.updateCounters()}}},created:function(){this.$nextTick(function(){h.$on("register_pos_profile",e=>{this.pos_profile=e.pos_profile})}),h.$on("update_customer",e=>{if(this.customer!=e){let r=[];this.posa_coupons.forEach(i=>{i.type=="Promotional"?i.customer=e:r.push(i.coupon)}),this.customer=e,r.length&&this.removeCoupon(r)}this.setActiveGiftCoupons()}),h.$on("update_pos_coupons",e=>{this.updatePosCoupons(e)}),h.$on("set_pos_coupons",e=>{this.posa_coupons=e})}},Da=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",[i("v-card",{staticClass:"selection mx-auto grey lighten-5",staticStyle:{"max-height":"80vh",height:"80vh"}},[i("v-card-title",[i("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"6"}},[i("span",{staticClass:"text-h6 primary--text"},[e._v(e._s(e.__("Coupons")))])]),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{staticClass:"mr-4",attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Coupon"),"background-color":"white","hide-details":""},model:{value:e.new_coupon,callback:function(s){e.new_coupon=s},expression:"new_coupon"}})],1),e._v(" "),i("v-col",{attrs:{cols:"2"}},[i("v-btn",{staticClass:"pa-1",attrs:{color:"success",dark:""},on:{click:function(s){return e.add_coupon(e.new_coupon)}}},[e._v(e._s(e.__("add")))])],1)],1)],1),e._v(" "),i("div",{staticClass:"my-0 py-0 overflow-y-auto",staticStyle:{"max-height":"75vh"}},[[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.items_headers,items:e.posa_coupons,"single-expand":e.singleExpand,expanded:e.expanded,"item-key":"coupon","items-per-page":e.itemsPerPage,"hide-default-footer":""},on:{"update:expanded":function(s){e.expanded=s}},scopedSlots:e._u([{key:"item.applied",fn:function(s){var l=s.item;return[i("v-simple-checkbox",{attrs:{disabled:""},model:{value:l.applied,callback:function(p){e.$set(l,"applied",p)},expression:"item.applied"}})]}}])})]],2)],1),e._v(" "),i("v-card",{staticClass:"cards mb-0 mt-3 py-0",staticStyle:{"max-height":"11vh",height:"11vh"},attrs:{flat:""}},[i("v-row",{attrs:{align:"start","no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-btn",{staticClass:"pa-1",attrs:{block:"",large:"",color:"warning",dark:""},on:{click:e.back_to_invoice}},[e._v(e._s(e.__("Back")))])],1)],1)],1)],1)},yv=[];Da._withStripped=!0;var xv=void 0,bv=void 0,wv=void 0,kv=!1;function Cv(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/PosCoupons.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var Iv=Cv({render:Da,staticRenderFns:yv},xv,gv,bv,kv,wv,!1,void 0,void 0,void 0),Na=Iv;var Sv={mixins:[xe],data:()=>({draftsDialog:!1,singleSelect:!0,selected:[],dialog_data:{},headers:[{text:__("Customer"),value:"customer_name",align:"start",sortable:!0},{text:__("Date"),align:"start",sortable:!0,value:"posting_date"},{text:__("Time"),align:"start",sortable:!0,value:"posting_time"},{text:__("Invoice"),value:"name",align:"start",sortable:!0},{text:__("Amount"),value:"grand_total",align:"end",sortable:!1}]}),watch:{},methods:{close_dialog(){this.draftsDialog=!1},submit_dialog(){this.selected.length>0&&(h.$emit("load_invoice",this.selected[0]),this.draftsDialog=!1)}},created:function(){h.$on("open_drafts",e=>{this.draftsDialog=!0,this.dialog_data=e})}},Ba=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"900px"},model:{value:e.draftsDialog,callback:function(s){e.draftsDialog=s},expression:"draftsDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Select Hold Invoice")))])]),e._v(" "),i("v-card-text",{staticClass:"pa-0"},[i("v-container",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"pa-1",attrs:{cols:"12"}},[[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.dialog_data,"item-key":"name","single-select":e.singleSelect,"show-select":""},scopedSlots:e._u([{key:"item.posting_time",fn:function(s){var l=s.item;return[e._v(`
                    `+e._s(l.posting_time.split(".")[0])+`
                  `)]}},{key:"item.grand_total",fn:function(s){var l=s.item;return[e._v(`
                    `+e._s(e.currencySymbol(l.currency))+`
                    `+e._s(e.formtCurrency(l.grand_total))+`
                  `)]}}]),model:{value:e.selected,callback:function(s){e.selected=s},expression:"selected"}})]],2)],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error",dark:""},on:{click:e.close_dialog}},[e._v("Close")]),e._v(" "),i("v-btn",{attrs:{color:"success",dark:""},on:{click:e.submit_dialog}},[e._v("Select")])],1)],1)],1)],1)},$v=[];Ba._withStripped=!0;var Ov=void 0,Tv=void 0,Av=void 0,Rv=!1;function Ev(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/Drafts.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var Pv=Ev({render:Ba,staticRenderFns:$v},Ov,Sv,Tv,Rv,Av,!1,void 0,void 0,void 0),Ma=Pv;var qv={mixins:[xe],data:()=>({closingDialog:!1,itemsPerPage:20,dialog_data:{},pos_profile:"",headers:[{text:__("Mode of Payment"),value:"mode_of_payment",align:"start",sortable:!0},{text:__("Opening Amount"),align:"end",sortable:!0,value:"opening_amount"},{text:__("Closing Amount"),value:"closing_amount",align:"end",sortable:!0}],max25chars:e=>e.length<=20||"Input too long!",pagination:{}}),watch:{},methods:{close_dialog(){this.closingDialog=!1},submit_dialog(){h.$emit("submit_closing_pos",this.dialog_data),this.closingDialog=!1}},created:function(){h.$on("open_ClosingDialog",e=>{this.closingDialog=!0,this.dialog_data=e}),h.$on("register_pos_profile",e=>{this.pos_profile=e.pos_profile,this.pos_profile.hide_expected_amount||(this.headers.push({text:__("Expected Amount"),value:"expected_amount",align:"end",sortable:!1}),this.headers.push({text:__("Difference"),value:"difference",align:"end",sortable:!1}))})}},Ua=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"900px"},model:{value:e.closingDialog,callback:function(s){e.closingDialog=s},expression:"closingDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Closing POS Shift")))])]),e._v(" "),i("v-card-text",{staticClass:"pa-0"},[i("v-container",[i("v-row",[i("v-col",{staticClass:"pa-1",attrs:{cols:"12"}},[[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.dialog_data.payment_reconciliation,"item-key":"mode_of_payment","items-per-page":e.itemsPerPage,"hide-default-footer":""},scopedSlots:e._u([{key:"item.closing_amount",fn:function(s){return[i("v-edit-dialog",{attrs:{"return-value":s.item.closing_amount},on:{"update:returnValue":function(l){return e.$set(s.item,"closing_amount",l)},"update:return-value":function(l){return e.$set(s.item,"closing_amount",l)}},scopedSlots:e._u([{key:"input",fn:function(){return[i("v-text-field",{attrs:{rules:[e.max25chars],label:e.frappe._("Edit"),"single-line":"",counter:"",type:"number"},model:{value:s.item.closing_amount,callback:function(l){e.$set(s.item,"closing_amount",l)},expression:"props.item.closing_amount"}})]},proxy:!0}],null,!0)},[e._v(`
                      `+e._s(e.currencySymbol(e.pos_profile.currency))+`
                      `+e._s(e.formtCurrency(s.item.closing_amount))+`
                      `)])]}},{key:"item.difference",fn:function(s){var l=s.item;return[e._v(`
                    `+e._s(e.currencySymbol(e.pos_profile.currency))+`
                    `+e._s(l.difference=e.formtCurrency(l.expected_amount-l.closing_amount)))]}},{key:"item.opening_amount",fn:function(s){var l=s.item;return[e._v(`
                    `+e._s(e.currencySymbol(e.pos_profile.currency))+`
                    `+e._s(e.formtCurrency(l.opening_amount)))]}},{key:"item.expected_amount",fn:function(s){var l=s.item;return[e._v(`
                    `+e._s(e.currencySymbol(e.pos_profile.currency))+`
                    `+e._s(e.formtCurrency(l.expected_amount)))]}}])})]],2)],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error",dark:""},on:{click:e.close_dialog}},[e._v(e._s(e.__("Close")))]),e._v(" "),i("v-btn",{attrs:{color:"success",dark:""},on:{click:e.submit_dialog}},[e._v(e._s(e.__("Submit")))])],1)],1)],1)],1)},Fv=[];Ua._withStripped=!0;var Lv=void 0,Dv=void 0,Nv=void 0,Bv=!1;function Mv(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/ClosingDialog.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var Uv=Mv({render:Ua,staticRenderFns:Fv},Lv,qv,Dv,Bv,Nv,!1,void 0,void 0,void 0),Wa=Uv;var Wv={data:()=>({addressDialog:!1,address:{},customer:""}),methods:{close_dialog(){this.addressDialog=!1},submit_dialog(){let e=this;this.address.customer=this.customer,this.address.doctype="Customer",frappe.call({method:"posawesome.posawesome.api.posapp.make_address",args:{args:this.address},callback:r=>{r.exc||(h.$emit("add_the_new_address",r.message),h.$emit("show_mesage",{text:"Customer Address created successfully.",color:"success"}),e.addressDialog=!1,e.customer="",e.address={})}})}},created:function(){h.$on("open_new_address",e=>{this.addressDialog=!0,this.customer=e})}},Ga=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.addressDialog,callback:function(s){e.addressDialog=s},expression:"addressDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Add New Address")))])]),e._v(" "),i("v-card-text",{staticClass:"pa-0"},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{dense:"",color:"primary",label:e.frappe._("Address Name"),"background-color":"white","hide-details":""},model:{value:e.address.name,callback:function(s){e.$set(e.address,"name",s)},expression:"address.name"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{dense:"",color:"primary",label:e.frappe._("Address Line 1"),"background-color":"white","hide-details":""},model:{value:e.address.address_line1,callback:function(s){e.$set(e.address,"address_line1",s)},expression:"address.address_line1"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{dense:"",color:"primary",label:e.frappe._("Address Line 2"),"background-color":"white","hide-details":""},model:{value:e.address.address_line2,callback:function(s){e.$set(e.address,"address_line2",s)},expression:"address.address_line2"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{label:"City",dense:"",color:"primary","background-color":"white","hide-details":""},model:{value:e.address.city,callback:function(s){e.$set(e.address,"city",s)},expression:"address.city"}})],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{label:"State",dense:"","background-color":"white","hide-details":""},model:{value:e.address.state,callback:function(s){e.$set(e.address,"state",s)},expression:"address.state"}})],1)],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error",dark:""},on:{click:e.close_dialog}},[e._v(e._s(e.__("Close")))]),e._v(" "),i("v-btn",{attrs:{color:"success",dark:""},on:{click:e.submit_dialog}},[e._v(e._s(e.__("Submit")))])],1)],1)],1)],1)},Gv=[];Ga._withStripped=!0;var zv=void 0,Hv=void 0,jv=void 0,Jv=!1;function Kv(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/NewAddress.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var Qv=Kv({render:Ga,staticRenderFns:Gv},zv,Wv,Hv,Jv,jv,!1,void 0,void 0,void 0),za=Qv;var Xv={data:()=>({varaintsDialog:!1,parentItem:null,items:null,filters:{},filterdItems:[]}),computed:{variantsItems(){return this.parentItem?this.items.filter(e=>e.variant_of==this.parentItem.item_code):[]}},methods:{close_dialog(){this.varaintsDialog=!1},formtCurrency(e){return e=parseFloat(e),e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},updateFiltredItems(){this.$nextTick(function(){let e=[];if(Object.entries(this.filters).forEach(([r,i])=>{i&&e.push(i)}),!e.length)this.filterdItems=this.variantsItems;else{let r=[];this.filterdItems=[],this.variantsItems.forEach(i=>{let s=!0;i.item_attributes.forEach(l=>{this.filters[l.attribute]&&this.filters[l.attribute]!=l.attribute_value&&(s=!1)}),s&&!r.includes(i.item_code)&&(this.filterdItems.push(i),r.push(i.item_code))})}})},add_item(e){h.$emit("add_item",e),this.close_dialog()}},created:function(){h.$on("open_variants_model",(e,r)=>{this.varaintsDialog=!0,this.parentItem=e||null,this.items=r,this.filters={},this.$nextTick(function(){this.filterdItems=this.variantsItems})})}},Ha=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.varaintsDialog,callback:function(s){e.varaintsDialog=s},expression:"varaintsDialog"}},[i("v-card",{attrs:{"min-height":"500px"}},[i("v-card-title",[i("span",{staticClass:"headline primary--text"},[e._v("Select Item")]),e._v(" "),i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error",dark:""},on:{click:e.close_dialog}},[e._v("Close")])],1),e._v(" "),i("v-card-text",{staticClass:"pa-0"},[e.parentItem?i("v-container",[e._l(e.parentItem.attributes,function(s){return i("div",{key:s.attribute},[i("v-chip-group",{attrs:{"active-class":"green--text text--accent-4",column:""},model:{value:e.filters[s.attribute],callback:function(l){e.$set(e.filters,s.attribute,l)},expression:"filters[attr.attribute]"}},e._l(s.values,function(l){return i("v-chip",{key:l.abbr,attrs:{value:l.attribute_value,outlined:"",label:""},on:{click:e.updateFiltredItems}},[e._v(`
                `+e._s(l.attribute_value)+`
              `)])}),1),e._v(" "),i("v-divider",{staticClass:"p-0 m-0"})],1)}),e._v(" "),i("div",[i("v-row",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"500px"},attrs:{dense:""}},e._l(e.filterdItems,function(s,l){return i("v-col",{key:l,attrs:{xl:"2",lg:"3",md:"4",sm:"4",cols:"6","min-height":"50"}},[i("v-card",{attrs:{hover:"hover"},on:{click:function(p){return e.add_item(s)}}},[i("v-img",{staticClass:"white--text align-end",attrs:{src:s.image||"/assets/posawesome/js/posapp/components/pos/placeholder-image.png",gradient:"to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)",height:"100px"}},[i("v-card-text",{staticClass:"text-subtitle-2 px-1 pb-2",domProps:{textContent:e._s(s.item_name)}})],1),e._v(" "),i("v-card-text",{staticClass:"text--primary pa-1"},[i("div",{staticClass:"text-caption primary--text accent-3"},[e._v(`
                      `+e._s(s.rate||0)+" "+e._s(s.currency||"")+`
                    `)])])],1)],1)}),1)],1)],2):e._e()],1)],1)],1)],1)},Yv=[];Ha._withStripped=!0;var Vv=void 0,Zv=void 0,eg=void 0,tg=!1;function ng(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/Variants.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var ig=ng({render:Ha,staticRenderFns:Yv},Vv,Xv,Zv,tg,eg,!1,void 0,void 0,void 0),ja=ig;var og={mixins:[xe],data:()=>({invoicesDialog:!1,singleSelect:!0,selected:[],dialog_data:"",company:"",invoice_name:"",headers:[{text:__("Customer"),value:"customer",align:"start",sortable:!0},{text:__("Date"),align:"start",sortable:!0,value:"posting_date"},{text:__("Invoice"),value:"name",align:"start",sortable:!0},{text:__("Amount"),value:"grand_total",align:"end",sortable:!1}]}),watch:{},methods:{close_dialog(){this.invoicesDialog=!1},search_invoices_by_enter(e){e.keyCode===13&&this.search_invoices()},search_invoices(){let e=this;frappe.call({method:"posawesome.posawesome.api.posapp.search_invoices_for_return",args:{invoice_name:e.invoice_name,company:e.company},async:!1,callback:function(r){r.message&&(e.dialog_data=r.message)}})},submit_dialog(){if(this.selected.length>0){let e=this.selected[0],r={},i=[];e.items.forEach(l=>{let p=me({},l);p.qty=l.qty*-1,p.stock_qty=l.stock_qty*-1,p.amount=l.amount*-1,i.push(p)}),r.items=i,r.is_return=1,r.return_against=e.name,r.customer=e.customer;let s={invoice_doc:r,return_doc:e};h.$emit("load_return_invoice",s),this.invoicesDialog=!1}}},created:function(){h.$on("open_returns",e=>{this.invoicesDialog=!0,this.company=e,this.invoice_name="",this.dialog_data="",this.selected=[]})}},Ja=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"800px","min-width":"800px"},model:{value:e.invoicesDialog,callback:function(s){e.invoicesDialog=s},expression:"invoicesDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Select Return Invoice")))])]),e._v(" "),i("v-container",[i("v-row",{staticClass:"mb-4"},[i("v-text-field",{staticClass:"mx-4",attrs:{color:"primary",label:e.frappe._("Invoice ID"),"background-color":"white","hide-details":"",dense:"",clearable:""},model:{value:e.invoice_name,callback:function(s){e.invoice_name=s},expression:"invoice_name"}}),e._v(" "),i("v-btn",{staticClass:"ml-2",attrs:{text:"",color:"primary",dark:""},on:{click:e.search_invoices}},[e._v(e._s(e.__("Search")))])],1),e._v(" "),i("v-row",[e.dialog_data?i("v-col",{staticClass:"pa-1",attrs:{cols:"12"}},[[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.dialog_data,"item-key":"name","single-select":e.singleSelect,"show-select":""},scopedSlots:e._u([{key:"item.grand_total",fn:function(s){var l=s.item;return[e._v(`
                  `+e._s(e.currencySymbol(l.currency))+`
                  `+e._s(e.formtCurrency(l.grand_total)))]}}],null,!1,2124959345),model:{value:e.selected,callback:function(s){e.selected=s},expression:"selected"}})]],2):e._e()],1)],1),e._v(" "),i("v-card-actions",{staticClass:"mt-4"},[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error mx-2",dark:""},on:{click:e.close_dialog}},[e._v("Close")]),e._v(" "),e.selected.length?i("v-btn",{attrs:{color:"success",dark:""},on:{click:e.submit_dialog}},[e._v(e._s(e.__("Select")))]):e._e()],1)],1)],1)],1)},sg=[];Ja._withStripped=!0;var rg=void 0,ag=void 0,cg=void 0,lg=!1;function _g(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/Returns.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var ug=_g({render:Ja,staticRenderFns:sg},rg,og,ag,lg,cg,!1,void 0,void 0,void 0),Ka=ug;var pg={data:()=>({dialog:!1,singleSelect:!0,selected:[],dialog_data:"",company:"",customer:"",mode_of_payment:"",full_name:"",mobile_no:"",headers:[{text:__("Full Name"),value:"full_name",align:"start",sortable:!0},{text:__("Mobile No"),value:"mobile_no",align:"start",sortable:!0},{text:__("Amount"),value:"amount",align:"start",sortable:!0},{text:__("Date"),align:"start",sortable:!0,value:"posting_date"}]}),watch:{},methods:{close_dialog(){this.dialog=!1},search_by_enter(e){e.keyCode===13&&this.search()},search(){let e=this;frappe.call({method:"posawesome.posawesome.api.m_pesa.get_mpesa_draft_payments",args:{company:this.company,mode_of_payment:this.mode_of_payment,mobile_no:this.mobile_no,full_name:this.full_name},async:!1,callback:function(r){r.exc||(e.dialog_data=r.message)}})},submit_dialog(){let e=this;if(this.selected.length>0){let r=this.selected[0].name;frappe.call({method:"posawesome.posawesome.api.m_pesa.submit_mpesa_payment",args:{mpesa_payment:r,customer:this.customer},async:!1,callback:function(i){i.exc||(h.$emit("set_mpesa_payment",i.message),e.dialog=!1)}})}},formtCurrency(e){return e=parseFloat(e),e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}},created:function(){h.$on("open_mpesa_payments",e=>{this.dialog=!0,this.full_name="",this.mobile_no="",this.company=e.company,this.customer=e.customer,this.mode_of_payment=e.mode_of_payment,this.dialog_data="",this.selected=[]})},beforeDestroy(){h.$off("open_mpesa_payments")}},Qa=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"800px","min-width":"800px"},model:{value:e.dialog,callback:function(s){e.dialog=s},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline primary--text"},[e._v(e._s(e.__("Select Payment")))])]),e._v(" "),i("v-container",[i("v-row",{staticClass:"mb-4"},[i("v-text-field",{staticClass:"mx-4",attrs:{color:"primary",label:e.frappe._("Full Name"),"background-color":"white","hide-details":"",dense:"",clearable:""},model:{value:e.full_name,callback:function(s){e.full_name=s},expression:"full_name"}}),e._v(" "),i("v-text-field",{staticClass:"mx-4",attrs:{color:"primary",label:e.frappe._("Mobile No"),"background-color":"white","hide-details":"",dense:"",clearable:""},model:{value:e.mobile_no,callback:function(s){e.mobile_no=s},expression:"mobile_no"}}),e._v(" "),i("v-btn",{staticClass:"ml-2",attrs:{text:"",color:"primary",dark:""},on:{click:e.search}},[e._v(e._s(e.__("Search")))])],1),e._v(" "),i("v-row",[e.dialog_data?i("v-col",{staticClass:"pa-1",attrs:{cols:"12"}},[[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.dialog_data,"item-key":"name","single-select":e.singleSelect,"show-select":""},scopedSlots:e._u([{key:"item.amount",fn:function(s){var l=s.item;return[e._v(e._s(e.formtCurrency(l.amount)))]}},{key:"item.posting_date",fn:function(s){var l=s.item;return[e._v(e._s(l.posting_date.slice(0,16)))]}}],null,!1,3318502569),model:{value:e.selected,callback:function(s){e.selected=s},expression:"selected"}})]],2):e._e()],1)],1),e._v(" "),i("v-card-actions",{staticClass:"mt-4"},[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"error mx-2",dark:""},on:{click:e.close_dialog}},[e._v("Close")]),e._v(" "),e.selected.length?i("v-btn",{attrs:{color:"success",dark:""},on:{click:e.submit_dialog}},[e._v(e._s(e.__("Submit")))]):e._e()],1)],1)],1)],1)},dg=[];Qa._withStripped=!0;var fg=void 0,mg=void 0,hg=void 0,vg=!1;function gg(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};return f.__file="../posawesome/posawesome/public/js/posapp/components/pos/Mpesa-Payments.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s,f}var yg=gg({render:Qa,staticRenderFns:dg},fg,pg,mg,vg,hg,!1,void 0,void 0,void 0),Xa=yg;var xg={data:function(){return{dialog:!1,pos_profile:"",pos_opening_shift:"",payment:!1,offers:!1,coupons:!1}},components:{ItemsSelector:Sa,Invoice:Aa,OpeningDialog:Ea,Payments:qa,Drafts:Ma,ClosingDialog:Wa,Returns:Ka,PosOffers:La,PosCoupons:Na,NewAddress:za,Variants:ja,MpesaPayments:Xa},methods:{check_opening_entry(){return frappe.call("posawesome.posawesome.api.posapp.check_opening_shift",{user:frappe.session.user}).then(e=>{e.message?(this.pos_profile=e.message.pos_profile,this.pos_opening_shift=e.message.pos_opening_shift,this.get_offers(this.pos_profile.name),h.$emit("register_pos_profile",e.message),h.$emit("set_company",e.message.company),console.info("LoadPosProfile")):this.create_opening_voucher()})},create_opening_voucher(){this.dialog=!0},get_closing_data(){return frappe.call("posawesome.posawesome.doctype.pos_closing_shift.pos_closing_shift.make_closing_shift_from_opening",{opening_shift:this.pos_opening_shift}).then(e=>{e.message&&h.$emit("open_ClosingDialog",e.message)})},submit_closing_pos(e){frappe.call("posawesome.posawesome.doctype.pos_closing_shift.pos_closing_shift.submit_closing_shift",{closing_shift:e}).then(r=>{r.message?(h.$emit("show_mesage",{text:"POS Shift Closed",color:"success"}),this.check_opening_entry()):console.log(r)})},get_offers(e){return frappe.call("posawesome.posawesome.api.posapp.get_offers",{profile:e}).then(r=>{r.message&&(console.info("LoadOffers"),h.$emit("set_offers",r.message))})},get_pos_setting(){frappe.db.get_doc("POS Settings",void 0).then(e=>{h.$emit("set_pos_settings",e)})}},mounted:function(){this.$nextTick(function(){this.check_opening_entry(),this.get_pos_setting(),h.$on("close_opening_dialog",()=>{this.dialog=!1}),h.$on("register_pos_data",e=>{this.pos_profile=e.pos_profile,this.get_offers(this.pos_profile.name),this.pos_opening_shift=e.pos_opening_shift,h.$emit("register_pos_profile",e),console.info("LoadPosProfile")}),h.$on("show_payment",e=>{this.payment=e==="true",this.offers=!1,this.coupons=!1}),h.$on("show_offers",e=>{this.offers=e==="true",this.payment=!1,this.coupons=!1}),h.$on("show_coupons",e=>{this.coupons=e==="true",this.offers=!1,this.payment=!1}),h.$on("open_closing_dialog",()=>{this.get_closing_data()}),h.$on("submit_closing_pos",e=>{this.submit_closing_pos(e)})})},beforeDestroy(){h.$off("close_opening_dialog"),h.$off("register_pos_data"),h.$off("LoadPosProfile"),h.$off("show_offers"),h.$off("show_coupons"),h.$off("open_closing_dialog"),h.$off("submit_closing_pos")}},Ya=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"mt-2",attrs:{fluid:""}},[i("ClosingDialog"),e._v(" "),i("Drafts"),e._v(" "),i("Returns"),e._v(" "),i("NewAddress"),e._v(" "),i("MpesaPayments"),e._v(" "),i("Variants"),e._v(" "),e.dialog?i("OpeningDialog",{attrs:{dialog:e.dialog}}):e._e(),e._v(" "),i("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.dialog,expression:"!dialog"}]},[i("v-col",{directives:[{name:"show",rawName:"v-show",value:!e.payment&&!e.offers&&!e.coupons,expression:"!payment && !offers && !coupons"}],staticClass:"pos pr-0",attrs:{xl:"5",lg:"5",md:"5",sm:"5",cols:"12"}},[i("ItemsSelector")],1),e._v(" "),i("v-col",{directives:[{name:"show",rawName:"v-show",value:e.offers,expression:"offers"}],staticClass:"pos pr-0",attrs:{xl:"5",lg:"5",md:"5",sm:"5",cols:"12"}},[i("PosOffers")],1),e._v(" "),i("v-col",{directives:[{name:"show",rawName:"v-show",value:e.coupons,expression:"coupons"}],staticClass:"pos pr-0",attrs:{xl:"5",lg:"5",md:"5",sm:"5",cols:"12"}},[i("PosCoupons")],1),e._v(" "),i("v-col",{directives:[{name:"show",rawName:"v-show",value:e.payment,expression:"payment"}],staticClass:"pos pr-0",attrs:{xl:"5",lg:"5",md:"5",sm:"5",cols:"12"}},[i("Payments")],1),e._v(" "),i("v-col",{staticClass:"pos",attrs:{xl:"7",lg:"7",md:"7",sm:"7",cols:"12"}},[i("Invoice")],1)],1)],1)},bg=[];Ya._withStripped=!0;var wg=function(e){!e||e("data-v-c249490c_0",{source:`






































































































































































































































`,map:{version:3,sources:[],names:[],mappings:"",file:"Pos.vue"},media:void 0})},kg="data-v-c249490c",Cg=void 0,Ig=!1;function Sg(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};f.__file="../posawesome/posawesome/public/js/posapp/components/pos/Pos.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s;{let P;if(r&&(P=d?function(b){r.call(this,R(b,this.$root.$options.shadowRoot))}:function(b){r.call(this,T(b))}),P!==void 0)if(f.functional){let b=f.render;f.render=function(z,W){return P.call(W),b(z,W)}}else{let b=f.beforeCreate;f.beforeCreate=b?[].concat(b,P):[P]}}return f}function Lo(){let e=Lo.styles||(Lo.styles={}),r=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(s,l){if(document.querySelector('style[data-vue-ssr-id~="'+s+'"]'))return;let p=r?l.media||"default":s,d=e[p]||(e[p]={ids:[],parts:[],element:void 0});if(!d.ids.includes(s)){let T=l.source,S=d.ids.length;if(d.ids.push(s),r&&(d.element=d.element||document.querySelector("style[data-group="+p+"]")),!d.element){let R=document.head||document.getElementsByTagName("head")[0],f=d.element=document.createElement("style");f.type="text/css",l.media&&f.setAttribute("media",l.media),r&&(f.setAttribute("data-group",p),f.setAttribute("data-next-index","0")),R.appendChild(f)}if(r&&(S=parseInt(d.element.getAttribute("data-next-index")),d.element.setAttribute("data-next-index",S+1)),d.element.styleSheet)d.parts.push(T),d.element.styleSheet.cssText=d.parts.filter(Boolean).join(`
`);else{let R=document.createTextNode(T),f=d.element.childNodes;f[S]&&d.element.removeChild(f[S]),f.length?d.element.insertBefore(R,f[S]):d.element.appendChild(R)}}}}var $g=Sg({render:Ya,staticRenderFns:bg},wg,xg,kg,Ig,Cg,!1,Lo,void 0,void 0),Va=$g;var Og={mixins:[xe],data:function(){return{dialog:!1,pos_profile:"",pos_opening_shift:"",customer_name:"",customer_info:"",company:"",singleSelect:!1,invoices_loading:!1,unallocated_payments_loading:!1,mpesa_payments_loading:!1,payment_methods:[],outstanding_invoices:[],unallocated_payments:[],mpesa_payments:[],selected_invoices:[],selected_payments:[],selected_mpesa_payments:[],pos_profiles_list:[],pos_profile_search:"",payment_methods_list:[],mpesa_searchname:"",mpesa_search_mobile:"",invoices_headers:[{text:__("Invoice"),align:"start",sortable:!0,value:"name"},{text:__("Customer"),align:"start",sortable:!0,value:"customer_name"},{text:__("Date"),align:"start",sortable:!0,value:"posting_date"},{text:__("Due Date"),align:"start",sortable:!0,value:"due_date"},{text:__("Total"),align:"end",sortable:!0,value:"grand_total"},{text:__("Outstanding"),align:"end",sortable:!0,value:"outstanding_amount"}],unallocated_payments_headers:[{text:__("Payment ID"),align:"start",sortable:!0,value:"name"},{text:__("Customer"),align:"start",sortable:!0,value:"customer_name"},{text:__("Date"),align:"start",sortable:!0,value:"posting_date"},{text:__("Mode"),align:"start",sortable:!0,value:"mode_of_payment"},{text:__("Paid"),align:"end",sortable:!0,value:"paid_amount"},{text:__("Unallocated"),align:"end",sortable:!0,value:"unallocated_amount"}],mpesa_payment_headers:[{text:__("Payment ID"),align:"start",sortable:!0,value:"transid"},{text:__("Full Name"),align:"start",sortable:!0,value:"full_name"},{text:__("Nobile Number"),align:"start",sortable:!0,value:"mobile_no"},{text:__("Date"),align:"start",sortable:!0,value:"posting_date"},{text:__("Amount"),align:"end",sortable:!0,value:"amount"}]}},components:{Customer:ci,UpdateCustomer:ai},methods:{check_opening_entry(){return frappe.call("posawesome.posawesome.api.posapp.check_opening_shift",{user:frappe.session.user}).then(e=>{e.message?(this.pos_profile=e.message.pos_profile,this.pos_opening_shift=e.message.pos_opening_shift,this.company=e.message.company.name,h.$emit("payments_register_pos_profile",e.message),h.$emit("set_company",e.message.company),this.set_payment_methods(),this.pos_profile_search=e.message.pos_profile.name,this.pos_profiles_list.push(this.pos_profile_search),this.payment_methods_list=[],this.pos_profile.payments.forEach(r=>{this.payment_methods_list.push(r.mode_of_payment)}),this.get_available_pos_profiles(),this.get_outstanding_invoices(),this.get_draft_mpesa_payments_register()):this.create_opening_voucher()})},get_available_pos_profiles(){if(!!this.pos_profile.posa_allow_mpesa_reconcile_payments)return frappe.call("posawesome.posawesome.api.payment_entry.get_available_pos_profiles",{company:this.company,currency:this.pos_profile.currency}).then(e=>{e.message&&(this.pos_profiles_list=e.message)})},create_opening_voucher(){this.dialog=!0},fetch_customer_details(){let e=this;this.customer_name&&frappe.call({method:"posawesome.posawesome.api.posapp.get_customer_info",args:{customer:e.customer_name},async:!1,callback:r=>{let i=r.message;r.exc||(e.customer_info=me({},i),e.set_mpesa_search_params(),h.$emit("set_customer_info_to_edit",e.customer_info))}})},onInvoiceSelected(e){h.$emit("set_customer",e.item.customer)},get_outstanding_invoices(){return this.invoices_loading=!0,frappe.call("posawesome.posawesome.api.payment_entry.get_outstanding_invoices",{customer:this.customer_name,company:this.company,currency:this.pos_profile.currency,pos_profile_name:this.pos_profile_search}).then(e=>{e.message&&(this.outstanding_invoices=e.message,this.invoices_loading=!1)})},get_unallocated_payments(){if(!!this.pos_profile.posa_allow_reconcile_payments){if(this.unallocated_payments_loading=!0,!this.customer_name){this.unallocated_payments=[],this.unallocated_payments_loading=!1;return}return frappe.call("posawesome.posawesome.api.payment_entry.get_unallocated_payments",{customer:this.customer_name,company:this.company,currency:this.pos_profile.currency}).then(e=>{e.message&&(this.unallocated_payments=e.message,this.unallocated_payments_loading=!1)})}},set_mpesa_search_params(){!this.pos_profile.posa_allow_mpesa_reconcile_payments||!this.customer_name||(this.mpesa_search_name=this.customer_info.customer_name.split(" ")[0],this.customer_info.mobile_no&&(this.mpesa_search_mobile=this.customer_info.mobile_no.substring(0,4)+" ***** "+this.customer_info.mobile_no.substring(9)))},get_draft_mpesa_payments_register(){if(!this.pos_profile.posa_allow_mpesa_reconcile_payments)return;let e=this;return this.mpesa_payments_loading=!0,frappe.call("posawesome.posawesome.api.m_pesa.get_mpesa_draft_payments",{company:e.company,mode_of_payment:null,full_name:e.mpesa_search_name||null,mobile_no:e.mpesa_search_mobile||null,payment_methods_list:e.payment_methods_list}).then(r=>{r.message?e.mpesa_payments=r.message:e.mpesa_payments=[],e.mpesa_payments_loading=!1})},set_payment_methods(){!this.pos_profile.posa_allow_make_new_payments||(this.payment_methods=[],this.pos_profile.payments.forEach(e=>{this.payment_methods.push({mode_of_payment:e.mode_of_payment,amount:0,row_id:e.name})}))},clear_all(e=!0){this.customer_name="",e&&(this.customer_info=""),this.mpesa_search_mobile="",this.mpesa_search_name="",this.mpesa_payments=[],this.selected_mpesa_payments=[],this.outstanding_invoices=[],this.unallocated_payments=[],this.selected_invoices=[],this.selected_payments=[],this.selected_mpesa_payments=[],this.set_payment_methods()},submit(){let e=this.customer_name,r=this;if(!e){frappe.throw(__("Please select a customer"));return}if(this.total_selected_payments==0&&this.total_selected_mpesa_payments==0&&this.total_payment_methods==0){frappe.throw(__("Please make a payment or select an payment"));return}if(this.total_selected_payments>0&&this.selected_invoices.length==0){frappe.throw(__("Please select an invoice"));return}this.payment_methods.forEach(s=>{s.amount=flt(s.amount)});let i={};i.customer=e,i.company=this.company,i.currency=this.pos_profile.currency,i.pos_opening_shift_name=this.pos_opening_shift.name,i.pos_profile_name=this.pos_profile.name,i.pos_profile=this.pos_profile,i.payment_methods=this.payment_methods,i.selected_invoices=this.selected_invoices,i.selected_payments=this.selected_payments,i.total_selected_invoices=flt(this.total_selected_invoices),i.selected_mpesa_payments=this.selected_mpesa_payments,i.total_selected_payments=flt(this.total_selected_payments),i.total_payment_methods=flt(this.total_payment_methods),i.total_selected_mpesa_payments=flt(this.total_selected_mpesa_payments),frappe.call({method:"posawesome.posawesome.api.payment_entry.process_pos_payment",args:{payload:i},freeze:!0,freeze_message:__("Processing Payment"),callback:function(s){s.message&&(frappe.utils.play_sound("submit"),r.clear_all(!1),r.customer_name=e,r.get_outstanding_invoices(),r.get_unallocated_payments(),r.set_mpesa_search_params(),r.get_draft_mpesa_payments_register())}})}},computed:{total_outstanding_amount(){return this.outstanding_invoices.reduce((e,r)=>e+flt(r.outstanding_amount),0)},total_unallocated_amount(){return this.unallocated_payments.reduce((e,r)=>e+flt(r.unallocated_amount),0)},total_selected_invoices(){return this.selected_invoices.reduce((e,r)=>e+flt(r.outstanding_amount),0)},total_selected_payments(){return this.selected_payments.reduce((e,r)=>e+flt(r.unallocated_amount),0)},total_selected_mpesa_payments(){return this.selected_mpesa_payments.reduce((e,r)=>e+flt(r.amount),0)},total_payment_methods(){return this.payment_methods.reduce((e,r)=>e+flt(r.amount),0)},total_of_diff(){return flt(this.total_selected_invoices-this.total_selected_payments-this.total_selected_mpesa_payments-this.total_payment_methods)}},mounted:function(){this.$nextTick(function(){this.check_opening_entry(),h.$on("update_customer",e=>{this.clear_all(!0),this.customer_name=e,this.fetch_customer_details(),this.get_outstanding_invoices(),this.get_unallocated_payments(),this.get_draft_mpesa_payments_register()}),h.$on("fetch_customer_details",()=>{this.fetch_customer_details()})})},beforeDestroy(){h.$off("update_customer"),h.$off("fetch_customer_details")}},Za=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{attrs:{fluid:""}},[i("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.dialog,expression:"!dialog"}]},[i("v-col",{staticClass:"pb-2 pr-0",attrs:{md:"8",cols:"12"}},[i("v-card",{staticClass:"main mx-auto grey lighten-5 mt-3 p-3 pb-16 overflow-y-auto",staticStyle:{"max-height":"94vh",height:"94vh"}},[i("Customer"),e._v(" "),i("v-divider"),e._v(" "),i("div",[i("v-row",[i("v-col",{attrs:{md:"7",cols:"12"}},[i("p",[i("strong",[e._v(e._s(e.__("Invoices")))]),e._v(" "),e.total_outstanding_amount?i("span",{staticClass:"primary--text"},[e._v(e._s(e.__("- Total Outstanding"))+` :
                  `+e._s(e.currencySymbol(e.pos_profile.currency))+`
                  `+e._s(e.formtCurrency(e.total_outstanding_amount)))]):e._e()])]),e._v(" "),i("v-col",{attrs:{md:"5",cols:"12"}},[e.total_selected_invoices?i("p",{staticClass:"golden--text text-end"},[i("span",[e._v(e._s(e.__("Total Selected :")))]),e._v(" "),i("span",[e._v(`
                  `+e._s(e.currencySymbol(e.pos_profile.currency))+`
                  `+e._s(e.formtCurrency(e.total_selected_invoices))+`
                `)])]):e._e()])],1),e._v(" "),i("v-row",{staticClass:"mb-1",attrs:{align:"center","no-gutters":""}},[i("v-col",{attrs:{md:"4",cols:"12"}},[i("v-select",{attrs:{dense:"",outlined:"","hide-details":"",clearable:"","background-color":"white",items:e.pos_profiles_list,"item-value":"name",label:"Select POS Profile"},model:{value:e.pos_profile_search,callback:function(s){e.pos_profile_search=s},expression:"pos_profile_search"}})],1),e._v(" "),i("v-col"),e._v(" "),i("v-col",{attrs:{md:"3",cols:"12"}},[i("v-btn",{attrs:{block:"",color:"warning",dark:""},on:{click:e.get_outstanding_invoices}},[e._v(e._s(e.__("Search")))])],1)],1),e._v(" "),i("v-data-table",{staticClass:"elevation-1 mt-0",attrs:{headers:e.invoices_headers,items:e.outstanding_invoices,"item-key":"name","show-select":"",loading:e.invoices_loading,"checkbox-color":"primary"},on:{"item-selected":e.onInvoiceSelected},scopedSlots:e._u([{key:"item.grand_total",fn:function(s){var l=s.item;return[e._v(`
              `+e._s(e.currencySymbol(l.currency))+`
              `+e._s(e.formtCurrency(l.grand_total))+`
            `)]}},{key:"item.outstanding_amount",fn:function(s){var l=s.item;return[i("span",{staticClass:"primary--text"},[e._v(e._s(e.currencySymbol(l.currency))+`
                `+e._s(e.formtCurrency(l.outstanding_amount)))])]}}]),model:{value:e.selected_invoices,callback:function(s){e.selected_invoices=s},expression:"selected_invoices"}}),e._v(" "),i("v-divider")],1),e._v(" "),e.pos_profile.posa_allow_reconcile_payments&&e.unallocated_payments.length?i("div",[i("v-row",[i("v-col",{attrs:{md:"7",cols:"12"}},[i("p",[i("strong",[e._v(e._s(e.__("Payments")))]),e._v(" "),e.total_unallocated_amount?i("span",{staticClass:"primary--text"},[e._v(`
                  `+e._s(e.__("- Total Unallocated"))+` :
                  `+e._s(e.currencySymbol(e.pos_profile.currency))+`
                  `+e._s(e.formtCurrency(e.total_unallocated_amount))+`
                `)]):e._e()])]),e._v(" "),i("v-col",{attrs:{md:"5",cols:"12"}},[e.total_selected_payments?i("p",{staticClass:"golden--text text-end"},[i("span",[e._v(e._s(e.__("Total Selected :")))]),e._v(" "),i("span",[e._v(`
                  `+e._s(e.currencySymbol(e.pos_profile.currency))+`
                  `+e._s(e.formtCurrency(e.total_selected_payments))+`
                `)])]):e._e()])],1),e._v(" "),i("v-data-table",{staticClass:"elevation-1 mt-0",attrs:{headers:e.unallocated_payments_headers,items:e.unallocated_payments,"item-key":"name","single-select":e.singleSelect,"show-select":"",loading:e.unallocated_payments_loading,"checkbox-color":"primary"},scopedSlots:e._u([{key:"item.paid_amount",fn:function(s){var l=s.item;return[e._v(`
              `+e._s(e.currencySymbol(l.currency))+`
              `+e._s(e.formtCurrency(l.paid_amount))+`
            `)]}},{key:"item.unallocated_amount",fn:function(s){var l=s.item;return[i("span",{staticClass:"primary--text"},[e._v(e._s(e.currencySymbol(l.currency))+`
                `+e._s(e.formtCurrency(l.unallocated_amount)))])]}}],null,!1,2661194885),model:{value:e.selected_payments,callback:function(s){e.selected_payments=s},expression:"selected_payments"}}),e._v(" "),i("v-divider")],1):e._e(),e._v(" "),e.pos_profile.posa_allow_mpesa_reconcile_payments?i("div",[i("v-row",[i("v-col",{attrs:{md:"8",cols:"12"}},[i("p",[i("span",[i("strong",[e._v(e._s(e.__("Search Mpesa Payments")))])])])]),e._v(" "),e.total_selected_mpesa_payments?i("v-col",{attrs:{md:"4",cols:"12"}},[i("p",{staticClass:"golden--text text-end"},[i("span",[e._v(e._s(e.__("Total Selected :")))]),e._v(" "),i("span",[e._v(`
                  `+e._s(e.currencySymbol(e.pos_profile.currency))+`
                  `+e._s(e.formtCurrency(e.total_selected_mpesa_payments))+`
                `)])])]):e._e()],1),e._v(" "),i("v-row",{staticClass:"mb-1",attrs:{align:"center","no-gutters":""}},[i("v-col",{staticClass:"mr-1",attrs:{md:"4",cols:"12"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Search by Name"),"background-color":"white","hide-details":"",clearable:""},model:{value:e.mpesa_search_name,callback:function(s){e.mpesa_search_name=s},expression:"mpesa_search_name"}})],1),e._v(" "),i("v-col",{staticClass:"mr-1",attrs:{md:"4",cols:"12"}},[i("v-text-field",{attrs:{dense:"",outlined:"",color:"primary",label:e.frappe._("Search by Mobile"),"background-color":"white","hide-details":"",clearable:""},model:{value:e.mpesa_search_mobile,callback:function(s){e.mpesa_search_mobile=s},expression:"mpesa_search_mobile"}})],1),e._v(" "),i("v-col"),e._v(" "),i("v-col",{attrs:{md:"3",cols:"12"}},[i("v-btn",{attrs:{block:"",color:"warning",dark:""},on:{click:e.get_draft_mpesa_payments_register}},[e._v(e._s(e.__("Search")))])],1)],1),e._v(" "),i("v-data-table",{staticClass:"elevation-1 mt-0",attrs:{headers:e.mpesa_payment_headers,items:e.mpesa_payments,"item-key":"name","single-select":e.singleSelect,"show-select":"",loading:e.mpesa_payments_loading,"checkbox-color":"primary"},scopedSlots:e._u([{key:"item.amount",fn:function(s){var l=s.item;return[i("span",{staticClass:"primary--text"},[e._v(`
                `+e._s(e.currencySymbol(l.currency))+`
                `+e._s(e.formtCurrency(l.amount))+`
              `)])]}}],null,!1,3829442756),model:{value:e.selected_mpesa_payments,callback:function(s){e.selected_mpesa_payments=s},expression:"selected_mpesa_payments"}})],1):e._e()],1)],1),e._v(" "),i("v-col",{staticClass:"pb-3",attrs:{md:"4",cols:"12"}},[i("v-card",{staticClass:"invoices mx-auto grey lighten-5 mt-3 p-3",staticStyle:{"max-height":"94vh",height:"94vh"}},[i("strong",[i("h4",{staticClass:"primary--text"},[e._v("Totals")]),e._v(" "),i("v-row",[i("v-col",{staticClass:"mt-1",attrs:{md:"7"}},[i("span",[e._v(e._s(e.__("Total Invoices:")))])]),e._v(" "),i("v-col",{attrs:{md:"5"}},[i("v-text-field",{staticClass:"p-0 m-0",attrs:{dense:"",color:"primary","background-color":"white","hide-details":"",value:e.formtCurrency(e.total_selected_invoices),total_selected_invoices:"",readonly:"",flat:"",prefix:e.currencySymbol(e.pos_profile.currency)}})],1)],1),e._v(" "),e.total_selected_payments?i("v-row",[i("v-col",{staticClass:"mt-1",attrs:{md:"7"}},[i("span",[e._v(e._s(e.__("Total Payments:")))])]),e._v(" "),i("v-col",{attrs:{md:"5"}},[i("v-text-field",{staticClass:"p-0 m-0",attrs:{dense:"",color:"primary","background-color":"white","hide-details":"",value:e.formtCurrency(e.total_selected_payments),total_selected_payments:"",readonly:"",flat:"",prefix:e.currencySymbol(e.pos_profile.currency)}})],1)],1):e._e(),e._v(" "),e.total_selected_mpesa_payments?i("v-row",[i("v-col",{staticClass:"mt-1",attrs:{md:"7"}},[i("span",[e._v(e._s(e.__("Total Mpesa:")))])]),e._v(" "),i("v-col",{attrs:{md:"5"}},[i("v-text-field",{staticClass:"p-0 m-0",attrs:{dense:"",color:"primary","background-color":"white","hide-details":"",value:e.formtCurrency(e.total_selected_mpesa_payments),total_selected_mpesa_payments:"",readonly:"",flat:"",prefix:e.currencySymbol(e.pos_profile.currency)}})],1)],1):e._e(),e._v(" "),e.payment_methods.length?i("v-divider"):e._e(),e._v(" "),e.pos_profile.posa_allow_make_new_payments?i("div",[i("h4",{staticClass:"primary--text"},[e._v("Make New Payment")]),e._v(" "),e._l(e.payment_methods,function(s){return e.payment_methods.length?i("v-row",{key:s.row_id},[i("v-col",{attrs:{md:"7"}},[i("span",{staticClass:"mt-1"},[e._v(e._s(e.__(s.mode_of_payment))+":")])]),e._v(" "),i("v-col",{attrs:{md:"5"}},[i("v-text-field",{staticClass:"p-0 m-0",attrs:{dense:"",color:"primary","background-color":"white","hide-details":"",value:e.formtCurrency(s.amount),payments_methods:"",flat:"",prefix:e.currencySymbol(e.pos_profile.currency)},on:{change:function(l){return e.setFormatedCurrency(s,"amount",null,!0,l)}}})],1)],1):e._e()})],2):e._e(),e._v(" "),i("v-divider"),e._v(" "),i("v-row",[i("v-col",{attrs:{md:"7"}},[i("h4",{staticClass:"primary--text mt-1"},[e._v(e._s(e.__("Difference:")))])]),e._v(" "),i("v-col",{attrs:{md:"5"}},[i("v-text-field",{staticClass:"p-0 m-0",attrs:{dense:"",color:"primary","background-color":"white","hide-details":"",value:e.formtCurrency(e.total_of_diff),total_of_diff:"",flat:"",readonly:"",prefix:e.currencySymbol(e.pos_profile.currency)}})],1)],1)],1),e._v(" "),i("div",{staticClass:"pb-6 pr-6",staticStyle:{position:"absolute",bottom:"0",width:"100%"}},[i("v-btn",{attrs:{block:"",color:"primary",dark:""},on:{click:e.submit}},[e._v(`
            `+e._s(e.__("Submit"))+`
          `)])],1)])],1)],1)],1)},Tg=[];Za._withStripped=!0;var Ag=function(e){!e||e("data-v-25742d1c_0",{source:`
input[total_of_diff] {
  text-align: right;
}
input[payments_methods] {
  text-align: right;
}
input[total_selected_payments] {
  text-align: right;
}
input[total_selected_invoices] {
  text-align: right;
}
input[total_selected_mpesa_payments] {
  text-align: right;
}
`,map:{version:3,sources:["../posawesome/posawesome/public/js/posapp/components/payments/Pay.vue"],names:[],mappings:";AA+xBA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;AACA",file:"Pay.vue",sourcesContent:[`<template>
  <div fluid>
    <v-row v-show="!dialog">
      <v-col md="8" cols="12" class="pb-2 pr-0">
        <v-card
          class="main mx-auto grey lighten-5 mt-3 p-3 pb-16 overflow-y-auto"
          style="max-height: 94vh; height: 94vh"
        >
          <Customer></Customer>
          <v-divider></v-divider>
          <div>
            <v-row>
              <v-col md="7" cols="12">
                <p>
                  <strong>{{ __('Invoices') }}</strong>
                  <span v-if="total_outstanding_amount" class="primary--text"
                    >{{ __('- Total Outstanding') }} :
                    {{ currencySymbol(pos_profile.currency) }}
                    {{ formtCurrency(total_outstanding_amount) }}</span
                  >
                </p>
              </v-col>
              <v-col md="5" cols="12">
                <p v-if="total_selected_invoices" class="golden--text text-end">
                  <span>{{ __('Total Selected :') }}</span>
                  <span>
                    {{ currencySymbol(pos_profile.currency) }}
                    {{ formtCurrency(total_selected_invoices) }}
                  </span>
                </p>
              </v-col>
            </v-row>
            <v-row align="center" no-gutters class="mb-1">
              <v-col md="4" cols="12">
                <v-select
                  dense
                  outlined
                  hide-details
                  clearable
                  background-color="white"
                  v-model="pos_profile_search"
                  :items="pos_profiles_list"
                  item-value="name"
                  label="Select POS Profile"
                ></v-select>
              </v-col>
              <v-col> </v-col>
              <v-col md="3" cols="12">
                <v-btn
                  block
                  color="warning"
                  dark
                  @click="get_outstanding_invoices"
                  >{{ __('Search') }}</v-btn
                >
              </v-col>
            </v-row>
            <v-data-table
              :headers="invoices_headers"
              :items="outstanding_invoices"
              item-key="name"
              class="elevation-1 mt-0"
              show-select
              v-model="selected_invoices"
              :loading="invoices_loading"
              checkbox-color="primary"
              @item-selected="onInvoiceSelected"
            >
              <template v-slot:item.grand_total="{ item }">
                {{ currencySymbol(item.currency) }}
                {{ formtCurrency(item.grand_total) }}
              </template>
              <template v-slot:item.outstanding_amount="{ item }">
                <span class="primary--text"
                  >{{ currencySymbol(item.currency) }}
                  {{ formtCurrency(item.outstanding_amount) }}</span
                >
              </template>
            </v-data-table>
            <v-divider></v-divider>
          </div>
          <div
            v-if="
              pos_profile.posa_allow_reconcile_payments &&
              unallocated_payments.length
            "
          >
            <v-row>
              <v-col md="7" cols="12">
                <p>
                  <strong>{{ __('Payments') }}</strong>
                  <span v-if="total_unallocated_amount" class="primary--text">
                    {{ __('- Total Unallocated') }} :
                    {{ currencySymbol(pos_profile.currency) }}
                    {{ formtCurrency(total_unallocated_amount) }}
                  </span>
                </p>
              </v-col>
              <v-col md="5" cols="12">
                <p v-if="total_selected_payments" class="golden--text text-end">
                  <span>{{ __('Total Selected :') }}</span>
                  <span>
                    {{ currencySymbol(pos_profile.currency) }}
                    {{ formtCurrency(total_selected_payments) }}
                  </span>
                </p>
              </v-col>
            </v-row>
            <v-data-table
              :headers="unallocated_payments_headers"
              :items="unallocated_payments"
              item-key="name"
              class="elevation-1 mt-0"
              :single-select="singleSelect"
              show-select
              v-model="selected_payments"
              :loading="unallocated_payments_loading"
              checkbox-color="primary"
            >
              <template v-slot:item.paid_amount="{ item }">
                {{ currencySymbol(item.currency) }}
                {{ formtCurrency(item.paid_amount) }}
              </template>
              <template v-slot:item.unallocated_amount="{ item }">
                <span class="primary--text"
                  >{{ currencySymbol(item.currency) }}
                  {{ formtCurrency(item.unallocated_amount) }}</span
                >
              </template>
            </v-data-table>
            <v-divider></v-divider>
          </div>
          <div v-if="pos_profile.posa_allow_mpesa_reconcile_payments">
            <v-row>
              <v-col md="8" cols="12">
                <p>
                  <span
                    ><strong>{{ __('Search Mpesa Payments') }}</strong></span
                  >
                </p>
              </v-col>
              <v-col md="4" cols="12" v-if="total_selected_mpesa_payments">
                <p class="golden--text text-end">
                  <span>{{ __('Total Selected :') }}</span>
                  <span>
                    {{ currencySymbol(pos_profile.currency) }}
                    {{ formtCurrency(total_selected_mpesa_payments) }}
                  </span>
                </p>
              </v-col>
            </v-row>
            <v-row align="center" no-gutters class="mb-1">
              <v-col md="4" cols="12" class="mr-1">
                <v-text-field
                  dense
                  outlined
                  color="primary"
                  :label="frappe._('Search by Name')"
                  background-color="white"
                  hide-details
                  v-model="mpesa_search_name"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col md="4" cols="12" class="mr-1">
                <v-text-field
                  dense
                  outlined
                  color="primary"
                  :label="frappe._('Search by Mobile')"
                  background-color="white"
                  hide-details
                  v-model="mpesa_search_mobile"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col> </v-col>
              <v-col md="3" cols="12">
                <v-btn
                  block
                  color="warning"
                  dark
                  @click="get_draft_mpesa_payments_register"
                  >{{ __('Search') }}</v-btn
                >
              </v-col>
            </v-row>
            <v-data-table
              :headers="mpesa_payment_headers"
              :items="mpesa_payments"
              item-key="name"
              class="elevation-1 mt-0"
              :single-select="singleSelect"
              show-select
              v-model="selected_mpesa_payments"
              :loading="mpesa_payments_loading"
              checkbox-color="primary"
            >
              <template v-slot:item.amount="{ item }">
                <span class="primary--text">
                  {{ currencySymbol(item.currency) }}
                  {{ formtCurrency(item.amount) }}
                </span>
              </template>
            </v-data-table>
          </div>
        </v-card>
      </v-col>
      <v-col md="4" cols="12" class="pb-3">
        <v-card
          class="invoices mx-auto grey lighten-5 mt-3 p-3"
          style="max-height: 94vh; height: 94vh"
        >
          <strong>
            <h4 class="primary--text">Totals</h4>
            <v-row>
              <v-col md="7" class="mt-1">
                <span>{{ __('Total Invoices:') }}</span>
              </v-col>
              <v-col md="5">
                <v-text-field
                  class="p-0 m-0"
                  dense
                  color="primary"
                  background-color="white"
                  hide-details
                  :value="formtCurrency(total_selected_invoices)"
                  total_selected_invoices
                  readonly
                  flat
                  :prefix="currencySymbol(pos_profile.currency)"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row v-if="total_selected_payments">
              <v-col md="7" class="mt-1"
                ><span>{{ __('Total Payments:') }}</span></v-col
              >
              <v-col md="5">
                <v-text-field
                  class="p-0 m-0"
                  dense
                  color="primary"
                  background-color="white"
                  hide-details
                  :value="formtCurrency(total_selected_payments)"
                  total_selected_payments
                  readonly
                  flat
                  :prefix="currencySymbol(pos_profile.currency)"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row v-if="total_selected_mpesa_payments">
              <v-col md="7" class="mt-1"
                ><span>{{ __('Total Mpesa:') }}</span></v-col
              >
              <v-col md="5">
                <v-text-field
                  class="p-0 m-0"
                  dense
                  color="primary"
                  background-color="white"
                  hide-details
                  :value="formtCurrency(total_selected_mpesa_payments)"
                  total_selected_mpesa_payments
                  readonly
                  flat
                  :prefix="currencySymbol(pos_profile.currency)"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-divider v-if="payment_methods.length"></v-divider>
            <div v-if="pos_profile.posa_allow_make_new_payments">
              <h4 class="primary--text">Make New Payment</h4>
              <v-row
                v-if="payment_methods.length"
                v-for="method in payment_methods"
                :key="method.row_id"
              >
                <v-col md="7"
                  ><span class="mt-1">{{ __(method.mode_of_payment) }}:</span>
                </v-col>
                <v-col md="5"
                  ><v-text-field
                    class="p-0 m-0"
                    dense
                    color="primary"
                    background-color="white"
                    hide-details
                    :value="formtCurrency(method.amount)"
                    @change="
                      setFormatedCurrency(method, 'amount', null, true, $event)
                    "
                    payments_methods
                    flat
                    :prefix="currencySymbol(pos_profile.currency)"
                  ></v-text-field
                ></v-col>
              </v-row>
            </div>

            <v-divider></v-divider>
            <v-row>
              <v-col md="7">
                <h4 class="primary--text mt-1">{{ __('Difference:') }}</h4>
              </v-col>
              <v-col md="5">
                <v-text-field
                  class="p-0 m-0"
                  dense
                  color="primary"
                  background-color="white"
                  hide-details
                  :value="formtCurrency(total_of_diff)"
                  total_of_diff
                  flat
                  readonly
                  :prefix="currencySymbol(pos_profile.currency)"
                ></v-text-field>
              </v-col>
            </v-row>
          </strong>
          <div
            class="pb-6 pr-6"
            style="position: absolute; bottom: 0; width: 100%"
          >
            <v-btn block color="primary" dark @click="submit">
              {{ __('Submit') }}
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { evntBus } from '../../bus';
import format from '../../format';
import Customer from '../pos/Customer.vue';
import UpdateCustomer from '../pos/UpdateCustomer.vue';

export default {
  mixins: [format],
  data: function () {
    return {
      dialog: false,
      pos_profile: '',
      pos_opening_shift: '',
      customer_name: '',
      customer_info: '',
      company: '',
      singleSelect: false,
      invoices_loading: false,
      unallocated_payments_loading: false,
      mpesa_payments_loading: false,
      payment_methods: [],
      outstanding_invoices: [],
      unallocated_payments: [],
      mpesa_payments: [],
      selected_invoices: [],
      selected_payments: [],
      selected_mpesa_payments: [],
      pos_profiles_list: [],
      pos_profile_search: '',
      payment_methods_list: [],
      mpesa_searchname: '',
      mpesa_search_mobile: '',
      invoices_headers: [
        {
          text: __('Invoice'),
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: __('Customer'),
          align: 'start',
          sortable: true,
          value: 'customer_name',
        },
        {
          text: __('Date'),
          align: 'start',
          sortable: true,
          value: 'posting_date',
        },
        {
          text: __('Due Date'),
          align: 'start',
          sortable: true,
          value: 'due_date',
        },
        {
          text: __('Total'),
          align: 'end',
          sortable: true,
          value: 'grand_total',
        },
        {
          text: __('Outstanding'),
          align: 'end',
          sortable: true,
          value: 'outstanding_amount',
        },
      ],
      unallocated_payments_headers: [
        {
          text: __('Payment ID'),
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: __('Customer'),
          align: 'start',
          sortable: true,
          value: 'customer_name',
        },
        {
          text: __('Date'),
          align: 'start',
          sortable: true,
          value: 'posting_date',
        },
        {
          text: __('Mode'),
          align: 'start',
          sortable: true,
          value: 'mode_of_payment',
        },
        {
          text: __('Paid'),
          align: 'end',
          sortable: true,
          value: 'paid_amount',
        },
        {
          text: __('Unallocated'),
          align: 'end',
          sortable: true,
          value: 'unallocated_amount',
        },
      ],
      mpesa_payment_headers: [
        {
          text: __('Payment ID'),
          align: 'start',
          sortable: true,
          value: 'transid',
        },
        {
          text: __('Full Name'),
          align: 'start',
          sortable: true,
          value: 'full_name',
        },
        {
          text: __('Nobile Number'),
          align: 'start',
          sortable: true,
          value: 'mobile_no',
        },
        {
          text: __('Date'),
          align: 'start',
          sortable: true,
          value: 'posting_date',
        },
        {
          text: __('Amount'),
          align: 'end',
          sortable: true,
          value: 'amount',
        },
      ],
    };
  },

  components: {
    Customer,
    UpdateCustomer,
  },

  methods: {
    check_opening_entry() {
      return frappe
        .call('posawesome.posawesome.api.posapp.check_opening_shift', {
          user: frappe.session.user,
        })
        .then((r) => {
          if (r.message) {
            this.pos_profile = r.message.pos_profile;
            this.pos_opening_shift = r.message.pos_opening_shift;
            this.company = r.message.company.name;
            evntBus.$emit('payments_register_pos_profile', r.message);
            evntBus.$emit('set_company', r.message.company);
            this.set_payment_methods();
            this.pos_profile_search = r.message.pos_profile.name;
            this.pos_profiles_list.push(this.pos_profile_search);
            this.payment_methods_list = [];
            this.pos_profile.payments.forEach((element) => {
              this.payment_methods_list.push(element.mode_of_payment);
            });
            this.get_available_pos_profiles();
            this.get_outstanding_invoices();
            this.get_draft_mpesa_payments_register();
          } else {
            this.create_opening_voucher();
          }
        });
    },
    get_available_pos_profiles() {
      if (!this.pos_profile.posa_allow_mpesa_reconcile_payments) return;
      return frappe
        .call(
          'posawesome.posawesome.api.payment_entry.get_available_pos_profiles',
          {
            company: this.company,
            currency: this.pos_profile.currency,
          }
        )
        .then((r) => {
          if (r.message) {
            this.pos_profiles_list = r.message;
          }
        });
    },
    create_opening_voucher() {
      this.dialog = true;
    },
    fetch_customer_details() {
      const vm = this;
      if (this.customer_name) {
        frappe.call({
          method: 'posawesome.posawesome.api.posapp.get_customer_info',
          args: {
            customer: vm.customer_name,
          },
          async: false,
          callback: (r) => {
            const message = r.message;
            if (!r.exc) {
              vm.customer_info = {
                ...message,
              };
              vm.set_mpesa_search_params();
              evntBus.$emit('set_customer_info_to_edit', vm.customer_info);
            }
          },
        });
      }
    },
    onInvoiceSelected(event) {
      evntBus.$emit('set_customer', event.item.customer);
    },
    get_outstanding_invoices() {
      this.invoices_loading = true;
      return frappe
        .call(
          'posawesome.posawesome.api.payment_entry.get_outstanding_invoices',
          {
            customer: this.customer_name,
            company: this.company,
            currency: this.pos_profile.currency,
            pos_profile_name: this.pos_profile_search,
          }
        )
        .then((r) => {
          if (r.message) {
            this.outstanding_invoices = r.message;
            this.invoices_loading = false;
          }
        });
    },
    get_unallocated_payments() {
      if (!this.pos_profile.posa_allow_reconcile_payments) return;
      this.unallocated_payments_loading = true;
      if (!this.customer_name) {
        this.unallocated_payments = [];
        this.unallocated_payments_loading = false;
        return;
      }
      return frappe
        .call(
          'posawesome.posawesome.api.payment_entry.get_unallocated_payments',
          {
            customer: this.customer_name,
            company: this.company,
            currency: this.pos_profile.currency,
          }
        )
        .then((r) => {
          if (r.message) {
            this.unallocated_payments = r.message;
            this.unallocated_payments_loading = false;
          }
        });
    },
    set_mpesa_search_params() {
      if (!this.pos_profile.posa_allow_mpesa_reconcile_payments) return;
      if (!this.customer_name) return;
      this.mpesa_search_name = this.customer_info.customer_name.split(' ')[0];
      if (this.customer_info.mobile_no) {
        this.mpesa_search_mobile =
          this.customer_info.mobile_no.substring(0, 4) +
          ' ***** ' +
          this.customer_info.mobile_no.substring(9);
      }
    },
    get_draft_mpesa_payments_register() {
      if (!this.pos_profile.posa_allow_mpesa_reconcile_payments) return;
      const vm = this;
      this.mpesa_payments_loading = true;
      return frappe
        .call('posawesome.posawesome.api.m_pesa.get_mpesa_draft_payments', {
          company: vm.company,
          mode_of_payment: null,
          full_name: vm.mpesa_search_name || null,
          mobile_no: vm.mpesa_search_mobile || null,
          payment_methods_list: vm.payment_methods_list,
        })
        .then((r) => {
          if (r.message) {
            vm.mpesa_payments = r.message;
          } else {
            vm.mpesa_payments = [];
          }
          vm.mpesa_payments_loading = false;
        });
    },
    set_payment_methods() {
      // get payment methods from pos profile
      if (!this.pos_profile.posa_allow_make_new_payments) return;
      this.payment_methods = [];
      this.pos_profile.payments.forEach((method) => {
        this.payment_methods.push({
          mode_of_payment: method.mode_of_payment,
          amount: 0,
          row_id: method.name,
        });
      });
    },
    clear_all(with_customer_info = true) {
      this.customer_name = '';
      if (with_customer_info) {
        this.customer_info = '';
      }
      this.mpesa_search_mobile = '';
      this.mpesa_search_name = '';
      this.mpesa_payments = [];
      this.selected_mpesa_payments = [];
      this.outstanding_invoices = [];
      this.unallocated_payments = [];
      this.selected_invoices = [];
      this.selected_payments = [];
      this.selected_mpesa_payments = [];
      this.set_payment_methods();
    },
    submit() {
      const customer = this.customer_name;
      const vm = this;
      if (!customer) {
        frappe.throw(__('Please select a customer'));
        return;
      }
      if (
        this.total_selected_payments == 0 &&
        this.total_selected_mpesa_payments == 0 &&
        this.total_payment_methods == 0
      ) {
        frappe.throw(__('Please make a payment or select an payment'));
        return;
      }
      if (
        this.total_selected_payments > 0 &&
        this.selected_invoices.length == 0
      ) {
        frappe.throw(__('Please select an invoice'));
        return;
      }

      this.payment_methods.forEach((payment) => {
        payment.amount = flt(payment.amount);
      });

      const payload = {};
      payload.customer = customer;
      payload.company = this.company;
      payload.currency = this.pos_profile.currency;
      payload.pos_opening_shift_name = this.pos_opening_shift.name;
      payload.pos_profile_name = this.pos_profile.name;
      payload.pos_profile = this.pos_profile;
      payload.payment_methods = this.payment_methods;
      payload.selected_invoices = this.selected_invoices;
      payload.selected_payments = this.selected_payments;
      payload.total_selected_invoices = flt(this.total_selected_invoices);
      payload.selected_mpesa_payments = this.selected_mpesa_payments;
      payload.total_selected_payments = flt(this.total_selected_payments);
      payload.total_payment_methods = flt(this.total_payment_methods);
      payload.total_selected_mpesa_payments = flt(
        this.total_selected_mpesa_payments
      );

      frappe.call({
        method: 'posawesome.posawesome.api.payment_entry.process_pos_payment',
        args: { payload },
        freeze: true,
        freeze_message: __('Processing Payment'),
        callback: function (r) {
          if (r.message) {
            frappe.utils.play_sound('submit');
            vm.clear_all(false);
            vm.customer_name = customer;
            vm.get_outstanding_invoices();
            vm.get_unallocated_payments();
            vm.set_mpesa_search_params();
            vm.get_draft_mpesa_payments_register();
          }
        },
      });
    },
  },

  computed: {
    total_outstanding_amount() {
      return this.outstanding_invoices.reduce(
        (acc, cur) => acc + flt(cur.outstanding_amount),
        0
      );
    },
    total_unallocated_amount() {
      return this.unallocated_payments.reduce(
        (acc, cur) => acc + flt(cur.unallocated_amount),
        0
      );
    },
    total_selected_invoices() {
      return this.selected_invoices.reduce(
        (acc, cur) => acc + flt(cur.outstanding_amount),
        0
      );
    },
    total_selected_payments() {
      return this.selected_payments.reduce(
        (acc, cur) => acc + flt(cur.unallocated_amount),
        0
      );
    },
    total_selected_mpesa_payments() {
      return this.selected_mpesa_payments.reduce(
        (acc, cur) => acc + flt(cur.amount),
        0
      );
    },
    total_payment_methods() {
      return this.payment_methods.reduce(
        (acc, cur) => acc + flt(cur.amount),
        0
      );
    },
    total_of_diff() {
      return flt(
        this.total_selected_invoices -
          this.total_selected_payments -
          this.total_selected_mpesa_payments -
          this.total_payment_methods
      );
    },
  },

  mounted: function () {
    this.$nextTick(function () {
      this.check_opening_entry();
      evntBus.$on('update_customer', (customer_name) => {
        this.clear_all(true);
        this.customer_name = customer_name;
        this.fetch_customer_details();
        this.get_outstanding_invoices();
        this.get_unallocated_payments();
        this.get_draft_mpesa_payments_register();
      });
      evntBus.$on('fetch_customer_details', () => {
        this.fetch_customer_details();
      });
    });
  },
  beforeDestroy() {
    evntBus.$off('update_customer');
    evntBus.$off('fetch_customer_details');
  },
};
<\/script>

<style>
input[total_of_diff] {
  text-align: right;
}
input[payments_methods] {
  text-align: right;
}
input[total_selected_payments] {
  text-align: right;
}
input[total_selected_invoices] {
  text-align: right;
}
input[total_selected_mpesa_payments] {
  text-align: right;
}
</style>
`]},media:void 0})},Rg=void 0,Eg=void 0,Pg=!1;function qg(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};f.__file="../posawesome/posawesome/public/js/posapp/components/payments/Pay.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s;{let P;if(r&&(P=d?function(b){r.call(this,R(b,this.$root.$options.shadowRoot))}:function(b){r.call(this,T(b))}),P!==void 0)if(f.functional){let b=f.render;f.render=function(z,W){return P.call(W),b(z,W)}}else{let b=f.beforeCreate;f.beforeCreate=b?[].concat(b,P):[P]}}return f}function Do(){let e=Do.styles||(Do.styles={}),r=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(s,l){if(document.querySelector('style[data-vue-ssr-id~="'+s+'"]'))return;let p=r?l.media||"default":s,d=e[p]||(e[p]={ids:[],parts:[],element:void 0});if(!d.ids.includes(s)){let T=l.source,S=d.ids.length;if(d.ids.push(s),r&&(d.element=d.element||document.querySelector("style[data-group="+p+"]")),!d.element){let R=document.head||document.getElementsByTagName("head")[0],f=d.element=document.createElement("style");f.type="text/css",l.media&&f.setAttribute("media",l.media),r&&(f.setAttribute("data-group",p),f.setAttribute("data-next-index","0")),R.appendChild(f)}if(r&&(S=parseInt(d.element.getAttribute("data-next-index")),d.element.setAttribute("data-next-index",S+1)),d.element.styleSheet)d.parts.push(T),d.element.styleSheet.cssText=d.parts.filter(Boolean).join(`
`);else{let R=document.createTextNode(T),f=d.element.childNodes;f[S]&&d.element.removeChild(f[S]),f.length?d.element.insertBefore(R,f[S]):d.element.appendChild(R)}}}}var Fg=qg({render:Za,staticRenderFns:Tg},Ag,Og,Rg,Pg,Eg,!1,Do,void 0,void 0),ec=Fg;var Lg={data:function(){return{page:"POS"}},components:{Navbar:wa,POS:Va,Payments:ec},methods:{setPage(e){this.page=e},remove_frappe_nav(){this.$nextTick(function(){$(".page-head").remove(),$(".navbar.navbar-default.navbar-fixed-top").remove()})}},mounted(){this.remove_frappe_nav()},updated(){},created:function(){setTimeout(()=>{this.remove_frappe_nav()},1e3)}},tc=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-app",{staticClass:"container1"},[i("v-main",[i("Navbar",{on:{changePage:function(s){return e.setPage(s)}}}),e._v(" "),i(e.page,{tag:"component",staticClass:"mx-4 md-4"})],1)],1)},Dg=[];tc._withStripped=!0;var Ng=function(e){!e||e("data-v-bd9f1112_0",{source:`
.container1[data-v-bd9f1112] {
  margin-top: 0px;
}
`,map:{version:3,sources:["../posawesome/posawesome/public/js/posapp/Home.vue"],names:[],mappings:";AAiDA;EACA,eAAA;AACA",file:"Home.vue",sourcesContent:[`<template>
  <v-app class="container1">
    <v-main>
      <Navbar @changePage="setPage($event)"></Navbar>
      <component v-bind:is="page" class="mx-4 md-4"></component>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import POS from './components/pos/Pos.vue';
import Payments from './components/payments/Pay.vue';

export default {
  data: function () {
    return {
      page: 'POS',
    };
  },
  components: {
    Navbar,
    POS,
    Payments,
  },
  methods: {
    setPage(page) {
      this.page = page;
    },
    remove_frappe_nav() {
      this.$nextTick(function () {
        $('.page-head').remove();
        $('.navbar.navbar-default.navbar-fixed-top').remove();
      });
    },
  },
  mounted() {
    this.remove_frappe_nav();
  },
  updated() {},
  created: function () {
    setTimeout(() => {
      this.remove_frappe_nav();
    }, 1000);
  },
};
<\/script>

<style scoped>
.container1 {
  margin-top: 0px;
}
</style>
`]},media:void 0})},Bg="data-v-bd9f1112",Mg=void 0,Ug=!1;function Wg(e,r,i,s,l,p,d,T,S,R){let f=(typeof i=="function"?i.options:i)||{};f.__file="../posawesome/posawesome/public/js/posapp/Home.vue",f.render||(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,l&&(f.functional=!0)),f._scopeId=s;{let P;if(r&&(P=d?function(b){r.call(this,R(b,this.$root.$options.shadowRoot))}:function(b){r.call(this,T(b))}),P!==void 0)if(f.functional){let b=f.render;f.render=function(z,W){return P.call(W),b(z,W)}}else{let b=f.beforeCreate;f.beforeCreate=b?[].concat(b,P):[P]}}return f}function No(){let e=No.styles||(No.styles={}),r=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(s,l){if(document.querySelector('style[data-vue-ssr-id~="'+s+'"]'))return;let p=r?l.media||"default":s,d=e[p]||(e[p]={ids:[],parts:[],element:void 0});if(!d.ids.includes(s)){let T=l.source,S=d.ids.length;if(d.ids.push(s),r&&(d.element=d.element||document.querySelector("style[data-group="+p+"]")),!d.element){let R=document.head||document.getElementsByTagName("head")[0],f=d.element=document.createElement("style");f.type="text/css",l.media&&f.setAttribute("media",l.media),r&&(f.setAttribute("data-group",p),f.setAttribute("data-next-index","0")),R.appendChild(f)}if(r&&(S=parseInt(d.element.getAttribute("data-next-index")),d.element.setAttribute("data-next-index",S+1)),d.element.styleSheet)d.parts.push(T),d.element.styleSheet.cssText=d.parts.filter(Boolean).join(`
`);else{let R=document.createTextNode(T),f=d.element.childNodes;f[S]&&d.element.removeChild(f[S]),f.length?d.element.insertBefore(R,f[S]):d.element.appendChild(R)}}}}var Gg=Wg({render:tc,staticRenderFns:Dg},Ng,Lg,Bg,Ug,Mg,!1,No,void 0,void 0),nc=Gg;frappe.provide("frappe.PosApp");frappe.PosApp.posapp=class{constructor({parent:e}){this.$parent=$(document),this.page=e.page,this.make_body()}make_body(){this.$el=this.$parent.find(".main-section"),this.vue=new Vue({vuetify:new Vuetify({rtl:frappe.utils.is_rtl(),theme:{themes:{light:{background:"#FFFFFF",primary:"#0097A7",secondary:"#00BCD4",accent:"#9575CD",success:"#66BB6A",info:"#2196F3",warning:"#FF9800",error:"#E86674",orange:"#E65100",golden:"#A68C59",badge:"#F5528C",customPrimary:"#085294"}}}}),el:this.$el[0],data:{},render:e=>e(nc)})}setup_header(){}};})();
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
//# sourceMappingURL=posawesome.bundle.HSRFTJ2O.js.map
