import React, {useState,useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { ViewProduct } from './ViewProduct';
import axios from 'axios';

const UpdateProduct = () => {

    const {id} = useParams();
    // console.log(id);
    // const history = useHistory();
    const [product, setProduct] = useState({
        prodName: {},
        price: "",
        Brand: ""
    });

    const [status, setStatus] = useState();

    useEffect(() => {
        async function getAllProduct() {
            try {
                const products = await axios.get(`http://localhost:3004/products/${id}`)
                // console.log(products.data);
                setProduct(products.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getAllProduct();
    }, [id])

    function onTextFieldChange(e) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3004/products/${id}`, product)
            // history.push("/")
            setStatus(true);
            alert("Product Updated Successfully");
        } catch (error) {
            console.log("Something is Wrong");
        }
    }
    // function handleClick() {
    //     history.push("/")
    // }

    if (status) {
        return <ViewProduct />
    }

  return (
      <div className='mt-5'>
          <div className='col-md-6 offset-md-3 border rounded p-2'>
              <h1 className='text-center bg-primary text-white'>Update Product</h1>
              <form>
                  <div class="mb-3">
                      <label for="itemName" class="form-label">Product Name</label>
                      <input type="text" class="form-control" name="prodName" id="prodName" value={product.prodName} aria-describedby="emailHelp" onChange={e => onTextFieldChange(e)} />
                  </div>
                  <div class="mb-3">
                      <label for="itemName" class="form-label">Price</label>
                      <input type="text" class="form-control" name='price' id="price" value={product.price} aria-describedby="emailHelp" onChange={e => onTextFieldChange(e)} />
                  </div>
                  <div class="mb-3">
                      <label for="itemName" class="form-label">Brand</label>
                      <input type="text" class="form-control" name='Brand' id="Brand" value={product.Brand} aria-describedby="emailHelp" onChange={e => onTextFieldChange(e)} />
                  </div>
                  <button type="submit" class="btn btn-primary offset-md-5" onClick={e => onFormSubmit(e)}>Update</button>
              </form></div>
      </div>
  )
}

export default UpdateProduct