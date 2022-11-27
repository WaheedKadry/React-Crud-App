import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddProduct(props) {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);
  let [description, setDescription] = useState("");
  let [categories, setCategories] = useState("");
  let [prod, setProd] = useState([]);
  const navigate = useNavigate();
  const getAllProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProd(data);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  let submitFormOFF = (e) => {
    e.preventDefault();
    // console.log({ title, price });
    // fetch(`http://localhost:3000/products`, {
    //   //Methds for fetch
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     price: price,
    //     description: description,
    //     category: categories,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     navigate("/products");
    //   });
    axios.post("http://localhost:3000/products", {
      title: title,
      price: price,
      description: description,
      category: categories,
    }).then((data) => {
              navigate("/products")
            });
  };
  let ChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  let ChangePrice = (e) => {
    setPrice(e.target.value);
  };
  let ChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  // let ChangeCategories = (e) => {
  //   setCategories(e.target.value);
  //   // console.log(price);
  // };

  return (
    <>
      <h1 className="text-center">Add Product</h1>
      <form onSubmit={(e) => submitFormOFF(e)}>
        <div className="mb-3">
          <label htmlFor="ProductTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductTitle"
            placeholder="Product Title"
            aria-describedby="Product Title"
            onChange={ChangeTitle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductTitle" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductTitle"
            placeholder="Product Description"
            aria-describedby="Product Description"
            onChange={ChangeDescription}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="ProductPrice"
            placeholder="Product Price"
            aria-describedby="Product Price"
            onChange={ChangePrice}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
