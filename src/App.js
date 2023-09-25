import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import AddProducts from "./components/AddProducts/AddProducts";
import ErrorPage from "./components/errorPage/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import EditProduct from "./pages/EditProduct/EditProduct";
let Root = () => {
  return (
    <>
      <Navbar />
      <div className="container">
<div className="row">

<div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 sidebar">
<Sidebar/>
</div>
<div className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
<Outlet />
</div>
</div>

</div>
  
    </>
  );
};
let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/add",
        element: <AddProducts />,
      },
      {
        path: "/products/:productid",
        element: <ProductDetails />,
      },
      {
        path: "/products/edit/:idEdit",
        element: <EditProduct />,
      }
    ],
  }
]);

































function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


