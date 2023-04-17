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

  // Check whether current page is a login page or not
  let isLoginPage =
    window.location.href === "https://localhost:3000/login" ||
    window.location.href === "http://localhost:3000/login";

  // This function is for disabling background scrolling when the nav toggle open in small screen
  function disableBodyScroll() {
    document.getElementsByTagName("body")[0].classList.add("stop-scroll");
  }

  // This function is for enabling background scrolling when the nav toggle open in small screen
  function enableBodyScroll() {
    document.getElementsByTagName("body")[0].classList.remove("stop-scroll");
  }
  useEffect(() => {
    if (isNavActive) disableBodyScroll();
    else enableBodyScroll();
  }, [isNavActive]);

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
                {isLoginPage ? (
                  <NavLogoLargeScreenBlue />
                ) : (
                  <NavLogoLargeScreenWhite />
                )}
              </Link>
              <div className="logo-small-screen">
                <Link to={"/"}>
                  {isLoginPage ? <NavLogoMobileBlue /> : <NavLogoMobileWhite />}
                </Link>
              </div>
            </div>
            <div className="nav-menu">
              <Link
                to={"/buy-online-business"}
                className={
                  isLoginPage
                    ? "visited-link nav-menu-link-black"
                    : "visited-link"
                }
              >
                buy
              </Link>
              <Link
                to={"/sell-your-website"}
                className={
                  isLoginPage
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
                  isLoginPage ? "btn-ghost nav-menu-link-black" : "btn-ghost"
                }
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
