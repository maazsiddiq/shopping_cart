import Home from "../pages/home/index.jsx";
import Products from "../pages/product/index.jsx";
import Details from "../pages/details/index.jsx";
import Cart from "../pages/cart/index.jsx";
import SignIn from "../pages/signin/index.jsx";
import SignUp from "../pages/signup/index.jsx";

export const routes = [
	{ path: "/", component: Home },
	{ path: "/products", component: Products },
	{ path: "/Details/:id", component: Details },
	{ path: "/cart", component: Cart },
	{ path: "/signin", component: SignIn },
	{ path: "/signup", component: SignUp },
];
