import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Aboutus } from "./About Us";
import { Products } from "./products";



function Parent1(){
    return(<>
    <div>
    <BrowserRouter>
    <Routes>

       <Route path="/"  element={<App/>}/>
       <Route path="/About Us" element={<Aboutus/>}/>
       <Route path="/Products" element = {<Products/>}/>


    </Routes> 
    </BrowserRouter>
    
    </div>
    
    
    
    </>)
}
export {Parent1};