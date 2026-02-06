import React, { useState } from "react";

const ProductObject = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

    return (
        <div className="Tu">
            <h3>{product.name}</h3>
            <p>Hinta: {product.price} €</p>
            <p>Varastossa: {product.amount}</p>
            {product.image && <img src={product.image} alt={product.name} style={{ width: "100px" }} />}
            <div className="quantity-controls">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
            <button 
                onClick={() => onAddToCart(product, quantity)} 
                disabled={quantity > product.amount}
            >
                Lisää ostoskoriin
            </button>
        </div>
    );
};

const Products = ({ products, onAddToCart }) => {
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductObject
                    key={product.id || product.name}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};

export { ProductObject, Products };
