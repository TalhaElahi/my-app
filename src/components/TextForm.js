import React,{useState} from "react";

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        // console.log(newText);
        setText(newText);
    }
    const handleLoClick=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        // console.log(newText);
        setText(newText);
    }

    const handleClearClick=()=>{
      // console.log("uppercase was clicked"+ text);
      let newText="";
      // console.log(newText);
      setText(newText);
  }
    const handleOnChange=(event)=>{
        // console.log("on changed");
        setText(event.target.value);

    }
    const handleExtraSpaces=()=>{
      console.log("hi i am handle extra spaes");
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const handleCopy=()=>{
      console.log("i m copy");
      var text =document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }
    const [text, setText]=useState('Enter Text Here');
    // setText("new Text");
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="form-label">
          My Box
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




    </div>
    <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words,{text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  );
}
