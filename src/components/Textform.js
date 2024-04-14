import React, { useState } from 'react'

// const [text,setText]= useState("Enter the Text");


export default function Textform(props) {
    const handleUpclick = () => {
        console.log("Uppercase Was Clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.ShowAlert("Converted to Uppercase" ,"success")
    }
    const handleonchange = (event) => {
        console.log("on Change")
        setText(event.target.value);
    }
    
    const handlelowclick = () => {
        console.log("Lower case was Clicked"+ text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.ShowAlert("Converted to Lowercase" ,"success")
    }
    const handleclwclick = () =>{
        console.log("Lower case was Clicked"+ text);
        let newtext = " ";
        setText(newtext)
        props.ShowAlert("Text is Clear" ,"success")

    }
    const [text, setText] = useState("Enter the Text");





    return (
        <>
            <div className="container">
            <h1>{props.heading}-{text}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
            </div>

            <button className="btn btnprimary mx-1 my-1" onClick={handleUpclick}>Conver to Uppercase</button>
            <button className="btn btnprimary mx-1 my-1" onClick={handlelowclick}>Conver to lowercase</button>
            <button className="btn btnprimary mx-1 my-1" onClick={handleclwclick}>clear The Text</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
         
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}
