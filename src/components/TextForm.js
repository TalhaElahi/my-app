import React,{useState} from "react";

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        // console.log(newText);
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("on changed");
        setText(event.target.value);

    }
    const [text, setText]=useState('Enter Text Here');
    // setText("new Text");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="form-label">
          My Box
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
