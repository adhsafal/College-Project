import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Customize.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

import Hoodie from "../Three/Hoodie";
// import Tshirt2 from '../Three/Tshirt2'
// import Tshirt from '../Three/Tshirt'
// import Login from '../Login/Login';

const CustomizeThree = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [text, setText] = useState("Add to Cart");

  const cartText = () => {
    setText("Added to cart");
  };

  const [size, setSize] = useState();

  //to set on localStorage

  const getLocalItems = () => {
    let order = localStorage.getItem("Orders");

    if (order) {
      return JSON.parse(localStorage.getItem("Orders"));
    } else {
      return [];
    }
  };

  const [items, setItems] = useState(getLocalItems());

  let item = {
    tname: "Hoodie",
    size,
    quantity,
  };

  const addItems = () => {
    setItems([...items, item]);
  };

  //Adding data to local storage

  useEffect(() => {
    localStorage.setItem("Orders", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Navbar />
      <br />
      <section className="container">
        <div className="d-flex row ">
          <div className="sections__left col-md-3">
            <h4 style={{ fontWeight: "bold" }}>Customize it Yourself</h4>
            <h1 style={{ fontWeight: "bold" }}>Hoodie</h1>
            <p style={{ fontWeight: "bold" }}>
              Please select the appropriate size and color you want in your
              T-shirt
            </p>
          </div>
          <div className="sections__middle col-md-6">
            <div
              className="customize__product"
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              {/* <Tshirt /> */}
              <Hoodie />
              {/* <Tshirt2 /> */}
            </div>
          </div>
          <div className="sections__right col-md-3">
            <div className="customize__sizes ">
              <h3 style={{ fontWeight: "bold" }}>Sizes</h3>
              <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => setSize("XS")}>XS</Button>
                <Button onClick={() => setSize("S")}>S</Button>
                <Button onClick={() => setSize("M")}>M</Button>
                <Button onClick={() => setSize("L")}>L</Button>
                <Button onClick={() => setSize("XL")}>XL</Button>
                <Button onClick={() => setSize("XXL")}>XXL</Button>
              </ButtonGroup>
              <h5 style={{ color: "red" }}>{size}</h5>
            </div>
            <div className="customize__quantity">
              <h3 style={{ fontWeight: "bold" }}>Quantity</h3>

              <div className="sizeButton">
                <ButtonGroup variant="text" aria-label="text button group">
                  <Button
                    onClick={decreaseQuantity}
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    <i className="fas fa-minus"></i>
                  </Button>
                  <Button
                    onClick={increaseQuantity}
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                </ButtonGroup>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {quantity}
                </p>
              </div>
              <Link to="/cart">
                <button
                  className="btn btn-outline-primary addButton"
                  /*onClick={cartText}*/ onClick={addItems}
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  {" "}
                  {text}{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomizeThree;
