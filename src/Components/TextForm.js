import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  }
  const handleTrimClick = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("WhiteSpaces removed","success");
  }
  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Content Cleared","success");
  }
  const handleCopyText = () =>{
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Content Copied","success");
  }
  return (
    <>
    <div  className = "container" style={{backgroundColor:props.mode === 'dark'?'#042743':'white',color:props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
          style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleTrimClick}>
        Remove White Spaces
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopyText}>
        Copy Text
      </button>
    </div>
    <div className = "container my-2" style={{backgroundColor:props.mode === 'dark'?'#042743':'white', color:props.mode === 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something  in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
