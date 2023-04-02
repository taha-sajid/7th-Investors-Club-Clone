import React from "react";
import "./registeration.css";
import RegisterationHeader from "../../components/Forms/FormHeader";
import {
  register,
  additionalInfo,
  financialInfo,
  applicationCompleted,
} from "../../assets/RequiredData/FormData";

const index = () => {
  return (
    <>
      <RegisterationHeader headerData={financialInfo} />
    </>
  );
};

export default index;
