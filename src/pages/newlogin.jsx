import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [ataAdi, setAtaadi] = useState("");
  const [qeydiyyatUnvan, setQeydiyyat] = useState("");
  const [faktikiUnvan, setFaktiki] = useState("");
  const [dogumTarixi, setTarix] = useState("");
  const [mobil, setMobil] = useState("");
  const [evNom, setEvnom] = useState("");

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
    };

    let myArray = [];
    myArray = [...myArray, defaultValues];
    window.localStorage.setItem("myData", JSON.stringify(myArray));
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
            label="Qeydiyyat Unvan"
            type="text"
            value={qeydiyyatUnvan}
            onChange={(e) => setQeydiyyat(e.target.value)}
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
            label="Ev Nomresi"
            type="number"
            value={mobil}
            onChange={(e) => setMobil(e.target.value)}
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
            label="Ev Nomresi"
            type="number"
            value={mobil}
            onChange={(e) => setMobil(e.target.value)}
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
