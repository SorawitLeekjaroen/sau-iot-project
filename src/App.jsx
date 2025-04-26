//สร้าง Component rfce,rfc,rafce,rafc
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import HomeUI from "./views/HomeUI";
import LoginUI from "./views/LoginUI";
import AboutUI from "./views/AboutUI";
import ContactUI from "./views/ContactUI";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUI />} />
          <Route path="/about" element={<AboutUI />} />
          <Route path="/contact" element={<ContactUI />} />
          <Route path="/login" element={<LoginUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
