import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("icecreams.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="container my-5" id="products">
      <h2 className="text-center">Our Products</h2>
      <div className="row mt-4">
        <div className="col-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className="col-4">col-4</div>
      </div>
    </section>
  );
};

export default Products;
