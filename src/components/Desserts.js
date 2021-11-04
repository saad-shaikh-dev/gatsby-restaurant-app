import React from 'react'
import { dessertData } from "../data"

const Desserts = () => {
    const data = dessertData

    return (
        <div className="products dark-background" id="desserts">
            <h2 className="section-title">Featured Desserts</h2>
            <br />
            <div className="product-list">
                {data.map((product, index) => {
                    return (
                        <div className="product" key={index}>
                            <img className="product-image" src={product.image} alt={product.name} />
                            <h3 className="product-name two-lines">{product.name}</h3>
                            <p className="three-lines italic">{product.description}</p>
                            <h4 className="product-price">{product.price}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Desserts
