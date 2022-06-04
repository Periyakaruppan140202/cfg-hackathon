import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Excel from "./pages/Excel/Excel";
import Chart2 from "./pages/Chart/chart2";
import Chart4 from "./pages/Chart/chart4";
import Chart3 from "./pages/Chart/chart3"
import Chart from "./pages/Chart/chart";
import Form from "./pages/Form/Form"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path= "/excel" element= {<Excel/>} />
        <Route path= "/chart" element= {<Chart/>} />
        <Route path= "/chart2" element= {<Chart2/>} />
        <Route path= "/chart3" element= {<Chart3/>} />
        <Route path="/form" element = {<Form/>}/>
        <Route path= "/chart4" element= {<Chart4/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
