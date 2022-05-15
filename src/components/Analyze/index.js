import React from "react";
import { PolygonSVG } from "../../assets/RequiredData/Svgs";
import "./Analyze.css";
const index = () => {
  return (
    <>
      <div className="analyze-section">
        <div className="analyze-container">
          <div className="analyze-slogon">
            <i>
              <PolygonSVG />
            </i>
            <p>
              Analyze trends in page views and unique visitors with notes
              explaining any shifts.
            </p>
          </div>
          <div className="analyze-data-container">
            <div className="analyze-sidebar">
              <h4>what's covered?</h4>
              <ul>
                <li className="analyze-sidebar-list">finance overview</li>
                <li className="analyze-sidebar-list">traffic overview</li>
                <li className="analyze-sidebar-list active-analyze">business analysis</li>
                <li className="analyze-sidebar-list">site information</li>
              </ul>
            </div>
            <div className="analyze-info">
              <h2>Business overview</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
