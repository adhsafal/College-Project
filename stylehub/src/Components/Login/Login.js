import React from "react";
import "./Login.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login row">
        <div className="login__text col-lg-3">
          <Logo />
          <h1>Sign in to Our Website</h1>
          <br />
          <p style={{ fontSize: "1.1em", fontWeight: "bolder" }}>
            If you don't have an account.
            <br />
            You can{" "}
            {
              <Link
                to="/registration"
                className="underlineHover"
                style={{
                  fontSize: "1.3em",
                  fontWeight: "bolder",
                  color: "#26b7ff",
                }}
              >
                Register here !
              </Link>
            }
          </p>
        </div>
        <div className="col-lg-7">
          <div class="wrapper fadeInDown">
            <h1>Sign In</h1>
            <br />
            <div id="formContent">
              <div className="fadeIn first">
                <AccountCircleIcon style={{ fontSize: "3em" }} />
              </div>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="login"
                required
              />
              <input
                type="text"
                id="password"
                className="fadeIn third"
                name="login"
                placeholder="password"
              />
              <input
                type="submit"
                className="fadeIn fourth"
                value="Log In"
                style={{ marginTop: "3em", fontWeight: "bolder" }}
              />
              <div id="formFooter">
                <a
                  className="underlineHover"
                  href="#"
                  style={{
                    color: "black",
                    fontSize: "1.1em",
                    fontWeight: "bolder",
                  }}
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
