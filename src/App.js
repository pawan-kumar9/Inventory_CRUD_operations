import './App.css';
import { Navbar } from './component/Navbar';
import { AddProduct } from './component/AddProduct';
import { ViewProduct } from './component/ViewProduct';
import UpdateProduct from './component/UpdateProduct';
import { Route, Routes } from "react-router-dom";
import About from './component/About';
import Footer from './component/Footer';
import Cart from './component/Cart';
import Login from './component/Login';

function App() {
  // let isLoggedIn = false;
  return (
    <>
      <Navbar isLoggedIn={false}/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/viewProduct" element={<ViewProduct />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Login/> */}
      <Footer/>
    </>
  );
}

export default App;
