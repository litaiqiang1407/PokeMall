import { signup, login, updateAdminOrder, deleteUser } from "./actions";
import { dashboard, orders, products, users, suggestions } from "./api";

const rootURL = "http://localhost/pokemall";

// actions
const signupURL = `${rootURL}${signup}`;
const loginURL = `${rootURL}${login}`;

const updateAdminOrderURL = `${rootURL}${updateAdminOrder}`;
const deleteUserURL = `${rootURL}${deleteUser}`;

// api
const dashboardURL = `${rootURL}${dashboard}`;
const ordersURL = `${rootURL}${orders}`;
const productsURL = `${rootURL}${products}`;
const usersURL = `${rootURL}${users}`;
const suggestionsURL = `${rootURL}${suggestions}`;

export {
  signupURL,
  loginURL,
  updateAdminOrderURL,
  deleteUserURL,
  dashboardURL,
  ordersURL,
  productsURL,
  usersURL,
  suggestionsURL,
};
