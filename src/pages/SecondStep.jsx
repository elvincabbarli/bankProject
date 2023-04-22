import { Button, FormControlLabel, Radio, RadioGroup  } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { stepSliceAction } from "../store/step-slice";


const SecondStep = () => {
  const [valyuta, setValyuta] = useState("");
  const [meqsed, setMeqsed] = useState("");
  const [mebleg, setMebleg] = useState("");
  const [muddet, setMuddet ] = useState("");
  const [faiz, setFaiz ] = useState("");

  console.log(valyuta)

  const dispatch = useDispatch();

  const handleNextStep = () => {
    const enteredData = {
        valyuta,
        meqsed,
        mebleg,
        muddet,
        faiz
    };

    dispatch(stepSliceAction.changeStep(3));
    dispatch(stepSliceAction.getUserData(enteredData));
  };

  const handlePrevStep = () => {
    dispatch(stepSliceAction.changeStep(1));
  };

  return (
    <div className="second-form">
      <div style={{marginTop: '15px'}} className="third-input">
        <h3>Valyuta</h3>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            mt
          >
            <FormControlLabel value="AZN" onChange={(e) => setValyuta(e.target.value)} control={<Radio />} label="AZN" />
            <FormControlLabel value="USD" onChange={(e) => setValyuta(e.target.value)}  control={<Radio />} label="USD" />
            <FormControlLabel value="TRY" onChange={(e) => setValyuta(e.target.value)}  control={<Radio />} label="TRY" />
            <FormControlLabel value="RUBL" onChange={(e) => setValyuta(e.target.value)}  control={<Radio />} label="RUBL" />
          </RadioGroup>
      </div>
      <div className="third-input">
        <input
        className="step-input"
          placeholder="Kredit Meqsedi"
          value={meqsed}
          type="text"
          onChange={(e) => setMeqsed(e.target.value)}
        />
      </div>
      <div className="third-input">
        <input
        className="step-input"
          placeholder="Məbləğ"
          value={mebleg}
          type="number"
          onChange={(e) => setMebleg(e.target.value)}
        />
      </div>
      <div className="third-input">
        <input
        className="step-input"
          placeholder="Müddət"
          value={muddet}
          type="number"
          onChange={(e) => setMuddet(e.target.value)}
        />
      </div>
      <div className="third-input">
        <input
        className="step-input"
          placeholder="Faiz"
          value={faiz}
          type="number"
          onChange={(e) => setFaiz(e.target.value)}
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
