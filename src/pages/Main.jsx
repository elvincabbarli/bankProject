import React, { useState } from "react";
import "../css/main.css";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Main = () => {
  const myData = JSON.parse(localStorage.getItem("myData"));
  const [searchedData, setSearchedData] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredData(
      myData.filter((item) =>
        item.ad.toLowerCase().includes(searchedData.toLowerCase())
      )
    );
  };

  return (
    <div className="main-container">
      <div className="main-inner">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchedData}
            onChange={(e) => setSearchedData(e.target.value)}
          />
          <button>Search</button>
        </form>
        <div className="search-result">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black",
                  padding: "10px",
                  justifyContent: "space-between",
                }}
              >
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Ad:</TableCell>
                        <TableCell align="right">Soyad:</TableCell>
                        <TableCell align="right">Ata Adi</TableCell>
                        <TableCell align="right">Dogum Tarixi</TableCell>
                        <TableCell align="right">Ev Nomresi</TableCell>
                        <TableCell align="right">Cib</TableCell>
                        <TableCell align="right">Faktiki Unvan</TableCell>
                        <TableCell align="right">Qeydiyyat Unvan</TableCell>
                        <TableCell align="right">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        key={item.ad}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.ad}
                        </TableCell>
                        <TableCell align="right">{item.soyad}</TableCell>
                        <TableCell align="right">{item.ataAdi}</TableCell>
                        <TableCell align="right">{item.dogumTarixi}</TableCell>
                        <TableCell align="right">{item.evNom}</TableCell>
                        <TableCell align="right">{item.mobil}</TableCell>
                        <TableCell align="right">{item.faktikiUnvan}</TableCell>
                        <TableCell align="right">
                          {item.qeydiyyatUnvan}
                        </TableCell>
                        <TableCell align="right">
                          <Link>Kredit Yarat</Link>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))
          ) : (
            <h1>
              Musteri Qeydiyyati{" "}
              <Link style={{ color: "red" }} to="/new-login">
                Qeydiyyat
              </Link>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
