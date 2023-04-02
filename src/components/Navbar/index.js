import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import {
  NavLogoMobileWhite,
  NavLogoMobileBlue,
  NavLogoLargeScreenWhite,
  NavLogoLargeScreenBlue,
} from "../../assets/RequiredData/Svgs";

const Index = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);  

  function disableBodyScroll() {
    document.getElementsByTagName("body")[0].classList.add("stop-scroll");
    // document.getElementsByName("body").classList.add("blu")
  }
  function enableBodyScroll() {
    document.getElementsByTagName("body")[0].classList.remove("stop-scroll");
  }
  useEffect(() => {
    if (isNavActive) disableBodyScroll();
    else enableBodyScroll();
  }, [isNavActive]);
  const setLogin = (e) => {
    setIsLoginActive((state) => !state);
  };
  return (
    <>
      <nav className={isNavActive ? "navigation nav-active" : "navigation"}>
        <div
          className={isNavActive ? "nav-toggle nav-active" : "nav-toggle"}
          onClick={() => {
            setIsNavActive((prev) => !prev);
            console.log("click");
          }}
        >
          <button className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
          </button>
        </div>
        <div className="nav-content">
          <div className="nav-logo-menu">
            <div className="nav-logo">
              <Link to={"/"}>
                {/* Investors<span>club </span> */}
                {isLoginActive ? (
                  <NavLogoLargeScreenBlue />
                ) : (
                  <NavLogoLargeScreenWhite />
                )}
              </Link>
              <div className="logo-small-screen">
                <Link to={"/"}>
                  {isLoginActive ? (
                    <NavLogoMobileBlue />
                  ) : (
                    <NavLogoMobileWhite />
                  )}
                </Link>
              </div>
            </div>
            <div className="nav-menu">
              <Link
                to={"/buy-online-business"}
                className={
                  isLoginActive
                    ? "visited-link nav-menu-link-black"
                    : "visited-link"
                }
              >
                buy
              </Link>
              <Link
                to={"/sell-your-website"}
                className={
                  isLoginActive
                    ? "visited-link nav-menu-link-black"
                    : "visited-link"
                }
              >
                sell
              </Link>
              <Link to={"/premium"} className="premium ">
                premium
              </Link>
            </div>
          </div>
          <div className="nav-btn">
            <Link to={"/login"}>
              <button
                className={
                  isLoginActive ? "btn-ghost nav-menu-link-black" : "btn-ghost"
                }
                onClick={() => setIsLoginActive((state) => !state)}
              >
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="btn-secondary">create free account</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Index;
