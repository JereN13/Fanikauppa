const ProductInfo = ({ name, price, amount }) => { 
    return (
        <div className="product-info">
            <h1 className="product-name">{name}</h1>
            <p className="product-price">Price: {price}</p>
            <p className="product-amount">Amount: {amount}</p>
        </div>
    );
}

export default ProductInfo;
