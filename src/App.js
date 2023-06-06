// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let name = "talha";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtil - DarkMode";
    }
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil - LightMode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="textutilsssssssssssss"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About Us"
        />
        <div className="container">
          <Alert alert={alert} />
          {/* <Switch> */}
         
            {/* <Route path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}

            {/* <Route path="/"> */}
              <TextForm
              showAlert={showAlert}
              heading="Enter the Text to Analyze"
              mode={mode}
            />
            {/* </Route> */}

            
            {/* <About /> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
      {/* 
<Navbar/>  */}
    </>
  );
}

export default App;
