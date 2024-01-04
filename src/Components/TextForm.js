import React from 'react';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



export default function TextForm(props) {
    const [text,settext] = useState("Prepared by kausik,Enter Text here");
      
    const ChangeHandeler = (event)=>{
        settext(event.target.value)
    }
  return (
    <div className='container1'>
    <div style={{marginTop : '10px'}}>
    
        <Form.Control
          as="textarea"
          value={text?text:"Prepared by kausik:"}
          style={{ height: '300px', width:'800px', margin:'auto', backgroundColor:`${props.mode==="light" ? "white" :"#042743"}`,
          color:`${props.mode==="light" ? "black" : "white"}`}}
          onChange={ChangeHandeler}
        />
    
      <div style={{margin:'5px 60px', backgroundColor:'#F0FFFF', padding:'5px', width:'90vw', borderRadius:'5px'}}>

      <button className='btn btn-primary mx-2'onClick={()=>{
        let newText = text.toUpperCase();
        settext(newText);
      }}>Convert Uppercase</button>

     <button className='btn btn-primary mx-2'onClick={()=>{
        let newText = text.toLowerCase();
        settext(newText);
      }}>Convert LowerCase </button>

      <button className='btn btn-primary'onClick={()=>{
        let newText = "Prepared by kausik";
        settext(newText);
      }}>Clear text</button>



<button className='btn btn-primary mx-2'onClick={()=>{
        let newText = text.replace(/ +/g, " ");
        settext(newText);
      }}>remove spaces</button>

<button className='btn btn-primary mx-1'onClick={()=>{
      // console.log("copied")
       let newText = text;
       navigator.clipboard.writeText(newText);
       settext("text copied")
       
      }}>copy text</button>
      
      </div>
      
    </div>
    
    <div className='container'>
      <div className='first' style={{color:`${props.mode==="light" ? "black" : "white"}`}}>
      <h1>Your Text Summary</h1>
       {/* <p>{text.split(" ").length} and {text.length} characters</p> */}
       <p>{text.replace(/^\s+|\s+$/g, "").split(" ").length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length } Minutes read</p>
      </div>

       <div className='secound' style={{backgroundColor:`${props.mode==="light" ? "white" : "#042743"}`, 
       color:`${props.mode==="light" ? "black" : "white"}`, borderColor:`${props.mode==="light" ? "black" : "white"}`}}>
       <h2>Preview</h2>
       <p>{text}</p>
       </div>

    </div>
    </div>

  )
}

//**************************** */var string = "    This    should  become   something          else   too . "; string = string.replace(/\s+/g, " ");This code replaces a consecutive set of whitespace characters (\s+) by a single white space. Note that a white-space character also includes tab and newlines. Replace \s by a space if you only want to replace spaces.

//If you also want to remove the whitespace at the beginning and end, include:

//string = string.replace(/^\s+|\s+$/g, "");



//*******************************************************/
// In case we want to avoid the replace function with regex,

// We can achieve same result by

// str.split(' ').filter(s => s).join(' ')
// // var str = "    This    should  become   something          else   too . ";
// // result is "This should become something else too ."
// First, split the original string with space, then we will have empty string and words in an array. Second, filter to remain only words, then join all words with a whitespace.