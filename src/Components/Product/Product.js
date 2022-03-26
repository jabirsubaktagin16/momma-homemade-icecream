import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { product, handleAddToCart } = props;
  const { name, image, price } = product;
  return (
    <div className="col">
      <div className="card h-100 border-0 shadow p-3">
        <img src={image} alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5> <br />
          <h1 className="text-center">$ {price.toFixed(2)}</h1>
        </div>
        <div className="card-footer">
          <div className="text-center">
            <div className="d-grid gap-2 d-md-block">
              <button
                onClick={() => handleAddToCart(product)}
                className="btn-block momma-button"
              >
                Add to Cart{" "}
                <FontAwesomeIcon icon={faShoppingCart} className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
