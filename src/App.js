import logo from "./logo.svg";
import "./App.css";

let name = "talha";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>I
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          voluptates vel natus omnis! Tempore error odit nihil voluptatibus ut
          porro similique in, quod, molestiae commodi animi rem doloremque illum
          repellat itaque consequatur provident mollitia?
        </p>
      </div>
    </>
  );
}

export default App;
