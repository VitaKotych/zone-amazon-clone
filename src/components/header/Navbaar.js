import React from "react";
import "./navbaar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material-next/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";

function Navbaar() {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src="./amazon_PNG25.png" alt="" />
          </div>
          <div className="nav_searchbaar">
            <input type="text" />
            <div className="search_icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="./login">signin</NavLink>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon id="icon"/>
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avatar"/>
        </div>
      </nav>
    </header>
  );
}

export default Navbaar;
