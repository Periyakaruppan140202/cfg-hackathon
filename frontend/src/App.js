import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Excel from "./pages/Excel/Excel";
import Chart2 from "./pages/Chart/chart2";
import Fellow from "./pages/Fellow";
import Chart from "./pages/Chart/chart";
import NavBars from "./components/NavBars";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/excel" element={<Excel />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/chart2" element={<Chart2 />} />
        <Route path="/fellow" element={<Fellow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
