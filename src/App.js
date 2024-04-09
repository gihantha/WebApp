import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import FAQ from "./Components/FAQ/FAQ";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" />
          <Route path="/abotus" />
          <Route path="/contactus" />
          <Route path="/careers" />
        </Routes>
        <FAQ />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
