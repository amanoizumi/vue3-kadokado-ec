import{_ as i}from"./PageTitle.828e6fdc.js";import{g as l}from"./localStorageFn.5c1446a8.js";import{b as d}from"./axios.79eff361.js";import{_ as p}from"./index.8d779fa5.js";import{y as f,A as _,o as s,v as r,K as u,G as g,L as m,D as v}from"./vendor.93ccd42a.js";const h={setup(){let t={favlistData:[]};const e=f([]),c=()=>{t.favlistData.forEach(a=>{d(a).then(o=>{console.log(o.data.product),e.value.push(o.data.product)}).catch(o=>{console.dir(o)})})};return _(()=>{t=l("favlistLocalStorage"),t.favlistData.length!==0&&c(),console.log(t)}),{favlist:t,products:e}}},x=v(" \u6211\u662F\u6211\u95DC\u6CE8\u7684\u5546\u54C1\u9801\u9762 "),D={key:0},j={key:1};function k(t,e,c,a,o,y){const n=i;return s(),r(m,null,[u(n,{title:"\u6211\u95DC\u6CE8\u7684\u5546\u54C1"}),x,a.products.length===0?(s(),r("div",D,"\u76EE\u524D\u6C92\u6709\u95DC\u6CE8\u7684\u5546\u54C1")):(s(),r("div",j,"\u6211\u95DC\u6CE8\u7684\u5546\u54C1 "+g(a.products),1))],64)}var V=p(h,[["render",k]]);export{V as default};