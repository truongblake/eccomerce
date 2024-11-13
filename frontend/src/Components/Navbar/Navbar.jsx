import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/down-chevron.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar border-b-gray border-[1px]">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>The Store</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="group cursor-pointer"
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <hr className="border-t-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
          className="group cursor-pointer"
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "men" ? <hr /> : <hr className="border-t-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
          className="group cursor-pointer"
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "women" ? <hr /> : <hr className="border-t-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          className="group cursor-pointer"
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <hr className="border-t-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button className="hover:bg-slate-200 transition-colors"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="hover:bg-slate-200 transition-colors">Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
