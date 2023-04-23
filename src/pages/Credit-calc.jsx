import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { stepSliceAction } from "../store/step-slice";
import { useDispatch, useSelector } from "react-redux";

const ThirdStep = () => {
  const finalData = useSelector((state) => state.stepReducer.finalData);

  const [city, setCity] = useState("");
  const [landMark, setLandMark] = useState("");
  const [postalCode, setPostalCode] = useState();
  const dispatch = useDispatch();
  const [movementS, setMovements] = useState([]);

  const handlePrevStep = () => {
    dispatch(stepSliceAction.changeStep(3));
  };

  let mebleg = Number(finalData.mebleg);
  let faiz = Number(finalData.faiz) / 1200;
  let muddet = Number(finalData.muddet);
  // let ayliq = (mebleg*faiz)/(1-(1/Math.pow(1+faiz , muddet)))

  const annuity = (mebleg, faiz, muddet) =>
    mebleg * (faiz / (1 - (1 + faiz) ** -muddet));

  const balance_t = (mebleg, faiz, P) => {
    const period_movements = {
      base: mebleg,
    };
    period_movements.interest = mebleg * faiz;
    period_movements.amortization = P - mebleg * faiz;
    period_movements.annuity = P;
    period_movements.final_value =
      Math.round((mebleg - period_movements.amortization) * 100) / 100;

    return period_movements;
  };

  const display_mortgage = (mebleg, faiz, muddet) => {
    const payements = annuity(mebleg, faiz, muddet);
    let movements = balance_t(mebleg, faiz, payements);
    let myArray = [];
    while (movements.final_value > -0.01) {
      // console.log(movements);
      movements = balance_t(movements.final_value, faiz, payements);
      myArray.push(movements);
    }
    setMovements(myArray);
  };

  console.log(movementS);

  const hesablaHandler = () => {
    display_mortgage(mebleg, faiz, muddet);
  };

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
      <h3 style={{ marginTop: "20px", marginBottom: "10px" }}>
        Kredit Kalkulyatoru
      </h3>
      <p>Ayliq Faiz: {finalData.faiz}</p>
      <p>Mebleg: {finalData.mebleg}</p>
      <p>Muddet: {finalData.muddet}</p>
      <Button onClick={hesablaHandler}>HEsabla</Button>
      <div>
        {movementS.map((item) => (
          <>
            <li>{item.base}</li>
            <li>{item.interest}</li>
          </>
        ))}
      </div>
      <div className="third-buttons">
        <Button variant="contained" color="success" onClick={handlePrevStep}>
          Geri
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Növbəti
        </Button>
      </div>
    </div>
  );
};

export default ThirdStep;
