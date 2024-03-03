import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import User from "~/pages/User";
import AllProducts from "~/pages/AllProducts";
import ProductDetail from "~/pages/ProductDetail";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/login", component: Login, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/user", component: User, exact: true },
  { path: "/all-products", component: AllProducts, exact: true },
  { path: "/product-detail", component: ProductDetail, exact: true },
];

//  Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
