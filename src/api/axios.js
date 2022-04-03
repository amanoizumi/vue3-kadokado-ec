import axios from 'axios';

const url = import.meta.env.VITE_API_URL;
const path = import.meta.env.VITE_API_PATH;

// 後台驗證
export const checkSinginApi = async () => {
  // 取出 token
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1');

  axios.defaults.headers.common['Authorization'] = token;
  return await axios.post(`${url}/api/user/check`);
};

// 登入
export const loginApi = async (userData) => {
  return await axios.post(`${url}/admin/signin`, userData);
};

// 後台取得產品列表
export const getBackProductsApi = async () => {
  return await axios.get(`${url}/api/${path}/admin/products/all`);
};

// 後台刪除產品
export const deleteBackProductApi = async (id) => {
  return await axios.delete(`${url}/api/${path}/admin/product/${id}`);
};

// 後台新增或編輯產品
export const AddEditBackProductApi = async (isEdit, obj, tempProduct) => {
  let apiUrl = `${url}/api/${path}/admin/product`;
  let http = 'post';

  if (isEdit.value) {
    http = 'put';
    apiUrl += `/${tempProduct.value.id}`;
  }

  return await axios[http](apiUrl, obj);
};

// 後台取得優惠券列表
export const getBackCouponsApi = async () => {
  return await axios.get(`${url}/api/${path}/admin/coupons`);
};

// 後台取得訂單列表
export const getBackOrdersApi = async (page = 1) => {
  return await axios.get(`${url}/api/${path}/admin/orders?page=${page}`);
};
// 後台刪除訂單
export const deleteBackOrderApi = async (id) => {
  return await axios.delete(`${url}/api/${path}/admin/order/${id}`);
};

// 後台編輯訂單
export const editBackOrderApi = async (id, tempOrderObj) => {
  return await axios.put(`${url}/api/${path}/admin/order/${id}`, tempOrderObj);
};

// 前台取得產品列表
export const getFrontProductsApi = async () => {
  return await axios.get(`${url}/api/${path}/products/all`);
};

// 前台取得單一產品資訊
export const getFrontProductApi = async (id) => {
  return await axios.get(`${url}/api/${path}/product/${id}`);
};
// 前台取得購物車
export const getFrontCartApi = async () => {
  return await axios.get(`${url}/api/${path}/cart`);
};

// 前台加入購物車
export const postFrontCartApi = async (id) => {
  const obj = {
    data: {
      product_id: id,
      qty: 1,
    },
  };
  return await axios.post(`${url}/api/${path}/cart`, obj);
};

// 前台編輯購物車產品數量
export const editFrontCartApi = async (id, qty) => {
  const obj = {
    data: {
      product_id: id,
      qty,
    },
  };
  return await axios.put(`${url}/api/${path}/cart/${id}`, obj);
};

// 前台購物車刪除單一商品
export const deleteFrontCartApi = async (id) => {
  return await axios.delete(`${url}/api/${path}/cart/${id}`);
};

// 前台購物車清空全部產品
export const deleteAllFrontCartApi = async () => {
  return await axios.delete(`${url}/api/${path}/carts`);
};

// 前台送出訂單
export const postFrontOrderApi = async (order) => {
  return await axios.post(`${url}/api/${path}/order`, order);
};

// 前台用 id 取得訂單資料
export const getFrontOrderApi = async (id) => {
  return await axios.get(`${url}/api/${path}/order/${id}`);
};
