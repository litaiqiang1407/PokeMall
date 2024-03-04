//  Layouts
import { AuthenticationLayout } from "~/components/Layouts";

// Pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import Account from "~/pages/Account";
import AllProducts from "~/pages/AllProducts";
import ProductDetail from "~/pages/ProductDetail";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, layout: AuthenticationLayout },
  { path: "/signup", component: Signup, layout: AuthenticationLayout },
  { path: "/account", component: Account },
  { path: "/all-products", component: AllProducts },
  { path: "/product-detail/:id", component: ProductDetail },
];

//  Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
