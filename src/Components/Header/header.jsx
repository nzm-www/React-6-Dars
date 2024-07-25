import React from "react";
import img from "../../assets/img.jpg";
import "./header.css";

function header() {
  return (
    <div className="headerrr">
      <div className="container">
        <div className="hed">
          <div className="logo">
            <i id="icon" className="fa-brands fa-css3-alt"></i>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-itms">
                <a href="">Home</a>
              </li>
              <li className="nav-itms">
                <a href="">Contact</a>
              </li>
              <li className="nav-itms">
                <a href="">About</a>
              </li>
              <li className="nav-itms">
                <a href="">Phone</a>
              </li>
            </ul>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <input
              type="text"
              name="text"
              class="input"
              placeholder="Write a message"
            />

            <button>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
