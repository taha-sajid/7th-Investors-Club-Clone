import React from "react";
import "./RegisterationHeader.css";
import Navbar from "../../Navbar";
import RegisterForm from "../RegisterForm/Index";
import AdditionalInfoForm from "../AdditionalInfoForm/Index";
import FinancialInfoForm from "../FinancialInfoForm/Index";
function Index(props) {
  const { heading, button, stepDescription, stepName, stepsIndicator } =
    props.headerData;

  return (
    <main className="form-header-container">
      
        <div className="registeration-header-container">
          <Navbar />
          <section className="form-information">
            <h1 className="form-title">{heading}</h1>
            <div className="steps-container">
             
              {stepsIndicator.map((val) => {
                return (
                  <div className="step active">
                    <p>{val}</p>
                  </div>
                );
              })}
            </div>
            <h4 className="step-title">{stepName}</h4>
            <p className="step-description">{stepDescription}</p>
          </section>
        </div>
        {/* <RegisterForm button={button} /> */}
        {/* <AdditionalInfoForm formData={props} /> */}
        <FinancialInfoForm formData={props} />
    </main>
  );
}

export default Index;
