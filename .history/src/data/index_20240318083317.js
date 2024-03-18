import { signup, login, updateAdminOrder } from "./actions";
import { dashboard, orders } from "./api";

const rootURL = "http://localhost/pokemall";

// actions
const signupURL = `${rootURL}${signup}`;
const loginURL = `${rootURL}${login}`;

const updateAdminOrderURL = `${rootURL}${updateAdminOrder}`;

// api
const dashboardURL = `${rootURL}${dashboard}`;
const ordersURL = `${rootURL}${orders}`;

export { signupURL, loginURL, updateAdminOrderURL, dashboardURL, ordersURL };
