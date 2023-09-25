import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./productDetails.css"
const ProductDetails = () => {
    let [product, setProduct] = useState([])
    let { productid } = useParams()

    useEffect(() => {
        fetch(`https://apitest-c64g.onrender.com/products/${productid}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product);
    return (
        <div className='productDetails'>
            {!product ? <h1>Loading...</h1> : (
                <div className="card" >
                <img src={product.image} className="card-img-top" alt={`${product.title} Image Is Not Found`}/>
                <div className="card-body">
                  <h5 className="card-title">Product Name: {product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: {product.price}</p>
                 
                </div>
              </div>
            ) }
        </div>
    )
}

export default ProductDetails
