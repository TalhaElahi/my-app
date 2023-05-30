// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
let name = "talha";
function App() {
  return (
    <>
    <Navbar title="textutilsssssssssssss" aboutText="About Us"/>
<div className="container">
<TextForm heading="Enter the Text to Analyze"/>
<About/>

</div>

    {/* 
<Navbar/>  */}
   </>
  );
}

export default App;
