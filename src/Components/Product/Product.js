import React from "react";
import "./Product.css";

const Product = (props) => {
  const { product } = props;
  const { name, image, details, price } = product;
  return (
    <div className="col">
      <div className="card h-100 border-0 shadow">
        <img src={image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details.slice(0, 250)}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
