import React from "react";
import "../assets/formContainer.css";
// import DateView from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import BottomForm from "./bottomForm";
import AboveForm from "./aboveForm";

const FormContainer = () => {
  return (
    <>
      <div className="above-form-container">
        <AboveForm />
      </div>
      <div className="bottom-form-container">
        <BottomForm />
      </div>
    </>
  );
};

export default FormContainer;
