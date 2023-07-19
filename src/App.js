import "./App.css";
// import TopNav from "./Components/TopNav"
import React from "react";

// import Header from "./Components/Header/Header";
import Registeration from "./Pages/RegisterForm/RegisterForm";
import Login from "./Components/Login/Login";
import AdditionalInfoForm from "./Pages/AdditionalInfoForm/AdditionalInfoForm";
import FinancialInfoForm from "./Pages/FinancialInfoForm/FinancialInfoForm";
import ApplicationCompleted from "./Pages/ApplicationCompleted/ApplicationCompleted";
import Buy from "./Pages/Buy/Buy";
import Home from "./Pages/Home/Home";
import Premium from "./Pages/Premium/Premium";
import Footer from "./Components/Footer/Footer";
import Sell from "./Pages/Sell/Sell";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  // Navigate,
  // useLocation,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  console.log("It's working fine");
  const routes = [
    "/account/offers",
    "/account/inbox",
    "/account/notifications",
    "/account/information",
    "/account/receipts",
    "/account/subscriptions",
  ];
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/buy" element={<Navigate replace to="/buy" />} /> */}
          <Route path="/buy-online-business" element={<Buy />} />
          <Route path="/sell-your-website" element={<Sell />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/login" element={<Login />} />
          {routes.map((route) => {
            return <Route path={route} element={<Dashboard />} />;
          })}
          <Route path="/additional-info" element={<AdditionalInfoForm />} />
          <Route path="/financial-info" element={<FinancialInfoForm />} />
          <Route
            path="/application-completed"
            element={<ApplicationCompleted />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
