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
    dispatch(stepSliceAction.changeStep(3));
  };


  const creditHesabla = () => {
    let mebleg = Number(finalData.mebleg);
    let faiz = Number(finalData.faiz);
    let muddet = Number(finalData.muddet)
    let ayliq = (mebleg*(faiz/1200))/(1-(1/Math.pow(1+faiz/1200 , muddet)))
    let ilkay = mebleg-ayliq;
    console.log(ilkay)
  }

  creditHesabla()



  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredData = {
        city,
        landMark,
        postalCode,
    };
    dispatch(stepSliceAction.getUserData(enteredData));
    dispatch(stepSliceAction.changeStep(5));

  };

  return (
    <div class="third-form">
    <h3 style={{marginTop: '20px' , marginBottom: '10px'}}>Kredit Kalkulyatoru</h3>
      <p>Ayliq Faiz: {finalData.faiz}</p>
      <p>Mebleg: {finalData.mebleg}</p>
      <p>Muddet: {finalData.muddet}</p>
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
