import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { item, deleteSingleItem } = props;
  const { id, name, image } = item;
  return (
    <div className="row d-flex align-items-center shadow p-2 cart-items">
      <div className="col-2">
        <img src={image} alt="" className="w-100 rounded-circle" />
      </div>
      <div className="col-8">
        <h6>{name}</h6>
      </div>
      <div className="col-2 text-end">
        <FontAwesomeIcon
          onClick={() => deleteSingleItem(id)}
          icon={faTrashCan}
          className="delete-item"
        />
      </div>
    </div>
  );
};

export default Cart;
