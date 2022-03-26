import {
  faArrowsRotate,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
  removeFromDb,
} from "../../utilities/localStorage";
import Product from "../Product/Product";
import Cart from "./../Cart/Cart";
import RecommendedIceCream from "./../RecommendedIceCream/RecommendedIceCream";
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
    if (newCart.length <= 4) {
      setCart(newCart);
      addToDb(selectedProduct.id);
    } else {
      alert("You Can't Add More than 4 Items");
    }
  };

  const [iceCream, setIceCream] = useState([]);

  const selectRandomIceCream = () => {
    if (cart.length > 0) {
      const newIceCream = [];
      newIceCream.push(cart[Math.floor(Math.random() * cart.length)]);
      setIceCream(newIceCream);
    }
  };

  const chooseNewIceCreams = () => {
    setCart([]);
    setIceCream([]);
    deleteShoppingCart();
  };

  const deleteSingleItem = (id) => {
    setCart(cart.filter((cartItem) => cartItem.id !== id));
    removeFromDb(id);
  };

  const recommendedItemClose = () => setIceCream([]);

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
            className="btn-close text-reset btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-4">
          <h5 className="text-center">Selected Products</h5>
          <div className="g-5 mt-3">
            {cart.length !== 0 ? (
              cart.map((item) => (
                <Cart
                  item={item}
                  key={item.id}
                  deleteSingleItem={deleteSingleItem}
                />
              ))
            ) : (
              <h6 className="text-center">
                Select Ice Creams from our collection
              </h6>
            )}
          </div>
          <div className="my-3">
            {iceCream.map((recommendation) => (
              <RecommendedIceCream
                recommendation={recommendation}
                recommendedItemClose={recommendedItemClose}
                key={recommendation.id}
              />
            ))}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              onClick={selectRandomIceCream}
              className="btn selected-products-button rounded-0"
              type="button"
            >
              Select 1 Ice Cream for Me{" "}
              <FontAwesomeIcon className="ms-2" icon={faArrowsRotate} />
            </button>
            <button
              onClick={chooseNewIceCreams}
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
