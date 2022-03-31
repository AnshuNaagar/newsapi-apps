import React from "react";
import Navbar from "./components/Js/Navbar";
import Card from "./components/Js/Card";
import Wallstreet from "./components/Js/Wallstreet";
import Business from "./components/Js/Business";
import Login from "./components/Js/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/business" element={<Business />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/wallstreet" element={<Wallstreet />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
