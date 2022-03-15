import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Orders"));
    if (items) {
      setItems(items);
    }
  }, []);

  console.log(items);

  const [colors, setColors] = useState([]);

  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem("Colors"));
    if (colors) {
      setColors(colors);
    }
  }, []);

  console.log(colors);

  return (
    <div>
      <Navbar />

      {/* <div className="orders">
                {items.map((item, index) => {
                    <p key={index}>{item}</p>

                })

                }
            </div> */}
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="images/hoodie.png"
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span className="text-muted">Size: </span>M{" "}
                        <span className="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={() => decreaseQuantity()}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <p className="form-control form-control-sm">{quantity}</p>
                      <button
                        className="btn btn-link px-2"
                        onClick={() => increaseQuantity()}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">Nrs. 2800</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <i className="fas fa-trash fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="images/full-sleeve-tshirt.png"
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span className="text-muted">Size: </span>M{" "}
                        <span className="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={() => decreaseQuantity()}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <p className="form-control form-control-sm">{quantity}</p>
                      <button
                        className="btn btn-link px-2"
                        onClick={() => increaseQuantity()}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">Nrs. 2000</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <i className="fas fa-trash fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="images/hoodie.png"
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span className="text-muted">Size: </span>M{" "}
                        <span className="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={() => decreaseQuantity()}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <p className="form-control form-control-sm">{quantity}</p>
                      <button
                        className="btn btn-link px-2"
                        onClick={() => increaseQuantity()}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">Nrs. 2800</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <i className="fas fa-trash fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="images/half-sleeve-tshirt.png"
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span className="text-muted">Size: </span>M{" "}
                        <span className="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={() => decreaseQuantity()}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <p className="form-control form-control-sm">{quantity}</p>
                      <button
                        className="btn btn-link px-2"
                        onClick={() => increaseQuantity()}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">Nrs. 1800</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <i className="fas fa-trash fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill text-start">
                    <input
                      type="text"
                      id="form1"
                      className="form-control form-control-lg text-start"
                    />
                    <label className="form-label" for="form1">
                      Discound code
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg ms-3"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="orders">
                {items.map((item, index) => {
                    <p key={index}>{item}</p>

                })

                }
            </div> */}
    </div>
  );
};

export default Cart;
