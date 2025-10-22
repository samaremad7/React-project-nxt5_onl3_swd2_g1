import { createBrowserRouter } from "react-router";
//layouts
import MainLayout from "../Layout/MainLayout/MainLayout";
//pages
import Cart from '../pages/Cart/cart';
import Category from '../pages/Category/category';
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import NotFound from "../pages/NotFound/notfound";
import Home from '../pages/Home/home';
import AuthLayout from "../Layout/AuthLayout/AuthLayout";

const routes = createBrowserRouter([
    {
        path: '/',

        children: [
            {
                Component: MainLayout,
                children: [
                    {
                        index: true,
                        Component: Home,
                    },
                    {
                        path: "cart",
                        Component: Cart,
                    },
                    {
                        path: "category",
                        Component: Category,
                    },
                    {
                        path: "productDetails/:id",
                        Component: ProductDetails,
                    },

                ]

            },
            {
                Component: AuthLayout,
                children: [
                    {
                        path: "login",
                        Component: Login,
                    },
                    {
                        path: "register",
                        Component: Register,
                    }, {
                        path: "*",
                        Component: NotFound,
                    },
                ]
            }
            ,

        ]

    }

])

export default routes 