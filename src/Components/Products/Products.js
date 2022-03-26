import {
  faArrowsRotate,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/localStorage";
import Product from "../Product/Product";
import Cart from "./../Cart/Cart";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("icecreams.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <section className="container my-5" id="products">
      <h2 className="text-center">Our Products</h2>
      <div className="row mt-4">
        <div className="col-12">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <Product
                product={product}
                key={product.id}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">{""}</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-4">
          <h5 className="text-center">Selected Products</h5>
          <div className="g-5 mt-3">
            {cart.length !== 0 ? (
              cart.map((item) => <Cart item={item} key={item.id} />)
            ) : (
              <h6 className="text-center">Oops!! Nothing Found</h6>
            )}
          </div>

          <div className="d-grid gap-2 mt-3">
            <button
              className="btn selected-products-button rounded-0"
              type="button"
            >
              Select 1 Ice Cream for Me{" "}
              <FontAwesomeIcon className="ms-2" icon={faArrowsRotate} />
            </button>
            <button
              className="btn selected-products-button rounded-0"
              type="button"
            >
              Select New Ice Creams{" "}
              <FontAwesomeIcon className="ms-2" icon={faCircleCheck} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
