//  Layouts
import {
  AuthenticationLayout,
  UserDefaultLayout,
  AdminLayout,
} from "~/components/Layouts";

// Pages
import {
  Home,
  Login,
  Signup,
  AllProducts,
  Contact,
  ProductDetail,
  Profile,
  MyAccount,
  PurchaseOrders,
  ShoppingCart,
  AdminLogin,
} from "~/pages";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: UserDefaultLayout },
  { path: "/login", component: Login, layout: AuthenticationLayout },
  { path: "/signup", component: Signup, layout: AuthenticationLayout },
  { path: "/profile", component: Profile, layout: UserDefaultLayout },
  { path: "/all-products", component: AllProducts, layout: UserDefaultLayout },
  { path: "/contact", component: Contact, layout: UserDefaultLayout },
  {
    path: "/shopping-cart",
    component: ShoppingCart,
    layout: UserDefaultLayout,
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
  {
    path: "/admin-login",
    component: AdminLogin,
    layout: AuthenticationLayout,
  },
  {path: "/admin/dashboard", component: Dashboard, layout: AdminLayout, miniLayout: AdminDashboard},
];

//  Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
