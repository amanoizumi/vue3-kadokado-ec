import{e as b}from"./emitter.cd373924.js";import{_ as u}from"./index.8d779fa5.js";import{y as o,A as x,o as i,v as d,D as f,G as p,w as c,H as v,C as _}from"./vendor.93ccd42a.js";const w={emits:{"emit-button-result":t=>typeof t=="boolean"},props:{propAlertObj:Object},setup(t,{emit:r}){const a=o(""),e=o(""),s=o(!1),n=o(""),l=(m,g)=>{b.emit(`delete-${m}-result`,g)};return x(()=>{a.value=t.propAlertObj.msg,e.value=t.propAlertObj.state,s.value=t.propAlertObj.showButton,n.value=t.propAlertObj.target}),{msg:a,state:e,showButton:s,target:n,emitResult:l}}},j={key:0};function y(t,r,a,e,s,n){return i(),d("div",{class:_(["absolute top-0 z-20 flex w-full items-center justify-center border-b-2 p-3 tracking-wide",{"border-emerald-300":e.state==="success","text-emerald-600":e.state==="success","bg-emerald-100":e.state==="success","border-orange-100":e.state==="warning","text-orange-600":e.state==="warning","bg-orange-50":e.state==="warning","border-red-100":e.state==="danger","text-red-600":e.state==="danger","bg-red-50":e.state==="danger"}])},[f(p(e.msg)+" ",1),e.showButton?(i(),d("div",j,[c("button",{type:"button",onClick:r[0]||(r[0]=l=>e.emitResult(e.target,!0)),class:"ml-5 mr-5 rounded bg-indigo-500 px-3 py-1 text-sm text-white hover:bg-indigo-700"},"\u78BA\u5B9A"),c("button",{type:"button",onClick:r[1]||(r[1]=l=>e.emitResult(e.target,!1)),class:"rounded bg-slate-300 px-3 py-1 text-sm text-black hover:bg-slate-400 hover:text-white"},"\u53D6\u6D88")])):v("",!0)],2)}var B=u(w,[["render",y]]);export{B as _};