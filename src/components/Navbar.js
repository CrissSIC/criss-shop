import React, { useState } from "react";

import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

import { SidebarCategories } from "./SidebarCategories";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="categories-992-wrapper">
      <div className="categories-992">
        <Link to="#" className="menu-bars">
          <BiMenu onClick={showSidebar} className="menu" />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-categories" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <span>Products categories</span>
              <AiOutlineClose onClick={showSidebar} className="nav-close-btn" />
            </Link>
          </li>
          {SidebarCategories.map((category, index) => {
            return (
              <li key={index} className={category.className}>
                <Link to={category.path} className={category.classNameItems}>
                  <span>{category.title}</span>
                  {category.icon}
                </Link>
                <hr className="nav-hr" />
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={sidebar ? "nav-overlay active" : "nav-overlay"}
        onClick={showSidebar}
      ></div>
    </div>
  );
}

export default Navbar;
