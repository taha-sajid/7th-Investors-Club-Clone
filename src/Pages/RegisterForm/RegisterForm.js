import React from "react";
import FormHeader from "../../components/Forms/FormHeader/RegisterationHeader";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

import { register } from "../../assets/RequiredData/FormData";

const index = () => {
  return (
    <>
      <FormHeader {...register} />
      <main className="form-header-container">
        <RegisterForm />
      </main>
    </>
  );
};

export default index;
