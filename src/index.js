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
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRouter}/>);
