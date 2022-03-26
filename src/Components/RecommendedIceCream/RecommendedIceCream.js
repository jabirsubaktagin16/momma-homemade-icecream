import React from "react";
import "./RecommendedIceCream.css";

const RecommendedIceCream = (props) => {
  const { recommendation } = props;
  const { name, image, price } = recommendation;
  return (
    <div className="card recommended-item border-0 rounded-0 ">
      <div className="card-body">
        <h6>Our Recommended Item for you</h6>
      </div>

      <img src={image} className="img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Dear Customer, we are recommending you to take {name} ice cream. It is
          one of the best in our collection.
        </p>
        <div className="d-flex justify-content-between">
          <h6>Price</h6>
          <h6>$ {price}</h6>
        </div>
      </div>
    </div>
  );
};

export default RecommendedIceCream;
