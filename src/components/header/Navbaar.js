import React from "react";
import "./navbaar.css";

function Navbaar() {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src="./amazon_PNG25.png" alt="" />
          </div>
          <div className="nav_Searchbaar">
            <input type="text" />
            <div className="search_icon">
              
            </div>
          </div>
        </div>
        <div className="right"></div>
      </nav>
    </header>
  );
}

export default Navbaar;
