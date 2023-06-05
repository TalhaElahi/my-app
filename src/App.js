// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
let name = "talha";
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <>
      <Navbar title="textutilsssssssssssss" mode={mode} toggleMode={toggleMode} aboutText="About Us" />
      <div className="container">
        <TextForm heading="Enter the Text to Analyze" mode={mode} />
        <About />
      </div>

      {/* 
<Navbar/>  */}
    </>
  );
}

export default App;
