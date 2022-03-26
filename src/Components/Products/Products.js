import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/localStorage";
import Product from "../Product/Product";
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
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel" className="text-center">
            Selected Products
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.map((item) => (
            <li>{item.name}</li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
