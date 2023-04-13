import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <main className="dashboard-container">
        <header className="dashboard-header">
          <div className="account-heading">
            <h1> My account</h1>
          </div>
          <div className="account-type">
            I'm a <span> buyer</span>
          </div>
        </header>
        <section className="dashboard-body">
          <div className="dashboard-sidebar">
            <ul className="dashboard-sidebar-list">
              <li className="dashboard-sidebar-list ">
                <Link to={"/account/offers"} className="active">Offers</Link>
              </li>
              <li className="dashboard-sidebar-list">
                <Link to={"/account/inbox"}>Inbox</Link>
              </li>
              <li className="dashboard-sidebar-list">
                <Link to={"/account/notifications"}>Notifications</Link>
              </li>
              <li className="dashboard-sidebar-list">
                <Link to={"/account/information"}>Account</Link>
              </li>
              <li className="dashboard-sidebar-list">
                <Link to={"/account/reciepts"}>Receipts</Link>
              </li>
              <li className="dashboard-sidebar-list">
                <Link to={"/account/subscription"}>Subscription</Link>
              </li>
            </ul>
          </div>
          <div className="dashboard-content">
            <h2 className="dashboard-content-heading">Offers</h2>
            <div className="dashboard-content-body">
              <p>You don't have any offers yet</p>
              <button className="btn-primary">Browse listings here</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
