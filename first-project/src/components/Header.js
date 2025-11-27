import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
          </div>
          <div className="nav-item">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Cart</li>
              <button
                className="login"
                onClick={() => {
                  setbtnName((prev)=>(prev==="Login" ? "Logout" : "Login"));
                }}
              >
                {btnName}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
