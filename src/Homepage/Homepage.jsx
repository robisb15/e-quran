import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import DaftarSurat from "../Surat/DaftarSurat";
import DetailSurat from "../Surat/DetailSurat";

class Homepage extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Menu />} />
          <Route path="/Surah" element={<DaftarSurat />} />
          <Route path="/Surah/:id" element={<DetailSurat />} />
        </Routes>
      </Router>
    );
  }
}

export default Homepage;
