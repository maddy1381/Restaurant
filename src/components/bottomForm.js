import React from "react";
import "../assets/bottomForm.css";
import InputField from "./generic/inputField";
import useSyncState from "./generic/useSyncState";

function BottomForm() {
  const [name, setName] = useSyncState("");
  const [email, setEmail] = useSyncState("");
  return (
    <div className="">
      <h4>Fill in the Details To Book Your Seat</h4>
      <div className="bottom-input-container">
        <div className="single-input-container">
          <label>Name</label>
          <InputField
            inputType="text"
            value={name}
            setValue={setName}
            errorMsg="Incorrect Format"
            isRequired
          />
        </div>
        <div className="single-input-container">
          <label>Email</label>
          <InputField
            inputType="email"
            value={email}
            setValue={setEmail}
            errorMsg="Incorrect Format"
            isRequired
          />
        </div>
        <div className="single-input-container">
          <label>Any Special Demand</label>
          <textarea rows="4" cols="20" />
        </div>
      </div>
      <div className="btn-container">
        <button type="submit" className="submit-btn">
          Book My Table
        </button>
      </div>
    </div>
  );
}

export default BottomForm;
