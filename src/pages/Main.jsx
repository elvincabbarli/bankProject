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
import { useSelector } from "react-redux";

const Main = () => {
  const [searchedData, setSearchedData] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [isSearch, setIsSearch] = useState(false);


  const allUSers = useSelector((state) => state.userReducer.users);
  console.log(allUSers);

  // setItem("users", JSON.stringify(allUSers));

  const handleSearch = (e) => {
    e.preventDefault();

    if(searchedData.trim().length === 0) {
      return;
    }

    setFilteredData(
      allUSers.filter((item) =>
        item.ad.toLowerCase().includes(searchedData.toLowerCase().trim())
      )
    );

    setIsSearch(true);
  };

  return (
    <div className="main-container">
      <div className="main-inner">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchedData}
            onChange={(e) => setSearchedData(e.target.value)}
          />
          <button>Search</button>
        </form>
        <div className="search-result">
          {isSearch && filteredData.length === 0 && (
            <h1>
              Musteri Qeydiyyati{" "}
              <Link style={{ color: "red" }} to="/new-login">
                Qeydiyyat
              </Link>
            </h1>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {isSearch && filteredData.length > 0 && (
                  <TableHead sx={{ border: 1 }}>
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
                )}
                {isSearch &&
                  filteredData.length > 0 &&
                  filteredData.map((item) => (
                    <TableBody sx={{ border: 1 }}>
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
                          <Link to="/credit">Kredit Yarat</Link>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
