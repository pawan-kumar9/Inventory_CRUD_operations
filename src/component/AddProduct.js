import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ViewProduct } from './ViewProduct';

export const AddProduct = () => {
    const [product, setProduct] = useState({
        prodName: "",
        price: "",
        Brand: ""
    });

    const [status, setStatus] = useState();

    function onTextFieldChange(e) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3004/products`, product)
            setStatus(true);
            alert("Product Added Successfully")
        } catch (error) {
            console.log("Something is Wrong");
        }
    }
    if (status) {
        return <ViewProduct />
    }

    return (
        <div className='mt-5'>
            <div className='col-md-6 offset-md-3 border rounded p-2'>
                <h1 className='text-center bg-primary text-white'>Add Product</h1>
                <form>
                    <div class="mb-3">
                        <label for="itemName" class="form-label">Product Name</label>
                        <input type="text" class="form-control" name="prodName" id="prodName" aria-describedby="emailHelp" onChange={e => onTextFieldChange(e)} />
                    </div>
                    <div class="mb-3">
                        <label for="itemName" class="form-label">Price</label>
                        <input type="text" class="form-control" name='price' id="price" aria-describedby="emailHelp" onChange={e => onTextFieldChange(e)} />
                    </div>
                    <div class="mb-3">
                        <label for="itemName" class="form-label">Brand</label>
                        <input type="text" class="form-control" name='Brand' id="Brand" aria-describedby="emailHelp" onChange={e => onTextFieldChange(e)} />
                    </div>
                    <button type="submit" class="btn btn-primary offset-md-5" onClick={e => onFormSubmit(e)}>Submit</button>
                </form></div>
        </div>
    )
}
