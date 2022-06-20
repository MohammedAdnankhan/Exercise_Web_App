import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import ExerciseDetail from "../src/pages/ExerciseDetail";
import Navbar from "./pages/Navbar";
import { useState } from "react";

import "./pages/Media.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
