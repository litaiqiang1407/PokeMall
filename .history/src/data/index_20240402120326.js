import {
  signup,
  login,
  updateAdminOrder,
  deleteUser,
  addToCart,
  deleteFromCart,
  userSearch,
  changeAccountInfo,
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
} from "./api";

import { province, district, ward } from "./Third-PartyAPIs";

const rootURL = "http://localhost/pokemall";

// actions
const signupURL = `${rootURL}${signup}`;
const loginURL = `${rootURL}${login}`;

const updateAdminOrderURL = `${rootURL}${updateAdminOrder}`;
const deleteUserURL = `${rootURL}${deleteUser}`;

const addToCartURL = `${rootURL}${addToCart}`;
const deleteFromCartURL = `${rootURL}${deleteFromCart}`;
const userSearchURL = `${rootURL}${userSearch}`;

const changeAccountInfoURL = `${rootURL}${changeAccountInfo}`;

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

export {
  signupURL,
  loginURL,
  updateAdminOrderURL,
  deleteUserURL,
  addToCartURL,
  deleteFromCartURL,
  userSearchURL,
  changeAccountInfoURL,
  dashboardURL,
  ordersURL,
  productsURL,
  usersURL,
  suggestionsURL,
  productDetailURL,
  sizeURL,
  priceURL,
  shoppingCartURL,
  province,
  district,
  ward,
};
