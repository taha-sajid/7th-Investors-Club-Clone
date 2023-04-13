import React from "react";
import "./login.css";
import Navbar from "../Navbar/Navbar";
import { useFormik } from "formik";
import { loginSchema } from "../../Schema/LoginSchema";
import { useSelector } from "react-redux";
import Dashboard from "../../Pages/Dashboard/Dashboard";

const Index = () => {
  const { isLoading } = useSelector((state) => state.auth);
  console.log("isLoading is", isLoading);
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log(values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  return (
    <>
      <Navbar />
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-field">
            <label htmlFor="email">E-mail address</label>

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
          <div className="input-field">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              className="input-fl"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <div className="checkbox-wrapper">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="login-form-buttons">
            <button className="btn-primary" type="submit">
              Login
            </button>
            <button className="">Forgot password</button>
          </div>
          <div className="login-form-footer">
            Don't have an account yet? <span> Click here </span>to create one.
          </div>
        </form>
      </div>
      {/* <Dashboard /> */}
    </>
  );
};

export default Index;
