import{e as a}from"./vendor.93ccd42a.js";const r="https://vue3-course-api.hexschool.io/v2",e="kadokado",p=async()=>{const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");return a.defaults.headers.common.Authorization=t,await a.post(`${r}/api/user/check`)},d=async t=>await a.post(`${r}/admin/signin`,t),$=async()=>await a.get(`${r}/api/${e}/admin/products/all`),u=async t=>await a.delete(`${r}/api/${e}/admin/product/${t}`),l=async(t,n,s)=>{let o=`${r}/api/${e}/admin/product`,i="post";return t.value&&(i="put",o+=`/${s.value.id}`),await a[i](o,n)},A=async()=>await a.get(`${r}/api/${e}/admin/coupons`),g=async(t=1)=>await a.get(`${r}/api/${e}/admin/orders?page=${t}`),y=async t=>await a.delete(`${r}/api/${e}/admin/order/${t}`),w=async(t,n)=>await a.put(`${r}/api/${e}/admin/order/${t}`,n),k=async()=>await a.get(`${r}/api/${e}/products/all`),m=async t=>await a.get(`${r}/api/${e}/product/${t}`),h=async()=>await a.get(`${r}/api/${e}/cart`),F=async t=>{const n={data:{product_id:t,qty:1}};return await a.post(`${r}/api/${e}/cart`,n)},B=async(t,n)=>{const s={data:{product_id:t,qty:n}};return await a.put(`${r}/api/${e}/cart/${t}`,s)},C=async t=>await a.delete(`${r}/api/${e}/cart/${t}`),v=async()=>await a.delete(`${r}/api/${e}/carts`),O=async t=>await a.post(`${r}/api/${e}/order`,t),P=async t=>await a.get(`${r}/api/${e}/order/${t}`);export{l as A,k as a,m as b,P as c,O as d,v as e,B as f,h as g,C as h,p as i,$ as j,u as k,d as l,w as m,g as n,y as o,F as p,A as q};