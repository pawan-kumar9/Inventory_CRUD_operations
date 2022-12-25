import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const isLoggedIn= localStorage.getItem("isLoggedIn");
  const isAdmin = localStorage.getItem("isAdmin");
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Electronic City</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {(isLoggedIn==="true")
          ? <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <Link to={'/'} class="nav-link active" aria-current="page" href="#">About</Link>
              </li> */}
              {
                isAdmin == "true" && <li class="nav-item">
                  <Link to={'/addProduct'} class="nav-link active" aria-current="page" href="#">Add Product</Link>
                </li>
              }
              <li class="nav-item">
                <Link to={'/viewProduct'} class="nav-link active" aria-current="page" href="#">Products</Link>
              </li>
              {
                isAdmin == "false" && <li class="nav-item">
                  <Link to={'/cart'} class="nav-link active" aria-current="page" href="#">Cart</Link>
                </li>
              }
              <li class="nav-item">
                <Link onClick={() => {
                  localStorage.clear("isLoggedIn");
                  localStorage.clear("isAdmin");
                  window.location.href='./'
                }} to={'/'} class="nav-link active" aria-current="page" href="#">Logout</Link>
              </li>
            </ul>
          </div>
        :""
        }
      </div>
    </nav></div>
  )
}
