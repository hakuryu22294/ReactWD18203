import React from 'react'
import IProduct from '../types/product'

type Props = {
    product: IProduct
}

const ProductCard:React.FC<Props> =  ({product}) => {
  return (
    <div className="col-12 col-md-4 mb-4">
        <div className="card h-100">
            <a href="shop-single.html">
                <img src={product.image} className="card-img-top" alt="..."/>
            </a>
            <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">{product.price}</li>
                </ul>
                <a href="shop-single.html" className="h2 text-decoration-none text-dark">{product.name}</a>
                <p className="card-text">
                    {product.description}
                </p>
                <p className="text-muted">Reviews (24)</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard