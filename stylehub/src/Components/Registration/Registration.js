import { fontWeight } from "@mui/system";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

class Registration extends Component {
  state = {
    credentials: { username: "", password: "" },
  };

  register = (event) => {
    fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.token);
      })
      .catch((error) => console.error(error));
  };

  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="login row">
          <div className="login__text col-lg-3">
            <Logo />
            <h1>Sign Up to Our Website</h1>
            <br />
            <p style={{ fontSize: "1.1em", fontWeight: "bolder" }}>
              If you already have an account.
              <br />
              You can{" "}
              {
                <Link
                  to="/login"
                  className="underlineHover"
                  style={{
                    fontSize: "1.3em",
                    fontWeight: "bolder",
                    color: "#26b7ff",
                  }}
                >
                  Login here !
                </Link>
              }
            </p>
          </div>
          <div className="col-lg-7">
            <div class="wrapper fadeInDown d-flex" style={{ marginTop: "0" }}>
              <h1>Sign Up</h1>
              <br />
              <div id="formContent">
                <input
                  type="text"
                  id="email"
                  className="fadeIn second"
                  name="email"
                  placeholder="Enter Email"
                  style={{ marginTop: "1em" }}
                />
                <input
                  type="text"
                  id="uname"
                  className="fadeIn second"
                  name="username"
                  placeholder="Create User name"
                  onChange={this.inputChanged}
                />
                <input
                  type="text"
                  id="number"
                  className="fadeIn second"
                  name="number"
                  placeholder="Phn. number"
                />
                <input
                  type="text"
                  id="password"
                  className="fadeIn third"
                  name="password"
                  placeholder="Password"
                  onChange={this.inputChanged}
                />
                <input
                  type="text"
                  id="password"
                  className="fadeIn third"
                  name="login"
                  placeholder="Confirm password"
                />
                <input
                  type="submit"
                  className="fadeIn fourth"
                  value="Register"
                  style={{ margin: "1em ", fontWeight: "bolder" }}
                  onClick={this.register}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Registration;
