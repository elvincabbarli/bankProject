import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../store/user-slice";
import MaskedInput from "react-text-mask";
import '../css/login.css'

const Form = () => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [ataAdi, setAtaadi] = useState("");
  const [qeydiyyatUnvan, setQeydiyyat] = useState("");
  const [faktikiUnvan, setFaktiki] = useState("");
  const [dogumTarixi, setTarix] = useState("");
  const [mobil, setMobil] = useState("");
  const [evNom, setEvnom] = useState("");
  const [finKod, setFinKod] = useState("");

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.userReducer.users);

  const handleSubmit = (event) => {
    event.preventDefault();
    const defaultValues = {
      ad,
      soyad,
      ataAdi,
      qeydiyyatUnvan,
      faktikiUnvan,
      dogumTarixi,
      mobil,
      evNom,
      finKod
    };

    dispatch(userSliceAction.addUser(defaultValues));
    window.localStorage.setItem('users' , JSON.stringify([...allUsers , defaultValues]))
  };



  return (   
    <div class="containerr">
    <div class="title">Müştəri Qeydiyyatı</div>
    <div class="content">
      <form onSubmit={handleSubmit}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Ad</span>
            <input placeholder="Ad"
             id="name-input"
             name="name"
             type="text"
             value={ad}
             required
             onChange={(e) => setAd(e.target.value)} />
          </div>
          <div class="input-box">
            <span class="details">Soyad</span>
            <input placeholder="Soyad"
             type="text"
             value={soyad}
             required
             onChange={(e) => setSoyad(e.target.value)} />
          </div>
          <div class="input-box">
            <span class="details">Ata Adı</span>
            <input  placeholder="Ata Adi"
             type="text"
             value={ataAdi}
             onChange={(e) => setAtaadi(e.target.value)} required />
          </div>
          <div class="input-box">
            <span class="details">FIN</span>
            <input  placeholder="FIN"
             type="text"
             value={finKod}
             onChange={(e) => setFinKod(e.target.value)} required />
          </div>
          <div class="input-box">
            <span class="details">Cib Nomresi</span>
            <MaskedInput  mask={["(",/[0-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,]}
             placeholder="Cib Nomresi"
             guide={true}
             value={mobil}
             onChange={(e) => setMobil(e.target.value)} required />
          </div>
          <div class="input-box">
            <span class="details">Ev Nomresi</span>
            <MaskedInput  mask={["(",/[0-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,]}
             placeholder="Ev Nomresi"
             guide={true}
             value={evNom}
             onChange={(e) => setEvnom(e.target.value)} required />
          </div>
          <div class="input-box">
            <span class="details">Faktiki Unvan</span>
            <input
             placeholder="Faktiki Unvan"
             type="text"
             value={faktikiUnvan}
             onChange={(e) => setFaktiki(e.target.value)}
             required
           />
          </div>
          <div class="input-box">
            <span class="details">Qeydiyyat Unvan</span>
            <input
             placeholder="Qeydiyyat Unvan"
             type="text"
             value={qeydiyyatUnvan}
             onChange={(e) => setQeydiyyat(e.target.value)}
             required
           />
          </div>
          <div class="input-box">
            <span class="details">Ad Günü</span>
            <input
           id="date"
           placeholder="Ad Günü"
           type="date"
           value={dogumTarixi}
           onChange={(e) => setTarix(e.target.value)}
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
export default Form;
