import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stepSliceAction } from "../store/step-slice";
import "../css/login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SummaryStep = () => {
  const finalData = useSelector((state) => state.stepReducer.finalData);
  const creditData = useSelector(
    (state) => state.stepReducer.confirmedCreditData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleConfirm = () => {
    dispatch(stepSliceAction.addCreditData(finalData));
    window.localStorage.setItem(
      "allCreditData",
      JSON.stringify([...creditData, finalData])
    );
    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      title: 'Uğrulu Əməliyyat!',
      text: 'Kredit Müraciətiniz Qeydə Alındı!',
      footer: '<a  href="/">Ana Səhifəyə Get</a>'
    })
  };

  const rejectHandle = () => {
    Swal.fire({
      title: 'Imtina Səbəbiniz Nədir ?',
      input: 'select',
      inputOptions: {
        'faiz': 'Faiz Yüksəkdir',
        'məbləg': 'Məbləğ Aşağıdır',
        'Digər': 'Şəxsi Səbəblər'
      },
      inputPlaceholder: 'Səbəb Qeyd Edin',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Göndər'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Göndərildi!',
          'Bizi Seçdiyiniz üçün Təşəkkür Edirik.',
          'success'
        )
      }
    })
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Xülasə</h2>
      <div className="summary">
        <div>
          <h4>Fəaliyyət sektoru:</h4>
          <span>{finalData.faliyyet}</span>
        </div>
        <div>
          <div>
            <h4>Aylıq gəliri:</h4>
            <p>{finalData.gelirAyliq}</p>
          </div>
          <div>
            <h4>İş təcrübəsi (ay):</h4>
            <p>{finalData.isTecrubesiAy}</p>
          </div>
        </div>
        <div>
          <div>
            <h4>İş təcrübəsi (il):</h4>
            <p>{finalData.isTecrubesiIl}</p>
          </div>
          <div>
            <h4>Region:</h4>
            <p>{finalData.region}</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Biznes ünvanı:</h4>
            <p>{finalData.biznesUnvan}</p>
          </div>
          <div>
            <h4>Valyuta:</h4>
            <p>{finalData.valyuta}</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Biznes kreditin məqsədi:</h4>
            <p>{finalData.meqsed}</p>
          </div>
          <div>
            <h4>Məbləğ:</h4>
            <p>{finalData.mebleg}</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Müddət:</h4>
            <p>{finalData.muddet}</p>
          </div>
          <div>
            <h4>Faiz:</h4>
            <p>{finalData.faiz}</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        <Button onClick={handleConfirm} color="info" variant="contained">
          Təsdiq et
        </Button>
        <Button color="error" onClick={rejectHandle} variant="contained">
          İmtina et
        </Button>
      </div>
    </div>
  );
};

export default SummaryStep;
