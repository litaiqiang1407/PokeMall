import { signup, login } from "./actions";
import { dashboard } from "./api";

const rootURL = "http://localhost/pokemall";

// actions
const signupURL = `${rootURL}${signup}`;
const loginURL = `${rootURL}${login}`;

// api
const dashboardURL = `${rootURL}${dashboard}`;

export { signupURL, loginURL, dashboardURL };
