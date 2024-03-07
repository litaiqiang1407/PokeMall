//  Layouts
import { AuthenticationLayout } from "~/components/Layouts";

// Pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import Profile from "~/pages/Profile";
import AllProducts from "~/pages/AllProducts";
import ProductDetail from "~/pages/ProductDetail";
import MyAccount from "~/pages/Profile/MyAccount";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, layout: AuthenticationLayout },
  { path: "/signup", component: Signup, layout: AuthenticationLayout },
  { path: "/profile", component: Profile },
  { path: "/profile/my-account", component: MyAccount },
  { path: "/all-products", component: AllProducts },
  { path: "/product-detail/:id", component: ProductDetail },
];

//  Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
