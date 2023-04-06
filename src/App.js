import "./App.css";
import Header from "./components/Header";
// import TopNav from "./components/TopNav"

import Login from "./components/Login";
import Registeration from "./Pages/RegisterForm";
import AdditionalInfoForm from "./Pages/AdditionalInfoForm";
import FinancialInfoForm from "./Pages/FinancialInfoForm";
import ApplicationCompleted from "./Pages/ApplicationCompleted";
import Buy from "./Pages/Buy";
import Home from "./Pages/Home";
import Premium from "./Pages/Premium";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Sell from "./Pages/Sell";
function App() {
  console.log(`it's working fine`);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/buy" element={<Navigate replace to="/buy" />} /> */}
          <Route path="/buy-online-business" element={<Buy />} />
          <Route path="/sell-your-website" element={<Sell />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
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
