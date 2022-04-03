import{d as N,e as O,g as T,f as j,h as q}from"./axios.79eff361.js";import{X as D,y,r as F,o as u,v as h,K as n,I as M,w as o,C,L as V,D as p,A as E,Y as P,Z as S,M as U,G as w,c as B,H as L,$}from"./vendor.93ccd42a.js";import{e as m}from"./emitter.cd373924.js";import{_ as A}from"./index.8d779fa5.js";import{_ as R,a as z}from"./plus.34aa69a2.js";import{_ as G}from"./minus.96dd94aa.js";import{_ as H}from"./PageIsLoading.331d21b6.js";import{_ as K}from"./PageTitle.828e6fdc.js";import{t as X}from"./toThousands.bee33b94.js";const Y={setup(_,{emit:s}){const b=D(),e=y(!1),g=()=>/^(09)[0-9]{8}$/.test(a.value.orderPhone)?!0:"\u9700\u70BA\u624B\u6A5F\u865F\u78BC\u683C\u5F0F\uFF0C\u4F8B\u5982 0912345678",a=y({orderName:"",orderPhone:"",orderAddress:"",orderEmail:"",orderComment:""});return{tempOrder:a,isSubmit:e,isPhone:g,submitOrder:()=>{e.value=!0;const d={data:{user:{name:a.value.orderName,email:a.value.orderEmail,tel:a.value.orderPhone,address:a.value.orderAddress},message:a.value.orderComment}};N(d).then(i=>{e.value=!1,m.emit("update-cartlen"),m.emit("open-front-alert",{msg:i.data.message,showButton:!1,state:"success"});const{orderId:t}=i.data;setTimeout(()=>{m.emit("close-front-alert"),b.push(`/order/${t}`)},1500)}).catch(i=>{e.value=!1,console.dir(i)})}}}},Z=o("h2",{class:"mb-8 text-center text-2xl text-stone-700"},"\u8A02\u8CFC\u4EBA\u8CC7\u6599",-1),J={class:"mb-4 grid gap-x-2 md:mb-0 md:grid-cols-2"},Q={class:"mb-4"},W={for:"kadoName",class:"mb-2 flex items-center"},I=p(" \u59D3\u540D "),ee={for:"kadoPhone",class:"mb-2 flex items-center"},oe=p(" \u96FB\u8A71 "),te={class:"mb-4"},se={for:"kadoAddress",class:"mb-2 flex items-center"},re=p(" \u5730\u5740 "),le={class:"mb-4"},ne={for:"kadoEmail",class:"mb-2 flex items-center"},ae=p(" \u96FB\u5B50\u4FE1\u7BB1 "),de={class:"mb-10"},ie=o("label",{for:"kadoComment",class:"mb-2 block"},"\u7559\u8A00\uFF08\u975E\u5FC5\u586B\uFF09",-1),ce={class:"flex"},ue=["disabled"],me={key:0},_e={key:1};function fe(_,s,b,e,g,a){const c=F("ErrorMessage"),d=F("Field"),i=F("Form");return u(),h(V,null,[Z,n(i,{onSubmit:e.submitOrder,class:"mx-auto max-w-[700px] px-2 text-base lg:px-0",id:"kadoForm"},{default:M(()=>[o("div",J,[o("div",Q,[o("label",W,[I,n(c,{name:"\u59D3\u540D",class:"ml-2 text-sm text-red-600"})]),n(d,{type:"text",id:"kadoName",class:"w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30",name:"\u59D3\u540D",placeholder:"\u8ACB\u8F38\u5165\u59D3\u540D",modelValue:e.tempOrder.orderName,"onUpdate:modelValue":s[0]||(s[0]=t=>e.tempOrder.orderName=t),modelModifiers:{trim:!0},rules:"required"},null,8,["modelValue"])]),o("div",null,[o("label",ee,[oe,n(c,{name:"\u96FB\u8A71",class:"ml-2 text-sm text-red-600"})]),n(d,{type:"tel",id:"kadoPhone",class:"w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30",name:"\u96FB\u8A71",placeholder:"\u8ACB\u8F38\u5165\u96FB\u8A71",modelValue:e.tempOrder.orderPhone,"onUpdate:modelValue":s[1]||(s[1]=t=>e.tempOrder.orderPhone=t),modelModifiers:{trim:!0},rules:e.isPhone},null,8,["modelValue","rules"])])]),o("div",te,[o("label",se,[re,n(c,{name:"\u5730\u5740",class:"ml-2 text-sm text-red-600"})]),n(d,{type:"text",id:"kadoAddress",class:"w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30",name:"\u5730\u5740",placeholder:"\u8ACB\u8F38\u5165\u5730\u5740",modelValue:e.tempOrder.orderAddress,"onUpdate:modelValue":s[2]||(s[2]=t=>e.tempOrder.orderAddress=t),modelModifiers:{trim:!0},rules:"required"},null,8,["modelValue"])]),o("div",le,[o("label",ne,[ae,n(c,{name:"\u96FB\u5B50\u4FE1\u7BB1",class:"ml-2 text-sm text-red-600"})]),n(d,{type:"email",id:"kadoEmail",class:"w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30",name:"\u96FB\u5B50\u4FE1\u7BB1",placeholder:"\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",modelValue:e.tempOrder.orderEmail,"onUpdate:modelValue":s[3]||(s[3]=t=>e.tempOrder.orderEmail=t),modelModifiers:{trim:!0},rules:"required|email"},null,8,["modelValue"])]),o("div",de,[ie,n(d,{type:"text",class:"w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30",name:"\u7559\u8A00",id:"kadoComment",placeholder:"\u6B61\u8FCE\u8B93\u6211\u5011\u77E5\u9053\u60A8\u7684\u5BF6\u8CB4\u610F\u898B\uFF01:)",modelValue:e.tempOrder.orderComment,"onUpdate:modelValue":s[4]||(s[4]=t=>e.tempOrder.orderComment=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),o("div",ce,[o("button",{type:"submit",id:"submitBtn",class:C(["mx-auto w-1/5 rounded bg-stone-800 py-2 text-white hover:bg-yellow-800",{"bg-yellow-800/50":e.isSubmit}]),disabled:e.isSubmit},[e.isSubmit?(u(),h("span",_e,"\u9001\u51FA\u8A02\u55AE\u4E2D...")):(u(),h("span",me,"\u9001\u51FA"))],10,ue)])]),_:1},8,["onSubmit"])],64)}var he=A(Y,[["render",fe]]);const pe={setup(){const _=y(!1),s=y(!1),b=y({carts:[]});let e=null,g=0;const a=()=>{g==0&&(_.value=!0),g++,T().then(t=>{_.value=!1,b.value=t.data.data}).catch(t=>{console.dir(t),_.value=!1})},c=(t,l)=>{const{id:k}=t;let f=t.qty;l==="minus"?f-=1:l==="plus"?f+=1:typeof l=="number"&&l>=1?(l=Number(l.toFixed()),f=l):f=1,s.value=!0,j(k,f).then(x=>{a(),s.value=!1}).catch(x=>{console.log(x),s.value=!1})},d=t=>{s.value=!0,q(t).then(l=>{a(),m.emit("update-cartlen"),s.value=!1}).catch(l=>{console.log(l),s.value=!1})},i=()=>{m.emit("open-front-alert",{msg:"\u78BA\u5B9A\u8981\u6E05\u7A7A\u8CFC\u7269\u8ECA\u55CE\uFF1F",showButton:!0,state:"warning",backdrop:!0})};return m.on("front-alert-result",t=>{e=t,e?O().then(l=>{b.value={carts:[]},m.emit("update-cartlen"),m.emit("close-front-alert")}).catch(l=>{console.dir(l)}):e||m.emit("close-front-alert")}),E(()=>{_.value=!0,a()}),{cartData:b,isLoading:_,cursorProgress:s,toThousands:X,editFrontCart:c,deleteFrontCart:d,checkDeleteAllFrontCart:i}}},be={key:0,class:"mb-6 overflow-x-auto"},ge=o("h2",{class:"mb-8 text-center text-2xl text-stone-700"},"\u8CFC\u7269\u8ECA\u5167\u7684\u5546\u54C1",-1),xe={class:"text-center"},ve=o("thead",{class:"border-b-2 text-yellow-900/80"},[o("tr",null,[o("th",{class:"w-1/6 py-1"},"\u5546\u54C1\u5716\u7247"),o("th",{class:"w-1/6"},"\u5546\u54C1\u540D\u7A31"),o("th",{class:"w-1/6"},"\u55AE\u50F9"),o("th",{class:"w-1/6"},"\u6578\u91CF"),o("th",{class:"w-1/6"},"\u50F9\u683C"),o("th",{class:"w-1/6"})])],-1),ye={class:"font-sans tracking-wider text-stone-800"},we={class:"py-5"},Ce={class:"overflow-hidden rounded"},ke=["src"],Fe=o("span",null,"NT$\xA0",-1),Ve={class:"flex h-full items-center justify-center"},Pe=["onClick","disabled"],Ae=["onChange","onUpdate:modelValue","disabled"],Ne=["disabled","onClick"],Oe=o("span",null,"NT$\xA0",-1),Te=["disabled","onClick"],je={class:"flex"},qe=["disabled"],De={class:"mr-10 flex items-center text-lg"},Me=p(" \u5408\u8A08\uFF1A "),Ee=o("span",null,"NT$\xA0",-1),Se={key:1};function Ue(_,s,b,e,g,a){var f,x;const c=K,d=H,i=G,t=R,l=z,k=he;return u(),h(V,null,[n(c,{title:"\u8CFC\u7269\u8ECA"}),P(n(d,null,null,512),[[S,e.isLoading]]),o("div",{class:C(["mx-auto mb-20 max-w-[1260px] px-5 lg:px-20",{hidden:e.isLoading}])},[((f=e.cartData.carts)==null?void 0:f.length)>=1?(u(),h("div",be,[ge,o("table",xe,[ve,o("tbody",ye,[(u(!0),h(V,null,U(e.cartData.carts,r=>(u(),h("tr",{key:r.id,class:"border-b"},[o("td",we,[o("div",Ce,[o("img",{src:r.product.imageUrl,class:"object-cover",alt:""},null,8,ke)])]),o("td",null,w(r.product.title),1),o("td",null,[Fe,p(" "+w(e.toThousands(r.product.price)),1)]),o("td",null,[o("div",Ve,[o("button",{type:"button",class:C(["p-2",{"hover: cursor-not-allowed text-stone-400 ":r.qty===1,"hover:text-yellow-600":r.qty>1,"cursor-progress":e.cursorProgress}]),onClick:v=>e.editFrontCart(r,"minus"),disabled:r.qty===1||e.cursorProgress},[n(i)],10,Pe),P(o("input",{type:"text",class:"w-12 border-0 text-center focus:border-yellow-500 focus:bg-white focus:ring focus:ring-yellow-500 focus:ring-opacity-50",maxlength:"2",onChange:v=>e.editFrontCart(r,r.qty),"onUpdate:modelValue":v=>r.qty=v,disabled:e.cursorProgress},null,40,Ae),[[$,r.qty,void 0,{number:!0}]]),o("button",{type:"button",class:C(["p-2 hover:text-yellow-600",{"cursor-progress":e.cursorProgress}]),disabled:e.cursorProgress,onClick:v=>e.editFrontCart(r,"plus")},[n(t)],10,Ne),o("span",null,w(r.product.unit),1)])]),o("td",null,[Oe,p(" "+w(e.toThousands(r.total)),1)]),o("td",null,[o("button",{disabled:e.cursorProgress,type:"button",class:"duration-100 hover:text-xl hover:text-rose-600",title:"\u522A\u9664\u8A72\u5546\u54C1",onClick:v=>e.deleteFrontCart(r.id)},[n(l)],8,Te)])]))),128))])]),o("div",je,[o("button",{disabled:e.cursorProgress,type:"button",class:"mr-auto p-2 text-stone-500 hover:text-black",onClick:s[0]||(s[0]=(...r)=>e.checkDeleteAllFrontCart&&e.checkDeleteAllFrontCart(...r))},"\u6E05\u7A7A\u8CFC\u7269\u8ECA",8,qe),o("p",De,[Me,Ee,p(" "+w(e.toThousands(e.cartData.final_total)),1)])])])):(u(),h("div",Se,"\u8CFC\u7269\u8ECA\u73FE\u5728\u6C92\u6709\u5546\u54C1")),((x=e.cartData.carts)==null?void 0:x.length)>=1?(u(),B(k,{key:2})):L("",!0)],2)],64)}var Ye=A(pe,[["render",Ue]]);export{Ye as default};
