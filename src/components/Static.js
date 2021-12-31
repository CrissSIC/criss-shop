import React from "react";

import { Link } from "react-router-dom";

import { BiHeartCircle, BiFace, BiCartAlt } from "react-icons/bi";
import { FaInstagram, FaArrowRight } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

import {
  AiOutlineMail,
  AiOutlineQuestionCircle,
  AiOutlineCopyright,
} from "react-icons/ai";

import Navbar from "./Navbar";
import "../App.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="top-header">
        <Navbar />

        <div className="header-logo">
          <Link to="/">
            <img
              src={require("../assets/logo.png")}
              alt="logo"
              className="logo"
            ></img>
          </Link>
        </div>

        <form className="search-form">
          <input
            className="searchbar"
            defaultValue="Search for a product..."
          ></input>
          <button className="search-btn">
            <img
              src={require("../assets/magnifyingGlass.png")}
              alt="logo"
              className="search-logo"
            ></img>
          </button>
        </form>

        <div className="user-container">
          <ul className="user-links">
            <li className="account">
              <a href="www" className="center-user">
                <BiFace className="color-btn" />
              </a>
              <span className="user-spans">Account</span>
            </li>
            <li className="favorite">
              <a href="www" className="center-user">
                <BiHeartCircle className="color-btn" />
              </a>
              <span className="user-spans">Favorite</span>
            </li>
            <li className="cart">
              <a href="www" className="center-user">
                <BiCartAlt className="color-btn" />
              </a>
              <span className="user-spans">Cart</span>
            </li>
          </ul>
        </div>
      </div>
      <form className="search-form-992">
        <input
          className="searchbar"
          defaultValue="Search for a product..."
        ></input>
        <button className="search-btn">
          <img
            src={require("../assets/magnifyingGlass.png")}
            alt="logo"
            className="search-logo"
          ></img>
        </button>
      </form>
      <div className="bottom-header">
        <ul className="navbar">
          <li className="navbar-links">
            <Link to="/category1" className="navbar-links-anchor">
              Testare
            </Link>
          </li>
          <li className="navbar-links">
            <a href="www" className="navbar-links-anchor">
              Category1
            </a>
          </li>
          <li className="navbar-links">
            <a href="www" className="navbar-links-anchor">
              Category1
            </a>
          </li>
          <li className="navbar-links">
            <a href="www" className="navbar-links-anchor">
              Category1
            </a>
          </li>
          <li className="navbar-links">
            <a href="www" className="navbar-links-anchor">
              Category1
            </a>
          </li>
          <li className="navbar-links">
            <a href="www" className="navbar-links-anchor">
              Category1
            </a>
          </li>
          <li className="navbar-links">
            <a href="www" className="navbar-links-anchor">
              Category1
            </a>
          </li>
          <li className="navbar-links">
            <a href="www" className="navbar-links-anchor">
              Category1
            </a>
          </li>
          <li className="navbar-links">
            <a href="www" className="navbar-links-anchor">
              Category1
            </a>
          </li>
          <li className="navbar-links">
            <a href="www" className="navbar-links-anchor">
              Category1
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr className="section-breaks" />
      {/* TOP FOOTER @ 992px WIDTH */}
      <div className="footer-top-992">
        <div className="footer-top-download">
          <a href="www" className="footer-top-download-anchor">
            <img
              src={require("../assets/google.png")}
              alt="google-store"
              className="google-download"
            ></img>
          </a>
          <a href="www" className="footer-top-download-anchor">
            <img
              src={require("../assets/apple.png")}
              alt="apple-store"
              className="apple-download"
            ></img>
          </a>
        </div>
        <div className="footer-top-social-media-992">
          <a href="www" className="center-logo">
            <FaInstagram className="instagram-logo" />
          </a>
          <a href="www" className="center-logo">
            <ImFacebook2 className="facebook-logo" />
          </a>
        </div>
      </div>
      <div className="footer-support-992">
        <a href="www" className="support-mail">
          <AiOutlineMail className="mail-logo" />
          <span>criss-shop@gmail.com</span>
        </a>
        <a href="www" className="support-questions">
          <AiOutlineQuestionCircle className="questions-logo" />
          <span>Frequent Questions</span>
        </a>
      </div>
      <div className="footer-top">
        <div className="footer-top-download">
          <a href="www" className="footer-top-download-anchor">
            <img
              src={require("../assets/google.png")}
              alt="google-store"
              className="google-download"
            ></img>
          </a>
          <a href="www" className="footer-top-download-anchor">
            <img
              src={require("../assets/apple.png")}
              alt="apple-store"
              className="apple-download"
            ></img>
          </a>
        </div>
        <div className="footer-top-list-container">
          <ul className="footer-top-list">
            <li className="underline-hover">
              <a href="www" className="footer-mobile-list">
                <span>About</span>
                <FaArrowRight className="arrow" />
              </a>
            </li>
            <li className="underline-hover">
              <a href="www" className="footer-mobile-list">
                <span>Blog</span>
                <FaArrowRight className="arrow" />
              </a>
            </li>
            <li className="underline-hover">
              <a href="www" className="footer-mobile-list">
                <span>Contact</span>
                <FaArrowRight className="arrow" />
              </a>
            </li>
            <li className="underline-hover">
              <a href="www" className="footer-mobile-list">
                <span>Marketplace</span>
                <FaArrowRight className="arrow" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-top-social-media">
          <a href="www" className="center-logo">
            <FaInstagram className="instagram-logo" />
          </a>
          <a href="www" className="center-logo">
            <ImFacebook2 className="facebook-logo" />
          </a>
        </div>
      </div>
      <hr className="section-breaks" />
      <div className="footer-mid">
        <h2>Support</h2>
        <div className="footer-mid-support">
          <a href="www" className="support-mail">
            <AiOutlineMail className="mail-logo" />
            <span>criss-shop@gmail.com</span>
          </a>
          <a href="www" className="support-questions">
            <AiOutlineQuestionCircle className="questions-logo" />
            <span>Frequent Questions</span>
          </a>
        </div>
      </div>
      <hr className="section-breaks" />
      <div className="footer-bottom">
        <ul className="footer-bottom-list">
          <li className="underline-hover">
            <a href="www" className="footer-mobile-list">
              <span>Conditions of use</span>
              <FaArrowRight className="arrow" />
            </a>
          </li>
          <li className="underline-hover">
            <a href="www" className="footer-mobile-list">
              <span>Privacy notice</span>
              <FaArrowRight className="arrow" />
            </a>
          </li>
          <li className="underline-hover">
            <a href="www" className="footer-mobile-list">
              <span>Rules</span>
              <FaArrowRight className="arrow" />
            </a>
          </li>
          <li className="underline-hover">
            <a href="www" className="footer-mobile-list">
              <span>Cookies and Ads</span>
              <FaArrowRight className="arrow" />
            </a>
          </li>
        </ul>
        <hr className="section-breaks" />
        <div className="copyright">
          <AiOutlineCopyright className="copyright-logo" /> CrissSIC 2022
        </div>
      </div>
    </footer>
  );
};

export { Header, Footer };
