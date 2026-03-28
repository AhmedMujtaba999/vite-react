import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Outlet } from 'react-router-dom' // wherever u give outlet there u can change the things 
function Layout(){
    return (
        <>
        <Header/>
        <Outlet/> // the elements here can be changed in the website 
        
        <Footer/>
        </>
    )
}

export default Layout