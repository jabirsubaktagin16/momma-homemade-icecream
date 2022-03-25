import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={require("../../images/logo.png")}
              alt=""
              width="70"
              height="70"
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
                <a className="nav-link">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container" id="top-banner">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 order-last order-lg-first">
            <h6>Sweet fun, full of milk.</h6>
            <h1>
              Feel Inside cold with our delicious{" "}
              <span className="pink-text">ice-cream.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto officia, perferendis, commodi temporibus quo laudantium
              ab eveniet natus est incidunt, odit accusantium magni vitae!
              Doloremque at nisi tempore tempora hic!
            </p>
            <div className="d-grid gap-2 d-md-block">
              <button>Explore Now</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={require("../../images/icecream-top.png")}
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
