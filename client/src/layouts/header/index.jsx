import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png.webp";
import "./index.scss";
import { Menu, Dropdown } from "antd";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  return (
    <div id="header">
      <div className="header-top">
        <div className="container">
          <div className="top">
            <div className="icons">
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-google-plus-g"></i>
            </div>
            <div className="phone">
              <p>
                {" "}
                <i className="fa-solid fa-message"></i> info@docmed.com
              </p>{" "}
              <p>
                {" "}
                <i className="fa-solid fa-phone"></i> 1601-609 6780
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to={"/"}>
              {" "}
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="0">Blog</Menu.Item>
                      <Menu.Item key="1">Single-Blog</Menu.Item>
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <NavLink to={"/blog"}>Blog</NavLink>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="0">Elements</Menu.Item>
                      <Menu.Item key="1">Porfolio</Menu.Item>
                      <Menu.Item key="1">Portfolio details</Menu.Item>
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <NavLink to={"/pages"}>Pages</NavLink>
                </Dropdown>
              </li>
              <li>
                <NavLink to={"/add-solution"}>Add Soliton</NavLink>
              </li>
              <li>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
              </li>
            </ul>
          </nav>
          <div className="btn">
            <i className="fa-solid fa-magnifying-glass"></i>
            <button>Get a Quote</button>
          </div>
        </div>
      </div>
      {navbar && (
        <div className="fixed-header">
          <div className="container">
            <div className="fixed">
              <div className="logo">
                <Link to={"/"}>
                  {" "}
                  <img src={logo} alt="" />
                </Link>
              </div>
              <nav>
                <ul>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/services"}>Services</NavLink>
                  </li>
                  <li>
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item key="0">Blog</Menu.Item>
                          <Menu.Item key="1">Single-Blog</Menu.Item>
                        </Menu>
                      }
                      trigger={["hover"]}
                    >
                      <NavLink to={"/blog"}>Blog</NavLink>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item key="0">Elements</Menu.Item>
                          <Menu.Item key="1">Porfolio</Menu.Item>
                          <Menu.Item key="1">Portfolio details</Menu.Item>
                        </Menu>
                      }
                      trigger={["hover"]}
                    >
                      <NavLink to={"/pages"}>Pages</NavLink>
                    </Dropdown>
                  </li>
                  <li>
                    <NavLink to={"/add-solution"}>Add Soliton</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/wishlist"}>Wishlist</NavLink>
                  </li>
                </ul>
              </nav>
              <div className="btn">
                <i className="fa-solid fa-magnifying-glass"></i>
                <button>Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
