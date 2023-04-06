import React from "react";
import { financialInfo } from "../../assets/RequiredData/FormData";
import FormHeader from "../../components/Forms/FormHeader";

import FinancialInfoForm from "../../components/Forms/FinancialInfoForm/Index";

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
