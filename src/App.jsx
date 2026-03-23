import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Home from "./layouts/Home";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
