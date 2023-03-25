import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import About from "./Pages/About";
import Maps from "./Pages/Maps";
import Layout from "./Pages/Layout";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Layout }  path="/" exact />
           <Route component = { Maps }  path="/maps" />
           <Route component = { About }  path="/about" />
           
       </BrowserRouter>
   )
}


export default Routes;