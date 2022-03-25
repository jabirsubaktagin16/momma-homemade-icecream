import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="container my-5" id="services">
      <h2 className="text-center">Services</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
        <div className="col">
          <div className="card h-100 border-0 shadow p-2">
            <div className="text-center">
              <img
                src={require("../../images/free-delivery.png")}
                className="img-fluid w-25"
                alt="..."
              />
            </div>

            <div className="card-body text-center">
              <h5 className="card-title">Free Shipping</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0 shadow p-2">
            <div className="text-center">
              <img
                src={require("../../images/food-delivery.png")}
                className="img-fluid w-25"
                alt="..."
              />
            </div>

            <div className="card-body text-center">
              <h5 className="card-title">Quick Packaging</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0 shadow p-2">
            <div className="text-center">
              <img
                src={require("../../images/cash-back.png")}
                className="img-fluid w-25"
                alt="..."
              />
            </div>

            <div className="card-body text-center">
              <h5 className="card-title">100% Money Back</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0 shadow p-2">
            <div className="text-center">
              <img
                src={require("../../images/fast-time.png")}
                className="img-fluid w-25"
                alt="..."
              />
            </div>

            <div className="card-body text-center">
              <h5 className="card-title">Fast Delivery</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
