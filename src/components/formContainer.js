import React from "react";
import "../assets/formContainer.css";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormContainer = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <div className="form-container">
      <div className="date-picker">
        <DateView
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          
        />
      </div>
    </div>
  );
};

export default FormContainer;
