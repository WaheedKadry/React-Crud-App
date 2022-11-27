import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditProduct(props) {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState();
  let [description, setDescription] = useState("");
  let [categories, setCategories] = useState("");
  const { Id } = useParams();
  let [AllData, setAllData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEditProduct(Id);
  }, []);
  //   console.log(Id);

  let getEditProduct = (Id) => {
    console.log(`this is Product Edit Id => ${Id}`);
    fetch(`http://localhost:3000/products/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        data.title && setTitle(data.title);
        data.price && setPrice(data.price);
        data.description && setDescription(data.description);
        data.category && setCategories(data.category);
      });
   
  };
  let submitFormOFF = (e) => {
    e.preventDefault();
    EditProd();
   
  };
let EditTitle = e => setTitle(e.target.value)


let EditDescription = e => setDescription(e.target.value)
let EditPrice = e => setPrice(e.target.value)
  

  let EditProd = () => {
     fetch(`http://localhost:3000/products/${Id}`, {
      method: "put",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        title: title,
        price: price,
        description: description,
        category: categories,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/products");
      });
//           axios.put(`http://localhost:3000/products/${Id}`, {
//             title: title,
//             price: price,
//             description: description,
//             category: categories,
//     }).then((data) => {
//               navigate("/products")
//             });
  }
  return (
    <>
      <h1 className="text-center">Edit Product {Id}</h1>
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
            defaultValue={title}
            onChange={EditTitle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductDescription"
            placeholder="Product Description"
            aria-describedby="Product Description"
            defaultValue={description}
            onChange={EditDescription}

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
            defaultValue={price}
            onChange={EditPrice}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Edit Product
        </button>
      </form>
    </>
  );
}
