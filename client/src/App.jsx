import React from "react";
import Genaral from "./components/admin/Admin";
import Registerlogin from "./components/Registerlogin";
import Addstock from "./components/admin/Addstock";
import Addpledge from "./components/admin/Addpledge";
import { Routes, Route } from "react-router-dom";
import Header from "./components/admin/Header";
import Showpledge from "./components/admin/Showpledge";
function App() {
  return (
    <div>
      <Registerlogin />
      {/* <Routes>
        <Route path="/*" element={<Registerlogin />} />
        <Route path="/Admin/*" element={<Genaral />}>
         <Route path="Addstock" element={<Addstock />} />
          <Route path="Addpledge" element={<Addpledge />} />
        </Route>

       
      </Routes> */}

      
    </div>
  );
}

export default App;
