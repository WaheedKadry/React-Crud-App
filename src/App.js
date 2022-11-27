import React from "react";
import Navbar from "./components/Navbar"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import AddProduct from "./pages/AddProduct"
import EditProduct from "./pages/EditProduct"
import ViewProduct from "./pages/ViewProduct"
import { Routes, Route, Outlet } from "react-router-dom"
function App() {
  return (
    <div className="App">
   <Navbar/>
   <div className=""></div>
   <div className="row">
   <div className="col-2 sidebar">
   <Sidebar/>
   </div>
   <div className="col-10"> 
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="products" element={
    <><Outlet /></>
   } >
   <Route path="" element={<Products/>} />
   <Route path="add" element={<AddProduct/>} />
   <Route path="edit/:Id" element={<EditProduct/>} />
   <Route path=":productId" element={<ViewProduct/>} />
   </Route>
  </Routes>
   </div>
 
   </div>
    </div>
  );
}

export default App;
/*
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="products" element={<Products/>} />
   <Route path="products/add" element={<AddProduct/>} />
   <Route path="products/edit/:Id" element={<EditProduct/>} />
   <Route path="products/:productId" element={<ViewProduct/>} />
  </Routes>
 */