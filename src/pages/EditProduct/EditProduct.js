import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
const EditProduct = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [price, setPrice] = useState(0)
    const [productValue, setProductValue] = useState({})
    let { idEdit } = useParams()

    let valueInputs = () => {
        axios.get(`https://apitest-c64g.onrender.com/products/${idEdit}`, {
            title: title,
            description: description,
            image: imgUrl,
            price: price
        }).then(data => setProductValue(data.data))
    }
    useEffect(() => {
        valueInputs()
    }, [])
    console.log(productValue);
    // let re = useRef()
    let navigateTo = useNavigate()
    let submitForm = (e) => {
        e.preventDefault()
        console.log(title);
        console.log(description);
        console.log(imgUrl);
        console.log(price);
        fetch(`https://apitest-c64g.onrender.com/products//${idEdit}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                image: imgUrl,
                price: price
            })
        }).then(res => res.json()).then(data => navigateTo("/products"))
        //   axios.put(`https://apitest-c64g.onrender.com/products//${idEdit}`, {
        //     title: title,
        //         description: description,
        //         image: imgUrl,
        //         price: price
        //     }).then(data =>  navigateTo("/products"))
        //         // }).then(data => console.log(data.data))
        //   // re.current.click()

        // }

        // console.log(idEdit);
    }


        return (
            <>
                <form onSubmit={(e) => submitForm(e)}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='title Product' contentEditable="true" className="form-control p-2" id="exampleInputEmail1" aria-describedby="Product Title" />
                        <div id="emailHelp" className="form-text">Old Name For Your Product if you want copy Is</div>
                        <div id="emailHelp" className="form-text">{productValue.title}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                        <input type="text" onChange={(e) => setDescription(e.target.value)} className="form-control p-2" id="exampleInputEmail1" aria-describedby="Product Description" />
                        <div id="emailHelp" className="form-text">Old Description For Your Product if you want copy Is</div>
                        <div id="emailHelp" className="form-text">{productValue.description}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Link Image (URL)</label>
                        <input type="text" onChange={(e) => setImgUrl(e.target.value)} className="form-control p-2" id="exampleInputEmail1" aria-describedby="Product Link Image (Url)" />
                        <div id="emailHelp" className="form-text">Link Image Old Link Image For Your Product if you want copy Is</div>
                        <div id="emailHelp" className="form-text">{productValue.image}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                        <input type="number" onChange={(e) => setPrice(e.target.value)} className="form-control p-2" id="exampleInputEmail1" aria-describedby="Product Price" />
                        <div id="emailHelp" className="form-text">Link Image Old Price For Your Product if you want copy Is</div>
                        <div id="emailHelp" className="form-text">{productValue.price}</div>
                    </div>
                    <button type='submit' className="btn btn-primary p-2">Add Product  </button>
                    {/* <Link ref={re} to='/products' ></Link>*/}

                </form>
            </>
        )
    }

    export default EditProduct
