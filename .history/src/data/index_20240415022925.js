import {
  signup,
  login,
  updateAdminOrder,
  deleteUser,
  addToCart,
  deleteFromCart,
  userSearch,
  changeAccountInfo,
  createOrder,
  addUser,
} from "./actions";

import {
  dashboard,
  orders,
  products,
  users,
  suggestions,
  productDetail,
  size,
  price,
  shoppingCart,
  orderItem,
} from "./api";

import { tokenGHN, provinceURL, districtURL, wardURL } from "./Third-PartyAPIs";

const rootURL = "http://cuonglt.webdevelopment.io.vn/webdevel_cuonglt";

// actions
const signupURL = `${rootURL}${signup}`;
const loginURL = `${rootURL}${login}`;

const updateAdminOrderURL = `${rootURL}${updateAdminOrder}`;
const deleteUserURL = `${rootURL}${deleteUser}`;

const addToCartURL = `${rootURL}${addToCart}`;
const deleteFromCartURL = `${rootURL}${deleteFromCart}`;
const userSearchURL = `${rootURL}${userSearch}`;

const changeAccountInfoURL = `${rootURL}${changeAccountInfo}`;

const createOrderURL = `${rootURL}${createOrder}`;

const addUserURL = `${rootURL}${addUser}`;

// api
const dashboardURL = `${rootURL}${dashboard}`;
const ordersURL = `${rootURL}${orders}`;
const productsURL = `${rootURL}${products}`;
const usersURL = `${rootURL}${users}`;
const suggestionsURL = `${rootURL}${suggestions}`;
const productDetailURL = `${rootURL}${productDetail}`;
const sizeURL = `${rootURL}${size}`;
const priceURL = `${rootURL}${price}`;

const shoppingCartURL = `${rootURL}${shoppingCart}`;

const orderItemURL = `${rootURL}${orderItem}`;

export {
  signupURL,
  loginURL,
  updateAdminOrderURL,
  deleteUserURL,
  addToCartURL,
  deleteFromCartURL,
  userSearchURL,
  changeAccountInfoURL,
  createOrderURL,
  addUserURL,
  dashboardURL,
  ordersURL,
  productsURL,
  usersURL,
  suggestionsURL,
  productDetailURL,
  sizeURL,
  priceURL,
  shoppingCartURL,
  orderItemURL,
  tokenGHN,
  provinceURL,
  districtURL,
  wardURL,
};
