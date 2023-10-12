import React from "react";
import {

  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Novice  from "./Novice";
import { University } from "./University";
import { Gamer } from "./Gamer";
import Novicepdetails from "./Novicepdetails";
import Account from "./Account";
import Register from "./Register";
import Cart from "./Cart";
import Shipping from "./Shipping";
import Order from "./Order";


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path = "/" element = {<Home />} />
   <Route path = "/novice" element = {<Novice />} />
   <Route path = "/university" element = {<University />} />
   <Route path = "/gamer" element = {<Gamer />} />
   <Route path ="/novice/:id" element = {<Novicepdetails />} />
   <Route path ="/account" element = {<Account />} />
   <Route path ="/register" element = {<Register />} />
   <Route path ="/cart" element = {<Cart />} />
   <Route path ="/shipping" element = {<Shipping /> } />
   <Route path="/order" element = {<Order />} />
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
