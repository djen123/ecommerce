import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import {AppNavbar,Home,Products,ProductDetails,Cart,CategoryPage,Account} from './components'


function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));

    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (

  
    <>
    <AppNavbar cart ={cart}/>
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route path="/products" element={<Products products={products} cart={cart} setCart={setCart} />} />
        <Route path="/product-details/:id" element={<ProductDetails products={products} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart products={products} cart={cart} setCart={setCart} />} />
        <Route path="/category/:category" element={<CategoryPage cart={cart} setCart={setCart} />} />
        <Route path ="/account" element = {<Account/>} />
      </Routes>
    </>
  );
}

export default App;


