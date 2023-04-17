import { applicationCompleted } from "../../assets/RequiredData/FormData";
import FormHeader from "../../Components/Forms/FormHeader/RegisterationHeader";
import React from "react";


const index = () => {
  return (
    <>
      <main className="form-header-container ">
        <FormHeader {...applicationCompleted} />
        {/* <form className="additional-info-form-container ">
          <FinancialInfoForm {...financialInfo} />
        </form> */}
      </main>
    </>
  );
};

export default index;
