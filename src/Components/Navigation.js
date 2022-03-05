import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import ProductDetail from './ProductDetail'

const Navigation = () => {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="product/:id" element={<ProductDetail/>}/>
        </Routes>
    </>
  )
}

export default Navigation