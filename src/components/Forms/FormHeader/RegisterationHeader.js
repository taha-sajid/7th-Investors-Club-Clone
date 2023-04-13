import React from "react";
import "./RegisterationHeader.css";
import Navbar from "../../Navbar/Navbar";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

function Index({
  heading,
  headerButton,
  stepDescription,
  stepName,
  stepsIndicator,
}) {
  return (
    <>
      <ScrollToTop />
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
            <div className="header-buttons-container">
              {headerButton &&
                headerButton.map((val, index) => {
                  return (
                    <button
                      className={`btn-secondary btn-lg ${
                        index === 0 ? "btn-ghost" : ""
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
            </div>
            {headerButton && (
              <p className="contact-email">
                Having issues? Please contact{" "}
                <span> support@investors.club </span>
              </p>
            )}
          </section>
        </div>
        {/* <AdditionalInfoForm formData={props} /> */}
        {/* <RegisterForm /> */}
      </main>
    </>
  );
}

export default Index;
