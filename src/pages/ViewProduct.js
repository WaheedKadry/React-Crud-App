import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewProduct.css"

export default function ViewProduct(props) {
  const { productId } = useParams();
  let [p, setP] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setP(data));
  }, []);
//   <p className="price">Rating: Rate{p.rating.rate}-Count{p.rating.count}</p>
//
  return (
      <>
      
      {p &&  <div className="card">
     <h1 className="title text-center m-5">Title: {p.title}</h1>
     {p.image ? <img src={p.image}/> : <h1 className="spim-ani text-center text-warning bg-dark p-2  m-auto">Loading</h1>}
     
     <p className="desc">Description: {p.description}</p>
     <p className="desc">Category: {p.category}</p>
     <p className="price">Price: {p.price}</p>

     </div>}
     {
  console.log(p)

  }
    </>
  );
}
