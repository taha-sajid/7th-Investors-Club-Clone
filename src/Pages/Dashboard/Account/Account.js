import React from "react";
import "./Account.css";
import { SlBell } from "react-icons/sl";
const Inbox = () => {
  return (
    <div className="dashboard-content-container-white">
      <div className="dashboard-content-header">
        <h2 className="dashboard-content-heading">Account Information</h2>
        <button className="btn-primary">Change information</button>
      </div>
      <div className="dashboard-content-body">
        <h4>Your personal information</h4>
        <div className="information-list">
          <h5>Name</h5>
          <p>Syed Muhammad Taha</p>
        </div>
        <div className="information-list">
          <h5>Email</h5>
          <p>tahapk58752@gmail.com</p>
        </div>
        <div className="information-list">
          <h5>Phone</h5>
          <p>+923471228231</p>
        </div>
        <div className="information-list">
          <h5>Preferred currency</h5>
          <p>+923471228231</p>
        </div>
        <div className="information-list">
          <h5>User type</h5>
          <p>+923471228231</p>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
