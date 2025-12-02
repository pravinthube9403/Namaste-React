import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  
  console.log("header render")
  useEffect(() => {
    console.log("Header UseEffect Called");
  },[btnName]);
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
          </div>
          <div className="nav-item">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact us</Link>
              <li>Cart</li>
              <button
                className="login"
                onClick={() => {
                  btnName === "Login"
                    ? setbtnName("Logout")
                    : setbtnName("Login");
                  // setbtnName((prev)=>(prev==="Login" ? "Logout" : "Login"));
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
