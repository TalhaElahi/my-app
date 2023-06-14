// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };
  const toggleMode = (cls) => {
    // console.log(cls);
    if (cls!=="") {
      // console.log('yes');
      removeBodyClasses();
      document.body.classList.add("bg-" + cls);
    }
    else
    {
      // console.log('no');

    }

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtil - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil - LightMode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="textutilsssssssssssss"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About Us"
        />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>

            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text to Analyze"
                mode={mode}
              />
            </Route>

            {/* <About /> */}
          </Switch>
        </div>
      </Router>
      {/* 
<Navbar/>  */}
    </>
  );
}

export default App;
