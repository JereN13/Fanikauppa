import React from "react";

const Cart = ({ cart, onClearCart }) => {
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    return (
        <div className="cart">
            <h2>Ostoskori</h2>
            {cart.length > 0 ? (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.product.name} - {item.quantity} kpl ({item.product.price} €/kpl)
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Ostoskorisi on tyhjä.</p>
            )}
            {cart.length > 0 && (
                <>
                    <p>Kokonaishinta: {totalPrice.toFixed(2)} €</p>
                    <button onClick={onClearCart}>Tyhjennä ostoskori</button>
                </>
            )}
        </div>
    );
};

export default Cart;
