import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function TextForm() {
    const [text,settext] = useState("Prepared by kausik,Enter Text here");
      
    const ChangeHandeler = (event)=>{
        settext(event.target.value)
    }
  return (
    <div className='container1'>
    <div>
      <FloatingLabel controlId="floatingTextarea2" label="">
        <Form.Control
          as="textarea"
          value={text?text:"Prepared by kausik:"}
          style={{ height: '300px',marginTop:'15px', width:'800px', margin:'auto' }}
          onChange={ChangeHandeler}
        />
      </FloatingLabel>
      <div style={{margin:'auto',marginTop:'5px', backgroundColor:'#F0FFFF', padding:'5px'}}>

      <button className='btn btn-primary mx-2'onClick={()=>{
        let newText = text.toUpperCase();
        settext(newText);
      }}>Convert Uppercase</button>

<button className='btn btn-primary'onClick={()=>{
        let newText = text.toLowerCase();
        settext(newText);
      }}>Convert LowerCase </button>
      
      </div>
      
    </div>
    <div className='container'>
      <div className='first'>
      <h1>Your Text Summary</h1>
       <p>{text.split(" ").length} and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length } Minutes read</p>
      </div>

       <div className='secound'>
       <h2>Preview</h2>
       <p>{text}</p>
       </div>

    </div>
    </div>

  )
}
