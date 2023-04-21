import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../store/user-slice";
import MaskedInput from "react-text-mask";

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
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="row">
        <Grid item>
          <TextField
            label="Adi"
            id="name-input"
            name="name"
            type="text"
            value={ad}
            onChange={(e) => setAd(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Soyadi"
            type="text"
            value={soyad}
            onChange={(e) => setSoyad(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" justify="center" direction="row">
        <Grid item>
          <TextField
            label="Ata Adi"
            type="text"
            value={ataAdi}
            onChange={(e) => setAtaadi(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            label="FIN"
            type="number"
            value={finKod}
            onChange={(e) => setFinKod(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" justify="center" direction="row">
        <Grid item>
          <TextField
            label="Cib Nomresi"
            type="number"
            value={mobil}
            onChange={(e) => setMobil(e.target.value)}
          />
        </Grid>
        <Grid item>
          <MaskedInput
            mask={[
              "(",
              /[0-9]/,
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
            placeholder="Ev Nomresi"
            guide={true}
            value={evNom}
            onChange={(e) => setEvnom(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" justify="center" direction="row">
        <Grid item>
          <TextField
            label="Faktiki Unvan"
            type="text"
            value={faktikiUnvan}
            onChange={(e) => setFaktiki(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Qeydiyyat Unvan"
            type="text"
            value={qeydiyyatUnvan}
            onChange={(e) => setQeydiyyat(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" justify="center" direction="row">
        <TextField
          id="date"
          label="Birthday"
          type="date"
          value={dogumTarixi}
          onChange={(e) => setTarix(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;
