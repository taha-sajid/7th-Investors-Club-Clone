import React from "react";
import "./FinancialInfoForm.css";
const Index = (props) => {
  console.log(props.formData.headerData);
  const { button } = props.formData.headerData;
  return (
    <div className="financial-info-form-container  form-container">
      <div className="form-section">
        <div className="field">
          <div className="form-lbl">
            <p className="form-title">Proof of Funds</p>
            <p className="sublbl">
              Please provide screenshots of bank or PayPal balances totaling at
              least $10,000. (See example) Only your name and the balance must
              be visible. Do not disclose any sensitive information.
            </p>
          </div>
          <div className="input-file">
            <input type="file" />
            <p>Drag and drop up to five files confirming your funds.</p>
          </div>
          <div className="submitted-files">
            <h3>Submitted files:</h3>
            <p>No files uploaded yet.</p>
          </div>
          <div className="uploaded-files">
            <div className="file-name">
              <p>Syed Muhammad Taha MERN Stack.docx</p>
              <p>94.873KB</p>
            </div>
            <div className="delete-button">
              <button>
                <p> x</p>
              </button>
            </div>
          </div>
          <div className="uploaded-files">
            <div className="file-name">
              <p>Syed Muhammad Taha MERN Stack.docx</p>
              <p>94.873KB</p>
            </div>
            <div className="delete-button">
              <button>
                <p> x</p>
              </button>
            </div>
          </div>{" "}
          <div className="uploaded-files">
            <div className="file-name">
              <p>Syed Muhammad Taha MERN Stack.docx</p>
              <p>94.873KB</p>
            </div>
            <div className="delete-button">
              <button>
                <p> x</p>
              </button>
            </div>
          </div>{" "}
          <div className="uploaded-files">
            <div className="file-name">
              <p>Syed Muhammad Taha MERN Stack.docx</p>
              <p>94.873KB</p>
            </div>
            <div className="delete-button">
              <button>
                <p> x</p>
              </button>
            </div>
          </div>
          <p className="notice notice--note">
            Your information will never be shared.
          </p>
        </div>
        <div className="buttons-container">
          {button.map((val, index) => {
            return (
              <button
                className={`${
                  index === 1 ? "btn-primary" : "btn-ghost "
                } btn-lg`}
                key={index}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
