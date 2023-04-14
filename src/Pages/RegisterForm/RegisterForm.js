import React from "react";
import FormHeader from "../../Components/Forms/FormHeader/RegisterationHeader";
import RegisterForm from "../../Components/Forms/RegisterForm";

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
