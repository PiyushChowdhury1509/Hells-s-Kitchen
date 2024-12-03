import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter,Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/loginPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import FoodCard from "./components/foodCard";
import Cart from "./components/cart";
import { Provider } from "react-redux";
import Store from "./utils/store";

const AppLayout=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/home",
        element:<AppLayout/>,
        children:[
            {
                path:"",
                element:<Body/>
            },
            {
                path:"aboutus",
                element:<AboutUs/>
            },
            {
                path:"contactus",
                element:<ContactUs/>
            },
            {
                path:":name",
                element:<FoodCard/>
            },
            {
                path:"cart",
                element:<Cart/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={Store}>
        <RouterProvider router={AppRouter}/>
    </Provider>
);
