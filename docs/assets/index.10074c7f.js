var cd=Object.defineProperty,ud=Object.defineProperties;var hd=Object.getOwnPropertyDescriptors;var fc=Object.getOwnPropertySymbols;var fd=Object.prototype.hasOwnProperty,dd=Object.prototype.propertyIsEnumerable;var dc=(a,e,t)=>e in a?cd(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,pc=(a,e)=>{for(var t in e||(e={}))fd.call(e,t)&&dc(a,t,e[t]);if(fc)for(var t of fc(e))dd.call(e,t)&&dc(a,t,e[t]);return a},mc=(a,e)=>ud(a,hd(e));const pd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};pd();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="141";const md=0,gc=1,gd=2,fh=1,_d=2,Ss=3,Us=0,Pn=1,Kr=2,xd=1,Ai=0,Hr=1,_c=2,xc=3,vc=4,vd=5,Nr=100,yd=101,Md=102,yc=103,Mc=104,Sd=200,bd=201,wd=202,Td=203,dh=204,ph=205,Ed=206,Ad=207,Cd=208,Ld=209,Dd=210,Pd=0,Rd=1,Id=2,ml=3,Fd=4,Od=5,Nd=6,zd=7,uo=0,Ud=1,kd=2,ai=0,Bd=1,Gd=2,Vd=3,Hd=4,Wd=5,mh=300,Jr=301,Qr=302,gl=303,_l=304,ho=306,xl=1e3,Cn=1001,vl=1002,jt=1003,Sc=1004,bc=1005,dn=1006,Xd=1007,fo=1008,hr=1009,qd=1010,Yd=1011,gh=1012,jd=1013,Ki=1014,Ji=1015,ks=1016,Zd=1017,$d=1018,Wr=1020,Kd=1021,Jd=1022,Ln=1023,Qd=1024,ep=1025,ir=1026,es=1027,tp=1028,np=1029,ip=1030,rp=1031,sp=1033,So=33776,bo=33777,wo=33778,To=33779,wc=35840,Tc=35841,Ec=35842,Ac=35843,ap=36196,Cc=37492,Lc=37496,Dc=37808,Pc=37809,Rc=37810,Ic=37811,Fc=37812,Oc=37813,Nc=37814,zc=37815,Uc=37816,kc=37817,Bc=37818,Gc=37819,Vc=37820,Hc=37821,Wc=36492,fr=3e3,nt=3001,op=3200,lp=3201,cs=0,cp=1,ti="srgb",Qi="srgb-linear",Eo=7680,up=519,Xc=35044,qc="300 es",yl=1035;class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Tt=[];for(let a=0;a<256;a++)Tt[a]=(a<16?"0":"")+a.toString(16);const Ao=Math.PI/180,Yc=180/Math.PI;function Js(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[a&255]+Tt[a>>8&255]+Tt[a>>16&255]+Tt[a>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Zt(a,e,t){return Math.max(e,Math.min(t,a))}function hp(a,e){return(a%e+e)%e}function Co(a,e,t){return(1-t)*a+t*e}function jc(a){return(a&a-1)===0&&a!==0}function Ml(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}class Ye{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],M=i[1],E=i[4],S=i[7],v=i[2],T=i[5],C=i[8];return r[0]=o*d+s*M+l*v,r[3]=o*p+s*E+l*T,r[6]=o*_+s*S+l*C,r[1]=c*d+u*M+h*v,r[4]=c*p+u*E+h*T,r[7]=c*_+u*S+h*C,r[2]=f*d+m*M+g*v,r[5]=f*p+m*E+g*T,r[8]=f*_+m*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-n*r*u+n*s*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,f=s*l-u*r,m=c*r-o*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(s*n-i*o)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-i*c,i*l,-i*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],s=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*s+n*u,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*s+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function _h(a){for(let e=a.length-1;e>=0;--e)if(a[e]>65535)return!0;return!1}function $a(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function rr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ua(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Lo={[ti]:{[Qi]:rr},[Qi]:{[ti]:Ua}},bn={legacyMode:!0,get workingColorSpace(){return Qi},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Lo[e]&&Lo[e][t]!==void 0){const n=Lo[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},wn={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Do(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function sa(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qi){return this.r=e,this.g=t,this.b=n,bn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qi){if(e=hp(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Do(o,r,e+1/3),this.g=Do(o,r,e),this.b=Do(o,r,e-1/3)}return bn.toWorkingColorSpace(this,i),this}setStyle(e,t=ti){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,bn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,bn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,bn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,bn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ti){const n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return bn.fromWorkingColorSpace(sa(this,mt),e),Zt(mt.r*255,0,255)<<16^Zt(mt.g*255,0,255)<<8^Zt(mt.b*255,0,255)<<0}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qi){bn.fromWorkingColorSpace(sa(this,mt),t);const n=mt.r,i=mt.g,r=mt.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=u<=.5?h/(o+s):h/(2-o-s),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qi){return bn.fromWorkingColorSpace(sa(this,mt),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=ti){return bn.fromWorkingColorSpace(sa(this,mt),e),e!==ti?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${mt.r*255|0},${mt.g*255|0},${mt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(wn),wn.h+=e,wn.s+=t,wn.l+=n,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ra);const n=Co(wn.h,ra.h,t),i=Co(wn.s,ra.s,t),r=Co(wn.l,ra.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=xh;let vr;class vh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=$a("canvas")),vr.width=e.width,vr.height=e.height;const n=vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=$a("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=rr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class yh{constructor(e=null){this.isSource=!0,this.uuid=Js(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(Po(i[o].image)):r.push(Po(i[o]))}else r=Po(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Po(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?vh.getDataURL(a):a.data?{data:Array.prototype.slice.call(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fp=0;class yn extends us{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=Cn,i=Cn,r=dn,o=fo,s=Ln,l=hr,c=1,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Js(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xl:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xl:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=mh;class Ft{constructor(e=0,t=0,n=0,i=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(m+1)/2,v=(_+1)/2,T=(u+f)/4,C=(h+d)/4,x=(g+p)/4;return E>S&&E>v?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=T/n,r=C/n):S>v?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=C/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-d)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oi extends us{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mh extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dp extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],d=r[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-s;const _=l*f+c*m+u*g+h*d,M=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const v=Math.sqrt(E),T=Math.atan2(v,_*M);p=Math.sin(p*T)/v,s=Math.sin(s*T)/v}const S=s*M;if(l=l*p+f*S,c=c*p+m*S,u=u*p+g*S,h=h*p+d*S,p===1-s){const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=s*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-s*m,e[t+2]=c*g+u*m+s*f-l*h,e[t+3]=u*g-s*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*s+i*c-r*l,this._y=i*u+o*l+r*s-n*c,this._z=r*u+o*c+n*l-i*s,this._w=o*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*i-s*n,u=l*n+s*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-s*i;return this.x=c*l+f*-r+u*-s-h*-o,this.y=u*l+f*-o+h*-r-c*-s,this.z=h*l+f*-s+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*o-n*l,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new z,Zc=new Qs;class ea{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,s=r.count;o<s;o++)zi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(zi)}else n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox),Io.applyMatrix4(e.matrixWorld),this.union(Io);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),aa.subVectors(this.max,ms),yr.subVectors(e.a,ms),Mr.subVectors(e.b,ms),Sr.subVectors(e.c,ms),pi.subVectors(Mr,yr),mi.subVectors(Sr,Mr),Ui.subVectors(yr,Sr);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ui.z,Ui.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ui.z,0,-Ui.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ui.y,Ui.x,0];return!Fo(t,yr,Mr,Sr,aa)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,yr,Mr,Sr,aa))?!1:(oa.crossVectors(pi,mi),t=[oa.x,oa.y,oa.z],Fo(t,yr,Mr,Sr,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return zi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new z,new z,new z,new z,new z,new z,new z,new z],zi=new z,Io=new ea,yr=new z,Mr=new z,Sr=new z,pi=new z,mi=new z,Ui=new z,ms=new z,aa=new z,oa=new z,ki=new z;function Fo(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){ki.fromArray(a,r);const s=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const pp=new ea,$c=new z,la=new z,Oo=new z;class Hl{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Oo.subVectors(e,this.center);const t=Oo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Oo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?la.set(0,0,1).multiplyScalar(e.radius):la.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint($c.copy(e.center).add(la)),this.expandByPoint($c.copy(e.center).sub(la)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new z,No=new z,ca=new z,gi=new z,zo=new z,ua=new z,Uo=new z;class mp{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.direction).multiplyScalar(t).add(this.origin),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){No.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(No);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ca),s=gi.dot(this.direction),l=-gi.dot(ca),c=gi.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-s,f=o*s-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+o*f+2*s)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+s)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+s)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ca).multiplyScalar(f).add(No),m}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,l=n+o;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,r){zo.subVectors(t,e),ua.subVectors(n,e),Uo.crossVectors(zo,ua);let o=this.direction.dot(Uo),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=s*this.direction.dot(ua.crossVectors(gi,ua));if(l<0)return null;const c=s*this.direction.dot(zo.cross(gi));if(c<0||l+c>o)return null;const u=-s*gi.dot(Uo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,s,l,c,u,h,f,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,g=s*u,d=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-d*c,t[9]=-s*l,t[2]=d-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f+d*s,t[4]=g*s-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=m*s-g,t[6]=d+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f-d*s,t[4]=-o*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*u,t[9]=d-f*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=s*u,d=s*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=s*l,d=s*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=s*l,d=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),_i.crossVectors(n,en),_i.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),_i.crossVectors(n,en)),_i.normalize(),ha.crossVectors(en,_i),i[0]=_i.x,i[4]=ha.x,i[8]=en.x,i[1]=_i.y,i[5]=ha.y,i[9]=en.y,i[2]=_i.z,i[6]=ha.z,i[10]=en.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],M=n[3],E=n[7],S=n[11],v=n[15],T=i[0],C=i[4],x=i[8],w=i[12],R=i[1],I=i[5],Y=i[9],Z=i[13],P=i[2],U=i[6],N=i[10],B=i[14],H=i[3],V=i[7],L=i[11],Q=i[15];return r[0]=o*T+s*R+l*P+c*H,r[4]=o*C+s*I+l*U+c*V,r[8]=o*x+s*Y+l*N+c*L,r[12]=o*w+s*Z+l*B+c*Q,r[1]=u*T+h*R+f*P+m*H,r[5]=u*C+h*I+f*U+m*V,r[9]=u*x+h*Y+f*N+m*L,r[13]=u*w+h*Z+f*B+m*Q,r[2]=g*T+d*R+p*P+_*H,r[6]=g*C+d*I+p*U+_*V,r[10]=g*x+d*Y+p*N+_*L,r[14]=g*w+d*Z+p*B+_*Q,r[3]=M*T+E*R+S*P+v*H,r[7]=M*C+E*I+S*U+v*V,r[11]=M*x+E*Y+S*N+v*L,r[15]=M*w+E*Z+S*B+v*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*s*f+n*c*f+i*s*m-n*l*m)+d*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*u-r*l*u)+p*(+t*c*h-t*s*m-r*o*h+n*o*m+r*s*u-n*c*u)+_*(-i*s*u-t*l*h+t*s*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],M=h*p*c-d*f*c+d*l*m-s*p*m-h*l*_+s*f*_,E=g*f*c-u*p*c-g*l*m+o*p*m+u*l*_-o*f*_,S=u*d*c-g*h*c+g*s*m-o*d*m-u*s*_+o*h*_,v=g*h*l-u*d*l-g*s*f+o*d*f+u*s*p-o*h*p,T=t*M+n*E+i*S+r*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=M*C,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*C,e[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*_+n*l*_)*C,e[3]=(h*l*r-s*f*r-h*i*c+n*f*c+s*i*m-n*l*m)*C,e[4]=E*C,e[5]=(u*p*r-g*f*r+g*i*m-t*p*m-u*i*_+t*f*_)*C,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*_-t*l*_)*C,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*m+t*l*m)*C,e[8]=S*C,e[9]=(g*h*r-u*d*r-g*n*m+t*d*m+u*n*_-t*h*_)*C,e[10]=(o*d*r-g*s*r+g*n*c-t*d*c-o*n*_+t*s*_)*C,e[11]=(u*s*r-o*h*r-u*n*c+t*h*c+o*n*m-t*s*m)*C,e[12]=v*C,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*p+t*h*p)*C,e[14]=(g*s*i-o*d*i-g*n*l+t*d*l+o*n*p-t*s*p)*C,e[15]=(o*h*i-u*s*i+u*n*l-t*h*l-o*n*f+t*s*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,l=e.z,c=r*o,u=r*s;return this.set(c*o+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*o,0,c*l-i*s,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,l=t._w,c=r+r,u=o+o,h=s+s,f=r*c,m=r*u,g=r*h,d=o*u,p=o*h,_=s*h,M=l*c,E=l*u,S=l*h,v=n.x,T=n.y,C=n.z;return i[0]=(1-(d+_))*v,i[1]=(m+S)*v,i[2]=(g-E)*v,i[3]=0,i[4]=(m-S)*T,i[5]=(1-(f+_))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(g+E)*C,i[9]=(p-M)*C,i[10]=(1-(f+d))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=br.set(i[0],i[1],i[2]).length();const o=br.set(i[4],i[5],i[6]).length(),s=br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const c=1/r,u=1/o,h=1/s;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,o){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,f=(n+i)*c,m=(o+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const br=new z,Tn=new Ot,gp=new z(0,0,0),_p=new z(1,1,1),_i=new z,ha=new z,en=new z,Kc=new Ot,Jc=new Qs;class ta{constructor(e=0,t=0,n=0,i=ta.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ta.DefaultOrder="XYZ";ta.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xp=0;const Qc=new z,wr=new Qs,Jn=new Ot,fa=new z,gs=new z,vp=new z,yp=new Qs,eu=new z(1,0,0),tu=new z(0,1,0),nu=new z(0,0,1),Mp={type:"added"},iu={type:"removed"};class Mn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DefaultUp.clone();const e=new z,t=new ta,n=new Qs,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Xn}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Mn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(nu,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(nu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(gs,fa,this.up):Jn.lookAt(fa,gs,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),wr.setFromRotationMatrix(Jn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(iu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mn.DefaultUp=new z(0,1,0);Mn.DefaultMatrixAutoUpdate=!0;const En=new z,Qn=new z,ko=new z,ei=new z,Tr=new z,Er=new z,ru=new z,Bo=new z,Go=new z,Vo=new z;class Vn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),Qn.subVectors(n,t),ko.subVectors(e,t);const o=En.dot(En),s=En.dot(Qn),l=En.dot(ko),c=Qn.dot(Qn),u=Qn.dot(ko),h=o*c-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-s*u)*f,g=(o*u-s*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ei),ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,n,i,r,o,s,l){return this.getBarycoord(e,t,n,i,ei),l.set(0,0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(s,ei.z),l}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),Qn.subVectors(e,t),En.cross(Qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),En.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Vn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;Tr.subVectors(i,n),Er.subVectors(r,n),Bo.subVectors(e,n);const l=Tr.dot(Bo),c=Er.dot(Bo);if(l<=0&&c<=0)return t.copy(n);Go.subVectors(e,i);const u=Tr.dot(Go),h=Er.dot(Go);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Tr,o);Vo.subVectors(e,r);const m=Tr.dot(Vo),g=Er.dot(Vo);if(g>=0&&m<=g)return t.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Er,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return ru.subVectors(r,i),s=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(ru,s);const _=1/(p+d+f);return o=d*_,s=f*_,t.copy(n).addScaledVector(Tr,o).addScaledVector(Er,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Sp=0;class Lt extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Hr,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=dh,this.blendDst=ph,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===xd;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==Us&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Lt.fromType=function(){return null};class Wl extends Lt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new z,da=new Ye;class Yn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Xc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Fe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Ye),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new z),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ft),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class bh extends Yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wh extends Yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sr extends Yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bp=0;const ln=new Ot,Ho=new Mn,Ar=new z,tn=new ea,_s=new ea,vt=new z;class gr extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?wh:bh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];_s.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(tn.min,_s.min),tn.expandByPoint(vt),vt.addVectors(tn.max,_s.max),tn.expandByPoint(vt)):(tn.expandByPoint(_s.min),tn.expandByPoint(_s.max))}tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)vt.fromBufferAttribute(s,c),l&&(Ar.fromBufferAttribute(e,c),vt.add(Ar)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<s;R++)c[R]=new z,u[R]=new z;const h=new z,f=new z,m=new z,g=new Ye,d=new Ye,p=new Ye,_=new z,M=new z;function E(R,I,Y){h.fromArray(i,R*3),f.fromArray(i,I*3),m.fromArray(i,Y*3),g.fromArray(o,R*2),d.fromArray(o,I*2),p.fromArray(o,Y*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const Z=1/(d.x*p.y-p.x*d.y);!isFinite(Z)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(Z),M.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(Z),c[R].add(_),c[I].add(_),c[Y].add(_),u[R].add(M),u[I].add(M),u[Y].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,I=S.length;R<I;++R){const Y=S[R],Z=Y.start,P=Y.count;for(let U=Z,N=Z+P;U<N;U+=3)E(n[U+0],n[U+1],n[U+2])}const v=new z,T=new z,C=new z,x=new z;function w(R){C.fromArray(r,R*3),x.copy(C);const I=c[R];v.copy(I),v.sub(C.multiplyScalar(C.dot(I))).normalize(),T.crossVectors(x,I);const Z=T.dot(u[R])<0?-1:1;l[R*4]=v.x,l[R*4+1]=v.y,l[R*4+2]=v.z,l[R*4+3]=Z}for(let R=0,I=S.length;R<I;++R){const Y=S[R],Z=Y.start,P=Y.count;for(let U=Z,N=Z+P;U<N;U+=3)w(n[U+0]),w(n[U+1]),w(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,o=new z,s=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,s=e.attributes[i],l=s.array,c=s.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new Yn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gr,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new Ot,Cr=new mp,Wo=new Hl,xi=new z,vi=new z,yi=new z,Xo=new z,qo=new z,Yo=new z,pa=new z,ma=new z,ga=new z,_a=new Ye,xa=new Ye,va=new Ye,jo=new z,ya=new z;class qn extends Mn{constructor(e=new gr,t=new Wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),e.ray.intersectsSphere(Wo)===!1)||(su.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(su),n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1))return;let o;const s=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(s!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],M=i[_.materialIndex],E=Math.max(_.start,g.start),S=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let v=E,T=S;v<T;v+=3){const C=s.getX(v),x=s.getX(v+1),w=s.getX(v+2);o=Ma(this,M,e,Cr,l,c,u,h,f,C,x,w),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let _=d,M=p;_<M;_+=3){const E=s.getX(_),S=s.getX(_+1),v=s.getX(_+2);o=Ma(this,i,e,Cr,l,c,u,h,f,E,S,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],M=i[_.materialIndex],E=Math.max(_.start,g.start),S=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let v=E,T=S;v<T;v+=3){const C=v,x=v+1,w=v+2;o=Ma(this,M,e,Cr,l,c,u,h,f,C,x,w),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,M=p;_<M;_+=3){const E=_,S=_+1,v=_+2;o=Ma(this,i,e,Cr,l,c,u,h,f,E,S,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function wp(a,e,t,n,i,r,o,s){let l;if(e.side===Pn?l=n.intersectTriangle(o,r,i,!0,s):l=n.intersectTriangle(i,r,o,e.side!==Kr,s),l===null)return null;ya.copy(s),ya.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:a}}function Ma(a,e,t,n,i,r,o,s,l,c,u,h){xi.fromBufferAttribute(i,c),vi.fromBufferAttribute(i,u),yi.fromBufferAttribute(i,h);const f=a.morphTargetInfluences;if(r&&f){pa.set(0,0,0),ma.set(0,0,0),ga.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(Xo.fromBufferAttribute(_,c),qo.fromBufferAttribute(_,u),Yo.fromBufferAttribute(_,h),o?(pa.addScaledVector(Xo,p),ma.addScaledVector(qo,p),ga.addScaledVector(Yo,p)):(pa.addScaledVector(Xo.sub(xi),p),ma.addScaledVector(qo.sub(vi),p),ga.addScaledVector(Yo.sub(yi),p)))}xi.add(pa),vi.add(ma),yi.add(ga)}a.isSkinnedMesh&&(a.boneTransform(c,xi),a.boneTransform(u,vi),a.boneTransform(h,yi));const m=wp(a,e,t,n,xi,vi,yi,jo);if(m){s&&(_a.fromBufferAttribute(s,c),xa.fromBufferAttribute(s,u),va.fromBufferAttribute(s,h),m.uv=Vn.getUV(jo,xi,vi,yi,_a,xa,va,new Ye)),l&&(_a.fromBufferAttribute(l,c),xa.fromBufferAttribute(l,u),va.fromBufferAttribute(l,h),m.uv2=Vn.getUV(jo,xi,vi,yi,_a,xa,va,new Ye));const g={a:c,b:u,c:h,normal:new z,materialIndex:0};Vn.getNormal(xi,vi,yi,g.normal),m.face=g}return m}class hs extends gr{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new sr(c,3)),this.setAttribute("normal",new sr(u,3)),this.setAttribute("uv",new sr(h,2));function g(d,p,_,M,E,S,v,T,C,x,w){const R=S/C,I=v/x,Y=S/2,Z=v/2,P=T/2,U=C+1,N=x+1;let B=0,H=0;const V=new z;for(let L=0;L<N;L++){const Q=L*I-Z;for(let ee=0;ee<U;ee++){const J=ee*R-Y;V[d]=J*M,V[p]=Q*E,V[_]=P,c.push(V.x,V.y,V.z),V[d]=0,V[p]=0,V[_]=T>0?1:-1,u.push(V.x,V.y,V.z),h.push(ee/C),h.push(1-L/x),B+=1}}for(let L=0;L<x;L++)for(let Q=0;Q<C;Q++){const ee=f+Q+U*L,J=f+Q+U*(L+1),ce=f+(Q+1)+U*(L+1),Me=f+(Q+1)+U*L;l.push(ee,J,Me),l.push(J,ce,Me),H+=6}s.addGroup(m,H,w),m+=H,f+=B}}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(a){const e={};for(let t=0;t<a.length;t++){const n=ts(a[t]);for(const i in n)e[i]=n[i]}return e}const Tp={clone:ts,merge:Pt};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Lt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ep,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Th extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends Th{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yc*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=90,Dr=1;class Cp extends Mn{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new pn(Lr,Dr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new z(1,0,0)),this.add(i);const r=new pn(Lr,Dr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(-1,0,0)),this.add(r);const o=new pn(Lr,Dr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new z(0,1,0)),this.add(o);const s=new pn(Lr,Dr,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new z(0,-1,0)),this.add(s);const l=new pn(Lr,Dr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const c=new pn(Lr,Dr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new z(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ai,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Eh extends yn{constructor(e,t,n,i,r,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,n,i,r,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lp extends oi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hs(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Ai});r.uniforms.tEquirect.value=t;const o=new qn(i,r),s=t.minFilter;return t.minFilter===fo&&(t.minFilter=dn),new Cp(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Zo=new z,Dp=new z,Pp=new Xn;class Vi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zo.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pp.getNormalMatrix(e),i=this.coplanarPoint(Zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Hl,Sa=new z;class Ah{constructor(e=new Vi,t=new Vi,n=new Vi,i=new Vi,r=new Vi,o=new Vi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],M=n[14],E=n[15];return t[0].setComponents(s-i,h-l,d-f,E-p).normalize(),t[1].setComponents(s+i,h+l,d+f,E+p).normalize(),t[2].setComponents(s+r,h+c,d+m,E+_).normalize(),t[3].setComponents(s-r,h-c,d-m,E-_).normalize(),t[4].setComponents(s-o,h-u,d-g,E-M).normalize(),t[5].setComponents(s+o,h+u,d+g,E+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sa.x=i.normal.x>0?e.max.x:e.min.x,Sa.y=i.normal.y>0?e.max.y:e.min.y,Sa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ch(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Rp(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;a.bindBuffer(h,c),m.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):a.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:s,update:l}}class po extends gr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=e/s,f=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const M=_*f-o;for(let E=0;E<c;E++){const S=E*h-r;g.push(S,-M,0),d.push(0,0,1),p.push(E/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<s;M++){const E=M+c*_,S=M+c*(_+1),v=M+1+c*(_+1),T=M+1+c*_;m.push(E,S,T),m.push(S,v,T)}this.setIndex(m),this.setAttribute("position",new sr(g,3)),this.setAttribute("normal",new sr(d,3)),this.setAttribute("uv",new sr(p,2))}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp="vec3 transformed = vec3( position );",Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Vp=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,em=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,_m=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,ym=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ug=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,bg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,wg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Tg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Eg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Cg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$g=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,a_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:Ip,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Np,aomap_fragment:zp,aomap_pars_fragment:Up,begin_vertex:kp,beginnormal_vertex:Bp,bsdfs:Gp,iridescence_fragment:Vp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:jp,color_pars_fragment:Zp,color_pars_vertex:$p,color_vertex:Kp,common:Jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:rm,encodings_fragment:sm,encodings_pars_fragment:am,envmap_fragment:om,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Mm,envmap_vertex:hm,fog_vertex:fm,fog_pars_vertex:dm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_fragment:_m,lightmap_pars_fragment:xm,lights_lambert_vertex:vm,lights_pars_begin:ym,lights_toon_fragment:Sm,lights_toon_pars_fragment:bm,lights_phong_fragment:wm,lights_phong_pars_fragment:Tm,lights_physical_fragment:Em,lights_physical_pars_fragment:Am,lights_fragment_begin:Cm,lights_fragment_maps:Lm,lights_fragment_end:Dm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Fm,map_fragment:Om,map_pars_fragment:Nm,map_particle_fragment:zm,map_particle_pars_fragment:Um,metalnessmap_fragment:km,metalnessmap_pars_fragment:Bm,morphcolor_vertex:Gm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:jm,normal_vertex:Zm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:eg,output_fragment:tg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:rg,dithering_fragment:sg,dithering_pars_fragment:ag,roughnessmap_fragment:og,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:ug,shadowmap_vertex:hg,shadowmask_pars_fragment:fg,skinbase_vertex:dg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:_g,specularmap_pars_fragment:xg,tonemapping_fragment:vg,tonemapping_pars_fragment:yg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:bg,uv_pars_vertex:wg,uv_vertex:Tg,uv2_pars_fragment:Eg,uv2_pars_vertex:Ag,uv2_vertex:Cg,worldpos_vertex:Lg,background_vert:Dg,background_frag:Pg,cube_vert:Rg,cube_frag:Ig,depth_vert:Fg,depth_frag:Og,distanceRGBA_vert:Ng,distanceRGBA_frag:zg,equirect_vert:Ug,equirect_frag:kg,linedashed_vert:Bg,linedashed_frag:Gg,meshbasic_vert:Vg,meshbasic_frag:Hg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:qg,meshmatcap_frag:Yg,meshnormal_vert:jg,meshnormal_frag:Zg,meshphong_vert:$g,meshphong_frag:Kg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:e_,meshtoon_frag:t_,points_vert:n_,points_frag:i_,shadow_vert:r_,shadow_frag:s_,sprite_vert:a_,sprite_frag:o_},le={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xn},uv2Transform:{value:new Xn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xn}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xn}}},Gn={basic:{uniforms:Pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Pt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Pt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Pt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Pt([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Pt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Pt([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Pt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Pt([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Xn},t2D:{value:null}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},cube:{uniforms:Pt([le.envmap,{opacity:{value:1}}]),vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Pt([le.common,le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Pt([le.lights,le.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Gn.physical={uniforms:Pt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};function l_(a,e,t,n,i,r){const o=new Fe(0);let s=i===!0?0:1,l,c,u=null,h=0,f=null;function m(d,p){let _=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=e.get(M));const E=a.xr,S=E.getSession&&E.getSession();S&&S.environmentBlendMode==="additive"&&(M=null),M===null?g(o,s):M&&M.isColor&&(g(M,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ho)?(c===void 0&&(c=new qn(new hs(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ts(Gn.cube.uniforms),vertexShader:Gn.cube.vertexShader,fragmentShader:Gn.cube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||h!==M.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=a.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new qn(new po(2,2),new Rn({name:"BackgroundMaterial",uniforms:ts(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=a.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(d,p=1){o.set(d),s=p,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,g(o,s)},render:m}}function c_(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(P,U,N,B,H){let V=!1;if(o){const L=d(B,N,U);c!==L&&(c=L,m(c.object)),V=_(P,B,N,H),V&&M(P,B,N,H)}else{const L=U.wireframe===!0;(c.geometry!==B.id||c.program!==N.id||c.wireframe!==L)&&(c.geometry=B.id,c.program=N.id,c.wireframe=L,V=!0)}H!==null&&t.update(H,34963),(V||u)&&(u=!1,x(P,U,N,B),H!==null&&a.bindBuffer(34963,t.get(H).buffer))}function f(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?a.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?a.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function d(P,U,N){const B=N.wireframe===!0;let H=s[P.id];H===void 0&&(H={},s[P.id]=H);let V=H[U.id];V===void 0&&(V={},H[U.id]=V);let L=V[B];return L===void 0&&(L=p(f()),V[B]=L),L}function p(P){const U=[],N=[],B=[];for(let H=0;H<i;H++)U[H]=0,N[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:B,object:P,attributes:{},index:null}}function _(P,U,N,B){const H=c.attributes,V=U.attributes;let L=0;const Q=N.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const ce=H[ee];let Me=V[ee];if(Me===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(Me=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(Me=P.instanceColor)),ce===void 0||ce.attribute!==Me||Me&&ce.data!==Me.data)return!0;L++}return c.attributesNum!==L||c.index!==B}function M(P,U,N,B){const H={},V=U.attributes;let L=0;const Q=N.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let ce=V[ee];ce===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor));const Me={};Me.attribute=ce,ce&&ce.data&&(Me.data=ce.data),H[ee]=Me,L++}c.attributes=H,c.attributesNum=L,c.index=B}function E(){const P=c.newAttributes;for(let U=0,N=P.length;U<N;U++)P[U]=0}function S(P){v(P,0)}function v(P,U){const N=c.newAttributes,B=c.enabledAttributes,H=c.attributeDivisors;N[P]=1,B[P]===0&&(a.enableVertexAttribArray(P),B[P]=1),H[P]!==U&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),H[P]=U)}function T(){const P=c.newAttributes,U=c.enabledAttributes;for(let N=0,B=U.length;N<B;N++)U[N]!==P[N]&&(a.disableVertexAttribArray(N),U[N]=0)}function C(P,U,N,B,H,V){n.isWebGL2===!0&&(N===5124||N===5125)?a.vertexAttribIPointer(P,U,N,H,V):a.vertexAttribPointer(P,U,N,B,H,V)}function x(P,U,N,B){if(n.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const H=B.attributes,V=N.getAttributes(),L=U.defaultAttributeValues;for(const Q in V){const ee=V[Q];if(ee.location>=0){let J=H[Q];if(J===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const ce=J.normalized,Me=J.itemSize,G=t.get(J);if(G===void 0)continue;const Oe=G.buffer,we=G.type,De=G.bytesPerElement;if(J.isInterleavedBufferAttribute){const ae=J.data,Ne=ae.stride,de=J.offset;if(ae.isInstancedInterleavedBuffer){for(let ve=0;ve<ee.locationSize;ve++)v(ee.location+ve,ae.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<ee.locationSize;ve++)S(ee.location+ve);a.bindBuffer(34962,Oe);for(let ve=0;ve<ee.locationSize;ve++)C(ee.location+ve,Me/ee.locationSize,we,ce,Ne*De,(de+Me/ee.locationSize*ve)*De)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<ee.locationSize;ae++)v(ee.location+ae,J.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<ee.locationSize;ae++)S(ee.location+ae);a.bindBuffer(34962,Oe);for(let ae=0;ae<ee.locationSize;ae++)C(ee.location+ae,Me/ee.locationSize,we,ce,Me*De,Me/ee.locationSize*ae*De)}}else if(L!==void 0){const ce=L[Q];if(ce!==void 0)switch(ce.length){case 2:a.vertexAttrib2fv(ee.location,ce);break;case 3:a.vertexAttrib3fv(ee.location,ce);break;case 4:a.vertexAttrib4fv(ee.location,ce);break;default:a.vertexAttrib1fv(ee.location,ce)}}}}T()}function w(){Y();for(const P in s){const U=s[P];for(const N in U){const B=U[N];for(const H in B)g(B[H].object),delete B[H];delete U[N]}delete s[P]}}function R(P){if(s[P.id]===void 0)return;const U=s[P.id];for(const N in U){const B=U[N];for(const H in B)g(B[H].object),delete B[H];delete U[N]}delete s[P.id]}function I(P){for(const U in s){const N=s[U];if(N[P.id]===void 0)continue;const B=N[P.id];for(const H in B)g(B[H].object),delete B[H];delete N[P.id]}}function Y(){Z(),u=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:Z,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:S,disableUnusedAttributes:T}}function u_(a,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function s(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=a,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=s,this.renderInstances=l}function h_(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&a instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),d=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),M=a.getParameter(36349),E=f>0,S=o||e.has("OES_texture_float"),v=E&&S,T=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:E,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:T}}function f_(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Vi,s=new Xn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,E=M*4;let S=_.clippingState||null;l.value=S,S=u(g,f,E,m);for(let v=0;v!==E;++v)S[v]=t[v];_.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let E=0,S=m;E!==d;++E,S+=4)o.copy(h[E]).applyMatrix4(M,s),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function d_(a){let e=new WeakMap;function t(o,s){return s===gl?o.mapping=Jr:s===_l&&(o.mapping=Qr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===gl||s===_l)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lp(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Lh extends Th{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ur=4,au=[.125,.215,.35,.446,.526,.582],ji=20,$o=new Lh,ou=new Fe;let Ko=null;const Hi=(1+Math.sqrt(5))/2,Rr=1/Hi,lu=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Hi,Rr),new z(0,Hi,-Rr),new z(Rr,0,Hi),new z(-Rr,0,Hi),new z(Hi,Rr,0),new z(-Hi,Rr,0)];class cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ko=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko),e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ks,format:Ln,encoding:fr,depthBuffer:!1},i=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p_(r)),this._blurMaterial=m_(r,e,t)}return i}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,i){const s=new pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ou),u.toneMapping=ai,u.autoClear=!1;const m=new Wl({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new qn(new hs,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(ou),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):M===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const E=this._cubeSize;ba(i,M*E,_>2?E:0,E,E),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Jr||e.mapping===Qr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new qn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=lu[(i-1)%lu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ji-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):ji;p>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);const _=[];let M=0;for(let C=0;C<ji;++C){const x=C/d,w=Math.exp(-x*x/2);_.push(w),C===0?M+=w:C<p&&(M+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const S=this._sizeLods[i],v=3*S*(i>E-Ur?i-E+Ur:0),T=4*(this._cubeSize-S);ba(t,v,T,3*S,2*S),l.setRenderTarget(t),l.render(h,$o)}}function p_(a){const e=[],t=[],n=[];let i=a;const r=a-Ur+1+au.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let l=1/s;o>a-Ur?l=au[o-a+Ur-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,M=new Float32Array(d*g*m),E=new Float32Array(p*g*m),S=new Float32Array(_*g*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,x=T>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(w,d*g*T),E.set(f,p*g*T);const R=[T,T,T,T,T,T];S.set(R,_*g*T)}const v=new gr;v.setAttribute("position",new Yn(M,d)),v.setAttribute("uv",new Yn(E,p)),v.setAttribute("faceIndex",new Yn(S,_)),e.push(v),i>Ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(a,e,t){const n=new oi(a,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function m_(a,e,t){const n=new Float32Array(ji),i=new z(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function hu(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function fu(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g_(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===gl||l===_l,u=l===Jr||l===Qr;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new cu(a)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new cu(a));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function __(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function x_(a,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let E=0,S=M.length;E<S;E+=3){const v=M[E+0],T=M[E+1],C=M[E+2];f.push(v,T,T,C,C,v)}}else{const M=g.array;d=g.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const v=E+0,T=E+1,C=E+2;f.push(v,T,T,C,C,v)}}const p=new(_h(f)?wh:bh)(f,1);p.version=d;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function v_(a,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){a.drawElements(r,m,s,f*l),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=a,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*l,g),t.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function y_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function M_(a,e){return a[0]-e[0]}function S_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Jo(a,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),a.divideScalar(t)}function b_(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ft,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let N=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",N)};var g=N;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let R=0;S===!0&&(R=1),v===!0&&(R=2),T===!0&&(R=3);let I=u.attributes.position.count*R,Y=1;I>e.maxTextureSize&&(Y=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const Z=new Float32Array(I*Y*4*p),P=new Mh(Z,I,Y,p);P.type=Ji,P.needsUpdate=!0;const U=R*4;for(let B=0;B<p;B++){const H=C[B],V=x[B],L=w[B],Q=I*Y*4*B;for(let ee=0;ee<H.count;ee++){const J=ee*U;S===!0&&(o.fromBufferAttribute(H,ee),H.normalized===!0&&Jo(o,H),Z[Q+J+0]=o.x,Z[Q+J+1]=o.y,Z[Q+J+2]=o.z,Z[Q+J+3]=0),v===!0&&(o.fromBufferAttribute(V,ee),V.normalized===!0&&Jo(o,V),Z[Q+J+4]=o.x,Z[Q+J+5]=o.y,Z[Q+J+6]=o.z,Z[Q+J+7]=0),T===!0&&(o.fromBufferAttribute(L,ee),L.normalized===!0&&Jo(o,L),Z[Q+J+8]=o.x,Z[Q+J+9]=o.y,Z[Q+J+10]=o.z,Z[Q+J+11]=L.itemSize===4?o.w:1)}}_={count:p,texture:P,size:new Ye(I,Y)},r.set(u,_),u.addEventListener("dispose",N)}let M=0;for(let S=0;S<m.length;S++)M+=m[S];const E=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(a,"morphTargetBaseInfluence",E),f.getUniforms().setValue(a,"morphTargetInfluences",m),f.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const T=p[v];T[0]=v,T[1]=m[v]}p.sort(S_);for(let v=0;v<8;v++)v<d&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(M_);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let E=0;for(let v=0;v<8;v++){const T=s[v],C=T[0],x=T[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[C]&&u.setAttribute("morphTarget"+v,_[C]),M&&u.getAttribute("morphNormal"+v)!==M[C]&&u.setAttribute("morphNormal"+v,M[C]),i[v]=x,E+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),M&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(a,"morphTargetBaseInfluence",S),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function w_(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Dh=new yn,Ph=new Mh,Rh=new dp,Ih=new Eh,du=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function fs(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=du[i];if(r===void 0&&(r=new Float32Array(i),du[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function Wt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Xt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function mo(a,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function T_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function E_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;a.uniform2fv(this.addr,e),Xt(t,e)}}function A_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;a.uniform3fv(this.addr,e),Xt(t,e)}}function C_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;a.uniform4fv(this.addr,e),Xt(t,e)}}function L_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;_u.set(n),a.uniformMatrix2fv(this.addr,!1,_u),Xt(t,n)}}function D_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;gu.set(n),a.uniformMatrix3fv(this.addr,!1,gu),Xt(t,n)}}function P_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;mu.set(n),a.uniformMatrix4fv(this.addr,!1,mu),Xt(t,n)}}function R_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function I_(a,e){const t=this.cache;Wt(t,e)||(a.uniform2iv(this.addr,e),Xt(t,e))}function F_(a,e){const t=this.cache;Wt(t,e)||(a.uniform3iv(this.addr,e),Xt(t,e))}function O_(a,e){const t=this.cache;Wt(t,e)||(a.uniform4iv(this.addr,e),Xt(t,e))}function N_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function z_(a,e){const t=this.cache;Wt(t,e)||(a.uniform2uiv(this.addr,e),Xt(t,e))}function U_(a,e){const t=this.cache;Wt(t,e)||(a.uniform3uiv(this.addr,e),Xt(t,e))}function k_(a,e){const t=this.cache;Wt(t,e)||(a.uniform4uiv(this.addr,e),Xt(t,e))}function B_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Dh,i)}function G_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rh,i)}function V_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ih,i)}function H_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ph,i)}function W_(a){switch(a){case 5126:return T_;case 35664:return E_;case 35665:return A_;case 35666:return C_;case 35674:return L_;case 35675:return D_;case 35676:return P_;case 5124:case 35670:return R_;case 35667:case 35671:return I_;case 35668:case 35672:return F_;case 35669:case 35673:return O_;case 5125:return N_;case 36294:return z_;case 36295:return U_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return H_}}function X_(a,e){a.uniform1fv(this.addr,e)}function q_(a,e){const t=fs(e,this.size,2);a.uniform2fv(this.addr,t)}function Y_(a,e){const t=fs(e,this.size,3);a.uniform3fv(this.addr,t)}function j_(a,e){const t=fs(e,this.size,4);a.uniform4fv(this.addr,t)}function Z_(a,e){const t=fs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function $_(a,e){const t=fs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function K_(a,e){const t=fs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function J_(a,e){a.uniform1iv(this.addr,e)}function Q_(a,e){a.uniform2iv(this.addr,e)}function e0(a,e){a.uniform3iv(this.addr,e)}function t0(a,e){a.uniform4iv(this.addr,e)}function n0(a,e){a.uniform1uiv(this.addr,e)}function i0(a,e){a.uniform2uiv(this.addr,e)}function r0(a,e){a.uniform3uiv(this.addr,e)}function s0(a,e){a.uniform4uiv(this.addr,e)}function a0(a,e,t){const n=e.length,i=mo(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Dh,i[r])}function o0(a,e,t){const n=e.length,i=mo(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Rh,i[r])}function l0(a,e,t){const n=e.length,i=mo(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Ih,i[r])}function c0(a,e,t){const n=e.length,i=mo(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Ph,i[r])}function u0(a){switch(a){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return j_;case 35674:return Z_;case 35675:return $_;case 35676:return K_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}class h0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=W_(t.type)}}class f0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=u0(t.type)}}class d0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function xu(a,e){a.seq.push(e),a.map[e.id]=e}function p0(a,e,t){const n=a.name,i=n.length;for(Qo.lastIndex=0;;){const r=Qo.exec(n),o=Qo.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===i){xu(t,c===void 0?new h0(s,a,e):new f0(s,a,e));break}else{let h=t.map[s];h===void 0&&(h=new d0(s),xu(t,h)),t=h}}}class ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);p0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vu(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let m0=0;function g0(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function _0(a){switch(a){case fr:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function yu(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+g0(a.getShaderSource(e),o)}else return i}function x0(a,e){const t=_0(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function v0(a,e){let t;switch(e){case Bd:t="Linear";break;case Gd:t="Reinhard";break;case Vd:t="OptimizedCineon";break;case Hd:t="ACESFilmic";break;case Wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function y0(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function M0(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S0(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function bs(a){return a!==""}function Mu(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(a){return a.replace(b0,w0)}function w0(a,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sl(t)}const T0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(a){return a.replace(E0,Fh).replace(T0,A0)}function A0(a,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Fh(a,e,t,n)}function Fh(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wu(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Ss&&(e="SHADOWMAP_TYPE_VSM"),e}function L0(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D0(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function P0(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case uo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ud:e="ENVMAP_BLENDING_MIX";break;case kd:e="ENVMAP_BLENDING_ADD";break}return e}function R0(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function I0(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=C0(t),c=L0(t),u=D0(t),h=P0(t),f=R0(t),m=t.isWebGL2?"":y0(t),g=M0(r),d=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(bs).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(bs).join(`
`),_.length>0&&(_+=`
`)):(p=[wu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),_=[m,wu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ai?v0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,x0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=Sl(o),o=Mu(o,t),o=Su(o,t),s=Sl(s),s=Mu(s,t),s=Su(s,t),o=bu(o),s=bu(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=M+p+o,S=M+_+s,v=vu(i,35633,E),T=vu(i,35632,S);if(i.attachShader(d,v),i.attachShader(d,T),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),a.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),R=i.getShaderInfoLog(v).trim(),I=i.getShaderInfoLog(T).trim();let Y=!0,Z=!0;if(i.getProgramParameter(d,35714)===!1){Y=!1;const P=yu(i,v,"vertex"),U=yu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+P+`
`+U)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(R===""||I==="")&&(Z=!1);Z&&(this.diagnostics={runnable:Y,programLog:w,vertexShader:{log:R,prefix:p},fragmentShader:{log:I,prefix:_}})}i.deleteShader(v),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new ka(i,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=S0(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=T,this}let F0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new N0(e);t.set(e,n)}return t.get(e)}}class N0{constructor(e){this.id=F0++,this.code=e,this.usedTimes=0}}function z0(a,e,t,n,i,r,o){const s=new Sh,l=new O0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,w,R,I,Y){const Z=I.fog,P=Y.geometry,U=x.isMeshStandardMaterial?I.environment:null,N=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),B=!!N&&N.mapping===ho?N.image.height:null,H=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const V=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,L=V!==void 0?V.length:0;let Q=0;P.morphAttributes.position!==void 0&&(Q=1),P.morphAttributes.normal!==void 0&&(Q=2),P.morphAttributes.color!==void 0&&(Q=3);let ee,J,ce,Me;if(H){const Ne=Gn[H];ee=Ne.vertexShader,J=Ne.fragmentShader}else ee=x.vertexShader,J=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),Me=l.getFragmentShaderID(x);const G=a.getRenderTarget(),Oe=x.alphaTest>0,we=x.clearcoat>0,De=x.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:x.type,vertexShader:ee,fragmentShader:J,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?a.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:fr,map:!!x.map,matcap:!!x.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:B,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===cp,tangentSpaceNormalMap:x.normalMapType===cs,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===nt,clearcoat:we,clearcoatMap:we&&!!x.clearcoatMap,clearcoatRoughnessMap:we&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!x.clearcoatNormalMap,iridescence:De,iridescenceMap:De&&!!x.iridescenceMap,iridescenceThicknessMap:De&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Hr,alphaMap:!!x.alphaMap,alphaTest:Oe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Z,useFog:x.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:x.toneMapped?a.toneMapping:ai,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kr,flipSided:x.side===Pn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(w,x),M(w,x),w.push(a.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),w.fog&&s.enable(33),x.push(s.mask),s.disableAll(),w.useFog&&s.enable(0),w.flatShading&&s.enable(1),w.logarithmicDepthBuffer&&s.enable(2),w.skinning&&s.enable(3),w.morphTargets&&s.enable(4),w.morphNormals&&s.enable(5),w.morphColors&&s.enable(6),w.premultipliedAlpha&&s.enable(7),w.shadowMapEnabled&&s.enable(8),w.physicallyCorrectLights&&s.enable(9),w.doubleSided&&s.enable(10),w.flipSided&&s.enable(11),w.useDepthPacking&&s.enable(12),w.dithering&&s.enable(13),w.specularIntensityMap&&s.enable(14),w.specularColorMap&&s.enable(15),w.transmission&&s.enable(16),w.transmissionMap&&s.enable(17),w.thicknessMap&&s.enable(18),w.sheen&&s.enable(19),w.sheenColorMap&&s.enable(20),w.sheenRoughnessMap&&s.enable(21),w.decodeVideoTexture&&s.enable(22),w.opaque&&s.enable(23),x.push(s.mask)}function E(x){const w=g[x.type];let R;if(w){const I=Gn[w];R=Tp.clone(I.uniforms)}else R=x.uniforms;return R}function S(x,w){let R;for(let I=0,Y=c.length;I<Y;I++){const Z=c[I];if(Z.cacheKey===w){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new I0(a,w,x,r),c.push(R)),R}function v(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:E,acquireProgram:S,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:C}}function U0(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function k0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Tu(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Eu(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,g,d,p){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},a[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),e++,_}function s(h,f,m,g,d,p){const _=o(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,f,m,g,d,p){const _=o(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||k0),n.length>1&&n.sort(f||Tu),i.length>1&&i.sort(f||Tu)}function u(){for(let h=e,f=a.length;h<f;h++){const m=a[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function B0(){let a=new WeakMap;function e(n,i){let r;return a.has(n)===!1?(r=new Eu,a.set(n,[r])):i>=a.get(n).length?(r=new Eu,a.get(n).push(r)):r=a.get(n)[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function G0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Fe};break;case"SpotLight":t={position:new z,direction:new z,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new z,halfWidth:new z,halfHeight:new z};break}return a[e.id]=t,t}}}function V0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let H0=0;function W0(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function X0(a,e){const t=new G0,n=V0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,o=new Ot,s=new Ot;function l(u,h){let f=0,m=0,g=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,p=0,_=0,M=0,E=0,S=0,v=0,T=0;u.sort(W0);const C=h!==!0?Math.PI:1;for(let w=0,R=u.length;w<R;w++){const I=u[w],Y=I.color,Z=I.intensity,P=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=Y.r*Z*C,m+=Y.g*Z*C,g+=Y.b*Z*C;else if(I.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(I.sh.coefficients[N],Z);else if(I.isDirectionalLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*C),I.castShadow){const B=I.shadow,H=n.get(I);H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=U,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=N,d++}else if(I.isSpotLight){const N=t.get(I);if(N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(Y).multiplyScalar(Z*C),N.distance=P,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,I.castShadow){const B=I.shadow,H=n.get(I);H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=U,i.spotShadowMatrix[_]=I.shadow.matrix,T++}i.spot[_]=N,_++}else if(I.isRectAreaLight){const N=t.get(I);N.color.copy(Y).multiplyScalar(Z),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=N,M++}else if(I.isPointLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*C),N.distance=I.distance,N.decay=I.decay,I.castShadow){const B=I.shadow,H=n.get(I);H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,H.shadowCameraNear=B.camera.near,H.shadowCameraFar=B.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=U,i.pointShadowMatrix[p]=I.shadow.matrix,v++}i.point[p]=N,p++}else if(I.isHemisphereLight){const N=t.get(I);N.skyColor.copy(I.color).multiplyScalar(Z*C),N.groundColor.copy(I.groundColor).multiplyScalar(Z*C),i.hemi[E]=N,E++}}M>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const x=i.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==M||x.hemiLength!==E||x.numDirectionalShadows!==S||x.numPointShadows!==v||x.numSpotShadows!==T)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=E,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotShadowMatrix.length=T,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=M,x.hemiLength=E,x.numDirectionalShadows=S,x.numPointShadows=v,x.numSpotShadows=T,i.version=H0++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let M=0,E=u.length;M<E;M++){const S=u[M];if(S.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(S.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const v=i.rectArea[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),s.identity(),o.copy(S.matrixWorld),o.premultiply(_),s.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(S.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Au(a,e){const t=new X0(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function s(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function q0(a,e){let t=new WeakMap;function n(r,o=0){let s;return t.has(r)===!1?(s=new Au(a,e),t.set(r,[s])):o>=t.get(r).length?(s=new Au(a,e),t.get(r).push(s)):s=t.get(r)[o],s}function i(){t=new WeakMap}return{get:n,dispose:i}}class Oh extends Lt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nh extends Lt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z0(a,e,t){let n=new Ah;const i=new Ye,r=new Ye,o=new Ft,s=new Oh({depthPacking:lp}),l=new Nh,c={},u=t.maxTextureSize,h={0:Pn,1:Us,2:Kr},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Y0,fragmentShader:j0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new gr;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new qn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh,this.render=function(S,v,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const C=a.getRenderTarget(),x=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),R=a.state;R.setBlending(Ai),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let I=0,Y=S.length;I<Y;I++){const Z=S[I],P=Z.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const U=P.getFrameExtents();if(i.multiply(U),r.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,P.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,P.mapSize.y=r.y)),P.map===null&&!P.isPointLightShadow&&this.type===Ss&&(P.map=new oi(i.x,i.y),P.map.texture.name=Z.name+".shadowMap",P.mapPass=new oi(i.x,i.y),P.camera.updateProjectionMatrix()),P.map===null){const B={minFilter:jt,magFilter:jt,format:Ln};P.map=new oi(i.x,i.y,B),P.map.texture.name=Z.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const N=P.getViewportCount();for(let B=0;B<N;B++){const H=P.getViewport(B);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),R.viewport(o),P.updateMatrices(Z,B),n=P.getFrustum(),E(v,T,P.camera,Z,this.type)}!P.isPointLightShadow&&this.type===Ss&&_(P,T),P.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(C,x,w)};function _(S,v){const T=e.update(d);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(v,null,T,f,d,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(v,null,T,m,d,null)}function M(S,v,T,C,x,w){let R=null;const I=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0?R=I:R=T.isPointLight===!0?l:s,a.localClippingEnabled&&v.clipShadows===!0&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const Y=R.uuid,Z=v.uuid;let P=c[Y];P===void 0&&(P={},c[Y]=P);let U=P[Z];U===void 0&&(U=R.clone(),P[Z]=U),R=U}return R.visible=v.visible,R.wireframe=v.wireframe,w===Ss?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:h[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaTest,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=C,R.farDistance=x),R}function E(S,v,T,C,x){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Ss)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const I=e.update(S),Y=S.material;if(Array.isArray(Y)){const Z=I.groups;for(let P=0,U=Z.length;P<U;P++){const N=Z[P],B=Y[N.materialIndex];if(B&&B.visible){const H=M(S,B,C,T.near,T.far,x);a.renderBufferDirect(T,null,I,H,S,N)}}}else if(Y.visible){const Z=M(S,Y,C,T.near,T.far,x);a.renderBufferDirect(T,null,I,Z,S,null)}}const R=S.children;for(let I=0,Y=R.length;I<Y;I++)E(R[I],v,T,C,x)}}function $0(a,e,t){const n=t.isWebGL2;function i(){let D=!1;const re=new Ft;let ie=null;const oe=new Ft(0,0,0,0);return{setMask:function(he){ie!==he&&!D&&(a.colorMask(he,he,he,he),ie=he)},setLocked:function(he){D=he},setClear:function(he,Se,ne,Te,Ue){Ue===!0&&(he*=Te,Se*=Te,ne*=Te),re.set(he,Se,ne,Te),oe.equals(re)===!1&&(a.clearColor(he,Se,ne,Te),oe.copy(re))},reset:function(){D=!1,ie=null,oe.set(-1,0,0,0)}}}function r(){let D=!1,re=null,ie=null,oe=null;return{setTest:function(he){he?Me(2929):G(2929)},setMask:function(he){re!==he&&!D&&(a.depthMask(he),re=he)},setFunc:function(he){if(ie!==he){if(he)switch(he){case Pd:a.depthFunc(512);break;case Rd:a.depthFunc(519);break;case Id:a.depthFunc(513);break;case ml:a.depthFunc(515);break;case Fd:a.depthFunc(514);break;case Od:a.depthFunc(518);break;case Nd:a.depthFunc(516);break;case zd:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);ie=he}},setLocked:function(he){D=he},setClear:function(he){oe!==he&&(a.clearDepth(he),oe=he)},reset:function(){D=!1,re=null,ie=null,oe=null}}}function o(){let D=!1,re=null,ie=null,oe=null,he=null,Se=null,ne=null,Te=null,Ue=null;return{setTest:function(Be){D||(Be?Me(2960):G(2960))},setMask:function(Be){re!==Be&&!D&&(a.stencilMask(Be),re=Be)},setFunc:function(Be,rt,ct){(ie!==Be||oe!==rt||he!==ct)&&(a.stencilFunc(Be,rt,ct),ie=Be,oe=rt,he=ct)},setOp:function(Be,rt,ct){(Se!==Be||ne!==rt||Te!==ct)&&(a.stencilOp(Be,rt,ct),Se=Be,ne=rt,Te=ct)},setLocked:function(Be){D=Be},setClear:function(Be){Ue!==Be&&(a.clearStencil(Be),Ue=Be)},reset:function(){D=!1,re=null,ie=null,oe=null,he=null,Se=null,ne=null,Te=null,Ue=null}}}const s=new i,l=new r,c=new o;let u={},h={},f=new WeakMap,m=[],g=null,d=!1,p=null,_=null,M=null,E=null,S=null,v=null,T=null,C=!1,x=null,w=null,R=null,I=null,Y=null;const Z=a.getParameter(35661);let P=!1,U=0;const N=a.getParameter(7938);N.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(N)[1]),P=U>=1):N.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),P=U>=2);let B=null,H={};const V=a.getParameter(3088),L=a.getParameter(2978),Q=new Ft().fromArray(V),ee=new Ft().fromArray(L);function J(D,re,ie){const oe=new Uint8Array(4),he=a.createTexture();a.bindTexture(D,he),a.texParameteri(D,10241,9728),a.texParameteri(D,10240,9728);for(let Se=0;Se<ie;Se++)a.texImage2D(re+Se,0,6408,1,1,0,6408,5121,oe);return he}const ce={};ce[3553]=J(3553,3553,1),ce[34067]=J(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(ml),Ze(!1),tt(gc),Me(2884),de(Ai);function Me(D){u[D]!==!0&&(a.enable(D),u[D]=!0)}function G(D){u[D]!==!1&&(a.disable(D),u[D]=!1)}function Oe(D,re){return h[D]!==re?(a.bindFramebuffer(D,re),h[D]=re,n&&(D===36009&&(h[36160]=re),D===36160&&(h[36009]=re)),!0):!1}function we(D,re){let ie=m,oe=!1;if(D)if(ie=f.get(re),ie===void 0&&(ie=[],f.set(re,ie)),D.isWebGLMultipleRenderTargets){const he=D.texture;if(ie.length!==he.length||ie[0]!==36064){for(let Se=0,ne=he.length;Se<ne;Se++)ie[Se]=36064+Se;ie.length=he.length,oe=!0}}else ie[0]!==36064&&(ie[0]=36064,oe=!0);else ie[0]!==1029&&(ie[0]=1029,oe=!0);oe&&(t.isWebGL2?a.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function De(D){return g!==D?(a.useProgram(D),g=D,!0):!1}const ae={[Nr]:32774,[yd]:32778,[Md]:32779};if(n)ae[yc]=32775,ae[Mc]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(ae[yc]=D.MIN_EXT,ae[Mc]=D.MAX_EXT)}const Ne={[Sd]:0,[bd]:1,[wd]:768,[dh]:770,[Dd]:776,[Cd]:774,[Ed]:772,[Td]:769,[ph]:771,[Ld]:775,[Ad]:773};function de(D,re,ie,oe,he,Se,ne,Te){if(D===Ai){d===!0&&(G(3042),d=!1);return}if(d===!1&&(Me(3042),d=!0),D!==vd){if(D!==p||Te!==C){if((_!==Nr||S!==Nr)&&(a.blendEquation(32774),_=Nr,S=Nr),Te)switch(D){case Hr:a.blendFuncSeparate(1,771,1,771);break;case _c:a.blendFunc(1,1);break;case xc:a.blendFuncSeparate(0,769,0,1);break;case vc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Hr:a.blendFuncSeparate(770,771,1,771);break;case _c:a.blendFunc(770,1);break;case xc:a.blendFuncSeparate(0,769,0,1);break;case vc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,E=null,v=null,T=null,p=D,C=Te}return}he=he||re,Se=Se||ie,ne=ne||oe,(re!==_||he!==S)&&(a.blendEquationSeparate(ae[re],ae[he]),_=re,S=he),(ie!==M||oe!==E||Se!==v||ne!==T)&&(a.blendFuncSeparate(Ne[ie],Ne[oe],Ne[Se],Ne[ne]),M=ie,E=oe,v=Se,T=ne),p=D,C=null}function ve(D,re){D.side===Kr?G(2884):Me(2884);let ie=D.side===Pn;re&&(ie=!ie),Ze(ie),D.blending===Hr&&D.transparent===!1?de(Ai):de(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const oe=D.stencilWrite;c.setTest(oe),oe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),X(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(32926):G(32926)}function Ze(D){x!==D&&(D?a.frontFace(2304):a.frontFace(2305),x=D)}function tt(D){D!==md?(Me(2884),D!==w&&(D===gc?a.cullFace(1029):D===gd?a.cullFace(1028):a.cullFace(1032))):G(2884),w=D}function Ke(D){D!==R&&(P&&a.lineWidth(D),R=D)}function X(D,re,ie){D?(Me(32823),(I!==re||Y!==ie)&&(a.polygonOffset(re,ie),I=re,Y=ie)):G(32823)}function Je(D){D?Me(3089):G(3089)}function Ce(D){D===void 0&&(D=33984+Z-1),B!==D&&(a.activeTexture(D),B=D)}function _t(D,re){B===null&&Ce();let ie=H[B];ie===void 0&&(ie={type:void 0,texture:void 0},H[B]=ie),(ie.type!==D||ie.texture!==re)&&(a.bindTexture(D,re||ce[D]),ie.type=D,ie.texture=re)}function xt(){const D=H[B];D!==void 0&&D.type!==void 0&&(a.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function A(){try{a.compressedTexImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function y(){try{a.texSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{a.texSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{a.texStorage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{a.texStorage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{a.texImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{a.texImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){Q.equals(D)===!1&&(a.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function ue(D){ee.equals(D)===!1&&(a.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function fe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},B=null,H={},h={},f=new WeakMap,m=[],g=null,d=!1,p=null,_=null,M=null,E=null,S=null,v=null,T=null,C=!1,x=null,w=null,R=null,I=null,Y=null,Q.set(0,0,a.canvas.width,a.canvas.height),ee.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Me,disable:G,bindFramebuffer:Oe,drawBuffers:we,useProgram:De,setBlending:de,setMaterial:ve,setFlipSided:Ze,setCullFace:tt,setLineWidth:Ke,setPolygonOffset:X,setScissorTest:Je,activeTexture:Ce,bindTexture:_t,unbindTexture:xt,compressedTexImage2D:A,texImage2D:ye,texImage3D:W,texStorage2D:K,texStorage3D:se,texSubImage2D:y,texSubImage3D:j,compressedTexSubImage2D:te,scissor:ge,viewport:ue,reset:fe}}function K0(a,e,t,n,i,r,o){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,y){return _?new OffscreenCanvas(A,y):$a("canvas")}function E(A,y,j,te){let K=1;if((A.width>te||A.height>te)&&(K=te/Math.max(A.width,A.height)),K<1||y===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){const se=y?Ml:Math.floor,ye=se(K*A.width),W=se(K*A.height);d===void 0&&(d=M(ye,W));const ge=j?M(ye,W):d;return ge.width=ye,ge.height=W,ge.getContext("2d").drawImage(A,0,0,ye,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ye+"x"+W+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return jc(A.width)&&jc(A.height)}function v(A){return s?!1:A.wrapS!==Cn||A.wrapT!==Cn||A.minFilter!==jt&&A.minFilter!==dn}function T(A,y){return A.generateMipmaps&&y&&A.minFilter!==jt&&A.minFilter!==dn}function C(A){a.generateMipmap(A)}function x(A,y,j,te,K=!1){if(s===!1)return y;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=y;return y===6403&&(j===5126&&(se=33326),j===5131&&(se=33325),j===5121&&(se=33321)),y===33319&&(j===5126&&(se=33328),j===5131&&(se=33327),j===5121&&(se=33323)),y===6408&&(j===5126&&(se=34836),j===5131&&(se=34842),j===5121&&(se=te===nt&&K===!1?35907:32856),j===32819&&(se=32854),j===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function w(A,y,j){return T(A,j)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){return A===jt||A===Sc||A===bc?9728:9729}function I(A){const y=A.target;y.removeEventListener("dispose",I),Z(y),y.isVideoTexture&&g.delete(y)}function Y(A){const y=A.target;y.removeEventListener("dispose",Y),U(y)}function Z(A){const y=n.get(A);if(y.__webglInit===void 0)return;const j=A.source,te=p.get(j);if(te){const K=te[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(A),Object.keys(te).length===0&&p.delete(j)}n.remove(A)}function P(A){const y=n.get(A);a.deleteTexture(y.__webglTexture);const j=A.source,te=p.get(j);delete te[y.__cacheKey],o.memory.textures--}function U(A){const y=A.texture,j=n.get(A),te=n.get(y);if(te.__webglTexture!==void 0&&(a.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)a.deleteFramebuffer(j.__webglFramebuffer[K]),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer[K]);else{if(a.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&a.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let K=0;K<j.__webglColorRenderbuffer.length;K++)j.__webglColorRenderbuffer[K]&&a.deleteRenderbuffer(j.__webglColorRenderbuffer[K]);j.__webglDepthRenderbuffer&&a.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let K=0,se=y.length;K<se;K++){const ye=n.get(y[K]);ye.__webglTexture&&(a.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(y[K])}n.remove(y),n.remove(A)}let N=0;function B(){N=0}function H(){const A=N;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),N+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.encoding),y.join()}function L(A,y){const j=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(j,A,y);return}}t.activeTexture(33984+y),t.bindTexture(3553,j.__webglTexture)}function Q(A,y){const j=n.get(A);if(A.version>0&&j.__version!==A.version){we(j,A,y);return}t.activeTexture(33984+y),t.bindTexture(35866,j.__webglTexture)}function ee(A,y){const j=n.get(A);if(A.version>0&&j.__version!==A.version){we(j,A,y);return}t.activeTexture(33984+y),t.bindTexture(32879,j.__webglTexture)}function J(A,y){const j=n.get(A);if(A.version>0&&j.__version!==A.version){De(j,A,y);return}t.activeTexture(33984+y),t.bindTexture(34067,j.__webglTexture)}const ce={[xl]:10497,[Cn]:33071,[vl]:33648},Me={[jt]:9728,[Sc]:9984,[bc]:9986,[dn]:9729,[Xd]:9985,[fo]:9987};function G(A,y,j){if(j?(a.texParameteri(A,10242,ce[y.wrapS]),a.texParameteri(A,10243,ce[y.wrapT]),(A===32879||A===35866)&&a.texParameteri(A,32882,ce[y.wrapR]),a.texParameteri(A,10240,Me[y.magFilter]),a.texParameteri(A,10241,Me[y.minFilter])):(a.texParameteri(A,10242,33071),a.texParameteri(A,10243,33071),(A===32879||A===35866)&&a.texParameteri(A,32882,33071),(y.wrapS!==Cn||y.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,10240,R(y.magFilter)),a.texParameteri(A,10241,R(y.minFilter)),y.minFilter!==jt&&y.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(y.type===Ji&&e.has("OES_texture_float_linear")===!1||s===!1&&y.type===ks&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(a.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Oe(A,y){let j=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",I));const te=y.source;let K=p.get(te);K===void 0&&(K={},p.set(te,K));const se=V(y);if(se!==A.__cacheKey){K[se]===void 0&&(K[se]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,j=!0),K[se].usedTimes++;const ye=K[A.__cacheKey];ye!==void 0&&(K[A.__cacheKey].usedTimes--,ye.usedTimes===0&&P(y)),A.__cacheKey=se,A.__webglTexture=K[se].texture}return j}function we(A,y,j){let te=3553;y.isDataArrayTexture&&(te=35866),y.isData3DTexture&&(te=32879);const K=Oe(A,y),se=y.source;if(t.activeTexture(33984+j),t.bindTexture(te,A.__webglTexture),se.version!==se.__currentVersion||K===!0){a.pixelStorei(37440,y.flipY),a.pixelStorei(37441,y.premultiplyAlpha),a.pixelStorei(3317,y.unpackAlignment),a.pixelStorei(37443,0);const ye=v(y)&&S(y.image)===!1;let W=E(y.image,ye,!1,u);W=xt(y,W);const ge=S(W)||s,ue=r.convert(y.format,y.encoding);let fe=r.convert(y.type),D=x(y.internalFormat,ue,fe,y.encoding,y.isVideoTexture);G(te,y,ge);let re;const ie=y.mipmaps,oe=s&&y.isVideoTexture!==!0,he=se.__currentVersion===void 0||K===!0,Se=w(y,W,ge);if(y.isDepthTexture)D=6402,s?y.type===Ji?D=36012:y.type===Ki?D=33190:y.type===Wr?D=35056:D=33189:y.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ir&&D===6402&&y.type!==gh&&y.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ki,fe=r.convert(y.type)),y.format===es&&D===6402&&(D=34041,y.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Wr,fe=r.convert(y.type))),he&&(oe?t.texStorage2D(3553,1,D,W.width,W.height):t.texImage2D(3553,0,D,W.width,W.height,0,ue,fe,null));else if(y.isDataTexture)if(ie.length>0&&ge){oe&&he&&t.texStorage2D(3553,Se,D,ie[0].width,ie[0].height);for(let ne=0,Te=ie.length;ne<Te;ne++)re=ie[ne],oe?t.texSubImage2D(3553,ne,0,0,re.width,re.height,ue,fe,re.data):t.texImage2D(3553,ne,D,re.width,re.height,0,ue,fe,re.data);y.generateMipmaps=!1}else oe?(he&&t.texStorage2D(3553,Se,D,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,ue,fe,W.data)):t.texImage2D(3553,0,D,W.width,W.height,0,ue,fe,W.data);else if(y.isCompressedTexture){oe&&he&&t.texStorage2D(3553,Se,D,ie[0].width,ie[0].height);for(let ne=0,Te=ie.length;ne<Te;ne++)re=ie[ne],y.format!==Ln?ue!==null?oe?t.compressedTexSubImage2D(3553,ne,0,0,re.width,re.height,ue,re.data):t.compressedTexImage2D(3553,ne,D,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage2D(3553,ne,0,0,re.width,re.height,ue,fe,re.data):t.texImage2D(3553,ne,D,re.width,re.height,0,ue,fe,re.data)}else if(y.isDataArrayTexture)oe?(he&&t.texStorage3D(35866,Se,D,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,ue,fe,W.data)):t.texImage3D(35866,0,D,W.width,W.height,W.depth,0,ue,fe,W.data);else if(y.isData3DTexture)oe?(he&&t.texStorage3D(32879,Se,D,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,ue,fe,W.data)):t.texImage3D(32879,0,D,W.width,W.height,W.depth,0,ue,fe,W.data);else if(y.isFramebufferTexture){if(he)if(oe)t.texStorage2D(3553,Se,D,W.width,W.height);else{let ne=W.width,Te=W.height;for(let Ue=0;Ue<Se;Ue++)t.texImage2D(3553,Ue,D,ne,Te,0,ue,fe,null),ne>>=1,Te>>=1}}else if(ie.length>0&&ge){oe&&he&&t.texStorage2D(3553,Se,D,ie[0].width,ie[0].height);for(let ne=0,Te=ie.length;ne<Te;ne++)re=ie[ne],oe?t.texSubImage2D(3553,ne,0,0,ue,fe,re):t.texImage2D(3553,ne,D,ue,fe,re);y.generateMipmaps=!1}else oe?(he&&t.texStorage2D(3553,Se,D,W.width,W.height),t.texSubImage2D(3553,0,0,0,ue,fe,W)):t.texImage2D(3553,0,D,ue,fe,W);T(y,ge)&&C(te),se.__currentVersion=se.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function De(A,y,j){if(y.image.length!==6)return;const te=Oe(A,y),K=y.source;if(t.activeTexture(33984+j),t.bindTexture(34067,A.__webglTexture),K.version!==K.__currentVersion||te===!0){a.pixelStorei(37440,y.flipY),a.pixelStorei(37441,y.premultiplyAlpha),a.pixelStorei(3317,y.unpackAlignment),a.pixelStorei(37443,0);const se=y.isCompressedTexture||y.image[0].isCompressedTexture,ye=y.image[0]&&y.image[0].isDataTexture,W=[];for(let ne=0;ne<6;ne++)!se&&!ye?W[ne]=E(y.image[ne],!1,!0,c):W[ne]=ye?y.image[ne].image:y.image[ne],W[ne]=xt(y,W[ne]);const ge=W[0],ue=S(ge)||s,fe=r.convert(y.format,y.encoding),D=r.convert(y.type),re=x(y.internalFormat,fe,D,y.encoding),ie=s&&y.isVideoTexture!==!0,oe=K.__currentVersion===void 0||te===!0;let he=w(y,ge,ue);G(34067,y,ue);let Se;if(se){ie&&oe&&t.texStorage2D(34067,he,re,ge.width,ge.height);for(let ne=0;ne<6;ne++){Se=W[ne].mipmaps;for(let Te=0;Te<Se.length;Te++){const Ue=Se[Te];y.format!==Ln?fe!==null?ie?t.compressedTexSubImage2D(34069+ne,Te,0,0,Ue.width,Ue.height,fe,Ue.data):t.compressedTexImage2D(34069+ne,Te,re,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?t.texSubImage2D(34069+ne,Te,0,0,Ue.width,Ue.height,fe,D,Ue.data):t.texImage2D(34069+ne,Te,re,Ue.width,Ue.height,0,fe,D,Ue.data)}}}else{Se=y.mipmaps,ie&&oe&&(Se.length>0&&he++,t.texStorage2D(34067,he,re,W[0].width,W[0].height));for(let ne=0;ne<6;ne++)if(ye){ie?t.texSubImage2D(34069+ne,0,0,0,W[ne].width,W[ne].height,fe,D,W[ne].data):t.texImage2D(34069+ne,0,re,W[ne].width,W[ne].height,0,fe,D,W[ne].data);for(let Te=0;Te<Se.length;Te++){const Be=Se[Te].image[ne].image;ie?t.texSubImage2D(34069+ne,Te+1,0,0,Be.width,Be.height,fe,D,Be.data):t.texImage2D(34069+ne,Te+1,re,Be.width,Be.height,0,fe,D,Be.data)}}else{ie?t.texSubImage2D(34069+ne,0,0,0,fe,D,W[ne]):t.texImage2D(34069+ne,0,re,fe,D,W[ne]);for(let Te=0;Te<Se.length;Te++){const Ue=Se[Te];ie?t.texSubImage2D(34069+ne,Te+1,0,0,fe,D,Ue.image[ne]):t.texImage2D(34069+ne,Te+1,re,fe,D,Ue.image[ne])}}}T(y,ue)&&C(34067),K.__currentVersion=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ae(A,y,j,te,K){const se=r.convert(j.format,j.encoding),ye=r.convert(j.type),W=x(j.internalFormat,se,ye,j.encoding);n.get(y).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,W,y.width,y.height,y.depth,0,se,ye,null):t.texImage2D(K,0,W,y.width,y.height,0,se,ye,null)),t.bindFramebuffer(36160,A),Ce(y)?f.framebufferTexture2DMultisampleEXT(36160,te,K,n.get(j).__webglTexture,0,Je(y)):a.framebufferTexture2D(36160,te,K,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(A,y,j){if(a.bindRenderbuffer(36161,A),y.depthBuffer&&!y.stencilBuffer){let te=33189;if(j||Ce(y)){const K=y.depthTexture;K&&K.isDepthTexture&&(K.type===Ji?te=36012:K.type===Ki&&(te=33190));const se=Je(y);Ce(y)?f.renderbufferStorageMultisampleEXT(36161,se,te,y.width,y.height):a.renderbufferStorageMultisample(36161,se,te,y.width,y.height)}else a.renderbufferStorage(36161,te,y.width,y.height);a.framebufferRenderbuffer(36160,36096,36161,A)}else if(y.depthBuffer&&y.stencilBuffer){const te=Je(y);j&&Ce(y)===!1?a.renderbufferStorageMultisample(36161,te,35056,y.width,y.height):Ce(y)?f.renderbufferStorageMultisampleEXT(36161,te,35056,y.width,y.height):a.renderbufferStorage(36161,34041,y.width,y.height),a.framebufferRenderbuffer(36160,33306,36161,A)}else{const te=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let K=0;K<te.length;K++){const se=te[K],ye=r.convert(se.format,se.encoding),W=r.convert(se.type),ge=x(se.internalFormat,ye,W,se.encoding),ue=Je(y);j&&Ce(y)===!1?a.renderbufferStorageMultisample(36161,ue,ge,y.width,y.height):Ce(y)?f.renderbufferStorageMultisampleEXT(36161,ue,ge,y.width,y.height):a.renderbufferStorage(36161,ge,y.width,y.height)}}a.bindRenderbuffer(36161,null)}function de(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),L(y.depthTexture,0);const te=n.get(y.depthTexture).__webglTexture,K=Je(y);if(y.depthTexture.format===ir)Ce(y)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,K):a.framebufferTexture2D(36160,36096,3553,te,0);else if(y.depthTexture.format===es)Ce(y)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,K):a.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ve(A){const y=n.get(A),j=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");de(y.__webglFramebuffer,A)}else if(j){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]=a.createRenderbuffer(),Ne(y.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=a.createRenderbuffer(),Ne(y.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Ze(A,y,j){const te=n.get(A);y!==void 0&&ae(te.__webglFramebuffer,A,A.texture,36064,3553),j!==void 0&&ve(A)}function tt(A){const y=A.texture,j=n.get(A),te=n.get(y);A.addEventListener("dispose",Y),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture()),te.__version=y.version,o.memory.textures++);const K=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,ye=S(A)||s;if(K){j.__webglFramebuffer=[];for(let W=0;W<6;W++)j.__webglFramebuffer[W]=a.createFramebuffer()}else{if(j.__webglFramebuffer=a.createFramebuffer(),se)if(i.drawBuffers){const W=A.texture;for(let ge=0,ue=W.length;ge<ue;ge++){const fe=n.get(W[ge]);fe.__webglTexture===void 0&&(fe.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&Ce(A)===!1){const W=se?y:[y];j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let ge=0;ge<W.length;ge++){const ue=W[ge];j.__webglColorRenderbuffer[ge]=a.createRenderbuffer(),a.bindRenderbuffer(36161,j.__webglColorRenderbuffer[ge]);const fe=r.convert(ue.format,ue.encoding),D=r.convert(ue.type),re=x(ue.internalFormat,fe,D,ue.encoding),ie=Je(A);a.renderbufferStorageMultisample(36161,ie,re,A.width,A.height),a.framebufferRenderbuffer(36160,36064+ge,36161,j.__webglColorRenderbuffer[ge])}a.bindRenderbuffer(36161,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),Ne(j.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,te.__webglTexture),G(34067,y,ye);for(let W=0;W<6;W++)ae(j.__webglFramebuffer[W],A,y,36064,34069+W);T(y,ye)&&C(34067),t.unbindTexture()}else if(se){const W=A.texture;for(let ge=0,ue=W.length;ge<ue;ge++){const fe=W[ge],D=n.get(fe);t.bindTexture(3553,D.__webglTexture),G(3553,fe,ye),ae(j.__webglFramebuffer,A,fe,36064+ge,3553),T(fe,ye)&&C(3553)}t.unbindTexture()}else{let W=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?W=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(W,te.__webglTexture),G(W,y,ye),ae(j.__webglFramebuffer,A,y,36064,W),T(y,ye)&&C(W),t.unbindTexture()}A.depthBuffer&&ve(A)}function Ke(A){const y=S(A)||s,j=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,K=j.length;te<K;te++){const se=j[te];if(T(se,y)){const ye=A.isWebGLCubeRenderTarget?34067:3553,W=n.get(se).__webglTexture;t.bindTexture(ye,W),C(ye),t.unbindTexture()}}}function X(A){if(s&&A.samples>0&&Ce(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],j=A.width,te=A.height;let K=16384;const se=[],ye=A.stencilBuffer?33306:36096,W=n.get(A),ge=A.isWebGLMultipleRenderTargets===!0;if(ge)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,W.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,W.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,W.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){se.push(36064+ue),A.depthBuffer&&se.push(ye);const fe=W.__ignoreDepthValues!==void 0?W.__ignoreDepthValues:!1;if(fe===!1&&(A.depthBuffer&&(K|=256),A.stencilBuffer&&(K|=1024)),ge&&a.framebufferRenderbuffer(36008,36064,36161,W.__webglColorRenderbuffer[ue]),fe===!0&&(a.invalidateFramebuffer(36008,[ye]),a.invalidateFramebuffer(36009,[ye])),ge){const D=n.get(y[ue]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,D,0)}a.blitFramebuffer(0,0,j,te,0,0,j,te,K,9728),m&&a.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ge)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ue,36161,W.__webglColorRenderbuffer[ue]);const fe=n.get(y[ue]).__webglTexture;t.bindFramebuffer(36160,W.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ue,3553,fe,0)}t.bindFramebuffer(36009,W.__webglMultisampledFramebuffer)}}function Je(A){return Math.min(h,A.samples)}function Ce(A){const y=n.get(A);return s&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(A){const y=o.render.frame;g.get(A)!==y&&(g.set(A,y),A.update())}function xt(A,y){const j=A.encoding,te=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===yl||j!==fr&&(j===nt?s===!1?e.has("EXT_sRGB")===!0&&te===Ln?(A.format=yl,A.minFilter=dn,A.generateMipmaps=!1):y=vh.sRGBToLinear(y):(te!==Ln||K!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),y}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=L,this.setTexture2DArray=Q,this.setTexture3D=ee,this.setTextureCube=J,this.rebindTextures=Ze,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ce}function J0(a,e,t){const n=t.isWebGL2;function i(r,o=null){let s;if(r===hr)return 5121;if(r===Zd)return 32819;if(r===$d)return 32820;if(r===qd)return 5120;if(r===Yd)return 5122;if(r===gh)return 5123;if(r===jd)return 5124;if(r===Ki)return 5125;if(r===Ji)return 5126;if(r===ks)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Kd)return 6406;if(r===Ln)return 6408;if(r===Qd)return 6409;if(r===ep)return 6410;if(r===ir)return 6402;if(r===es)return 34041;if(r===tp)return 6403;if(r===Jd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===yl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===np)return 36244;if(r===ip)return 33319;if(r===rp)return 33320;if(r===sp)return 36249;if(r===So||r===bo||r===wo||r===To)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===To)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wc||r===Tc||r===Ec||r===Ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ap)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Cc||r===Lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Cc)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Lc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dc||r===Pc||r===Rc||r===Ic||r===Fc||r===Oc||r===Nc||r===zc||r===Uc||r===kc||r===Bc||r===Gc||r===Vc||r===Hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Dc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ic)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Oc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Wc)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Wr?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Q0 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wa extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ex={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(s!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ex))),c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const M=new wa;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[d.jointName]=M,c.add(M)}const _=c.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class tx extends yn{constructor(e,t,n,i,r,o,s,l,c,u){if(u=u!==void 0?u:ir,u!==ir&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=Ki),n===void 0&&u===es&&(n=Wr),super(null,i,r,o,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1}}class nx extends us{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],M=new Map,E=new pn;E.layers.enable(1),E.viewport=new Ft;const S=new pn;S.layers.enable(2),S.viewport=new Ft;const v=[E,S],T=new Q0;T.layers.enable(1),T.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let L=_[V];return L===void 0&&(L=new el,_[V]=L),L.getTargetRaySpace()},this.getControllerGrip=function(V){let L=_[V];return L===void 0&&(L=new el,_[V]=L),L.getGripSpace()},this.getHand=function(V){let L=_[V];return L===void 0&&(L=new el,_[V]=L),L.getHandSpace()};function w(V){const L=M.get(V.inputSource);L!==void 0&&L.dispatchEvent({type:V.type,data:V.inputSource})}function R(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",I),M.forEach(function(V,L){V!==void 0&&V.disconnect(L)}),M.clear(),C=null,x=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",R),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const L={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,L),i.updateRenderState({baseLayer:f}),p=new oi(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:hr,encoding:e.outputEncoding})}else{let L=null,Q=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,L=g.stencil?es:ir,Q=g.stencil?Wr:Ki);const J={colorFormat:e.outputEncoding===nt?35907:32856,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(J),i.updateRenderState({layers:[h]}),p=new oi(h.textureWidth,h.textureHeight,{format:Ln,type:hr,depthTexture:new tx(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ce=e.properties.get(p);ce.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(s),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(V){const L=i.inputSources;for(let Q=0;Q<L.length;Q++){const ee=L[Q].handedness==="right"?1:0;M.set(L[Q],_[ee])}for(let Q=0;Q<V.removed.length;Q++){const ee=V.removed[Q],J=M.get(ee);J&&(J.dispatchEvent({type:"disconnected",data:ee}),M.delete(ee))}for(let Q=0;Q<V.added.length;Q++){const ee=V.added[Q],J=M.get(ee);J&&J.dispatchEvent({type:"connected",data:ee})}}const Y=new z,Z=new z;function P(V,L,Q){Y.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(Q.matrixWorld);const ee=Y.distanceTo(Z),J=L.projectionMatrix.elements,ce=Q.projectionMatrix.elements,Me=J[14]/(J[10]-1),G=J[14]/(J[10]+1),Oe=(J[9]+1)/J[5],we=(J[9]-1)/J[5],De=(J[8]-1)/J[0],ae=(ce[8]+1)/ce[0],Ne=Me*De,de=Me*ae,ve=ee/(-De+ae),Ze=ve*-De;L.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ze),V.translateZ(ve),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const tt=Me+ve,Ke=G+ve,X=Ne-Ze,Je=de+(ee-Ze),Ce=Oe*G/Ke*tt,_t=we*G/Ke*tt;V.projectionMatrix.makePerspective(X,Je,Ce,_t,tt,Ke)}function U(V,L){L===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(L.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;T.near=S.near=E.near=V.near,T.far=S.far=E.far=V.far,(C!==T.near||x!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,x=T.far);const L=V.parent,Q=T.cameras;U(T,L);for(let J=0;J<Q.length;J++)U(Q[J],L);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),V.position.copy(T.position),V.quaternion.copy(T.quaternion),V.scale.copy(T.scale),V.matrix.copy(T.matrix),V.matrixWorld.copy(T.matrixWorld);const ee=V.children;for(let J=0,ce=ee.length;J<ce;J++)ee[J].updateMatrixWorld(!0);Q.length===2?P(T,E,S):T.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(V){h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let N=null;function B(V,L){if(c=L.getViewerPose(l||o),m=L,c!==null){const ee=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let J=!1;ee.length!==T.cameras.length&&(T.cameras.length=0,J=!0);for(let ce=0;ce<ee.length;ce++){const Me=ee[ce];let G=null;if(f!==null)G=f.getViewport(Me);else{const we=u.getViewSubImage(h,Me);G=we.viewport,ce===0&&(e.setRenderTargetTextures(p,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p))}let Oe=v[ce];Oe===void 0&&(Oe=new pn,Oe.layers.enable(ce),Oe.viewport=new Ft,v[ce]=Oe),Oe.matrix.fromArray(Me.transform.matrix),Oe.projectionMatrix.fromArray(Me.projectionMatrix),Oe.viewport.set(G.x,G.y,G.width,G.height),ce===0&&T.matrix.copy(Oe.matrix),J===!0&&T.cameras.push(Oe)}}const Q=i.inputSources;for(let ee=0;ee<_.length;ee++){const J=Q[ee],ce=M.get(J);ce!==void 0&&ce.update(J,L,l||o)}N&&N(V,L),m=null}const H=new Ch;H.setAnimationLoop(B),this.setAnimationLoop=function(V){N=V},this.dispose=function(){}}}function ix(a,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,E)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?s(d,p,_,M):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Pn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Pn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const S=a.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let E;p.aoMap?E=p.aoMap:p.lightMap&&(E=p.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),d.uv2Transform.value.copy(E.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=M*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),d.uvTransform.value.copy(E.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Pn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function rx(){const a=$a("canvas");return a.style.display="block",a}function zh(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:rx(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fr,this.physicallyCorrectLights=!1,this.toneMapping=ai,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,M=0,E=null,S=-1,v=null;const T=new Ft,C=new Ft;let x=null,w=e.width,R=e.height,I=1,Y=null,Z=null;const P=new Ft(0,0,w,R),U=new Ft(0,0,w,R);let N=!1;const B=new Ah;let H=!1,V=!1,L=null;const Q=new Ot,ee=new Ye,J=new z,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return E===null?I:1}let G=t;function Oe(b,F){for(let k=0;k<b.length;k++){const O=b[k],q=e.getContext(O,F);if(q!==null)return q}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",ie,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),G=Oe(F,b),G===null)throw Oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let we,De,ae,Ne,de,ve,Ze,tt,Ke,X,Je,Ce,_t,xt,A,y,j,te,K,se,ye,W,ge;function ue(){we=new __(G),De=new h_(G,we,a),we.init(De),W=new J0(G,we,De),ae=new $0(G,we,De),Ne=new y_,de=new U0,ve=new K0(G,we,ae,de,De,W,Ne),Ze=new d_(d),tt=new g_(d),Ke=new Rp(G,De),ge=new c_(G,we,Ke,De),X=new x_(G,Ke,Ne,ge),Je=new w_(G,X,Ke,Ne),K=new b_(G,De,ve),y=new f_(de),Ce=new z0(d,Ze,tt,we,De,ge,y),_t=new ix(d,de),xt=new B0,A=new q0(we,De),te=new l_(d,Ze,ae,Je,u,o),j=new Z0(d,Je,De),se=new u_(G,we,Ne,De),ye=new v_(G,we,Ne,De),Ne.programs=Ce.programs,d.capabilities=De,d.extensions=we,d.properties=de,d.renderLists=xt,d.shadowMap=j,d.state=ae,d.info=Ne}ue();const fe=new nx(d,G);this.xr=fe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(w,R,!1))},this.getSize=function(b){return b.set(w,R)},this.setSize=function(b,F,k){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=b,R=F,e.width=Math.floor(b*I),e.height=Math.floor(F*I),k!==!1&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(w*I,R*I).floor()},this.setDrawingBufferSize=function(b,F,k){w=b,R=F,I=k,e.width=Math.floor(b*k),e.height=Math.floor(F*k),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,F,k,O){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,F,k,O),ae.viewport(T.copy(P).multiplyScalar(I).floor())},this.getScissor=function(b){return b.copy(U)},this.setScissor=function(b,F,k,O){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,F,k,O),ae.scissor(C.copy(U).multiplyScalar(I).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(b){ae.setScissorTest(N=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,F=!0,k=!0){let O=0;b&&(O|=16384),F&&(O|=256),k&&(O|=1024),G.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),xt.dispose(),A.dispose(),de.dispose(),Ze.dispose(),tt.dispose(),Je.dispose(),ge.dispose(),Ce.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ue),fe.removeEventListener("sessionend",Be),L&&(L.dispose(),L=null),rt.stop()};function D(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const b=Ne.autoReset,F=j.enabled,k=j.autoUpdate,O=j.needsUpdate,q=j.type;ue(),Ne.autoReset=b,j.enabled=F,j.autoUpdate=k,j.needsUpdate=O,j.type=q}function ie(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const F=b.target;F.removeEventListener("dispose",oe),he(F)}function he(b){Se(b),de.remove(b)}function Se(b){const F=de.get(b).programs;F!==void 0&&(F.forEach(function(k){Ce.releaseProgram(k)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,k,O,q,be){F===null&&(F=ce);const me=q.isMesh&&q.matrixWorld.determinant()<0,_e=Le(b,F,k,O,q);ae.setMaterial(O,me);let xe=k.index;const Ve=k.attributes.position;if(xe===null){if(Ve===void 0||Ve.count===0)return}else if(xe.count===0)return;let ze=1;O.wireframe===!0&&(xe=X.getWireframeAttribute(k),ze=2),ge.setup(q,O,_e,k,xe);let Ae,Ie=se;xe!==null&&(Ae=Ke.get(xe),Ie=ye,Ie.setIndex(Ae));const wt=xe!==null?xe.count:Ve.count,Fn=k.drawRange.start*ze,Zn=k.drawRange.count*ze,Dt=be!==null?be.start*ze:0,qe=be!==null?be.count*ze:1/0,xr=Math.max(Fn,Dt),ut=Math.min(wt,Fn+Zn,Dt+qe)-1,On=Math.max(0,ut-xr+1);if(On!==0){if(q.isMesh)O.wireframe===!0?(ae.setLineWidth(O.wireframeLinewidth*Me()),Ie.setMode(1)):Ie.setMode(4);else if(q.isLine){let di=O.linewidth;di===void 0&&(di=1),ae.setLineWidth(di*Me()),q.isLineSegments?Ie.setMode(1):q.isLineLoop?Ie.setMode(2):Ie.setMode(3)}else q.isPoints?Ie.setMode(0):q.isSprite&&Ie.setMode(4);if(q.isInstancedMesh)Ie.renderInstances(xr,On,q.count);else if(k.isInstancedBufferGeometry){const di=Math.min(k.instanceCount,k._maxInstanceCount);Ie.renderInstances(xr,On,di)}else Ie.render(xr,On)}},this.compile=function(b,F){f=A.get(b),f.init(),g.push(f),b.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(d.physicallyCorrectLights),b.traverse(function(k){const O=k.material;if(O)if(Array.isArray(O))for(let q=0;q<O.length;q++){const be=O[q];pe(be,b,k)}else pe(O,b,k)}),g.pop(),f=null};let ne=null;function Te(b){ne&&ne(b)}function Ue(){rt.stop()}function Be(){rt.start()}const rt=new Ch;rt.setAnimationLoop(Te),typeof self!="undefined"&&rt.setContext(self),this.setAnimationLoop=function(b){ne=b,fe.setAnimationLoop(b),b===null?rt.stop():rt.start()},fe.addEventListener("sessionstart",Ue),fe.addEventListener("sessionend",Be),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(d,b,F,E),f=A.get(b,g.length),f.init(),g.push(f),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(Q),V=this.localClippingEnabled,H=y.init(this.clippingPlanes,V,F),h=xt.get(b,m.length),h.init(),m.push(h),ct(b,F,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(Y,Z),H===!0&&y.beginShadows();const k=f.state.shadowsArray;if(j.render(k,b,F),H===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,b),f.setupLights(d.physicallyCorrectLights),F.isArrayCamera){const O=F.cameras;for(let q=0,be=O.length;q<be;q++){const me=O[q];fi(h,b,me,me.viewport)}}else fi(h,b,F);E!==null&&(ve.updateMultisampleRenderTarget(E),ve.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(d,b,F),ge.resetDefaultState(),S=-1,v=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ct(b,F,k,O){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||B.intersectsSprite(b)){O&&J.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const me=Je.update(b),_e=b.material;_e.visible&&h.push(b,me,_e,k,J.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ne.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ne.render.frame),!b.frustumCulled||B.intersectsObject(b))){O&&J.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const me=Je.update(b),_e=b.material;if(Array.isArray(_e)){const xe=me.groups;for(let Ve=0,ze=xe.length;Ve<ze;Ve++){const Ae=xe[Ve],Ie=_e[Ae.materialIndex];Ie&&Ie.visible&&h.push(b,me,Ie,k,J.z,Ae)}}else _e.visible&&h.push(b,me,_e,k,J.z,null)}}const be=b.children;for(let me=0,_e=be.length;me<_e;me++)ct(be[me],F,k,O)}function fi(b,F,k,O){const q=b.opaque,be=b.transmissive,me=b.transparent;f.setupLightsView(k),be.length>0&&Ni(q,F,k),O&&ae.viewport(T.copy(O)),q.length>0&&ke(q,F,k),be.length>0&&ke(be,F,k),me.length>0&&ke(me,F,k),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Ni(b,F,k){const O=De.isWebGL2;L===null&&(L=new oi(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?ks:hr,minFilter:fo,samples:O&&r===!0?4:0})),d.getDrawingBufferSize(ee),O?L.setSize(ee.x,ee.y):L.setSize(Ml(ee.x),Ml(ee.y));const q=d.getRenderTarget();d.setRenderTarget(L),d.clear();const be=d.toneMapping;d.toneMapping=ai,ke(b,F,k),d.toneMapping=be,ve.updateMultisampleRenderTarget(L),ve.updateRenderTargetMipmap(L),d.setRenderTarget(q)}function ke(b,F,k){const O=F.isScene===!0?F.overrideMaterial:null;for(let q=0,be=b.length;q<be;q++){const me=b[q],_e=me.object,xe=me.geometry,Ve=O===null?me.material:O,ze=me.group;_e.layers.test(k.layers)&&$(_e,F,k,xe,Ve,ze)}}function $(b,F,k,O,q,be){b.onBeforeRender(d,F,k,O,q,be),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(d,F,k,O,b,be),q.transparent===!0&&q.side===Kr?(q.side=Pn,q.needsUpdate=!0,d.renderBufferDirect(k,F,O,q,b,be),q.side=Us,q.needsUpdate=!0,d.renderBufferDirect(k,F,O,q,b,be),q.side=Kr):d.renderBufferDirect(k,F,O,q,b,be),b.onAfterRender(d,F,k,O,q,be)}function pe(b,F,k){F.isScene!==!0&&(F=ce);const O=de.get(b),q=f.state.lights,be=f.state.shadowsArray,me=q.state.version,_e=Ce.getParameters(b,q.state,be,F,k),xe=Ce.getProgramCacheKey(_e);let Ve=O.programs;O.environment=b.isMeshStandardMaterial?F.environment:null,O.fog=F.fog,O.envMap=(b.isMeshStandardMaterial?tt:Ze).get(b.envMap||O.environment),Ve===void 0&&(b.addEventListener("dispose",oe),Ve=new Map,O.programs=Ve);let ze=Ve.get(xe);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===me)return Ee(b,_e),ze}else _e.uniforms=Ce.getUniforms(b),b.onBuild(k,_e,d),b.onBeforeCompile(_e,d),ze=Ce.acquireProgram(_e,xe),Ve.set(xe,ze),O.uniforms=_e.uniforms;const Ae=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=y.uniform),Ee(b,_e),O.needsLights=Re(b),O.lightsStateVersion=me,O.needsLights&&(Ae.ambientLightColor.value=q.state.ambient,Ae.lightProbe.value=q.state.probe,Ae.directionalLights.value=q.state.directional,Ae.directionalLightShadows.value=q.state.directionalShadow,Ae.spotLights.value=q.state.spot,Ae.spotLightShadows.value=q.state.spotShadow,Ae.rectAreaLights.value=q.state.rectArea,Ae.ltc_1.value=q.state.rectAreaLTC1,Ae.ltc_2.value=q.state.rectAreaLTC2,Ae.pointLights.value=q.state.point,Ae.pointLightShadows.value=q.state.pointShadow,Ae.hemisphereLights.value=q.state.hemi,Ae.directionalShadowMap.value=q.state.directionalShadowMap,Ae.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ae.spotShadowMap.value=q.state.spotShadowMap,Ae.spotShadowMatrix.value=q.state.spotShadowMatrix,Ae.pointShadowMap.value=q.state.pointShadowMap,Ae.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ie=ze.getUniforms(),wt=ka.seqWithValue(Ie.seq,Ae);return O.currentProgram=ze,O.uniformsList=wt,ze}function Ee(b,F){const k=de.get(b);k.outputEncoding=F.outputEncoding,k.instancing=F.instancing,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function Le(b,F,k,O,q){F.isScene!==!0&&(F=ce),ve.resetTextureUnits();const be=F.fog,me=O.isMeshStandardMaterial?F.environment:null,_e=E===null?d.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:fr,xe=(O.isMeshStandardMaterial?tt:Ze).get(O.envMap||me),Ve=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ze=!!O.normalMap&&!!k.attributes.tangent,Ae=!!k.morphAttributes.position,Ie=!!k.morphAttributes.normal,wt=!!k.morphAttributes.color,Fn=O.toneMapped?d.toneMapping:ai,Zn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Dt=Zn!==void 0?Zn.length:0,qe=de.get(O),xr=f.state.lights;if(H===!0&&(V===!0||b!==v)){const Nn=b===v&&O.id===S;y.setState(O,b,Nn)}let ut=!1;O.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==xr.state.version||qe.outputEncoding!==_e||q.isInstancedMesh&&qe.instancing===!1||!q.isInstancedMesh&&qe.instancing===!0||q.isSkinnedMesh&&qe.skinning===!1||!q.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==xe||O.fog===!0&&qe.fog!==be||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==y.numPlanes||qe.numIntersection!==y.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==ze||qe.morphTargets!==Ae||qe.morphNormals!==Ie||qe.morphColors!==wt||qe.toneMapping!==Fn||De.isWebGL2===!0&&qe.morphTargetsCount!==Dt)&&(ut=!0):(ut=!0,qe.__version=O.version);let On=qe.currentProgram;ut===!0&&(On=pe(O,F,q));let di=!1,ds=!1,yo=!1;const zt=On.getUniforms(),ps=qe.uniforms;if(ae.useProgram(On.program)&&(di=!0,ds=!0,yo=!0),O.id!==S&&(S=O.id,ds=!0),di||v!==b){if(zt.setValue(G,"projectionMatrix",b.projectionMatrix),De.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),v!==b&&(v=b,ds=!0,yo=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Nn=zt.map.cameraPosition;Nn!==void 0&&Nn.setValue(G,J.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&zt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||q.isSkinnedMesh)&&zt.setValue(G,"viewMatrix",b.matrixWorldInverse)}if(q.isSkinnedMesh){zt.setOptional(G,q,"bindMatrix"),zt.setOptional(G,q,"bindMatrixInverse");const Nn=q.skeleton;Nn&&(De.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),zt.setValue(G,"boneTexture",Nn.boneTexture,ve),zt.setValue(G,"boneTextureSize",Nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Mo=k.morphAttributes;return(Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0&&De.isWebGL2===!0)&&K.update(q,k,O,On),(ds||qe.receiveShadow!==q.receiveShadow)&&(qe.receiveShadow=q.receiveShadow,zt.setValue(G,"receiveShadow",q.receiveShadow)),ds&&(zt.setValue(G,"toneMappingExposure",d.toneMappingExposure),qe.needsLights&&pt(ps,yo),be&&O.fog===!0&&_t.refreshFogUniforms(ps,be),_t.refreshMaterialUniforms(ps,O,I,R,L),ka.upload(G,qe.uniformsList,ps,ve)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ka.upload(G,qe.uniformsList,ps,ve),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&zt.setValue(G,"center",q.center),zt.setValue(G,"modelViewMatrix",q.modelViewMatrix),zt.setValue(G,"normalMatrix",q.normalMatrix),zt.setValue(G,"modelMatrix",q.matrixWorld),On}function pt(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Re(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,F,k){de.get(b.texture).__webglTexture=F,de.get(b.depthTexture).__webglTexture=k;const O=de.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=k===void 0,O.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const k=de.get(b);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,k=0){E=b,_=F,M=k;let O=!0;if(b){const xe=de.get(b);xe.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),O=!1):xe.__webglFramebuffer===void 0?ve.setupRenderTarget(b):xe.__hasExternalTextures&&ve.rebindTextures(b,de.get(b.texture).__webglTexture,de.get(b.depthTexture).__webglTexture)}let q=null,be=!1,me=!1;if(b){const xe=b.texture;(xe.isData3DTexture||xe.isDataArrayTexture)&&(me=!0);const Ve=de.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(q=Ve[F],be=!0):De.isWebGL2&&b.samples>0&&ve.useMultisampledRTT(b)===!1?q=de.get(b).__webglMultisampledFramebuffer:q=Ve,T.copy(b.viewport),C.copy(b.scissor),x=b.scissorTest}else T.copy(P).multiplyScalar(I).floor(),C.copy(U).multiplyScalar(I).floor(),x=N;if(ae.bindFramebuffer(36160,q)&&De.drawBuffers&&O&&ae.drawBuffers(b,q),ae.viewport(T),ae.scissor(C),ae.setScissorTest(x),be){const xe=de.get(b.texture);G.framebufferTexture2D(36160,36064,34069+F,xe.__webglTexture,k)}else if(me){const xe=de.get(b.texture),Ve=F||0;G.framebufferTextureLayer(36160,36064,xe.__webglTexture,k||0,Ve)}S=-1},this.readRenderTargetPixels=function(b,F,k,O,q,be,me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=de.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){ae.bindFramebuffer(36160,_e);try{const xe=b.texture,Ve=xe.format,ze=xe.type;if(Ve!==Ln&&W.convert(Ve)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=ze===ks&&(we.has("EXT_color_buffer_half_float")||De.isWebGL2&&we.has("EXT_color_buffer_float"));if(ze!==hr&&W.convert(ze)!==G.getParameter(35738)&&!(ze===Ji&&(De.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-O&&k>=0&&k<=b.height-q&&G.readPixels(F,k,O,q,W.convert(Ve),W.convert(ze),be)}finally{const xe=E!==null?de.get(E).__webglFramebuffer:null;ae.bindFramebuffer(36160,xe)}}},this.copyFramebufferToTexture=function(b,F,k=0){const O=Math.pow(2,-k),q=Math.floor(F.image.width*O),be=Math.floor(F.image.height*O);ve.setTexture2D(F,0),G.copyTexSubImage2D(3553,k,0,0,b.x,b.y,q,be),ae.unbindTexture()},this.copyTextureToTexture=function(b,F,k,O=0){const q=F.image.width,be=F.image.height,me=W.convert(k.format),_e=W.convert(k.type);ve.setTexture2D(k,0),G.pixelStorei(37440,k.flipY),G.pixelStorei(37441,k.premultiplyAlpha),G.pixelStorei(3317,k.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,O,b.x,b.y,q,be,me,_e,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,O,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,me,F.mipmaps[0].data):G.texSubImage2D(3553,O,b.x,b.y,me,_e,F.image),O===0&&k.generateMipmaps&&G.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(b,F,k,O,q=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=b.max.x-b.min.x+1,me=b.max.y-b.min.y+1,_e=b.max.z-b.min.z+1,xe=W.convert(O.format),Ve=W.convert(O.type);let ze;if(O.isData3DTexture)ve.setTexture3D(O,0),ze=32879;else if(O.isDataArrayTexture)ve.setTexture2DArray(O,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment);const Ae=G.getParameter(3314),Ie=G.getParameter(32878),wt=G.getParameter(3316),Fn=G.getParameter(3315),Zn=G.getParameter(32877),Dt=k.isCompressedTexture?k.mipmaps[0]:k.image;G.pixelStorei(3314,Dt.width),G.pixelStorei(32878,Dt.height),G.pixelStorei(3316,b.min.x),G.pixelStorei(3315,b.min.y),G.pixelStorei(32877,b.min.z),k.isDataTexture||k.isData3DTexture?G.texSubImage3D(ze,q,F.x,F.y,F.z,be,me,_e,xe,Ve,Dt.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ze,q,F.x,F.y,F.z,be,me,_e,xe,Dt.data)):G.texSubImage3D(ze,q,F.x,F.y,F.z,be,me,_e,xe,Ve,Dt),G.pixelStorei(3314,Ae),G.pixelStorei(32878,Ie),G.pixelStorei(3316,wt),G.pixelStorei(3315,Fn),G.pixelStorei(32877,Zn),q===0&&O.generateMipmaps&&G.generateMipmap(ze),ae.unbindTexture()},this.initTexture=function(b){ve.setTexture2D(b,0),ae.unbindTexture()},this.resetState=function(){_=0,M=0,E=null,ae.reset(),ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class sx extends zh{}sx.prototype.isWebGL1Renderer=!0;class Cu extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class ax extends Lt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Uh extends Lt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class ox extends Lt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class lx extends yn{constructor(e,t,n,i,r,o,s,l,c){super(e,t,n,i,r,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}new z;new z;new z;new z;new Vn;class cx extends Lt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ux extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kh extends Lt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hx extends kh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fx extends Lt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dx extends Lt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class px extends Lt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class mx extends Lt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class gx extends Lt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _x extends Uh{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const xx={ShadowMaterial:cx,SpriteMaterial:ax,RawShaderMaterial:ux,ShaderMaterial:Rn,PointsMaterial:ox,MeshPhysicalMaterial:hx,MeshStandardMaterial:kh,MeshPhongMaterial:fx,MeshToonMaterial:dx,MeshNormalMaterial:px,MeshLambertMaterial:mx,MeshDepthMaterial:Oh,MeshDistanceMaterial:Nh,MeshBasicMaterial:Wl,MeshMatcapMaterial:gx,LineDashedMaterial:_x,LineBasicMaterial:Uh,Material:Lt};Lt.fromType=function(a){return new xx[a]};class vx extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class yx extends vx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bh="\\[\\]\\.:\\/",ql="[^"+Bh+"]",Mx="[^"+Bh.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",ql);/(WCOD+)?/.source.replace("WCOD",Mx);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql);const zn=new Uint32Array(512),Un=new Uint32Array(512);for(let a=0;a<256;++a){const e=a-127;e<-27?(zn[a]=0,zn[a|256]=32768,Un[a]=24,Un[a|256]=24):e<-14?(zn[a]=1024>>-e-14,zn[a|256]=1024>>-e-14|32768,Un[a]=-e-1,Un[a|256]=-e-1):e<=15?(zn[a]=e+15<<10,zn[a|256]=e+15<<10|32768,Un[a]=13,Un[a|256]=13):e<128?(zn[a]=31744,zn[a|256]=64512,Un[a]=24,Un[a|256]=24):(zn[a]=31744,zn[a|256]=64512,Un[a]=13,Un[a|256]=13)}const Gh=new Uint32Array(2048),na=new Uint32Array(64),Sx=new Uint32Array(64);for(let a=1;a<1024;++a){let e=a<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Gh[a]=e|t}for(let a=1024;a<2048;++a)Gh[a]=939524096+(a-1024<<13);for(let a=1;a<31;++a)na[a]=a<<23;na[31]=1199570944;na[32]=2147483648;for(let a=33;a<63;++a)na[a]=2147483648+(a-32<<23);na[63]=3347054592;for(let a=1;a<64;++a)a!==32&&(Sx[a]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);const xs=new z;function cn(a,e,t,n,i,r){const o=2*Math.PI*i/4,s=Math.max(r-2*i,0),l=Math.PI/4;xs.copy(e),xs[n]=0,xs.normalize();const c=.5*o/(o+s),u=1-xs.angleTo(a)/l;return Math.sign(xs[t])===1?u*c:s/(o+s)+c+c*(1-u)}class bx extends hs{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const s=new z,l=new z,c=new z(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,g=new z,d=.5/i;for(let p=0,_=0;p<u.length;p+=3,_+=2)switch(s.fromArray(u,p),l.copy(s),l.x-=Math.sign(l.x)*d,l.y-=Math.sign(l.y)*d,l.z-=Math.sign(l.z)*d,l.normalize(),u[p+0]=c.x*Math.sign(s.x)+l.x*r,u[p+1]=c.y*Math.sign(s.y)+l.y*r,u[p+2]=c.z*Math.sign(s.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),f[_+0]=cn(g,l,"z","y",r,n),f[_+1]=1-cn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[_+0]=1-cn(g,l,"z","y",r,n),f[_+1]=1-cn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[_+0]=1-cn(g,l,"x","z",r,e),f[_+1]=cn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[_+0]=1-cn(g,l,"x","z",r,e),f[_+1]=1-cn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[_+0]=1-cn(g,l,"x","y",r,e),f[_+1]=1-cn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[_+0]=cn(g,l,"x","y",r,e),f[_+1]=1-cn(g,l,"y","x",r,t);break}}}var wx=`varying vec2 vUv; 

void main() {
    vUv = (position.xy + 1.0) / 2.0; 

    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition; 
}`,Tx=`varying vec2 vUv;
uniform sampler2D texture1;
uniform float tAspect;
uniform float wAspect;
uniform float time;
uniform float scroll;
uniform float velocity;
uniform float seed;

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

float repeat = 5.0;
// float seed   = 2.0;
float speed  = 0.15;

void main() {



    vec2 uv = 2.0 * vUv - 1.0;

    float mask = clamp((abs(uv.x) - 0.8) * 5.0, 0.0, 1.0);

    uv.y *= 1.0 - ((mask*mask*mask) * .1);

    uv = 0.5 * (uv * vec2(wAspect, 1.0) * vec2(1.0/tAspect, 1.0)) + 0.5;
    
    float snapped = floor(uv.y * repeat) / repeat;

    float random = rand(vec2(snapped) + seed);

    float dir = sign(2.0 * random - 1.0);
    random = dir * (random * .8 + .2);

    vec2 rowsR = fract(uv * repeat + vec2(random * scroll * speed, 0.0));
    vec2 rowsG = fract(uv * repeat + vec2(random * scroll * speed + (velocity * .00075 * random), 0.0));
    vec2 rowsB = fract(uv * repeat + vec2(random * scroll * speed + (velocity * .00125 * random), 0.0));

    float colorR = texture2D(texture1, rowsR).a;
    float colorG = texture2D(texture1, rowsG).a;
    float colorB = texture2D(texture1, rowsB).a;

    vec4 color = 1.0 - vec4(colorR, colorG, colorB, 0.0);

    gl_FragColor = color;

    // gl_FragColor = vec4(vec3(mask), 1.0);
}`,Ex=`varying vec3 eyeVector;
varying vec3 worldNormal;

void main() {
	vec4 worldPos = modelMatrix * vec4( position, 1.0);
	eyeVector = normalize(worldPos.xyz - cameraPosition);
	worldNormal = normalize( modelViewMatrix * vec4(normal, 0.0)).xyz;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ax=`uniform sampler2D envMap;
uniform vec2 resolution;

varying vec3 worldNormal;
varying vec3 eyeVector;

float Fresnel(vec3 eyeVector, vec3 worldNormal) {
	return pow( 1.0 + dot( eyeVector, worldNormal), 3.0 );
}

float ior = 1.8;

void main() {

	// get screen coordinates
	vec2 uv = gl_FragCoord.xy / resolution;

	vec3 normal = worldNormal;
	// calculate refraction and add to the screen coordinates
	vec3 refracted = refract(eyeVector, normal, 1.0/ior);
	uv += refracted.xy;

	// sample the background texture
	vec4 tex = texture2D(envMap, uv) * .9;

	vec4 output1 = tex;

	// calculate the Fresnel ratio
	float f = Fresnel(eyeVector, normal);

	// mix the refraction color and reflection color
	output1.rgb = mix(output1.rgb, vec3(1.0), f);


    // gl_FragColor = vec4(uv, 0.0, 1.0);
	gl_FragColor = vec4(output1.rgb, 1.0);
}`;class Cx{constructor(e){this.el=e,this.aspect=this.el.clientWidth/this.el.clientHeight,this.uniforms={wAspect:{value:this.aspect},time:{value:0},seed:{value:Math.random()*100}},this.init()}init(){this.scene=new Cu,this.renderer=new zh,this.renderer.setClearColor(new Fe(16777215)),this.el.appendChild(this.renderer.domElement),this.rtScene=new Cu,this.renderTarget=new oi,this.camera=new pn(90,this.aspect,.01,1e3),this.rtCamera=new Lh(-1,1,1,-1),this.camera.position.z=2,this.rtCamera.position.z=1;const e="REFRACT!",t=document.createElement("canvas"),n=t.getContext("2d"),i="bold 40em Helvetica",r=60,o=40;n.font=i;const s=n.measureText(e);t.width=s.width+r*2,t.height=s.actualBoundingBoxAscent+s.actualBoundingBoxDescent+o*2,console.log(t.width,t.height);const l=t.width/t.height;n.font=i,n.fillStyle="black",n.fillText(e,r,t.height-s.actualBoundingBoxDescent-o);const c=new lx(t);c.generateMipmaps=!1,c.needsUpdate=!0,this.uniforms=mc(pc({},this.uniforms),{texture1:{type:"t",value:c},tAspect:{type:"f",value:l},scroll:{type:"f",value:100},velocity:{type:"f",value:0}});const u=new po(2,2);this.material=new Rn({uniforms:this.uniforms,fragmentShader:Tx,vertexShader:wx,transparent:!0});const h=new qn(u,this.material);this.rtScene.add(h);const f=new yx(4210752);this.scene.add(f);const m=new bx(1,1,1,1,.01);this.material2=new Rn({uniforms:{envMap:{value:this.renderTarget.texture},resolution:{value:[this.el.clientWidth,this.el.clientHeight]}},fragmentShader:Ax,vertexShader:Ex,transparent:!0}),this.box=new qn(m,this.material2),this.box.rotation.z=-.5,this.box.position.z=0,this.scene.add(this.box),this.scene.background=this.renderTarget.texture,window.addEventListener("resize",()=>this.resize()),this.resize(),this.update()}resize(){this.aspect=this.el.clientWidth/this.el.clientHeight,this.uniforms.wAspect.value=this.aspect,this.material2.uniforms.resolution.value=[this.el.clientWidth,this.el.clientHeight],this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.renderTarget.setSize(this.el.clientWidth,this.el.clientHeight),this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix()}update(){requestAnimationFrame(()=>this.update()),this.renderer.setRenderTarget(this.renderTarget),this.renderer.render(this.rtScene,this.rtCamera),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}}function ni(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Vh(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ns={duration:.5,overwrite:!1,delay:0},Yl,gn=1e8,et=1/gn,bl=Math.PI*2,Lx=bl/4,Dx=0,Hh=Math.sqrt,Px=Math.cos,Rx=Math.sin,bt=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},ui=function(e){return typeof e=="number"},jl=function(e){return typeof e=="undefined"},hi=function(e){return typeof e=="object"},Kt=function(e){return e!==!1},Wh=function(){return typeof window!="undefined"},Ta=function(e){return St(e)||bt(e)},Xh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,wl=/(?:-?\.?\d|\.)+/gi,qh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,kr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yh=/[+-]=-?[.\d]+/,jh=/[^,'"\[\]\s]+/gi,Ix=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,it,kn,Tl,Zl,on={},Ka={},Zh,$h=function(e){return(Ka=dr(e,on))&&In},$l=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ja=function(e,t){return!t&&console.warn(e)},Kh=function(e,t){return e&&(on[e]=t)&&Ka&&(Ka[e]=t)||on},Bs=function(){return 0},Kl={},Ci=[],El={},Jh,nn={},nl={},Lu=30,Ba=[],Jl="",Ql=function(e){var t=e[0],n,i;if(hi(t)||St(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ba.length;i--&&!Ba[i].targetTest(t););n=Ba[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Mf(e[i],n)))||e.splice(i,1);return e},ar=function(e){return e._gsap||Ql(_n(e))[0]._gsap},Qh=function(e,t,n){return(n=e[t])&&St(n)?e[t]():jl(n)&&e.getAttribute&&e.getAttribute(t)||n},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},lt=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},Xr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Fx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Qa=function(){var e=Ci.length,t=Ci.slice(0),n,i;for(El={},Ci.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ef=function(e,t,n,i){Ci.length&&Qa(),e.render(t,n,i),Ci.length&&Qa()},tf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jh).length<2?t:bt(e)?e.trim():e},nf=function(e){return e},Sn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ox=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},dr=function(e,t){for(var n in t)e[n]=t[n];return e},Du=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=hi(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},eo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ls=function(e){var t=e.parent||it,n=e.keyframes?Ox(Nt(e.keyframes)):Sn;if(Kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Nx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},rf=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},go=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},li=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},or=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ux=function a(e){return!e||e._ts&&a(e.parent)},Pu=function(e){return e._repeat?is(e._tTime,e=e.duration()+e._rDelay)*e:0},is=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},to=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_o=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||et)||0))},ec=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_o(e),n._dirty||or(n,e)),e},sf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=to(e.rawTime(),t),(!t._dur||ia(0,t.totalDuration(),n)-t._tTime>et)&&t.render(n,!0)),or(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-et}},Hn=function(e,t,n,i){return t.parent&&li(t),t._start=Rt((ui(n)?n:n||e!==it?un(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),rf(e,t,"_first","_last",e._sort?"_start":0),Al(t)||(e._recent=t),i||sf(e,t),e},af=function(e,t){return(on.ScrollTrigger||$l("scrollTrigger",t))&&on.ScrollTrigger.create(t,e)},of=function(e,t,n,i){if(nc(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jh!==rn.frame)return Ci.push(e),e._lazy=[t,i],1},kx=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Al=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Bx=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&kx(e)&&!(!e._initted&&Al(e))||(e._ts<0||e._dp._ts<0)&&!Al(e))?0:1,s=e._rDelay,l=0,c,u,h;if(s&&e._repeat&&(l=ia(0,e._tDur,t),u=is(l,s),e._yoyo&&u&1&&(o=1-o),u!==is(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||i||e._zTime===et||!t&&e._zTime){if(!e._initted&&of(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?et:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&li(e,1),n||(xn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Gx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},rs=function(e,t,n,i){var r=e._repeat,o=Rt(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Rt(o*(r+1)+e._rDelay*r):o,s>0&&!i?ec(e,e._tTime=e._tDur*s):e.parent&&_o(e),n||or(e.parent,e),e},Ru=function(e){return e instanceof $t?or(e):rs(e,e._dur)},Vx={_start:0,endTime:Bs,totalDuration:Bs},un=function a(e,t,n){var i=e.labels,r=e._recent||Vx,o=e.duration()>=gn?r.endTime(!1):e._dur,s,l,c;return bt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(Nt(n)?n[0]:n).totalDuration()),s>1?a(e,t.substr(0,s-1),n)+l:o+l)):t==null?o:+t},Ds=function(e,t,n){var i=ui(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],s,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Kt(l.vars.inherit)&&l.parent;o.immediateRender=Kt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Mt(t[0],o,t[r+1])},Oi=function(e,t){return e||e===0?t(e):t},ia=function(e,t,n){return n<e?e:n>t?t:n},It=function(e,t){return!bt(e)||!(t=Ix.exec(e))?"":t[1]},Hx=function(e,t,n){return Oi(n,function(i){return ia(e,t,i)})},Cl=[].slice,lf=function(e,t){return e&&hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&hi(e[0]))&&!e.nodeType&&e!==kn},Wx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return bt(i)&&!t||lf(i,1)?(r=n).push.apply(r,_n(i)):n.push(i)})||n},_n=function(e,t,n){return bt(e)&&!n&&(Tl||!ss())?Cl.call((t||Zl).querySelectorAll(e),0):Nt(e)?Wx(e,n):lf(e)?Cl.call(e,0):e?[e]:[]},Xx=function(e){return e=_n(e)[0]||Ja("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _n(t,n.querySelectorAll?n:n===e?Ja("Invalid scope")||Zl.createElement("div"):e)}},cf=function(e){return e.sort(function(){return .5-Math.random()})},uf=function(e){if(St(e))return e;var t=hi(e)?e:{each:e},n=lr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,h=i;return bt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=o[d],_,M,E,S,v,T,C,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,gn])[1],!w){for(C=-gn;C<(C=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=o[d]=[],_=l?Math.min(w,d)*u-.5:i%w,M=w===gn?0:l?d*h/w-.5:i/w|0,C=0,x=gn,T=0;T<d;T++)E=T%w-_,S=M-(T/w|0),p[T]=v=c?Math.abs(c==="y"?S:E):Hh(E*E+S*S),v>C&&(C=v),v<x&&(x=v);i==="random"&&cf(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=It(t.amount||t.each)||0,n=n&&d<0?xf(n):n}return d=(p[f]-p.min)/p.max||0,Rt(p.b+(n?n(d):d)*p.v)+p.u}},Ll=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(ui(n)?0:It(n))}},hf=function(e,t){var n=Nt(e),i,r;return!n&&hi(e)&&(i=n=e.radius||gn,e.values?(e=_n(e.values),(r=!ui(e[0]))&&(i*=i)):e=Ll(e.increment)),Oi(t,n?St(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=gn,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-s,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-s),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||ui(o)?u:u+It(o)}:Ll(e))},ff=function(e,t,n,i){return Oi(Nt(e)?!t:n===!0?!!(n=0):!i,function(){return Nt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},Yx=function(e,t){return function(n){return e(parseFloat(n))+(t||It(n))}},jx=function(e,t,n){return pf(e,t,0,1,n)},df=function(e,t,n){return Oi(n,function(i){return e[~~t(i)]})},Zx=function a(e,t,n){var i=t-e;return Nt(e)?df(e,a(0,e.length),t):Oi(n,function(r){return(i+(r-e)%i)%i+e})},$x=function a(e,t,n){var i=t-e,r=i*2;return Nt(e)?df(e,a(0,e.length-1),t):Oi(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Gs=function(e){for(var t=0,n="",i,r,o,s;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(s?jh:wl),n+=e.substr(t,i-t)+ff(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},pf=function(e,t,n,i,r){var o=t-e,s=i-n;return Oi(r,function(l){return n+((l-e)/o*s||0)})},Kx=function a(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var o=bt(e),s={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Nt(e)&&!Nt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=dr(Nt(e)?[]:{},e));if(!u){for(l in t)tc.call(s,e,l,"get",t[l]);r=function(g){return sc(g,s)||(o?e.p:e)}}}return Oi(n,r)},Iu=function(e,t,n){var i=e.labels,r=gn,o,s,l;for(o in i)s=i[o]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},xn=function(e,t,n){var i=e.vars,r=i[t],o,s;if(!!r)return o=i[t+"Params"],s=i.callbackScope||e,n&&Ci.length&&Qa(),o?r.apply(s,o):r.call(s)},ws=function(e){return li(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&xn(e,"onInterrupt"),e},Br,Jx=function(e){e=!e.name&&e.default||e;var t=e.name,n=St(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Bs,render:sc,add:tc,kill:pv,modifier:dv,rawVars:0},o={targetTest:0,get:0,getSetter:rc,aliases:{},register:0};if(ss(),e!==i){if(nn[t])return;Sn(i,Sn(eo(e,r),o)),dr(i.prototype,dr(r,eo(e,o))),nn[i.prop=t]=i,e.targetTest&&(Ba.push(i),Kl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Kh(t,i),e.register&&e.register(In,i,Qt)},Qe=255,Ts={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},il=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},mf=function(e,t,n){var i=e?ui(e)?[e>>16,e>>8&Qe,e&Qe]:0:Ts.black,r,o,s,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ts[e])i=Ts[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(wl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=il(l+1/3,r,o),i[1]=il(l,r,o),i[2]=il(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(qh),n&&i.length<4&&(i[3]=1),i}else i=e.match(wl)||Ts.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Qe,o=i[1]/Qe,s=i[2]/Qe,h=Math.max(r,o,s),f=Math.min(r,o,s),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(o-s)/m+(o<s?6:0):h===o?(s-r)/m+2:(r-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},gf=function(e){var t=[],n=[],i=-1;return e.split(Li).forEach(function(r){var o=r.match(kr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Fu=function(e,t,n){var i="",r=(e+i).match(Li),o=t?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=mf(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=gf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Li,"1").split(kr),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Li),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},Li=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ts)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),Qx=/hsl[a]?\(/,_f=function(e){var t=e.join(" "),n;if(Li.lastIndex=0,Li.test(t))return n=Qx.test(t),e[1]=Fu(e[1],n),e[0]=Fu(e[0],n,gf(e[1])),!0},Vs,rn=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,o=r,s=[],l,c,u,h,f,m,g=function d(p){var _=a()-i,M=p===!0,E,S,v,T;if(_>e&&(n+=_-t),i+=_,v=i-n,E=v-o,(E>0||M)&&(T=++h.frame,f=v-h.time*1e3,h.time=v=v/1e3,o+=E+(E>=r?4:r-E),S=1),M||(l=c(d)),S)for(m=0;m<s.length;m++)s[m](v,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Zh&&(!Tl&&Wh()&&(kn=Tl=window,Zl=kn.document||{},on.gsap=In,(kn.gsapVersions||(kn.gsapVersions=[])).push(In.version),$h(Ka||kn.GreenSockGlobals||!kn.gsap&&kn||{}),u=kn.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Vs=1,g(2))},sleep:function(){(u?kn.cancelAnimationFrame:clearTimeout)(l),Vs=0,c=Bs},lagSmoothing:function(p,_){e=p||1/et,t=Math.min(_,e,0)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,_,M){var E=_?function(S,v,T,C){p(S,v,T,C),h.remove(E)}:p;return h.remove(p),s[M?"unshift":"push"](E),ss(),E},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},h}(),ss=function(){return!Vs&&rn.wake()},We={},ev=/^[\d.\-M][\d.\-,\s]/,tv=/["']/g,nv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,s,l,c;r<o;r++)l=n[r],s=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(tv,"").trim():+c,i=l.substr(s+1).trim();return t},iv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},rv=function(e){var t=(e+"").split("("),n=We[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[nv(t[1])]:iv(e).split(",").map(tf)):We._CE&&ev.test(e)?We._CE("",e):n},xf=function(e){return function(t){return 1-e(1-t)}},vf=function a(e,t){for(var n=e._first,i;n;)n instanceof $t?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},lr=function(e,t){return e&&(St(e)?e:We[e]||rv(e))||t},_r=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Jt(e,function(s){We[s]=on[s]=r,We[o=s.toLowerCase()]=n;for(var l in r)We[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[s+"."+l]=r[l]}),r},yf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rl=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/bl*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Rx((u-o)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:yf(s);return r=bl/r,l.config=function(c,u){return a(e,c,u)},l},sl=function a(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:yf(n);return i.config=function(r){return a(e,r)},i};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;_r(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;_r("Elastic",rl("in"),rl("out"),rl());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?a*s*s:s<n?a*Math.pow(s-1.5/e,2)+.75:s<i?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};_r("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);_r("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});_r("Circ",function(a){return-(Hh(1-a*a)-1)});_r("Sine",function(a){return a===1?1:-Px(a*Lx)+1});_r("Back",sl("in"),sl("out"),sl());We.SteppedEase=We.steps=on.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-et;return function(s){return((i*ia(0,o,s)|0)+r)*n}}};ns.ease=We["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Jl+=a+","+a+"Params,"});var Mf=function(e,t){this.id=Dx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qh,this.set=t?t.getSetter:rc},Hs=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,rs(this,+t.duration,1,1),this.data=t.data,Vs||rn.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ss(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ec(this,n),!r._dp||r.parent||sf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===et||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ef(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?is(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-et?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?to(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-et?0:this._rts,this.totalTime(ia(-this._delay,this._tDur,i),!0),_o(this),zx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==et&&(this._tTime-=et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?to(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ru(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ru(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(un(this,n),Kt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-et)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=St(n)?n:nf,s=function(){var c=i.then;i.then=null,St(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){ws(this)},a}();Sn(Hs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-et,_prom:0,_ps:!1,_rts:1});var $t=function(a){Vh(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Kt(n.sortChildren),it&&Hn(n.parent||it,ni(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&af(ni(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Ds(0,arguments,this),this},t.from=function(i,r,o){return Ds(1,arguments,this),this},t.fromTo=function(i,r,o,s){return Ds(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Ls(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Mt(i,r,un(this,o),1),this},t.call=function(i,r,o){return Hn(this,Mt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,s,l,c,u){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Mt(i,o,un(this,l)),this},t.staggerFrom=function(i,r,o,s,l,c,u){return o.runBackwards=1,Ls(o).immediateRender=Kt(o.immediateRender),this.staggerTo(i,r,o,s,l,c,u)},t.staggerFromTo=function(i,r,o,s,l,c,u,h){return s.startAt=o,Ls(s).immediateRender=Kt(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},t.render=function(i,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Rt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,_,M,E,S,v,T,C;if(this!==it&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,S=this._start,E=this._ts,_=!E,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Rt(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),v=is(this._tTime,p),!s&&this._tTime&&v!==d&&(v=d),T&&d&1&&(f=c-f,C=1),d!==v&&!this._lock){var x=T&&v&1,w=x===(T&&d&1);if(d<v&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(C?0:Rt(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&xn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;vf(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Gx(this,Rt(s),Rt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&(xn(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-et);break}}m=g}else{m=this._last;for(var R=i<0?i:f;m;){if(g=m._prev,(m._act||R<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(R-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(R-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=R?-et:et);break}}m=g}}if(M&&!r&&(this.pause(),M.render(f>=s?0:-et)._zTime=f>=s?1:-1,this._ts))return this._start=S,_o(this),this.render(i,r,o);this._onUpdate&&!r&&xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(S===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&li(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ui(r)||(r=un(this,r,i)),!(i instanceof Hs)){if(Nt(i))return i.forEach(function(s){return o.add(s,r)}),this;if(bt(i))return this.addLabel(i,r);if(St(i))i=Mt.delayedCall(0,i);else return this}return this!==i?Hn(this,i,r):this},t.getChildren=function(i,r,o,s){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-gn);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Mt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return bt(i)?this.removeLabel(i):St(i)?this.killTweensOf(i):(go(this,i),i===this._recent&&(this._recent=this._last),or(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=un(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var s=Mt.delayedCall(0,r||Bs,o);return s.data="isPause",this._hasPause=1,Hn(this,s,un(this,i))},t.removePause=function(i){var r=this._first;for(i=un(this,i);r;)r._start===i&&r.data==="isPause"&&li(r),r=r._next},t.killTweensOf=function(i,r,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)Si!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],s=_n(i),l=this._first,c=ui(r),u;l;)l instanceof Mt?Fx(l._targets,s)&&(c?(!Si||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(s,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,s=un(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=Mt.to(o,Sn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale())||et,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&rs(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Sn({startAt:{time:un(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Iu(this,un(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Iu(this,un(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+et)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var s=this._first,l=this.labels,c;s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return or(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return a.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),or(this)},t.totalDuration=function(i){var r=0,o=this,s=o._last,l=gn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,Hn(o,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;rs(o,o===it&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(it._ts&&(ef(it,to(i,it)),Jh=rn.frame),rn.frame>=Lu){Lu+=an.autoSleep||120;var r=it._first;if((!r||!r._ts)&&an.autoSleep&&rn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||rn.sleep()}}},e}(Hs);Sn($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var sv=function(e,t,n,i,r,o,s){var l=new Qt(this._pt,e,t,0,1,Af,null,r),c=0,u=0,h,f,m,g,d,p,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Gs(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(tl)||[];h=tl.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Xr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=tl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Yh.test(i)||_)&&(l.e=0),this._pt=l,l},tc=function(e,t,n,i,r,o,s,l,c){St(i)&&(i=i(r||0,e,o));var u=e[t],h=n!=="get"?n:St(u)?c?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=St(u)?c?uv:Tf:ic,m;if(bt(i)&&(~i.indexOf("random(")&&(i=Gs(i)),i.charAt(1)==="="&&(m=Xr(h,i)+(It(h)||0),(m||m===0)&&(i=m))),h!==i||Dl)return!isNaN(h*i)&&i!==""?(m=new Qt(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?fv:Ef,0,f),c&&(m.fp=c),s&&m.modifier(s,this,e),this._pt=m):(!u&&!(t in e)&&$l(t,i),sv.call(this,e,t,h,i,f,l||an.stringFilter,c))},av=function(e,t,n,i,r){if(St(e)&&(e=Ps(e,r,t,n,i)),!hi(e)||e.style&&e.nodeType||Nt(e)||Xh(e))return bt(e)?Ps(e,r,t,n,i):e;var o={},s;for(s in e)o[s]=Ps(e[s],r,t,n,i);return o},Sf=function(e,t,n,i,r,o){var s,l,c,u;if(nn[e]&&(s=new nn[e]).init(r,s.rawVars?t[e]:av(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Qt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Br))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Si,Dl,nc=function a(e,t){var n=e.vars,i=n.ease,r=n.startAt,o=n.immediateRender,s=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,m=n.keyframes,g=n.autoRevert,d=e._dur,p=e._startAt,_=e._targets,M=e.parent,E=M&&M.data==="nested"?M.parent._targets:_,S=e._overwrite==="auto"&&!Yl,v=e.timeline,T,C,x,w,R,I,Y,Z,P,U,N,B,H;if(v&&(!m||!i)&&(i="none"),e._ease=lr(i,ns.ease),e._yEase=f?xf(lr(f===!0?i:f,ns.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!n.runBackwards,!v||m&&!n.stagger){if(Z=_[0]?ar(_[0]).harness:0,B=Z&&n[Z.prop],T=eo(n,Kl),p&&(li(p.render(-1,!0)),p._lazy=0),r)if(li(e._startAt=Mt.set(_,Sn({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:Kt(s),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},r))),t<0&&!o&&!g&&e._startAt.render(-1,!0),o){if(t>0&&!g&&(e._startAt=0),d&&t<=0){t&&(e._zTime=t);return}}else g===!1&&(e._startAt=0);else if(h&&d){if(p)!g&&(e._startAt=0);else if(t&&(o=!1),x=Sn({overwrite:!1,data:"isFromStart",lazy:o&&Kt(s),immediateRender:o,stagger:0,parent:M},T),B&&(x[Z.prop]=B),li(e._startAt=Mt.set(_,x)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!o)a(e._startAt,et);else if(!t)return}for(e._pt=e._ptCache=0,s=d&&Kt(s)||s&&!d,C=0;C<_.length;C++){if(R=_[C],Y=R._gsap||Ql(_)[C]._gsap,e._ptLookup[C]=U={},El[Y.id]&&Ci.length&&Qa(),N=E===_?C:E.indexOf(R),Z&&(P=new Z).init(R,B||T,e,N,E)!==!1&&(e._pt=w=new Qt(e._pt,R,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(V){U[V]=w}),P.priority&&(I=1)),!Z||B)for(x in T)nn[x]&&(P=Sf(x,T,e,N,R,E))?P.priority&&(I=1):U[x]=w=tc.call(e,R,x,"get",T[x],N,E,0,n.stringFilter);e._op&&e._op[C]&&e.kill(R,e._op[C]),S&&e._pt&&(Si=e,it.killTweensOf(R,U,e.globalTime(t)),H=!e.parent,Si=0),e._pt&&s&&(El[Y.id]=1)}I&&Cf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!H,m&&t<=0&&v.render(gn,!0,!0)},ov=function(e,t,n,i,r,o,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(c=u[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t;)c=c._next;if(!c)return Dl=1,e.vars[t]="+=0",nc(e,s),Dl=0,1;l.push(c)}for(h=l.length;h--;)c=l[h],c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,c.e&&(c.e=lt(n)+It(c.e)),c.b&&(c.b=c.s+It(c.b))},lv=function(e,t){var n=e[0]?ar(e[0]).harness:0,i=n&&n.aliases,r,o,s,l;if(!i)return t;r=dr({},t);for(o in i)if(o in r)for(l=i[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},cv=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,s;if(Nt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},Ps=function(e,t,n,i,r){return St(e)?e.call(t,n,i,r):bt(e)&&~e.indexOf("random(")?Gs(e):e},bf=Jl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wf={};Jt(bf+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return wf[a]=1});var Mt=function(a){Vh(e,a);function e(n,i,r,o){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=a.call(this,o?i:Ls(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,M=i.parent||it,E=(Nt(n)||Xh(n)?ui(n[0]):"length"in i)?[n]:_n(n),S,v,T,C,x,w,R,I;if(s._targets=E.length?Ql(E):Ja("GSAP target "+n+" not found. https://greensock.com",!an.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||Ta(c)||Ta(u)){if(i=s.vars,S=s.timeline=new $t({data:"nested",defaults:d||{}}),S.kill(),S.parent=S._dp=ni(s),S._start=0,f||Ta(c)||Ta(u)){if(C=E.length,R=f&&uf(f),hi(f))for(x in f)~bf.indexOf(x)&&(I||(I={}),I[x]=f[x]);for(v=0;v<C;v++)T=eo(i,wf),T.stagger=0,_&&(T.yoyoEase=_),I&&dr(T,I),w=E[v],T.duration=+Ps(c,ni(s),v,w,E),T.delay=(+Ps(u,ni(s),v,w,E)||0)-s._delay,!f&&C===1&&T.delay&&(s._delay=u=T.delay,s._start+=u,T.delay=0),S.to(w,T,R?R(v,w,E):0),S._ease=We.none;S.duration()?c=u=0:s.timeline=0}else if(g){Ls(Sn(S.vars.defaults,{ease:"none"})),S._ease=lr(g.ease||i.ease||"none");var Y=0,Z,P,U;if(Nt(g))g.forEach(function(N){return S.to(E,N,">")});else{T={};for(x in g)x==="ease"||x==="easeEach"||cv(x,g[x],T,g.easeEach);for(x in T)for(Z=T[x].sort(function(N,B){return N.t-B.t}),Y=0,v=0;v<Z.length;v++)P=Z[v],U={ease:P.e,duration:(P.t-(v?Z[v-1].t:0))/100*c},U[x]=P.v,S.to(E,U,Y),Y+=U.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||s.duration(c=S.duration())}else s.timeline=0;return m===!0&&!Yl&&(Si=ni(s),it.killTweensOf(E),Si=0),Hn(M,ni(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===Rt(M._time)&&Kt(h)&&Ux(ni(s))&&M.data!=="nested")&&(s._tTime=-et,s.render(Math.max(0,-u))),p&&af(ni(s),p),s}var t=e.prototype;return t.render=function(i,r,o){var s=this._time,l=this._tDur,c=this._dur,u=i>l-et&&i>=0?l:i<et?0:i,h,f,m,g,d,p,_,M,E;if(!c)Bx(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(h=u,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(h=Rt(u%g),u===l?(m=this._repeat,h=c):(m=~~(u/g),m&&m===u/g&&(h=c,m--),h>c&&(h=c)),p=this._yoyo&&m&1,p&&(E=this._yEase,h=c-h),d=is(this._tTime,g),h===s&&!o&&this._initted)return this._tTime=u,this;m!==d&&(M&&this._yEase&&vf(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Rt(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(of(this,i<0?i:h,o,r))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(E||this._ease)(h/c),this._from&&(this.ratio=_=1-_),h&&!s&&!r&&(xn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(_,f.d),f=f._next;M&&M.render(i<0?i:!h&&p?-et:M._dur*M._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,o),xn(this,"onUpdate")),this._repeat&&m!==d&&this.vars.onRepeat&&!r&&this.parent&&xn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&li(this,1),!r&&!(i<0&&!s)&&(u||s)&&(xn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),a.prototype.invalidate.call(this)},t.resetTo=function(i,r,o,s){Vs||rn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||nc(this,l),c=this._ease(l/this._dur),ov(this,i,r,o,s,c,l)?this.resetTo(i,r,o,s):(ec(this,0),this.parent||rf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ws(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Si&&Si.vars.overwrite!==!0)._first||ws(this),this.parent&&o!==this.timeline.totalDuration()&&rs(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?_n(i):s,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&Nx(s,l))return r==="all"&&(this._pt=0),ws(this);for(h=this._op=this._op||[],r!=="all"&&(bt(r)&&(d={},Jt(r,function(M){return d[M]=1}),r=d),r=lv(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){f=c[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&go(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&ws(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ds(1,arguments)},e.delayedCall=function(i,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,r,o){return Ds(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return it.killTweensOf(i,r,o)},e}(Hs);Sn(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(a){Mt[a]=function(){var e=new $t,t=Cl.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var ic=function(e,t,n){return e[t]=n},Tf=function(e,t,n){return e[t](n)},uv=function(e,t,n,i){return e[t](i.fp,n)},hv=function(e,t,n){return e.setAttribute(t,n)},rc=function(e,t){return St(e[t])?Tf:jl(e[t])&&e.setAttribute?hv:ic},Ef=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Af=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},sc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},dv=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},pv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?go(this,t,"_pt"):t.dep||(n=1),t=i;return!n},mv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Cf=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Qt=function(){function a(t,n,i,r,o,s,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=s||Ef,this.d=l||this,this.set=c||ic,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=mv,this.m=n,this.mt=r,this.tween=i},a}();Jt(Jl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Kl[a]=1});on.TweenMax=on.TweenLite=Mt;on.TimelineLite=on.TimelineMax=$t;it=new $t({sortChildren:!1,defaults:ns,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=_f;var no={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Jx(i)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,t){return it.getTweensOf(e,t)},getProperty:function(e,t,n,i){bt(e)&&(e=_n(e)[0]);var r=ar(e||{}).get,o=n?nf:tf;return n==="native"&&(n=""),e&&(t?o((nn[t]&&nn[t].get||r)(e,t,n,i)):function(s,l,c){return o((nn[s]&&nn[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=_n(e),e.length>1){var i=e.map(function(u){return In.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=nn[t],s=ar(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Br._pt=0,h.init(e,n?u+n:u,Br,0,[e]),h.render(1,h),Br._pt&&sc(1,Br)}:s.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=In.to(e,dr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return it.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=lr(e.ease,ns.ease)),Du(ns,e||{})},config:function(e){return Du(an,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!nn[s]&&!on[s]&&Ja(t+" effect requires "+s+" plugin.")}),nl[t]=function(s,l,c){return n(_n(s),Sn(l||{},r),c)},o&&($t.prototype[t]=function(s,l,c){return this.add(nl[t](s,hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){We[e]=lr(t)},parseEase:function(e,t){return arguments.length?lr(e,t):We},getById:function(e){return it.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new $t(e),i,r;for(n.smoothChildTiming=Kt(e.smoothChildTiming),it.remove(n),n._dp=0,n._time=n._tTime=it._time,i=it._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Mt&&i.vars.onComplete===i._targets[0]))&&Hn(n,i,i._start-i._delay),i=r;return Hn(it,n,0),n},utils:{wrap:Zx,wrapYoyo:$x,distribute:uf,random:ff,snap:hf,normalize:jx,getUnit:It,clamp:Hx,splitColor:mf,toArray:_n,selector:Xx,mapRange:pf,pipe:qx,unitize:Yx,interpolate:Kx,shuffle:cf},install:$h,effects:nl,ticker:rn,updateRoot:$t.updateRoot,plugins:nn,globalTimeline:it,core:{PropTween:Qt,globals:Kh,Tween:Mt,Timeline:$t,Animation:Hs,getCache:ar,_removeLinkedListItem:go,suppressOverwrites:function(e){return Yl=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return no[a]=Mt[a]});rn.add($t.updateRoot);Br=no.to({},{duration:0});var gv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_v=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=gv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},al=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(s){var l,c;if(bt(r)&&(l={},Jt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}_v(s,r)}}}},In=no.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,s;for(o in t)s=this.add(e,"setAttribute",(e.getAttribute(o)||0)+"",t[o],i,r,0,0,o),s&&(s.op=o),this._props.push(o)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},al("roundProps",Ll),al("modifiers"),al("snap",hf))||no;Mt.version=$t.version=In.version="3.10.4";Zh=1;Wh()&&ss();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ou,bi,qr,ac,er,Nu,xv=function(){return typeof window!="undefined"},Pi={},Wi=180/Math.PI,Yr=Math.PI/180,Ir=Math.atan2,zu=1e8,Lf=/([A-Z])/g,vv=/(left|right|width|margin|padding|x)/i,yv=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Df=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Mv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wv=function(e,t,n){return e.style[t]=n},Tv=function(e,t,n){return e.style.setProperty(t,n)},Ev=function(e,t,n){return e._gsap[t]=n},Av=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Cv=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Lv=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Ct="transform",Ri=Ct+"Origin",If,Pl=function(e,t){var n=bi.createElementNS?bi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):bi.createElement(e);return n.style?n:bi.createElement(e)},ci=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Lf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,as(t)||t,1)||""},Uu="O,Moz,ms,Ms,Webkit".split(","),as=function(e,t,n){var i=t||er,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Uu[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Uu[o]:"")+e},Rl=function(){xv()&&window.document&&(Ou=window,bi=Ou.document,qr=bi.documentElement,er=Pl("div")||{style:{}},Pl("div"),Ct=as(Ct),Ri=Ct+"Origin",er.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",If=!!as("perspective"),ac=1)},ol=function a(e){var t=Pl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(qr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),qr.removeChild(t),this.style.cssText=r,o},ku=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ff=function(e){var t;try{t=e.getBBox()}catch{t=ol.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ol||(t=ol.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ku(e,["x","cx","x1"])||0,y:+ku(e,["y","cy","y1"])||0,width:0,height:0}:t},Of=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ff(e))},Ws=function(e,t){if(t){var n=e.style;t in Pi&&t!==Ri&&(t=Ct),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Lf,"-$1").toLowerCase())):n.removeAttribute(t)}},Ti=function(e,t,n,i,r,o){var s=new Qt(e._pt,t,n,0,1,o?Rf:Pf);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Bu={deg:1,rad:1,turn:1},Ii=function a(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",s=er.style,l=vv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===o||!r||Bu[i]||Bu[o]?r:(o!=="px"&&!f&&(r=a(e,t,n,"px")),_=e.getCTM&&Of(e),(m||o==="%")&&(Pi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],lt(m?r/g*h:r/100*g)):(s[l?"width":"height"]=h+(f?o:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===bi||!d.appendChild)&&(d=bi.body),p=d._gsap,p&&m&&p.width&&l&&p.time===rn.time?lt(r/p.width*h):((m||o==="%")&&(s.position=ci(e,"position")),d===e&&(s.position="static"),d.appendChild(er),g=er[u],d.removeChild(er),s.position="absolute",l&&m&&(p=ar(d),p.time=rn.time,p.width=d[u]),lt(f?g*r/h:g&&r?h/g*r:0))))},Xi=function(e,t,n,i){var r;return ac||Rl(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pi[t]&&t!=="transform"?(r=qs(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ro(ci(e,Ri))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=io[t]&&io[t](e,t,n)||ci(e,t)||Qh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ii(e,t,r,n)+n:r},Dv=function(e,t,n,i){if(!n||n==="none"){var r=as(t,e,1),o=r&&ci(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=ci(e,"borderTopColor"))}var s=new Qt(this._pt,e.style,t,0,1,Af),l=0,c=0,u,h,f,m,g,d,p,_,M,E,S,v;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ci(e,t)||i,e.style[t]=n),u=[n,i],_f(u),n=u[0],i=u[1],f=n.match(kr)||[],v=i.match(kr)||[],v.length){for(;h=kr.exec(i);)p=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,S=d.substr((m+"").length),p.charAt(1)==="="&&(p=Xr(m,p)+S),_=parseFloat(p),E=p.substr((_+"").length),l=kr.lastIndex-E.length,E||(E=E||an.units[t]||S,l===i.length&&(i+=E,s.e+=E)),S!==E&&(m=Ii(e,t,d,E)||0),s._pt={_next:s._pt,p:M||c===1?M:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Rf:Pf;return Yh.test(i)&&(s.e=0),this._pt=s,s},Gu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Pv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Gu[n]||n,t[1]=Gu[i]||i,t.join(" ")},Rv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Pi[s]&&(l=1,s=s==="transformOrigin"?Ri:Ct),Ws(n,s);l&&(Ws(n,Ct),o&&(o.svg&&n.removeAttribute("transform"),qs(n,1),o.uncache=1))}},io={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Qt(e._pt,t,n,0,0,Rv);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Xs=[1,0,0,1,0,0],Nf={},zf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vu=function(e){var t=ci(e,Ct);return zf(t)?Xs:t.substr(7).match(qh).map(lt)},oc=function(e,t){var n=e._gsap||ar(e),i=e.style,r=Vu(e),o,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Xs:r):(r===Xs&&!e.offsetParent&&e!==qr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,s=e.nextSibling,qr.appendChild(e)),r=Vu(e),l?i.display=l:Ws(e,"display"),c&&(s?o.insertBefore(e,s):o?o.appendChild(e):qr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Il=function(e,t,n,i,r,o){var s=e._gsap,l=r||oc(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],M=l[5],E=t.split(" "),S=parseFloat(E[0])||0,v=parseFloat(E[1])||0,T,C,x,w;n?l!==Xs&&(C=m*p-g*d)&&(x=S*(p/C)+v*(-d/C)+(d*M-p*_)/C,w=S*(-g/C)+v*(m/C)-(m*M-g*_)/C,S=x,v=w):(T=Ff(e),S=T.x+(~E[0].indexOf("%")?S/100*T.width:S),v=T.y+(~(E[1]||E[0]).indexOf("%")?v/100*T.height:v)),i||i!==!1&&s.smooth?(_=S-c,M=v-u,s.xOffset=h+(_*m+M*d)-_,s.yOffset=f+(_*g+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=S,s.yOrigin=v,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[Ri]="0px 0px",o&&(Ti(o,s,"xOrigin",c,S),Ti(o,s,"yOrigin",u,v),Ti(o,s,"xOffset",h,s.xOffset),Ti(o,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",S+" "+v)},qs=function(e,t){var n=e._gsap||new Mf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",s="deg",l=ci(e,Ri)||"0",c,u,h,f,m,g,d,p,_,M,E,S,v,T,C,x,w,R,I,Y,Z,P,U,N,B,H,V,L,Q,ee,J,ce;return c=u=h=g=d=p=_=M=E=0,f=m=1,n.svg=!!(e.getCTM&&Of(e)),T=oc(e,n.svg),n.svg&&(N=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Il(e,N||l,!!N||n.originIsAbsolute,n.smooth!==!1,T)),S=n.xOrigin||0,v=n.yOrigin||0,T!==Xs&&(R=T[0],I=T[1],Y=T[2],Z=T[3],c=P=T[4],u=U=T[5],T.length===6?(f=Math.sqrt(R*R+I*I),m=Math.sqrt(Z*Z+Y*Y),g=R||I?Ir(I,R)*Wi:0,_=Y||Z?Ir(Y,Z)*Wi+g:0,_&&(m*=Math.abs(Math.cos(_*Yr))),n.svg&&(c-=S-(S*R+v*Y),u-=v-(S*I+v*Z))):(ce=T[6],ee=T[7],V=T[8],L=T[9],Q=T[10],J=T[11],c=T[12],u=T[13],h=T[14],C=Ir(ce,Q),d=C*Wi,C&&(x=Math.cos(-C),w=Math.sin(-C),N=P*x+V*w,B=U*x+L*w,H=ce*x+Q*w,V=P*-w+V*x,L=U*-w+L*x,Q=ce*-w+Q*x,J=ee*-w+J*x,P=N,U=B,ce=H),C=Ir(-Y,Q),p=C*Wi,C&&(x=Math.cos(-C),w=Math.sin(-C),N=R*x-V*w,B=I*x-L*w,H=Y*x-Q*w,J=Z*w+J*x,R=N,I=B,Y=H),C=Ir(I,R),g=C*Wi,C&&(x=Math.cos(C),w=Math.sin(C),N=R*x+I*w,B=P*x+U*w,I=I*x-R*w,U=U*x-P*w,R=N,P=B),d&&Math.abs(d)+Math.abs(g)>359.9&&(d=g=0,p=180-p),f=lt(Math.sqrt(R*R+I*I+Y*Y)),m=lt(Math.sqrt(U*U+ce*ce)),C=Ir(P,U),_=Math.abs(C)>2e-4?C*Wi:0,E=J?1/(J<0?-J:J):0),n.svg&&(N=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!zf(ci(e,Ct)),N&&e.setAttribute("transform",N))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(f*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=lt(f),n.scaleY=lt(m),n.rotation=lt(g)+s,n.rotationX=lt(d)+s,n.rotationY=lt(p)+s,n.skewX=_+s,n.skewY=M+s,n.transformPerspective=E+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Ri]=ro(l)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?Fv:If?Uf:Iv,n.uncache=0,n},ro=function(e){return(e=e.split(" "))[0]+" "+e[1]},ll=function(e,t,n){var i=It(t);return lt(parseFloat(t)+parseFloat(Ii(e,"x",n+"px",i)))+i},Iv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Uf(e,t)},Bi="0deg",vs="0px",Gi=") ",Uf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,E=n.zOrigin,S="",v=_==="auto"&&e&&e!==1||_===!0;if(E&&(h!==Bi||u!==Bi)){var T=parseFloat(u)*Yr,C=Math.sin(T),x=Math.cos(T),w;T=parseFloat(h)*Yr,w=Math.cos(T),o=ll(M,o,C*w*-E),s=ll(M,s,-Math.sin(T)*-E),l=ll(M,l,x*w*-E+E)}p!==vs&&(S+="perspective("+p+Gi),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(v||o!==vs||s!==vs||l!==vs)&&(S+=l!==vs||v?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+Gi),c!==Bi&&(S+="rotate("+c+Gi),u!==Bi&&(S+="rotateY("+u+Gi),h!==Bi&&(S+="rotateX("+h+Gi),(f!==Bi||m!==Bi)&&(S+="skew("+f+", "+m+Gi),(g!==1||d!==1)&&(S+="scale("+g+", "+d+Gi),M.style[Ct]=S||"translate(0, 0)"},Fv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,E=parseFloat(o),S=parseFloat(s),v,T,C,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Yr,c*=Yr,v=Math.cos(l)*h,T=Math.sin(l)*h,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Yr,w=Math.tan(c-u),w=Math.sqrt(1+w*w),C*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),v*=w,T*=w)),v=lt(v),T=lt(T),C=lt(C),x=lt(x)):(v=h,x=f,T=C=0),(E&&!~(o+"").indexOf("px")||S&&!~(s+"").indexOf("px"))&&(E=Ii(m,"x",o,"px"),S=Ii(m,"y",s,"px")),(g||d||p||_)&&(E=lt(E+g-(g*v+d*C)+p),S=lt(S+d-(g*T+d*x)+_)),(i||r)&&(w=m.getBBox(),E=lt(E+i/100*w.width),S=lt(S+r/100*w.height)),w="matrix("+v+","+T+","+C+","+x+","+E+","+S+")",m.setAttribute("transform",w),M&&(m.style[Ct]=w)},Ov=function(e,t,n,i,r){var o=360,s=bt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?Wi:1),c=l-i,u=i+c+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*zu)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*zu)%o-~~(c/o)*o)),e._pt=f=new Qt(e._pt,t,n,i,c,Mv),f.e=u,f.u="deg",e._props.push(n),f},Hu=function(e,t){for(var n in t)e[n]=t[n];return e},Nv=function(e,t,n){var i=Hu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ct]=t,s=qs(n,1),Ws(n,Ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ct],o[Ct]=t,s=qs(n,1),o[Ct]=c);for(l in Pi)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=It(c),g=It(u),h=m!==g?Ii(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Qt(e._pt,s,l,h,f-h,Df),e._pt.u=g||0,e._props.push(l));Hu(s,i)};Jt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?a+s:"border"+s+a});io[e>1?"border"+a:a]=function(s,l,c,u,h){var f,m;if(arguments.length<4)return f=o.map(function(g){return Xi(s,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(l,m,h)}});var kf={name:"css",register:Rl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,s=e.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,_,M,E,S,v,T,C;ac||Rl();for(d in t)if(d!=="autoRound"&&(u=t[d],!(nn[d]&&Sf(d,t,n,i,e,r)))){if(m=typeof u,g=io[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Gs(u)),g)g(this,e,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Li.lastIndex=0,Li.test(c)||(p=It(c),_=It(u)),_?p!==_&&(c=Ii(e,d,c,_)+_):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,d),o.push(d);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],bt(c)&&~c.indexOf("random(")&&(c=Gs(c)),It(c+"")||(c+=an.units[d]||It(Xi(e,d))||""),(c+"").charAt(1)==="="&&(c=Xi(e,d))):c=Xi(e,d),f=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),d in wi&&(d==="autoAlpha"&&(f===1&&Xi(e,"visibility")==="hidden"&&h&&(f=0),Ti(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=wi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),E=d in Pi,E){if(S||(v=e._gsap,v.renderTransform&&!t.parseTransform||qs(e,t.parseTransform),T=t.smoothOrigin!==!1&&v.smooth,S=this._pt=new Qt(this._pt,s,Ct,0,1,v.renderTransform,v,0,-1),S.dep=1),d==="scale")this._pt=new Qt(this._pt,v,"scaleY",v.scaleY,(M?Xr(v.scaleY,M+h):h)-v.scaleY||0),o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){u=Pv(u),v.svg?Il(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&Ti(this,v,"zOrigin",v.zOrigin,_),Ti(this,s,d,ro(c),ro(u)));continue}else if(d==="svgOrigin"){Il(e,u,1,T,0,this);continue}else if(d in Nf){Ov(this,v,d,f,M?Xr(f,M+u):u);continue}else if(d==="smoothOrigin"){Ti(this,v,"smooth",v.smooth,u);continue}else if(d==="force3D"){v[d]=u;continue}else if(d==="transform"){Nv(this,u,e);continue}}else d in s||(d=as(d)||d);if(E||(h||h===0)&&(f||f===0)&&!yv.test(u)&&d in s)p=(c+"").substr((f+"").length),h||(h=0),_=It(u)||(d in an.units?an.units[d]:p),p!==_&&(f=Ii(e,d,c,_)),this._pt=new Qt(this._pt,E?v:s,d,f,(M?Xr(f,M+h):h)-f,!E&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?bv:Df),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Sv);else if(d in s)Dv.call(this,e,d,c,M?M+u:u);else if(d in e)this.add(e,d,c||e[d],M?M+u:u,i,r);else{$l(d,u);continue}o.push(d)}}C&&Cf(this)},get:Xi,aliases:wi,getSetter:function(e,t,n){var i=wi[t];return i&&i.indexOf(",")<0&&(t=i),t in Pi&&t!==Ri&&(e._gsap.x||Xi(e,"x"))?n&&Nu===n?t==="scale"?Av:Ev:(Nu=n||{})&&(t==="scale"?Cv:Lv):e.style&&!jl(e.style[t])?wv:~t.indexOf("-")?Tv:rc(e,t)},core:{_removeProperty:Ws,_getMatrix:oc}};In.utils.checkPrefix=as;(function(a,e,t,n){var i=Jt(a+","+e+","+t,function(r){Pi[r]=1});Jt(e,function(r){an.units[r]="deg",Nf[r]=1}),wi[i[13]]=a+","+e,Jt(n,function(r){var o=r.split(":");wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){an.units[a]="px"});In.registerPlugin(kf);var os=In.registerPlugin(kf)||In;os.core.Tween;function Wu(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function zv(a,e,t){return e&&Wu(a.prototype,e),t&&Wu(a,t),a}/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ht,Fl,sn,tr,nr,jr,Bf,qi,Rs,Gf,ri,An,Vf=function(){return Ht||typeof window!="undefined"&&(Ht=window.gsap)&&Ht.registerPlugin&&Ht},Hf=1,Gr=[],$e=[],jn=[],Is=Date.now,Ol=function(e,t){return t},Uv=function(){var e=Rs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,$e),i.push.apply(i,jn),$e=n,jn=i,Ol=function(o,s){return t[o](s)}},Di=function(e,t){return~jn.indexOf(e)&&jn[jn.indexOf(e)+1][t]},Ga=function(e){return!!~Gf.indexOf(e)},qt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Ut=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ea="scrollLeft",Aa="scrollTop",Xu=function(){return ri&&ri.isPressed||$e.cache++},so=function(e,t){var n=function i(r){if(r||r===0){Hf&&(sn.history.scrollRestoration="manual");var o=ri&&ri.isPressed;r=i.v=Math.round(r)||(ri&&ri.iOS?1:0),e(r),i.cacheID=$e.cache,o&&Ol("ss",r)}else(t||$e.cache!==i.cacheID||Ol("ref"))&&(i.cacheID=$e.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Vt={s:Ea,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:so(function(a){return arguments.length?sn.scrollTo(a,gt.sc()):sn.pageXOffset||tr[Ea]||nr[Ea]||jr[Ea]||0})},gt={s:Aa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vt,sc:so(function(a){return arguments.length?sn.scrollTo(Vt.sc(),a):sn.pageYOffset||tr[Aa]||nr[Aa]||jr[Aa]||0})},Yt=function(e){return Ht.utils.toArray(e)[0]||(typeof e=="string"&&Ht.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Fi=function(e,t){var n=t.s,i=t.sc,r=$e.indexOf(e),o=i===gt.sc?1:2;return!~r&&(r=$e.push(e)-1),$e[r+o]||($e[r+o]=so(Di(e,n),!0)||(Ga(e)?i:so(function(s){return arguments.length?e[n]=s:e[n]})))},Nl=function(e,t,n){var i=e,r=e,o=Is(),s=o,l=t||50,c=Math.max(500,l*3),u=function(g,d){var p=Is();d||p-o>l?(r=i,i=g,s=o,o=p):n?i+=g:i=r+(g-r)/(p-s)*(o-s)},h=function(){r=i=n?0:i,s=o=0},f=function(g){var d=s,p=r,_=Is();return(g||g===0)&&g!==i&&u(g),o===s||_-s>c?0:(i+(n?p:-p))/((n?_:o)-d)*1e3};return{update:u,reset:h,getVelocity:f}},ys=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},qu=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Wf=function(){Rs=Ht.core.globals().ScrollTrigger,Rs&&Rs.core&&Uv()},Xf=function(e){return Ht=e||Vf(),Ht&&typeof document!="undefined"&&document.body&&(sn=window,tr=document,nr=tr.documentElement,jr=tr.body,Gf=[sn,tr,nr,jr],Ht.utils.clamp,qi="onpointerenter"in jr?"pointer":"mouse",Bf=dt.isTouch=sn.matchMedia&&sn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in sn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,An=dt.eventTypes=("ontouchstart"in nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Hf=0},500),Wf(),Fl=1),Fl};Vt.op=gt;$e.cache=0;var dt=function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(n){Fl||Xf(Ht)||console.warn("Please gsap.registerPlugin(Observer)"),Rs||Wf();var i=n.tolerance,r=n.dragMinimum,o=n.type,s=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,d=n.event,p=n.onDragStart,_=n.onDragEnd,M=n.onDrag,E=n.onPress,S=n.onRelease,v=n.onRight,T=n.onLeft,C=n.onUp,x=n.onDown,w=n.onChangeX,R=n.onChangeY,I=n.onChange,Y=n.onToggleX,Z=n.onToggleY,P=n.onHover,U=n.onHoverEnd,N=n.onMove,B=n.ignoreCheck,H=n.isNormalizer,V=n.onGestureStart,L=n.onGestureEnd,Q=n.onWheel,ee=n.onEnable,J=n.onDisable,ce=n.onClick,Me=n.scrollSpeed,G=n.capture,Oe=n.allowClicks,we=n.lockAxis,De=n.onLockAxis;this.target=s=Yt(s)||nr,this.vars=n,m&&(m=Ht.utils.toArray(m)),i=i||0,r=r||0,g=g||1,Me=Me||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(sn.getComputedStyle(jr).lineHeight)||22);var ae,Ne,de,ve,Ze,tt,Ke,X=this,Je=0,Ce=0,_t=Fi(s,Vt),xt=Fi(s,gt),A=_t(),y=xt(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&An[0]==="pointerdown",te=Ga(s),K=s.ownerDocument||tr,se=[0,0,0],ye=[0,0,0],W=0,ge=function(){return W=Is()},ue=function($,pe){return(X.event=$)&&m&&~m.indexOf($.target)||pe&&j&&$.pointerType!=="touch"||B&&B($,pe)},fe=function(){X._vx.reset(),X._vy.reset(),Ne.pause(),h&&h(X)},D=function(){var $=X.deltaX=qu(se),pe=X.deltaY=qu(ye),Ee=Math.abs($)>=i,Le=Math.abs(pe)>=i;I&&(Ee||Le)&&I(X,$,pe,se,ye),Ee&&(v&&X.deltaX>0&&v(X),T&&X.deltaX<0&&T(X),w&&w(X),Y&&X.deltaX<0!=Je<0&&Y(X),Je=X.deltaX,se[0]=se[1]=se[2]=0),Le&&(x&&X.deltaY>0&&x(X),C&&X.deltaY<0&&C(X),R&&R(X),Z&&X.deltaY<0!=Ce<0&&Z(X),Ce=X.deltaY,ye[0]=ye[1]=ye[2]=0),(ve||de)&&(N&&N(X),De&&tt&&De(X),de&&(M(X),de=!1),ve=tt=!1),Ze&&(Q(X),Ze=!1),ae=0},re=function($,pe,Ee){se[Ee]+=$,ye[Ee]+=pe,X._vx.update($),X._vy.update(pe),c?ae||(ae=requestAnimationFrame(D)):D()},ie=function($,pe){Ke!=="y"&&(se[2]+=$,X._vx.update($,!0)),Ke!=="x"&&(ye[2]+=pe,X._vy.update(pe,!0)),we&&!Ke&&(X.axis=Ke=Math.abs($)>Math.abs(pe)?"x":"y",tt=!0),c?ae||(ae=requestAnimationFrame(D)):D()},oe=function($){if(!ue($,1)){$=ys($,u);var pe=$.clientX,Ee=$.clientY,Le=pe-X.x,pt=Ee-X.y,Re=X.isDragging;X.x=pe,X.y=Ee,(Re||Math.abs(X.startX-pe)>=r||Math.abs(X.startY-Ee)>=r)&&(M&&(de=!0),Re||(X.isDragging=!0),ie(Le,pt),Re||p&&p(X))}},he=X.onPress=function(ke){ue(ke,1)||(X.axis=Ke=null,Ne.pause(),X.isPressed=!0,ke=ys(ke),Je=Ce=0,X.startX=X.x=ke.clientX,X.startY=X.y=ke.clientY,X._vx.reset(),X._vy.reset(),qt(H?s:K,An[1],oe,u,!0),X.deltaX=X.deltaY=0,E&&E(X))},Se=function($){if(!ue($,1)){Ut(H?s:K,An[1],oe,!0);var pe=X.isDragging&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Ee=ys($);pe||(X._vx.reset(),X._vy.reset(),u&&Oe&&Ht.delayedCall(.08,function(){if(Is()-W>300&&!$.defaultPrevented){if($.target.click)$.target.click();else if(K.createEvent){var Le=K.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,sn,1,Ee.screenX,Ee.screenY,Ee.clientX,Ee.clientY,!1,!1,!1,!1,0,null),$.target.dispatchEvent(Le)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,h&&!H&&Ne.restart(!0),_&&pe&&_(X),S&&S(X,pe)}},ne=function($){return $.touches&&$.touches.length>1&&(X.isGesturing=!0)&&V($,X.isDragging)},Te=function(){return(X.isGesturing=!1)||L(X)},Ue=function($){if(!ue($)){var pe=_t(),Ee=xt();re((pe-A)*Me,(Ee-y)*Me,1),A=pe,y=Ee,h&&Ne.restart(!0)}},Be=function($){if(!ue($)){$=ys($,u),Q&&(Ze=!0);var pe=($.deltaMode===1?l:$.deltaMode===2?sn.innerHeight:1)*g;re($.deltaX*pe,$.deltaY*pe,0),h&&!H&&Ne.restart(!0)}},rt=function($){if(!ue($)){var pe=$.clientX,Ee=$.clientY,Le=pe-X.x,pt=Ee-X.y;X.x=pe,X.y=Ee,ve=!0,(Le||pt)&&ie(Le,pt)}},ct=function($){X.event=$,P(X)},fi=function($){X.event=$,U(X)},Ni=function($){return ue($)||ys($,u)&&ce(X)};Ne=X._dc=Ht.delayedCall(f||.25,fe).pause(),X.deltaX=X.deltaY=0,X._vx=Nl(0,50,!0),X._vy=Nl(0,50,!0),X.scrollX=_t,X.scrollY=xt,X.isDragging=X.isGesturing=X.isPressed=!1,X.enable=function(ke){return X.isEnabled||(qt(te?K:s,"scroll",Xu),o.indexOf("scroll")>=0&&qt(te?K:s,"scroll",Ue,u,G),o.indexOf("wheel")>=0&&qt(s,"wheel",Be,u,G),(o.indexOf("touch")>=0&&Bf||o.indexOf("pointer")>=0)&&(qt(s,An[0],he,u,G),qt(K,An[2],Se),qt(K,An[3],Se),Oe&&qt(s,"click",ge,!1,!0),ce&&qt(s,"click",Ni),V&&qt(K,"gesturestart",ne),L&&qt(K,"gestureend",Te),P&&qt(s,qi+"enter",ct),U&&qt(s,qi+"leave",fi),N&&qt(s,qi+"move",rt)),X.isEnabled=!0,ke&&ke.type&&he(ke),ee&&ee(X)),X},X.disable=function(){X.isEnabled&&(Gr.filter(function(ke){return ke!==X&&Ga(ke.target)}).length||Ut(te?K:s,"scroll",Xu),X.isPressed&&(X._vx.reset(),X._vy.reset(),Ut(H?s:K,An[1],oe,!0)),Ut(te?K:s,"scroll",Ue,G),Ut(s,"wheel",Be,G),Ut(s,An[0],he,G),Ut(K,An[2],Se),Ut(K,An[3],Se),Ut(s,"click",ge,!0),Ut(s,"click",Ni),Ut(K,"gesturestart",ne),Ut(K,"gestureend",Te),Ut(s,qi+"enter",ct),Ut(s,qi+"leave",fi),Ut(s,qi+"move",rt),X.isEnabled=X.isPressed=X.isDragging=!1,J&&J(X))},X.kill=function(){X.disable();var ke=Gr.indexOf(X);ke>=0&&Gr.splice(ke,1),ri===X&&(ri=0)},Gr.push(X),H&&Ga(s)&&(ri=X),X.enable(d)},zv(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();dt.version="3.10.4";dt.create=function(a){return new dt(a)};dt.register=Xf;dt.getAll=function(){return Gr.slice()};dt.getById=function(a){return Gr.filter(function(e){return e.vars.id===a})[0]};Vf()&&Ht.registerPlugin(dt);/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,Zi,He,st,si,at,qf,ao,oo,Vr,Va,Ca,Et,xo,zl,Bt,Yu,ju,zr,Yf,cl,jf,hn,Zf,$f,Kf,Yi,ul,Es=1,Gt=Date.now,hl=Gt(),vn=0,La=0,Zu=function(){return xo=1},$u=function(){return xo=0},Mi=function(e){return e},Ys=function(e){return Math.round(e*1e5)/1e5||0},Jf=function(){return typeof window!="undefined"},Qf=function(){return Pe||Jf()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},pr=function(e){return!!~qf.indexOf(e)},ed=function(e){return Di(e,"getBoundingClientRect")||(pr(e)?function(){return Za.width=He.innerWidth,Za.height=He.innerHeight,Za}:function(){return ii(e)})},kv=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Di(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?He["inner"+r]:e["client"+r])||0}},Bv=function(e,t){return!t||~jn.indexOf(e)?ed(e):function(){return Za}},Ei=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return(n="scroll"+i)&&(o=Di(e,n))?o()-ed(e)()[r]:pr(e)?(si[n]||at[n])-(He["inner"+i]||si["client"+i]||at["client"+i]):e[n]-e["offset"+i]},Da=function(e,t){for(var n=0;n<zr.length;n+=3)(!t||~t.indexOf(zr[n+1]))&&e(zr[n],zr[n+1],zr[n+2])},Bn=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},As=function(e){return typeof e=="number"},Ha=function(e){return typeof e=="object"},Pa=function(e){return Dn(e)&&e()},Ku=function(e,t){return function(){var n=Pa(e),i=Pa(t);return function(){Pa(n),Pa(i)}}},Ms=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},fl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Fr=Math.abs,td="left",nd="top",lc="right",cc="bottom",cr="width",ur="height",Fs="Right",Os="Left",Ns="Top",zs="Bottom",ft="padding",mn="margin",ls="Width",uc="Height",kt="px",Wn=function(e){return He.getComputedStyle(e)},Gv=function(e){var t=Wn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ju=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ii=function(e,t){var n=t&&Wn(e)[zl]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ul=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},id=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Vv=function(e){return function(t){return Pe.utils.snap(id(e),t)}},hc=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var s;if(!r)return t(i);if(r>0){for(i-=o,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=o;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var s=t(i);return!r||Math.abs(s-i)<o||s-i<0==r<0?s:t(r<0?i-e:i+e)}},Hv=function(e){return function(t,n){return hc(id(e))(t,n.direction)}},Ra=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},At=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},yt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ia=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},Qu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fa={toggleActions:"play",anticipatePin:0},lo={top:0,left:0,center:.5,bottom:1,right:1},Wa=function(e,t){if(Bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in lo?lo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Oa=function(e,t,n,i,r,o,s,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,m=r.fontWeight,g=st.createElement("div"),d=pr(n)||Di(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=d?at:n,M=e.indexOf("start")!==-1,E=M?c:u,S="border-color:"+E+";font-size:"+h+";color:"+E+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(S+=(i===gt?lc:cc)+":"+(o+parseFloat(f))+"px;"),s&&(S+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Xa(g,0,i,M),g},Xa=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+ls]=1,r["border"+s+ls]=0,r[n.p]=t+"px",Pe.set(e,r)},Xe=[],kl={},Bl,eh=function(){return Gt()-vn>34&&$s()},Or=function(){(!hn||!hn.isPressed||hn.startX>at.clientWidth)&&($e.cache++,Bl||(Bl=requestAnimationFrame($s)),vn||mr("scrollStart"),vn=Gt())},th=function(){Kf=He.innerWidth,$f=He.innerHeight},Cs=function(){$e.cache++,!Et&&!jf&&!st.fullscreenElement&&!st.webkitFullscreenElement&&(!Zf||Kf!==He.innerWidth||Math.abs(He.innerHeight-$f)>He.innerHeight*.25)&&ao.restart(!0)},js={},Wv=[],ot=[],Zr,nh,ih=function(e){var t=Pe.ticker.frame,n=[],i=0,r;if(nh!==t||Es){for(co();i<ot.length;i+=4)r=He.matchMedia(ot[i]).matches,r!==ot[i+3]&&(ot[i+3]=r,r?n.push(i):co(1,ot[i])||Dn(ot[i+2])&&ot[i+2]());for(sd(),i=0;i<n.length;i++)r=n[i],Zr=ot[r],ot[r+2]=ot[r+1](e);Zr=0,Zi&&$r(0,1),nh=t,mr("matchMedia")}},rd=function a(){return yt(je,"scrollEnd",a)||$r(!0)},mr=function(e){return js[e]&&js[e].map(function(t){return t()})||Wv},fn=[],sd=function(e){for(var t=0;t<fn.length;t+=5)(!e||fn[t+4]===e)&&(fn[t].style.cssText=fn[t+1],fn[t].getBBox&&fn[t].setAttribute("transform",fn[t+2]||""),fn[t+3].uncache=1)},co=function(e,t){var n;for(Bt=0;Bt<Xe.length;Bt++)n=Xe[Bt],(!t||n.media===t)&&(e?n.kill(1):n.revert());t&&sd(t),t||mr("revert")},ad=function(){return $e.cache++&&$e.forEach(function(e){return typeof e=="function"&&(e.rec=0)})},Zs,qa=0,$r=function(e,t){if(vn&&!e){At(je,"scrollEnd",rd);return}Zs=!0;var n=mr("refreshInit");Yf&&je.sort(),t||co(),Xe.slice(0).forEach(function(i){return i.refresh()}),Xe.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Ei(i.scroller,i._dir))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),ad(),ao.pause(),qa++,Zs=!1,mr("refresh")},rh=0,Ya=1,$i,$s=function(){if(!Zs){je.isUpdating=!0,$i&&$i.update(0);var e=Xe.length,t=Gt(),n=t-hl>=50,i=e&&Xe[0].scroll();if(Ya=rh>i?-1:1,rh=i,n&&(vn&&!xo&&t-vn>200&&(vn=0,mr("scrollEnd")),Va=hl,hl=t),Ya<0){for(Bt=e;Bt-- >0;)Xe[Bt]&&Xe[Bt].update(0,n);Ya=1}else for(Bt=0;Bt<e;Bt++)Xe[Bt]&&Xe[Bt].update(0,n);je.isUpdating=!1}Bl=0},Gl=[td,nd,cc,lc,mn+zs,mn+Fs,mn+Ns,mn+Os,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ja=Gl.concat([cr,ur,"boxSizing","max"+ls,"max"+uc,"position",mn,ft,ft+Ns,ft+Fs,ft+zs,ft+Os]),Xv=function(e,t,n){Ks(n);var i=e._gsap;if(i.spacerIsNative)Ks(i.spacerState);else if(e.parentNode===t){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}},dl=function(e,t,n,i){if(e.parentNode!==t){for(var r=Gl.length,o=t.style,s=e.style,l;r--;)l=Gl[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),s[cc]=s[lc]=o.flexBasis="auto",o.overflow="visible",o.boxSizing="border-box",o[cr]=Ul(e,Vt)+kt,o[ur]=Ul(e,gt)+kt,o[ft]=s[mn]=s[nd]=s[td]="0",Ks(i),s[cr]=s["max"+ls]=n[cr],s[ur]=s["max"+uc]=n[ur],s[ft]=n[ft],e.parentNode.insertBefore(t,e),t.appendChild(e)}},qv=/([A-Z])/g,Ks=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(qv,"-$1").toLowerCase())}},Na=function(e){for(var t=ja.length,n=e.style,i=[],r=0;r<t;r++)i.push(ja[r],n[ja[r]]);return i.t=e,i},Yv=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,s;o<r;o+=2)s=e[o],i.push(s,s in t?t[s]:e[o+1]);return i.t=e.t,i},Za={left:0,top:0},sh=function(e,t,n,i,r,o,s,l,c,u,h,f,m){Dn(e)&&(e=e(l)),Bn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Wa("0"+e.substr(3),n):0));var g=m?m.time():0,d,p,_;if(m&&m.seek(0),As(e))s&&Xa(s,n,i,!0);else{Dn(t)&&(t=t(l));var M=e.split(" "),E,S,v,T;_=Yt(t)||at,E=ii(_)||{},(!E||!E.left&&!E.top)&&Wn(_).display==="none"&&(T=_.style.display,_.style.display="block",E=ii(_),T?_.style.display=T:_.style.removeProperty("display")),S=Wa(M[0],E[i.d]),v=Wa(M[1]||"0",n),e=E[i.p]-c[i.p]-u+S+r-v,s&&Xa(s,v,i,n-v<20||s._isStart&&v>20),n-=n-v}if(o){var C=e+n,x=o._isStart;d="scroll"+i.d2,Xa(o,C,i,x&&C>20||!x&&(h?Math.max(at[d],si[d]):o.parentNode[d])<=C+1),h&&(c=ii(s),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+kt))}return m&&_&&(d=ii(_),m.seek(f),p=ii(_),m._caScrollDist=d[i.p]-p[i.p],e=e/m._caScrollDist*f),m&&m.seek(g),m?e:Math.round(e)},jv=/(webkit|moz|length|cssText|inset)/i,ah=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,s;if(t===at){e._stOrig=r.cssText,s=Wn(e);for(o in s)!+o&&!jv.test(o)&&s[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=s[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},oh=function(e,t){var n=Fi(e,t),i="_scroll"+t.p2,r,o,s=function l(c,u,h,f,m){var g=l.tween,d=u.onComplete,p={};return h=h||n(),m=f&&m||0,f=f||c-h,g&&g.kill(),r=Math.round(h),u[i]=c,u.modifiers=p,p[i]=function(_){return _=Ys(n()),_!==r&&_!==o&&Math.abs(_-r)>2&&Math.abs(_-o)>2?(g.kill(),l.tween=0):_=h+f*g.ratio+m*g.ratio*g.ratio,o=r,r=Ys(_)},u.onComplete=function(){l.tween=0,d&&d.call(g)},g=l.tween=Pe.to(e,u),g};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},At(e,"wheel",n.wheelHandler),s},je=function(){function a(t,n){Zi||a.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=a.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!La){this.update=this.refresh=this.kill=Mi;return}n=Ju(Bn(n)||As(n)||n.nodeType?{trigger:n}:n,Fa);var r=n,o=r.onUpdate,s=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,m=r.pin,g=r.pinSpacing,d=r.invalidateOnRefresh,p=r.anticipatePin,_=r.onScrubComplete,M=r.onSnapComplete,E=r.once,S=r.snap,v=r.pinReparent,T=r.pinSpacer,C=r.containerAnimation,x=r.fastScrollEnd,w=r.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Vt:gt,I=!h&&h!==0,Y=Yt(n.scroller||He),Z=Pe.core.getCache(Y),P=pr(Y),U=("pinType"in n?n.pinType:Di(Y,"pinType")||P&&"fixed")==="fixed",N=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=I&&n.toggleActions.split(" "),H="markers"in n?n.markers:Fa.markers,V=P?0:parseFloat(Wn(Y)["border"+R.p2+ls])||0,L=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ee=kv(Y,P,R),J=Bv(Y,P),ce=0,Me=0,G=Fi(Y,R),Oe,we,De,ae,Ne,de,ve,Ze,tt,Ke,X,Je,Ce,_t,xt,A,y,j,te,K,se,ye,W,ge,ue,fe,D,re,ie,oe,he,Se,ne,Te,Ue,Be,rt,ct;if(L.media=Zr,L._dir=R,p*=45,L.scroller=Y,L.scroll=C?C.time.bind(C):G,ae=G(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Yf=1,n.refreshPriority===-9999&&($i=L)),Z.tweenScroll=Z.tweenScroll||{top:oh(Y,gt),left:oh(Y,Vt)},L.tweenTo=Oe=Z.tweenScroll[R.p],L.scrubDuration=function($){he=As($)&&$,he?oe?oe.duration($):oe=Pe.to(i,{ease:"expo",totalProgress:"+=0.001",duration:he,paused:!0,onComplete:function(){return _&&_(L)}}):(oe&&oe.progress(1).kill(),oe=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),re=0,l||(l=i.vars.id)),Xe.push(L),S&&((!Ha(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in at.style&&Pe.set(P?[at,si]:Y,{scrollBehavior:"auto"}),De=Dn(S.snapTo)?S.snapTo:S.snapTo==="labels"?Vv(i):S.snapTo==="labelsDirectional"?Hv(i):S.directional!==!1?function($,pe){return hc(S.snapTo)($,Gt()-Me<500?0:pe.direction)}:Pe.utils.snap(S.snapTo),Se=S.duration||{min:.1,max:2},Se=Ha(Se)?Vr(Se.min,Se.max):Vr(Se,Se),ne=Pe.delayedCall(S.delay||he/2||.1,function(){var $=G(),pe=Gt()-Me<500,Ee=Oe.tween;if((pe||Math.abs(L.getVelocity())<10)&&!Ee&&!xo&&ce!==$){var Le=($-de)/Ce,pt=i&&!I?i.totalProgress():Le,Re=pe?0:(pt-ie)/(Gt()-Va)*1e3||0,b=Pe.utils.clamp(-Le,1-Le,Fr(Re/2)*Re/.185),F=Le+(S.inertia===!1?0:b),k=Vr(0,1,De(F,L)),O=Math.round(de+k*Ce),q=S,be=q.onStart,me=q.onInterrupt,_e=q.onComplete;if($<=ve&&$>=de&&O!==$){if(Ee&&!Ee._initted&&Ee.data<=Fr(O-$))return;S.inertia===!1&&(b=k-Le),Oe(O,{duration:Se(Fr(Math.max(Fr(F-pt),Fr(k-pt))*.185/Re/.05||0)),ease:S.ease||"power3",data:Fr(O-$),onInterrupt:function(){return ne.restart(!0)&&me&&me(L)},onComplete:function(){L.update(),ce=G(),re=ie=i&&!I?i.totalProgress():L.progress,M&&M(L),_e&&_e(L)}},$,b*Ce,O-$-b*Ce),be&&be(L,Oe.tween)}}else L.isActive&&ce!==$&&ne.restart(!0)}).pause()),l&&(kl[l]=L),f=L.trigger=Yt(f||m),ct=f&&f._gsap&&f._gsap.stRevert,ct&&(ct=ct(L)),m=m===!0?f:Yt(m),Bn(s)&&(s={targets:f,className:s}),m&&(g===!1||g===mn||(g=!g&&Wn(m.parentNode).display==="flex"?!1:ft),L.pin=m,n.force3D!==!1&&Pe.set(m,{force3D:!0}),we=Pe.core.getCache(m),we.spacer?_t=we.pinState:(T&&(T=Yt(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),we.spacerIsNative=!!T,T&&(we.spacerState=Na(T))),we.spacer=y=T||st.createElement("div"),y.classList.add("pin-spacer"),l&&y.classList.add("pin-spacer-"+l),we.pinState=_t=Na(m)),L.spacer=y=we.spacer,D=Wn(m),W=D[g+R.os2],te=Pe.getProperty(m),K=Pe.quickSetter(m,R.a,kt),dl(m,y,D),A=Na(m)),H){Je=Ha(H)?Ju(H,Qu):Qu,Ke=Oa("scroller-start",l,Y,R,Je,0),X=Oa("scroller-end",l,Y,R,Je,0,Ke),j=Ke["offset"+R.op.d2];var fi=Yt(Di(Y,"content")||Y);Ze=this.markerStart=Oa("start",l,fi,R,Je,j,0,C),tt=this.markerEnd=Oa("end",l,fi,R,Je,j,0,C),C&&(rt=Pe.quickSetter([Ze,tt],R.a,kt)),!U&&!(jn.length&&Di(Y,"fixedMarkers")===!0)&&(Gv(P?at:Y),Pe.set([Ke,X],{force3D:!0}),ue=Pe.quickSetter(Ke,R.a,kt),fe=Pe.quickSetter(X,R.a,kt))}if(C){var Ni=C.vars.onUpdate,ke=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){L.update(0,0,1),Ni&&Ni.apply(ke||[])})}L.previous=function(){return Xe[Xe.indexOf(L)-1]},L.next=function(){return Xe[Xe.indexOf(L)+1]},L.revert=function($){var pe=$!==!1||!L.enabled,Ee=Et;pe!==L.isReverted&&(pe&&(L.scroll.rec||!Et||!Zs||(L.scroll.rec=G()),Ue=Math.max(G(),L.scroll.rec||0),Te=L.progress,Be=i&&i.progress()),Ze&&[Ze,tt,Ke,X].forEach(function(Le){return Le.style.display=pe?"none":"block"}),pe&&(Et=1),L.update(pe),Et=Ee,m&&(pe?Xv(m,y,_t):(!v||!L.isActive)&&dl(m,y,Wn(m),ge)),L.isReverted=pe)},L.refresh=function($,pe){if(!((Et||!L.enabled)&&!pe)){if(m&&$&&vn){At(a,"scrollEnd",rd);return}!Zs&&Q&&Q(L),Et=1,Me=Gt(),Oe.tween&&(Oe.tween.kill(),Oe.tween=0),oe&&oe.pause(),d&&i&&i.time(-.01,!0).invalidate(),L.isReverted||L.revert();for(var Ee=ee(),Le=J(),pt=C?C.duration():Ei(Y,R),Re=0,b=0,F=n.end,k=n.endTrigger||f,O=n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),q=L.pinnedContainer=n.pinnedContainer&&Yt(n.pinnedContainer),be=f&&Math.max(0,Xe.indexOf(L))||0,me=be,_e,xe,Ve,ze,Ae,Ie,wt,Fn,Zn,Dt;me--;)Ie=Xe[me],Ie.end||Ie.refresh(0,1)||(Et=1),wt=Ie.pin,wt&&(wt===f||wt===m)&&!Ie.isReverted&&(Dt||(Dt=[]),Dt.unshift(Ie),Ie.revert()),Ie!==Xe[me]&&(be--,me--);for(Dn(O)&&(O=O(L)),de=sh(O,f,Ee,R,G(),Ze,Ke,L,Le,V,U,pt,C)||(m?-.001:0),Dn(F)&&(F=F(L)),Bn(F)&&!F.indexOf("+=")&&(~F.indexOf(" ")?F=(Bn(O)?O.split(" ")[0]:"")+F:(Re=Wa(F.substr(2),Ee),F=Bn(O)?O:de+Re,k=f)),ve=Math.max(de,sh(F||(k?"100% 0":pt),k,Ee,R,G()+Re,tt,X,L,Le,V,U,pt,C))||-.001,Ce=ve-de||(de-=.01)&&.001,Re=0,me=be;me--;)Ie=Xe[me],wt=Ie.pin,wt&&Ie.start-Ie._pinPush<de&&!C&&Ie.end>0&&(_e=Ie.end-Ie.start,(wt===f||wt===q)&&!As(O)&&(Re+=_e*(1-Ie.progress)),wt===m&&(b+=_e));if(de+=Re,ve+=Re,L._pinPush=b,Ze&&Re&&(_e={},_e[R.a]="+="+Re,q&&(_e[R.p]="-="+G()),Pe.set([Ze,tt],_e)),m)_e=Wn(m),ze=R===gt,Ve=G(),se=parseFloat(te(R.a))+b,!pt&&ve>1&&((P?at:Y).style["overflow-"+R.a]="scroll"),dl(m,y,_e),A=Na(m),xe=ii(m,!0),Fn=U&&Fi(Y,ze?Vt:gt)(),g&&(ge=[g+R.os2,Ce+b+kt],ge.t=y,me=g===ft?Ul(m,R)+Ce+b:0,me&&ge.push(R.d,me+kt),Ks(ge),U&&G(Ue)),U&&(Ae={top:xe.top+(ze?Ve-de:Fn)+kt,left:xe.left+(ze?Fn:Ve-de)+kt,boxSizing:"border-box",position:"fixed"},Ae[cr]=Ae["max"+ls]=Math.ceil(xe.width)+kt,Ae[ur]=Ae["max"+uc]=Math.ceil(xe.height)+kt,Ae[mn]=Ae[mn+Ns]=Ae[mn+Fs]=Ae[mn+zs]=Ae[mn+Os]="0",Ae[ft]=_e[ft],Ae[ft+Ns]=_e[ft+Ns],Ae[ft+Fs]=_e[ft+Fs],Ae[ft+zs]=_e[ft+zs],Ae[ft+Os]=_e[ft+Os],xt=Yv(_t,Ae,v)),i?(Zn=i._initted,cl(1),i.render(i.duration(),!0,!0),ye=te(R.a)-se+Ce+b,Ce!==ye&&U&&xt.splice(xt.length-2,2),i.render(0,!0,!0),Zn||i.invalidate(),cl(0)):ye=Ce;else if(f&&G()&&!C)for(xe=f.parentNode;xe&&xe!==at;)xe._pinOffset&&(de-=xe._pinOffset,ve-=xe._pinOffset),xe=xe.parentNode;Dt&&Dt.forEach(function(qe){return qe.revert(!1)}),L.start=de,L.end=ve,ae=Ne=G(),C||(ae<Ue&&G(Ue),L.scroll.rec=0),L.revert(!1),ne&&(ce=-1,L.isActive&&G(de+Ce*Te),ne.restart(!0)),Et=0,i&&I&&(i._initted||Be)&&i.progress()!==Be&&i.progress(Be,!0).render(i.time(),!0,!0),(Te!==L.progress||C)&&(i&&!I&&i.totalProgress(Te,!0),L.progress=Te,L.update(0,0,1)),m&&g&&(y._pinOffset=Math.round(L.progress*ye)),u&&u(L)}},L.getVelocity=function(){return(G()-Ne)/(Gt()-Va)*1e3||0},L.endAnimation=function(){Ms(L.callbackAnimation),i&&(oe?oe.progress(1):i.paused()?I||Ms(i,L.direction<0,1):Ms(i,i.reversed()))},L.labelToScroll=function($){return i&&i.labels&&(de||L.refresh()||de)+i.labels[$]/i.duration()*Ce||0},L.getTrailing=function($){var pe=Xe.indexOf(L),Ee=L.direction>0?Xe.slice(0,pe).reverse():Xe.slice(pe+1);return(Bn($)?Ee.filter(function(Le){return Le.vars.preventOverlaps===$}):Ee).filter(function(Le){return L.direction>0?Le.end<=de:Le.start>=ve})},L.update=function($,pe,Ee){if(!(C&&!Ee&&!$)){var Le=L.scroll(),pt=$?0:(Le-de)/Ce,Re=pt<0?0:pt>1?1:pt||0,b=L.progress,F,k,O,q,be,me,_e,xe;if(pe&&(Ne=ae,ae=C?G():Le,S&&(ie=re,re=i&&!I?i.totalProgress():Re)),p&&!Re&&m&&!Et&&!Es&&vn&&de<Le+(Le-Ne)/(Gt()-Va)*p&&(Re=1e-4),Re!==b&&L.enabled){if(F=L.isActive=!!Re&&Re<1,k=!!b&&b<1,me=F!==k,be=me||!!Re!=!!b,L.direction=Re>b?1:-1,L.progress=Re,be&&!Et&&(O=Re&&!b?0:Re===1?1:b===1?2:3,I&&(q=!me&&B[O+1]!=="none"&&B[O+1]||B[O],xe=i&&(q==="complete"||q==="reset"||q in i))),w&&(me||xe)&&(xe||h||!i)&&(Dn(w)?w(L):L.getTrailing(w).forEach(function(Ie){return Ie.endAnimation()})),I||(oe&&!Et&&!Es?((C||$i&&$i!==L)&&oe.render(oe._dp._time-oe._start),oe.resetTo?oe.resetTo("totalProgress",Re,i._tTime/i._tDur):(oe.vars.totalProgress=Re,oe.invalidate().restart())):i&&i.totalProgress(Re,!!Et)),m){if($&&g&&(y.style[g+R.os2]=W),!U)K(Ys(se+ye*Re));else if(be){if(_e=!$&&Re>b&&ve+1>Le&&Le+1>=Ei(Y,R),v)if(!$&&(F||_e)){var Ve=ii(m,!0),ze=Le-de;ah(m,at,Ve.top+(R===gt?ze:0)+kt,Ve.left+(R===gt?0:ze)+kt)}else ah(m,y);Ks(F||_e?xt:A),ye!==Ce&&Re<1&&F||K(se+(Re===1&&!_e?ye:0))}}S&&!Oe.tween&&!Et&&!Es&&ne.restart(!0),s&&(me||E&&Re&&(Re<1||!ul))&&oo(s.targets).forEach(function(Ie){return Ie.classList[F||E?"add":"remove"](s.className)}),o&&!I&&!$&&o(L),be&&!Et?(I&&(xe&&(q==="complete"?i.pause().totalProgress(1):q==="reset"?i.restart(!0).pause():q==="restart"?i.restart(!0):i[q]()),o&&o(L)),(me||!ul)&&(c&&me&&fl(L,c),N[O]&&fl(L,N[O]),E&&(Re===1?L.kill(!1,1):N[O]=0),me||(O=Re===1?1:3,N[O]&&fl(L,N[O]))),x&&!F&&Math.abs(L.getVelocity())>(As(x)?x:2500)&&(Ms(L.callbackAnimation),oe?oe.progress(1):Ms(i,!Re,1))):I&&o&&!Et&&o(L)}if(fe){var Ae=C?Le/C.duration()*(C._caScrollDist||0):Le;ue(Ae+(Ke._isFlipped?1:0)),fe(Ae)}rt&&rt(-Le/C.duration()*(C._caScrollDist||0))}},L.enable=function($,pe){L.enabled||(L.enabled=!0,At(Y,"resize",Cs),At(P?st:Y,"scroll",Or),Q&&At(a,"refreshInit",Q),$!==!1&&(L.progress=Te=0,ae=Ne=ce=G()),pe!==!1&&L.refresh())},L.getTween=function($){return $&&Oe?Oe.tween:oe},L.setPositions=function($,pe){m&&(se+=$-de,ye+=pe-$-Ce),L.start=de=$,L.end=ve=pe,Ce=pe-$,L.update()},L.disable=function($,pe){if(L.enabled&&($!==!1&&L.revert(),L.enabled=L.isActive=!1,pe||oe&&oe.pause(),Ue=0,we&&(we.uncache=1),Q&&yt(a,"refreshInit",Q),ne&&(ne.pause(),Oe.tween&&Oe.tween.kill()&&(Oe.tween=0)),!P)){for(var Ee=Xe.length;Ee--;)if(Xe[Ee].scroller===Y&&Xe[Ee]!==L)return;yt(Y,"resize",Cs),yt(Y,"scroll",Or)}},L.kill=function($,pe){L.disable($,pe),oe&&!pe&&oe.kill(),l&&delete kl[l];var Ee=Xe.indexOf(L);Ee>=0&&Xe.splice(Ee,1),Ee===Bt&&Ya>0&&Bt--,Ee=0,Xe.forEach(function(Le){return Le.scroller===L.scroller&&(Ee=1)}),Ee||(L.scroll.rec=0),i&&(i.scrollTrigger=null,$&&i.render(-1),pe||i.kill()),Ze&&[Ze,tt,Ke,X].forEach(function(Le){return Le.parentNode&&Le.parentNode.removeChild(Le)}),$i===L&&($i=0),m&&(we&&(we.uncache=1),Ee=0,Xe.forEach(function(Le){return Le.pin===m&&Ee++}),Ee||(we.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),ct&&ct(L),!i||!i.add||Ce?L.refresh():Pe.delayedCall(.01,function(){return de||ve||L.refresh()})&&(Ce=.01)&&(de=ve=0)},a.register=function(n){return Zi||(Pe=n||Qf(),Jf()&&window.document&&a.enable(),Zi=La),Zi},a.defaults=function(n){if(n)for(var i in n)Fa[i]=n[i];return Fa},a.disable=function(n,i){La=0,Xe.forEach(function(o){return o[i?"kill":"disable"](n)}),yt(He,"wheel",Or),yt(st,"scroll",Or),clearInterval(Ca),yt(st,"touchcancel",Mi),yt(at,"touchstart",Mi),Ra(yt,st,"pointerdown,touchstart,mousedown",Zu),Ra(yt,st,"pointerup,touchend,mouseup",$u),ao.kill(),Da(yt);for(var r=0;r<$e.length;r+=3)Ia(yt,$e[r],$e[r+1]),Ia(yt,$e[r],$e[r+2])},a.enable=function(){if(He=window,st=document,si=st.documentElement,at=st.body,Pe&&(oo=Pe.utils.toArray,Vr=Pe.utils.clamp,cl=Pe.core.suppressOverwrites||Mi,Pe.core.globals("ScrollTrigger",a),at)){La=1,dt.register(Pe),a.isTouch=dt.isTouch,Yi=dt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),At(He,"wheel",Or),qf=[He,st,si,at],a.matchMedia({"(orientation: portrait)":function(){return th(),th}}),At(st,"scroll",Or);var n=at.style,i=n.borderTopStyle,r,o;for(n.borderTopStyle="solid",r=ii(at),gt.m=Math.round(r.top+gt.sc())||0,Vt.m=Math.round(r.left+Vt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ca=setInterval(eh,250),Pe.delayedCall(.5,function(){return Es=0}),At(st,"touchcancel",Mi),At(at,"touchstart",Mi),Ra(At,st,"pointerdown,touchstart,mousedown",Zu),Ra(At,st,"pointerup,touchend,mouseup",$u),zl=Pe.utils.checkPrefix("transform"),ja.push(zl),Zi=Gt(),ao=Pe.delayedCall(.2,$r).pause(),zr=[st,"visibilitychange",function(){var s=He.innerWidth,l=He.innerHeight;st.hidden?(Yu=s,ju=l):(Yu!==s||ju!==l)&&Cs()},st,"DOMContentLoaded",$r,He,"load",$r,He,"resize",Cs],Da(At),Xe.forEach(function(s){return s.enable(0,1)}),o=0;o<$e.length;o+=3)Ia(yt,$e[o],$e[o+1]),Ia(yt,$e[o],$e[o+2])}},a.config=function(n){"limitCallbacks"in n&&(ul=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ca)||(Ca=i)&&setInterval(eh,i),"ignoreMobileResize"in n&&(Zf=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Da(yt)||Da(At,n.autoRefreshEvents||"none"),jf=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,i){var r=Yt(n),o=$e.indexOf(r),s=pr(r);~o&&$e.splice(o,s?6:2),i&&(s?jn.unshift(He,i,at,i,si,i):jn.unshift(r,i))},a.matchMedia=function(n){var i,r,o,s,l;for(r in n)o=ot.indexOf(r),s=n[r],Zr=r,r==="all"?s():(i=He.matchMedia(r),i&&(i.matches&&(l=s()),~o?(ot[o+1]=Ku(ot[o+1],s),ot[o+2]=Ku(ot[o+2],l)):(o=ot.length,ot.push(r,s,l),i.addListener?i.addListener(ih):i.addEventListener("change",ih)),ot[o+3]=i.matches)),Zr=0;return ot},a.clearMatchMedia=function(n){n||(ot.length=0),n=ot.indexOf(n),n>=0&&ot.splice(n,4)},a.isInViewport=function(n,i,r){var o=(Bn(n)?Yt(n):n).getBoundingClientRect(),s=o[r?cr:ur]*i||0;return r?o.right-s>0&&o.left+s<He.innerWidth:o.bottom-s>0&&o.top+s<He.innerHeight},a.positionInViewport=function(n,i,r){Bn(n)&&(n=Yt(n));var o=n.getBoundingClientRect(),s=o[r?cr:ur],l=i==null?s/2:i in lo?lo[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return r?(o.left+l)/He.innerWidth:(o.top+l)/He.innerHeight},a}();je.version="3.10.4";je.saveStyles=function(a){return a?oo(a).forEach(function(e){if(e&&e.style){var t=fn.indexOf(e);t>=0&&fn.splice(t,5),fn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),Zr)}}):fn};je.revert=function(a,e){return co(!a,e)};je.create=function(a,e){return new je(a,e)};je.refresh=function(a){return a?Cs():(Zi||je.register())&&$r(!0)};je.update=$s;je.clearScrollMemory=ad;je.maxScroll=function(a,e){return Ei(a,e?Vt:gt)};je.getScrollFunc=function(a,e){return Fi(Yt(a),e?Vt:gt)};je.getById=function(a){return kl[a]};je.getAll=function(){return Xe.filter(function(a){return a.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!vn};je.snapDirectional=hc;je.addEventListener=function(a,e){var t=js[a]||(js[a]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(a,e){var t=js[a],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(a,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],m=Pe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||m.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&m.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&Dn(e[s])&&s!=="onRefreshInit"?o(s,e[s]):e[s];return Dn(r)&&(r=r(),At(je,"refresh",function(){return r=e.batchMax()})),oo(a).forEach(function(l){var c={};for(s in n)c[s]=n[s];c.trigger=l,t.push(je.create(c))}),t};var lh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},pl=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(dt.isTouch?" pinch-zoom":""):"none",e===si&&a(at,t)},ch={auto:1,scroll:1},Zv=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Pe.core.getCache(r),s=Gt(),l;if(!o._isScrollT||s-o._isScrollT>2e3){for(;r&&r.scrollHeight<=r.clientHeight;)r=r.parentNode;o._isScroll=r&&!pr(r)&&r!==n&&(ch[(l=Wn(r)).overflowY]||ch[l.overflowX]),o._isScrollT=s}(o._isScroll||i==="x")&&(t._gsapAllow=!0)},od=function(e,t,n,i){return dt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Zv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&At(st,dt.eventTypes[0],hh,!1,!0)},onDisable:function(){return yt(st,dt.eventTypes[0],hh,!0)}})},$v=/(input|label|select|textarea)/i,uh,hh=function(e){var t=$v.test(e.target.tagName);(t||uh)&&(e._gsapAllow=!0,uh=t)},Kv=function(e){Ha(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o,s,l=Yt(e.target)||si,c=Pe.core.globals().ScrollSmoother,u=Yi&&(e.content&&Yt(e.content)||c&&c.get()&&c.get().content()),h=Fi(l,gt),f=Fi(l,Vt),m=1,g=(dt.isTouch&&He.visualViewport?He.visualViewport.scale*He.visualViewport.width:He.outerWidth)/He.innerWidth,d=0,p=Dn(i)?function(){return i(o)}:function(){return i||2.8},_,M,E=od(l,e.type,!0,r),S=function(){return _=!1},v=Mi,T=Mi,C=function(){s=Ei(l,gt),T=Vr(Yi?1:0,s),n&&(v=Vr(0,Ei(l,Vt))),M=qa},x=function(){if(_){requestAnimationFrame(S);var U=Ys(o.deltaY/2),N=T(h.v-U);return u&&N!==h.v+h.offset&&(h.offset=N-h.v,u.style.transform="translateY("+-h.offset+"px)",u._gsap&&(u._gsap.y=-h.offset+"px"),h.cacheID=$e.cache,$s()),!0}u&&(u.style.transform="translateY(0px)",h.offset=h.cacheID=0,u._gsap&&(u._gsap.y="0px")),_=!0},w,R,I,Y,Z=function(){C(),w.isActive()&&w.vars.scrollY>s&&(h()>s?w.progress(1)&&h(s):w.resetTo("scrollY",s))};return e.ignoreCheck=function(P){return Yi&&P.type==="touchmove"&&x()||m>1.05&&P.type!=="touchstart"||o.isGesturing||P.touches&&P.touches.length>1},e.onPress=function(){var P=m;m=Ys((He.visualViewport&&He.visualViewport.scale||1)/g),w.pause(),P!==m&&pl(l,m>1.01?!0:n?!1:"x"),_=!1,R=f(),I=h(),C(),M=qa},e.onRelease=e.onGestureStart=function(P,U){if(u&&(u.style.transform="translateY(0px)",h.offset=h.cacheID=0,u._gsap&&(u._gsap.y="0px")),!U)Y.restart(!0);else{$e.cache++;var N=p(),B,H;n&&(B=f(),H=B+N*.05*-P.velocityX/.227,N*=lh(f,B,H,Ei(l,Vt)),w.vars.scrollX=v(H)),B=h(),H=B+N*.05*-P.velocityY/.227,N*=lh(h,B,H,Ei(l,gt)),w.vars.scrollY=T(H),w.invalidate().duration(N).play(.01),(Yi&&w.vars.scrollY>=s||B>=s-1)&&Pe.to({},{onUpdate:Z,duration:N})}},e.onWheel=function(){w._ts&&w.pause(),Gt()-d>1e3&&(M=0,d=Gt())},e.onChange=function(P,U,N,B,H){qa!==M&&C(),U&&n&&f(v(B[2]===U?R+(P.startX-P.x):f()+U-B[1])),N&&h(T(H[2]===N?I+(P.startY-P.y):h()+N-H[1])),$s()},e.onEnable=function(){pl(l,n?!1:"x"),At(He,"resize",Z),E.enable()},e.onDisable=function(){pl(l,!0),yt(He,"resize",Z),E.kill()},o=new dt(e),o.iOS=Yi,Yi&&!h()&&h(1),Y=o._dc,w=Pe.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:Y.vars.onComplete}),o};je.sort=function(a){return Xe.sort(a||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};je.observe=function(a){return new dt(a)};je.normalizeScroll=function(a){if(typeof a=="undefined")return hn;if(a===!0&&hn)return hn.enable();if(a===!1)return hn&&hn.kill();var e=a instanceof dt?a:Kv(a);return hn&&hn.target===e.target&&hn.kill(),pr(e.target)&&(hn=e),e};je.core={_getVelocityProp:Nl,_inputObserver:od,_scrollers:$e,_proxies:jn,bridge:{ss:function(){vn||mr("scrollStart"),vn=Gt()},ref:function(){return Et}}};Qf()&&Pe.registerPlugin(je);let vo=[];document.querySelectorAll(".sketch").forEach(a=>{vo.push(new Cx(a))});os.registerPlugin(je);let za={skew:0},Jv=os.quickSetter(vo[0].uniforms.velocity,"value"),Qv=os.utils.clamp(-10,10);const ld=os.timeline({scrollTrigger:{start:"top top",end:"bottom top",scrub:2,onUpdate:a=>{let e=Qv(a.getVelocity()/-300);Math.abs(e)>Math.abs(za.skew)&&(za.skew=e,os.to(za,{skew:0,duration:2,ease:"power3",overwrite:!0,onUpdate:()=>Jv(za.skew)}))}}});ld.to(vo[0].uniforms.scroll,{value:"+=20"},0);ld.to(vo[0].box.rotation,{y:"+=5"},0);
