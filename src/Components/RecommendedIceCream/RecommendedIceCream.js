import React from "react";
import "./RecommendedIceCream.css";

const RecommendedIceCream = (props) => {
  const { recommendation } = props;
  const { name, image, price } = recommendation;
  return (
    <div className="card mb-3 recommended-item">
      <div className="card-header bg-transparent border-0 ">
        Our Recommendation for you
      </div>
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Dear Customer, we are recommending you to take {name} ice cream. It is
          one of the best in our collection.
        </p>
      </div>
      <div className="card-footer bg-transparent border-success">
        <div className="d-flex justify-content-between">
          <h6>Price</h6>
          <h6>${price}</h6>
        </div>
      </div>
    </div>
  );
};

export default RecommendedIceCream;
