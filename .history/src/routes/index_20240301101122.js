import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import User from "~/pages/User";
import AllProducts from "~/pages/AllProducts";
import ProductDetail from "~/pages/ProductDetail";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, layout: AuthenticationLayout },
  { path: "/signup", component: Signup, layout: AuthenticationLayout },
  { path: "/user", component: User },
  { path: "/all-products", component: AllProducts },
  { path: "/product-detail", component: ProductDetail },
];

//  Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
