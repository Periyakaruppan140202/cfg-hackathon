import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Excel from "./pages/Excel/Excel";
import Chart2 from "./pages/Chart/chart2";
import Fellow from "./pages/Fellow";
import Chart from "./pages/Chart/chart";
import Chatbot from "./pages/ChatBot/Chatbot";
import NavBars from "./components/NavBars";
import Chart4 from "./pages/Chart/chart4";
import Chart3 from "./pages/Chart/chart3";
import Form from "./pages/Form/Form";
import FellowAnalysis from "./pages/FellowAnalysis/Analysis";
// import MainHome from "./pages/MainHome/MainHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mainhome/:id" element={<MainHome />} /> */}
        {/* <Route path="/mainhome" element={<MainHome />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/excel" element={<Excel />} />
        {/* <Route path="/MainHome" element={<MainHome />} /> */}
        <Route path="/chart1" element={<Chart />} />
        <Route path="/chart2" element={<Chart2 />} />
        <Route path="/chart3" element={<Chart3 />} />
        <Route path="/chart4" element={<Chart4 />} />
        <Route path="/fellow" element={<Fellow />} />
        <Route path="/form" element={<Form />} />
        <Route path="/fellowanalysis" element={<FellowAnalysis />} />
        <Route path="/form" element={<Form />} />
        <Route path="/upload" element={<Excel />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
