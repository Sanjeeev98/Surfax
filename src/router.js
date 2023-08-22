import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Aboutus } from "./About Us";


function Parent1(){
    return(<>
    <div>
    <BrowserRouter>
    <Routes>

       <Route path="/"  element={<App/>}/>
       <Route path="/About Us" element={<Aboutus/>}/>
       


    </Routes> 
    </BrowserRouter>
    
    </div>
    
    
    
    </>)
}
export {Parent1};