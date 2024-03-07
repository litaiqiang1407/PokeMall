//  Layouts
import { AuthenticationLayout } from "~/components/Layouts";

// Pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import AllProducts from "~/pages/AllProducts";
import ProductDetail from "~/pages/ProductDetail";
import Profile from "~/pages/Profile";
import MyAccount from "~/pages/Profile/MyAccount";
import PurchaseOrders from "~/pages/Profile/PurchaseOrders";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, layout: AuthenticationLayout },
  { path: "/signup", component: Signup, layout: AuthenticationLayout },
  { path: "/profile", component: Profile },
  { path: "/profile/my-account", component: MyAccount, layout: Profile },
  {
    path: "/profile/purchase-orders",
    component: PurchaseOrders,
    layout: Profile,
  },
  { path: "/all-products", component: AllProducts },
  { path: "/product-detail/:id", component: ProductDetail },
];

//  Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
