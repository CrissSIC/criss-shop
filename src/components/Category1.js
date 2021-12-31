import React from "react";
import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { BiCartAlt } from "react-icons/bi";

import "../Categories.css";

function Category1() {
  useEffect(() => {
    fetchProducts();
  }, []);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");

    const products = await data.json();
    console.log(products);
    setProducts(products);
  };

  return (
    <div className="page-wrapper">
      <div className="filter-order-container">
        <button className="filter-btn">Filter</button>
        <button className="order-btn">Order</button>
      </div>
      <div className="main-wrapper">
        <div className="menu-container">This is where you will set filters</div>
        <div className="page-container">
          {products.map((product) => (
            <div className="card-wrapper">
              <div className="card-item" key={product.id + "card"}>
                <img
                  alt={product.id}
                  key={product.id + "image"}
                  src={product.image}
                  className="product-image"
                ></img>
                <div className="product-info">
                  <a
                    className="product-title"
                    key={product.id + "title"}
                    href="/"
                  >
                    {product.title}
                  </a>
                  <StarRating key={product.id + "star-rating"} />
                </div>
                <div className="price-cart">
                  <div className="product-price">
                    <p className="product-price-value">{product.price}</p>
                    <span className="product-currency">€</span>
                  </div>
                  <button className="add-to-cart">
                    <BiCartAlt size={25} className="cart-logo" />
                    <span className="cart-message">Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category1;
