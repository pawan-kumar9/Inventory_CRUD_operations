import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Cart = () => {
  const [products,setProducts] = useState([]);
  const [bill, setBill] = useState(0);
  const [item, setItem] = useState(0);

  useEffect(()=>{
    async function getAllCart(){
      try{
        const products = await axios.get("http://localhost:3004/cart")
        setProducts(products.data)
        setItem(products.data.length)
        let amt =0
        products.data.map((product) =>{
          amt += parseInt(product.price)
        })
        setBill(amt)
      } catch (error) {
        console.log("Something is wrong");
      }
    }
    getAllCart();
  },[])

  const handleDelete = async id => {
    await axios.delete(`http://localhost:3004/cart/${id}`);
    var newproduct = products.filter((item) => {
      return item.id !== id;
    })
    setProducts(newproduct);
    console.log(newproduct.length)
    setItem(newproduct.length)
    let amt = 0
    newproduct.map((product) => {
      amt += parseInt(product.price)
    })
    setBill(amt)
  }

  return (
    <div className='mt-5'>
      <div className='col-md-6 offset-md-3 table-responsive-sm'>
        <h1 className='text-center mb-3 bg-primary text-white'>
            My Cart
        </h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              {/* <th class="text-center" scope="col">Product ID</th> */}
              <th class="text-center" scope="col">Product Name</th>
              <th class="text-center" scope="col">Brand</th>
              <th class="text-center" scope="col">Price</th>
              <th class="text-center" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => {
                return (
                  <tr>
                    {/* <th scope="row" class="text-center">{product.id}</th> */}
                    <td class="text-center">{product.prodName}</td>
                    <td class="text-center">{product.Brand}</td>
                    <td class="text-center">{product.price}</td>
                    <td class="text-center">
                      <button type="button" class="btn btn-danger" onClick={() => handleDelete(product.id)}>
                        <i class="bi bi-trash3"></i>
                      </button>
                    </td>
                  </tr>
                )
              }
              )
            }
          </tbody>
        </table>
        <div>
          <p className='text-end'>Total products = {item}</p>
          <p className='text-end'>Total Amount = {bill}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart