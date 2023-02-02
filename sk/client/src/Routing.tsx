import { Routes,Route } from "react-router"
import About from "./components/About/About"
import Products from "./components/AllProducts/Products"
import Product from "./components/Product/Product"
import Home from "./components/Home/Home"
import Checkout from "./components/checkout/checkout"

const Routing = () => {
  return (
    <Routes >
      <Route  path="/"  element={<Home/>}/>
      <Route  path="/home"  element={<Home/>}/>
      <Route  path="/about"  element={<About/>}/>
      <Route  path="/products"  element={<Products/>}/>
      <Route  path="/products/:id"  element={<Product/>}/>
      <Route  path="/checkout"  element={<Checkout/>}/>
      <Route path="*" element={<h1>404 Page not found </h1>}/>
    </Routes>
  )
}

export default Routing
