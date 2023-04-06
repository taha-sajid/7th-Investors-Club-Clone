import React from "react";
import FormHeader from "../../components/Forms/FormHeader";
import AdditionalInfoForm from "../../components/Forms/AdditionalInfoForm/Index";
import "../../components/Forms/AdditionalInfoForm/AdditionalInfoForm.css";
import { additionalInfo } from "../../assets/RequiredData/FormData";

const index = () => {
  return (
    <>
      <main className="form-header-container form-background">
        <FormHeader {...additionalInfo} />
        <form className="additional-info-form-container form-top ">
          <AdditionalInfoForm {...additionalInfo} />
        </form>
      </main>
    </>
  );
};

export default index;
