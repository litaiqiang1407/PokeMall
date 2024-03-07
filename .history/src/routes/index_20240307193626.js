//  Layouts
import { AuthenticationLayout } from "~/components/Layouts";
import { UserDefaultLayout } from "~/components/Layouts";

// Pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import AllProducts from "~/pages/AllProducts";
import ProductDetail from "~/pages/ProductDetail";
import Profile from "~/pages/Profile";
import MyAccount from "~/pages/Profile/MyAccount";
import PurchaseOrders from "~/pages/Profile/PurchaseOrders";
import ShoppingCart from "~/pages/ShoppingCart";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: UserDefaultLayout },
  { path: "/login", component: Login, layout: AuthenticationLayout },
  { path: "/signup", component: Signup, layout: AuthenticationLayout },
  { path: "/profile", component: Profile, layout: UserDefaultLayout },
  { path: "/all-products", component: AllProducts, layout: UserDefaultLayout },
  {
    path: "/shopping-cart",
    component: ShoppingCart,
    layout: UserDefaultLayout,
    miniLayout: Profile,
  },
  {
    path: "/profile/my-account",
    component: MyAccount,
    layout: UserDefaultLayout,
    miniLayout: Profile,
  },
  {
    path: "/profile/purchase-orders",
    component: PurchaseOrders,
    layout: UserDefaultLayout,
    miniLayout: Profile,
  },
  {
    path: "/product-detail/:id",
    component: ProductDetail,
    layout: UserDefaultLayout,
  },
];

//  Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
