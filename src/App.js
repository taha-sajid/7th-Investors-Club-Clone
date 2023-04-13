import "./App.css";
// import TopNav from "./Components/TopNav"
import React from "react";

// import Header from "./Components/Header";
import Registeration from "./Pages/RegisterForm";
import Login from "./Components/Login";
import AdditionalInfoForm from "./Pages/AdditionalInfoForm";
import FinancialInfoForm from "./Pages/FinancialInfoForm";
import ApplicationCompleted from "./Pages/ApplicationCompleted";
import Buy from "./Pages/Buy";
import Home from "./Pages/Home";
import Premium from "./Pages/Premium";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Sell from "./Pages/Sell";
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
