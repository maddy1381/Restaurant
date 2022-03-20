import React, { useState } from "react";
import "../assets/styles/formContainer.css";
import { Card, Button, InputGroup, Form } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import {AiOutlineDown} from "react-icons/ai"
import "react-calendar/dist/Calendar.css";
import moment from 'moment';

const FormContainer = (props) => {
  const [datepickerVisible, setdatepickerVisible] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [numOfPeople, setNumOfPeople] = useState(2);
  const [selectedDate, setSelectedDate] = useState(props.selectedDate ?? new Date());

  function _renderCalender() {
      return (
        <div class="calender">
            <Calendar value={selectedDate} onChange={(val) => setSelectedDate(val)} />
        </div>
      );
  }

  return (
    
      <>
        <Form.Label htmlFor="">When would you like to visit the restaurant ?</Form.Label>
        <InputGroup id="datepicker">
            <Form.Control type="text" placeholder="dd/mm/yyyy" value={moment(selectedDate).format('DD/MM/YYYY')}/>
            <InputGroup.Text id="basic-addon2" onClick={() => setdatepickerVisible(!datepickerVisible)}><AiOutlineDown /></InputGroup.Text>
        </InputGroup>

        {datepickerVisible && _renderCalender()}

        <Form.Label htmlFor="">Book a slot</Form.Label>
        
     </>
  );
};

export default FormContainer;
