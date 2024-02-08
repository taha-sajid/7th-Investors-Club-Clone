import React from "react";
import "./Intro.css";
import { businessInfo } from "../../../../assets/RequiredData/FormData";
import { Link } from "react-router-dom";

import {
  ContentSiteSVG,
  EcommerceSiteSVG,
} from "../../../../assets/RequiredData/Svgs";
const Intro = () => {
  const { heading, description, button } = businessInfo;
  return (
    <div className="intro-container form-container">
      <div className="form-section">
        <p>{description}</p>
        <div className="site-type">
          <Link to={"/sell-your-website/content/step-1"}>
            <div className="card content">
              <ContentSiteSVG />
              <h3>Content Site</h3>
            </div>
          </Link>
          <div className="card e-commerce">
            <EcommerceSiteSVG />
            <h3>E-commerce Site</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
