import React, { useState } from "react";
import { Menu } from "@material-ui/icons";
import "./movie css/nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="nav">
        <h3>raenMoviesapp</h3>
        <ul className="nav-flex">
          <li>Home</li>
          <li>Movies</li>
          <li>Tv shows</li>
          <li>Trending</li>
          <li>Search</li>
        </ul>
        <div>
          <Menu
            style={{ cursor: "pointer" }}
            onClick={() => handleToggle()}
          ></Menu>
        </div>
      </nav>
      <div className="mobile-nav">
        {open ? (
          <div className="menu-dropdown">
            <ul className="nav-flex-2">
              <li>Home</li>
              <li>Movies</li>
              <li>Tv shows</li>
              <li>Trending</li>
              <li>Search</li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Nav;
