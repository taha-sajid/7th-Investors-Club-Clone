import "./App.css";
// import TopNav from "./Components/TopNav"
import React from "react";

// import Header from "./Components/Header";
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
  // Navigate,
  // useLocation,
} from "react-router-dom";
function App() {
  console.log("It's working fine");
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
