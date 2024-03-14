import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import IProduct from '../types/product'





const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() =>{
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  },[])
  return (
    <section className="bg-light">
    <div className="container py-5">
        <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Featured Product</h1>
                <p>
                    Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident.
                </p>
            </div>
        </div>
        <div className="row">
            
                
            {products.map((product:IProduct) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
</section>
   
  )
}

export default Products