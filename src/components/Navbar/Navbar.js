import React, { useRef } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";

const Navbar = (props) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive__nav");
  };

  return (
    <header className="header">
      <div className="title">
        <h3>Candy Shop</h3>
        <Link className="icon__cart__mobile link-to" to="/cart">
          {props.badge}
        </Link>
      </div>
      <nav ref={navRef}>
        <div className="nav-items">
          <Link to="/" className="link-to" onClick={showNavbar}>
            store
          </Link>

          <button className="nav-btn close__nav_btn" onClick={showNavbar}>
            <CloseIcon />
          </button>
          <Link className="icon__cart link-to" to="/cart" onClick={showNavbar}>
            {props.badge}
          </Link>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <MenuIcon />
      </button>
    </header>
  );
};

export default Navbar;
