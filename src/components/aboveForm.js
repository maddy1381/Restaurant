import React from "react";
import "../assets/aboveForm.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AboveForm() {
  const [startDate, setStartDate] = React.useState(new Date());
  //for time
  const [startTime, setStartTime] = React.useState(new Date());
  //for num of people
  const [numOfPeople, setNumOfPeople] = React.useState(2);
  return (
    <>
      <div className="form-container-inputs">
        <div className="date-picker form-input">
          <label>Select a Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            className="date-component input-controller"
          />
        </div>
        <div className="time-picker form-input">
          <label>Select a Time</label>
          <DatePicker
            selected={startTime}
            onChange={(date) => setStartTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="time-component input-controller"
          />
        </div>
        <div className="num-of-people form-input">
          <label>Number of People</label>
          <input
            type="number"
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(e.target.value)}
            className="input-controller"
          />
        </div>
      </div>
      <div className="btn-container">
        <button type="submit" className="submit-btn">
          Check for Availability
        </button>
      </div>
    </>
  );
}

export default AboveForm;
