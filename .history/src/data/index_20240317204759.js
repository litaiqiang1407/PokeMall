import { signup, login } from "./actions";

const rootURL = "http://localhost/pokemall";

const signupURL = `${rootURL}${signup}`;
const loginURL = `${rootURL}${login}`;
