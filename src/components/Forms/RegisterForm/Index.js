import React from "react";
import "./RegisterForm.css";
import { useFormik } from "formik";
import { signUpSchema } from "../../../Schema/signUpSchema";
import { Link } from "react-router-dom";

const Index = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phoneNumber: "",
  };
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    //// By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: (values, action) => {
      console.log(values);
      //// to get rid of all the values after submitting the form
      action.resetForm();
    },
  });
  // console.log(isValid);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="register-form-container form-container"
      >
        <div className="form-section">
          <h4>Your primary reason for registering?</h4>
          <div className="buttons-container">
            <button className="btn-secondary btn-lg">I'm looking to buy</button>
            <button className="btn-secondary btn-lg btn-neutral--outline">
              I want to sell
            </button>
          </div>
        </div>
        <div className="form-body form-section">
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              placeholder="Enter Your full, legal, name."
              className="input-fl"
              autoComplete="on"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>
          <di v className="group-field">
            <div className="field">
              <label htmlFor="email">E-mail address</label>
              <p className="sub-lbl">
                Used for account activation and notifications.
              </p>

              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="input-fl"
                autoComplete="on"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <div className="field">
              <label htmlFor="phone">Contact phone number (Optional)</label>
              <p className="sub-lbl">
                Used only for assisting you in your purchases.
              </p>
              <input
                type="text"
                placeholder="e.g. +92 347 1228231"
                className="input-fl"
                autoComplete="off"
                name="phoneNumber"
                id="phone"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </di>
          <div className="field">
            <label htmlFor="password">Password</label>
            <p className="sub-lbl">
              Use at least 8 characters. Don’t use a password that is too
              obvious or contains your public information.
            </p>
            <input
              type="password"
              className="input-fl"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <div className="input-block">
            <label htmlFor="confirm_password" className="input-label">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error">{errors.confirm_password}</p>
            ) : null}
          </div>
          <div className="field checkbox-wrapper terms-and-condition">
            <input
              type="checkbox"
              placeholder="Enter Your full, legal, name."
              className="input-fl"
              id="terms-condition"
            />
            <label htmlFor="terms-condition">
              I understand and agree to the Terms and Conditions . I understand
              this Agreement contains important provisions on using this Website
              and the process of buying and selling a business on the Investors
              Club platform.
            </label>
          </div>
        </div>

        <button
          className={`btn-lg btn-primary ${isValid ? "" : "btn-disabled"}`}
          type="submit"
          disabled={!isValid}
          onClick={() => {}}
        >
          <Link to={"/additional-info"} disabled={!isValid}>
            Next Step
          </Link>
        </button>
      </form>
    </>
  );
};

export default Index;
