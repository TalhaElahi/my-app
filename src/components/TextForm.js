import React,{useState} from "react";

export default function TextForm(props) {

  let disable=true; 

    const handleUpClick=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        // console.log(newText);
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        // console.log(newText);
        setText(newText);
        props.showAlert("Converted to Lowercase","success");

    }

    const handleClearClick=()=>{
      // console.log("uppercase was clicked"+ text);
      let newText="";
      // console.log(newText);
      setText(newText);
      props.showAlert("Text Cleared","success");

  }
    const handleOnChange=(event)=>{
        // console.log("on changed");
        setText(event.target.value);

    }
    const handleExtraSpaces=()=>{
      console.log("hi i am handle extra spaes");
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces removed","success");

    }

    const handleCopy=()=>{
      // console.log("i m copy");
      // var text =document.getElementById("myBox");
      // text.select();
      // text.setSelectionRange(0,9999);
      // navigator.clipboard.writeText(text.value);
      navigator.clipboard.writeText(text);

      props.showAlert("Text Coppied","success");

    }
    const [text, setText]=useState('Enter Text Here');
    // setText("new Text");
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="form-label">
          My Box
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



    </div>
    <div className="container my-5" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox to preview it here'}</p>


    </div>
    </>
  );
}
