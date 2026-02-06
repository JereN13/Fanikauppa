import { useState } from "react";
import "./App.css";
import productData from "./components/products-data";
import { Products } from "./components/Products";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
    const [products] = useState(productData);
    const [cart, setCart] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);

    const handleAddToCart = (product, quantity) => {
        const existingProductIndex = cart.findIndex(
            (item) => item.product.id === product.id
        );
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, { product, quantity }]);
        }
    };

    const handleClearCart = () => {
        setCart([]);
    };

    const handleConfirmOrder = (orderDetails) => {
        setOrderDetails(orderDetails);
        setCart([]);
    };

    return (
        <div id="root">
            <h1>Fanikauppa</h1>
            <Products products={products} onAddToCart={handleAddToCart} />
            <Cart cart={cart} onClearCart={handleClearCart} />
            
            {orderDetails ? (
                <div className="order-summary">
                    <h2>Tilauksen yhteenveto</h2>
                    <p>Nimi: {orderDetails.name}</p>
                    <p>Sähköposti: {orderDetails.email}</p>
                    <p>Puhelin: {orderDetails.phone}</p>
                    <p>Osoite: {orderDetails.address}</p>
                    <p>Postinumero: {orderDetails.postalCode}</p>
                    <p>Postitoimipaikka: {orderDetails.city}</p>

                    <h3>Ostetut tuotteet:</h3>
                    <ul>
                        {orderDetails.cart.map((item, index) => (
                            <li key={index}>
                                {item.product.name} - {item.quantity} kpl
                            </li>
                        ))}
                    </ul>

                    <h3>Yhteensä: {orderDetails.totalPrice.toFixed(2)} €</h3>
                    <p>Kiitos tilauksestasi!</p>
                </div>
            ) : (
                <OrderConfirmation cart={cart} onConfirmOrder={handleConfirmOrder} />
            )}
        </div>
    );
}

export default App;
