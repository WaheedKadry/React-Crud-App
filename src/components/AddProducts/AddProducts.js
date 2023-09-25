import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  // let re = useRef()
  let navigateTo = useNavigate();
  let submitForm = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    console.log(imgUrl);
    console.log(price);
    // fetch("http://localhost:3000/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     description: description,
    //     image: imgUrl,
    //     price: price
    //   })
    // }).then(res => res.json()).then(data => console.log(data))
    axios
      .post("https://apitest-c64g.onrender.com/products", {
        title: title,
        description: description,
        image: imgUrl,
        price: price,
      })
      .then((data) => navigateTo("/products"));
    // }).then(data => console.log(data.data))
    // re.current.click()
  };

  // console.log(re.current);
  return (
    <>
      <h1>AddProducts</h1>

      <form onSubmit={(e) => submitForm(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control p-2"
            id="exampleInputEmail1"
            aria-describedby="Product Title"
          />
          <div id="emailHelp" className="form-text">
            Write Name For Your Product
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Description
          </label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            className="form-control p-2"
            id="exampleInputEmail1"
            aria-describedby="Product Description"
          />
          <div id="emailHelp" className="form-text">
            Write Description For Your Product
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Link Image (URL)
          </label>
          <input
            type="text"
            onChange={(e) => setImgUrl(e.target.value)}
            className="form-control p-2"
            id="exampleInputEmail1"
            aria-describedby="Product Link Image (Url)"
          />
          <div id="emailHelp" className="form-text">
            Write Link Image (URL) For Your Product
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Price
          </label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            className="form-control p-2"
            id="exampleInputEmail1"
            aria-describedby="Product Price"
          />
          <div id="emailHelp" className="form-text">
            Write Price ( Number ) For Your Product
          </div>
        </div>
        <button type="submit" className="btn btn-primary p-2">
          Add Product{" "}
        </button>
        {/* <Link ref={re} to='/products' ></Link>*/}
      </form>
    </>
  );
};

export default AddProducts;
// <Link to='/products' type="submit" className="btn btn-primary">Add Product</Link>
// <button type='submit'>Add Product</button>
//
