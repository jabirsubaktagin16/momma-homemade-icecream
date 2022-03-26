import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="container my-5" id="faq">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 col-md-6">
          <img
            src={require("../../images/faq.png")}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-12 col-md-6">
          <div
            className="accordion accordion-flush bg-transparent"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How React Works?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    React implements a virtual DOM that is basically a DOM tree
                    representation in JavaScript. It will use the virtual
                    representation of DOM when it needs to read or write to the
                    DOM. The Virtual DOM will try to find the most efficient way
                    to update the browser's DOM.
                    <br />
                    React elements are low in cost than browser elements and are
                    plain objects. DOM of React takes care of updating the DOM
                    to match the React elements. The main reason for this is
                    that JavaScript is very fast and it's worth keeping a DOM
                    tree in it to speed up its manipulation.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Write down differences between Props and State.
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <table className="table text-center bg-transparent">
                    <thead>
                      <tr>
                        <th scope="col">Props</th>
                        <th scope="col">State</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Read-Only</td>
                        <td>Can be asynchronous</td>
                      </tr>
                      <tr>
                        <td>Immutable</td>
                        <td>Mutable</td>
                      </tr>
                      <tr>
                        <td>
                          Allow you to pass data from one component to other
                          components as an argument
                        </td>
                        <td>Holds information about the components</td>
                      </tr>
                      <tr>
                        <td>Are used to communicate between components</td>
                        <td>
                          Can be used for rendering dynamic changes with the
                          component
                        </td>
                      </tr>
                      <tr>
                        <td>Can be accessed by the child component</td>
                        <td>Cannot be accessed by child components</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How useState works?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    useState is a variable that can be a string or a number or a
                    boolean or an object or an array and so on. It returns an
                    array with 2 elements. Here, first element is the current
                    value of the state and other one is state setter function.
                    Value of the new state depends on the previous state value.
                    A function can be passed to the setter function. useState
                    make sure to spread the state variable and then call the
                    setter function while dealing with object and array.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
