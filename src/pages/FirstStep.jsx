import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { stepSliceAction } from "../store/step-slice";

const FirstStep = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState();

  const handleChangeStep = () => {
    const enteredData = {
        firstName,
        lastName,
        contactNumber
    };

    dispatch(stepSliceAction.changeStep(2));
    dispatch(stepSliceAction.getUserData(enteredData));
  };


  return (
    <div className="first-form">
      <div className="first-input">
        <TextField
          label="First name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="first-input">
        <TextField
          label="Last name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="first-input">
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </div>
      <div className="first-button">
        <Button variant="contained" color="primary" onClick={handleChangeStep}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
