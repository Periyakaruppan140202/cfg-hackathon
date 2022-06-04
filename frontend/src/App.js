import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Excel from "./pages/Excel/Excel";
import MainHome from "./pages/MainHome/MainHome";
import Chart from "./pages/Chart/chart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path= "/excel" element= {<Excel/>} />
        <Route path= "/MainHome" element= {<MainHome/>} />
        <Route path= "/chart" element= {<Chart/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
