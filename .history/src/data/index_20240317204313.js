import { signup, login } from "./actions";

const rootURL = "http://localhost/pokemall";

const signupURL = `${rootURL}${signup}`;

console.log(signupURL);
