import React from "react";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="signup-text">
          <h1>Sign Up to</h1>
          <h2>Our Website</h2>
          <p>
            If you aready have an account <br />
            You can Login here!
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
