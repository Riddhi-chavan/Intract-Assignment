import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [isEssentials, setIsEssentials] = useState(true);
  return (
    <div className="bg-[#080808] h-screen text-white">
      <Navbar />
      <div className="h-16"></div>
      <div
        style={{
          backgroundImage: `url(/intract-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-full"
      ></div>
    </div>
  );
}

export default App;
