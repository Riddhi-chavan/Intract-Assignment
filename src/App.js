import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Essentials from "./components/Essentials";
import Roadmap from "./components/Roadmap";

function App() {
  const [isEssentials, setIsEssentials] = useState(true);
  return (
    <>
      <Navbar />
      <Essentials />
    </>
  );
}

export default App;
