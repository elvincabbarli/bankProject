import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../css/login.css'
import { stepSliceAction } from "../store/step-slice";

const FirstStep = () => {
  const dispatch = useDispatch();
  const [faliyyet, setFaliyyet] = useState("");
  const [gelirAyliq, setGelirAyliq] = useState("");
  const [isTecrubesiIl, setIsTecrubesiIl] = useState();
  const [isTecrubesiAy, setIsTecrubesiAy] = useState();
  const [region, setRegion] = useState();
  const [biznesUnvan, setBiznesUnvan] = useState();

  const handleChangeStep = () => {
    const enteredData = {
      faliyyet,
      gelirAyliq,
      isTecrubesiIl,
      isTecrubesiAy,
      region,
      biznesUnvan,
    };

    dispatch(stepSliceAction.changeStep(2));
    dispatch(stepSliceAction.getUserData(enteredData));
  };

  return (
    <div className="first-form">
      <div className="first-input">
        <input
          placeholder="Fəaliyyət Sektoru"
          value={faliyyet}
          onChange={(e) => setFaliyyet(e.target.value)}
        />
      </div>
      <div className="first-input">
        <input
          placeholder="Aylıq Gəliri"
          value={gelirAyliq}
          type="number"
          onChange={(e) => setGelirAyliq(e.target.value)}
        />
      </div>
      <div className="first-input">
        <input
          placeholder="İş Təcrübəsi(il)"
          value={isTecrubesiIl}
          type="number"
          onChange={(e) => setIsTecrubesiIl(e.target.value)}
        />
      </div>
      <div className="first-input">
        <input
          placeholder="İş Təcrübəsi(ay)"
          value={isTecrubesiAy}
          type="number"
          onChange={(e) => setIsTecrubesiAy(e.target.value)}
        />
      </div>
      <div className="first-input">
        <input
          placeholder="Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>
      <div className="first-input">
        <input
          placeholder="Biznes Ünvanı"
          value={biznesUnvan}
          onChange={(e) => setBiznesUnvan(e.target.value)}
        />
      </div>
      <div className="first-button">
        <Button variant="contained" color="primary" onClick={handleChangeStep}>
          Növbəti
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
