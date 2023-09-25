import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import "./products.css"
const Products = () => {

  let [prods, setProds] = useState([])
  let getProducts = () => {
    fetch("https://apitest-c64g.onrender.com/products")
      .then(res => res.json())
      .then(data => setProds(data))
  }
  useEffect(() => {
    getProducts()
  }, [])
  // console.log(prods);
  let DeleteProduct = (product) => {
    Swal.fire({
      title: `Are You Sure To Delete ${product.title}`,
      showCancelButton: true
    }).then(data => {
      data.isConfirmed && (
        fetch(`https://apitest-c64g.onrender.com/products/${product.id}`, {
          method: "DELETE"
        }).then(res => res.json()).then(data => getProducts())
      )
    })
  }
//   let sliceDescriptionText = (text) => {
// let t = text.slice(0, 31)
// return t
//   }
  // 
//  console.log(prods);
//  prods.length > 0 && prods.map((e) =>  console.log(e.title))
  return (
    <>
      <h1> Products</h1>
      <Link to="add" className='btn btn-success ms-lg-3 ms-md-2 py-1 px-2 mt-3'>Add New Product</Link>

      <table className="table table-striped p-3 m-3 mt-5">
        <thead>
          <tr>
            <th className="p-1">Id</th>
            <th className="p-1">Title</th>
            <th className="p-1">Description</th>
            <th className="p-1">Price</th>
            <th className="p-1">Operations</th>
          </tr>
        </thead> 
            <tbody>
{
  prods.length > 0 && prods.map((e) =>  {
    return (
      <tr key={e.id}>
      <td className="p-2 id">{e.id}</td>                
      <td className="p-2 title">{e.title}</td>
      <td className="p-2 description">See Description After Click View Button...</td>
      <td className="p-2 price">{e.price}</td>
      <td className="p-2 btns">
        <button className='btn btn-danger ms-lg-3 ms-md-2 py-1 px-2' onClick={() => DeleteProduct(e)}>Delete</button>
        <Link to={`/products/${e.id}`} className='btn btn-info ms-lg-3 ms-md-2 py-1 px-2'>View</Link>
        <Link to={`/products/edit/${e.id}`} className='btn btn-primary ms-lg-3 ms-md-2 py-1 px-2'>Edit</Link>
      </td>

      </tr>

    )
  })
}
   


        </tbody>
      </table>


    </>
  )
}

export default Products
// <td className="p-2 description">{e.description}...</td>

/*
{prods.map((e) => {
  return (
    <tr key={e.id}>
      <td className="p-2 id">{e.id}</td>
      <td className="p-2 title">{e.title}</td>
      <td className="p-2 description">{e.description.slice(0, 30)}...</td>
      <td className="p-2 price">{e.price}</td>
      <td className="p-2 btns">
        <button className='btn btn-danger ms-lg-3 ms-md-2 py-1 px-2' onClick={() => DeleteProduct(e)}>Delete</button>
        <Link to={`/products/${e.id}`} className='btn btn-info ms-lg-3 ms-md-2 py-1 px-2'>View</Link>
        <button className='btn btn-primary ms-lg-3 ms-md-2 py-1 px-2'>Edit</button>
      </td>
    </tr>
  )
})}
*/