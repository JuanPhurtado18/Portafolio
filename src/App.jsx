import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Welcome from "./layouts/welcome";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
    </>
  );
}

export default App;
