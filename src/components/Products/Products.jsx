import React, { useState } from 'react';
import "./Products.css"
import drinkImage from"../../image/cook2.jpeg"
import dessertImage from"../../image/cook1.jpeg"
import burgerImage from "../../image/cook3.jpeg";
import saladImage from "../../image/pastel2.jpeg";

const ProductCard = ({ image, buttonText, onClick }) => {
    const handleClick = () => {
        onClick();
    }
    return (
        <div className="productCard">
            <div className="productImg" style={{backgroundImage: `url(${image})`}}>
                <button className="productButton" onClick={handleClick}>{buttonText}</button>
            </div>
        </div>
    );
};

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    }

    const handleProductClose = () => {
        setSelectedProduct(null);
    }

    return (
        <>

            <article className="productContent">
                <div className="productSection">
                    <div>
                        <h2 className="productsTitle">Products</h2>
                        <div className="productLine"></div>
                    </div>
                    {selectedProduct && (
                        <div className="productDetails">
                            <div className="productDetailsHeader">
                                <h2>{selectedProduct.name}</h2>
                                <button onClick={handleProductClose}>close</button>
                            </div>
                            <p>{selectedProduct.description}</p>
                            <h3>Price: ${selectedProduct.price}</h3>
                        </div>
                    )}
                    <div className="shop">
                        <ProductCard
                            image={drinkImage}
                            buttonText="Postres"
                            onClick={() => handleProductClick({
                                name: "Postres",
                                description: "A delicious selection of desserts, including cakes, pies, and pastries.",
                                price: 12.99
                            })}
                        />
                        <ProductCard
                            image={dessertImage}
                            buttonText="Cakes"
                            onClick={() => handleProductClick({
                                name: "Cakes",
                                description: "A delicious selection of desserts, including cakes, pies, and pastries.",
                                price: 9.99
                            })}
                        />
                        <ProductCard
                            image={burgerImage}
                            buttonText="cookies"
                            onClick={() => handleProductClick({
                                name: "cookies",
                                description: "A delicious selection of desserts, including cakes, pies, and pastries.",
                                price: 14.99
                            })}
                        />
                        <ProductCard
                            image={saladImage}
                            buttonText="Cakes"
                            onClick={() => handleProductClick({
                                name: "Cakes",
                                description: "A delicious selection of desserts, including cakes, pies, and pastries.",
                                price: 10.99
                            })}
                        />
                    </div>
                </div>
            </article>
        </>
    );
};

export default Products;
