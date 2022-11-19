import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyJobs from "./components/MyJobs";
import MyPayment from "./components/MyPayment";
import MyOfferletter from "./components/MyOfferletter";
import MyCertificate from "./components/MyCertificate";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/my-jobs" element={<MyJobs />} />

        <Route path="/my-payment" element={<MyPayment />} />

        <Route path="/my-offerletter" element={<MyOfferletter />} />

        <Route path="/my-certificate" element={<MyCertificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
