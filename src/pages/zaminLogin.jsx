import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { zaminSliceAction } from "../store/zamin-slice";
import MaskedInput from "react-text-mask";
import '../css/login.css'

const ZaminForm = () => {
  const [adz, setAdz] = useState("");
  const [soyadz, setSoyadz] = useState("");
  const [ataAdiz, setAtaadiz] = useState("");
  const [qeydiyyatUnvanz, setQeydiyyatz] = useState("");
  const [faktikiUnvanz, setFaktikiz] = useState("");
  const [dogumTarixiz, setTarixz] = useState("");
  const [mobilz, setMobilz] = useState("");
  const [evNomz, setEvnomz] = useState("");
  const [finKodz, setFinKodz] = useState("");

  const dispatch = useDispatch();
  const allZamin = useSelector((state) => state.userReducer.zamins);

  const handleSubmit = (event) => {
    event.preventDefault();
    const defaultValues = {
      adz,
      soyadz,
      ataAdiz,
      qeydiyyatUnvanz,
      faktikiUnvanz,
      dogumTarixiz,
      mobilz,
      evNomz,
      finKodz
    };

    dispatch(zaminSliceAction.addZamin(defaultValues));
    window.localStorage.setItem('users' , JSON.stringify([...allZamin , defaultValues]))
  };



  return (   
    <div class="containerr">
    <div class="title">Zamin Qeydiyyatı</div>
    <div class="content">
      <form onSubmit={handleSubmit}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Ad</span>
            <input placeholder="Ad"
             id="name-input"
             name="name"
             type="text"
             value={adz}
             required
             onChange={(e) => setAdz(e.target.value)} />
          </div>
          <div class="input-box">
            <span class="details">Soyad</span>
            <input placeholder="Soyad"
             type="text"
             value={soyadz}
             required
             onChange={(e) => setSoyadz(e.target.value)} />
          </div>
          <div class="input-box">
            <span class="details">Ata Adı</span>
            <input  placeholder="Ata Adi"
             type="text"
             value={ataAdiz}
             onChange={(e) => setAtaadiz(e.target.value)} required />
          </div>
          <div class="input-box">
            <span class="details">FIN</span>
            <input  placeholder="FIN"
             type="text"
             value={finKodz}
             onChange={(e) => setFinKodz(e.target.value)} required />
          </div>
          <div class="input-box">
            <span class="details">Cib Nomresi</span>
            <MaskedInput  mask={["(",/[0-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,]}
             placeholder="Cib Nomresi"
             guide={true}
             value={mobilz}
             onChange={(e) => setMobilz(e.target.value)} required />
          </div>
          <div class="input-box">
            <span class="details">Ev Nomresi</span>
            <MaskedInput  mask={["(",/[0-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,]}
             placeholder="Ev Nomresi"
             guide={true}
             value={evNomz}
             onChange={(e) => setEvnomz(e.target.value)} required />
          </div>
          <div class="input-box">
            <span class="details">Faktiki Unvan</span>
            <input
             placeholder="Faktiki Unvan"
             type="text"
             value={faktikiUnvanz}
             onChange={(e) => setFaktikiz(e.target.value)}
             required
           />
          </div>
          <div class="input-box">
            <span class="details">Qeydiyyat Unvan</span>
            <input
             placeholder="Qeydiyyat Unvan"
             type="text"
             value={qeydiyyatUnvanz}
             onChange={(e) => setQeydiyyatz(e.target.value)}
             required
           />
          </div>
          <div class="input-box">
            <span class="details">Ad Günü</span>
            <input
           id="date"
           placeholder="Ad Günü"
           type="date"
           value={dogumTarixiz}
           onChange={(e) => setTarixz(e.target.value)}
           required />
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Qeydiyyat" />
        </div>
      </form>
    </div>
  </div>


  );
};
export default ZaminForm;
