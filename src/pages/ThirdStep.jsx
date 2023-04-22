import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { stepSliceAction } from "../store/step-slice";
import { useDispatch, useSelector } from "react-redux";

const ThirdStep = () => {
    const finalData = useSelector(state => state.stepReducer.finalData);

    const [city,setCity] = useState("");
    const [landMark,setLandMark] = useState("");
    const [postalCode,setPostalCode] = useState();
  const dispatch = useDispatch();

  const handlePrevStep = () => {
    dispatch(stepSliceAction.changeStep(2));
  };

  console.log(finalData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredData = {
        city,
        landMark,
        postalCode,
    };
    
    dispatch(stepSliceAction.getUserData(enteredData));
  };

  return (
    <div class="third-form">
      <div className="third-input">
        <TextField
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="third-input">
        <TextField
          label="LandMark"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={landMark}
          onChange={(e) => setLandMark(e.target.value)}
        />
      </div>
      <div className="third-input">
        <TextField
          label="Postal Code"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>
      <div className="third-buttons">
        <Button variant="outlined" color="primary" onClick={handlePrevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ThirdStep;
