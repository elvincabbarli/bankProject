import { Button } from "@mui/material";
import React, { useState } from "react";
import { stepSliceAction } from "../store/step-slice";
import { useDispatch, useSelector } from "react-redux";
import { zaminSliceAction } from "../store/zamin-slice";
import Swal from "sweetalert2";
import MaskedInput from "react-text-mask";
import { Link } from "react-router-dom";

const ThirdStep = () => {
  const [adz, setAdz] = useState("");
  const [soyadz, setSoyadz] = useState("");
  const [faktikiUnvanz, setFaktikiz] = useState("");
  const [mobilz, setMobilz] = useState("");
  const [finKodz, setFinKodz] = useState("");
  const dispatch = useDispatch();

  const allZamins = useSelector((state) => state.zaminReducer.zamin);

  const handlePrevStep = () => {
    dispatch(stepSliceAction.changeStep(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(stepSliceAction.changeStep(4));
  };

  const sendSubmit = (event) => {
    event.preventDefault();
    const defaultValuesz = {
      adz,
      soyadz,
      faktikiUnvanz,
      mobilz,
      finKodz,
    };

    dispatch(zaminSliceAction.addZamin(defaultValuesz));
    window.localStorage.setItem(
      "zamins",
      JSON.stringify([...allZamins, defaultValuesz])
    );
    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      title: "Uğrulu Əməliyyat!",
      text: "Zamin Bazaya Əlavə Olundu",
      footer: '<a  href="/">Ana Səhifəyə Get</a>',
    });
  };

  return (
    <div class="third-form zamin-form">
      <div className="third-input zamin-input">
        <h3>Zamin Əlavə Et</h3>
      </div>
      <form onSubmit={sendSubmit}>
        <div class="user-details">
          <div class="input-box zamin-inputs">
            <input
              placeholder="Ad"
              id="name-input"
              name="name"
              type="text"
              value={adz}
              required
              onChange={(e) => setAdz(e.target.value)}
            />
          </div>
          <div class="input-box zamin-inputs">
            <input
              placeholder="Soyad"
              type="text"
              value={soyadz}
              required
              onChange={(e) => setSoyadz(e.target.value)}
            />
          </div>
          <div class="input-box zamin-inputs">
            <input
              placeholder="FIN"
              type="text"
              value={finKodz}
              onChange={(e) => setFinKodz(e.target.value)}
              required
            />
          </div>
          <div class="input-box zamin-inputs">
            <MaskedInput
              mask={["(",/[0-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,]}
              placeholder="Cib Nomresi"
              guide={true}
              value={mobilz}
              onChange={(e) => setMobilz(e.target.value)}
              required
            />
          </div>
          <div class="input-box zamin-inputs">
            <input
              placeholder="Faktiki Unvan"
              type="text"
              value={faktikiUnvanz}
              onChange={(e) => setFaktikiz(e.target.value)}
              required
            />
          </div>
        </div>
        <div class="button zamin-form-button">
          <input type="submit" value="Əlavə Et" />
        </div>
      </form>
      <hr />
      <div className="added-zamin">
          <h3>Əlavə Edilmiş Zaminlər</h3>
          {
            allZamins.length > 0 ? <div className="third-input zamin-input">
            {allZamins.map((item) => (
              <li className="zamin-list">
                <div data-label="Ad">{item.adz}</div>
                <div data-label="Soyad">{item.soyadz}</div>
                <div>{item.finKodz}</div>
                <div>{item.mobilz}</div>
                <div>{item.faktikiUnvanz}</div>
                <Link class="col-1"><i class="fa fa-trash" aria-hidden="true"></i></Link>
              </li>
            ))}
          </div>
          : 
          <Link  to="/zamin-add" >Zamin Qeydiyyat</Link>
          }
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
