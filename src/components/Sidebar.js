import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link className="navbar-brand" to="products">
            Get All Products
          </Link>
        </li>
        <li>
          <Link className="navbar-brand" to="products">
            Get All Categories
          </Link>
        </li>
      </ul>
    </>
  );
}
