import "./App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
//import { useState } from "react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} exact />
      <Route path="/register" element={<Register/>}  />
      </Routes>
    
    </BrowserRouter>
      
  );
}

export default App;
