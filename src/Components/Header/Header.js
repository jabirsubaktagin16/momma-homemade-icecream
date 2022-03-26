import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={require("../../images/logo.png")}
              alt=""
              width="60"
              height="60"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="shopping-cart"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container my-5" id="top-banner">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 order-last order-lg-first">
            <h6>Sweet fun, full of milk.</h6>
            <h1>
              Feel Inside cold with our delicious{" "}
              <span className="pink-text">ice-cream.</span>
            </h1>
            <p>
              Ice-cream is one of the most popular desserts. It is a frozen
              dessert made out of milk and cream generally and come in many
              flavours. Though children love ice creams the most, these days ice
              creams are made for all age-groups. There are ice creams even for
              diabetics and heart patients.
            </p>
            <div className="d-grid gap-2 d-md-block">
              <button className="momma-button">Explore Now</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={require("../../images/icecream-top.gif")}
              className="img-fluid w-100"
              alt="..."
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
