import React, { useState } from "react";

const OrderConfirmation = ({ cart, onConfirmOrder }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    const handleConfirm = () => {
        if (name && email && phone && address && postalCode && city) {
            const orderDetails = {
                name,
                email,
                phone,
                address,
                postalCode,
                city,
                cart,
                totalPrice,
            };
            onConfirmOrder(orderDetails); 
        } else {
            alert("Täytä kaikki kentät!");
        }
    };

    return (
        <div className="order-confirmation">
            <h2>Vahvista tilaus</h2>
            <div>
                <input
                    type="text"
                    placeholder="Nimi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Sähköpostiosoite"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Puhelinnumero"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Katuosoite"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Postinumero"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Postitoimipaikka"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <button onClick={handleConfirm}>Vahvista tilaus</button>
        </div>
    );
};

export default OrderConfirmation;
