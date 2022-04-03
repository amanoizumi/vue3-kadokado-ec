import{o as n,v as _,w as e,x as k,y as i,A as y,B as A,C as f,D as m,G as j,c as p,H as M,r as C,I as b,J as O,K as h,L as R,M as B}from"./vendor.93ccd42a.js";import{e as g}from"./emitter.cd373924.js";import{_ as $}from"./index.8d779fa5.js";import{_ as z,a as D}from"./heart.b6f6fd11.js";import{g as V}from"./axios.79eff361.js";const K={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},F=e("g",{fill:"none"},[e("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z",fill:"currentColor"}),e("path",{d:"M18 8.118l-8 4l-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z",fill:"currentColor"})],-1),H=[F];function I(s,r){return n(),_("svg",K,H)}var N={name:"heroicons-solid-mail",render:I};const Y={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},S=e("g",{fill:"none"},[e("path",{d:"M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z",fill:"currentColor"})],-1),T=[S];function E(s,r){return n(),_("svg",Y,T)}var G={name:"heroicons-solid-phone",render:E};const J={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},q=e("g",{fill:"none"},[e("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),P=[q];function Q(s,r){return n(),_("svg",J,P)}var U={name:"heroicons-outline-exclamation",render:Q};const W={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},X=e("g",{fill:"none"},[e("path",{d:"M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Z=[X];function tt(s,r){return n(),_("svg",W,Z)}var et={name:"heroicons-outline-check-circle",render:tt};const ot={props:{propAlertObj:Object},setup(s,{emit:r}){const a=k(),t=i(""),l=i(""),c=i(""),o=i(!1),d=i(!1),u=x=>{g.emit("front-alert-result",x)};return y(()=>{l.value=s.propAlertObj.msg,o.value=s.propAlertObj.showButton,c.value=s.propAlertObj.state,d.value=s.propAlertObj.backdrop,t.value=a.path,A(()=>a.path,(x,w)=>{t.value=a.path,x!==w&&g.emit("close-front-alert")})}),{msg:l,showButton:o,state:c,backdrop:d,emitResult:u}}},st={class:"relative"},nt={class:"flex"},rt={class:"text-center text-lg flex items-center mx-auto"},at={key:2};function ct(s,r,a,t,l,c){const o=et,d=U;return n(),_("div",{class:f(["fixed inset-0 z-30",{"bg-black/20":t.backdrop}])},[e("div",st,[e("div",{class:f(["mt-[124px] lg:mt-20 items-center overflow-y-auto rounded-sm p-5 opacity-100 border-b-2 z-50",{"border-emerald-300":t.state==="success","text-emerald-600":t.state==="success","bg-emerald-100/90":t.state==="success","border-orange-300":t.state==="warning","text-orange-600":t.state==="warning","bg-orange-100/90":t.state==="warning","border-red-300":t.state==="danger","text-red-600":t.state==="danger","bg-red-100/90":t.state==="danger"}])},[e("div",nt,[e("div",rt,[m(j(t.msg)+" ",1),t.state==="success"?(n(),p(o,{key:0,class:"ml-2 mt-[2px]"})):(n(),p(d,{key:1,class:"ml-2 mt-[2px]"})),t.showButton?(n(),_("div",at,[e("button",{type:"button",onClick:r[0]||(r[0]=u=>t.emitResult(!0)),class:"ml-5 mr-5 rounded bg-indigo-500 px-3 py-1 text-sm text-white hover:bg-indigo-700"},"\u78BA\u5B9A"),e("button",{type:"button",onClick:r[1]||(r[1]=u=>t.emitResult(!1)),class:"rounded bg-slate-300 px-3 py-1 text-sm text-black hover:bg-slate-400 hover:text-white"},"\u53D6\u6D88")])):M("",!0)])])],2)])],2)}var lt=$(ot,[["render",ct]]);const it={components:{HeroiconsOutlineShoppingCart:z},setup(s,{emit:r}){const a=k(),t=i(""),l=i(0),c=()=>{V().then(o=>{l.value=o.data.data.carts.length}).catch(o=>{console.log(o)})};return g.on("update-cartlen",c),y(()=>{c(),t.value=a.path,A(()=>a.path,(o,d)=>{t.value=a.path})}),{path:t,cartLen:l}}},_t={class:"absolute -top-3 -right-3 rounded-lg bg-yellow-600 px-2 py-[2px] text-xs text-white"};function dt(s,r,a,t,l,c){const o=C("RouterLink");return n(),p(o,{to:"/cart",class:f(["relative mt-1 flex items-center text-xl hover:text-sky-500",{"text-sky-500":t.path==="/cart"}])},{default:b(()=>[(n(),p(O("heroicons-outline-shopping-cart"))),e("span",_t,j(t.cartLen),1)]),_:1},8,["class"])}var ht=$(it,[["render",dt]]);const mt={components:{HeroiconsSolidHeart:D},setup(){const s=k(),r=[{to:"/",text:"\u9996\u9801"},{to:"/products",text:"\u5546\u54C1\u4E00\u89BD"},{to:"/locations",text:"\u9580\u5E02\u64DA\u9EDE"},{to:"/about",text:"\u516C\u53F8\u7C21\u4ECB"}],a=i(!1),t=i({}),l=i(0);g.on("open-front-alert",o=>{l.value++,a.value=!0,t.value=o}),g.on("close-front-alert",()=>{a.value=!1,t.value={}});const c=i("");return y(()=>{c.value=s.path,A(()=>s.path,(o,d)=>{c.value=s.path})}),{alertObj:t,navbarItems:r,showAlert:a,path:c,num:l}}},pt={id:"navbar",class:"sticky top-0 z-40 bg-white shadow-md"},ut={class:"mx-auto flex max-w-[1260px] flex-1 items-center px-[50px] pt-[18px] pb-[18px] lg:justify-between"},xt=e("h1",{class:"flex font-display text-3xl text-zinc-600",title:"KADOKADO \u624B\u5DE5\u9999\u7682"},[m(" K "),e("span",{class:"text-yellow-500"},"A"),m("DO KADO ")],-1),ft={class:"mx-auto ml-auto grid grid-cols-2 font-thin lg:mx-auto lg:flex lg:items-center"},gt={class:"flex flex-col lg:flex-row"},vt={class:"px-4"},bt={class:"px-4"},wt={class:"min-h-screen pt-10"},kt={class:"bg-yellow-600 py-10 tracking-wider text-white"},yt={class:"mx-auto flex h-full max-w-[800px] flex-col px-10"},At=e("h2",{class:"mb-2 text-2xl font-bold"},"Contact",-1),jt={href:"tel:+886-988745554",class:"mb-2 flex"},Ct=m("\u9023\u7D61\u96FB\u8A71\uFF1A0988-745554 "),$t={href:"mailto:kadokado@domjs.com",class:"mb-2 flex"},Mt=m("\u96FB\u5B50\u4FE1\u7BB1\uFF1Akadokado@domjs.com "),Ot=e("p",null,"\u71DF\u696D\u6642\u9593\uFF1A\u9031\u4E00 ~ \u9031\u4E94 \u65E9\u4E0A 8 : 30 \u81F3\u665A\u4E0A 17 : 30",-1),Rt=e("p",{class:"mt-10 text-sm"},"\xA92022 CopyrightsAll KADOKADO Rights Reserved | \u500B\u4EBA\u7DF4\u7FD2\u4F5C\u54C1\uFF0C\u975E\u5546\u696D\u7528\u9014",-1);function Lt(s,r,a,t,l,c){const o=C("RouterLink"),d=ht,u=lt,x=C("router-view"),w=G,L=N;return n(),_(R,null,[e("div",pt,[e("nav",ut,[h(o,{class:"hidden sm:block",to:"/"},{default:b(()=>[xt]),_:1}),e("ul",ft,[(n(!0),_(R,null,B(t.navbarItems,v=>(n(),_("li",{class:"px-4",key:v.to},[h(o,{to:v.to,class:f(["hvr-underline-from-center flex items-center py-2 text-lg hover:text-yellow-600",{"text-yellow-600 before:left-0 before:right-0":t.path===v.to}])},{default:b(()=>[m(j(v.text),1)]),_:2},1032,["to","class"])]))),128))]),e("ul",gt,[e("li",vt,[h(o,{to:"/favlist",class:f(["flex items-center text-xl hover:text-rose-400",{"text-rose-400":t.path==="/favlist"}])},{default:b(()=>[(n(),p(O("heroicons-solid-heart")))]),_:1},8,["class"])]),e("li",bt,[h(d,{class:"mt-4 lg:mt-0"})])])])]),e("main",wt,[t.showAlert?(n(),p(u,{key:0,"prop-alert-obj":t.alertObj},null,8,["prop-alert-obj"])):M("",!0),h(x)]),e("footer",kt,[e("div",yt,[At,e("a",jt,[h(w,{class:"mt-[3px] mr-1"}),Ct]),e("a",$t,[h(L,{class:"mt-[3px] mr-1"}),Mt]),Ot,Rt])])],64)}var Ft=$(mt,[["render",Lt]]);export{Ft as default};
