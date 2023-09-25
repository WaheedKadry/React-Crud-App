import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="">
        <li>
          <Link to="/products" className="">
            Get All Products
          </Link>
        </li>
        <li>
          <Link to="/categories" className="">
            Get All Categories
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
