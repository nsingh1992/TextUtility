import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleTrimClick = () =>{
    let newText = text.trim();
    setText(newText);
  }
  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
  }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
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
    </div>
    <div className = "container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
