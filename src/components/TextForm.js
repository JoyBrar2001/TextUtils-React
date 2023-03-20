import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpperClick = () => {
        console.log("Upper Case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case" , "success");
    }
    
    const handleLowerClick = () => {
        console.log("Lower Case was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case" , "success");
    }

    const handleInverseClick = () => {
        console.log("Inverse Case was clickled " + text);
        let newText = "";

        for (let i = 0; i < text.length; i++) {
            let n = text.charAt(i);
            if (n === n.toUpperCase()) {
                newText += n.toLowerCase();
            }
            else {
                newText += n.toUpperCase();
            }
        }
        console.log(newText);
        setText(newText);props.showAlert("Converted to Inverse Case" , "success");
    }

    const handleExtraSpaces = () => {
        console.log("Handle Extra Spaces was clickled " + text);
        let newText = text.replace(/\s+/g, ' ').trim();

        setText(newText);
        props.showAlert("Extra Spaces Removed" , "success");
    }

    const clearText = () => {
        setText("");
        props.showAlert("Text Cleared" , "success");
    }

    const handleOnChange = (event) => {
        console.log("Handle on Change was clicked");
        setText(event.target.value);
    }

    return (
        <>
            <div className={`containter text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8" />
                </div>
                <button className="btn btn-primary mx-4" onClick={handleUpperClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-4" onClick={handleLowerClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-4" onClick={handleInverseClick}>Convert to Inverse Case</button>
                <button className="btn btn-primary mx-4" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
                <button className="btn btn-primary mx-4" onClick={clearText}>Clear Text</button>
            </div>
            
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes Taken to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter some text to preview it here"}</p>
            </div>
        </>
    )
}
