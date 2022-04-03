const o=a=>{const t=localStorage.getItem(a);return t===null?null:JSON.parse(t)},e=(a,t)=>(localStorage.setItem(a,JSON.stringify(t)),JSON.parse(localStorage.getItem(a)));export{o as g,e as s};
