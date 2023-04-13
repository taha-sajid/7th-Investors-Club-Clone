import React from "react";
import { financialInfo } from "../../assets/RequiredData/FormData";
import FormHeader from "../../Components/Forms/FormHeader/RegisterationHeader";

import FinancialInfoForm from "../../Components/Forms/FinancialInfoForm/FinancialInfoForm";

const index = () => {
  return (
    <>
      <main className="form-header-container">
        <FormHeader {...financialInfo} />
        <form className="additional-info-form-container ">
          <FinancialInfoForm {...financialInfo} />
        </form>
      </main>
    </>
  );
};

export default index;
