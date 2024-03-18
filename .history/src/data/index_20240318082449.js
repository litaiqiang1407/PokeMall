import { signup, login } from "./actions";
import { }

const rootURL = "http://localhost/pokemall";

const signupURL = `${rootURL}${signup}`;
const loginURL = `${rootURL}${login}`;

export { signupURL, loginURL };
