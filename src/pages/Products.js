import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import Swal from "sweetalert2";

export default function Products(props) {
  let [prod, setProd] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProd(data);
        getAllProducts();
      });
  };
  const deleteProduct = (prod) => {
    Swal.fire({
      title: `Are You Sure To Delete ${prod.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      console.log(data);
    if(data.isConfirmed) {
           fetch(`http://localhost:3000/products/${prod.id}`, {
        //Methds for fetch
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    });
   
    console.log("Deleted" + prod.id);
    //   fetch(`http://localhost:3000/products/${prod.id}`, {
    //     //Methds for fetch
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
  };
  // console.log(prod);
  return (
    <>
      <Link to="/products/add" className="btn btn-success">
        Add New Product
      </Link>
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>Description</th>
            <th>category</th>
            
            <th>price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {prod.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
               <td>{e.description.slice(0, 50)}...</td>
               <td>{e.category}</td>
                
                <td>{e.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(e)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${e.id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <Link to={`/products/edit/${e.id}`} className="btn btn-primary btn-sm">
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

