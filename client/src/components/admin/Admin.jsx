import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header.jsx";
import "./Genaral.css";
import Addpledge from "./Addpledge.jsx";

export default function Admin() {


  return (
    <>
    
    <Header/>
    <Routes>
        <Route path="/" element={ <Navigate to = "Addpledge"/>} />
        <Route path="Addpledge" element={<Addpledge />} /> 
       
       
      </Routes>
    </>
  );
}
