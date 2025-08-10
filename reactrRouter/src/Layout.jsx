import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";  // yah hook yani outlet nesting ke liye use kiya jata hai

function Layout(){
    return(
        <>
        <Header/> 
        <Outlet/> 
        <Footer/>
        </>
    )
}

export default Layout