import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { stepSliceAction } from "../store/step-slice";

const SecondStep = () => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");

  const dispatch = useDispatch();

  const handleNextStep = () => {
    const enteredData = {
        email,
        country,
        district
    };

    dispatch(stepSliceAction.changeStep(3));
    dispatch(stepSliceAction.getUserData(enteredData));
  };

  const handlePrevStep = () => {
    dispatch(stepSliceAction.changeStep(1));
  };

  return (
    <div className="second-form">
      <div className="third-input">
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="third-input">
        <TextField
          label="Contry"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="third-input">
        <TextField
          label="District"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div className="second-buttons">
        <Button variant="outlined" color="primary" onClick={handlePrevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNextStep}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
